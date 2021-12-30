import React from 'react';
import styled from 'styled-components';

import Transition from './components/Transition';
import LinkListPanel from './components/LinkListPanel';

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
      <Transition />
      <LinkListPanel />
    </Container>
  );
}

export default App;
