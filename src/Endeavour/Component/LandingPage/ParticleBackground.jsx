import  { useEffect } from 'react';
import { tsParticles } from '@tsparticles/engine';
import { loadAll } from '@tsparticles/all';

const ParticleComponent = () => {
  useEffect(() => {
    const loadParticles = async (options) => {
      await loadAll(tsParticles);
      await tsParticles.load({ id: 'tsparticles', options });
    };

    const configs = {
      particles: {
        number: {
          value: 100
        },
        color: {
          value: '#ffffff'
        },
        links: {
          enable: true,
          distance: 200
        },
        shape: {
          type: 'circle'
        },
        opacity: {
          value: 1
        },
        size: {
          value: {
            min: 4,
            max: 6
          }
        },
        move: {
          enable: true,
          speed: 2
        }
      },
      background: {
        color: '#000000'
      },
      poisson: {
        enable: true
      }
    };

    loadParticles(configs);

    // Clean up function to unload particles when the component unmounts
    return () => {
      tsParticles.dom().destroy('tsparticles');
    };
  }, []);

  return (
   <></>
  );
};

export default ParticleComponent;
