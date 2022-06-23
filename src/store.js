import { configureStore, createSlice } from "@reduxjs/toolkit";
import { cartData } from "./data.js";

let user = createSlice({
  name: "user",
  initialState: "kim",
});

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
