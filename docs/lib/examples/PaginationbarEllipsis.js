import React from 'react';
import { Paginationbar } from 'reactstrap-paginationbar';

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Paginationbar ellipsis={true} current={this.state.page} onTurnPage={e => this.setState(e)} totalItems={100}/>
        <Paginationbar ellipsis={false} current={this.state.page} onTurnPage={e => this.setState(e)} totalItems={100}/>
      </div>
    );
  }
}
