import{_ as d,a as o,c as l,w as e,o as v,b as t,j as n,d as r}from"./index.697aafd2.js";const f={},i=n("Toggle popover"),m=r("div",null,"Popover header",-1),h=r("div",null,"Popovers are triggered by click rather than hover.",-1),u=n(" Popover footer ");function g(b,P){const p=o("component-title"),a=o("pf-button"),c=o("pf-popover"),s=o("story-canvas"),_=o("doc-page");return v(),l(_,{title:"Popover"},{default:e(()=>[t(p,{name:"pf-popover"}),t(s,{title:"Example",source:`<pf-popover>
  <pf-button>Toggle popover</pf-button>

  <template #header>
    <div>Popover header</div>
  </template>
  <template #body>
    <div>Popovers are triggered by click rather than hover.</div>
  </template>
  <template #footer>
    Popover footer
  </template>
</pf-popover>`},{default:e(()=>[t(c,null,{header:e(()=>[m]),body:e(()=>[h]),footer:e(()=>[u]),default:e(()=>[t(a,null,{default:e(()=>[i]),_:1})]),_:1})]),_:1})]),_:1})}const x=d(f,[["render",g]]);export{x as default};
