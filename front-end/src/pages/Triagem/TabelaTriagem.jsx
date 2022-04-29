import React from "react";
import { Table } from "reactstrap";
import RowTabelaTriagem from "./RowTabelaTriagem";
import index from "./index"


function TabelaTriagem(props) {

  var materiais = props.dataMaterias;
  var buttonSelect = props.buttonSelect;

  const renderMateriais = (materiais) => {
    if(buttonSelect == "Listagem Geral"){
      return (
        materiais.map(({ id, codigo, descricao, qtde, aplicacao, status}) => {
          return <RowTabelaTriagem id={id} codigo={codigo} descricao={descricao} 
                    qtde={qtde} aplicacao={aplicacao} status={status} />
        })
      )
    }
    else{
      return (
        materiais.map(({ id, codigo, descricao, qtde, aplicacao, status}) => {
          if(status === buttonSelect){
            return <RowTabelaTriagem id={id} codigo={codigo} descricao={descricao} 
                      qtde={qtde} aplicacao={aplicacao} status={status} />
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
                Descrição
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