import React from 'react';

import { studyList } from '../../../db';
import TextRolling from '../../TextRolling';
import List from './List';

/* Component Style */
import { Header, ListWrapper, Wrapper } from './styles';

const Study = () => {
  return (
    <Wrapper>
      <Header>
        <TextRolling text={'Study'} />
      </Header>
      <ListWrapper>
        {studyList.map((list) => (
          <List key={list.id} list={list} />
        ))}
      </ListWrapper>
    </Wrapper>
  );
};

export default Study;
