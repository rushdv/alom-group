import React from 'react';
import './Hero.css';
import ceoPortrait from '../assets/images/ceo_enhanced.png';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-bg-overlay"></div>

            <div className="hero-content-wrapper">
                <div className="hero-image-circle">
                    <img
                        src={ceoPortrait}
                        alt="Mafikul Alom - CEO"
                        className="hero-image"
                    />
                </div>

                <div className="hero-text-content">
                    <h1 className="hero-title">
                        <span>Visionary Leader</span>
                        Mafikul Alom
                    </h1>
                    <p className="hero-subtitle">CEO of Alom Group & Industry</p>
                </div>
            </div>

            <div className="hero-scroll-indicator">
                &#8595;
            </div>
        </section>
    );
};

export default Hero;
