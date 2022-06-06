import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";

function Detail(props) {
  let { id } = useParams();

  let [item] = useState(props.shoes.find((item) => item.id === Number(id)));
  let [tabIndex, setTabIndex] = useState(0);
  let [fade, setFade] = useState("");

  useEffect(() => {
    console.log("컴포넌트가 화면에 나타남");
    return () => {
      console.log("컴포넌트가 화면에서 사라짐");
    };
  }, []);

  useEffect(() => {
    setFade("fade_end");
  });

  return (
    <div className={`fade_start ${fade}`}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src={`https://codingapple1.github.io/shop/shoes${
                Number(id) + 1
              }.jpg`}
              width="100%"
            />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{item.title}</h4>
            <p>{item.content}</p>
            <p>{item.price}원</p>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>

        <Nav variant="tabs" defaultActiveKey="link0">
          <Nav.Item>
            <Nav.Link
              eventKey="link0"
              onClick={() => {
                setTabIndex(0);
              }}
            >
              버튼0
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="link1"
              onClick={() => {
                setTabIndex(1);
              }}
            >
              버튼1
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="link2"
              onClick={() => {
                setTabIndex(2);
              }}
            >
              버튼2
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <TabContent index={tabIndex} />
      </div>
    </div>
  );
}

function TabContent({ index }) {
  let [fade, setFade] = useState("");

  useEffect(() => {
    setFade("");
    setTimeout(() => {
      setFade("fade_end");
    }, 100);
  }, [index]);

  return (
    <div className={`fade_start ${fade}`}>
      {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][index]}
    </div>
  );
}

export default Detail;
