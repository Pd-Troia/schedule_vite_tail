import * as React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from './Input'
import { IoMdCloseCircle } from 'react-icons/io'
import { homeContext } from '../pages/Home'
import { AiOutlineMail, AiOutlineEyeInvisible } from 'react-icons/ai'
import { BsFillKeyFill, BsKeyFill } from 'react-icons/bs'
export interface ILoginFormProps {
    email?: string
    password?: string
}


export function LoginForm(props: ILoginFormProps) {
    //showPassoword State
    const [showPassoword, setShowPassword] = React.useState<
        'password' | 'text'
    >('password')
    //First attempt
    const [isFirstAttempt, setIsFirstAttempt] = React.useState<boolean>(true)
    //schema
    const schema = yup.object({
        email: yup.string().email().required(),
        password: yup.string().required(),
    })
    //useForm
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ILoginFormProps>({
        resolver: yupResolver(schema),
        defaultValues: {
            email: '',
            password: '',
        },
    })
    //onSubmit
    const submit: SubmitHandler<ILoginFormProps> = (data) => {
        setIsFirstAttempt(false)
        
    }
    // close Menu
    const closeMenu: React.MouseEventHandler<HTMLButtonElement> = () => {
        handleLogin(false)
    } 
    const handleLogin = React.useContext(homeContext)
    // css Input
    const inputCss =
        'pl-3 rounded-r-lg text-xl bg-greyForm placeholder:text-lightBlue h-14'     
    const borderCss = ""
    const iconCss =
        'py-1 flex h-14 items-center justify-center rounded-l-lg bg-brownStrong px-3 text-3xl text-whiteIcon' 
    return (
        <div className="rounded bg-greyLogin p-3">
            <div className="flex justify-end">
                <button onClick={closeMenu} className="mt-1 mr-1">
                    <IoMdCloseCircle />
                </button>
            </div>
            <h1 className="my-1 text-center">
                <p className="text-3xl font-semibold">Bem-Vindo</p>
            </h1>
            <form onSubmit={handleSubmit(submit)}>
                <div className="my-3 mx-7 flex items-center justify-center">
                    <span className={iconCss}>
                        <AiOutlineMail />
                    </span>
                    <div className="relative">
                        <Input
                            name="email"
                            required="true"
                            placeholder="insira seu e-mail"
                            isFirstAttempt={isFirstAttempt}
                            register={register}
                            type="text"
                            error={errors.email}
                            inputClass={inputCss}
                            defaultBorderClass={borderCss}
                        />
                        <div className="absolute right-3 top-[0.65em]">
                            <button className="text-4xl text-blackIcon">
                                <AiOutlineEyeInvisible/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="my-3 mx-7 flex items-center justify-center">
                    <span className={iconCss}>
                        <BsFillKeyFill />
                    </span>
                    <Input
                        name="password"
                        required="true"
                        placeholder="insira sua Senha"
                        isFirstAttempt={isFirstAttempt}
                        register={register}
                        type="text"
                        error={errors.email}
                        inputClass={inputCss}
                        defaultBorderClass={borderCss}
                    />
                </div>
            </form>
        </div>
    )    
}
