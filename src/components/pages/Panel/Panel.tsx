import { createContext, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { PanelNavBar } from '../../layout/Panel/PanelNavBar'
export interface IPanelProps {}
export interface IPanelContext {
    token: string | null
    id: string | null
    setShowMenu: React.Dispatch<React.SetStateAction<boolean>>|Function
    showMenu: boolean
} 
export const PanelContext = createContext<IPanelContext>({ token: null, id:null, showMenu:false, setShowMenu:()=>{}})
export function Panel(props: IPanelProps) {
    const [routines,setRoutines] = useState<object>({})
    const [showMenu, setShowMenu] = useState<boolean>(false)    
    const token = localStorage.getItem('token') 
    const id = localStorage.getItem('id')
    
    return (
        <PanelContext.Provider value={{ token, id: id,showMenu, setShowMenu}}>
            <div className="from-40% to-40% h-screen bg-gradient-to-b from-panelPrimary to-panelSecondary ">                                  
                <PanelNavBar />
                <Outlet />                
            </div>
        </PanelContext.Provider>
    )
}
