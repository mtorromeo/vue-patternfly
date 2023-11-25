import{E as h}from"./ellipsis-vertical-icon-pX4Wm7yY.js";import{e as w,a as o,o as y,c as v,w as t,b as n,u as b,g as e,d as i}from"./index-aHpSD51e.js";const x=i("div",{class:"markdown pf-v5-c-content"},[i("p",null,[e("A "),i("strong",null,"hint"),e(" is in-app messaging that provides a one-step reminder, explanation, or call to action for a page or modal. See full "),i("a",{href:"https://www.patternfly.org/components/hint/design-guidelines"},"design guidelines"),e(" on the official patternfly documentation.")]),i("h2",{class:"pf-v5-c-title"},"Examples")],-1),V=w({__name:"Hint.story",setup(A){return(k,E)=>{const a=o("component-title"),l=o("pf-menu-toggle"),p=o("pf-dropdown-item"),s=o("pf-divider"),r=o("pf-dropdown"),d=o("pf-hint-title"),f=o("pf-hint-body"),c=o("pf-button"),_=o("pf-hint-footer"),m=o("pf-hint"),u=o("story-canvas"),g=o("doc-page");return y(),v(g,{title:"Hint"},{default:t(()=>[n(a,{name:"pf-hint"}),x,n(u,{title:"Example",source:`<pf-hint>
  <template #actions>
    <pf-dropdown position="right">
      <template #toggle>
        <pf-menu-toggle variant="plain">
          <ellipsis-vertical-icon />
        </pf-menu-toggle>
      </template>
      <pf-dropdown-item>Action 1</pf-dropdown-item>
      <pf-dropdown-item>Action 2</pf-dropdown-item>
      <pf-divider component="li" />
      <pf-dropdown-item>Action 3</pf-dropdown-item>
    </pf-dropdown>
  </template>
  <pf-hint-title>Do more with Find it Fix it capabilities</pf-hint-title>
  <pf-hint-body>Upgrade to Red Hat Smart Management to remediate all your systems across regions and geographies.</pf-hint-body>
  <pf-hint-footer>
    <pf-button variant="link" inline>Try it for 90 days</pf-button>
  </pf-hint-footer>
</pf-hint>`},{default:t(()=>[n(m,null,{actions:t(()=>[n(r,{position:"right"},{toggle:t(()=>[n(l,{variant:"plain"},{default:t(()=>[n(b(h))]),_:1})]),default:t(()=>[n(p,null,{default:t(()=>[e("Action 1")]),_:1}),n(p,null,{default:t(()=>[e("Action 2")]),_:1}),n(s,{component:"li"}),n(p,null,{default:t(()=>[e("Action 3")]),_:1})]),_:1})]),default:t(()=>[n(d,null,{default:t(()=>[e("Do more with Find it Fix it capabilities")]),_:1}),n(f,null,{default:t(()=>[e("Upgrade to Red Hat Smart Management to remediate all your systems across regions and geographies.")]),_:1}),n(_,null,{default:t(()=>[n(c,{variant:"link",inline:""},{default:t(()=>[e("Try it for 90 days")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}});export{V as default};
