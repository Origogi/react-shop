import React from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName, increaseAge } from "./../store/userSlice.js";
import { incCount } from './../store.js'

function Cart() {
  let cartData = useSelector((state) => state.cart);
  let userData = useSelector((state) => state.user);

  let dispatch = useDispatch();
  return (
    <div>
      <h6>
        {userData.name} ({userData.age})의 장바구니
      </h6>
      <button
        onClick={() => {
          dispatch(increaseAge(10));
        }}
      >
        버튼
      </button>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        {cartData.map((element) => (
          <tbody key={element.id}>
            <tr>
              <td>{element.id}</td>
              <td>{element.name}</td>
              <td>{element.count}</td>
              <td>
                <button
                  onClick={() => {
                    dispatch(incCount(element.id));
                  }}
                >
                  +
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
}

export default Cart;
