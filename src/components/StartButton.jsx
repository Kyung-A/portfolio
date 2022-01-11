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

const WrapperInner = styled.div`
  padding: 0px 20px;
  box-sizing: border-box;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: 135px;
  margin-left: -70px;
  width: 100px;
  border: 0;
  background-color: transparent;
  transition: all 0.3s;

  img {
    width: 100%;
  }

  @media screen and (max-width: 1024px) {
    width: 80px;
    margin-top: 100px;
    margin-left: -40px;
  }
`;

const ImgWrapper = styled.div`
  width: 500px;
  transition: all 0.3s;

  img {
    width: 100%;
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const StartButton = () => {
  const navigate = useNavigate();

  const wrapper = useRef();
  const startButtonImg = useRef();
  const characterImg = useRef();

  const handleMouseDown = () => {
    startButtonImg.current.src = `${
      process.env.PUBLIC_URL + '/images/start_button_02.png'
    }`;
  };

  const handleMouseUp = () => {
    startButtonImg.current.src = `${
      process.env.PUBLIC_URL + '/images/start_button_01.png'
    }`;

    wrapper.current.style.opacity = '0';
    wrapper.current.style.transition = 'all 0.5s ease-in-out';

    navigate('/main');
  };

  const handleMouseOver = () => {
    characterImg.current.src = `${
      process.env.PUBLIC_URL + '/images/character_02.png'
    }`;
  };

  const handleMouseOut = () => {
    characterImg.current.src = `${
      process.env.PUBLIC_URL + '/images/character_01.png'
    }`;
  };

  return (
    <Wrapper ref={wrapper}>
      <WrapperInner onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <Button
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          className="cursor-pointer"
        >
          <img
            src={process.env.PUBLIC_URL + '/images/start_button_01.png'}
            alt="시작 버튼"
            ref={startButtonImg}
          />
        </Button>

        <ImgWrapper>
          <img
            src={process.env.PUBLIC_URL + '/images/character_01.png'}
            alt="캐릭터"
            ref={characterImg}
          />
        </ImgWrapper>
      </WrapperInner>
    </Wrapper>
  );
};

export default StartButton;
