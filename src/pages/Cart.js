import React from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

function Cart() {
  let cartData = useSelector((state) => state.cart);
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
              <td>안녕</td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
}

export default Cart;
