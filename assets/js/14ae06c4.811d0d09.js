"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[71469],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>g});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=c(n),y=o,g=l["".concat(u,".").concat(y)]||l[y]||d[y]||a;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=y;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[l]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},73675:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});n(96540);var r=n(15680);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={title:"useGetToPath"},u=void 0,c={unversionedId:"routing/hooks/use-get-to-path/index",id:"routing/hooks/use-get-to-path/index",title:"useGetToPath",description:"useGetToPath is a hook that returns a function that composes the URL for the given resource and the action by using the URL parameters and the meta property if provided.",source:"@site/docs/routing/hooks/use-get-to-path/index.md",sourceDirName:"routing/hooks/use-get-to-path",slug:"/routing/hooks/use-get-to-path/",permalink:"/docs/routing/hooks/use-get-to-path/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/routing/hooks/use-get-to-path/index.md",tags:[],version:"current",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1714995928,formattedLastUpdatedAt:"May 6, 2024",frontMatter:{title:"useGetToPath"},sidebar:"mainSidebar",previous:{title:"useLink",permalink:"/docs/routing/hooks/use-link/"},next:{title:"useNavigation",permalink:"/docs/routing/hooks/use-navigation/"}},p={},l=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"resource",id:"resource",level:3},{value:"action",id:"action",level:3},{value:"meta",id:"meta",level:3},{value:"legacy",id:"legacy",level:3}],d=(y="DocThumbsUpDownFeedbackWidget",function(e){return console.warn("Component "+y+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",e)});var y;const g={toc:l},m="wrapper";function h(e){var{components:t}=e,n=i(e,["components"]);return(0,r.yg)(m,a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"useGetToPath")," is a hook that returns a function that composes the URL for the given ",(0,r.yg)("inlineCode",{parentName:"p"},"resource")," and the ",(0,r.yg)("inlineCode",{parentName:"p"},"action")," by using the URL parameters and the ",(0,r.yg)("inlineCode",{parentName:"p"},"meta")," property if provided."),(0,r.yg)("p",null,"This is useful when you want to navigate to a specific action of a resource and you want to have the URL to be composed automatically."),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)(d,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useGetToPath, useGo } from "@refinedev/core";\n\n// Let\'s assume that we have a resource named `posts` and the `edit` action path is `/:authorId/posts/:id/edit`\n\nconst MyComponent = () => {\n  const getToPath = useGetToPath();\n\n  const go = useGo();\n\n  return (\n    <Button\n      onClick={() => {\n        go({\n          to: getToPath({\n            resource: "posts",\n            action: "edit",\n            meta: {\n              id: 1,\n              authorId: 2,\n            },\n          }),\n        });\n      }}\n    >\n      Go To Edit Post\n    </Button>\n  );\n\n  /* ... */\n};\n')),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"The ",(0,r.yg)("inlineCode",{parentName:"p"},"authorId")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"id")," parameters will be inferred from the route if they are present in the URL. If you want to explicitly set the value of a parameter, you can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"meta")," property."))),(0,r.yg)("h2",{id:"parameters"},"Parameters"),(0,r.yg)("h3",{id:"resource"},"resource"),(0,r.yg)(d,{id:"resource",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"This is the name of the resource that you want to navigate to.")),(0,r.yg)("h3",{id:"action"},"action"),(0,r.yg)(d,{id:"action",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"This is the name of the action that you want to navigate to.")),(0,r.yg)("h3",{id:"meta"},"meta"),(0,r.yg)(d,{id:"meta",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"This is the meta object that you want to use to compose the URL. It will be merged with the ",(0,r.yg)("inlineCode",{parentName:"p"},"params")," object that is parsed from the URL.")),(0,r.yg)("h3",{id:"legacy"},"legacy"),(0,r.yg)(d,{id:"legacy",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"This is a boolean value that indicates whether the legacy URL format should be used or not. If it is set to ",(0,r.yg)("inlineCode",{parentName:"p"},"true"),", the URL will be composed for the legacy routers. Default value is ",(0,r.yg)("inlineCode",{parentName:"p"},"false"),".")))}h.isMDXComponent=!0}}]);