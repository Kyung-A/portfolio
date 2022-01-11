import React from 'react';
import PropTypes from 'prop-types';

import ListDescription from './ListDescription';

/* Component Style */
import {
  ListItem,
  ListTitle,
  DescriptionListWrapper,
  DescriptionList,
  Description,
} from './styles';

const List = ({ list }) => {
  return (
    <ListItem key={list.id}>
      <ListTitle>
        {list.image === null ? (
          <div className="item-image null">(미리보기 없음)</div>
        ) : (
          <div
            style={{ backgroundImage: `url(${list.image})` }}
            className="item-image"
          ></div>
        )}

        <p className="item-title">{list.title}</p>
        <p className="item-date">{list.date}</p>

        {list.url !== null ? (
          <a
            className="item-url cursor-pointer"
            href={`${list.url}`}
            target="_blank"
            rel="noreferrer"
          >
            {list.url}
          </a>
        ) : (
          <p className="item-url null">(오픈 예정 또는 URL 없음)</p>
        )}
      </ListTitle>

      <DescriptionListWrapper>
        {list.descriptionList ? (
          <DescriptionList>
            {list.descriptionList.map((item, index) => (
              <ListDescription key={index} descriptionList={item} />
            ))}
          </DescriptionList>
        ) : (
          <Description>{list.description}</Description>
        )}
      </DescriptionListWrapper>
    </ListItem>
  );
};

List.propTypes = {
  list: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    image: PropTypes.string,
    date: PropTypes.string,
    descriptionList: PropTypes.arrayOf(PropTypes.object),
    description: PropTypes.string,
    url: PropTypes.string,
  }),
};

export default List;
