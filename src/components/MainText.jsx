import React from 'react';
import styled from 'styled-components';

/* Component Style */
const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const TopText = styled.h2`
  position: absolute;
  left: 0px;
  top: 10px;
  line-height: 12vh;
  margin: 0;
  color: transparent;
  font-size: 7vw;
  letter-spacing: -5px;
  font-family: 'Montserrat-BlackItalic';
  -webkit-text-stroke: 0.06vw #085afa;
  z-index: 50;

  @media screen and (max-width: 1024px) {
    top: 0px;
    left: 0px;
    line-height: 80px;
    font-size: 5em;
    letter-spacing: -3px;
    -webkit-text-stroke: 1px #085afa;
  }
`;

const BottomText = styled.h2`
  position: absolute;
  right: 0px;
  bottom: 0px;
  margin: 0;
  color: transparent;
  font-size: 8vw;
  white-space: nowrap;
  letter-spacing: -10px;
  font-family: 'Montserrat-BlackItalic';
  -webkit-text-stroke: 0.06vw #085afa;
  z-index: 510;

  span {
    color: #085afa;
    -webkit-text-stroke: 0;
  }

  @media screen and (max-width: 1024px) {
    bottom: 0px;
    font-size: 5em;
    text-align: right;
    white-space: initial;
    line-height: 70px;
    letter-spacing: -5px;
    -webkit-text-stroke: 1px #085afa;
  }
`;

const MainText = () => {
  return (
    <Wrapper>
      <TopText>
        Hello. I'm <br /> EunGyeong Nam.
      </TopText>
      <BottomText>
        I'm <span>front-end developer</span>.
      </BottomText>
    </Wrapper>
  );
};

export default MainText;
