import React from "react";
import Breadcrumb from "../../components/common/Breadcrumb";
import Head from "../../components/common/Head";
import img1 from "../../assets/images/Rectangle 247.png";
import img2 from "../../assets/images/Rectangle 245.png";
import img3 from "../../assets/images/Rectangle 246.png";
import img4 from "../../assets/images/Rectangle 25.png";
import img5 from "../../assets/images/Rectangle 245(1).png";
import Image from "next/image";
import { AiFillHeart } from "react-icons/ai";

const Auction = () => {
  const images = [img1, img2, img3];
  const images_2 = [img4, img5];
  return (
    <>
      <Head headTitle="Auction | ARTSY" />
      <div className="hidden md:block container mx-auto mt-14">
        <Breadcrumb />
      </div>
      <main className="font-satoshi">
        <div className="mt-16 mb-[35px] container mx-auto px-2 xs:px-0">
          <p className="font-medium text-xl text-grey">
            Here’s an overview of products actively on auction, explore!
          </p>
        </div>
        <section className="mb-10 container mx-auto px-2 xs:px-0">
          <div className="flex overflow-auto">
            {images.map((image, index) => (
              <div key={index} className="h-auto cursor-pointer">
                <img
                  src={image.src}
                  alt="auctions"
                  className="sm:min-w-[468px] min-w-[320px]"
                />
              </div>
            ))}
          </div>
        </section>
        <section className="container mx-auto px-2 xs:px-0 font-satoshi">
          <p className="font-medium text-xl md:text-[36px] text-grey">
            Top bids from popular creators
          </p>
          <div className="my-7 flex flex-col gap-y-12 md:flex-row justify-between gap-x-4">
            {images_2.map((image, index) => (
              <div key={index}>
                <div className="auction px-[20px] pt-9 relative">
                  <Image src={image} alt="auctions" />
                  <div>
                    <p className="flex justify-between">
                      <span className="font-bold text-xl text-grey">
                        Out of the box
                      </span>
                      <span className="font-bold text-xl text-grey">
                        0.57 ETH
                      </span>
                    </p>
                  </div>
                  <div className="absolute top-1 right-5 border rounded-full p-[1px]">
                    <AiFillHeart
                      size={24}
                      className={` ${
                        index === 0 ? "text-red-600" : "text-[#E8E0E0]"
                      }`}
                    />
                  </div>
                </div>
                <div>
                  <p className="text-xl my-[15px] font-medium text-grey2">
                    Creator:{" "}
                    <span className="text-[#006ca2] font-bold ml-4">
                      Jacob Banks
                    </span>
                  </p>
                  <p className="text-xl my-[15px] font-medium text-grey2">
                    Date:{" "}
                    <span className="text-grey font-bold ml-4">12/08/22</span>
                  </p>
                  <div className="flex items-center justify-between bg-[#F6F4F4] py-[9px] px-3">
                    <div>
                      <p className="text-grey2 text-lg mb-4">Current bid</p>
                      <p className="text-grey font-bold text-xl">0.987 ETH</p>
                    </div>
                    <button className="bg-[#3341C1] py-[12.1021px] px-[44.2485px] text-white rounded">
                      Place bid
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Auction;
