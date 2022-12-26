import React, { useContext, useState, useRef, useEffect } from "react";
import {
  Button,
  Container,
  Row,
  Col,
  ModalBody,
  Modal,
  ModalHeader,
  Media,
  Input,
} from "reactstrap";
import Link from "next/link";
import Slider from "react-slick";
import hotProductLogo from "../../../public/assets/images/logos/hotProductLogo.png";
import sizeChart from "../../../public/assets/images/size-chart.jpg";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { CurrencyContext } from "../../../helpers/Currency/CurrencyContext";
import CountdownComponent from "../../../components/common/widgets/countdownComponent";
import ImageZoom from "../common/image-zoom";
import CartContext from "../../../helpers/cart";
import product1 from "../../../public/assets/images/product/product1.jpg";
import product2 from "../../../public/assets/images/product/product2.jpg";
import product3 from "../../../public/assets/images/product/product3.jpg";

const GET_SINGLE_PRODUCTS = gql`
  query product($id: Int!) {
    product(id: $id) {
      id
      title
      description
      type
      brand
      category
      price
      new
      sale
      discount
      stock
      variants {
        id
        color
        image_id
        variant_id
        size
      }
      images {
        image_id
        src
      }
    }
  }
`;

const AddOther = () => {
  const [count, setCount] = useState(0);
  const handleCount = (i) => {
    if (count <= 0 && i < 1) {
      return setCount(0);
    }
    setCount(count + i);
  };
  return (
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
          <h3 style={{ color: "black", fontWeight: "bold" }}>超值加購</h3>
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
                <Media style={{ width: "100%" }} src={hotProductLogo.src} />
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
                    <Button type="number" onClick={() => handleCount(-1)}>
                      -
                    </Button>
                    <div style={{ margin: "0 1rem" }} type="number">
                      {count}
                    </div>
                    <Button type="number" onClick={() => handleCount(1)}>
                      +
                    </Button>
                  </div>
                  <div
                    style={{
                      color: "black",
                      fontWeight: "bold",
                    }}
                  >
                    優惠價 NT$70
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </Col>
    </Row>
  );
};

