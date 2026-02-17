export default function Platform() {
    return (
        <section id="technology" className="about-section">
            <div className="container">
                <h2 className="section-title">Technological Core</h2>
                <p className="section-subtitle">A unified operating system for across Air, Ground, and Marine autonomous operations.</p>

                <div className="about-content">
                    <div className="about-text">
                        <h4>TACTICAL EDGE INTELLIGENCE</h4>
                        <p>
                            MAS redefines battlefield awareness by integrating <strong>advanced sensor suites</strong> with standard-setting autonomous navigation. Our platforms are designed for the modern operational environment—high-stress, GPS-denied, and mission-critical.
                        </p>
                        <p>
                            From <strong>specialized pilot training drones</strong> to <strong>real-time reconnaissance systems</strong>, our technology provides a common operational picture—enabling seamless interoperability and decisive action.
                        </p>
                        <div className="platform-features">
                            <div className="feat-item">Modular Sensors</div>
                            <div className="feat-item">Edge AI Processing</div>
                            <div className="feat-item">BVLOS Ready</div>
                        </div>

                        <a href="#products" className="btn btn-outline" style={{ marginTop: '2rem' }}>Explore Systems</a>
                    </div>

                    <div className="about-stats">
                        <div className="stat-card">
                            <h3>100%</h3>
                            <p>Indigenous Tech</p>
                        </div>
                        <div className="stat-card">
                            <h3>24/7</h3>
                            <p>Mission Ready</p>
                        </div>
                        <div className="stat-card">
                            <h3>IP67</h3>
                            <p>Field Rugged</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
