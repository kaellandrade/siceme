import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Arsenal from './pages/Arsenal/Arsenal';
import Cadastro from './pages/Cadastro/index';
import Cadastrar_categoria from './pages/Cadastro/Cadastrar_categoria';
import Entregas from './pages/Relatorios/Entregas';
import Triagem from './pages/Triagem/index'
import Login from './pages/Login/index'
import Cadastrar_kit from "./pages/Cadastro/Cadastrar_kit"
import Devolucoes from "./pages/Relatorios/Devolucoes";
import Materiais_disponiveis from "./pages/Relatorios/Materiais_disponiveis";
import Composicao_kits from "./pages/Relatorios/Composicao_kits";

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
        <Route path="/cadastro/material" element={
          <Cadastro buttonSelect="Cadastro" />
          } 
        />
        <Route path="/cadastro/categoria" element={
          <Cadastrar_categoria buttonSelect="Cadastro" />
          } 
        />
        <Route path="/cadastro/kit" element={
          <Cadastrar_kit buttonSelect="Cadastro" />
          } 
        />
        <Route path="/relatorios/entregas" element={
          <Entregas buttonSelect="Relatórios" />
          } 
        />
        <Route path="/relatorios/devolucoes" element={
          <Devolucoes buttonSelect="Relatórios" />
          } 
        />
        <Route path="/relatorios/materiais-disponiveis" element={
          <Materiais_disponiveis buttonSelect="Relatórios" />
          } 
        />
        <Route path="/relatorios/composicao-kits" element={
          <Composicao_kits buttonSelect="Relatórios" />
          } 
        />
        
    
      </Routes>
    </BrowserRouter>
  );
}

export default MainRouter;