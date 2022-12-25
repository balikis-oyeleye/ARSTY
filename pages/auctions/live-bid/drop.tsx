import Image from "next/image";
import React from "react";
import Breadcrumb from "../../../components/common/Breadcrumb";
import Head from "../../../components/common/Head";
import Newsletter from "../../../components/home/Newsletter";
import { drops } from "../../../data/drops";

const Drop = () => {
  return (
    <>
      <Head headTitle="Drop | ARTSY" />
      <div className="hidden md:block container mx-auto mt-14">
        <Breadcrumb />
      </div>
      <div className="my-[61px] text-center font-satoshi space-y-4">
        <h2 className="font-medium md:text-[48px] md:leading-[175.5%] text-3xl">
          Upcoming drops
        </h2>
        <p className="text-lg text-[#616161] w-[291px] mx-auto">
          You may turn on notifications so that no drop will miss you.
        </p>
        <button className="w-[262px] h-[52px] font-medium text-[22.45px] border border-black rounded-[6.2px]">
          Notify me
        </button>
      </div>
      <main className="container mx-auto px-2 xs:px-0 font-satoshi space-y-12">
        {drops.map((drop, index) => (
          <div
            key={drop.id}
            className="flex flex-col sm:flex-row gap-x-9 items-center justify-center"
          >
            <div className="relative max-w-[398px]">
              <div className="sm:hidden">
                <Image src={drop.image} alt={drop.name} className="" />
              </div>
              <div className="hidden sm:block">
                <Image src={drop.image2} alt={drop.name} className="" />
              </div>
              <div
                className={`absolute top-2 text-white right-2 sm:hidden font-medium ${
                  drop.color
                } px-[18px] py-[4px] ${
                  index === 0 ? "rounded-[5px]" : "rounded-[12px]"
                }`}
              >
                {drop.state}
              </div>
              <div className="absolute text-white bottom-4 time left-2 right-2 pl-7 max-w-[368px]">
                <p>{drop.remain}</p>
                <p>{drop.time}</p>
              </div>
            </div>
            <div className="mt-[20px] sm:mt-0 flex flex-col items-start">
              <div
                className={`text-white font-medium ${drop.color} px-[18px] py-[4px] hidden sm:block rounded-[10px]`}
              >
                {drop.state}
              </div>
              <p className="">{drop.date}</p>
              <h4 className="text-2xl my-[15px] font-medium">{drop.name}</h4>
              <p className="text-[15px] text-[#616161] sm:w-[433px]">
                {drop.text}
              </p>
              <p className="text-xl my-[15px] font-medium">
                Creator: <span className="text-[#006ca2]">{drop.creator}</span>
              </p>
              <a href="#" className="underline text-[#006ca2]">
                {drop.type}
              </a>
            </div>
          </div>
        ))}
      </main>
      <Newsletter />
    </>
  );
};

export default Drop;
