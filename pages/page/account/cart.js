import React from "react";
import CommonLayout from "../../../components/shop/common-layout";
import CartPage from "./common/cart-page";
import HeaderOne from "../../../components/headers/header-one";

const Wishliat = (props) => {
  return (
    <>
      <HeaderOne
        {...props}
        noTopBar={true}
        logoName={"logo.png"}
        topClass="top-header"
      />
      {/* <CommonLayout parent="home" title="cart"> */}
      <CartPage />
      {/* </CommonLayout> */}
    </>
  );
};

export default Wishliat;
