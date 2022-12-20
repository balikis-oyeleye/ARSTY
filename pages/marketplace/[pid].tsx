import React from "react";
import Breadcrumb from "../../components/common/Breadcrumb";
import { getProductByName } from "../../utils/getProductByName";
import { GetServerSideProps } from "next";
import Image from "next/image";
import Head from "../../components/common/Head";
import {
  HiArrowLongRight,
  HiOutlineHeart,
  HiChevronDown,
} from "react-icons/hi2";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_ITEM,
  DECREASE_ITEM,
} from "../../features/cart/cartSlice";

const Product = ({ product }: Product) => {
  const cart = useSelector((state: RootState) => state.cart.cartItems);
  const dispatch = useDispatch();

  let productInCart = cart.find((item) => item.name === product.name);

  return (
    <>
      <Head headTitle={`${product.name} | ARTSY`} />
      <div className="container mx-auto mt-8">
        <Breadcrumb />
      </div>
      <main className="container mx-auto mt-[81px] px-2 sm:px-0 mb-8 font-satoshi">
        <div className="md:border border-grey flex flex-col items-center md:flex-row max-w-5xl mx-auto">
          <div className="py-6 px-3 md:self-start border-b border-[grey]">
            <Image src={product.image} />
          </div>
          <div className="w-full md:border-l border-grey">
            <div className="border-b border-grey">
              <div className="flex justify-between md:border-b border-grey items-center mb-4 md:mb-0 font-medium md:px-7 md:py-6">
                <h4 className="text-grey text-base md:font-bold md:text-2xl">
                  {product.name}
                </h4>
                <p className="text-grey text-base md:text-2xl">
                  ${product.price}0
                </p>
              </div>
              <p className="font-medium text-base md:px-7 md:mt-2">
                Creator:
                <span className="text-[#006CA2] ml-2">{product.creator}</span>
              </p>
              <p className="text-grey2 my-5 md:px-7">Made in Italy</p>
              <p className="text-grey2 md:px-7">Total views: 1.7K views</p>
              <div className="text-[30px] text-grey font-medium my-5 space-x-2 md:px-7">
                <button onClick={() => dispatch(DECREASE_ITEM(product))}>
                  -
                </button>{" "}
                <span>{productInCart?.quantity || 1}</span>
                <button onClick={() => dispatch(INCREASE_ITEM(product))}>
                  +
                </button>
              </div>
              <div className="flex items-center gap-x-4 mb-5 md:px-7">
                {cart.some((item) => item.id === product.id) ? (
                  <button
                    className="flex items-center bg-[#3341C1] text-white gap-x-2 rounded py-4 px-8 font-medium text-lg"
                    onClick={() => dispatch(REMOVE_FROM_CART(product))}
                  >
                    Remove from cart
                  </button>
                ) : (
                  <button
                    className="flex items-center bg-[#3341C1] text-white gap-x-2 rounded py-4 px-8 font-medium text-lg"
                    onClick={() => dispatch(ADD_TO_CART(product))}
                  >
                    <span>Add to cart</span>
                    <HiArrowLongRight />
                  </button>
                )}
                <button className="text-[#161616] border border-[#161616] p-4 rounded">
                  <HiOutlineHeart size={24} />
                </button>
              </div>
            </div>
            {["Description", "Listings", "Status"].map((text) => {
              return (
                <div
                  key={text}
                  className="flex border-b border-grey md:last-of-type:border-none items-center justify-between py-[20px] md:px-7"
                >
                  <p>{text}</p>
                  <HiChevronDown size={24} />
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
};

export default Product;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const pid = context.params?.pid;
  const product = getProductByName(pid);
  return {
    props: {
      product,
    },
  };
};
