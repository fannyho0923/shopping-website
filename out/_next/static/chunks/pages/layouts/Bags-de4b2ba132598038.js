(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5022],{23801:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/layouts/Bags",function(){return n(84061)}])},83839:function(e,s,n){"use strict";var i=n(26042),a=n(69396),r=n(7297),l=n(85893),t=n(67294),c=n(46066),d=n(41664),o=n.n(d),m=n(17283),h=n(55850),x=n(79011),u=n(98595),j=n(10267),f=n(51252),p=n(34726);function g(){var e=(0,r.Z)(["\n  query blog($type: String!) {\n    blog(type: $type) {\n      img\n      link\n      title\n      desc\n      date\n    }\n  }\n"]);return g=function(){return e},e}var v=(0,m.Ps)(g());s.Z=function(e){var s=e.type,n=e.sectionClass,r=e.title,d=e.inner,m=e.hrClass,g=(0,h.a)(v,{variables:{type:s}}).data;return(0,l.jsx)(t.Fragment,{children:(0,l.jsx)("section",{className:n,children:(0,l.jsx)(u.Z,{children:(0,l.jsx)(j.Z,{children:(0,l.jsxs)(f.Z,{md:"12",children:[(0,l.jsxs)("div",{className:r,children:[(0,l.jsx)("h4",{children:"our collection"}),(0,l.jsx)("h2",{className:d,children:"special products"}),m?(0,l.jsx)("hr",{role:"tournament6"}):(0,l.jsx)("div",{className:"line",children:(0,l.jsx)("span",{})})]}),(0,l.jsx)(c.Z,(0,a.Z)((0,i.Z)({},x.y3),{className:"slide-3 no-arrow ",children:g&&g.blog.map((function(e,s){return(0,l.jsxs)(f.Z,{md:"12",children:[(0,l.jsx)(o(),{href:"/blogs/blog_detail",children:(0,l.jsxs)("div",{className:"classic-effect",children:[(0,l.jsx)(p.Z,{src:e.img,className:"img-fluid",alt:""}),(0,l.jsx)("span",{})]})}),(0,l.jsxs)("div",{className:"blog-details",children:[(0,l.jsx)("h4",{children:e.title}),(0,l.jsx)(o(),{href:"/blogs/blog_detail",children:(0,l.jsxs)("p",{children:[e.desc," "]})}),(0,l.jsx)("hr",{className:"style1"}),(0,l.jsxs)("h6",{children:["by: ",e.date]})]})]},s)}))}))]})})})})})}},2607:function(e,s,n){"use strict";var i=n(26042),a=n(69396),r=n(7297),l=n(85893),t=n(67294),c=n(46066),d=n(55850),o=n(17283),m=n(13228),h=n(98595),x=n(10267),u=n(51252),j=n(9614),f=n(92097),p=n(3038),g=n(86040);n(3081);function v(){var e=(0,r.Z)(["\n  query products($type: _CategoryType!, $indexFrom: Int!, $limit: Int!) {\n    products(type: $type, indexFrom: $indexFrom, limit: $limit) {\n      items {\n        id\n        title\n        description\n        type\n        brand\n        category\n        price\n        new\n        stock\n        sale\n        discount\n        variants {\n          id\n          sku\n          size\n          color\n          image_id\n        }\n        images {\n          image_id\n          id\n          alt\n          src\n        }\n      }\n    }\n  }\n"]);return v=function(){return e},e}var b=(0,o.Ps)(v());s.Z=function(e){var s=e.type,n=e.title,r=e.subtitle,o=e.designClass,v=e.noSlider,N=e.cartClass,Z=e.productSlider,y=e.titleClass,C=e.noTitle,k=e.innerClass,w=e.inner,_=e.backImage,T=(0,t.useContext)(j.Z),S=(0,t.useContext)(f.jv),$=(0,t.useContext)(g.Dh),F=T.quantity,q=(0,t.useState)(!0),I=q[0],P=q[1],z=(0,d.a)(b,{variables:{type:s,indexFrom:0,limit:8}}),E=z.loading,W=z.data;return(0,t.useEffect)((function(){setTimeout((function(){P(!1)}),1)}),[I]),(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("section",{className:o,children:v?(0,l.jsx)(h.Z,{children:(0,l.jsx)(x.Z,{children:(0,l.jsxs)(u.Z,{children:["null"===C?"":(0,l.jsxs)("div",{className:k,children:[r?(0,l.jsx)("h4",{children:r}):"",(0,l.jsx)("h2",{className:w,children:n}),y?(0,l.jsx)("hr",{role:"tournament6"}):(0,l.jsx)("div",{className:"line",children:(0,l.jsx)("span",{})})]}),I?(0,l.jsxs)("div",{className:"row mx-0 margin-default",children:[(0,l.jsx)("div",{className:"col-xl-3 col-lg-4 col-6",children:(0,l.jsx)(p.Z,{})}),(0,l.jsx)("div",{className:"col-xl-3 col-lg-4 col-6",children:(0,l.jsx)(p.Z,{})}),(0,l.jsx)("div",{className:"col-xl-3 col-lg-4 col-6",children:(0,l.jsx)(p.Z,{})}),(0,l.jsx)("div",{className:"col-xl-3 col-lg-4 col-6",children:(0,l.jsx)(p.Z,{})})]}):(0,l.jsx)(c.Z,(0,a.Z)((0,i.Z)({},Z),{className:"product-m no-arrow",children:W&&W.products.items.map((function(e,s){return(0,l.jsx)("div",{children:(0,l.jsx)(m.Z,{product:e,title:n,addWishlist:function(){return S.addToWish(e)},addCart:function(){return T.addToCart(e,F)},addCompare:function(){return $.addToCompare(e)},cartClass:N,backImage:_})},s)}))}))]})})}):(0,l.jsxs)(l.Fragment,{children:[n?(0,l.jsxs)("div",{className:"title1 title-gradient section-t-space",children:[(0,l.jsx)("h4",{children:r}),(0,l.jsx)("h2",{className:"title-inner1",children:n}),(0,l.jsx)("hr",{role:"tournament6"})]}):"",(0,l.jsx)(h.Z,{children:(0,l.jsx)(x.Z,{className:"margin-default",children:W&&W.products&&W.products.items&&0!==!W.products.items.length&&!E?W&&W.products.items.slice(0,8).map((function(e,s){return(0,l.jsx)(u.Z,{xl:"3",sm:"6",children:(0,l.jsx)("div",{children:(0,l.jsx)(m.Z,{product:e,backImage:_,addCompare:function(){return $.addToCompare(e)},addWishlist:function(){return S.addToWish(e)},title:n,cartClass:N,addCart:function(){return T.addToCart(e,F)}},s)})},s)})):(0,l.jsxs)("div",{className:"row margin-default",children:[(0,l.jsx)("div",{className:"col-xl-3 col-lg-4 col-6",children:(0,l.jsx)(p.Z,{})}),(0,l.jsx)("div",{className:"col-xl-3 col-lg-4 col-6",children:(0,l.jsx)(p.Z,{})}),(0,l.jsx)("div",{className:"col-xl-3 col-lg-4 col-6",children:(0,l.jsx)(p.Z,{})}),(0,l.jsx)("div",{className:"col-xl-3 col-lg-4 col-6",children:(0,l.jsx)(p.Z,{})})]})})})]})})})}},32269:function(e,s,n){"use strict";var i=n(7297),a=n(85893),r=n(67294),l=n(46066),t=n(98595),c=n(10267),d=n(51252),o=n(55850),m=n(17283),h=n(59219),x=n(88533),u=n(86040),j=n(92097),f=n(9614);function p(){var e=(0,i.Z)(["\n    query  products($type:_CategoryType!,$indexFrom:Int! ,$limit:Int!) {\n        products (type: $type,indexFrom:$indexFrom ,limit:$limit){\n            items {\n                id\n                title\n                description\n                type\n                brand\n                category \n                price\n                new\n                stock\n                sale\n                discount\n                variants{\n                    id\n                    sku\n                    size\n                    color\n                    image_id\n                }\n                images{\n                    image_id\n                    id\n                    alt\n                    src\n                }\n            }\n        }\n    }\n"]);return p=function(){return e},e}var g=(0,m.Ps)(p());s.Z=function(e){var s=e.type,n=e.cartClass,i=e.designClass,m=(0,r.useContext)(f.Z),p=(0,r.useContext)(j.jv),v=(0,r.useContext)(u.Dh),b=m.quantity,N=(0,o.a)(g,{variables:{type:s,indexFrom:0,limit:8}}).data;return(0,a.jsx)("section",{className:i,children:(0,a.jsx)(t.Z,{children:(0,a.jsxs)(c.Z,{className:"partition3 partition_3",children:[(0,a.jsx)(d.Z,{lg:"4",children:(0,a.jsx)(x.Z,{type:s,border:"card-border",product:3})}),(0,a.jsx)(d.Z,{lg:"4",className:"center-slider border-0",children:(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"title2",children:[(0,a.jsx)("h4",{children:"on sale"}),(0,a.jsx)("h2",{className:"title-inner2",children:"season sale"})]}),(0,a.jsx)(l.Z,{className:"offer-slider slide-1 center-image-width no-arrow",children:N&&N.products.items.slice(0,2).map((function(e,s){return(0,a.jsx)("div",{children:(0,a.jsx)(h.Z,{product:e,onAddToCompareClicked:function(){return v.addToCompare(e)},addWishlist:function(){return p.addToWish(e)},addCart:function(){return m.addToCart(e,b)},cartClass:n})},s)}))})]})}),(0,a.jsx)(d.Z,{lg:"4",children:(0,a.jsx)(x.Z,{type:s,border:"card-border",product:3})})]})})})}},88533:function(e,s,n){"use strict";var i=n(7297),a=n(85893),r=n(67294),l=n(55850),t=n(17283),c=n(46066),d=n(34726),o=n(40196);function m(){var e=(0,i.Z)(["\n    query  products($type:_CategoryType!,$indexFrom:Int! ,$limit:Int!) {\n        products (type: $type,indexFrom:$indexFrom ,limit:$limit){\n            items {\n                id\n                title\n                description\n                type\n                brand\n                category \n                price\n                stock\n                new\n                sale\n                discount\n                variants{\n                    id\n                    sku\n                    size\n                    color\n                    image_id\n                }\n                images{\n                    image_id\n                    id\n                    alt\n                    src\n                }\n            }\n        }\n    }\n"]);return m=function(){return e},e}var h=(0,t.Ps)(m());s.Z=function(e){var s=e.type,n=e.border,i=e.product,t=(0,r.useContext)(o.$R).state,m=(0,l.a)(h,{variables:{type:s,indexFrom:0,limit:8}}).data;return(0,a.jsxs)("div",{className:"theme-card ".concat(n," "),children:[(0,a.jsx)("h5",{className:"title-border",children:"new product"}),(0,a.jsxs)(c.Z,{className:"offer-slider slide-1",children:[(0,a.jsx)("div",{children:m&&m.products.items.slice(0,i).map((function(e,s){return(0,a.jsxs)("div",{className:"media",children:[(0,a.jsx)("a",{href:e.images[0].src,children:(0,a.jsx)(d.Z,{alt:"",className:"img-fluid blur-up lazyload",src:e.images[0].src})}),(0,a.jsxs)("div",{className:"media-body align-self-center",children:[(0,a.jsxs)("div",{className:"rating",children:[(0,a.jsx)("i",{className:"fa fa-star"})," ",(0,a.jsx)("i",{className:"fa fa-star"})," ",(0,a.jsx)("i",{className:"fa fa-star"})," ",(0,a.jsx)("i",{className:"fa fa-star"})," ",(0,a.jsx)("i",{className:"fa fa-star"})]}),(0,a.jsx)("a",{href:e.images[0].src,children:(0,a.jsx)("h6",{children:e.title})}),(0,a.jsxs)("h4",{children:[t.symbol,(e.price*t.value).toFixed(2)]})]})]},s)}))}),(0,a.jsx)("div",{children:m&&m.products.items.slice(3,6).map((function(e,s){return(0,a.jsxs)("div",{className:"media",children:[(0,a.jsx)("a",{href:e.images[0].src,children:(0,a.jsx)(d.Z,{alt:"",className:"img-fluid blur-up lazyload",src:e.images[0].src})}),(0,a.jsxs)("div",{className:"media-body align-self-center",children:[(0,a.jsxs)("div",{className:"rating",children:[(0,a.jsx)("i",{className:"fa fa-star"})," ",(0,a.jsx)("i",{className:"fa fa-star"})," ",(0,a.jsx)("i",{className:"fa fa-star"})," ",(0,a.jsx)("i",{className:"fa fa-star"})," ",(0,a.jsx)("i",{className:"fa fa-star"})]}),(0,a.jsx)("a",{href:e.images[0].src,children:(0,a.jsx)("h6",{children:e.title})}),(0,a.jsxs)("h4",{children:[t.symbol,(e.price*t.value).toFixed(2)]})]})]},s)}))})]})]})}},26235:function(e,s,n){"use strict";var i=n(85893);n(67294);s.Z=function(e){var s=e.link,n=e.title,a=e.service,r=e.marijuana,l=e.lastChild;return(0,i.jsxs)("div",{className:"".concat(r?"":"media"," ").concat(l?"border-0 m-0":""),children:[(0,i.jsx)("div",{dangerouslySetInnerHTML:{__html:s}}),(0,i.jsxs)("div",{className:"media-body",children:[(0,i.jsx)("h4",{children:n}),(0,i.jsx)("p",{children:a})]})]})}},80838:function(e,s,n){"use strict";var i=n(85893),a=n(67294),r=n(98595),l=n(10267),t=n(51252),c=n(79011),d=n(26235),o=[{link:c.cD,title:"free shipping",service:"free shipping world wide"},{link:c.zY,title:"24 X 7 service",service:"online service for 24 x 7"},{link:c.C2,title:"festival offer",service:"new online special festival offer"},{link:c.sA,title:"online payment",service:"new online special festival offer"}];s.Z=function(e){var s=e.layoutClass,n=e.hrLine;return(0,i.jsx)(a.Fragment,{children:(0,i.jsx)("section",{className:s,children:(0,i.jsx)(r.Z,{className:"absolute-bg",children:(0,i.jsx)("div",{className:"service p-0 ",children:(0,i.jsx)(l.Z,{children:o.map((function(e,s){return(0,i.jsx)(t.Z,{lg:"3",sm:"6",className:" ".concat(n?"service-block1":"service-block"),children:(0,i.jsx)(d.Z,{link:e.link,title:e.title,service:e.service,hrLine:n})},s)}))})})})})})}},7383:function(e,s,n){"use strict";var i=n(26042),a=n(69396),r=n(7297),l=n(85893),t=(n(67294),n(46066)),c=n(98595),d=n(10267),o=n(51252),m=n(34726),h=n(55850);function x(){var e=(0,r.Z)(["\n  query instagram($type: String!) {\n    instagram(type: $type) {\n      img\n    }\n  }\n"]);return x=function(){return e},e}var u=(0,n(17283).Ps)(x()),j={dots:!1,infinite:!0,speed:300,slidesToShow:7,slidesToScroll:7,responsive:[{breakpoint:1367,settings:{slidesToShow:6,slidesToScroll:6}},{breakpoint:1024,settings:{slidesToShow:5,slidesToScroll:5,infinite:!0}},{breakpoint:600,settings:{slidesToShow:4,slidesToScroll:4}},{breakpoint:480,settings:{slidesToShow:3,slidesToScroll:3}}]};s.Z=function(e){var s=e.type,n=(0,h.a)(u,{variables:{type:s}}).data;return(0,l.jsx)("section",{className:"instagram ratio_square",children:(0,l.jsx)(c.Z,{className:"".concat("nursery"==s||"bags"==s||"fashion"==s||"kids"==s||"christmas"==s||"fashion"==s||"marketplace"==s?"p-0":""),fluid:!0,children:(0,l.jsx)(d.Z,{children:(0,l.jsxs)(o.Z,{className:"pt-0",children:[(0,l.jsx)("h2",{className:"title-borderless",children:"# instagram"}),(0,l.jsx)("div",{className:"slide-7 no-arrow slick-instagram",children:(0,l.jsx)(t.Z,(0,a.Z)((0,i.Z)({},j),{children:n&&n.instagram.map((function(e,s){return(0,l.jsx)("div",{children:(0,l.jsx)("a",{href:null,children:(0,l.jsxs)("div",{className:"instagram-box",children:[(0,l.jsx)(m.Z,{alt:"",src:e.img,className:"bg-img",style:{width:"100%"}}),(0,l.jsx)("div",{className:"overlay",children:(0,l.jsx)("i",{className:"fa fa-instagram","aria-hidden":"true"})})]})})},s)}))}))})]})})})})}},96577:function(e,s,n){"use strict";n.r(s);var i=n(85893),a=(n(67294),n(46066)),r=n(64689),l=[{img:"home6",title:"summer sale",desc:"the bag",link:"# ",classes:"p-center text-center"},{img:"home7",title:"summer sale",desc:"the bag",link:"# ",classes:"p-center text-center"},{img:"home8",title:"summer sale",desc:"the bag",link:"# ",classes:"p-center text-center"}];s.default=function(){return(0,i.jsx)("section",{className:"p-0",children:(0,i.jsxs)(a.Z,{className:"slide-1 home-slider",children:[l.map((function(e,s){return(0,i.jsx)(r.default,{img:e.img,desc:e.desc,title:e.title,link:e.link,classes:e.classes},s)}))," "]})})}},55824:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return m}});var i=n(85893),a=(n(67294),n(98595)),r=n(10267),l=n(51252),t=n(34726),c="/_next/static/media/cat1.b6e8ba88.jpg",d="/_next/static/media/cat2.b6e8ba88.jpg",o="/_next/static/media/cat3.b6e8ba88.jpg",m=function(){return(0,i.jsx)("div",{className:"category-bg ratio_square",children:(0,i.jsx)(a.Z,{fluid:!0,className:"p-0",children:(0,i.jsxs)(r.Z,{className:"order-section",children:[(0,i.jsx)(l.Z,{sm:"4",className:"p-0",children:(0,i.jsx)("a",{href:"#",className:"image-block",children:(0,i.jsx)(t.Z,{alt:"",src:c,className:"img-fluid blur-up lazyload bg-img"})})}),(0,i.jsx)(l.Z,{sm:"4",className:"p-0",children:(0,i.jsx)("div",{className:"contain-block even",children:(0,i.jsxs)("div",{children:[(0,i.jsx)("h6",{children:"new products"}),(0,i.jsx)("a",{href:"#",children:(0,i.jsx)("h2",{children:"zipper storage bag"})}),(0,i.jsx)("a",{href:"#",className:"btn btn-solid category-btn",children:"-80% off"}),(0,i.jsx)("a",{href:"#",children:(0,i.jsx)("h6",{children:(0,i.jsx)("span",{children:"shop now"})})})]})})}),(0,i.jsx)(l.Z,{sm:"4",className:"p-0",children:(0,i.jsx)("a",{href:"#",className:"image-block",children:(0,i.jsx)("img",{alt:"",src:d,className:"img-fluid blur-up lazyload bg-img"})})}),(0,i.jsx)(l.Z,{sm:"4",className:"p-0",children:(0,i.jsx)("div",{className:"contain-block",children:(0,i.jsxs)("div",{children:[(0,i.jsx)("h6",{children:"on sale"}),(0,i.jsx)("a",{href:"#",children:(0,i.jsx)("h2",{children:"tucker bag"})})," ",(0,i.jsx)("a",{href:"#",className:"btn btn-solid category-btn",children:"save 30% off"}),(0,i.jsx)("a",{href:"#",children:(0,i.jsx)("h6",{children:(0,i.jsx)("span",{children:"shop now"})})})]})})}),(0,i.jsx)(l.Z,{sm:"4",className:"p-0",children:(0,i.jsx)("a",{href:"#",className:"image-block even",children:(0,i.jsx)("img",{alt:"",src:o,className:"img-fluid blur-up lazyload bg-img"})})}),(0,i.jsx)(l.Z,{sm:"4",className:"p-0",children:(0,i.jsx)("div",{className:"contain-block",children:(0,i.jsxs)("div",{children:[(0,i.jsx)("h6",{children:"summer sale"}),(0,i.jsx)("a",{href:"#",children:(0,i.jsx)("h2",{children:"gate check bag"})})," ",(0,i.jsx)("a",{href:"#",className:"btn btn-solid category-btn",children:"minimum 50% off"}),(0,i.jsx)("a",{href:"#",children:(0,i.jsx)("h6",{children:(0,i.jsx)("span",{children:"shop now"})})})]})})})]})})})}},36339:function(e,s,n){"use strict";n.r(s);var i=n(85893),a=(n(67294),n(10267)),r=n(51252);s.default=function(){return(0,i.jsx)("div",{className:"container category-button",children:(0,i.jsx)("section",{className:"section-b-space border-section border-bottom-0",children:(0,i.jsx)(a.Z,{className:"partition1",children:["airbag","burn bag","briefcase","carpet bag","money bag","tucker bag"].map((function(e,s){return(0,i.jsx)(r.Z,{children:(0,i.jsx)("a",{href:"#",className:"btn btn-outline d-block w-100",children:e})},s)}))})})})}},19530:function(e,s,n){"use strict";n.r(s);var i=n(85893);n(67294);s.default=function(){return(0,i.jsx)("section",{className:"p-0",children:(0,i.jsx)("div",{className:"full-banner banner-layout-3 parallax text-center p-center parallax-banner2",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col",children:(0,i.jsxs)("div",{className:"banner-contain",children:[(0,i.jsx)("h4",{className:"color pt-0",children:"special offer for you"}),(0,i.jsx)("h3",{children:"leather bag"}),(0,i.jsx)("h4",{children:"extra 50% off"})," ",(0,i.jsx)("a",{href:"#",className:"btn btn-solid",children:"shop now"})]})})})})})})}},84061:function(e,s,n){"use strict";n.r(s);var i=n(85893),a=n(67294),r=n(25921),l=n(96577),t=n(97397),c=n(36339),d=n(19530),o=n(80838),m=n(32269),h=n(55824),x=n(2607),u=n(83839),j=n(7383),f=n(79011),p=n(42410),g=n(64593),v=n(21582);s.default=function(){return(0,a.useEffect)((function(){document.documentElement.style.setProperty("--theme-deafult","#f0b54d")})),(0,i.jsxs)(a.Fragment,{children:[(0,i.jsxs)(g.Z,{children:[(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,i.jsx)("link",{rel:"icon",type:"image/x-icon",href:"/assets/images/favicon/3.png"})]}),(0,i.jsxs)("div",{className:"bg-white",children:[(0,i.jsx)(p.Z,{}),(0,i.jsx)(r.Z,{noTopBar:!0,logoName:"layout3/logo.png",direction:"top",topClass:"top-header top-header-dark2"}),(0,i.jsx)(l.default,{}),(0,i.jsx)("div",{className:"section-b-space",children:(0,i.jsx)(t.Z,{type:"bags",ProductSlider:f.XG,designClass:"ratio_square",cartClass:"cart-detail",noSlider:"true"})}),(0,i.jsx)(c.default,{}),(0,i.jsx)(d.default,{}),(0,i.jsx)(m.Z,{type:"bags",title:"Product style 2",ProductSlider:f.XG,designClass:"bag-product ratio_square",cartClass:"cart-detail",noSlider:"true"}),(0,i.jsx)("div",{className:"service section-b-space",children:(0,i.jsx)(o.Z,{})}),(0,i.jsx)(h.default,{}),(0,i.jsx)(x.Z,{type:"bags",title:"Top Collection",subtitle:"special offer",productSlider:f.XG,designClass:"ratio_asos",noSlider:"true",cartClass:"cart-detail",inner:"title-inner1",innerClass:"title1"}),(0,i.jsx)(u.Z,{type:"bags",sectionClass:"blog ratio3_2",inner:"title-inner1",title:"title1"}),(0,i.jsx)(j.Z,{type:"bags"}),(0,i.jsx)(v.Z,{footerSection:" border-b",footerLogoClass:"text-center",logoName:"layout3/footerlogo.png",logoImg:!0,myAccount:!0,layoutClass:"darker-subfooter"})]})]})}},64689:function(e,s,n){"use strict";n.r(s);var i=n(85893),a=n(41664),r=n.n(a),l=n(98595),t=n(10267),c=n(51252);s.default=function(e){var s=e.img,n=e.title,a=e.desc,d=e.link,o=e.classes,m=e.btn,h=e.btnClass;return(0,i.jsx)("div",{children:(0,i.jsx)("div",{className:"home ".concat(s," ").concat(o||"text-center"),children:(0,i.jsx)(l.Z,{children:(0,i.jsx)(t.Z,{children:(0,i.jsx)(c.Z,{children:(0,i.jsx)("div",{className:"slider-contain",children:(0,i.jsxs)("div",{children:[(0,i.jsx)("h4",{children:n}),(0,i.jsx)("h1",{children:a}),(0,i.jsx)(r(),{href:d,children:(0,i.jsxs)("a",{className:"btn ".concat(h||"btn-solid"),children:[m||"Shop Now"," "]})})]})})})})})})})}}},function(e){e.O(0,[2016,3590,1559,3443,7076,6066,6941,6160,8369,5254,1549,4751,5921,9011,3228,2009,6705,6492,9774,2888,179],(function(){return s=23801,e(e.s=s);var s}));var s=e.O();_N_E=s}]);