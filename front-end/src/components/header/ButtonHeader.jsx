import React from "react";
import {ButtonH} from "./headerstyle.js";


function ButtonHeader(props) {
  return (
    <li className="nav-item">
      <a href={props.href}>
        <ButtonH className="button" buttonS={props.buttonS} buttonSelect={props.buttonSelect} colorButton={props.colorButton} backgroundColor={props.backgroundColor} >
          {props.texto}
        </ButtonH>
      </a>
    </li>
  );
}

export default ButtonHeader;