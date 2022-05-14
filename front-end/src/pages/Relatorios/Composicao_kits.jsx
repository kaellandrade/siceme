import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header"
import { Input, Form, Row, Col, FormGroup, Label, Button, FormText } from "reactstrap"
import ButtonSubMenu from "../Cadastro/ButtonSubMenu";
import "./index.css";
import Select_Composicao_Kits from "./Select_Composicao_Kits";



function Main(props) {

  const [buttonSelect, setButtonSelect] = useState("Composição dos kits");
  const [selectedValue, setSelectedValue] = useState([]);

  useEffect(() => {
    sessionStorage.setItem('kits_impressao', selectedValue);
  },[selectedValue]);
  
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
                    href="/relatorios/devolucoes"
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
                    href="/relatorios/composicao-kits"
                  />
                </button>

              </div>

            </div>

            <div className="col-md-8">
              <Form inline >
                <Row>
                  <Col md={12}>
                  <Select_Composicao_Kits setProps={setSelectedValue} value={selectedValue} />
                  </Col>
                </Row>
                <Row>
                  <Col md={3}>
                    <Button 
                      className='button imprimir modelo composicao kits' 
                      href="" target="_blank"
                    >
                        Gerar Relatório
                    </Button>
                  </Col>
                </Row>
              </Form>

            </div>
          </div>

        </main>
      </section>

    </div>


  );
}


export default Main;
