import * as React from 'react'
import { UserGroupCardButton } from './UserGroupCardButton'
import { UserGroupMenu } from './UserGroupMenu'
import { UGSelectChange } from '../../form/UserGroupForms/UGSelectChange'
import { UGInsertMember } from '../../form/UserGroupForms/UGInsertMember'

export interface member {
    idUser: string
    idRoutine: string
    _id: string
}

export interface IUserGroupProps {
    groupName: string
    members?: member[]
}
export enum menuKind {
    menu = 'menu',
    changeRoutine = 'changeRoutine',
    insertMember = 'insertMember',
    removeMember = 'removeMember',
}
export interface ImenuContext {
    menuOption: menuKind
    setMenuOption: React.Dispatch<menuKind>
}

export const MenuContext = React.createContext<ImenuContext>({
    menuOption: menuKind.menu,
    setMenuOption: () => {},
})


export function UserGroup({ groupName }: IUserGroupProps) {
    const [menuOption, setMenuOption] = React.useState<menuKind>(menuKind.menu)

    
    const exitToMenu = React.useCallback(() => {
        setMenuOption(menuKind.menu)
    },[])

    return (
        <MenuContext.Provider value={{ menuOption, setMenuOption }}>
            <div className="flex h-[231px] w-[280px] flex-col content-between rounded-md bg-card p-3">
                <div className="text-center">
                    <h1 className="text-3xl text-label">{groupName}</h1>
                </div>
                {(() => {
                    switch (menuOption) {
                        case menuKind.menu:
                            return <UserGroupMenu />
                        case menuKind.changeRoutine:
                            return <UGSelectChange handleExitMenu={exitToMenu}/>
                        case menuKind.insertMember:
                            return <UGInsertMember handleExitMenu={exitToMenu}/>
                        case menuKind.removeMember:
                            return <div>789</div>
                        default:
                            return <p>Opção inválida</p>
                    }
                })()}
            </div>
        </MenuContext.Provider>
    )
}
