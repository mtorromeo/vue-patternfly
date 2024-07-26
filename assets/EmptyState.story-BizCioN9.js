import{C as h}from"./cubes-icon-BSbwctuX.js";import{m as _,f as v,o as g,c as b,w as t,a,b as e,u as c,d as S,e as n}from"./index-DQdJ4HZU.js";import{M as E}from"./magnifying-glass-icon-ClCVZTnq.js";const k={name:"CheckIcon",height:512,width:448,svgPath:"M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z",yOffset:0,xOffset:0},I=_(k),w=S("b",null,"empty state",-1),P=v({__name:"EmptyState.story",setup(x){return(C,N)=>{const s=n("component-info"),i=n("pf-empty-state-header"),l=n("pf-empty-state-body"),o=n("pf-button"),m=n("pf-empty-state-actions"),u=n("pf-empty-state-footer"),p=n("pf-empty-state"),r=n("story-canvas"),d=n("pf-spinner"),f=n("pf-empty-state-icon"),y=n("doc-page");return g(),b(y,{name:"Components/EmptyState.story.vue",title:"Empty State"},{description:t(()=>[a("An "),w,a(" is a screen that is not yet populated with data or information. Empty states typically contain a short message and next steps for the user.")]),apidocs:t(()=>[e(s,{src:"packages/core/src/components/EmptyState/EmptyState.vue",doc:{name:"PfEmptyState",exportName:"default",displayName:"EmptyState",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"fullHeight",description:"Cause component to consume the available height of its container",required:!1,type:{name:"boolean"}},{name:"variant",description:"Modifies EmptyState max-width",required:!1,type:{name:"union",elements:[{name:'"xs"'},{name:'"small"'},{name:'"large"'},{name:'"xl"'},{name:'"full"'}]}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/EmptyState/EmptyState.vue"]}}),e(s,{src:"packages/core/src/components/EmptyState/EmptyStateActions.vue",doc:{name:"PfEmptyStateActions",exportName:"default",displayName:"EmptyStateActions",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/EmptyState/EmptyStateActions.vue"]}}),e(s,{src:"packages/core/src/components/EmptyState/EmptyStateBody.vue",doc:{name:"PfEmptyStateBody",exportName:"default",displayName:"EmptyStateBody",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/EmptyState/EmptyStateBody.vue"]}}),e(s,{src:"packages/core/src/components/EmptyState/EmptyStateFooter.vue",doc:{name:"PfEmptyStateFooter",exportName:"default",displayName:"EmptyStateFooter",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/EmptyState/EmptyStateFooter.vue"]}}),e(s,{src:"packages/core/src/components/EmptyState/EmptyStateHeader.vue",doc:{name:"PfEmptyStateBody",exportName:"default",displayName:"EmptyStateHeader",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"title",description:"Text of the title inside empty state header, will be wrapped in headingLevel",required:!1,type:{name:"string"}},{name:"headingLevel",description:"The heading level to use, default is h1",required:!1,type:{name:"union",elements:[{name:'"h1"'},{name:'"h2"'},{name:'"h3"'},{name:'"h4"'},{name:'"h5"'},{name:'"h6"'}]},defaultValue:{func:!1,value:"'h1'"}}],slots:[{name:"icon"},{name:"default"}],sourceFiles:["../../packages/core/src/components/EmptyState/EmptyStateHeader.vue"]}}),e(s,{src:"packages/core/src/components/EmptyState/EmptyStateIcon.vue",doc:{name:"PfEmptyStateIcon",exportName:"default",displayName:"EmptyStateIcon",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"color",description:"Changes the color of the icon.",required:!1,type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/EmptyState/EmptyStateIcon.vue"]}})]),default:t(()=>[e(r,{title:"Example",source:`<pf-empty-state>
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
</pf-empty-state>`},{default:t(()=>[e(p,null,{default:t(()=>[e(i,{title:"Empty state"},{icon:t(()=>[e(c(h))]),_:1}),e(l,null,{default:t(()=>[a(" This represents an the empty state pattern in Patternfly 5. Hopefully it's simple enough to use but flexible enough to meet a variety of needs. ")]),_:1}),e(u,null,{default:t(()=>[e(m,null,{default:t(()=>[e(o,{variant:"primary"},{default:t(()=>[a("Primary action")]),_:1})]),_:1}),e(m,null,{default:t(()=>[e(o,{variant:"link"},{default:t(()=>[a("Multiple")]),_:1}),e(o,{variant:"link"},{default:t(()=>[a("Action Buttons")]),_:1}),e(o,{variant:"link"},{default:t(()=>[a("Can")]),_:1}),e(o,{variant:"link"},{default:t(()=>[a("Go here")]),_:1}),e(o,{variant:"link"},{default:t(()=>[a("In the secondary")]),_:1}),e(o,{variant:"link"},{default:t(()=>[a("Action area")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(r,{title:"Spinner",source:`<pf-empty-state>
  <pf-empty-state-header title="Loading" heading-level="h4">
    <template #icon>
      <pf-empty-state-icon>
        <pf-spinner />
      </pf-empty-state-icon>
    </template>
  </pf-empty-state-header>
</pf-empty-state>`},{default:t(()=>[e(p,null,{default:t(()=>[e(i,{title:"Loading","heading-level":"h4"},{icon:t(()=>[e(f,null,{default:t(()=>[e(d)]),_:1})]),_:1})]),_:1})]),_:1}),e(r,{title:"No match found",source:`<pf-empty-state>
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
</pf-empty-state>`},{default:t(()=>[e(p,null,{default:t(()=>[e(i,{title:"No results found","heading-level":"h4"},{icon:t(()=>[e(c(E))]),_:1}),e(l,null,{default:t(()=>[a(" No results match the filter criteria. Clear all filters and try again. ")]),_:1}),e(u,null,{default:t(()=>[e(m,null,{default:t(()=>[e(o,{variant:"link"},{default:t(()=>[a("Clear all filters")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(r,{title:"Custom icon color",source:`<pf-empty-state>
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
</pf-empty-state>`},{default:t(()=>[e(p,null,{default:t(()=>[e(i,{title:"Custom icon color","heading-level":"h4"},{icon:t(()=>[e(f,{color:"var(--pf-v5-global--success-color--100)"},{default:t(()=>[e(c(I))]),_:1})]),_:1}),e(l,null,{default:t(()=>[a(" This represents the empty state pattern in PatternFly with a custom icon color. Hopefully it's simple enough to use but flexible enough to meet a variety of needs ")]),_:1})]),_:1})]),_:1})]),_:1})}}});export{P as default};
