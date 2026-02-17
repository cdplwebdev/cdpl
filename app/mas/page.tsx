'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function Mas() {
    return (
        <div className="mas-page">
            <Navbar />

            {/* MAS Hero */}
            <section className="hero-section mas-hero">
                <div className="hero-overlay"></div>
                <div className="container hero-content">
                    <span className="overline">AUTONOMOUS DEFENSE</span>
                    <h1>MAJOR AEROSPACE <br className="hero-break" /> <span className="highlight">SYSTEMS</span></h1>
                    <p>Strategic Aerial Autonomy. Relentless Precision. <br /> We are designing next-decade aerospace solutions — from high-altitude surveillance to autonomous tactical logistics.</p>
                    <div className="hero-actions">
                        <Link href="#about" className="btn btn-primary">Institutional Overview</Link>
                        <Link href="#products" className="btn btn-outline">Operational Platforms</Link>
                    </div>
                </div>
            </section>

            {/* MAS About */}
            <section id="about" className="about-section">
                <div className="container">
                    <h2 className="section-title">Institutional Overview</h2>
                    <p className="section-subtitle">A strategic leader in indigenous autonomous systems.</p>

                    <div className="about-content">
                        <div className="about-text">
                            <h4>INDIGENOUS INNOVATION · GLOBAL IMPACT</h4>
                            <p>
                                Major Aerospace Systems (MAS) stands at the forefront of aerospace innovation. With a strong foundation in precision engineering and high-altitude flight dynamics, MAS pioneers the design, advanced manufacturing, and deployment of next-generation autonomous platforms.
                            </p>
                            <p>
                                Through strategic indigenous innovation and a commitment to self-reliance, we deliver tactical systems that are mission-ready and future-proof — enabling sovereign forces to protect their interests with unyielding precision.
                            </p>

                            <div className="about-stats" style={{ marginTop: '2rem' }}>
                                <div className="stat-card">
                                    <h3>2+</h3>
                                    <p>Years of R&D</p>
                                </div>
                                <div className="stat-card">
                                    <h3>100%</h3>
                                    <p>Indigenous Tech</p>
                                </div>
                            </div>
                        </div>

                        <div className="about-stats">
                            <div className="stat-card">
                                <h3>Tier 1</h3>
                                <p>Strategic Partners</p>
                            </div>
                            <div className="stat-card">
                                <h3>MIL-STD</h3>
                                <p>Rugged Systems</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* MAS Products */}
            <section id="products" className="products-section">
                <div className="container">
                    <h2 className="section-title">MAS Product Line</h2>
                    <p className="section-subtitle">Tactical Solutions for the Modern Battlefield.</p>

                    <div className="products-grid">

                        {/* Product 1 */}
                        <div className="product-card">
                            <span className="corner corner-tl"></span>
                            <span className="corner corner-tr"></span>
                            <span className="corner corner-bl"></span>
                            <span className="corner corner-br"></span>

                            <div className="product-image product-image-aot">
                                <div className="product-type-badge">TRAINER</div>
                            </div>
                            <div className="product-content">
                                <span className="product-tagline">SURVEILLANCE & TRAINING</span>
                                <h3>Aerial Observation Trainer</h3>
                                <p>Made-in-India rugged drone for surveillance and pilot training, with strong follow-on orders after initial Indian Army success.</p>
                                <a href="#" className="btn-text">View Specifications &rarr;</a>
                            </div>
                        </div>

                        {/* Product 2 */}
                        <div className="product-card">
                            <span className="corner corner-tl"></span>
                            <span className="corner corner-tr"></span>
                            <span className="corner corner-bl"></span>
                            <span className="corner corner-br"></span>

                            <div className="product-image product-image-bard">
                                <div className="product-type-badge">RECON</div>
                            </div>
                            <div className="product-content">
                                <span className="product-tagline">TACTICAL AUTONOMY</span>
                                <h3>Battlefield Artillery Recon Drone</h3>
                                <p>A tactical, autonomous drone built for real-time surveillance, target acquisition, and post-strike damage assessment.</p>
                                <a href="#" className="btn-text">View Specifications &rarr;</a>
                            </div>
                        </div>

                        {/* Product 3 */}
                        <div className="product-card">
                            <span className="corner corner-tl"></span>
                            <span className="corner corner-tr"></span>
                            <span className="corner corner-bl"></span>
                            <span className="corner corner-br"></span>

                            <div className="product-image product-image-tdfs">
                                <div className="product-type-badge">SIMULATOR</div>
                            </div>
                            <div className="product-content">
                                <span className="product-tagline">WAR-GAMING</span>
                                <h3>Tactical Drone Flying Simulator</h3>
                                <p>A hyper-realistic drone piloting and war-gaming simulator featuring onboard compute and high-resolution immersive visuals.</p>
                                <a href="#" className="btn-text">View Specifications &rarr;</a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
