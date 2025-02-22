import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  // Big Reducer for whole store
  reducer: {
    // Small Reducer for each slice of the store
    cart: cartReducer,
  },
});
export default appStore;
