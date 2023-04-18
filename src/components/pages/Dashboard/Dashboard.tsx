import { createContext, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { DashboardHeader } from '../../layout/DashBoard/DashboardHeader'
export interface IDashboardProps {}
export interface IDashboardContext {
    token: string | null
    id: string|null
}
const DashboardContext = createContext<IDashboardContext>({ token: null, id:null })
export function Dashboard(props: IDashboardProps) {
    const [routines,setRoutines] = useState<object>({})
    //get all routines of user
    const token = localStorage.getItem('token') 
    const id = localStorage.getItem('id')
    // useEffect(()=>{
    //     fetch(`${import.meta.env.VITE_REACT_API_SCHEDULE}/usergoup/${id}`,{
    //         method:"GET",
    //         headers:{
    //             Authorization: `Baerer ${token}`  
    //         }
    //     }).then(async(res)=>{
    //         if(res.status == 200){
    //             const routines = await res.json()
    //             setRoutines(routines.groups)
    //         }else{
    //             const failResponse = await res.json()
    //             console.log(failResponse.msg)
    //         }
    //     }).catch((err)=>{
    //         console.log(err)
    //     })
    // },[])

    return (
        <DashboardContext.Provider value={{ token, id: id }}>
            <div className="h-screen bg-gradient-to-b from-dashboardPrimary from-40% to-dashboardSecondary to-40% ">
                <DashboardHeader />
                <Outlet />
            </div>
        </DashboardContext.Provider>
    )
}
