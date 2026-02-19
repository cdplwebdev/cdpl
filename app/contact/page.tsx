'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Contact from '../../components/Contact';

export default function ContactPage() {
    return (
        <div className="contact-page">
            <Navbar />

            <section className="hero-section" style={{ minHeight: '40vh' }}>
                <div className="hero-overlay"></div>
                <div className="container hero-content">
                    <span className="overline">CONTACT US</span>
                    <h1>GET IN <br /> <span className="highlight">TOUCH</span></h1>
                    <p>Connect with our mission specialists to discuss deployment and capabilities.</p>
                </div>
            </section>

            <Contact />

            <Footer />
        </div>
    );
}
