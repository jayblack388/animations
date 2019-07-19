import React from 'react';
import { animated } from 'react-spring';
import useRouter from './hooks/useRouter';
function NavLink(props) {
  const { history } = useRouter();
  return (
    <li>
      <button
        onClick={() => {
          props.close();
          history.push(props.to);
        }}
        {...props}
      />
    </li>
  );
}

const Nav = ({ close, style }) => {
  return (
    <animated.div className="nav-wrapper" style={style}>
      <nav>
        <ul>
          <NavLink close={close} to="/">
            Accordion
          </NavLink>
          <NavLink close={close} to="/two">
            Waypoints
          </NavLink>
          <NavLink close={close} to="/three">
            Locked Gesture Box
          </NavLink>
          <NavLink close={close} to="/four">
            Unlocked Gesture Box
          </NavLink>
          {/* <NavLink close={close} to="/five">
            Trails Boxes
          </NavLink>
          <NavLink close={close} to="/six">
            Springs Boxes
          </NavLink> */}
          <NavLink close={close} to="/seven">
            Chained Animation Boxes
          </NavLink>
          <NavLink close={close} to="/eight">
            Modal
          </NavLink>
        </ul>
      </nav>
    </animated.div>
  );
};

export default Nav;
