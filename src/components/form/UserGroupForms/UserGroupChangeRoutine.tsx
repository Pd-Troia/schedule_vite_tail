import * as React from 'react';
import { SelectInput } from '../SelectInput';
import {useForm} from 'react-hook-form'
import { FormButton } from '../FormButton';

export interface IUserGroupChangeRoutineProps {
    handleBlur: ()=>void
}

export function UserGroupChangeRoutine ({handleBlur}: IUserGroupChangeRoutineProps) {
    const mainSelectRef = React.useRef<HTMLDivElement|null>(null)
    const {register,handleSubmit,formState: { errors }} = useForm()
    // test element
    const elementsList = [
        { label: 'Opção 1', _id: '1' },
        { label: 'Opção 2', _id: '2' },
        { label: 'Opção 3', _id: '3' },
    ]
    React.useEffect(()=>{
        mainSelectRef.current && mainSelectRef.current.focus()
    },[])
    const submit = ()=>{
        
    }
    return (
        <div className="h-full" onBlur={handleBlur}>
            <form className="h-full" onSubmit={handleSubmit(submit)}>
                <div className="flex h-full w-full flex-col justify-around p-3">
                    <div ref={mainSelectRef}>
                        <SelectInput
                            name={'changeRoutine'}
                            register={register}
                            elementsList={elementsList}
                        />
                    </div>
                    <div className="flex justify-center">
                        <FormButton label="Trocar Rotina" />
                    </div>
                </div>
            </form>
        </div>
    )
}
