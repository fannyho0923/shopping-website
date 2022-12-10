import React from "react";
import CommonLayout from "../../components/shop/common-layout";
// import { withApollo } from '../../helpers/apollo/apollo';
import ProductTab from "./common/product-tab";
import ProductSection from "./common/product_section";
import OutsideImagePage from "./product/imageOutsidePage";
import HeaderOne from "../../components/headers/header-one";
const ThumbnailOutside = (props) => {
  return (
    // <CommonLayout parent="home" title="product">
    <>
      <HeaderOne
        {...props}
        noTopBar={true}
        logoName={"logo.png"}
        topClass="top-header"
      />
      <OutsideImagePage />
      <ProductTab />
    </>
    // </CommonLayout>
  );
};

export default ThumbnailOutside;
