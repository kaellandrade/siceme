import React from "react";
import Header from "../../components/header/Header"
import Listagem from "./listagem.css"
import { Input } from "reactstrap"
import { BiSearch } from "react-icons/bi";

function ListagemGeral(props) {
  return (
    <div className="ListagemGeral">
      <Header optionButton="Triagem" buttonS={props.buttonS} buttonSelect={props.buttonSelect} />
      <section className="col-md-12 nav d-flex align-items-center justify-content-around">
          <h1 className="body">Listagem Geral</h1>
          <ul className="col-md-12 nav d-flex align-items-center justify-content-around">

            <li className="nav-item">
              <Input  
                icon="search"
                className="busca"
                type="search"
                placeholder="Buscar kit/material"
              />
                  
            </li>  
            
            <li className="nav-item">
              <button className="button-search">
                <BiSearch className="iconSearch" size={25} color="#316B83" />
              </button>
              
            </li>
          </ul>

          <div className="flex-column" >
            
            <h3>Listagem Geral</h3>
            <h3>Limpeza</h3>

          </div>

      </section>
    </div>
  );
}

export default ListagemGeral;
