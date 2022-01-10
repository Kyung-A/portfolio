import React from 'react';
import styled, { keyframes } from 'styled-components';

/* Component Style */
const textRollingAnimation = keyframes`
  0% {
    transform: translateX(0);
}
100% {
    transform: translateX(-100%);
}
  `;

const TextRollingWrapper = styled.div`
  height: 100%;
  background-color: #000;
  color: #d8fa08;
  box-sizing: border-box;

  .text-rolling-inner {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .text-rolling-list {
    display: flex;
    align-items: center;
    width: 100000px;
    height: 100%;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .text-rolling-item {
    display: inline-block;
    font-size: 0.7vw;
    font-family: 'Cafe24SsurroundAir';
    letter-spacing: 2px;
    animation-duration: 60s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-name: ${textRollingAnimation};

    @media screen and (max-width: 416px) {
      font-size: 13px;
    }
  }
`;

/* Component */
const TextRolling = ({ text }) => {
  return (
    <TextRollingWrapper>
      <div className="text-rolling-inner">
        <ul className="text-rolling-list">
          <li className="text-rolling-item">
            {text} &gt;&gt; {text} &gt;&gt; {text} &gt;&gt; {text} &gt;&gt;
            {text} &gt;&gt; {text} &gt;&gt; {text} &gt;&gt; {text} &gt;&gt;
            {text} &gt;&gt; {text} &gt;&gt; {text} &gt;&gt; {text} &gt;&gt;
            {text} &gt;&gt; {text} &gt;&gt; {text} &gt;&gt; {text} &gt;&gt;
            {text} &gt;&gt; {text} &gt;&gt; {text} &gt;&gt; {text} &gt;&gt;
            {text} &gt;&gt; {text} &gt;&gt; {text} &gt;&gt; {text} &gt;&gt;
            {text} &gt;&gt; {text} &gt;&gt; {text} &gt;&gt; {text} &gt;&gt;
            {text} &gt;&gt; {text} &gt;&gt; {text} &gt;&gt; {text} &gt;&gt;
            {text} &gt;&gt; {text} &gt;&gt; {text} &gt;&gt; {text} &gt;&gt;
            {text} &gt;&gt; {text} &gt;&gt; {text} &gt;&gt; {text} &gt;&gt;
            {text} &gt;&gt; {text} &gt;&gt;
          </li>
          <li className="text-rolling-item">
            {text} &gt;&gt; {text} &gt;&gt; {text} &gt;&gt; {text} &gt;&gt;
            {text} &gt;&gt; {text} &gt;&gt; {text} &gt;&gt; {text} &gt;&gt;
            {text} &gt;&gt; {text} &gt;&gt; {text} &gt;&gt; {text} &gt;&gt;
            {text} &gt;&gt; {text} &gt;&gt; {text} &gt;&gt; {text} &gt;&gt;
            {text} &gt;&gt; {text} &gt;&gt; {text} &gt;&gt; {text} &gt;&gt;
            {text} &gt;&gt; {text} &gt;&gt; {text} &gt;&gt; {text} &gt;&gt;
            {text} &gt;&gt; {text} &gt;&gt; {text} &gt;&gt; {text} &gt;&gt;
            {text} &gt;&gt; {text} &gt;&gt; {text} &gt;&gt; {text} &gt;&gt;
            {text} &gt;&gt; {text} &gt;&gt; {text} &gt;&gt; {text} &gt;&gt;
            {text} &gt;&gt; {text} &gt;&gt; {text} &gt;&gt; {text} &gt;&gt;
            {text} &gt;&gt; {text} &gt;&gt;
          </li>
        </ul>
      </div>
    </TextRollingWrapper>
  );
};

export default TextRolling;
