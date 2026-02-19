'use client';

import Link from 'next/link';

const CategoryCard = ({ category }) => {
    return (
        <div
            className="product-card"
            style={category.cardBg ? { backgroundColor: category.cardBg, borderColor: category.cardBg } : {}}
        >
            <span className="corner corner-tl"></span>
            <span className="corner corner-tr"></span>
            <span className="corner corner-bl"></span>
            <span className="corner corner-br"></span>

            <div className={`product-image ${category.imageClass}`} style={category.imageFull ? { backgroundColor: '#fff', padding: '2rem' } : {}}>
                <div className="product-type-badge">DIVISION</div>
                {category.logo && (
                    <img
                        src={category.logo}
                        alt={category.title}
                        style={category.imageFull ? {
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            maxHeight: '80%',
                            maxWidth: '85%',
                            objectFit: 'contain',
                            zIndex: 2
                        } : {
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            maxHeight: '60%',
                            maxWidth: '70%',
                            objectFit: 'contain',
                            filter: 'brightness(1.1)',
                            zIndex: 2
                        }}
                    />
                )}
            </div>
            <div className="product-content">
                <span
                    className="product-tagline"
                    style={category.textColor ? { color: 'rgba(255,255,255,0.7)' } : {}}
                >
                    {category.tagline}
                </span>
                <h3 style={category.textColor ? { color: category.textColor } : {}}>
                    {category.title}
                </h3>
                <p style={category.textColor ? { color: 'rgba(255,255,255,0.8)' } : {}}>
                    {category.description}
                </p>
                <Link
                    href={category.link}
                    className="btn-text"
                    style={category.textColor ? { color: '#FFFFFF' } : {}}
                >
                    Explore Systems &rarr;
                </Link>
            </div>
        </div>
    );
};

export default function ProductCategories() {
    const categories = [
        {
            id: "mas",
            title: "Major Aerospace Systems",
            tagline: "A BRAND OF CDPL",
            description: "Dedicated to the design and development of advanced UAV platforms, delivering autonomous supremacy for defense and institutional surveillance.",
            imageClass: "product-image-aot",
            logo: "/partners/mas-logo.png",
            link: "/mas",
            cardBg: "#000052",
            textColor: "#FFFFFF",
            imageFull: true // Changed to contain within CategoryCard
        },
        {
            id: "mms",
            title: "Major Marine Systems",
            tagline: "A BRAND OF CDPL",
            description: "Pioneering underwater and surface autonomy, delivering secure and resilient maritime platforms for naval and industrial applications.",
            imageClass: "product-image-hydra",
            logo: "/partners/mms-logo.png",
            link: "/mms",
            cardBg: "#000052",
            textColor: "#FFFFFF",
            imageFull: true
        },
        {
            id: "mgs",
            title: "Major Ground Systems",
            tagline: "A BRAND OF CDPL",
            description: "Developing advanced autonomous ground vehicles and tactical robotics designed for complex environments and resilient logistics.",
            imageClass: "product-image-sim",
            logo: "/partners/mgs-logo.png",
            link: "/mgs",
            cardBg: "#000052",
            textColor: "#FFFFFF",
            imageFull: true
        }
    ];

    return (
        <section id="products" className="products-section">
            <div className="container">
                <h2 className="section-title">Brand Hierarchy</h2>
                <p className="section-subtitle">Pioneering Autonomy across Air, Sea, and Land domains.</p>

                <div className="products-grid">
                    {categories.map(category => (
                        <CategoryCard key={category.id} category={category} />
                    ))}
                </div>
            </div>
        </section>
    );
}
