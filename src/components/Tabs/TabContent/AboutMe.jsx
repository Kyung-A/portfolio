import React from 'react';

import { AiOutlineHtml5 } from 'react-icons/ai';
import { GrCss3, GrReactjs } from 'react-icons/gr';
import { IoLogoJavascript } from 'react-icons/io';
import { SiRedux, SiJava, SiExpress, SiFigma } from 'react-icons/si';
import { FaNode } from 'react-icons/fa';
import { BsBuilding } from 'react-icons/bs';
import { BiGitBranch, BiRocket } from 'react-icons/bi';
import { DiPhotoshop } from 'react-icons/di';

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
        <p>
          웹이라는 우주에 그림을 그리는 개발자 남은경입니다. 내 직업에 부끄러움
          없이 당당하기 위해 성실히 공부하고 있습니다.
        </p>

        <Career>
          <SectionTitle>!-- Career</SectionTitle>

          <CareerList>
            <CareerItem>
              <h3>
                <BsBuilding />
                피타그래프
              </h3>
              <p>
                <span>2020.11월 ~ 재직중</span>
                공공 SI, SM 솔루션 납품 기업
              </p>
            </CareerItem>
          </CareerList>
        </Career>

        <Skill>
          <SectionTitle>!-- Front End Skill</SectionTitle>

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
              JSP
            </SkillItem>
          </SkillList>
        </Skill>

        <Skill>
          <SectionTitle>!-- Back End Skill</SectionTitle>

          <SkillList>
            <SkillItem>
              <SiJava />
              JAVA Egov
            </SkillItem>

            <SkillItem>
              <FaNode />
              Node.js
            </SkillItem>

            <SkillItem>
              <SiExpress />
              Express.js
            </SkillItem>
          </SkillList>
        </Skill>

        <Skill>
          <SectionTitle>!-- Tools Skill</SectionTitle>

          <SkillList>
            <SkillItem>
              <BiGitBranch />
              Git
            </SkillItem>

            <SkillItem>
              <BiRocket />
              Zeplin
            </SkillItem>

            <SkillItem>
              <SiFigma />
              Figma
            </SkillItem>

            <SkillItem>
              <DiPhotoshop />
              Photoshop
            </SkillItem>
          </SkillList>
        </Skill>
      </Section>
    </Wrapper>
  );
};

export default AboutMe;
