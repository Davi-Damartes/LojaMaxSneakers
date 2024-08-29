import { useState } from 'react';
import styles from "./ModalExcluirTenis.module.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import api from '../../Services/api';


function ModalExcluirTenis({id, nome}) {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);

  const fecharModal = () => setShow(false);
  const abirModal = () => setShow(true);

 const submitDelete = async () => {
        await api.delete(`ExcluirTenis/${id}`)
        .then(response => {
            setData(response.data);
            setShow(false);
        }).catch(error => {
            console.log(error, data)
        });
    }


  return (
    <>
      <Button variant="danger" onClick={abirModal}>
        Excluir Tênis
      </Button>

      <Modal show={show} onHide={fecharModal} className={styles.modal}>
        <Modal.Header closeButton className={styles.modalHeader} />
          <Modal.Title className={styles.modalTitle}>Excluir tênis: </Modal.Title>
          <Modal.Title className={styles.modalTitle}>[{nome}] </Modal.Title>
        <Modal.Body className={styles.modalBody}>
            <h3>Você tem certeza disso???</h3>
            <p>Essa ação não pode ser Desfeita!</p>
        </Modal.Body>
        <Modal.Footer className={styles.modalFooter}>
          <Button variant="secondary" onClick={fecharModal}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={submitDelete}>
            Confirmar Exclusão
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalExcluirTenis;