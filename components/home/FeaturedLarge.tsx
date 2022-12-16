import React from "react";
import Image from "next/image";
import { featuredProduct } from "../../data/featured";
import Creators from "../common/Creators";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

const FeaturedLarge = () => {
  return (
    <div className="">
      {featuredProduct.map((product, index) => {
        return (
          <div
            key={product.id}
            className={`md:flex border-t-[0.5px] pt-8 mb-8 ${
              index === 1 ? "flex-row-reverse" : "flex-row"
            } gap-x-[37px]`}
          >
            <div className="lg:min-w-[601px] flex-1 md:h-full">
              <div className="relative">
                <Image src={product.img} />
                <div className="overlay absolute top-0 w-full bottom-1 md:hidden py-2 flex flex-col items-end pr-6">
                  <h3 className="font-semibold font-clashDisplay text-white text-[30px]">
                    {product.title}
                  </h3>
                  <div className="text-white absolute bottom-0 border border-white p-2 rounded-full">
                    <Link
                      passHref
                      legacyBehavior
                      href={`/marketplace/${product.title.toLocaleLowerCase()}`}
                    >
                      <a href="">
                        <BsArrowRight size={24} />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-[38px] h-full flex-1">
              <h3 className="font-stix text-2xl lg:text-[40px] text-grey font-bold hidden md:block">
                {product.title}
              </h3>
              <p className="lg:text-2xl text-base font-normal text-grey font-satoshi">
                {product.text}
              </p>
              <div className="flex items-center justify-between">
                <Creators />
                <p className="font-satoshi font-medium lg:text-2xl text-base text-grey ">
                  64 major creators
                </p>
                <div className="text-grey2 border border-grey2 p-2 rounded-full hidden md:block">
                  <Link
                    passHref
                    legacyBehavior
                    href={`/marketplace/${product.title.toLocaleLowerCase()}`}
                  >
                    <a href="">
                      <BsArrowRight size={24} />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FeaturedLarge;
