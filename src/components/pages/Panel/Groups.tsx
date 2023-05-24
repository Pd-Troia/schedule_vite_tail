import * as React from 'react'
import useScreenSize from '../../functions/hooks/useScreenSize'
import { CreateGroupForm } from '../../form/CreateGroupForm'
import { UserGroup } from '../../layout/Panel/UserGroup'

export interface IPanelGroupsProps {}

export function Groups(props: IPanelGroupsProps) {
    const [width] = useScreenSize()    
    const tittleColCondition = width <= 767 && 'flex-col content-center'
    const textSizes = 'dmg:text-4xl text-3xl md:text-4xl'
    return (
        <main className="flex min-h-screen flex-col">
            <header
                className={` ${textSizes} my-4 flex justify-center text-tittleTheme md:mt-10 `}
            >
                <div className={`${tittleColCondition} flex text-center`}>
                    {width < 767 ? (
                        <>
                            <h1>Crie seu grupo </h1>
                            <h1>ou</h1>
                            <h1>utilize-os abaixo</h1>
                        </>
                    ) : (
                        <h1>Crie seu grupo ou utilize-os abaixo</h1>
                    )}
                </div>
            </header>
            <div className="my-2 flex justify-center">
                <CreateGroupForm />
            </div>
            <div className="m-5 grid grid-cols-1 place-items-center justify-center gap-y-14 md:grid-cols-2 lg:grid-cols-3">
                <UserGroup id="6468bbc7f814f49615bd5388" groupName="Teste1" />                
            </div>
        </main>
    )
}
