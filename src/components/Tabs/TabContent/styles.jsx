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
  }
`;

export const ListWrapper = styled.ul`
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
  margin: 40px 0px 60px 0px;
`;

export const CareerList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;

  h3 {
    display: flex;
    align-items: center;
    padding-left: 30px;
    font-size: 1vw;
    color: #ed770d;
    margin: 15px 0px 10px 0px;

    svg {
      width: 20px;
      height: 20px;
      margin-right: 5px;
    }

    @media screen and (max-width: 1024px) {
      font-size: 15px;
    }
  }

  p {
    margin: 0;
    font-size: 0.9vw;
    padding-left: 30px;
    letter-spacing: 2px;

    span {
      display-block: inline-block;
      color: #ed770d;
      font-weight: bold;
      margin-right: 20px;
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
  margin-top: 20px;
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
  font-size: 0.8vw;
  font-family: 'SCDream3';

  svg {
    width: 18px;
    height: 18px;
    margin-right: 10px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 13px;
  }
`;

export const ListItem = styled.li`
  display: flex;
  width: 100%;
  padding: 30px 15px;
  border-bottom: 3px dashed #ebebeb;
  box-sizing: border-box;
`;

export const ListTitle = styled.div`
  width: 35%;

  .item-image {
    wdith: 100%;
    height: 130px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;

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
    font-family: 'Cafe24SsurroundAir';
  }

  .item-title {
    font-size: 1.2vw;
    font-weight: bold;
    margin-top: 15px;
    word-break: keep-all;
  }

  .item-date {
    font-size: 1vw;
    margin-top: 10px;
  }

  .item-url {
    display: block;
    font-size: 0.9vw;
    font-family: 'Cafe24SsurroundAir';
    text-decoration: underline;
    word-break: break-all;
    color: #808080;
    margin-top: 30px;

    &:hover {
      color: #085afa;
    }
  }
  .item-url.null:hover {
    color: #808080;
  }
`;

export const DescriptionListWrapper = styled.div`
  width: 65%;
`;

export const DescriptionList = styled.ul`
  margin: 0;
  list-style: disc;
`;

export const DescriptionItem = styled.li`
  font-size: 1vw;
  margin-bottom: 8px;
  font-family: 'SCDream3';
  word-break: keep-all;
`;

export const Description = styled.p`
  margin: 0;
  margin-left: 20px;
  font-size: 1vw;
  font-family: 'SCDream3';
  word-break: keep-all;
`;
