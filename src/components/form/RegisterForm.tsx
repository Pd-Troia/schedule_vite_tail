import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { ConfirmMenu } from './ConfirmMenu'
import { Input } from './Input'
import { PolicyFieldText } from './PoliticyFieldText'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { LinkRegisterSocial } from './LinkRegisterSocial'
import { Link } from 'react-router-dom'
import { BackButton } from '../layout/BackButton'
import PasswordStrengthBar from 'react-password-strength-bar'
export interface IRegisterFormProps {
    firstName?: string
    lastName?: string
    confirmPassword?: string
    password?: string
    email?: string
}

export interface IRegisterRegex {
    regexName: RegExp
    regexEmail: RegExp
    regexPassword: RegExp
}
export function RegisterForm({
    regexPassword,
    regexName,
}: IRegisterRegex & IRegisterFormProps) {
    // yup schema
    const schema = yup.object({
        firstName: yup
            .string()
            .required('Campo Obrigatorio')
            .matches(regexName, 'Nome inválido'),
        lastName: yup
            .string()
            .required('Campo Obrigatorio')
            .matches(regexName, 'Nome inválido'),
        email: yup
            .string()
            .email('Deve ser inserido um email válido')
            .required('Campo Obrigatorio'),
        password: yup
            .string()
            .required('Campo Obrigatorio')
            .min(6, 'Minimo de 6 caracteres')
            .matches(
                regexPassword,
                'Sua senha deve conter uma letra minúscula, letra minúscula, caracteres especiais(!#@$%&) e um número'
            ),
        confirmPassword: yup
            .string()
            .required('Campo Obrigatorio')
            .min(6, 'Minimo de 6 caracteres')
            .test(
                'confirmPassword',
                'Senhas diferentes',
                (value, context) => context.parent.password === value
            ),
    })
    const {register,handleSubmit,formState: { errors },watch} = useForm<IRegisterFormProps>({
        resolver: yupResolver(schema),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
    })
    // first click on register button
    const firstAttempt = () => {
        setIsFirstAttempt(false)
    }
    const [isFirstAttempt, setIsFirstAttempt] = useState(true)
    // submit area
    const [submitData, setSubmitData] = useState<object>({})
    const [showConfirmMenu, setShowConfirmMenu] = useState<boolean>(false)
    //onSubmitFunction
    const openConfirmMenu: SubmitHandler<IRegisterFormProps> = (data) => {
        setShowConfirmMenu(true)
        setSubmitData(data)
    }
    // watches
    const wPassword = watch('password')
    // css border
    const inputCss =
        'bg-input w-[66vw] lg:w-[53vw]  py-2 pl-3 rounded-md  placeholder:text-lightBlue relative'
    const borderCss = 'border border-lightBlue'
    return (
        <div className="relative flex flex-col items-center justify-center rounded-md bg-greyForm">
            <div className={showConfirmMenu ? 'blur-sm' : ''}>
                <div className="flex dmm:block">
                    <div className="dmm:absolute dmm:left-3 dmm:top-1 ">
                        <BackButton />
                    </div>
                    <h1 className="my-2 text-center text-2xl font-medium dmm:my-7">
                        Create account
                    </h1>
                    {/* "my-2 text-center text-2xl font-medium dmm:my-7 
                    absolute left-3 top-1*/}
                </div>
                <form onSubmit={handleSubmit(openConfirmMenu)}>
                    <div className="my-3 mx-7 flex justify-center">
                        <div className="flex-col">
                            <Input
                                name="firstName"
                                type="text"
                                required="true"
                                placeholder="Primeiro nome"
                                register={register}
                                isFirstAttempt={isFirstAttempt}
                                error={errors.firstName}
                                inputClass={inputCss}
                                defaultBorderClass={borderCss}
                            />
                        </div>
                    </div>
                    <div className="my-3 mx-7 flex justify-center">
                        <div className="flex-col">
                            <Input
                                name="lastName"
                                type="text"
                                required="true"
                                placeholder="Último nome"
                                register={register}
                                isFirstAttempt={isFirstAttempt}
                                error={errors.lastName}
                                inputClass={inputCss}
                                defaultBorderClass={borderCss}
                            />
                        </div>
                    </div>
                    <div className="my-3 mx-7 flex justify-center">
                        <div className="flex-col">
                            <Input
                                name="email"
                                type="text"
                                required="true"
                                placeholder="E-mail"
                                register={register}
                                isFirstAttempt={isFirstAttempt}
                                error={errors.email}
                                inputClass={inputCss}
                                defaultBorderClass={borderCss}
                            />
                        </div>
                    </div>
                    <div className="my-3 mx-7 flex flex-col items-center">
                        <Input
                            type="password"
                            name="password"
                            required="true"
                            placeholder="Senha"
                            register={register}
                            isFirstAttempt={isFirstAttempt}
                            error={errors.password}
                            inputClass={inputCss}
                            defaultBorderClass={borderCss}
                        />
                        <div className="w-[66vw] lg:w-[53vw]">
                            <PasswordStrengthBar
                                password={wPassword}
                                scoreWords={[
                                    'fraca',
                                    'fraca',
                                    'ok',
                                    'média',
                                    'forte',
                                ]}
                                shortScoreWord={'pequena demais'}
                                minLength={6}
                            />
                        </div>
                    </div>
                    <div className="my-3 mx-7 flex justify-center">
                        <div className="flex-col">
                            <Input
                                type="password"
                                name="confirmPassword"
                                required="true"
                                placeholder="Confirmar Senha"
                                register={register}
                                error={errors.confirmPassword}
                                isFirstAttempt={isFirstAttempt}
                                inputClass={inputCss}
                                defaultBorderClass={borderCss}
                            />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <input
                            className="cursor-pointer rounded-3xl bg-red-600 px-[16vw] py-2 text-2xl text-white dmm:px-[18vw]
              dmg:px-[19.5vw] sm:px-[26vw] lg:px-[22.5vw]"
                            value="Criar conta"
                            type="submit"
                            onClick={firstAttempt}
                        />
                    </div>
                    <PolicyFieldText />
                </form>
                <div className="flex items-center justify-center">
                    <hr className="w-[27vw] rounded-sm border border-black sm:w-[30vw] " />
                    <p className="mx-2">Ou</p>
                    <hr className="w-[27vw] rounded-sm border border-black sm:w-[30vw]" />
                </div>
                <div className="my-2">
                    <LinkRegisterSocial />
                </div>
                <div className="text-center text-lg font-semibold">
                    <p className="mb-2">Já tem uma conta ?</p>
                    <Link to="/">
                        <span className="cursor:pointer text-blueLink ">
                            Faça login clicando aqui
                        </span>
                    </Link>
                </div>
            </div>
            {showConfirmMenu && (
                <div className="top-2/5 absolute ">
                    <ConfirmMenu
                        stateManager={setShowConfirmMenu}
                        data={submitData}
                    />
                </div>
            )}
        </div>
    )
}
