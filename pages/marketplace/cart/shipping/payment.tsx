import React from "react";
import Image from "next/image";
import Breadcrumb from "../../../../components/common/Breadcrumb";
import Head from "../../../../components/common/Head";
import lock from "../../../../assets/svg/Vector(2).svg";
import radio from "../../../../assets/svg/carbon_radio-button-checked.svg";
import metamask from "../../../../assets/images/MetaMask - jpeg.png";
import coinbase from "../../../../assets/images/Coinbase - png.png";
import wallet from "../../../../assets/images/WalletConnect - jpeg.png";
import phantom from "../../../../assets/images/Phantom - jpeg.png";
import add from "../../../../assets/images/Group 526.png";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { EMPTY_CART } from "../../../../features/cart/cartSlice";

const Payment = () => {
  const images = [metamask, coinbase, wallet, phantom, add];
  const router = useRouter();

  const dispatch = useDispatch();

  const navigate = () => {
    router.push("/thank-you");
    dispatch(EMPTY_CART());
  };

  return (
    <>
      <Head headTitle="Payment | ARTSY" />
      <div className="my-8 container mx-auto px-2 xs:px-0">
        <Breadcrumb isHidden />
      </div>
      <section className="container mx-auto px-2 xs:px-0 font-satoshi mb-8 max-w-[768px]">
        <div className="flex items-center gap-x-2">
          <Image src={lock} alt="lock" />
          <p className="font-normal text-base text-[#747474]">Secure server</p>
        </div>
        <div className="flex items-center gap-x-2 my-[30px]">
          <Image src={radio} alt="radio" />
          <p className="font-medium text-xl text-[#292929]">
            Select your wallet
          </p>
        </div>
        <p className="text-[#616161] text-base">
          Connect with one of our available wallet providers or add and connect
          a new wallet.
        </p>
        <div className="text-center my-8">
          {images.map((image, index) => (
            <Image src={image} alt="wallets" key={index} />
          ))}
        </div>
        <form action="" className="flex flex-col gap-y-6" onSubmit={navigate}>
          <label
            htmlFor="wallet type"
            className="flex flex-col gap-y-2 text-lg text-[#888888]"
          >
            Wallet type
            <input
              type="text"
              id="wallet type"
              required
              className="bg-[#f2f2f2] border-[0.5px] rounded-[10px] border-[#747474]"
            />
          </label>
          <div className="flex flex-col">
            <label htmlFor="key" className="text-lg text-[#888888] mb-2">
              Key
            </label>
            <div className="flex items-center bg-[#f2f2f2] rounded-[10px] border-[0.5px] border-[#747474]">
              <input
                type="text"
                id="key"
                className="border-none bg-[#f2f2f2]"
              />
              <div className="ml-auto">
                <Image src={metamask} alt="metamask" />
              </div>
            </div>
          </div>
          <label
            htmlFor="expiry"
            className="flex flex-col gap-y-2 text-lg text-[#888888]"
          >
            Expiry date
            <input
              type="text"
              id="expiry"
              required
              className="bg-[#f2f2f2] border-[0.5px] rounded-[10px] border-[#747474]"
            />
          </label>
          <label
            htmlFor="safe code"
            className="flex flex-col gap-y-2 text-lg text-[#888888]"
          >
            Safe code
            <input
              type="number"
              id="safe code"
              required
              className="bg-[#f2f2f2] border-[0.5px] rounded-[10px] border-[#747474]"
            />
          </label>
          <label
            htmlFor="check"
            className="text-[#747474] flex gap-x-2 text-base items-center"
          >
            <input
              type="checkbox"
              name=""
              id="check"
              className="border-[#D9D9D9] bg-[#D9D9D9]"
            />
            <span>
              Save my wallet details & information for future transactions
            </span>
          </label>
          <button className="w-[250px] py-3 text-white bg-[#3341C1] rounded font-medium mx-auto my-4">
            Confirm
          </button>
        </form>
      </section>
    </>
  );
};

export default Payment;
