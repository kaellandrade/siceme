import React from "react";
import { ButtonSubM } from "./ButtonSubStyle";


function RowTabelaTriagem(props) {
  return (
    <tr>
      <td scope="row">
        {props.codigo}
      </td>
      <td>
        {props.descricao}
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

export default RowTabelaTriagem;