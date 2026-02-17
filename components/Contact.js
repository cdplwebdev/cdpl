'use client';

export default function Contact() {
    return (
        <section id="contact" className="about-section">
            <div className="container">
                <h2 className="section-title">Get in Touch</h2>
                <p className="section-subtitle">Connect with our mission specialists to discuss deployment and capabilities.</p>

                <div className="about-content">
                    <div className="about-text">
                        <h4>HEADQUARTERS</h4>
                        <p>Hyderabad, Telangana, India</p>
                        <p>Our engineering team and R&D lab are strategically located to drive indigenous innovation in aerospace.</p>

                        <div className="platform-features" style={{ marginTop: '2rem' }}>
                            <div className="feat-item">+91 89192 94946</div>
                            <div className="feat-item">info@major-aerospace.com</div>
                        </div>
                    </div>

                    <div className="about-stats">
                        <form className="contact-form" style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <input type="text" placeholder="Name" className="hacker-input" style={{ background: 'rgba(0, 255, 157, 0.05)', border: '1px solid var(--primary)', padding: '1rem', color: 'white' }} />
                            <input type="email" placeholder="Email" className="hacker-input" style={{ background: 'rgba(0, 255, 157, 0.05)', border: '1px solid var(--primary)', padding: '1rem', color: 'white' }} />
                            <textarea placeholder="Message" rows="4" className="hacker-input" style={{ background: 'rgba(0, 255, 157, 0.05)', border: '1px solid var(--primary)', padding: '1rem', color: 'white' }}></textarea>
                            <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>Send Signal</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
