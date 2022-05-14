import React from "react";
import { Table } from "reactstrap";
import RowTabela_Rel_Disponiveis from "./RowTabela_Rel_Kits";
import "./tabela_relatorio.css"

function Tabela_Rel_Kits(props) {

  var materiais = props.dataMaterias;

  const renderMateriais = (materiais) => {
    return (
      materiais.map(({ id, codigo, nome, qtde, aplicacao, status}) => {
        if(status === "Esterilização - Pronto"){
          return <RowTabela_Rel_Disponiveis id={id} codigo={codigo} nome={nome} 
                    qtde={qtde} aplicacao={aplicacao} status={status} />
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

export default Tabela_Rel_Kits;