const OutsideImagePage = () => {
  const context = useContext(CartContext);
  const addToCart = context.addToCart;
  const curContext = useContext(CurrencyContext);
  const symbol = curContext.state.symbol;
  const [state, setState] = useState({ nav1: null, nav2: null });
  const [qty, setQty] = useState(1);
  const slider1 = useRef();
  const slider2 = useRef();
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [open, setOpen] = useState(false);
  const stock = context.stock;
  const plusQty = context.plusQty;
  const minusQty = context.minusQty;
  const quantity = context.quantity;
  const uniqueColor = [];
  const uniqueSize = [];

  const onCloseModal = () => {
    setOpen(false);
  };

  const changeQty = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  // var { loading, data } = useQuery(GET_SINGLE_PRODUCTS, {
  //   variables: {
  //     id: 1,
  //   },
  // });
  // console.log(data);
  const product = {
    id: "師園鹽酥雞",
    title: "師園鹽酥雞",
    description: `使用臺灣產冷藏雞肉。
      真實還原師園店鋪口味。
      `,
    type: "12345",
    brand: "12345",
    category: "12345",
    price: 20,
    // new:'12345',
    // sale:'12345',
    discount: 90,
    stock: 3,
    variants: [
      {
        id: "123",
        color: "",
        image_id: "",
        variant_id: "",
        size: "",
      },
      {
        id: "123",
        color: "",
        image_id: "",
        variant_id: "",
        size: "",
      },
      {
        id: "123",
        color: "",
        image_id: "",
        variant_id: "",
        size: "",
      },
    ],
    images: [
      {
        image_id: "12345",
        src: product1.src,
      },
      {
        image_id: "12345",
        src: product2.src,
      },
      {
        image_id: "12345",
        src: product3.src,
      },
    ],
  };

  var products = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    fade: true,
  };
  var productsnav = {
    slidesToShow: 3,
    swipeToSlide: true,
    arrows: false,
    dots: false,
    focusOnSelect: true,
  };

  useEffect(() => {
    setState({
      nav1: slider1.current,
      nav2: slider2.current,
    });
  }, []);

  const changeColorVar = (img_id) => {
    slider2.current.slickGoTo(img_id);
  };

  const { nav1, nav2 } = state;

  return (
    <section>
      <div className="collection-wrapper">
        <Container>
          {/* {!data || !data.product || data.product.length === 0 || loading ? (
            "loading"
          ) : ( */}
          <Row>
            <Col lg="6">
              <Slider
                {...products}
                asNavFor={nav2}
                ref={(slider) => (slider1.current = slider)}
                className="product-right-slick"
              >
                {/* {data.product.variants
                  ? data.product.images.map((vari, index) => (
                      <div key={index}>
                        <ImageZoom image={vari} />
                      </div>
                    ))
                  : data.product.images.map((vari, index) => (
                      <div key={index}>
                        <ImageZoom image={vari} />
                      </div>
                    ))} */}
                {product.variants
                  ? product.images.map((vari, index) => (
                      <div key={index}>
                        <ImageZoom image={vari} />
                      </div>
                    ))
                  : product.images.map((vari, index) => (
                      <div key={index}>
                        <ImageZoom image={vari} />
                      </div>
                    ))}
              </Slider>
            </Col>
            <Col lg="6" className="rtl-text">
              <Row>
                <Col>
                  <div className="product-right">
                    <h2> {product.title} </h2>
                    <h4>
                      <del>
                        {symbol}
                        {product.price}
                      </del>
                      <span>{product.discount}% off</span>
                    </h4>
                    <h3>
                      {symbol}
                      90
                      {/* {data.product.price -
                        (data.product.price * data.product.discount) / 100}{" "} */}
                    </h3>
                    {/* {data.product.variants.map((vari) => {
                        var findItem = uniqueColor.find(
                          (x) => x.color === vari.color
                        );
                        if (!findItem) uniqueColor.push(vari);
                        var findItemSize = uniqueSize.find(
                          (x) => x === vari.size
                        );
                        if (!findItemSize) uniqueSize.push(vari.size);
                      })} */}
                    {/* {uniqueColor ? (
                        <ul className="color-variant">
                          {uniqueColor.map((vari, i) => {
                            return (
                              <li
                                className={vari.color}
                                key={i}
                                title={vari.color}
                                onClick={() => changeColorVar(i)}
                              ></li>
                            );
                          })}
                        </ul>
                      ) : (
                        ""
                      )} */}
                    <div className="product-description border-product">
                      {/* {data.product.variants ? (
                          <div>
                            <h6 className="product-title size-text">
                              select size
                              <span>
                                <a
                                  href={null}
                                  data-toggle="modal"
                                  data-target="#sizemodal"
                                  onClick={toggle}
                                >
                                  size chart
                                </a>
                              </span>
                            </h6>
                            <Modal isOpen={modal} toggle={toggle} centered>
                              <ModalHeader toggle={toggle}>
                                Sheer Straight Kurta
                              </ModalHeader>
                              <ModalBody>
                                <Media
                                  src={sizeChart.src}
                                  alt="size"
                                  className="img-fluid"
                                />
                              </ModalBody>
                            </Modal>
                            <div className="size-box">
                              <ul>
                                {uniqueSize.map((data, i) => {
                                  return (
                                    <li key={i}>
                                      <a href={null}>{data}</a>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          </div>
                        ) : (
                          ""
                        )} */}
                      <span className="instock-cls">{"stock"}</span>
                      <h6 className="product-title">quantity</h6>
                      <div className="qty-box">
                        <div className="input-group">
                          <span className="input-group-prepend">
                            <button
                              type="button"
                              className="btn quantity-left-minus"
                              onClick={minusQty}
                              data-type="minus"
                              data-field=""
                            >
                              <i className="fa fa-angle-left"></i>
                            </button>
                          </span>
                          <Input
                            type="text"
                            name="quantity"
                            value={quantity}
                            onChange={changeQty}
                            className="form-control input-number"
                          />
                          <span className="input-group-prepend">
                            <button
                              type="button"
                              className="btn quantity-right-plus"
                              onClick={() => plusQty(product)}
                              data-type="plus"
                              data-field=""
                            >
                              <i className="fa fa-angle-right"></i>
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="product-buttons">
                      <a
                        href={null}
                        className="btn btn-solid"
                        onClick={() => addToCart(data.product, quantity)}
                      >
                        add to cart
                      </a>
                      <Link href={`/page/account/checkout`}>
                        <a
                          className="btn btn-solid"
                          onClick={() => BuynowClicked(item, quantity)}
                        >
                          buy now
                        </a>
                      </Link>
                    </div>
                    <div className="border-product">
                      <p>{product.description}</p>
                    </div>
                    <div className="border-product">
                      <h6 className="product-title">share it</h6>
                      <div className="product-icon">
                        <ul className="product-social">
                          <li>
                            <a href="https://www.facebook.com" target="_blank">
                              <i className="fa fa-facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a href="https://plus.google.com" target="_blank">
                              <i className="fa fa-google-plus"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="border-product">
                      <h6 className="product-title">Time Reminder</h6>
                      <CountdownComponent />
                    </div>
                  </div>
                  <Modal open={open} onClose={onCloseModal} center>
                    <div
                      className="modal-dialog modal-dialog-centered"
                      role="document"
                    >
                      <div className="modal-content">
                        <ModalHeader className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            Sheer Straight Kurta
                          </h5>
                        </ModalHeader>
                        <ModalBody className="modal-body">
                          <Media
                            src={sizeChart.src}
                            alt=""
                            className="img-fluid"
                          />
                        </ModalBody>
                      </div>
                    </div>
                  </Modal>
                  <Row className="imgae-outside-thumbnail mt-4">
                    <Slider
                      className="slider-nav"
                      {...productsnav}
                      asNavFor={nav1}
                      ref={(slider) => (slider2.current = slider)}
                    >
                      {/* {data.product.variants
                        ? data.product.images.map((vari, index) => (
                            <div key={index}>
                              <Media
                                src={`${vari.src}`}
                                key={index}
                                alt={vari.alt}
                                className="img-fluid"
                              />
                            </div>
                          ))
                        : ""} */}
                      {product.variants
                        ? product.images.map((vari, index) => (
                            <div key={index}>
                              <Media
                                src={`${vari.src}`}
                                key={index}
                                alt={vari.alt}
                                className="img-fluid"
                              />
                            </div>
                          ))
                        : ""}
                    </Slider>
                  </Row>
                  <AddOther />
                </Col>
              </Row>
            </Col>
          </Row>
          {/* )} */}
        </Container>
      </div>
    </section>
  );
};

export default OutsideImagePage;
