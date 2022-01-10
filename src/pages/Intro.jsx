import React from 'react';
import styled from 'styled-components';

import IntroText from '../components/IntroText';
import StartButton from '../components/StartButton';

const PageWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Intro = () => {
  return (
    <PageWrapper>
      <IntroText />
      <StartButton />
    </PageWrapper>
  );
};

export default Intro;
