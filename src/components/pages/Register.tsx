import * as React from 'react';
import { RegisterForm } from '../form/RegisterForm';

export interface IRegisterProps {
}

export function Register (props: IRegisterProps) {
  const RegisterMember = () => {
      
    }
  return (
    
    <div>
      <RegisterForm handleSubmit={RegisterMember}/>
    </div>
  );
}
