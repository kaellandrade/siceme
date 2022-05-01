import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Arsenal from './pages/Arsenal/Arsenal';
import Cadastro from './pages/Cadastro/Cadastro';
import Relatorios from './pages/Relatorios/Relatorios';
import Limpeza from './pages/Triagem/Limpeza'
import Triagem from './pages/Triagem/index'
import Login from './pages/Login/index'

function MainRouter() {

  return (
    <BrowserRouter>
      <Routes>

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
        <Route path="/" element={
          <Login />
          } 
        />
    
      </Routes>
    </BrowserRouter>
  );
}

export default MainRouter;