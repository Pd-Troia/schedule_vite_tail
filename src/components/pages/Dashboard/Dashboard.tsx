import { createContext } from 'react'
import { Link, Routes, Route, BrowserRouter } from 'react-router-dom'
import { DashboardGroups } from './DashboardGroups'
import { DashboardHeader } from '../../layout/DashboardHeader'
import { DashboardHelp } from './DashboardHelp'
import { DashboardRoutines } from './DashboardRoutines'
export interface IDashboardProps {}
export interface IauthContext {
    token: string | null
}
const authContext = createContext<IauthContext>({ token: null })
export function Dashboard(props: IDashboardProps) {
    return (
        <authContext.Provider value={{ token: localStorage.getItem('token') }}>
            <>
                <DashboardHeader />
                <Routes>
                    <Route element={<DashboardHelp />} path="/dashboard/help" />
                    <Route
                        element={<DashboardGroups />}
                        path="/dashboard/groups"
                    />
                    <Route
                        element={<DashboardRoutines />}
                        path="/dashboard/routines"
                    />
                </Routes>
            </>
        </authContext.Provider>
    )
}
