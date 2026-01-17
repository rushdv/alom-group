import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import SloganMarquee from './sections/SloganMarquee';
import BaniSection from './sections/BaniSection';
import CEOWithKhala from './sections/CEOWithKhala';
import CEOWithMembers from './sections/CEOWithMembers';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="app-main">
      <Navbar />
      <main>
        <Hero />
        <SloganMarquee />
        <BaniSection />
        <CEOWithKhala />
        <CEOWithMembers />
      </main>
      <Footer />
    </div>
  );
}

export default App;
