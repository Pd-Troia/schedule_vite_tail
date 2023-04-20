import * as React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from './Input'

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
    <div className='flex flex-col bg-card rounded-md px-5 py-3'>
      <label className='text-label'>
        Nome do grupo
      </label>
      <form onSubmit={handleSubmit(submit)}>
        <Input 
        name="Nome do grupo" 
        placeholder='Insira o nome do grupo' 
        register={register} 
        required="true" 
        type="text"
        isFirstAttempt={isFirstAttempt}
        inputClass={inputClass}
        defaultBorderClass={defaultBorderClass}
        />
      </form>
    </div>
  );
}
