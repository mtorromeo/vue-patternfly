import{m,f,o as d,c as g,w as t,a as s,b as e,u as l,d as _,e as n}from"./index-D1ygUcxc.js";import{M as h}from"./magnifying-glass-icon-CmjG8ZaL.js";const I={name:"AtIcon",height:512,width:512,svgPath:"M256 64C150 64 64 150 64 256s86 192 192 192c17.7 0 32 14.3 32 32s-14.3 32-32 32C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256l0 32c0 53-43 96-96 96c-29.3 0-55.6-13.2-73.2-33.9C320 371.1 289.5 384 256 384c-70.7 0-128-57.3-128-128s57.3-128 128-128c27.9 0 53.7 8.9 74.7 24.1c5.7-5 13.1-8.1 21.3-8.1c17.7 0 32 14.3 32 32l0 80 0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32c0-106-86-192-192-192zm64 192a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z",yOffset:0,xOffset:0},y=m(I),x=_("b",null,"input group",-1),k=f({__name:"InputGroup.story",setup(G){return(v,b)=>{const o=n("component-info"),p=n("pf-text-input"),a=n("pf-input-group-item"),u=n("pf-input-group-text"),i=n("pf-input-group"),r=n("story-canvas"),c=n("doc-page");return d(),g(c,{name:"Components/InputGroup.story.vue",title:"Input Group"},{description:t(()=>[s("An "),x,s(" groups multiple related controls or inputs together so they appear as one control.")]),apidocs:t(()=>[e(o,{src:"packages/core/src/components/InputGroup/InputGroup.vue",doc:{name:"PfInputGroup",exportName:"default",displayName:"InputGroup",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/InputGroup/InputGroup.vue"]}}),e(o,{src:"packages/core/src/components/InputGroup/InputGroupItem.vue",doc:{name:"PfInputGroupItem",exportName:"default",displayName:"InputGroupItem",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"box",description:"Enables box styling to the input group item",required:!1,type:{name:"boolean"}},{name:"plain",description:"Flag to indicate if the input group item is plain.",required:!1,type:{name:"boolean"}},{name:"fill",description:"Flag to indicate if the input group item should fill the available horizontal space",required:!1,type:{name:"boolean"}},{name:"disabled",description:"Flag to indicate if the input group item is disabled.",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/InputGroup/InputGroupItem.vue"]}}),e(o,{src:"packages/core/src/components/InputGroup/InputGroupText.vue"})]),default:t(()=>[e(r,{title:"Default",source:`<pf-input-group>
  <pf-input-group-item fill>
    <pf-text-input type="email" />
  </pf-input-group-item>
  <pf-input-group-text>@example.com</pf-input-group-text>
</pf-input-group>`},{default:t(()=>[e(i,null,{default:t(()=>[e(a,{fill:""},{default:t(()=>[e(p,{type:"email"})]),_:1}),e(u,null,{default:t(()=>[s("@example.com")]),_:1})]),_:1})]),_:1}),e(r,{title:"With pre icon",source:`<pf-input-group>
  <pf-input-group-text>
    <at-icon />
  </pf-input-group-text>
  <pf-input-group-item>
    <pf-text-input type="email" />
  </pf-input-group-item>
</pf-input-group>`},{default:t(()=>[e(i,null,{default:t(()=>[e(u,null,{default:t(()=>[e(l(y))]),_:1}),e(a,null,{default:t(()=>[e(p,{type:"email"})]),_:1})]),_:1})]),_:1}),e(r,{title:"With post icon",source:`<pf-input-group>
  <pf-input-group-item>
    <pf-text-input type="search" />
  </pf-input-group-item>
  <pf-input-group-text>
    <magnifying-glass-icon />
  </pf-input-group-text>
</pf-input-group>`},{default:t(()=>[e(i,null,{default:t(()=>[e(a,null,{default:t(()=>[e(p,{type:"search"})]),_:1}),e(u,null,{default:t(()=>[e(l(h))]),_:1})]),_:1})]),_:1})]),_:1})}}});export{k as default};
