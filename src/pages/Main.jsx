import React from 'react';
import styled from 'styled-components';

import AboutPopup from '../components/AboutPopup';
import AboutMainText from '../components/AboutMainText';
import ProfileImg from '../components/ProfileImg';
import ProjectMoveLink from '../components/ProjectMoveLink';

const PageWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Main = () => {
  return (
    <PageWrapper>
      <AboutMainText />
      <ProjectMoveLink />
      <ProfileImg />
      <AboutPopup />
    </PageWrapper>
  );
};

export default Main;
