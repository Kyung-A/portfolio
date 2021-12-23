import React from 'react';
import styled from 'styled-components';

/* Component Style */
const Wrapper = styled.article`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -30vh;
  margin-left: -26vw;
  width: 24vw;
  height: 65vh;
  transform: rotate(350deg);
  z-index: 10;

  img {
    width: 100%;
  }
`;

const ProfileImg = () => {
  return (
    <Wrapper>
      <img src="/images/profile.jpg" alt="프로필 이미지" />
    </Wrapper>
  );
};

export default ProfileImg;
