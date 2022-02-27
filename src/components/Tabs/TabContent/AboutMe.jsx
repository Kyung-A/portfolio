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
          안녕하세요. 상상을 그리는 개발자 남은경입니다. <br />이 세상에는 매우
          다양한 사용자들이 있습니다. <br /> 저는 어떠한 형태든 상상한 모든 걸
          웹으로 그릴 수 있는 개발자입니다. <br /> <br />
          반복 작업이 많은 퍼블리싱에서는 어떤 식으로 CSS를 작성해야지 나 자신도
          편하고, 추후 유지보수하는 개발자 등등 모두에게 편할 수 있을까를 늘
          고민했습니다. <br /> 그 결과 저는 모듈화와 재사용성에 대해 다양한
          경험과 지식을 습득할 수 있었습니다. <br />
          <br />
          처음에는 퍼블리싱으로 시작한 고민이 이제는, <br /> 어떻게 하면 내가
          작성한 코드를 다른 사람도 쉽게 알아볼 수 있고, 편하게 재사용할 수
          있을까를 늘 생각하고 코딩하게 되었습니다.
          <br /> <br />
          이렇게 늘 협업과 좋은 코드에 고민하는 개발자 남은경입니다.
          <br />
          감사합니다 : )
        </p>

        <Career>
          <SectionTitle>!-- Career</SectionTitle>

          <CareerList>
            <CareerItem>
              <h3>
                <BsBuilding />
                △△기업
              </h3>
              <p>
                <span>2020.11월 ~ 2022.2월</span>
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
