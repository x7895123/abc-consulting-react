import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
// Import the main engine function (loadFull)
import { loadFull } from "tsparticles";
// Import the Engine type if using TypeScript or for clarity (optional but good practice)
// You might need to install @types/react if you haven't already for TS projects
import type { Engine } from "tsparticles-engine";

const ParticlesBackground = () => {

    // This is the core change: the function passed to 'init' receives the engine instance.
    // We then call loadFull (or loadSlim) on *that* instance.
    const particlesInit = useCallback(async (engine: Engine) => { // Use the Engine type if available/desired
        // console.log(engine);

        // Initializes the tsParticles instance (engine), adding features.
        // loadFull bundles most common features.
        await loadFull(engine);

        // If loadFull causes issues, try the slimmer bundle:
        // await loadSlim(engine); // Requires: import { loadSlim } from "tsparticles-slim"; and npm/yarn install tsparticles-slim
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        // console.log("Particles container loaded", container);
    }, []);

    // Configuration copied & adapted from the original script tag
    const particleOptions = {
       fpsLimit: 60,
       particles: {
           number: {
               value: 40,
               density: {
                   enable: true,
                   value_area: 800 // Corrected property name if needed based on version
               }
           },
           color: {
               value: "#ccd6f6"
           },
           shape: {
               type: "circle"
           },
           opacity: {
               value: 0.5,
               random: true, // Corrected casing if needed
           },
           size: {
               value: 3,
               random: true, // Corrected casing if needed
           },
           links: {
               enable: true,
               distance: 250,
               color: "#8892b0",
               opacity: 0.4,
               width: 1
           },
           move: {
               enable: true,
               speed: 0.5,
               direction: "none",
               random: true,
               straight: false,
               outModes: { // Correct property name in tsparticles v2+
                   default: "out"
               },
               bounce: false,
               attract: { enable: false }
           }
       },
       interactivity: {
           detectsOn: "canvas", // Correct property name
           events: {
               onHover: { // Correct property name
                   enable: true,
                   mode: "repulse"
               },
               onClick: { // Correct property name
                   enable: true,
                   mode: "push"
               },
               resize: true
           },
           modes: {
               repulse: {
                   distance: 100,
                   duration: 0.4
               },
               push: {
                   quantity: 4 // Correct property name
                },
                // Add other modes if needed (bubble, grab, remove)
                // grab: { distance: 400, links: { opacity: 1 } },
                // bubble: { distance: 400, size: 40, duration: 2, opacity: 0.8 },
                // remove: { quantity: 2 }
           }
       },
       detectRetina: true // Correct property name
    };


    return (
        <Particles
            id="tsparticles"
            init={particlesInit} // Pass the callback function here
            loaded={particlesLoaded}
            options={particleOptions}
            style={{ // Apply necessary fixed positioning styles here
                position: 'fixed',
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
                zIndex: -1 // Ensure it's behind content
             }}
        />
    );
};

export default ParticlesBackground;