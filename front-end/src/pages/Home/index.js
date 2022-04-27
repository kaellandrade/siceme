import React from "react";
import Header from "../../components/header/Header"
import home from "./home.css"
import { Input } from "reactstrap"
import { BiSearch } from "react-icons/bi";

function Home(props) {
  return (
    <div className="Home">
      <Header buttonSelect={props.buttonSelect} colorButton={props.colorButton} backgroundColor={props.backgroundColor} />
      <section className="col-md-12">
          <h1 className="body">Painel Administrativo</h1>
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

export default Home;
