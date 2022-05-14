import React, { useEffect } from "react";
import Tabela_Rel_Kits from "./Tabela_Rel_Kits"
import { materiais } from "../../../data/data";

function Modelo_Composicao_Kits() {

  const tratarMateriais = (materiais) => {
    return (
      materiais.map(({ codigo, nome }) => {
        let aux = codigo + " - " + nome;
        let obj = {value: aux, label: aux}
        return setOptions(options => [...options, obj]);
      })
    );
  }

  useEffect(() => {
    window.print();
  });

  return (
    <div id='imprimirDetalhes'>
      <h6 id="titulo-modelo-relatorio">SICEME - Relatório de materiais disponíveis</h6>
      {tratarMateriais(materiais)}
      <Tabela_Rel_Kits dataMaterias={materiais}/>
    </div>
  );
}

export default Modelo_Composicao_Kits;
