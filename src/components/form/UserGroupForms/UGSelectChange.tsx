// UG = UserGroup
import * as React from 'react';
import { SelectInput } from '../SelectInput';
import {useForm} from 'react-hook-form'
import { FormButton } from '../FormButton';
import { UGContext, menuKind } from '../../layout/Panel/UserGroup';

export interface IUserGroupSelectChangeProps {
    handleExitMenu: ()=>void,
    actionButtonLabel: string,
    submit: (data:object)=>void,
    buildElementList: ()=>{label:string,_id:string}
}

export function UGSelectChange ({submit,handleExitMenu,actionButtonLabel}: IUserGroupSelectChangeProps) {   
    const {register,handleSubmit,formState: { errors }} = useForm()

    const {setMenuOption} = React.useContext(UGContext)
    // test element
    const elementsList = [
        { label: 'Opção 1', _id: '1' },
        { label: 'Opção 2', _id: '2' },
        { label: 'Opção 3', _id: '3' },
    ]
    React.useEffect(()=>{
        
    },[])
    
    return (
        <div className="flex h-full flex-col justify-around">
            <form className="h-full" onSubmit={handleSubmit(submit)}>
                <div className="flex h-full w-full flex-col justify-center ">
                    <div>
                        <SelectInput
                            name={'SelectChange'}
                            register={register}
                            elementsList={elementsList}
                        />
                    </div>
                    <div className="flex justify-center">
                        <FormButton wFull={true} label={actionButtonLabel} />
                    </div>
                </div>
            </form>
            <div className="flex justify-center ">
                <FormButton handleClick={handleExitMenu} label={'Voltar ao menu'} />
            </div>
        </div>
    )
}
