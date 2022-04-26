import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index'

function MainRouter() {

  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" exact element={<Home />} />
          </Routes>
      </BrowserRouter>
  );
}

export default MainRouter;