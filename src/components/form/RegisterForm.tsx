import * as React from 'react';

export interface IRegisterFormProps { 
  handleSubmit: React.FormEventHandler
}

export function RegisterForm ({handleSubmit}: IRegisterFormProps) {        
   const inputForm = "bg-black" //"Teu Css pros 4 input aq" 
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>          
          <input className={inputForm} type="text" placeholder='Nome Completo' />
        </div>
        <div>          
          <input className={inputForm} type="text" placeholder='E-mail' />
        </div>
        <div>          
          <input className={inputForm} type="text" placeholder='Senha'/>
        </div>
        <div>          
          <input className={inputForm} type="text" placeholder='Confirmar Senha' />
        </div>
        
      </form>
    </div>
  );
}
