import { useState } from 'react'
import { Home } from './components/pages/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Register } from './components/pages/Register'
import { Footer } from './components/layout/Footer'
import { Dashboard } from './components/pages/Dashboard/Dashboard'

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<Home />} path="/" />
                    <Route element={<Register />} path="/cadastro" />
                    <Route element={<Dashboard/>} path="/dashboard" />
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    )
}

export default App
