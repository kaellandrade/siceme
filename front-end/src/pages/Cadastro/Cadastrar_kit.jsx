import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header"
import { Input, Form, Row, Col, FormGroup, Label, Button, FormText } from "reactstrap"
import ButtonSubMenu from "./ButtonSubMenu"
import "./index.css"
import Categoria_Dropdown from "./Categoria_Dropdown";
import Select_CadastroKit from "./Select_CadastroKit";
const axios = require('axios').default;

function Main(props) {

  const [selectedValue, setSelectedValue] = useState([]);
  var novoKit;

  const handleCadastrar = (event) => {
    event.preventDefault();
    let subCat = document.getElementById("inputSubCategoria").value;
    if(subCat === 'Subcategoria' || subCat === 'None') 
      subCat = []; 

    novoKit = {
      nomeKit: document.getElementById("nome do kit").value,
      etiqueta: document.getElementById("etiqueta").value,
      materiais: selectedValue,
      qtde: document.getElementById("quantidade").value,
      imagem: document.getElementById("file image").value,
      categoria: document.getElementById("inputCategoria").value,
      subCategoria: subCat
    };
    console.log(novoKit);    
    // postarKit();
  }

  const postarKit = async () => {  
    try {
      axios.post('http://localhost:3001/cadastro/kit', novoKit);
    }catch (ex) {
      console.log(ex);
    }
  }
  
  return (

    <div className="Main">
      <Header optionButton="Triagem" buttonS={props.buttonS} buttonSelect={props.buttonSelect} />
      <section className="col-md-12 nav d-flex align-items-center justify-content-around">
        <div className="container">
          <div className="row title">
            <h1 className="body">Cadastrar kit</h1>
          </div>
        </div>
        <main className="container-fluid flex-column" >
          <div className="row">
            <div className="col-md-1">
              <div className="row">
                <button type="button" className="buttonMenu" >
                  <ButtonSubMenu texto={"Cadastrar material"} buttonSelect="Cadastrar kit" 
                    href="/cadastro/material"
                  />
                </button>
              </div>
              <div className="row">
                <button type="button" className="buttonMenu" >
                  <ButtonSubMenu texto={"Cadastrar kit"} buttonSelect="Cadastrar kit" 
                    href="/cadastro/kit"
                  />
                </button>
              </div>
              <div className="row">
                <button type="button" className="buttonMenu" >
                  <ButtonSubMenu texto={"Cadastrar categoria"} buttonSelect="Cadastrar kit" 
                    href="/cadastro/categoria"
                  />
                </button>

              </div>

            </div>

            <div className="col-md-10">

              <Form inline onSubmit={handleCadastrar} >
                <Row>
                  <Col md={6}>

                    <FormGroup floating>
                      <Input
                        id="nome do kit"
                        name="nome"
                        type="name"
                        placeholder="Nome do kit"
                      />
                      <Label for="nome do kit">
                        Nome do kit
                      </Label>
                    </FormGroup>
                  </Col>
                  <Col md={3}>
                    <FormGroup floating>
                      <Input
                        id="quantidade"
                        name="quantidade"
                        type="number"
                        min={1}
                        placeholder="Quantidade"
                      />
                      <Label for="quantidade">
                        Quantidade
                      </Label>
                    </FormGroup>
                  </Col>
                  <Col md={3}>
                    <FormGroup floating>
                      <Input
                        id="etiqueta"
                        name="etiqueta"
                        type="text"
                        placeholder="Etiqueta"
                      />
                      <Label for="etiqueta">
                        Etiqueta
                      </Label>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={5}>
                    <FormGroup>

                      <Input
                        id="file image"
                        name="file image"
                        type="file"
                        placeholder="imagem"
                      />
                      <FormText>
                        Escolha uma imagem com tamanho máximo de 2 MB.
                      </FormText>
                    </FormGroup>
                  </Col>
                  <Col md={7}>
                    <FormGroup floating>
                      <Categoria_Dropdown />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <Select_CadastroKit setProps={setSelectedValue} value={selectedValue} />    
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

export default Main;
