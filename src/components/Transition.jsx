import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Intro from '../pages/Intro';
import About from '../pages/About';
import Project from '../pages/Project';

const Transition = () => {
  const location = useLocation();

  return (
    <TransitionGroup className="transition-group">
      <CSSTransition
        key={location.pathname}
        classNames="page-animation"
        timeout={500}
      >
        <Routes location={location}>
          <Route path="/" element={<Intro />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Transition;
