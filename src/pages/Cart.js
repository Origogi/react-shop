import React, { useState, memo } from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, increaseAge } from './../store/userSlice.js';
import { incCount } from './../store.js';

// memo : 불 필요한 재 랜더링을 막아줌
// 원리 : props 가 변경될때에 만 재 렌더링
let Child = memo(function () {
  console.log('재 렌더링됨');
  return <div>자식임</div>;
});

var a = 0;
function Cart() {
  // 렌더링이 느려지는 코드
  // 크롬 > 디버그 툴  >  `Profiler` 에서 확인 가능
  for (var i = 0; i < 1e9; i++) {
    a = i;
  }

  let cartData = useSelector((state) => state.cart);
  let userData = useSelector((state) => state.user);

  let [count, setCount] = useState(0);

  let dispatch = useDispatch();
  return (
    <div>
      <Child count={count} />
      <h6>
        {userData.name} ({userData.age})의 장바구니
      </h6>
      <button
        onClick={() => {
          // dispatch(increaseAge(10));
          setCount(count + 1);
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
