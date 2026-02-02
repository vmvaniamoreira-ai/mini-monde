import styles from './Services.module.css';

interface ServiceCardProps {
    title: string;
    description: string;
    icon: string;
}

function ServiceCard({ title, description, icon }: ServiceCardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.iconWrapper}>
                <span>{icon}</span>
            </div>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardDescription}>{description}</p>
            <a href="#contact" className={styles.learnMore}>Book Service</a>
        </div>
    );
}

export function Services() {
    const services = [
        {
            title: "Impressão SLA 4K",
            description: "Impressão em resina ultra-detalhada perfeita para miniaturas, joias e protótipos complexos. A resolução 4K garante que cada detalhe seja capturado.",
            icon: "⚡"
        },
        {
            title: "Modelagem Personalizada",
            description: "Tem uma foto ou esboço? Criamos um modelo 3D a partir de suas referências. Perfeito para presentes personalizados ou designs únicos.",
            icon: "🧊"
        },
        {
            title: "Pintura e Acabamento",
            description: "Pós-processamento profissional incluindo lixamento, primer e pintura à mão para dar vida às suas miniaturas com cores vibrantes.",
            icon: "🎨"
        },
        {
            title: "Miniaturas para Terrários",
            description: "Dê vida ao seu terrário com cenas em miniatura personalizadas. Materiais resistentes à umidade e tintas atóxicas seguras para plantas.",
            icon: "🌱"
        }
    ];

    return (
        <section id="services" className={`${styles.services} section`}>
            <div className="container">
                <div className={styles.titleWrapper}>
                    <h2 className={styles.sectionTitle}>
                        Nossos <span className="gradient-text">Serviços</span>
                    </h2>
                    <p style={{ color: 'var(--text-secondary)' }}>Soluções especializadas para suas necessidades de impressão 3D</p>
                </div>

                <div className={styles.cardsContainer}>
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
}
