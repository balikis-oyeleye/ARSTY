import Image from "next/image";
import React from "react";
import filter from "../../assets/svg/Frame 34.svg";
import Slider from "rc-slider";
import { categories, artists } from "../../data/products";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import {
  FILTER_BY_CREATORS,
  FILTER_BY_PRICE,
  FILTER_BY_CATEGORY,
  UN_FILTER_BY_CATEGORY,
  UN_FILTER_BY_CREATORS,
} from "../../features/product/productSlice";

const Filters = ({ setToggleFilter }: filterProps) => {
  const dispatch = useDispatch();
  const priceFilter = useSelector((state: RootState) => state.product.price);

  const handleCreatorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      dispatch(FILTER_BY_CREATORS(e.target.value));
    } else if (!e.target.checked) {
      dispatch(UN_FILTER_BY_CREATORS(e.target.value));
    }
  };
  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      dispatch(FILTER_BY_CATEGORY(e.target.value));
    } else if (!e.target.checked) {
      dispatch(UN_FILTER_BY_CATEGORY(e.target.value));
    }
  };

  return (
    <div className="flex items-center justify-center flex-col gap-x-2">
      <div className="flex items-start gap-x-2">
        <Image src={filter} width={32} height={32} />
        <p className="font-satoshi text-2xl">Filters</p>
      </div>
      <h4 className="my-4">By category</h4>
      <div className="flex flex-col">
        {categories.map((category) => {
          return (
            <label htmlFor={category} key={category} className="space-x-2">
              <input
                type="checkbox"
                name={category}
                value={category}
                id={category}
                onChange={handleCategoryChange}
                className="bg-[#D9D9D9] border-none rounded-[5px] text-[#D9D9D9] checked:bg-black"
              />
              <span>{category}</span>
            </label>
          );
        })}
      </div>
      <h4 className="my-4">By price</h4>
      {typeof priceFilter === "object" && (
        <p className="mb-4">
          ${priceFilter[0]}.00 - ${priceFilter[1]}.00
        </p>
      )}
      <Slider
        range
        allowCross={false}
        defaultValue={[1, 1]}
        min={1}
        max={10}
        onChange={(e) => typeof e === "object" && dispatch(FILTER_BY_PRICE(e))}
      />
      <h4 className="my-4">By creator</h4>
      <div className="flex flex-col">
        {artists.map((artist) => {
          return (
            <label htmlFor={artist} key={artist} className="space-x-2">
              <input
                type="checkbox"
                name=""
                onChange={handleCreatorChange}
                value={artist}
                id={artist}
                className="bg-[#D9D9D9] border-none rounded-[5px] text-[#D9D9D9] checked:bg-black"
              />
              <span>{artist}</span>
            </label>
          );
        })}
      </div>
      <button
        className="bg-[#3247e2] mt-5 px-4 py-2 rounded text-white"
        onClick={() => setToggleFilter(false)}
      >
        Show results
      </button>
    </div>
  );
};

export default Filters;
