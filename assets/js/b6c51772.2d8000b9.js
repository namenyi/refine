"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[96996],{15680:(e,n,t)=>{t.d(n,{xA:()=>l,yg:()=>m});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(t),h=o,m=u["".concat(p,".").concat(h)]||u[h]||d[h]||i;return t?r.createElement(m,a(a({ref:n},l),{},{components:t})):r.createElement(m,a({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=h;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},38381:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>p,default:()=>b,frontMatter:()=>s,metadata:()=>c,toc:()=>u});t(96540);var r=t(15680);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const s={title:"Refresh",swizzle:!0},p=void 0,c={unversionedId:"ui-integrations/chakra-ui/components/buttons/refresh-button/index",id:"ui-integrations/chakra-ui/components/buttons/refresh-button/index",title:"Refresh",description:"` uses Chakra UI's  component to update the data shown on the page via the useInvalidate` hook.",source:"@site/docs/ui-integrations/chakra-ui/components/buttons/refresh-button/index.md",sourceDirName:"ui-integrations/chakra-ui/components/buttons/refresh-button",slug:"/ui-integrations/chakra-ui/components/buttons/refresh-button/",permalink:"/docs/ui-integrations/chakra-ui/components/buttons/refresh-button/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/ui-integrations/chakra-ui/components/buttons/refresh-button/index.md",tags:[],version:"current",lastUpdatedBy:"Balamurugan",lastUpdatedAt:1712298486,formattedLastUpdatedAt:"Apr 5, 2024",frontMatter:{title:"Refresh",swizzle:!0},sidebar:"mainSidebar",previous:{title:"List",permalink:"/docs/ui-integrations/chakra-ui/components/buttons/list-button/"},next:{title:"Save",permalink:"/docs/ui-integrations/chakra-ui/components/buttons/save-button/"}},l={},u=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"recordItemId",id:"recorditemid",level:3},{value:"resource",id:"resource",level:3},{value:"hideText",id:"hidetext",level:3},{value:"<del>resourceNameOrRouteName</del> <PropTag deprecated />",id:"resourcenameorroutename-",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],d=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",n)},h=d("DocThumbsUpDownFeedbackWidget"),m=d("PropTag"),f=d("PropsTable"),g={toc:u},y="wrapper";function b(e){var{components:n}=e,t=a(e,["components"]);return(0,r.yg)(y,i(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){o(e,n,t[n])}))}return e}({},g,t),{components:n,mdxType:"MDXLayout"}),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live shared",live:!0,shared:!0},'const { default: sharedRouterProvider } = LegacyRefineReactRouterV6;\nconst { default: simpleRest } = RefineSimpleRest;\nsetRefineProps({\n  legacyRouterProvider: sharedRouterProvider,\n  dataProvider: simpleRest("https://api.fake-rest.refine.dev"),\n  Layout: RefineChakra.Layout,\n  Sider: () => null,\n  catchAll: <RefineChakra.ErrorComponent />,\n});\n\nconst Wrapper = ({ children }) => {\n  return (\n    <ChakraUI.ChakraProvider theme={RefineChakra.refineTheme}>\n      {children}\n    </ChakraUI.ChakraProvider>\n  );\n};\n')),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"<RefreshButton>")," uses Chakra UI's ",(0,r.yg)("a",{parentName:"p",href:"https://chakra-ui.com/docs/components/button/usage"},(0,r.yg)("inlineCode",{parentName:"a"},"<Button>"))," component to update the data shown on the page via the ",(0,r.yg)("a",{parentName:"p",href:"/docs/data/hooks/use-invalidate"},(0,r.yg)("inlineCode",{parentName:"a"},"useInvalidate"))," hook."),(0,r.yg)("admonition",{title:"Good to know",type:"simple"},(0,r.yg)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,r.yg)("a",{parentName:"p",href:"/docs/packages/list-of-packages"},(0,r.yg)("strong",{parentName:"a"},"Refine CLI")))),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)(h,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts/show/123 previewHeight=420px hideCode",live:!0,url:"http://localhost:3000/posts/show/123",previewHeight:"420px",hideCode:!0},'setInitialRoutes(["/posts/show/123"]);\nimport { Refine } from "@refinedev/core";\nimport { ShowButton } from "@refinedev/chakra-ui";\n\n// visible-block-start\nimport { useShow } from "@refinedev/core";\nimport {\n  Show,\n  MarkdownField,\n  //highlight-next-line\n  RefreshButton,\n} from "@refinedev/chakra-ui";\nimport { Heading, Text, Spacer } from "@chakra-ui/react";\n\nconst PostShow: React.FC = () => {\n  const { queryResult } = useShow<IPost>();\n  const { data, isLoading } = queryResult;\n  const record = data?.data;\n\n  return (\n    // highlight-next-line\n    <Show headerButtons={<RefreshButton />} isLoading={isLoading}>\n      <Heading as="h5" size="sm">\n        Id\n      </Heading>\n      <Text mt={2}>{record?.id}</Text>\n\n      <Heading as="h5" size="sm" mt={4}>\n        Title\n      </Heading>\n      <Text mt={2}>{record?.title}</Text>\n\n      <Heading as="h5" size="sm" mt={4}>\n        Content\n      </Heading>\n      <Spacer mt={2} />\n      <MarkdownField value={record?.content} />\n    </Show>\n  );\n};\n// visible-block-end\n\nconst App = () => {\n  return (\n    <Refine\n      notificationProvider={RefineChakra.notificationProvider()}\n      resources={[\n        {\n          name: "posts",\n          show: PostShow,\n          list: () => (\n            <RefineChakra.VStack alignItems="flex-start">\n              <RefineChakra.Text>This page is empty.</RefineChakra.Text>\n              <ShowButton colorScheme="black" recordItemId="123">\n                Show Item 123\n              </ShowButton>\n            </RefineChakra.VStack>\n          ),\n        },\n      ]}\n    />\n  );\n};\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n'))),(0,r.yg)("h2",{id:"properties"},"Properties"),(0,r.yg)("h3",{id:"recorditemid"},"recordItemId"),(0,r.yg)(h,{id:"recorditemid",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"recordItemId")," allows us to manage which data is going to be refreshed. By default it will read the id information from the route."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=200px",live:!0,url:"http://localhost:3000",previewHeight:"200px"},'setInitialRoutes(["/"]);\nimport { Refine } from "@refinedev/core";\n\n// visible-block-start\nimport { RefreshButton } from "@refinedev/chakra-ui";\n\nconst MyRefreshComponent = () => {\n  return <RefreshButton colorScheme="black" recordItemId="123" />;\n};\n// visible-block-end\n\nconst App = () => {\n  return (\n    <Refine\n      resources={[\n        {\n          name: "posts",\n          list: MyRefreshComponent,\n        },\n      ]}\n    />\n  );\n};\n\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n')),(0,r.yg)("p",null,"Clicking the button will trigger the ",(0,r.yg)("a",{parentName:"p",href:"/docs/data/hooks/use-invalidate"},(0,r.yg)("inlineCode",{parentName:"a"},"useInvalidate")),' hook and then fetch the record whose resource is "post" and whose id is "123".')),(0,r.yg)("h3",{id:"resource"},"resource"),(0,r.yg)(h,{id:"resource",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"resource")," allows us to manage which resource is going to be refreshed. By default it will read the id information from the route."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=200px",live:!0,url:"http://localhost:3000",previewHeight:"200px"},'setInitialRoutes(["/"]);\n\nimport { Refine } from "@refinedev/core";\n\n// visible-block-start\nimport { RefreshButton } from "@refinedev/chakra-ui";\n\nconst MyRefreshComponent = () => {\n  return (\n    <RefreshButton colorScheme="black" resource="categories" recordItemId="2" />\n  );\n};\n// visible-block-end\n\nconst App = () => {\n  return (\n    <Refine\n      resources={[\n        {\n          name: "posts",\n          list: MyRefreshComponent,\n        },\n      ]}\n    />\n  );\n};\n\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n')),(0,r.yg)("p",null,"Clicking the button will trigger the ",(0,r.yg)("a",{parentName:"p",href:"/docs/data/hooks/use-invalidate"},(0,r.yg)("inlineCode",{parentName:"a"},"useInvalidate")),' hook and then fetches the record whose resource is "categories" and whose id is "2".'),(0,r.yg)("p",null,"If you have multiple resources with the same name, you can pass the ",(0,r.yg)("inlineCode",{parentName:"p"},"identifier")," instead of the ",(0,r.yg)("inlineCode",{parentName:"p"},"name")," of the resource. It will only be used as the main matching key for the resource, data provider methods will still work with the ",(0,r.yg)("inlineCode",{parentName:"p"},"name")," of the resource defined in the ",(0,r.yg)("inlineCode",{parentName:"p"},"<Refine/>")," component."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.yg)("a",{parentName:"p",href:"/docs/core/refine-component#identifier"},(0,r.yg)("inlineCode",{parentName:"a"},"identifier")," of the ",(0,r.yg)("inlineCode",{parentName:"a"},"<Refine/>")," component documentation ","\u2192")))),(0,r.yg)("h3",{id:"hidetext"},"hideText"),(0,r.yg)(h,{id:"hidetext",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"hideText")," is used to show and not show the text of the button. When ",(0,r.yg)("inlineCode",{parentName:"p"},"true"),", only the button icon is visible."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=200px",live:!0,url:"http://localhost:3000",previewHeight:"200px"},'setInitialRoutes(["/"]);\n\nimport { Refine } from "@refinedev/core";\n\n// visible-block-start\nimport { RefreshButton } from "@refinedev/chakra-ui";\n\nconst MyRefreshComponent = () => {\n  return <RefreshButton colorScheme="black" hideText recordItemId="123" />;\n};\n// visible-block-end\n\nconst App = () => {\n  return (\n    <Refine\n      resources={[\n        {\n          name: "posts",\n          list: MyRefreshComponent,\n        },\n      ]}\n    />\n  );\n};\n\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n'))),(0,r.yg)("h3",{id:"resourcenameorroutename-"},(0,r.yg)("del",{parentName:"h3"},"resourceNameOrRouteName")," ",(0,r.yg)(m,{deprecated:!0,mdxType:"PropTag"})),(0,r.yg)(h,{id:"resourcenameorroutename-",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"Use ",(0,r.yg)("inlineCode",{parentName:"p"},"resource")," prop instead.")),(0,r.yg)("h2",{id:"api-reference"},"API Reference"),(0,r.yg)("h3",{id:"properties-1"},"Properties"),(0,r.yg)(h,{id:"properties-1",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)(f,{module:"@refinedev/chakra-ui/RefreshButton",mdxType:"PropsTable"})))}b.isMDXComponent=!0}}]);