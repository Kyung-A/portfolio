import React, { useState } from 'react';
import styled from 'styled-components';

import TabButton from './TabButton';
import AboutMe from './TabContent/AboutMe';
import Project from './TabContent/Project';
import Study from './TabContent/Study';

/* Component Style */
const Wrapper = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 55vw;
  height: 100%;
  background-color: #eab3d7;
  box-shadow: -5px 3px 13px 0px rgba(231 128 196 / 62%);
  z-index: 500;
`;

const WrapperInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 70%;
  height: 100%;
  padding-top: 50px;
  box-sizing: border-box;
`;

const TabButtonGroup = styled.ul`
  display: flex;
  width: 100%;
  height: 5%;
  margin: 0;
  padding: 0;

  li {
    list-style: none;
  }
`;

const TabContentGroup = styled.div`
  width: 100%;
  height: 75%;
`;

/* Component */
const Tabs = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const tabs = [
    {
      title: <TabButton title={'About Me'} />,
      content: <AboutMe />,
    },
    {
      title: <TabButton title={'Project'} />,
      content: <Project />,
    },
    {
      title: <TabButton title={'Study'} />,
      content: <Study />,
    },
  ];

  const handleClickSelectedTabButton = (index) => {
    setCurrentTab(index);
  };

  return (
    <Wrapper>
      <WrapperInner>
        <TabButtonGroup>
          {tabs.map((el, index) => {
            return (
              <li
                key={index}
                onClick={() => handleClickSelectedTabButton(index)}
              >
                {el.title}
              </li>
            );
          })}
        </TabButtonGroup>

        <TabContentGroup>{tabs[currentTab].content}</TabContentGroup>
      </WrapperInner>
    </Wrapper>
  );
};

export default Tabs;
