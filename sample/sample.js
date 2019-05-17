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

class Sample2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 2,
      pageSize: 6,
      visibility: 3,
      ellipsis: true,
    };
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h2>Sample 2</h2>
          </Col>
        </Row>
        {this.renderControlsRow()}
        <Row>
          <Col className='d-flex justify-content-center'>
            Page {this.state.page}: Items from {this.state.fromItem} to {this.state.toItem} while total is {this.props.data.length}
          </Col>
        </Row>
        <Row>
          <Col className='d-flex justify-content-center'>
            <ReactstrapPaginationbar.Paginationbar
              className='sample'
              totalItems={this.props.data.length}
              pageSize={this.state.pageSize}
              current={this.state.page}
              visibility={this.state.visibility}
              ellipsis={this.state.ellipsis}
              onTurnPage={e => this.setState(e)}
            />
          </Col>
        </Row>
        <Row>
          <Col className='d-flex justify-content-center'>
            {this.renderTable()}
          </Col>
        </Row>
        <Row>
          <Col className='d-flex justify-content-center'>
            <ReactstrapPaginationbar.Paginationbar
              className='sample'
              size='sm'
              totalItems={this.props.data.length}
              pageSize={this.state.pageSize}
              current={this.state.page}
              visibility={this.state.visibility}
              ellipsis={this.state.ellipsis}
              onTurnPage={e => this.setState(e)}
            />
          </Col>
        </Row>
      </Container>
    );
  }

  renderTable() {
    return (
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {this.props.data.slice(this.state.fromItem, this.state.toItem + 1).map((d, i) =>
            <tr key={`sample2-row-${i}`}>
              <td>{this.state.fromItem + i}</td>
              <td>{d.name}</td>
            </tr>
          )}
        </tbody>
      </Table>
    )
  }

  renderControlsRow() {
    return (
      <Row>
        <Col sm='4' className='d-flex justify-content-center'>
          <ButtonGroup>
            <Button disabled color='success'>Items in Page</Button>
            <Button onClick={() => this.setState({pageSize: 3})} active={this.state.pageSize === 3}>3</Button>
            <Button onClick={() => this.setState({pageSize: 6})} active={this.state.pageSize === 6}>6</Button>
            <Button onClick={() => this.setState({pageSize: 9})} active={this.state.pageSize === 9}>9</Button>
          </ButtonGroup>
        </Col>
        <Col sm='4' className='d-flex justify-content-center'>
          <ButtonGroup>
            <Button disabled color='warning'>Page Number Visibility Level</Button>
            <Button onClick={() => this.setState({visibility: 0})} active={this.state.visibility === 0}>0</Button>
            <Button onClick={() => this.setState({visibility: 1})} active={this.state.visibility === 1}>1</Button>
            <Button onClick={() => this.setState({visibility: 2})} active={this.state.visibility === 2}>2</Button>
            <Button onClick={() => this.setState({visibility: 3})} active={this.state.visibility === 3}>3</Button>
          </ButtonGroup>
        </Col>
        <Col sm='4' className='d-flex justify-content-center'>
            <ButtonGroup>
              <Button disabled color='info'>Ellipsis Usage</Button>
              <Button onClick={() => this.setState({ellipsis: true})} active={this.state.ellipsis}>Use</Button>
              <Button onClick={() => this.setState({ellipsis: false})} active={!this.state.ellipsis}>Not use</Button>
            </ButtonGroup>
        </Col>
      </Row>
    )
  }
}

let data1 = []
for (let i = 0; i < 80; i++)
  data1.push({
    name: `Item ${i}`
  })
let data2 = []
for (let i = 0; i < 44; i++)
  data2.push({
    name: `Item ${i}`
  })
  
const domContainer = document.querySelector('#sample_container');
ReactDOM.render(
  <Container>
    <Row>
      <Col >
        <h1>Paginationbar Sample Code</h1>
      </Col>
    </Row>
    <Row>
      <Col>
        <Sample1 data={data1}/>
      </Col>
    </Row>
    <Row>
      <Col>
        <Sample2 data={data2}/>
      </Col>
    </Row>
  </Container>,
  domContainer);
