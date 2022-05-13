import React, { useState } from "react";
import Header from "../../components/header/Header"
import { Input, Form, Row, Col, FormGroup, Label, Button, FormText } from "reactstrap"
import ButtonSubMenu from "./ButtonSubMenu"
import "./index.css"
import Categoria_Dropdown from "./Categoria_Dropdown";
import { AxiosError } from "axios";
const axios = require('axios').default;


function Main(props) {

  const [buttonSelect, setButtonSelect] = useState("Cadastrar material");
  var novoMaterial;

  const handleCadastrar = (event) => {
    event.preventDefault();
    let subCat = document.getElementById("inputSubCategoria").value;
    if(subCat === 'Subcategoria' || subCat === 'None') 
      subCat = []; 

    novoMaterial = {
      mtl_nome: document.getElementById("nome do material").value,
      mtl_quantidade: document.getElementById("quantidade").value,
    //   mtl_etiqueta: document.getElementById("etiqueta").value,
    //   mtl_descricao: document.getElementById("descricao").value,
    //   mtl_imagem: document.getElementById("file image").value,
    //   mtl_categoria: document.getElementById("inputCategoria").value,
    //   mtl_subCategoria: subCat,
    //   mtl_status: "Em Limpeza"

    };
    console.log(novoMaterial);

    postarMaterial();
  
    
  }

  const postarMaterial = async () => {  
    try {
      axios.post('http://localhost:3000/material', novoMaterial)
      .then(res => {
        if(res.data)  {
          alert("Material cadastrado com sucesso!");
          document.getElementById("nome do material").value = "";
          document.getElementById("quantidade").value = "";
          document.getElementById("etiqueta").value = "";
          document.getElementById("descricao").value = "";
          document.getElementById("file image").value = "";
          document.getElementById("inputCategoria").value = "";
          document.getElementById("inputSubCategoria").value = "";
        }
      }).catch(e => {
        alert(e.message)
      }); 
    }catch (ex) {
      console.log(ex);
    }
  }


  return (

    <div className="Main">
      <Header optionButton="Triagem" buttonS={props.buttonS} buttonSelect={props.buttonSelect} />
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
                <button type="button" className="buttonMenu" onClick={(event) => { event.preventDefault(); setButtonSelect("Cadastrar materiais") }} >
                  <ButtonSubMenu texto={"Cadastrar material"} buttonSelect={buttonSelect} />
                </button>

              </div>
              <div className="row">
                <button type="button" className="buttonMenu" >
                  <ButtonSubMenu texto={"Cadastrar kit"} buttonSelect={buttonSelect} 
                    href="/cadastro/kit"
                  />
                </button>

              </div>
              <div className="row">
                <button type="button" className="buttonMenu" >
                  <ButtonSubMenu texto={"Cadastrar categoria"} buttonSelect={buttonSelect} 
                    href="/cadastro/categoria"
                  />
                </button>

              </div>

            </div>

            <div className="col-md-8">

              <Form inline onSubmit={handleCadastrar} >
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
