"use strict";(self.webpackChunknight_shark_docs=self.webpackChunknight_shark_docs||[]).push([[980],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3219:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:5},i="Reading Areas",s={unversionedId:"tutorial-basics/read-areas",id:"tutorial-basics/read-areas",title:"Reading Areas",description:"The read_areas() function is a cornerstone of any trading script in NightShark. It reads the areas on the screen that you've designated for tracking. This section will delve into the importance of this function, why it should be used in a loop, and provide examples for better understanding.",source:"@site/docs/tutorial-basics/read-areas.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/read-areas",permalink:"/docs/tutorial-basics/read-areas",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/read-areas.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Introducing Variables",permalink:"/docs/tutorial-basics/introducing-variables"},next:{title:"Clicking Buttons",permalink:"/docs/tutorial-basics/click-buttons"}},l={},c=[{value:"Importance of read_areas()",id:"importance-of-read_areas",level:3},{value:"Why Constant Looping is Necessary",id:"why-constant-looping-is-necessary",level:3},{value:"Example using <code>loop</code>",id:"example-using-loop",level:4},{value:"Example using <code>loop until</code>",id:"example-using-loop-until",level:4}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"reading-areas"},"Reading Areas"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"read_areas()")," function is a cornerstone of any trading script in NightShark. It reads the areas on the screen that you've designated for tracking. This section will delve into the importance of this function, why it should be used in a loop, and provide examples for better understanding."),(0,a.kt)("h3",{id:"importance-of-read_areas"},"Importance of read_areas()"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"read_areas()")," function allows you to monitor real-time metrics or signals from your trading platform. It reads the designated areas on the screen and stores the values, enabling you to make trading decisions based on these metrics."),(0,a.kt)("h3",{id:"why-constant-looping-is-necessary"},"Why Constant Looping is Necessary"),(0,a.kt)("p",null,"A single call to ",(0,a.kt)("inlineCode",{parentName:"p"},"read_areas()")," will only read the areas once. For continuous monitoring, you need to implement it within a loop."),(0,a.kt)("h4",{id:"example-using-loop"},"Example using ",(0,a.kt)("inlineCode",{parentName:"h4"},"loop")),(0,a.kt)("p",null,"Here's how you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"read_areas()")," in a simple loop:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ahk"},"loop {\n    read_areas()\n}\n")),(0,a.kt)("h4",{id:"example-using-loop-until"},"Example using ",(0,a.kt)("inlineCode",{parentName:"h4"},"loop until")),(0,a.kt)("p",null,"For more control over when to stop reading areas, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"loop until")," construct. Here's an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ahk"},"loop {\n    read_areas()\n} until (toNumber(area[1]) > 20 || toNumber(area[1]) < -10)\n")),(0,a.kt)("p",null,"By using ",(0,a.kt)("inlineCode",{parentName:"p"},"loop")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"loop until"),", you ensure that the ",(0,a.kt)("inlineCode",{parentName:"p"},"read_areas()")," function continually updates the metrics, allowing your script to respond to real-time changes."))}d.isMDXComponent=!0}}]);