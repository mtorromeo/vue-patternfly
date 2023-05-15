import{_ as w,a as n,o as b,c as k,w as e,b as t,g as a,d as o}from"./index-bc8502b9.js";const y={},x=o("div",{class:"markdown pf-c-content"},[o("p",null,[a("The "),o("strong",null,"page"),a(" component is used to define the basic layout of a page with either vertical or horizontal navigation. See full "),o("a",{href:"https://www.patternfly.org/v4/components/page/design-guidelines"},"Design guidelines"),a(" on the official patternfly documentation.")]),o("h2",{class:"pf-c-title"},"Differences from patternfly-react"),o("ul",null,[o("li",null,[a("Tha additional "),o("code",null,"breadcrumbStickyTop"),a(" prop allows to set the breadcrumb slot as sticky.")])])],-1);function S(A,C){const r=n("component-title"),s=n("pf-brand"),c=n("pf-page-header-tools-item"),f=n("pf-page-header-tools-group"),d=n("pf-page-header-tools"),g=n("pf-page-header"),i=n("pf-nav-item"),l=n("pf-nav-group"),_=n("pf-nav"),h=n("pf-page-sidebar"),p=n("pf-page-section"),u=n("pf-page"),m=n("story-canvas"),v=n("doc-page");return b(),k(v,{title:"Page"},{default:e(()=>[t(r,{name:"pf-page"}),x,t(m,{title:"Example",source:`<pf-page managed-sidebar>
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
</pf-page>`},{default:e(()=>[t(u,{"managed-sidebar":""},{skeleton:e(()=>[t(g,{"show-nav-toggle":""},{logo:e(()=>[t(s,{src:"https://www.patternfly.org/assets/images/pf_logo.svg",style:{height:"40px",filter:"invert(1)"}})]),default:e(()=>[t(d,null,{default:e(()=>[t(f,null,{default:e(()=>[t(c,{"visibility-xs":"hidden"},{default:e(()=>[a(" header-tools ")]),_:1})]),_:1})]),_:1})]),_:1}),t(h,{"nav-open":""},{default:e(()=>[t(_,null,{default:e(()=>[t(l,{title:"Overview"},{default:e(()=>[t(i,null,{default:e(()=>[a("Home")]),_:1})]),_:1}),t(l,{title:"Components"},{default:e(()=>[t(i,null,{default:e(()=>[a("Accordion")]),_:1}),t(i,null,{default:e(()=>[a("Alert")]),_:1})]),_:1})]),_:1})]),_:1})]),default:e(()=>[t(p,{variant:"darker"},{default:e(()=>[a("Section with darker background")]),_:1}),t(p,{variant:"dark"},{default:e(()=>[a("Section with dark background")]),_:1}),t(p,{variant:"light"},{default:e(()=>[a("Section with light background")]),_:1}),t(p,{"width-limited":""},{default:e(()=>[a("Section with limited width")]),_:1})]),_:1})]),_:1})]),_:1})}const B=w(y,[["render",S]]);export{B as default};
