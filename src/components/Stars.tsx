
import React from 'react';
import Particles from 'react-particles';
import type { Engine } from 'tsparticles-engine';
import { loadStarsPreset } from 'tsparticles-preset-stars';

export default function Stars({ id }: { id: string }) {
  const customInit = async (engine: Engine): Promise<void> => {
    loadStarsPreset(engine);
  };
  return (
    <Particles
      id={id + '-container'}
      options={{
        id,
        preset: 'stars',
        fullScreen: { enable: false, zIndex: -10 },
        background: {
          color: {
            value: '',
          },
        },
        particles: {
          opacity: {
            value: 0.25,
          },
          move: {
            speed: 0.75,
          },
        },
      }}
      style={{
        position: 'absolute', // Ensure proper positioning inside parent
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
      init={customInit}
    />
  );
}
