import {useState} from 'react';
import { useForm, SubmitHandler} from 'react-hook-form';
import { Input } from './Input';
export interface IRegisterFormProps {  
  handleSubmitDad : SubmitHandler<IRegisterFormProps>
  name?: string
  confirmPassword?: string
  password?: string
  email?: string  
}
export interface IRegisterFunctions{
  validateName: Function
  validatePassword: Function
  validateConfirmPassword: Function
  validateEmail: Function
}

export function RegisterForm ({handleSubmitDad,validateEmail,validatePassword,validateConfirmPassword,validateName}: IRegisterFormProps&IRegisterFunctions) {        
  const {register,handleSubmit,formState:{errors}, watch} = useForm<IRegisterFormProps>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    }
  })   
  const [wName,wEmail,wPassword,wConfirmPassword] = watch(["name","email","password","confirmPassword"])
  
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
           isValid={validateName(wName)}
           />         
          {errors.name && <span>Preencha seu nome</span>}
        </div>
        <div className='flex justify-center'>          
          <Input  
          name="email" 
          type="text" 
          required="true" 
          placeholder=' E-mail' 
          register={register}
          isValid={validateEmail(wEmail)}
          />          
          {errors.email && <span>Preencha seu email</span>}
        </div>
        <div className='flex justify-center'>          
          <Input  
          type="password" 
          name="password" 
          required="true" 
          placeholder=' Senha'
          register={register} 
          isValid={validatePassword(wPassword)}         
          />          
          {errors.password && <span>Preencha sua senha</span>}
        </div>
        <div className='flex justify-center'>          
          <Input type="password"  
          name="confirmPassword" 
          required="true" 
          placeholder=' Confirmar Senha' 
          register={register}
          isValid={validateConfirmPassword(wPassword,wConfirmPassword)}  
          
          />
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
