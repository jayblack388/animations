import React, { useRef, useState } from 'react';
import {
  animated,
  useChain,
  useSpring,
  useTrail,
  useTransition,
} from 'react-spring';

const items = [1, 0.5, 0.1, 0.75, 10, 0.2, 0.3, 0.25];

export const ChainBoxes = () => {
  const [on, toggle] = useState(false);
  const springRef = useRef();
  const { size } = useSpring({
    ref: springRef,
    to: { size: on ? '100%' : '0%' },
    from: { size: '0%' },
  });
  const transRef = useRef();
  const transition = useTransition(on ? items : [], item => item, {
    ref: transRef,
    trail: 100,
    from: { opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0)' },
  });
  useChain(on ? [springRef, transRef] : [transRef, springRef]);
  return (
    <div className="full-space">
      <button
        onClick={() => {
          toggle(!on);
          if (!on) {
            setTimeout(
              () =>
                window.scrollTo({
                  top: 1000,
                  left: 0,
                  behavior: 'smooth',
                }),
              750
            );
          }
        }}
      >
        Boxes Toggle
      </button>
      <animated.div
        style={{ width: size, height: size }}
        className="boxes-grid-two"
      >
        {transition.map(({ item, key, props: animation }) => (
          <animated.div className="box-two" key={key} style={animation} />
        ))}
      </animated.div>
    </div>
  );
};
