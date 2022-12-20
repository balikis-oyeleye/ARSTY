import React from "react";
import Carousel from "../../components/home/Carousel";
import girl_glass from "../../assets/images/girl-glasses.png";
import hand_leaf from "../../assets/images/hand-leaf.png";
import girl from "../../assets/images/girl.png";
import kangaroo from "../../assets/images/kangaroo.png";
import hand_tree from "../../assets/images/hand-tree.png";

const ImageSlider = () => {
  return (
    <div className="hidden gap-x-3 md:flex -ml-[107px] items-center">
      <Carousel
        img1={girl_glass}
        img2={hand_leaf}
        img3={girl}
        img4={kangaroo}
        img5={hand_tree}
        interval={500}
      />
      <Carousel
        img1={hand_leaf}
        img2={girl}
        img3={kangaroo}
        img4={hand_tree}
        img5={girl_glass}
        interval={1100}
      />
      <Carousel
        img1={girl}
        img2={kangaroo}
        img3={hand_tree}
        img4={girl_glass}
        img5={hand_leaf}
        interval={1300}
      />
      <Carousel
        img1={kangaroo}
        img2={hand_tree}
        img3={girl_glass}
        img4={hand_leaf}
        img5={girl}
        interval={900}
      />
      <Carousel
        img1={hand_tree}
        img2={girl_glass}
        img3={hand_leaf}
        img4={girl}
        img5={kangaroo}
        interval={1000}
      />
    </div>
  );
};

export default ImageSlider;
