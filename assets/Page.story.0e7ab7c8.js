import{_ as w,a,o as b,c as k,w as e,b as t,g as n,d as o}from"./index.fd0c588e.js";const y={},x=o("div",{class:"markdown pf-c-content"},[o("p",null,[n("The "),o("strong",null,"page"),n(" component is used to define the basic layout of a page with either vertical or horizontal navigation. See full "),o("a",{href:"https://www.patternfly.org/v4/components/page/design-guidelines"},"Design guidelines"),n(" on the official patternfly documentation.")]),o("h2",{class:"pf-c-title"},"Differences from patternfly-react"),o("ul",null,[o("li",null,[n("Tha additional "),o("code",null,"breadcrumbStickyTop"),n(" prop allows to set the breadcrumb slot as sticky.")])])],-1);function S(A,C){const s=a("component-title"),i=a("pf-brand"),f=a("pf-page-header-tools-item"),c=a("pf-page-header-tools-group"),d=a("pf-page-header-tools"),g=a("pf-page-header"),p=a("pf-nav-item"),l=a("pf-nav-group"),_=a("pf-nav"),u=a("pf-page-sidebar"),r=a("pf-page-section"),m=a("pf-page"),h=a("story-canvas"),v=a("doc-page");return b(),k(v,{title:"Page"},{default:e(()=>[t(s,{name:"pf-page"}),x,t(h,{title:"Example",source:`<pf-page managed-sidebar>
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
</pf-page>`},{default:e(()=>[t(m,{"managed-sidebar":""},{skeleton:e(()=>[t(g,{"show-nav-toggle":""},{logo:e(()=>[t(i,{src:"https://www.patternfly.org/assets/images/pf_logo.svg",style:{height:"40px",filter:"invert(1)"}})]),default:e(()=>[t(d,null,{default:e(()=>[t(c,null,{default:e(()=>[t(f,{"visibility-xs":"hidden"},{default:e(()=>[n(" header-tools ")]),_:1})]),_:1})]),_:1})]),_:1}),t(u,{"nav-open":""},{default:e(()=>[t(_,null,{default:e(()=>[t(l,{title:"Overview"},{default:e(()=>[t(p,null,{default:e(()=>[n("Home")]),_:1})]),_:1}),t(l,{title:"Components"},{default:e(()=>[t(p,null,{default:e(()=>[n("Accordion")]),_:1}),t(p,null,{default:e(()=>[n("Alert")]),_:1})]),_:1})]),_:1})]),_:1})]),default:e(()=>[t(r,{variant:"darker"},{default:e(()=>[n("Section with darker background")]),_:1}),t(r,{variant:"dark"},{default:e(()=>[n("Section with dark background")]),_:1}),t(r,{variant:"light"},{default:e(()=>[n("Section with light background")]),_:1})]),_:1})]),_:1})]),_:1})}const B=w(y,[["render",S]]);export{B as default};
