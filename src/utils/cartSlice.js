import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // Mutating the state here
      // Redux uses Immer under the hood to allow us to write code that "mutates" the state in reducers.
      // Immer creates a copy of the state, applies the mutations, and then returns the new state.
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    // Original state={items:["pizza"]}
    clearCart: (state) => {
      //   RTK- either mutate the existing state or return a new state
      // state.items.length = 0;  ====>>>> original state=[]
      // return { items: [] };  ====>>>> original state=[]
      // state[] = []  ====>>>> will not mutate the original state but will create a new state, so don't use this
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
