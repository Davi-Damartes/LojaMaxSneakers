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
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
        </section>
    );
}

export default CarouselTenis;