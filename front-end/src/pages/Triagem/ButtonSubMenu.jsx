import React from "react";
import { ButtonSubM } from "./ButtonSubStyle";

function ButtonSubMenu(props) {

  return (
    <a href="" >
      <ButtonSubM
        className="button" size="lg" block
        texto={props.texto} buttonSelect={props.buttonSelect}
      >
        {props.texto}
      </ButtonSubM>
    </a>

  );
}

export default ButtonSubMenu;