import React, { useState } from "react";
import Header from "../../components/header/Header"
import { Input, Form, Row, Col, FormGroup, Label, Button, FormText } from "reactstrap"
import ButtonSubMenu from "../Cadastro/ButtonSubMenu"
import "./entregas.css"
import Categoria_Dropdown from "../Cadastro/Categoria_Dropdown";

function Main(props) {

  const [buttonSelect, setButtonSelect] = useState("Entregas");

  return (

    <div className="Main">
      <Header optionButton="Relatórios" buttonS={props.buttonS} buttonSelect={props.buttonSelect} />
      <section className="col-md-12 nav d-flex align-items-center justify-content-around">
        <div className="container">
          <div className="row title">
            <h1 className="body">{buttonSelect}</h1>
          </div>
        </div>

        <main className="container-fluid flex-column" >
          <div className="row">
            <div className="col-md-2">
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
                    href=""
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

            <div className="col-md-10">

              <Form inline >
                <Row>
                  <Col md={6}>

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
                  <Col md={12}>
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
