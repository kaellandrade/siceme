import React from "react";
import { Table } from "reactstrap";
import RowTabelaTriagem from "./RowTabelaTriagem";
import index from "./index"


function TabelaTriagem(props) {

  var materiais = [
    {
      "id": "1",
      "codigo": "001817",
      "descricao": "Kit de emergencia medica",
      "qtde": "85",
      "aplicacao": "Cirurgia em geral",
      "status": "em distribuição"
    },
    {
      "id": "2",
      "codigo": "001487",
      "descricao": "Kit médico oftalmológico",
      "qtde": "45",
      "aplicacao": "Cirurgia oftalmológica",
      "status": "em desinfecção"
    },
    {
      "id": "3",
      "codigo": "005047",
      "descricao": "Kit de traqueostomia",
      "qtde": "25",
      "aplicacao": "Traqueostomia",
      "status": "em esterilização"
    }
  ];

  const renderMateriais = (materiais) => {
    return (
      materiais.map(({ id, codigo, descricao, qtde, aplicacao, status}) => {
        return <RowTabelaTriagem id={id} codigo={codigo} descricao={descricao} 
                  qtde={qtde} aplicacao={aplicacao} status={status} />
      })
    )
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