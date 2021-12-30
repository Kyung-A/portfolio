import React from 'react';

import AboutPopup from '../components/AboutPopup';
import AboutMainText from '../components/AboutMainText';
import ProfileImg from '../components/ProfileImg';
import ProjectMoveLink from '../components/ProjectMoveLink';

const About = () => {
  return (
    <>
      <AboutMainText />
      <ProjectMoveLink />
      <ProfileImg />
      <AboutPopup />
    </>
  );
};

export default About;
