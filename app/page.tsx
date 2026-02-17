'use client';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Platform from '../components/Platform';
import ProductCategories from '../components/ProductCategories';
import Resources from '../components/Resources';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Platform />
            <ProductCategories />
            <Resources />
            <Contact />
            <Footer />
        </>
    );
}
