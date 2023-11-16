import{C as d}from"./cubes-icon-ZOR_cdri.js";import{m as h,e as b,a as n,o as v,c as g,w as e,b as t,u as r,g as a}from"./index-KWy3deFk.js";import{M as k}from"./magnifying-glass-icon-DjteGBms.js";const C={name:"CheckIcon",height:512,width:448,svgPath:"M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z",yOffset:0,xOffset:0},x=h(C),I=x,A=b({__name:"EmptyState.story",setup(N){return(P,w)=>{const u=n("component-title"),p=n("pf-empty-state-header"),i=n("pf-empty-state-body"),o=n("pf-button"),f=n("pf-empty-state-actions"),c=n("pf-empty-state-footer"),l=n("pf-empty-state"),s=n("story-canvas"),y=n("pf-spinner"),m=n("pf-empty-state-icon"),_=n("doc-page");return v(),g(_,{title:"Empty State"},{default:e(()=>[t(u,{name:"pf-empty-state"}),t(s,{title:"Example",source:`<pf-empty-state>
  <pf-empty-state-header title="Empty state">
    <template #icon>
      <cubes-icon />
    </template>
  </pf-empty-state-header>
  <pf-empty-state-body>
    This represents an the empty state pattern in Patternfly 5. Hopefully it's simple enough to use but flexible enough to meet a variety of needs.
  </pf-empty-state-body>
  <pf-empty-state-footer>
    <pf-empty-state-actions>
      <pf-button variant="primary">Primary action</pf-button>
    </pf-empty-state-actions>
    <pf-empty-state-actions>
      <pf-button variant="link">Multiple</pf-button>
      <pf-button variant="link">Action Buttons</pf-button>
      <pf-button variant="link">Can</pf-button>
      <pf-button variant="link">Go here</pf-button>
      <pf-button variant="link">In the secondary</pf-button>
      <pf-button variant="link">Action area</pf-button>
    </pf-empty-state-actions>
  </pf-empty-state-footer>
</pf-empty-state>`},{default:e(()=>[t(l,null,{default:e(()=>[t(p,{title:"Empty state"},{icon:e(()=>[t(r(d))]),_:1}),t(i,null,{default:e(()=>[a(" This represents an the empty state pattern in Patternfly 5. Hopefully it's simple enough to use but flexible enough to meet a variety of needs. ")]),_:1}),t(c,null,{default:e(()=>[t(f,null,{default:e(()=>[t(o,{variant:"primary"},{default:e(()=>[a("Primary action")]),_:1})]),_:1}),t(f,null,{default:e(()=>[t(o,{variant:"link"},{default:e(()=>[a("Multiple")]),_:1}),t(o,{variant:"link"},{default:e(()=>[a("Action Buttons")]),_:1}),t(o,{variant:"link"},{default:e(()=>[a("Can")]),_:1}),t(o,{variant:"link"},{default:e(()=>[a("Go here")]),_:1}),t(o,{variant:"link"},{default:e(()=>[a("In the secondary")]),_:1}),t(o,{variant:"link"},{default:e(()=>[a("Action area")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(s,{title:"Spinner",source:`<pf-empty-state>
  <pf-empty-state-header title="Loading" heading-level="h4">
    <template #icon>
      <pf-empty-state-icon>
        <pf-spinner />
      </pf-empty-state-icon>
    </template>
  </pf-empty-state-header>
</pf-empty-state>`},{default:e(()=>[t(l,null,{default:e(()=>[t(p,{title:"Loading","heading-level":"h4"},{icon:e(()=>[t(m,null,{default:e(()=>[t(y)]),_:1})]),_:1})]),_:1})]),_:1}),t(s,{title:"No match found",source:`<pf-empty-state>
  <pf-empty-state-header title="No results found" heading-level="h4">
    <template #icon>
      <magnifying-glass-icon />
    </template>
  </pf-empty-state-header>
  <pf-empty-state-body>
    No results match the filter criteria. Clear all filters and try again.
  </pf-empty-state-body>
  <pf-empty-state-footer>
    <pf-empty-state-actions>
      <pf-button variant="link">Clear all filters</pf-button>
    </pf-empty-state-actions>
  </pf-empty-state-footer>
</pf-empty-state>`},{default:e(()=>[t(l,null,{default:e(()=>[t(p,{title:"No results found","heading-level":"h4"},{icon:e(()=>[t(r(k))]),_:1}),t(i,null,{default:e(()=>[a(" No results match the filter criteria. Clear all filters and try again. ")]),_:1}),t(c,null,{default:e(()=>[t(f,null,{default:e(()=>[t(o,{variant:"link"},{default:e(()=>[a("Clear all filters")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(s,{title:"Custom icon color",source:`<pf-empty-state>
  <pf-empty-state-header title="Custom icon color" heading-level="h4">
    <template #icon>
      <pf-empty-state-icon color="var(--pf-v5-global--success-color--100)">
        <check-icon />
      </pf-empty-state-icon>
    </template>
  </pf-empty-state-header>
  <pf-empty-state-body>
    This represents the empty state pattern in PatternFly with a custom icon color. Hopefully it's simple enough to use but flexible enough to meet a variety of needs
  </pf-empty-state-body>
</pf-empty-state>`},{default:e(()=>[t(l,null,{default:e(()=>[t(p,{title:"Custom icon color","heading-level":"h4"},{icon:e(()=>[t(m,{color:"var(--pf-v5-global--success-color--100)"},{default:e(()=>[t(r(I))]),_:1})]),_:1}),t(i,null,{default:e(()=>[a(" This represents the empty state pattern in PatternFly with a custom icon color. Hopefully it's simple enough to use but flexible enough to meet a variety of needs ")]),_:1})]),_:1})]),_:1})]),_:1})}}});export{A as default};
