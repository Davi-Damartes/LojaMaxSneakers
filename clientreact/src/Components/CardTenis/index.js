import styles from "./CardTenis.module.css"
import Card from 'react-bootstrap/Card';
import ModalComponent from "../ModalComponent";

function CardTenis( {imagens, id, titulo, descricao, preco } ) {
    return(
        <section>
            <Card className={styles.card} >
                <Card.Img style={{ width: '220px', height: '304px' }}  variant="top" src={imagens} />
                <Card.Body className={styles.cardBody}>
                    <Card.Title className={styles.title}>{titulo}</Card.Title>
                    {/* <Card.Text className={styles.id}>{id}</Card.Text> */}
                    <Card.Text className={styles.text}>{descricao}</Card.Text>
                    <Card.Text className={styles.price}>R$ {preco}</Card.Text>
                    <ModalComponent 
                                id={id} 
                                nome={titulo}
                                descricao={descricao}
                                preco={preco}
                    />
                </Card.Body>
            </Card>
        </section>
    )
}

export default CardTenis;