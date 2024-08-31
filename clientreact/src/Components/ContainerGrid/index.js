import styles from "./ContainerGrid.module.css"

import tenisPreto from "../../imagemTenis/TenisPretoRosa.jpeg"
import tenisBranco from "../../imagemTenis/TenisBranco.jpeg"
import tenisLaranja from "../../imagemTenis/TenisLaranja.jpeg"
import tenisWhite from "../../imagemTenis/TenisAllWhite.jpeg"

function ContainerGrid() {
    return (
        <section className={styles.containerGrid}>
            <div className={styles.gridEsquerdo}>
                <img className={styles.imagens} alt="imagem 1" src={tenisPreto} />
                <img className={styles.imagens} alt="imagem 2" src={tenisBranco} />
                <img className={styles.imagens} alt="imagem 3" src={tenisLaranja} />
                <img className={styles.imagens} alt="imagem 4" src={tenisPreto} />
                <img className={styles.imagens} alt="imagem 5" src={tenisWhite} />
            </div>
            <div className={styles.gridDireito}>
                <div className={styles.titulo}>
                    <h3>Nike Air Max 95 Triple White</h3>
                </div>
                <div className={styles.preco}>
                    <h4>R$ 1299,99</h4>
                </div>
                <div className={styles.texto}>
                 <p>Com um design todo branco, ele exala sofisticação e modernidade, 
                    perfeito para uso casual ou esportivo. A construção premium oferece conforto e durabilidade, 
                    com uma silhueta elegante e detalhes sutis que destacam sua exclusividade.
                    Ideal para quem busca um visual clean e versátil. 
                </p>
                </div>
                <div className={styles.botaoTamanhoTenis}>
                    <button>39</button>
                    <button>39.5</button>
                    <button>40</button>
                    <button>41</button>
                    <button>41.5</button>
                    <button>41</button>
                    <button>42</button>
                </div>

                <div className={styles.botoesCompra}> 
                    <button>Quantidade</button>
                    <button>ADD CARINHO</button>
                </div>
            </div>
        </section>
    )
}

export default ContainerGrid;