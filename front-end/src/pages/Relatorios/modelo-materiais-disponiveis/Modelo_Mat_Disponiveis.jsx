import React, { useEffect } from "react";
import Tabela_Rel_Disponiveis from "./Tabela_Rel_Disponiveis"
import { materiais } from "../../../data/data";

function Modelo_Mat_Disponiveis() {

  useEffect(() => {
    window.print();
  });

  return (
    <div id='imprimirDetalhes'>
      <h6 id="titulo-modelo-relatorio">SICEME - Relatório de materiais disponíveis</h6>
      <Tabela_Rel_Disponiveis dataMaterias={materiais}/>
 
    </div>
  );
}

export default Modelo_Mat_Disponiveis;
