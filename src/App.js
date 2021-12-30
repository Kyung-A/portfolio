import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import Intro from './pages/Intro';
import About from './pages/About';
import LinkListPanel from './components/LinkListPanel';
import Project from './pages/Project';

/* Component Style */
const Container = styled.main`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #eab3d7;
  overflow: hidden;
`;

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
      </Routes>

      <LinkListPanel />
    </Container>
  );
}

export default App;
