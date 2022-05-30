import{_ as k,c as v,w as t,a as n,o as A,b as e,d as a,j as o}from"./index.4a516379.js";const F={},B=a("div",{class:"markdown pf-c-content"},[a("p",null,[o("A "),a("strong",null,"card"),o(" is a square or rectangular container that can contain any kind of content. Cards symbolize units of information, and each one acts as an entry point for users to access more details. For example, in dashboards and catalog views, cards function as a preview of a detailed page. Cards may also be used in data displays like card views, or for positioning content on a page. See full "),a("a",{href:"https://www.patternfly.org/v4/components/card/design-guidelines"},"Design guidelines"),o(" on the official patternfly documentation.")]),a("h2",{class:"pf-c-title"},"Differences from patternfly-react"),a("ul",null,[a("li",null,[o("The expanded state is controlled by "),a("code",null,"v-model:expanded"),o(" or managed internally with the prop "),a("code",null,"expandable"),o(". See "),a("a",{href:"#/"},"common differences from patternfly-react"),o(".")])]),a("h2",{class:"pf-c-title"},"Examples")],-1),D=o("Header"),L=o("Body"),C=o("Footer"),S=o("Link"),H=o(" Action "),P=o(" Disabled Link "),N=o(" Disabled Action "),V=o("Separated Link"),E=o(" Separated Action "),T=o("Header"),j=o("Body"),q=o("Footer"),z=a("img",{src:"https://raw.githubusercontent.com/patternfly/patternfly-react/main/packages/react-core/src/demos/Card/pf-logo-small.svg",alt:"PatternFly logo",style:{width:"27px"}},null,-1),W=o("Link"),G=o(" Action "),I=o(" Disabled Link "),J=o(" Disabled Action "),K=o("Body"),M=o("Footer");function O(Q,R){const b=n("component-title"),s=n("pf-card-title"),c=n("pf-card-body"),p=n("pf-card-footer"),r=n("pf-card"),l=n("story-canvas"),h=n("pf-brand"),g=n("pf-card-header-main"),i=n("pf-kebab-toggle"),d=n("pf-dropdown-item"),w=n("pf-dropdown-separator"),f=n("pf-dropdown"),_=n("pf-checkbox"),m=n("pf-card-actions"),u=n("pf-card-header"),y=n("pf-card-expandable-content"),x=n("doc-page");return A(),v(x,{title:"Card"},{default:t(()=>[e(b,{name:"pf-card"}),B,e(l,{title:"Basic",source:`<pf-card>
  <pf-card-title>Header</pf-card-title>
  <pf-card-body>Body</pf-card-body>
  <pf-card-footer>Footer</pf-card-footer>
</pf-card>`},{default:t(()=>[e(r,null,{default:t(()=>[e(s,null,{default:t(()=>[D]),_:1}),e(c,null,{default:t(()=>[L]),_:1}),e(p,null,{default:t(()=>[C]),_:1})]),_:1})]),_:1}),e(l,{title:"With image and actions",source:`<pf-card>
  <pf-card-header>
    <pf-card-header-main>
      <pf-brand src="https://www.patternfly.org/assets/images/pf_logo.svg" alt="PatternFly logo" style="height: 50px" />
    </pf-card-header-main>
    <pf-card-actions no-offset>
      <pf-dropdown plain position="right">
        <template #toggle>
          <pf-kebab-toggle />
        </template>
        <pf-dropdown-item>Link</pf-dropdown-item>
        <pf-dropdown-item component="button">
          Action
        </pf-dropdown-item>
        <pf-dropdown-item disabled>
          Disabled Link
        </pf-dropdown-item>
        <pf-dropdown-item disabled component="button">
          Disabled Action
        </pf-dropdown-item>
        <pf-dropdown-separator />
        <pf-dropdown-item>Separated Link</pf-dropdown-item>
        <pf-dropdown-item component="button">
          Separated Action
        </pf-dropdown-item>
      </pf-dropdown>
      <pf-checkbox aria-label="card checkbox example" />
    </pf-card-actions>
  </pf-card-header>
  <pf-card-title>Header</pf-card-title>
  <pf-card-body>Body</pf-card-body>
  <pf-card-footer>Footer</pf-card-footer>
</pf-card>`},{default:t(()=>[e(r,null,{default:t(()=>[e(u,null,{default:t(()=>[e(g,null,{default:t(()=>[e(h,{src:"https://www.patternfly.org/assets/images/pf_logo.svg",alt:"PatternFly logo",style:{height:"50px"}})]),_:1}),e(m,{"no-offset":""},{default:t(()=>[e(f,{plain:"",position:"right"},{toggle:t(()=>[e(i)]),default:t(()=>[e(d,null,{default:t(()=>[S]),_:1}),e(d,{component:"button"},{default:t(()=>[H]),_:1}),e(d,{disabled:""},{default:t(()=>[P]),_:1}),e(d,{disabled:"",component:"button"},{default:t(()=>[N]),_:1}),e(w),e(d,null,{default:t(()=>[V]),_:1}),e(d,{component:"button"},{default:t(()=>[E]),_:1})]),_:1}),e(_,{"aria-label":"card checkbox example"})]),_:1})]),_:1}),e(s,null,{default:t(()=>[T]),_:1}),e(c,null,{default:t(()=>[j]),_:1}),e(p,null,{default:t(()=>[q]),_:1})]),_:1})]),_:1}),e(l,{title:"Expandable with icon",source:`<pf-card expandable>
  <pf-card-header>
    <img src="https://raw.githubusercontent.com/patternfly/patternfly-react/main/packages/react-core/src/demos/Card/pf-logo-small.svg" alt="PatternFly logo" style="width: 27px">
    <pf-card-actions>
      <pf-dropdown plain position="right">
        <template #toggle>
          <pf-kebab-toggle />
        </template>
        <pf-dropdown-item>Link</pf-dropdown-item>
        <pf-dropdown-item component="button">
          Action
        </pf-dropdown-item>
        <pf-dropdown-item disabled>
          Disabled Link
        </pf-dropdown-item>
        <pf-dropdown-item disabled component="button">
          Disabled Action
        </pf-dropdown-item>
      </pf-dropdown>
      <pf-checkbox aria-label="card checkbox example" />
    </pf-card-actions>
  </pf-card-header>
  <pf-card-expandable-content>
    <pf-card-body>Body</pf-card-body>
    <pf-card-footer>Footer</pf-card-footer>
  </pf-card-expandable-content>
</pf-card>`},{default:t(()=>[e(r,{expandable:""},{default:t(()=>[e(u,null,{default:t(()=>[z,e(m,null,{default:t(()=>[e(f,{plain:"",position:"right"},{toggle:t(()=>[e(i)]),default:t(()=>[e(d,null,{default:t(()=>[W]),_:1}),e(d,{component:"button"},{default:t(()=>[G]),_:1}),e(d,{disabled:""},{default:t(()=>[I]),_:1}),e(d,{disabled:"",component:"button"},{default:t(()=>[J]),_:1})]),_:1}),e(_,{"aria-label":"card checkbox example"})]),_:1})]),_:1}),e(y,null,{default:t(()=>[e(c,null,{default:t(()=>[K]),_:1}),e(p,null,{default:t(()=>[M]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}var X=k(F,[["render",O]]);export{X as default};
