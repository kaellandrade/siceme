import React from "react";
import { Table } from "reactstrap";
import RowTabelaTriagem from "./RowTabelaTriagem";

function TabelaTriagem(props) {

  var materiais = props.dataMaterias;
  var buttonSelect = props.buttonSelect;

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
        materiais.map(({ id, codigo, nome, qtde, aplicacao, status, solicitante}) => {
          if(status === buttonSelect){
            return <RowTabelaTriagem id={id} codigo={codigo} nome={nome} 
                      qtde={qtde} aplicacao={aplicacao} status={status} solicitante={solicitante} />
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