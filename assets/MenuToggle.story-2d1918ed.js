import{c as m}from"./createIcon-2cd979ad.js";import{e as x,a as d,o as h,c as y,w as t,b as e,g as a,t as l,u as c,d as g,p as k,k as C,_ as I}from"./index-49b72467.js";const A={name:"GearIcon",height:512,width:512,svgPath:"M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z",yOffset:0,xOffset:0},w=m(A),s=w,E={name:"EllipsisVerticalIcon",height:512,width:128,svgPath:"M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z",yOffset:0,xOffset:0},S=m(E),r=S,T=u=>(k("data-v-72562dab"),u=u(),C(),u),D=T(()=>g("div",{class:"markdown pf-c-content"},[g("p",null,[a("The "),g("strong",null,"menu toggle"),a(" component pairs with the menu OR the panel component to create more customizable dropdown and select implementations. Using a menu toggle with a menu enables you to create custom component configurations not supported by the standard dropdown or select components.")]),g("h2",{class:"pf-c-title"},"Examples")],-1)),N={style:{height:"80px"}},M=x({__name:"MenuToggle.story",setup(u){return(U,V)=>{const b=d("component-title"),n=d("pf-menu-toggle"),o=d("story-canvas"),_=d("pf-badge"),i=d("pf-menu-toggle-checkbox"),p=d("pf-menu-toggle-action"),f=d("pf-avatar"),v=d("doc-page");return h(),y(v,{title:"Menu toggle"},{default:t(()=>[e(b,{name:"pf-menu-toggle"}),D,e(o,{title:"Collapsed",source:"<pf-menu-toggle>Collapsed</pf-menu-toggle>"},{default:t(()=>[e(n,null,{default:t(()=>[a("Collapsed")]),_:1})]),_:1}),e(o,{title:"Expanded",source:"<pf-menu-toggle expanded>Expanded</pf-menu-toggle>"},{default:t(()=>[e(n,{expanded:""},{default:t(()=>[a("Expanded")]),_:1})]),_:1}),e(o,{title:"Disabled",source:"<pf-menu-toggle disabled>Disabled</pf-menu-toggle>"},{default:t(()=>[e(n,{disabled:""},{default:t(()=>[a("Disabled")]),_:1})]),_:1}),e(o,{title:"Count",source:`<pf-menu-toggle>
  Count
  <template #badge>
    <pf-badge>4 selected</pf-badge>
  </template>
</pf-menu-toggle>`},{default:t(()=>[e(n,null,{badge:t(()=>[e(_,null,{default:t(()=>[a("4 selected")]),_:1})]),default:t(()=>[a(" Count ")]),_:1})]),_:1}),e(o,{title:"Primary",source:`<pf-menu-toggle variant="primary">Collapsed</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="primary">
  <template #icon>
    <gear-icon></gear-icon>
  </template>
  Icon
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="primary" expanded>Expanded</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="primary" disabled>Disabled</pf-menu-toggle>`},{default:t(()=>[e(n,{variant:"primary"},{default:t(()=>[a("Collapsed")]),_:1}),a(" "+l(" ")+" "),e(n,{variant:"primary"},{icon:t(()=>[e(c(s))]),default:t(()=>[a(" Icon ")]),_:1}),a(" "+l(" ")+" "),e(n,{variant:"primary",expanded:""},{default:t(()=>[a("Expanded")]),_:1}),a(" "+l(" ")+" "),e(n,{variant:"primary",disabled:""},{default:t(()=>[a("Disabled")]),_:1})]),_:1}),e(o,{title:"Secondary",source:`<pf-menu-toggle variant="secondary">Collapsed</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="secondary">
  <template #icon>
    <gear-icon></gear-icon>
  </template>
  Icon
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="secondary" expanded>Expanded</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="secondary" disabled>Disabled</pf-menu-toggle>`},{default:t(()=>[e(n,{variant:"secondary"},{default:t(()=>[a("Collapsed")]),_:1}),a(" "+l(" ")+" "),e(n,{variant:"secondary"},{icon:t(()=>[e(c(s))]),default:t(()=>[a(" Icon ")]),_:1}),a(" "+l(" ")+" "),e(n,{variant:"secondary",expanded:""},{default:t(()=>[a("Expanded")]),_:1}),a(" "+l(" ")+" "),e(n,{variant:"secondary",disabled:""},{default:t(()=>[a("Disabled")]),_:1})]),_:1}),e(o,{title:"Plain",source:`<pf-menu-toggle variant="plain"><ellipsis-vertical-icon></ellipsis-vertical-icon></pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="plain" expanded><ellipsis-vertical-icon></ellipsis-vertical-icon></pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="plain" disabled><ellipsis-vertical-icon></ellipsis-vertical-icon></pf-menu-toggle>`},{default:t(()=>[e(n,{variant:"plain"},{default:t(()=>[e(c(r))]),_:1}),a(" "+l(" ")+" "),e(n,{variant:"plain",expanded:""},{default:t(()=>[e(c(r))]),_:1}),a(" "+l(" ")+" "),e(n,{variant:"plain",disabled:""},{default:t(()=>[e(c(r))]),_:1})]),_:1}),e(o,{title:"Plain with text",source:`<pf-menu-toggle variant="plainText">Custom text</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="plainText" expanded>Custom text (expanded)</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="plainText" disabled>Disabled</pf-menu-toggle>`},{default:t(()=>[e(n,{variant:"plainText"},{default:t(()=>[a("Custom text")]),_:1}),a(" "+l(" ")+" "),e(n,{variant:"plainText",expanded:""},{default:t(()=>[a("Custom text (expanded)")]),_:1}),a(" "+l(" ")+" "),e(n,{variant:"plainText",disabled:""},{default:t(()=>[a("Disabled")]),_:1})]),_:1}),e(o,{title:"Split button (checkbox)",source:`<pf-menu-toggle split-button>
  <pf-menu-toggle-checkbox></pf-menu-toggle-checkbox>
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle split-button expanded>
  <pf-menu-toggle-checkbox></pf-menu-toggle-checkbox>
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle split-button disabled>
  <pf-menu-toggle-checkbox disabled ></pf-menu-toggle-checkbox>
</pf-menu-toggle>`},{default:t(()=>[e(n,{"split-button":""},{default:t(()=>[e(i)]),_:1}),a(" "+l(" ")+" "),e(n,{"split-button":"",expanded:""},{default:t(()=>[e(i)]),_:1}),a(" "+l(" ")+" "),e(n,{"split-button":"",disabled:""},{default:t(()=>[e(i,{disabled:""})]),_:1})]),_:1}),e(o,{title:"Split button (checkbox with toggle text)",source:`<pf-menu-toggle split-button>
  <pf-menu-toggle-checkbox></pf-menu-toggle-checkbox> 10 selected
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle split-button expanded>
  <pf-menu-toggle-checkbox></pf-menu-toggle-checkbox> 10 selected
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle split-button disabled>
  <pf-menu-toggle-checkbox disabled ></pf-menu-toggle-checkbox> 10 selected
</pf-menu-toggle>`},{default:t(()=>[e(n,{"split-button":""},{default:t(()=>[e(i),a(" 10 selected ")]),_:1}),a(" "+l(" ")+" "),e(n,{"split-button":"",expanded:""},{default:t(()=>[e(i),a(" 10 selected ")]),_:1}),a(" "+l(" ")+" "),e(n,{"split-button":"",disabled:""},{default:t(()=>[e(i,{disabled:""}),a(" 10 selected ")]),_:1})]),_:1}),e(o,{title:"Split button (checkbox, primary)",source:`<pf-menu-toggle split-button variant="primary">
  <pf-menu-toggle-checkbox></pf-menu-toggle-checkbox> 10 selected
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle split-button variant="primary" expanded>
  <pf-menu-toggle-checkbox></pf-menu-toggle-checkbox> 10 selected
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle split-button variant="primary" disabled>
  <pf-menu-toggle-checkbox disabled ></pf-menu-toggle-checkbox> 10 selected
</pf-menu-toggle>`},{default:t(()=>[e(n,{"split-button":"",variant:"primary"},{default:t(()=>[e(i),a(" 10 selected ")]),_:1}),a(" "+l(" ")+" "),e(n,{"split-button":"",variant:"primary",expanded:""},{default:t(()=>[e(i),a(" 10 selected ")]),_:1}),a(" "+l(" ")+" "),e(n,{"split-button":"",variant:"primary",disabled:""},{default:t(()=>[e(i,{disabled:""}),a(" 10 selected ")]),_:1})]),_:1}),e(o,{title:"Split button (checkbox, secondary)",source:`<pf-menu-toggle split-button variant="secondary">
  <pf-menu-toggle-checkbox></pf-menu-toggle-checkbox> 10 selected
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle split-button variant="secondary" expanded>
  <pf-menu-toggle-checkbox></pf-menu-toggle-checkbox> 10 selected
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle split-button variant="secondary" disabled>
  <pf-menu-toggle-checkbox disabled ></pf-menu-toggle-checkbox> 10 selected
</pf-menu-toggle>`},{default:t(()=>[e(n,{"split-button":"",variant:"secondary"},{default:t(()=>[e(i),a(" 10 selected ")]),_:1}),a(" "+l(" ")+" "),e(n,{"split-button":"",variant:"secondary",expanded:""},{default:t(()=>[e(i),a(" 10 selected ")]),_:1}),a(" "+l(" ")+" "),e(n,{"split-button":"",variant:"secondary",disabled:""},{default:t(()=>[e(i,{disabled:""}),a(" 10 selected ")]),_:1})]),_:1}),e(o,{title:"Split button (action)",source:`<pf-menu-toggle split-button="action">
  <pf-menu-toggle-action>Action</pf-menu-toggle-action>
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle split-button="action" expanded>
  <pf-menu-toggle-action>Action</pf-menu-toggle-action>
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle split-button="action" disabled>
  <pf-menu-toggle-action disabled>Action</pf-menu-toggle-action>
</pf-menu-toggle>`},{default:t(()=>[e(n,{"split-button":"action"},{default:t(()=>[e(p,null,{default:t(()=>[a("Action")]),_:1})]),_:1}),a(" "+l(" ")+" "),e(n,{"split-button":"action",expanded:""},{default:t(()=>[e(p,null,{default:t(()=>[a("Action")]),_:1})]),_:1}),a(" "+l(" ")+" "),e(n,{"split-button":"action",disabled:""},{default:t(()=>[e(p,{disabled:""},{default:t(()=>[a("Action")]),_:1})]),_:1})]),_:1}),e(o,{title:"Split button (action, primary)",source:`<pf-menu-toggle split-button="action" variant="primary">
  <pf-menu-toggle-action>Action</pf-menu-toggle-action>
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle split-button="action" variant="primary" expanded>
  <pf-menu-toggle-action>Action</pf-menu-toggle-action>
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle split-button="action" variant="primary" disabled>
  <pf-menu-toggle-action disabled>Action</pf-menu-toggle-action>
</pf-menu-toggle>`},{default:t(()=>[e(n,{"split-button":"action",variant:"primary"},{default:t(()=>[e(p,null,{default:t(()=>[a("Action")]),_:1})]),_:1}),a(" "+l(" ")+" "),e(n,{"split-button":"action",variant:"primary",expanded:""},{default:t(()=>[e(p,null,{default:t(()=>[a("Action")]),_:1})]),_:1}),a(" "+l(" ")+" "),e(n,{"split-button":"action",variant:"primary",disabled:""},{default:t(()=>[e(p,{disabled:""},{default:t(()=>[a("Action")]),_:1})]),_:1})]),_:1}),e(o,{title:"Split button (action, secondary)",source:`<pf-menu-toggle split-button="action" variant="secondary">
  <pf-menu-toggle-action>Action</pf-menu-toggle-action>
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle split-button="action" variant="secondary" expanded>
  <pf-menu-toggle-action>Action</pf-menu-toggle-action>
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle split-button="action" variant="secondary" disabled>
  <pf-menu-toggle-action disabled>Action</pf-menu-toggle-action>
</pf-menu-toggle>`},{default:t(()=>[e(n,{"split-button":"action",variant:"secondary"},{default:t(()=>[e(p,null,{default:t(()=>[a("Action")]),_:1})]),_:1}),a(" "+l(" ")+" "),e(n,{"split-button":"action",variant:"secondary",expanded:""},{default:t(()=>[e(p,null,{default:t(()=>[a("Action")]),_:1})]),_:1}),a(" "+l(" ")+" "),e(n,{"split-button":"action",variant:"secondary",disabled:""},{default:t(()=>[e(p,{disabled:""},{default:t(()=>[a("Action")]),_:1})]),_:1})]),_:1}),e(o,{title:"With icon/image and text",source:`<pf-menu-toggle variant="secondary">
  <template #icon>
    <gear-icon></gear-icon>
  </template>
  Icon
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="secondary" disabled>
  <template #icon>
    <gear-icon></gear-icon>
  </template>
  Icon
</pf-menu-toggle>`},{default:t(()=>[e(n,{variant:"secondary"},{icon:t(()=>[e(c(s))]),default:t(()=>[a(" Icon ")]),_:1}),a(" "+l(" ")+" "),e(n,{variant:"secondary",disabled:""},{icon:t(()=>[e(c(s))]),default:t(()=>[a(" Icon ")]),_:1})]),_:1}),e(o,{title:"With avatar and text",source:`<pf-menu-toggle>
  <template #icon>
    <pf-avatar src="avatar.svg" alt="avatar" ></pf-avatar>
  </template>
  Ned Username
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle expanded>
  <template #icon>
    <pf-avatar src="avatar.svg" alt="avatar" ></pf-avatar>
  </template>
  Ned Username
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle disabled>
  <template #icon>
    <pf-avatar src="avatar.svg" alt="avatar" ></pf-avatar>
  </template>
  Ned Username
</pf-menu-toggle>`},{default:t(()=>[e(n,null,{icon:t(()=>[e(f,{src:"avatar.svg",alt:"avatar"})]),default:t(()=>[a(" Ned Username ")]),_:1}),a(" "+l(" ")+" "),e(n,{expanded:""},{icon:t(()=>[e(f,{src:"avatar.svg",alt:"avatar"})]),default:t(()=>[a(" Ned Username ")]),_:1}),a(" "+l(" ")+" "),e(n,{disabled:""},{icon:t(()=>[e(f,{src:"avatar.svg",alt:"avatar"})]),default:t(()=>[a(" Ned Username ")]),_:1})]),_:1}),e(o,{title:"Full height",source:`<div style="height:80px">
  <pf-menu-toggle full-height>Full height</pf-menu-toggle>
</div>`},{default:t(()=>[g("div",N,[e(n,{"full-height":""},{default:t(()=>[a("Full height")]),_:1})])]),_:1}),e(o,{title:"Full width",source:"<pf-menu-toggle full-width>Full width</pf-menu-toggle>"},{default:t(()=>[e(n,{"full-width":""},{default:t(()=>[a("Full width")]),_:1})]),_:1})]),_:1})}}});const O=I(M,[["__scopeId","data-v-72562dab"]]);export{O as default};
