import styles from "./CardTenis.module.css"
import Card from 'react-bootstrap/Card';
import ModalComponent from "../ModalComponent";

function CardTenis( {imagens, id, titulo, descricao, preco } ) {
    return(
        <section>
            <Card className={styles.card} >
                <Card.Img className={styles.image} src={imagens} />
                <Card.Body className={styles.cardBody}>
                    {/* <Card.Text className={styles.id}>{id}</Card.Text> */}
                    <Card.Title className={styles.title}>{titulo}</Card.Title>
                    <Card.Text className={styles.descricao}>{descricao}</Card.Text>
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