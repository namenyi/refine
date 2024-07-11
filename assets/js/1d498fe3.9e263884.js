"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[82503],{58860:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>f});var r=n(37953);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=p(n),g=a,f=u["".concat(l,".").concat(g)]||u[g]||s[g]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[u]="string"==typeof e?e:a,i[1]=d;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},12595:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>b,frontMatter:()=>d,metadata:()=>p,toc:()=>u});n(37953);var r=n(58860);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const d={id:"add-delete-feature",title:"5. Adding Delete Feature",tutorial:{order:0,prev:"3.xx.xx/tutorial/adding-crud-pages/{preferredUI}/add-create-page",next:"3.xx.xx/tutorial/adding-crud-pages/{preferredUI}/adding-sort-and-filters"}},l=void 0,p={unversionedId:"tutorial/adding-crud-pages/chakra-ui/add-delete-feature",id:"version-3.xx.xx/tutorial/adding-crud-pages/chakra-ui/add-delete-feature",title:"5. Adding Delete Feature",description:"There are many ways to delete a record. In this tutorial, we will first use the `` to delete a record and then we will learn how to enable the delete feature on the show page and edit page.",source:"@site/versioned_docs/version-3.xx.xx/tutorial/4-adding-crud-pages/chakra-ui/add-delete-feature.md",sourceDirName:"tutorial/4-adding-crud-pages/chakra-ui",slug:"/tutorial/adding-crud-pages/chakra-ui/add-delete-feature",permalink:"/docs/3.xx.xx/tutorial/adding-crud-pages/chakra-ui/add-delete-feature",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/tutorial/4-adding-crud-pages/chakra-ui/add-delete-feature.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1707917497,formattedLastUpdatedAt:"Feb 14, 2024",frontMatter:{id:"add-delete-feature",title:"5. Adding Delete Feature",tutorial:{order:0,prev:"3.xx.xx/tutorial/adding-crud-pages/{preferredUI}/add-create-page",next:"3.xx.xx/tutorial/adding-crud-pages/{preferredUI}/adding-sort-and-filters"}}},c={},u=[{value:"Adding Delete Feature to List Page",id:"adding-delete-feature-to-list-page",level:2},{value:"Enabling Delete Feature on Show Page and Edit Page",id:"enabling-delete-feature-on-show-page-and-edit-page",level:2}],s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",t)},g=s("DocThumbsUpDownFeedbackWidget"),f=s("Checklist"),m=s("ChecklistItem"),y={toc:u},h="wrapper";function b(e){var{components:t}=e,n=i(e,["components"]);return(0,r.yg)(h,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},y,n),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"There are many ways to delete a record. In this tutorial, we will first use the ",(0,r.yg)("inlineCode",{parentName:"p"},"<DeleteButton/>")," to delete a record and then we will learn how to enable the delete feature on the show page and edit page."),(0,r.yg)("h2",{id:"adding-delete-feature-to-list-page"},"Adding Delete Feature to List Page"),(0,r.yg)(g,{id:"adding-delete-feature-to-list-page",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"Let's start by adding the delete feature to the list page. To do this, we will use the ",(0,r.yg)("inlineCode",{parentName:"p"},"<DeleteButton/>")," component."),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"<DeleteButton/>")," is a ",(0,r.yg)("strong",{parentName:"p"},"refine")," component that is used to delete a record. When you click on the delete button, it will show a confirmation modal. If you confirm the deletion, it will delete the record."),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/chakra-ui/components/buttons/delete-button/"},"Refer to the ",(0,r.yg)("inlineCode",{parentName:"a"},"<DeleteButton/>")," documentation for more information ","\u2192")),(0,r.yg)("p",null,"To add a delete feature to the blog posts table, you can follow the steps below:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Open the ",(0,r.yg)("inlineCode",{parentName:"p"},"src/pages/blog-posts/list.tsx")," file on your editor.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Import the ",(0,r.yg)("inlineCode",{parentName:"p"},"<DeleteButton/>")," component from ",(0,r.yg)("inlineCode",{parentName:"p"},"@pankod/refine-chakra-ui"),":"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'import { DeleteButton } from "@pankod/refine-chakra-ui";\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Add the ",(0,r.yg)("inlineCode",{parentName:"p"},"<DeleteButton/>")," component to the ",(0,r.yg)("inlineCode",{parentName:"p"},"actions")," column of the table as shown below:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'{\n    id: "actions",\n    accessorKey: "id",\n    header: "Actions",\n    cell: function render({ getValue }) {\n        return (\n            <HStack>\n                <ShowButton\n                    hideText\n                    recordItemId={getValue() as string}\n                />\n                <EditButton\n                    hideText\n                    recordItemId={getValue() as string}\n                />\n                //highlight-start\n                <DeleteButton\n                    hideText\n                    recordItemId={getValue() as string}\n                />\n                //highlight-end\n            </HStack>\n        );\n    },\n},\n')),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"recordItemId")," is the id of the record you want to delete."))),(0,r.yg)("p",null,"Now, you can try to delete a record from the list page. Just click on the delete button of the record you want to delete and confirm the deletion.")),(0,r.yg)("h2",{id:"enabling-delete-feature-on-show-page-and-edit-page"},"Enabling Delete Feature on Show Page and Edit Page"),(0,r.yg)(g,{id:"enabling-delete-feature-on-show-page-and-edit-page",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"When we define a resource, we can enable the delete feature on the show page and edit page by setting the ",(0,r.yg)("inlineCode",{parentName:"p"},"canDelete")," property to ",(0,r.yg)("inlineCode",{parentName:"p"},"true")," as shown below:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'src="src/App.tsx"',src:'"src/App.tsx"'},'import { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport {\n  ChakraProvider,\n  ErrorComponent,\n  Layout,\n  refineTheme,\n  ReadyPage,\n  useNotificationProvider,\n} from "@pankod/refine-chakra-ui";\n\nimport { BlogPostList } from "pages/blog-posts/list";\nimport { BlogPostEdit } from "pages/blog-posts/edit";\nimport { BlogPostShow } from "pages/blog-posts/show";\nimport { BlogPostCreate } from "pages/blog-posts/create";\n\nconst App = () => {\n  return (\n    <ChakraProvider theme={refineTheme}>\n      <Refine\n        notificationProvider={notificationProvider()}\n        routerProvider={routerProvider}\n        dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n        Layout={Layout}\n        ReadyPage={ReadyPage}\n        catchAll={<ErrorComponent />}\n        resources={[\n          {\n            name: "blog_posts",\n            list: BlogPostList,\n            edit: BlogPostEdit,\n            show: BlogPostShow,\n            create: BlogPostCreate,\n            //highlight-next-line\n            canDelete: true,\n          },\n        ]}\n      />\n    </ChakraProvider>\n  );\n};\nexport default App;\n')),(0,r.yg)("p",null,"After setting the ",(0,r.yg)("inlineCode",{parentName:"p"},"canDelete")," property to ",(0,r.yg)("inlineCode",{parentName:"p"},"true"),", you will see a delete button on the show page and edit page. Because we used the ",(0,r.yg)("inlineCode",{parentName:"p"},"<Show/>")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"<Edit/>")," components in the show page and edit page, the delete button will be added automatically in these components."),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/refine-config/#candelete"},"Refer to the ",(0,r.yg)("inlineCode",{parentName:"a"},"<Refine/>")," documentation for more information about the ",(0,r.yg)("inlineCode",{parentName:"a"},"canDelete")," property ","\u2192")),(0,r.yg)("br",null),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"You can also use ",(0,r.yg)("inlineCode",{parentName:"p"},"useDelete")," hook provided by ",(0,r.yg)("strong",{parentName:"p"},"refine")," to delete a record."),(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/data/useDelete/"},"Refer to the ",(0,r.yg)("inlineCode",{parentName:"a"},"useDelete")," documentation for more information information ","\u2192"))),(0,r.yg)("br",null),(0,r.yg)(f,{mdxType:"Checklist"},(0,r.yg)(m,{id:"add-delete-feature-chakra-ui",mdxType:"ChecklistItem"},"I added the delete feature to the list page."),(0,r.yg)(m,{id:"add-delete-feature-chakra-ui-2",mdxType:"ChecklistItem"},"I enabled the delete feature on the show page and edit page."))))}b.isMDXComponent=!0}}]);