import { configureStore, createSlice } from "@reduxjs/toolkit";
import { cartData } from "./data.js";
import user from "./store/userSlice.js";

let stock = createSlice({
  name: "stock",
  initialState: [10, 11, 12],
});

let cart = createSlice({
  name: "cart",
  initialState: cartData,
  reducers: {
    incCount(state, action) {
      console.log(state);

      const targetId = action.payload;
      const targetState = state.find((element) => element.id == targetId);
      targetState.count += 1;
    },
    addToCart(state, action) {
      const newItem = action.payload;
      const targetItem = state.find((e) => e.id === newItem.id);

      if (undefined === targetItem) {
        state.push(action.payload);
      } else {
        targetItem.count += 1;
      }
    },
  },
});

export let { incCount, addToCart } = cart.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    cart: cart.reducer,
  },
});
