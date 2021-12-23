import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
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
  top: 50%;
  left: 50%;
  margin-top: 135px;
  margin-left: -70px;
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
  const navigate = useNavigate();

  const wrapper = useRef();
  const startButtonImg = useRef();
  const characterImg = useRef();

  const handleMouseDown = () => {
    startButtonImg.current.src = '/images/start_button_02.png';
    characterImg.current.src = '/images/character_02.png';
  };

  const handleMouseUp = () => {
    startButtonImg.current.src = '/images/start_button_01.png';
    characterImg.current.src = '/images/character_01.png';

    wrapper.current.style.opacity = '0';
    wrapper.current.style.transition = 'all 0.5s ease-in-out';

    window.setTimeout(() => {
      navigate('/about');
    }, 800);
  };

  return (
    <Wrapper ref={wrapper}>
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
