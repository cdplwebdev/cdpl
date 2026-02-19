'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { products } from '../productData';
import Link from 'next/link';

export default function ProductPage() {
    const params = useParams();
    const id = (params.id as string) || '';
    const product = products[id as keyof typeof products] as any;
    const [activeImage, setActiveImage] = useState(0);
    const isBard = id === 'bard';

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal-section').forEach(section => {
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, [id]);

    if (!product) {
        return (
            <div className="min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-grow flex items-center justify-center p-20">
                    <div className="text-center">
                        <h1 className="section-title">Product Not Found</h1>
                        <Link href="/" className="btn btn-primary mt-10">Back to Home</Link>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    if (isBard) {
        return (
            <div className="product-detail-page bg-white" style={{ color: 'var(--text-primary)' }}>
                <Navbar />

                {/* Tech Hero Section with Video - High Contrast / No Fog */}
                <section className="tech-hero-section" style={{ background: '#000', minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', padding: 0 }}>
                    <video autoPlay loop muted playsInline className="hero-video-bg" style={{ opacity: 0.7, objectFit: 'cover' }}>
                        <source src="/partners/bardvideo.mp4" type="video/mp4" />
                    </video>

                    {/* Tactical Overlays */}
                    <div className="tactical-grid" style={{ opacity: 0.15, backgroundSize: '30px 30px' }}></div>
                    <div className="scanline-v2" style={{ opacity: 0.5 }}></div>

                    {/* Dark gradient for text legibility - Left Side Only */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(to right, rgba(0,0,0,0.7) 0%, transparent 60%)',
                        zIndex: 5
                    }}></div>

                    <div className="container" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
                        <div className="reveal-section" style={{ maxWidth: '800px' }}>
                            <span className="tech-hero-subtitle" style={{ color: 'var(--accent-primary)', letterSpacing: '4px', fontWeight: '800', display: 'block', marginBottom: '1.5rem', fontSize: '0.8rem' }}>{product.brand} // {product.category}</span>

                            <h1 className="tech-hero-title" style={{ color: '#fff', marginBottom: '1.5rem', fontSize: 'clamp(4rem, 12vw, 9rem)', fontWeight: '900', lineHeight: '0.8' }}>
                                BARD
                            </h1>

                            <p style={{
                                fontSize: '1.2rem',
                                color: 'rgba(255,255,255,0.7)',
                                maxWidth: '550px',
                                fontWeight: '400',
                                lineHeight: '1.6',
                                marginBottom: '4rem'
                            }}>
                                {product.tagline}
                            </p>

                            {/* MAS Highlight with Logo - Positioned above specs as requested */}
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1.2rem',
                                marginBottom: '2.5rem',
                                color: 'var(--accent-primary)',
                                fontWeight: '900',
                                fontSize: '0.8rem',
                                letterSpacing: '4px',
                                fontFamily: 'var(--font-mono)'
                            }}>
                                <img src="/partners/masicon.png" alt="MAS" style={{ height: '35px', filter: 'brightness(0) invert(1)' }} />
                                <div style={{ height: '2px', width: '40px', background: 'var(--accent-primary)' }}></div>
                                <span>[ MULTIMISSION_ISR_TACTICAL_NODE ]</span>
                            </div>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem' }}>
                                {product.heroSpecs.map((spec: any, i: number) => (
                                    <div key={i} style={{ borderLeft: '3px solid var(--accent-primary)', paddingLeft: '1.5rem' }}>
                                        <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '2px', marginBottom: '0.6rem', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>{spec.label}</div>
                                        <div style={{ fontSize: '2.5rem', fontWeight: '900', color: '#fff' }}>{spec.value}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Performance HUD - Sharp Tactical Look (No Fog) */}
                    <div style={{
                        position: 'absolute',
                        right: '4rem',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: '320px',
                        zIndex: 10,
                        padding: '2.5rem',
                        borderLeft: '2px solid var(--accent-primary)',
                        background: 'rgba(0,0,0,0.7)',
                        backdropFilter: 'blur(8px)',
                        boxShadow: '0 0 40px rgba(0,0,0,0.3)'
                    }} className="reveal-section hidden-mobile">
                        <div style={{ fontSize: '0.6rem', color: 'var(--accent-primary)', letterSpacing: '3px', marginBottom: '3rem', fontWeight: '900' }}>[ SYSTEM_TELEMETRY_STREAM ]</div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.2rem' }}>
                            {product.performanceMetrics?.map((stat: any, i: number) => (
                                <div key={i}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.8rem', alignItems: 'flex-end' }}>
                                        <span style={{ fontSize: '0.65rem', color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)', fontWeight: '600' }}>{stat.label}</span>
                                        <span style={{ fontSize: '1rem', fontWeight: '900', color: 'var(--text-primary)' }}>{stat.value}{stat.unit}</span>
                                    </div>
                                    <div style={{ width: '100%', height: '2px', background: 'rgba(0,0,0,0.05)', position: 'relative' }}>
                                        <div style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            height: '100%',
                                            width: `${stat.value}%`,
                                            background: 'var(--accent-primary)',
                                            boxShadow: '0 0 10px var(--accent-primary)'
                                        }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div style={{ marginTop: '3.5rem', fontSize: '0.65rem', color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)', lineHeight: '1.8' }}>
                            {">>"} SENSOR_ARRAY: OPTIMIZED<br />
                            {">>"} CORE_LOGIC: STABLE<br />
                            {">>"} DATA_LINK: SYNCED
                        </div>
                    </div>

                    <div style={{ position: 'absolute', bottom: '4rem', right: '4rem', textAlign: 'right', opacity: 0.5 }}>
                        <div style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)', color: 'var(--text-tertiary)', letterSpacing: '1px' }}>SYSTEM_STATUS: OPERATIONAL</div>
                        <div style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)', color: 'var(--text-tertiary)', letterSpacing: '1px' }}>THREAT_LEVEL: NOMINAL</div>
                    </div>
                </section>

                {/* Tactical Context Section */}
                <section className="reveal-section" style={{ minHeight: '80vh', position: 'relative', display: 'flex', alignItems: 'center', background: '#fff' }}>
                    <div className="scanline-v2"></div>
                    <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <span style={{ color: 'var(--accent-primary)', letterSpacing: '3px', fontSize: '0.8rem', fontWeight: '700' }}>[ MISSION_READY ]</span>
                            <h2 style={{ fontSize: '4rem', fontWeight: '800', margin: '1.5rem 0', lineHeight: '1.1', color: 'var(--text-primary)' }}>CINEMATIC SURVEILLANCE</h2>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '3rem' }}>
                                Every system is a modular node in a vast, autonomous network. {product.description}
                            </p>
                            <Link href="/contact" className="btn btn-primary">Deployment Strategy</Link>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <div className="gallery-frame" style={{ aspectRatio: '16/10', border: '1px solid rgba(0,0,0,0.1)' }}>
                                <img src={product.galleryImages[0]} alt="Bard Action" className="main-gallery-image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                <div className="gallery-overlay-tech">
                                    <div className="tech-tag top-left" style={{ background: 'var(--accent-primary)', color: '#000' }}>AERIAL_RECON</div>
                                    <div className="tech-tag bottom-right" style={{ background: 'var(--accent-primary)', color: '#000' }}>360_SENSORY_SWEEP</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Form Factor Breakdown */}
                <section className="reveal-section" style={{ background: '#fafafa', padding: '10rem 0', borderTop: '1px solid #eee' }}>
                    <div className="container">
                        <div style={{ marginBottom: '6rem' }}>
                            <span style={{ color: 'var(--accent-primary)', letterSpacing: '3px', fontSize: '0.8rem', fontWeight: '700' }}>[ VARIANTS ]</span>
                            <h2 style={{ fontSize: '5rem', fontWeight: '900', marginTop: '1rem', letterSpacing: '-2px', color: 'var(--text-primary)' }}>THE BARD FAMILY</h2>
                        </div>

                        <div className="form-factor-container">
                            {product.variants.map((v: any, i: number) => {
                                // Unified color palette from provided theme - Applied to accents on white cards
                                const themes = [
                                    { color: '#0039A6', label: 'STD_UNIT' },
                                    { color: '#005C9E', label: 'THERMAL_OPTIC' },
                                    { color: '#584E41', label: 'LRF_TARGETING' },
                                    { color: '#CC5D29', label: 'STRIKE_MOD_D' },
                                    { color: '#960606', label: 'STRIKE_MOD_DN' }
                                ];
                                const theme = themes[i % themes.length];

                                return (
                                    <div key={i} className="form-factor-card" style={{
                                        background: '#fff',
                                        borderColor: 'rgba(0,0,0,0.08)',
                                        color: 'var(--text-primary)',
                                        padding: '4rem 3rem',
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
                                        position: 'relative'
                                    }}>
                                        <div style={{
                                            position: 'absolute',
                                            top: '2rem',
                                            right: '2rem',
                                            fontSize: '0.6rem',
                                            fontFamily: 'var(--font-mono)',
                                            color: 'var(--text-tertiary)',
                                            letterSpacing: '2px'
                                        }}>
                                            [ {theme.label} ]
                                        </div>

                                        <div style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '4px',
                                            height: '100%',
                                            background: theme.color
                                        }}></div>

                                        <h3 style={{ color: 'var(--text-primary)', fontSize: '2rem', letterSpacing: '-1px' }}>{v.variant}</h3>
                                        <p style={{ color: theme.color, marginBottom: '3rem', fontSize: '0.85rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', fontWeight: '700' }}>
                                            {v.type} // {v.feature}
                                        </p>

                                        <ul className="spec-list" style={{ marginTop: '2rem' }}>
                                            <li style={{ borderBottomColor: '#f1f5f9' }}><span style={{ color: 'var(--text-tertiary)' }}>ENDURANCE</span><span style={{ color: 'var(--text-primary)' }}>{v.endurance}</span></li>
                                            <li style={{ borderBottomColor: '#f1f5f9' }}><span style={{ color: 'var(--text-tertiary)' }}>RANGE</span><span style={{ color: 'var(--text-primary)' }}>{v.range}</span></li>
                                            <li style={{ borderBottomColor: '#f1f5f9' }}><span style={{ color: 'var(--text-tertiary)' }}>PAYLOAD</span><span style={{ color: 'var(--text-primary)' }}>{v.payload}</span></li>
                                            <li style={{ borderBottomColor: '#f1f5f9' }}><span style={{ color: 'var(--text-tertiary)' }}>ALTITUDE</span><span style={{ color: 'var(--text-primary)' }}>{v.altitude}</span></li>
                                        </ul>

                                        <div style={{ marginTop: '4rem' }}>
                                            <button className="btn btn-outline" style={{
                                                borderColor: 'var(--border-color)',
                                                color: 'var(--text-primary)',
                                                width: '100%',
                                                borderRadius: '0',
                                                fontSize: '0.75rem',
                                                letterSpacing: '2px',
                                                textTransform: 'uppercase'
                                            }}>Request Data Sheet</button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Tactical Capabilities Matrix */}
                <section className="reveal-section" style={{ background: '#fff', padding: '10rem 0', borderTop: '1px solid #eee' }}>
                    <div className="container">
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8rem' }}>
                            <div>
                                <h4 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '2rem', lineHeight: '1.1', color: 'var(--text-primary)' }}>SOFTWARE-DEFINED AUTONOMY</h4>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: '1.6' }}>
                                    Lattice-powered edge processing enables Bard to identify targets, categorize threats, and execute mission-critical decisions without human intervention.
                                </p>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
                                {product.featureCards.map((card: any, i: number) => (
                                    <div key={i}>
                                        <div style={{ color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', marginBottom: '1.5rem', letterSpacing: '2px' }}>[ 0{i + 1} // {card.title.toUpperCase()} ]</div>
                                        <p style={{ color: 'var(--text-tertiary)', fontSize: '0.9rem' }}>{card.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        );
    }

    // Default High-End Template for other products
    return (
        <div className="product-detail-page bg-white">
            <Navbar />

            {/* Premium Hero Section */}
            <section className="spec-hero reveal-section">
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <div style={{ textAlign: 'center' }}>
                        <span className="overline">{product.brand} · {product.category}</span>
                        <h1 style={{
                            fontSize: 'clamp(2rem, 8vw, 4.5rem)',
                            fontWeight: '900',
                            letterSpacing: '-2px',
                            lineHeight: '1',
                            marginBottom: '1.5rem',
                            color: 'var(--text-primary)'
                        }}>
                            {product.name}
                        </h1>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto' }}>{product.tagline}</p>
                    </div>

                    {/* Big Tech Stats Grid */}
                    <div className="tech-stats-grid">
                        {product.heroSpecs.map((spec: { label: string, value: string }, i: number) => (
                            <div key={i} className="tech-stat-item">
                                <span className="tech-stat-value">{spec.value}</span>
                                <span className="tech-stat-label">{spec.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Futuristic Product Gallery */}
            {product.galleryImages && product.galleryImages.length > 0 && (
                <section className="product-gallery-section reveal-section" style={{ background: 'var(--bg-tactical)', padding: '5rem 0' }}>
                    <div className="container">
                        <div className="gallery-layout">
                            <div className="gallery-main-display">
                                <div className="gallery-frame">
                                    <span className="corner corner-tl"></span>
                                    <span className="corner corner-tr"></span>
                                    <span className="corner corner-bl"></span>
                                    <span className="corner corner-br"></span>

                                    <div className="gallery-overlay-tech">
                                        <div className="tech-tag top-left">SYSTEM_VIEW_{activeImage + 1}</div>
                                        <div className="tech-tag top-right">MAS_ID_{id.toUpperCase()}_0{activeImage + 1}</div>
                                        <div className="tech-tag bottom-left">RADAR_LOCK: STABLE</div>
                                        <div className="tech-tag bottom-right">RECON_MODE: ACTIVE</div>
                                        <div className="scan-line"></div>
                                    </div>

                                    <img
                                        key={activeImage}
                                        src={product.galleryImages[activeImage]}
                                        alt={`${product.name} view ${activeImage + 1}`}
                                        className="main-gallery-image"
                                    />
                                </div>
                            </div>

                            <div className="gallery-sidebar">
                                <div className="gallery-info">
                                    <h4 style={{ fontSize: '0.8rem', opacity: 0.6, letterSpacing: '2px', marginBottom: '1rem' }}>SENSORY FEED</h4>
                                    <div className="gallery-thumbnails">
                                        {product.galleryImages.map((img: string, i: number) => (
                                            <button
                                                key={i}
                                                onClick={() => setActiveImage(i)}
                                                className={`thumbnail-item ${activeImage === i ? 'active' : ''}`}
                                            >
                                                <img src={img} alt={`Thumbnail ${i + 1}`} />
                                                <div className="thumb-index">0{i + 1}</div>
                                            </button>
                                        ))}
                                    </div>
                                    <div className="tech-specs-sidebar" style={{ marginTop: '2rem' }}>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                            <div className="mini-stat">
                                                <span className="mini-label">LATITUDE</span>
                                                <span className="mini-value">28.6139° N</span>
                                            </div>
                                            <div className="mini-stat">
                                                <span className="mini-label">LONGITUDE</span>
                                                <span className="mini-value">77.2090° E</span>
                                            </div>
                                            <div className="mini-stat">
                                                <span className="mini-label">ALTITUDE</span>
                                                <span className="mini-value">HEO_STABLE</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Mission Profile Section */}
            <section className="about-section blueprint-bg reveal-section">
                <div className="container">
                    <div className="about-content" style={{ gridTemplateColumns: '1.2fr 0.8fr' }}>
                        <div className="about-text">
                            <h4>MISSION PROFILE</h4>
                            <p style={{ fontSize: '1.5rem', color: 'var(--text-primary)', fontWeight: '600', lineHeight: '1.3' }}>
                                {product.description}
                            </p>
                            <p style={{ marginTop: '2rem', fontSize: '1.1rem' }}>
                                {product.longDescription}
                            </p>

                            <div style={{ marginTop: '4rem' }}>
                                <Link href="/contact" className="btn btn-primary">Inquire for Deployment</Link>
                            </div>
                        </div>

                        <div className="specs-list-panel">
                            <h4 className="spec-category-title">SYSTEM DATA</h4>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                {product.specs.map((spec: { label: string, value: string }, i: number) => (
                                    <div key={i} className="spec-list-item">
                                        <span className="spec-label">{spec.label}</span>
                                        <span className="spec-value">{spec.value}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="product-card" style={{ marginTop: '3rem', height: '250px' }}>
                                <div className={`product-image ${product.imageClass}`} style={{ height: '100%' }}>
                                    <span style={{ color: 'rgba(0,0,0,0.1)', fontSize: '1.5rem', fontWeight: '800' }}>[ SCHEMATIC ]</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Variant Breakdown Section */}
            {product.variants && product.variants.length > 0 && (
                <section className="about-section reveal-section" style={{ borderTop: '1px solid var(--border-color)', background: '#fff' }}>
                    <div className="container">
                        <h4 className="spec-category-title" style={{ marginBottom: '3rem' }}>VARIANT CONFIGURATIONS</h4>
                        <div style={{ width: '100%', overflowX: 'auto' }}>
                            <table className="variant-table" style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                                <thead>
                                    <tr style={{ background: 'var(--bg-tactical)', textAlign: 'left' }}>
                                        <th style={{ padding: '1rem', border: '1px solid var(--border-color)' }}>Variant</th>
                                        <th style={{ padding: '1rem', border: '1px solid var(--border-color)' }}>Type</th>
                                        <th style={{ padding: '1rem', border: '1px solid var(--border-color)' }}>Endurance</th>
                                        <th style={{ padding: '1rem', border: '1px solid var(--border-color)' }}>Range</th>
                                        <th style={{ padding: '1rem', border: '1px solid var(--border-color)' }}>Payload</th>
                                        <th style={{ padding: '1rem', border: '1px solid var(--border-color)' }}>Feature</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {product.variants.map((v: any, i: number) => (
                                        <tr key={i} style={{ borderBottom: '1px solid var(--border-color)' }}>
                                            <td style={{ padding: '1rem', border: '1px solid var(--border-color)', fontWeight: '700', color: 'var(--accent-primary)' }}>{v.variant}</td>
                                            <td style={{ padding: '1rem', border: '1px solid var(--border-color)' }}>{v.type}</td>
                                            <td style={{ padding: '1rem', border: '1px solid var(--border-color)' }}>{v.endurance}</td>
                                            <td style={{ padding: '1rem', border: '1px solid var(--border-color)' }}>{v.range}</td>
                                            <td style={{ padding: '1rem', border: '1px solid var(--border-color)' }}>{v.payload}</td>
                                            <td style={{ padding: '1rem', border: '1px solid var(--border-color)' }}>{v.feature}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            )}

            {/* Sub-system Analysis Section */}
            <section className="about-section reveal-section" style={{ background: '#f8fafc' }}>
                <div className="container">
                    <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1rem' }}>SUB-SYSTEM ANALYSIS</h2>
                    <p style={{ color: 'var(--text-tertiary)', marginBottom: '4rem' }}>Operational Advantage & Technical Superiority</p>

                    <div className="feature-grid-v2">
                        {product.featureCards.map((card: { title: string, description: string }, i: number) => (
                            <div key={i} className="feature-card-v2">
                                <span className="tech-stat-label" style={{ color: 'var(--accent-secondary)', marginBottom: '1rem', display: 'block' }}>0{i + 1} // CAPABILITY</span>
                                <h5>{card.title}</h5>
                                <p>{card.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
