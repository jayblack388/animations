import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';
const Toggle = () => {
  const [items, setItems] = useState([
    {
      letter: 'J',
      key: 1,
    },
    {
      letter: 'O',
      key: 2,
    },
    {
      letter: 'H',
      key: 3,
    },
    {
      letter: 'N',
      key: 4,
    },
  ]);
  const transition = useTransition(items, item => item.key, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  return (
    <div style={{ position: 'relative' }}>
      {transition.map(({ item, key, props: transProps }) => (
        <animated.h1 style={transProps} key={key}>
          {item.letter}
        </animated.h1>
      ))}
      <button
        onClick={() =>
          setItems([
            {
              letter: 'J',
              key: 1,
            },
            {
              letter: 'O',
              key: 2,
            },
            {
              letter: 'N',
              key: 4,
            },
          ])
        }
      >
        Toggle
      </button>
    </div>
  );
};

// const AnimatedTitle = animated.h1

export default Toggle;

/* const transition = useTransition(isToggled, null, {
  from: { opacity: 0, position: 'absolute' },
  enter: { opacity: 1 },
  leave: { opacity: 0 },
}); */

{
  /* <div style={{ position: 'relative' }}>
  {transition.map(({ item, key, props: transProps }) =>
    item ? (
      <animated.h1 style={transProps}>Hello</animated.h1>
    ) : (
      <animated.h1 style={transProps}>World</animated.h1>
    )
  )}
  <button onClick={() => setToggle(!isToggled)}>Toggle</button>
</div>; */
}
