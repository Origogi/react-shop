import './App.css';
import { Nav, Navbar, Container, Row, Col } from 'react-bootstrap';
import bg from './img/bg.png';
import { useState } from 'react';
import data from './data.js';
import { Route, Routes, Link } from 'react-router-dom';
import DetailPage from './Detail';

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

      <Link to={'/'}>홈</Link>
      <Link to={'/detail'}>상세 페이지</Link>

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/detail" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

function MainPage(props) {
  let [shoes] = useState(data);

  return (
    <>
      <div className="main-bg" style={{ backgroundImage: `url(${bg})` }}></div>

      <Container>
        <Row>
          {shoes.map((item, i) => {
            return (
              <Card
                title={item.title}
                price={item.price}
                imgSrc={`https://codingapple1.github.io/shop/shoes${i + 1}.jpg`}
              />
            );
          })}
        </Row>
      </Container>
    </>
  );
}

function Card(props) {
  return (
    <Col>
      {' '}
      <img src={props.imgSrc} width="80%"></img>
      <h4>{props.title}</h4>
      <p>{props.price}</p>
    </Col>
  );
}

export default App;
