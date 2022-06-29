import React from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "./../store.js";

function Cart() {
  let cartData = useSelector((state) => state.cart);
  let userData = useSelector((state) => state.user);

  let dispatch = useDispatch();

  console.log(userData);

  console.log(cartData);
  return (
    <div>
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
                    dispatch(changeName());
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
