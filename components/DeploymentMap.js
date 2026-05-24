'use client';

import React, { useEffect, useRef } from 'react';

// Removed pins as per user request to remove blinking and hovering nodes

export default function DeploymentMap({ isCompact = false }) {
    const mapRef = useRef(null);
    const wrapperRef = useRef(null);
    const titleRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!mapRef.current || !wrapperRef.current) return;

            const rect = mapRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Calculate progress: 0 when map enters the bottom of the viewport, 1 when it's well into the screen
            const rawProgress = (windowHeight - rect.top) / (windowHeight * 0.6);
            const progress = Math.max(0, Math.min(1, rawProgress));

            // Smoothly scale from 0.8 to 1.0, and fade from 0.3 to 1.0
            const scale = 0.8 + (0.2 * progress);
            const opacity = 0.3 + (0.7 * progress);

            wrapperRef.current.style.transform = `scale(${scale})`;
            wrapperRef.current.style.opacity = opacity;

            if (titleRef.current) {
                titleRef.current.style.opacity = progress;
                titleRef.current.style.transform = `translateY(${20 - (progress * 20)}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        // Initial setup
        setTimeout(handleScroll, 50);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div ref={mapRef} className={`deployment-map-container ${isCompact ? 'compact' : ''}`}>
            {!isCompact && <h2 ref={titleRef} className="section-title" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'transform 0.1s ease-out, opacity 0.1s ease-out', marginBottom: '3.5rem' }}>Our Reach</h2>}
            <div
                ref={wrapperRef}
                className="map-wrapper shadow-premium"
                style={{
                    transform: 'scale(0.8)',
                    opacity: 0.3,
                    transformOrigin: 'center top',
                    transition: 'transform 0.1s ease-out, opacity 0.1s ease-out'
                }}
            >
                <div className="image-container-v3">
                    <img src="/images/india_top_3d.png" alt="Tactical Top-Down View of India" className="map-image-top" />
                    <div className="terrain-gloss"></div>
                </div>

                {/* Nodes removed as requested */}
            </div>

            <style jsx>{`
                .deployment-map-container {
                    margin-top: 2rem;
                    text-align: center;
                    width: 100%;
                }
                .deployment-map-container.compact {
                    margin-top: 0;
                }
                .map-wrapper {
                    position: relative;
                    max-width: 1100px;
                    margin: 0 auto;
                    background: #f8fafc;
                    border: 2px solid #e2e8f0;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 40px 120px rgba(0, 57, 166, 0.08);
                }
                .image-container-v3 {
                    position: relative;
                    padding: 1rem;
                }
                .map-image-top {
                    width: 100%;
                    height: auto;
                    display: block;
                    filter: saturate(0.9) contrast(1.02);
                }
                .terrain-gloss {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 50%, rgba(0,0,0,0.02) 100%);
                    pointer-events: none;
                }

                @media (max-width: 768px) {
                    .map-wrapper { border-radius: 0; padding: 0.5rem; }
                }
            `}</style>
        </div>
    );
}


