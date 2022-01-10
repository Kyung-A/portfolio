import React from 'react';

import { studyList } from '../../../db';
import TextRolling from '../../TextRolling';
/* Component Style */
import { Header, Item, ItemListSection, Wrapper } from './styles';

const Study = () => {
  const study = studyList.map((studyItem) => (
    <Item key={studyItem.id}>
      <div
        style={{ backgroundImage: `url(${studyItem.image})` }}
        className="item-image"
      ></div>
      <div>
        <p className="item-title">{studyItem.title}</p>
        <p className="item-description">{studyItem.description}</p>
        <a
          className="item-url cursor-pointer"
          href={`${studyItem.url}`}
          target="_blank"
          rel="noreferrer"
        >
          {studyItem.url}
        </a>
      </div>
    </Item>
  ));

  return (
    <Wrapper>
      <Header>
        <TextRolling text={'Study'} />
      </Header>
      <ItemListSection>{study}</ItemListSection>
    </Wrapper>
  );
};

export default Study;
