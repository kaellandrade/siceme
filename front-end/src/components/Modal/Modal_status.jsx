import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { Form } from "reactstrap"
import { useState, useEffect } from 'react';
import "./modal_status.css"
import axios from 'axios';


function Modal_status(props) {
  const [modal, setModal] = useState(false);
  const [status, setStatus] = useState([])
  var novoMaterial;

  const getStatus = async () => {  
    try {
      axios.get('http://localhost:3000/status')
      .then(res => {
        setStatus(res.data);
      }); 
    }catch (ex){
      console.log(ex);
    }
  }

  const renderizarStatus = (stSetado) => {
    return (
      status.map(({id, sts_status_nome}) => {
        if(sts_status_nome != stSetado){
          return <option>{sts_status_nome}</option>
        }
      })
    )
  }

  const handleConfirmar = (event) => {
    event.preventDefault();
    let sts = document.getElementById("alterar-status").value;
    const id_status = status.find(({id, sts_status_nome}) => sts_status_nome === sts);
    novoMaterial = {
      mtl_status_id: id_status.id
    };
    console.log(novoMaterial);

    editarMaterial();
 
  }

  const editarMaterial = async () => {  
    try {
      axios.put(`http://localhost:3000/material/${props.id}`, novoMaterial)
    }catch (ex){
      console.log(ex);  
    }
  }

  useEffect(() => {
    getStatus();
  }, [])

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
              <select id="alterar-status" className="form-select">  
                <option selected>{props.status}</option>
                {renderizarStatus(props.status)}
              </select>
            </Form>
          </div>
          
        </ModalBody>
        <ModalFooter>
          <form onSubmit={handleConfirmar}>
            <Button className='button-confirmar-status' type="submit" onClick={() => setModal(false)} >
              Confirmar
            </Button>
          </form>
        </ModalFooter>
      </Modal>
    </div>

  );
}

export default Modal_status;