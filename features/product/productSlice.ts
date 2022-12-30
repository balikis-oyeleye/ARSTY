import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { products } from "../../data/products";

const initialState: Filter = {
  products: products,
  creators: [],
  categories: [],
  filteredByCategories: products,
  price: [1, 1],
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
    FILTER_BY_CREATORS: (state, action: PayloadAction<string>) => {
      state.creators.push(action.payload);
      state.products =
        state.creators.length > 0
          ? [...products].filter((value) => {
              if (state.categories.length > 0) {
                return (
                  state.categories.includes(value.category) &&
                  state.creators.includes(value.creator)
                );
              }
              return state.creators.includes(value.creator);
            })
          : [...products];
    },
    UN_FILTER_BY_CREATORS: (state, action: PayloadAction<string>) => {
      state.creators = state.creators.filter(
        (value) => value !== action.payload
      );
      if (state.creators.length > 0) {
        state.products = products.filter((value) => {
          if (state.categories.length > 0) {
            return (
              state.categories.includes(value.category) &&
              state.creators.includes(value.creator)
            );
          }
          return state.creators.includes(value.category);
        });
      } else {
        state.products = products.filter((value) => {
          if (state.categories.length > 0) {
            return state.categories.includes(value.category);
          }
          return products;
        });
      }
    },
    FILTER_BY_CATEGORY: (state, action: PayloadAction<string>) => {
      state.categories.push(action.payload);
      state.products =
        state.categories.length > 0
          ? products.filter((value) => {
              if (state.creators.length > 0) {
                return (
                  state.categories.includes(value.category) &&
                  state.creators.includes(value.creator)
                );
              }
              return state.categories.includes(value.category);
            })
          : [...products];
      state.filteredByCategories = state.products;
    },
    UN_FILTER_BY_CATEGORY: (state, action: PayloadAction<string>) => {
      state.categories = state.categories.filter(
        (value) => value !== action.payload
      );
      if (state.categories.length > 0) {
        state.products = products.filter((value) => {
          if (state.creators.length > 0) {
            return (
              state.categories.includes(value.category) &&
              state.creators.includes(value.creator)
            );
          }
          return state.categories.includes(value.category);
        });
      } else {
        state.products = products.filter((value) => {
          if (state.creators.length > 0) {
            return state.creators.includes(value.creator);
          }
          return products;
        });
      }
      state.filteredByCategories = state.products;
    },
    FILTER_BY_PRICE: (state, action: PayloadAction<number[]>) => {
      state.price = action.payload;
      if (state.categories.length > 0 && state.creators.length > 0) {
        state.products = products.filter(
          (value) =>
            value.price >= state.price[0] &&
            value.price <= state.price[1] &&
            state.creators.includes(value.creator) &&
            state.categories.includes(value.category)
        );
      } else if (state.categories.length > 0) {
        state.products = products.filter(
          (value) =>
            value.price >= state.price[0] &&
            value.price <= state.price[1] &&
            state.categories.includes(value.category)
        );
      } else if (state.creators.length > 0) {
        state.products = products.filter(
          (value) =>
            value.price >= state.price[0] &&
            value.price <= state.price[1] &&
            state.creators.includes(value.creator)
        );
      } else {
        state.products = products.filter(
          (value) =>
            value.price >= state.price[0] && value.price <= state.price[1]
        );
      }
    },
  },
});

export default productSlice.reducer;

export const {
  SORT_PRODUCT,
  FILTER_BY_CREATORS,
  FILTER_BY_PRICE,
  UN_FILTER_BY_CREATORS,
  FILTER_BY_CATEGORY,
  UN_FILTER_BY_CATEGORY,
} = productSlice.actions;
