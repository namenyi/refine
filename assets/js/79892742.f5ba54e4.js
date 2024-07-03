"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[28857],{58860:(e,t,o)=>{o.d(t,{xA:()=>c,yg:()=>g});var r=o(37953);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var u=r.createContext({}),l=function(e){var t=r.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},y="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),y=l(o),d=n,g=y["".concat(u,".").concat(d)]||y[d]||s[d]||i;return o?r.createElement(g,a(a({ref:t},c),{},{components:o})):r.createElement(g,a({ref:t},c))}));function g(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=d;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p[y]="string"==typeof e?e:n,a[1]=p;for(var l=2;l<i;l++)a[l]=o[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},92840:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>p,metadata:()=>l,toc:()=>y});o(37953);var r=o(58860);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))})),e}function a(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}const p={id:"store-your-repository",title:"5. Store your repository online",tutorial:{prev:"3.xx.xx/tutorial/getting-started/{preferredUI}/generate-crud-pages",next:"3.xx.xx/tutorial/getting-started/deploy-project"}},u=void 0,l={unversionedId:"tutorial/getting-started/store-your-repository",id:"version-3.xx.xx/tutorial/getting-started/store-your-repository",title:"5. Store your repository online",description:"In this tutorial, we will use GitHub to store and manage our repository, and to connect to a web host. If you prefer to use a different online git provider, feel free to do so.",source:"@site/versioned_docs/version-3.xx.xx/tutorial/1-getting-started/4-store-your-repository.md",sourceDirName:"tutorial/1-getting-started",slug:"/tutorial/getting-started/store-your-repository",permalink:"/docs/3.xx.xx/tutorial/getting-started/store-your-repository",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/tutorial/1-getting-started/4-store-your-repository.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1720022472,formattedLastUpdatedAt:"Jul 3, 2024",sidebarPosition:4,frontMatter:{id:"store-your-repository",title:"5. Store your repository online",tutorial:{prev:"3.xx.xx/tutorial/getting-started/{preferredUI}/generate-crud-pages",next:"3.xx.xx/tutorial/getting-started/deploy-project"}}},c={},y=[{value:"Create a repository on GitHub",id:"create-a-repository-on-github",level:2},{value:"Commit your local code to GitHub",id:"commit-your-local-code-to-github",level:2},{value:"See your project on GitHub",id:"see-your-project-on-github",level:2}],s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",t)},d=s("DocThumbsUpDownFeedbackWidget"),g=s("Checklist"),m=s("ChecklistItem"),f={toc:y},b="wrapper";function h(e){var{components:t}=e,o=a(e,["components"]);return(0,r.yg)(b,i(function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},r=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(o).filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})))),r.forEach((function(t){n(e,t,o[t])}))}return e}({},f,o),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"In this tutorial, we will use GitHub to store and manage our repository, and to connect to a web host. If you prefer to use a different online git provider, feel free to do so."),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"If you are already proficient in git and have your own preferred workflow, you can create a new GitHub repository for your project using your method of choice. Once you have done so, you can move on to the next page: ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/tutorial/getting-started/deploy-project"},'"Deploy your app to the Web"'),".")),(0,r.yg)("h2",{id:"create-a-repository-on-github"},"Create a repository on GitHub"),(0,r.yg)(d,{id:"create-a-repository-on-github",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"To create a repository on GitHub, follow these steps:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Go to ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/"},"GitHub.com")," and log in with your account.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},'Click the plus icon in the top right corner of the page and select "New repository".')),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Enter a name for your repository and a brief description (optional).")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Choose whether you want your repository to be public or private.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},'Click "Create repository".'))),(0,r.yg)("p",null,"For more detailed instructions and options, you can refer to the ",(0,r.yg)("a",{parentName:"p",href:"https://docs.github.com/en/get-started/quickstart/create-a-repo"},"GitHub documentation"),".")),(0,r.yg)("h2",{id:"commit-your-local-code-to-github"},"Commit your local code to GitHub"),(0,r.yg)(d,{id:"commit-your-local-code-to-github",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"After you have created a repository on GitHub, you will need to commit your local code to the repository. This will allow you to store and manage your project's code on GitHub."),(0,r.yg)("p",null,"To commit your code to GitHub, you will need to use git commands in the terminal. If you are not familiar with git, you can refer to the ",(0,r.yg)("a",{parentName:"p",href:"https://git-scm.com/docs"},"git documentation")," or follow these steps:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Navigate to your project directory in the terminal.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Connect your local repository to the remote repository on GitHub by running the command ",(0,r.yg)("inlineCode",{parentName:"p"},"git remote add origin <url>"),", where ",(0,r.yg)("inlineCode",{parentName:"p"},"<url>")," is the URL of your GitHub repository.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Add your changes to the staging area by running the command ",(0,r.yg)("inlineCode",{parentName:"p"},"git add ."),".")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Commit your changes by running the command ",(0,r.yg)("inlineCode",{parentName:"p"},'git commit -m "Initial commit"'),".")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Push your changes to GitHub by running the command ",(0,r.yg)("inlineCode",{parentName:"p"},"git push -u origin master"),"."))),(0,r.yg)("p",null,"For more detailed instructions and options, you can refer to the ",(0,r.yg)("a",{parentName:"p",href:"https://docs.github.com/en/get-started/importing-your-projects-to-github/importing-source-code-to-github/adding-locally-hosted-code-to-github#adding-a-local-repository-to-github-using-git"},"GitHub documentation"),".")),(0,r.yg)("h2",{id:"see-your-project-on-github"},"See your project on GitHub"),(0,r.yg)(d,{id:"see-your-project-on-github",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"To confirm that your project has been successfully stored on GitHub, go to ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/"},"GitHub.com")," and navigate to your list of repositories. Select the new repository you created, and verify that it contains your project files."),(0,r.yg)(g,{mdxType:"Checklist"},(0,r.yg)(m,{id:"store-your-repo",mdxType:"ChecklistItem"},"I created a repository on GitHub."),(0,r.yg)(m,{id:"store-your-repo-2",mdxType:"ChecklistItem"},"I uploaded my project to GitHub."))))}h.isMDXComponent=!0}}]);