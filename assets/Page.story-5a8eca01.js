import{B as H}from"./bell-icon-5d8eda5b.js";import{e as O,r as B,a,o as W,c as D,w as e,b as t,g as n,u as M,d as o}from"./index-181aa998.js";import"./createIcon-41a437a1.js";const T=o("div",{class:"markdown pf-v5-c-content"},[o("p",null,[n("The "),o("strong",null,"page"),n(" component is used to define the basic layout of a page with either vertical or horizontal navigation. See full "),o("a",{href:"https://www.patternfly.org/v4/components/page/design-guidelines"},"Design guidelines"),n(" on the official patternfly documentation.")]),o("h2",{class:"pf-v5-c-title"},"Differences from patternfly-react"),o("ul",null,[o("li",null,[o("code",null,"pf-page-breadcrumb"),n(", "),o("code",null,"pf-page-navigation"),n(" and "),o("code",null,"pf-page-section"),n(" can be limited in width by setting their "),o("code",null,"max-width"),n(" prop.")])])],-1),N=o("code",null,"--pf-v5-c-page--section--m-limit-width--MaxWidth",-1),V=o("br",null,null,-1),q=o("br",null,null,-1),F=O({__name:"Page.story",setup(P){const d=B(!1);return(z,b)=>{const w=a("component-title"),f=a("pf-brand"),s=a("pf-page-header-tools-item"),c=a("pf-page-header-tools-group"),g=a("pf-page-header-tools"),u=a("pf-page-header"),p=a("pf-nav-item"),i=a("pf-nav-group"),m=a("pf-nav"),_=a("pf-page-sidebar"),r=a("pf-breadcrumb-item"),y=a("pf-breadcrumb"),k=a("pf-page-breadcrumb"),l=a("pf-page-section"),h=a("pf-page"),v=a("story-canvas"),x=a("pf-card-body"),S=a("pf-card"),A=a("pf-button"),C=a("doc-page");return W(),D(C,{title:"Page"},{default:e(()=>[t(w,{name:"pf-page"}),T,t(v,{title:"Example",source:`<pf-page managed-sidebar>
  <template #skeleton>
    <pf-page-header show-nav-toggle>
      <template #logo>
        <pf-brand src="https://www.patternfly.org/assets/images/pf_logo.svg" style="height:40px;filter:invert(1)" ></pf-brand>
      </template>
      <pf-page-header-tools>
        <pf-page-header-tools-group>
          <pf-page-header-tools-item visibility-sm="hidden">
            header-tools
          </pf-page-header-tools-item>
        </pf-page-header-tools-group>
      </pf-page-header-tools>
    </pf-page-header>
    <pf-page-sidebar nav-open>
      <pf-nav>
        <pf-nav-group title="Overview">
          <pf-nav-item>Home</pf-nav-item>
        </pf-nav-group>
        <pf-nav-group title="Components">
          <pf-nav-item>Accordion</pf-nav-item>
          <pf-nav-item>Alert</pf-nav-item>
        </pf-nav-group>
      </pf-nav>
    </pf-page-sidebar>
  </template>
  <pf-page-breadcrumb sticky="top" shadow-bottom>
    <pf-breadcrumb>
      <pf-breadcrumb-item href="#">Section home</pf-breadcrumb-item>
      <pf-breadcrumb-item href="#">Section title</pf-breadcrumb-item>
      <pf-breadcrumb-item href="#">Section title</pf-breadcrumb-item>
      <pf-breadcrumb-item href="#" active>Section landing</pf-breadcrumb-item>
    </pf-breadcrumb>
  </pf-page-breadcrumb>
  <pf-page-section variant="darker">Section with darker background</pf-page-section>
  <pf-page-section variant="dark">Section with dark background</pf-page-section>
  <pf-page-section variant="light">Section with light background</pf-page-section>
  <pf-page-section width-limited>Section with limited width</pf-page-section>
</pf-page>`},{default:e(()=>[t(h,{"managed-sidebar":""},{skeleton:e(()=>[t(u,{"show-nav-toggle":""},{logo:e(()=>[t(f,{src:"https://www.patternfly.org/assets/images/pf_logo.svg",style:{height:"40px",filter:"invert(1)"}})]),default:e(()=>[t(g,null,{default:e(()=>[t(c,null,{default:e(()=>[t(s,{"visibility-sm":"hidden"},{default:e(()=>[n(" header-tools ")]),_:1})]),_:1})]),_:1})]),_:1}),t(_,{"nav-open":""},{default:e(()=>[t(m,null,{default:e(()=>[t(i,{title:"Overview"},{default:e(()=>[t(p,null,{default:e(()=>[n("Home")]),_:1})]),_:1}),t(i,{title:"Components"},{default:e(()=>[t(p,null,{default:e(()=>[n("Accordion")]),_:1}),t(p,null,{default:e(()=>[n("Alert")]),_:1})]),_:1})]),_:1})]),_:1})]),default:e(()=>[t(k,{sticky:"top","shadow-bottom":""},{default:e(()=>[t(y,null,{default:e(()=>[t(r,{href:"#"},{default:e(()=>[n("Section home")]),_:1}),t(r,{href:"#"},{default:e(()=>[n("Section title")]),_:1}),t(r,{href:"#"},{default:e(()=>[n("Section title")]),_:1}),t(r,{href:"#",active:""},{default:e(()=>[n("Section landing")]),_:1})]),_:1})]),_:1}),t(l,{variant:"darker"},{default:e(()=>[n("Section with darker background")]),_:1}),t(l,{variant:"dark"},{default:e(()=>[n("Section with dark background")]),_:1}),t(l,{variant:"light"},{default:e(()=>[n("Section with light background")]),_:1}),t(l,{"width-limited":""},{default:e(()=>[n("Section with limited width")]),_:1})]),_:1})]),_:1}),t(v,{title:"Centered",source:`<pf-page managed-sidebar>
  <template #skeleton>
    <pf-page-header show-nav-toggle>
      <template #logo>
        <pf-brand src="https://www.patternfly.org/assets/images/pf_logo.svg" style="height:40px;filter:invert(1)" ></pf-brand>
      </template>
      <pf-page-header-tools>
        <pf-page-header-tools-group>
          <pf-page-header-tools-item visibility-sm="hidden">
            header-tools
          </pf-page-header-tools-item>
        </pf-page-header-tools-group>
      </pf-page-header-tools>
    </pf-page-header>
    <pf-page-sidebar nav-open>
      <pf-nav>
        <pf-nav-group title="Overview">
          <pf-nav-item>Home</pf-nav-item>
        </pf-nav-group>
        <pf-nav-group title="Components">
          <pf-nav-item>Accordion</pf-nav-item>
          <pf-nav-item>Alert</pf-nav-item>
        </pf-nav-group>
      </pf-nav>
    </pf-page-sidebar>
  </template>
  <pf-page-section max-width="20rem" center-aligned sticky-sm="bottom">
    <pf-card>
      <pf-card-body>
        When a width limited page section is wider than the value of
        <code>--pf-v5-c-page--section--m-limit-width--MaxWidth</code>, the section will be centered in the main
        section.
        <br>
        <br>
        The content in this example is placed in a card to better illustrate how the section behaves when it is
        centered. A card is not required to center a page section.
      </pf-card-body>
    </pf-card>
  </pf-page-section>
</pf-page>`},{default:e(()=>[t(h,{"managed-sidebar":""},{skeleton:e(()=>[t(u,{"show-nav-toggle":""},{logo:e(()=>[t(f,{src:"https://www.patternfly.org/assets/images/pf_logo.svg",style:{height:"40px",filter:"invert(1)"}})]),default:e(()=>[t(g,null,{default:e(()=>[t(c,null,{default:e(()=>[t(s,{"visibility-sm":"hidden"},{default:e(()=>[n(" header-tools ")]),_:1})]),_:1})]),_:1})]),_:1}),t(_,{"nav-open":""},{default:e(()=>[t(m,null,{default:e(()=>[t(i,{title:"Overview"},{default:e(()=>[t(p,null,{default:e(()=>[n("Home")]),_:1})]),_:1}),t(i,{title:"Components"},{default:e(()=>[t(p,null,{default:e(()=>[n("Accordion")]),_:1}),t(p,null,{default:e(()=>[n("Alert")]),_:1})]),_:1})]),_:1})]),_:1})]),default:e(()=>[t(l,{"max-width":"20rem","center-aligned":"","sticky-sm":"bottom"},{default:e(()=>[t(S,null,{default:e(()=>[t(x,null,{default:e(()=>[n(" When a width limited page section is wider than the value of "),N,n(", the section will be centered in the main section. "),V,q,n(" The content in this example is placed in a card to better illustrate how the section behaves when it is centered. A card is not required to center a page section. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(v,{title:"With notification drawer",source:`<pf-page managed-sidebar :drawer-expanded="expanded">
  <template #skeleton>
    <pf-page-header show-nav-toggle>

      <template #logo>
        <pf-brand src="https://www.patternfly.org/assets/images/pf_logo.svg" style="height:40px;filter:invert(1)" ></pf-brand>
      </template>

      <pf-page-header-tools>
        <pf-page-header-tools-group>
          <pf-page-header-tools-item>
            <pf-button variant="plain" @click="expanded = !expanded">
              <bell-icon></bell-icon>
            </pf-button>
          </pf-page-header-tools-item>
        </pf-page-header-tools-group>
      </pf-page-header-tools>

    </pf-page-header>

    <pf-page-sidebar nav-open>
      <pf-nav>
        <pf-nav-group title="Overview">
          <pf-nav-item>Home</pf-nav-item>
        </pf-nav-group>
        <pf-nav-group title="Components">
          <pf-nav-item>Accordion</pf-nav-item>
          <pf-nav-item>Alert</pf-nav-item>
        </pf-nav-group>
      </pf-nav>
    </pf-page-sidebar>
  </template>

  <template #drawer>
    Drawer content
  </template>

  <pf-page-section>
    Main section
  </pf-page-section>
</pf-page>`},{default:e(()=>[t(h,{"managed-sidebar":"","drawer-expanded":d.value},{skeleton:e(()=>[t(u,{"show-nav-toggle":""},{logo:e(()=>[t(f,{src:"https://www.patternfly.org/assets/images/pf_logo.svg",style:{height:"40px",filter:"invert(1)"}})]),default:e(()=>[t(g,null,{default:e(()=>[t(c,null,{default:e(()=>[t(s,null,{default:e(()=>[t(A,{variant:"plain",onClick:b[0]||(b[0]=E=>d.value=!d.value)},{default:e(()=>[t(M(H))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(_,{"nav-open":""},{default:e(()=>[t(m,null,{default:e(()=>[t(i,{title:"Overview"},{default:e(()=>[t(p,null,{default:e(()=>[n("Home")]),_:1})]),_:1}),t(i,{title:"Components"},{default:e(()=>[t(p,null,{default:e(()=>[n("Accordion")]),_:1}),t(p,null,{default:e(()=>[n("Alert")]),_:1})]),_:1})]),_:1})]),_:1})]),drawer:e(()=>[n(" Drawer content ")]),default:e(()=>[t(l,null,{default:e(()=>[n(" Main section ")]),_:1})]),_:1},8,["drawer-expanded"])]),_:1})]),_:1})}}});export{F as default};
