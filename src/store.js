import { configureStore, createSlice } from "@reduxjs/toolkit";
import { cartData } from "./data.js";

let user = createSlice({
  name: "user",
  initialState: "kim",
  reducers: {
    changeName(state) {
      return "john kim";
    },
  },
});

// change state 함수들
// 오른 쪽 자료를 변수로 빼는 문법
export let { changeName } = user.actions;

let stock = createSlice({
  name: "stock",
  initialState: [10, 11, 12],
});

let cart = createSlice({
  name: "cart",
  initialState: cartData,
});

export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    cart: cart.reducer,
  },
});
