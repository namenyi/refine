"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[18825],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>c});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(t),g=a,c=d["".concat(s,".").concat(g)]||d[g]||m[g]||i;return t?r.createElement(c,o(o({ref:n},p),{},{components:t})):r.createElement(c,o({ref:n},p))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},6432:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>d});t(96540);var r=t(15680);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const l={title:"useMenu",source:"packages/core/src/hooks/menu/useMenu.tsx"},s=void 0,u={unversionedId:"core/hooks/utilities/use-menu/index",id:"core/hooks/utilities/use-menu/index",title:"useMenu",description:"useMenu is used to get menu items derived from the resources. These items include a link to the dashboard page (if it exists) and links to the user-defined resources (passed as children to ``).",source:"@site/docs/core/hooks/utilities/use-menu/index.md",sourceDirName:"core/hooks/utilities/use-menu",slug:"/core/hooks/utilities/use-menu/",permalink:"/docs/core/hooks/utilities/use-menu/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/core/hooks/utilities/use-menu/index.md",tags:[],version:"current",lastUpdatedBy:"Balamurugan",lastUpdatedAt:1712298486,formattedLastUpdatedAt:"Apr 5, 2024",frontMatter:{title:"useMenu",source:"packages/core/src/hooks/menu/useMenu.tsx"},sidebar:"mainSidebar",previous:{title:"useModal",permalink:"/docs/core/hooks/utilities/use-modal/"},next:{title:"useBreadcrumb",permalink:"/docs/core/hooks/utilities/use-breadcrumb/"}},p={},d=[{value:"Usage",id:"usage",level:2},{value:"Creating a Menu",id:"creating-a-menu",level:3},{value:"Multi Level Menus",id:"multi-level-menus",level:3},{value:"Properties",id:"properties",level:2},{value:"hideOnMissingParameter",id:"hideonmissingparameter",level:3},{value:"meta",id:"meta",level:3},{value:"Return Values",id:"return-values",level:2},{value:"selectedKey",id:"selectedkey",level:3},{value:"menuItems",id:"menuitems",level:3},{value:"defaultOpenKeys",id:"defaultopenkeys",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3},{value:"Return values",id:"return-values-1",level:3},{value:"Interfaces",id:"interfaces",level:4},{value:"Example",id:"example",level:2}],m=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",n)},g=m("DocThumbsUpDownFeedbackWidget"),c=m("CodeSandboxExample"),y={toc:d},h="wrapper";function f(e){var{components:n}=e,t=o(e,["components"]);return(0,r.yg)(h,i(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){a(e,n,t[n])}))}return e}({},y,t),{components:n,mdxType:"MDXLayout"}),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-css",metastring:"live shared",live:!0,shared:!0},"body {\n  padding: 4px;\n  background: white;\n}\n")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"useMenu")," is used to get menu items derived from the resources. These items include a link to the dashboard page (if it exists) and links to the user-defined resources (passed as children to ",(0,r.yg)("inlineCode",{parentName:"p"},"<Refine>"),")."),(0,r.yg)("p",null,"This hook can also be used to build custom menus, including multi-level support. ",(0,r.yg)("inlineCode",{parentName:"p"},"<Sider/>")," components inside the ",(0,r.yg)("a",{parentName:"p",href:"/docs/ui-integrations/ant-design/introduction"},(0,r.yg)("inlineCode",{parentName:"a"},"@refinedev/antd")),", ",(0,r.yg)("a",{parentName:"p",href:"/docs/ui-integrations/material-ui/introduction"},(0,r.yg)("inlineCode",{parentName:"a"},"@refinedev/mui")),", ",(0,r.yg)("a",{parentName:"p",href:"/docs/ui-integrations/chakra-ui/introduction"},(0,r.yg)("inlineCode",{parentName:"a"},"@refinedev/chakra-ui"))," and, ",(0,r.yg)("a",{parentName:"p",href:"/docs/ui-integrations/mantine/introduction"},(0,r.yg)("inlineCode",{parentName:"a"},"@refinedev/mantine"))," packages for example use this hook as a base for their menus."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"const { selectedKey, menuItems, defaultOpenKeys } = useMenu();\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"menuItems")," is a list of style agnostic menu items. Each of them has a key."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"selectedKey")," is the key of the resource user is viewing at the moment. Its inferred from the route."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"defaultOpenKeys")," is the array with the keys of default opened menus.")),(0,r.yg)("admonition",{title:"Deprecation Notice",type:"simple"},(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("inlineCode",{parentName:"p"},"useMenu")," hooks exported from ",(0,r.yg)("inlineCode",{parentName:"p"},"@refinedev/antd")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"@refinedev/mui")," packages are now ",(0,r.yg)("strong",{parentName:"p"},"deprecated")," and will be removed. Please use ",(0,r.yg)("inlineCode",{parentName:"p"},"useMenu")," from ",(0,r.yg)("inlineCode",{parentName:"p"},"@refinedev/core"),".")),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)(g,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"If you are using ",(0,r.yg)("a",{parentName:"p",href:"/docs/ui-integrations/ant-design/introduction"},(0,r.yg)("inlineCode",{parentName:"a"},"@refinedev/antd")),", ",(0,r.yg)("a",{parentName:"p",href:"/docs/ui-integrations/material-ui/introduction"},(0,r.yg)("inlineCode",{parentName:"a"},"@refinedev/mui")),", ",(0,r.yg)("a",{parentName:"p",href:"/docs/ui-integrations/chakra-ui/introduction"},(0,r.yg)("inlineCode",{parentName:"a"},"@refinedev/chakra-ui"))," or ",(0,r.yg)("a",{parentName:"p",href:"/docs/ui-integrations/mantine/introduction"},(0,r.yg)("inlineCode",{parentName:"a"},"@refinedev/mantine"))," as a UI framework integration, you can find out more info about their structure and how to use ",(0,r.yg)("inlineCode",{parentName:"p"},"useMenu")," in the ",(0,r.yg)("a",{parentName:"p",href:"/docs/advanced-tutorials/custom-layout/"},"Custom Layout"))),(0,r.yg)("h3",{id:"creating-a-menu"},"Creating a Menu"),(0,r.yg)(g,{id:"creating-a-menu",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"We will show you how to use ",(0,r.yg)("inlineCode",{parentName:"p"},"useMenu")," to create a simple menu for your Refine application."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode url=http://localhost:3000",live:!0,hideCode:!0,url:"http://localhost:3000"},'setInitialRoutes(["/"]);\n\n// visible-block-start\nimport React from "react";\nimport { useMenu, LayoutProps, ITreeMenu } from "@refinedev/core";\n\nimport { Link } from "react-router-dom";\n\nconst Layout: React.FC<LayoutProps> = ({ children }) => {\n  // highlight-start\n  const { menuItems, selectedKey } = useMenu();\n  // highlight-end\n\n  // highlight-start\n  const renderMenuItems = (items: ITreeMenu[]) => {\n    return (\n      <>\n        {menuItems.map(({ key, name, label, icon, route }) => {\n          const isSelected = key === selectedKey;\n          return (\n            <li key={name}>\n              <Link\n                to={route}\n                style={{\n                  fontWeight: isSelected ? "bold" : "normal",\n                }}\n              >\n                {icon}\n                <span>{label ?? name}</span>\n              </Link>\n            </li>\n          );\n        })}\n      </>\n    );\n  };\n  // highlight-end\n\n  return (\n    <div>\n      <div>\n        <Link to="/">\n          <img src="https://refine.dev/img/refine_logo.png" alt="Logo" />\n        </Link>\n        {/* highlight-start */}\n        <ul>{renderMenuItems(menuItems)}</ul>\n        {/* highlight-end */}\n      </div>\n      <div>{children}</div>\n    </div>\n  );\n};\n\nimport { Refine } from "@refinedev/core";\nimport routerProvider, { NavigateToResource } from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\n\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\nimport { Layout } from "components";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n  return (\n    <BrowserRouter>\n      <Refine\n        dataProvider={dataProvider(API_URL)}\n        routerProvider={routerProvider}\n        resources={[\n          {\n            name: "posts",\n            list: "/posts",\n          },\n          {\n            name: "categories",\n            list: "/categories",\n          },\n        ]}\n      >\n        <Routes>\n          <Route\n            element={\n              <Layout>\n                <Outlet />\n              </Layout>\n            }\n          >\n            <Route index element={<NavigateToResource />} />\n            <Route path="/posts" element={<div>dummy posts page</div>} />\n            <Route\n              path="/categories"\n              element={<div>dummy categories page</div>}\n            />\n          </Route>\n        </Routes>\n      </Refine>\n    </BrowserRouter>\n  );\n};\n// visible-block-end\n\nrender(App);\n')),(0,r.yg)("p",null,"We created ",(0,r.yg)("inlineCode",{parentName:"p"},"<Layout>")," with a header with a logo and a list of links to all menu items (resources). The links are clickable and will navigate to the corresponding resource. To do this, we used the ",(0,r.yg)("inlineCode",{parentName:"p"},"useMenu")," hook to get the menu items from the ",(0,r.yg)("inlineCode",{parentName:"p"},"<Refine/>")," and the ",(0,r.yg)("inlineCode",{parentName:"p"},"useRouterContext")," hook to get the ",(0,r.yg)("inlineCode",{parentName:"p"},"<Link/>")," component from the router provider. The ",(0,r.yg)("a",{parentName:"p",href:"/docs/routing/hooks/use-navigation"},(0,r.yg)("inlineCode",{parentName:"a"},"useNavigation"))," hook can be used for navigating between routes as well."),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"children")," is the content of the layout. In our case, it is the content of the ",(0,r.yg)("strong",{parentName:"p"},"Page")," components."),(0,r.yg)("p",null,"After creating the ",(0,r.yg)("inlineCode",{parentName:"p"},"<Layout/>")," component, we can use it in our application. We need to pass it to the ",(0,r.yg)("inlineCode",{parentName:"p"},"<Refine/>")," component as a prop."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"For more information on layout customization, refer to the ",(0,r.yg)("a",{parentName:"p",href:"/docs/advanced-tutorials/custom-layout/"},"Custom Layout guide ","\u2192")))),(0,r.yg)("h3",{id:"multi-level-menus"},"Multi Level Menus"),(0,r.yg)(g,{id:"multi-level-menus",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"useMenu")," hook comes out of the box with multi level menu support, you can render menu items recursively to get a multi level menu."),(0,r.yg)("p",null,"Update your ",(0,r.yg)("inlineCode",{parentName:"p"},"resources")," in ",(0,r.yg)("inlineCode",{parentName:"p"},"<Refine/>")," with ",(0,r.yg)("inlineCode",{parentName:"p"},"meta.parent")," to nest them inside a label:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@refinedev/core";\nimport routerProvider, { NavigateToResource } from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\n\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\nimport { Layout } from "components/layout";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n  return (\n    <BrowserRouter>\n      <Refine\n        routerProvider={routerProvider}\n        dataProvider={dataProvider(API_URL)}\n        // highlight-start\n        resources={[\n          {\n            name: "CMS",\n          },\n          {\n            name: "posts",\n            list: "/CMS/posts",\n            meta: { parent: "CMS" },\n          },\n          {\n            name: "categories",\n            list: "/CMS/categories",\n            meta: { parent: "CMS" },\n          },\n        ]}\n        // highlight-end\n      >\n        <Routes>\n          <Route\n            element={\n              <Layout>\n                <Outlet />\n              </Layout>\n            }\n          >\n            <Route index element={<NavigateToResource />} />\n            <Route path="/posts" element={<div>dummy posts page</div>} />\n            <Route\n              path="/categories"\n              element={<div>dummy categories page</div>}\n            />\n          </Route>\n        </Routes>\n      </Refine>\n    </BrowserRouter>\n  );\n};\n\nexport default App;\n')),(0,r.yg)("p",null,"Now you can update your ",(0,r.yg)("inlineCode",{parentName:"p"},"<Layout/>")," to support multi level rendering with following code:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/Layout.tsx"',title:'"src/components/Layout.tsx"'},'import React from "react";\nimport { useMenu, LayoutProps, ITreeMenu } from "@refinedev/core";\n\nimport { Link } from "react-router-dom";\n\nexport const Layout: React.FC<LayoutProps> = ({ children }) => {\n  const { menuItems, selectedKey } = useMenu();\n\n  // highlight-start\n  const renderMenuItems = (items: ITreeMenu[]) => {\n    return (\n      <>\n        {items.map(({ key, name, label, icon, route, children, list }) => {\n          if (!list) {\n            return (\n              <li key={label}>\n                <span>{label ?? name}</span>\n                {children ? renderMenuItems(children) : null}\n              </li>\n            );\n          }\n\n          const isSelected = key === selectedKey;\n\n          return (\n            <li key={label}>\n              <Link\n                to={route}\n                style={{\n                  fontWeight: isSelected ? "bold" : "normal",\n                }}\n              >\n                {icon}\n                <span>{label ?? name}</span>\n              </Link>\n            </li>\n          );\n        })}\n      </>\n    );\n  };\n  // highlight-end\n\n  return (\n    <div>\n      <div>\n        <Link to="/">\n          <img src="https://refine.dev/img/refine_logo.png" alt="Logo" />\n        </Link>\n        <ul>{renderMenuItems(menuItems)}</ul>\n      </div>\n      <div>{children}</div>\n    </div>\n  );\n};\n'))),(0,r.yg)("h2",{id:"properties"},"Properties"),(0,r.yg)("h3",{id:"hideonmissingparameter"},"hideOnMissingParameter"),(0,r.yg)(g,{id:"hideonmissingparameter",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"It only affects menu items that require additional parameters to generate their URL. If the parameters are missing in the current URL neither in the ",(0,r.yg)("inlineCode",{parentName:"p"},"meta")," property of the ",(0,r.yg)("inlineCode",{parentName:"p"},"useMenu")," or in the ",(0,r.yg)("inlineCode",{parentName:"p"},"meta")," property of the resource definition, the menu items that require a parameter will be hidden. By default, this property is set to ",(0,r.yg)("inlineCode",{parentName:"p"},"true"),"."),(0,r.yg)("p",null,"For example, suppose you have a resource with a list path defined as ",(0,r.yg)("inlineCode",{parentName:"p"},"/authors/:authorId/books"),". If there is no ",(0,r.yg)("inlineCode",{parentName:"p"},"authorId")," parameter in the current URL or in the ",(0,r.yg)("inlineCode",{parentName:"p"},"meta")," object, the menu item for this resource will be hidden."),(0,r.yg)("p",null,"However, if you set ",(0,r.yg)("inlineCode",{parentName:"p"},"hideOnMissingParameter")," to ",(0,r.yg)("inlineCode",{parentName:"p"},"false")," when calling ",(0,r.yg)("inlineCode",{parentName:"p"},"useMenu"),", the menu item for this resource will still be shown, even if the ",(0,r.yg)("inlineCode",{parentName:"p"},"authorId")," parameter is missing.")),(0,r.yg)("h3",{id:"meta"},"meta"),(0,r.yg)(g,{id:"meta",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"An object of parameters to use when additional parameters are present in the resource paths. For example, if you have a resource with list path defined as ",(0,r.yg)("inlineCode",{parentName:"p"},"/:authorId/posts")," and want to show this resource in your menu:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"const { menuItems } = useMenu({ meta: { authorId: 123 } });\n")),(0,r.yg)("p",null,"If there is already an ",(0,r.yg)("inlineCode",{parentName:"p"},"authorId")," parameter in the current URL or in the ",(0,r.yg)("inlineCode",{parentName:"p"},"meta")," property of the resource definition, ",(0,r.yg)("inlineCode",{parentName:"p"},"useMenu")," will use this parameter by default. You can override this behavior by passing the ",(0,r.yg)("inlineCode",{parentName:"p"},"meta")," property to the ",(0,r.yg)("inlineCode",{parentName:"p"},"useMenu")," hook.")),(0,r.yg)("h2",{id:"return-values"},"Return Values"),(0,r.yg)("h3",{id:"selectedkey"},"selectedKey"),(0,r.yg)(g,{id:"selectedkey",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"If the current URL matches a resource path, the key of the resource will be returned. Otherwise, ",(0,r.yg)("inlineCode",{parentName:"p"},"undefined")," will be returned.")),(0,r.yg)("h3",{id:"menuitems"},"menuItems"),(0,r.yg)(g,{id:"menuitems",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"List of the menu tems returned based on the ",(0,r.yg)("inlineCode",{parentName:"p"},"resources")," prop of the ",(0,r.yg)("inlineCode",{parentName:"p"},"<Refine/>")," component.")),(0,r.yg)("h3",{id:"defaultopenkeys"},"defaultOpenKeys"),(0,r.yg)(g,{id:"defaultopenkeys",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"Array with the keys of default opened menus.")),(0,r.yg)("h2",{id:"api-reference"},"API Reference"),(0,r.yg)("h3",{id:"properties-1"},"Properties"),(0,r.yg)(g,{id:"properties-1",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Property"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"hideOnMissingParameter"),(0,r.yg)("td",{parentName:"tr",align:null},"Whether to hide menu items that require additional parameters to generate their URL or not."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"boolean")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"true"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"meta"),(0,r.yg)("td",{parentName:"tr",align:null},"It is used when creating menu item URL with additional parameters."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Record<string, unknown>")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"{}")))))),(0,r.yg)("h3",{id:"return-values-1"},"Return values"),(0,r.yg)(g,{id:"return-values-1",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Property"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"selectedKey"),(0,r.yg)("td",{parentName:"tr",align:null},"Key of the resource the user is viewing at the moment."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"undefined"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"menuItems"),(0,r.yg)("td",{parentName:"tr",align:null},"List of the menu items returned based on the resource definitions."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#interfaces"},(0,r.yg)("inlineCode",{parentName:"a"},"TreeMenuItem[]")))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"defaultOpenKeys"),(0,r.yg)("td",{parentName:"tr",align:null},"Array with the keys of default opened menus."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"string[]")))))),(0,r.yg)("h4",{id:"interfaces"},"Interfaces"),(0,r.yg)(g,{id:"interfaces",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"// highlight-start\nexport type TreeMenuItem = IResourceItem & {\n  key: string;\n  route?: string;\n  icon?: React.ReactNode;\n  label?: string;\n  children: TreeMenuItem[];\n};\n// highlight-end\n"))),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)(g,{id:"example",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)(c,{path:"core-use-menu",mdxType:"CodeSandboxExample"})))}f.isMDXComponent=!0}}]);