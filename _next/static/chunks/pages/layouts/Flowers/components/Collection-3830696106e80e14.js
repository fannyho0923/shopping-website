(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6973],{97992:function(s,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/layouts/Flowers/components/Collection",function(){return n(48861)}])},88533:function(s,e,n){"use strict";var a=n(7297),i=n(85893),r=n(67294),t=n(55850),c=n(17283),d=n(46066),l=n(34726),o=n(40196);function m(){var s=(0,a.Z)(["\n    query  products($type:_CategoryType!,$indexFrom:Int! ,$limit:Int!) {\n        products (type: $type,indexFrom:$indexFrom ,limit:$limit){\n            items {\n                id\n                title\n                description\n                type\n                brand\n                category \n                price\n                stock\n                new\n                sale\n                discount\n                variants{\n                    id\n                    sku\n                    size\n                    color\n                    image_id\n                }\n                images{\n                    image_id\n                    id\n                    alt\n                    src\n                }\n            }\n        }\n    }\n"]);return m=function(){return s},s}var u=(0,c.Ps)(m());e.Z=function(s){var e=s.type,n=s.border,a=s.product,c=(0,r.useContext)(o.$R).state,m=(0,t.a)(u,{variables:{type:e,indexFrom:0,limit:8}}).data;return(0,i.jsxs)("div",{className:"theme-card ".concat(n," "),children:[(0,i.jsx)("h5",{className:"title-border",children:"new product"}),(0,i.jsxs)(d.Z,{className:"offer-slider slide-1",children:[(0,i.jsx)("div",{children:m&&m.products.items.slice(0,a).map((function(s,e){return(0,i.jsxs)("div",{className:"media",children:[(0,i.jsx)("a",{href:s.images[0].src,children:(0,i.jsx)(l.Z,{alt:"",className:"img-fluid blur-up lazyload",src:s.images[0].src})}),(0,i.jsxs)("div",{className:"media-body align-self-center",children:[(0,i.jsxs)("div",{className:"rating",children:[(0,i.jsx)("i",{className:"fa fa-star"})," ",(0,i.jsx)("i",{className:"fa fa-star"})," ",(0,i.jsx)("i",{className:"fa fa-star"})," ",(0,i.jsx)("i",{className:"fa fa-star"})," ",(0,i.jsx)("i",{className:"fa fa-star"})]}),(0,i.jsx)("a",{href:s.images[0].src,children:(0,i.jsx)("h6",{children:s.title})}),(0,i.jsxs)("h4",{children:[c.symbol,(s.price*c.value).toFixed(2)]})]})]},e)}))}),(0,i.jsx)("div",{children:m&&m.products.items.slice(3,6).map((function(s,e){return(0,i.jsxs)("div",{className:"media",children:[(0,i.jsx)("a",{href:s.images[0].src,children:(0,i.jsx)(l.Z,{alt:"",className:"img-fluid blur-up lazyload",src:s.images[0].src})}),(0,i.jsxs)("div",{className:"media-body align-self-center",children:[(0,i.jsxs)("div",{className:"rating",children:[(0,i.jsx)("i",{className:"fa fa-star"})," ",(0,i.jsx)("i",{className:"fa fa-star"})," ",(0,i.jsx)("i",{className:"fa fa-star"})," ",(0,i.jsx)("i",{className:"fa fa-star"})," ",(0,i.jsx)("i",{className:"fa fa-star"})]}),(0,i.jsx)("a",{href:s.images[0].src,children:(0,i.jsx)("h6",{children:s.title})}),(0,i.jsxs)("h4",{children:[c.symbol,(s.price*c.value).toFixed(2)]})]})]},e)}))})]})]})}},48861:function(s,e,n){"use strict";n.r(e);var a=n(7297),i=n(85893),r=n(67294),t=n(98595),c=n(10267),d=n(51252),l=n(88533),o=n(13228),m=n(55850),u=n(17283),x=n(86040),f=n(92097),p=n(9614);function h(){var s=(0,a.Z)(["\n    query  products($type:_CategoryType!,$indexFrom:Int!,$limit:Int!) {\n        products (type: $type,indexFrom:$indexFrom,limit:$limit){\n            items {\n                id\n                title\n                description\n                type\n                brand\n                category \n                price\n                new\n                stock\n                sale\n                discount\n                variants{\n                    id\n                    sku\n                    size\n                    color\n                    image_id\n                }\n                images{\n                    image_id\n                    id\n                    alt\n                    src\n                }\n            }\n        }\n    }\n"]);return h=function(){return s},s}var j=(0,u.Ps)(h());e.default=function(s){var e=s.type,n=s.cartClass,a=s.productDetail,u=(0,r.useContext)(p.Z),h=(0,r.useContext)(f.jv),N=(0,r.useContext)(x.Dh),v=u.quantity,y=(0,m.a)(j,{variables:{type:e,indexFrom:0,limit:2}}).data;return(0,i.jsx)("section",{className:"section-b-space",children:(0,i.jsx)("div",{className:"full-box",children:(0,i.jsxs)(t.Z,{children:[(0,i.jsxs)("div",{className:"title4",children:[(0,i.jsx)("h2",{className:"title-inner4",children:"best selling products"}),(0,i.jsx)("div",{className:"line",children:(0,i.jsx)("span",{})})]}),(0,i.jsxs)(c.Z,{children:[(0,i.jsx)(d.Z,{md:"4",children:(0,i.jsx)(l.Z,{type:e,border:"card-border",product:3})}),(0,i.jsx)(d.Z,{md:"4",className:"center-slider",children:y&&y.products.items.slice(0,1).map((function(s,e){return(0,i.jsx)("div",{children:(0,i.jsx)(o.Z,{product:s,addCompare:function(){return N.addToCompare(s)},addWishlist:function(){return h.addToWish(s)},productDetail:a,addCart:function(){return u.addToCart(s,v)},cartClass:n},e)},e)}))}),(0,i.jsx)(d.Z,{md:"4",children:(0,i.jsx)(l.Z,{type:e,border:"card-border",product:3})})]})]})})})}}},function(s){s.O(0,[1559,3443,6066,6160,7323,3228,9774,2888,179],(function(){return e=97992,s(s.s=e);var e}));var e=s.O();_N_E=e}]);