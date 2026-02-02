import styles from './Hero.module.css'; // Reusing hero styles for consistency
import terrariumImg from '../assets/terrarium.png';

export function TerrariumHighlight() {
    return (
        <section className="section" style={{ background: '#f5f7fa' }}>
            <div className={styles.container}>
                <div className={styles.imageWrapper}>
                    <img src={terrariumImg} alt="Casal de idosos em miniatura no terrário" className={styles.heroImage} />
                </div>
                <div className={styles.content}>
                    <span className={styles.eyebrow} style={{ color: '#4caf50' }}>Natureza em Miniatura</span>
                    <h2 className={styles.title} style={{ fontSize: '2.5rem' }}>
                        Terrários <span style={{ color: '#4caf50' }}>Encantados</span>
                    </h2>
                    <p className={styles.subtitle}>
                        Crie mundos únicos dentro de vidro. Nossas miniaturas personalizadas para terrários
                        eternizam momentos especiais, como este casal de idosos desfrutando a tranquilidade
                        de um banco de jardim, rodeados por musgos vivos.
                    </p>
                    <div className={styles.buttons}>
                        <a href="#contact" className={styles.primaryBtn} style={{ background: '#4caf50' }}>Encomendar Cena</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
