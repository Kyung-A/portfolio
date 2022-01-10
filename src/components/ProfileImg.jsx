import React from 'react';
import styled from 'styled-components';

/* Component Style */
const Wrapper = styled.article`
  position: absolute;
  top: 50%;
  left: 30%;
  margin-top: -34vh;
  margin-left: -13vw;
  width: 27vw;
  height: 65vh;
  transform: rotate(350deg);
  z-index: 10;

  img {
    width: 100%;
  }

  @media screen and (max-width: 1024px) {
    width: 300px;
    margin-top: -40vh;
    margin-left: -30vw;
  }

  @media screen and (max-width: 416px) {
    width: 200px;
    margin-top: -30vh;
    margin-left: -30vw;
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
