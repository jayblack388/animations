import React, { useState } from 'react';
import {
  animated,
  useTrail,
} from 'react-spring';

const items = [1, 0.5, 0.1, 0.75, 10, 0.2, 0.3, 0.25];
// Trails Example
export const BoxTrails = () => {
  const [on, toggle] = useState(false);
  const trail = useTrail(items.length, {
    opacity: on ? 0 : 1,
    transform: on ? 'scale(0)' : 'scale(1)',
  });
  return (
    <div className="boxes-grid">
      <button onClick={() => toggle(!on)}>Toggle Boxes</button>
      {trail.map(animation => (
        <animated.div className="box" style={animation} />
      ))}
    </div>
  );
};
