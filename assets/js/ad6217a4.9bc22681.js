"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[67266],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=o.createContext({}),l=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=l(e.components);return o.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=r,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return t?o.createElement(h,a(a({ref:n},c),{},{components:t})):o.createElement(h,a({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},80055:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>p,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>u});t(67294);var o=t(3905);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const s={title:"Show",swizzle:!0},p=void 0,l={unversionedId:"ui-integrations/mantine/components/buttons/show-button/index",id:"ui-integrations/mantine/components/buttons/show-button/index",title:"Show",description:"` uses Mantine's  component. It uses the show method from useNavigation` under the hood. It can be useful when redirecting the app to the show page with the record id route of resource.",source:"@site/docs/ui-integrations/mantine/components/buttons/show-button/index.md",sourceDirName:"ui-integrations/mantine/components/buttons/show-button",slug:"/ui-integrations/mantine/components/buttons/show-button/",permalink:"/docs/ui-integrations/mantine/components/buttons/show-button/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/ui-integrations/mantine/components/buttons/show-button/index.md",tags:[],version:"current",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1704208991,formattedLastUpdatedAt:"Jan 2, 2024",frontMatter:{title:"Show",swizzle:!0},sidebar:"mainSidebar",previous:{title:"Save",permalink:"/docs/ui-integrations/mantine/components/buttons/save-button/"},next:{title:"Boolean",permalink:"/docs/ui-integrations/mantine/components/fields/boolean-field/"}},c={},u=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"recordItemId",id:"recorditemid",level:3},{value:"resource",id:"resource",level:3},{value:"meta",id:"meta",level:3},{value:"accessControl",id:"accesscontrol",level:3},{value:"<del>resourceNameOrRouteName</del> <PropTag deprecated />",id:"resourcenameorroutename-",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],d=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",n)},m=d("PropTag"),h=d("PropsTable"),f={toc:u};function g(e){var{components:n}=e,t=a(e,["components"]);return(0,o.kt)("wrapper",i(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),o.forEach((function(n){r(e,n,t[n])}))}return e}({},f,t),{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live shared",live:!0,shared:!0},'const { default: routerProvider } = LegacyRefineReactRouterV6;\nconst { default: simpleRest } = RefineSimpleRest;\nsetRefineProps({\n  legacyRouterProvider: routerProvider,\n  dataProvider: simpleRest("https://api.fake-rest.refine.dev"),\n  notificationProvider: RefineMantine.notificationProvider,\n  Layout: RefineMantine.Layout,\n  Sider: () => null,\n  catchAll: <RefineMantine.ErrorComponent />,\n});\n\nconst Wrapper = ({ children }) => {\n  return (\n    <MantineCore.MantineProvider theme={RefineMantine.LightTheme} withNormalizeCSS withGlobalStyles>\n      <MantineCore.Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />\n      <MantineNotifications.NotificationsProvider position="top-right">\n        {children}\n      </MantineNotifications.NotificationsProvider>\n    </MantineCore.MantineProvider>\n  );\n};\n\nconst ShowPage = () => {\n  const { list } = RefineCore.useNavigation();\n  const params = RefineCore.useRouterContext().useParams();\n\n  return (\n    <div>\n      <MantineCore.Text italic color="dimmed" size="sm">\n        URL Parameters:\n      </MantineCore.Text>\n      <MantineCore.Code>{JSON.stringify(params)}</MantineCore.Code>\n      <MantineCore.Space h="md" />\n      <MantineCore.Button size="xs" variant="outline" onClick={() => list("posts")}>\n        Go back\n      </MantineCore.Button>\n    </div>\n  );\n};\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<ShowButton>")," uses Mantine's ",(0,o.kt)("a",{parentName:"p",href:"https://mantine.dev/core/button"},(0,o.kt)("inlineCode",{parentName:"a"},"<Button>"))," component. It uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"show")," method from ",(0,o.kt)("a",{parentName:"p",href:"/docs/routing/hooks/use-navigation"},(0,o.kt)("inlineCode",{parentName:"a"},"useNavigation"))," under the hood. It can be useful when redirecting the app to the show page with the record id route of resource."),(0,o.kt)("admonition",{title:"Good to know",type:"simple"},(0,o.kt)("p",{parentName:"admonition"},"You can swizzle this component with the ",(0,o.kt)("a",{parentName:"p",href:"/docs/packages/list-of-packages"},(0,o.kt)("strong",{parentName:"a"},"Refine CLI"))," to customize it.")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=420px hideCode",live:!0,url:"http://localhost:3000",previewHeight:"420px",hideCode:!0},'setInitialRoutes(["/posts"]);\nimport { Refine, useNavigation, useRouterContext } from "@refinedev/core";\n\n// visible-block-start\nimport { List, ShowButton } from "@refinedev/mantine";\nimport { Table, Pagination } from "@mantine/core";\nimport { useTable } from "@refinedev/react-table";\nimport { ColumnDef, flexRender } from "@tanstack/react-table";\n\nconst PostList: React.FC = () => {\n  const columns = React.useMemo<ColumnDef<IPost>[]>(\n    () => [\n      {\n        id: "id",\n        header: "ID",\n        accessorKey: "id",\n      },\n      {\n        id: "title",\n        header: "Title",\n        accessorKey: "title",\n      },\n      {\n        id: "actions",\n        header: "Actions",\n        accessorKey: "id",\n        cell: function render({ getValue }) {\n          return (\n            // highlight-start\n            <ShowButton size="xs" recordItemId={getValue() as number} />\n            // highlight-end\n          );\n        },\n      },\n    ],\n    [],\n  );\n\n  const {\n    getHeaderGroups,\n    getRowModel,\n    refineCore: { setCurrent, pageCount, current },\n  } = useTable({\n    columns,\n  });\n\n  return (\n    <List>\n      <Table>\n        <thead>\n          {getHeaderGroups().map((headerGroup) => (\n            <tr key={headerGroup.id}>\n              {headerGroup.headers.map((header) => (\n                <th key={header.id}>\n                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}\n                </th>\n              ))}\n            </tr>\n          ))}\n        </thead>\n        <tbody>\n          {getRowModel().rows.map((row) => (\n            <tr key={row.id}>\n              {row.getVisibleCells().map((cell) => (\n                <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>\n              ))}\n            </tr>\n          ))}\n        </tbody>\n      </Table>\n      <br />\n      <Pagination position="right" total={pageCount} page={current} onChange={setCurrent} />\n    </List>\n  );\n};\n\ninterface IPost {\n  id: number;\n  title: string;\n}\n// visible-block-end\n\nconst App = () => {\n  return (\n    <Refine\n      resources={[\n        {\n          name: "posts",\n          list: PostList,\n          show: ShowPage,\n        },\n      ]}\n    />\n  );\n};\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n')),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"recorditemid"},"recordItemId"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"recordItemId")," is used to append the record id to the end of the route path. By default ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," will be read from the route parameters."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=200px",live:!0,url:"http://localhost:3000",previewHeight:"200px"},'setInitialRoutes(["/"]);\nimport { Refine } from "@refinedev/core";\n\n// visible-block-start\nimport { ShowButton } from "@refinedev/mantine";\n\nconst MyShowComponent = () => {\n  return <ShowButton recordItemId="123" />;\n};\n// visible-block-end\n\nconst App = () => {\n  return (\n    <Refine\n      resources={[\n        {\n          name: "posts",\n          show: ShowPage,\n          list: MyShowComponent,\n        },\n      ]}\n    />\n  );\n};\n\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n')),(0,o.kt)("p",null,"Clicking the button will trigger the ",(0,o.kt)("inlineCode",{parentName:"p"},"show")," method of ",(0,o.kt)("a",{parentName:"p",href:"/docs/routing/hooks/use-navigation"},(0,o.kt)("inlineCode",{parentName:"a"},"useNavigation"))," and then redirect the app to the ",(0,o.kt)("inlineCode",{parentName:"p"},"show")," action path of the resource, filling the necessary parameters in the route."),(0,o.kt)("h3",{id:"resource"},"resource"),(0,o.kt)("p",null,"Redirection endpoint is defined by the ",(0,o.kt)("inlineCode",{parentName:"p"},"resource"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"show")," action path. By default, ",(0,o.kt)("inlineCode",{parentName:"p"},"<ShowButton>")," uses the inferred resource from the route."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=200px",live:!0,url:"http://localhost:3000",previewHeight:"200px"},'setInitialRoutes(["/"]);\n\nimport { Refine } from "@refinedev/core";\n\n// visible-block-start\nimport { ShowButton } from "@refinedev/mantine";\n\nconst MyShowComponent = () => {\n  return <ShowButton resource="categories" recordItemId="2" />;\n};\n// visible-block-end\n\nconst App = () => {\n  return (\n    <Refine\n      resources={[\n        {\n          name: "posts",\n          list: MyShowComponent,\n        },\n        {\n          name: "categories",\n          show: ShowPage,\n        },\n      ]}\n    />\n  );\n};\n\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n')),(0,o.kt)("p",null,"Clicking the button will trigger the ",(0,o.kt)("inlineCode",{parentName:"p"},"show")," method of ",(0,o.kt)("a",{parentName:"p",href:"/docs/routing/hooks/use-navigation"},(0,o.kt)("inlineCode",{parentName:"a"},"useNavigation"))," and then redirect the app to the ",(0,o.kt)("inlineCode",{parentName:"p"},"show")," action path of the resource, filling the necessary parameters in the route."),(0,o.kt)("p",null,"If you have multiple resources with the same name, you can pass the ",(0,o.kt)("inlineCode",{parentName:"p"},"identifier")," instead of the ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," of the resource. It will only be used as the main matching key for the resource, data provider methods will still work with the ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," of the resource defined in the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine/>")," component."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/refine-component#identifier"},(0,o.kt)("inlineCode",{parentName:"a"},"identifier")," section of the ",(0,o.kt)("inlineCode",{parentName:"a"},"<Refine/>")," component documentation ","\u2192"))),(0,o.kt)("h3",{id:"meta"},"meta"),(0,o.kt)("p",null,"It is used to pass additional parameters to the ",(0,o.kt)("inlineCode",{parentName:"p"},"show")," method of ",(0,o.kt)("a",{parentName:"p",href:"/docs/routing/hooks/use-navigation"},(0,o.kt)("inlineCode",{parentName:"a"},"useNavigation")),". By default, existing parameters in the route are used by the ",(0,o.kt)("inlineCode",{parentName:"p"},"show")," method. You can pass additional parameters or override the existing ones using the ",(0,o.kt)("inlineCode",{parentName:"p"},"meta")," prop."),(0,o.kt)("p",null,"If the ",(0,o.kt)("inlineCode",{parentName:"p"},"show")," action route is defined by the pattern: ",(0,o.kt)("inlineCode",{parentName:"p"},"/posts/:authorId/show/:id"),", the ",(0,o.kt)("inlineCode",{parentName:"p"},"meta")," prop can be used as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'const MyComponent = () => {\n  return <ShowButton meta={{ authorId: "10" }} />;\n};\n')),(0,o.kt)("h3",{id:""}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"hideText")," is used to show and not show the text of the button. When ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", only the button icon is visible."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=200px",live:!0,url:"http://localhost:3000",previewHeight:"200px"},'setInitialRoutes(["/"]);\n\nimport { Refine } from "@refinedev/core";\n\n// visible-block-start\nimport { ShowButton } from "@refinedev/mantine";\n\nconst MyShowComponent = () => {\n  return <ShowButton recordItemId="123" hideText />;\n};\n// visible-block-end\n\nconst App = () => {\n  return (\n    <Refine\n      resources={[\n        {\n          name: "posts",\n          list: MyShowComponent,\n          show: ShowPage,\n        },\n      ]}\n    />\n  );\n};\n\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n')),(0,o.kt)("h3",{id:"accesscontrol"},"accessControl"),(0,o.kt)("p",null,"This prop can be used to skip access control check with its ",(0,o.kt)("inlineCode",{parentName:"p"},"enabled")," property or to hide the button when the user does not have the permission to access the resource with ",(0,o.kt)("inlineCode",{parentName:"p"},"hideIfUnauthorized")," property. This is relevant only when an ",(0,o.kt)("a",{parentName:"p",href:"/docs/authorization/access-control-provider"},(0,o.kt)("inlineCode",{parentName:"a"},"accessControlProvider"))," is provided to ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/refine-component"},(0,o.kt)("inlineCode",{parentName:"a"},"<Refine/>"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { ShowButton } from "@refinedev/mantine";\n\nexport const MyListComponent = () => {\n  return <ShowButton accessControl={{ enabled: true, hideIfUnauthorized: true }} />;\n};\n')),(0,o.kt)("h3",{id:"resourcenameorroutename-"},(0,o.kt)("del",{parentName:"h3"},"resourceNameOrRouteName")," ",(0,o.kt)(m,{deprecated:!0,mdxType:"PropTag"})),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"resource")," prop instead."),(0,o.kt)("h2",{id:"api-reference"},"API Reference"),(0,o.kt)("h3",{id:"properties-1"},"Properties"),(0,o.kt)(h,{module:"@refinedev/mantine/ShowButton",mdxType:"PropsTable"}))}g.isMDXComponent=!0}}]);