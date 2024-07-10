"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[10449],{58860:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>y});var r=n(37953);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},g=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),u=p(n),c=a,y=u["".concat(l,".").concat(c)]||u[c]||d[c]||i;return n?r.createElement(y,o(o({ref:t},g),{},{components:n})):r.createElement(y,o({ref:t},g))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},90786:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>u});n(37953);var r=n(58860);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={title:"Nest.js Query",source:"https://github.com/refinedev/refine/tree/master/packages/nestjs-query"},l=void 0,p={unversionedId:"data/packages/nestjs-query/index",id:"data/packages/nestjs-query/index",title:"Nest.js Query",description:"Refine provides a data provider for APIs powered with Nest.js Query, a module for Nest.js that provides easier ways to build CRUD graphql APIs.",source:"@site/docs/data/packages/nestjs-query/index.md",sourceDirName:"data/packages/nestjs-query",slug:"/data/packages/nestjs-query/",permalink:"/docs/data/packages/nestjs-query/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/data/packages/nestjs-query/index.md",tags:[],version:"current",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1720617044,formattedLastUpdatedAt:"Jul 10, 2024",frontMatter:{title:"Nest.js Query",source:"https://github.com/refinedev/refine/tree/master/packages/nestjs-query"},sidebar:"mainSidebar",previous:{title:"Supabase",permalink:"/docs/data/packages/supabase/"},next:{title:"NestJS CRUD",permalink:"/docs/data/packages/nestjsx-crud/"}},g={},u=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Developer Experience",id:"developer-experience",level:3},{value:"Usage with <code>graphql-tag</code>",id:"usage-with-graphql-tag",level:3},{value:"Utility Types",id:"utility-types",level:3},{value:"GetFields",id:"getfields",level:4},{value:"GetFieldsFromList",id:"getfieldsfromlist",level:4},{value:"Realtime",id:"realtime",level:3},{value:"Backend Configuration",id:"backend-configuration",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Example",id:"example",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",t)},c=d("DocThumbsUpDownFeedbackWidget"),y=d("CodeSandboxExample"),m={toc:u},h="wrapper";function f(e){var{components:t}=e,n=o(e,["components"]);return(0,r.yg)(h,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Refine provides a data provider for APIs powered with ",(0,r.yg)("a",{parentName:"p",href:"https://doug-martin.github.io/nestjs-query/"},"Nest.js Query"),", a module for Nest.js that provides easier ways to build CRUD graphql APIs."),(0,r.yg)("admonition",{title:"Good to know",type:"simple"},(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},"This library uses ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/jasonkuhrt/graphql-request"},(0,r.yg)("inlineCode",{parentName:"a"},"graphql-request@5"))," to handle the requests."),(0,r.yg)("li",{parentName:"ul"},"This library uses ",(0,r.yg)("a",{parentName:"li",href:"https://the-guild.dev/graphql/ws"},(0,r.yg)("inlineCode",{parentName:"a"},"graphql-ws"))," to handle the subscriptions."),(0,r.yg)("li",{parentName:"ul"},"You can also use ",(0,r.yg)("a",{parentName:"li",href:"https://www.npmjs.com/package/graphql-tag"},(0,r.yg)("inlineCode",{parentName:"a"},"graphql-tag"))," to write your queries and mutations."),(0,r.yg)("li",{parentName:"ul"},"To learn more about data fetching in Refine, check out the ",(0,r.yg)("a",{parentName:"li",href:"/docs/guides-concepts/data-fetching"},"Data Fetching")," guide."),(0,r.yg)("li",{parentName:"ul"},"To learn more about realtime features of Refine, check out the ",(0,r.yg)("a",{parentName:"li",href:"/docs/guides-concepts/realtime"},"Realtime")," guide."))),(0,r.yg)("h2",{id:"installation"},"Installation"),(0,r.yg)(c,{id:"installation",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"npm i @refinedev/nestjs-query graphql-tag\n")),(0,r.yg)("p",null,"If you're going to use ",(0,r.yg)("strong",{parentName:"p"},"LiveProvider")," you'll also need to install the ",(0,r.yg)("inlineCode",{parentName:"p"},"graphql-ws")," package to handle graphql subscriptions."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"npm i graphql-ws\n"))),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)(c,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"We'll create a GraphQL Client with our API url and pass it to the ",(0,r.yg)("inlineCode",{parentName:"p"},"dataProvider")," function to create a data provider."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="app.tsx"',title:'"app.tsx"'},'import Refine from "@refinedev/core";\nimport dataProvider, { GraphQLClient } from "@refinedev/nestjs-query";\n\n// highlight-next-line\nconst client = new GraphQLClient("https://api.nestjs-query.refine.dev/graphql");\n\nconst App = () => (\n  <Refine\n    // highlight-next-line\n    dataProvider={dataProvider(client)}\n  >\n    {/* ... */}\n  </Refine>\n);\n'))),(0,r.yg)("h3",{id:"developer-experience"},"Developer Experience"),(0,r.yg)(c,{id:"developer-experience",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"We suggest using ",(0,r.yg)("inlineCode",{parentName:"p"},"GraphQL Code Generator")," to generate types for your queries and mutations. You can check out the ",(0,r.yg)("a",{parentName:"p",href:"https://the-guild.dev/graphql/codegen/docs/getting-started"},"GraphQL Code Generator Documentation")," to learn more about it."),(0,r.yg)("p",null,"It simplifies the process of writing queries and mutations and provides a better developer experience with auto-completions."),(0,r.yg)("p",null,"Make sure you install GraphQL Language Service for your code editor to get the best experience."),(0,r.yg)("p",null,"VSCode: ",(0,r.yg)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql"},"https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"npm i -D @graphql-codegen/cli@5 @graphql-codegen/typescript@4 @graphql-codegen/import-types-preset@3\n")),(0,r.yg)("p",null,"Add a ",(0,r.yg)("inlineCode",{parentName:"p"},"graphql.config.ts")," file to the root of your project."),(0,r.yg)("details",null,(0,r.yg)("summary",null,"Show Config File"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts",metastring:'title="graphql.config.ts"',title:'"graphql.config.ts"'},'import type { IGraphQLConfig } from "graphql-config";\n\nconst config: IGraphQLConfig = {\n  schema: "https://api.nestjs-query.refine.dev/graphql",\n  extensions: {\n    codegen: {\n      // Optional, you can use this to format your generated files.\n      hooks: {\n        afterOneFileWrite: ["eslint --fix", "prettier --write"],\n      },\n      generates: {\n        "src/graphql/schema.types.ts": {\n          plugins: ["typescript"],\n          config: {\n            skipTypename: true,\n            enumsAsTypes: true,\n          },\n        },\n        "src/graphql/types.ts": {\n          preset: "import-types",\n          documents: ["src/**/*.{ts,tsx}"],\n          plugins: ["typescript-operations"],\n          config: {\n            skipTypename: true,\n            enumsAsTypes: true,\n            preResolveTypes: false,\n            useTypeImports: true,\n          },\n          presetConfig: {\n            typesPath: "./schema.types",\n          },\n        },\n      },\n    },\n  },\n};\n\nexport default config;\n'))),(0,r.yg)("p",null,"Add the following script to your ",(0,r.yg)("inlineCode",{parentName:"p"},"package.json")," file."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n  "scripts": {\n    "codegen": "graphql-codegen --config ./graphql.config.ts"\n  }\n}\n')),(0,r.yg)("p",null,"Now you can run the following command to generate your types."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"npm run codegen\n")),(0,r.yg)("p",null,"It will generate the following files:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"src/graphql/schema.types.ts"),": This file contains the types for your schema."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"src/graphql/types.ts"),": This file contains the types for your queries and mutations."))),(0,r.yg)("h3",{id:"usage-with-graphql-tag"},"Usage with ",(0,r.yg)("inlineCode",{parentName:"h3"},"graphql-tag")),(0,r.yg)(c,{id:"usage-with-graphql-tag",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"You can use ",(0,r.yg)("a",{parentName:"p",href:"https://www.npmjs.com/package/graphql-tag"},(0,r.yg)("inlineCode",{parentName:"a"},"graphql-tag"))," to write your queries and mutations."),(0,r.yg)("p",null,"Refine hooks' ",(0,r.yg)("inlineCode",{parentName:"p"},"meta")," object has optional ",(0,r.yg)("inlineCode",{parentName:"p"},"gqlQuery")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"gqlMutation")," properties, you can use them to write your queries and mutations."),(0,r.yg)("p",null,"As a best-practice, we suggest writing your queries/mutations in a separate file, next to the component that uses it."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/posts/queries.ts"',title:'"src/pages/posts/queries.ts"'},'import gql from "graphql-tag";\n\nexport const POSTS_LIST_QUERY = gql`\n  query PostsList(\n    $paging: OffsetPaging!\n    $filter: BlogPostFilter\n    $sorting: [BlogPostSort!]!\n  ) {\n    blogPosts(paging: $paging, filter: $filter, sorting: $sorting) {\n      nodes {\n        id\n        title\n        category {\n          title\n        }\n        content\n        createdAt\n      }\n      totalCount\n    }\n  }\n`;\n\nexport const POST_EDIT_MUTATION = gql`\n  mutation PostEdit($input: UpdateOneBlogPostInput!) {\n    updateOneBlogPost(input: $input) {\n      id\n      title\n      status\n      category {\n        id\n        title\n      }\n      categoryId\n      content\n    }\n  }\n`;\n')),(0,r.yg)("p",null,"Once you write your query, you can generate types for it with ",(0,r.yg)("inlineCode",{parentName:"p"},"GraphQL Code Generator"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"npm run codegen\n")),(0,r.yg)("admonition",{title:"Good to know",type:"simple"},(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("inlineCode",{parentName:"p"},"@refinedev/nestjs-query")," also exports 2 utility types:"),(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},"GetFields: Get fields from your non-list queries and mutations."),(0,r.yg)("li",{parentName:"ul"},"GetFieldsFromList: Get fields from your offset-paginated list queries.")),(0,r.yg)("p",{parentName:"admonition"},"You can use these types to extract the type of selected fields of your queries/mutations."),(0,r.yg)("p",{parentName:"admonition"},"See the ",(0,r.yg)("a",{parentName:"p",href:"#utility-types"},"Utility Types")," section for more information.")),(0,r.yg)("p",null,"And then you can use it with hooks:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useList, useTable, useForm } from "@refinedev/core";\nimport { GetFields, GetFieldsFromList } from "@refinedev/nestjs-query";\n\nimport { PostsListQuery, PostEditMutation } from "src/graphql/types";\nimport { POSTS_LIST_QUERY, POST_EDIT_MUTATION } from "./queries";\n\nconst { data, isLoading } = useList<GetFieldsFromList<PostsListQuery>>({\n  meta: { gqlQuery: POSTS_LIST_QUERY },\n});\n\nconst { tableProps } = useTable<GetFieldsFromList<PostsListQuery>>({\n  meta: { gqlQuery: POSTS_LIST_QUERY },\n});\n\nconst { formProps } = useForm<GetFields<PostEditMutation>>({\n  meta: { gqlMutation: POST_EDIT_MUTATION },\n});\n')),(0,r.yg)("p",null,"On initial render, useForm hook, will make ",(0,r.yg)("inlineCode",{parentName:"p"},"getOne")," query to your API to get the initial values of the form. Notice, we didn't pass a separate ",(0,r.yg)("inlineCode",{parentName:"p"},"gqlQuery")," field for this. It's because ",(0,r.yg)("inlineCode",{parentName:"p"},"@refinedev/nestjs-query")," package will automatically detect the ",(0,r.yg)("inlineCode",{parentName:"p"},"gqlMutation"),", extract selected fields from it and make a ",(0,r.yg)("inlineCode",{parentName:"p"},"getOne")," query to your API."),(0,r.yg)("p",null,"If you want to customize the ",(0,r.yg)("inlineCode",{parentName:"p"},"getOne")," query, you can also pass a ",(0,r.yg)("inlineCode",{parentName:"p"},"gqlQuery")," field to the ",(0,r.yg)("inlineCode",{parentName:"p"},"meta")," object."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},"const POST_EDIT_QUERY = gql`\n  query PostEdit($id: ID!) {\n    blogPost(id: $id) {\n      id\n      title\n      status\n      category {\n        id\n        title\n      }\n      categoryId\n      content\n    }\n  }\n`;\n\nconst { formProps } = useForm<GetFields<PostEditMutation>>({\n  meta: {\n    gqlMutation: POST_EDIT_MUTATION,\n    // highlight-next-line\n    gqlQuery: POST_EDIT_QUERY,\n  },\n});\n"))),(0,r.yg)("h3",{id:"utility-types"},"Utility Types"),(0,r.yg)(c,{id:"utility-types",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"@refinedev/nestjs-query")," exports 2 utility types, ",(0,r.yg)("inlineCode",{parentName:"p"},"GetFields")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"GetFieldsFromList"),"."),(0,r.yg)("p",null,"These types can be used to extract selection set from your queries mutations.")),(0,r.yg)("h4",{id:"getfields"},"GetFields"),(0,r.yg)(c,{id:"getfields",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"Let's say we have the following queries and mutations:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-graphql"},"query PostShow($id: ID!) {\n  post(id: $id) {\n    id\n  }\n}\n\nmutation PostCreate($input: CreateOneBlogPostInput!) {\n  createOneBlogPost(input: $input) {\n    id\n  }\n}\n")),(0,r.yg)("p",null,"While you can use this type directly, it's not very useful, because you would need to extract fields manually, by passing your query/mutation name."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},'import { GetFields } from "@refinedev/nestjs-query";\nimport { PostShowQuery, PostCreateMutation } from "src/graphql/types";\n\nPostShowQuery; // { blogPost: { id: string }; }\n\nGetFields<PostShowQuery>; // { id: string; }\n\nPostCreateMutation; // { createOneBlogPost: { id: string; } }\n\nGetFields<PostCreateMutation>; // { id: string; }\n'))),(0,r.yg)("h4",{id:"getfieldsfromlist"},"GetFieldsFromList"),(0,r.yg)(c,{id:"getfieldsfromlist",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"Let's say you have the following query:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-graphql"},"query PostsList(\n  $paging: OffsetPaging!\n  $filter: BlogPostFilter\n  $sorting: [BlogPostSort!]!\n) {\n  blogPosts(paging: $paging, filter: $filter, sorting: $sorting) {\n    nodes {\n      id\n    }\n    totalCount\n  }\n}\n")),(0,r.yg)("p",null,"This query will generate the following type:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},'export type BlogPostsListQuery = {\n  blogPosts: Pick<Types.BlogPostConnection, "totalCount"> & {\n    nodes: Array<Pick<Types.BlogPost, "id">>;\n  };\n};\n')),(0,r.yg)("p",null,"As you can see, the selectionSet is under ",(0,r.yg)("inlineCode",{parentName:"p"},"nodes"),", and it's not very useful, because data provider already returns normalized result."),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"GetFieldsFromList")," will convert it to:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},'import { GetFieldsFromList } from "@refinedev/nestjs-query";\n\ntype PostFields = GetFieldsFromList<BlogPostListQuery>;\n\nPostFields; // { id: string }\n'))),(0,r.yg)("h3",{id:"realtime"},"Realtime"),(0,r.yg)(c,{id:"realtime",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"@refinedev/nestjs-query")," also provides a ",(0,r.yg)("inlineCode",{parentName:"p"},"liveProvider")," to enable realtime features of Refine. These features are powered by GraphQL subscriptions and uses ",(0,r.yg)("a",{parentName:"p",href:"https://the-guild.dev/graphql/ws"},(0,r.yg)("inlineCode",{parentName:"a"},"graphql-ws"))," to handle the connections."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="app.tsx"',title:'"app.tsx"'},'import Refine from "@refinedev/core";\n// highlight-next-line\nimport dataProvider, {\n  GraphQLClient,\n  liveProvider,\n} from "@refinedev/nestjs-query";\n// highlight-next-line\nimport { createClient } from "graphql-ws";\n\nconst client = new GraphQLClient("https://api.nestjs-query.refine.dev/graphql");\n// highlight-next-line\nconst wsClient = createClient({\n  url: "wss://api.nestjs-query.refine.dev/graphql",\n});\n\nconst App = () => (\n  <Refine\n    dataProvider={dataProvider(client)}\n    // highlight-next-line\n    liveProvider={liveProvider(wsClient)}\n    options={{ liveMode: "auto" }}\n  >\n    {/* ... */}\n  </Refine>\n);\n'))),(0,r.yg)("h2",{id:"backend-configuration"},"Backend Configuration"),(0,r.yg)(c,{id:"backend-configuration",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"Currently ",(0,r.yg)("inlineCode",{parentName:"p"},"@refinedev/nestjs-query")," supports ",(0,r.yg)("a",{parentName:"p",href:"https://doug-martin.github.io/nestjs-query/docs/graphql/paging#offset-based-paging"},(0,r.yg)("inlineCode",{parentName:"a"},"OffsetPagingStrategy"))," ",(0,r.yg)("strong",{parentName:"p"},"only"),". ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/doug-martin/nestjs-query/tree/master/examples/offset-paging"},"See their offset pagination example")),(0,r.yg)("p",null,"You can configure ",(0,r.yg)("a",{parentName:"p",href:"https://doug-martin.github.io/nestjs-query/docs/graphql/resolvers"},"resolvers")," in your ",(0,r.yg)("inlineCode",{parentName:"p"},"app.module.ts")," file as follows:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts",metastring:'title="app.module.ts"',title:'"app.module.ts"'},'@Module({\n  imports: [\n    GraphQLModule.forRoot<ApolloDriverConfig>({\n      // ...other config\n      // Enable for live provider.\n      installSubscriptionHandlers: true,\n      subscriptions: {\n        "graphql-ws": true,\n      },\n    }),\n    NestjsQueryGraphQLModule.forFeature({\n      imports: [NestjsQueryTypeOrmModule.forFeature([BlogPostEntity])],\n      resolvers: [\n        {\n          // Only OFFSET paging strategy is supported.\n          pagingStrategy: PagingStrategies.OFFSET,\n          // Needed for dataprovider to build pagination.\n          enableTotalCount: true,\n          DTOClass: BlogPostDTO,\n          // enable for live provider\n          enableSubscriptions: true,\n        },\n      ],\n    }),\n  ],\n})\nexport class AppModule {}\n'))),(0,r.yg)("h2",{id:"authentication"},"Authentication"),(0,r.yg)(c,{id:"authentication",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"If your API uses authentication, you can easily provide a custom fetcher for the requests and handle the authentication logic there. When creating a GraphQL Client, you can pass a ",(0,r.yg)("inlineCode",{parentName:"p"},"fetch")," function to the client options. This function will be used to append the authentication headers to the requests."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="data-provider.tsx"',title:'"data-provider.tsx"'},'import graphqlDataProvider, {\n  GraphQLClient,\n  liveProvider as graphqlLiveProvider,\n} from "@refinedev/nestjs-query";\nimport { createClient } from "graphql-ws";\n\nconst client = new GraphQLClient(API_URL, {\n  fetch: (url: string, options: RequestInit) => {\n    return fetch(url, {\n      ...options,\n      headers: {\n        ...options.headers,\n        /**\n         * For demo purposes, we\'re using `localStorage` to access the token.\n         * You can use your own authentication logic here.\n         * In real world applications, you\'ll need to handle it in sync with your `authProvider`.\n         */\n        // highlight-next-line\n        Authorization: `Bearer ${localStorage.getItem("token")}`,\n      },\n    });\n  },\n});\n\nconst wsClient = createClient({\n  url: WS_URL,\n  connectionParams: () => ({\n    headers: {\n      Authorization: `Bearer ${localStorage.getItem("token")}`,\n    },\n  }),\n});\n\nexport const dataProvider = graphqlDataProvider(client);\nexport const liveProvider = graphqlLiveProvider(wsClient);\n'))),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)(c,{id:"example",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)(y,{path:"data-provider-nestjs-query",mdxType:"CodeSandboxExample"})))}f.isMDXComponent=!0}}]);