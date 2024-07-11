"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[19067],{58860:(e,t,a)=>{a.d(t,{xA:()=>s,yg:()=>y});var n=a(37953);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(a),c=r,y=u["".concat(d,".").concat(c)]||u[c]||m[c]||i;return a?n.createElement(y,o(o({ref:t},s),{},{components:a})):n.createElement(y,o({ref:t},s))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},30010:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>N,frontMatter:()=>l,metadata:()=>p,toc:()=>u});a(37953);var n=a(58860);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const l={title:"useDeleteMany",siderbar_label:"useDeleteMany",source:"packages/core/src/hooks/data/useDeleteMany.ts"},d=void 0,p={unversionedId:"api-reference/core/hooks/data/useDeleteMany/index",id:"version-3.xx.xx/api-reference/core/hooks/data/useDeleteMany/index",title:"useDeleteMany",description:"useDeleteMany is an extended version of TanStack Query's useMutation. It supports all the features of useMutation and adds some extra features.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/data/useDeleteMany/index.md",sourceDirName:"api-reference/core/hooks/data/useDeleteMany",slug:"/api-reference/core/hooks/data/useDeleteMany/",permalink:"/docs/3.xx.xx/api-reference/core/hooks/data/useDeleteMany/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/hooks/data/useDeleteMany/index.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1701677116,formattedLastUpdatedAt:"Dec 4, 2023",frontMatter:{title:"useDeleteMany",siderbar_label:"useDeleteMany",source:"packages/core/src/hooks/data/useDeleteMany.ts"},sidebar:"someSidebar",previous:{title:"useDelete",permalink:"/docs/3.xx.xx/api-reference/core/hooks/data/useDelete/"},next:{title:"useList",permalink:"/docs/3.xx.xx/api-reference/core/hooks/data/useList/"}},s={},u=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Realtime Updates",id:"realtime-updates",level:2},{value:"Invalidating Queries",id:"invalidating-queries",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>mutationOptions</code>",id:"mutationoptions",level:3},{value:"Mutation Parameters",id:"mutation-parameters",level:2},{value:"<code>resource</code> <PropTag required />",id:"resource-",level:3},{value:"<code>ids</code> <PropTag required />",id:"ids-",level:3},{value:"<code>mutationMode</code>",id:"mutationmode",level:3},{value:"<code>undoableTimeout</code>",id:"undoabletimeout",level:3},{value:"<code>onCancel</code>",id:"oncancel",level:3},{value:"<code>successNotification</code>",id:"successnotification",level:3},{value:"<code>errorNotification</code>",id:"errornotification",level:3},{value:"<code>metaData</code>",id:"metadata",level:3},{value:"<code>dataProviderName</code>",id:"dataprovidername",level:3},{value:"<code>invalidates</code>",id:"invalidates",level:3},{value:"Return Values",id:"return-values",level:2},{value:"API",id:"api",level:2},{value:"Mutation Parameters",id:"mutation-parameters-1",level:3},{value:"Type Parameters",id:"type-parameters",level:3},{value:"Return value",id:"return-value",level:3}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.yg)("div",t)},c=m("DocThumbsUpDownFeedbackWidget"),y=m("PropTag"),g={toc:u},h="wrapper";function N(e){var{components:t}=e,a=o(e,["components"]);return(0,n.yg)(h,i(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){r(e,t,a[t])}))}return e}({},g,a),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"useDeleteMany")," is an extended version of TanStack Query's ",(0,n.yg)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/reference/useMutation"},(0,n.yg)("inlineCode",{parentName:"a"},"useMutation")),". It supports all the features of ",(0,n.yg)("inlineCode",{parentName:"p"},"useMutation")," and adds some extra features."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"It uses the ",(0,n.yg)("inlineCode",{parentName:"li"},"deleteMany")," method as the ",(0,n.yg)("strong",{parentName:"li"},"mutation function")," from the ",(0,n.yg)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/core/providers/data-provider/"},(0,n.yg)("inlineCode",{parentName:"a"},"dataProvider"))," which is passed to ",(0,n.yg)("inlineCode",{parentName:"li"},"<Refine>"),".")),(0,n.yg)("p",null,"It is useful when you want to delete multiple records at once."),(0,n.yg)("admonition",{type:"caution"},(0,n.yg)("p",{parentName:"admonition"},"If your data provider does not have a ",(0,n.yg)("inlineCode",{parentName:"p"},"deleteMany")," method, ",(0,n.yg)("inlineCode",{parentName:"p"},"useDeleteMany")," will use the ",(0,n.yg)("inlineCode",{parentName:"p"},"deleteOne")," method instead. It is not recommended, because it will make requests one by one for each id. It is better to implement the ",(0,n.yg)("inlineCode",{parentName:"p"},"deleteMany")," method in the data provider.")),(0,n.yg)("h2",{id:"basic-usage"},"Basic Usage"),(0,n.yg)(c,{id:"basic-usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"useDeleteMany")," hook returns many useful properties and methods. One of them is the ",(0,n.yg)("inlineCode",{parentName:"p"},"mutate")," method which expects ",(0,n.yg)("inlineCode",{parentName:"p"},"resource")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"ids")," as parameters. These parameters will be passed to the ",(0,n.yg)("inlineCode",{parentName:"p"},"deleteMany")," method from the ",(0,n.yg)("inlineCode",{parentName:"p"},"dataProvider")," as parameters."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useDeleteMany } from "@pankod/refine-core";\n\nconst { mutate } = useDeleteMany();\n\nmutate({\n  resource: "products",\n  ids: [1, 2, 3],\n});\n'))),(0,n.yg)("h2",{id:"realtime-updates"},"Realtime Updates"),(0,n.yg)(c,{id:"realtime-updates",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"This feature is only available if you use a ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/live-provider"},"Live Provider"),".")),(0,n.yg)("p",null,"When the ",(0,n.yg)("inlineCode",{parentName:"p"},"useDeleteMany")," mutation runs successfully, it will call the ",(0,n.yg)("inlineCode",{parentName:"p"},"publish")," method from ",(0,n.yg)("inlineCode",{parentName:"p"},"liveProvider")," with some parameters such as ",(0,n.yg)("inlineCode",{parentName:"p"},"channel"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"type")," etc. It is useful when you want to publish the changes to the subscribers on the client side."),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/live-provider"},"Refer to the ",(0,n.yg)("inlineCode",{parentName:"a"},"liveProvider")," documentation for more information ","\u2192"))),(0,n.yg)("h2",{id:"invalidating-queries"},"Invalidating Queries"),(0,n.yg)(c,{id:"invalidating-queries",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"When the ",(0,n.yg)("inlineCode",{parentName:"p"},"useDeleteMany")," mutation runs successfully, by default it will invalidate the following queries from the current ",(0,n.yg)("inlineCode",{parentName:"p"},"resource"),": ",(0,n.yg)("inlineCode",{parentName:"p"},'"list"')," and ",(0,n.yg)("inlineCode",{parentName:"p"},'"many"'),". That means, if you use ",(0,n.yg)("inlineCode",{parentName:"p"},"useList")," or ",(0,n.yg)("inlineCode",{parentName:"p"},"useMany")," hooks on the same page, they will refetch the data after the mutation is completed. You can change this behavior by passing ",(0,n.yg)("a",{parentName:"p",href:"#invalidates"},(0,n.yg)("inlineCode",{parentName:"a"},"invalidates"))," prop."),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/guides/query-invalidation"},"Refer to the query invalidation documentation for more information ","\u2192"))),(0,n.yg)("h2",{id:"properties"},"Properties"),(0,n.yg)("h3",{id:"mutationoptions"},(0,n.yg)("inlineCode",{parentName:"h3"},"mutationOptions")),(0,n.yg)(c,{id:"mutationoptions",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"mutationOptions")," is used to pass options to the ",(0,n.yg)("inlineCode",{parentName:"p"},"useMutation")," hook. It is useful when you want to pass additional options to the ",(0,n.yg)("inlineCode",{parentName:"p"},"useMutation")," hook."),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/reference/useMutation"},"Refer to the ",(0,n.yg)("inlineCode",{parentName:"a"},"useMutation")," documentation for more information ","\u2192")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},"useDeleteMany({\n  mutationOptions: {\n    retry: 3,\n  },\n});\n")),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("p",{parentName:"admonition"},(0,n.yg)("inlineCode",{parentName:"p"},"mutationOptions")," does not support ",(0,n.yg)("inlineCode",{parentName:"p"},"onSuccess")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"onError")," props because they override the default ",(0,n.yg)("inlineCode",{parentName:"p"},"onSuccess")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"onError")," functions. If you want to use these props, you can pass them to mutate functions like this:"),(0,n.yg)("pre",{parentName:"admonition"},(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useDeleteMany();\n\nmutate(\n  {\n    resource: "products",\n    ids: [1, 2, 3],\n  },\n  {\n    onError: (error, variables, context) => {\n      // An error occurred!\n    },\n    onSuccess: (data, variables, context) => {\n      // Let\'s celebrate!\n    },\n  },\n);\n')))),(0,n.yg)("h2",{id:"mutation-parameters"},"Mutation Parameters"),(0,n.yg)("h3",{id:"resource-"},(0,n.yg)("inlineCode",{parentName:"h3"},"resource")," ",(0,n.yg)(y,{required:!0,mdxType:"PropTag"})),(0,n.yg)(c,{id:"resource-",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"It will be passed to the ",(0,n.yg)("inlineCode",{parentName:"p"},"deleteMany")," method from the ",(0,n.yg)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter. The parameter is usually used as an API endpoint path. It all depends on how to handle the ",(0,n.yg)("inlineCode",{parentName:"p"},"resource")," in the ",(0,n.yg)("inlineCode",{parentName:"p"},"deleteMany")," method. See the ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/tutorial/understanding-dataprovider/create-dataprovider/"},"creating a data provider")," section for an example of how resources are handled."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useDeleteMany();\n\nmutate({\n  resource: "categories",\n});\n'))),(0,n.yg)("h3",{id:"ids-"},(0,n.yg)("inlineCode",{parentName:"h3"},"ids")," ",(0,n.yg)(y,{required:!0,mdxType:"PropTag"})),(0,n.yg)(c,{id:"ids-",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"It will be passed to the ",(0,n.yg)("inlineCode",{parentName:"p"},"deleteMany")," method from the ",(0,n.yg)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter. It is used to determine which records will be deleted."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},"const { mutate } = useDeleteMany();\n\nmutate({\n  ids: [1, 2, 3],\n});\n"))),(0,n.yg)("h3",{id:"mutationmode"},(0,n.yg)("inlineCode",{parentName:"h3"},"mutationMode")),(0,n.yg)(c,{id:"mutationmode",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"Mutation mode determines which mode the mutation runs with. Mutations can run under three different modes: ",(0,n.yg)("inlineCode",{parentName:"p"},"pessimistic"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"optimistic"),", and ",(0,n.yg)("inlineCode",{parentName:"p"},"undoable"),". The default mode is ",(0,n.yg)("inlineCode",{parentName:"p"},"pessimistic"),".\nEach mode corresponds to a different type of user experience."),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/advanced-tutorials/mutation-mode"},"Refer to the mutation mode documentation for more information ","\u2192")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useDeleteMany();\n\nmutate({\n  mutationMode: "undoable",\n});\n'))),(0,n.yg)("h3",{id:"undoabletimeout"},(0,n.yg)("inlineCode",{parentName:"h3"},"undoableTimeout")),(0,n.yg)(c,{id:"undoabletimeout",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"When ",(0,n.yg)("inlineCode",{parentName:"p"},"mutationMode")," is set to ",(0,n.yg)("inlineCode",{parentName:"p"},"undoable"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"undoableTimeout")," is used to determine the duration to wait before executing the mutation. The default value is ",(0,n.yg)("inlineCode",{parentName:"p"},"5000")," milliseconds."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useDeleteMany();\n\nmutate({\n  mutationMode: "undoable",\n  undoableTimeout: 10000,\n});\n'))),(0,n.yg)("h3",{id:"oncancel"},(0,n.yg)("inlineCode",{parentName:"h3"},"onCancel")),(0,n.yg)(c,{id:"oncancel",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"When ",(0,n.yg)("inlineCode",{parentName:"p"},"mutationMode")," is set to ",(0,n.yg)("inlineCode",{parentName:"p"},"undoable"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"onCancel")," is used to determine what to do when the user cancels the mutation."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useDeleteMany();\n\nmutate({\n  mutationMode: "undoable",\n  onCancel: (cancelMutation) => {\n    cancelMutation();\n    // you can do something else here\n  },\n});\n'))),(0,n.yg)("h3",{id:"successnotification"},(0,n.yg)("inlineCode",{parentName:"h3"},"successNotification")),(0,n.yg)(c,{id:"successnotification",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/notification-provider/"},(0,n.yg)("inlineCode",{parentName:"a"},"NotificationProvider"))," is required for this prop to work.")),(0,n.yg)("p",null,"After data is fetched successfully, ",(0,n.yg)("inlineCode",{parentName:"p"},"useDeleteMany")," can call ",(0,n.yg)("inlineCode",{parentName:"p"},"open")," function from ",(0,n.yg)("inlineCode",{parentName:"p"},"NotificationProvider")," to show a success notification. With this prop, you can customize the success notification."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useDeleteMany();\n\nmutate({\n  successNotification: (data, values, resource) => {\n    return {\n      message: `${data.title} Successfully fetched.`,\n      description: "Success with no errors",\n      type: "success",\n    };\n  },\n});\n'))),(0,n.yg)("h3",{id:"errornotification"},(0,n.yg)("inlineCode",{parentName:"h3"},"errorNotification")),(0,n.yg)(c,{id:"errornotification",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/notification-provider/"},(0,n.yg)("inlineCode",{parentName:"a"},"NotificationProvider"))," is required for this prop to work.")),(0,n.yg)("p",null,"After data fetching is failed, ",(0,n.yg)("inlineCode",{parentName:"p"},"useDeleteMany")," will call ",(0,n.yg)("inlineCode",{parentName:"p"},"open")," function from ",(0,n.yg)("inlineCode",{parentName:"p"},"NotificationProvider")," to show an error notification. With this prop, you can customize the error notification."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useDeleteMany();\n\nmutate({\n  errorNotification: (data, values, resource) => {\n    return {\n      message: `Something went wrong when getting ${data.id}`,\n      description: "Error",\n      type: "error",\n    };\n  },\n});\n'))),(0,n.yg)("h3",{id:"metadata"},(0,n.yg)("inlineCode",{parentName:"h3"},"metaData")),(0,n.yg)(c,{id:"metadata",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/general-concepts/#metadata"},(0,n.yg)("inlineCode",{parentName:"a"},"metaData"))," is used following two purposes:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"To pass additional information to data provider methods."),(0,n.yg)("li",{parentName:"ul"},"Generate GraphQL queries using plain JavaScript Objects (JSON). Please refer ",(0,n.yg)("a",{parentName:"li",href:"/docs/3.xx.xx/advanced-tutorials/data-provider/graphql/#edit-page"},"GraphQL")," for more information.")),(0,n.yg)("p",null,"In the following example, we pass the ",(0,n.yg)("inlineCode",{parentName:"p"},"headers")," property in the ",(0,n.yg)("inlineCode",{parentName:"p"},"metaData")," object to the ",(0,n.yg)("inlineCode",{parentName:"p"},"deleteMany")," method. With similar logic, you can pass any properties to specifically handle the data provider methods."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useDeleteMany();\n\nmutate({\n  // highlight-start\n  metaData: {\n    headers: { "x-meta-data": "true" },\n  },\n  // highlight-end\n});\n\nconst myDataProvider = {\n  //...\n  deleteMany: async ({\n    resource,\n    ids,\n    // highlight-next-line\n    metaData,\n  }) => {\n    // highlight-next-line\n    const headers = metaData?.headers ?? {};\n    const url = `${apiUrl}/${resource}`;\n\n    //...\n    //...\n\n    // highlight-start\n    const { data } = await httpClient.delete(url, { ids }, { headers });\n    // highlight-end\n\n    return {\n      data,\n    };\n  },\n  //...\n};\n'))),(0,n.yg)("h3",{id:"dataprovidername"},(0,n.yg)("inlineCode",{parentName:"h3"},"dataProviderName")),(0,n.yg)(c,{id:"dataprovidername",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"If there is more than one ",(0,n.yg)("inlineCode",{parentName:"p"},"dataProvider"),", you can specify which one to use by passing the ",(0,n.yg)("inlineCode",{parentName:"p"},"dataProviderName")," prop. It is useful when you have a different data provider for different resources."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useDeleteMany();\n\nmutate({\n  dataProviderName: "second-data-provider",\n});\n'))),(0,n.yg)("h3",{id:"invalidates"},(0,n.yg)("inlineCode",{parentName:"h3"},"invalidates")),(0,n.yg)(c,{id:"invalidates",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"invalidates")," is used to specify which queries should be invalidated after the mutation is completed."),(0,n.yg)("p",null,"By default, it invalidates the following queries from the current ",(0,n.yg)("inlineCode",{parentName:"p"},"resource"),": ",(0,n.yg)("inlineCode",{parentName:"p"},'"list"')," and ",(0,n.yg)("inlineCode",{parentName:"p"},'"many"'),". That means, if you use ",(0,n.yg)("inlineCode",{parentName:"p"},"useList")," or ",(0,n.yg)("inlineCode",{parentName:"p"},"useMany")," hooks on the same page, they will refetch the data after the mutation is completed."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useDeleteMany();\n\nmutate({\n  invalidates: ["list", "many", "detail"],\n});\n'))),(0,n.yg)("h2",{id:"return-values"},"Return Values"),(0,n.yg)(c,{id:"return-values",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"Returns an object with TanStack Query's ",(0,n.yg)("inlineCode",{parentName:"p"},"useMutation")," return values."),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/reference/useMutation"},"Refer to the ",(0,n.yg)("inlineCode",{parentName:"a"},"useMutation")," documentation for more information ","\u2192"))),(0,n.yg)("h2",{id:"api"},"API"),(0,n.yg)("h3",{id:"mutation-parameters-1"},"Mutation Parameters"),(0,n.yg)(c,{id:"mutation-parameters-1",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Property"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"),(0,n.yg)("th",{parentName:"tr",align:null},"Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Default"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("div",{className:"required-block"},(0,n.yg)("div",null,"resource")," ",(0,n.yg)("div",{className:" required"},"Required"))),(0,n.yg)("td",{parentName:"tr",align:null},"Resource name for API data interactions"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"ids ",(0,n.yg)("div",{className:" required"},"Required")),(0,n.yg)("td",{parentName:"tr",align:null},"ids for mutation function"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#basekey"},(0,n.yg)("inlineCode",{parentName:"a"},"BaseKey[]"))),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"mutationMode"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/advanced-tutorials/mutation-mode"},"Determines when mutations are executed")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},' "pessimistic')," ","|"," ",(0,n.yg)("inlineCode",{parentName:"td"},'"optimistic')," ","|"," ",(0,n.yg)("inlineCode",{parentName:"td"},'"undoable"')),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},'"pessimistic"'),"*")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"undoableTimeout"),(0,n.yg)("td",{parentName:"tr",align:null},"Duration to wait before executing the mutation when ",(0,n.yg)("inlineCode",{parentName:"td"},'mutationMode = "undoable"')),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"number")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"5000ms"),"*")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"onCancel"),(0,n.yg)("td",{parentName:"tr",align:null},"Callback that runs when undo button is clicked on ",(0,n.yg)("inlineCode",{parentName:"td"},'mutationMode = "undoable"')),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"(cancelMutation: () => void) => void")),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"successNotification"),(0,n.yg)("td",{parentName:"tr",align:null},"Successful Mutation notification"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#successerrornotification"},(0,n.yg)("inlineCode",{parentName:"a"},"SuccessErrorNotification"))),(0,n.yg)("td",{parentName:"tr",align:null},'"Successfully deleted ',(0,n.yg)("inlineCode",{parentName:"td"},"resource"),'"')),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"errorNotification"),(0,n.yg)("td",{parentName:"tr",align:null},"Unsuccessful Mutation notification"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#successerrornotification"},(0,n.yg)("inlineCode",{parentName:"a"},"SuccessErrorNotification"))),(0,n.yg)("td",{parentName:"tr",align:null},'"Error when updating ',(0,n.yg)("inlineCode",{parentName:"td"},"resource")," (status code: ",(0,n.yg)("inlineCode",{parentName:"td"},"statusCode"),')"')),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"metaData"),(0,n.yg)("td",{parentName:"tr",align:null},"Metadata query for ",(0,n.yg)("inlineCode",{parentName:"td"},"dataProvider")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#metadataquery"},(0,n.yg)("inlineCode",{parentName:"a"},"MetaDataQuery"))),(0,n.yg)("td",{parentName:"tr",align:null},"{}")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"dataProviderName"),(0,n.yg)("td",{parentName:"tr",align:null},"If there is more than one ",(0,n.yg)("inlineCode",{parentName:"td"},"dataProvider"),", you should use the ",(0,n.yg)("inlineCode",{parentName:"td"},"dataProviderName")," that you will use."),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"default"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"invalidates"),(0,n.yg)("td",{parentName:"tr",align:null},"You can use it to manage the invalidations that will occur at the end of the mutation."),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"all"),", ",(0,n.yg)("inlineCode",{parentName:"td"},"resourceAll"),", ",(0,n.yg)("inlineCode",{parentName:"td"},"list"),", ",(0,n.yg)("inlineCode",{parentName:"td"},"many"),", ",(0,n.yg)("inlineCode",{parentName:"td"},"detail"),", ",(0,n.yg)("inlineCode",{parentName:"td"},"false")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},'["list", "many"]'))))),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("inlineCode",{parentName:"p"},"*"),": These props have default values in ",(0,n.yg)("inlineCode",{parentName:"p"},"RefineContext")," and can also be set on ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/refine-config"},(0,n.yg)("inlineCode",{parentName:"a"},"<Refine>"))," component. ",(0,n.yg)("inlineCode",{parentName:"p"},"useDeleteMany")," will use what is passed to ",(0,n.yg)("inlineCode",{parentName:"p"},"<Refine>")," as default but a local value will override it.")),(0,n.yg)("br",null)),(0,n.yg)("h3",{id:"type-parameters"},"Type Parameters"),(0,n.yg)(c,{id:"type-parameters",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Property"),(0,n.yg)("th",{parentName:"tr",align:null},"Desription"),(0,n.yg)("th",{parentName:"tr",align:null},"Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Default"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"TData"),(0,n.yg)("td",{parentName:"tr",align:null},"Result data of the mutation. Extends ",(0,n.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#baserecord"},(0,n.yg)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#baserecord"},(0,n.yg)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#baserecord"},(0,n.yg)("inlineCode",{parentName:"a"},"BaseRecord")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"TError"),(0,n.yg)("td",{parentName:"tr",align:null},"Custom error object that extends ",(0,n.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#httperror"},(0,n.yg)("inlineCode",{parentName:"a"},"HttpError"))),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#httperror"},(0,n.yg)("inlineCode",{parentName:"a"},"HttpError"))),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#httperror"},(0,n.yg)("inlineCode",{parentName:"a"},"HttpError")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"TVariables"),(0,n.yg)("td",{parentName:"tr",align:null},"Values for mutation function"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"{}")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"{}")))))),(0,n.yg)("h3",{id:"return-value"},"Return value"),(0,n.yg)(c,{id:"return-value",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Description"),(0,n.yg)("th",{parentName:"tr",align:null},"Type"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Result of the TanStack Query's useMutation"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://tanstack.com/query/v4/docs/react/reference/useMutation"},(0,n.yg)("inlineCode",{parentName:"a"},"UseMutationResult<"),(0,n.yg)("br",null),(0,n.yg)("inlineCode",{parentName:"a"},"{ data: TData },"),(0,n.yg)("br",null),(0,n.yg)("inlineCode",{parentName:"a"},"TError,"),(0,n.yg)("br",null),(0,n.yg)("inlineCode",{parentName:"a"}," { resource: string; ids: BaseKey[]; },"),(0,n.yg)("br",null),(0,n.yg)("inlineCode",{parentName:"a"}," DeleteContext>")),"*"))))))}N.isMDXComponent=!0}}]);