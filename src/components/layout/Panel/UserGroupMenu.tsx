import * as React from 'react'
import { UserGroupCardButton } from './UserGroupCardButton'
import { UGContext } from './UserGroup'
import { menuKind } from './UserGroup'
export interface IUserGroupMenuProps {}

export function UserGroupMenu(props: IUserGroupMenuProps) {
    const {menuOption,setMenuOption} = React.useContext(UGContext)
    const handleClick = (option:menuKind)=>{ 
        setMenuOption(option)        
    }
    return (
        <>
            <div className="mt-2 flex justify-around">
                <div>
                    <UserGroupCardButton
                        handleClick={() => {
                            handleClick(menuKind.changeRoutine)
                        }}
                        buttonText="Trocar rotina"
                    />
                </div>
                <div>
                    <UserGroupCardButton
                        handleClick={() => {                            
                        }}
                        buttonText="Tempos em comum"
                    />
                </div>
            </div>
            <div className="my-5 flex justify-around">
                <div>
                    <UserGroupCardButton
                        handleClick={() => {
                            handleClick(menuKind.insertMember)
                        }}
                        buttonText="Inserir membro"
                    />
                </div>
                <div>
                    <UserGroupCardButton
                        handleClick={() => {
                            handleClick(menuKind.removeMember)
                        }}
                        buttonText="Remover membro"
                    />
                </div>
            </div>
            <div className="flex justify-center">
                <div>
                    <UserGroupCardButton
                        handleClick={() => {                            
                        }}
                        buttonText="Sair do Grupo"
                    />
                </div>
            </div>
        </>
    )
}
