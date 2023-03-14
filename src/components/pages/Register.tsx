import {createContext} from 'react';
import { RegisterForm } from '../form/RegisterForm';
import { useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';

export interface IRegisterProps {
}

export const RegisterContext = createContext<Function>(()=>{}) 

export function Register (props: IRegisterProps) {
    const navigate = useNavigate()  
        
    //Update data from form
    const registerMember = (data:object) => {
    console.log("enviando dados ao servidor")   
      fetch(`${import.meta.env.VITE_REACT_API_AUTH}/auth/register`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
      })
          .then((res) => res.json())
          .then((data) => {
              console.log(data)
              navigate('/')
          })
          .catch((err) => console.log(err))             
    } 
  // validators
  const regexName = new RegExp("^[A-ZÀ-ÖØ-Ý][a-zà-öø-ý]*(\s[A-ZÀ-ÖØ-Ý][a-zà-öø-ý]*)*$")
  const regexEmail = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")
  const regexPassword = new RegExp("^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,15}$")
  
  
  return (
      <div className="flex h-full w-full items-center justify-center bg-greybg p-32">
          <RegisterContext.Provider value={registerMember}>
              <RegisterForm
                  regexPassword={regexPassword}
                  regexName={regexName}
                  regexEmail={regexEmail}
              />
          </RegisterContext.Provider>
      </div>
  )
}
