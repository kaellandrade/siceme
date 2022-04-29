import React, { useContext } from "react";
import { ButtonSubM } from "./ButtonSubStyle";
import TabelaTriagem from "./TabelaTriagem";
import DataContext from "./data/DataContext";


function ButtonSubMenu(props) {

  const context = useContext(DataContext);

  


  return (
    <li className="nav-item">
      <a href="" >
        <ButtonSubM 
          className="button" size="lg" block 
          buttonS={props.buttonS} buttonSelect={props.buttonSelect}  
        >
          {props.texto}
          {/* {context.buttonSelect.buttonSelect} */}
        </ButtonSubM>
      </a>
    </li>
  );
}

export default ButtonSubMenu;