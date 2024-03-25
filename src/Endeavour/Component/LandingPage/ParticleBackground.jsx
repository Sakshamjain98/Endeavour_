import  { Component } from 'react';
import {Particles} from 'particles.js';

class ParticleBackground extends Component {
    componentDidMount() {
        this.configureParticles();
    }

    configureParticles() {
        Particles.init({
            selector: '#particle-container',
            sizeVariations: 10,
            color: ['#ffffff'],
            connectParticles: true,
            maxParticles: 150
            // You can add more configurations as needed
        });
    }

    render() {
        return (
            <div id="particle-container" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
                {/* Your website content goes here */}
            </div>
        );
    }
}

export default ParticleBackground;
