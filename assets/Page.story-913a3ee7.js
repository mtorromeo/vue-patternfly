import{_ as y,a,o as k,c as x,w as e,b as t,g as n,d as o}from"./index-583442e7.js";const A={},S=o("div",{class:"markdown pf-c-content"},[o("p",null,[n("The "),o("strong",null,"page"),n(" component is used to define the basic layout of a page with either vertical or horizontal navigation. See full "),o("a",{href:"https://www.patternfly.org/v4/components/page/design-guidelines"},"Design guidelines"),n(" on the official patternfly documentation.")]),o("h2",{class:"pf-c-title"},"Differences from patternfly-react"),o("ul",null,[o("li",null,[n("The additional "),o("code",null,"breadcrumb-sticky-top"),n(" prop allows to set the breadcrumb slot as sticky.")]),o("li",null,[o("code",null,"pf-page-section"),n(" can be limited in width by setting its "),o("code",null,"max-width"),n(" prop.")])])],-1),C=o("code",null,"--pf-c-page--section--m-limit-width--MaxWidth",-1),T=o("br",null,null,-1),H=o("br",null,null,-1);function O(W,B){const m=a("component-title"),s=a("pf-brand"),r=a("pf-page-header-tools-item"),d=a("pf-page-header-tools-group"),c=a("pf-page-header-tools"),f=a("pf-page-header"),p=a("pf-nav-item"),l=a("pf-nav-group"),g=a("pf-nav"),_=a("pf-page-sidebar"),i=a("pf-page-section"),h=a("pf-page"),u=a("story-canvas"),v=a("pf-card-body"),w=a("pf-card"),b=a("doc-page");return k(),x(b,{title:"Page"},{default:e(()=>[t(m,{name:"pf-page"}),S,t(u,{title:"Example",source:`<pf-page managed-sidebar>
  <template #skeleton>
    <pf-page-header show-nav-toggle>
      <template #logo>
        <pf-brand src="https://www.patternfly.org/assets/images/pf_logo.svg" style="height:40px;filter:invert(1)" />
      </template>
      <pf-page-header-tools>
        <pf-page-header-tools-group>
          <pf-page-header-tools-item visibility-xs="hidden">
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
  <pf-page-section variant="darker">Section with darker background</pf-page-section>
  <pf-page-section variant="dark">Section with dark background</pf-page-section>
  <pf-page-section variant="light">Section with light background</pf-page-section>
  <pf-page-section width-limited>Section with limited width</pf-page-section>
</pf-page>`},{default:e(()=>[t(h,{"managed-sidebar":""},{skeleton:e(()=>[t(f,{"show-nav-toggle":""},{logo:e(()=>[t(s,{src:"https://www.patternfly.org/assets/images/pf_logo.svg",style:{height:"40px",filter:"invert(1)"}})]),default:e(()=>[t(c,null,{default:e(()=>[t(d,null,{default:e(()=>[t(r,{"visibility-xs":"hidden"},{default:e(()=>[n(" header-tools ")]),_:1})]),_:1})]),_:1})]),_:1}),t(_,{"nav-open":""},{default:e(()=>[t(g,null,{default:e(()=>[t(l,{title:"Overview"},{default:e(()=>[t(p,null,{default:e(()=>[n("Home")]),_:1})]),_:1}),t(l,{title:"Components"},{default:e(()=>[t(p,null,{default:e(()=>[n("Accordion")]),_:1}),t(p,null,{default:e(()=>[n("Alert")]),_:1})]),_:1})]),_:1})]),_:1})]),default:e(()=>[t(i,{variant:"darker"},{default:e(()=>[n("Section with darker background")]),_:1}),t(i,{variant:"dark"},{default:e(()=>[n("Section with dark background")]),_:1}),t(i,{variant:"light"},{default:e(()=>[n("Section with light background")]),_:1}),t(i,{"width-limited":""},{default:e(()=>[n("Section with limited width")]),_:1})]),_:1})]),_:1}),t(u,{title:"Centered",source:`<pf-page managed-sidebar>
  <template #skeleton>
    <pf-page-header show-nav-toggle>
      <template #logo>
        <pf-brand src="https://www.patternfly.org/assets/images/pf_logo.svg" style="height:40px;filter:invert(1)" />
      </template>
      <pf-page-header-tools>
        <pf-page-header-tools-group>
          <pf-page-header-tools-item visibility-xs="hidden">
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
        <code>--pf-c-page--section--m-limit-width--MaxWidth</code>, the section will be centered in the main
        section.
        <br>
        <br>
        The content in this example is placed in a card to better illustrate how the section behaves when it is
        centered. A card is not required to center a page section.
      </pf-card-body>
    </pf-card>
  </pf-page-section>
</pf-page>`},{default:e(()=>[t(h,{"managed-sidebar":""},{skeleton:e(()=>[t(f,{"show-nav-toggle":""},{logo:e(()=>[t(s,{src:"https://www.patternfly.org/assets/images/pf_logo.svg",style:{height:"40px",filter:"invert(1)"}})]),default:e(()=>[t(c,null,{default:e(()=>[t(d,null,{default:e(()=>[t(r,{"visibility-xs":"hidden"},{default:e(()=>[n(" header-tools ")]),_:1})]),_:1})]),_:1})]),_:1}),t(_,{"nav-open":""},{default:e(()=>[t(g,null,{default:e(()=>[t(l,{title:"Overview"},{default:e(()=>[t(p,null,{default:e(()=>[n("Home")]),_:1})]),_:1}),t(l,{title:"Components"},{default:e(()=>[t(p,null,{default:e(()=>[n("Accordion")]),_:1}),t(p,null,{default:e(()=>[n("Alert")]),_:1})]),_:1})]),_:1})]),_:1})]),default:e(()=>[t(i,{"max-width":"20rem","center-aligned":"","sticky-sm":"bottom"},{default:e(()=>[t(w,null,{default:e(()=>[t(v,null,{default:e(()=>[n(" When a width limited page section is wider than the value of "),C,n(", the section will be centered in the main section. "),T,H,n(" The content in this example is placed in a card to better illustrate how the section behaves when it is centered. A card is not required to center a page section. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const V=y(A,[["render",O]]);export{V as default};
