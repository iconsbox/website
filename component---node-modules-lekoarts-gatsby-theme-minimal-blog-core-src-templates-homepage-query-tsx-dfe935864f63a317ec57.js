(window.webpackJsonp=window.webpackJsonp||[]).push([[10,16,17],{"4IfK":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIsomorphicLayoutEffect=void 0;var c=n("q1tI");t.useIsomorphicLayoutEffect="undefined"!=typeof window?c.useLayoutEffect:c.useEffect},A4YE:function(e,t,n){"use strict";var c=n("q1tI"),a=n.n(c),o=n("izhR"),s=n("Wbzz"),i=n("dq5L"),r=n("KcFz");t.a=function(e){var t=e.tags,n=Object(i.a)(),c=n.tagsPath,l=n.basePath;return a.a.createElement(a.a.Fragment,null,t.map((function(e,t){return a.a.createElement(a.a.Fragment,{key:e.slug},!!t&&", ",a.a.createElement(o.f,{as:s.Link,to:Object(r.a)("/"+l+"/"+c+"/"+e.slug)},e.name))})))}},OTAv:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useScrollPosition=void 0;var c=n("q1tI"),a=n("4IfK"),o="undefined"!=typeof window,s={x:0,y:0},i=function(e){return null==e?void 0:e.getBoundingClientRect()},r=function(e){var t=e.element,n=e.useWindow,c=e.boundingElement;if(!o)return s;if(n)return{x:window.scrollX,y:window.scrollY};var a=i((null==t?void 0:t.current)||document.body),r=i(null==c?void 0:c.current);return a?r?{x:(r.x||0)-(a.x||0),y:(r.y||0)-(a.y||0)}:{x:a.left,y:a.top}:s};t.useScrollPosition=function(e,t,n,s,i,l){var u=c.useRef(r({useWindow:s,boundingElement:l})),m=null,f=function(){var t=r({element:n,useWindow:s,boundingElement:l});e({prevPos:u.current,currPos:t}),u.current=t,m=null};a.useIsomorphicLayoutEffect((function(){var e;if(o){var t=function(){i?null===m&&(m=setTimeout(f,i)):f()};return l?null===(e=l.current)||void 0===e||e.addEventListener("scroll",t):window.addEventListener("scroll",t),function(){var e;l?null===(e=l.current)||void 0===e||e.removeEventListener("scroll",t):window.removeEventListener("scroll",t),m&&clearTimeout(m)}}}),t)},t.useScrollPosition.defaultProps={deps:[],element:!1,useWindow:!1,wait:null,boundingElement:!1}},W27q:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return N}));var c=n("q1tI"),a=n.n(c),o=n("2A+t"),s=n("Wbzz"),i=n("lTFH"),r=n("wx14"),l=n("Ff2n"),u=c.createElement("path",{d:"M5 13h11.86l-3.63 4.36a1 1 0 001.54 1.28l5-6a1.19 1.19 0 00.09-.15c0-.05.05-.08.07-.13A1 1 0 0020 12a1 1 0 00-.07-.36c0-.05-.05-.08-.07-.13a1.19 1.19 0 00-.09-.15l-5-6A1 1 0 0014 5a1 1 0 00-.64.23 1 1 0 00-.13 1.41L16.86 11H5a1 1 0 000 2z"}),m=function(e){var t=e.className,n=e.size,a=Object(l.a)(e,["className","size"]);return c.createElement("svg",Object(r.a)({viewBox:"0 0 24 24",className:t,style:{width:10*n,height:10*n},focusable:"false",fill:"currentColor"},a),u)};m.defaultProps={size:1.5};var f=m,b=n("T1Xd"),d=n("9Dj+"),p=n("7nTi"),j=function(e){var t=e.children;return Object(o.c)("section",{sx:{mb:[5,5,6],ul:{margin:0,padding:0},li:{listStyle:"none",mb:3},a:{variant:"links.listItem"}}},t)},v=n("dq5L"),h=n("KcFz"),O=n("Kel5"),g=n("kpNy"),x=n("onsC"),w=n("oppL"),y=n("O7Yc"),z=n("mmdn"),E=function(e){var t=e.posts,n=Object(b.d)(O.a),a=Object(v.a)(),r=a.basePath,l=a.blogPath;return Object(i.useScrollPosition)((function(e){e.currPos.y<-80?n(1):n(0)})),Object(c.useEffect)((function(){n(0)}),[]),Object(o.c)(d.a,null,Object(o.c)(g.default,null),Object(o.c)("div",{sx:{display:"flex",alignContent:"center",justifyContent:"center",position:"relative",bottom:"-3.4rem"}},Object(o.c)(s.Link,{to:Object(h.a)("/"+r+"/app"),sx:{display:"flex",padding:"0.5rem 1.6rem",fontSize:"1.2rem",fontWeight:500,background:"rgb(108, 187, 71)",color:"#fff",borderRadius:"24px",textDecoration:"none",height:"3rem",zIndex:9,":hover svg":{transform:"translateX(0.7rem)"}}},"Start using"," ",Object(o.c)(f,{style:{transition:"transform ease-in-out 0.3s",width:"3rem",height:"2rem"}}))),Object(o.c)(x.default,null),Object(o.c)(y.default,null),Object(o.c)(w.default,null),Object(o.c)("div",{className:"nice-box"},Object(o.c)("h3",{className:"nice-title"},"Blog posts"),Object(o.c)(s.Link,{sx:{position:"absolute",top:"-1rem",fontSize:"0.8rem",right:"0.8rem",background:"#fff",padding:"0.4rem",textDecoration:"none"},to:Object(h.a)("/"+r+"/"+l)},"Read all posts"),Object(o.c)("div",{sx:{padding:"0 1.6rem"}},Object(o.c)(z.a,{posts:t,showTags:!1}))),Object(o.c)(j,null,Object(o.c)(p.a,{text:"Donate"}),"You can donate us with bitcoin and this address:",Object(o.c)("div",{sx:{color:"#B57BFF"}},"3BuDiSHazi66AADg6WDMj3DmbYwPvUijBK")))};t.default=function(e){var t=e.data.allPost;return a.a.createElement(E,{posts:t.nodes})};var N="3458255521"},kpNy:function(e,t,n){"use strict";n.r(t);var c=n("q1tI"),a=n.n(c),o=n("2A+t"),s=n("wx14"),i=n("Ff2n"),r=c.createElement("path",{d:"M224 232a32 32 0 0164 0m160-32h16m-400 0H48m16 0c0 96 16 128 80 128s80-32 80-128c0 0-16-16-80-16s-80 16-80 16zm384 0c0 96-16 128-80 128s-80-32-80-128c0 0 16-16 80-16s80 16 80 16z",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32"}),l=function(e){var t=e.className,n=e.size,a=Object(i.a)(e,["className","size"]);return c.createElement("svg",Object(s.a)({viewBox:"0 0 512 512",className:t,style:{width:10*n,height:10*n},focusable:"false",fill:"currentColor"},a),r)};l.defaultProps={size:1.5};var u=l,m=c.createElement("path",{d:"M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"}),f=function(e){var t=e.className,n=e.size,a=Object(i.a)(e,["className","size"]);return c.createElement("svg",Object(s.a)({viewBox:"0 0 24 24",className:t,style:{width:10*n,height:10*n},focusable:"false",fill:"currentColor"},a),m)};f.defaultProps={size:1.5};var b=f,d=c.createElement("path",{d:"M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"}),p=function(e){var t=e.className,n=e.size,a=Object(i.a)(e,["className","size"]);return c.createElement("svg",Object(s.a)({viewBox:"0 0 24 24",className:t,style:{width:10*n,height:10*n},focusable:"false",fill:"currentColor"},a),d)};p.defaultProps={size:1.5};var j=p,v=c.createElement("path",{d:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"}),h=function(e){var t=e.className,n=e.size,a=Object(i.a)(e,["className","size"]);return c.createElement("svg",Object(s.a)({viewBox:"0 0 448 512",className:t,style:{width:10*n,height:10*n},focusable:"false",fill:"currentColor"},a),v)};h.defaultProps={size:1.5};var O=h;t.default=function(){return Object(o.c)(a.a.Fragment,null,Object(o.c)(u,{sx:{position:"absolute",width:"40rem !important",height:"40rem !important",right:"-12rem",top:"-8rem",opacity:"0.07"}}),Object(o.c)(b,{sx:{position:"absolute",width:"20rem !important",height:"20rem !important",left:"-3rem",top:"2rem",opacity:"0.07"}}),Object(o.c)(O,{sx:{position:"absolute",width:"10rem !important",height:"10rem !important",left:"-6rem",top:"32rem",opacity:"0.07",transform:"rotate(55deg)"}}),Object(o.c)(j,{sx:{position:"absolute",width:"9rem !important",height:"9rem !important",right:"-4rem",top:"26rem",opacity:"0.05"}}),Object(o.c)("section",{sx:{boxSizing:"border-box",display:"block",justifyContent:"space-between",mt:[6],lineHeight:"4rem",color:"",a:{variant:"links.secondary"},flexDirection:["column","column","row"],fontSize:44,fontWeight:700,width:"70%",h1:{m:0}}},"In"," ",Object(o.c)("h1",{sx:{fontSize:44,display:"inline-block",fontWeight:800,color:"#6CBB47"}},Object(o.c)("span",{sx:{color:"#B57BFF"}},"Icon"),"Box")," ","we have a world of famous icons 🎉, with over"," ",Object(o.c)("span",{sx:{fontWeight:900,color:"#B57BFF"}},"21,000")," free icons 🚀"))}},lTFH:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var c=n("OTAv");Object.defineProperty(t,"useScrollPosition",{enumerable:!0,get:function(){return c.useScrollPosition}})},mmdn:function(e,t,n){"use strict";var c=n("2A+t"),a=n("q1tI"),o=n.n(a),s=n("izhR"),i=n("Wbzz"),r=n("A4YE"),l=function(e){var t=e.post,n=e.showTags,a=void 0===n||n;return Object(c.c)(s.a,{mb:4},Object(c.c)(s.f,{as:i.Link,to:t.slug,sx:{fontSize:[1,2,3],color:"text"}},t.title),Object(c.c)("p",{sx:{color:"secondary",mt:1,a:{color:"secondary"},fontSize:[1,1,2]}},Object(c.c)("time",null,t.date),t.tags&&a&&Object(c.c)(o.a.Fragment,null," — ",Object(c.c)(r.a,{tags:t.tags}))))};t.a=function(e){var t=e.posts,n=e.className,a=void 0===n?"":n,o=e.showTags,s=void 0===o||o;return Object(c.c)("section",{className:a},t.map((function(e){return Object(c.c)(l,{key:e.slug,post:e,showTags:s})})))}},oppL:function(e,t,n){"use strict";n.r(t);var c=n("2A+t"),a=n("izhR");t.default=function(){return Object(c.c)("div",{className:"nice-box"},Object(c.c)("h3",{className:"nice-title"},"Feedbacks"),Object(c.c)(a.d,{gap:4,columns:[1,null,3],sx:{padding:"1.6rem"}},Object(c.c)(a.a,{className:"emoji-box"},Object(c.c)("span",null,"🔥"),Object(c.c)("div",null,"Great work bruh."),Object(c.c)("small",null,"Ali Taherian")),Object(c.c)(a.a,{className:"emoji-box"},Object(c.c)("span",null,"🥰"),Object(c.c)("div",null,"I love it, I used it in all of my projects"),Object(c.c)("small",null,"Sarah Jalali")),Object(c.c)(a.a,{className:"emoji-box"},Object(c.c)("span",null,"👍"),Object(c.c)("div",null,"Just Great and Beautiful webapp"),Object(c.c)("small",null,"Robbert Robinson")),Object(c.c)(a.a,{className:"emoji-box"},Object(c.c)("span",null,"⚡"),Object(c.c)("div",null,"I do my stuffs faster with iconbox"),Object(c.c)("small",null,"Morteza Nasiri")),Object(c.c)(a.a,{className:"flex-center",sx:{justifyContent:"flex-end "}},Object(c.c)("small",null,"Send your feedback to:")),Object(c.c)(a.a,{className:"flex-center",sx:{justifyContent:"flex-start "}},Object(c.c)("small",null,Object(c.c)("a",{href:"mailto:info@iconbox.space"},"info@iconbox.space")))))}}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-homepage-query-tsx-dfe935864f63a317ec57.js.map