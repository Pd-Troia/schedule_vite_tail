import { useState } from "react";
import { Home } from "./components/pages/Home";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Login } from "./components/pages/Login";
import { SingUp } from "./components/pages/SingUp";
function App() {  

  return (
      <>
      <BrowserRouter>
        <Routes>
        <Route element={<Home/>} path="/"/>  
        <Route element={<Login/>} path="/login"/>   
        <Route element={<SingUp/>} path="/cadastro"/>       
        </Routes>
      </BrowserRouter>        
      </>
  );
}

export default App;
