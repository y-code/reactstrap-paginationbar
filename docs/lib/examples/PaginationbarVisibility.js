import React from 'react';
import { Paginationbar } from 'reactstrap-paginationbar';

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <Paginationbar totalItems={100} visibility={0}/>
        <Paginationbar totalItems={100} visibility={1}/>
        <Paginationbar totalItems={100} visibility={2}/>
        <Paginationbar totalItems={100} visibility={3}/>
      </div>
    );
  }
}
