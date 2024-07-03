"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[75428],{58860:(e,r,n)=>{n.d(r,{xA:()=>u,yg:()=>y});var t=n(37953);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),p=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},u=function(e){var r=p(e.components);return t.createElement(s.Provider,{value:r},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,y=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?t.createElement(y,i(i({ref:r},u),{},{components:n})):t.createElement(y,i({ref:r},u))}));function y(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},97138:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>s,default:()=>b,frontMatter:()=>l,metadata:()=>p,toc:()=>c});n(37953);var t=n(58860);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})),e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={title:"useBreadcrumb",source:"packages/core/src/hooks/breadcrumb"},s=void 0,p={unversionedId:"core/hooks/utilities/use-breadcrumb/index",id:"core/hooks/utilities/use-breadcrumb/index",title:"useBreadcrumb",description:"The feature won first place with the joint votes of our team members in a May 2022 internal hackathon!",source:"@site/docs/core/hooks/utilities/use-breadcrumb/index.md",sourceDirName:"core/hooks/utilities/use-breadcrumb",slug:"/core/hooks/utilities/use-breadcrumb/",permalink:"/docs/core/hooks/utilities/use-breadcrumb/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/core/hooks/utilities/use-breadcrumb/index.md",tags:[],version:"current",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1720022472,formattedLastUpdatedAt:"Jul 3, 2024",frontMatter:{title:"useBreadcrumb",source:"packages/core/src/hooks/breadcrumb"},sidebar:"mainSidebar",previous:{title:"useMenu",permalink:"/docs/core/hooks/utilities/use-menu/"},next:{title:"useImport",permalink:"/docs/core/hooks/utilities/use-import/"}},u={},c=[{value:"Usage",id:"usage",level:2},{value:"Examples",id:"examples",level:2},{value:"Resource",id:"resource",level:3},{value:"Nested resource",id:"nested-resource",level:3},{value:"Adding a Home/Root Page",id:"adding-a-homeroot-page",level:3},{value:"i18n support",id:"i18n-support",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Return values",id:"return-values",level:3},{value:"BreadcrumbsType",id:"breadcrumbstype",level:4}],d=(m="DocThumbsUpDownFeedbackWidget",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,t.yg)("div",e)});var m;const y={toc:c},g="wrapper";function b(e){var{components:r}=e,n=i(e,["components"]);return(0,t.yg)(g,o(function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){a(e,r,n[r])}))}return e}({},y,n),{components:r,mdxType:"MDXLayout"}),(0,t.yg)("admonition",{title:"Congratulations \ud83e\udd47",type:"simple"},(0,t.yg)("p",{parentName:"admonition"},"The feature won first place with the joint votes of our team members in a May 2022 internal hackathon!"),(0,t.yg)("p",{parentName:"admonition"},"Congratulations ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/salihozdemir"},"@salihozdemir"),"! It was great seeing your project take first place! We're all very proud of you. Keep up the good work and don't forget to have fun while working here \ud83c\udf89")),(0,t.yg)("p",null,"It is a hook that returns ",(0,t.yg)("inlineCode",{parentName:"p"},"breadcrumbs")," to create breadcrumbs for the current page. The ",(0,t.yg)("inlineCode",{parentName:"p"},"breadcrumbs")," is an array of objects with the following properties:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"label"),": the label of the resource."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"href"),": the route of the resource's list action."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"icon"),": the icon of the resource.")),(0,t.yg)("h2",{id:"usage"},"Usage"),(0,t.yg)(d,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport { useBreadcrumb } from "@refinedev/core";\n\nexport const Breadcrumb: React.FC = () => {\n  const { breadcrumbs } = useBreadcrumb();\n\n  return (\n    <ul>\n      {breadcrumbs.map(({ label, href, icon }) => (\n        <li key={label}>\n          {icon}\n          {href ? <a href={href}>{label}</a> : label}\n        </li>\n      ))}\n    </ul>\n  );\n};\n'))),(0,t.yg)("h2",{id:"examples"},"Examples"),(0,t.yg)("h3",{id:"resource"},"Resource"),(0,t.yg)(d,{id:"resource",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"breadcrumbs")," are created with your resource definitions. For example, if you have a resource with the following definition:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx"},'[\n  {\n    name: "posts",\n    icon: <PostsIcon />,\n    list: "/posts",\n    create: "/posts/create",\n  },\n];\n')),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"On the ",(0,t.yg)("inlineCode",{parentName:"p"},"list")," page of the ",(0,t.yg)("inlineCode",{parentName:"p"},"posts")," resource, the breadcrumbs look like this:"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-tsx"},'[\n  {\n    label: "Posts",\n    href: "/posts",\n    icon: <PostsIcon />,\n  },\n];\n'))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"On the ",(0,t.yg)("inlineCode",{parentName:"p"},"create")," page of the ",(0,t.yg)("inlineCode",{parentName:"p"},"posts")," resource, the breadcrumbs look like this:"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-tsx"},'[\n  {\n    label: "Posts",\n    href: "/posts",\n    icon: <PostsIcon />,\n  },\n  { label: "Create" },\n];\n')))),(0,t.yg)("p",null,"If the resource has no ",(0,t.yg)("inlineCode",{parentName:"p"},"icon")," property, the ",(0,t.yg)("inlineCode",{parentName:"p"},"icon")," property of the breadcrumbs is ",(0,t.yg)("inlineCode",{parentName:"p"},"undefined"),". Likewise, if the resource's list page is not found, the ",(0,t.yg)("inlineCode",{parentName:"p"},"href")," property of the breadcrumbs is ",(0,t.yg)("inlineCode",{parentName:"p"},"undefined"),".")),(0,t.yg)("h3",{id:"nested-resource"},"Nested resource"),(0,t.yg)(d,{id:"nested-resource",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"If you have a nested resource definition as below:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx"},'[\n  {\n    name: "cms",\n  },\n  {\n    name: "users",\n    list: "/users",\n    create: "/users/create",\n    meta: { parent: "cms" },\n  },\n];\n')),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"On the ",(0,t.yg)("inlineCode",{parentName:"p"},"list")," page of the ",(0,t.yg)("inlineCode",{parentName:"p"},"users")," resource, the breadcrumbs look like this:"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-tsx"},'[\n  { label: "Cms" },\n  {\n    label: "Users",\n    href: "/users",\n  },\n];\n'))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"On the ",(0,t.yg)("inlineCode",{parentName:"p"},"create")," page of the ",(0,t.yg)("inlineCode",{parentName:"p"},"users")," resource, the breadcrumbs look like this:"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-tsx"},'[\n  { label: "Cms" },\n  {\n    label: "Users",\n    href: "/users",\n  },\n  { label: "Create" },\n];\n'))))),(0,t.yg)("h3",{id:"adding-a-homeroot-page"},"Adding a Home/Root Page"),(0,t.yg)(d,{id:"adding-a-homeroot-page",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"In earlier versions of Refine, ",(0,t.yg)("inlineCode",{parentName:"p"},"<Refine>")," component accepted ",(0,t.yg)("inlineCode",{parentName:"p"},"DashboardPage")," which could be used to add an index page to your app. With the changes in ",(0,t.yg)("inlineCode",{parentName:"p"},"routerProvider")," API of Refine, ",(0,t.yg)("inlineCode",{parentName:"p"},"DashboardPage")," is deprecated. You can now define an index route manually in your router package."),(0,t.yg)("p",null,"In earlier versions, the home icon in the ",(0,t.yg)("inlineCode",{parentName:"p"},"Breadcrumb")," was created by the ",(0,t.yg)("inlineCode",{parentName:"p"},"DashboardPage"),", but now it is rendered if you define an action route as ",(0,t.yg)("inlineCode",{parentName:"p"},"/")," in any one of your resources. It will be rendered with the home icon regardless of the current route. You can also hide the home icon by setting ",(0,t.yg)("inlineCode",{parentName:"p"},"showHome")," to ",(0,t.yg)("inlineCode",{parentName:"p"},"false"),"."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx"},'[\n  {\n    name: "dashboard", // name of the resource is not important for the `useBreadcrumb` hook\n    list: "/", // If any one of your resources has a list action with `/` route, the home icon will be rendered\n  },\n];\n'))),(0,t.yg)("h2",{id:"i18n-support"},"i18n support"),(0,t.yg)(d,{id:"i18n-support",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"If the ",(0,t.yg)("inlineCode",{parentName:"p"},"resource")," definition has a ",(0,t.yg)("inlineCode",{parentName:"p"},"label")," property, ",(0,t.yg)("inlineCode",{parentName:"p"},"useBreadcrumbs")," uses the ",(0,t.yg)("inlineCode",{parentName:"p"},"label")," property. Otherwise, the ",(0,t.yg)("inlineCode",{parentName:"p"},"name")," property of the ",(0,t.yg)("inlineCode",{parentName:"p"},"resource")," is used. Likewise, if the ",(0,t.yg)("inlineCode",{parentName:"p"},"resource")," definition has ",(0,t.yg)("inlineCode",{parentName:"p"},"route")," property, ",(0,t.yg)("inlineCode",{parentName:"p"},"useBreadcrumbs")," uses the ",(0,t.yg)("inlineCode",{parentName:"p"},"route")," property. Otherwise, the ",(0,t.yg)("inlineCode",{parentName:"p"},"name")," property of the ",(0,t.yg)("inlineCode",{parentName:"p"},"resource")," is used."),(0,t.yg)("p",null,"If a ",(0,t.yg)("inlineCode",{parentName:"p"},"label")," is not provided in your ",(0,t.yg)("inlineCode",{parentName:"p"},"posts")," resource, ",(0,t.yg)("inlineCode",{parentName:"p"},"useBreadcrumb")," uses the ",(0,t.yg)("a",{parentName:"p",href:"/docs/i18n/hooks/use-translate"},(0,t.yg)("inlineCode",{parentName:"a"},"useTranslate"))," hook to translate the names."),(0,t.yg)("p",null,"For CRUD operations (",(0,t.yg)("inlineCode",{parentName:"p"},"list"),",",(0,t.yg)("inlineCode",{parentName:"p"},"create"),",",(0,t.yg)("inlineCode",{parentName:"p"},"edit"),",",(0,t.yg)("inlineCode",{parentName:"p"},"show"),") the ",(0,t.yg)("inlineCode",{parentName:"p"},"useBreadcrumb")," uses the ",(0,t.yg)("inlineCode",{parentName:"p"},"actions")," key to translate the key ",(0,t.yg)("inlineCode",{parentName:"p"},"translate(`actions.${action}`)"),"."),(0,t.yg)("p",null,"For example, ",(0,t.yg)("inlineCode",{parentName:"p"},"create")," action should look like: ",(0,t.yg)("inlineCode",{parentName:"p"},"translate(`actions.create`)"))),(0,t.yg)("h2",{id:"api-reference"},"API Reference"),(0,t.yg)("h3",{id:"return-values"},"Return values"),(0,t.yg)(d,{id:"return-values",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("table",null,(0,t.yg)("thead",{parentName:"table"},(0,t.yg)("tr",{parentName:"thead"},(0,t.yg)("th",{parentName:"tr",align:null},"Property"),(0,t.yg)("th",{parentName:"tr",align:null},"Description"),(0,t.yg)("th",{parentName:"tr",align:null},"Type"))),(0,t.yg)("tbody",{parentName:"table"},(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"breadcrumbs"),(0,t.yg)("td",{parentName:"tr",align:null},"The breadcrumbs array"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("inlineCode",{parentName:"td"},"BreadcrumbsType")))))),(0,t.yg)("h4",{id:"breadcrumbstype"},"BreadcrumbsType"),(0,t.yg)(d,{id:"breadcrumbstype",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx"},"type BreadcrumbsType = {\n  label: string;\n  href?: string;\n  icon?: React.ReactNode;\n};\n"))))}b.isMDXComponent=!0}}]);