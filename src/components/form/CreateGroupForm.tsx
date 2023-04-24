import * as React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from './Input'
import { FormButton } from './FormButton';
import { SelectInput } from './SelectInput';

export interface ICreateGroupFormProps {
}

const schema = yup.object({
    groupName: yup.string()
})
const inputClass = 'rounded bg-inputForm p-1 '
const defaultBorderClass = ''
export function CreateGroupForm (props: ICreateGroupFormProps) {    
    const [isFirstAttempt, setIsFirstAttempt] = React.useState<boolean>(true)
    const {register,handleSubmit,formState: { errors }} = useForm<ICreateGroupFormProps>({
        resolver: yupResolver(schema),
        defaultValues: {
            groupName: '',            
        },
    })

    const submit = () =>{

    }
    return (
        <div className="flex flex-col items-center rounded-md bg-card px-5 py-3 ">
            <form onSubmit={handleSubmit(submit)}>
                <div>
                    <label className="text-label">Nome do grupo</label>
                    <Input
                        name="Nome do grupo"
                        placeholder="Insira o nome do grupo"
                        register={register}
                        required="true"
                        type="text"
                        isFirstAttempt={isFirstAttempt}
                        inputClass={inputClass}
                        defaultBorderClass={defaultBorderClass}
                    />
                </div>
                <div>                    
                </div>
                <div className="flex justify-center">
                    <FormButton label="Criar grupo" />
                </div>
            </form>
        </div>
    )
}
