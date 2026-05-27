import{D as e,E as t,I as n,N as r,O as i,S as a,c as o,j as s,o as c,x as l,z as u}from"./index-mFbvqZfx.js";import{t as d}from"./cubes-icon-DlCuZ13h.js";var f=i({__name:`EmptyState.story`,setup(i){return(i,f)=>{let p=r(`component-info`),m=r(`pf-empty-state-header`),h=r(`pf-empty-state-body`),g=r(`pf-button`),_=r(`pf-empty-state-actions`),v=r(`pf-empty-state-footer`),y=r(`pf-empty-state`),b=r(`story-canvas`),x=r(`pf-spinner`),S=r(`pf-empty-state-icon`),C=r(`doc-page`);return s(),a(C,{name:`Components/EmptyState.story.vue`,title:`Empty State`},{description:n(()=>[...f[0]||=[t(`An `,-1),l(`b`,null,`empty state`,-1),t(` is a screen that is not yet populated with data or information. Empty states typically contain a short message and next steps for the user.`,-1)]]),apidocs:n(()=>[e(p,{name:`PfEmptyState`,doc:{name:`PfEmptyState`,exportName:`PfEmptyState`,displayName:`EmptyState`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`fullHeight`,description:`Cause component to consume the available height of its container`,required:!1,type:{name:`boolean`}},{name:`variant`,description:`Modifies EmptyState max-width`,required:!1,type:{name:`union`,elements:[{name:`"xs"`},{name:`"small"`},{name:`"large"`},{name:`"xl"`},{name:`"full"`}]}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/EmptyState/EmptyState.vue`]}}),e(p,{name:`PfEmptyStateActions`,doc:{name:`PfEmptyStateActions`,exportName:`PfEmptyStateActions`,displayName:`EmptyStateActions`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/EmptyState/EmptyStateActions.vue`]}}),e(p,{name:`PfEmptyStateBody`,doc:{name:`PfEmptyStateBody`,exportName:`PfEmptyStateHeader`,displayName:`EmptyStateHeader`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`title`,description:`Text of the title inside empty state header, will be wrapped in headingLevel`,required:!1,type:{name:`string`}},{name:`headingLevel`,description:`The heading level to use, default is h1`,required:!1,type:{name:`union`,elements:[{name:`"h1"`},{name:`"h2"`},{name:`"h3"`},{name:`"h4"`},{name:`"h5"`},{name:`"h6"`}]},defaultValue:{func:!1,value:`'h1'`}}],events:[],slots:[{name:`icon`},{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/EmptyState/EmptyStateHeader.vue`]}}),e(p,{name:`PfEmptyStateFooter`,doc:{name:`PfEmptyStateFooter`,exportName:`PfEmptyStateFooter`,displayName:`EmptyStateFooter`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/EmptyState/EmptyStateFooter.vue`]}}),e(p,{name:`PfEmptyStateHeader`}),e(p,{name:`PfEmptyStateIcon`,doc:{name:`PfEmptyStateIcon`,exportName:`PfEmptyStateIcon`,displayName:`EmptyStateIcon`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`color`,description:`Changes the color of the icon.`,required:!1,type:{name:`string`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/EmptyState/EmptyStateIcon.vue`]}})]),default:n(()=>[e(b,{title:`Example`,source:`<pf-empty-state>
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
</pf-empty-state>`},{default:n(()=>[e(y,null,{default:n(()=>[e(m,{title:`Empty state`},{icon:n(()=>[e(u(d))]),_:1}),e(h,null,{default:n(()=>[...f[1]||=[t(` This represents an the empty state pattern in Patternfly 6. Hopefully it's simple enough to use but flexible enough to meet a variety of needs. `,-1)]]),_:1}),e(v,null,{default:n(()=>[e(_,null,{default:n(()=>[e(g,{variant:`primary`},{default:n(()=>[...f[2]||=[t(`Primary action`,-1)]]),_:1})]),_:1}),e(_,null,{default:n(()=>[e(g,{variant:`link`},{default:n(()=>[...f[3]||=[t(`Multiple`,-1)]]),_:1}),e(g,{variant:`link`},{default:n(()=>[...f[4]||=[t(`Action Buttons`,-1)]]),_:1}),e(g,{variant:`link`},{default:n(()=>[...f[5]||=[t(`Can`,-1)]]),_:1}),e(g,{variant:`link`},{default:n(()=>[...f[6]||=[t(`Go here`,-1)]]),_:1}),e(g,{variant:`link`},{default:n(()=>[...f[7]||=[t(`In the secondary`,-1)]]),_:1}),e(g,{variant:`link`},{default:n(()=>[...f[8]||=[t(`Action area`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(b,{title:`Spinner`,source:`<pf-empty-state>
  <pf-empty-state-header title="Loading" heading-level="h4">
    <template #icon>
      <pf-empty-state-icon>
        <pf-spinner />
      </pf-empty-state-icon>
    </template>
  </pf-empty-state-header>
</pf-empty-state>`},{default:n(()=>[e(y,null,{default:n(()=>[e(m,{title:`Loading`,"heading-level":`h4`},{icon:n(()=>[e(S,null,{default:n(()=>[e(x)]),_:1})]),_:1})]),_:1})]),_:1}),e(b,{title:`No match found`,source:`<pf-empty-state>
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
</pf-empty-state>`},{default:n(()=>[e(y,null,{default:n(()=>[e(m,{title:`No results found`,"heading-level":`h4`},{icon:n(()=>[e(u(c))]),_:1}),e(h,null,{default:n(()=>[...f[9]||=[t(` No results match the filter criteria. Clear all filters and try again. `,-1)]]),_:1}),e(v,null,{default:n(()=>[e(_,null,{default:n(()=>[e(g,{variant:`link`},{default:n(()=>[...f[10]||=[t(`Clear all filters`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(b,{title:`Custom icon color`,source:`<pf-empty-state>
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
</pf-empty-state>`},{default:n(()=>[e(y,null,{default:n(()=>[e(m,{title:`Custom icon color`,"heading-level":`h4`},{icon:n(()=>[e(S,{color:`var(--pf-v6-global--success-color--100)`},{default:n(()=>[e(u(o))]),_:1})]),_:1}),e(h,null,{default:n(()=>[...f[11]||=[t(` This represents the empty state pattern in PatternFly with a custom icon color. Hopefully it's simple enough to use but flexible enough to meet a variety of needs `,-1)]]),_:1})]),_:1})]),_:1})]),_:1})}}});export{f as default};