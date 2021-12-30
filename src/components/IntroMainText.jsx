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
`;

const IntroMainText = () => {
  return <Text>Choosing me is a wise choice.</Text>;
};

export default IntroMainText;
