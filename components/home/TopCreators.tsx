import React from "react";

const TopCreators = () => {
  return (
    <section className="h-[251px] md:h-[400px] overflow-hidden bg-[#E2E2E2] mt-[100px] font-clashDisplay">
      <div className="container mx-auto px-2 xs:px-0 relative">
        <div className="flex justify-between">
          <h3 className="font-semibold text-xl text-[#161616] min-w-[264px] max-w-[264px]">
            TOP CREATORS OF THE WEEK
          </h3>
          <ul className="flex md:flex-col  gap-x-3">
            <li className="text-[10px] text-dark md:text-[20px]">Editorials</li>
            <li className="text-[10px] text-dark md:text-[20px]">Fashion</li>
            <li className="text-[10px] text-dark md:text-[20px]">Fashion</li>
            <li className="text-[10px] text-dark md:text-[20px]">Blueprint</li>
          </ul>
        </div>
        <p className="text-xs md:text-2xl text-text_fade">
          “Everything always looked better in black and white. Everything always
          as if it were the first time; there’s always more people in a black
          and white photograph. It just makes it seem that there were more
          people at a gig, more people at a football match, than with color
          photography. Everything looks more exciting.”– Jack Lowden
        </p>
        <div className="absolute font-bold text-3xl right-2 top-1/2 md:top-2/3 -translate-y-1/2">
          CIRCA
        </div>
        <div className="text-end text-6xl line-through font-bold text-grey">
          1985
        </div>
      </div>
    </section>
  );
};

export default TopCreators;
