'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

const HackerLink = ({ href, text, children, className = "", isActive = false }) => {
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
        <Link href={href} className={`hacker-link ${className} ${isActive ? 'active' : ''}`} onMouseEnter={handleMouseEnter}>
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
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();
    const isHomePage = pathname === '/';
    const isBardPage = pathname === '/products/bard';
    const hasDarkHero = isHomePage || isBardPage;

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

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${!hasDarkHero ? 'solid' : ''} ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <div className="container nav-container">
                <Link href="/" className="logo-container">
                    <img
                        src={(scrolled || !hasDarkHero || isMobileMenuOpen) ? "/partners/cdpliconbl.png" : "/partners/cdplicon.png"}
                        alt="CDPL Logo"
                        className="nav-logo"
                    />
                </Link>

                <button
                    className={`mobile-toggle ${isMobileMenuOpen ? 'active' : ''}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>

                <div className={`nav-links ${isMobileMenuOpen ? 'show' : ''}`}>
                    <HackerLink href="/" text="Home" isActive={pathname === '/'} />
                    <div className="dropdown">
                        <HackerLink href="/about" text="About CDPL" isActive={pathname === '/about'} />
                        <div className="dropdown-content">
                            <Link href="/about">Company Overview</Link>
                            <Link href="/about#leadership">Leadership</Link>
                        </div>
                    </div>
                    <div className="dropdown mega-dropdown">
                        <HackerLink href="/#products" text="Products" isActive={pathname.startsWith('/products') || pathname === '/mas' || pathname === '/mgs' || pathname === '/mms'} />
                        <div className="mega-menu">
                            <div className="mega-menu-container">
                                <div className="mega-column" style={{ borderRight: '1px solid rgba(0, 57, 166, 0.1)' }}>
                                    <Link href="/mas" className={`mega-header ${pathname === '/mas' || pathname.startsWith('/products/mas') ? 'active' : ''}`} style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1.5rem', textDecoration: 'none', cursor: 'pointer', position: 'relative', padding: '10px' }}>
                                        <img src="/partners/masicon.png" alt="MAS" style={{ height: '30px', width: 'auto', objectFit: 'contain', position: 'relative', zindex: '2' }} />
                                        <span className="mega-category" style={{ color: 'var(--team-mas)', position: 'relative', zindex: '2' }}>Major Aerospace Systems</span>
                                        <span className="corner corner-tl"></span>
                                        <span className="corner corner-tr"></span>
                                        <span className="corner corner-bl"></span>
                                        <span className="corner corner-br"></span>
                                    </Link>
                                    <div className="mega-links">
                                        <Link href="/products/bard" className="mega-link-item team-mas">
                                            <span className="link-title">BARD Family</span>
                                            <span className="link-desc">Strategic Quad ISR</span>
                                        </Link>
                                        <Link href="/products/horizon-vtol" className="mega-link-item team-mas">
                                            <span className="link-title">HORIZON VTOL</span>
                                            <span className="link-desc">Long Range Fixed-Wing</span>
                                        </Link>
                                        <Link href="/products/horizon-fpv" className="mega-link-item team-mas">
                                            <span className="link-title">HORIZON FPV</span>
                                            <span className="link-desc">Advanced Trainer</span>
                                        </Link>
                                        <Link href="/products/stinger" className="mega-link-item team-mas">
                                            <span className="link-title">STINGER Family</span>
                                            <span className="link-desc">Tactical Strike</span>
                                        </Link>
                                        <Link href="/products/aot" className="mega-link-item team-mas">
                                            <span className="link-title">AOT Trainer</span>
                                            <span className="link-desc">Pilot Training</span>
                                        </Link>
                                        <Link href="/mas" className="view-all-link" style={{ color: 'var(--team-mas)' }}>View MAS Portfolio &rarr;</Link>
                                    </div>
                                </div>

                                <div className="mega-column" style={{ borderRight: '1px solid rgba(75, 83, 32, 0.1)' }}>
                                    <Link href="/mgs" className={`mega-header ${pathname === '/mgs' ? 'active' : ''}`} style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1.5rem', textDecoration: 'none', cursor: 'pointer', position: 'relative', padding: '10px' }}>
                                        <div style={{ height: '30px', width: '40px', background: 'var(--bg-tactical)', border: '1px solid var(--team-mgs)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: 'var(--team-mgs)', fontWeight: 'bold', position: 'relative', zindex: '2' }}>MGS</div>
                                        <span className="mega-category" style={{ color: 'var(--team-mgs)', position: 'relative', zindex: '2' }}>Major Ground Systems</span>
                                        <span className="corner corner-tl"></span>
                                        <span className="corner corner-tr"></span>
                                        <span className="corner corner-bl"></span>
                                        <span className="corner corner-br"></span>
                                    </Link>
                                    <div className="mega-links">
                                        <p style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)', fontStyle: 'italic' }}>
                                            [ Under research and development ]
                                        </p>
                                        <Link href="/mgs" className="view-all-link" style={{ color: 'var(--team-mgs)', marginTop: '1rem', display: 'block' }}>View MGS Portfolio &rarr;</Link>
                                    </div>
                                </div>

                                <div className="mega-column">
                                    <Link href="/mms" className={`mega-header ${pathname === '/mms' ? 'active' : ''}`} style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1.5rem', textDecoration: 'none', cursor: 'pointer', position: 'relative', padding: '10px' }}>
                                        <div style={{ height: '30px', width: '40px', background: 'var(--bg-tactical)', border: '1px solid var(--team-mms)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: 'var(--team-mms)', fontWeight: 'bold', position: 'relative', zindex: '2' }}>MMS</div>
                                        <span className="mega-category" style={{ color: 'var(--team-mms)', position: 'relative', zindex: '2' }}>Major Marine Systems</span>
                                        <span className="corner corner-tl"></span>
                                        <span className="corner corner-tr"></span>
                                        <span className="corner corner-bl"></span>
                                        <span className="corner corner-br"></span>
                                    </Link>
                                    <div className="mega-links">
                                        <p style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)', fontStyle: 'italic' }}>
                                            [ Under research and development ]
                                        </p>
                                        <Link href="/mms" className="view-all-link" style={{ color: 'var(--team-mms)', marginTop: '1rem', display: 'block' }}>View MMS Portfolio &rarr;</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <HackerLink href="/resources" text="Resources" isActive={pathname === '/resources'} />
                    <Link href="/contact" className="btn btn-primary nav-btn">Contact</Link>
                </div>
            </div>

            <style jsx>{`
                .mobile-toggle {
                    display: none;
                    flex-direction: column;
                    justify-content: space-between;
                    width: 30px;
                    height: 21px;
                    background: none;
                    border: none;
                    cursor: pointer;
                    padding: 0;
                    z-index: 1001;
                }

                .bar {
                    width: 100%;
                    height: 2px;
                    background-color: ${(scrolled || !hasDarkHero || isMobileMenuOpen) ? 'var(--text-primary)' : '#fff'};
                    transition: all 0.3s ease;
                }

                .mobile-toggle.active .bar:nth-child(1) {
                    transform: translateY(9.5px) rotate(45deg);
                }

                .mobile-toggle.active .bar:nth-child(2) {
                    opacity: 0;
                }

                .mobile-toggle.active .bar:nth-child(3) {
                    transform: translateY(-9.5px) rotate(-45deg);
                }

                @media (max-width: 992px) {
                    .mobile-toggle {
                        display: flex;
                    }

                    .nav-links {
                        position: fixed;
                        top: 0;
                        right: -100%;
                        width: 80%;
                        height: 100vh;
                        background: #fff;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        gap: 2rem;
                        transition: 0.4s ease;
                        box-shadow: -10px 0 30px rgba(0,0,0,0.1);
                        z-index: 1000;
                        padding: 2rem;
                        overflow-y: auto;
                    }

                    .nav-links.show {
                        right: 0;
                    }

                    :global(.navbar.solid .nav-links) {
                        background: #fff;
                    }

                    :global(.hacker-link) {
                        color: var(--text-primary) !important;
                        font-size: 1.2rem !important;
                    }

                    .dropdown-content {
                        position: static;
                        box-shadow: none;
                        background: transparent;
                        padding: 0;
                        margin-top: 1rem;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }

                    .mega-menu {
                        display: none; /* Hide complex mega menu on mobile for now, or simplify */
                    }
                    
                    /* Simple view all links instead of mega menu */
                    .dropdown:hover .mega-menu {
                        display: none;
                    }

                    .nav-btn {
                        width: 100%;
                        margin-top: 1rem;
                    }
                }
            `}</style>
        </nav >
    );
};

export default Navbar;
