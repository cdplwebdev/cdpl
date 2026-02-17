'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { useState, useRef } from 'react';



export default function AboutPage() {
    const leaders = [
        {
            name: "Venkata Raman",
            role: "Founder & CEO",
            bio: "A visionary aerospace engineer with a decade of experience in autonomous systems. He spearheads CDPL's strategic direction, focusing on indigenous innovation for sovereign defense and high-altitude surveillance solutions."
        },
        {
            name: "Mission Specialist",
            role: "Chief Technology Officer",
            bio: "Leading CDPL's R&D efforts in swarm intelligence and AI-driven navigation. His expertise ensures MAS platforms remain at the cutting edge of autonomous aerial supremacy."
        }
    ];

    return (
        <div className="about-page">
            <Navbar />

            {/* Company Overview Section */}
            <section id="overview" className="hero-section" style={{ minHeight: '60vh' }}>
                <div className="hero-overlay"></div>
                <div className="container hero-content">
                    <span className="overline">ABOUT CDPL</span>
                    <h1>CHAKRAVYUH <br /> <span className="highlight">DYNAMICS</span></h1>
                    <p>Chakravyuh Dynamics Private Limited (CDPL) is a premier autonomous systems company based in Hyderabad, India. We are dedicated to redefining defense technology through indigenous innovation, precision engineering, and a commitment to global security.</p>
                </div>
            </section>

            <section className="about-section">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-text">
                            <h4>OUR VISION</h4>
                            <p>To be the global benchmark for autonomous defense, empowering nations with intelligent, software-defined platforms that ensure peace through technological superiority.</p>
                        </div>
                        <div className="about-text">
                            <h4>OUR MISSION</h4>
                            <p>To design, develop, and deploy the world's most reliable autonomous aerial systems under the MAS brand, bridging the gap between human intelligence and machine precision.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Section */}
            <section id="leadership" className="products-section bg-dark-soft">
                <div className="container">
                    <h2 className="section-title">Leadership</h2>
                    <p className="section-subtitle">The strategic minds driving CDPL's mission forward.</p>

                    <div className="products-grid">
                        {leaders.map((leader, index) => (
                            <div key={index} className="product-card">
                                <span className="corner corner-tl"></span>
                                <span className="corner corner-tr"></span>
                                <span className="corner corner-bl"></span>
                                <span className="corner corner-br"></span>
                                <div className="product-image" style={{ height: '250px', backgroundColor: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <span style={{ color: 'var(--accent-primary)', fontSize: '0.8rem', letterSpacing: '2px' }}>[ LEADERSHIP PHOTO ]</span>
                                </div>
                                <div className="product-content">
                                    <span className="product-tagline">{leader.role}</span>
                                    <h3>{leader.name}</h3>
                                    <p>{leader.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
