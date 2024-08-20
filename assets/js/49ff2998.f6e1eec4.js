"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[74182],{58860:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>d});var a=n(37953);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),g=i,d=u["".concat(l,".").concat(g)]||u[g]||m[g]||o;return n?a.createElement(d,r(r({ref:t},p),{},{components:n})):a.createElement(d,r({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},991:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>u});n(37953);var a=n(58860);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const s={title:"Building a Complete React CRM App with Refine, Ant Design and GraphQL",description:"We'll explore the key features of our CRM app, the technologies we used.",slug:"react-crm-with-refine",authors:"necati",tags:["Refine","react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-02-refine-crm-overview/social.jpg",hide_table_of_contents:!1},l=void 0,c={permalink:"/blog/react-crm-with-refine",source:"@site/blog/2023-10-02-refine-crm-overview.md",title:"Building a Complete React CRM App with Refine, Ant Design and GraphQL",description:"We'll explore the key features of our CRM app, the technologies we used.",date:"2023-10-02T00:00:00.000Z",formattedDate:"October 2, 2023",tags:[{label:"Refine",permalink:"/blog/tags/refine"},{label:"react",permalink:"/blog/tags/react"}],readingTime:5.085,hasTruncateMarker:!1,authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],frontMatter:{title:"Building a Complete React CRM App with Refine, Ant Design and GraphQL",description:"We'll explore the key features of our CRM app, the technologies we used.",slug:"react-crm-with-refine",authors:"necati",tags:["Refine","react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-02-refine-crm-overview/social.jpg",hide_table_of_contents:!1},prevItem:{title:"Docker Swarm Mode Guide",permalink:"/blog/docker-swarm"},nextItem:{title:"Building React admin panel with NextUI and Refine",permalink:"/blog/next-ui-react-admin-panel"},relatedPosts:[{title:"A Comprehensive Guide of React Unit Testing",description:"We'll learn how to unit test our component down to hooks and Context.",permalink:"/blog/react-unit-testing",formattedDate:"August 5, 2024",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:23.915,date:"2024-08-05T00:00:00.000Z"},{title:"How to use Material UI Tooltip",description:"We'll discover the Material UI Tooltip component with examples",permalink:"/blog/material-ui-tooltip-component",formattedDate:"November 29, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:8.54,date:"2022-11-29T00:00:00.000Z"},{title:"Refine Investment Announcement",description:"We're excited to share that Refine has successfully closed a $2.8M seed round.",permalink:"/blog/refine-investment-announcement",formattedDate:"May 6, 2024",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:1.32,date:"2024-05-06T00:00:00.000Z"}],authorPosts:[{title:"What are Low Code Development Platforms?",description:"We'll looking into low-code platforms, when and where they can be used, and limitations you might face during the development.",permalink:"/blog/low-code",formattedDate:"March 18, 2024",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:8.97,date:"2024-03-18T00:00:00.000Z"},{title:"refine Hackaton Winners",description:"The winners of the Refine Open Source Hackathon are announced!",permalink:"/blog/refine-hackathon-winners",formattedDate:"February 28, 2023",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:2.36,date:"2023-02-28T00:00:00.000Z"},{title:"An article guideline for Refine blog posts",description:"A guideline for writing articles",permalink:"/blog/article-guideline",formattedDate:"September 23, 2022",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:3.685,date:"2022-09-23T00:00:00.000Z"}]},p={authorsImageUrls:[void 0]},u=[{value:"Introduction",id:"introduction",level:2},{value:"Key Features of the CRM App",id:"key-features-of-the-crm-app",level:2},{value:"Dashboard",id:"dashboard",level:3},{value:"Calendar Integration",id:"calendar-integration",level:3},{value:"Scrumboard-Project Kanban",id:"scrumboard-project-kanban",level:3},{value:"Sales Pipeline",id:"sales-pipeline",level:3},{value:"Companies",id:"companies",level:3},{value:"Contacts",id:"contacts",level:3},{value:"Quotes",id:"quotes",level:3},{value:"Administration",id:"administration",level:3},{value:"Authentication &amp; Authorization",id:"authentication--authorization",level:3},{value:"Technologies Used",id:"technologies-used",level:2},{value:"1. Refine",id:"1-refine",level:3},{value:"2. Ant Design",id:"2-ant-design",level:3},{value:"3. GraphQL",id:"3-graphql",level:3},{value:"Best Practices and Ecosystem Integration",id:"best-practices-and-ecosystem-integration",level:2},{value:"Where Can You Use This CRM As A Reference Template?",id:"where-can-you-use-this-crm-as-a-reference-template",level:2},{value:"Conclusion",id:"conclusion",level:2}],m={toc:u},g="wrapper";function d(e){var{components:t}=e,n=r(e,["components"]);return(0,a.yg)(g,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://refine.ams3.cdn.digitaloceanspaces.com/CRM-app/crm-general.gif",alt:"Image description"})),(0,a.yg)("p",null,"I want to introduce our newest example app \u2013 a full-fledged React CRM (Customer Relationship Management) application built using Refine, Ant Design, and GraphQL."),(0,a.yg)("p",null,"\ud83d\udc49 ",(0,a.yg)("a",{parentName:"p",href:"https://example.crm.refine.dev/"},"Live Demo")),(0,a.yg)("p",null,"\ud83d\udc49 ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/examples/app-crm"},"You can find the source code on GitHub here")),(0,a.yg)("p",null,"This example is open-source, which means anyone can freely utilize and customize the source code as they see fit. It's not just another application; it's a comprehensive solution that boasts all the features and functionalities required for an accurate enterprise-level application."),(0,a.yg)("p",null,"Moreover, this application serves as a guiding light for all developers. Whether you're a seasoned pro or just starting, our project is a valuable resource that can be used as a reference to better understand best practices and modern development techniques."),(0,a.yg)("p",null,"A minimal CRM app tutorial from scratch was published on ",(0,a.yg)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=6a3Dz8gwjdg"},"YouTube"),". You can follow the Refine to get notified for more real use case examples!"),(0,a.yg)("p",null,"Twitter: ",(0,a.yg)("a",{parentName:"p",href:"https://twitter.com/refine_dev"},"https://twitter.com/refine_dev"),"\nGitHub: ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine"},"https://github.com/refinedev/refine")),(0,a.yg)("h2",{id:"introduction"},"Introduction"),(0,a.yg)("p",null,"This article briefly overviews the CRM application built using Refine, an open-source React framework designed for rapidly developing web applications."),(0,a.yg)("p",null,"We'll explore the key features of our CRM app, the technologies we used, and how you can adapt this template for various business needs."),(0,a.yg)("p",null,"Step we'll cover:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#key-features-of-the-crm-app"},"Key Features of the CRM App")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#technologies-used"},"Technologies Used")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#best-practices-and-ecosystem-integration"},"Best Practices and Ecosystem Integration")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#where-can-you-use-this-crm-as-a-reference-template"},"Where Can You Use This CRM As A Reference Template?"))),(0,a.yg)("h2",{id:"key-features-of-the-crm-app"},"Key Features of the CRM App"),(0,a.yg)("p",null,"Our CRM application is feature-rich and comes with everything you need to manage customer relationships efficiently:"),(0,a.yg)("h3",{id:"dashboard"},"Dashboard"),(0,a.yg)("p",null,"The Dashboard provides an at-a-glance overview of your CRM activities. It displays key metrics, recent customer interactions, and upcoming events, offering valuable insights to help you make informed decisions."),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/halx7sfl9ctke1fu3w35.png",alt:"Image"})),(0,a.yg)("br",null),(0,a.yg)("br",null),(0,a.yg)("h3",{id:"calendar-integration"},"Calendar Integration"),(0,a.yg)("p",null,"Effortlessly manage appointments, meetings, and important events with the integrated Calendar feature. Stay organized and ensure you never miss a crucial interaction with your customers."),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/m2v8ghazuheiznefwat9.png",alt:"Image description"})),(0,a.yg)("br",null),(0,a.yg)("br",null),(0,a.yg)("h3",{id:"scrumboard-project-kanban"},"Scrumboard-Project Kanban"),(0,a.yg)("p",null,"Our Scrumboard or Project Kanban page streamlines project management. Visualize project progress, manage tasks, and facilitate team collaboration with ease. Move tasks through customizable boards to keep your projects on track."),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0hcll7tbqx3t71i6v7a9.png",alt:"Image description"})),(0,a.yg)("br",null),(0,a.yg)("br",null),(0,a.yg)("h3",{id:"sales-pipeline"},"Sales Pipeline"),(0,a.yg)("p",null,"Effectively manage your sales process from lead generation to deal closure. The Sales Pipeline provides a visual representation of your sales stages, helping your team prioritize leads and track conversions."),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/q5uoj722wasvw2fx8z49.png",alt:"Image description"})),(0,a.yg)("br",null),(0,a.yg)("br",null),(0,a.yg)("h3",{id:"companies"},"Companies"),(0,a.yg)("p",null,"The Companies page allows you to organize and categorize your business contacts. Maintain detailed profiles for each company, including contact information, communication history, and associated contacts."),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gjlahcc1icfthu2n31ar.png",alt:"Imag"})),(0,a.yg)("br",null),(0,a.yg)("br",null),(0,a.yg)("h3",{id:"contacts"},"Contacts"),(0,a.yg)("p",null,"Manage individual contacts efficiently using the Contacts page. Keep track of customer interactions, schedule follow-ups, and access critical contact information quickly."),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4c0ef7tv7nktax4gt3oz.png",alt:"Imag"})),(0,a.yg)("br",null),(0,a.yg)("br",null),(0,a.yg)("h3",{id:"quotes"},"Quotes"),(0,a.yg)("p",null,"Create, send, and manage quotes seamlessly with the Quotes feature. Generate professional quotes for your customers, track their status, and convert them into sales."),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9rqj0pzgkrure7ov5mr9.png",alt:"Image"})),(0,a.yg)("br",null),(0,a.yg)("br",null),(0,a.yg)("h3",{id:"administration"},"Administration"),(0,a.yg)("p",null,"The Administration section empowers you to configure and customize your CRM application to suit your specific business needs. Manage user roles, access permissions, and system settings effortlessly."),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/m5deq6ceue79kloeuryz.png",alt:"Image description"})),(0,a.yg)("br",null),(0,a.yg)("h3",{id:"authentication--authorization"},"Authentication & Authorization"),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/m1r04i2h0cf1jegasbte.png",alt:"Image description"})),(0,a.yg)("p",null,"This example app is a comprehensive set of features that ensures you can streamline your customer interactions, project management, and sales processes, all within a single, user-friendly platform. Whether you're managing contacts, tracking sales, or overseeing projects, our CRM app provides the tools you need for success."),(0,a.yg)("h2",{id:"technologies-used"},"Technologies Used"),(0,a.yg)("p",null,"Our CRM app's modular structure and use of open-source tools make it adaptable to various business needs. So you can build all kinds of web apps like internal tools, admin panels, or dashboards on top of it."),(0,a.yg)("p",null,"To bring our CRM app to life, we leveraged several cutting-edge technologies:"),(0,a.yg)("h3",{id:"1-refine"},"1. Refine"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine"},"Refine")," served as the backbone of our CRM application. It offers a wide range of tools and components for easily building data-intensive applications."),(0,a.yg)("p",null,"Refine's internal hooks and components simplify the development process and eliminate repetitive tasks by providing industry-standard solutions for crucial aspects of a project, including authentication, access control, routing, networking, state management, and i18n."),(0,a.yg)("h3",{id:"2-ant-design"},"2. Ant Design"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://ant.design/"},"Ant Design"),", a popular UI library, provided the sleek and responsive user interface that our CRM app needed. Its pre-built components saved us time and effort."),(0,a.yg)("p",null,"It's consistent and polished UI components ensured a professional and user-friendly interface. Refine has a built-in integration for Ant Design."),(0,a.yg)("h3",{id:"3-graphql"},"3. GraphQL"),(0,a.yg)("p",null,"We used ",(0,a.yg)("a",{parentName:"p",href:"https://graphql.org/"},"GraphQL")," for effective data retrieval and updating from our server. Additionally, we integrated ",(0,a.yg)("a",{parentName:"p",href:"https://www.apollographql.com/docs/react/data/subscriptions/"},"GraphQL Subscriptions")," to manage real-time modifications."),(0,a.yg)("p",null,"For instance, on the Project Kanban page, tasks get updated automatically when cards are dragged and dropped between sections."),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://refine.ams3.cdn.digitaloceanspaces.com/CRM-app/real-time.gif",alt:"Image"})),(0,a.yg)("p",null,"GraphQL's efficient data-fetching capabilities made working with large datasets a breeze. It's flexibility allowed us to tailor our queries to our exact requirements."),(0,a.yg)("p",null,"Refine has built-in data provider support for GraphQL.You can set it up during the project creation phase."),(0,a.yg)("h2",{id:"best-practices-and-ecosystem-integration"},"Best Practices and Ecosystem Integration"),(0,a.yg)("p",null,"Throughout the development process, we adhered to best practices and incorporated elements from the broader ecosystem. This ensures our CRM app is not only functional but also scalable and maintainable."),(0,a.yg)("p",null,"The group responsible for the CRM example app is the core Refine framework team. Feel free to explore the best practices within the ecosystem!"),(0,a.yg)("h2",{id:"where-can-you-use-this-crm-as-a-reference-template"},"Where Can You Use This CRM As A Reference Template?"),(0,a.yg)("p",null,"Our CRM template isn't limited to just one use case. You can adapt it for various purposes, including:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"B2B Applications"),": Streamline customer interactions in a business-to-business context."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Internal Tools"),": Use it as an internal tool to manage employee or departmental tasks and interactions."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"All CRUD Applications"),": The template's versatility means it can serve as the foundation for creating all sorts of CRUD applications.")),(0,a.yg)("h2",{id:"conclusion"},"Conclusion"),(0,a.yg)("p",null,"In this article, we've introduced you to our CRM application built with refine. We've highlighted its key features, the technologies we used, and the advantages of our approach. With this CRM template, you have the power to tailor your customer relationship management system to meet your unique business needs. Whether you're running a B2B operation, need an efficient internal tool, or want a versatile CRUD application, our CRM template has you covered."))}d.isMDXComponent=!0}}]);