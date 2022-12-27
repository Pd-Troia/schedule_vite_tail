import { RegisterContext } from '../pages/Register';
import * as React from 'react';
import { PolicyFieldText } from './PoliticyFieldText';

export interface IConfirmMenuProps {
    stateManager: React.Dispatch<React.SetStateAction<boolean>>    
    data: object
}

export function ConfirmMenu ({stateManager, data}: IConfirmMenuProps) {
    const registerMember = React.useContext(RegisterContext)    
    const buttonConfirm = () =>{
        stateManager(false)
        registerMember(data)
        return
    }
    const buttonCancel = () =>{
        return stateManager(false)
    }
    return (
    <div className='flex flex-col bg-greybg rounded-md w-[55vh]'>        
        <h1 className='text-center text-lg mt-2 mb-3 font-bold'>Quase Pronto...</h1>
        <p className='text-center text-sm mb-2 font-semi-bold'> Você pode alterar os dados a qualquer momento nas configurações do seu perfil.</p>
        <div className='mb-4'>
            <PolicyFieldText/>
        </div>
        <div className='flex font-bold text-input'>
            <button onClick={buttonCancel} className='bg-redFail text-xl w-full flex justify-center rounded-bl px-7 py-3'>
                Cancelar
            </button>
            <button onClick={buttonConfirm} className='bg-greenSucess justify-center text-xl w-full flex rounded-br px-7 py-3 '>
                Confirmar
            </button>
        </div>
    </div>
  );
}
