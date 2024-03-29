import React, { Fragment, useEffect } from "react";
import HeaderOne from "../../../../components/headers/header-one";
import ParallaxSection from "./parallax-section";
import CopyRight from "../../../../components/footers/common/copyright";

const Parallax = () => {
  useEffect(() => {
    document.documentElement.style.setProperty("--theme-deafult", "#866e6c");
  });
  return (
    <Fragment>
      <HeaderOne noTopBar={true} topClass="top-header" logoName="logo/2.png" />
      <ParallaxSection />
      <footer>
        <CopyRight />
      </footer>
    </Fragment>
  );
};

export default Parallax;
