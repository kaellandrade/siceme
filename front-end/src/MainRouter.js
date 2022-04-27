import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index'
import ListagemGeral from './pages/Triagem/ListagemGeral';

function MainRouter() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home buttonHeader='active' />} />
        <Route path="/triagem/listagemgeral"
          element={<ListagemGeral
            buttonHeader='active' />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRouter;