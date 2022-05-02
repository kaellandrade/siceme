import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Arsenal from './pages/Arsenal/Arsenal';
import Cadastro from './pages/Cadastro/index';
import Relatorios from './pages/Relatorios/Relatorios';
import Triagem from './pages/Triagem/index'
import Login from './pages/Login/index'

function MainRouter() {

  return (
    <BrowserRouter>
      <Routes>
         
        <Route path="/" element={
          <Login />
          } 
        />
        <Route path="/triagem" element={
          <Triagem buttonSelect="Triagem" />
          } 
        />
        <Route path="/arsenal" element={
          <Arsenal buttonSelect="Arsenal" />
          } 
        />
        <Route path="/cadastro" element={
          <Cadastro buttonSelect="Cadastro" />
          } 
        />
        <Route path="/relatorios" element={
          <Relatorios buttonSelect="Relatorios" />
          } 
        />
        
    
      </Routes>
    </BrowserRouter>
  );
}

export default MainRouter;