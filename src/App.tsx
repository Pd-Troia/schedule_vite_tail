import { useState } from "react";
import { Home } from "./components/pages/Home";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Login } from "./components/pages/Login";
import { Register } from "./components/pages/Register";
function App() {  

  return (
      <>
      <BrowserRouter>
        <Routes>
        <Route element={<Home/>} path="/"/>  
        <Route element={<Login/>} path="/login"/>   
        <Route element={<Register/>} path="/cadastro"/>       
        </Routes>
      </BrowserRouter>        
      </>
  );
}

export default App;
