import React, { useState } from "react";
import Breadcrumb from "../../components/common/Breadcrumb";
import { BiSearch, BiX } from "react-icons/bi";
import Filters from "../../components/marketplace/Filters";
import Products from "../../components/marketplace/Products";
import Head from "../../components/common/Head";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import { SORT_PRODUCT } from "../../features/product/productSlice";
import MobileFilter from "../../components/marketplace/MobileFilters";

const Marketplace = () => {
  const [toggleFilter, setToggleFilter] = useState(false);
  const products = useSelector((state: RootState) => state.product.products);
  const dispatch = useDispatch();

  return (
    <>
      <Head headTitle="Marketplace | ARTSY" />
      <div className="ml-3 mt-10 px-2 md:px-0">
        <Breadcrumb isHidden />
      </div>
      <section className="container mx-auto px-2 xs:px-0 flex gap-[72px] font-satoshi">
        <button className="rounded-md bg-[#F4F2F2] gap-x-2 text-[#999999] w-[215px] justify-center py-1 items-center hidden md:flex">
          <BiSearch size={24} />
          <span className="text-base">Search</span>
        </button>
        <div className="flex justify-between w-full rounded-xl box-shadow md:items-center py-1 px-2 flex-col md:flex-row">
          <p className="ml-3 text-[#BCB7B7] md:text-black italic mt-6 md:mt-0">
            See 1-6 of 15 results
          </p>
          <div className="flex items-center justify-between box-shadow2 p-2 md:p-0 rounded-xl md:rounded-none">
            <button
              className="border-[0.4px] rounded-lg block sm:hidden border-none"
              onClick={() => setToggleFilter(true)}
            >
              Filters
            </button>
            <select
              name=""
              id=""
              className="border-[0.4px] rounded-lg border-none ml-auto"
              onChange={(e) => dispatch(SORT_PRODUCT(e.target.value))}
            >
              <option value="sort by" hidden>
                Sort by
              </option>
              <option value="Price - High to Low">Price - High to Low</option>
              <option value="Price - Low to High">Price - Low to High</option>
              <option value="Ascending">Ascending</option>
              <option value="Descending">Descending</option>
            </select>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-2 xs:px-0 flex gap-x-[57px]">
        <Filters />
        {products.length ? (
          <Products products={products} />
        ) : (
          <div className="grid place-items-center w-full">
            <h1>No Results Found</h1>
          </div>
        )}
      </section>
      <div
        className={`fixed bg-white ${
          toggleFilter ? "bottom-0 h-full" : "-bottom-full"
        } w-full sm:hidden grid place-items-center transition-all duration-500`}
      >
        <BiX
          size={28}
          className="absolute top-2 right-2 cursor-pointer"
          onClick={() => setToggleFilter(false)}
        />
        <MobileFilter setToggleFilter={setToggleFilter} />
      </div>
    </>
  );
};

export default Marketplace;
