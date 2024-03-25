"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[73458],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,c(c({ref:t},s),{},{components:n})):r.createElement(m,c({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},12295:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>b,frontMatter:()=>i,metadata:()=>u,toc:()=>p});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={title:"useSetLocale"},l=void 0,u={unversionedId:"i18n/hooks/use-set-locale/index",id:"i18n/hooks/use-set-locale/index",title:"useSetLocale",description:"If you need to change the locale at runtime, Refine provides the useSetLocale hook, It returns the changeLocale method from i18nProvider under the hood.",source:"@site/docs/i18n/hooks/use-set-locale/index.md",sourceDirName:"i18n/hooks/use-set-locale",slug:"/i18n/hooks/use-set-locale/",permalink:"/docs/i18n/hooks/use-set-locale/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/i18n/hooks/use-set-locale/index.md",tags:[],version:"current",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1711376487,formattedLastUpdatedAt:"Mar 25, 2024",frontMatter:{title:"useSetLocale"},sidebar:"mainSidebar",previous:{title:"useGetLocale",permalink:"/docs/i18n/hooks/use-get-locale/"},next:{title:"useTranslate",permalink:"/docs/i18n/hooks/use-translate/"}},s={},p=[{value:"Usage",id:"usage",level:2}],d=(f="DocThumbsUpDownFeedbackWidget",function(e){return console.warn("Component "+f+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var f;const m={toc:p};function b(e){var{components:t}=e,n=c(e,["components"]);return(0,r.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"If you need to change the locale at runtime, Refine provides the ",(0,r.kt)("inlineCode",{parentName:"p"},"useSetLocale")," hook, It returns the changeLocale method from ",(0,r.kt)("a",{parentName:"p",href:"/docs/i18n/i18n-provider/#usage"},(0,r.kt)("inlineCode",{parentName:"a"},"i18nProvider"))," under the hood."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(d,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This hook can only be used if ",(0,r.kt)("a",{parentName:"p",href:"/docs/i18n/i18n-provider/#usage"},(0,r.kt)("inlineCode",{parentName:"a"},"i18nProvider"))," is provided.")),(0,r.kt)("p",null,"You can use the features of your own i18n library to change the locale in your own components."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useSetLocale } from "@refinedev/core";\n\nexport const LanguageSwicher = () => {\n  const changeLanguage = useSetLocale();\n\n  return (\n    <div>\n      <span>Languages</span>\n      <button onClick={() => changeLanguage("en")}>English</button>\n      <button onClick={() => changeLanguage("es")}>Spanish</button>\n    </div>\n  );\n};\n'))))}b.isMDXComponent=!0}}]);