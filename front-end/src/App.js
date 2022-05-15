import React, { useState } from "react";
import DataContext from './data/DataContext';
import MainRouter from "./MainRouter";
import GlobalStyle from "./styles/global"

function App() {

  const [credenciais, setCredenciais] = useState({});

  return (
    <DataContext.Provider value={[credenciais, setCredenciais]}>
      <MainRouter />
      <GlobalStyle />
    </DataContext.Provider>
  );
}

export default App;
