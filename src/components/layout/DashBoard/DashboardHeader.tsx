import * as React from 'react'
import { Link } from 'react-router-dom'
import { HeaderButton } from '../HeaderButton'
import useScreenSize from '../../functions/hooks/useScreenSize'
export interface IDashboardHeaderProps {}

export function DashboardHeader(props: IDashboardHeaderProps) {    
    const [width,height] = useScreenSize()
    
    return (
        <div className="flex justify-between px-10 py-5">
            <div>
                <HeaderButton to="/">Home</HeaderButton>
                <button onClick={()=>console.log(width,height)}>meu tamanho</button>
            </div>
            
        </div>
    )
}
