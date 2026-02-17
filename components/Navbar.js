'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const HackerLink = ({ href, text, children, className = "" }) => {
    const [displayText, setDisplayText] = useState(text);
    const intervalRef = useRef(null);
    const chars = "01";

    const startScramble = () => {
        let iteration = 0;

        // Clear any existing interval
        if (intervalRef.current) clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            setDisplayText(prev =>
                text
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("")
            );

            if (iteration >= text.length) {
                clearInterval(intervalRef.current);
                setDisplayText(text);
            }

            iteration += 1 / 3;
        }, 30);
    };

    const handleMouseEnter = () => {
        startScramble();
    };

    return (
        <Link href={href} className={`hacker-link ${className}`} onMouseEnter={handleMouseEnter}>
            <span className="hacker-text">{displayText}</span>
            {children}
            <span className="corner corner-tl"></span>
            <span className="corner corner-tr"></span>
            <span className="corner corner-bl"></span>
            <span className="corner corner-br"></span>
        </Link>
    );
};

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <Link href="/" className="logo-container">
                    <img src="/logo-placeholder.png" alt="CDPL Logo" className="nav-logo" />
                </Link>
                <div className="nav-links">
                    <HackerLink href="/" text="Home" />
                    <div className="dropdown">
                        <HackerLink href="/about" text="About CDPL" />
                        <div className="dropdown-content">
                            <Link href="/about">Company Overview</Link>
                            <Link href="/about#leadership">Leadership</Link>
                        </div>
                    </div>
                    <div className="dropdown">
                        <HackerLink href="/#products" text="Products" />
                        <div className="dropdown-content">
                            <div className="dropdown-item">
                                <Link href="/mas">Major Aerospace Systems (MAS)</Link>
                                <div className="product-sub-list">
                                    <Link href="/mas#systems" className="sub-item-link">Precision UAVs</Link>
                                    <Link href="/mas#recon" className="sub-item-link">Artillery Recon</Link>
                                    <Link href="/mas#sims" className="sub-item-link">Flight Simulators</Link>
                                </div>
                            </div>
                            <div className="dropdown-item">
                                <Link href="/mms">Major Marine Systems (MMS)</Link>
                                <div className="product-sub-list">
                                    <Link href="/mms#underwater" className="sub-item-link">Underwater Assets</Link>
                                    <Link href="/mms#surface" className="sub-item-link">Surface Vessels</Link>
                                    <Link href="/mms#coastal" className="sub-item-link">Coastal Security</Link>
                                </div>
                            </div>
                            <div className="dropdown-item">
                                <Link href="/mgs">Major Ground Systems (MGS)</Link>
                                <div className="product-sub-list">
                                    <Link href="/mgs#ugv" className="sub-item-link">Ground Vehicles</Link>
                                    <Link href="/mgs#robotics" className="sub-item-link">Tactical Robotics</Link>
                                    <Link href="/mgs#logistics" className="sub-item-link">Intelligent Logistics</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <HackerLink href="/#technology" text="Technology" />
                    <HackerLink href="/#resources" text="Resources" />
                    <Link href="/#contact" className="btn btn-primary nav-btn">Contact</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
