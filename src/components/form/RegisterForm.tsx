import {useState} from 'react';
import { useForm, SubmitHandler} from 'react-hook-form';
import { ConfirmMenu } from './ConfirmMenu';
import { Input } from './Input';
import { PolicyFieldText } from './PoliticyFieldText';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {FcGoogle} from 'react-icons/fc'
import {BsFacebook} from 'react-icons/bs';
import { TfiApple } from 'react-icons/tfi';
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
    .matches(regexPassword,"Senha Fraca"),    
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
  
  return (    
    <div className='bg-greyForm flex justify-center items-center flex-col relative rounded-md'>
      <div className={showConfirmMenu ? "blur-sm" : ""}>
        <h1 className='text-2xl text-center'>Create account</h1>
        <form onSubmit={handleSubmit(openConfirmMenu)}>
          <div className='flex justify-center'>          
            <Input name="name" 
            type="text"
            required='true' 
            placeholder="Nome Completo"
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
            placeholder=' E-mail' 
            register={register} 
            isFirstAttempt={isFirstAttempt}          
            error={errors.email}                       
            />          
            
          </div>
          <div className='flex justify-center'>          
            <Input  
            type="password" 
            name="password" 
            required="true" 
            placeholder=' Senha'
            register={register}
            isFirstAttempt={isFirstAttempt}
            error={errors.password} 
            />            
           
          </div>
          <div className='flex justify-center'>          
            <Input type="password"  
            name="confirmPassword" 
            required="true" 
            placeholder=' Confirmar Senha' 
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
        <div className='flex justify-center items-center'>
          <div className='rounded-l-lg bg-brownStrong'>
            <span className='text-[5vw]'><FcGoogle/></span>
          </div>
          <div>
            <span className='text-[5vw]'><BsFacebook/></span>
          </div>
          <div>
            <span className='text-[5vw]'><TfiApple/></span>
          </div>
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
