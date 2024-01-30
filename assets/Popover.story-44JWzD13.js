import{_ as i,o as _,c as l,w as o,a as t,b as n,d as p,e}from"./index-HBVQKJa5.js";const v={},f=p("b",null,"popover",-1),m=p("div",null,"Popover header",-1),u=p("div",null,"Popovers are triggered by click rather than hover.",-1);function h(g,b){const r=e("component-info"),a=e("pf-button"),c=e("pf-popover"),s=e("story-canvas"),d=e("doc-page");return _(),l(d,{name:"Components/Popover.story.vue",title:"Popover"},{description:o(()=>[t("A "),f,t(" is in-app messaging that provides more information on specific product areas. Popovers display content in a new window that overlays the current page. Unlike modals, popovers don't block the current page.")]),apidocs:o(()=>[n(r,{src:"packages/core/src/components/Popover.vue"})]),default:o(()=>[n(s,{title:"Example",source:`<pf-popover append-to="body">
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
</pf-popover>`},{default:o(()=>[n(c,{"append-to":"body"},{header:o(()=>[m]),body:o(()=>[u]),footer:o(()=>[t(" Popover footer ")]),default:o(()=>[n(a,null,{default:o(()=>[t("Toggle popover")]),_:1})]),_:1})]),_:1})]),_:1},8,["name"])}const P=i(v,[["render",h]]);export{P as default};
