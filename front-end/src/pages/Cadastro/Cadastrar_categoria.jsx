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
      categoria: document.getElementById("nova-categoria").value,
      subcategoria: document.getElementById("nova-sub-categoria").value
    };
    console.log(novaCategoria);
    // postarCategoria();
  }

  const postarCategoria = async () => {  
    try {
      axios.post('http://localhost:3001/cadastro/categoria', novaCategoria);
    }catch (ex) {
      console.log(ex);
    }
  }

  return (
    <div className="Cadastrar_categoria">
      <Header optionButton="Triagem" buttonS={props.buttonS} buttonSelect={props.buttonSelect} />
      <section className="col-md-12 nav d-flex align-items-center justify-content-around">
        <div className="container">
          <div className="row title">
            <h1 className="body">Cadastrar categoria</h1>
          </div>
        </div>
        <main className="container-fluid flex-column" >
          <div className="row">
            <div className="col-md-1">
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

            <div className="col-md-10">

              <Form inline onSubmit={handleCadastrar} >
                  
                <Row>
                  <Col md={3}>
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

                  <Col md={3}>
                    <FormGroup floating>
                      <Input
                        id="nova-sub-categoria"
                        name="nova-sub-categoria"
                        type="text"
                        placeholder="Nova subcategoria"
                      />
                      <Label for="nova-sub-categoria">
                        Nova subcategoria
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
                    Li e confirmo as informações acima.
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
