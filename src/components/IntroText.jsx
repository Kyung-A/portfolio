import React from 'react';
import styled from 'styled-components';

/* Component Style */
const Text = styled.p`
  position: absolute;
  left: 30px;
  top: 20px;
  margin: 0;
  color: transparent;
  font-size: 1.7vw;
  font-family: 'Montserrat-BlackItalic';
  -webkit-text-stroke: 0.06vw #000;
  transition: all 0.3s;

  @media screen and (max-width: 1024px) {
    left: 10px;
    font-size: 2em;
    line-height: 40px;
    padding: 0px 10px;
    -webkit-text-stroke: 1px #000;
  }
`;

const IntroText = () => {
  return <Text>Choosing me is a wise choice.</Text>;
};

export default IntroText;
