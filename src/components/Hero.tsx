import styles from './Hero.module.css';
import heroImage from '../assets/hero.png';

export function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <span className={styles.eyebrow}>Mestres da Impressão 3D</span>
                    <h1 className={styles.title}>
                        Trazendo <span className={styles.highlight}>Sua Imaginação</span> para a Realidade
                    </h1>
                    <p className={styles.subtitle}>
                        Miniaturas personalizadas impressas em 3D, figuras altamente detalhadas e prototipagem rápida.
                        De arquivos digitais a obras-primas físicas.
                    </p>
                    <div className={styles.buttons}>
                        <a href="#portfolio" className={styles.primaryBtn}>Ver Portfólio</a>
                        <a href="#contact" className={styles.secondaryBtn}>Solicitar Orçamento</a>
                    </div>
                </div>
                <div className={styles.imageWrapper}>
                    <img src={heroImage} alt="Miniatura Impressa em 3D Detalhada" className={styles.heroImage} />
                </div>
            </div>
        </section>
    );
}
