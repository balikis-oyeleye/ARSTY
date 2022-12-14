import React from "react";

const Range = () => {
  return (
    <>
      <div className="slider">
        <div className="progress"></div>
      </div>
      <div className="range-input">
        <input
          type="range"
          name=""
          id=""
          min={10}
          max={5000}
          className="range-min"
        />
        <input
          type="range"
          name=""
          id=""
          min={10}
          max={5000}
          className="range-max"
        />
      </div>
    </>
  );
};

export default Range;
