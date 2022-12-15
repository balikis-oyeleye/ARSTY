import React from "react";
import Breadcrumbs from "nextjs-breadcrumbs";

const Breadcrumb = ({ isHidden }: breadcrumbProps) => {
  return (
    <div className={`${isHidden ? "md:hidden" : ""}`}>
      <Breadcrumbs useDefaultStyle rootLabel="Home" />
    </div>
  );
};

export default Breadcrumb;
