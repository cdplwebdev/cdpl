'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useState, useEffect } from 'react';

const IndiaFlag = () => (
    <svg width="28" height="20" viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '8px', borderRadius: '3px', transform: 'translateY(-2px)' }}>
        <path fill="#FF9933" d="M0 0h900v200H0z" />
        <path fill="#FFFFFF" d="M0 200h900v200H0z" />
        <path fill="#138808" d="M0 400h900v200H0z" />
        <circle cx="450" cy="300" r="80" fill="#000080" />
        <circle cx="450" cy="300" r="60" fill="#FFFFFF" />
        <circle cx="450" cy="300" r="12" fill="#000080" />
        {[...Array(24)].map((_, i) => (
            <line key={i} x1="450" y1="300" x2="450" y2="220" stroke="#000080" strokeWidth="10" transform={`rotate(${i * 15} 450 300)`} />
        ))}
    </svg>
);

export default function AboutPage() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const divisions = [
        {
            name: "Major Aerospace Systems",
            id: "MAS",
            logo: "/partners/mas-logo.png",
            desc: "Advanced aerial autonomous platforms and ISR solutions."
        },
        {
            name: "Major Ground Systems",
            id: "MGS",
            logo: "/partners/mgs-logo.png",
            desc: "Autonomous unmanned ground vehicles and tactical systems."
        },
        {
            name: "Major Marine Systems",
            id: "MMS",
            logo: "/partners/mms-logo.png",
            desc: "Surface and sub-surface maritime autonomy and mission systems."
        }
    ];

    const leadership = [
        {
            name: "Major Rama Sundeep Naishadham (Retd)",
            role: "Founder & CEO",
            details: "12+ Years operating Autonomous Systems | Alumni of IIT J & IIM A",
            bio: "Veteran-led insight. We understand what soldiers need because we have been in their boots.",
            image: "/partners/rama.jpg"
        },
        {
            name: "Naveen Kanakadandi",
            role: "CFO & Co-CEO",
            details: "18+ years steering strategy and tech execution | ex-Amazon, Google",
            bio: "Drives financial strategy and operational scaling for global growth.",
            image: "/partners/nav.jpeg"
        },
        {
            name: "Vishal Kumar Singh",
            role: "CTO",
            details: "6+ Years of Product development and Engineering experience",
            bio: "Leads autonomy platform and AI system architecture.",
            image: "/partners/vish.png"
        },
        {
            name: "Major Rajesh Yangaladasu (Retd)",
            role: "VP, Business Development",
            details: "Military veteran | Tactical Instructor | Defense Strategist | Alumni of IIM Lucknow",
            bio: "Strategic mind behind elite defense partnerships.",
            image: null
        },
        {
            name: "Anurag Madedhi",
            role: "Head, Manufacturing",
            details: "Masters in Material Science & Manufacturing | Biotechnology ex-COO",
            bio: "Leads production excellence and hardware precision.",
            image: null
        },
        {
            name: "Gowtham Gopishetty",
            role: "Head, Partnerships",
            details: "Ex CEO of Biotech company | Seasoned FMCG Entrepreneur",
            bio: "Scaling the strategic ecosystem and institutional alliances.",
            image: null
        }
    ];

    return (
        <div className={`about-all ${isVisible ? 'visible' : ''}`}>
            <Navbar />

            {/* Hero Section */}
            <section className="about-hero" style={{ padding: '160px 0 80px', background: '#fff' }}>
                <div className="container">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', letterSpacing: '4px', marginBottom: '2rem' }}>
                        <span>[ COMPANY_IDENTITY ]</span>
                        <div style={{ flex: 1, height: '1px', background: 'rgba(0, 52, 166, 0.1)' }}></div>
                    </div>

                    <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)', fontWeight: '900', lineHeight: '0.8', marginBottom: '2.5rem' }}>
                        CHAKRAVYUHA <span style={{ color: 'var(--accent-primary)' }}>DYNAMICS</span>
                    </h1>

                    <p style={{ fontSize: '1.4rem', color: 'var(--text-secondary)', maxWidth: '850px', lineHeight: '1.4' }}>
                        <IndiaFlag />
                        India’s first <span style={{ color: 'var(--text-primary)', fontWeight: '700' }}>Physical Intelligence</span> company. We build autonomous AI systems that perceive, reason, and act in the physical world to protect India and empower tactical operations across all domains.
                    </p>
                </div>
            </section>

            {/* Vision & Mission */}
            <section style={{ padding: '6rem 0', background: '#f8fafc', borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9' }}>
                <div className="container">
                    <div className="vision-mission-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>
                        <div style={{ borderLeft: '4px solid var(--accent-primary)', paddingLeft: '2rem' }}>
                            <h4 style={{ color: 'var(--accent-primary)', marginBottom: '1rem', letterSpacing: '2px', fontWeight: '800' }}>VISION</h4>
                            <p style={{ fontSize: '1.1rem', fontWeight: '500', color: 'var(--text-primary)' }}>To create sovereign Physical Intelligence that protects India and empowers humanity through autonomous systems.</p>
                        </div>
                        <div style={{ borderLeft: '4px solid var(--accent-secondary)', paddingLeft: '2rem' }}>
                            <h4 style={{ color: 'var(--accent-secondary)', marginBottom: '1rem', letterSpacing: '2px', fontWeight: '800' }}>MISSION</h4>
                            <p style={{ fontSize: '1.1rem', fontWeight: '500', color: 'var(--text-primary)' }}>Deploy intelligent autonomous systems for defense and dual-use applications, protecting soldiers and establishing India's global leadership in Physical Intelligence.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Divisions */}
            <section style={{ padding: '8rem 0', background: '#fff' }}>
                <div className="container">
                    <div className="leadership-title-section" style={{ textAlign: 'center', marginBottom: '6rem' }}>
                        <span style={{ color: 'var(--accent-primary)', letterSpacing: '3px', fontWeight: '800' }}>[ CORE_DIVISIONS ]</span>
                        <h2 style={{ fontSize: '3.5rem', fontWeight: '900', marginTop: '1rem' }}>Sovereign Autonomy Ecosystem</h2>
                    </div>

                    <div className="divisions-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
                        {divisions.map((div, i) => (
                            <div key={i} className="product-card" style={{ padding: '3.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', background: '#f8fafc' }}>
                                <span className="corner corner-tl"></span>
                                <span className="corner corner-br"></span>
                                <div style={{ height: '140px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2.5rem' }}>
                                    <img src={div.logo} alt={div.name} style={{ maxHeight: '100%', maxWidth: '90%', objectFit: 'contain' }} />
                                </div>
                                <h3 style={{ fontSize: '1.6rem', marginBottom: '1.2rem', fontWeight: '900', color: 'var(--text-primary)' }}>{div.name}</h3>
                                <div style={{ height: '2px', width: '40px', background: 'var(--accent-primary)', marginBottom: '1.5rem' }}></div>
                                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{div.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership Section */}
            <section id="leadership" style={{ padding: '8rem 0', background: '#f8fafc', borderTop: '1px solid #f1f5f9' }}>
                <div className="container">
                    <div className="leadership-title-section" style={{ textAlign: 'center', marginBottom: '6rem' }}>
                        <span style={{ color: 'var(--accent-primary)', letterSpacing: '3px', fontWeight: '800' }}>[ LEADERSHIP ]</span>
                        <h2 style={{ fontSize: '3.5rem', fontWeight: '900', marginTop: '1rem' }}>Veteran-Led. Physics-Driven.</h2>
                    </div>

                    <div className="products-grid leadership-grid">
                        {leadership.map((leader, index) => (
                            <div key={index} className="product-card" style={{ padding: '2.5rem', minHeight: '520px', background: '#fff' }}>
                                <span className="corner corner-tl"></span>
                                <span className="corner corner-br"></span>
                                <div className="product-image" style={{
                                    height: '260px',
                                    marginBottom: '2.5rem',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    border: '1px solid rgba(0,0,0,0.05)',
                                    background: '#f3f4f6'
                                }}>
                                    {leader.image ? (
                                        <img src={leader.image} alt={leader.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    ) : (
                                        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                            <div style={{ fontSize: '0.6rem', color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)', marginBottom: '0.5rem' }}>SECURE_ID: 00{index + 1}</div>
                                            <span style={{ color: 'var(--accent-primary)', fontSize: '0.7rem', fontWeight: '800' }}>PORTRAIT_OFFLINE</span>
                                        </div>
                                    )}
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <span style={{ color: 'var(--accent-primary)', fontWeight: '800', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>{leader.role.toUpperCase()}</span>
                                    <h3 style={{ fontSize: '1.6rem', fontWeight: '900', color: 'var(--text-primary)' }}>{leader.name}</h3>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)', lineHeight: '1.4', marginBottom: '1.5rem' }}>{leader.details}</p>
                                    <p style={{ fontSize: '1rem', fontStyle: 'italic', color: 'var(--text-primary)', borderLeft: '2px solid var(--accent-primary)', paddingLeft: '1rem' }}>
                                        "{leader.bio}"
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />

            <style jsx>{`
                .about-all { opacity: 0; transition: opacity 1s ease; }
                .about-all.visible { opacity: 1; }

                @media (max-width: 768px) {
                    .about-hero {
                        padding: 120px 0 60px !important;
                    }
                    
                    .about-hero h1 {
                        font-size: 3.5rem !important;
                        line-height: 1 !important;
                        margin-bottom: 1.5rem !important;
                    }

                    .about-hero p {
                        font-size: 1.1rem !important;
                        line-height: 1.5 !important;
                    }

                    section {
                        padding: 4rem 0 !important;
                    }

                    .container {
                        padding: 0 1.5rem !important;
                    }

                    h2 {
                        font-size: 2.2rem !important;
                        margin-bottom: 1rem !important;
                    }

                    .vision-mission-grid {
                        grid-template-columns: 1fr !important;
                        gap: 2.5rem !important;
                    }

                    .divisions-grid {
                        grid-template-columns: 1fr !important;
                        gap: 1.5rem !important;
                    }

                    .product-card {
                        padding: 2rem !important;
                        min-height: auto !important;
                    }

                    .leadership-title-section {
                        margin-bottom: 3rem !important;
                    }

                    .leadership-grid {
                        grid-template-columns: 1fr !important;
                        gap: 2rem !important;
                    }
                }

                @media (max-width: 480px) {
                    .about-hero h1 {
                        font-size: 2.8rem !important;
                    }
                    
                    .about-hero p {
                        font-size: 1rem !important;
                    }

                    h2 {
                        font-size: 1.8rem !important;
                    }
                }
            `}</style>
        </div>
    );
}
