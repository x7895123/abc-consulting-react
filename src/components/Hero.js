import React from 'react';

const Hero = () => {
    // Example smooth scroll function directly linked to the button
    const scrollToContact = (e) => {
        e.preventDefault();
        const contactSection = document.getElementById('contact');
        if (contactSection) {
             const headerOffset = document.querySelector('header')?.offsetHeight || 70;
             const elementPosition = contactSection.getBoundingClientRect().top;
             const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
             window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
    };

    return (
        // Keep the ID for navigation targets
        <section id="hero">
            <div className="container">
                <h1>Expert IFRS 17 & Solvency II Competency</h1>
                <p className="subtitle">Your Outsourcing Partner for Technical Implementation Success</p>
                <p className="centered-p">We empower Audit & Consulting firms by providing specialized actuarial & technical teams and advanced software toolkits to accelerate your IFRS 17 & Solvency II projects.</p>
                {/* Use onClick for button navigation */}
                <a href="#contact" className="cta-button" onClick={scrollToContact}>Partner With Us</a>
            </div>
        </section>
    );
};

export default Hero;