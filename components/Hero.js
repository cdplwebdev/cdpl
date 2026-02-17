export default function Hero() {
    return (
        <section id="home" className="hero-section">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="hero-video"
            >
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <span className="overline">AUTONOMOUS DEFENSE · AERIAL SUPREMACY</span>
                <h1>PRECISION <br className="hero-break" /> <span className="highlight">SUPREMACY</span></h1>
                <p>Chakravyuh Dynamics (CDPL) is a Bharat-rooted global leader in autonomous defense, pioneering next-generation aerospace systems under the MAS brand.</p>
                <div className="hero-actions">
                    <a href="#products" className="btn btn-primary">View Our Products</a>
                    <a href="/about" className="btn btn-outline">Our Mission</a>
                </div>
            </div>

            <div className="scroll-indicator">
                <span className="dot"></span>
                <span className="line"></span>
            </div>
        </section>
    );
}
