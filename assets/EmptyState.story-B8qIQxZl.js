import{C as v}from"./cubes-icon-DYkK9p5P.js";import{C as _}from"./check-icon-Bm0-1vAR.js";import{M as g}from"./magnifying-glass-icon-B58xw7Zh.js";import{g as b,a as o,c as S,o as E,w as t,b as e,u as f,e as n,d as k}from"./index-CiyZyzwL.js";const q=b({__name:"EmptyState.story",setup(w){return(P,a)=>{const i=o("component-info"),p=o("pf-empty-state-header"),m=o("pf-empty-state-body"),s=o("pf-button"),u=o("pf-empty-state-actions"),d=o("pf-empty-state-footer"),r=o("pf-empty-state"),l=o("story-canvas"),c=o("pf-spinner"),y=o("pf-empty-state-icon"),h=o("doc-page");return E(),S(h,{name:"Components/EmptyState.story.vue",title:"Empty State"},{description:t(()=>[...a[0]||(a[0]=[n("An ",-1),k("b",null,"empty state",-1),n(" is a screen that is not yet populated with data or information. Empty states typically contain a short message and next steps for the user.",-1)])]),apidocs:t(()=>[e(i,{name:"PfEmptyState",doc:{name:"PfEmptyState",exportName:"PfEmptyState",displayName:"EmptyState",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"fullHeight",description:"Cause component to consume the available height of its container",required:!1,type:{name:"boolean"}},{name:"variant",description:"Modifies EmptyState max-width",required:!1,type:{name:"union",elements:[{name:'"xs"'},{name:'"small"'},{name:'"large"'},{name:'"xl"'},{name:'"full"'}]}}],events:[],slots:[{name:"default"}],sourceFiles:["runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/EmptyState/EmptyState.vue"]}}),e(i,{name:"PfEmptyStateActions",doc:{name:"PfEmptyStateActions",exportName:"PfEmptyStateActions",displayName:"EmptyStateActions",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}}],events:[],slots:[{name:"default"}],sourceFiles:["runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/EmptyState/EmptyStateActions.vue"]}}),e(i,{name:"PfEmptyStateBody",doc:{name:"PfEmptyStateBody",exportName:"PfEmptyStateHeader",displayName:"EmptyStateHeader",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"title",description:"Text of the title inside empty state header, will be wrapped in headingLevel",required:!1,type:{name:"string"}},{name:"headingLevel",description:"The heading level to use, default is h1",required:!1,type:{name:"union",elements:[{name:'"h1"'},{name:'"h2"'},{name:'"h3"'},{name:'"h4"'},{name:'"h5"'},{name:'"h6"'}]},defaultValue:{func:!1,value:"'h1'"}}],events:[],slots:[{name:"icon"},{name:"default"}],sourceFiles:["runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/EmptyState/EmptyStateHeader.vue"]}}),e(i,{name:"PfEmptyStateFooter",doc:{name:"PfEmptyStateFooter",exportName:"PfEmptyStateFooter",displayName:"EmptyStateFooter",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}}],events:[],slots:[{name:"default"}],sourceFiles:["runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/EmptyState/EmptyStateFooter.vue"]}}),e(i,{name:"PfEmptyStateHeader"}),e(i,{name:"PfEmptyStateIcon",doc:{name:"PfEmptyStateIcon",exportName:"PfEmptyStateIcon",displayName:"EmptyStateIcon",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"color",description:"Changes the color of the icon.",required:!1,type:{name:"string"}}],events:[],slots:[{name:"default"}],sourceFiles:["runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/EmptyState/EmptyStateIcon.vue"]}})]),default:t(()=>[e(l,{title:"Example",source:`<pf-empty-state>
  <pf-empty-state-header title="Empty state">
    <template #icon>
      <cubes-icon />
    </template>
  </pf-empty-state-header>
  <pf-empty-state-body>
    This represents an the empty state pattern in Patternfly 6. Hopefully it's simple enough to use but flexible enough to meet a variety of needs.
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
</pf-empty-state>`},{default:t(()=>[e(r,null,{default:t(()=>[e(p,{title:"Empty state"},{icon:t(()=>[e(f(v))]),_:1}),e(m,null,{default:t(()=>[...a[1]||(a[1]=[n(" This represents an the empty state pattern in Patternfly 6. Hopefully it's simple enough to use but flexible enough to meet a variety of needs. ",-1)])]),_:1}),e(d,null,{default:t(()=>[e(u,null,{default:t(()=>[e(s,{variant:"primary"},{default:t(()=>[...a[2]||(a[2]=[n("Primary action",-1)])]),_:1})]),_:1}),e(u,null,{default:t(()=>[e(s,{variant:"link"},{default:t(()=>[...a[3]||(a[3]=[n("Multiple",-1)])]),_:1}),e(s,{variant:"link"},{default:t(()=>[...a[4]||(a[4]=[n("Action Buttons",-1)])]),_:1}),e(s,{variant:"link"},{default:t(()=>[...a[5]||(a[5]=[n("Can",-1)])]),_:1}),e(s,{variant:"link"},{default:t(()=>[...a[6]||(a[6]=[n("Go here",-1)])]),_:1}),e(s,{variant:"link"},{default:t(()=>[...a[7]||(a[7]=[n("In the secondary",-1)])]),_:1}),e(s,{variant:"link"},{default:t(()=>[...a[8]||(a[8]=[n("Action area",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(l,{title:"Spinner",source:`<pf-empty-state>
  <pf-empty-state-header title="Loading" heading-level="h4">
    <template #icon>
      <pf-empty-state-icon>
        <pf-spinner />
      </pf-empty-state-icon>
    </template>
  </pf-empty-state-header>
</pf-empty-state>`},{default:t(()=>[e(r,null,{default:t(()=>[e(p,{title:"Loading","heading-level":"h4"},{icon:t(()=>[e(y,null,{default:t(()=>[e(c)]),_:1})]),_:1})]),_:1})]),_:1}),e(l,{title:"No match found",source:`<pf-empty-state>
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
</pf-empty-state>`},{default:t(()=>[e(r,null,{default:t(()=>[e(p,{title:"No results found","heading-level":"h4"},{icon:t(()=>[e(f(g))]),_:1}),e(m,null,{default:t(()=>[...a[9]||(a[9]=[n(" No results match the filter criteria. Clear all filters and try again. ",-1)])]),_:1}),e(d,null,{default:t(()=>[e(u,null,{default:t(()=>[e(s,{variant:"link"},{default:t(()=>[...a[10]||(a[10]=[n("Clear all filters",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(l,{title:"Custom icon color",source:`<pf-empty-state>
  <pf-empty-state-header title="Custom icon color" heading-level="h4">
    <template #icon>
      <pf-empty-state-icon color="var(--pf-v6-global--success-color--100)">
        <check-icon />
      </pf-empty-state-icon>
    </template>
  </pf-empty-state-header>
  <pf-empty-state-body>
    This represents the empty state pattern in PatternFly with a custom icon color. Hopefully it's simple enough to use but flexible enough to meet a variety of needs
  </pf-empty-state-body>
</pf-empty-state>`},{default:t(()=>[e(r,null,{default:t(()=>[e(p,{title:"Custom icon color","heading-level":"h4"},{icon:t(()=>[e(y,{color:"var(--pf-v6-global--success-color--100)"},{default:t(()=>[e(f(_))]),_:1})]),_:1}),e(m,null,{default:t(()=>[...a[11]||(a[11]=[n(" This represents the empty state pattern in PatternFly with a custom icon color. Hopefully it's simple enough to use but flexible enough to meet a variety of needs ",-1)])]),_:1})]),_:1})]),_:1})]),_:1})}}});export{q as default};
