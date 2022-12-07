import React from "react";
import Link from "next/link";

const Upcoming = () => {
  return (
    <section className="upcoming md:h-[780px] -z-10 mt-32 h-[336px] overflow-hidden py-8 px-6 sm:px-0">
      <div className="upcoming-container container mx-auto px-2 xs:px-0 h-full grid place-items-center text-white font-stix md:place-items-end">
        <div className="flex flex-col gap-y-2 px-2 md:mb-3 md:flex-row w-full md:justify-between">
          <div className="flex items-center gap-x-2 md:gap-x-4">
            <h4 className="md:text-6xl">01</h4>
            <div className="space-y-2">
              <h4 className="text-xl md:text-3xl md:w-[380px]">MONALISA REDEFINED IN STYLE.</h4>
              <p>Start on : 08:00 GTS . Monday</p>
              <p className="text-[10px] md:text-base lg:w-[606px]">GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR HIGHEST AND LOWEST BIDS.</p>
            </div>
          </div>
          <div className="flex self-end gap-x-6 items-center" >
            <Link href='/auction'>
              <span className='border-b cursor-pointer'>See more</span>
            </Link>
            <button className="border cursor-pointer p-2 rounded-[10px]">
              <Link href="/drop">Set a reminder</Link>
            </button>
          </div></div>
      </div>
    </section>
  );
};

export default Upcoming;
