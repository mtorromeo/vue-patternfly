import{_ as v,a as o,c as w,w as e,o as b,b as t,d as n,j as a}from"./index.0b6ec288.js";const k={},y=n("div",{class:"markdown pf-c-content"},[n("p",null,[a("The "),n("strong",null,"page"),a(" component is used to define the basic layout of a page with either vertical or horizontal navigation. See full "),n("a",{href:"https://www.patternfly.org/v4/components/page/design-guidelines"},"Design guidelines"),a(" on the official patternfly documentation.")]),n("h2",{class:"pf-c-title"},"Differences from patternfly-react"),n("ul",null,[n("li",null,[a("Tha additional "),n("code",null,"breadcrumbStickyTop"),a(" prop allows to set the breadcrumb slot as sticky.")])])],-1),x=a(" header-tools "),S=a("Home"),A=a("Accordion"),C=a("Alert"),T=a("Section with darker background"),B=a("Section with dark background"),N=a("Section with light background");function V(D,H){const r=o("component-title"),l=o("pf-brand"),c=o("pf-page-header-tools-item"),_=o("pf-page-header-tools-group"),d=o("pf-page-header-tools"),f=o("pf-page-header"),p=o("pf-nav-item"),i=o("pf-nav-group"),g=o("pf-page-sidebar"),s=o("pf-page-section"),h=o("pf-page"),u=o("story-canvas"),m=o("doc-page");return b(),w(m,{title:"Page"},{default:e(()=>[t(r,{name:"pf-page"}),y,t(u,{title:"Example",source:`<pf-page managed-sidebar>
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
      <pf-nav-group title="Overview">
        <pf-nav-item>Home</pf-nav-item>
      </pf-nav-group>
      <pf-nav-group title="Components">
        <pf-nav-item>Accordion</pf-nav-item>
        <pf-nav-item>Alert</pf-nav-item>
      </pf-nav-group>
    </pf-page-sidebar>
  </template>
  <pf-page-section variant="darker">Section with darker background</pf-page-section>
  <pf-page-section variant="dark">Section with dark background</pf-page-section>
  <pf-page-section variant="light">Section with light background</pf-page-section>
</pf-page>`},{default:e(()=>[t(h,{"managed-sidebar":""},{skeleton:e(()=>[t(f,{"show-nav-toggle":""},{logo:e(()=>[t(l,{src:"https://www.patternfly.org/assets/images/pf_logo.svg",style:{height:"40px",filter:"invert(1)"}})]),default:e(()=>[t(d,null,{default:e(()=>[t(_,null,{default:e(()=>[t(c,{"visibility-xs":"hidden"},{default:e(()=>[x]),_:1})]),_:1})]),_:1})]),_:1}),t(g,{"nav-open":""},{default:e(()=>[t(i,{title:"Overview"},{default:e(()=>[t(p,null,{default:e(()=>[S]),_:1})]),_:1}),t(i,{title:"Components"},{default:e(()=>[t(p,null,{default:e(()=>[A]),_:1}),t(p,null,{default:e(()=>[C]),_:1})]),_:1})]),_:1})]),default:e(()=>[t(s,{variant:"darker"},{default:e(()=>[T]),_:1}),t(s,{variant:"dark"},{default:e(()=>[B]),_:1}),t(s,{variant:"light"},{default:e(()=>[N]),_:1})]),_:1})]),_:1})]),_:1})}var P=v(k,[["render",V]]);export{P as default};
