import styles from './Header.module.css';
import logo from '../assets/logo.png';

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.navContainer}>
                <a href="/" className={styles.logoLink}>
                    <img src={logo} alt="Mini Monde Logo" className={styles.logoImage} />
                    <span className={styles.logoText}>Mini Monde</span>
                </a>
                <nav className={styles.navLinks}>
                    <a href="#about" className={styles.navLink}>Sobre</a>
                    <a href="#services" className={styles.navLink}>Serviços</a>
                    <a href="#portfolio" className={styles.navLink}>Portfólio</a>
                    <a href="#contact" className={styles.ctaButton}>Fale Comigo</a>
                </nav>
            </div>
        </header>
    );
}
