import { useState, type FormEvent } from 'react';
import styles from './Contact.module.css';

export function Contact() {
    const [fileName, setFileName] = useState<string>('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        alert("Obrigada! Sua solicitação foi recebida. Entraremos em contato em breve.");
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFileName(e.target.files[0].name);
        }
    };

    return (
        <>
            <section id="contact" className={`${styles.contact} section`}>
                <div className="container">
                    <h2 className={styles.title}>Inicie seu projeto</h2>
                    <div className={styles.formContainer}>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Nome</label>
                                <input type="text" className={styles.input} required placeholder="Seu nome" />
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>Email</label>
                                <input type="email" className={styles.input} required placeholder="seu.email@example.com" />
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>Reference Image (Optional)</label>
                                <div className={styles.fileInputWrapper}>
                                    <input
                                        type="file"
                                        id="file"
                                        className={styles.input}
                                        style={{ position: 'absolute', opacity: 0, width: '100%', height: '100%', cursor: 'pointer' }}
                                        onChange={handleFileChange}
                                        accept="image/*"
                                    />
                                    <label htmlFor="file" className={styles.fileLabel}>
                                        <span>📷</span>
                                        <span>{fileName || "Click to Upload Photo"}</span>
                                    </label>
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>Message</label>
                                <textarea className={styles.textarea} required placeholder="Tell us about your miniature idea..."></textarea>
                            </div>

                            <button type="submit" className={styles.submitBtn}>Send Request</button>
                        </form>
                    </div>
                </div>
            </section>

            <footer className={styles.footer}>
                <div className="container">
                    <div className={styles.footerContent}>
                        <div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-primary)' }}>Mini Monde</h3>
                            <p style={{ color: 'rgba(255,255,255,0.5)', marginTop: '0.5rem' }}>© 2026 Mini Monde. All rights reserved.</p>
                        </div>

                        <div className={styles.socials}>
                            <a href="#" className={styles.socialLink}>Instagram</a>
                            <a href="#" className={styles.socialLink}>Twitter</a>
                            <a href="#" className={styles.socialLink}>Discord</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
