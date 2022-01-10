import React from 'react';
import styled, { keyframes } from 'styled-components';

import { FaSmile } from 'react-icons/fa';

/* Component Style */

const animate = keyframes`
 100% {
    transform: rotate(360deg);
  }
  `;

const SmileIcon = styled.div`
  position: absolute;
  top: 50%;
  margin-top: -27vh;
  margin-left: 8vw;
  z-index: 70;
  width: 13vw;
  height: 13vh;
  animation: ${animate} 10s linear infinite;
  transform-origin: 50% 50%;

  svg {
    width: 100%;
    height: 100%;
    fill: #085afa;
  }

  @media screen and (max-width: 1024px) {
    margin-top: -8vh;
    margin-left: 15vw;
  }

  @media screen and (max-width: 416px) {
    margin-top: -10vh;
    margin-left: 60vw;
  }
`;

const TextCircleIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 0px;
  margin-top: -7vh;
  margin-left: 3vw;
  animation: ${animate} 20s linear infinite;

  a {
    display: block;

    g:last-child text {
      font-weight: bold;
    }
  }

  @media screen and (max-width: 1024px) {
    top: 130px;
    right: 100px;

    svg {
      width: 30vw;
      font-size: 20px;
    }
  }

  @media screen and (max-width: 416px) {
    top: 170px;
    right: 15px;

    svg {
      width: 200px;
      font-size: 25px;
    }
  }
`;

const CircleIcon = () => {
  return (
    <>
      <SmileIcon>
        <FaSmile />
      </SmileIcon>

      <TextCircleIcon>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="15vw"
          height="25vh"
          fontSize="1.42vw"
          viewBox="0 0 360 300"
          enableBackground="new 0 0 300 300"
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
                d="M 170, 155 m 0, 0 a 60,0 0 0,1 0,0 a 0,180 0 0,1 180,0 "
              />
            </defs>
          </defs>
          <circle cx="150" cy="100" r="75" fill="none" />
          <g>
            <use href="#circlePath" fill="none" />
            <text>
              <textPath href="#circlePath">
                Hello! Are you curious about me? Hello! Are you curious about
                me?
              </textPath>
            </text>
          </g>
          <g>
            <use href="#textPath" fill="none" />
            <text>
              <textPath href="#textPath">: )</textPath>
            </text>
          </g>
        </svg>
      </TextCircleIcon>
    </>
  );
};

export default CircleIcon;
