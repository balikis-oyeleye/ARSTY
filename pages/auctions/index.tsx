import React from "react";
import Breadcrumb from "../../components/common/Breadcrumb";
import Head from "../../components/common/Head";
import Slider from "react-slick";
import img1 from "../../assets/images/Rectangle 247.png";
import img2 from "../../assets/images/Rectangle 245.png";
import img3 from "../../assets/images/Rectangle 246.png";
import img4 from "../../assets/images/Rectangle 25.png";
import img5 from "../../assets/images/Rectangle 245(1).png";

const Auction = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const images = [img1, img2, img3];
  return (
    <>
      <Head headTitle="Auction | ARTSY" />
      <div className="hidden md:block container mx-auto mt-14">
        <Breadcrumb />
      </div>
      <main className="font-satoshi">
        <div className="mt-16 mb-[35px] container mx-auto px-2 xs:px-0">
          <p className="font-medium text-xl text-grey">
            Here’s an overview of products actively on auction, explore!
          </p>
        </div>
        <section className="mb-10">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="w-[485px] h-auto cursor-pointer">
                <img src={image.src} alt="" />
              </div>
            ))}
          </Slider>
        </section>
        <section></section>
      </main>
    </>
  );
};

export default Auction;
