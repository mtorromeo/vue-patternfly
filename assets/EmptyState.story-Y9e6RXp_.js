import{C as h}from"./cubes-icon-Y2sH2oCb.js";import{m as _,f as g,a as n,o as v,c as b,w as e,b as a,d as t,u as r,e as E}from"./index-slCIAJif.js";import{M as S}from"./magnifying-glass-icon-qUUwUevQ.js";const k={name:"CheckIcon",height:512,width:448,svgPath:"M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z",yOffset:0,xOffset:0},x=_(k),C=x,N=E("b",null,"empty state",-1),H=g({__name:"EmptyState.story",setup(I){return(P,F)=>{const s=n("component-info"),p=n("pf-empty-state-header"),i=n("pf-empty-state-body"),o=n("pf-button"),m=n("pf-empty-state-actions"),f=n("pf-empty-state-footer"),l=n("pf-empty-state"),c=n("story-canvas"),y=n("pf-spinner"),u=n("pf-empty-state-icon"),d=n("doc-page");return v(),b(d,{title:"Empty State"},{description:e(()=>[a("An "),N,a(" is a screen that is not yet populated with data or information. Empty states typically contain a short message and next steps for the user.")]),apidocs:e(()=>[t(s,{src:"packages/core/src/components/EmptyState/EmptyState.vue",doc:{name:"PfEmptyState",exportName:"default",displayName:"EmptyState",description:"",tags:{},props:[{name:"fullHeight",description:"Cause component to consume the available height of its container",required:!1,type:{name:"boolean"}},{name:"variant",description:"Modifies EmptyState max-width",required:!1,type:{name:"union",elements:[{name:'"xs"'},{name:'"small"'},{name:'"large"'},{name:'"xl"'},{name:'"full"'}]}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/EmptyState/EmptyState.vue"]}},null,8,["doc"]),t(s,{src:"packages/core/src/components/EmptyState/EmptyStateActions.vue",doc:{name:"PfEmptyStateActions",exportName:"default",displayName:"EmptyStateActions",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/EmptyState/EmptyStateActions.vue"]}},null,8,["doc"]),t(s,{src:"packages/core/src/components/EmptyState/EmptyStateBody.vue",doc:{name:"PfEmptyStateBody",exportName:"default",displayName:"EmptyStateBody",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/EmptyState/EmptyStateBody.vue"]}},null,8,["doc"]),t(s,{src:"packages/core/src/components/EmptyState/EmptyStateFooter.vue",doc:{name:"PfEmptyStateFooter",exportName:"default",displayName:"EmptyStateFooter",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/EmptyState/EmptyStateFooter.vue"]}},null,8,["doc"]),t(s,{src:"packages/core/src/components/EmptyState/EmptyStateHeader.vue",doc:{name:"PfEmptyStateBody",exportName:"default",displayName:"EmptyStateHeader",description:"",tags:{},props:[{name:"title",description:"Text of the title inside empty state header, will be wrapped in headingLevel",required:!1,type:{name:"string"}},{name:"headingLevel",description:"The heading level to use, default is h1",required:!1,type:{name:"union",elements:[{name:'"h1"'},{name:'"h2"'},{name:'"h3"'},{name:'"h4"'},{name:'"h5"'},{name:'"h6"'}]},defaultValue:{func:!1,value:"'h1'"}}],slots:[{name:"icon"},{name:"default"}],sourceFiles:["../../packages/core/src/components/EmptyState/EmptyStateHeader.vue"]}},null,8,["doc"]),t(s,{src:"packages/core/src/components/EmptyState/EmptyStateIcon.vue",doc:{name:"PfEmptyStateIcon",exportName:"default",displayName:"EmptyStateIcon",description:"",tags:{},props:[{name:"color",description:"Changes the color of the icon.",required:!1,type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/EmptyState/EmptyStateIcon.vue"]}},null,8,["doc"])]),default:e(()=>[t(c,{title:"Example",source:`<pf-empty-state>
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
</pf-empty-state>`},{default:e(()=>[t(l,null,{default:e(()=>[t(p,{title:"Empty state"},{icon:e(()=>[t(r(h))]),_:1}),t(i,null,{default:e(()=>[a(" This represents an the empty state pattern in Patternfly 5. Hopefully it's simple enough to use but flexible enough to meet a variety of needs. ")]),_:1}),t(f,null,{default:e(()=>[t(m,null,{default:e(()=>[t(o,{variant:"primary"},{default:e(()=>[a("Primary action")]),_:1})]),_:1}),t(m,null,{default:e(()=>[t(o,{variant:"link"},{default:e(()=>[a("Multiple")]),_:1}),t(o,{variant:"link"},{default:e(()=>[a("Action Buttons")]),_:1}),t(o,{variant:"link"},{default:e(()=>[a("Can")]),_:1}),t(o,{variant:"link"},{default:e(()=>[a("Go here")]),_:1}),t(o,{variant:"link"},{default:e(()=>[a("In the secondary")]),_:1}),t(o,{variant:"link"},{default:e(()=>[a("Action area")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(c,{title:"Spinner",source:`<pf-empty-state>
  <pf-empty-state-header title="Loading" heading-level="h4">
    <template #icon>
      <pf-empty-state-icon>
        <pf-spinner />
      </pf-empty-state-icon>
    </template>
  </pf-empty-state-header>
</pf-empty-state>`},{default:e(()=>[t(l,null,{default:e(()=>[t(p,{title:"Loading","heading-level":"h4"},{icon:e(()=>[t(u,null,{default:e(()=>[t(y)]),_:1})]),_:1})]),_:1})]),_:1}),t(c,{title:"No match found",source:`<pf-empty-state>
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
</pf-empty-state>`},{default:e(()=>[t(l,null,{default:e(()=>[t(p,{title:"No results found","heading-level":"h4"},{icon:e(()=>[t(r(S))]),_:1}),t(i,null,{default:e(()=>[a(" No results match the filter criteria. Clear all filters and try again. ")]),_:1}),t(f,null,{default:e(()=>[t(m,null,{default:e(()=>[t(o,{variant:"link"},{default:e(()=>[a("Clear all filters")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(c,{title:"Custom icon color",source:`<pf-empty-state>
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
</pf-empty-state>`},{default:e(()=>[t(l,null,{default:e(()=>[t(p,{title:"Custom icon color","heading-level":"h4"},{icon:e(()=>[t(u,{color:"var(--pf-v5-global--success-color--100)"},{default:e(()=>[t(r(C))]),_:1})]),_:1}),t(i,null,{default:e(()=>[a(" This represents the empty state pattern in PatternFly with a custom icon color. Hopefully it's simple enough to use but flexible enough to meet a variety of needs ")]),_:1})]),_:1})]),_:1})]),_:1})}}});export{H as default};
