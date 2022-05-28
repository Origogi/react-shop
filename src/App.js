import "./App.css";
import { Button, Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import bg from "./img/main-bg.jpg";

function App() {
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
            <img
              src="https://codingapple1.github.io/shop/shoes1.jpg"
              width="80%"
            ></img>
            <h4>상품명</h4>
            <p>상품 설명</p>
          </Col>
          <Col>
            {" "}
            <img
              src="https://codingapple1.github.io/shop/shoes2.jpg"
              width="80%"
            ></img>
            <h4>상품명</h4>
            <p>상품 설명</p>
          </Col>
          <Col>
            {" "}
            <img
              src="https://codingapple1.github.io/shop/shoes3.jpg"
              width="80%"
            ></img>
            <h4>상품명</h4>
            <p>상품 설명</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
