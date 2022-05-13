import React from "react";

function RowTabela_Rel_Kits(props) {
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
      </td>
    </tr>
  );
}

export default RowTabela_Rel_Disponiveis;