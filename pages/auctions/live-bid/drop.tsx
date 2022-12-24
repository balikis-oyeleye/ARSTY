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
      <main className="container mx-auto px-2 xs:px-0 font-satoshi">
        {drops.map((drop) => (
          <div key={drop.id}>
            <div className="relative">
              <Image src={drop.image} />
              <div className="absolute top-2 text-white right-2">
                {drop.state}
              </div>
              <div className="absolute text-white bottom-4 time left-2 right-2 pl-7">
                <p>Time remaining</p>
                <p>{drop.time}</p>
              </div>
            </div>
            <div>
              <p>{drop.date}</p>
              <h4>{drop.name}</h4>
              <p>{drop.text}</p>
              <p>
                Creator: <span>{drop.creator}</span>
              </p>
              <a href="#">{drop.type}</a>
            </div>
          </div>
        ))}
      </main>
      <Newsletter />
    </>
  );
};

export default Drop;
