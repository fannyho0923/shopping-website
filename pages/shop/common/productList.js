import React, { useState, useContext, useEffect } from "react";
import { Col, Row, Media, Button, Spinner } from "reactstrap";
import Menu2 from "../../../public/assets/images/mega-menu/2.jpg";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import FilterContext from "../../../helpers/filter/FilterContext";
import ProductItem from "../../../components/common/product-box/ProductBox1";
import { CurrencyContext } from "../../../helpers/Currency/CurrencyContext";
import { useRouter } from "next/router";
import PostLoader from "../../../components/common/PostLoader";
import CartContext from "../../../helpers/cart";
import { WishlistContext } from "../../../helpers/wishlist/WishlistContext";
import { CompareContext } from "../../../helpers/Compare/CompareContext";
import product1 from "../../../public/assets/images/product/product1.jpg";
import product2 from "../../../public/assets/images/product/product2.jpg";
import product3 from "../../../public/assets/images/product/product3.jpg";

const GET_PRODUCTS = gql`
  query products(
    $type: _CategoryType!
    $indexFrom: Int!
    $limit: Int!
    $color: String!
    $brand: [String!]!
    $sortBy: _SortBy!
    $priceMax: Int!
    $priceMin: Int!
  ) {
    products(
      type: $type
      indexFrom: $indexFrom
      limit: $limit
      color: $color
      brand: $brand
      sortBy: $sortBy
      priceMax: $priceMax
      priceMin: $priceMin
    ) {
      total
      hasMore
      items {
        id
        title
        description
        type
        brand
        category
        price
        new
        sale
        stock
        discount
        variants {
          id
          sku
          size
          color
          image_id
        }
        images {
          image_id
          id
          alt
          src
        }
      }
    }
  }
`;

