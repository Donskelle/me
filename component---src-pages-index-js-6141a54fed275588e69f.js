(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{191:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(226),i=a(204),l=a(194);function s(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n  html {\n    text-rendering: optimizeLegibility;\n    overflow-x: hidden;\n    box-sizing: border-box;\n    -ms-overflow-style: scrollbar;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n    background-color: #161719;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  html, body {\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    color: #ffffff;\n  }\n  a {\n    text-decoration: none;\n  }\n"]);return s=function(){return e},e}var m=Object(l.a)(s()),c=(a(29),a(30),a(14),a(51),a(198)),d=Object(l.c)(o.ParallaxLayer).withConfig({displayName:"elements__Content",componentId:"sc-1vvwvrf-0"})(["",";"],{padding:"1.5rem","@media (min-width: 600px)":{padding:"3rem"},"@media (min-width: 900px)":{padding:"6rem"},justifyContent:"center",alignItems:"center",display:"flex",zIndex:"50",overflowY:"hidden",flexDirection:"column"}),p=Object(l.c)(o.ParallaxLayer).withConfig({displayName:"elements__ContentBG",componentId:"sc-1vvwvrf-1"})(["",";background:",";clip-path:",";"],{position:"absolute",width:"100%",height:"100%"},function(e){return e.bg},function(e){return e.clipPath}),f=l.c.span.withConfig({displayName:"elements__Wrapper",componentId:"sc-1vvwvrf-2"})(["",";",";left:",";top:",";font-size:",";"],{position:"absolute"},function(e){return e.hiddenMobile&&"display: none;"},function(e){return e.left},function(e){return e.top},function(e){return e.size}),g=function(e){var t=e.left,a=e.top,n=e.hiddenMobile,o=e.emoji,i=Math.floor(Math.random()*c.textSizes.length),l=c.textSizes[Object.keys(c.textSizes)[i]];return r.a.createElement(f,{left:t,top:a,hiddenMobile:n,fontSize:l},o)},u=Object(l.d)(["from{transform:translateY(0);}to{transform:translateY(30px);}"]),h=Object(l.d)(["from{transform:translateY(0);}to{transform:translateY(200px);}"]),b=Object(l.b)([""," 4s ease-in-out infinite alternate;"],u),w=Object(l.b)([""," 18s ease-in-out infinite alternate;"],h),y=l.c.div.withConfig({displayName:"elements__UpDown",componentId:"sc-1vvwvrf-3"})(["animation:",";",";"],b,{top:0,right:0,bottom:0,left:0,position:"absolute"}),x=l.c.div.withConfig({displayName:"elements__UpDownWide",componentId:"sc-1vvwvrf-4"})(["animation:",";",";"],w,{top:0,right:0,bottom:0,left:0,position:"absolute"}),k=function(e){var t=e.offset;return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{speed:1,offset:t,bg:c.colors.orange}),r.a.createElement(d,{speed:.4,offset:t},"© ",(new Date).getFullYear(),", Built with"," ❤",r.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"),r.a.createElement("a",{href:"https://github.com/Donskelle/me"},"Source")))},v=(a(38),a(270)),E=l.c.h2.withConfig({displayName:"h2",componentId:"lsaegj-0"})(["",";"],{fontSize:"2.25rem","@media (min-width: 900px)":{fontSize:"3rem"},fontFamily:'"Cantata One", "Constantia", "Lucida Bright", "Lucidabright", "Lucida Serif", "Lucida", "DejaVu Serif", "Bitstream Vera Serif", "Liberation Serif", "Georgia", "serif"',color:"#ffffff"}),C=l.c.p.withConfig({displayName:"subheading",componentId:"cnufpr-0"})(["",";"],{fontSize:"1.5rem","@media (min-width: 900px)":{fontSize:"2.25rem"},fontFamily:'"Open Sans", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "sans-serif"',color:"#ffffff",marginTop:"2rem","@media (min-width: 1600px)":{width:"75%"}}),S=l.c.div.withConfig({displayName:"GithubStars__Wrapper",componentId:"sc-1xhwf0v-0"})(["",";"],{width:"100%","@media (min-width: 1200px)":{width:"66.66667%"}}),z=function(e){var t=e.offset,a=v.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{bg:c.colors["indigo-darker"],offset:t,speed:.2}),r.a.createElement(d,{speed:.4,offset:t},r.a.createElement(S,null,r.a.createElement(E,null,"Interessting Repos on Github"),r.a.createElement(C,null,"Check out hottest things happing in dev world on my"," ",a.github.viewer.starredRepositories.totalCount," long github star feed"),a.github.viewer.starredRepositories.nodes.map(function(e){return r.a.createElement("div",{key:e.url},e.name," also liked from"," ",e.stargazers.totalCount-1?e.stargazers.totalCount-2?e.stargazers.totalCount+" pros":"one pro":"no one"," ",r.a.createElement("a",{href:e.url},"Link"))}))))},A=a(271),j=a(238),I=l.c.h1.withConfig({displayName:"h1",componentId:"sc-1w1x45q-0"})(["",";"],{fontSize:"3rem","@media (min-width: 900px)":{fontSize:"5rem"},fontFamily:'"Cantata One", "Constantia", "Lucida Bright", "Lucidabright", "Lucida Serif", "Lucida", "DejaVu Serif", "Bitstream Vera Serif", "Liberation Serif", "Georgia", "serif"',color:"#ffffff"}),N=a(272),O=a(273),L=a.n(O),W=function(){var e=N.data;return r.a.createElement(L.a,{fluid:e.placeholderImage.childImageSharp.fluid})},M=l.c.div.withConfig({displayName:"Intro__Wrapper",componentId:"cgf0oo-0"})(["",";"],{width:"100%",textAlign:"center",flexDirection:"column","@media (min-width: 1200px)":{width:"66.66667%"},display:"flex","@media (min-width: 600px)":{flexDirection:"row",textAlign:"left"}}),F=l.c.div.withConfig({displayName:"Intro__Container",componentId:"cgf0oo-1"})(["",";"],{flex:1,alignSelf:"stretch"}),R=Object(l.c)(j.a.div).withConfig({displayName:"Intro__ImgWrapper",componentId:"cgf0oo-2"})(["",";"],{width:"8rem","@media (min-width: 1200px)":{width:"12rem"},marginLeft:"auto",marginRight:"auto"}),H=l.c.p.withConfig({displayName:"Intro__ImgDes",componentId:"cgf0oo-3"})(["",";"],{textAlign:"center"}),D=Object(l.c)(j.a.div).withConfig({displayName:"Intro__ImgRoll",componentId:"cgf0oo-4"})(["",";"],{borderRadius:"9999px",height:"auto",boxShadow:"0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)",overflow:"hidden"}),G=function(e,t,a){return"perspective(600px) rotateX("+e+"deg) rotateY("+t+"deg) scale("+a+")"},B=function(e){var t=e.offset,a=A.data,o=Object(n.useState)(!1),i=o[0],l=o[1],s=Object(j.b)({opacity:i?1:0,transform:"perspective(600px) rotateX("+(i?180:0)+"deg)",config:{mass:5,tension:500,friction:80}}),m=s.transform,f=s.opacity,g=Object(j.b)(function(){return{xys:[0,0,1],config:{mass:5,tension:350,friction:40}}}),u=g[0],h=g[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{bg:c.colors["green-darkest"],speed:.2,offset:t,clipPath:"polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"}),r.a.createElement(d,{speed:.7,offset:t},r.a.createElement(M,null,r.a.createElement(F,null,r.a.createElement(I,null,"Hi there,"),r.a.createElement(C,null,"I like to build stuff")),r.a.createElement(F,{onClick:function(){return l(function(e){return!e})}},r.a.createElement(R,{style:{transform:u.xys.interpolate(G)},onMouseMove:function(e){var t=e.clientX,a=e.clientY,n=e.target,r=n.getBoundingClientRect(),o=[-(a-r.top-n.offsetHeight/2)/4,(t-r.left-n.offsetWidth/2)/4,1.4];h({xys:o})},onMouseLeave:function(){return h({xys:[0,0,1]})}},r.a.createElement(D,{style:{opacity:f.interpolate(function(e){return 1-e}),transform:m}},r.a.createElement(W,null)),r.a.createElement(D,{style:{opacity:f,transform:m.interpolate(function(e){return e+" rotateX(180deg)"}),marginTop:"-100%"}},r.a.createElement(W,null))),r.a.createElement(H,null,a.github.viewer.name),r.a.createElement(H,null,"working @ ",a.github.viewer.company)))))},V=a(276),U=function(e){var t=e.offset,a=Object(V.a)({threshold:1}),n=a[0],o=a[1],i=Object(j.b)({opacity:o?1:0});return r.a.createElement(d,{speed:1,offset:t},r.a.createElement(E,{ref:n},"What I do"),r.a.createElement(j.a.div,{style:i},"Frontend CSS, JS, React, Custom Elements"),r.a.createElement(j.a.div,{style:i},"Backend NodeJS, PHP, MongoDB, MySQL"),r.a.createElement(j.a.div,{style:i},"Apps React Native, Electron, PhoneGap"),r.a.createElement(j.a.div,{style:i},"CMS/Shop Gatsby, Magento, XT-Commerce, Wordpress, Typo3"))},J=function(e){var t=e.offset;return r.a.createElement(d,{speed:.6,offset:t},r.a.createElement(E,null,"What I wanna do?"),r.a.createElement("article",null,"Frontend React, Relay, Svelte 3"),r.a.createElement("article",null,"Backend Serverless NodeJS, Prisma, Firebase"),r.a.createElement("article",null,"Apps React Native, Flutter, PWA"),r.a.createElement("article",null,"CMS/Shop JAMstack and GraphQL"))},X=a(307),Y=function(e){var t=e.offset,a=r.a.useState(!1),n=a[0],o=a[1],i=function(){window.setTimeout(function(){return o(!0)},500)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{speed:.2,offset:t,bg:c.colors["blue-light"]},r.a.createElement(y,null,r.a.createElement(g,{hiddenMobile:!0,size:c.textSizes.xl,left:"10%",top:"20%",emoji:"🚀"}),r.a.createElement(g,{width:48,left:"60%",size:c.textSizes["5xl"],top:"70%",emoji:"🚀"}),r.a.createElement(g,{emoji:"🚀",width:6,left:"60%",top:"15%"})),r.a.createElement(x,null,r.a.createElement(g,{emoji:"🚀",hiddenMobile:!0,width:16,left:"80%",top:"10%"}),r.a.createElement(g,{emoji:"🚀",width:12,left:"90%",top:"50%"}),r.a.createElement(g,{emoji:"🚀",width:16,left:"70%",top:"90%"}),r.a.createElement(g,{emoji:"🚀",width:16,left:"30%",top:"65%"}),r.a.createElement(g,{emoji:"🚀",width:6,left:"75%",top:"10%"}),r.a.createElement(g,{emoji:"🚀",hiddenMobile:!0,width:8,left:"45%",top:"10%"}))),r.a.createElement(d,{speed:.5,offset:t},r.a.createElement(E,null,"Lets get in touch !"),n?"":r.a.createElement(r.a.Fragment,null,r.a.createElement(X.a,{label:"Name",margin:"normal",variant:"outlined",onChange:i}),r.a.createElement(X.a,{label:"E-Mail",margin:"normal",variant:"outlined",onChange:i}),r.a.createElement(X.a,{label:"Nachricht",margin:"normal",variant:"outlined",onChange:i,multiline:!0,rows:"4"}))))};t.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,null),r.a.createElement(i.a,{title:"Donskelle - Frontend Developer Hamburg",keywords:["javascript","hamburg","frontend"]}),r.a.createElement(o.Parallax,{pages:6},r.a.createElement(B,{offset:0}),r.a.createElement(U,{offset:1}),r.a.createElement(J,{offset:2}),r.a.createElement(z,{offset:3}),r.a.createElement(Y,{offset:4}),r.a.createElement(k,{offset:5})))}},198:function(e,t,a){a(23);a(251)();var n={transparent:"transparent","blue-black":"#161719","blue-grey":"#23262b",black:"#222b2f","grey-darkest":"#273238","grey-darker":"#364349","grey-dark":"#70818a",grey:"#9babb4","grey-light":"#dae4e9","grey-lighter":"#f3f7f9","grey-lightest":"#fafcfc",white:"#ffffff","red-darkest":"#420806","red-darker":"#6a1b19","red-dark":"#cc1f1a",red:"#bf381a","red-light":"#ef5753","red-lighter":"#f9acaa","red-lightest":"#fcebea","orange-darkest":"#542605","orange-darker":"#7f4012","orange-dark":"#c1611f",orange:"#e07628","orange-light":"#ffa31b","orange-lighter":"#fcd9b6","orange-lightest":"#fff5eb","yellow-darkest":"#453411","yellow-darker":"#684f1d","yellow-dark":"#f2d024",yellow:"#e9af32","yellow-light":"#fff382","yellow-lighter":"#fff9c2","yellow-lightest":"#fcfbeb","green-darkest":"#032d19","green-darker":"#0b4228","green-dark":"#1f9d55",green:"#38c172","green-light":"#51d88a","green-lighter":"#a2f5bf","green-lightest":"#e3fcec","teal-darkest":"#0d3331","teal-darker":"#174e4b","teal-dark":"#38a89d",teal:"#4dc0b5","teal-light":"#64d5ca","teal-lighter":"#a0f0ed","teal-lightest":"#e8fffe","blue-darkest":"#0a224e","blue-darker":"#103d60","blue-dark":"#2779bd",blue:"#a0d8f1","blue-light":"#6cb2eb","blue-lighter":"#bcdefa","blue-lightest":"#eff8ff","indigo-darkest":"#191e38","indigo-darker":"#2f365f","indigo-dark":"#5661b3",indigo:"#6574cd","indigo-light":"#7886d7","indigo-lighter":"#b2b7ff","indigo-lightest":"#e6e8ff","purple-darkest":"#1f133f","purple-darker":"#352465","purple-dark":"#794acf",purple:"#9561e2","purple-light":"#a779e9","purple-lighter":"#d6bbfc","purple-lightest":"#f3ebff","pink-darkest":"#45051e","pink-darker":"#72173a","pink-dark":"#eb5286",pink:"#f66d9b","pink-light":"#fa7ea8","pink-lighter":"#ffbbca","pink-lightest":"#ffebef"};e.exports={colors:n,screens:{sm:"400px",md:"600px",lg:"900px",xl:"1200px",xxl:"1600px"},fonts:{sans:["Open Sans","-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue","sans-serif"],serif:["Cantata One","Constantia","Lucida Bright","Lucidabright","Lucida Serif","Lucida","DejaVu Serif","Bitstream Vera Serif","Liberation Serif","Georgia","serif"],mono:["Menlo","Monaco","Consolas","Liberation Mono","Courier New","monospace"]},textSizes:{xs:".75rem",sm:".875rem",base:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"1.875rem","4xl":"2.25rem","5xl":"3rem","6xl":"5rem","7xl":"8rem"},fontWeights:{hairline:100,thin:200,light:300,normal:400,medium:500,semibold:600,bold:700,extrabold:800,black:900},leading:{none:1,tight:1.25,normal:1.5,loose:2},tracking:{tight:"-0.05em",normal:"0",wide:"0.05em"},textColors:n,backgroundColors:n,borderWidths:{default:"1px",0:"0",2:"2px",4:"4px",8:"8px"},borderColors:Object.assign({default:n["grey-light"]},n),borderRadius:{none:"0",sm:".125rem",default:".25rem",lg:".5rem",full:"9999px"},width:{auto:"auto",px:"1px",1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",6:"1.5rem",8:"2rem",10:"2.5rem",12:"3rem",16:"4rem",24:"6rem",32:"8rem",48:"12rem",64:"16rem","1/2":"50%","1/3":"33.33333%","2/3":"66.66667%","1/4":"25%","3/4":"75%","1/5":"20%","2/5":"40%","3/5":"60%","4/5":"80%","1/6":"16.66667%","5/6":"83.33333%",full:"100%",screen:"100vw"},height:{auto:"auto",px:"1px",1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",6:"1.5rem",8:"2rem",10:"2.5rem",12:"3rem",16:"4rem",24:"6rem",32:"8rem",48:"12rem",64:"16rem",full:"100%",screen:"100vh"},minWidth:{0:"0",full:"100%"},minHeight:{0:"0",full:"100%",screen:"100vh"},maxWidth:{xs:"20rem",sm:"30rem",md:"40rem",lg:"50rem",xl:"60rem","2xl":"70rem","3xl":"80rem","4xl":"90rem","5xl":"100rem",full:"100%"},maxHeight:{full:"100%",screen:"100vh"},padding:{px:"1px",0:"0",1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",6:"1.5rem",8:"2rem",12:"3rem",16:"4rem",24:"6rem",32:"8rem"},margin:{auto:"auto",px:"1px",0:"0",1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",6:"1.5rem",8:"2rem"},negativeMargin:{px:"1px",0:"0",1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",6:"1.5rem",8:"2rem"},shadows:{default:"0 2px 4px 0 rgba(0,0,0,0.10)",md:"0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)",lg:"0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)",inner:"inset 0 2px 4px 0 rgba(0,0,0,0.06)",none:"none"},zIndex:{auto:"auto",0:0,10:10,20:20,30:30,40:40,50:50},opacity:{0:"0",25:".25",50:".5",75:".75",100:"1"},options:{prefix:"",important:!1}}},204:function(e,t,a){"use strict";var n=a(205),r=a(0),o=a.n(r),i=a(215),l=a.n(i);function s(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,s=e.title,m=n.data.site,c=t||m.siteMetadata.description;return o.a.createElement(l.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+m.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:s},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:m.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:c}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})}s.defaultProps={lang:"en",meta:[],keywords:[],description:""},t.a=s},205:function(e){e.exports={data:{site:{siteMetadata:{title:"Donskelle - Frontend Developer Hamburg",description:"A frontend developer based in Hamburg",author:"@donskelle"}}}}},270:function(e){e.exports={data:{github:{viewer:{name:"Fabian",starredRepositories:{totalCount:97,nodes:[{name:"hotkey",url:"https://github.com/github/hotkey",description:"Trigger an action on an element with a keyboard shortcut.",stargazers:{totalCount:1718}},{name:"zsh-autosuggestions",url:"https://github.com/zsh-users/zsh-autosuggestions",description:"Fish-like autosuggestions for zsh",stargazers:{totalCount:10250}},{name:"oh-my-zsh",url:"https://github.com/robbyrussell/oh-my-zsh",description:"🙃 A delightful community-driven (with 1,300+ contributors) framework for managing your zsh configuration. Includes 200+ optional plugins (rails, git, OSX, hub, capistrano, brew, ant, php, python, etc), over 140 themes to spice up your morning, and an auto-update tool so that makes it easy to keep up with the latest updates from the community.",stargazers:{totalCount:93015}},{name:"material-ui",url:"https://github.com/mui-org/material-ui",description:"React components for faster and easier web development. Build your own design system, or start with Material Design.",stargazers:{totalCount:49405}},{name:"json-complete",url:"https://github.com/cierelabs/json-complete",description:"A JSON alternative that retains references, handles circular dependencies, and encodes almost every data type available to standard JavaScript.",stargazers:{totalCount:207}},{name:"hermes",url:"https://github.com/facebook/hermes",description:"Hermes is a small and lightweight JavaScript engine optimized for running React Native on Android.",stargazers:{totalCount:4127}},{name:"motion",url:"https://github.com/framer/motion",description:"Open source, production-ready animation and gesture library for React",stargazers:{totalCount:2103}},{name:"react-base-table",url:"https://github.com/Autodesk/react-base-table",description:"A react table component to display large datasets with high performance and flexibility",stargazers:{totalCount:410}},{name:"create-react-app",url:"https://github.com/facebook/create-react-app",description:"Set up a modern web app by running one command.",stargazers:{totalCount:70326}},{name:"mobx",url:"https://github.com/mobxjs/mobx",description:"Simple, scalable state management.",stargazers:{totalCount:20056}},{name:"react-native",url:"https://github.com/facebook/react-native",description:"A framework for building native apps with React.",stargazers:{totalCount:79698}},{name:"progressive-rendering-frameworks-samples",url:"https://github.com/GoogleChromeLabs/progressive-rendering-frameworks-samples",description:"Samples and demos from the Progressive Rendering I/O talk",stargazers:{totalCount:268}},{name:"terminal",url:"https://github.com/microsoft/terminal",description:"The new Windows Terminal, and the original Windows console host -- all in the same place!",stargazers:{totalCount:49932}},{name:"eslint-plugin-wc",url:"https://github.com/43081j/eslint-plugin-wc",description:"ESLint rules for Web Components",stargazers:{totalCount:31}},{name:"css-only-chat",url:"https://github.com/kkuchta/css-only-chat",description:"A truly monstrous async web chat using no JS whatsoever on the frontend",stargazers:{totalCount:5318}},{name:"why-did-you-update",url:"https://github.com/maicki/why-did-you-update",description:":boom: Puts your console on blast when React is making unnecessary updates.",stargazers:{totalCount:3686}},{name:"worker-plugin",url:"https://github.com/GoogleChromeLabs/worker-plugin",description:"🐳 Adds native Web Worker bundling support to Webpack.",stargazers:{totalCount:1196}},{name:"relay",url:"https://github.com/facebook/relay",description:"Relay is a JavaScript framework for building data-driven React applications.",stargazers:{totalCount:13193}},{name:"styled-components",url:"https://github.com/styled-components/styled-components",description:"Visual primitives for the component age. Use the best bits of ES6 and CSS to style your apps without stress 💅",stargazers:{totalCount:25117}},{name:"svelte",url:"https://github.com/sveltejs/svelte",description:"Cybernetically enhanced web apps",stargazers:{totalCount:21900}}]}}}}}},271:function(e){e.exports={data:{github:{viewer:{name:"Fabian",company:"Netfonds AG"}}}}},272:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAAEsUlEQVQ4yw2T2VJaBwBA77RpRgVENlmU5bIGUMiFXFBWL4iAqMQgqIAaEAG1LsgmoCgqxKhIEo0SgoHUSJ2kmSaTpp1OHjqd9i3ta7+n/sGZM+cArUQMCovCkjBoLIpEx1FYRFx7G7oNhW5DtxIwWBIWjcOgW1EYHLoJ0wx88+0tVNN3mOZmbAsajwYoDBodpNPZHRQ6tZPdSSSTsDgcFo/HEQhYAgFPxNOoFDyRiMZiuXymxQjp1SJNr5DNptIYZEAMiVlcHsjjCbqEArGQweF3gjw6yCfT2WqVKhGcsuiU43aDWCyqHG8X10bdxu6gXZnymSbseoDGYOJINAqdweSCJGonjtjRRqARyB23mttWv3/49a+3SI94uE8m5HGeJhfcenkXjyEWgkZE2i0VAnyxAORxILkEuie9K+vm8LlcAV8kEbHvCEYsvYk5y8SgVg1DA4jmbGv4l6tYenNXrpL26iEIhoBM3Lse82TWvRvrnp2N2fKzzF5urrAb3C/M76U8I1pYLte5XL6DrcjnD7Xi0Uo6vbGw6N/OhuNRN1DcDZbygWeHc88P5vfS4VIh++L4kdtpHxq0OEaHmGBXC4rIYMF6ta5Pb9nKZrU6tV6H/Prx3WlxGdjfmamcxBuvconVG4TgSTGaS/pDD+0yCKJQwfZ2WlNTSwuG5g8EIKk0EV9mMFlSqTK2slh9GgNq5ejZyXEmkx27P7SdWigdbJ8+if9YT11W132eET54RwfrHWaHz+u12QbQGJzZOm4wOhOrs7XzKHB+spKKe5cXl0wm442VQXggMhP67fOnxmVjMbwMy3o6KfQRxBaZDtlt9h6VUans6+zgxNYmK2eLQHJz+Ki0kkltsUCOBoH4RJzfOfHly9/jLn88tnF4+Cy6ljQh5nsiaNTqXFqKtjS1sNmsZGoim3MBI05VdmvDHxzXIHet9zVqkziyFru+/mQw2NQq7bDNnoqnd7b3pVKRSMQSCyXYVnwHja5DZDMBIzA99dAz6U9kHgTCltm56UGbKR7L7hWea7UmGFYoFb1sNl8i6dYjChK5/fZtNIlEwWKJrRiq09UPFJ+UtNr+YYcifzDvGBroFvJen2ZODh8zWbym280e71woHIeVCo1KS6Uw7fYHs4Gw0+1kgEwGgwfEkhHfgrVHpQzHBnJrrssjz/4CzCZjbnp3Tlo1WpNEIus3WcacU3b7ZB9i1moMBqPBOgq3k+lAKj+Z3LeZLeZIVj80YnRZNWNmzU7+rPbD+3c///713//++POfSc+cTKZUKPukMp1EouKAoqkZI5cnAEJJxWZhwWDUH5btq9FpGDYgiG137/z8xfty5WM6nU8m9nx+P7mdhkbhFQrhPUXXmFPl9VgkXT1A433Bft+xHHN8+JKrXsYfOBE9olRp5YND1gmPS2/sVWrkUjnXaJZjWm8GJ0FyoUwhviOQKnq6gHGXe8xlKlWCO0czuce+/HEgVwhE1t2pTe/KmjOe8qzEXTuFUOl0NTTv6RbL6AwuCxQakf7s1hKQy+Vrtcvyef1FuV6tvLmoNmq16+rLq4vqVbXauLi4fl1/W6+/rVav31z9VK7Ui09OS0/LF6+uXlYb/wOP13h8anIbswAAAABJRU5ErkJggg==",aspectRatio:1,src:"/me/static/7aab6df4cb30d7c46c1d52bc3960828c/647de/gitimg.png",srcSet:"/me/static/7aab6df4cb30d7c46c1d52bc3960828c/bf65b/gitimg.png 100w,\n/me/static/7aab6df4cb30d7c46c1d52bc3960828c/7c0ed/gitimg.png 200w,\n/me/static/7aab6df4cb30d7c46c1d52bc3960828c/647de/gitimg.png 400w,\n/me/static/7aab6df4cb30d7c46c1d52bc3960828c/7de79/gitimg.png 460w",sizes:"(max-width: 400px) 100vw, 400px"}}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-6141a54fed275588e69f.js.map