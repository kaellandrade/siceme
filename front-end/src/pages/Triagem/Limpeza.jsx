import React from "react";
import Header from "../../components/header/Header"
import Listagemstyle from "./ButtonSubStyle"
import { Input } from "reactstrap"
import { BiSearch } from "react-icons/bi";
import ButtonSubMenu from "./ButtonSubMenu"
import listagem from "./listagem.css"


function Limpeza(props) {
  return (
    <div className="Limpeza">
      <Header optionButton="Triagem" buttonS={props.buttonS} buttonSelect={props.buttonSelect} />
      <section className="col-md-12 nav d-flex align-items-center justify-content-around">
          <h1 className="body">Limpeza</h1>
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

          <main className="flex-column" >
            <ButtonSubMenu texto={"Listagem Geral"} />
            <ButtonSubMenu texto={"Limpeza"}  />
            <ButtonSubMenu texto={"Desinfecção"} />
            <ButtonSubMenu texto={"Esterilização"} />
            <ButtonSubMenu texto={"Distribuição"} />
          </main>

          {window.location.pathname}
      </section>
    </div>
  );
}

export default Limpeza;