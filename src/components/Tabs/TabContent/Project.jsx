import React from 'react';

import { projectList } from '../../../db';
import TextRolling from '../../TextRolling';
/* Component Style */
import {
  Item,
  ItemDescription,
  ItemTitle,
  ItemListSection,
  Wrapper,
  Header,
} from './styles';

const Project = () => {
  // const project = projectList.map((projectItem) => (
  //   <ItemTitle key={projectItem.id}>
  //     {projectItem.image === null ? (
  //       <div className="item-image null">(미리보기 없음)</div>
  //     ) : (
  //       <div
  //         style={{ backgroundImage: `url(${projectItem.image})` }}
  //         className="item-image"
  //       ></div>
  //     )}

  //     <div>
  //       <p className="item-title">{projectItem.title}</p>
  //       <p className="item-lang">{projectItem.data}</p>
  //       <a
  //         className={
  //           projectItem.url === null
  //             ? 'item-url null'
  //             : 'item-url cursor-pointer'
  //         }
  //         href={`${projectItem.url}`}
  //         target="_blank"
  //         rel="noreferrer"
  //       >
  //         {projectItem.url}
  //       </a>
  //     </div>
  //   </ItemTitle>
  // ));

  return (
    <Wrapper>
      <Header>
        <TextRolling text={'Project'} />
      </Header>
      <ItemListSection>
        {projectList.map((list) => (
          <Item key={list.id} list={list} />
        ))}
      </ItemListSection>
    </Wrapper>
  );
};

export default Project;
