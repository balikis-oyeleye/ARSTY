import React from "react";
import Breadcrumb from "../../../../components/common/Breadcrumb";
import Head from "../../../../components/common/Head";
import { wallet, country, city } from "../../../../data/shippingLinks";
import Link from "next/link";
import { useRouter } from "next/router";

const Shipping = () => {
  const router = useRouter();
  return (
    <>
      <Head headTitle="Shipping | ARTSY" />
      <div className="my-8 container mx-auto px-2 xs:px-0">
        <Breadcrumb isHidden />
      </div>
      <section className="container mx-auto px-2 xs:px-0 font-satoshi mb-8">
        <form
          className="flex flex-col gap-y-6 max-w-[768px] mx-auto"
          onSubmit={() => router.push("/marketplace/cart/shipping/payment")}
        >
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="flex flex-col text-lg text-[#888888] font-normal"
            >
              Your email
              <input
                type="email"
                name=""
                required
                placeholder="oyeleyebal@gmail.com"
                id="email"
                className="bg-[#f2f2f2] border-[0.5px] border-[#747474] rounded-[10px]"
              />
            </label>
            <label
              htmlFor="checkbox"
              className="flex items-center gap-x-1 text-[13px] leading-[18px]"
            >
              <input
                type="checkbox"
                id="checkbox"
                className="rounded-[5px] bg-[#d9d9d9] border-[#d9d9d9]"
              />
              Get updates about new drops & exclusive offers
            </label>
          </div>
          <label
            htmlFor="wallet"
            className="flex flex-col text-lg text-[#888888] font-normal"
          >
            <span>Choose a wallet</span>
            <select
              name=""
              id="wallet"
              required
              className="bg-[#f2f2f2] border-[0.5px] border-[#747474] rounded-[10px]"
            >
              {wallet.map((item) => (
                <option value="" key={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
          <label
            htmlFor="city"
            className="flex flex-col text-lg text-[#888888] font-normal"
          >
            <span>City</span>
            <select
              name=""
              id="city"
              required
              className="bg-[#f2f2f2] border-[0.5px] border-[#747474] rounded-[10px]"
            >
              {city.map((item) => (
                <option value="" key={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
          <div className="flex flex-col gap-y-6 md:flex-row md:justify-between gap-x-4">
            <label
              htmlFor="country"
              className="flex flex-col text-lg text-[#888888] font-normal w-full"
            >
              <span>Country</span>
              <select
                name=""
                id="country"
                required
                className="bg-[#f2f2f2] border-[0.5px] border-[#747474]  rounded-[10px]"
              >
                {country.map((item) => (
                  <option value="" key={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
            <label
              htmlFor="postal"
              className="flex flex-col text-lg text-[#888888] font-normal w-full"
            >
              <span>Postal code</span>
              <input
                type="number"
                id="postal"
                required
                className="bg-[#f2f2f2] border-[0.5px] border-[#747474] rounded-[10px]"
              />
            </label>
          </div>
          <label
            htmlFor="phone"
            className="flex flex-col text-lg text-[#888888] font-normal"
          >
            <span>Phone Number</span>
            <input
              type="number"
              id="phone"
              required
              className="bg-[#f2f2f2] border-[0.5px] border-[#747474] rounded-[10px]"
            />
          </label>
          <button className="w-[250px] py-3 text-white bg-[#3341C1] rounded font-medium mx-auto my-4">
            Proceed to payment
          </button>
          <Link href={"/marketplace"}>
            <span className="mx-auto text-[#006CA2] underline text-lg mb-8 cursor-pointer">
              Continue shopping
            </span>
          </Link>
        </form>
      </section>
    </>
  );
};

export default Shipping;
