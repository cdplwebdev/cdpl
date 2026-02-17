'use client';

import Link from 'next/link';

const CategoryCard = ({ category }) => {
    return (
        <div className="product-card">
            <span className="corner corner-tl"></span>
            <span className="corner corner-tr"></span>
            <span className="corner corner-bl"></span>
            <span className="corner corner-br"></span>

            <div className={`product-image ${category.imageClass}`}>
                <div className="product-type-badge">DIVISION</div>
            </div>
            <div className="product-content">
                <span className="product-tagline">{category.tagline}</span>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                <Link href={category.link} className="btn-text">Explore Systems &rarr;</Link>
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
            link: "/mas"
        },
        {
            id: "mms",
            title: "Major Marine Systems",
            tagline: "A BRAND OF CDPL",
            description: "Pioneering underwater and surface autonomy, delivering secure and resilient maritime platforms for naval and industrial applications.",
            imageClass: "product-image-hydra",
            link: "/mms"
        },
        {
            id: "mgs",
            title: "Major Ground Systems",
            tagline: "A BRAND OF CDPL",
            description: "Developing advanced autonomous ground vehicles and tactical robotics designed for complex environments and resilient logistics.",
            imageClass: "product-image-sim",
            link: "/mgs"
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
