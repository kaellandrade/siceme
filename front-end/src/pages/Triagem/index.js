import React from "react";
import Header from "../../components/header/Header"
import Listagemstyle from "./ButtonSubStyle"
import { Input, Table } from "reactstrap"
import { BiSearch } from "react-icons/bi";
import ButtonSubMenu from "./ButtonSubMenu"
import index from "./index.css"
import TabelaTriagem from "./TabelaTriagem";


function Main(props) {

  var materiais = [
    {
      "id": "1",
      "codigo": "001817",
      "descricao": "Kit de emergencia medica",
      "qtde": "85",
      "aplicacao": "Cirurgia em geral",
      "status": "em distribuição"
    },
    {
      "id": "2",
      "codigo": "001487",
      "descricao": "Kit médico oftalmológico",
      "qtde": "45",
      "aplicacao": "Cirurgia oftalmológica",
      "status": "em desinfecção"
    },
    {
      "id": "5",
      "codigo": "002341",
      "descricao": "Pinça Schimidt Reta 18cm",
      "qtde": "41",
      "aplicacao": "Cirurgia de amígdalas",
      "status": "em esterilização"
    },
    {
      "id": "4",
      "codigo": "001343",
      "descricao": "Agulha 21G 1/2 40x8",
      "qtde": "29",
      "aplicacao": "Raqueanestesia",
      "status": "em limpeza"
    },
    
  ];

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
                <ButtonSubMenu texto={"Limpeza"} href={"/triagem/limpeza"} />
                <ButtonSubMenu texto={"Desinfecção"}  />
                <ButtonSubMenu texto={"Esterilização"}  />
                <ButtonSubMenu texto={"Distribuição"}  />
              </div>

              <div className="col-md-10">
                <TabelaTriagem dataMaterias={materiais} />
              </div>
            </div>
            
          </main>
      </section>
    </div>
  );
}

export default Main;
