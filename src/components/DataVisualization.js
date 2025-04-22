import React from 'react';
import DurationChart from './DurationChart'; // Import the chart

const DataVisualization = () => {
    return (
        // Added a new section with an ID for navigation
        <section id="data-visualization">
            <div className="container">
                 {/* Use existing CSS classes for consistency */}
                 {/* Using CSS variables directly in style needs browser support or polyfills,
                     prefer using classes or defining colors directly in component state/vars if needed */}
                <h2>Portfolio Exposure Analysis</h2>
                <p className="centered-p" style={{ marginBottom: '40px' }}>
                    Visualizing the distribution of insurance exposure (e.g., Sum Assured, Policy Limits) across different policy duration buckets for key lines of business.
                </p>

                {/* Render the chart component */}
                <DurationChart />

            </div>
        </section>
    );
};

export default DataVisualization;