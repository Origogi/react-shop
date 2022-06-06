import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";

function Detail(props) {
  let { id } = useParams();

  let [item] = useState(props.shoes.find((item) => item.id === Number(id)));
  let [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    console.log("컴포넌트가 화면에 나타남");
    return () => {
      console.log("컴포넌트가 화면에서 사라짐");
    };
  }, []);

  const [value, setValue] = useState("");

  useEffect(() => {
    console.log(value);
  }, [value]);

  console.log(tabIndex);

  return (
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
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
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
  );
}

function TabContent(props) {
  if (props.index == 0) {
    return <div>내용0</div>;
  } else if (props.index == 1) {
    return <div>내용1</div>;
  } else if (props.index == 2) {
    return <div>내용2</div>;
  }
  return null;
}

export default Detail;
