(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"PL+z":function(e,t,a){"use strict";a.r(t),a.d(t,"IndexPageTemplate",(function(){return m}));var n=a("q1tI"),l=a.n(n),i=a("Wbzz"),s=a("7oih"),r=a("lynl"),c=a("v/M3"),m=function(e){var t=e.image,a=e.title,n=e.heading,s=e.subheading,m=e.mainpitch,o=e.description,d=e.intro;return l.a.createElement("div",null,l.a.createElement("div",{className:"full-width-image margin-top-0",style:{backgroundImage:"url("+(t.childImageSharp?t.childImageSharp.fluid.src:t)+")",backgroundPosition:"top left",backgroundAttachment:"fixed"}},l.a.createElement("div",{style:{display:"flex",height:"150px",lineHeight:"1",justifyContent:"space-around",alignItems:"left",flexDirection:"column"}},l.a.createElement("h1",{className:"has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen",style:{boxShadow:"rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px",backgroundColor:"rgb(255, 68, 0)",color:"white",lineHeight:"1",padding:"0.25em"}},a),l.a.createElement("h3",{className:"has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen",style:{boxShadow:"rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px",backgroundColor:"rgb(255, 68, 0)",color:"white",lineHeight:"1",padding:"0.25em"}},s))),l.a.createElement("section",{className:"section section--gradient"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"section"},l.a.createElement("div",{className:"columns"},l.a.createElement("div",{className:"column is-10 is-offset-1"},l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"tile"},l.a.createElement("h1",{className:"title"},m.title)),l.a.createElement("div",{className:"tile"},l.a.createElement("h3",{className:"subtitle"},m.description))),l.a.createElement("div",{className:"columns"},l.a.createElement("div",{className:"column is-12"},l.a.createElement("h3",{className:"has-text-weight-semibold is-size-2"},n),l.a.createElement("p",null,o))),l.a.createElement(r.a,{gridItems:d.blurbs}),l.a.createElement("div",{className:"columns"},l.a.createElement("div",{className:"column is-12 has-text-centered"},l.a.createElement(i.a,{className:"btn",to:"/products"},"See all products"))),l.a.createElement("div",{className:"column is-12"},l.a.createElement("h3",{className:"has-text-weight-semibold is-size-2"},"Latest stories"),l.a.createElement(c.a,null),l.a.createElement("div",{className:"column is-12 has-text-centered"},l.a.createElement(i.a,{className:"btn",to:"/blog"},"Read more"))))))))))};t.default=function(e){var t=e.data.markdownRemark.frontmatter;return l.a.createElement(s.a,null,l.a.createElement(m,{image:t.image,title:t.title,heading:t.heading,subheading:t.subheading,mainpitch:t.mainpitch,description:t.description,intro:t.intro}))}},lynl:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),i=a("I22s");t.a=function(e){var t=e.gridItems;return l.a.createElement("div",{className:"columns is-multiline"},t.map((function(e){return l.a.createElement("div",{key:e.text,className:"column is-6"},l.a.createElement("section",{className:"section"},l.a.createElement("div",{className:"has-text-centered"},l.a.createElement("div",{style:{width:"240px",display:"inline-block"}},l.a.createElement(i.a,{imageInfo:e}))),l.a.createElement("p",null,e.text)))})))}},"v/M3":function(e,t,a){"use strict";var n=a("dI71"),l=a("q1tI"),i=a.n(l),s=a("Wbzz"),r=a("I22s"),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges;return i.a.createElement("div",{className:"columns is-multiline"},e&&e.map((function(e){var t=e.node;return i.a.createElement("div",{className:"is-parent column is-6",key:t.id},i.a.createElement("article",{className:"blog-list-item tile is-child box notification "+(t.frontmatter.featuredpost?"is-featured":"")},i.a.createElement("header",null,t.frontmatter.featuredimage?i.a.createElement("div",{className:"featured-thumbnail"},i.a.createElement(r.a,{imageInfo:{image:t.frontmatter.featuredimage,alt:"featured image thumbnail for post "+t.frontmatter.title}})):null,i.a.createElement("p",{className:"post-meta"},i.a.createElement(s.a,{className:"title has-text-primary is-size-4",to:t.fields.slug},t.frontmatter.title),i.a.createElement("span",null," • "),i.a.createElement("span",{className:"subtitle is-size-5 is-block"},t.frontmatter.date))),i.a.createElement("p",null,t.excerpt,i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement(s.a,{className:"button",to:t.fields.slug},"Keep Reading →"))))})))},t}(i.a.Component);t.a=function(){return i.a.createElement(s.b,{query:"1606870023",render:function(e,t){return i.a.createElement(c,{data:e,count:t})}})}}}]);
//# sourceMappingURL=component---src-templates-index-page-js-899c706c00e376f19d6e.js.map