import { useState } from 'react';
import styles from './Portfolio.module.css';

// Import assets
import heroImg from '../assets/hero.png'; // Wizard
import dwarfImg from '../assets/dwarf.png'; // Fantasy/Artistic
import dragonImg from '../assets/dragon.png'; // Artistic
import scifiImg from '../assets/scifi.png'; // Sci-fi/Human
import catImg from '../assets/cat.png'; // Pet

interface PortfolioItem {
    id: number;
    title: string;
    image: string;
    price: string;
    description: string;
    category: 'Super-herói' | 'Artístico' | 'Pet' | 'Casa' | 'Humano';
}

export function Portfolio() {
    const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
    const [filter, setFilter] = useState<string>('Todos');

    const categories = ['Todos', 'Super-herói', 'Artístico', 'Pet', 'Casa', 'Humano'];

    const items: PortfolioItem[] = [
        {
            id: 1,
            title: "Mago de Resina",
            image: heroImg,
            price: "R$ 120,00",
            description: "Miniatura de mago escala 28mm impressa em resina 8k. Detalhes excepcionais nas vestes e texturas do cajado. Entregue limpa e sem pintura.",
            category: 'Artístico'
        },
        {
            id: 2,
            title: "Guerreiro Anão",
            image: dwarfImg,
            price: "R$ 250,00",
            description: "Guerreiro anão pintado à mão. Escala 32mm. Uso de técnicas profissionais como NMM (Metal Não Metálico) na armadura.",
            category: 'Artístico'
        },
        {
            id: 3,
            title: "Busto de Dragão",
            image: dragonImg,
            price: "R$ 180,00",
            description: "Busto de cabeça de dragão em grande escala. Perfeito para prática de pintura ou exibição. Impresso em resina cinza de alta durabilidade.",
            category: 'Artístico'
        },
        {
            id: 4,
            title: "Fuzileiro Espacial",
            image: scifiImg,
            price: "R$ 45,00",
            description: "Unidade de infantaria padrão para wargames sci-fi. Impressão de alto detalhe compatível com escalas de 32mm. Descontos para grandes volumes.",
            category: 'Humano'
        },
        // Adding placeholder items to test other categories if needed, relying on current assets for now
        {
            id: 5,
            title: "Gato Laranja",
            image: catImg, // Placeholder reused temporarily as generation failed - typically would be a unique cat image
            price: "R$ 80,00",
            description: "Miniatura detalhada de gato laranja em pose brincalhona. Pintado à mão com extremo cuidado nos detalhes do pelo.",
            category: 'Pet'
        }
    ];

    const filteredItems = filter === 'Todos'
        ? items
        : items.filter(item => item.category === filter);

    return (
        <section id="portfolio" className={`${styles.portfolio} section`}>
            <div className="container">
                <h2 style={{ fontSize: '2.5rem', fontWeight: 800, textAlign: 'center' }}>
                    Trabalhos <span className="gradient-text">Recentes</span>
                </h2>
                <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginTop: '1rem', marginBottom: '2rem' }}>
                    Clique nas miniaturas para ver detalhes e preços
                </p>

                <div className={styles.filterContainer}>
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`${styles.filterBtn} ${filter === cat ? styles.activeFilter : ''}`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className={styles.gallery}>
                    {filteredItems.map((item) => (
                        <div
                            key={item.id}
                            className={styles.item}
                            onClick={() => setSelectedItem(item)}
                        >
                            <img src={item.image} alt={item.title} className={styles.thumbnail} />
                            <div className={styles.overlay}>
                                <h3 className={styles.itemTitle}>{item.title}</h3>
                                <span className={styles.tapHit}>Ver Preço</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedItem && (
                <div className={styles.modalBackdrop} onClick={() => setSelectedItem(null)}>
                    <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                        <button className={styles.closeButton} onClick={() => setSelectedItem(null)}>×</button>
                        <div className={styles.modalImageWrapper}>
                            <img src={selectedItem.image} alt={selectedItem.title} className={styles.modalImage} />
                        </div>
                        <div className={styles.modalInfo}>
                            <h3 className={styles.modalTitle}>{selectedItem.title}</h3>
                            <p className={styles.modalDescription}>{selectedItem.description}</p>

                            <div className={styles.modalPriceWrapper}>
                                <span className={styles.priceLabel}>A partir de</span>
                                <span className={styles.price}>{selectedItem.price}</span>
                            </div>

                            <a href="#contact" className={styles.orderButton} onClick={() => setSelectedItem(null)}>
                                Encomendar Este Modelo
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
