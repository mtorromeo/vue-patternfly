import{e as F,r as G,a as f,o as L,c as b,w as e,b as l,g as t,x as B,y as S,d as o}from"./index-3a5bf38d.js";const h=o("p",null,[o("em",null,"Dashed lines are for illustration purposes only.")],-1),j=F({__name:"Layouts.story",setup(C){const m=G(!1);return(V,d)=>{const c=f("pf-bullseye"),a=f("story-canvas"),n=f("pf-flex-item"),s=f("pf-flex"),i=f("pf-gallery-item"),g=f("pf-gallery"),p=f("pf-grid-item"),x=f("pf-grid"),u=f("pf-level-item"),y=f("pf-level"),_=f("pf-split-item"),v=f("pf-split"),r=f("pf-stack-item"),w=f("pf-stack"),I=f("doc-page");return L(),b(I,{class:"page__layouts",title:"Layouts"},{default:e(()=>[h,l(a,{title:"Bullseye",source:"<pf-bullseye>Bullseye ◎ layout</pf-bullseye>"},{default:e(()=>[l(c,null,{default:e(()=>[t("Bullseye ◎ layout")]),_:1})]),_:1}),l(a,{title:"Flex",source:`<pf-flex justify-content="space-between">
  <pf-flex-item align-self-sm="flex-start">Flex 1</pf-flex-item>
  <pf-flex-item align-self-sm="flex-start" :grow-md="grow">Flex 2</pf-flex-item>
</pf-flex>

<pf-flex>
  <pf-flex flex="1">
    <pf-flex-item>Flex item</pf-flex-item>
  </pf-flex>
  <pf-flex flex="1">
    <pf-flex-item>Flex item</pf-flex-item>
    <pf-flex-item>Flex item</pf-flex-item>
  </pf-flex>
  <pf-flex flex="1">
    <pf-flex-item>Flex item</pf-flex-item>
    <pf-flex-item>Flex item</pf-flex-item>
    <pf-flex-item>Flex item</pf-flex-item>
  </pf-flex>
</pf-flex>`},{intro:e(()=>[B(o("input",{"onUpdate:modelValue":d[0]||(d[0]=k=>m.value=k),type:"checkbox"},null,512),[[S,m.value]]),t(" grow flex 2 ")]),default:e(()=>[l(s,{"justify-content":"space-between"},{default:e(()=>[l(n,{"align-self-sm":"flex-start"},{default:e(()=>[t("Flex 1")]),_:1}),l(n,{"align-self-sm":"flex-start","grow-md":m.value},{default:e(()=>[t("Flex 2")]),_:1},8,["grow-md"])]),_:1}),l(s,null,{default:e(()=>[l(s,{flex:"1"},{default:e(()=>[l(n,null,{default:e(()=>[t("Flex item")]),_:1})]),_:1}),l(s,{flex:"1"},{default:e(()=>[l(n,null,{default:e(()=>[t("Flex item")]),_:1}),l(n,null,{default:e(()=>[t("Flex item")]),_:1})]),_:1}),l(s,{flex:"1"},{default:e(()=>[l(n,null,{default:e(()=>[t("Flex item")]),_:1}),l(n,null,{default:e(()=>[t("Flex item")]),_:1}),l(n,null,{default:e(()=>[t("Flex item")]),_:1})]),_:1})]),_:1})]),_:1}),l(a,{title:"Gallery",source:`<pf-gallery gutter>
  <pf-gallery-item>Gallery Item</pf-gallery-item>
  <pf-gallery-item>Gallery Item</pf-gallery-item>
  <pf-gallery-item>Gallery Item</pf-gallery-item>
  <pf-gallery-item>Gallery Item</pf-gallery-item>
  <pf-gallery-item>Gallery Item</pf-gallery-item>
  <pf-gallery-item>Gallery Item</pf-gallery-item>
</pf-gallery>`},{default:e(()=>[l(g,{gutter:""},{default:e(()=>[l(i,null,{default:e(()=>[t("Gallery Item")]),_:1}),l(i,null,{default:e(()=>[t("Gallery Item")]),_:1}),l(i,null,{default:e(()=>[t("Gallery Item")]),_:1}),l(i,null,{default:e(()=>[t("Gallery Item")]),_:1}),l(i,null,{default:e(()=>[t("Gallery Item")]),_:1}),l(i,null,{default:e(()=>[t("Gallery Item")]),_:1})]),_:1})]),_:1}),l(a,{title:"Grid",source:`<pf-grid gutter>
  <pf-grid-item span="8">span = 8</pf-grid-item>
  <pf-grid-item span="4" row-span="2">span = 4, rowSpan = 2</pf-grid-item>
  <pf-grid-item span="2" row-span="3">span = 2, rowSpan = 3</pf-grid-item>
  <pf-grid-item span="2">span = 2</pf-grid-item>
  <pf-grid-item span="4">span = 4</pf-grid-item>
  <pf-grid-item span="2">span = 2</pf-grid-item>
  <pf-grid-item span="2">span = 2</pf-grid-item>
  <pf-grid-item span="2">span = 2</pf-grid-item>
  <pf-grid-item span="4">span = 4</pf-grid-item>
  <pf-grid-item span="2">span = 2</pf-grid-item>
  <pf-grid-item span="4">span = 4</pf-grid-item>
  <pf-grid-item span="4">span = 4</pf-grid-item>
</pf-grid>`},{default:e(()=>[l(x,{gutter:""},{default:e(()=>[l(p,{span:"8"},{default:e(()=>[t("span = 8")]),_:1}),l(p,{span:"4","row-span":"2"},{default:e(()=>[t("span = 4, rowSpan = 2")]),_:1}),l(p,{span:"2","row-span":"3"},{default:e(()=>[t("span = 2, rowSpan = 3")]),_:1}),l(p,{span:"2"},{default:e(()=>[t("span = 2")]),_:1}),l(p,{span:"4"},{default:e(()=>[t("span = 4")]),_:1}),l(p,{span:"2"},{default:e(()=>[t("span = 2")]),_:1}),l(p,{span:"2"},{default:e(()=>[t("span = 2")]),_:1}),l(p,{span:"2"},{default:e(()=>[t("span = 2")]),_:1}),l(p,{span:"4"},{default:e(()=>[t("span = 4")]),_:1}),l(p,{span:"2"},{default:e(()=>[t("span = 2")]),_:1}),l(p,{span:"4"},{default:e(()=>[t("span = 4")]),_:1}),l(p,{span:"4"},{default:e(()=>[t("span = 4")]),_:1})]),_:1})]),_:1}),l(a,{title:"Level",source:`<pf-level gutter>
  <pf-level-item>Level Item</pf-level-item>
  <pf-level-item>Level Item</pf-level-item>
  <pf-level-item>Level Item</pf-level-item>
</pf-level>`},{default:e(()=>[l(y,{gutter:""},{default:e(()=>[l(u,null,{default:e(()=>[t("Level Item")]),_:1}),l(u,null,{default:e(()=>[t("Level Item")]),_:1}),l(u,null,{default:e(()=>[t("Level Item")]),_:1})]),_:1})]),_:1}),l(a,{title:"Split",source:`<pf-split gutter>
  <pf-split-item>content</pf-split-item>
  <pf-split-item filled>pf-m-fill</pf-split-item>
  <pf-split-item>content</pf-split-item>
</pf-split>`},{default:e(()=>[l(v,{gutter:""},{default:e(()=>[l(_,null,{default:e(()=>[t("content")]),_:1}),l(_,{filled:""},{default:e(()=>[t("pf-m-fill")]),_:1}),l(_,null,{default:e(()=>[t("content")]),_:1})]),_:1})]),_:1}),l(a,{title:"Stack",source:`<pf-stack gutter>
  <pf-stack-item>content</pf-stack-item>
  <pf-stack-item filled>pf-m-fill</pf-stack-item>
  <pf-stack-item>content</pf-stack-item>
</pf-stack>`},{default:e(()=>[l(w,{gutter:""},{default:e(()=>[l(r,null,{default:e(()=>[t("content")]),_:1}),l(r,{filled:""},{default:e(()=>[t("pf-m-fill")]),_:1}),l(r,null,{default:e(()=>[t("content")]),_:1})]),_:1})]),_:1})]),_:1})}}});export{j as default};
