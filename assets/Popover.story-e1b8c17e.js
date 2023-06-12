import{_ as l,a as o,o as d,c as v,w as e,b as t,g as n,d as r}from"./index-943932dc.js";const f={},i=r("div",null,"Popover header",-1),m=r("div",null,"Popovers are triggered by click rather than hover.",-1);function u(h,g){const p=o("component-title"),a=o("pf-button"),c=o("pf-popover"),s=o("story-canvas"),_=o("doc-page");return d(),v(_,{title:"Popover"},{default:e(()=>[t(p,{name:"pf-popover"}),t(s,{title:"Example",source:`<pf-popover>
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
</pf-popover>`},{default:e(()=>[t(c,null,{header:e(()=>[i]),body:e(()=>[m]),footer:e(()=>[n(" Popover footer ")]),default:e(()=>[t(a,null,{default:e(()=>[n("Toggle popover")]),_:1})]),_:1})]),_:1})]),_:1})}const P=l(f,[["render",u]]);export{P as default};
