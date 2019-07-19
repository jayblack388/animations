import React from 'react';
import { animated, useSprings } from 'react-spring';

const items = [1, 0.5, 0.1, 0.5, 1];

export const SpringBoxes = () => {
  const springs = useSprings(
    items.length,
    items.map(item => ({
      from: {
        opactiy: 0,
      },
      to: {
        opacity: item,
      },
    }))
  );
  return (
    <div className="boxes-grid">
      {springs.map(animation => (
        <animated.div style={animation} className="box" />
      ))}
    </div>
  );
};
