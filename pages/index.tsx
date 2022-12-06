import type { NextPage } from "next";
import Head from '../components/common/Head'
import FeaturedLarge from "../components/home/FeaturedLarge";
import ImageSlider from "../components/home/ImageSlider";
import ImageStack from "../components/home/ImageStack";
import Upcoming from "../components/home/Upcoming";

const Home: NextPage = () => {
  return (
    <>
      <Head />
      <section className="container mx-auto my-[50px] space-y-6 px-2 xs:px-0">
        <div><h2 className="font-clashDisplay md:font-semibold font-medium text-[32px] md:text-[80px] text-grey md:text-dark text-center mx-auto md:leading-[156.7%] leading-[48px]">Photography is poetry & beautiful untold stories</h2></div>
        <div className="lg:w-[928px] mx-auto"><p className="font-satoshi font-medium text-base text-dark md:text-[28px] text-center md:leading-[156.7%]">Flip through more than 10,000 vintage shots, old photographs, historic images and captures seamlessly in one place. Register to get top access.</p></div>
      </section>
      <section className="slider w-full overflow-x-hidden">
        <ImageSlider />
        <ImageStack />
      </section>
      <section className="mt-8 container mx-auto px-2 sm:px-0">
        <h3 className="font-satoshi font-bold md:font-medium md:text-[48px] text-[28px] text-dark md:text-grey mb-[37px]">
          Featured products
        </h3>
        <FeaturedLarge />
      </section>
      <Upcoming />
    </>
  );
};

export default Home;
