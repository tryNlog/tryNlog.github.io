"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[678],{8771:function(e,t,n){var a=n(7294),l=n(1883);t.Z=()=>{var e;const t=null===(e=(0,l.useStaticQuery)("3257411868").site.siteMetadata)||void 0===e?void 0:e.author;return a.createElement("div",{className:"bio"},(null==t?void 0:t.name)&&a.createElement("p",null,"Written by ",t.name,a.createElement("br",null),(null==t?void 0:t.summary)||null," "))}},401:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294),l=n(1883),r=n.p+"static/gatsby-icon-f4a8a76bbc8c551fea398534c5e39861.png";var i=e=>{let{location:t,title:n,children:i}=e;const c="/"===t.pathname;let o;return o=c?a.createElement("h1",{className:"main-heading"},a.createElement(l.Link,{to:"/"},a.createElement("img",{src:r,alt:"header",height:70}))):a.createElement(l.Link,{className:"header-link-home",to:"/"},n),a.createElement("div",{className:"global-wrapper","data-is-root-path":c},a.createElement("header",{className:"global-header"},o),a.createElement("main",null,i),a.createElement("footer",null,"© ",(new Date).getFullYear(),", Made by"," ",a.createElement("a",{href:"https://github.com/tryNlog"},"tryNlog")))}},9357:function(e,t,n){var a=n(7294),l=n(1883);t.Z=e=>{var t,n,r;let{description:i,title:c,children:o}=e;const{site:m}=(0,l.useStaticQuery)("2841359383"),s=i||m.siteMetadata.description,u=null===(t=m.siteMetadata)||void 0===t?void 0:t.title;return a.createElement(a.Fragment,null,a.createElement("title",null,u?c+" | "+u:c),a.createElement("meta",{name:"description",content:s}),a.createElement("meta",{property:"og:title",content:c}),a.createElement("meta",{property:"og:description",content:s}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{name:"twitter:card",content:"summary"}),a.createElement("meta",{name:"twitter:creator",content:(null===(n=m.siteMetadata)||void 0===n||null===(r=n.social)||void 0===r?void 0:r.twitter)||""}),a.createElement("meta",{name:"twitter:title",content:c}),a.createElement("meta",{name:"twitter:description",content:s}),o)}},6558:function(e,t,n){n.r(t),n.d(t,{Head:function(){return o}});var a=n(7294),l=n(1883),r=n(8771),i=n(401),c=n(9357);t.default=e=>{var t;let{data:n,location:c}=e;const o=(null===(t=n.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",m=n.allMarkdownRemark.nodes;return 0===m.length?a.createElement(i.Z,{location:c,title:o},a.createElement(r.Z,null),a.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):a.createElement(i.Z,{location:c,title:o},a.createElement(r.Z,null),a.createElement("ol",{style:{listStyle:"none"}},m.map((e=>{const t=e.frontmatter.title||e.fields.slug;return a.createElement("li",{key:e.fields.slug},a.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},a.createElement("header",null,a.createElement("h2",null,a.createElement(l.Link,{to:e.fields.slug,itemProp:"url"},a.createElement("span",{itemProp:"headline"},t))),a.createElement("small",null,e.frontmatter.date)),a.createElement("section",null,a.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))}))))};const o=()=>a.createElement(c.Z,{title:"All posts"})}}]);
//# sourceMappingURL=component---src-pages-index-js-81c7e8b61281653f585f.js.map