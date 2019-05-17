'use strict';

const Container = Reactstrap.Container
const Row = Reactstrap.Row
const Col = Reactstrap.Col

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
