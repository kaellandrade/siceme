import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { Input, Form, Row, Col, FormGroup, Label, FormText } from "reactstrap"
import { useState } from 'react';
import "./modal_detalhes.css";


function Modal_detalhes(props) {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <Button
        className='button mais-detalhes'
        color="link"
        onClick={() => setModal(true)}
      >
        Mais detalhes
      </Button>

      <Modal
        id='imprimirDetalhes'
        centered
        fullscreen=""
        size="xl"
        isOpen={modal}
        toggle={() => setModal(false)}
      >
        <ModalHeader toggle={() => setModal(false)}>
          Informações detalhadas
        </ModalHeader>
        <ModalBody>
          <div className="container-fluid">
            <Form inline >
              <div className="row">
                <Col md={8}>
                  <Row>
                    <Col md={6}>
                      <FormGroup floating>
                        <Input
                          id="nome do material"
                          name="nome"
                          type="text"
                          value={props.nome}
                          readOnly
                        />
                        <Label for="nome do material">
                          Nome do material
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup floating>
                        <Input
                          id="quantidade"
                          name="quantidade"
                          type="number"
                          min={1}
                          placeholder="Quantidade"
                          value={props.qtde}
                          readOnly
                        />
                        <Label for="quantidade">
                          Quantidade
                        </Label>
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={4}>
                      <FormGroup floating>
                        <Input
                          id="codigo"
                          name="codigo"
                          type="text"
                          placeholder="codigo"
                          value={props.codigo}
                          readOnly
                        />
                        <Label for="codigo">
                          Código
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col md={4}>
                      <FormGroup floating>
                        <Input
                          id="aplicacao"
                          name="aplicacao"
                          type="text"
                          placeholder="Auantidade"
                          value={props.aplicacao}
                          readOnly
                        />
                        <Label for="aplicacao">
                          Aplicação
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col md={4}>
                      <FormGroup floating>
                        <Input
                          id="status"
                          name="status"
                          type="text"
                          placeholder="Status"
                          value={props.status}
                          readOnly
                        />
                        <Label for="status">
                          Status
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
                          value={props.descricao}
                          readOnly
                        />
                        <Label for="descricao">
                          Descrição do material
                        </Label>
                      </FormGroup>
                    </Col>
                  </Row>
                </Col>
                <Col md={4}>
                  <img src="https://i.imgur.com/OCvs0SP.jpg" class="img-thumbnail" alt="material cirúrgico"/>
                </Col>
              </div>
            </Form>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button className='button imprimir detalhes' onClick={() => window.print()} >
            Imprimir
          </Button>
          <Button className='button editar material' >
            Editar(admin)
          </Button>
        </ModalFooter>
      </Modal>
    </div>

  );
}

export default Modal_detalhes;