import React from 'react';
import styled from 'styled-components';

import MainText from '../components/MainText';
import ProfileImg from '../components/ProfileImg';
import CircleIcon from '../components/CircleIcon';
import Tabs from '../components/Tabs';

const PageWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Main = () => {
  return (
    <PageWrapper>
      <MainText />
      <CircleIcon />
      <ProfileImg />
      <Tabs />
    </PageWrapper>
  );
};

export default Main;
