import React from 'react';

const Header = () => {
    // Basic smooth scroll handler
    const scrollToSection = (e, sectionId) => {
        e.preventDefault();
        const targetElement = document.getElementById(sectionId);
        if (targetElement) {
            const headerOffset = document.querySelector('header')?.offsetHeight || 70; // Adjust fallback height if needed
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <header>
            <div className="container">
                <a href="#hero" className="logo" onClick={(e) => scrollToSection(e, 'hero')}>ABC Consulting</a>
                <nav>
                    {/* Consider a proper mobile menu solution for production */}
                    <ul>
                        <li><a href="#value-proposition" onClick={(e) => scrollToSection(e, 'value-proposition')}>Value Prop</a></li>
                        <li><a href="#toolkit" onClick={(e) => scrollToSection(e, 'toolkit')}>Toolkit</a></li>
                        <li><a href="#differentiator" onClick={(e) => scrollToSection(e, 'differentiator')}>Differentiator</a></li>
                        <li><a href="#team" onClick={(e) => scrollToSection(e, 'team')}>Our Team</a></li>
                        <li><a href="#collaboration" onClick={(e) => scrollToSection(e, 'collaboration')}>Collaboration</a></li>
                        <li><a href="#data-visualization" onClick={(e) => scrollToSection(e, 'data-visualization')}>Portfolio Analysis</a></li>
                        <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a></li>
                    </ul>
                </nav>
                {/* Placeholder for potential mobile menu toggle */}
            </div>
        </header>
    );
};

export default Header;