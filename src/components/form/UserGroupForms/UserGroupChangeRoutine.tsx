import * as React from 'react';
import { SelectInput } from '../SelectInput';
import {useForm} from 'react-hook-form'
import { FormButton } from '../FormButton';
import { MenuContext, menuKind } from '../../layout/Panel/UserGroup';

export interface IUserGroupChangeRoutineProps {
    
}

export function UserGroupChangeRoutine (props: IUserGroupChangeRoutineProps) {   
    const {register,handleSubmit,formState: { errors }} = useForm()
    const {setMenuOption} = React.useContext(MenuContext)
    // test element
    const elementsList = [
        { label: 'Opção 1', _id: '1' },
        { label: 'Opção 2', _id: '2' },
        { label: 'Opção 3', _id: '3' },
    ]

    const submit = (data:object)=>{
        console.log(data)
    }
    const exitToMenu = ()=>{
        setMenuOption(menuKind.menu)
    }
    return (
        <div className="flex h-full flex-col justify-around">
            <form className="h-full" onSubmit={handleSubmit(submit)}>
                <div className="flex h-full w-full flex-col justify-center ">
                    <div>
                        <SelectInput
                            name={'changeRoutine'}
                            register={register}
                            elementsList={elementsList}
                        />
                    </div>
                    <div className="flex justify-center">
                        <FormButton wFull={true} label="Trocar Rotina" />
                    </div>
                </div>
            </form>
            <div className="flex justify-center ">
                <FormButton handleClick={exitToMenu} label={'Voltar ao menu'} />
            </div>
        </div>
    )
}
