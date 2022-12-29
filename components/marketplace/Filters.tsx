import Image from "next/image";
import React, { useState } from "react";
import filter from "../../assets/svg/Frame 34.svg";
import Slider from "rc-slider";
import { categories, artists } from "../../data/products";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import {
  FILTER_PRODUCTS,
  FILTER_BY_PRICE,
} from "../../features/product/productSlice";

const Filters = () => {
  const [range, setRange] = useState<any>([1, 1]);
  const [creators, setCreators] = useState<string[]>([]);
  const dispatch = useDispatch();

  const rangeValue = (arr: any) => {
    setRange(arr);
    dispatch(FILTER_BY_PRICE(arr));
  };

  const handleCreatorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setCreators([...creators, e.target.value]);
    } else if (!e.target.checked) {
      setCreators((prev) => prev.filter((item) => item !== e.target.value));
    }
  };

  console.log(range);

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
      <h4 className="my-4">By creator</h4>
      <div className="flex flex-col">
        {artists.map((artist) => {
          return (
            <label htmlFor={artist} key={artist} className="space-x-2">
              <input
                type="checkbox"
                name=""
                onChange={(e) => dispatch(FILTER_PRODUCTS(e.target.value))}
                value={artist}
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
