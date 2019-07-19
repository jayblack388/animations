import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';
const Modal = ({ close, animation, pointerEvents }) => {
  return (
    <div className="modal" style={{ pointerEvents }}>
      <animated.div className="modal-card" style={animation}>
        <button onClick={close}>X</button>
        <h1>Modal</h1>
      </animated.div>
    </div>
  );
};

const ModalWrapper = () => {
  const [on, toggle] = useState(false);
  const transition = useTransition(on, null, {
    from: {
      opacity: 0,
      transform: 'translate3d(0, -40px, 0)',
    },
    enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    leave: { opacity: 0, transform: 'translate3d(0, -40px, 0)' },
  });
  const pointerEvents = on ? 'all' : 'none';
  return (
    <div>
      {transition.map(
        ({ item, key, props: animation }) =>
          item && (
            <Modal
              pointerEvents={pointerEvents}
              animation={animation}
              close={() => toggle(false)}
            />
          )
      )}
      <button onClick={() => toggle(true)}>Open</button>
    </div>
  );
};

export default ModalWrapper;
