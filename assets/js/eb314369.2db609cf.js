"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[60654],{58860:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>y});var o=n(37953);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(n),g=a,y=u["".concat(s,".").concat(g)]||u[g]||c[g]||r;return n?o.createElement(y,l(l({ref:t},d),{},{components:n})):o.createElement(y,l({ref:t},d))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},30310:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>p,toc:()=>u});n(37953);var o=n(58860);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={id:"useModal",title:"useModal",source:"packages/core/src/hooks/modal/useModal/index.tsx"},s=void 0,p={unversionedId:"api-reference/core/hooks/ui/useModal",id:"version-3.xx.xx/api-reference/core/hooks/ui/useModal",title:"useModal",description:"useModal hook allows you to manage a modal. Since it is designed as headless, it returns the show and close functions, and the visible state. It expects you to handle the UI.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/ui/useModal.md",sourceDirName:"api-reference/core/hooks/ui",slug:"/api-reference/core/hooks/ui/useModal",permalink:"/docs/3.xx.xx/api-reference/core/hooks/ui/useModal",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/hooks/ui/useModal.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1720617044,formattedLastUpdatedAt:"Jul 10, 2024",frontMatter:{id:"useModal",title:"useModal",source:"packages/core/src/hooks/modal/useModal/index.tsx"},sidebar:"someSidebar",previous:{title:"useTranslate",permalink:"/docs/3.xx.xx/api-reference/core/hooks/translate/useTranslate"},next:{title:"useMenu",permalink:"/docs/3.xx.xx/api-reference/core/hooks/ui/useMenu"}},d={},u=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>defaultVisible</code>",id:"defaultvisible",level:3},{value:"Return Values",id:"return-values",level:2},{value:"<code>visible</code>",id:"visible",level:3},{value:"<code>show</code>",id:"show",level:3},{value:"<code>close</code>",id:"close",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3},{value:"Return Value",id:"return-value",level:3},{value:"Example",id:"example",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.yg)("div",t)},g=c("DocThumbsUpDownFeedbackWidget"),y=c("PropsTable"),m=c("CodeSandboxExample"),h={toc:u},b="wrapper";function f(e){var{components:t}=e,n=l(e,["components"]);return(0,o.yg)(b,r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){a(e,t,n[t])}))}return e}({},h,n),{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"useModal")," hook allows you to manage a modal. Since it is designed as headless, it returns the ",(0,o.yg)("inlineCode",{parentName:"p"},"show")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"close")," functions, and the ",(0,o.yg)("inlineCode",{parentName:"p"},"visible")," state. It expects you to handle the UI."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ts"},"const { show, close, visible } = useModal();\n")),(0,o.yg)("p",null,"You can use ",(0,o.yg)("inlineCode",{parentName:"p"},"visible")," state to show or hide the modal. The ",(0,o.yg)("inlineCode",{parentName:"p"},"show")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"close")," functions allow changing the ",(0,o.yg)("inlineCode",{parentName:"p"},"visible")," state. It does not provide any functionality besides this. You can use this hook anywhere."),(0,o.yg)("h2",{id:"basic-usage"},"Basic Usage"),(0,o.yg)(g,{id:"basic-usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"Let's see an example:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/posts/list.tsx"',title:'"src/pages/posts/list.tsx"'},'import {\n    // highlight-next-line\n    useModal,\n} from "@pankod/refine-core";\n\nexport const PostList: React.FC = () => {\n    // highlight-next-line\n    const { visible, show, close } = useModal();\n\n    return (\n        <>\n            // highlight-start\n            <button onClick={show}>Show Modal</button>\n            {visible && (\n                <YourModalComponent>\n                    <p>Dummy Modal Content</p>\n                    <button onClick={close}>Close Modal</button>\n                </YourModalComponent>\n            )}\n            // highlight-end\n        </>\n    );\n};\n')),(0,o.yg)("p",null,"Here, we show a button somewhere on the page and use ",(0,o.yg)("inlineCode",{parentName:"p"},"show")," on its ",(0,o.yg)("inlineCode",{parentName:"p"},"onClick")," callback to trigger the opening of the ",(0,o.yg)("inlineCode",{parentName:"p"},"<YourModalComponent>"),". When the user clicks on the button, the ",(0,o.yg)("inlineCode",{parentName:"p"},"<YourModalComponent>")," appears."),(0,o.yg)("p",null,"We also created a ",(0,o.yg)("inlineCode",{parentName:"p"},"<button>")," to close the ",(0,o.yg)("inlineCode",{parentName:"p"},"<YourModalComponent>")," and gave the onClick function ",(0,o.yg)("inlineCode",{parentName:"p"},"close"),", the modal dialog will be closed. We do this to demonstrate ",(0,o.yg)("inlineCode",{parentName:"p"},"close")," function.")),(0,o.yg)("h2",{id:"properties"},"Properties"),(0,o.yg)("h3",{id:"defaultvisible"},(0,o.yg)("inlineCode",{parentName:"h3"},"defaultVisible")),(0,o.yg)(g,{id:"defaultvisible",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Default: ",(0,o.yg)("inlineCode",{parentName:"p"},"false"))),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"defaultVisible")," is a boolean value that determines whether the modal is visible by default."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},"useModal({\n    defaultVisible: true,\n});\n"))),(0,o.yg)("h2",{id:"return-values"},"Return Values"),(0,o.yg)("h3",{id:"visible"},(0,o.yg)("inlineCode",{parentName:"h3"},"visible")),(0,o.yg)(g,{id:"visible",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"Visible state of the modal.")),(0,o.yg)("h3",{id:"show"},(0,o.yg)("inlineCode",{parentName:"h3"},"show")),(0,o.yg)(g,{id:"show",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"A function that can change the ",(0,o.yg)("inlineCode",{parentName:"p"},"visible")," state to ",(0,o.yg)("inlineCode",{parentName:"p"},"true"),".")),(0,o.yg)("h3",{id:"close"},(0,o.yg)("inlineCode",{parentName:"h3"},"close")),(0,o.yg)(g,{id:"close",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"A function that can change the ",(0,o.yg)("inlineCode",{parentName:"p"},"visible")," state to ",(0,o.yg)("inlineCode",{parentName:"p"},"false"),".")),(0,o.yg)("h2",{id:"api-reference"},"API Reference"),(0,o.yg)("h3",{id:"properties-1"},"Properties"),(0,o.yg)(g,{id:"properties-1",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)(y,{module:"@pankod/refine-core/useModal",mdxType:"PropsTable"})),(0,o.yg)("h3",{id:"return-value"},"Return Value"),(0,o.yg)(g,{id:"return-value",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"Key"),(0,o.yg)("th",{parentName:"tr",align:null},"Description"),(0,o.yg)("th",{parentName:"tr",align:null},"Type"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"visible"),(0,o.yg)("td",{parentName:"tr",align:null},"Returns the ",(0,o.yg)("inlineCode",{parentName:"td"},"visible")," state of the modal."),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"boolean"))),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"show"),(0,o.yg)("td",{parentName:"tr",align:null},"A function that can open the modal."),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"() => void"))),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"close"),(0,o.yg)("td",{parentName:"tr",align:null},"A function that can close the modal."),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"() => void")))))),(0,o.yg)("h2",{id:"example"},"Example"),(0,o.yg)(g,{id:"example",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)(m,{path:"core-use-modal",mdxType:"CodeSandboxExample"})))}f.isMDXComponent=!0}}]);