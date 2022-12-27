import {useState} from 'react';
import { useForm, SubmitHandler} from 'react-hook-form';
import { ConfirmMenu } from './ConfirmMenu';
import { Input } from './Input';
import { PolicyFieldText } from './PoliticyFieldText';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
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
  const[isSubmited, setIsSubmited] = useState(false)   
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
            
            error={errors.name}
            />         
            {errors.name && <span>{errors.name.message}</span>}
          </div>
          <div className='flex justify-center'>          
            <Input  
            name="email" 
            type="text" 
            required="true" 
            placeholder=' E-mail' 
            register={register}           
            error={errors.email}                       
            />          
            {errors.email && <span>{errors.email.message}</span>}
          </div>
          <div className='flex justify-center'>          
            <Input  
            type="password" 
            name="password" 
            required="true" 
            placeholder=' Senha'
            register={register}
            
            error={errors.password} 
            />            
            {errors.password && <span>{errors.password.message}</span>}
          </div>
          <div className='flex justify-center'>          
            <Input type="password"  
            name="confirmPassword" 
            required="true" 
            placeholder=' Confirmar Senha' 
            register={register}            
            error={errors.confirmPassword}
            />
            {errors.confirmPassword && <span>Confirme sua senha</span>}
          </div>
            <div className='flex justify-center'>
              <input className='rounded-3xl bg-red-600 text-2xl px-[16vw] sm:px-[26vw] dmm:px-[18vw] dmg:px-[19.5vw]
              lg:px-[28vw] py-2 text-white' value="Criar conta" type="submit" />
            </div>  
          <PolicyFieldText/>                       
        </form>
        <div className="flex justify-center items-center">
          <hr className='border rounded-sm border-black w-[27vw] sm:w-[30vw] '/>
          <p className='mx-2'>Ou</p>
          <hr className='border rounded-sm border-black w-[27vw] sm:w-[30vw]'/>      
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
