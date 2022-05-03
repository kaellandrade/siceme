import React from "react";

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
        Em {props.status}
      </td>
    </tr>
  );
}

export default RowTabelaTriagem;