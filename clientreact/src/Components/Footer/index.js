import styles from "./Footer.module.css"
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

function Footer() {

    return (
        <footer>
            <Container className={styles.container}>
                <Row className="justify-content-md-around p-2">
                    <Col xs="12" sm=""  md="4" lg="4" className={styles.conteudoFooter}>   
                        <div className="text-center">
                            <InfoOutlinedIcon/>
                        </div>             
                        <h4>Quem somos</h4>
                        <p>Política da empresa empresa</p>
                        <p>Política da empresa empresa</p>
                        <p>Política da empresa empresa</p>
                    </Col>
                    <Col xs="12" sm=""  md="5" lg="4" className={styles.conteudoFooter}> 
                        <div className="text-center">
                            <PhoneInTalkOutlinedIcon/>
                        </div>               
                        <h4>Contato</h4>
                        <p>contato@empresa.com empresa</p>
                        <p>contato@empresa.com empresa</p>
                        <p>contato@empresa.com empresa</p>
                    </Col>
                    <Col xs="12" sm=""  md="5" lg="4" className={styles.conteudoFooter}>   
                        <div className="text-center">
                            <QuestionMarkIcon/>
                        </div>
                        <h4>Suporte</h4>
                        <p>suporte@empresa.com empresa</p>
                        <p>suporte@empresa.com empresa</p>
                        <p>suporte@empresa.com empresa</p>
                    </Col>
                </Row>
                <hr />
                <Row className="justify-content-md-center">
                    <Col md="auto" className={styles.diretrizes}>
                        <h5>MaxSneakersDrop &copy; Desenvolvido por David Braga 2024</h5>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;