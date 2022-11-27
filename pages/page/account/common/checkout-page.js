import React, { useContext, useState } from "react";
import { Media, Container, Form, Row, Col, Button } from "reactstrap";
import CartContext from "../../../../helpers/cart";
import paypal from "../../../../public/assets/images/paypal.png";
import { PayPalButton } from "react-paypal-button-v2";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { CurrencyContext } from "../../../../helpers/Currency/CurrencyContext";

const CheckoutPage = () => {
  const cartContext = useContext(CartContext);
  // const cartItems = cartContext.state;
  const cartTotal = cartContext.cartTotal;
  const curContext = useContext(CurrencyContext);
  const symbol = curContext.state.symbol;
  const [obj, setObj] = useState({});
  const [payment, setPayment] = useState("stripe");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); // initialise the hook
  const router = useRouter();

  const checkhandle = (value) => {
    setPayment(value);
  };

  const onSubmit = (data) => {
    if (data !== "") {
      alert("You submitted the form and stuff!");
      router.push({
        pathname: "/page/order-success",
        state: { items: cartItems, orderTotal: cartTotal, symbol: symbol },
      });
    } else {
      errors.showMessages();
    }
  };

  const setStateFromInput = (event) => {
    obj[event.target.name] = event.target.value;
    setObj(obj);
  };

  const cartItems = [
    {
      id: 1,
      title: "trim dress",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
      type: "fashion",
      brand: "nike",
      collection: ["new products"],
      category: "Women",
      price: 145,
      sale: true,
      discount: "40",
      stock: 5,
      new: true,
      tags: ["new", "s", "m", "yellow", "white", "pink", "nike"],
      variants: [
        {
          variant_id: 101,
          id: 1.1,
          sku: "sku1",
          size: "s",
          color: "yellow",
          image_id: 111,
        },
        {
          variant_id: 102,
          id: 1.2,
          sku: "sku2",
          size: "s",
          color: "white",
          image_id: 112,
        },
        {
          variant_id: 103,
          id: 1.3,
          sku: "sku3",
          size: "s",
          color: "pink",
          image_id: 113,
        },
        {
          variant_id: 104,
          id: 1.4,
          sku: "sku4",
          size: "m",
          color: "yellow",
          image_id: 111,
        },
        {
          variant_id: 105,
          id: 1.5,
          sku: "sku5",
          size: "m",
          color: "white",
          image_id: 112,
        },
        {
          variant_id: 106,
          id: 1.6,
          sku: "sku5",
          size: "m",
          color: "pink",
          image_id: 113,
        },
        {
          variant_id: 107,
          id: 1.7,
          sku: "sku1",
          size: "l",
          color: "yellow",
          image_id: 111,
        },
      ],
      images: [
        {
          image_id: 111,
          id: 1.1,
          alt: "yellow",
          src: "/assets/images/pro3/39.jpg",
          variant_id: [101, 104],
        },
        {
          image_id: 112,
          id: 1.2,
          alt: "white",
          src: "/assets/images/pro3/6.jpg",
          variant_id: [102, 105],
        },
        {
          image_id: 113,
          id: 1.3,
          alt: "pink",
          src: "/assets/images/pro3/25.jpg",
          variant_id: [103, 106],
        },
      ],
    },
  ];
  return (
    <section className="section-b-space">
      <Container>
        <div className="checkout-page">
          <div className="checkout-form">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Row>
                <Col lg="6" sm="12" xs="12">
                  <div>123</div>
                  <div className="row check-out">
                    <div style={{ display: "flex" }} className="form-group">
                      <div className="field-label">取貨方式</div>
                      <div
                        style={{
                          display: "flex",
                          flexGrow: 1,
                          justifyContent: "space-evenly",
                        }}
                      >
                        <Button
                          className="rounded"
                          style={{
                            backgroundColor: "#D9D9D9",
                            width: "fit-content",
                            padding: "0.2rem 1rem",
                            marginRight: "1rem",
                            color: "black",
                            border: "0",
                            fontWeight: "400",
                          }}
                        >
                          統一超商
                        </Button>
                        <Button
                          className="rounded"
                          style={{
                            backgroundColor: "#D9D9D9",
                            width: "fit-content",
                            padding: "0.2rem 1rem",
                            marginRight: "1rem",
                            color: "black",
                            border: "0",
                            fontWeight: "400",
                          }}
                        >
                          全家超商
                        </Button>
                        <Button
                          className="rounded"
                          style={{
                            backgroundColor: "#D9D9D9",
                            width: "fit-content",
                            padding: "0.2rem 1rem",
                            marginRight: "1rem",
                            color: "black",
                            border: "0",
                            fontWeight: "400",
                          }}
                        >
                          到店取貨
                        </Button>
                        <Button
                          className="rounded"
                          style={{
                            backgroundColor: "#D9D9D9",
                            width: "fit-content",
                            padding: "0.2rem 1rem",
                            marginRight: "1rem",
                            color: "black",
                            border: "0",
                            fontWeight: "400",
                          }}
                        >
                          宅配
                        </Button>
                      </div>
                    </div>

                    <div
                      style={{ display: "flex" }}
                      className="form-group col-md-12 col-sm-12 col-xs-12"
                    >
                      <div className="field-label">Address</div>
                      <div style={{ flexGrow: 1 }}>
                        <input
                          style={{
                            flexGrow: 1,
                            border: "0",
                            borderBottom: "1px solid",
                          }}
                          className={`${errors.address ? "error_border" : ""}`}
                          type="text"
                          name="address"
                          {...register("address", {
                            required: true,
                            min: 20,
                            max: 120,
                          })}
                          placeholder="Street address"
                        />
                        <span className="error-message">
                          {errors.address && "Please right your address ."}
                        </span>
                      </div>
                    </div>
                    <div
                      style={{ display: "flex" }}
                      className="form-group col-md-12 col-sm-12 col-xs-12"
                    >
                      <div className="field-label">First Name</div>
                      <div
                        style={{
                          flexGrow: 1,
                        }}
                      >
                        <input
                          style={{
                            flexGrow: 1,
                            border: "0",
                            borderBottom: "1px solid",
                          }}
                          type="text"
                          className={`${
                            errors.firstName ? "error_border" : ""
                          }`}
                          name="first_name"
                          {...register("first_name", { required: true })}
                        />
                      </div>
                      <span className="error-message">
                        {errors.firstName && "First name is required"}
                      </span>
                    </div>

                    <div
                      style={{ display: "flex" }}
                      className="form-group col-md-12 col-sm-12 col-xs-12"
                    >
                      <div className="field-label">Phone</div>
                      <div style={{ flexGrow: 1 }}>
                        <input
                          style={{
                            flexGrow: 1,
                            border: "0",
                            borderBottom: "1px solid",
                          }}
                          type="text"
                          name="phone"
                          className={`${errors.phone ? "error_border" : ""}`}
                          {...register("phone", { pattern: /\d+/ })}
                        />
                        <span className="error-message">
                          {errors.phone && "Please enter number for phone."}
                        </span>
                      </div>
                    </div>

                    <div
                      style={{ display: "flex" }}
                      className="form-group col-md-12 col-sm-12 col-xs-12"
                    >
                      <div className="field-label">Email Address</div>
                      <div style={{ flexGrow: 1 }}>
                        <input
                          style={{
                            flexGrow: 1,
                            border: "0",
                            borderBottom: "1px solid",
                          }}
                          className={`${errors.email ? "error_border" : ""}`}
                          type="text"
                          name="email"
                          {...register("email", {
                            required: true,
                            pattern: /^\S+@\S+$/i,
                          })}
                        />
                        <span className="error-message">
                          {errors.email &&
                            "Please enter proper email address ."}
                        </span>
                      </div>
                    </div>

                    <div
                      style={{ display: "flex" }}
                      className="form-group col-md-12 col-sm-6 col-xs-12"
                    >
                      <div className="field-label">付款方式</div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          flexGrow: 1,
                        }}
                        className="payment-box"
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            flexGrow: 1,
                          }}
                          className="upper-box"
                        >
                          <div
                            style={{
                              display: "flex",
                              flexGrow: 1,
                            }}
                            className="payment-options"
                          >
                            <ul
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-around",
                                flexGrow: 1,
                              }}
                            >
                              <li
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  alignItems: "center",
                                }}
                              >
                                <div>
                                  <input
                                    type="radio"
                                    name="payment-group"
                                    id="payment-1"
                                    defaultChecked={true}
                                    onClick={() => checkhandle("stripe")}
                                  />
                                </div>
                                <label
                                  style={{ textAlign: "center" }}
                                  htmlFor="payment-1"
                                >
                                  貝殼交換
                                  <br />
                                  (Crypto pay)
                                </label>
                              </li>
                              <li
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  alignItems: "center",
                                }}
                              >
                                <div>
                                  <input
                                    type="radio"
                                    name="payment-group"
                                    id="payment-1"
                                    onClick={() => checkhandle("credit")}
                                  />
                                </div>
                                <label htmlFor="payment-1">信用卡</label>
                              </li>
                              <li
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  alignItems: "center",
                                }}
                              >
                                <div>
                                  <input
                                    type="radio"
                                    name="payment-group"
                                    id="payment-1"
                                    onClick={() => checkhandle("paypal")}
                                  />
                                </div>
                                <label htmlFor="payment-1">LINE pay</label>
                              </li>
                              <li
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  alignItems: "center",
                                }}
                              >
                                <div>
                                  <input
                                    type="radio"
                                    name="payment-group"
                                    id="payment-1"
                                    onClick={() => checkhandle("line")}
                                  />
                                </div>
                                <label htmlFor="payment-1">取貨付款</label>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <Button
                              className="rounded"
                              style={{
                                backgroundColor: "#D9D9D9",
                                width: "fit-content",
                                padding: "0.2rem 0.5rem",
                                marginRight: "1rem",
                                color: "black",
                                border: "0",
                                fontWeight: "400",
                              }}
                            >
                              付款
                            </Button>
                          </div>
                        </div>

                        {cartTotal !== 0 ? (
                          <div className="text-end">
                            {payment === "stripe" ? (
                              <button type="submit" className="btn-solid btn">
                                Place Order
                              </button>
                            ) : (
                              <PayPalButton
                                amount="0.01"
                                onSuccess={(details, data) => {
                                  alert(
                                    "Transaction completed by " +
                                      details.payer.name.given_name
                                  );

                                  return fetch("/paypal-transaction-complete", {
                                    method: "post",
                                    body: JSON.stringify({
                                      orderID: data.orderID,
                                    }),
                                  });
                                }}
                              />
                            )}
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      <span className="error-message">
                        {errors.pincode && "Required integer"}
                      </span>
                    </div>
                  </div>
                </Col>
                <Col lg="6" sm="12" xs="12">
                  {cartItems && cartItems.length > 0 > 0 ? (
                    <div className="checkout-details">
                      <div className="order-box">
                        <div
                          style={{
                            display: "flex",
                            flexGrow: 1,
                          }}
                          className="title-box"
                        >
                          <div
                            style={{
                              width: "50%",
                            }}
                          >
                            Product
                          </div>
                          <div
                            style={{
                              display: "flex",
                              width: "100%",
                            }}
                          >
                            <div
                              style={{
                                width: "50%",
                              }}
                            >
                              數量
                            </div>
                            <div>小計</div>
                          </div>
                        </div>
                        <ul className="qty">
                          {cartItems.map((item, index) => (
                            <li
                              style={{ display: "flex", flexGrow: 1 }}
                              key={index}
                            >
                              <div
                                style={{
                                  width: "50%",
                                }}
                              >
                                {item.title}
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  width: "100%",
                                }}
                              >
                                <div
                                  style={{
                                    width: "50%",
                                  }}
                                >
                                  {item.qty}1
                                </div>
                                <div>
                                  {symbol}
                                  {item.total}
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                        <ul className="sub-total">
                          <li style={{ display: "flex", flexGrow: 1 }}>
                            <div
                              style={{
                                width: "50%",
                              }}
                            >
                              貝殼交換贈品
                            </div>
                            <div
                              style={{
                                display: "flex",
                                width: "100%",
                              }}
                            >
                              <div
                                style={{
                                  width: "50%",
                                }}
                              >
                                師園提袋
                              </div>
                              <div>
                                {symbol}
                                {cartTotal}
                              </div>
                            </div>
                          </li>
                          <li>
                            運費
                            <div className="shipping">
                              <div className="shopping-option">
                                <label htmlFor="local-pickup">$60</label>
                              </div>
                            </div>
                          </li>
                        </ul>
                        <ul className="total">
                          <li>
                            Total{" "}
                            <span className="count">
                              {symbol}
                              {cartTotal}
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="payment-box">
                        <div className="upper-box"></div>
                        {cartTotal !== 0 ? (
                          <div className="text-end">
                            {payment === "stripe" ? (
                              <button type="submit" className="btn-solid btn">
                                Place Order
                              </button>
                            ) : (
                              <PayPalButton
                                amount="0.01"
                                onSuccess={(details, data) => {
                                  alert(
                                    "Transaction completed by " +
                                      details.payer.name.given_name
                                  );

                                  return fetch("/paypal-transaction-complete", {
                                    method: "post",
                                    body: JSON.stringify({
                                      orderID: data.orderID,
                                    }),
                                  });
                                }}
                              />
                            )}
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CheckoutPage;
