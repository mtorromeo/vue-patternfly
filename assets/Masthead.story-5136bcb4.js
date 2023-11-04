import{B as u}from"./bars-icon-e4ea93b8.js";import{e as b,a as t,o as v,c as x,w as n,b as a,u as c,g as e,d as l}from"./index-20e7d4ce.js";import"./createIcon-21000036.js";const B=l("div",{class:"markdown pf-v5-c-content"},[l("p",null,[e("A "),l("strong",null,"masthead"),e(" contains global properties such as logotype, navigation and settings in an organized fashion and it is accessible from all parts of the application. All pages should share a common masthead.")]),l("h2",{class:"pf-v5-c-title"},"Examples")],-1),I=l("span",null,"Content",-1),L=l("span",null,"Testing text color",-1),C=l("span",null,"Content",-1),y=l("span",null,"Content",-1),G=l("span",null,"Content",-1),k=l("span",null,"Content",-1),z=b({__name:"Masthead.story",setup(w){return(N,T)=>{const _=t("component-title"),o=t("pf-button"),s=t("pf-masthead-toggle"),p=t("pf-masthead-brand"),d=t("pf-masthead-main"),f=t("pf-masthead-content"),i=t("pf-masthead"),m=t("story-canvas"),r=t("pf-flex-item"),h=t("pf-flex"),g=t("doc-page");return v(),x(g,{title:"Masthead"},{default:n(()=>[a(_,{name:"pf-masthead"}),B,a(m,{title:"Basic",source:`<pf-masthead>
  <pf-masthead-toggle>
    <pf-button variant="plain" aria-label="Global navigation">
      <BarsIcon></BarsIcon>
    </pf-button>
  </pf-masthead-toggle>
  <pf-masthead-main>
    <pf-masthead-brand>Logo</pf-masthead-brand>
  </pf-masthead-main>
  <pf-masthead-content>
    <span>Content</span>
  </pf-masthead-content>
</pf-masthead>`},{default:n(()=>[a(i,null,{default:n(()=>[a(s,null,{default:n(()=>[a(o,{variant:"plain","aria-label":"Global navigation"},{default:n(()=>[a(c(u))]),_:1})]),_:1}),a(d,null,{default:n(()=>[a(p,null,{default:n(()=>[e("Logo")]),_:1})]),_:1}),a(f,null,{default:n(()=>[I]),_:1})]),_:1})]),_:1}),a(m,{title:"Basic with mixed content",source:`<pf-masthead>
  <pf-masthead-toggle>
    <pf-button variant="plain" aria-label="Global navigation">
      <BarsIcon></BarsIcon>
    </pf-button>
  </pf-masthead-toggle>
  <pf-masthead-main>
    <pf-masthead-brand>Logo</pf-masthead-brand>
  </pf-masthead-main>
  <pf-masthead-content>
    <pf-flex>
      <span>Testing text color</span>
      <pf-button>testing</pf-button>
      <pf-flex-item align-self="flex-end">
        <pf-button>testing</pf-button>
      </pf-flex-item>
    </pf-flex>
  </pf-masthead-content>
</pf-masthead>`},{default:n(()=>[a(i,null,{default:n(()=>[a(s,null,{default:n(()=>[a(o,{variant:"plain","aria-label":"Global navigation"},{default:n(()=>[a(c(u))]),_:1})]),_:1}),a(d,null,{default:n(()=>[a(p,null,{default:n(()=>[e("Logo")]),_:1})]),_:1}),a(f,null,{default:n(()=>[a(h,null,{default:n(()=>[L,a(o,null,{default:n(()=>[e("testing")]),_:1}),a(r,{"align-self":"flex-end"},{default:n(()=>[a(o,null,{default:n(()=>[e("testing")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(m,{title:"Display stack, display inline responsive",source:`<pf-masthead display="inline" display-lg="stack" display-2xl="inline">
  <pf-masthead-toggle>
    <pf-button variant="plain" aria-label="Global navigation">
      <BarsIcon></BarsIcon>
    </pf-button>
  </pf-masthead-toggle>
  <pf-masthead-main>
    <pf-masthead-brand>Logo</pf-masthead-brand>
  </pf-masthead-main>
  <pf-masthead-content>
    <span>Content</span>
  </pf-masthead-content>
</pf-masthead>`},{default:n(()=>[a(i,{display:"inline","display-lg":"stack","display-2xl":"inline"},{default:n(()=>[a(s,null,{default:n(()=>[a(o,{variant:"plain","aria-label":"Global navigation"},{default:n(()=>[a(c(u))]),_:1})]),_:1}),a(d,null,{default:n(()=>[a(p,null,{default:n(()=>[e("Logo")]),_:1})]),_:1}),a(f,null,{default:n(()=>[C]),_:1})]),_:1})]),_:1}),a(m,{title:"Light variant",source:`<pf-masthead background-color="light">
  <pf-masthead-toggle>
    <pf-button variant="plain" aria-label="Global navigation">
      <BarsIcon></BarsIcon>
    </pf-button>
  </pf-masthead-toggle>
  <pf-masthead-main>
    <pf-masthead-brand>Logo</pf-masthead-brand>
  </pf-masthead-main>
  <pf-masthead-content>
    <span>Content</span>
  </pf-masthead-content>
</pf-masthead>`},{default:n(()=>[a(i,{"background-color":"light"},{default:n(()=>[a(s,null,{default:n(()=>[a(o,{variant:"plain","aria-label":"Global navigation"},{default:n(()=>[a(c(u))]),_:1})]),_:1}),a(d,null,{default:n(()=>[a(p,null,{default:n(()=>[e("Logo")]),_:1})]),_:1}),a(f,null,{default:n(()=>[y]),_:1})]),_:1})]),_:1}),a(m,{title:"Light200 variant",source:`<pf-masthead background-color="light200">
  <pf-masthead-toggle>
    <pf-button variant="plain" aria-label="Global navigation">
      <BarsIcon></BarsIcon>
    </pf-button>
  </pf-masthead-toggle>
  <pf-masthead-main>
    <pf-masthead-brand>Logo</pf-masthead-brand>
  </pf-masthead-main>
  <pf-masthead-content>
    <span>Content</span>
  </pf-masthead-content>
</pf-masthead>`},{default:n(()=>[a(i,{"background-color":"light200"},{default:n(()=>[a(s,null,{default:n(()=>[a(o,{variant:"plain","aria-label":"Global navigation"},{default:n(()=>[a(c(u))]),_:1})]),_:1}),a(d,null,{default:n(()=>[a(p,null,{default:n(()=>[e("Logo")]),_:1})]),_:1}),a(f,null,{default:n(()=>[G]),_:1})]),_:1})]),_:1}),a(m,{title:"Inset",source:`<pf-masthead inset="sm">
  <pf-masthead-toggle>
    <pf-button variant="plain" aria-label="Global navigation">
      <BarsIcon></BarsIcon>
    </pf-button>
  </pf-masthead-toggle>
  <pf-masthead-main>
    <pf-masthead-brand>Logo</pf-masthead-brand>
  </pf-masthead-main>
  <pf-masthead-content>
    <span>Content</span>
  </pf-masthead-content>
</pf-masthead>`},{default:n(()=>[a(i,{inset:"sm"},{default:n(()=>[a(s,null,{default:n(()=>[a(o,{variant:"plain","aria-label":"Global navigation"},{default:n(()=>[a(c(u))]),_:1})]),_:1}),a(d,null,{default:n(()=>[a(p,null,{default:n(()=>[e("Logo")]),_:1})]),_:1}),a(f,null,{default:n(()=>[k]),_:1})]),_:1})]),_:1})]),_:1})}}});export{z as default};
