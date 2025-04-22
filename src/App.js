import React, { useEffect } from 'react';
import './App.css'; // Import global styles

// Import Components
import ParticlesBackground from './components/ParticlesBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import Challenge from './components/Challenge';
import ValueProposition from './components/ValueProposition';
import Toolkit from './components/Toolkit';
import Differentiator from './components/Differentiator';
import Team from './components/Team';
import Strengths from './components/Strengths';
import Collaboration from './components/Collaboration';
import DataVisualization from './components/DataVisualization'; // Import new section
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Optional: Add smooth scroll effect similar to original JS
  // This is a basic implementation. For robust active link highlighting,
  // consider IntersectionObserver or a scroll library.
  useEffect(() => {
    const smoothScrollHandler = (e) => {
        if (e.target.tagName === 'A' && e.target.hash.startsWith('#')) {
            const hash = e.target.hash;
            const targetElement = document.querySelector(hash);
            if (targetElement) {
                e.preventDefault(); // Prevent default jump
                const headerOffset = document.querySelector('header')?.offsetHeight || 70; // Adjust as needed
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        }
    };

    // Add listener to header nav links specifically if Header component doesn't handle it internally
    const nav = document.querySelector('header nav');
    if (nav) {
        nav.addEventListener('click', smoothScrollHandler);
    }

    // Cleanup listener on component unmount
    return () => {
        if (nav) {
            nav.removeEventListener('click', smoothScrollHandler);
        }
    };
  }, []); // Empty dependency array ensures this runs only once on mount


  return (
    <div className="App">
      <ParticlesBackground /> {/* Render particle background */}
      <Header />
      <main> {/* Wrap sections in main for semantic HTML */}
        <Hero />
        <Challenge />
        <ValueProposition />
        <Toolkit />
        <Differentiator />
        <Team />
        <Strengths />
        <Collaboration />
        <DataVisualization /> {/* Add the new chart section here */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;