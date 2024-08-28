import { useState } from 'react';
import styles from "./ModalAddTenis.module.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import axios from 'axios';

const baseUrl = `https://localhost:7258/api/Tenis/AdicionarTenis`;

function ModalComponentAdd() {

    const [show, setShow] = useState(false);
    const fecharModal = () => setShow(false);
    const abrirModal = () => setShow(true);

    const [novoTenis, setNovoTenis ] = useState({
        id: '',
        nome: '',
        descricao: '',
        preco: ''
    });

    const [data, setData] = useState([]);

    const addTenisPost = async () => {
     delete novoTenis.id;
      await axios.post(baseUrl, novoTenis)
        .then(response => {
          setData(data.concat(response.data));
          setShow(false);
        }).catch(error => {
          console.log(error);
        })
  
    }
  


    const handleChange = (e) =>{
        const { name, value } = e.target;
        console.log(value)
        setNovoTenis((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }


    return (
        <section className={styles.modal}>
            <Button className={styles.botaoAdicionar} onClick={abrirModal}>
                Adicionar Tenis 
            </Button>
    
            <Modal show={show} onHide={fecharModal} className={styles.modal}>
            <Modal.Header closeButton className={styles.modalHeader}>
                <Modal.Title className={styles.title}>Adicionar Novo Tênis </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                    name="nome"
                    maxLength={80}
                    type="text"
                    value={novoTenis.nome}
                    placeholder="Digite o Nome"
                    onChange={handleChange}  
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="descricao">
                <Form.Label>Descrição</Form.Label>
                    <Form.Control 
                        name="descricao"
                        as="textarea" 
                        minLength={5}
                        maxLength={100}
                        rows={2} 
                        placeholder="Digite a Descricao"
                        value={novoTenis.descricao}
                        onChange={handleChange}         
                    />
                </Form.Group>

                <Form.Group className={styles.formGroup} controlId="preco">
                    <Form.Label>Preço</Form.Label>
                    <Form.Control   
                    className={styles.formControl} 
                    name="preco"      
                    max={1000}
                    min={500}
                    type="number"
                    placeholder="Digite o Preço"
                    value={novoTenis.preco}
                    onChange={handleChange}  
                    />
                </Form.Group>
                </Form>
            </Modal.Body>

            <Modal.Footer className={styles.modalFooter}>
                <Button size="lg" onClick={fecharModal}>
                    Fechar
                </Button>
                <Button size="lg" onClick={addTenisPost} >
                    Confirmar
                </Button>
            </Modal.Footer>
            </Modal>         
      </section>

    )
}

export default ModalComponentAdd;