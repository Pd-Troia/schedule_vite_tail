import {createContext, useState} from 'react';
import { RegisterForm } from '../form/RegisterForm';
import { useNavigate } from 'react-router-dom';
import { ServerMessage } from '../form/ServerMessage';
import { object } from 'yup';

export interface IRegisterProps {
}
export interface IRegisterContext {
    registerMember: (data: object) => void
    serverMessage: string
    setServerMessage: (msg:string) => void
    fetching: boolean
}
export const RegisterContext = createContext<IRegisterContext>({
    registerMember: (data: object) => {console.log("Erro no context")},
    serverMessage: '',
    setServerMessage: (msg:string) => {console.log("Erro no context")},
    fetching: false,
}) 

export function Register (props: IRegisterProps) {
    const navigate = useNavigate()  
    const [fetching,setFetching] = useState<boolean>(false)
    const [serverMessage,setServerMessage] = useState<string>("")    
    //Update data from form
    const registerMember = (data:object) => {
    setFetching(true)
    console.log("enviando dados ao servidor")   
    fetch(`${import.meta.env.VITE_REACT_API_AUTH}/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(async(res) => data = {body: await res.json(),status: res.status})
        .then((data) => {            
            if(data.status == 200){
                setFetching(false)
                navigate('/')
            }else{                
                setServerMessage(data.body.msg)
                setFetching(false)
            }
        })
        .catch((err) => {
            setFetching(false)
            setServerMessage("Ocorreu um erro no servidor")
            console.log(err)
        })             
    } 
  // validators
  const regexName = new RegExp("^[A-ZÀ-ÖØ-Ý][a-zà-öø-ý]*(\s[A-ZÀ-ÖØ-Ý][a-zà-öø-ý]*)*$")
  const regexEmail = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")
  const regexPassword = new RegExp("^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,15}$")
  
  const objectContext=  {registerMember,serverMessage,setServerMessage,fetching}
  return (
      <div className="flex h-full w-full items-center justify-center bg-greybg p-32">          
          <RegisterContext.Provider value={objectContext}>
              <RegisterForm
                  regexPassword={regexPassword}
                  regexName={regexName}
                  regexEmail={regexEmail}
              />
          </RegisterContext.Provider>
      </div>
  )
}
