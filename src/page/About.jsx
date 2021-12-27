import React from 'react';

import AboutPopup from '../component/AboutPopup';
import AboutMainText from '../component/AboutMainText';
import ProfileImg from '../component/ProfileImg';
import ProjectMoveLink from '../component/ProjectMoveLink';

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
