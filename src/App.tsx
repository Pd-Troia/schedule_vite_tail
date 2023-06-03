import { useState } from 'react'
import { Home } from './components/pages/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Register } from './components/pages/Register'
import { Footer } from './components/layout/Footer'
import { Panel } from './components/pages/Panel/Panel'
import { Help } from './components/pages/Panel/Help'
import { Groups } from './components/pages/Panel/Groups'
import { Routines } from './components/pages/Panel/Routines'

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<Home />} path="/" />
                    <Route element={<Register />} path="/cadastro" />
                    <Route element={<Panel />} path="/panel">
                        <Route element={<Help />} path="/panel/ajuda" />
                        <Route element={<Groups />} path="/panel/grupos" />
                        <Route element={<Routines />} path="/panel/rotinas" />                        
                    </Route>
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    )
}

export default App
