import React from 'react';

const Differentiator = () => {
    return (
        <section id="differentiator">
            <div className="container">
                <h2>Key Differentiator: Dynamic Modeling & API Generation</h2>
                <p className="centered-p">Our Python Core Libraries offer a unique advantage:</p>
                <div className="differentiator-content">
                   <ol>
                       <li>
                           <strong>Intuitive Product Modeling:</strong><br/>
                           Actuaries use library tools to define products by specifying <code>decrements</code> (mortality, lapse, surrender, etc.) and <code>cash flows</code> (premiums, benefits, expenses, etc.) with associated probabilities, tables, and rules.
                       </li>
                       <li>
                           <strong>Automated Dual Output:</strong>
                           <ul>
                               <li><strong>Calculations & Reporting:</strong> Automatically generates standard IFRS 17 & Solvency II results based on the model.</li>
                               <li><strong>Automatic API Generation:</strong> Dynamically creates specific <code>Web Server API endpoints</code> for each modeled product, enabling real-time integration with other systems (e.g., online sales calculators).</li>
                           </ul>
                       </li>
                   </ol>
                </div>
            </div>
        </section>
    );
};

export default Differentiator;