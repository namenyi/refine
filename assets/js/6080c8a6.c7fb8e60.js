"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[23165],{15680:(e,n,r)=>{r.d(n,{xA:()=>c,yg:()=>g});var t=r(96540);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),l=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},c=function(e){var n=l(e.components);return t.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return r?t.createElement(g,i(i({ref:n},c),{},{components:r})):t.createElement(g,i({ref:n},c))}));function g(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5307:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>y,frontMatter:()=>p,metadata:()=>l,toc:()=>u});r(96540);var t=r(15680);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})),e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const p={id:"create",title:"Create",swizzle:!0},s=void 0,l={unversionedId:"api-reference/chakra-ui/components/basic-views/create",id:"version-3.xx.xx/api-reference/chakra-ui/components/basic-views/create",title:"Create",description:"`` provides us a layout to display the page. It does not contain any logic but adds extra functionalities like action buttons and giving titles to the page.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/chakra-ui/components/basic-views/create.md",sourceDirName:"api-reference/chakra-ui/components/basic-views",slug:"/api-reference/chakra-ui/components/basic-views/create",permalink:"/docs/3.xx.xx/api-reference/chakra-ui/components/basic-views/create",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/chakra-ui/components/basic-views/create.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1714995928,formattedLastUpdatedAt:"May 6, 2024",frontMatter:{id:"create",title:"Create",swizzle:!0},sidebar:"someSidebar",previous:{title:"Inferencer",permalink:"/docs/3.xx.xx/api-reference/chakra-ui/components/inferencer"},next:{title:"Edit",permalink:"/docs/3.xx.xx/api-reference/chakra-ui/components/basic-views/edit"}},c={},u=[{value:"Properties",id:"properties",level:2},{value:"<code>title</code>",id:"title",level:3},{value:"<code>saveButtonProps</code>",id:"savebuttonprops",level:3},{value:"<code>resource</code>",id:"resource",level:3},{value:"<code>goBack</code>",id:"goback",level:3},{value:"<code>isLoading</code>",id:"isloading",level:3},{value:"<code>breadcrumb</code>",id:"breadcrumb",level:3},{value:"<code>wrapperProps</code>",id:"wrapperprops",level:3},{value:"<code>headerProps</code>",id:"headerprops",level:3},{value:"<code>contentProps</code>",id:"contentprops",level:3},{value:"<code>headerButtons</code>",id:"headerbuttons",level:3},{value:"<code>headerButtonProps</code>",id:"headerbuttonprops",level:3},{value:"<code>footerButtons</code>",id:"footerbuttons",level:3},{value:"<code>footerButtonProps</code>",id:"footerbuttonprops",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Props",id:"props",level:3}],d=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,t.yg)("div",n)},m=d("DocThumbsUpDownFeedbackWidget"),g=d("PropsTable"),h={toc:u},f="wrapper";function y(e){var{components:n}=e,r=i(e,["components"]);return(0,t.yg)(f,a(function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){o(e,n,r[n])}))}return e}({},h,r),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live shared",live:!0,shared:!0},'const { default: simpleRest } = RefineSimpleRest;\nsetRefineProps({\n  dataProvider: simpleRest("https://api.fake-rest.refine.dev"),\n  Layout: RefineChakra.Layout,\n  Sider: () => null,\n});\n\nconst Wrapper = ({ children }) => {\n  return (\n    <RefineChakra.ChakraProvider theme={RefineChakra.refineTheme}>\n      {children}\n    </RefineChakra.ChakraProvider>\n  );\n};\n\nconst DummyListPage = () => (\n  <RefineChakra.VStack alignItems="flex-start">\n    <RefineChakra.Text>This page is empty.</RefineChakra.Text>\n    <CreateButton colorScheme="black" />\n  </RefineChakra.VStack>\n);\n\ninterface ICategory {\n  id: number;\n  title: string;\n}\n\ninterface IPost {\n  id: number;\n  title: string;\n  content: string;\n  status: "published" | "draft" | "rejected";\n  category: { id: number };\n}\n')),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"<Create>")," provides us a layout to display the page. It does not contain any logic but adds extra functionalities like action buttons and giving titles to the page."),(0,t.yg)("p",null,"We'll show what ",(0,t.yg)("inlineCode",{parentName:"p"},"<Create>")," does using properties with examples."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts/create previewHeight=420px hideCode",live:!0,url:"http://localhost:3000/posts/create",previewHeight:"420px",hideCode:!0},'setInitialRoutes(["/posts/create"]);\nimport { Refine } from "@pankod/refine-core";\nimport { CreateButton } from "@pankod/refine-chakra-ui";\nimport routerProvider from "@pankod/refine-react-router-v6";\n\n// visible-block-start\nimport {\n  Create,\n  FormControl,\n  FormErrorMessage,\n  FormLabel,\n  Input,\n  Select,\n} from "@pankod/refine-chakra-ui";\nimport { useSelect } from "@pankod/refine-core";\nimport { useForm } from "@pankod/refine-react-hook-form";\n\nconst PostCreate: React.FC = () => {\n  const {\n    refineCore: { formLoading },\n    saveButtonProps,\n    register,\n    formState: { errors },\n  } = useForm<IPost>();\n\n  const { options } = useSelect({\n    resource: "categories",\n  });\n\n  return (\n    <Create isLoading={formLoading} saveButtonProps={saveButtonProps}>\n      <FormControl mb="3" isInvalid={!!errors?.title}>\n        <FormLabel>Title</FormLabel>\n        <Input\n          id="title"\n          type="text"\n          {...register("title", { required: "Title is required" })}\n        />\n        <FormErrorMessage>{`${errors.title?.message}`}</FormErrorMessage>\n      </FormControl>\n      <FormControl mb="3" isInvalid={!!errors?.status}>\n        <FormLabel>Status</FormLabel>\n        <Select\n          id="content"\n          placeholder="Select Post Status"\n          {...register("status", {\n            required: "Status is required",\n          })}\n        >\n          <option>published</option>\n          <option>draft</option>\n          <option>rejected</option>\n        </Select>\n        <FormErrorMessage>{`${errors.status?.message}`}</FormErrorMessage>\n      </FormControl>\n      <FormControl mb="3" isInvalid={!!errors?.categoryId}>\n        <FormLabel>Category</FormLabel>\n        <Select\n          id="categoryId"\n          placeholder="Select Category"\n          {...register("categoryId", {\n            required: "Category is required",\n          })}\n        >\n          {options?.map((option) => (\n            <option value={option.value} key={option.value}>\n              {option.label}\n            </option>\n          ))}\n        </Select>\n        <FormErrorMessage>{`${errors.categoryId?.message}`}</FormErrorMessage>\n      </FormControl>\n    </Create>\n  );\n};\n// visible-block-end\n\nconst App = () => {\n  return (\n    <Refine\n      routerProvider={routerProvider}\n      resources={[\n        {\n          name: "posts",\n          create: PostCreate,\n          list: DummyListPage,\n        },\n      ]}\n    />\n  );\n};\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n')),(0,t.yg)("admonition",{title:"Swizzle",type:"info-tip"},(0,t.yg)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,t.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/packages/documentation/cli"},(0,t.yg)("strong",{parentName:"a"},"refine CLI")))),(0,t.yg)("h2",{id:"properties"},"Properties"),(0,t.yg)("h3",{id:"title"},(0,t.yg)("inlineCode",{parentName:"h3"},"title")),(0,t.yg)(m,{id:"title",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"It allows adding title inside the ",(0,t.yg)("inlineCode",{parentName:"p"},"<Create>"),' component. if you don\'t pass title props it uses "Create" prefix and singular resource name by default. For example, for the ',(0,t.yg)("inlineCode",{parentName:"p"},"/posts/create"),' resource, it will be "Create post".'),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts/create previewHeight=280px",live:!0,url:"http://localhost:3000/posts/create",previewHeight:"280px"},'setInitialRoutes(["/posts/create"]);\nimport { Refine } from "@pankod/refine-core";\nimport { CreateButton } from "@pankod/refine-chakra-ui";\nimport routerProvider from "@pankod/refine-react-router-v6";\n\n// visible-block-start\nimport { Create, Heading } from "@pankod/refine-chakra-ui";\n\nconst PostCreate: React.FC = () => {\n  return (\n    /* highlight-next-line */\n    <Create title={<Heading size="lg">Custom Title</Heading>}>\n      <p>Rest of your page here</p>\n    </Create>\n  );\n};\n// visible-block-end\n\nconst App = () => {\n  return (\n    <Refine\n      routerProvider={routerProvider}\n      resources={[\n        {\n          name: "posts",\n          create: PostCreate,\n          list: DummyListPage,\n        },\n      ]}\n    />\n  );\n};\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n'))),(0,t.yg)("h3",{id:"savebuttonprops"},(0,t.yg)("inlineCode",{parentName:"h3"},"saveButtonProps")),(0,t.yg)(m,{id:"savebuttonprops",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"<Create>")," component has a default button that submits the form. If you want to customize this button you can use the ",(0,t.yg)("inlineCode",{parentName:"p"},"saveButtonProps")," property like the code below."),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/chakra-ui/components/buttons/save-button"},"Refer to the ",(0,t.yg)("inlineCode",{parentName:"a"},"<SaveButton>")," documentation for detailed usage. ","\u2192")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts/create previewHeight=280px",live:!0,url:"http://localhost:3000/posts/create",previewHeight:"280px"},'setInitialRoutes(["/posts/create"]);\nimport { Refine } from "@pankod/refine-core";\nimport { CreateButton } from "@pankod/refine-chakra-ui";\nimport routerProvider from "@pankod/refine-react-router-v6";\n\n// visible-block-start\nimport { Create } from "@pankod/refine-chakra-ui";\n\nconst PostCreate: React.FC = () => {\n  return (\n    /* highlight-next-line */\n    <Create saveButtonProps={{ colorScheme: "red" }}>\n      <p>Rest of your page here</p>\n    </Create>\n  );\n};\n// visible-block-end\n\nconst App = () => {\n  return (\n    <Refine\n      routerProvider={routerProvider}\n      resources={[\n        {\n          name: "posts",\n          create: PostCreate,\n          list: DummyListPage,\n        },\n      ]}\n    />\n  );\n};\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n'))),(0,t.yg)("h3",{id:"resource"},(0,t.yg)("inlineCode",{parentName:"h3"},"resource")),(0,t.yg)(m,{id:"resource",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"<Create>")," component reads the ",(0,t.yg)("inlineCode",{parentName:"p"},"resource")," information from the route by default. This default behavior will not work on custom pages. If you want to use the ",(0,t.yg)("inlineCode",{parentName:"p"},"<Create>")," component in a custom page, you can use the ",(0,t.yg)("inlineCode",{parentName:"p"},"resource")," prop."),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/advanced-tutorials/custom-pages"},"Refer to the custom pages documentation for detailed usage. ","\u2192")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/custom previewHeight=280px",live:!0,url:"http://localhost:3000/custom",previewHeight:"280px"},'setInitialRoutes(["/custom"]);\n\n// visible-block-start\nimport { Refine } from "@pankod/refine-core";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport { Layout, Create } from "@pankod/refine-chakra-ui";\n\nconst CustomPage: React.FC = () => {\n  return (\n    /* highlight-next-line */\n    <Create resource="categories">\n      <p>Rest of your page here</p>\n    </Create>\n  );\n};\n\nconst App: React.FC = () => {\n  return (\n    <Refine\n      routerProvider={{\n        ...routerProvider,\n        // highlight-start\n        routes: [\n          {\n            element: <CustomPage />,\n            path: "/custom",\n          },\n        ],\n        // highlight-end\n      }}\n      Layout={Layout}\n      dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n      resources={[{ name: "posts" }]}\n    />\n  );\n};\n// visible-block-end\n\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n'))),(0,t.yg)("h3",{id:"goback"},(0,t.yg)("inlineCode",{parentName:"h3"},"goBack")),(0,t.yg)(m,{id:"goback",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"To customize the back button or to disable it, you can use the ",(0,t.yg)("inlineCode",{parentName:"p"},"goBack")," property. You can pass ",(0,t.yg)("inlineCode",{parentName:"p"},"false")," or ",(0,t.yg)("inlineCode",{parentName:"p"},"null")," to hide the back button."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts/create previewHeight=280px",live:!0,url:"http://localhost:3000/posts/create",previewHeight:"280px"},'setInitialRoutes(["/posts/create"]);\nimport { Refine } from "@pankod/refine-core";\nimport { CreateButton } from "@pankod/refine-chakra-ui";\nimport routerProvider from "@pankod/refine-react-router-v6";\n\nconst IconMoodSmile = (\n  <svg\n    xmlns="http://www.w3.org/2000/svg"\n    className="icon icon-tabler icon-tabler-mood-smile"\n    width={24}\n    height={24}\n    viewBox="0 0 24 24"\n    strokeWidth="2"\n    stroke="currentColor"\n    fill="none"\n    strokeLinecap="round"\n    strokeLinejoin="round"\n  >\n    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n    <circle cx={12} cy={12} r={9}></circle>\n    <line x1={9} y1={10} x2="9.01" y2={10}></line>\n    <line x1={15} y1={10} x2="15.01" y2={10}></line>\n    <path d="M9.5 15a3.5 3.5 0 0 0 5 0"></path>\n  </svg>\n);\n\n// visible-block-start\nimport { Create } from "@pankod/refine-chakra-ui";\n/* highlight-next-line */\nimport { IconMoodSmile } from "@tabler/icons";\n\nconst PostCreate: React.FC = () => {\n  return (\n    /* highlight-next-line */\n    <Create goBack={IconMoodSmile}>\n      <p>Rest of your page here 2</p>\n    </Create>\n  );\n};\n// visible-block-end\n\nconst App = () => {\n  return (\n    <Refine\n      routerProvider={routerProvider}\n      resources={[\n        {\n          name: "posts",\n          create: PostCreate,\n          list: DummyListPage,\n        },\n      ]}\n    />\n  );\n};\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n'))),(0,t.yg)("h3",{id:"isloading"},(0,t.yg)("inlineCode",{parentName:"h3"},"isLoading")),(0,t.yg)(m,{id:"isloading",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"To toggle the loading state of the ",(0,t.yg)("inlineCode",{parentName:"p"},"<Create/>")," component, you can use the ",(0,t.yg)("inlineCode",{parentName:"p"},"isLoading")," property."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts/create previewHeight=280px",live:!0,url:"http://localhost:3000/posts/create",previewHeight:"280px"},'setInitialRoutes(["/posts/create"]);\nimport { Refine } from "@pankod/refine-core";\nimport { CreateButton } from "@pankod/refine-chakra-ui";\nimport routerProvider from "@pankod/refine-react-router-v6";\n\n// visible-block-start\nimport { Create } from "@pankod/refine-chakra-ui";\n\nconst PostCreate: React.FC = () => {\n  return (\n    /* highlight-next-line */\n    <Create isLoading={true}>\n      <p>Rest of your page here</p>\n    </Create>\n  );\n};\n// visible-block-end\n\nconst App = () => {\n  return (\n    <Refine\n      routerProvider={routerProvider}\n      resources={[\n        {\n          name: "posts",\n          create: PostCreate,\n          list: DummyListPage,\n        },\n      ]}\n    />\n  );\n};\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n'))),(0,t.yg)("h3",{id:"breadcrumb"},(0,t.yg)("inlineCode",{parentName:"h3"},"breadcrumb")),(0,t.yg)(m,{id:"breadcrumb",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"To customize or disable the breadcrumb, you can use the ",(0,t.yg)("inlineCode",{parentName:"p"},"breadcrumb")," property. By default it uses the ",(0,t.yg)("inlineCode",{parentName:"p"},"Breadcrumb")," component from ",(0,t.yg)("inlineCode",{parentName:"p"},"@pankod/refine-chakra-ui")," package."),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/chakra-ui/components/breadcrumb"},"Refer to the ",(0,t.yg)("inlineCode",{parentName:"a"},"Breadcrumb")," documentation for detailed usage. ","\u2192")),(0,t.yg)("admonition",{type:"tip"},(0,t.yg)("p",{parentName:"admonition"},"This feature can be managed globally via the ",(0,t.yg)("inlineCode",{parentName:"p"},"<Refine>")," component's ",(0,t.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/refine-config/#breadcrumb"},"options"))),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts/create previewHeight=280px",live:!0,url:"http://localhost:3000/posts/create",previewHeight:"280px"},'setInitialRoutes(["/posts/create"]);\nimport { Refine } from "@pankod/refine-core";\nimport { CreateButton } from "@pankod/refine-chakra-ui";\nimport routerProvider from "@pankod/refine-react-router-v6";\n\n// visible-block-start\nimport { Create, Breadcrumb, Box } from "@pankod/refine-chakra-ui";\n\nconst PostCreate: React.FC = () => {\n  return (\n    <Create\n      // highlight-start\n      breadcrumb={\n        <Box borderColor="blue" borderStyle="dashed" borderWidth="2px">\n          <Breadcrumb />\n        </Box>\n      }\n      // highlight-end\n    >\n      <p>Rest of your page here</p>\n    </Create>\n  );\n};\n// visible-block-end\n\nconst App = () => {\n  return (\n    <Refine\n      routerProvider={routerProvider}\n      resources={[\n        {\n          name: "posts",\n          create: PostCreate,\n          list: DummyListPage,\n        },\n      ]}\n    />\n  );\n};\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n'))),(0,t.yg)("h3",{id:"wrapperprops"},(0,t.yg)("inlineCode",{parentName:"h3"},"wrapperProps")),(0,t.yg)(m,{id:"wrapperprops",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"If you want to customize the wrapper of the ",(0,t.yg)("inlineCode",{parentName:"p"},"<Create/>")," component, you can use the ",(0,t.yg)("inlineCode",{parentName:"p"},"wrapperProps")," property. For ",(0,t.yg)("inlineCode",{parentName:"p"},"@pankod/refine-chakra-ui")," wrapper element is ",(0,t.yg)("inlineCode",{parentName:"p"},"<Card>"),"s and ",(0,t.yg)("inlineCode",{parentName:"p"},"wrapperProps")," can get every attribute that ",(0,t.yg)("inlineCode",{parentName:"p"},"<Box>")," can get."),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"https://chakra-ui.com/docs/components/box/usage"},"Refer to the ",(0,t.yg)("inlineCode",{parentName:"a"},"Box")," documentation from Chakra UI for detailed usage. ","\u2192")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts/create previewHeight=280px",live:!0,url:"http://localhost:3000/posts/create",previewHeight:"280px"},'setInitialRoutes(["/posts/create"]);\nimport { Refine } from "@pankod/refine-core";\nimport { CreateButton } from "@pankod/refine-chakra-ui";\nimport routerProvider from "@pankod/refine-react-router-v6";\n\n// visible-block-start\nimport { Create } from "@pankod/refine-chakra-ui";\n\nconst PostCreate: React.FC = () => {\n  return (\n    <Create\n      // highlight-start\n      wrapperProps={{\n        borderColor: "blue",\n        borderStyle: "dashed",\n        borderWidth: "2px",\n      }}\n      // highlight-end\n    >\n      <p>Rest of your page here</p>\n    </Create>\n  );\n};\n// visible-block-end\n\nconst App = () => {\n  return (\n    <Refine\n      routerProvider={routerProvider}\n      resources={[\n        {\n          name: "posts",\n          create: PostCreate,\n          list: DummyListPage,\n        },\n      ]}\n    />\n  );\n};\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n'))),(0,t.yg)("h3",{id:"headerprops"},(0,t.yg)("inlineCode",{parentName:"h3"},"headerProps")),(0,t.yg)(m,{id:"headerprops",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"If you want to customize the header of the ",(0,t.yg)("inlineCode",{parentName:"p"},"<Create/>")," component, you can use the ",(0,t.yg)("inlineCode",{parentName:"p"},"headerProps")," property."),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"https://chakra-ui.com/docs/components/box/usage"},"Refer to the ",(0,t.yg)("inlineCode",{parentName:"a"},"Box")," documentation from Chakra UI for detailed usage. ","\u2192")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts/create previewHeight=280px",live:!0,url:"http://localhost:3000/posts/create",previewHeight:"280px"},'setInitialRoutes(["/posts/create"]);\nimport { Refine } from "@pankod/refine-core";\nimport { CreateButton } from "@pankod/refine-chakra-ui";\nimport routerProvider from "@pankod/refine-react-router-v6";\n\n// visible-block-start\nimport { Create } from "@pankod/refine-chakra-ui";\n\nconst PostCreate: React.FC = () => {\n  return (\n    <Create\n      // highlight-start\n      headerProps={{\n        borderColor: "blue",\n        borderStyle: "dashed",\n        borderWidth: "2px",\n      }}\n      // highlight-end\n    >\n      <p>Rest of your page here</p>\n    </Create>\n  );\n};\n// visible-block-end\n\nconst App = () => {\n  return (\n    <Refine\n      routerProvider={routerProvider}\n      resources={[\n        {\n          name: "posts",\n          create: PostCreate,\n          list: DummyListPage,\n        },\n      ]}\n    />\n  );\n};\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n'))),(0,t.yg)("h3",{id:"contentprops"},(0,t.yg)("inlineCode",{parentName:"h3"},"contentProps")),(0,t.yg)(m,{id:"contentprops",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"If you want to customize the content of the ",(0,t.yg)("inlineCode",{parentName:"p"},"<Create/>")," component, you can use the ",(0,t.yg)("inlineCode",{parentName:"p"},"contentProps")," property."),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"https://chakra-ui.com/docs/components/box/usage"},"Refer to the ",(0,t.yg)("inlineCode",{parentName:"a"},"Box")," documentation from Chakra UI for detailed usage. ","\u2192")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts/create previewHeight=320px",live:!0,url:"http://localhost:3000/posts/create",previewHeight:"320px"},'setInitialRoutes(["/posts/create"]);\nimport { Refine } from "@pankod/refine-core";\nimport { CreateButton } from "@pankod/refine-chakra-ui";\nimport routerProvider from "@pankod/refine-react-router-v6";\n\n// visible-block-start\nimport { Create } from "@pankod/refine-chakra-ui";\n\nconst PostCreate: React.FC = () => {\n  return (\n    <Create\n      // highlight-start\n      contentProps={{\n        borderColor: "blue",\n        borderStyle: "dashed",\n        borderWidth: "2px",\n      }}\n      // highlight-end\n    >\n      <p>Rest of your page here</p>\n    </Create>\n  );\n};\n// visible-block-end\n\nconst App = () => {\n  return (\n    <Refine\n      routerProvider={routerProvider}\n      resources={[\n        {\n          name: "posts",\n          create: PostCreate,\n          list: DummyListPage,\n        },\n      ]}\n    />\n  );\n};\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n'))),(0,t.yg)("h3",{id:"headerbuttons"},(0,t.yg)("inlineCode",{parentName:"h3"},"headerButtons")),(0,t.yg)(m,{id:"headerbuttons",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"You can customize the buttons at the header by using the ",(0,t.yg)("inlineCode",{parentName:"p"},"headerButtons")," property. It accepts ",(0,t.yg)("inlineCode",{parentName:"p"},"React.ReactNode")," or a render function ",(0,t.yg)("inlineCode",{parentName:"p"},"({ defaultButtons }) => React.ReactNode")," which you can use to keep the existing buttons and add your own."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts/create previewHeight=280px",live:!0,url:"http://localhost:3000/posts/create",previewHeight:"280px"},'setInitialRoutes(["/posts/create"]);\nimport { Refine } from "@pankod/refine-core";\nimport { CreateButton } from "@pankod/refine-chakra-ui";\nimport routerProvider from "@pankod/refine-react-router-v6";\n\n// visible-block-start\nimport { Create, Button, Box } from "@pankod/refine-chakra-ui";\n\nconst PostCreate: React.FC = () => {\n  return (\n    <Create\n      // highlight-start\n      headerButtons={({ defaultButtons }) => (\n        <Box borderColor="blue" borderStyle="dashed" borderWidth="2px" p="2">\n          {defaultButtons}\n          <Button colorScheme="red" variant="solid">\n            Custom Button\n          </Button>\n        </Box>\n      )}\n      // highlight-end\n    >\n      <p>Rest of your page here</p>\n    </Create>\n  );\n};\n// visible-block-end\n\nconst App = () => {\n  return (\n    <Refine\n      routerProvider={routerProvider}\n      resources={[\n        {\n          name: "posts",\n          create: PostCreate,\n          list: DummyListPage,\n        },\n      ]}\n    />\n  );\n};\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n'))),(0,t.yg)("h3",{id:"headerbuttonprops"},(0,t.yg)("inlineCode",{parentName:"h3"},"headerButtonProps")),(0,t.yg)(m,{id:"headerbuttonprops",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"You can customize the wrapper element of the buttons at the header by using the ",(0,t.yg)("inlineCode",{parentName:"p"},"headerButtonProps")," property."),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"https://chakra-ui.com/docs/components/box/usage"},"Refer to the ",(0,t.yg)("inlineCode",{parentName:"a"},"Box")," documentation from Chakra UI for detailed usage. ","\u2192")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts/create previewHeight=280px",live:!0,url:"http://localhost:3000/posts/create",previewHeight:"280px"},'setInitialRoutes(["/posts/create"]);\nimport { Refine } from "@pankod/refine-core";\nimport { CreateButton } from "@pankod/refine-chakra-ui";\nimport routerProvider from "@pankod/refine-react-router-v6";\n\n// visible-block-start\nimport { Create, Button } from "@pankod/refine-chakra-ui";\n\nconst PostCreate: React.FC = () => {\n  return (\n    <Create\n      // highlight-start\n      headerButtonProps={{\n        borderColor: "blue",\n        borderStyle: "dashed",\n        borderWidth: "2px",\n      }}\n      // highlight-end\n      headerButtons={<Button type="primary">Custom Button</Button>}\n    >\n      <p>Rest of your page here</p>\n    </Create>\n  );\n};\n// visible-block-end\n\nconst App = () => {\n  return (\n    <Refine\n      routerProvider={routerProvider}\n      resources={[\n        {\n          name: "posts",\n          create: PostCreate,\n          list: DummyListPage,\n        },\n      ]}\n    />\n  );\n};\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n'))),(0,t.yg)("h3",{id:"footerbuttons"},(0,t.yg)("inlineCode",{parentName:"h3"},"footerButtons")),(0,t.yg)(m,{id:"footerbuttons",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"You can customize the buttons at the footer by using the ",(0,t.yg)("inlineCode",{parentName:"p"},"footerButtons")," property. It accepts ",(0,t.yg)("inlineCode",{parentName:"p"},"React.ReactNode")," or a render function ",(0,t.yg)("inlineCode",{parentName:"p"},"({ defaultButtons }) => React.ReactNode")," which you can use to keep the existing buttons and add your own."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts/create previewHeight=280px",live:!0,url:"http://localhost:3000/posts/create",previewHeight:"280px"},'setInitialRoutes(["/posts/create"]);\nimport { Refine } from "@pankod/refine-core";\nimport { CreateButton } from "@pankod/refine-chakra-ui";\nimport routerProvider from "@pankod/refine-react-router-v6";\n\n// visible-block-start\nimport { Create, Button, HStack } from "@pankod/refine-chakra-ui";\n\nconst PostCreate: React.FC = () => {\n  return (\n    <Create\n      // highlight-start\n      footerButtons={({ defaultButtons }) => (\n        <HStack borderColor="blue" borderStyle="dashed" borderWidth="2px" p="2">\n          {defaultButtons}\n          <Button colorScheme="red" variant="solid">\n            Custom Button\n          </Button>\n        </HStack>\n      )}\n      // highlight-end\n    >\n      <p>Rest of your page here</p>\n    </Create>\n  );\n};\n// visible-block-end\n\nconst App = () => {\n  return (\n    <Refine\n      routerProvider={routerProvider}\n      resources={[\n        {\n          name: "posts",\n          create: PostCreate,\n          list: DummyListPage,\n        },\n      ]}\n    />\n  );\n};\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n'))),(0,t.yg)("h3",{id:"footerbuttonprops"},(0,t.yg)("inlineCode",{parentName:"h3"},"footerButtonProps")),(0,t.yg)(m,{id:"footerbuttonprops",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"You can customize the wrapper element of the buttons at the footer by using the ",(0,t.yg)("inlineCode",{parentName:"p"},"footerButtonProps")," property."),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"https://chakra-ui.com/docs/components/box/usage"},"Refer to the ",(0,t.yg)("inlineCode",{parentName:"a"},"Box")," documentation from Chakra UI for detailed usage. ","\u2192")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts/create previewHeight=280px",live:!0,url:"http://localhost:3000/posts/create",previewHeight:"280px"},'setInitialRoutes(["/posts/create"]);\nimport { Refine } from "@pankod/refine-core";\nimport { CreateButton } from "@pankod/refine-chakra-ui";\nimport routerProvider from "@pankod/refine-react-router-v6";\n\n// visible-block-start\nimport { Create } from "@pankod/refine-chakra-ui";\n\nconst PostCreate: React.FC = () => {\n  return (\n    <Create\n      // highlight-start\n      footerButtonProps={{\n        float: "right",\n        borderColor: "blue",\n        borderStyle: "dashed",\n        borderWidth: "2px",\n        p: "2",\n      }}\n      // highlight-end\n    >\n      <p>Rest of your page here</p>\n    </Create>\n  );\n};\n// visible-block-end\n\nconst App = () => {\n  return (\n    <Refine\n      routerProvider={routerProvider}\n      resources={[\n        {\n          name: "posts",\n          create: PostCreate,\n          list: DummyListPage,\n        },\n      ]}\n    />\n  );\n};\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n'))),(0,t.yg)("h2",{id:"api-reference"},"API Reference"),(0,t.yg)("h3",{id:"props"},"Props"),(0,t.yg)(m,{id:"props",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)(g,{module:"@pankod/refine-chakra-ui/Create","goBack-default":"`<IconArrowLeft />`","title-default":"`<Title order={3}>Create {resource.name}</Title>`",mdxType:"PropsTable"})))}y.isMDXComponent=!0}}]);