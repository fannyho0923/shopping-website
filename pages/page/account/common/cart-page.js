import React, { useState, useContext } from "react";
import Link from "next/link";
import CartContext from "../../../../helpers/cart";
import { Container, Row, Col, Media, Input, Button } from "reactstrap";
import { CurrencyContext } from "../../../../helpers/Currency/CurrencyContext";
import cart from "../../../../public/assets/images/icon-empty-cart.png";

const CartPage = () => {
  const context = useContext(CartContext);
  const cartItems = context.state;
  const curContext = useContext(CurrencyContext);
  const symbol = curContext.state.symbol;
  const total = context.cartTotal;
  const removeFromCart = context.removeFromCart;
  const [quantity, setQty] = useState(1);
  const [quantityError, setQuantityError] = useState(false);
  const updateQty = context.updateQty;

  const handleQtyUpdate = (item, quantity) => {
    if (quantity >= 1) {
      setQuantityError(false);
      updateQty(item, quantity);
    } else {
      setQuantityError(true);
    }
  };

  const changeQty = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const minusQty = () => {
    if (quantity > 1) {
      setStock("InStock");
      setQty(quantity - 1);
    }
  };

  const plusQty = (product) => {
    if (product.stock >= quantity) {
      setQty(quantity + 1);
    } else {
      setStock("Out of Stock !");
    }
  };

  const arr = [
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

  const arr2 = [
    { title: "abcabcabcabc", des: "全館88折" },
    { title: "bbbbbbbbbbbb", des: "全館88折" },
  ];

  return (
    <div>
      {/* {cartItems && cartItems.length > 0 ? ( */}
      {arr && arr.length > 0 ? (
        <section className="cart-section section-b-space">
          <Container>
            <Row>
              <Col sm="12">
                <table className="table cart-table table-responsive-xs">
                  <thead>
                    <tr className="table-head">
                      <th scope="col"></th>
                      <th scope="col"></th>
                      <th scope="col"></th>
                      <th scope="col">price</th>
                      <th scope="col">quantity</th>
                      <th scope="col">total</th>
                    </tr>
                  </thead>
                  {arr.map((item, index) => {
                    return (
                      // <div
                      //   style={{
                      //     backgroundColor: "gray",
                      //     // display: "flex",
                      //     // flexDirection: "column",
                      //   }}
                      // >
                      <tbody
                        style={
                          {
                            // backgroundColor: "pink",
                          }
                        }
                        key={index}
                      >
                        <tr>
                          {/* 刪除 */}
                          <td>
                            <i
                              className="fa fa-times"
                              onClick={() => removeFromCart(item)}
                            ></i>
                          </td>
                          {/* 圖片 */}
                          <td>
                            <Link href={`/left-sidebar/product/` + item.id}>
                              <a>
                                <Media
                                  src={
                                    item.images
                                      ? item.images[0].src
                                      : item.images[0].src
                                  }
                                  alt=""
                                />
                              </a>
                            </Link>
                          </td>
                          {/* 名稱 */}
                          <td>
                            <Link href={`/left-sidebar/product/` + item.id}>
                              <a>{item.title}</a>
                            </Link>
                            <div className="mobile-cart-content row">
                              <div className="col-xs-3">
                                <div className="qty-box">
                                  <div className="input-group">
                                    <input
                                      type="number"
                                      name="quantity"
                                      onChange={(e) =>
                                        handleQtyUpdate(item, e.target.value)
                                      }
                                      className="form-control input-number"
                                      defaultValue={item.qty}
                                      style={{
                                        borderColor: quantityError && "red",
                                      }}
                                    />
                                  </div>
                                </div>
                                {item.qty >= item.stock ? "out of Stock" : ""}
                              </div>
                              <div className="col-xs-3">
                                <h2 className="td-color">
                                  {symbol}
                                  {item.price -
                                    (item.price * item.discount) / 100}
                                </h2>
                              </div>
                              <div className="col-xs-3">
                                <h2 className="td-color">
                                  <a href="#" className="icon">
                                    <i
                                      className="fa fa-times"
                                      onClick={() => removeFromCart(item)}
                                    ></i>
                                  </a>
                                </h2>
                              </div>
                            </div>
                          </td>
                          {/* 單價 */}
                          <td>
                            <h2>
                              {symbol}
                              {item.price - (item.price * item.discount) / 100}
                            </h2>
                          </td>
                          {/* 數量 */}
                          <td>
                            <div className="qty-box">
                              <div className="input-group">
                                <input
                                  type="number"
                                  name="quantity"
                                  onChange={(e) =>
                                    handleQtyUpdate(item, e.target.value)
                                  }
                                  className="form-control input-number"
                                  defaultValue={item.qty}
                                  style={{
                                    borderColor: quantityError && "red",
                                  }}
                                />
                              </div>
                            </div>
                            {item.qty >= item.stock ? "out of Stock" : ""}
                          </td>
                          {/* 小計 */}
                          <td>
                            <h2 className="td-color">
                              {symbol}
                              {item.total}
                            </h2>
                          </td>
                        </tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <table className="table cart-table table-responsive-md">
                          <tfoot>
                            <tr>
                              <td
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                }}
                              >
                                <div>小計 :</div>

                                <h2>
                                  {symbol} {total}{" "}
                                </h2>
                              </td>
                            </tr>
                          </tfoot>
                        </table>
                      </tbody>
                    );
                  })}
                </table>
                <table className="table cart-table table-responsive-md">
                  <tfoot>
                    <tr>
                      <td>
                        <div>total price :</div>
                        <div>(不包含運費)</div>
                      </td>
                      <td>
                        <h2>
                          {symbol} {total}{" "}
                        </h2>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </Col>
            </Row>
            <Row className="cart-buttons">
              <Col style={{ display: "flex", flexDirection: "column" }}>
                <Link href={`/shop/left_sidebar`}>
                  <a
                    style={{
                      width: "fit-content",
                      backgroundColor: "gray",
                    }}
                    className="btn btn-solid"
                  >
                    continue shopping
                  </a>
                </Link>
                <Input
                  style={{
                    width: "fit-content",
                    marginTop: "1rem",
                    backgroundColor: "transparent",
                    border: "0",
                  }}
                  placeholder="請輸入優惠卷代碼。"
                ></Input>
                {/* 已連結錢包 */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "0 4rem",
                  }}
                >
                  <p>請選擇優惠卷</p>
                  {arr2.map((item) => (
                    <Button
                      class="rounded-pill"
                      style={{
                        width: "fit-content",
                        backgroundColor: "#F4F3F3",
                        color: "black",
                        border: "0",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "0.5rem 1rem",
                        margin: "0.5rem",
                      }}
                      onFocus={() => {
                        // 要變色#FDEEC9
                      }}
                    >
                      <p
                        style={{
                          margin: "0",
                        }}
                      >
                        {item.title}
                      </p>
                      <p
                        style={{
                          margin: "0 0 0 2rem",
                        }}
                      >
                        {item.des}
                      </p>
                    </Button>
                  ))}
                </div>
                {/* 判斷 */}
                <Link href={`/shop/left_sidebar`}>
                  <Button
                    style={{
                      width: "fit-content",
                      marginTop: "1rem",
                      backgroundColor: "#003366",
                    }}
                    className="btn btn-solid rounded"
                  >
                    連結錢包
                  </Button>
                </Link>
              </Col>
              <Col xs="6">
                <Link href={`/page/account/checkout`}>
                  <a className="btn btn-solid">check out</a>
                </Link>
              </Col>
            </Row>
          </Container>
        </section>
      ) : (
        <section className="cart-section section-b-space">
          <Container>
            <Row>
              <Col sm="12">
                <div>
                  <div className="col-sm-12 empty-cart-cls text-center">
                    <Media
                      src={cart}
                      className="img-fluid mb-4 mx-auto"
                      alt=""
                    />
                    <h3>
                      <strong>Your Cart is Empty</strong>
                    </h3>
                    <h4>Explore more shortlist some items.</h4>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      )}
    </div>
  );
};

export default CartPage;
