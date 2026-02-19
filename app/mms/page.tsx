'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function Mms() {
    return (
        <div className="mms-page">
            <Navbar />

            {/* MMS Hero */}
            <section className="hero-section mms-hero">
                <div className="hero-overlay"></div>
                <div className="container hero-content">
                    <span className="overline">MARITIME SUPREMACY</span>
                    <h1>MAJOR MARINE <br className="hero-break" /> <span className="highlight">SYSTEMS</span></h1>
                    <p>Underwater Autonomy. Smart Surface Vessels. Coastal Security. <br /> Redefining maritime operations with secure, mesh-networked autonomous assets.</p>
                    <div className="hero-actions">
                        <Link href="#about" className="btn btn-primary">About MMS</Link>
                        <button className="btn btn-outline" disabled>Coming Soon</button>
                    </div>
                </div>
            </section>

            <section id="about" className="about-section">
                <div className="container">
                    <h2 className="section-title">Institutional Overview</h2>
                    <p className="section-subtitle">Redefining maritime operations.</p>
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
