import React from "react";
import Head from "../../../components/common/Head";
import Breadcrumb from "../../../components/common/Breadcrumb";
import Empty from "../../../assets/images/empty.png";
import { BsX } from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../app/store";
import {
  REMOVE_FROM_CART,
  INCREASE_ITEM,
  DECREASE_ITEM,
} from "../../../features/cart/cartSlice";
import Image from "next/image";

const Cart = () => {
  const router = useRouter();

  const cart = useSelector((state: RootState) => state.cart.cartItems);

  const total = useSelector((state: RootState) => {
    return state.cart.cartItems.reduce((prev, current) => {
      prev += current.price * current.quantity;
      return prev;
    }, 0);
  });

  const dispatch = useDispatch();

  const navigate = () => {
    if (cart.length === 0) return alert("Cart is Empty");
    else {
      router.push("/marketplace/cart/shipping");
    }
  };

  return (
    <>
      <Head headTitle="Cart | ARTSY" />
      <div className="mt-8">
        <Breadcrumb isHidden />
      </div>
      <div className="bg-[#3A3A3A] w-[280px] rounded-[40px] flex h-[50px] items-center justify-between mx-auto mt-8 md:hidden">
        <div className="bg-white ml-[30px] my-1 px-[34px] py-[7px] rounded-[27px]">
          Shop
        </div>
        <span className="text-white text-lg mr-[30px]">Scheduled</span>
      </div>
      <main className="my-8 font-satoshi container mx-auto px-2 xs:px-0 space-y-6 h-[520px] md:h-full overflow-auto">
        {cart.length ? (
          cart.map((item, index) => {
            return (
              <div key={index} className="flex gap-x-2">
                <img
                  src={item.image.src}
                  className="w-[125px] h-[125px] md:w-[210px] md:h-[210px]"
                />
                <div className="w-4/5">
                  <div className="flex items-center justify-between">
                    <h5 className="italic text-base md:text-2xl text-grey2">
                      {item.category}
                    </h5>
                    <button
                      className="w-[40px] h-[40px] border-2 grid place-items-center rounded-full"
                      onClick={() => dispatch(REMOVE_FROM_CART(item))}
                    >
                      <BsX size={24} className="text-[#888888]" />
                    </button>
                  </div>
                  <p className="text-xl font-bold text-grey my-[20px] md:text-2xl">
                    {item.name}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="border rounded-[10px] border-black md:text-2xl md:border-none">
                      <button
                        className="border-r px-3 border-black md:border-none"
                        onClick={() => dispatch(DECREASE_ITEM(item))}
                      >
                        -
                      </button>
                      <span className="px-3 md:text-2xl">{item.quantity}</span>
                      <button
                        className="border-l px-3 border-black md:text-2xl md:border-none"
                        onClick={() => dispatch(INCREASE_ITEM(item))}
                      >
                        +
                      </button>
                    </div>
                    <p className="md:text-2xl">
                      ${(item.price * item.quantity).toFixed(1)}0
                    </p>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="grid place-items-center space-y-2">
            <Image src={Empty} alt="empty cart" />
            <p className="font-bold text-lg">Your cart is empty</p>
            <p className="text-center">
              Looks like you have not added anything to your cart.
              <Link href={"/marketplace"}>
                <span className="mx-1 text-[#3341C1] cursor-pointer">
                  Go to marketplace
                </span>
              </Link>
              & explore categories
            </p>
          </div>
        )}
      </main>
      <div className="px-3 box-shadow3 pt-4">
        <div className="flex flex-col max-w-3xl mx-auto">
          <div className="border-b border-dashed border-[#616161]">
            <div className="flex items-center justify-between mb-4">
              <span>Products in cart : </span>
              <span>{cart.length} items</span>
            </div>
            <div className="flex items-center justify-between mb-4">
              <span>Shipping : </span>
              <span>$2.50</span>
            </div>
            <div className="flex items-center justify-between mb-4">
              <span>Total :</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
          <div className="flex items-center justify-between mb-4">
            <span>Grand total:</span>
            <span>${(total + 2.5).toFixed(2)}</span>
          </div>
          <button
            className="w-[250px] py-2 text-white bg-[#3341C1] rounded font-medium mx-auto my-4"
            onClick={navigate}
          >
            Proceed to checkout
          </button>
          <Link href={"/marketplace"}>
            <span className="mx-auto text-[#006CA2] underline text-lg mb-8 cursor-pointer">
              Continue shopping
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cart;
