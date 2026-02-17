'use client';

export default function Resources() {
    return (
        <section id="resources" className="products-section">
            <div className="container">
                <h2 className="section-title">Resources</h2>
                <p className="section-subtitle">Technical documentation, whitepapers, and mission profiles.</p>

                <div className="products-grid">
                    <div className="product-card">
                        <span className="corner corner-tl"></span>
                        <span className="corner corner-tr"></span>
                        <span className="corner corner-bl"></span>
                        <span className="corner corner-br"></span>
                        <div className="product-content">
                            <span className="product-tagline">DOCUMENTATION</span>
                            <h3>Technical Assets</h3>
                            <p>Download approved technical documentation and performance specifications for the BARD and RAVEN autonomous platforms.</p>
                            <a href="#" className="btn-text">Download PDFs &rarr;</a>
                        </div>
                    </div>
                    <div className="product-card">
                        <span className="corner corner-tl"></span>
                        <span className="corner corner-tr"></span>
                        <span className="corner corner-bl"></span>
                        <span className="corner corner-br"></span>
                        <div className="product-content">
                            <span className="product-tagline">MEDIA</span>
                            <h3>Visual Missions</h3>
                            <p>Experience our autonomous platforms in action through mission highlights and flight test footage on our official channel.</p>
                            <a href="https://youtube.com/@chakravyuhadynamics" target="_blank" rel="noopener noreferrer" className="btn-text">Official YouTube &rarr;</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
