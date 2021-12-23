import React from 'react';
import styled from 'styled-components';

import HeaderText from './component/HeaderText';
import LinkListPanel from './component/LinkListPanel';
import StartButton from './component/StartButton';

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
      <HeaderText />
      <StartButton />
      <LinkListPanel />
    </Container>
  );
}

export default App;
