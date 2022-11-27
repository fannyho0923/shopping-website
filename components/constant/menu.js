export const MENUITEMS = [
  {
    title: "Home",
    type: "link",
  },
  {
    title: "Menu",
    type: "link",
    path: "/page/menu",
  },
  {
    title: "Products",
    type: "link",
    path: "/shop/three_grid",
    //will del
    children: [
      {
        title: "Sidebar",
        type: "sub",
        children: [
          { path: "/product-details/1", title: "Left Sidebar", type: "link" },
          {
            path: "/product-details/right_sidebar",
            title: "Right Sidebar",
            type: "link",
          },
          {
            path: "/product-details/no-sidebar",
            title: "No Sidebar",
            type: "link",
          },
        ],
      },
      {
        title: "About Us",
        children: [
          {
            path: "/product-details/thumbnail_left",
            title: "Left Image",
            type: "link",
          },
          {
            path: "/product-details/thumbnail_right",
            title: "Right Image",
            type: "link",
          },
          {
            path: "/product-details/thumbnail_outside",
            title: "Image Outside",
            type: "link",
          },
        ],
      },
      {
        title: "3-Column",
        type: "sub",
        children: [
          {
            path: "/product-details/3_col_left",
            title: "Thumbnail Left",
            type: "link",
          },
          {
            path: "/product-details/3_col_right",
            title: "Thumbnail Right",
            type: "link",
          },
          {
            path: "/product-details/3_col_bottom",
            title: "Thumbnail Bottom",
            type: "link",
          },
        ],
      },
      {
        path: "/product-details/4_image",
        title: "4 Image",
        type: "link",
        tag: "New",
      },
      {
        path: "/product-details/bundle_product",
        title: "Bundle Product",
        type: "link",
        tag: "New",
      },
      {
        path: "/product-details/sticky",
        title: "Sticky",
        type: "link",
      },
      {
        path: "/product-details/accordian",
        title: "Accordian",
        type: "link",
      },
      {
        path: "/product-details/image_swatch",
        title: "Image Swatch",
        type: "link",
        tag: "New",
      },
      {
        path: "/product-details/vertical_tab",
        title: "Vertical Tab",
        type: "link",
      },
    ],
  },
  {
    title: "product detail",
    type: "link",
    path: "/product-details/thumbnail_outside",
  },
  {
    title: "About Us",
    type: "link",
    path: "/page/about-us",
  },
  {
    title: "Contact",
    type: "link",
    path: "/page/account/contact",
    children: [{ path: "/page/account/cart", title: "cart", type: "link" }],
  },
  {
    title: "cart",
    type: "link",
    path: "/page/account/cart",
    // children: [{ path: "/page/account/cart", title: "cart", type: "link" }],
  },
  // {
  //   title: "checkout",
  //   type: "link",
  //   path: "/page/account/checkout",
  //   // children: [{ path: "/page/account/cart", title: "cart", type: "link" }],
  // },
];
