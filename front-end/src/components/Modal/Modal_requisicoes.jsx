import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { Form } from "reactstrap"
import { useState } from 'react';
import Select_ModalRequisicoes from './Select_ModalRequisicoes';
import "./modal_requisicoes.css"


function Modal_requisicoes(props) {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <Button
        id="button-modal-requisitar"
        className='button requisitar'
        color="light"
        onClick={() => setModal(true)}
      >
        Requisitar
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
          Requisitar material / kit
        </ModalHeader>
        <ModalBody>
          <div className="container-fluid">
            <Form>
              <Select_ModalRequisicoes/>
            </Form>
          </div>
          
        </ModalBody>
        <ModalFooter>
          <Button className='button imprimir detalhes' onClick={() => window.print()} >
            Confirmar
          </Button>
        </ModalFooter>
      </Modal>
    </div>

  );
}

export default Modal_requisicoes;