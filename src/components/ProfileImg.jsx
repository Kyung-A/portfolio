import React from 'react';
import styled from 'styled-components';

/* Component Style */
const Wrapper = styled.article`
  position: absolute;
  top: 50%;
  left: 30%;
  margin-top: -37vh;
  margin-left: -17vw;
  width: 30vw;
  height: 65vh;
  transform: rotate(350deg);
  z-index: 10;
  transition: all 0.3s;

  img {
    width: 100%;
  }

  @media screen and (max-width: 1024px) {
    top: 30%;
    width: 40vw;
    margin-top: -15vh;
    margin-left: -25vw;
    z-index: 5;
  }

  @media screen and (max-width: 767px) {
    top: 70%;
    width: 50vw;
    margin-top: 0;
    margin-left: -30vw;
    transform: rotate(320deg);
    z-index: 5;
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
