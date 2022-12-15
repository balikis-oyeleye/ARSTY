import { products } from "../data/products";

export const getProductByName = (
  productName: string | string[] | undefined
) => {
  return products.find((product) => {
    if (typeof productName === "string") {
      return product.name === productName.toLocaleUpperCase();
    }
  });
};
