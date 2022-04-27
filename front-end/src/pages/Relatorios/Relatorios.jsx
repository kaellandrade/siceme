import React from "react";
import Header from "../../components/header/Header"
import relatorios from "./relatorios.css"
import { Input } from "reactstrap"
import { BiSearch } from "react-icons/bi";

function Relatorios(props) {
  return (
    <div className="Relatorios">
      <Header optionButton="Relatorios" buttonSelect={props.buttonSelect} />
      <section className="col-md-12">
          <h1 className="body">Relatorios</h1>
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

      </section>
    </div>
  );
}

export default Relatorios;
