'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function Mgs() {
    return (
        <div className="mgs-page">
            <Navbar />

            {/* MGS Hero */}
            <section className="hero-section mgs-hero">
                <div className="hero-overlay"></div>
                <div className="container hero-content">
                    <span className="overline">GROUND DOMINANCE</span>
                    <h1>MAJOR GROUND <br className="hero-break" /> <span className="highlight">SYSTEMS</span></h1>
                    <p>Autonomous Ground Vehicles. Tactical Robotics. Resilient Logistics. <br /> Pioneering the next frontier of land defense through intelligent, modular platforms.</p>
                    <div className="hero-actions">
                        <Link href="#about" className="btn btn-primary">About MGS</Link>
                        <button className="btn btn-outline" disabled>Coming Soon</button>
                    </div>
                </div>
            </section>

            <section id="about" className="about-section">
                <div className="container">
                    <h2 className="section-title">Institutional Overview</h2>
                    <p className="section-subtitle">Pioneering terrestrial autonomy.</p>
                    <div style={{ textAlign: 'center', padding: '4rem 0' }}>
                        <p style={{ color: 'var(--text-tertiary)', fontSize: '1.2rem', fontStyle: 'italic' }}>
                            [ Under research and development ]
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
