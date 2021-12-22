import React, { useRef } from 'react';
import styled from 'styled-components';

/* Component Style */
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Button = styled.button`
  width: 200px;
  cursor: pointer;
  border: 0;
  background-color: transparent;

  img {
    width: 100%;
  }
`;

const StartButton = () => {
  const startButtonImg = useRef();

  const handleMouseDown = () => {
    startButtonImg.current.src = '/images/start_button_02.png';
  };

  const handleMouseUp = () => {
    startButtonImg.current.src = '/images/start_button_01.png';
  };

  return (
    <Wrapper>
      <Button onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
        <img
          src="/images/start_button_01.png"
          alt="시작 버튼"
          ref={startButtonImg}
        />
      </Button>
    </Wrapper>
  );
};

export default StartButton;
