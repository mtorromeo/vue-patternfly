import{_ as i,a as o,o as l,c as _,w as e,b as t,d as n,e as r}from"./index-lgjncdPo.js";const v={},f=r("b",null,"popover",-1),m=r("div",null,"Popover header",-1),u=r("div",null,"Popovers are triggered by click rather than hover.",-1);function h(g,b){const p=o("component-info"),a=o("pf-button"),c=o("pf-popover"),s=o("story-canvas"),d=o("doc-page");return l(),_(d,{name:"Components/Popover.story.vue",title:"Popover"},{description:e(()=>[t("A "),f,t(" is in-app messaging that provides more information on specific product areas. Popovers display content in a new window that overlays the current page. Unlike modals, popovers don't block the current page.")]),apidocs:e(()=>[n(p,{src:"packages/core/src/components/Popover.vue"})]),default:e(()=>[n(s,{title:"Example",source:`<pf-popover>
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
</pf-popover>`},{default:e(()=>[n(c,null,{header:e(()=>[m]),body:e(()=>[u]),footer:e(()=>[t(" Popover footer ")]),default:e(()=>[n(a,null,{default:e(()=>[t("Toggle popover")]),_:1})]),_:1})]),_:1})]),_:1},8,["name"])}const y=i(v,[["render",h]]);export{y as default};
