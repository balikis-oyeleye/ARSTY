import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Cart = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    ADD_TO_CART: (state, action: PayloadAction<productProps>) => {
      state.cartItems = [...state.cartItems, action.payload];
    },
    REMOVE_FROM_CART: (state, action: PayloadAction<productProps>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
    INCREASE_ITEM: (state, action: PayloadAction<productProps>) => {
      const item = state.cartItems.find(
        (item) => item.name === action.payload.name
      );
      if (item) {
        item.quantity++;
      }
    },
    DECREASE_ITEM: (state, action: PayloadAction<productProps>) => {
      const item = state.cartItems.find(
        (item) => item.name === action.payload.name
      );
      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },
    EMPTY_CART: (state) => {
      state.cartItems = [];
    },
  },
});

export const {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_ITEM,
  DECREASE_ITEM,
  EMPTY_CART,
} = cartSlice.actions;
export default cartSlice.reducer;
