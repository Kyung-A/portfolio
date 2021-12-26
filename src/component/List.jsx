import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

import { projectList, studyList } from '../db';

/* Component Style */
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

const ProjectListWrapper = styled.article`
  display: flex;
  flex-direction: column;
  width: 35vw;
  height: 65vh;
  background-color: #fff;
  border: 0.21vw solid #d8fa08;
  overflow: hidden;
  border-top: none;
  margin-right: 50px;
`;

const StudyListWrapper = styled.article`
  display: flex;
  flex-direction: column;
  width: 35vw;
  height: 65vh;
  background-color: #fff;
  border: 0.21vw solid #d8fa08;
  overflow: hidden;
  border-top: none;
`;

const ItemListHeader = styled.div`
  height: 6%;
  min-height: 25px;
  display: flex;
  align-items: center;
  font-size: 0.8vw;
  font-weight: bold;
  font-family: 'Cafe24SsurroundAir';
  letter-spacing: 3px;
  border-top: 3px solid #d8fa08;
  border-bottom: 3px solid #d8fa08;
  background-color: #d8fa08;
  padding: 0px 15px;
  box-sizing: border-box;
`;

const ItemList = styled.ul`
  flex: 1;
  margin: 0;
  padding: 0;
  list-style: none;
  overflow-y: auto;
  box-sizing: border-box;
`;

const Item = styled.li`
  display: flex;
  width: 100%;
  height: 20vh;
  padding: 10px 15px;
  border-bottom: 3px dashed #ebebeb;
  box-sizing: border-box;

  > div:last-child {
    display: flex;
    flex-direction: column;
    flex: 2;
    margin-left: 10px;
    height: 100%;
  }

  .item-image {
    flex: 1;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    &.null {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #ccc;
      font-family: 'Cafe24SsurroundAir';
      font-size: 0.6vw;
    }
  }

  p {
    margin: 0;
    letter-spacing: -1px;
    font-family: 'Cafe24SsurroundAir';
  }

  .item-title {
    font-size: 1.2vw;
    font-weight: bold;
  }

  .item-lang {
    font-size: 0.8vw;
  }

  .item-position {
    font-weight: bold;
    font-size: 1vw;
    margin: 3px 0px;
    color: #085afa;
  }

  .item-description {
    font-size: 0.8vw;
    margin-top: 15px;
  }

  .item-url {
    position: relative;
    margin-top: auto;
    font-size: 1vw;
    font-family: 'Cafe24SsurroundAir';
    font-weight: bold;
    text-decoration: none;
    color: #000;
    z-index: 10;

    &::before {
      position: absolute;
      bottom: 0;
      display: block;
      content: '';
      width: 17vw;
      height: 10px;
      background-color: #d8fa08;
      z-index: -1;
    }

    &.null::before {
      position: initial;
      bottom: 0;
      display: initial;
      content: '';
      width: initial;
      height: initial;
      background-color: transparent;
      z-index: -1;
    }
  }
`;

const textRollingAnimation = keyframes`
  0% {
    transform: translateX(0);
}
100% {
    transform: translateX(-100%);
}
  `;

const ItemListFooter = styled.div`
  height: 4vh;
  background-color: #000;
  border-top: 3px solid #d8fa08;
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
    font-size: 0.8vw;
    font-style: italic;
    font-weight: bold;
    font-family: 'Cafe24SsurroundAir';
    letter-spacing: 2px;
    animation-duration: 60s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-name: ${textRollingAnimation};
  }
`;

