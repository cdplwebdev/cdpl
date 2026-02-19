'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            // Hide when scrolled more than 80px, show when near top
            setVisible(window.scrollY < 80);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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

            <div className={`scroll-indicator ${visible ? 'scroll-visible' : 'scroll-hidden'}`}>
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
                <div className="scroll-text">SCROLL FOR MORE DETAILS</div>
            </div>
        </section>
    );
}
