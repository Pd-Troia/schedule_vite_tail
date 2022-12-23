import * as React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Input } from './Input';
export interface IRegisterFormProps {  
  handleSubmitDad : SubmitHandler<IRegisterFormProps>
  name?: string
  confirmPassword?: string
  password?: string
  eMail?: string
}

export function RegisterForm ({handleSubmitDad}: IRegisterFormProps) {        
  const inputForm = "bg-input w-[66vw] my-[2vw] rounded-md placeholder-formPlaceHolder" //"Teu Css pros 4 input aq" 
  const {register,handleSubmit,formState:{errors}} = useForm<IRegisterFormProps>()  
    return (
    
    <div className='bg-greyForm flex justify-center items-center flex-col'>
      <h1 className='text-2xl'>Create account</h1>
      <form onSubmit={handleSubmit(handleSubmitDad)}>
        <div className='flex justify-center'>          
           <Input name="name" 
           type="text"
           required='true' 
           placeholder="Nome Completo"
           register={register} 
           />         
          {errors.name && <span>Preencha seu nome</span>}
        </div>
        <div className='flex justify-center'>          
          <Input  
          name="eMail" 
          type="text" 
          required="true" 
          placeholder=' E-mail' 
          register={register} 
          />          
          {errors.eMail && <span>Preencha seu email</span>}
        </div>
        <div className='flex justify-center'>          
          <Input  
          type="password" 
          name="password" 
          required="true" 
          placeholder=' Senha'
          register={register}/>
          {errors.password && <span>Preencha sua senha</span>}
        </div>
        <div className='flex justify-center'>          
          <Input type="password"  
          name="confirmPassword" 
          required="true" 
          placeholder=' Confirmar Senha' 
          register={register}  />
          {errors.confirmPassword && <span>Confirme sua senha</span>}
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
