"use strict";(self.webpackChunknight_shark_docs=self.webpackChunknight_shark_docs||[]).push([[707],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var i=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=i.createContext({}),s=function(e){var n=i.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=s(e.components);return i.createElement(u.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},f=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(t),f=o,h=p["".concat(u,".").concat(f)]||p[f]||d[f]||a;return t?i.createElement(h,r(r({ref:n},c),{},{components:t})):i.createElement(h,r({ref:n},c))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,r=new Array(a);r[0]=f;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[p]="string"==typeof e?e:o,r[1]=l;for(var s=2;s<a;s++)r[s]=t[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5046:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var i=t(7462),o=(t(7294),t(3905));const a={sidebar_position:3},r="Defining Functions",l={unversionedId:"tutorial-basics/defining-functions",id:"tutorial-basics/defining-functions",title:"Defining Functions",description:"Defining custom functions in NightShark is a powerful way to encapsulate specific actions or conditions, making your code more modular, reusable, and easier to manage. This section will guide you through the process of defining functions, step-by-step, with additional examples.",source:"@site/docs/tutorial-basics/defining-functions.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/defining-functions",permalink:"/docs/tutorial-basics/defining-functions",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Pre-Built Functions",permalink:"/docs/tutorial-basics/pre-built-functions"},next:{title:"Introducing Variables",permalink:"/docs/tutorial-basics/introducing-variables"}},u={},s=[{value:"Step 1: Decide the Purpose of the Function",id:"step-1-decide-the-purpose-of-the-function",level:3},{value:"Step 2: Define the Function",id:"step-2-define-the-function",level:3},{value:"Step 3: Use <code>global</code> if Necessary",id:"step-3-use-global-if-necessary",level:3},{value:"Example 1: ShouldBuy Function",id:"example-1-shouldbuy-function",level:3},{value:"Example 2: ShouldSell Function",id:"example-2-shouldsell-function",level:3}],c={toc:s},p="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"defining-functions"},"Defining Functions"),(0,o.kt)("p",null,"Defining custom functions in NightShark is a powerful way to encapsulate specific actions or conditions, making your code more modular, reusable, and easier to manage. This section will guide you through the process of defining functions, step-by-step, with additional examples."),(0,o.kt)("h3",{id:"step-1-decide-the-purpose-of-the-function"},"Step 1: Decide the Purpose of the Function"),(0,o.kt)("p",null,"Before defining a function, decide what specific task or condition the function will handle. For example, you might want a function to determine whether to buy or sell based on certain conditions."),(0,o.kt)("h3",{id:"step-2-define-the-function"},"Step 2: Define the Function"),(0,o.kt)("p",null,"Use the following syntax to define a function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"FunctionName() {\n    // Your code here\n}\n")),(0,o.kt)("h3",{id:"step-3-use-global-if-necessary"},"Step 3: Use ",(0,o.kt)("inlineCode",{parentName:"h3"},"global")," if Necessary"),(0,o.kt)("p",null,"If your function needs to access variables that are defined outside of it, include the ",(0,o.kt)("inlineCode",{parentName:"p"},"global")," keyword at the beginning of the function."),(0,o.kt)("h3",{id:"example-1-shouldbuy-function"},"Example 1: ShouldBuy Function"),(0,o.kt)("p",null,"Here's an example function called ",(0,o.kt)("inlineCode",{parentName:"p"},"ShouldBuy")," that encapsulates the conditions under which a buy order should be placed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"ShouldBuy() {\n    global\n    return (toNumber(area[1]) > 20)\n}\n")),(0,o.kt)("p",null,"In this example, the function uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"global")," keyword to access the ",(0,o.kt)("inlineCode",{parentName:"p"},"area")," variable, which is assumed to be defined globally. It then checks if ",(0,o.kt)("inlineCode",{parentName:"p"},"area[1]")," is greater than 20 and returns the result."),(0,o.kt)("h3",{id:"example-2-shouldsell-function"},"Example 2: ShouldSell Function"),(0,o.kt)("p",null,"Similarly, you can define a function to encapsulate the conditions for selling:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"ShouldSell() {\n    global\n    return (toNumber(area[1]) < -10)\n}\n")),(0,o.kt)("p",null,"This function checks if ",(0,o.kt)("inlineCode",{parentName:"p"},"area[1]")," is less than -10 and returns the result."),(0,o.kt)("p",null,"By defining such functions, you can make your main trading logic much cleaner and easier to understand, as you can replace complex conditions with function calls like ",(0,o.kt)("inlineCode",{parentName:"p"},"ShouldBuy()")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"ShouldSell()"),"."))}d.isMDXComponent=!0}}]);