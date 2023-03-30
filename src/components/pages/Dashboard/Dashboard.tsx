import { createContext, useEffect } from 'react'
import {Outlet } from 'react-router-dom'
import { DashboardHeader } from '../../layout/DashboardHeader'
export interface IDashboardProps {}
export interface IauthContext {
    token: string | null
}
const authContext = createContext<IauthContext>({ token: null })
export function Dashboard(props: IDashboardProps) {
    useEffect(()=>{
        console.log("renderizari")
        return console.log("componente destruido")
    },[])
    return (        
        <authContext.Provider value={{ token: localStorage.getItem('token') }}>            
            <DashboardHeader />
            <Outlet/>
        </authContext.Provider>        
    )
}
