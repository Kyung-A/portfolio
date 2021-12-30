import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

/* Component Style */
const Wrapper = styled.div`
  position: absolute;
  top: -35px;
  right: 0px;

  a {
    color: #07328a;
    text-decoration: none;
    font-size: 17px;
    font-family: 'Montserrat-BlackItalic';

    &::before {
      content: '';
      position: absolute;
      display: block;
      width: 100%;
      height: 0.3vh;
      background-color: #07328a;
    }

    &::after {
      content: '';
      position: absolute;
      display: block;
      width: 100%;
      height: 0.3vh;
      background-color: #07328a;
    }
  }
`;

const IntroMoveLink = () => {
  return (
    <Wrapper>
      <Link to="/">Go Home !</Link>
    </Wrapper>
  );
};

export default IntroMoveLink;
