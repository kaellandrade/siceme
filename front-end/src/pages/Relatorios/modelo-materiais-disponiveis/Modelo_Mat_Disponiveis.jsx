import React, { useEffect, useState } from "react";
import Tabela_Rel_Disponiveis from "./Tabela_Rel_Disponiveis"
import { materiais } from "../../../data/data";
import axios from "axios";

function Modelo_Mat_Disponiveis() {

  const [dataMateriais, setDataMateriais] = useState([]);

  const getMateriais = async () => {  
    try {
      axios.get('http://localhost:3000/material')
      .then(res => {
        setDataMateriais(res.data);
        console.log(dataMateriais)
      }); 
    }catch (ex){
      console.log(ex);
    }
  }

  useEffect(() => {
    getMateriais();
  }, [])

  useEffect(() => {
    setTimeout(() => {
      window.print()
    }, 500);
  });

  return (
    <div id='imprimirDetalhes'>
      <h6 id="titulo-modelo-relatorio">SICEME - Relatório de materiais disponíveis</h6>
      <Tabela_Rel_Disponiveis dataMaterias={dataMateriais}/>
 
    </div>
  );
}

export default Modelo_Mat_Disponiveis;
