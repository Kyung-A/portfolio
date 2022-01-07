import React from 'react';
import styled from 'styled-components';

import IntroMainText from '../components/IntroMainText';
import StartButton from '../components/StartButton';

const PageWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Intro = () => {
  return (
    <PageWrapper>
      <IntroMainText />
      <StartButton />
    </PageWrapper>
  );
};

export default Intro;
