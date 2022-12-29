import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { products } from "../../data/products";

const initialState: Products = {
  products: products,
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    SORT_PRODUCT: (state, action: PayloadAction<string>) => {
      if (action.payload === "Price - High to Low") {
        state.products = state.products.sort((a, b) => b.price - a.price);
      } else if (action.payload === "Price - Low to High") {
        state.products = state.products.sort((a, b) => a.price - b.price);
      } else if (action.payload === "Ascending") {
        state.products = state.products.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      } else if (action.payload === "Descending") {
        state.products = state.products.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
      }
    },
    FILTER_PRODUCTS: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        (item) => item.creator === action.payload
      );
      console.log(action.payload);
    },
    FILTER_BY_PRICE: (state, action: PayloadAction<number[]>) => {
      state.products = state.products.filter(
        (item) =>
          item.price > action.payload[0] && item.price >= action.payload[1]
      );
      console.log(state.products);
    },
  },
});

export default productSlice.reducer;

export const { SORT_PRODUCT, FILTER_PRODUCTS, FILTER_BY_PRICE } =
  productSlice.actions;
