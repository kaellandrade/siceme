import React from "react";
import { Table } from "reactstrap";
import RowTabela_Rel_Disponiveis from "./RowTabela_Rel_Disponiveis";
import "./tabela_relatorio.css"

function Tabela_Rel_Disponiveis(props) {

  var materiais = props.dataMaterias;

  const renderMateriais = (materiais) => {
    return (
      materiais.map(({ id, mtl_codigo, mtl_nome, mtl_quantidade, mtl_categoria, status, mtl_descricao,solicitante}) => {
        if(status.sts_status_nome === "ESTERILIZAÇÃO:PRONTO"){
          return <RowTabela_Rel_Disponiveis id={id} codigo={ mtl_codigo} nome={mtl_nome} 
                    qtde={mtl_quantidade} aplicacao={mtl_categoria} status={status.sts_status_nome} />
        }
      })
    )
  } 

  return (
    <>
      <div class="table-responsive-relatorio">
        <Table
          borderless
          hover
          responsive
          striped
          id="tabela-relatorio"
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

export default Tabela_Rel_Disponiveis;