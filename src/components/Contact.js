import React from 'react';

const Contact = () => {
    const contactEmail = "your-contact-email@abcconsulting.com"; // Replace with your actual email
    const emailSubject = "Partnership Inquiry - IFRS17/SII";

    return (
        <section id="contact">
            <div className="container">
                <h2>Let's Build Success Together</h2>
                <p>Leverage ABC Consulting's expert competency and technical toolkit to win and successfully deliver complex IFRS 17 & Solvency II projects for your clients.</p>
                <p><strong>Ready to discuss how we can support your next engagement?</strong></p>
                {/* Use mailto link for the button */}
                <a href={`mailto:${contactEmail}?subject=${encodeURIComponent(emailSubject)}`} className="cta-button">
                    Schedule a Discussion
                </a>
            </div>
        </section>
    );
};

export default Contact;