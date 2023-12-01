import{_ as r,a,o as c,c as u,w as e,b as t,d as n,e as s}from"./index-LULJ9ZOK.js";const d={},f=s("b",null,"Jump links",-1),k=s("div",{class:"markdown pf-v5-c-content"},[s("h2",{class:"pf-v5-c-title"},"Examples"),s("p",null,"These examples are static because they have no element to scroll spy on that makes sense.")],-1);function b(g,x){const l=a("component-info"),o=a("pf-jump-links-item"),i=a("pf-jump-links"),m=a("story-canvas"),p=a("doc-page");return c(),u(p,{title:"Jump links"},{description:e(()=>[f,t(" allow users to navigate to sections within a page.")]),apidocs:e(()=>[n(l,{src:"packages/core/src/components/JumpLinks/JumpLinks.vue",doc:{name:"PfJumpLinks",exportName:"default",displayName:"JumpLinks",description:"",tags:{},props:[{name:"expandableXl2",description:"Toggle collapse/expand state at Xl2 breakpoint",required:!1,type:{name:"union",elements:[{name:'"expandable"'},{name:'"nonExpandable"'}]}},{name:"expandableXl",description:"Toggle collapse/expand state at Xl breakpoint",required:!1,type:{name:"union",elements:[{name:'"expandable"'},{name:'"nonExpandable"'}]}},{name:"expandableLg",description:"Toggle collapse/expand state at Lg breakpoint",required:!1,type:{name:"union",elements:[{name:'"expandable"'},{name:'"nonExpandable"'}]}},{name:"expandableMd",description:"Toggle collapse/expand state at Md breakpoint",required:!1,type:{name:"union",elements:[{name:'"expandable"'},{name:'"nonExpandable"'}]}},{name:"expandableSm",description:"Toggle collapse/expand state at Sm breakpoint",required:!1,type:{name:"union",elements:[{name:'"expandable"'},{name:'"nonExpandable"'}]}},{name:"expandable",description:"Toggle collapse/expand state",required:!1,type:{name:"union",elements:[{name:'"expandable"'},{name:'"nonExpandable"'}]}},{name:"centered",description:"Whether to center children.",required:!1,type:{name:"boolean"}},{name:"vertical",description:"Whether the layout of children is vertical or horizontal.",required:!1,type:{name:"boolean"}},{name:"alwaysShowLabel",description:"Flag to always show the label when using `expandable`",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"scrollableElement",description:"Selector or element reference to the scrollable element to spy on. Not passing a selector disables spying.",required:!1,type:{name:"union",elements:[{name:"string"},{name:"MaybeComputedElementRef",elements:[{name:"HTMLElement"}]}]}},{name:"autoLinkFromElements",description:"Selector or element references to the elements to use to auto generate the link items. Linkable items are selected from inside the scrollableElement.",required:!1,type:{name:"union",elements:[{name:"string"},{name:"MaybeRef",elements:[{name:"Array",elements:[{name:"HTMLElement"}]}]}]}},{name:"offset",description:"Offset to add to `scrollPosition`, potentially for a masthead which content scrolls under.",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"expanded",description:"On mobile whether or not the JumpLinks starts out expanded",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"toggleAriaLabel",description:"Aria label for expandable toggle",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Toggle jump links'"}}],events:[{name:"update:activeIndex",type:{names:["number"]}}],slots:[{name:"label"},{name:"default"}],sourceFiles:["../../packages/core/src/components/JumpLinks/JumpLinks.vue"]}},null,8,["doc"]),n(l,{src:"packages/core/src/components/JumpLinks/JumpLinksItem.vue",doc:{name:"PfJumpLinksItem",exportName:"default",displayName:"JumpLinksItem",description:"",tags:{},expose:[{name:"target"}],props:[{name:"active",description:"Whether this item is active. Parent JumpLinks component sets this when passed a `scrollableSelector`.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"href",description:"Href for this link",required:!1,type:{name:"string"}},{name:"node",description:"Selector or HTMLElement to spy on",required:!1,type:{name:"union",elements:[{name:"string"},{name:"MaybeComputedElementRef",elements:[{name:"HTMLElement"}]}]}}],events:[{name:"click",type:{names:["PointerEvent"]}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/JumpLinks/JumpLinksItem.vue"]}},null,8,["doc"]),n(l,{src:"packages/core/src/components/JumpLinks/JumpLinksList.vue",doc:{name:"PfJumpLinksList",exportName:"default",displayName:"JumpLinksList",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/JumpLinks/JumpLinksList.vue"]}},null,8,["doc"])]),default:e(()=>[k,n(m,{title:"Basic",source:`<pf-jump-links>
  <pf-jump-links-item>Inactive section</pf-jump-links-item>
  <pf-jump-links-item active>Active section</pf-jump-links-item>
  <pf-jump-links-item>Inactive section</pf-jump-links-item>
</pf-jump-links>`},{default:e(()=>[n(i,null,{default:e(()=>[n(o,null,{default:e(()=>[t("Inactive section")]),_:1}),n(o,{active:""},{default:e(()=>[t("Active section")]),_:1}),n(o,null,{default:e(()=>[t("Inactive section")]),_:1})]),_:1})]),_:1})]),_:1})}const y=r(d,[["render",b]]);export{y as default};