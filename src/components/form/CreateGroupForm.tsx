import * as React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from './Input'
import { FormButton } from './FormButton';
import { SelectInput } from './SelectInput';
import { useGetRoutinesbyIdUserAsync } from '../functions/hooks/useGetRoutinesAsync';
import { PanelContext } from '../pages/Panel/Panel';

export interface ICreateGroupFormProps {
}
export interface ICreateFormFields {
    groupName:string
}
//schema
const schema = yup.object({
    groupName: yup
    .string()
    .min(3,"Minimo de 3 caracteres")
    .required("Campo requerido")
    .matches(new RegExp(/^[a-zA-Z1-9]+$/),"O nome do grupo deve conter apenas letras ou números")
    
})
//css
const inputClass = 'rounded bg-inputForm p-1 '
const defaultBorderClass = ''
// test element
const elementsList = [
    { label: 'Opção 1', _id: '1' },
    { label: 'Opção 2', _id: '2' },
    { label: 'Opção 3', _id: '3' },
]
export function CreateGroupForm (props: ICreateGroupFormProps) {    
    const {id,token} = React.useContext(PanelContext)
    const routinesData = useGetRoutinesbyIdUserAsync(id,token)    
    const [isFirstAttempt, setIsFirstAttempt] = React.useState<boolean>(true)
    const {register,handleSubmit,formState: { errors }} = useForm<ICreateGroupFormProps&ICreateFormFields>({
        resolver: yupResolver(schema),
        defaultValues: {
            groupName: '',            
        },
    })
    
    const submit = (data:object) =>{
        console.log(data)
    }
    return (
        <div className="w-[238px] rounded-md bg-card px-5 py-3">
            <form onSubmit={handleSubmit(submit)}>
                <div className="">
                    <label className="text-label">Nome do grupo</label>
                    <Input
                        name="groupName"
                        placeholder="Insira o nome do grupo"
                        register={register}
                        required="true"
                        type="text"
                        isFirstAttempt={isFirstAttempt}
                        inputClass={inputClass}
                        defaultBorderClass={defaultBorderClass}
                    />
                </div>
                <div className="my-5 flex flex-col">
                    <label className="text-label">Escolha uma rotina</label>
                    <SelectInput
                        register={register}
                        name="selectInput"
                        elementsList={elementsList}
                    />
                </div>
                <div className="flex justify-center">
                    <FormButton label="Criar grupo" />
                </div>
                <div className="my-1">                    
                    {errors.groupName && (                        
                        <p className=" overflow-hidden text-center text-redFail">
                            {errors.groupName.message}
                        </p>                        
                    )}
                </div>
            </form>
        </div>
    )
}
