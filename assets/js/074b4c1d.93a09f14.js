"use strict";(self.webpackChunknight_shark_docs=self.webpackChunknight_shark_docs||[]).push([[394],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),b=n,m=p["".concat(l,".").concat(b)]||p[b]||d[b]||i;return r?a.createElement(m,o(o({ref:t},u),{},{components:r})):a.createElement(m,o({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},2435:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const i={sidebar_position:4},o="Introducing Variables",s={unversionedId:"tutorial-basics/introducing-variables",id:"tutorial-basics/introducing-variables",title:"Introducing Variables",description:"In NightShark, variables serve as placeholders for storing data values, which can be used and manipulated throughout your script. This section will guide you through the process of declaring and using variables in NightShark, complete with examples.",source:"@site/docs/tutorial-basics/introducing-variables.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/introducing-variables",permalink:"/docs/tutorial-basics/introducing-variables",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/introducing-variables.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Defining Functions",permalink:"/docs/tutorial-basics/defining-functions"},next:{title:"Reading Areas",permalink:"/docs/tutorial-basics/read-areas"}},l={},c=[{value:"Why Use Variables?",id:"why-use-variables",level:3},{value:"How to Declare a Variable",id:"how-to-declare-a-variable",level:3},{value:"Example 1: Storing Profit and Loss Metrics",id:"example-1-storing-profit-and-loss-metrics",level:3},{value:"Example 2: Using Variables in Conditions",id:"example-2-using-variables-in-conditions",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"introducing-variables"},"Introducing Variables"),(0,n.kt)("p",null,"In NightShark, variables serve as placeholders for storing data values, which can be used and manipulated throughout your script. This section will guide you through the process of declaring and using variables in NightShark, complete with examples."),(0,n.kt)("h3",{id:"why-use-variables"},"Why Use Variables?"),(0,n.kt)("p",null,"Variables are incredibly useful for storing metrics or conditions that you'll need to reference multiple times throughout your script. By using variables, you can make your code more readable and maintainable."),(0,n.kt)("h3",{id:"how-to-declare-a-variable"},"How to Declare a Variable"),(0,n.kt)("p",null,"Declaring a variable in NightShark is straightforward. Use the ",(0,n.kt)("inlineCode",{parentName:"p"},":=")," operator to assign a value to a variable. Here's the syntax:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-plaintext"},"VariableName := Value\n")),(0,n.kt)("h3",{id:"example-1-storing-profit-and-loss-metrics"},"Example 1: Storing Profit and Loss Metrics"),(0,n.kt)("p",null,"For instance, you might want to keep track of the current position's profit or loss and the day's profit or loss. Here's how you can declare these variables:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-plaintext"},"CurrentPositionProfitLoss := toNumber(area[1])\nDayProfitLoss := toNumber(area[2])\n")),(0,n.kt)("p",null,"In this example, ",(0,n.kt)("inlineCode",{parentName:"p"},"CurrentPositionProfitLoss")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"DayProfitLoss")," are variables that store the numerical values of ",(0,n.kt)("inlineCode",{parentName:"p"},"area[1]")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"area[2]"),", respectively."),(0,n.kt)("h3",{id:"example-2-using-variables-in-conditions"},"Example 2: Using Variables in Conditions"),(0,n.kt)("p",null,"Once declared, these variables can be used in conditional statements, calculations, or even passed into custom functions. For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-plaintext"},"if (CurrentPositionProfitLoss > 20) {\n    // Your code for when profit is greater than 20\n}\n")),(0,n.kt)("p",null,"By using variables like ",(0,n.kt)("inlineCode",{parentName:"p"},"CurrentPositionProfitLoss"),", you can make your conditions more readable and easier to manage."))}d.isMDXComponent=!0}}]);