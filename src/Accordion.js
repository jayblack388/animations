import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';
import useMeasure from './hooks/useMeasure';

const Accordion = () => {
  const [on, toggle] = useState(false);
  const [bind, { height, top }] = useMeasure();
  const animation = useSpring({
    overflow: 'hidden',
    height: on ? height + top * 2 : 0,
    config: config.wobbly,
  });
  return (
    <div>
      <h1>
        <button onClick={() => toggle(!on)}>Toggle</button>
      </h1>
      <animated.div style={animation}>
        <div {...bind} className="accordion">
          <p>Hello, I'm an accordion</p>
        </div>
      </animated.div>
    </div>
  );
};

export default Accordion;
