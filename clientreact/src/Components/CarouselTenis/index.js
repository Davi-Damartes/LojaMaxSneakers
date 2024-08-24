import Carousel from 'react-bootstrap/Carousel';
import styles from "./CarouselTenis.module.css";

import tenisAzul from "../../imagemTenis/TenisAzul.jpg";

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
                    <h5>Nike Airmax Azul</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                     className={styles.imagens}
                     src={tenisAzul}
                     alt="Segundo slide"
                     />
                    <Carousel.Caption className={styles.textos}>
                    <h5>Nike Airmax Azul</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                     className={styles.imagens}
                     src={tenisAzul}
                     alt="Terceiro Slide"
                     />
                    <Carousel.Caption className={styles.textos}>
                    <h5>Nike Airmax Azul</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> 
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
        </section>
    );
}

export default CarouselTenis;