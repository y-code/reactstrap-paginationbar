'use strict';

const Container = Reactstrap.Container
const Row = Reactstrap.Row
const Col = Reactstrap.Col
const Table = Reactstrap.Table
const ButtonGroup = Reactstrap.ButtonGroup
const Button = Reactstrap.Button

class Sample1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h2>Sample 1</h2>
          </Col>
        </Row>
        <Row>
          <Col className='d-flex justify-content-center'>
            Page {this.state.page}: Items from {this.state.fromItem} to {this.state.toItem} while total is {this.props.data.length}.
          </Col>
        </Row>
        <Row>
          <Col className='d-flex justify-content-center'>
            <ReactstrapPaginationbar.Paginationbar
              size='lg'
              totalItems={this.props.data.length}
              onTurnPage={e => this.setState(e)}/>
          </Col>
        </Row>
        <Row>
          <Col className='d-flex justify-content-center'>
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                {this.props.data.slice(this.state.fromItem, this.state.toItem + 1).map((d, i) =>
                  <tr key={`sample1-row-${i}`}>
                    <td>{this.state.fromItem + i}</td>
                    <td>{d.name}</td>
                  </tr>
                )}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    );
  }
}
