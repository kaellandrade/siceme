import React from "react";
import Header from "../../components/header/Header"
import cadastro from "./cadastro.css"
import { Input } from "reactstrap"
import { BiSearch } from "react-icons/bi";

function Cadastro(props) {
  return (
    <div className="Cadastro">
      <Header optionButton="Cadastro" buttonSelect={props.buttonSelect} />
      <section className="col-md-12">
          <h1 className="body">Cadastro</h1>
          <ul className="col-md-12 nav d-flex align-items-center justify-content-around">

            <li className="nav-item">
              <Input  
                icon="search"
                className="busca"
                type="search"
                placeholder="Buscar kit/material"
              />
                  
            </li>  
            
            <li>
              <button className="d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </button>
            </li>
          </ul>

      </section>
    </div>
  );
}

export default Cadastro;
