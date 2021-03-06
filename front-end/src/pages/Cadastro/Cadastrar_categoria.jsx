import React, { useState } from "react";
import Header from "../../components/header/Header"
import { Input, Form, Row, Col, FormGroup, Label, Button, FormText } from "reactstrap"
import ButtonSubMenu from "./ButtonSubMenu"
import "./index.css"
const axios = require('axios').default;


function Cadastrar_categoria(props) {

  var novaCategoria;

  const handleCadastrar = (event) => {
    event.preventDefault();
    novaCategoria = {
      cta_nome: document.getElementById("nova-categoria").value,
    };
    console.log(novaCategoria);
    postarCategoria();
  }

  const postarCategoria = async () => {  
    try {
      axios.post('http://localhost:3000/categoria', novaCategoria);
    }catch (ex) {
      console.log(ex);
    }
  }

  return (
    <div className="Cadastrar_categoria">
      <Header optionButton="Triagem" buttonS={props.buttonS} buttonSelect={props.buttonSelect} />
      <section className="nav d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="row title">
            <h1 className="body">Cadastrar categoria</h1>
          </div>
        </div>
        <main className="container-fluid flex-column" >
          <div className="row justify-content-center">
            <div className="col-md-auto">
              <div className="row">
                <button type="button" className="buttonMenu" >
                  <ButtonSubMenu texto={"Cadastrar material"} buttonSelect="Cadastrar categoria" 
                    href="/cadastro/material"
                  />
                </button>

              </div>
              <div className="row">
                <button type="button" className="buttonMenu" >
                  <ButtonSubMenu texto={"Cadastrar kit"} buttonSelect="Cadastrar categoria" 
                    href="/cadastro/kit"
                  />
                </button>

              </div>
              <div className="row">
                <button type="button" className="buttonMenu" >
                  <ButtonSubMenu texto={"Cadastrar categoria"} buttonSelect="Cadastrar categoria" />
                </button>

              </div>

            </div>

            <div className="col-md-8">

              <Form inline onSubmit={handleCadastrar} >
                  
                <Row>
                  <Col md={12}>
                    <FormGroup floating>
                      <Input
                        id="nova-categoria"
                        name="nova-categoria"
                        type="text"
                        placeholder="Nova categoria"
                      />
                      <Label for="nova-categoria">
                        Nova categoria
                      </Label>
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup check>
                  <Input
                    id="check"
                    name="check"
                    type="checkbox"
                  />
                  <Label
                    check
                    for="check"
                  >
                    Li e confirmo as informa????es acima.
                  </Label>
                </FormGroup>
                <Button className="button cadastrar" type="submit" >
                  Cadastrar
                </Button>
              </Form>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}

export default Cadastrar_categoria;
