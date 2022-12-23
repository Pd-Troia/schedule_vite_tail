import * as React from 'react';

export interface IRegisterFormProps { 
  handleSubmit: React.FormEventHandler
}

export function RegisterForm ({handleSubmit}: IRegisterFormProps) {        
   const inputForm = "bg-input w-[66vw] my-[2vw] rounded-md placeholder-formPlaceHolder" //"Teu Css pros 4 input aq" 
  return (
    <div className='bg-greyForm flex justify-center items-center flex-col'>
      <h1 className='text-2xl'>Create account</h1>
      <form  onSubmit={handleSubmit}>
        <div className='flex justify-center'>          
          <input className={inputForm} type="text" placeholder=' Nome Completo' />
        </div>
        <div className='flex justify-center'>          
          <input className={inputForm} type="text" placeholder=' E-mail' />
        </div>
        <div className='flex justify-center'>          
          <input className={inputForm} type="text" placeholder=' Senha'/>
        </div>
        <div className='flex justify-center'>          
          <input className={inputForm} type="text" placeholder=' Confirmar Senha' />
        </div>
          <div className='flex justify-center'>
            <input className='rounded-3xl bg-red-600 text-2xl px-[16vw] sm:px-[26vw] dmm:px-[18vw] dmg:px-[19.5vw]
             lg:px-[28vw] py-2 text-white' value="Criar conta" type="submit" />
          </div>
        <div className="text-xs">
          <p className='text-center'>Ao criar uma conta, você concorda com nossos <br />
          <a className='cursor-pointer text-blueLink'>Termos de uso</a> e  
          <a className='cursor-pointer text-blueLink'> Política de Privacidade</a> 
          </p>
        </div>                  
      </form>
      <div className="flex justify-center items-center">
      <hr className='border rounded-sm border-black w-[27vw] sm:w-[30vw] '/>
      <p className='mx-2'>Ou</p>
      <hr className='border rounded-sm border-black w-[27vw] sm:w-[30vw]'/>
      </div>    
    </div>
  );
}
