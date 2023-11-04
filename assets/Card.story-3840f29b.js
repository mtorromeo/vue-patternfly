import{E as _}from"./ellipsis-vertical-icon-0658e631.js";import{e as C,a,o as A,c as D,w as t,b as e,g as n,u as b,d as o}from"./index-edd8fb86.js";import"./createIcon-de32f397.js";const L=o("div",{class:"markdown pf-v5-c-content"},[o("p",null,[n("A "),o("strong",null,"card"),n(" is a square or rectangular container that can contain any kind of content. Cards symbolize units of information, and each one acts as an entry point for users to access more details. For example, in dashboards and catalog views, cards function as a preview of a detailed page. Cards may also be used in data displays like card views, or for positioning content on a page. See full "),o("a",{href:"https://www.patternfly.org/v4/components/card/design-guidelines"},"Design guidelines"),n(" on the official patternfly documentation.")]),o("h2",{class:"pf-v5-c-title"},"Differences from patternfly-react"),o("ul",null,[o("li",null,[n("The expanded state is controlled by "),o("code",null,"v-model:expanded"),n(" or managed internally with the prop "),o("code",null,"expandable"),n(". See "),o("a",{href:"#/"},"common differences from patternfly-react"),n(".")])]),o("h2",{class:"pf-v5-c-title"},"Examples")],-1),F=o("img",{src:"https://raw.githubusercontent.com/patternfly/patternfly-react/main/packages/react-core/src/demos/Card/pf-logo-small.svg",alt:"PatternFly logo",style:{width:"27px"}},null,-1),B=o("div",{class:"markdown pf-v5-c-content"},[o("p",null,"Selectable cards can only be selected one at a time, and are intended for use with primary-detail layout.")],-1),S=o("br",null,null,-1),T=o("br",null,null,-1),z=C({__name:"Card.story",setup(E){return(H,P)=>{const h=a("component-title"),r=a("pf-card-title"),l=a("pf-card-body"),i=a("pf-card-footer"),c=a("pf-card"),p=a("story-canvas"),w=a("pf-brand"),y=a("pf-card-header-main"),s=a("pf-menu-toggle"),d=a("pf-dropdown-item"),k=a("pf-divider"),f=a("pf-dropdown"),g=a("pf-checkbox"),u=a("pf-card-actions"),m=a("pf-card-header"),v=a("pf-card-expandable-content"),x=a("doc-page");return A(),D(x,{title:"Card"},{default:t(()=>[e(h,{name:"pf-card"}),L,e(p,{title:"Basic",source:`<pf-card>
  <pf-card-title>Header</pf-card-title>
  <pf-card-body>Body</pf-card-body>
  <pf-card-footer>Footer</pf-card-footer>
</pf-card>`},{default:t(()=>[e(c,null,{default:t(()=>[e(r,null,{default:t(()=>[n("Header")]),_:1}),e(l,null,{default:t(()=>[n("Body")]),_:1}),e(i,null,{default:t(()=>[n("Footer")]),_:1})]),_:1})]),_:1}),e(p,{title:"With image and actions",source:`<pf-card>
  <pf-card-header>
    <pf-card-header-main>
      <pf-brand src="https://www.patternfly.org/assets/images/pf_logo.svg" alt="PatternFly logo" style="height: 50px" ></pf-brand>
    </pf-card-header-main>
    <pf-card-actions no-offset>
      <pf-dropdown position="right">
        <template #toggle>
          <pf-menu-toggle variant="plain">
            <ellipsis-vertical-icon></ellipsis-vertical-icon>
          </pf-menu-toggle>
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
        <pf-divider component="li" ></pf-divider>
        <pf-dropdown-item>Separated Link</pf-dropdown-item>
        <pf-dropdown-item component="button">
          Separated Action
        </pf-dropdown-item>
      </pf-dropdown>
      <pf-checkbox aria-label="card checkbox example" ></pf-checkbox>
    </pf-card-actions>
  </pf-card-header>
  <pf-card-title>Header</pf-card-title>
  <pf-card-body>Body</pf-card-body>
  <pf-card-footer>Footer</pf-card-footer>
</pf-card>`},{default:t(()=>[e(c,null,{default:t(()=>[e(m,null,{default:t(()=>[e(y,null,{default:t(()=>[e(w,{src:"https://www.patternfly.org/assets/images/pf_logo.svg",alt:"PatternFly logo",style:{height:"50px"}})]),_:1}),e(u,{"no-offset":""},{default:t(()=>[e(f,{position:"right"},{toggle:t(()=>[e(s,{variant:"plain"},{default:t(()=>[e(b(_))]),_:1})]),default:t(()=>[e(d,null,{default:t(()=>[n("Link")]),_:1}),e(d,{component:"button"},{default:t(()=>[n(" Action ")]),_:1}),e(d,{disabled:""},{default:t(()=>[n(" Disabled Link ")]),_:1}),e(d,{disabled:"",component:"button"},{default:t(()=>[n(" Disabled Action ")]),_:1}),e(k,{component:"li"}),e(d,null,{default:t(()=>[n("Separated Link")]),_:1}),e(d,{component:"button"},{default:t(()=>[n(" Separated Action ")]),_:1})]),_:1}),e(g,{"aria-label":"card checkbox example"})]),_:1})]),_:1}),e(r,null,{default:t(()=>[n("Header")]),_:1}),e(l,null,{default:t(()=>[n("Body")]),_:1}),e(i,null,{default:t(()=>[n("Footer")]),_:1})]),_:1})]),_:1}),e(p,{title:"Expandable with icon",source:`<pf-card expandable>
  <pf-card-header>
    <img src="https://raw.githubusercontent.com/patternfly/patternfly-react/main/packages/react-core/src/demos/Card/pf-logo-small.svg" alt="PatternFly logo" style="width: 27px">
    <pf-card-actions>
      <pf-dropdown position="right">
        <template #toggle>
          <pf-menu-toggle variant="plain">
            <ellipsis-vertical-icon></ellipsis-vertical-icon>
          </pf-menu-toggle>
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
      <pf-checkbox aria-label="card checkbox example" ></pf-checkbox>
    </pf-card-actions>
  </pf-card-header>
  <pf-card-expandable-content>
    <pf-card-body>Body</pf-card-body>
    <pf-card-footer>Footer</pf-card-footer>
  </pf-card-expandable-content>
</pf-card>`},{default:t(()=>[e(c,{expandable:""},{default:t(()=>[e(m,null,{default:t(()=>[F,e(u,null,{default:t(()=>[e(f,{position:"right"},{toggle:t(()=>[e(s,{variant:"plain"},{default:t(()=>[e(b(_))]),_:1})]),default:t(()=>[e(d,null,{default:t(()=>[n("Link")]),_:1}),e(d,{component:"button"},{default:t(()=>[n(" Action ")]),_:1}),e(d,{disabled:""},{default:t(()=>[n(" Disabled Link ")]),_:1}),e(d,{disabled:"",component:"button"},{default:t(()=>[n(" Disabled Action ")]),_:1})]),_:1}),e(g,{"aria-label":"card checkbox example"})]),_:1})]),_:1}),e(v,null,{default:t(()=>[e(l,null,{default:t(()=>[n("Body")]),_:1}),e(i,null,{default:t(()=>[n("Footer")]),_:1})]),_:1})]),_:1})]),_:1}),e(p,{title:"Selectable cards",source:`<pf-card selectable-raised selectable-input>
  <pf-card-header>
    <pf-card-actions>
      <pf-dropdown position="right">
        <template #toggle>
          <pf-menu-toggle variant="plain">
            <ellipsis-vertical-icon></ellipsis-vertical-icon>
          </pf-menu-toggle>
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
    </pf-card-actions>
  </pf-card-header>
  <pf-card-title>First card</pf-card-title>
  <pf-card-body>This is a selectable card. Click me to select me. Click again to deselect me.</pf-card-body>
</pf-card>
<br>
<pf-card selectable-raised selectable-input>
  <pf-card-title>Second card</pf-card-title>
  <pf-card-body>This is a selectable card. Click me to select me. Click again to deselect me.</pf-card-body>
</pf-card>
<br>
<pf-card selectable-raised selectable-input selectable-disabled>
  <pf-card-title>Third card</pf-card-title>
  <pf-card-body>This is a raised but disabled card.</pf-card-body>
</pf-card>`},{intro:t(()=>[B]),default:t(()=>[e(c,{"selectable-raised":"","selectable-input":""},{default:t(()=>[e(m,null,{default:t(()=>[e(u,null,{default:t(()=>[e(f,{position:"right"},{toggle:t(()=>[e(s,{variant:"plain"},{default:t(()=>[e(b(_))]),_:1})]),default:t(()=>[e(d,null,{default:t(()=>[n("Link")]),_:1}),e(d,{component:"button"},{default:t(()=>[n(" Action ")]),_:1}),e(d,{disabled:""},{default:t(()=>[n(" Disabled Link ")]),_:1}),e(d,{disabled:"",component:"button"},{default:t(()=>[n(" Disabled Action ")]),_:1})]),_:1})]),_:1})]),_:1}),e(r,null,{default:t(()=>[n("First card")]),_:1}),e(l,null,{default:t(()=>[n("This is a selectable card. Click me to select me. Click again to deselect me.")]),_:1})]),_:1}),S,e(c,{"selectable-raised":"","selectable-input":""},{default:t(()=>[e(r,null,{default:t(()=>[n("Second card")]),_:1}),e(l,null,{default:t(()=>[n("This is a selectable card. Click me to select me. Click again to deselect me.")]),_:1})]),_:1}),T,e(c,{"selectable-raised":"","selectable-input":"","selectable-disabled":""},{default:t(()=>[e(r,null,{default:t(()=>[n("Third card")]),_:1}),e(l,null,{default:t(()=>[n("This is a raised but disabled card.")]),_:1})]),_:1})]),_:1})]),_:1})}}});export{z as default};
