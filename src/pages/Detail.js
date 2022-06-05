import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

function Detail(props) {
  let { id } = useParams();

  let [item] = useState(props.shoes.find((item) => item.id === Number(id)));

  let [visible, setVisible] = useState(true);
  let [count, setCount] = useState(0);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount(count + 1);
  //     setVisible(false);
  //   }, 2000);
  //   return () => {
  //     console.log("heello");
  //   };
  // }, []);

  useEffect(() => {
    console.log("컴포넌트가 화면에 나타남");
    return () => {
      console.log("컴포넌트가 화면에서 사라짐");
    };
  }, []);

  return (
    <div className="container">
      {visible ? <h4>사라짐</h4> : <></>}
      {count}

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
    </div>
  );
}

export default Detail;
