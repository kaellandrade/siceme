import React from "react";
import Header from "../../components/header/Header"
import Listagemstyle from "./ButtonSubStyle"
import { Input, Table } from "reactstrap"
import { BiSearch } from "react-icons/bi";
import ButtonSubMenu from "./ButtonSubMenu"
import index from "./index.css"
import TabelaTriagem from "./TabelaTriagem";


function Main(props) {

  return (
    <div className="Main">
      <Header optionButton="Triagem" buttonS={props.buttonS} buttonSelect={props.buttonSelect} />
      <section className="col-md-12 nav d-flex align-items-center justify-content-around">
          
          <div className="container">
            
            <div className="row title">
              <h1 className="body">Listagem Geral</h1>
            </div>
            <div className="row search">
                          
              <Input  
                className="input search"
                type="search"
                placeholder="Buscar kit/material"

              />
              <button className="button search">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
              </button>
              
            </div>

          </div>

          <main className="container flex-column" >
            <div className="row">

              <div className="col-md-2">
                <ButtonSubMenu texto={"Listagem Geral"}  />
                <ButtonSubMenu texto={"Limpeza"} href={"/triagem/limpeza"} onClick={e => e.preventDefault() }  />
                <ButtonSubMenu texto={"Desinfecção"}  />
                <ButtonSubMenu texto={"Esterilização"}  />
                <ButtonSubMenu texto={"Distribuição"}  />
              </div>

              <div className="col-md-10">
                <TabelaTriagem />
              </div>
            </div>
            
          </main>
      </section>
    </div>
  );
}

export default Main;
