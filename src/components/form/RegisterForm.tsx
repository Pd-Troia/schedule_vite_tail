import {useState} from 'react';
import { useForm, SubmitHandler} from 'react-hook-form';
import { ConfirmMenu } from './ConfirmMenu';
import { Input } from './Input';
import { PolicyFieldText } from './PoliticyFieldText';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { LinkRegisterSocial } from './LinkRegisterSocial';
import { Link } from 'react-router-dom';
import { BackButton } from '../layout/BackButton';
import PasswordStrengthBar from 'react-password-strength-bar';
export interface IRegisterFormProps {   
  name?: string
  confirmPassword?: string
  password?: string
  email?: string  
}

export interface IRegisterRegex{
  regexName: RegExp
  regexEmail: RegExp
  regexPassword: RegExp
}
export function RegisterForm ({regexPassword,regexName}: IRegisterRegex&IRegisterFormProps) {  
  // yup schema
  const schema = yup.object({
    name: yup.string().required("Campo Obrigatorio").matches(regexName,"Nome inválido"),
    email: yup.string().email("Deve ser inserido um email válido").required("Campo Obrigatorio"),
    password: yup.string().required("Campo Obrigatorio").min(6,"Minimo de 6 caracteres")
    .matches(regexPassword,"Sua senha deve conter uma letra minúscula, letra minúscula, caracteres especiais(!#@$%&) e um número "),    
    confirmPassword: yup.string().required("Campo Obrigatorio").min(6,"Minimo de 6 caracteres")
    .test("confirmPassword","Senhas diferentes",(value,context)=> context.parent.password===value)
    
  })  
  const {register,handleSubmit,formState:{errors}, watch} = useForm<IRegisterFormProps>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    }
  })
  // first click on register button
  const firstAttempt = ()=>{    
    setIsFirstAttempt(false)
  }  
  const[isFirstAttempt, setIsFirstAttempt] = useState(true)  
  // submit area
  const [submitData,setSubmitData] = useState<object>({})
  const [showConfirmMenu,setShowConfirmMenu] = useState<boolean>(false)
  const openConfirmMenu:SubmitHandler<IRegisterFormProps>  = (data) => {       
    setShowConfirmMenu(true)
    setSubmitData(data)      
  }   
  // watches
  const wPassword = watch("password")
  const [renderCount,setRenderCount] = useState<number>(0) 
  
  
  return (    
    <div className='bg-greyForm flex justify-center items-center flex-col relative rounded-md'>
      <div className={showConfirmMenu ? "blur-sm" : ""}>
        <div className='relative'>
          <h1 className='text-2xl text-center my-2 font-medium'>Create account</h1>
          <div className='absolute left-3 top-1'><BackButton/></div>
        </div>
        <form onSubmit={handleSubmit(openConfirmMenu)}>          
          {console.log("a")}
          <div className='flex justify-center'>          
            <Input name="name" 
            type="text"
            required='true' 
            placeholder="Nome"
            register={register}
            isFirstAttempt={isFirstAttempt}
            error={errors.name}
            />         
            
          </div>
          <div className='flex justify-center'>          
            <Input  
            name="email" 
            type="text" 
            required="true" 
            placeholder='E-mail' 
            register={register} 
            isFirstAttempt={isFirstAttempt}          
            error={errors.email}                       
            />          
            
          </div>
          <div className='flex items-center flex-col'>          
            <Input  
            type="password" 
            name="password" 
            required="true" 
            placeholder='Senha'
            register={register}
            isFirstAttempt={isFirstAttempt}
            error={errors.password} 
            />                        
            <div className='w-[66vw]'>
              <PasswordStrengthBar password={wPassword}/>
             </div>
          </div>
          <div className='flex justify-center'>          
            <Input type="password"  
            name="confirmPassword" 
            required="true" 
            placeholder='Confirmar Senha' 
            register={register}            
            error={errors.confirmPassword}
            isFirstAttempt={isFirstAttempt}
            />
            
          </div>
            <div className='flex justify-center'>
              <input className='rounded-3xl bg-red-600 text-2xl px-[16vw] sm:px-[26vw] dmm:px-[18vw] dmg:px-[19.5vw]
              lg:px-[28vw] py-2 text-white' value="Criar conta" type="submit" onClick={firstAttempt} />
            </div>  
          <PolicyFieldText/>                       
        </form>
        <div className="flex justify-center items-center">
          <hr className='border rounded-sm border-black w-[27vw] sm:w-[30vw] '/>
          <p className='mx-2'>Ou</p>
          <hr className='border rounded-sm border-black w-[27vw] sm:w-[30vw]'/>      
        </div>
        <div className='my-2'>
          <LinkRegisterSocial/>
        </div>
        <div className='text-center text-lg font-semibold'>
          <p className='mb-2'>Já tem uma conta ?</p>
          <Link to="/"><span className='cursor:pointer text-blueLink '>Faça login clicando aqui</span></Link>
        </div>
              
      </div>       
      {showConfirmMenu && (
        <div className='absolute top-2/5 '>
          <ConfirmMenu stateManager={setShowConfirmMenu} data={submitData}/>
        </div>
      )}

    </div>
  );
}
