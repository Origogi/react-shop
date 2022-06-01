import "./App.css";
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import bg from "./img/bg.png";
import { useState } from "react";
import data from "./data.js";

function App() {
  let [shoes] = useState(data);

  console.log(shoes);

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#cart">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg" style={{ backgroundImage: `url(${bg})` }}></div>

      <Container>
        <Row>
          <Col>
            <ShoesComp
              title={shoes[0].title}
              price={shoes[0].price}
              imgSrc="https://codingapple1.github.io/shop/shoes1.jpg"
            />
          </Col>
          <Col>
            <ShoesComp
              title={shoes[1].title}
              price={shoes[1].price}
              imgSrc="https://codingapple1.github.io/shop/shoes2.jpg"
            />
          </Col>
          <Col>
            <ShoesComp
              title={shoes[2].title}
              price={shoes[2].price}
              imgSrc="https://codingapple1.github.io/shop/shoes3.jpg"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

function ShoesComp(props) {
  return (
    <Col>
      {" "}
      <img src={props.imgSrc} width="80%"></img>
      <h4>{props.title}</h4>
      <p>{props.price}</p>
    </Col>
  );
}

export default App;
