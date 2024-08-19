import Carousel from 'react-bootstrap/Carousel';
import styles from "./CarouselTenis.module.css";

import tenisPreto from "../../imagemTenis/TenisPretoRosa.jpeg";
import tenisLaranja from "../../imagemTenis/TenisLaranja.jpeg";
import tenisBranco from "../../imagemTenis/TenisBranco.jpeg";
import { Container } from 'react-bootstrap';


function CarouselTenis() {
    return (
        <div className={styles.teste}>
            <Carousel className={styles.carousel} data-bs-theme="dark">
                <Carousel.Item>
                    <img
                    className={styles.imagens}
                    src={tenisPreto}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    {/* <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                     className={styles.imagens}
                     src={tenisLaranja}
                     alt="Second slide"
                     />
                    <Carousel.Caption>
                    {/* <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                     className={styles.imagens}
                     src={tenisBranco}
                     alt="Third slide"
                     />
                    <Carousel.Caption>
                    {/* <h5>Third slide label</h5>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
        </div>
    );
}

export default CarouselTenis;