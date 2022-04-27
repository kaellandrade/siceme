import React from "react";
import header from "./header.css"
import { Button } from 'reactstrap';


function ButtonHeader(props){
  return (
    <li className="nav-item">
        <a href={props.href}>
        <Button className="button">
          {props.texto}
        </Button>
        </a>  
    </li>
  ); 
}

export default ButtonHeader;