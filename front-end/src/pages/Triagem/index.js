import React, { useState } from "react";
import { useEffect } from "react";
import Header from "../../components/header/Header"
import Listagemstyle from "./ButtonSubStyle"
import { Input, Table } from "reactstrap"
import ButtonSubMenu from "./ButtonSubMenu"
import index from "./index.css"
import TabelaTriagem from "./TabelaTriagem";


function Main(props) {

  const [buttonSelect, setButtonSelect] = useState(localStorage.getItem('buttonSelect'));

  var materiais = [
    {
      "id": "1",
      "codigo": "001817",
      "descricao": "Kit de emergencia medica",
      "qtde": "85",
      "aplicacao": "Cirurgia em geral",
      "status": "Em distribuição"
    },
    {
      "id": "2",
      "codigo": "001487",
      "descricao": "Kit médico oftalmológico",
      "qtde": "45",
      "aplicacao": "Cirurgia oftalmológica",
      "status": "Em desinfecção"
    },
    {
      "id": "5",
      "codigo": "002341",
      "descricao": "Pinça Schimidt Reta 18cm",
      "qtde": "41",
      "aplicacao": "Cirurgia de amígdalas",
      "status": "Em esterilização"
    },
    {
      "id": "4",
      "codigo": "001343",
      "descricao": "Agulha 21G 1/2 40x8",
      "qtde": "29",
      "aplicacao": "Raqueanestesia",
      "status": "Em limpeza"
    },
    
  ];

  useEffect(() => {
    setButtonSelect(window.localStorage.getItem('buttonSelect'));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('buttonSelect', buttonSelect);
  }, [buttonSelect]);

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
                <button type="button" className="buttonMenu" onClick={ () => setButtonSelect("Listagem Geral") }  >
                  <ButtonSubMenu texto={"Listagem Geral"}  />
                </button>
                <button type="button" className="buttonMenu" onClick={ () => setButtonSelect("Em limpeza") }  > 
                  <ButtonSubMenu texto={"Limpeza"}  />
                </button>
                <button type="button" className="buttonMenu" onClick={ () => setButtonSelect("Em desinfecção") } >
                  <ButtonSubMenu texto={"Desinfecção"}  />
                </button>
                <button type="button" className="buttonMenu" onClick={ () => setButtonSelect("Em esterilização") } >
                  <ButtonSubMenu texto={"Esterilização"}  />
                </button>
                <button type="button" className="buttonMenu" onClick={ () => setButtonSelect("Em distribuição") } >
                  <ButtonSubMenu texto={"Distribuição"} />
                </button>
                
              </div>

              <div className="col-md-10">
                <TabelaTriagem buttonSelect={buttonSelect} dataMaterias={materiais} />
              </div>
            </div>
            
          </main>
      </section>
    </div>
   
  );
}

export default Main;
