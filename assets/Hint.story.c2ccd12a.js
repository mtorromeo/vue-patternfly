import{_ as g,a as n,c as w,w as t,o as b,b as o,d as i,j as e}from"./index.14f2d6ef.js";const y={},v=i("div",{class:"markdown pf-c-content"},[i("p",null,[e("A "),i("strong",null,"hint"),e(" is in-app messaging that provides a one-step reminder, explanation, or call to action for a page or modal. See full "),i("a",{href:"https://www.patternfly.org/v4/components/hint/design-guidelines"},"Design guidelines"),e(" on the official patternfly documentation.")])],-1),x=e("Action 1"),k=e("Action 2"),A=e("Action 3"),F=e("Do more with Find it Fix it capabilities"),H=e("Upgrade to Red Hat Smart Management to remediate all your systems across regions and geographies."),B=e("Try it for 90 days");function D(N,S){const a=n("component-title"),s=n("pf-kebab-toggle"),p=n("pf-dropdown-item"),d=n("pf-dropdown-separator"),r=n("pf-dropdown"),_=n("pf-hint-title"),l=n("pf-hint-body"),c=n("pf-button"),f=n("pf-hint-footer"),m=n("pf-hint"),h=n("story-canvas"),u=n("doc-page");return b(),w(u,{title:"Hint"},{default:t(()=>[o(a,{name:"pf-hint"}),v,o(h,{title:"Example",source:`<pf-hint>
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
</pf-hint>`},{default:t(()=>[o(m,null,{actions:t(()=>[o(r,{position:"right",plain:""},{toggle:t(()=>[o(s)]),default:t(()=>[o(p,null,{default:t(()=>[x]),_:1}),o(p,null,{default:t(()=>[k]),_:1}),o(d),o(p,null,{default:t(()=>[A]),_:1})]),_:1})]),default:t(()=>[o(_,null,{default:t(()=>[F]),_:1}),o(l,null,{default:t(()=>[H]),_:1}),o(f,null,{default:t(()=>[o(c,{variant:"link",inline:""},{default:t(()=>[B]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}var V=g(y,[["render",D]]);export{V as default};
