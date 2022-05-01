import React, { useState } from "react";
import { useEffect } from "react";
import Header from "../../components/header/Header"
import Listagemstyle from "./ButtonSubStyle"
import { Input, Form, Row, Col, FormGroup, Label, Button, Dropdown, DropdownToggle, DropdownItem, DropdownMenu, FormText } from "reactstrap"
import ButtonSubMenu from "./ButtonSubMenu"
import index from "./index.css"
import { materiais } from "../../data/data"

function Main(props) {

  const [buttonSelect, setButtonSelect] = useState("Cadastrar materiais");

  const handleCadastrar = (event) => {
    event.preventDefault();
    var novoMaterial = {
      nomeMaterial: document.getElementById("nome do material").value,
      fabricante: document.getElementById("fabricante").value,
      validade: document.getElementById("validade").value,
      descricao: document.getElementById("descricao").value,
      qtde: document.getElementById("quantidade").value,
      imagem: document.getElementById("file image").value,
      categoria: document.getElementById("inputCategoriaP").value
    };
  }


  return (

    <div className="Main">
      <Header optionButton="Triagem" buttonS={props.buttonS} buttonSelect={props.buttonSelect} />
      <section className="col-md-12 nav d-flex align-items-center justify-content-around">

        <div className="container">

          <div className="row title">
            <h1 className="body">{buttonSelect}</h1>
          </div>


        </div>

        <main className="container-fluid flex-column" >
          <div className="row">

            <div className="col-md-1">
              <button type="button" className="buttonMenu" onClick={ (event) => { event.preventDefault(); setButtonSelect("Cadastrar materiais")} } >
                <ButtonSubMenu texto={"Cadastrar materiais"} buttonSelect={buttonSelect} />
              </button>
              <button type="button" className="buttonMenu" onClick={ (event) => { event.preventDefault(); setButtonSelect("Cadastrar kit")} } >
                <ButtonSubMenu texto={"Cadastrar kit"} buttonSelect={buttonSelect} />
              </button>
              <button type="button" className="buttonMenu" onClick={ (event) => { event.preventDefault(); setButtonSelect("Cadastrar colaboradores")} } >
                <ButtonSubMenu texto={"Cadastrar colaboradores"} buttonSelect={buttonSelect} />
              </button>

            </div>

            <div className="col-md-10">
              
              <Form inline onSubmit={handleCadastrar} >
                <Row>
                  <Col md={5}>
                    <FormGroup floating>
                      <Input
                        id="nome do material"
                        name="nome"
                        type="name"
                        placeholder="Nome do material"
                      />
                      <Label for="nome do material">
                        Nome do material
                      </Label>
                    </FormGroup>
                  </Col>
                  <Col md={5}>
                    <FormGroup floating>
                      <Input
                        id="fabricante"
                        name="name"
                        type="name"
                        placeholder="Fabricante"
                      />
                      <Label for="fabricante">
                        Fabricante
                      </Label>
                    </FormGroup>
                  </Col>
                  <Col md={2}>
                    <FormGroup floating>
                      <Input
                        id="validade"
                        name="validade"
                        type="date"
                        placeholder="Validade"
                      />
                      <Label for="validade">
                        Validade
                      </Label>
                    </FormGroup>
                  </Col>
                </Row>
                
                <Row>
                  <Col md={10}>
                    <FormGroup floating>
                      
                      <Input
                        id="descricao"
                        name="descricao"
                        type="textarea"
                        maxLength={250}
                        placeholder="Descrição do material"
                      />
                      <Label for="descricao">
                        Descrição do material
                      </Label>
                    </FormGroup>
                  </Col>
                  
                  
                  <Col md={2}>
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
                </Row>

                <Row>
                  <Col md={4}>
                    <FormGroup>

                      <Input
                        id="file image"
                        name="file image"
                        type="file"
                        placeholder="imagem"
                      />
                      <FormText>
                        Escolha uma imagem com tamanho máximo de 2 mb.
                      </FormText>
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup floating>
                      <div className="categorias col-md-8 d-flex">
                          <select id="inputCategoriaP" className="form-select">
                            <option disabled selected>Categoria/Aplicação</option>
                            <option>Cirurgia em geral</option>
                            <option>Cirurgia de amígdalas</option>
                            <option>Raqueanestesia</option>
                          </select>
                      </div>
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
                    Confirmo as informações acima
                  </Label>
                </FormGroup>
                <Button className="button cadastrar material" type="submit" >
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
