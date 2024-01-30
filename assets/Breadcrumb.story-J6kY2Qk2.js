import{_ as s,o as d,c as u,w as e,a as t,b as a,d as l,e as r}from"./index-HBVQKJa5.js";const p={},f=l("b",null,"breadcrumb",-1);function b(_,h){const o=r("component-info"),n=r("pf-breadcrumb-item"),c=r("pf-breadcrumb"),i=r("story-canvas"),m=r("doc-page");return d(),u(m,{name:"Components/Breadcrumb.story.vue",title:"Breadcrumb"},{description:e(()=>[t("A "),f,t(" provides page context to help users navigate more efficiently and understand where they are in the application hierarchy.")]),apidocs:e(()=>[a(o,{src:"packages/core/src/components/Breadcrumb/Breadcrumb.vue",doc:{name:"PfBreadcrumb",exportName:"default",displayName:"Breadcrumb",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"ariaLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Breadcrumb'"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Breadcrumb/Breadcrumb.vue"]}},null,8,["doc"]),a(o,{src:"packages/core/src/components/Breadcrumb/BreadcrumbItem.vue",doc:{name:"PfBreadcrumbItem",exportName:"default",displayName:"BreadcrumbItem",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"href",required:!1,type:{name:"string"}},{name:"to",required:!1,type:{name:"RouteLocationRaw"}},{name:"active",required:!1,type:{name:"boolean"}},{name:"dropdown",required:!1,type:{name:"boolean"}},{name:"showDivider",required:!1,type:{name:"boolean"}},{name:"component",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Component"}]}},{name:"liAttrs",required:!1,type:{name:"LiHTMLAttributes"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Breadcrumb/BreadcrumbItem.vue"]}},null,8,["doc"])]),default:e(()=>[a(i,{title:"Example",source:`<pf-breadcrumb>
  <pf-breadcrumb-item href="#">Section home</pf-breadcrumb-item>
  <pf-breadcrumb-item href="#">Section title</pf-breadcrumb-item>
  <pf-breadcrumb-item href="#">Section title</pf-breadcrumb-item>
  <pf-breadcrumb-item href="#" active>Section landing</pf-breadcrumb-item>
</pf-breadcrumb>`},{default:e(()=>[a(c,null,{default:e(()=>[a(n,{href:"#"},{default:e(()=>[t("Section home")]),_:1}),a(n,{href:"#"},{default:e(()=>[t("Section title")]),_:1}),a(n,{href:"#"},{default:e(()=>[t("Section title")]),_:1}),a(n,{href:"#",active:""},{default:e(()=>[t("Section landing")]),_:1})]),_:1})]),_:1})]),_:1},8,["name"])}const v=s(p,[["render",b]]);export{v as default};