import { RegisterContext } from '../pages/Register';
import * as React from 'react';
import { PolicyFieldText } from './PoliticyFieldText';
import { Loading } from '../layout/Loading';

export interface IConfirmMenuProps {
    stateManager: React.Dispatch<React.SetStateAction<boolean>> // control of father component 
    data: object
}

export function ConfirmMenu ({stateManager, data}: IConfirmMenuProps) {
    //fetching is true when wait backend response
    // if the registry not can completed, server message contais the error
    const {registerMember,fetching,serverMessage,setServerMessage} = React.useContext(RegisterContext)!    
    const buttonConfirm = async() =>{        
        await registerMember(data)
        setServerMessage("")             
        return
    }
    const buttonCancel = () =>{
        setServerMessage("")
        stateManager(false)
        return 
    }    
    
    const textConfirm = (
        <div>
            <h1 className="mt-2 mb-3 text-center text-lg font-bold">
                Quase Pronto...
            </h1>
            <p className="font-semi-bold mb-2 text-center text-sm">
                {' '}
                Você pode alterar os dados a qualquer momento nas configurações
                do seu perfil.
            </p>
            <div className="mb-4">
                <PolicyFieldText />
            </div>
        </div>
    )

    const errorMessage = (
        <div className="flex h-full w-full flex-col justify-between">
            <p className="flex mt-2 justify-center text-2xl font-bold">
                Ocorreu um erro
            </p>
            <p className="flex font-semibold text-xl justify-center">{serverMessage}</p>
            <div></div>
        </div>
    )

    const confirmMenu = (
        <div className="flex flex-col h-full">        
           {serverMessage ? errorMessage : textConfirm }
            <div className="flex font-bold text-input">
                <button
                    onClick={buttonCancel}
                    className="flex w-full justify-center rounded-bl bg-redFail px-7 py-3 text-xl"
                >
                    fechar
                </button>
                { !serverMessage && 
                <button
                    onClick={buttonConfirm}
                    className="flex w-full justify-center rounded-br bg-greenSucess px-7 py-3 text-xl "
                >
                    Confirmar
                </button>
                }
            </div>
        </div>          
    )
    const loadingFetch = (
        <div className="flex items-center justify-center w-full h-full ">            
            <div className='flex w-1/2 h-1/2 justify-center items-center'>
                {<Loading />}                               
            </div>            
        </div>
    )
    
    return (
        <div className=" w-[55vh] rounded-md bg-greybg h-[200px]">
            {fetching ? loadingFetch : confirmMenu}
        </div>
    )
}
