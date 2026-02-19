'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ResourcesComponent from '../../components/Resources';

export default function ResourcesPage() {
    return (
        <div className="resources-page" style={{ paddingTop: '100px', minHeight: '100vh' }}>
            <Navbar />
            <ResourcesComponent />
            <Footer />
        </div>
    );
}
