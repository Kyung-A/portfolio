import React from 'react';
import styled from 'styled-components';

import { VscGithubAlt, VscMail, VscBook } from 'react-icons/vsc';
import { Link, useLocation } from 'react-router-dom';

/* Component Style */
const Wrapper = styled.article`
  position: absolute;
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
  margin-bottom: 17px;

  a {
    color: #000;
    text-decoration: none;
    &:hover svg {
      fill: #085afa;
    }
  }

  svg {
    width: 100%;
    height: 100%;
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
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <Wrapper
      style={pathname === '/about' ? { top: '20px' } : { bottom: '20px' }}
    >
      <Bar></Bar>

      <LinkList>
        <LinkItem>
          <Link to="https://kyung-a.tistory.com/">
            <VscBook />
          </Link>
        </LinkItem>

        <LinkItem>
          <Link to="https://github.com/Kyung-A">
            <VscGithubAlt />
          </Link>
        </LinkItem>

        <LinkItem>
          <Link
            to="#"
            onClick={(e) => {
              window.location = 'mailto:nek1717@naver.com';
              e.preventDefault();
            }}
          >
            <VscMail />
          </Link>
        </LinkItem>
      </LinkList>
    </Wrapper>
  );
};

export default LinkListPanel;
