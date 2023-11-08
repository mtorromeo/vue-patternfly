import{e as b,a as t,o as v,c as x,w as n,b as a,u as m,B as _,g as e,d as l}from"./index-7e86e6f9.js";const L=l("div",{class:"markdown pf-v5-c-content"},[l("p",null,[e("A "),l("strong",null,"masthead"),e(" contains global properties such as logotype, navigation and settings in an organized fashion and it is accessible from all parts of the application. All pages should share a common masthead.")]),l("h2",{class:"pf-v5-c-title"},"Examples")],-1),B=l("span",null,"Content",-1),C=l("span",null,"Testing text color",-1),y=l("span",null,"Content",-1),G=l("span",null,"Content",-1),k=l("span",null,"Content",-1),I=l("span",null,"Content",-1),A=b({__name:"Masthead.story",setup(w){return(N,T)=>{const c=t("component-title"),o=t("pf-button"),s=t("pf-masthead-toggle"),d=t("pf-masthead-brand"),p=t("pf-masthead-main"),f=t("pf-masthead-content"),i=t("pf-masthead"),u=t("story-canvas"),h=t("pf-flex-item"),r=t("pf-flex"),g=t("doc-page");return v(),x(g,{title:"Masthead"},{default:n(()=>[a(c,{name:"pf-masthead"}),L,a(u,{title:"Basic",source:`<pf-masthead>
  <pf-masthead-toggle>
    <pf-button variant="plain" aria-label="Global navigation">
      <BarsIcon />
    </pf-button>
  </pf-masthead-toggle>
  <pf-masthead-main>
    <pf-masthead-brand>Logo</pf-masthead-brand>
  </pf-masthead-main>
  <pf-masthead-content>
    <span>Content</span>
  </pf-masthead-content>
</pf-masthead>`},{default:n(()=>[a(i,null,{default:n(()=>[a(s,null,{default:n(()=>[a(o,{variant:"plain","aria-label":"Global navigation"},{default:n(()=>[a(m(_))]),_:1})]),_:1}),a(p,null,{default:n(()=>[a(d,null,{default:n(()=>[e("Logo")]),_:1})]),_:1}),a(f,null,{default:n(()=>[B]),_:1})]),_:1})]),_:1}),a(u,{title:"Basic with mixed content",source:`<pf-masthead>
  <pf-masthead-toggle>
    <pf-button variant="plain" aria-label="Global navigation">
      <BarsIcon />
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
</pf-masthead>`},{default:n(()=>[a(i,null,{default:n(()=>[a(s,null,{default:n(()=>[a(o,{variant:"plain","aria-label":"Global navigation"},{default:n(()=>[a(m(_))]),_:1})]),_:1}),a(p,null,{default:n(()=>[a(d,null,{default:n(()=>[e("Logo")]),_:1})]),_:1}),a(f,null,{default:n(()=>[a(r,null,{default:n(()=>[C,a(o,null,{default:n(()=>[e("testing")]),_:1}),a(h,{"align-self":"flex-end"},{default:n(()=>[a(o,null,{default:n(()=>[e("testing")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(u,{title:"Display stack, display inline responsive",source:`<pf-masthead display="inline" display-lg="stack" display-2xl="inline">
  <pf-masthead-toggle>
    <pf-button variant="plain" aria-label="Global navigation">
      <BarsIcon />
    </pf-button>
  </pf-masthead-toggle>
  <pf-masthead-main>
    <pf-masthead-brand>Logo</pf-masthead-brand>
  </pf-masthead-main>
  <pf-masthead-content>
    <span>Content</span>
  </pf-masthead-content>
</pf-masthead>`},{default:n(()=>[a(i,{display:"inline","display-lg":"stack","display-2xl":"inline"},{default:n(()=>[a(s,null,{default:n(()=>[a(o,{variant:"plain","aria-label":"Global navigation"},{default:n(()=>[a(m(_))]),_:1})]),_:1}),a(p,null,{default:n(()=>[a(d,null,{default:n(()=>[e("Logo")]),_:1})]),_:1}),a(f,null,{default:n(()=>[y]),_:1})]),_:1})]),_:1}),a(u,{title:"Light variant",source:`<pf-masthead background-color="light">
  <pf-masthead-toggle>
    <pf-button variant="plain" aria-label="Global navigation">
      <BarsIcon />
    </pf-button>
  </pf-masthead-toggle>
  <pf-masthead-main>
    <pf-masthead-brand>Logo</pf-masthead-brand>
  </pf-masthead-main>
  <pf-masthead-content>
    <span>Content</span>
  </pf-masthead-content>
</pf-masthead>`},{default:n(()=>[a(i,{"background-color":"light"},{default:n(()=>[a(s,null,{default:n(()=>[a(o,{variant:"plain","aria-label":"Global navigation"},{default:n(()=>[a(m(_))]),_:1})]),_:1}),a(p,null,{default:n(()=>[a(d,null,{default:n(()=>[e("Logo")]),_:1})]),_:1}),a(f,null,{default:n(()=>[G]),_:1})]),_:1})]),_:1}),a(u,{title:"Light200 variant",source:`<pf-masthead background-color="light200">
  <pf-masthead-toggle>
    <pf-button variant="plain" aria-label="Global navigation">
      <BarsIcon />
    </pf-button>
  </pf-masthead-toggle>
  <pf-masthead-main>
    <pf-masthead-brand>Logo</pf-masthead-brand>
  </pf-masthead-main>
  <pf-masthead-content>
    <span>Content</span>
  </pf-masthead-content>
</pf-masthead>`},{default:n(()=>[a(i,{"background-color":"light200"},{default:n(()=>[a(s,null,{default:n(()=>[a(o,{variant:"plain","aria-label":"Global navigation"},{default:n(()=>[a(m(_))]),_:1})]),_:1}),a(p,null,{default:n(()=>[a(d,null,{default:n(()=>[e("Logo")]),_:1})]),_:1}),a(f,null,{default:n(()=>[k]),_:1})]),_:1})]),_:1}),a(u,{title:"Inset",source:`<pf-masthead inset="sm">
  <pf-masthead-toggle>
    <pf-button variant="plain" aria-label="Global navigation">
      <BarsIcon />
    </pf-button>
  </pf-masthead-toggle>
  <pf-masthead-main>
    <pf-masthead-brand>Logo</pf-masthead-brand>
  </pf-masthead-main>
  <pf-masthead-content>
    <span>Content</span>
  </pf-masthead-content>
</pf-masthead>`},{default:n(()=>[a(i,{inset:"sm"},{default:n(()=>[a(s,null,{default:n(()=>[a(o,{variant:"plain","aria-label":"Global navigation"},{default:n(()=>[a(m(_))]),_:1})]),_:1}),a(p,null,{default:n(()=>[a(d,null,{default:n(()=>[e("Logo")]),_:1})]),_:1}),a(f,null,{default:n(()=>[I]),_:1})]),_:1})]),_:1})]),_:1})}}});export{A as default};
