import React from "react";

const Newsletter = () => {
  return (
    <section className="mt-[66px] container mx-auto px-2 xs:px-0 space-y-1 md:border md:py-4 md:text-center mb-8 md:border-grey">
      <h3 className="font-stix font-normal text-xl text-grey md:text-3xl">
        NEWSLETTER
      </h3>
      <p className="font-satoshi text-grey text-[11px] md:text-2xl">
        Subscribe to get daily updates on new drops & exciting deals
      </p>
      <form
        action=""
        className="py-5 flex flex-col items-start md:items-center gap-y-6 md:flex-row gap-x-7 md:justify-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder="Enter your email here"
          className="w-full placeholder:font-satoshi placeholder:uppercase placeholder:text-grey placeholder:text-[10px] placeholder:font-medium outline-none md:w-1/2 h-[53px]"
        />
        <button className="w-[182px] bg-dark h-[53px] text-white uppercase text-xs font-medium border border-grey">
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default Newsletter;
