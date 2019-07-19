import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';
const Cart = ({ isOpen }) => {
  const { x } = useSpring({
    x: isOpen ? 0 : 100,
    config: config.wobbly
  });
  return (
    <div
      className="checkout"
      style={{ pointerEvents: isOpen ? 'all' : 'none' }}
    >
      <animated.div
        style={{
          transform: x.interpolate(x => `translate3d(${x * -1}%, 0, 0)`),
        }}
        className="checkout-left"
      />
      <animated.div
        style={{
          transform: x.interpolate(x => `translate3d(${x}%, 0, 0)`),
        }}
        className="checkout-right"
      />
    </div>
  );
};

export default Cart;
