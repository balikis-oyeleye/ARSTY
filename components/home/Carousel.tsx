import React from "react";
import { Carousel as Slider } from "flowbite-react";

const Carousel = ({ img1, img2, img3, img4, img5 }: carouselProp) => {
  const images = [img1, img2, img3, img4, img5];

  let settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    cssEase: "linear",
    pauseOnHover: false,
  };

  return (
    <>
      <div className="h-[550px] min-w-[350px]">
        <Slider slideInterval={1000} className="slide">
          {images.map((image, index) => {
            return <img src={image.src} alt="slider" key={index} width={350} />;
          })}
        </Slider>
      </div>
    </>
  );
};

export default Carousel;
