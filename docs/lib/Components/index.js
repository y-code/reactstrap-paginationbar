import React from 'react';
import Content from '../UI/Content';

const items = [
  {
    name: 'Paginationbar',
    to: '/components/paginationbar/'
  },
];

function Components(props) {
  return <Content title="Components" items={items} {...props} />;
}

export default Components;