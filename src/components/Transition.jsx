import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Intro from '../pages/Intro';
import Main from '../pages/Main';

const Transition = () => {
  const location = useLocation();

  return (
    <TransitionGroup className="transition-group">
      <CSSTransition key={location.pathname} classNames="fade" timeout={1000}>
        <Routes location={location}>
          <Route path="/" element={<Intro />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Transition;
