import React from "react";
import { Carousel as Slider } from "flowbite-react";

const Carousel = ({ img1, img2, img3, img4, img5, interval }: carouselProp) => {
  const images = [img1, img2, img3, img4, img5];

  return (
    <>
      <div className="h-[550px] min-w-[350px]">
        <Slider slideInterval={interval} className="slide">
          {images.map((image, index) => {
            return (
              <img
                src={image.src}
                alt="slider"
                key={index}
                width={350}
                className="pr-1"
              />
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default Carousel;
