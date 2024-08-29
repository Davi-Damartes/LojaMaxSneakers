import styles from "./ContainerGrid.module.css"

function ContainerGrid() {
    return (
        <section className={styles.containerGrid}>
            <div className={styles.elementoEsquerda}>
                <h1>Olá 1</h1>
                <h1>Olá 2</h1>
                <h1>Olá 3</h1>
                <h1>Olá 4</h1>
                <h1>Olá 5</h1>
            </div>
            <div className={styles.elementoDireita}>
                <h1>Olá 1</h1>
                <h1>Olá 2</h1>
                <h1>Olá 3</h1>
                <h1>Olá 4</h1>
                <h1>Olá 5</h1>
                <h1>Olá 6</h1>
            </div>
        </section>
    )
}

export default ContainerGrid;