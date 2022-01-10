import React from 'react';
import styled from 'styled-components';

/* Component Style */
const TabBtn = styled.button`
  position: relative;
  color: #07328a;
  font-size: 17px;
  font-family: 'Montserrat-BlackItalic';
  background-color: transparent;
  border: 0;
  margin-right: 20px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    display: inline-block;
    width: 100%;
    height: 0.3vh;
    background-color: #07328a;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    display: inline-block;
    width: 100%;
    height: 0.3vh;
    background-color: #07328a;
  }
`;

/* Component */
const TabButton = ({ title }) => {
  return <TabBtn className="cursor-pointer">{title}</TabBtn>;
};

export default TabButton;
