import React from 'react';
import styled from 'styled-components';

import List from '../components/List';
import ProjectMainText from '../components/ProjectMainText';

const PageWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

const Project = () => {
  return (
    <PageWrapper>
      <ProjectMainText />
      <List />
    </PageWrapper>
  );
};

export default Project;
