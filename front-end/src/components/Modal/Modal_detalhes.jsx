import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { Input, Form, Row, Col, FormGroup, Label, FormText } from "reactstrap"
import { useState } from 'react';


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
          Modal title
        </ModalHeader>
        <ModalBody>
          <div className="container-fluid">
            <Form inline >
              <Row>
                <Col md={5}>

                  <FormGroup floating>
                    <Input
                      id="nome do material"
                      name="nome"
                      type="name"
                      placeholder="Nome do material"
                      readOnly
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
                      readOnly
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
                      readOnly
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
                      readOnly
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
                      readOnly
                    />
                    <Label for="quantidade">
                      Quantidade
                    </Label>
                  </FormGroup>
                </Col>
              </Row>

              

            </Form>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button className='button imprimir detalhes' onClick={() => window.print()} >
            Imprimir
          </Button>
        </ModalFooter>
      </Modal>
    </div>

  );
}

export default Modal_detalhes;