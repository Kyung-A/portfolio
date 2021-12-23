import React from 'react';
import styled, { keyframes } from 'styled-components';

import { FaSmile } from 'react-icons/fa';

/* Component Style */
const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const TopText = styled.h2`
  position: absolute;
  left: 30px;
  top: 20px;
  line-height: 17vh;
  margin: 0;
  color: transparent;
  font-size: 8.8vw;
  letter-spacing: -7px;
  font-family: 'Montserrat-BlackItalic';
  -webkit-text-stroke: 1px #085afa;
  z-index: 50;
`;

const animate = keyframes`
 100% {
    transform: rotate(360deg);
  }
  `;

const BottomText = styled.h2`
  position: absolute;
  right: 0px;
  bottom: 20px;
  margin: 0;
  color: transparent;
  font-size: 8.8vw;
  white-space: nowrap;
  letter-spacing: -10px;
  font-family: 'Montserrat-BlackItalic';
  -webkit-text-stroke: 1px #085afa;

  span {
    color: #085afa;
    -webkit-text-stroke: 0;
  }
`;

const SmileIcon = styled.div`
  position: absolute;
  top: 50%;
  margin-top: -19vh;
  margin-left: 13vw;
  z-index: 70;
  width: 12vw;
  height: 12vh;
  animation: ${animate} 10s linear infinite;
  transform-origin: 50% 50%;

  svg {
    width: 100%;
    height: 100%;
    fill: #085afa;
  }
`;

const AboutText = () => {
  return (
    <Wrapper>
      <SmileIcon>
        <FaSmile />
      </SmileIcon>

      <TopText>
        Hello. I'm <br /> EunGyeong Nam
      </TopText>
      <BottomText>
        I'm <span>front-end developer</span>.
      </BottomText>
    </Wrapper>
  );
};

export default AboutText;