const List = () => {
  const project = projectList.map((projectItem) => (
    <Item key={projectItem.id}>
      {projectItem.image === null ? (
        <div className="item-image null">(미리보기 없음)</div>
      ) : (
        <div
          style={{ backgroundImage: `url(${projectItem.image})` }}
          className="item-image"
        ></div>
      )}
      <div>
        <p className="item-title">{projectItem.title}</p>
        <p className="item-position">{projectItem.position}</p>
        <p className="item-lang">{projectItem.lang}</p>
        <p className="item-description">{projectItem.description}</p>
        <Link
          className={projectItem.url === null ? 'item-url null' : 'item-url'}
          to={`${projectItem.url}`}
        >
          {projectItem.url}
        </Link>
      </div>
    </Item>
  ));

  const study = studyList.map((studyItem) => (
    <Item key={studyItem.id}>
      <div
        style={{ backgroundImage: `url(${studyItem.image})` }}
        className="item-image"
      ></div>
      <div>
        <p className="item-title">{studyItem.title}</p>
        <p className="item-description">{studyItem.description}</p>
        <Link className="item-url" to={`${studyItem.url}`}>
          {studyItem.url}
        </Link>
      </div>
    </Item>
  ));

  return (
    <Wrapper>
      <ProjectListWrapper>
        <ItemListHeader>X CLOSE</ItemListHeader>
        <ItemList>{project}</ItemList>
        <ItemListFooter>
          <div className="text-rolling-inner">
            <ul className="text-rolling-list">
              <li className="text-rolling-item">
                Project &gt;&gt; Project &gt;&gt; Project &gt;&gt; Project
                &gt;&gt; Project &gt;&gt; Project &gt;&gt; Project &gt;&gt;
                Project &gt;&gt; Project &gt;&gt; Project &gt;&gt; Project
                &gt;&gt; Project &gt;&gt; Project &gt;&gt; Project &gt;&gt;
                Project &gt;&gt; Project &gt;&gt; Project &gt;&gt; Project
                &gt;&gt; Project &gt;&gt; Project &gt;&gt; Project &gt;&gt;
                Project &gt;&gt; Project &gt;&gt; Project &gt;&gt; Project
                &gt;&gt; Project &gt;&gt; Project &gt;&gt; Project &gt;&gt;
                Project &gt;&gt; Project &gt;&gt; Project &gt;&gt; Project
                &gt;&gt; Project &gt;&gt; Project &gt;&gt; Project &gt;&gt;
                Project &gt;&gt; Project &gt;&gt; Project &gt;&gt; Project
                &gt;&gt; Project &gt;&gt; Project &gt;&gt; Project &gt;&gt;
              </li>
              <li className="text-rolling-item">
                Project &gt;&gt; Project &gt;&gt; Project &gt;&gt; Project
                &gt;&gt; Project &gt;&gt; Project &gt;&gt; Project &gt;&gt;
                Project &gt;&gt; Project &gt;&gt; Project &gt;&gt; Project
                &gt;&gt; Project &gt;&gt; Project &gt;&gt; Project &gt;&gt;
                Project &gt;&gt; Project &gt;&gt; Project &gt;&gt; Project
                &gt;&gt; Project &gt;&gt; Project &gt;&gt; Project &gt;&gt;
                Project &gt;&gt; Project &gt;&gt; Project &gt;&gt; Project
                &gt;&gt; Project &gt;&gt; Project &gt;&gt; Project &gt;&gt;
                Project &gt;&gt; Project &gt;&gt; Project &gt;&gt; Project
                &gt;&gt; Project &gt;&gt; Project &gt;&gt; Project &gt;&gt;
                Project &gt;&gt; Project &gt;&gt; Project &gt;&gt; Project
                &gt;&gt; Project &gt;&gt; Project &gt;&gt; Project &gt;&gt;
              </li>
            </ul>
          </div>
        </ItemListFooter>
      </ProjectListWrapper>

      <StudyListWrapper>
        <ItemListHeader>X CLOSE</ItemListHeader>
        <ItemList>{study}</ItemList>
        <ItemListFooter>
          <div className="text-rolling-inner">
            <ul className="text-rolling-list">
              <li className="text-rolling-item">
                Study &gt;&gt; Study &gt;&gt; Study &gt;&gt; Study &gt;&gt;
                Study &gt;&gt; Study &gt;&gt; Study &gt;&gt; Study &gt;&gt;
                Study &gt;&gt; Study &gt;&gt; Study &gt;&gt; Study &gt;&gt;
                Study &gt;&gt; Study &gt;&gt; Study &gt;&gt; Study &gt;&gt;
                Study &gt;&gt; Study &gt;&gt; Study &gt;&gt; Study &gt;&gt;
                Study &gt;&gt; Study &gt;&gt; Study &gt;&gt; Study &gt;&gt;
                Study &gt;&gt; Study &gt;&gt; Study &gt;&gt; Study &gt;&gt;
                Study &gt;&gt; Study &gt;&gt; Study &gt;&gt; Study &gt;&gt;
                Study &gt;&gt; Study &gt;&gt; Study &gt;&gt; Study &gt;&gt;
                Study &gt;&gt; Study &gt;&gt; Study &gt;&gt; Study &gt;&gt;
                Study &gt;&gt; Study &gt;&gt;
              </li>
              <li className="text-rolling-item">
                Study &gt;&gt; Study &gt;&gt; Study &gt;&gt; Study &gt;&gt;
                Study &gt;&gt; Study &gt;&gt; Study &gt;&gt; Study &gt;&gt;
                Study &gt;&gt; Study &gt;&gt; Study &gt;&gt; Study &gt;&gt;
                Study &gt;&gt; Study &gt;&gt; Study &gt;&gt; Study &gt;&gt;
                Study &gt;&gt; Study &gt;&gt; Study &gt;&gt; Study &gt;&gt;
                Study &gt;&gt; Study &gt;&gt; Study &gt;&gt; Study &gt;&gt;
                Study &gt;&gt; Study &gt;&gt; Study &gt;&gt; Study &gt;&gt;
                Study &gt;&gt; Study &gt;&gt; Study &gt;&gt; Study &gt;&gt;
                Study &gt;&gt; Study &gt;&gt; Study &gt;&gt; Study &gt;&gt;
                Study &gt;&gt; Study &gt;&gt; Study &gt;&gt; Study &gt;&gt;
                Study &gt;&gt; Study &gt;&gt;
              </li>
            </ul>
          </div>
        </ItemListFooter>
      </StudyListWrapper>
    </Wrapper>
  );
};

export default List;
