import React from 'react';

import { projectList } from '../../../db';
import TextRolling from '../../TextRolling';
import List from './List';

/* Component Style */
import { ListWrapper, Wrapper, Header } from './styles';

const Project = () => {
  return (
    <Wrapper>
      <Header>
        <TextRolling text={'Project'} />
      </Header>
      <ListWrapper>
        {projectList.map((list) => (
          <List key={list.id} list={list} />
        ))}
      </ListWrapper>
    </Wrapper>
  );
};

export default Project;
