import styles from "./CardTenis.module.css"
import Card from 'react-bootstrap/Card';

function CardTenis( {imagens, titulo, descricao, preco } ) {
    return(
        <section>
            <Card style={{ width: '12rem' }} >
                <Card.Img variant="top" src={imagens} />
                <Card.Body>
                    <Card.Title>{titulo}</Card.Title>
                    <Card.Text>{descricao}</Card.Text>
                    <Card.Text className="text-success">R$ {preco}</Card.Text>
                </Card.Body>
            </Card>
        </section>
    )
}

export default CardTenis;