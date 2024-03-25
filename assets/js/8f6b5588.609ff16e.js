"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[63163,4004,15435,97474,90034,3534,15758,96771,90636,3664,15766,69050,45619,35194,56490,68134,45603,34685,56326,68562,45243,50176,8407,50233],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,m=d["".concat(u,".").concat(f)]||d[f]||s[f]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},50551:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(67294),a=r(86010);const o="tabItem_Ymn6";function i({children:e,hidden:t,className:r}){return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,r),hidden:t},e)}},53787:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(67294),a=r(86010),o=r(6379),i=r(93874),l=r(30358);const u="tabList__CuJ",c="tabItem_LNqP";function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){p(e,t,r[t])}))}return e}function d(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function f({className:e,block:t,selectedValue:r,selectValue:i,tabValues:l}){var u;const p=[],{blockElementScrollPositionUntilNextRender:f}=(0,o.o5)(),m=e=>{const t=e.currentTarget,n=p.indexOf(t),a=l[n].value;a!==r&&(f(t),i(a))},h=e=>{var t,r;let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=p.indexOf(e.currentTarget)+1;var a;n=null!==(a=p[t])&&void 0!==a?a:p[0];break}case"ArrowLeft":{const t=p.indexOf(e.currentTarget)-1;var o;n=null!==(o=p[t])&&void 0!==o?o:p[p.length-1];break}}null===(r=n)||void 0===r||null===(t=r.focus)||void 0===t||t.call(r)};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},e)},l.map((({value:e,label:t,attributes:o})=>n.createElement("li",d(s({role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,key:e,ref:e=>p.push(e),onKeyDown:h,onClick:m},o),{className:(0,a.Z)("tabs__item",c,null===(u=o)||void 0===u?void 0:u.className,{"tabs__item--active":r===e})}),null!=t?t:e))))}function m({lazy:e,children:t,selectedValue:r}){const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function h(e){const t=(0,i.Y)(e);return n.createElement("div",{className:(0,a.Z)("tabs-container",u)},n.createElement(f,s({},e,t)),n.createElement(m,s({},e,t)))}function y(e){const t=(0,l.Z)();return n.createElement(h,s({key:String(t)},e))}},93874:(e,t,r)=>{r.d(t,{Y:()=>f});var n=r(67294),a=r(76775),o=r(47348);var i=r(76632);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function c(e){return function(e){var t,r,a;return null!==(a=null===(r=n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===r||null===(t=r.filter)||void 0===t?void 0:t.call(r,Boolean))&&void 0!==a?a:[]}(e).map((({props:{value:e,label:t,attributes:r,default:n}})=>({value:e,label:t,attributes:r,default:n})))}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=null!=t?t:c(r);return function(e){const t=function(e,t=((e,t)=>e===t)){return e.filter(((r,n)=>e.findIndex((e=>t(e,r)))!==n))}(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function s({value:e,tabValues:t}){return t.some((t=>t.value===e))}function d({queryString:e=!1,groupId:t}){const r=(0,a.k6)(),i=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t}),c=(0,o._X)(i),p=(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace(u(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){l(e,t,r[t])}))}return e}({},r.location),{search:t.toString()}))}),[i,r]);return[c,p]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=p(e),[l,u]=(0,n.useState)((()=>function({defaultValue:e,tabValues:t}){if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!s({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var r;const n=null!==(r=t.find((e=>e.default)))&&void 0!==r?r:t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[c,f]=d({queryString:r,groupId:a}),[m,h]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[r,a]=(0,i.Nk)(t);return[r,(0,n.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:a}),y=(()=>{const e=null!=c?c:m;return s({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{y&&u(y)}),[y]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!s({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);u(e),f(e),h(e)}),[f,h,o]),tabValues:o}}},67632:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>k,frontMatter:()=>c,metadata:()=>s,toc:()=>f});r(67294);var n=r(3905),a=r(53787),o=r(50551);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const c={id:"create-project",title:"3. Create your refine project",tutorial:{prev:"3.xx.xx/tutorial/getting-started/{preferredUI}/prepare-env",next:"3.xx.xx/tutorial/getting-started/{preferredUI}/generate-crud-pages"}},p=void 0,s={unversionedId:"tutorial/getting-started/chakra-ui/create-project",id:"version-3.xx.xx/tutorial/getting-started/chakra-ui/create-project",title:"3. Create your refine project",description:"Launch the refine CLI setup",source:"@site/versioned_docs/version-3.xx.xx/tutorial/1-getting-started/chakra-ui/2-create-project.md",sourceDirName:"tutorial/1-getting-started/chakra-ui",slug:"/tutorial/getting-started/chakra-ui/create-project",permalink:"/docs/3.xx.xx/tutorial/getting-started/chakra-ui/create-project",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/tutorial/1-getting-started/chakra-ui/2-create-project.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1711376487,formattedLastUpdatedAt:"Mar 25, 2024",sidebarPosition:2,frontMatter:{id:"create-project",title:"3. Create your refine project",tutorial:{prev:"3.xx.xx/tutorial/getting-started/{preferredUI}/prepare-env",next:"3.xx.xx/tutorial/getting-started/{preferredUI}/generate-crud-pages"}}},d={},f=[{value:"Launch the refine CLI setup",id:"launch-the-refine-cli-setup",level:2},{value:"Open your project in VS Code",id:"open-your-project-in-vs-code",level:3},{value:"Running the dev server",id:"running-the-dev-server",level:3},{value:"Viewing a preview of your app",id:"viewing-a-preview-of-your-app",level:3}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},h=m("DocThumbsUpDownFeedbackWidget"),y=m("CreateRefineAppCommand"),b=m("Checklist"),v=m("ChecklistItem"),g={toc:f};function k(e){var{components:t}=e,r=u(e,["components"]);return(0,n.kt)("wrapper",l(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){i(e,t,r[t])}))}return e}({},g,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"launch-the-refine-cli-setup"},"Launch the refine CLI setup"),(0,n.kt)(h,{id:"launch-the-refine-cli-setup",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.kt)("p",null,"The easiest way to create a new project is to use the ",(0,n.kt)("strong",{parentName:"p"},"refine CLI"),". This tool will help you get started quickly by generating a new project with a basic configuration and a folder structure that follows best practices."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Launch your terminal and type the following command using your preferred package manager:")),(0,n.kt)(y,{args:"-o refine-chakra-ui tutorial",mdxType:"CreateRefineAppCommand"}),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Confirm ",(0,n.kt)("inlineCode",{parentName:"p"},"y")," to installation of ",(0,n.kt)("inlineCode",{parentName:"p"},"create-refine-app"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The ",(0,n.kt)("inlineCode",{parentName:"p"},"-o refine-chakra-ui")," flag in the command above tells the CLI to install the project with the ",(0,n.kt)("inlineCode",{parentName:"p"},"refine-chakra-ui")," preset. This preset selects some options for you in accordance with this tutorial."),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"We use a preset here to sync the tutorial content with the code. Outside of the tutorial, you can skip this flag and select your own options."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The CLI will ask if you agree to share your selection anonymously with the ",(0,n.kt)("strong",{parentName:"p"},"refine")," team. You can choose whatever you prefer."))),(0,n.kt)("p",null,"Once the installation wizard is finished, you can close this terminal window and open VS Code to continue your journey.")),(0,n.kt)("h3",{id:"open-your-project-in-vs-code"},"Open your project in VS Code"),(0,n.kt)(h,{id:"open-your-project-in-vs-code",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open Visual Studio Code and select the directory that was generated during your setup process.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Make sure the terminal is open and ready to run commands. You can open it by pressing ",(0,n.kt)("inlineCode",{parentName:"p"},"Ctrl + J"),"(Windows) or ",(0,n.kt)("inlineCode",{parentName:"p"},"Cmd \u2318 + J"),"(macOS)."))),(0,n.kt)("p",null,"For the rest of this tutorial, you can use the terminal within VS Code instead of your computer's terminal.")),(0,n.kt)("h3",{id:"running-the-dev-server"},"Running the dev server"),(0,n.kt)(h,{id:"running-the-dev-server",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.kt)("p",null,"To preview your project as a web page while you work on it, the project must be running in development (dev) mode."),(0,n.kt)("h4",null,"Start the dev server"),(0,n.kt)("p",null,"To start the dev server, run the following command in your terminal:"),(0,n.kt)(a.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm run dev\n"))),(0,n.kt)(o.Z,{value:"pnpm",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm run dev\n"))),(0,n.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yarn run dev\n")))),(0,n.kt)("p",null,"You should see confirmation in the terminal that the ",(0,n.kt)("strong",{parentName:"p"},"refine")," app is running in dev mode.")),(0,n.kt)("h3",{id:"viewing-a-preview-of-your-app"},"Viewing a preview of your app"),(0,n.kt)(h,{id:"viewing-a-preview-of-your-app",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.kt)("p",null,"Your project files contain all the code you need to run your website. To see a preview of your website in the browser:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on the ",(0,n.kt)("a",{href:"http://localhost:3000",rel:"noopener noreferrer nofollow"},"localhost:3000")," link in the terminal. This will open a new browser tab with your app running in dev mode.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You will be redirected to the welcome page as we have not added any pages yet."),(0,n.kt)("p",{parentName:"li"},"(",(0,n.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/tutorial/getting-started/chakra-ui/generate-crud-pages"},"Next section")," will guide you through adding pages to your app.)"))),(0,n.kt)("p",null,"Here's what you should see:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=450px url=http://localhost:3000",live:!0,previewOnly:!0,previewHeight:"450px",url:"http://localhost:3000"},'setInitialRoutes(["/"]);\n\nimport { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport {\n  ChakraProvider,\n  ErrorComponent,\n  Layout,\n  refineTheme,\n  ReadyPage,\n  useNotificationProvider,\n} from "@pankod/refine-chakra-ui";\n\nconst App = () => {\n  return (\n    <ChakraProvider theme={refineTheme}>\n      <Refine\n        notificationProvider={notificationProvider()}\n        routerProvider={routerProvider}\n        dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n        Layout={Layout}\n        ReadyPage={ReadyPage}\n        catchAll={<ErrorComponent />}\n      />\n    </ChakraProvider>\n  );\n};\n\nrender(<App />);\n')),(0,n.kt)(b,{mdxType:"Checklist"},(0,n.kt)(v,{id:"getting-started-chakra",mdxType:"ChecklistItem"},"I understood how to create a new project."),(0,n.kt)(v,{id:"getting-started-chakra-2",mdxType:"ChecklistItem"},"I run the dev server and previewed my app."))))}k.isMDXComponent=!0}}]);