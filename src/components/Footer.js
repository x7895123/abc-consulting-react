import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear(); // Get current year dynamically

    return (
        <footer>
            <div className="container">
                <p>© {currentYear} ABC Consulting. All rights reserved.</p>
                <p>Specialized Outsourcing Partner for IFRS 17 & Solvency II Implementations.</p>
                {/* Add links to Privacy Policy or Terms if needed */}
                {/* Example: <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Service</a> */}
            </div>
        </footer>
    );
};

export default Footer;