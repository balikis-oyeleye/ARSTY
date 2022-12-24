import React from "react";
import Breadcrumb from "../../../components/common/Breadcrumb";
import Head from "../../../components/common/Head";
import Newsletter from "../../../components/home/Newsletter";

const Drop = () => {
  return (
    <>
      <Head headTitle="Drop | ARTSY" />
      <div className="hidden md:block container mx-auto mt-14">
        <Breadcrumb />
      </div>
      <Newsletter />
    </>
  );
};

export default Drop;
