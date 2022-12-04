import type { NextPage } from "next";
import Head from '../components/common/Head'
import Carousel from "../components/home/Carousel";
import girl_glass from '../assets/images/girl-glasses.png'
import hand_leaf from '../assets/images/hand-leaf.png'
import girl from '../assets/images/girl.png'
import kangaroo from '../assets/images/kangaroo.png'
import hand_tree from '../assets/images/hand-tree.png'

const Home: NextPage = () => {
  return (
    <>
      <Head />
      <section className="container mx-auto my-[50px] space-y-6 px-2 xs:px-0">
        <div><h2 className="font-clashDisplay md:font-semibold font-medium text-[32px] md:text-[80px] text-grey md:text-dark text-center mx-auto md:leading-[156.7%] leading-[48px]">Photography is poetry & beautiful untold stories</h2></div>
        <div className="lg:w-[928px] mx-auto"><p className="font-satoshi font-medium text-base text-dark md:text-[28px] text-center md:leading-[156.7%]">Flip through more than 10,000 vintage shots, old photographs, historic images and captures seamlessly in one place. Register to get top access.</p></div>
      </section>
      <section className="slider w-full">
        <Carousel img1={girl_glass} img2={hand_leaf} img3={girl} img4={kangaroo} img5={hand_tree} />
      </section>
    </>
  );
};

export default Home;
