"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[56929],{58860:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>h});var r=n(37953);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(h,a(a({ref:t},c),{},{components:n})):r.createElement(h,a({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},83133:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>m});n(37953);var r=n(58860);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const l={title:"How to Import CSV File with React",description:"In this guide, I will show you how to import CSV files using React and JavaScript.",slug:"how-to-import-csv",authors:"melih",tags:["javascript","react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/placeholder.png",hide_table_of_contents:!1},s=void 0,p={permalink:"/blog/how-to-import-csv",source:"@site/blog/2022-01-18-csv-import.md",title:"How to Import CSV File with React",description:"In this guide, I will show you how to import CSV files using React and JavaScript.",date:"2022-01-18T00:00:00.000Z",formattedDate:"January 18, 2022",tags:[{label:"javascript",permalink:"/blog/tags/javascript"},{label:"react",permalink:"/blog/tags/react"}],readingTime:4.365,hasTruncateMarker:!0,authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],frontMatter:{title:"How to Import CSV File with React",description:"In this guide, I will show you how to import CSV files using React and JavaScript.",slug:"how-to-import-csv",authors:"melih",tags:["javascript","react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/placeholder.png",hide_table_of_contents:!1},prevItem:{title:"Top React JS Frameworks Every Developer Should Know",permalink:"/blog/best-react-frameworks"},nextItem:{title:"How to Multipart File Upload Using FormData with HTML",permalink:"/blog/how-to-multipart-upload"},relatedPosts:[{title:"Build internal tools using Low-Code with Refine, React-based framework",description:"Why you should be using low-code app Refine to build internal tools? Learn how to build low-code apps using Refine, React and Ant Design.",permalink:"/blog/build-internal-tools-using-low-code-with-refine",formattedDate:"February 21, 2022",authors:[{name:"Salih \xd6zdemir",title:"Software Developer",url:"https://github.com/salihozdemir",imageURL:"https://github.com/salihozdemir.png",key:"salih"}],readingTime:9.65,date:"2022-02-21T00:00:00.000Z"},{title:"Memoization in React - How useCallback Works",description:"Improve app performance with React useCallback() hook.",permalink:"/blog/react-usecallback-guide",formattedDate:"January 25, 2024",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:8.745,date:"2024-01-25T00:00:00.000Z"},{title:"A Quick Start Guide to React Suspense",description:"We will discuss how React Suspense works and common use cases",permalink:"/blog/react-suspense-guide",formattedDate:"February 5, 2024",authors:[{name:"Joel Adewole",title:"Web Developer",url:"https://github.com/wolz-codelife",github:"https://github.com/wolz-codelife",linkedin:"https://linkedin.com/in/wolz-codelife",imageURL:"https://github.com/wolz-CODElife.png",key:"joel_adewole"}],readingTime:8.635,date:"2024-02-05T00:00:00.000Z"}],authorPosts:[{title:"How to Multipart File Upload Using FormData with React Hook Form",description:"In this guide, I'm going to show you how to multipart files upload with using React Hook Form",permalink:"/blog/how-to-multipart-file-upload-with-react-hook-form",formattedDate:"March 29, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:7.06,date:"2022-03-29T00:00:00.000Z"},{title:"Develop your Own Customizable Invoice Generator with Refine and Strapi | Part I",description:"Looking for an invoice generator? Try out Refine. With our custom interface, you can build your own invoice in minutes! Learn more here.",permalink:"/blog/refine-react-admin-invoice-generator",formattedDate:"February 22, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:11.21,date:"2022-02-22T00:00:00.000Z"},{title:"ReactJS Frameworks You Should Know Before Start Developing B2B/Internal Application",description:"We have listed Open source ReactJS frameworks that will help and speed you up while developing internal-tool applications.",permalink:"/blog/best-internal-tool-react-frameworks",formattedDate:"March 16, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:4.115,date:"2022-03-16T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},m=[{value:"Example",id:"example",level:2},{value:"Live Codesandbox Example",id:"live-codesandbox-example",level:2},{value:"How to CSV Import with Refine?",id:"how-to-csv-import-with-refine",level:2},{value:"Refine CSV Import Usage",id:"refine-csv-import-usage",level:2},{value:"Example",id:"example-1",level:2}],u={toc:m},d="wrapper";function h(e){var{components:t}=e,n=a(e,["components"]);return(0,r.yg)(d,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},u,n),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"This post was created using version 3.x.x of ",(0,r.yg)("strong",{parentName:"p"},"Refine"),". Although we plan to update it with the latest version of ",(0,r.yg)("strong",{parentName:"p"},"Refine")," as soon as possible, you can still benefit from the post in the meantime."),(0,r.yg)("p",{parentName:"admonition"},"You should know that ",(0,r.yg)("strong",{parentName:"p"},"Refine")," version 4.x.x is backward compatible with version 3.x.x, so there is no need to worry. If you want to see the differences between the two versions, check out the ",(0,r.yg)("a",{parentName:"p",href:"https://refine.dev/docs/migration-guide/"},"migration guide"),"."),(0,r.yg)("p",{parentName:"admonition"},"Just be aware that the source code example in this post have been updated to version 4.x.x.")),(0,r.yg)("p",null,"In this guide, we will learn how to import any CSV file received from the user with React. Our application will consist of two parts. We will create a form for the user to select a file. Next, we will do some operations with JavaScript to be able to view this CSV file. Let's start with our example."),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("p",null,"First, let's create a ",(0,r.yg)("a",{parentName:"p",href:"https://tr.reactjs.org/docs/forms.html"},"Form")," in React so that the user can upload a CSV file."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.js"',title:'"App.js"'},'function App() {\n  return (\n    <div style={{ textAlign: "center" }}>\n      <h1>REACTJS CSV IMPORT EXAMPLE </h1>\n      <form>\n        //highlight-start\n        <input type={"file"} accept={".csv"} />\n        //highlight-end\n        <button>IMPORT CSV</button>\n      </form>\n    </div>\n  );\n}\n')),(0,r.yg)("p",null,"We created a simple form and our input items. With the accept feature of the input element, we specify that the format of the file can only be CSV. Now, let's load and read the CSV file selected by the user with ",(0,r.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/FileReader"},"FileReader"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'import React, { useState } from "react";\n\nfunction App() {\n  const [file, setFile] = useState();\n\n  const fileReader = new FileReader();\n\n  const handleOnChange = (e) => {\n    setFile(e.target.files[0]);\n  };\n\n  const handleOnSubmit = (e) => {\n    e.preventDefault();\n\n    if (file) {\n      fileReader.onload = function (event) {\n        const csvOutput = event.target.result;\n      };\n\n      fileReader.readAsText(file);\n    }\n  };\n\n  return (\n    <div style={{ textAlign: "center" }}>\n      <h1>REACTJS CSV IMPORT EXAMPLE </h1>\n      <form>\n        <input\n          type={"file"}\n          id={"csvFileInput"}\n          accept={".csv"}\n          onChange={handleOnChange}\n        />\n\n        <button\n          onClick={(e) => {\n            handleOnSubmit(e);\n          }}\n        >\n          IMPORT CSV\n        </button>\n      </form>\n    </div>\n  );\n}\n')),(0,r.yg)("p",null,"Here, once the user-selected file has been successfully uploaded, we can process and display the file. Now let's load a sample CSV file and see it output on our console."),(0,r.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-01-18-csv-import/console.gif",alt:"console_csv_output"}),(0,r.yg)("br",null),(0,r.yg)("p",null,"As you can see, we can now read a selected CSV file. We can convert this file, which we read as a plain text type, into an Array of Object with JavaScript and place it inside a Table element."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'function App() {\n import React, { useState } from "react";\n\nfunction App() {\n  const [file, setFile] = useState();\n  const [array, setArray] = useState([]);\n\n  const fileReader = new FileReader();\n\n  const handleOnChange = (e) => {\n    setFile(e.target.files[0]);\n  };\n\n  const csvFileToArray = string => {\n    const csvHeader = string.slice(0, string.indexOf("\\n")).split(",");\n    const csvRows = string.slice(string.indexOf("\\n") + 1).split("\\n");\n\n    const array = csvRows.map(i => {\n      const values = i.split(",");\n      const obj = csvHeader.reduce((object, header, index) => {\n        object[header] = values[index];\n        return object;\n      }, {});\n      return obj;\n    });\n\n    setArray(array);\n  };\n\n  const handleOnSubmit = (e) => {\n    e.preventDefault();\n\n    if (file) {\n      fileReader.onload = function (event) {\n        const text = event.target.result;\n        csvFileToArray(text);\n      };\n\n      fileReader.readAsText(file);\n    }\n  };\n\n  const headerKeys = Object.keys(Object.assign({}, ...array));\n\n  return (\n    <div style={{ textAlign: "center" }}>\n      <h1>REACTJS CSV IMPORT EXAMPLE </h1>\n      <form>\n        <input\n          type={"file"}\n          id={"csvFileInput"}\n          accept={".csv"}\n          onChange={handleOnChange}\n        />\n\n        <button\n          onClick={(e) => {\n            handleOnSubmit(e);\n          }}\n        >\n          IMPORT CSV\n        </button>\n      </form>\n\n      <br />\n\n      <table>\n        <thead>\n          <tr key={"header"}>\n            {headerKeys.map((key) => (\n              <th>{key}</th>\n            ))}\n          </tr>\n        </thead>\n\n        <tbody>\n          {array.map((item) => (\n            <tr key={item.id}>\n              {Object.values(item).map((val) => (\n                <td>{val}</td>\n              ))}\n            </tr>\n          ))}\n        </tbody>\n      </table>\n    </div>\n  );\n}\n....\n')),(0,r.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-01-18-csv-import/overview.gif",alt:"overview_csv"}),(0,r.yg)("br",null),(0,r.yg)("p",null,"We formatted the CSV file that came in plain text format, using Javascript ",(0,r.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice"},"slice")," and ",(0,r.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split"},"split")," methods, and created two separate array. Then we converted Header and Rows arrays to Array of Object format as Key, Value."),(0,r.yg)("h2",{id:"live-codesandbox-example"},"Live Codesandbox Example"),(0,r.yg)("iframe",{src:"https://codesandbox.io/embed/csv-import-example-hw3ne?autoresize=1&fontsize=14&theme=dark&view=preview",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"csv-import-example",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,r.yg)("h2",{id:"how-to-csv-import-with-refine"},"How to CSV Import with Refine?"),(0,r.yg)("p",null,"The CSV import with ",(0,r.yg)("strong",{parentName:"p"},"Refine")," is very simple and out-of-the-box feature. How to use it is explained step by step in the guide and example."),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://refine.dev/docs/guides-and-concepts/import-export/csv-import/"},"Refer to the ",(0,r.yg)("strong",{parentName:"a"},"Refine")," CSV import guide for more information. \u2192")),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine/blob/master/examples/import-export-antd/src/pages/posts/list.tsx#L32"},"View Source")),(0,r.yg)("h2",{id:"refine-csv-import-usage"},"Refine CSV Import Usage"),(0,r.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-01-18-csv-import/importing.gif",alt:"importing_csv"}),(0,r.yg)("br",null),(0,r.yg)("p",null,"Importing CSV files is simple and fast using the ",(0,r.yg)("a",{parentName:"p",href:"https://refine.dev/docs/core/hooks/import-export/useImport/"},(0,r.yg)("inlineCode",{parentName:"a"},"useImport"))," hook and ",(0,r.yg)("a",{parentName:"p",href:"https://refine.dev/docs/ui-frameworks/antd/components/buttons/import-button/"},(0,r.yg)("inlineCode",{parentName:"a"},"ImportButton"))," provided by ",(0,r.yg)("strong",{parentName:"p"},"Refine"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'import {\n  List,\n  Table,\n  useTable,\n  //highlight-start\n  useImport,\n  ImportButton,\n  //highlight-end\n} from "@refinedev/antd";\n\nexport const PostList: React.FC = () => {\n  const { tableProps } = useTable<IPost>();\n\n  //highlight-start\n  const importProps = useImport<IPostFile>();\n  //highlight-end\n\n  return (\n    <List\n      pageHeaderProps={{\n        //highlight-start\n        extra: <ImportButton {...importProps} />,\n        //highlight-end\n      }}\n    >\n      <Table {...tableProps} rowKey="id">\n        <Table.Column dataIndex="id" title="ID" />\n        <Table.Column dataIndex="title" title="Title" />\n        <Table.Column dataIndex="status" title="Status" />\n      </Table>\n    </List>\n  );\n};\n\ninterface IPostFile {\n  title: string;\n  categoryId: string;\n}\ninterface IPost {\n  id: string;\n  title: string;\n  status: string;\n}\n')),(0,r.yg)("p",null,"You can also divide the data into chunk with the ",(0,r.yg)("inlineCode",{parentName:"p"},"batchSize")," option while performing the insertion process."),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://refine.dev/docs/core/hooks/import-export/useImport/#api-reference"},"Refer to the ",(0,r.yg)("strong",{parentName:"a"},"Refine")," CSV Import API References for more information. \u2192")),(0,r.yg)("h2",{id:"example-1"},"Example"),(0,r.yg)("iframe",{src:"https://codesandbox.io/embed/refine-import-export-example-4nneu?autoresize=1&fontsize=14&theme=dark&view=preview",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"refine-import-export-example",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}h.isMDXComponent=!0}}]);