import { useState } from 'react'
import { Home } from './components/pages/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Register } from './components/pages/Register'
import { Footer } from './components/layout/Footer'
import { Dashboard } from './components/pages/Dashboard/Dashboard'
import { DashboardHelp } from './components/pages/Dashboard/DashboardHelp'
import { DashboardGroups } from './components/pages/Dashboard/DashboardGroups'
import { DashboardRoutines } from './components/pages/Dashboard/DashboardRoutines'

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<Home />} path="/" />
                    <Route element={<Register />} path="/cadastro" />
                    <Route element={<Dashboard />} path="/dashboard">
                        <Route element={<DashboardHelp />} path="/dashboard/help" />
                        <Route element={<DashboardGroups />}path="/dashboard/groups" />
                        <Route element={<DashboardRoutines />} path="/dashboard/routines"/>
                    </Route>
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    )
}

export default App
