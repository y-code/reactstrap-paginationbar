import React from 'react';
import { Table } from 'reactstrap';
import { Paginationbar } from 'reactstrap-paginationbar';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    // Sample Data
    this.data = []
    for (let i = 0; i < 50; i++) this.data.push({ name: `Item ${i}`});

    // initialize state
    this.state = {};
  }
  
  render() {
    return (
      <div>

        <Paginationbar
          totalItems={this.data.length}
          pageSize={5}
          onTurnPage={e => this.setState(e)}
        />

        <Table>
          <thead><tr key='-1'><th>#</th><th>Name</th></tr></thead>
          <tbody>
            {this.data.slice(this.state.fromItem, this.state.toItem + 1).map((r, i) =>
              <tr key={i}><td>{i}</td><td>{r.name}</td></tr>
            )}
          </tbody>
        </Table>
      </div>
    );
  }
}
