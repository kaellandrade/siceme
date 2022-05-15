import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import RowTabelaTriagem from "./RowTabelaTriagem";

function TabelaTriagem(props) {

  var materiais = props.dataMaterias;
  var buttonSelect = props.buttonSelect;

  const [categoria, setCategoria] = useState([]);

  const getCategorias = async () => {  
    try {
      axios.get('http://localhost:3000/categoria')
      .then(res => {
        setCategoria(res.data);
      }); 
    }catch (ex){
      console.log(ex);
    }
  }

  const tratarButtonSelect = (buttonSelect) => {
    switch (buttonSelect) {
      case 'Limpeza - Processando':
        buttonSelect = 'LIMPEZA:Processando';
        break;
      case 'Limpeza - Pronto':
        buttonSelect = 'LIMPEZA:PRONTO';
        break;
      case 'Desinfecção - Processando':
        buttonSelect = 'DESINFECÇÃO:PROCESSANDO';
        break;
      case 'Desinfecção - Pronto':
        buttonSelect = 'DESINFECÇÃO:PRONTO';
        break;
      case 'Esterilização - Processando':
        buttonSelect = 'ESTERILIZAÇÃO:PROCESSANDO';
        break;
      case 'Esterilização - Pronto':
        buttonSelect = 'ESTERILIZAÇÃO:PRONTO';
        break;
      case 'Entregue':
        buttonSelect = 'ENTREGUE';
        break;
      case 'Devolvido':
        buttonSelect = 'DEVOLVIDO';
        break;

    }
  }

  function tratarStatus(status_nome) {
    switch (status_nome) {
      case 'LIMPEZA:Processando':
        return 'Limpeza - Processando';
      case 'LIMPEZA:PRONTO':
        return 'Limpeza - Pronto';
      case 'DESINFECÇÃO:PROCESSANDO':
       return 'Desinfecção - Processando';
      case 'DESINFECÇÃO:PRONTO':
        return 'Desinfecção - Pronto';
      case 'ESTERILIZAÇÃO:PROCESSANDO':
        return 'Esterilização - Processando';
      case 'ESTERILIZAÇÃO:PRONTO':
        return 'Esterilização - Pronto';
      case 'ENTREGUE':
        return 'Entregue';
      case 'DEVOLVIDO':
        return 'Devolvido'; 
    }
  }

  const buscarCategoria = (id_categoria) => {
    const cat = categoria.find(({id, cta_nome}) => id === id_categoria);
    return cat.cta_nome;
  }

  const renderMateriais = (materiais) => {
    if(buttonSelect == "Listagem Geral"){
      return (
        materiais.map(({ id, mtl_codigo, mtl_nome, mtl_quantidade, mtl_categoria, status, mtl_descricao,solicitante}) => { 
          let nome_categoria = buscarCategoria(mtl_categoria);
          let sts = tratarStatus(status.sts_status_nome);
          return <RowTabelaTriagem id={id} codigo={mtl_codigo} nome={mtl_nome} 
                    qtde={mtl_quantidade} aplicacao={nome_categoria} status={sts} 
                    solicitante={solicitante} descricao={mtl_descricao} />
        })
      )
    }
    else{
      return (
        materiais.map(({ id, mtl_codigo, mtl_nome, mtl_quantidade, mtl_categoria, status, mtl_descricao,solicitante}) => {
          let sts = tratarStatus(status.sts_status_nome);
          if(sts === buttonSelect){
            return <RowTabelaTriagem id={id} codigo={mtl_codigo} nome={mtl_nome} 
                    qtde={mtl_quantidade} aplicacao={mtl_categoria} status={sts} 
                    solicitante={solicitante} descricao={mtl_descricao} />
          }
        })
      )
    }
    
  } 

  useEffect(() => {
    getCategorias();
  }, [])

  return (
    <>
      <div class="table-responsive">
        <Table
          borderless
          hover
          responsive
          striped
        >
          <thead>
            <tr>
              <th>
                Código
              </th>
              <th>
                Nome
              </th>
              <th>
                Quantidade
              </th>
              <th>
                Aplicação
              </th>
              <th>
                Status
              </th>
              <th>
                Detalhes 
              </th>
              <th>
                Solicitante
              </th>
            </tr>
          </thead>
          <tbody>
            {renderMateriais(materiais)}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default TabelaTriagem;