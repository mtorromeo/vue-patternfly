import{G as s}from"./gear-icon-dad29f92.js";import{E as r}from"./ellipsis-vertical-icon-bb94c9ab.js";import{e as v,a as d,o as x,c as h,w as t,b as e,g as a,t as l,u,d as g,p as y,k,_ as A}from"./index-181aa998.js";import"./createIcon-41a437a1.js";const C=c=>(y("data-v-33033df3"),c=c(),k(),c),w=C(()=>g("div",{class:"markdown pf-v5-c-content"},[g("p",null,[a("The "),g("strong",null,"menu toggle"),a(" component pairs with the menu OR the panel component to create more customizable dropdown and select implementations. Using a menu toggle with a menu enables you to create custom component configurations not supported by the standard dropdown or select components.")]),g("h2",{class:"pf-v5-c-title"},"Examples")],-1)),I={style:{height:"80px"}},S=v({__name:"MenuToggle.story",setup(c){return(T,D)=>{const m=d("component-title"),n=d("pf-menu-toggle"),o=d("story-canvas"),b=d("pf-badge"),i=d("pf-menu-toggle-checkbox"),p=d("pf-menu-toggle-action"),f=d("pf-avatar"),_=d("doc-page");return x(),h(_,{title:"Menu toggle"},{default:t(()=>[e(m,{name:"pf-menu-toggle"}),w,e(o,{title:"Collapsed",source:"<pf-menu-toggle>Collapsed</pf-menu-toggle>"},{default:t(()=>[e(n,null,{default:t(()=>[a("Collapsed")]),_:1})]),_:1}),e(o,{title:"Expanded",source:"<pf-menu-toggle expanded>Expanded</pf-menu-toggle>"},{default:t(()=>[e(n,{expanded:""},{default:t(()=>[a("Expanded")]),_:1})]),_:1}),e(o,{title:"Disabled",source:"<pf-menu-toggle disabled>Disabled</pf-menu-toggle>"},{default:t(()=>[e(n,{disabled:""},{default:t(()=>[a("Disabled")]),_:1})]),_:1}),e(o,{title:"Count",source:`<pf-menu-toggle>
  Count
  <template #badge>
    <pf-badge>4 selected</pf-badge>
  </template>
</pf-menu-toggle>`},{default:t(()=>[e(n,null,{badge:t(()=>[e(b,null,{default:t(()=>[a("4 selected")]),_:1})]),default:t(()=>[a(" Count ")]),_:1})]),_:1}),e(o,{title:"Primary",source:`<pf-menu-toggle variant="primary">Collapsed</pf-menu-toggle>
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
<pf-menu-toggle variant="primary" disabled>Disabled</pf-menu-toggle>`},{default:t(()=>[e(n,{variant:"primary"},{default:t(()=>[a("Collapsed")]),_:1}),a(" "+l(" ")+" "),e(n,{variant:"primary"},{icon:t(()=>[e(u(s))]),default:t(()=>[a(" Icon ")]),_:1}),a(" "+l(" ")+" "),e(n,{variant:"primary",expanded:""},{default:t(()=>[a("Expanded")]),_:1}),a(" "+l(" ")+" "),e(n,{variant:"primary",disabled:""},{default:t(()=>[a("Disabled")]),_:1})]),_:1}),e(o,{title:"Secondary",source:`<pf-menu-toggle variant="secondary">Collapsed</pf-menu-toggle>
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
<pf-menu-toggle variant="secondary" disabled>Disabled</pf-menu-toggle>`},{default:t(()=>[e(n,{variant:"secondary"},{default:t(()=>[a("Collapsed")]),_:1}),a(" "+l(" ")+" "),e(n,{variant:"secondary"},{icon:t(()=>[e(u(s))]),default:t(()=>[a(" Icon ")]),_:1}),a(" "+l(" ")+" "),e(n,{variant:"secondary",expanded:""},{default:t(()=>[a("Expanded")]),_:1}),a(" "+l(" ")+" "),e(n,{variant:"secondary",disabled:""},{default:t(()=>[a("Disabled")]),_:1})]),_:1}),e(o,{title:"Plain",source:`<pf-menu-toggle variant="plain"><ellipsis-vertical-icon></ellipsis-vertical-icon></pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="plain" expanded><ellipsis-vertical-icon></ellipsis-vertical-icon></pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="plain" disabled><ellipsis-vertical-icon></ellipsis-vertical-icon></pf-menu-toggle>`},{default:t(()=>[e(n,{variant:"plain"},{default:t(()=>[e(u(r))]),_:1}),a(" "+l(" ")+" "),e(n,{variant:"plain",expanded:""},{default:t(()=>[e(u(r))]),_:1}),a(" "+l(" ")+" "),e(n,{variant:"plain",disabled:""},{default:t(()=>[e(u(r))]),_:1})]),_:1}),e(o,{title:"Plain with text",source:`<pf-menu-toggle variant="plainText">Custom text</pf-menu-toggle>
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
</pf-menu-toggle>`},{default:t(()=>[e(n,{variant:"secondary"},{icon:t(()=>[e(u(s))]),default:t(()=>[a(" Icon ")]),_:1}),a(" "+l(" ")+" "),e(n,{variant:"secondary",disabled:""},{icon:t(()=>[e(u(s))]),default:t(()=>[a(" Icon ")]),_:1})]),_:1}),e(o,{title:"With avatar and text",source:`<pf-menu-toggle>
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
</div>`},{default:t(()=>[g("div",I,[e(n,{"full-height":""},{default:t(()=>[a("Full height")]),_:1})])]),_:1}),e(o,{title:"Full width",source:"<pf-menu-toggle full-width>Full width</pf-menu-toggle>"},{default:t(()=>[e(n,{"full-width":""},{default:t(()=>[a("Full width")]),_:1})]),_:1})]),_:1})}}});const M=A(S,[["__scopeId","data-v-33033df3"]]);export{M as default};
