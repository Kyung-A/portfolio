import React from 'react';

/* Component Style */
import { DescriptionItem } from './styles';

const ListDescription = ({ descriptionList }) => {
  return <DescriptionItem>{descriptionList.item}</DescriptionItem>;
};

export default ListDescription;
