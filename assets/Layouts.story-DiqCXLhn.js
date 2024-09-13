import{f as G,r as L,o as b,c as B,w as l,b as g,d as t,a as f,v as S,x as C,e as p}from"./index-DuPyphUY.js";const D=G({__name:"Layouts.story",setup(V){const u=L(!1);return(N,e)=>{const x=p("pf-bullseye"),s=p("story-canvas"),i=p("pf-flex-item"),a=p("pf-flex"),m=p("pf-gallery-item"),y=p("pf-gallery"),n=p("pf-grid-item"),_=p("pf-grid"),r=p("pf-level-item"),v=p("pf-level"),o=p("pf-split-item"),w=p("pf-split"),d=p("pf-stack-item"),I=p("pf-stack"),k=p("doc-page");return b(),B(k,{name:"Layouts/Layouts.story.vue",class:"page__layouts",title:"Layouts"},{default:l(()=>[e[38]||(e[38]=g("p",null,[g("em",null,"Dashed lines are for illustration purposes only.")],-1)),t(s,{title:"Bullseye",source:"<pf-bullseye>Bullseye ◎ layout</pf-bullseye>"},{default:l(()=>[t(x,null,{default:l(()=>e[1]||(e[1]=[f("Bullseye ◎ layout")])),_:1})]),_:1}),t(s,{title:"Flex",source:`<pf-flex justify-content="space-between">
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
</pf-flex>`},{intro:l(()=>[S(g("input",{"onUpdate:modelValue":e[0]||(e[0]=F=>u.value=F),type:"checkbox"},null,512),[[C,u.value]]),e[2]||(e[2]=f(" grow flex 2 "))]),default:l(()=>[t(a,{"justify-content":"space-between"},{default:l(()=>[t(i,{"align-self-sm":"flex-start"},{default:l(()=>e[3]||(e[3]=[f("Flex 1")])),_:1}),t(i,{"align-self-sm":"flex-start","grow-md":u.value},{default:l(()=>e[4]||(e[4]=[f("Flex 2")])),_:1},8,["grow-md"])]),_:1}),t(a,null,{default:l(()=>[t(a,{flex:"1"},{default:l(()=>[t(i,null,{default:l(()=>e[5]||(e[5]=[f("Flex item")])),_:1})]),_:1}),t(a,{flex:"1"},{default:l(()=>[t(i,null,{default:l(()=>e[6]||(e[6]=[f("Flex item")])),_:1}),t(i,null,{default:l(()=>e[7]||(e[7]=[f("Flex item")])),_:1})]),_:1}),t(a,{flex:"1"},{default:l(()=>[t(i,null,{default:l(()=>e[8]||(e[8]=[f("Flex item")])),_:1}),t(i,null,{default:l(()=>e[9]||(e[9]=[f("Flex item")])),_:1}),t(i,null,{default:l(()=>e[10]||(e[10]=[f("Flex item")])),_:1})]),_:1})]),_:1})]),_:1}),t(s,{title:"Gallery",source:`<pf-gallery gutter>
  <pf-gallery-item>Gallery Item</pf-gallery-item>
  <pf-gallery-item>Gallery Item</pf-gallery-item>
  <pf-gallery-item>Gallery Item</pf-gallery-item>
  <pf-gallery-item>Gallery Item</pf-gallery-item>
  <pf-gallery-item>Gallery Item</pf-gallery-item>
  <pf-gallery-item>Gallery Item</pf-gallery-item>
</pf-gallery>`},{default:l(()=>[t(y,{gutter:""},{default:l(()=>[t(m,null,{default:l(()=>e[11]||(e[11]=[f("Gallery Item")])),_:1}),t(m,null,{default:l(()=>e[12]||(e[12]=[f("Gallery Item")])),_:1}),t(m,null,{default:l(()=>e[13]||(e[13]=[f("Gallery Item")])),_:1}),t(m,null,{default:l(()=>e[14]||(e[14]=[f("Gallery Item")])),_:1}),t(m,null,{default:l(()=>e[15]||(e[15]=[f("Gallery Item")])),_:1}),t(m,null,{default:l(()=>e[16]||(e[16]=[f("Gallery Item")])),_:1})]),_:1})]),_:1}),t(s,{title:"Grid",source:`<pf-grid gutter>
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
</pf-grid>`},{default:l(()=>[t(_,{gutter:""},{default:l(()=>[t(n,{span:"8"},{default:l(()=>e[17]||(e[17]=[f("span = 8")])),_:1}),t(n,{span:"4","row-span":"2"},{default:l(()=>e[18]||(e[18]=[f("span = 4, rowSpan = 2")])),_:1}),t(n,{span:"2","row-span":"3"},{default:l(()=>e[19]||(e[19]=[f("span = 2, rowSpan = 3")])),_:1}),t(n,{span:"2"},{default:l(()=>e[20]||(e[20]=[f("span = 2")])),_:1}),t(n,{span:"4"},{default:l(()=>e[21]||(e[21]=[f("span = 4")])),_:1}),t(n,{span:"2"},{default:l(()=>e[22]||(e[22]=[f("span = 2")])),_:1}),t(n,{span:"2"},{default:l(()=>e[23]||(e[23]=[f("span = 2")])),_:1}),t(n,{span:"2"},{default:l(()=>e[24]||(e[24]=[f("span = 2")])),_:1}),t(n,{span:"4"},{default:l(()=>e[25]||(e[25]=[f("span = 4")])),_:1}),t(n,{span:"2"},{default:l(()=>e[26]||(e[26]=[f("span = 2")])),_:1}),t(n,{span:"4"},{default:l(()=>e[27]||(e[27]=[f("span = 4")])),_:1}),t(n,{span:"4"},{default:l(()=>e[28]||(e[28]=[f("span = 4")])),_:1})]),_:1})]),_:1}),t(s,{title:"Level",source:`<pf-level gutter>
  <pf-level-item>Level Item</pf-level-item>
  <pf-level-item>Level Item</pf-level-item>
  <pf-level-item>Level Item</pf-level-item>
</pf-level>`},{default:l(()=>[t(v,{gutter:""},{default:l(()=>[t(r,null,{default:l(()=>e[29]||(e[29]=[f("Level Item")])),_:1}),t(r,null,{default:l(()=>e[30]||(e[30]=[f("Level Item")])),_:1}),t(r,null,{default:l(()=>e[31]||(e[31]=[f("Level Item")])),_:1})]),_:1})]),_:1}),t(s,{title:"Split",source:`<pf-split gutter>
  <pf-split-item>content</pf-split-item>
  <pf-split-item filled>pf-m-fill</pf-split-item>
  <pf-split-item>content</pf-split-item>
</pf-split>`},{default:l(()=>[t(w,{gutter:""},{default:l(()=>[t(o,null,{default:l(()=>e[32]||(e[32]=[f("content")])),_:1}),t(o,{filled:""},{default:l(()=>e[33]||(e[33]=[f("pf-m-fill")])),_:1}),t(o,null,{default:l(()=>e[34]||(e[34]=[f("content")])),_:1})]),_:1})]),_:1}),t(s,{title:"Stack",source:`<pf-stack gutter>
  <pf-stack-item>content</pf-stack-item>
  <pf-stack-item filled>pf-m-fill</pf-stack-item>
  <pf-stack-item>content</pf-stack-item>
</pf-stack>`},{default:l(()=>[t(I,{gutter:""},{default:l(()=>[t(d,null,{default:l(()=>e[35]||(e[35]=[f("content")])),_:1}),t(d,{filled:""},{default:l(()=>e[36]||(e[36]=[f("pf-m-fill")])),_:1}),t(d,null,{default:l(()=>e[37]||(e[37]=[f("content")])),_:1})]),_:1})]),_:1})]),_:1})}}});export{D as default};
