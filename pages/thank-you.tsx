import Image from "next/image";
import Link from "next/link";
import React from "react";
import Head from "../components/common/Head";
import Thank from "../assets/images/thank.png";
import Thank2 from "../assets/images/Woman get online delivery.png";

const ThankYou = () => {
  return (
    <>
      <Head headTitle="Thank You | ARTSY" />
      <section className="font-satoshi mb-16">
        <div className="text-center">
          <div className="mb-8">
            <div className="xs:hidden">
              <Image src={Thank} alt={"thank"} />
            </div>
            <div className="hidden xs:block">
              <Image src={Thank2} alt={"thank"} />
            </div>
          </div>
          <p className="text-lg font-medium md:text-3xl">
            Hey Balikis, thank you for your purchase.
          </p>
          <p className="text-base text-[#616161] md:text-2xl">
            You are amazing. Cheers to being
            <Link href={"/"}>
              <a href="" className="text-blue-600 ml-2">
                ARTSY!
              </a>
            </Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default ThankYou;
