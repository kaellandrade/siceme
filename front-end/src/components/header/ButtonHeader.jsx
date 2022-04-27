import React from "react";
import header from "./headerstyle.js"
import { Button } from 'reactstrap';



function ButtonHeader(props) {
  return (
    <li className="nav-item">
      <a href={props.href}>
        <Button className="button" buttonHeader='false' >
          {props.texto}
        </Button>
      </a>
    </li>
  );
}

export default ButtonHeader;