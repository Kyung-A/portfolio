import React from 'react';
import styled from 'styled-components';

/* Component Style */
const Text = styled.p`
  position: absolute;
  left: 30px;
  top: 20px;
  margin: 0;
  color: transparent;
  font-size: 25px;
  font-family: 'Montserrat-BlackItalic';
  -webkit-text-stroke: 1px #000;
`;

const HeaderText = () => {
  return <Text>Choosing me is a wise choice.</Text>;
};

export default HeaderText;
