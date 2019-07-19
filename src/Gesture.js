import React, { useState } from 'react';
import { useGesture } from 'react-with-gesture';
import { animated, useSpring } from 'react-spring';

export const UnLockedGesture = () => {
  const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }));
  const bind = useGesture(({ down, delta }) => {
    set({ xy: down ? delta : [0, 0] });
  });
  return (
    <animated.div
      style={{
        transform: xy.interpolate((x, y) => `translate3d(${x}px, ${y}px, 0)`),
      }}
      {...bind()}
      className="box"
    />
  );
};
// Locked Example
export const LockedGesture = () => {
  const [{ x }, set] = useSpring(() => ({ x: 0 }));
  const bind = useGesture(values => {
    const { down, delta } = values;
    if (down) {
      set({ x: delta[0] });
    } else {
      if (Math.abs(delta[0]) > 400) {
        set({ x: delta[0] > 0 ? 500 : -500 });
      } else {
        set({ x: 0 });
      }
    }
  });
  return (
    <animated.div
      style={{
        opacity: x.interpolate({
          map: Math.abs,
          range: [0, 400],
          output: [1, 0],
        }),
        transform: x.interpolate(x => `translate3d(${x}px, 0, 0)`),
      }}
      {...bind()}
      className="box"
    />
  );
};
