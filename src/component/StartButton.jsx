import React, { useRef } from 'react';
import styled from 'styled-components';

/* Component Style */
const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Button = styled.button`
  position: absolute;
  top: 600px;
  left: 900px;
  width: 100px;
  cursor: pointer;
  border: 0;
  background-color: transparent;

  img {
    width: 100%;
  }
`;

const ImgWrapper = styled.div`
  width: 500px;

  img {
    width: 100%;
  }
`;

const StartButton = () => {
  const startButtonImg = useRef();
  const characterImg = useRef();

  const handleMouseDown = () => {
    startButtonImg.current.src = '/images/start_button_02.png';
    characterImg.current.src = '/images/character_02.png';
  };

  const handleMouseUp = () => {
    startButtonImg.current.src = '/images/start_button_01.png';
    characterImg.current.src = '/images/character_01.png';
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

      <ImgWrapper>
        <img src="/images/character_01.png" alt="캐릭터" ref={characterImg} />
      </ImgWrapper>
    </Wrapper>
  );
};

export default StartButton;
