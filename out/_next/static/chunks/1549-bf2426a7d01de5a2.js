"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1549],{31640:function(e,t,n){n.d(t,{p:function(){return i}});var i=[{title:"Home",type:"link"},{title:"Menu",type:"link",path:"/page/menu"},{title:"Products",type:"link",path:"/shop/three_grid",children:[{title:"Sidebar",type:"sub",children:[{path:"/product-details/1",title:"Left Sidebar",type:"link"},{path:"/product-details/right_sidebar",title:"Right Sidebar",type:"link"},{path:"/product-details/no-sidebar",title:"No Sidebar",type:"link"}]},{title:"About Us",children:[{path:"/product-details/thumbnail_left",title:"Left Image",type:"link"},{path:"/product-details/thumbnail_right",title:"Right Image",type:"link"},{path:"/product-details/thumbnail_outside",title:"Image Outside",type:"link"}]},{title:"3-Column",type:"sub",children:[{path:"/product-details/3_col_left",title:"Thumbnail Left",type:"link"},{path:"/product-details/3_col_right",title:"Thumbnail Right",type:"link"},{path:"/product-details/3_col_bottom",title:"Thumbnail Bottom",type:"link"}]},{path:"/product-details/4_image",title:"4 Image",type:"link",tag:"New"},{path:"/product-details/bundle_product",title:"Bundle Product",type:"link",tag:"New"},{path:"/product-details/sticky",title:"Sticky",type:"link"},{path:"/product-details/accordian",title:"Accordian",type:"link"},{path:"/product-details/image_swatch",title:"Image Swatch",type:"link",tag:"New"},{path:"/product-details/vertical_tab",title:"Vertical Tab",type:"link"}]},{title:"product detail",type:"sub",path:"/product-details/thumbnail_outside"},{title:"About Us",type:"link",path:"/page/about-us"},{title:"Contact",type:"link",path:"/page/account/contact",children:[{path:"/page/account/cart",title:"cart",type:"link"}]},{title:"cart",type:"sub",path:"/page/account/cart"},{title:"checkout",type:"sub",path:"/page/order-success"}]},71549:function(e,t,n){var i=n(85893),a=n(67294),l=n(41664),c=n.n(l),s=n(31640),r=n(98595),u=n(10267),d=n(77058),o=n(11163),h=void 0;t.Z=function(){var e=(0,d.$)().t,t=(0,a.useState)({right:"0px"}),n=t[0],l=t[1],p=(0,o.useRouter)();(0,a.useEffect)((function(){window.innerWidth<750&&l({right:"-410px"}),window.innerWidth<1199&&l({right:"-300px"})}),[]);var m=(0,a.useState)(s.p),g=(m[0],m[1]);(0,a.useEffect)((function(){var e=location.pathname;s.p.filter((function(t){if(t.path===e&&b(t),!t.children)return!1;t.children.filter((function(t){if(t.path===e&&b(t),!t.children)return!1;t.children.filter((function(t){t.path===e&&b(t)}))}))}))}),[]);var b=function(e){s.p.filter((function(t){t!=e&&(t.active=!1),t.children&&t.children.includes(e)&&(t.active=!0),t.children&&t.children.filter((function(n){n.children&&n.children.includes(e)&&(t.active=!0,n.active=!1)}))})),g({mainmenu:s.p})};return(0,i.jsx)("div",{children:(0,i.jsx)("div",{className:"main-navbar",children:(0,i.jsxs)("div",{id:"mainnav",children:[(0,i.jsx)("div",{className:"toggle-nav",onClick:function(){l({right:"0px"}),"/layouts/Gym"==p.asPath&&document.querySelector("#topHeader").classList.add("zindex-class")}.bind(h),children:(0,i.jsx)("i",{className:"fa fa-bars sidebar-bar"})}),(0,i.jsxs)("ul",{className:"nav-menu",style:n,children:[(0,i.jsx)("li",{className:"back-btn",onClick:function(){l({right:"-410px"}),"/layouts/Gym"==p.asPath&&document.querySelector("#topHeader").classList.remove("zindex-class")}.bind(h),children:(0,i.jsxs)("div",{className:"mobile-back text-end",children:[(0,i.jsx)("span",{children:"Back navbar"}),(0,i.jsx)("i",{className:"fa fa-angle-right ps-2","aria-hidden":"true"})]})}),s.p.map((function(t,n){return console.log(t),"link"===t.type?(0,i.jsx)("li",{className:" ".concat(t.megaMenu?"mega-menu":""),children:(0,i.jsx)(c(),{className:"nav-link",href:t.path?"".concat(t.path):"/",children:e(t.title)})},n):"sub"!==t.type?(0,i.jsxs)("li",{className:" ".concat(t.megaMenu?"mega-menu":""),children:[(0,i.jsxs)("a",{className:"nav-link",onClick:function(e){var t;(t=e).target.classList.contains("sub-arrow")||(t.target.nextElementSibling.classList.contains("opensubmenu")?t.target.nextElementSibling.classList.remove("opensubmenu"):(document.querySelectorAll(".nav-submenu").forEach((function(e){e.classList.remove("opensubmenu")})),document.querySelector(".mega-menu-container").classList.remove("opensubmenu"),t.target.nextElementSibling.classList.add("opensubmenu")))},children:[" ",e(t.title),(0,i.jsx)("span",{className:"sub-arrow"})]}),t.children&&!t.megaMenu?(0,i.jsx)("ul",{className:"nav-submenu",children:t.children.map((function(e,t){return(0,i.jsxs)("li",{className:"".concat(e.children?"sub-menu ":""),children:["sub"===e.type?(0,i.jsxs)("a",{href:null,onClick:function(){return(t=e).active||s.p.forEach((function(e){if(s.p.includes(t)&&(e.active=!1),!e.children)return!1;e.children.forEach((function(n){if(e.children.includes(t)&&(n.active=!1),!n.children)return!1;n.children.forEach((function(e){n.children.includes(t)&&(e.active=!1)}))}))})),t.active=!t.active,void g({mainmenu:s.p});var t},children:[e.title,"new"===e.tag?(0,i.jsx)("span",{className:"new-tag",children:"new"}):"",(0,i.jsx)("i",{className:"fa fa-angle-right ps-2"})]}):"","link"===e.type?(0,i.jsx)(c(),{href:"".concat(e.path),children:(0,i.jsxs)("a",{children:[e.title,"new"===e.tag?(0,i.jsx)("span",{className:"new-tag",children:"new"}):""]})}):"",e.children?(0,i.jsx)("ul",{className:"nav-sub-childmenu ".concat(e.active?"menu-open ":"active"),children:e.children.map((function(e,t){return(0,i.jsx)("li",{children:"link"===e.type?(0,i.jsx)(c(),{href:e.path,children:(0,i.jsxs)("a",{className:"sub-menu-title",children:[e.title,"new"===e.tag?(0,i.jsx)("span",{className:"new-tag",children:"new"}):""]})}):""},t)}))}):""]},t)}))}):(0,i.jsx)("div",{className:"mega-menu-container  ".concat(t.megaMenu?"":"opensubmenu"),children:!0===t.megaMenu?(0,i.jsx)(r.Z,{children:(0,i.jsx)(u.Z,{children:t.children.map((function(e,n){return(0,i.jsx)("div",{className:"".concat("small"==t.megaMenuType?"col mega-box":"medium"==t.megaMenuType?"col-lg-3":"large"==t.megaMenuType?"col":""," "),children:(0,i.jsxs)("div",{className:"link-section",children:[(0,i.jsx)("div",{className:"menu-title",children:(0,i.jsx)("h5",{onClick:function(e){var t;(t=e).target.classList.contains("sub-arrow")||(t.target.parentNode.nextElementSibling.classList.contains("opensubmegamenu")?t.target.parentNode.nextElementSibling.classList.remove("opensubmegamenu"):(document.querySelectorAll(".menu-content").forEach((function(e){e.classList.remove("opensubmegamenu")})),t.target.parentNode.nextElementSibling.classList.add("opensubmegamenu")))},children:e.title})}),(0,i.jsx)("div",{className:"menu-content",children:(0,i.jsx)("ul",{children:"Elements"===t.title?e.children.map((function(e,t){return(0,i.jsx)("li",{children:(0,i.jsx)(c(),{href:e.path,children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("i",{className:"icon-".concat(e.icon)}),e.title]})})},t)})):e.children.map((function(e,t){return(0,i.jsx)("li",{children:(0,i.jsx)(c(),{href:e.path,children:e.title})},t)}))})})]})},n)}))})}):""})]},n):void 0}))]})]})})})}}}]);