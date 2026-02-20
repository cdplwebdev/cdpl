'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { useRef } from 'react';

export default function Mas() {
    const carouselRef = useRef<HTMLDivElement>(null);

    const scrollCarousel = (direction: 'left' | 'right') => {
        if (carouselRef.current) {
            const { current } = carouselRef;
            const scrollAmount = 350;
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <div className="mas-page">
            <Navbar />

            {/* MAS Header Section */}
            <section className="mas-header">
                <div className="container" style={{ width: '100%', maxWidth: 'none', margin: '0' }}>
                    <div className="mas-logo-container">
                        <img
                            src="/partners/mas-logo.png"
                            alt="Major Aerospace Systems"
                            className="mas-main-logo"
                        />
                    </div>
                </div>
            </section>

            {/* Cinematic Mission Section */}
            <section className="mas-hero-content" style={{ marginTop: '0', padding: '1rem 4rem' }}>
                <div className="container">
                    <h2 style={{
                        fontSize: 'max(28px, 3vw)',
                        color: 'var(--text-primary)',
                        marginBottom: '1.5rem',
                        lineHeight: '1.1',
                        maxWidth: '900px',
                        fontWeight: '900',
                        letterSpacing: '-1px'
                    }}>
                        REDEFINING DEFENSE WITH <br />
                        <span style={{ color: 'var(--accent-primary)' }}>INTELLIGENT AIRPOWER.</span>
                    </h2>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2.5rem',
                        maxWidth: '1200px',
                        textAlign: 'left',
                        marginBottom: '2rem'
                    }}>
                        <div className="mission-para" style={{ borderLeft: '2px solid var(--accent-primary)', paddingLeft: '1.5rem' }}>
                            <p style={{ fontSize: '1rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                                <strong style={{ color: 'var(--text-primary)' }}>Major Aerospace Systems (MAS)</strong> — a Bharat-rooted global leader — stands at the forefront of innovation in aerospace and autonomous defense technology. We pioneer the design and deployment of next-generation platforms and intelligent multi-domain technologies.
                            </p>
                        </div>
                        <div className="mission-para">
                            <p style={{ fontSize: '1rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                                Our solutions are engineered for high-impact defense across <span style={{ color: 'var(--accent-primary)', fontWeight: '600' }}>land, sea, air, and space</span>. MAS is redefining the future of national security, enabling partners to protect sovereign interests with precision and confidence.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="partners" className="about-section" style={{ borderTop: '1px solid var(--border-color)', paddingBottom: '2rem' }}>
                <div className="container">
                    {/* Partner Section */}
                    <div className="partners-section" style={{ marginTop: '1.5rem' }}>
                        <h4 style={{ textAlign: 'center', marginBottom: '3rem', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-tertiary)', letterSpacing: '2px' }}>STRATEGIC PARTNERSHIPS</h4>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div className="partner-logo-grid" style={{
                                display: 'flex',
                                gap: '5rem',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexWrap: 'wrap'
                            }}>
                                <div className="partner-logo-item" style={{ width: '140px', display: 'flex', justifyContent: 'center' }}>
                                    <img src="/partners/d1.png" alt="Indian Army" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
                                </div>
                                <div className="partner-logo-item" style={{ width: '140px', display: 'flex', justifyContent: 'center', opacity: 0.2 }}>
                                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem' }}>PARTNER_02</div>
                                </div>
                                <div className="partner-logo-item" style={{ width: '140px', display: 'flex', justifyContent: 'center', opacity: 0.2 }}>
                                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem' }}>PARTNER_03</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* MAS Products */}
            <section id="products" className="products-section">
                <div className="container">
                    <div className="product-carousel-header" style={{ marginBottom: '2rem' }}>
                        <h2 className="section-title" style={{ margin: 0, textAlign: 'left' }}>OUR PRODUCTS</h2>
                    </div>

                    <div className="product-carousel-container">
                        <div className="product-carousel" ref={carouselRef}>
                            {[
                                {
                                    id: 'bard',
                                    name: 'BARD Family',
                                    nickname: 'SENTINEL',
                                    type: 'RECON/ISR',
                                    tagline: 'QUADCOPTER ISR',
                                    desc: 'Strategic quadcopter family supporting Day/Thermal ISR, LRF, and tactical payload delivery.',
                                    imgClass: 'product-image-bard',
                                    link: '/products/bard'
                                },
                                {
                                    id: 'horizon-vtol',
                                    name: 'HORIZON VTOL',
                                    nickname: 'OBSERVER',
                                    type: 'LONG RANGE ISR',
                                    tagline: 'FIXED WING VTOL',
                                    desc: 'Vertical Take-Off fixed-wing platform offering 40m endurance and stabilized 3-axis imagery.',
                                    imgClass: 'product-image-aot',
                                    link: '/products/horizon-vtol'
                                },
                                {
                                    id: 'horizon-fpv',
                                    name: 'HORIZON FPV',
                                    nickname: 'SIMULATE',
                                    type: 'ADVANCED TRAINER',
                                    tagline: 'FIXED WING FPV',
                                    desc: 'Large-scale 1645mm wingspan trainer for high-speed area familiarization and FPV training.',
                                    imgClass: 'product-image-sim',
                                    link: '/products/horizon-fpv'
                                },
                                {
                                    id: 'stinger',
                                    name: 'STINGER Family',
                                    nickname: 'HYDRA V4',
                                    type: 'TACTICAL STRIKE',
                                    tagline: 'FPV KAMIKAZE',
                                    desc: 'Expendable high-performance quads (7-15") for precision intercept and heavy payload strike.',
                                    imgClass: 'product-image-hydra',
                                    link: '/products/stinger'
                                },
                                {
                                    id: 'aot',
                                    name: 'AOT (7 Inch)',
                                    nickname: 'TRAINER',
                                    type: 'PILOT TRAINING',
                                    tagline: 'QUADCOPTER TRAINER',
                                    desc: 'Shatter-resistant trainer with integrated prop guards and zero-latency feedback for new pilots.',
                                    imgClass: 'product-image-aot',
                                    link: '/products/aot'
                                }
                            ].map((product) => (
                                <div className="product-carousel-item" key={product.id}>
                                    <div className="product-card">
                                        <span className="corner corner-tl"></span>
                                        <span className="corner corner-tr"></span>
                                        <span className="corner corner-bl"></span>
                                        <span className="corner corner-br"></span>

                                        <div className={`product-image ${product.imgClass}`}>
                                            <div className="product-type-badge">{product.type}</div>

                                            {/* Image Slot moved here - near nickname */}
                                            <div className="product-card-image-slot">
                                                [ Product {product.nickname} Asset ]
                                            </div>

                                            <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '2px' }}>
                                                NICKNAME: {product.nickname}
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <span className="product-tagline">{product.tagline}</span>
                                            <h3>{product.name}</h3>
                                            <p>{product.desc}</p>
                                            <Link href={product.link} className="btn-text">View Specifications &rarr;</Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="carousel-controls" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
                        <button
                            onClick={() => scrollCarousel('left')}
                            className="nav-arrow-btn"
                            aria-label="Scroll Left"
                            style={{
                                background: 'transparent',
                                border: '1px solid var(--accent-primary)',
                                color: 'var(--accent-primary)',
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                fontSize: '1.2rem'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'var(--accent-primary)';
                                e.currentTarget.style.color = '#fff';
                                e.currentTarget.style.transform = 'scale(1.1)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'transparent';
                                e.currentTarget.style.color = 'var(--accent-primary)';
                                e.currentTarget.style.transform = 'scale(1)';
                            }}
                        >
                            &larr;
                        </button>
                        <button
                            onClick={() => scrollCarousel('right')}
                            className="nav-arrow-btn"
                            aria-label="Scroll Right"
                            style={{
                                background: 'transparent',
                                border: '1px solid var(--accent-primary)',
                                color: 'var(--accent-primary)',
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                fontSize: '1.2rem'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'var(--accent-primary)';
                                e.currentTarget.style.color = '#fff';
                                e.currentTarget.style.transform = 'scale(1.1)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'transparent';
                                e.currentTarget.style.color = 'var(--accent-primary)';
                                e.currentTarget.style.transform = 'scale(1)';
                            }}
                        >
                            &rarr;
                        </button>
                    </div>
                </div>
            </section>

            <Footer />

            <style jsx>{`
                .product-carousel {
                    display: flex;
                    gap: 2rem;
                    overflow-x: auto;
                    padding-bottom: 2rem;
                    scroll-behavior: smooth;
                    scrollbar-width: none;
                    scroll-snap-type: x mandatory;
                }
                .product-carousel::-webkit-scrollbar {
                    display: none;
                }
                .product-carousel-item {
                    min-width: 350px;
                    flex: 0 0 auto;
                    scroll-snap-align: center;
                }
                @media (max-width: 768px) {
                    .product-carousel {
                        gap: 1rem;
                        scroll-padding: 1rem; /* Adjust snap padding */
                    }
                    .product-carousel-item {
                        min-width: 85vw; /* Almost full width for mobile focus */
                    }
                }
            `}</style>
        </div>
    );
}
