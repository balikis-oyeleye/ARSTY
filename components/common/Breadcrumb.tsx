import React from "react";
import Breadcrumbs from "nextjs-breadcrumbs";

const Breadcrumb = () => {
  return (
    <div className="md:hidden">
      <Breadcrumbs useDefaultStyle rootLabel="Home" />
    </div>
  );
};

export default Breadcrumb;
