import{C as _}from"./cubes-icon-BysiRdl7.js";import{C as v}from"./check-icon-CbX5CFby.js";import{M as g}from"./magnifying-glass-icon-C656f9gN.js";import{g as b,a as o,c as S,o as E,w as t,b as e,u as f,e as n,d as k}from"./index-DCKv16MW.js";const A=b({__name:"EmptyState.story",setup(I){return(w,a)=>{const i=o("component-info"),p=o("pf-empty-state-header"),m=o("pf-empty-state-body"),s=o("pf-button"),u=o("pf-empty-state-actions"),c=o("pf-empty-state-footer"),r=o("pf-empty-state"),l=o("story-canvas"),y=o("pf-spinner"),d=o("pf-empty-state-icon"),h=o("doc-page");return E(),S(h,{name:"Components/EmptyState.story.vue",title:"Empty State"},{description:t(()=>a[0]||(a[0]=[n("An "),k("b",null,"empty state",-1),n(" is a screen that is not yet populated with data or information. Empty states typically contain a short message and next steps for the user.")])),apidocs:t(()=>[e(i,{src:"packages/core/src/components/EmptyState/EmptyState.vue",doc:{name:"PfEmptyState",exportName:"default",displayName:"EmptyState",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"fullHeight",description:"Cause component to consume the available height of its container",required:!1,type:{name:"boolean"}},{name:"variant",description:"Modifies EmptyState max-width",required:!1,type:{name:"union",elements:[{name:'"xs"'},{name:'"small"'},{name:'"large"'},{name:'"xl"'},{name:'"full"'}]}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/EmptyState/EmptyState.vue"]}}),e(i,{src:"packages/core/src/components/EmptyState/EmptyStateActions.vue",doc:{name:"PfEmptyStateActions",exportName:"default",displayName:"EmptyStateActions",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/EmptyState/EmptyStateActions.vue"]}}),e(i,{src:"packages/core/src/components/EmptyState/EmptyStateBody.vue",doc:{name:"PfEmptyStateBody",exportName:"default",displayName:"EmptyStateBody",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/EmptyState/EmptyStateBody.vue"]}}),e(i,{src:"packages/core/src/components/EmptyState/EmptyStateFooter.vue",doc:{name:"PfEmptyStateFooter",exportName:"default",displayName:"EmptyStateFooter",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/EmptyState/EmptyStateFooter.vue"]}}),e(i,{src:"packages/core/src/components/EmptyState/EmptyStateHeader.vue",doc:{name:"PfEmptyStateBody",exportName:"default",displayName:"EmptyStateHeader",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"title",description:"Text of the title inside empty state header, will be wrapped in headingLevel",required:!1,type:{name:"string"}},{name:"headingLevel",description:"The heading level to use, default is h1",required:!1,type:{name:"union",elements:[{name:'"h1"'},{name:'"h2"'},{name:'"h3"'},{name:'"h4"'},{name:'"h5"'},{name:'"h6"'}]},defaultValue:{func:!1,value:"'h1'"}}],slots:[{name:"icon"},{name:"default"}],sourceFiles:["../../packages/core/src/components/EmptyState/EmptyStateHeader.vue"]}}),e(i,{src:"packages/core/src/components/EmptyState/EmptyStateIcon.vue",doc:{name:"PfEmptyStateIcon",exportName:"default",displayName:"EmptyStateIcon",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"color",description:"Changes the color of the icon.",required:!1,type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/EmptyState/EmptyStateIcon.vue"]}})]),default:t(()=>[e(l,{title:"Example",source:`<pf-empty-state>
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
</pf-empty-state>`},{default:t(()=>[e(r,null,{default:t(()=>[e(p,{title:"Empty state"},{icon:t(()=>[e(f(_))]),_:1}),e(m,null,{default:t(()=>a[1]||(a[1]=[n(" This represents an the empty state pattern in Patternfly 6. Hopefully it's simple enough to use but flexible enough to meet a variety of needs. ")])),_:1,__:[1]}),e(c,null,{default:t(()=>[e(u,null,{default:t(()=>[e(s,{variant:"primary"},{default:t(()=>a[2]||(a[2]=[n("Primary action")])),_:1,__:[2]})]),_:1}),e(u,null,{default:t(()=>[e(s,{variant:"link"},{default:t(()=>a[3]||(a[3]=[n("Multiple")])),_:1,__:[3]}),e(s,{variant:"link"},{default:t(()=>a[4]||(a[4]=[n("Action Buttons")])),_:1,__:[4]}),e(s,{variant:"link"},{default:t(()=>a[5]||(a[5]=[n("Can")])),_:1,__:[5]}),e(s,{variant:"link"},{default:t(()=>a[6]||(a[6]=[n("Go here")])),_:1,__:[6]}),e(s,{variant:"link"},{default:t(()=>a[7]||(a[7]=[n("In the secondary")])),_:1,__:[7]}),e(s,{variant:"link"},{default:t(()=>a[8]||(a[8]=[n("Action area")])),_:1,__:[8]})]),_:1})]),_:1})]),_:1})]),_:1}),e(l,{title:"Spinner",source:`<pf-empty-state>
  <pf-empty-state-header title="Loading" heading-level="h4">
    <template #icon>
      <pf-empty-state-icon>
        <pf-spinner />
      </pf-empty-state-icon>
    </template>
  </pf-empty-state-header>
</pf-empty-state>`},{default:t(()=>[e(r,null,{default:t(()=>[e(p,{title:"Loading","heading-level":"h4"},{icon:t(()=>[e(d,null,{default:t(()=>[e(y)]),_:1})]),_:1})]),_:1})]),_:1}),e(l,{title:"No match found",source:`<pf-empty-state>
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
</pf-empty-state>`},{default:t(()=>[e(r,null,{default:t(()=>[e(p,{title:"No results found","heading-level":"h4"},{icon:t(()=>[e(f(g))]),_:1}),e(m,null,{default:t(()=>a[9]||(a[9]=[n(" No results match the filter criteria. Clear all filters and try again. ")])),_:1,__:[9]}),e(c,null,{default:t(()=>[e(u,null,{default:t(()=>[e(s,{variant:"link"},{default:t(()=>a[10]||(a[10]=[n("Clear all filters")])),_:1,__:[10]})]),_:1})]),_:1})]),_:1})]),_:1}),e(l,{title:"Custom icon color",source:`<pf-empty-state>
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
</pf-empty-state>`},{default:t(()=>[e(r,null,{default:t(()=>[e(p,{title:"Custom icon color","heading-level":"h4"},{icon:t(()=>[e(d,{color:"var(--pf-v6-global--success-color--100)"},{default:t(()=>[e(f(v))]),_:1})]),_:1}),e(m,null,{default:t(()=>a[11]||(a[11]=[n(" This represents the empty state pattern in PatternFly with a custom icon color. Hopefully it's simple enough to use but flexible enough to meet a variety of needs ")])),_:1,__:[11]})]),_:1})]),_:1})]),_:1})}}});export{A as default};
