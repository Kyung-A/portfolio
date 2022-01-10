import React from 'react';

import { AiOutlineHtml5 } from 'react-icons/ai';
import { GrCss3, GrReactjs } from 'react-icons/gr';
import { IoLogoJavascript } from 'react-icons/io';
import { SiRedux, SiJava, SiExpress, SiMongodb } from 'react-icons/si';
import { FaNode } from 'react-icons/fa';
import { BsBuilding } from 'react-icons/bs';

import TextRolling from '../../TextRolling';

/* Component Style */
import {
  Header,
  Wrapper,
  Section,
  Career,
  SectionTitle,
  CareerList,
  CareerItem,
  Skill,
  SkillItem,
  SkillList,
} from './styles';

const AboutMe = () => {
  return (
    <Wrapper>
      <Header>
        <TextRolling text={'About Me'} />
      </Header>

      <Section>
        <p>웹이라는 우주에 그림을 그리는 개발자 남은경입니다.</p>
        <p>내 직업에 부끄러움 없이 당당하기 위해 성실히 공부하고 있습니다.</p>

        <Career>
          <SectionTitle>!-- Career</SectionTitle>

          <CareerList>
            <CareerItem>
              <p>- 2020.11 ~ 재직중</p>
              <p>
                <BsBuilding />
                피타그래프
              </p>
            </CareerItem>
          </CareerList>
        </Career>

        <Skill>
          <SectionTitle>!-- Skill</SectionTitle>

          <SkillList>
            <SkillItem>
              <AiOutlineHtml5 />
              HTML5
            </SkillItem>

            <SkillItem>
              <GrCss3 />
              CSS3
            </SkillItem>

            <SkillItem>
              <IoLogoJavascript />
              Javascript, ES6
            </SkillItem>

            <SkillItem>
              <GrReactjs />
              REACT
            </SkillItem>

            <SkillItem>
              <SiRedux />
              REDUX
            </SkillItem>

            <SkillItem>
              <SiJava />
              JAVA EGOV, JSP
            </SkillItem>

            <SkillItem>
              <FaNode />
              NODE
            </SkillItem>

            <SkillItem>
              <SiExpress />
              EXPRESS
            </SkillItem>

            <SkillItem>
              <SiMongodb />
              MONGODB
            </SkillItem>
          </SkillList>
        </Skill>
      </Section>
    </Wrapper>
  );
};

export default AboutMe;
