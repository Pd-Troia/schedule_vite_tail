import * as React from 'react';
import { RegisterForm } from '../form/RegisterForm';
import { SubmitHandler } from 'react-hook-form/dist/types';
import { useNavigate } from 'react-router-dom';

export interface IRegisterProps {
}

export function Register (props: IRegisterProps) {
  const navigate = useNavigate()
  const RegisterMember = (data:object) => {
    console.log("enviando dados ao servidor")  
    console.log(data) 
    navigate("/") 
  }
  const validateName = (field:string) =>{
    const regex = "^(?![ ])(?!.*[ ]{2})((?:e|da|do|das|dos|de|d'|D'|la|las|el|los)\s*?|(?:[A-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð'][^\s]*\s*?)(?!.*[ ]$))+$"
    return field.match(regex) ? true : false
  }
  const validateEmail = (field:string) =>{
    const regex = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
    return field.match(regex) ? true : false
  }
  const validatePassword = (field:string) =>{
    const regex = "^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,15}$"
    return field.match(regex) ? true : false
  }
  const validateConfirmPassword = (field1:string,field2:string) =>{
    return field1 === field2 && validatePassword(field1) ? true : false 
  }
  return (
    
    <div className='bg-greybg flex justify-center items-center w-full h-full p-32'>
      <RegisterForm 
      handleSubmitDad={RegisterMember}
      validateName={validateName}
      validateEmail={validateEmail}
      validatePassword={validatePassword} 
      validateConfirmPassword={validateConfirmPassword} 
      />
    </div>
  );
}
