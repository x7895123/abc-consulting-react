import React from 'react';

const Toolkit = () => {
    return (
        <section id="toolkit">
            <div className="container">
                <h2>Our Technical Toolkit: A Flexible Foundation</h2>
                <p className="centered-p">We provide a modular software complex designed to integrate seamlessly into your implementation projects.</p>
                <div className="toolkit-grid">
                    <div className="toolkit-item">
                        <h4>1. Data Warehouse (DWH) Foundation</h4>
                        <p>Robust data structures & ETL frameworks tailored for IFRS 17/SII data. Adaptable architecture for diverse source systems.</p>
                    </div>
                    <div className="toolkit-item">
                        <h4>2. Python Core Libraries</h4>
                        <p>Optimized calculation engine for all core IFRS 17 & Solvency II metrics. Features unique dynamic product modeling.</p>
                    </div>
                    <div className="toolkit-item">
                        <h4>3. Web Server (API Layer)</h4>
                        <p>Exposes Core Library functions via APIs for system integration and hosts dynamically generated product APIs.</p>
                    </div>
                    <div className="toolkit-item">
                        <h4>4. Web UI</h4>
                        <p>Interface for configuration, assumption management, model execution, results visualization, and reporting.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Toolkit;