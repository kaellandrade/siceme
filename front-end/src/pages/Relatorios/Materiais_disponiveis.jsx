import React, { useState } from "react";
import Header from "../../components/header/Header"
import { Button } from "reactstrap"
import ButtonSubMenu from "../Cadastro/ButtonSubMenu"
import "./index.css"

function Main(props) {

  const [buttonSelect, setButtonSelect] = useState("Materiais Disponíveis");

  return (

    <div className="Main">
      <Header optionButton="Relatórios" buttonS={props.buttonS} buttonSelect={props.buttonSelect} />
      <section className="nav d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="row title">
            <h1 className="body">{buttonSelect}</h1>
          </div>
        </div>

        <main className="container-fluid flex-column" >
          <div className="row justify-content-center">
          <div className="col-md-auto">
              <div className="row">
                <button type="button" className="buttonMenu" onClick={(event) => { event.preventDefault(); setButtonSelect("Entregas") }} >
                  <ButtonSubMenu texto={"Entregas"} buttonSelect={buttonSelect} />
                </button>
              </div>
              <div className="row">
                <button type="button" className="buttonMenu" >
                  <ButtonSubMenu texto={"Devoluções"} buttonSelect={buttonSelect}
                    href=""
                  />
                </button>

              </div>
              <div className="row">
                <button type="button" className="buttonMenu" >
                  <ButtonSubMenu texto={"Materiais Disponíveis"} buttonSelect={buttonSelect} 
                    href="/relatorios/materiais-disponiveis"
                  />
                </button>
              </div>
              <div className="row">
                <button type="button" className="buttonMenu" >
                  <ButtonSubMenu texto={"Composição dos kits"} buttonSelect={buttonSelect} 
                    href=""
                  />
                </button>

              </div>

            </div>

            <div className="col-md-8">
              <Button 
                className='button imprimir modelo materiais disponiveis' 
                href="/relatorios/materiais-disponiveis/imprimir " target="_blank"
              >
                  Gerar Relatório
              </Button>

            </div>
          </div>

        </main>
      </section>

    </div>
  );
}

export default Main;
