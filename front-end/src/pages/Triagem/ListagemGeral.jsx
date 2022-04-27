import React from "react";
import Header from "../../components/header/Header"
import Listagemstyle from "./ButtonSubStyle"
import { Input } from "reactstrap"
import { BiSearch } from "react-icons/bi";
import ButtonSubMenu from "./ButtonSubMenu"
import listagem from "./listagem.css"


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

          <main className="flex-column" >
            <ButtonSubMenu texto={"Listagem Geral"} />
            <ButtonSubMenu texto={"Limpeza"}  />
            <ButtonSubMenu texto={"Desinfecção"} />
            <ButtonSubMenu texto={"Esterilização"} />
            <ButtonSubMenu texto={"Distribuição"} />
           
            

          </main>

      </section>
    </div>
  );
}

export default ListagemGeral;
