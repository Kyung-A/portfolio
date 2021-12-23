import React from 'react';
import styled from 'styled-components';

import { IoLogoInstagram } from 'react-icons/io';
import { VscGithubAlt, VscMail } from 'react-icons/vsc';

/* Component Style */
const Wrapper = styled.article`
  position: absolute;
  bottom: 20px;
  right: 30px;
`;

const LinkList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const LinkItem = styled.li`
  width: 25px;
  height: 25px;
  cursor: pointer;
  margin-bottom: 17px;

  svg {
    width: 100%;
    height: 100%;
  }

  &:hover svg {
    fill: #085afa;
  }
`;

const Bar = styled.span`
  display: block;
  width: 1px;
  height: 55px;
  background-color: #000;
  margin: 0px auto 15px;
`;

const LinkListPanel = () => {
  return (
    <Wrapper>
      <Bar></Bar>

      <LinkList>
        <LinkItem>
          <IoLogoInstagram />
        </LinkItem>

        <LinkItem>
          <VscGithubAlt />
        </LinkItem>

        <LinkItem>
          <VscMail />
        </LinkItem>
      </LinkList>
    </Wrapper>
  );
};

export default LinkListPanel;
