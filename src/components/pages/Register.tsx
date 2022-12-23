import * as React from 'react';
import { RegisterForm } from '../form/RegisterForm';
import { SubmitHandler } from 'react-hook-form/dist/types';

export interface IRegisterProps {
}

export function Register (props: IRegisterProps) {
  const RegisterMember:SubmitHandler<IRegisterProps>  = (data) => {
      console.log(data)
    }
  return (
    
    <div>
      <RegisterForm handleSubmitDad={RegisterMember} />
    </div>
  );
}
