"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[29328],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>m});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(t),g=o,m=c["".concat(l,".").concat(g)]||c[g]||u[g]||i;return t?r.createElement(m,a(a({ref:n},d),{},{components:t})):r.createElement(m,a({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},84720:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>b,frontMatter:()=>s,metadata:()=>p,toc:()=>c});t(96540);var r=t(15680);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const s={title:"Refresh",swizzle:!0},l=void 0,p={unversionedId:"ui-integrations/ant-design/components/buttons/refresh-button/index",id:"ui-integrations/ant-design/components/buttons/refresh-button/index",title:"Refresh",description:"` uses Ant Design's  component to update the data shown on the page via the useInvalidate` hook.",source:"@site/docs/ui-integrations/ant-design/components/buttons/refresh-button/index.md",sourceDirName:"ui-integrations/ant-design/components/buttons/refresh-button",slug:"/ui-integrations/ant-design/components/buttons/refresh-button/",permalink:"/docs/ui-integrations/ant-design/components/buttons/refresh-button/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/ui-integrations/ant-design/components/buttons/refresh-button/index.md",tags:[],version:"current",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1714995928,formattedLastUpdatedAt:"May 6, 2024",frontMatter:{title:"Refresh",swizzle:!0},sidebar:"mainSidebar",previous:{title:"List",permalink:"/docs/ui-integrations/ant-design/components/buttons/list-button/"},next:{title:"Save",permalink:"/docs/ui-integrations/ant-design/components/buttons/save-button/"}},d={},c=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"recordItemId",id:"recorditemid",level:3},{value:"resource",id:"resource",level:3},{value:"hideText",id:"hidetext",level:3},{value:"<del>resourceNameOrRouteName</del> <PropTag deprecated />",id:"resourcenameorroutename-",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],u=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",n)},g=u("DocThumbsUpDownFeedbackWidget"),m=u("PropTag"),h=u("PropsTable"),f={toc:c},y="wrapper";function b(e){var{components:n}=e,t=a(e,["components"]);return(0,r.yg)(y,i(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){o(e,n,t[n])}))}return e}({},f,t),{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"<RefreshButton>")," uses Ant Design's ",(0,r.yg)("a",{parentName:"p",href:"https://ant.design/components/button/"},(0,r.yg)("inlineCode",{parentName:"a"},"<Button>"))," component to update the data shown on the page via the ",(0,r.yg)("a",{parentName:"p",href:"/docs/data/hooks/use-invalidate"},(0,r.yg)("inlineCode",{parentName:"a"},"useInvalidate"))," hook."),(0,r.yg)("admonition",{title:"Good to know",type:"simple"},(0,r.yg)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,r.yg)("a",{parentName:"p",href:"/docs/packages/list-of-packages"},(0,r.yg)("strong",{parentName:"a"},"Refine CLI")))),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)(g,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'// visible-block-start\nimport { useShow } from "@refinedev/core";\nimport {\n  // highlight-next-line\n  RefreshButton,\n  Show,\n} from "@refinedev/antd";\nimport { Typography } from "antd";\n\nconst { Title, Text } = Typography;\n\nconst PostShow: React.FC = () => {\n  const { queryResult } = useShow<IPost>();\n  const { data, isLoading } = queryResult;\n  const record = data?.data;\n\n  return (\n    <Show\n      isLoading={isLoading}\n      // highlight-next-line\n      headerButtons={<RefreshButton />}\n    >\n      <Title level={5}>Id</Title>\n      <Text>{record?.id}</Text>\n\n      <Title level={5}>Title</Title>\n      <Text>{record?.title}</Text>\n    </Show>\n  );\n};\n\ninterface IPost {\n  id: string;\n  title: string;\n}\n// visible-block-end\n\nrender(\n  <RefineAntdDemo\n    initialRoutes={["/posts/show/123"]}\n    resources={[\n      {\n        name: "posts",\n        show: PostShow,\n        list: () => {\n          return (\n            <RefineAntd.List>\n              <p>Your list page here</p>\n            </RefineAntd.List>\n          );\n        },\n      },\n    ]}\n  />,\n);\n'))),(0,r.yg)("h2",{id:"properties"},"Properties"),(0,r.yg)("h3",{id:"recorditemid"},"recordItemId"),(0,r.yg)(g,{id:"recorditemid",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"recordItemId")," allows us to manage which data is going to be refreshed. By default, the ",(0,r.yg)("inlineCode",{parentName:"p"},"recordItemId")," is inferred from the route params."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=120px",live:!0,disableScroll:!0,previewHeight:"120px"},'// visible-block-start\nimport { RefreshButton } from "@refinedev/antd";\n\nconst MyRefreshComponent = () => {\n  return (\n    <RefreshButton\n      resource="posts"\n      // highlight-next-line\n      recordItemId="1"\n    />\n  );\n};\n// visible-block-end\n\nrender(\n  <RefineAntdDemo\n    initialRoutes={["/"]}\n    resources={[\n      {\n        name: "posts",\n      },\n    ]}\n    DashboardPage={MyRefreshComponent}\n  />,\n);\n')),(0,r.yg)("p",null,"Clicking the button will trigger the ",(0,r.yg)("a",{parentName:"p",href:"/docs/data/hooks/use-invalidate"},(0,r.yg)("inlineCode",{parentName:"a"},"useInvalidate")),' hook and then fetch the record whose resource is "post" and whose id is "1".')),(0,r.yg)("h3",{id:"resource"},"resource"),(0,r.yg)(g,{id:"resource",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"resource")," allows us to manage which resource is going to be refreshed. By default, the ",(0,r.yg)("inlineCode",{parentName:"p"},"resource")," is inferred from the route params."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=120px",live:!0,disableScroll:!0,previewHeight:"120px"},'// visible-block-start\nimport { RefreshButton } from "@refinedev/antd";\n\nconst MyRefreshComponent = () => {\n  return (\n    <RefreshButton\n      // highlight-next-line\n      resource="categories"\n      // highlight-next-line\n      recordItemId="2"\n    />\n  );\n};\n// visible-block-end\n\nrender(\n  <RefineAntdDemo\n    initialRoutes={["/"]}\n    resources={[\n      {\n        name: "posts",\n      },\n      {\n        name: "categories",\n      },\n    ]}\n    DashboardPage={MyRefreshComponent}\n  />,\n);\n')),(0,r.yg)("p",null,"Clicking the button will trigger the ",(0,r.yg)("a",{parentName:"p",href:"/docs/data/hooks/use-invalidate"},(0,r.yg)("inlineCode",{parentName:"a"},"useInvalidate")),' hook and then fetches the record whose resource is "categories" and whose id is "2".'),(0,r.yg)("p",null,"If you have multiple resources with the same name, you can pass the ",(0,r.yg)("inlineCode",{parentName:"p"},"identifier")," instead of the ",(0,r.yg)("inlineCode",{parentName:"p"},"name")," of the resource. It will only be used as the main matching key for the resource, data provider methods will still work with the ",(0,r.yg)("inlineCode",{parentName:"p"},"name")," of the resource defined in the ",(0,r.yg)("inlineCode",{parentName:"p"},"<Refine/>")," component."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.yg)("a",{parentName:"p",href:"/docs/core/refine-component#identifier"},(0,r.yg)("inlineCode",{parentName:"a"},"identifier")," of the ",(0,r.yg)("inlineCode",{parentName:"a"},"<Refine/>")," component documentation ","\u2192")))),(0,r.yg)("h3",{id:"hidetext"},"hideText"),(0,r.yg)(g,{id:"hidetext",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"hideText")," is used to hide the text of the button. When its ",(0,r.yg)("inlineCode",{parentName:"p"},"true"),", only the button icon will be visible."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=120px",live:!0,disableScroll:!0,previewHeight:"120px"},'// visible-block-start\nimport { RefreshButton } from "@refinedev/antd";\n\nconst MyRefreshComponent = () => {\n  return (\n    <RefreshButton\n      // highlight-next-line\n      hideText\n    />\n  );\n};\n// visible-block-end\n\nrender(\n  <RefineAntdDemo\n    initialRoutes={["/"]}\n    resources={[\n      {\n        name: "posts",\n      },\n    ]}\n    DashboardPage={MyRefreshComponent}\n  />,\n);\n'))),(0,r.yg)("h3",{id:"resourcenameorroutename-"},(0,r.yg)("del",{parentName:"h3"},"resourceNameOrRouteName")," ",(0,r.yg)(m,{deprecated:!0,mdxType:"PropTag"})),(0,r.yg)(g,{id:"resourcenameorroutename-",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"Use ",(0,r.yg)("inlineCode",{parentName:"p"},"resource")," prop instead.")),(0,r.yg)("h2",{id:"api-reference"},"API Reference"),(0,r.yg)("h3",{id:"properties-1"},"Properties"),(0,r.yg)(g,{id:"properties-1",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)(h,{module:"@refinedev/antd/RefreshButton",mdxType:"PropsTable"}),(0,r.yg)("admonition",{title:"External Props",type:"simple"},(0,r.yg)("p",{parentName:"admonition"},"It also accepts all props of Ant Design ",(0,r.yg)("a",{parentName:"p",href:"https://ant.design/components/button/#API"},"Button"),"."))))}b.isMDXComponent=!0}}]);