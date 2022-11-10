import{c as f}from"./createIcon.b40e9d1d.js";import{M as r}from"./magnifying-glass-icon.d04a0e19.js";import{e as l,a as p,o as _,c as g,w as n,b as t,g as m,u as i}from"./index.96689797.js";const x={name:"AtIcon",height:512,width:512,svgPath:"M256 64C150 64 64 150 64 256s86 192 192 192c17.7 0 32 14.3 32 32s-14.3 32-32 32C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256v32c0 53-43 96-96 96c-29.3 0-55.6-13.2-73.2-33.9C320 371.1 289.5 384 256 384c-70.7 0-128-57.3-128-128s57.3-128 128-128c27.9 0 53.7 8.9 74.7 24.1c5.7-5 13.1-8.1 21.3-8.1c17.7 0 32 14.3 32 32v80 32c0 17.7 14.3 32 32 32s32-14.3 32-32V256c0-106-86-192-192-192zm64 192c0-35.3-28.7-64-64-64s-64 28.7-64 64s28.7 64 64 64s64-28.7 64-64z",yOffset:0,xOffset:0},d=f(x),y=d,G=l({__name:"InputGroup.story",setup(h){return(I,C)=>{const a=p("component-title"),e=p("pf-text-input"),o=p("pf-input-group-text"),u=p("pf-input-group"),c=p("story-canvas"),s=p("doc-page");return _(),g(s,{title:"Input Group"},{default:n(()=>[t(a,{name:"pf-input-group"}),t(c,{title:"Default",source:`<pf-input-group>
  <pf-text-input type="email" ></pf-text-input>
  <pf-input-group-text>@example.com</pf-input-group-text>
</pf-input-group>`},{default:n(()=>[t(u,null,{default:n(()=>[t(e,{type:"email"}),t(o,null,{default:n(()=>[m("@example.com")]),_:1})]),_:1})]),_:1}),t(c,{title:"With pre icon",source:`<pf-input-group>
  <pf-input-group-text>
    <at-icon></at-icon>
  </pf-input-group-text>
  <pf-text-input type="email" ></pf-text-input>
</pf-input-group>`},{default:n(()=>[t(u,null,{default:n(()=>[t(o,null,{default:n(()=>[t(i(y))]),_:1}),t(e,{type:"email"})]),_:1})]),_:1}),t(c,{title:"With post icon",source:`<pf-input-group>
  <pf-text-input type="search" ></pf-text-input>
  <pf-input-group-text>
    <magnifying-glass-icon></magnifying-glass-icon>
  </pf-input-group-text>
</pf-input-group>`},{default:n(()=>[t(u,null,{default:n(()=>[t(e,{type:"search"}),t(o,null,{default:n(()=>[t(i(r))]),_:1})]),_:1})]),_:1})]),_:1})}}});export{G as default};
