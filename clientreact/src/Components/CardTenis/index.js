import styles from "./CardTenis.module.css"
import Card from 'react-bootstrap/Card';
import ModalEditarTenis from "../ModalEditarTenis";
import ModalExcluirTenis from "../ModalExcluirTenis";

function CardTenis( {imagens, id, nome, descricao, preco } ) {
    return(
        <section>
            <Card className={styles.card} >
                <Card.Img className={styles.image} src={imagens} />
                <Card.Body className={styles.cardBody}>
                    <Card.Title className={styles.title}>{nome}</Card.Title>
                    <Card.Text className={styles.descricao}>{descricao}</Card.Text>
                    <Card.Text className={styles.price}>R$ {preco}</Card.Text>
                    <div className={styles.buttonContainer}>
                        <ModalEditarTenis
                            id={id} 
                            nome={nome}
                            descricao={descricao}
                            preco={preco}
                        />
                        <ModalExcluirTenis 
                            id={id}
                            nome={nome}
                        />
                    </div>
                </Card.Body>
            </Card>
        </section>
    )
}

export default CardTenis;