import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

/* Component Style */
const animate = keyframes`
 100% {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  position: absolute;
  top: 50px;
  right: 300px;
  animation: ${animate} 20s linear infinite;
  z-index: 100;

  a {
    display: block;

    g:last-child text {
      font-weight: bold;
    }
  }
`;

const ProjectMoveLink = () => {
  return (
    <Wrapper>
      <Link to="/project">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="15vw"
          height="25vh"
          font-size="1.42vw"
          viewBox="0 0 360 300"
          enable-background="new 0 0 300 300"
          space="preserve"
        >
          <defs>
            <path
              id="circlePath"
              d="M 150, 150 m -60, 0 a 60,60 0 0,1 180,0 a 60,60 0 0,1 -180,0 "
            />
            <defs>
              <path
                id="textPath"
                d="M 152, 163 m 0, 0 a 60,0 0 0,1 0,0 a 0,180 0 0,1 180,0 "
              />
            </defs>
          </defs>
          <circle cx="150" cy="100" r="75" fill="none" />
          <g>
            <use href="#circlePath" fill="none" />
            <text>
              <textPath href="#circlePath">
                Let's Project! Let's Project! Let's Project! Let's Project!
                Let's Project! Let's Project! Let's Project! Let's Project!
              </textPath>
            </text>
          </g>
          <g>
            <use href="#textPath" fill="none" />
            <text>
              <textPath href="#textPath">Click !</textPath>
            </text>
          </g>
        </svg>
      </Link>
    </Wrapper>
  );
};

export default ProjectMoveLink;
