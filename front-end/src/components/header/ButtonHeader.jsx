import React from "react";
import { ButtonH } from "./headerstyle.js";



function ButtonHeader(props) {
  return (

    <a href={props.href} className="abuttonHeader" >
      <ButtonH className="button" texto={props.texto}
        buttonSelect={props.buttonSelect}
      >
        {props.texto}
      </ButtonH>
    </a>

  );
}

export default ButtonHeader;