import React, { useEffect, useState } from "react";
import CommonLayout from "../../../components/shop/common-layout";
import { firebase_app } from "../../../config/base";
import CheckoutPage from "./common/checkout-page";
import Login from "../../page/account/login-auth";
import HeaderOne from "../../../components/headers/header-one";
const Checkout = (props) => {
  const [currentUser, setCurrentUser] = useState(false);
  useEffect(() => {
    // firebase_app.auth().onAuthStateChanged(setCurrentUser);
  });
  return (
    <>
      {currentUser !== null ? (
        <>
          {/* <CommonLayout parent="home" title="checkout"> */}
          <HeaderOne
            {...props}
            noTopBar={true}
            logoName={"logo.png"}
            topClass="top-header"
          />
          <CheckoutPage />
          {/* </CommonLayout> */}
        </>
      ) : (
        <Login />
      )}
    </>
  );
};

export default Checkout;
