import Image from "next/image";
import React, { useState } from "react";
import filter from "../../assets/svg/Frame 34.svg";
import Slider from "rc-slider";

const Filters = () => {
  const [range, setRange] = useState<any>([1, 1]);

  const rangeValue = (arr: any) => {
    setRange(arr);
  };

  const categories = [
    "Editorials",
    "Fashion",
    "Optics",
    "Art & Museum",
    "Nature",
  ];

  const artists = ["Ali Dawa", "Adekunle Chiroma", "Hatake Kakashi"];
  return (
    <aside className="hidden md:block mt-8">
      <div className="flex items-center gap-x-2 border-b-2 border-black pb-2">
        <Image src={filter} width={32} height={32} />
        <p className="font-satoshi text-2xl">Filter</p>
      </div>
      <h4 className="my-4">By category</h4>
      <div className="flex flex-col">
        {categories.map((category) => {
          return (
            <label htmlFor={category} key={category} className="space-x-2">
              <input
                type="checkbox"
                name=""
                id={category}
                className="bg-[#D9D9D9] border-none rounded-[5px] text-[#D9D9D9] checked:bg-black"
              />
              <span>{category}</span>
            </label>
          );
        })}
      </div>
      <h4 className="my-4">By price</h4>
      <p className="mb-4">
        ${range[0]}.00 - ${range[1]}.00
      </p>
      <Slider
        range
        allowCross={false}
        defaultValue={[1, 1]}
        min={1}
        max={10}
        onChange={(e) => rangeValue(e)}
      />
      <h4 className="my-4">By category</h4>
      <div className="flex flex-col">
        {artists.map((artist) => {
          return (
            <label htmlFor={artist} key={artist} className="space-x-2">
              <input
                type="checkbox"
                name=""
                id={artist}
                className="bg-[#D9D9D9] border-none rounded-[5px] text-[#D9D9D9] checked:bg-black"
              />
              <span>{artist}</span>
            </label>
          );
        })}
      </div>
    </aside>
  );
};

export default Filters;
