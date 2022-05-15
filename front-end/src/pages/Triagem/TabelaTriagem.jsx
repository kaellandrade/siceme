import React from "react";
import { Table } from "reactstrap";
import RowTabelaTriagem from "./RowTabelaTriagem";

function TabelaTriagem(props) {

  var materiais = props.dataMaterias;
  var buttonSelect = props.buttonSelect;

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
      
      // default:
      //   buttonSelect = 'Limpeza - Processando';
    }
  }

  const renderMateriais = (materiais) => {
    if(buttonSelect == "Listagem Geral"){
      return (
        materiais.map(({ id, mtl_codigo, mtl_nome, mtl_quantidade, mtl_categoria, mtl_status_id, mtl_descricao,solicitante}) => {
          return <RowTabelaTriagem id={id} codigo={mtl_codigo} nome={mtl_nome} 
                    qtde={mtl_quantidade} aplicacao={mtl_categoria} status={mtl_status_id} 
                    solicitante={solicitante} descricao={mtl_descricao} />
        })
      )
    }
    else{
      return (
        materiais.map(({ id, mtl_codigo, mtl_nome, mtl_quantidade, mtl_categoria, mtl_status_id, mtl_descricao,solicitante}) => {
          if(mtl_status_id === buttonSelect){
            return <RowTabelaTriagem id={id} codigo={mtl_codigo} nome={mtl_nome} 
                    qtde={mtl_quantidade} aplicacao={mtl_categoria} status={mtl_status_id} 
                    solicitante={solicitante} descricao={mtl_descricao} />
          }
        })
      )
    }
    
  } 

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