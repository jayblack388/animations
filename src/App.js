import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import './App.css';
import Cart from './Cart';
import logo from './logo.svg';
import Nav from './Nav';
import Routes from './Routes';

const App = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);
  // const fadeAnimation = useSpring({ from: { opacity: 0 }, opacity: 1 });
  const navAnimation = useSpring({
    transform: isNavOpen ? 'translate3d(0,0,0)' : 'translate3d(100%,0,0)',
  });

  return (
    <animated.div className="App" /* style={fadeAnimation} */>
      <Router>
        <header className="App-header">
          <Nav close={() => setNavOpen(false)} style={navAnimation} />
          <img src={''} className="logo" />
          <button
            onClick={() => setNavOpen(!isNavOpen)}
            className="menu-button"
          >
            Menu
          </button>
        </header>
        <main>
          <Routes />
        </main>
        <Cart isOpen={isCartOpen} />
      </Router>
    </animated.div>
  );
};

export default App;