const ProductList = ({ colClass, layoutList, openSidebar, noSidebar }) => {
  const cartContext = useContext(CartContext);
  const quantity = cartContext.quantity;
  const wishlistContext = useContext(WishlistContext);
  const compareContext = useContext(CompareContext);
  const router = useRouter();
  const [limit, setLimit] = useState(8);
  const curContext = useContext(CurrencyContext);
  const [grid, setGrid] = useState(colClass);
  const symbol = curContext.state.symbol;
  const filterContext = useContext(FilterContext);
  const selectedBrands = filterContext.selectedBrands;
  const selectedColor = filterContext.selectedColor;
  const selectedPrice = filterContext.selectedPrice;
  const selectedCategory = filterContext.state;
  const selectedSize = filterContext.selectedSize;
  const [sortBy, setSortBy] = useState("AscOrder");
  const [isLoading, setIsLoading] = useState(false);
  const [layout, setLayout] = useState(layoutList);
  const [url, setUrl] = useState();

  useEffect(() => {
    const pathname = window.location.pathname;
    setUrl(pathname);
    router.push(
      `${pathname}?${filterContext.state}&brand=${selectedBrands}&color=${selectedColor}&size=${selectedSize}&minPrice=${selectedPrice.min}&maxPrice=${selectedPrice.max}`
    );
  }, [selectedBrands, selectedColor, selectedSize, selectedPrice]);

  var { loading, data, fetchMore } = useQuery(GET_PRODUCTS, {
    variables: {
      type: selectedCategory,
      priceMax: selectedPrice.max,
      priceMin: selectedPrice.min,
      color: selectedColor,
      brand: selectedBrands,
      sortBy: sortBy,
      indexFrom: 0,
      limit: limit,
    },
  });

  const products = [
    {
      id: "123",
      title: "師園鹽酥雞",
      description: `內容量：85g
      內容物名稱：
      雞、水、裹漿粉(小粉、粉、薯粉、玉米、 眾香子)、酥炸粉(樹薯澱粉、麵粉)肉粉(糖、鹽、粉 、L-麩酸鈉、蒜粉(蒜粉、二氧化矽)、白胡椒粉[紅薯渣粉地瓜渣 粉)、青辣椒粉、黑胡椒粉、小茴香粉、胡椒粉]、五香粉肉桂 粉、丁香、小茴香、八角、甘草粉)、品質改良劑[焦磷酸鈉(無水) 、多磷酸鈉]、辣椒粉、百草粉肉、丁香、山奈、甘草、小茴香 )、香料。
      `,
      type: "123",
      brand: "123",
      category: "123",
      price: "59",
      new: "",
      sale: "",
      stock: 3,
      discount: "0",
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
      ],
      images: [
        {
          image_id: "123",
          id: "123",
          alt: "123",
          src: product1.src,
        },
        {
          image_id: "123",
          id: "123",
          alt: "123",
          src: product2.src,
        },
        {
          image_id: "123",
          id: "123",
          alt: "123",
          src: product3.src,
        },
      ],
    },
    {
      id: "123",
      title: "師園鹽酥雞",
      description: "123",
      type: "123",
      brand: "123",
      category: "123",
      price: "1234",
      new: "123",
      sale: "1230",
      stock: "123",
      discount: "50",
      variants: {
        id: "123",
        sku: "123",
        size: "123",
        color: "123",
        image_id: "123",
      },
      images: [
        {
          image_id: "123",
          id: "123",
          alt: "123",
          src: product2.src,
        },
        {
          image_id: "123",
          id: "123",
          alt: "123",
          src: product1.src,
        },
        {
          image_id: "123",
          id: "123",
          alt: "123",
          src: product3.src,
        },
      ],
    },
    {
      id: "123",
      title: "師園鹽酥雞",
      description: "123",
      type: "123",
      brand: "123",
      category: "123",
      price: "1234",
      new: "123",
      sale: "1230",
      stock: "123",
      discount: "50",
      variants: {
        id: "123",
        sku: "123",
        size: "123",
        color: "123",
        image_id: "123",
      },
      images: [
        {
          image_id: "123",
          id: "123",
          alt: "123",
          src: product3.src,
        },
        {
          image_id: "123",
          id: "123",
          alt: "123",
          src: product2.src,
        },
        {
          image_id: "123",
          id: "123",
          alt: "123",
          src: product1.src,
        },
      ],
    },
    {
      id: "123",
      title: "師園鹽酥雞",
      description: `內容量：85g
      內容物名稱：
      雞、水、裹漿粉(小粉、粉、薯粉、玉米、 眾香子)、酥炸粉(樹薯澱粉、麵粉)肉粉(糖、鹽、粉 、L-麩酸鈉、蒜粉(蒜粉、二氧化矽)、白胡椒粉[紅薯渣粉地瓜渣 粉)、青辣椒粉、黑胡椒粉、小茴香粉、胡椒粉]、五香粉肉桂 粉、丁香、小茴香、八角、甘草粉)、品質改良劑[焦磷酸鈉(無水) 、多磷酸鈉]、辣椒粉、百草粉肉、丁香、山奈、甘草、小茴香 )、香料。
      `,
      type: "123",
      brand: "123",
      category: "123",
      price: "59",
      new: "",
      sale: "",
      stock: 3,
      discount: "0",
      variants: {
        id: "123",
        sku: "123",
        size: "123",
        color: "123",
        image_id: "123",
      },
      images: [
        {
          image_id: "123",
          id: "123",
          alt: "123",
          src: product1.src,
        },
        {
          image_id: "123",
          id: "123",
          alt: "123",
          src: product2.src,
        },
        {
          image_id: "123",
          id: "123",
          alt: "123",
          src: product3.src,
        },
      ],
    },
    {
      id: "123",
      title: "師園鹽酥雞",
      description: `內容量：85g
      內容物名稱：
      雞、水、裹漿粉(小粉、粉、薯粉、玉米、 眾香子)、酥炸粉(樹薯澱粉、麵粉)肉粉(糖、鹽、粉 、L-麩酸鈉、蒜粉(蒜粉、二氧化矽)、白胡椒粉[紅薯渣粉地瓜渣 粉)、青辣椒粉、黑胡椒粉、小茴香粉、胡椒粉]、五香粉肉桂 粉、丁香、小茴香、八角、甘草粉)、品質改良劑[焦磷酸鈉(無水) 、多磷酸鈉]、辣椒粉、百草粉肉、丁香、山奈、甘草、小茴香 )、香料。
      `,
      type: "123",
      brand: "123",
      category: "123",
      price: "59",
      new: "",
      sale: "",
      stock: 3,
      discount: "0",
      variants: {
        id: "123",
        sku: "123",
        size: "123",
        color: "123",
        image_id: "123",
      },
      images: [
        {
          image_id: "123",
          id: "123",
          alt: "123",
          src: product1.src,
        },
        {
          image_id: "123",
          id: "123",
          alt: "123",
          src: product2.src,
        },
        {
          image_id: "123",
          id: "123",
          alt: "123",
          src: product3.src,
        },
      ],
    },
  ];

  const handlePagination = () => {
    setIsLoading(true);
    setTimeout(
      () =>
        fetchMore({
          variables: {
            indexFrom: data.products.items.length,
          },
          updateQuery: (prev, { fetchMoreResult }) => {
            if (!fetchMoreResult) return prev;
            setIsLoading(false);
            return {
              products: {
                __typename: prev.products.__typename,
                total: prev.products.total,
                items: [
                  ...prev.products.items,
                  ...fetchMoreResult.products.items,
                ],
                hasMore: fetchMoreResult.products.hasMore,
              },
            };
          },
        }),
      1000
    );
  };

  const removeBrand = (val) => {
    const temp = [...selectedBrands];
    temp.splice(selectedBrands.indexOf(val), 1);
    filterContext.setSelectedBrands(temp);
  };

  const removeSize = (val) => {
    const temp = [...selectedSize];
    temp.splice(selectedSize.indexOf(val), 1);
    filterContext.setSelectedSize(temp);
  };

  const removeColor = () => {
    filterContext.setSelectedColor("");
  };

  return (
    <Col className="collection-content">
      <div className="page-main-content">
        <Row>
          <Col sm="12">
            <Row>
              <Col xs="12">
                <ul className="product-filter-tags">
                  {selectedBrands.map((brand, i) => (
                    <li key={i}>
                      <a href={null} className="filter_tag">
                        {brand}
                        <i
                          className="fa fa-close"
                          onClick={() => removeBrand(brand)}
                        ></i>
                      </a>
                    </li>
                  ))}
                  {selectedColor ? (
                    <li>
                      <a href={null} className="filter_tag">
                        {selectedColor}
                        <i className="fa fa-close" onClick={removeColor}></i>
                      </a>
                    </li>
                  ) : (
                    ""
                  )}
                  {selectedSize.map((size, i) => (
                    <li key={i}>
                      <a href={null} className="filter_tag">
                        {size}
                        <i
                          className="fa fa-close"
                          onClick={() => removeSize(size)}
                        ></i>
                      </a>
                    </li>
                  ))}
                  {
                    <li>
                      <a href={null} className="filter_tag">
                        price: {selectedPrice.min}- {selectedPrice.max}
                      </a>
                    </li>
                  }
                </ul>
              </Col>
            </Row>
            <div className="collection-product-wrapper">
              <div className="product-top-filter">
                {!noSidebar ? (
                  <Row>
                    <Col xl="12">
                      <div
                        className="filter-main-btn"
                        onClick={() => openSidebar()}
                      >
                        <span className="filter-btn btn btn-theme">
                          <i className="fa fa-filter" aria-hidden="true"></i>{" "}
                          Filter
                        </span>
                      </div>
                    </Col>
                  </Row>
                ) : (
                  ""
                )}
                <Row>
                  <Col>
                    <div className="product-filter-content">
                      <div className="search-count">
                        <h5>
                          {data
                            ? `Showing Products 1-${data.products.items.length} of ${data.products.total}`
                            : "loading"}{" "}
                          Result
                        </h5>
                      </div>
                      <div className="collection-view">
                        <ul>
                          <li>
                            <i
                              className="fa fa-th grid-layout-view"
                              onClick={() => {
                                setLayout("");
                                setGrid("col-lg-3");
                              }}
                            ></i>
                          </li>
                          <li>
                            <i
                              className="fa fa-list-ul list-layout-view"
                              onClick={() => {
                                setLayout("list-view");
                                setGrid("col-lg-12");
                              }}
                            ></i>
                          </li>
                        </ul>
                      </div>
                      <div
                        className="collection-grid-view"
                        style={
                          layout === "list-view"
                            ? { visibility: "hidden" }
                            : { visibility: "visible" }
                        }
                      >
                        <ul>
                          <li>
                            <Media
                              src={`/assets/images/icon/2.png`}
                              alt=""
                              className="product-2-layout-view"
                              onClick={() => setGrid("col-lg-6")}
                            />
                          </li>
                          <li>
                            <Media
                              src={`/assets/images/icon/3.png`}
                              alt=""
                              className="product-3-layout-view"
                              onClick={() => setGrid("col-lg-4")}
                            />
                          </li>
                          <li>
                            <Media
                              src={`/assets/images/icon/4.png`}
                              alt=""
                              className="product-4-layout-view"
                              onClick={() => setGrid("col-lg-3")}
                            />
                          </li>
                          <li>
                            <Media
                              src={`/assets/images/icon/6.png`}
                              alt=""
                              className="product-6-layout-view"
                              onClick={() => setGrid("col-lg-2")}
                            />
                          </li>
                        </ul>
                      </div>
                      <div className="product-page-per-view">
                        <select
                          onChange={(e) => setLimit(parseInt(e.target.value))}
                        >
                          <option value="10">10 Products Per Page</option>
                          <option value="15">15 Products Per Page</option>
                          <option value="20">20 Products Per Page</option>
                        </select>
                      </div>
                      <div className="product-page-filter">
                        <select onChange={(e) => setSortBy(e.target.value)}>
                          <option value="AscOrder">Sorting items</option>
                          <option value="HighToLow">High To Low</option>
                          <option value="LowToHigh">Low To High</option>
                          <option value="Newest">Newest</option>
                          <option value="AscOrder">Asc Order</option>
                          <option value="DescOrder">Desc Order</option>
                        </select>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className={`product-wrapper-grid ${layout}`}>
                <Row>
                  {/* Product Box */}
                  {/* {!data ||
                  !data.products ||
                  !data.products.items ||
                  data.products.items.length === 0 ||
                  loading ? (
                    data &&
                    data.products &&
                    data.products.items &&
                    data.products.items.length === 0 ? (
                      <Col xs="12">
                        <div>
                          <div className="col-sm-12 empty-cart-cls text-center">
                            <img
                              src={`/assets/images/empty-search.jpg`}
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
                    ) : (
                      // <></>
                      <div className="row mx-0 margin-default mt-4">
                        <div className="col-xl-3 col-lg-4 col-6">
                          <PostLoader />
                        </div>
                        <div className="col-xl-3 col-lg-4 col-6">
                          <PostLoader />
                        </div>
                        <div className="col-xl-3 col-lg-4 col-6">
                          <PostLoader />
                        </div>
                        <div className="col-xl-3 col-lg-4 col-6">
                          <PostLoader />
                        </div>
                      </div>
                    )
                  ) : (
                    data &&
                    data.products.items.map((product, i) => (
                      <div className={grid} key={i}>
                        <div className="product">
                          <div>
                            <ProductItem
                              des={true}
                              product={product}
                              symbol={symbol}
                              cartClass="cart-info cart-wrap"
                              addCompare={() =>
                                compareContext.addToCompare(product)
                              }
                              addWishlist={() =>
                                wishlistContext.addToWish(product)
                              }
                              addCart={() =>
                                cartContext.addToCart(product, quantity)
                              }
                            />
                          </div>
                        </div>
                      </div>
                    ))
                  )} */}

                  {products.map((product, i) => (
                    <div className={grid} key={i}>
                      <div className="product">
                        <div>
                          <ProductItem
                            des={true}
                            product={product}
                            symbol={symbol}
                            cartClass="cart-info cart-wrap"
                            // addCompare={() =>
                            //   compareContext.addToCompare(product)
                            // }
                            // addWishlist={() =>
                            //   wishlistContext.addToWish(product)
                            // }
                            addCart={() =>
                              cartContext.addToCart(product, quantity)
                            }
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </Row>
              </div>
              <div className="section-t-space">
                <div className="text-center">
                  <Row>
                    <Col xl="12" md="12" sm="12">
                      {data && data.products && data.products.hasMore && (
                        <Button
                          className="load-more"
                          onClick={() => handlePagination()}
                        >
                          {isLoading && (
                            <Spinner animation="border" variant="light" />
                          )}
                          Load More
                        </Button>
                      )}
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default ProductList;
