import Image from "next/image";
import React from "react";
import filter from "../../assets/svg/Frame 34.svg";

const Filters = () => {
  return (
    <aside>
      <div className="flex items-center">
        <Image src={filter} width={32} height={32} />
        <p>Filter</p>
      </div>
    </aside>
  );
};

export default Filters;
