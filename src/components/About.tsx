import styles from './About.module.css';

export function About() {
    return (
        <section id="about" className={`${styles.about} section`}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.textColumn}>
                        <h2 className={styles.sectionTitle}>Sobre a Mini Monde</h2>
                        <p className={styles.description}>
                            Bem-vindo à Mini Monde, onde a imaginação digital encontra a realidade física.
                            Somos um estúdio dedicado à impressão 3D de qualidade para colecionadores,
                            jogadores de tabletop e criadores.
                        </p>
                        <p className={styles.description}>
                            Nossa missão é entregar miniaturas com excelência
                            utilizando tecnologia moderna em SLA e FDM. Seja para um único herói personalizado
                            ou um exército inteiro, damos vida à sua visão com precisão e cuidado.
                        </p>

                        <div className={styles.statsRow}>
                            <div className={styles.statItem}>
                                <span className={styles.statNumber}>500+</span>
                                <span className={styles.statLabel}>Figuras Impressas</span>
                            </div>
                            <div className={styles.statItem}>
                                <span className={styles.statNumber}>100%</span>
                                <span className={styles.statLabel}>Precisão</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.skillsColumn}>
                        <h3 className={styles.skillsTitle}>Minhas Habilidades</h3>
                        <div className={styles.skillsGrid}>
                            <div className={styles.skillItem}>Impressão Resina</div>
                            <div className={styles.skillItem}>Impressão FDM</div>
                            <div className={styles.skillItem}>Modelagem 3D</div>
                            <div className={styles.skillItem}>Pintura Personalizada</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
