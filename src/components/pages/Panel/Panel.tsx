import { createContext, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { PanelNavBar } from '../../layout/Panel/PanelNavBar'
import { PanelMenu } from '../../layout/Panel/PanelMenu'
export interface IPanelProps {}
export interface IPanelContext {
    token: string
    id: string
    setShowMenu: React.Dispatch<React.SetStateAction<boolean>>|Function
    showMenu: boolean
}
export interface IRoutine {   
    _id: string;
    idUser: string;
    intervals: interval[];   
} 
export interface interval {    
    intial: number;
    ending: number;
    label: string;
    _id: string;
}
export const PanelContext = createContext<IPanelContext>({ token: "context problem", id:"context problem", showMenu:false, setShowMenu:()=>{}})
export function Panel(props: IPanelProps) {
    const [routines,setRoutines] = useState<object>({})
    const [showMenu, setShowMenu] = useState<boolean>(false)      
    const token = localStorage.getItem('token')! 
    const id = localStorage.getItem('id')!        
    return (
        <PanelContext.Provider value={{ token,id, showMenu, setShowMenu }}>
            <div className="from-40% to-40% relative h-full bg-gradient-to-b from-panelPrimary to-panelSecondary ">
                <PanelMenu />
                <PanelNavBar />
                <Outlet />
            </div>
        </PanelContext.Provider>
    )
}
