import React from "react";
import Breadcrumb from "../../components/common/Breadcrumb";
import { BiSearch } from "react-icons/bi";
import Filters from "../../components/marketplace/Filters";
import Products from "../../components/marketplace/Products";
import Head from "../../components/common/Head";

const Marketplace = () => {
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
            <select
              name=""
              id=""
              className="border-[0.4px] rounded-lg block md:hidden border-none"
            >
              <option value="" hidden>
                Filters
              </option>
            </select>
            <select
              name=""
              id=""
              className="border-[0.4px] rounded-lg border-none"
            >
              <option value="sort by" hidden>
                Sort by
              </option>
              <option value="">Price- High to Low</option>
              <option value="">Price- Low to High</option>
              <option value="">Ascending</option>
              <option value="">Descending</option>
            </select>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-2 xs:px-0 flex gap-x-[57px]">
        <Filters />
        <Products />
      </section>
    </>
  );
};

export default Marketplace;
