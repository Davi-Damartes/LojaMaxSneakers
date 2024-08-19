import styles from "./CardTenis.module.css"
import Card from 'react-bootstrap/Card';

function CardTenis( {imagens} ) {
    let titulo = "Texto";
    let conteudo = "Conteúdo";
    return(
        <section>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imagens} />
                <Card.Body>
                    <Card.Title>{titulo}</Card.Title>
                    <Card.Text>{conteudo}</Card.Text>
                </Card.Body>
            </Card>
        </section>
    )
}

export default CardTenis;