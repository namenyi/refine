"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[23954],{58860:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>h});var a=t(37953);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),g=o,h=u["".concat(l,".").concat(g)]||u[g]||d[g]||i;return t?a.createElement(h,r(r({ref:n},c),{},{components:t})):a.createElement(h,r({ref:n},c))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},37715:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>u});t(37953);var a=t(58860);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function r(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const s={title:"Introduction to Next.js Link component with examples",description:"A guide for navigation between pages using Next.js Link",slug:"next-js-link-component",authors:"michael",tags:["nextjs"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-04-next-link/social-2.png",hide_table_of_contents:!1},l=void 0,p={permalink:"/blog/next-js-link-component",source:"@site/blog/2024-05-29-next-link.md",title:"Introduction to Next.js Link component with examples",description:"A guide for navigation between pages using Next.js Link",date:"2024-05-29T00:00:00.000Z",formattedDate:"May 29, 2024",tags:[{label:"nextjs",permalink:"/blog/tags/nextjs"}],readingTime:10.805,hasTruncateMarker:!1,authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],frontMatter:{title:"Introduction to Next.js Link component with examples",description:"A guide for navigation between pages using Next.js Link",slug:"next-js-link-component",authors:"michael",tags:["nextjs"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-04-next-link/social-2.png",hide_table_of_contents:!1},prevItem:{title:"Creating testable React applications with Playwright",permalink:"/blog/playwright-react"},nextItem:{title:"React useReducer Hook - The Basics",permalink:"/blog/react-usereducer"},relatedPosts:[{title:"Next.js 13.4's Server Actions and Data Fetching",description:"We'll delve into the Next.js alpha feature Server actions and data fetching techniques.",permalink:"/blog/next-js-server-actions-and-data-fetching",formattedDate:"August 7, 2024",authors:[{name:"Victor Uma",title:"Software Developer",imageURL:"https://github.com/uma-victor1.png",key:"victor_uma"}],readingTime:16.025,date:"2024-08-07T00:00:00.000Z"},{title:"How Next.js Redirects Work",description:"We'll examine the concept of URL redirection in Next.js and how redirects work.",permalink:"/blog/next-js-redirect",formattedDate:"July 30, 2024",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:11.49,date:"2024-07-30T00:00:00.000Z"},{title:"How to use Next.js API Routes?",description:"We will deep dive into Next.js API Routes with Dynamic Routes.",permalink:"/blog/next-js-api-routes",formattedDate:"July 3, 2024",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:15.875,date:"2024-07-03T00:00:00.000Z"}],authorPosts:[{title:"How to use Next.js API Routes?",description:"We will deep dive into Next.js API Routes with Dynamic Routes.",permalink:"/blog/next-js-api-routes",formattedDate:"July 3, 2024",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:15.875,date:"2024-07-03T00:00:00.000Z"},{title:"Next.js environment variables",description:"We will take a closer look at environment variables in Next.js",permalink:"/blog/next-js-environment-variables",formattedDate:"September 7, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:6.465,date:"2022-09-07T00:00:00.000Z"},{title:"Nextjs image optimization with examples",description:"Built-in image optimization using the next image component",permalink:"/blog/using-next-image",formattedDate:"June 5, 2024",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:15.81,date:"2024-06-05T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},u=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Introducing the <code>&lt;Link/&gt;</code> component",id:"introducing-the-link-component",level:2},{value:"The Link component props",id:"the-link-component-props",level:2},{value:"<strong>Required props</strong>",id:"required-props",level:3},{value:"<code>href</code>",id:"href",level:3},{value:"<strong>Optional props</strong>",id:"optional-props",level:3},{value:"<code>as</code>",id:"as",level:3},{value:"<code>passHref</code>",id:"passhref",level:3},{value:"<code>prefetch</code>",id:"prefetch",level:3},{value:"<code>replace</code>",id:"replace",level:3},{value:"<code>scroll</code>",id:"scroll",level:3},{value:"Disable scroll to top",id:"disable-scroll-to-top",level:4},{value:"Scroll to a specific section in a webpage using hash ids",id:"scroll-to-a-specific-section-in-a-webpage-using-hash-ids",level:4},{value:"<code>locale</code>",id:"locale",level:3},{value:"<code>shallow</code>",id:"shallow",level:3},{value:"What are the benefits of using the Next.js Link component?",id:"what-are-the-benefits-of-using-the-nextjs-link-component",level:2},{value:"The advanced uses of the Next.js Link component",id:"the-advanced-uses-of-the-nextjs-link-component",level:2},{value:"Nested Links",id:"nested-links",level:3},{value:"Dynamic Routes",id:"dynamic-routes",level:2},{value:"Custom Components",id:"custom-components",level:2},{value:"Accessibility Considerations of Next.js Link",id:"accessibility-considerations-of-nextjs-link",level:2},{value:"ARIA attributes",id:"aria-attributes",level:3},{value:"Follow Focus Management",id:"follow-focus-management",level:3},{value:"Conclusion",id:"conclusion",level:2}],d={toc:u},g="wrapper";function h(e){var{components:n}=e,t=r(e,["components"]);return(0,a.yg)(g,i(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){o(e,n,t[n])}))}return e}({},d,t),{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("em",{parentName:"strong"},"This article was last updated on May 29, 2024 to add new sections on advanced usage, accessibility and benefit consideration on Next.js Link Component"))),(0,a.yg)("h2",{id:"introduction"},"Introduction"),(0,a.yg)("p",null,"If you have built websites and applications on the web, then you're very likely to have used a common method for navigation. Traditionally, navigation is often achieved with the HTML anchor element (",(0,a.yg)("inlineCode",{parentName:"p"},"<a></a>"),"). The anchor element is primarily used for navigating within and outside websites and webpages, and it serves its purpose pretty well."),(0,a.yg)("p",null,"In this article, we'll introduce you to Next.js ",(0,a.yg)("inlineCode",{parentName:"p"},"<Link/>")," component, a similar method of navigation to the native anchor element but with additional built-in features for optimization. The ",(0,a.yg)("strong",{parentName:"p"},"Next.js Link")," component has additional benefits, such as options to customize navigation behavior through props and improved performance and SEO metrics."),(0,a.yg)("p",null,"Steps we'll cover:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#introducing-the-link-component"},"Introducing the ",(0,a.yg)("inlineCode",{parentName:"a"},"<Link/>")," component")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#the-link-component-props"},"The Link component props")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#what-are-the-benefits-of-using-the-nextjs-link-component"},"What are the benefits of using the Next.js Link component?")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#the-advanced-uses-of-the-nextjs-link-component"},"The advanced uses of the Next.js Link component"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#nested-links"},"Nested Links")))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#dynamic-routes"},"Dynamic Routes")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#custom-components"},"Custom Components")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#accessibility-considerations-of-nextjs-link"},"Accessibility Considerations of Next.js Link"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#aria-attributes"},"ARIA attributes")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#follow-focus-management"},"Follow Focus Management"))))),(0,a.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.yg)("p",null,"You'll need a good knowledge of writing and understanding code in JavaScript and React to grasp this article."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"You'll also need a next.js project to get started. Visit ",(0,a.yg)("a",{parentName:"li",href:"https://nextjs.org/docs"},"here")," to see how to create a next.js app."),(0,a.yg)("li",{parentName:"ul"},"Next, run ",(0,a.yg)("inlineCode",{parentName:"li"},"npm install styled-components")," in the terminal to install styled-components. We'll use it for styling in this tutorial.")),(0,a.yg)("h2",{id:"introducing-the-link-component"},"Introducing the ",(0,a.yg)("inlineCode",{parentName:"h2"},"<Link/>")," component"),(0,a.yg)("p",null,"The Link component provides a method of client-side navigation ",(0,a.yg)("em",{parentName:"p"},"within")," Next.js applications. It's recommended over the native anchor tag because it has many built-in features that help improve application performance and SEO ranking. Some of these features include preloading page content and faster navigation since routing is handled with JavaScript."),(0,a.yg)("p",null,"In addition, client-side navigation with the Link component does not involve full page reloads, which is very significant in application performance and user experience."),(0,a.yg)("p",null,"The Link component is exported from the ",(0,a.yg)("inlineCode",{parentName:"p"},"next/link")," core module. Here's a basic demo showing its usage:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"import Link from 'next/link'\n\nfunction Home () {\n    return (\n        <>\n            <h1> Visit our About page</>\n            <Link href=\"/about\"> About Us </Link>\n        </>\n    )\n}\n\nexport default Home\n")),(0,a.yg)("h2",{id:"the-link-component-props"},"The Link component props"),(0,a.yg)("h3",{id:"required-props"},(0,a.yg)("strong",{parentName:"h3"},"Required props")),(0,a.yg)("h3",{id:"href"},(0,a.yg)("inlineCode",{parentName:"h3"},"href")),(0,a.yg)("p",null,"The ",(0,a.yg)("strong",{parentName:"p"},"Next.js Link")," component requires a single mandatory prop: ",(0,a.yg)("inlineCode",{parentName:"p"},"href"),"."),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"href")," specifies the path or URL to navigate to. This could be an absolute URL, a relative URL, or a URL object."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Absolute URL")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},'<Link href="https://nextjs.org/docs"> Read the Docs </Link>\n')),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Relative URL")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},'<Link href="/about"> About Us </Link>\n')),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"URL objects")),(0,a.yg)("p",null,"With a URL object, we can resolve URLs using strings and parameters passed as an object to the ",(0,a.yg)("strong",{parentName:"p"},"Next.js Link")," component. Here's a demo showing how to use it in the Link component."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'<Link\n  href={{\n    pathname: "/products",\n    query: { product: "1" },\n  }}\n>\n  <a>Search for product 1</a>\n</Link>\n')),(0,a.yg)("p",null,"The above example will resolve the ",(0,a.yg)("inlineCode",{parentName:"p"},"href")," value into: ",(0,a.yg)("inlineCode",{parentName:"p"},"/products/?product=1"),"."),(0,a.yg)("h3",{id:"optional-props"},(0,a.yg)("strong",{parentName:"h3"},"Optional props")),(0,a.yg)("h3",{id:"as"},(0,a.yg)("inlineCode",{parentName:"h3"},"as")),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"as")," prop is used with ",(0,a.yg)("inlineCode",{parentName:"p"},"href")," when using dynamic routes. It specifies a link decorator, which provides additional information about a URL that can be used in analytics (such as ads and affiliate programs) and tracking webpage performance."),(0,a.yg)("p",null,"The decorator usually appears after a ",(0,a.yg)("inlineCode",{parentName:"p"},"'?'")," in the URL of a webpage and does not change the destination of the URL. An example of a URL with link decoration is ",(0,a.yg)("inlineCode",{parentName:"p"},"'http://www.refine.com/blog/article?referrer_source=newsletter'"),"."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Example")),(0,a.yg)("p",null,"Create new folders and files in the ",(0,a.yg)("inlineCode",{parentName:"p"},"pages")," folder of your application to look like below:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-text"},"\ud83d\udce6pages\n \u2523 \ud83d\udcc2api\n \u2503 \u2517 \ud83d\udcdchello.js\n \u2523 \ud83d\udcc2products\n \u2503 \u2523 \ud83d\udcdcindex.js\n \u2503 \u2517 \ud83d\udcdc[product].js\n \u2523 \ud83d\udcdcindex.js\n \u2517 \ud83d\udcdc_app.\n")),(0,a.yg)("p",null,"Next, add the following code to ",(0,a.yg)("inlineCode",{parentName:"p"},"pages/products/index.js"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/products/index.js"',title:'"pages/products/index.js"'},'import React from "react";\nimport Link from "next/link";\n\nconst ProductsList = () => {\n  const productIDs = ["1", "2", "3"];\n  return (\n    <>\n      <div>\n        <h1>Products List</h1>\n      </div>\n\n      {productIDs.map((product, key) => (\n        <Link\n          href="/products/[product]"\n          as={`products/${product}/?referrer_source=newsletter`}\n          key={key}\n        >\n          <a>\n            <h1>{product}</h1>\n            <p>Learn more about product {product}</p>\n          </a>\n        </Link>\n      ))}\n    </>\n  );\n};\n\nexport default ProductsList;\n')),(0,a.yg)("p",null,"And in ",(0,a.yg)("inlineCode",{parentName:"p"},"pages/products/[product].js"),", add the following code:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/products/[product].js"',title:'"pages/products/[product].js"'},'import React from "react";\nimport Link from "next/link";\nimport { useRouter } from "next/router";\n\nconst Product = () => {\n  const router = useRouter();\n  const productID = router.query.product;\n  return (\n    <>\n      <h1>\n        <Link href="/products">\n          <a>Go back to Products</a>\n        </Link>\n      </h1>\n      <div>\n        <h5>Product {productID} Details Page</h5>\n      </div>\n    </>\n  );\n};\n\nexport default Product;\n')),(0,a.yg)("p",null,"If you navigate to ",(0,a.yg)("inlineCode",{parentName:"p"},"localhost:3000/products")," you should see the page rendered like so:"),(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-04-next-link/product.png",alt:"product"}),(0,a.yg)("br",null),(0,a.yg)("p",null,"Now, if you click on any of the products, you'll be taken to the details page of each product which is a dynamic route."),(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-04-next-link/demo.gif",alt:"demo"}),(0,a.yg)("br",null),(0,a.yg)("p",null,"In the above demo we can see the URL of every product contains a link decorator, ",(0,a.yg)("inlineCode",{parentName:"p"},"?referrer_source=newsletter"),", which does not affect the link's destination."),(0,a.yg)("h3",{id:"passhref"},(0,a.yg)("inlineCode",{parentName:"h3"},"passHref")),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"passHref")," prop forces the ",(0,a.yg)("strong",{parentName:"p"},"Next.js Link")," component to send the ",(0,a.yg)("inlineCode",{parentName:"p"},"href")," prop to its child. This is important when the child of ",(0,a.yg)("inlineCode",{parentName:"p"},"</Link>")," is a custom component that wraps an anchor tag (",(0,a.yg)("inlineCode",{parentName:"p"},"<a>"),")."),(0,a.yg)("p",null,"Not adding the ",(0,a.yg)("inlineCode",{parentName:"p"},"passHref")," prop in this scenario will hurt SEO and accessibility because the ",(0,a.yg)("inlineCode",{parentName:"p"},"<a>")," tag will not have the ",(0,a.yg)("inlineCode",{parentName:"p"},"href")," property. It is disabled by default."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Example")),(0,a.yg)("p",null,"Edit the code in ",(0,a.yg)("inlineCode",{parentName:"p"},"pages/products/index.js")," to the following:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-diff",metastring:'title="pages/products/index.js"',title:'"pages/products/index.js"'},'  import React from "react";\n  import Link from "next/link";\n+ import styled from \'styled-components\'\n\n\n+ const CustomLink = styled.a`\n+ color: red;\n+ font-size: 30px;\n+ `\n\nconst ProductsList = () => {\n  const productIDs = ["1", "2", "3"];\n  return (\n    <>\n      <div>\n+        <NavLink href=\'/\' name=\'Home\'/>\n        <h1>Products List</h1>\n      </div>\n\n      {productIDs.map((product, key) => (\n        <Link\n          href="/products/[product]"\n          as={`products/${product}/?referrer_source=newsletter`}\n          key={key}\n        >\n          <a>\n            <h1>{product}</h1>\n            <p>Learn more about product {product}</p>\n          </a>\n        </Link>\n      ))}\n    </>\n  );\n};\n\n+ const NavLink = ({ href, name }) => {\n+  return (\n+    <Link href={href} passHref>\n+      <CustomLink>{name}</CustomLink>\n+    </Link>\n+ )\n+ };\n\nexport default ProductsList;\n')),(0,a.yg)("p",null,"Now if you navigate to ",(0,a.yg)("inlineCode",{parentName:"p"},"localhost:8000")," a custom red link should be displayed like below:"),(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-04-next-link/custom.png",alt:"custom"}),(0,a.yg)("br",null),(0,a.yg)("h3",{id:"prefetch"},(0,a.yg)("inlineCode",{parentName:"h3"},"prefetch")),(0,a.yg)("p",null,"Preloading page content can drastically improve application performance. The ",(0,a.yg)("inlineCode",{parentName:"p"},"prefetch")," prop allows the preloading of pages in the background and is enabled by default in the Next.js Link component. It only works in production, and if you wish to disable preloading, you can configure it like so:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'<Link href="/products" prefetch={false}>\n  <a>Click me!</a>\n</Link>\n')),(0,a.yg)("h3",{id:"replace"},(0,a.yg)("inlineCode",{parentName:"h3"},"replace")),(0,a.yg)("p",null,"The replace prop changes how navigation works by replacing the current history state instead of adding a new URL into the stack. This can be demonstrated by clicking on the ",(0,a.yg)("inlineCode",{parentName:"p"},"back")," button in the navigation bar in the browser."),(0,a.yg)("p",null,"Edit the content in ",(0,a.yg)("inlineCode",{parentName:"p"},"pages/index.js")," to the following:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/index.js"',title:'"pages/index.js"'},'import Head from "next/head";\nimport Image from "next/image";\nimport Link from "next/link";\nimport styles from "../styles/Home.module.css";\n\nexport default function Home() {\n  return (\n    <div className={styles.container}>\n      <Head>\n        <title>Create Next App</title>\n        <meta name="description" content="Generated by create next app" />\n        <link rel="icon" href="/favicon.ico" />\n      </Head>\n\n      <main className={styles.main}>\n        <h1 className={styles.title}>Introduction to next/link</h1>\n        <h1>\n          <Link href="/products">Go to products page</Link>\n        </h1>\n      </main>\n    </div>\n  );\n}\n')),(0,a.yg)("p",null,"The page should look like below:"),(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-04-next-link/home.png",alt:"home"}),(0,a.yg)("br",null),(0,a.yg)("p",null,"If you click on the ",(0,a.yg)("inlineCode",{parentName:"p"},"Go to products page")," link, watch how the application navigation works when we click on the back navigation button without the ",(0,a.yg)("inlineCode",{parentName:"p"},"replace")," prop in the GIF below."),(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-04-next-link/noreplace.gif",alt:"noreplace"}),(0,a.yg)("br",null),(0,a.yg)("p",null,"Next, find the part that contains the code below in ",(0,a.yg)("inlineCode",{parentName:"p"},"pages/products/index.js")," and add the ",(0,a.yg)("inlineCode",{parentName:"p"},"replace")," prop to it like so:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-diff",metastring:'title="pages/products/index.js"',title:'"pages/products/index.js"'},"...\n\n{productIDs.map((product, key) => (\n        <Link\n          href=\"/products/[product]\"\n          as={`products/${product}/?referrer_source=newsletter`}\n          key={key}\n+          replace={product === '3' ? true : false}\n        >\n          <a>\n            <h1>{product}</h1>\n            <p>Learn more about product {product}</p>\n          </a>\n        </Link>\n      ))}\n ...\n")),(0,a.yg)("p",null,"Now let's go back to the browser and see how the navigation works with ",(0,a.yg)("inlineCode",{parentName:"p"},"replace")," prop."),(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-04-next-link/withreplace.gif",alt:"withreplace"}),(0,a.yg)("br",null),(0,a.yg)("p",null,"As you can see in the GIF above, when we visited the product 3 details page and then clicked the back navigation button, instead of returning to the products page, we were taken to the home page instead."),(0,a.yg)("h3",{id:"scroll"},(0,a.yg)("inlineCode",{parentName:"h3"},"scroll")),(0,a.yg)("p",null,"Clicking on a link using the Link component will scroll to the top of the destination page by default. It's also possible to scroll to a specific section of the new page by using hash ids (the part of a URL after a ",(0,a.yg)("inlineCode",{parentName:"p"},"#"),"). You can disable the default behavior or hash ids by setting ",(0,a.yg)("inlineCode",{parentName:"p"},"scroll={false}")," on the Link component."),(0,a.yg)("h4",{id:"disable-scroll-to-top"},"Disable scroll to top"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},'<Link href="/blog/intro" scroll={false}>\n  <a>Disables scrolling to the top</a>\n</Link>\n')),(0,a.yg)("h4",{id:"scroll-to-a-specific-section-in-a-webpage-using-hash-ids"},"Scroll to a specific section in a webpage using hash ids"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},'<Link href="https://refine.dev/blog/mui-datagrid-refine/#material-ui-datagrid-component">\n  <a>Scroll to a specific section</a>\n</Link>\n')),(0,a.yg)("h3",{id:"locale"},(0,a.yg)("inlineCode",{parentName:"h3"},"locale")),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"locale")," prop is used to navigate users to different versions of a webpage based on the user's preferred locale (language and region). For example, we may have a blog that is read by English and French users, and we need to render the blog content in English for English users and in French for French users."),(0,a.yg)("p",null,"We can serve English or French users different versions of our webpage in their preferred language by configuring the ",(0,a.yg)("inlineCode",{parentName:"p"},"i18n")," object in ",(0,a.yg)("inlineCode",{parentName:"p"},"next.config.js"),". Read more about configuring locales ",(0,a.yg)("a",{parentName:"p",href:"https://nextjs.org/docs/advanced-features/i18n-routing"},"here"),"."),(0,a.yg)("h3",{id:"shallow"},(0,a.yg)("inlineCode",{parentName:"h3"},"shallow")),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"shallow")," props let us update the path of the current page without running any of Next.js data fetching methods (that is, ",(0,a.yg)("inlineCode",{parentName:"p"},"getStaticProps"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"getServerSideProps")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"getInitialProps"),"). The updated ",(0,a.yg)("inlineCode",{parentName:"p"},"pathname")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"query")," associated with the new URL can be accessed by the ",(0,a.yg)("inlineCode",{parentName:"p"},"router")," object provided by ",(0,a.yg)("a",{parentName:"p",href:"https://nextjs.org/docs/api-reference/next/router#userouter"},"useRouter")," or ",(0,a.yg)("a",{parentName:"p",href:"https://nextjs.org/docs/api-reference/next/router#withrouter"},"withRouter"),"."),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/vercel/next.js/blob/canary/examples/with-shallow-routing/pages/index.js"},"Here's")," a good example showing how to use shallow routing in your web pages."),(0,a.yg)("h2",{id:"what-are-the-benefits-of-using-the-nextjs-link-component"},"What are the benefits of using the Next.js Link component?"),(0,a.yg)("p",null,"Now, I want to discuss shortly a few benefits regarding Next.js's Link component. Among the number one benefits of working with a Link component are performance gains. Linked pages are prefetched in the background. The preloading provides very high-performance navigation with almost zero friction. It translates into SEO implementation when search engines quickly crawl and index the entire structural navigation flow."),(0,a.yg)("p",null,"The next feature pertaining to it is client-side navigation. It's unlike a traditional anchor tag, in which we can navigate without a complete page transition for state maintenance and a fast experience. In addition to this, these pages open in the background\u2014with links to the page that are wired with the Link component\u2014so when people navigate to such pages, the slow speed visible to people is not a barrier."),(0,a.yg)("p",null,"This feature combination gives the Next.js Link component an edge in using web apps for optimality in both performance and SEO."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'function Navigation() {\n  return (\n    <nav>\n      <Link href="/">\n        <a>Home</a>\n      </Link>\n      <Link href="/about">\n        <a>About</a>\n      </Link>\n      <Link href="/contact">\n        <a>Contact</a>\n      </Link>\n    </nav>\n  );\n}\n\nexport default Navigation;\n')),(0,a.yg)("h2",{id:"the-advanced-uses-of-the-nextjs-link-component"},"The advanced uses of the Next.js Link component"),(0,a.yg)("p",null,"Some other advanced uses of the Next.js Link component will include:"),(0,a.yg)("h3",{id:"nested-links"},"Nested Links"),(0,a.yg)("p",null,"Make nested links to retain complex navigation structures."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'function Sidebar() {\n  return (\n    <div>\n      <h2>Categories</h2>\n      <Link href="/category/technology">\n        <a>Technology</a>\n      </Link>\n      <Link href="/category/science">\n        <a>Science</a>\n      </Link>\n    </div>\n  );\n}\n\nexport default Sidebar;\n')),(0,a.yg)("h2",{id:"dynamic-routes"},"Dynamic Routes"),(0,a.yg)("p",null,"The Link can easily handle dynamic routes, hence beneficial for parameterized paths."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'// pages/post/[id].js\nimport { useRouter } from "next/router";\n\nfunction Post() {\n  const router = useRouter();\n  const { id } = router.query;\n\n  return <p>Post: {id}</p>;\n}\n\nexport default Post;\n\n// Linking to dynamic routes\nimport Link from "next/link";\n\nfunction HomePage() {\n  return (\n    <div>\n      <Link href="/post/[id]" as="/post/1">\n        <a>Go to Post 1</a>\n      </Link>\n      <Link href="/post/[id]" as="/post/2">\n        <a>Go to Post 2</a>\n      </Link>\n    </div>\n  );\n}\n\nexport default HomePage;\n')),(0,a.yg)("h2",{id:"custom-components"},"Custom Components"),(0,a.yg)("p",null,"We wrap the Link with custom components for more flexible designs."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import styled from "styled-components";\nimport Link from "next/link";\n\nconst CustomLink = styled.a`\n  color: red;\n  font-size: 20px;\n`;\n\nfunction HomePage() {\n  return (\n    <div>\n      <h1>Home</h1>\n      <Link href="/about" passHref>\n        <CustomLink>About Us</CustomLink>\n      </Link>\n    </div>\n  );\n}\n\nexport default HomePage;\n')),(0,a.yg)("h2",{id:"accessibility-considerations-of-nextjs-link"},"Accessibility Considerations of Next.js Link"),(0,a.yg)("h3",{id:"aria-attributes"},"ARIA attributes"),(0,a.yg)("p",null,"Ensure that the appropriate ARIA attributes are available for the links by which a person using a screen reader knows what the purpose of the link focused is. In some examples, you would need the attributes to be able to add a new attribute named aria-label describing what the purpose of that link is."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'<Link href="/about">\n  <a aria-label="Learn more about us on the About Page">About Us</a>\n</Link>\n')),(0,a.yg)("h3",{id:"follow-focus-management"},"Follow Focus Management"),(0,a.yg)("p",null,"After navigation, follow focus management for maximum enhancement."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'function Contact() {\n  return (\n    <div>\n      <h1>Contact Us</h1>\n      <Link href="/">\n        <a onFocus={() => console.log("Focused on Home link")}>Home</a>\n      </Link>\n    </div>\n  );\n}\n\nexport default Contact;\n')),(0,a.yg)("h2",{id:"conclusion"},"Conclusion"),(0,a.yg)("p",null,"The ",(0,a.yg)("strong",{parentName:"p"},"Next.js Link")," component simplifies client-side navigation, and we recommend using it over the native anchor element for routing in your next.js applications. In this article, you learned how to use ",(0,a.yg)("inlineCode",{parentName:"p"},"Link")," and configure its behavior using props to suit your use cases. You also learned how important concepts such as dynamic routes and URL objects work using the Link component."),(0,a.yg)("p",null,"We hope you found this article useful in getting started with next/link and client-side navigation in next.js. You can read the ",(0,a.yg)("strong",{parentName:"p"},"Next.js Link")," component docs ",(0,a.yg)("a",{parentName:"p",href:"https://nextjs.org/docs/api-reference/next/link"},"here")," for references and additional information."))}h.isMDXComponent=!0}}]);