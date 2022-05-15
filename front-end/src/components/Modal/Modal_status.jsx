import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { Form } from "reactstrap"
import { useState } from 'react';
import "./modal_status.css"


function Modal_status(props) {
  const [modal, setModal] = useState(false);

  const renderizarStatus = (stSetado) => {
    let status = [
      'Limpeza - Processando',
      'Limpeza - Pronto',
      'Desinfecção - Processando',
      'Desinfecção - Pronto',
      'Esterelização - Processando',
      'Esterelização - Pronto',
      'Entregue',
      'Devolvido'
    ];
    return (
      status.map((sts) => {
        if(sts != stSetado){
          return <option>{sts}</option>
        }
      })
    )
  }

  return (
    <div>
      <Button id="button-change-sts" onClick={() => setModal(true)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000" class="bi bi-arrow-left-right" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"/>
        </svg>
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
          Alterar Status
        </ModalHeader>
        <ModalBody>
          <div className="container-fluid">
            <Form>
              <select className="form-select">  
                <option selected>{props.status}</option>
                {renderizarStatus(props.status)}
              </select>
            </Form>
          </div>
          
        </ModalBody>
        <ModalFooter>
          <Button className='button-confirmar-status' onClick={() => setModal(false)} >
            Confirmar
          </Button>
        </ModalFooter>
      </Modal>
    </div>

  );
}

export default Modal_status;