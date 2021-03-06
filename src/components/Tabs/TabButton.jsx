import React from 'react';
import styled from 'styled-components';

/* Component Style */
const TabBtn = styled.button`
  position: relative;
  color: #07328a;
  font-size: 1.1vw;
  font-family: 'Montserrat-BlackItalic';
  background-color: transparent;
  border: 0;
  margin-right: 20px;
  transition: all 0.3s;

  &::before {
    content: '';
    position: absolute;
    top: -3px;
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
    bottom: -3px;
    display: inline-block;
    width: 100%;
    height: 0.3vh;
    background-color: #07328a;
  }

  @media screen and (max-width: 1024px) {
    font-size: 14px;
  }

  @media screen and (max-width: 767px) {
    font-size: 15px;
    background-color: #eab3d7;

    &::before {
      height: 3px;
    }

    &::after {
      height: 3px;
    }
  }
`;

/* Component */
const TabButton = ({ title }) => {
  return <TabBtn className="cursor-pointer">{title}</TabBtn>;
};

export default TabButton;
