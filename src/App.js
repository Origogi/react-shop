import "./App.css";
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import bg from "./img/bg.png";
import { useState } from "react";
import data from "./data.js";
import { Route, Routes, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./pages/Detail";

function App() {
  let navigate = useNavigate();

  let [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand onClick={() => navigate("/")}>ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate("/detail")}>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>회사 멤버</div>} />
          <Route path="location" element={<div>위치 정보</div>} />
        </Route>

        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일 기념 쿠폰 받기</div>} />
        </Route>

        <Route path="*" element={<div>잘못된 페이지</div>} />
      </Routes>
    </div>
  );
}

function Main(props) {
  let [shoes, setShoes] = useState(data);

  return (
    <>
      <div className="main-bg" style={{ backgroundImage: `url(${bg})` }}></div>

      <Container>
        <Row>
          {shoes.map((item, i) => {
            return (
              <Card
                key={item.id}
                title={item.title}
                price={item.price}
                imgSrc={`https://codingapple1.github.io/shop/shoes${i + 1}.jpg`}
              />
            );
          })}
        </Row>
        <Row>
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => {
              let result = [...shoes].sort((a, b) => {
                console.log(`${a.title} ${b.title} ${a.title < b.title}`);
                let strA = a.title.toLowerCase();
                let strB = b.title.toLowerCase();

                if (strA < strB) {
                  return -1;
                } else if (strA > strB) {
                  return 1;
                } else {
                  return 0;
                }

                return 0;
              });
              console.log(result);
              setShoes(result);
            }}
          >
            Sort
          </button>
        </Row>
      </Container>
    </>
  );
}

function About() {
  return (
    <div>
      <h4>회사 정보</h4>
      <Outlet />
    </div>
  );
}

function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet />
    </div>
  );
}

function Card(props) {
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
