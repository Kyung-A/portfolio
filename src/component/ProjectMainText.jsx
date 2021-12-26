import React from 'react';
import styled from 'styled-components';

/* Component Style */
const MainText = styled.div`
  width: 22vw;
  line-height: 5.5vh;
  margin: 40px auto 0px;
  padding: 1vw 3.5vh 1.5vw 3.5vh;
  color: transparent;
  letter-spacing: -0.1vw;
  text-align: center;
  font-size: 3vw;
  font-family: 'Montserrat-Black';
  border: 1vw solid #07328a;
  box-sizing: border-box;
  border-radius: 50%;
  -webkit-text-stroke: 0.08vw #07328a;

  span {
    color: #07328a;
    -webkit-text-stroke: 0px;
  }
`;

const ProjectMainText = () => {
  return (
    <MainText>
      project <span>and study</span>
    </MainText>
  );
};

export default ProjectMainText;
