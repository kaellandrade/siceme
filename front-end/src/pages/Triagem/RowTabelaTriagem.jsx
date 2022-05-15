import React from "react";
import Modal_detalhes from "../../components/Modal/Modal_detalhes";
import "./rowTabelaTriagem.css";
import Modal_status from "../../components/Modal/Modal_status";

function RowTabelaTriagem(props) {
  return (
    <tr>
      <td scope="row">
        {props.codigo}
      </td>
      <td>
        {props.nome}
      </td>
      <td>
        {props.qtde}
      </td>
      <td>
        {props.aplicacao}
      </td>
      <td>
        {props.status}
        <Modal_status status={props.status} />
      </td>
      <td>
        <Modal_detalhes codigo={props.codigo} nome={props.nome} qtde={props.qtde} 
                        aplicacao={props.aplicacao} status={props.status}
                        descricao={props.descricao}
        />
      </td>
      <td>
        {props.solicitante}
      </td>
    </tr>
  );
}

export default RowTabelaTriagem;