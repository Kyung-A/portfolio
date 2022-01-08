import React from 'react';
import styled from 'styled-components';

import { VscGithubAlt, VscMail, VscBook } from 'react-icons/vsc';
import { Link, useLocation } from 'react-router-dom';

/* Component Style */
const Wrapper = styled.article`
  position: absolute;
  right: 30px;

  @media screen and (max-width: 1024px) {
    right: 20px;
  }
`;

const LinkList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const LinkItem = styled.li`
  width: 1.7vw;
  height: 3.3vh;
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

  @media screen and (max-width: 1024px) {
    width: 25px;
    height: 25px;
  }
`;

const Bar = styled.span`
  display: block;
  width: 0.1vw;
  height: 8vh;
  background-color: #000;
  margin: 0px auto 15px;

  @media screen and (max-width: 1024px) {
    width: 1px;
  }
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
          <a
            href="https://kyung-a.tistory.com/"
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer"
          >
            <VscBook />
          </a>
        </LinkItem>

        <LinkItem>
          <a
            href="https://github.com/Kyung-A"
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer"
          >
            <VscGithubAlt />
          </a>
        </LinkItem>

        <LinkItem>
          <Link
            to="#"
            onClick={(e) => {
              window.location = 'mailto:nek1717@naver.com';
              e.preventDefault();
            }}
            className="cursor-pointer"
          >
            <VscMail />
          </Link>
        </LinkItem>
      </LinkList>
    </Wrapper>
  );
};

export default LinkListPanel;
