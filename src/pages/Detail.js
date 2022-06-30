import { useParams } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { Context1 } from "../App.js";
import { addToCart } from "./../store.js";
import { useDispatch } from "react-redux";

function Detail(props) {
  let { id } = useParams();
  let [item] = useState(props.shoes.find((item) => item.id === Number(id)));
  let [tabIndex, setTabIndex] = useState(0);
  let [fade, setFade] = useState("");

  useEffect(() => {
    setFade("fade_end");
  }, []);

  useEffect(() => {
    const watched = JSON.parse(localStorage.getItem("watched"));

    for (var i = 0; i < watched.length; i++) {
      if (watched[i] === Number(id)) {
        watched.splice(i, 1);
        break;
      }
    }

    const result = [Number(id), ...watched];
    console.log(result);

    localStorage.setItem("watched", JSON.stringify(result));
  }, []);

  let dispatch = useDispatch();

  return (
    <div className={`fade_start ${fade}`}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              alt=""
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
            <button
              className="btn btn-danger"
              onClick={() => {
                dispatch(
                  addToCart({ id: item.id, name: item.title, count: 1 })
                );
              }}
            >
              주문하기
            </button>
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

  let { stock, shoes } = useContext(Context1);

  useEffect(() => {
    setFade("");
    setTimeout(() => {
      setFade("fade_end");
    }, 100);
  }, [index]);

  return (
    <div className={`fade_start ${fade}`}>
      {
        [<div>{stock[0]}</div>, <div>{shoes[0].title}</div>, <div>내용2</div>][
          index
        ]
      }
    </div>
  );
}

export default Detail;
