import React, { useState, useContext } from "react";
import Link from "next/link";
import CartContext from "../../../../helpers/cart";
import hotProductLogo from "../../../../public/assets/images/logos/hotProductLogo.png";
import { Container, Row, Col, Media, Input, Button } from "reactstrap";
import { CurrencyContext } from "../../../../helpers/Currency/CurrencyContext";
import { WalletContext } from "../../../../helpers/Wallet/WalletContext";
import cart from "../../../../public/assets/images/icon-empty-cart.png";

const CartPage = () => {
  const context = useContext(CartContext);
  const cartItems = context.state;
  const curContext = useContext(CurrencyContext);
  const symbol = curContext.state.symbol;
  const total = context.cartTotal;
  const removeFromCart = context.removeFromCart;
  const walletContext = useContext(WalletContext);
  const wallet = walletContext.state.walletContext;
  const setWallet = walletContext.setWallet;
  const [quantity, setQuantity] = useState(1);
  const [quantityError, setQuantityError] = useState(false);
  const [count, setCount] = useState(0);
  const updateQty = context.updateQty;

  const connectWallet = () => {
    console.log(wallet);
    setWallet(
      wallet
        ? {
            walletContext: "",
          }
        : {
            walletContext: "0xbb...e1Be",
          }
    );
  };

  const handleCount = (i) => {
    if (count <= 0 && i < 1) {
      return setCount(0);
    }
    setCount(count + i);
  };

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
      {wallet}
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
                      <tbody key={index}>
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
                      </tbody>
                    );
                  })}
                </table>
                <table className="table cart-table table-responsive-xs">
                  <tfoot>
                    <tr>
                      <td>
                        <div>小計 :</div>
                      </td>
                      <td>
                        <h2>
                          {symbol} {total}{" "}
                        </h2>
                      </td>
                    </tr>
                  </tfoot>
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
            <Row
              style={{
                paddingTop: "1rem",
              }}
            >
              <Col
                style={{
                  border: "1px solid",
                  borderColor: "#E0E0E0",
                  padding: 0,
                }}
              >
                <div
                  style={{
                    width: "100%",
                    backgroundColor: "#E0E0E0",
                    color: "black",
                    padding: "0.5rem",
                  }}
                >
                  <h3 style={{ color: "black", fontWeight: "bold" }}>
                    超值加購
                  </h3>
                </div>
                <div style={{ backgroundColor: "white" }}>
                  <ul style={{ padding: "1rem" }}>
                    <li style={{ display: "flex" }}>
                      <div style={{ width: "100px", marginRight: "1rem" }}>
                        <Media
                          style={{ width: "100%" }}
                          src={hotProductLogo.src}
                        />
                      </div>
                      <div>
                        <p>鹽酥雞</p>
                        <p>NT$70</p>
                        <Button
                          className="rounded"
                          style={{ backgroundColor: "black", color: "white" }}
                        >
                          加入購物車
                        </Button>
                      </div>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>

<<<<<<< HEAD
            <Row
              style={{
                width: "fit-content",
                paddingTop: "1rem",
              }}
            >
              <Col
                style={{
                  boxShadow: "1px 1px 5px 0px #000000",
                  borderColor: "#E0E0E0",
                  padding: 0,
                }}
              >
                <div
                  style={{
                    width: "100%",
                    backgroundColor: "#E0E0E0",
                    color: "black",
                    padding: "0.5rem",
                  }}
                >
                  <h3 style={{ color: "black", fontWeight: "bold" }}>
                    超值加購
                  </h3>
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                  }}
                >
                  <ul style={{ padding: "1rem" }}>
                    <li
                      style={{
                        display: "flex",
                        border: "0 0 1px 0 solid",
                        borderBottom: "1px solid #E0E0E0",
                        paddingBottom: "1rem",
                        //判斷下面有沒其他物品
                        marginBottom: "1rem",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginRight: "1rem",
                        }}
                      >
                        <input className="rounded" type="checkBox"></input>
                      </div>
                      <div style={{ width: "100px", marginRight: "1rem" }}>
                        <Media
                          style={{ width: "100%" }}
                          src={hotProductLogo.src}
                        />
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                        }}
                      >
                        <div>
                          <p>鹽酥雞</p>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "space-around",
                              marginRight: "1rem",
                            }}
                          >
                            <Button
                              type="number"
                              onClick={() => handleCount(-1)}
                            >
                              -
                            </Button>
                            <div style={{ margin: "0 1rem" }} type="number">
                              {count}
                            </div>
                            <Button
                              type="number"
                              onClick={() => handleCount(1)}
                            >
                              +
                            </Button>
                          </div>
                          <div style={{ color: "black", fontWeight: "bold" }}>
                            優惠價 NT$70
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>

=======
>>>>>>> 4504d6d (update at 1129)
            <Row className="cart-buttons">
              <Col style={{ display: "flex", flexDirection: "column" }}>
                <Link href={`/shop/three_grid`}>
                  <a
                    style={{
                      width: "fit-content",
                      backgroundColor: "#A5A09C",
                      color: "white",
                      padding: "0.5rem 1.5rem",
                    }}
                  >
                    繼續購物
                  </a>
                </Link>
                <div style={{ width: "fit-content" }}>
                  <p
                    style={{
                      marginTop: "1rem",
                    }}
                  >
                    請輸入優惠卷代碼。
                  </p>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    {/* <Link href={`/shop/left_sidebar`}> */}
                    <Button
                      style={{
                        width: "fit-content",
                        marginTop: "0.2rem",
                        backgroundColor: "#003366",
                        fontWeight: 400,
                      }}
                      className="rounded"
                      onClick={connectWallet}
                    >
                      連結錢包
                    </Button>
                    {/* </Link> */}
                  </div>
                </div>
                {/* 已連結錢包 */}
                {wallet && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "0 4rem",
                      marginTop: "1rem",
                    }}
                  >
                    <p>請選擇優惠卷</p>
                    <div style={{ width: "fit-content" }}>
                      {arr2.map((item) => (
                        <Button
                          className="rounded-pill"
                          style={{
                            backgroundColor: "#F4F3F3",
                            color: "black",
                            border: "0",
                            display: "flex",
                            width: "100%",
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
                  </div>
                )}
                {/* 判斷 */}
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
