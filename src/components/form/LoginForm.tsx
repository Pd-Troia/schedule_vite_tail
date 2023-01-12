import * as React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from './Input'
import { IoMdCloseCircle } from 'react-icons/io'
import { homeContext } from '../pages/Home'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillKeyFill, BsKeyFill } from 'react-icons/bs'
import { ButtonInputVisible } from './ButtonInputVisible'
import { CheckBox } from './CheckBox'
import { Link } from 'react-router-dom'
export interface ILoginFormProps {
    email?: string
    password?: string
}

export function LoginForm(props: ILoginFormProps) {
    //states

    const [isFirstAttempt, setIsFirstAttempt] = React.useState<boolean>(true)
    const [showPassword, setShowPassword] = React.useState<boolean>(false)
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
        console.log(data)
        setIsFirstAttempt(false)
    }
    // close Menu
    const closeMenu: React.MouseEventHandler<HTMLButtonElement> = () => {
        handleLogin(false)
    }
    const handleLogin = React.useContext(homeContext)
    // css Input
    const inputCss =
        'pl-3 rounded-r-lg text-xl bg-greyForm placeholder:text-lightBlue h-14 xl:w-[30rem] lg:w-96 sm:w-72 dmp:w-[16rem]'
    const borderCss = ''
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
                <div className="flex flex-col items-center justify-center">
                    <div className="my-5 mx-7 flex items-center justify-center">
                        <span className={iconCss}>
                            <AiOutlineMail />
                        </span>
                        <div className="relative">
                            <div className="absolute -top-7">
                                <h1 className="text-2xl font-semibold">
                                    E-mail
                                </h1>
                            </div>
                            <Input
                                name="email"
                                required="true"
                                placeholder="insira seu e-mail"
                                isFirstAttempt={isFirstAttempt}
                                register={register}
                                type="text"
                                inputClass={inputCss}
                                defaultBorderClass={borderCss}
                            />
                        </div>
                    </div>
                    {errors.email && (
                        <p className="text-redFail">
                            * {errors.email.message} *
                        </p>
                    )}
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="mx-7 mt-20 flex items-center justify-center">
                        <span className={iconCss}>
                            <BsFillKeyFill />
                        </span>
                        <div className="relative">
                            <div className="relative">
                                <div className="absolute -top-7">
                                    <h1 className="text-2xl font-semibold">
                                        Senha
                                    </h1>
                                </div>
                                <Input
                                    name="password"
                                    required="true"
                                    placeholder="insira sua Senha"
                                    isFirstAttempt={isFirstAttempt}
                                    register={register}
                                    type={showPassword ? 'text' : 'password'}
                                    inputClass={inputCss}
                                    defaultBorderClass={borderCss}
                                />
                            </div>
                            <div className="absolute right-7 top-[0.65em]">
                                <ButtonInputVisible
                                    handleToggleShowPassword={setShowPassword}
                                    actualState={showPassword}
                                />
                            </div>
                            <div className="absolute -left-11 top-24">
                                <CheckBox label={"Permanecer conectado"}></CheckBox>
                            </div>
                            <div className='absolute right-3'>
                                <Link to="/">
                                    <p className='text-blueLink text-sm font-semibold'>Esqueceu a senha ?</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {errors.password && (
                        <p className="text-redFail">
                            * {errors.password.message} *
                        </p>
                    )}
                </div>
                <div className='flex justify-center mt-20 '>
                    <button className="px-24 py-3 bg-black-90 rounded-lg text-2xl text-white">Log in</button>            
                </div>
            </form>
        </div>
    )
}
