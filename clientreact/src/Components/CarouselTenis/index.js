import Carousel from 'react-bootstrap/Carousel';
import styles from "./CarouselTenis.module.css";

import tenisAzul from "../../imagemTenis/TenisAzul.jpg";
// import tenisPreto from "../../imagemTenis/TenisPretoRosa.jpeg";
// import tenisLaranja from "../../imagemTenis/TenisLaranja.jpeg";
import tenisBranco from "../../imagemTenis/TenisBranco.jpeg";
import tenisVermelho from "../../imagemTenis/TenisVermelho.jpg";



function CarouselTenis() {
    return (
        <section className={styles.container}>
            <Carousel className={styles.carousel} data-bs-theme="dark">
                <Carousel.Item>
                    <img
                    className={styles.imagens}
                    src={tenisAzul}
                    alt="Primeiro slide" />
                    <Carousel.Caption className={styles.textos}>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                     className={styles.imagens}
                     src={tenisVermelho}
                     alt="Segundo slide"
                     />
                    <Carousel.Caption className={styles.textos}>
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                     className={styles.imagens}
                     src={tenisBranco}
                     alt="Terceiro Slide"
                     />
                    <Carousel.Caption className={styles.textos}>
                    <h5>Third slide label</h5>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p> 
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
        </section>
    );
}

export default CarouselTenis;