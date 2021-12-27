import React from 'react';

import AboutPopup from '../component/AboutPopup';
import AboutMainText from '../component/AboutMainText';
import ProfileImg from '../component/ProfileImg';
import ProjectMoveButton from '../component/ProjectMoveButton';

const About = () => {
  return (
    <>
      <AboutMainText />
      <ProjectMoveButton />
      <ProfileImg />
      <AboutPopup />
    </>
  );
};

export default About;
