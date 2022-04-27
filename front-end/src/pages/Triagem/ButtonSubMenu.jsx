import React from "react";
import { ButtonSubM } from "./ButtonSubStyle";


function ButtonSubMenu(props) {
  return (
    <li className="nav-item">
      <a href={props.href}>
        <ButtonSubM className="button" size="lg" block buttonS={props.buttonS} buttonSelect={props.buttonSelect}  >
          {props.texto}
        </ButtonSubM>
      </a>
    </li>
  );
}

export default ButtonSubMenu;