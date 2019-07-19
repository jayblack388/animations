import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import Accordion from './Accordion';
import { LockedGesture, UnLockedGesture } from './Gesture';
import { SpringBoxes, ChainBoxes, BoxTrails } from './Boxes';
import Modal from './Modal';
import Waypoints from './Waypoints';

import useRouter from './hooks/useRouter';

const Main = () => {
  const { location } = useRouter();
  const transitions = useTransition(location, location => location.key, {
    from: {
      opacity: 0,
      position: 'absolute',
      width: '100%',
      transform: 'translate3d(100%, 0, 0)',
    },
    enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    leave: { opacity: 0, transform: 'translate3d(0, 100%, 0)' },
  });
  return transitions.map(({ item, key, props: transition }) => (
    <animated.div key={key} style={transition}>
      <Switch location={item}>
        <Route exact path="/" component={One} />
        <Route exact path="/two" component={Two} />
        <Route exact path="/three" component={Three} />
        <Route exact path="/four" component={Four} />
        <Route exact path="/five" component={Five} />
        <Route exact path="/six" component={Six} />
        <Route exact path="/seven" component={Seven} />
        <Route exact path="/eight" component={Eight} />
      </Switch>
    </animated.div>
  ));
};

const One = () => {
  return (
    <div className="page-route">
      <h1>Accordion</h1>
      <Accordion />
    </div>
  );
};
const Two = () => {
  return (
    <div className="page-route two">
      <h1>Waypoints</h1>
      <Waypoints />
    </div>
  );
};
const Three = () => {
  return (
    <div className="page-route three">
      <h1>Locked Gesture Box</h1>
      <LockedGesture />
    </div>
  );
};
const Four = () => {
  return (
    <div className="page-route four">
      <h1>Unlocked Gesture Box</h1>
      <UnLockedGesture />
    </div>
  );
};
const Five = () => {
  return (
    <div className="page-route five">
      <h1>Trails Boxes</h1>
      <BoxTrails />
    </div>
  );
};
const Six = () => {
  return (
    <div className="page-route six">
      <h1>Springs Boxes</h1>
      <SpringBoxes />
    </div>
  );
};
const Seven = () => {
  return (
    <div className="page-route seven">
      <h1>Chained Animation Boxes</h1>
      <ChainBoxes />
    </div>
  );
};
const Eight = () => {
  return (
    <div className="page-route eight">
      <h1>Modal</h1>
      <Modal />
    </div>
  );
};

export default Main;
