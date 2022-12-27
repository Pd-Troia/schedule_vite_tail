import {createContext} from 'react';
import { RegisterForm } from '../form/RegisterForm';
import { SubmitHandler } from 'react-hook-form/dist/types';
import { useNavigate } from 'react-router-dom';

export interface IRegisterProps {
}

export const RegisterContext = createContext<Function>(()=>{console.log("maria")})
export function Register (props: IRegisterProps) {
  const navigate = useNavigate()  
  const registerMember = (data:object) => {
    console.log("enviando dados ao servidor")  
    console.log(data) 
    navigate("/")
    return 
  } 
  // validators
  const regexName = new RegExp("^(?![ ])(?!.*[ ]{2})((?:e|da|do|das|dos|de|d'|D'|la|las|el|los)\s*?|(?:[A-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð'][^\s]*\s*?)(?!.*[ ]$))+$")
  const regexEmail = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")
  const regexPassword = new RegExp("^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,15}$")
  
  // validators
  return (
    
    <div className='bg-greybg flex justify-center items-center w-full h-full p-32'>
      <RegisterContext.Provider value={registerMember}>
        <RegisterForm         
        regexPassword={regexPassword}
        regexName={regexName}
        regexEmail={regexEmail}
        />
      </RegisterContext.Provider >
    </div>
  );
}