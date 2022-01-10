import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #fff;
  border: 0.21vw solid #d8fa08;
  overflow: hidden;
`;

export const Header = styled.div`
  height: 5%;
  min-height: 25px;
  border-bottom: 3px solid #d8fa08;
  background-color: #d8fa08;
`;

export const Section = styled.div`
  flex: 1;
  padding: 10px 15px;
  overflow-y: auto;
  box-sizing: border-box;

  & > p {
    font-size: 0.9vw;
    font-family: 'Cafe24SsurroundAir';
    margin: 0;
    letter-spacing: 2px;

    @media screen and (max-width: 1024px) {
      font-size: 15px;
    }

    @media screen and (max-width: 416px) {
      font-size: 18px;
      line-height: 30px;
    }
  }
`;

export const ItemListSection = styled.ul`
  flex: 1;
  margin: 0;
  padding: 0;
  list-style: none;
  overflow-y: auto;
  box-sizing: border-box;
`;

export const SectionTitle = styled.h3`
  font-size: 1.1vw;
  margin: 0;
  letter-spacing: 2px;
  font-family: 'Cafe24SsurroundAir';

  @media screen and (max-width: 1024px) {
    font-size: 18px;
  }

  @media screen and (max-width: 416px) {
    font-size: 20px;
  }
`;

export const Career = styled.div`
  margin-top: 40px;
`;

export const CareerList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;

  p {
    margin: 0;
    font-size: 0.9vw;
    padding-left: 18px;
    letter-spacing: 2px;
    line-height: 1.8;

    &:nth-child(2) {
      display: flex;
      align-items: center;
      padding-left: 30px;
      font-size: 0.9vw;

      svg {
        width: 18px;
        height: 18px;
        margin-right: 5px;
      }

      @media screen and (max-width: 1024px) {
        font-size: 15px;
      }
    }

    @media screen and (max-width: 1024px) {
      font-size: 15px;
    }
  }
`;

export const CareerItem = styled.li`
  font-family: 'Cafe24SsurroundAir';
  margin-top: 10px;
`;

export const Skill = styled.div`
  margin-top: 40px;
`;

export const SkillList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  margin-top: 15px;
  list-style: none;
`;

export const SkillItem = styled.li`
  display: flex;
  align-items: center;
  line-height: 1.6;
  padding: 3px 10px;
  margin: 3px 5px;
  border: 1px solid #000;
  letter-spacing: 2px;
  font-size: 0.7vw;
  font-family: 'Cafe24SsurroundAir';

  svg {
    width: 18px;
    height: 18px;
    margin-right: 10px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 13px;
  }
`;

export const Item = styled.li`
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
`;

export const ItemTitle = styled.div`
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

  .item-url {
    position: relative;
    margin-top: auto;
    font-size: 1vw;
    font-family: 'Cafe24SsurroundAir';
    font-weight: bold;
    text-decoration: none;
    color: #000;
    z-index: 10;

    &:hover {
      color: #085afa;
    }

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

export const ItemDescription = styled.ul``;
