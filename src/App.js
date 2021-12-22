import React from 'react';
import styled from 'styled-components';

import StartButton from './component/StartButton';

/* Component Style */
const Container = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: #eab3d7;
  overflow: hidden;
`;

function App() {
  return (
    <Container>
      <StartButton />
    </Container>
  );
}

export default App;
