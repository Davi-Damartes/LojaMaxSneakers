import { useState, useEffect } from 'react';
import styles from "./ModalComponent.module.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import axios from 'axios';

const baseUrl = `https://localhost:7258/api/Tenis/Editar`;

function ModalComponent( {id, nome, descricao, preco} ){
  const [show, setShow] = useState(false);

  const fecharModal = () => setShow(false);
  const abrirModal = () => setShow(true);

  const [data, setData] = useState([]);

  const [tenisSelecionado, setTenisSelecionado] = useState({
    id: id,
    nome: nome,
    descricao: descricao,
    preco: preco
  });

    const handleChange  = (e) => {
      const { name, value } = e.target;
      console.log(value)
      setTenisSelecionado((prevState) => ({
        ...prevState,
        [name]: value
      }));
    }


    const submitForm = async () => {
      try {
        const response = await axios.put(`${baseUrl}/${tenisSelecionado.id}`, tenisSelecionado);
        
        const resposta = response.data;
    
        const dadosAuxiliar = [...data]; 
    
        const dadosAtualizados = dadosAuxiliar.map(tenis => {
          if (tenis.id === tenisSelecionado.id) {
            return {
              ...tenis,
              nome: resposta.nome,
              descricao: resposta.descricao,
              preco: resposta.preco,
            };
          }
          return tenis;
        });
    
        setData(dadosAtualizados);
    
        console.log(response);
        setShow(false);
    
      } catch (error) {
        console.error(error);
      }
    };


    return(
        <>
        <Button className={styles.botaoEditar} onClick={abrirModal}>
          Editar 
        </Button>
  
        <Modal show={show} onHide={fecharModal} className={styles.modal}>
          <Modal.Header closeButton  className={styles.header}>
            <Modal.Title className={styles.title}>Editar tênis [ {nome} ]</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Id</Form.Label>
                <Form.Control
                  name="id"
                  placeholder="Id"
                  disabled ={true}
                  value={id}
                  onChange={handleChange}  
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="nome">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  name="nome"
                  maxLength={80}
                  type="text"
                  value={tenisSelecionado.nome}
                  placeholder="Digite o novo Nome"
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
                      value={tenisSelecionado.descricao}
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
                  value={tenisSelecionado.preco}
                  onChange={handleChange}  
                />
              </Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Footer className={styles.modalFooter}>
            <Button size="lg" onClick={fecharModal}>
              Fechar
            </Button>
            <Button size="lg" onClick={submitForm} >
              Confirmar
            </Button>
          </Modal.Footer>
        </Modal>
        
      </>
    )
}

export default ModalComponent;