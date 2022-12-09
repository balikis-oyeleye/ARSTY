import React from "react";
import Slider from "react-slick";

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
      <div className="h-[550px] w-[350px]">
        <Slider {...settings}>
          {images.map((image, index) => {
            return (
              <div key={index}>
                <img src={image.src} alt="slider" />
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default Carousel;
