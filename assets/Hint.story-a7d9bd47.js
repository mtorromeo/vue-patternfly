import{_ as h,a as o,o as w,c as b,w as t,b as n,g as e,d as i}from"./index-d4702c97.js";const y={},x=i("div",{class:"markdown pf-c-content"},[i("p",null,[e("A "),i("strong",null,"hint"),e(" is in-app messaging that provides a one-step reminder, explanation, or call to action for a page or modal. See full "),i("a",{href:"https://www.patternfly.org/v4/components/hint/design-guidelines"},"Design guidelines"),e(" on the official patternfly documentation.")])],-1);function k(v,A){const a=o("component-title"),r=o("pf-kebab-toggle"),p=o("pf-dropdown-item"),d=o("pf-dropdown-separator"),l=o("pf-dropdown"),s=o("pf-hint-title"),f=o("pf-hint-body"),c=o("pf-button"),_=o("pf-hint-footer"),m=o("pf-hint"),g=o("story-canvas"),u=o("doc-page");return w(),b(u,{title:"Hint"},{default:t(()=>[n(a,{name:"pf-hint"}),x,n(g,{title:"Example",source:`<pf-hint>
  <template #actions>
    <pf-dropdown position="right" plain>
      <template #toggle>
        <pf-kebab-toggle />
      </template>
      <pf-dropdown-item>Action 1</pf-dropdown-item>
      <pf-dropdown-item>Action 2</pf-dropdown-item>
      <pf-dropdown-separator />
      <pf-dropdown-item>Action 3</pf-dropdown-item>
    </pf-dropdown>
  </template>
  <pf-hint-title>Do more with Find it Fix it capabilities</pf-hint-title>
  <pf-hint-body>Upgrade to Red Hat Smart Management to remediate all your systems across regions and geographies.</pf-hint-body>
  <pf-hint-footer>
    <pf-button variant="link" inline>Try it for 90 days</pf-button>
  </pf-hint-footer>
</pf-hint>`},{default:t(()=>[n(m,null,{actions:t(()=>[n(l,{position:"right",plain:""},{toggle:t(()=>[n(r)]),default:t(()=>[n(p,null,{default:t(()=>[e("Action 1")]),_:1}),n(p,null,{default:t(()=>[e("Action 2")]),_:1}),n(d),n(p,null,{default:t(()=>[e("Action 3")]),_:1})]),_:1})]),default:t(()=>[n(s,null,{default:t(()=>[e("Do more with Find it Fix it capabilities")]),_:1}),n(f,null,{default:t(()=>[e("Upgrade to Red Hat Smart Management to remediate all your systems across regions and geographies.")]),_:1}),n(_,null,{default:t(()=>[n(c,{variant:"link",inline:""},{default:t(()=>[e("Try it for 90 days")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const H=h(y,[["render",k]]);export{H as default};
