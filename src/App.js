import "./App.css";
import { Nav, Navbar, Container } from "react-bootstrap";
import bg from "./img/bg.png";
import { createContext, useState } from "react";
import { data } from "./data.js";
import { Route, Routes, useNavigate, Outlet } from "react-router-dom";
import Detail from "./pages/Detail";
import axios from "axios";
import Cart from "./pages/Cart";

export let Context1 = createContext();

function App() {
  let navigate = useNavigate();

  let [shoes] = useState(data);
  let [stock] = useState([10, 11, 12]);

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
        <Route
          path="/detail/:id"
          element={
            <Context1.Provider value={{ stock, shoes }}>
              <Detail shoes={shoes} />
            </Context1.Provider>
          }
        />
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>회사 멤버</div>} />
          <Route path="location" element={<div>위치 정보</div>} />
        </Route>

        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일 기념 쿠폰 받기</div>} />
        </Route>

        <Route path="/cart" element={<Cart />} />

        <Route path="*" element={<div>잘못된 페이지</div>} />
      </Routes>
    </div>
  );
}

function Main(props) {
  let [shoes, setShoes] = useState(data);
  let [moreIndex, setMoreIndex] = useState(2);
  let [loadingState, setLoadingState] = useState(false);

  return (
    <>
      <div className="main-bg" style={{ backgroundImage: `url(${bg})` }}></div>

      <div className="container">
        <div className="row">
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
        </div>
        {loadingState ? (
          <div className="row">
            <h4>로딩중입니다.</h4>
          </div>
        ) : null}

        <div className="row">
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => {
              let result = [...shoes].sort((a, b) => {
                let strA = a.title.toLowerCase();
                let strB = b.title.toLowerCase();

                if (strA < strB) {
                  return -1;
                } else if (strA > strB) {
                  return 1;
                } else {
                  return 0;
                }
              });
              setShoes(result);
            }}
          >
            Sort
          </button>
        </div>
        <div className="row">
          <button
            onClick={() => {
              setLoadingState(true);
              axios
                .get(
                  `https://codingapple1.github.io/shop/data${moreIndex}.json`
                )
                .then((data) => {
                  console.log(data.data);

                  let result = [...shoes, ...data.data];
                  setShoes(result);
                  setMoreIndex(moreIndex + 1);
                  setLoadingState(false);
                })
                .catch(() => {
                  alert("실패함");
                  setLoadingState(false);
                });
            }}
            className="btn btn-outline-primary"
          >
            Get More Items!
          </button>
        </div>
      </div>
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
    <div className="col-4">
      {" "}
      <img src={props.imgSrc} width="80%" alt=""></img>
      <h4>{props.title}</h4>
      <p>{props.price}</p>
    </div>
  );
}

export default App;
