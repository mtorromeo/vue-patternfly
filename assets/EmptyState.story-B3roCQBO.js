import{N as e,U as t,at as n,c as r,h as i,k as a,m as o,p as s,s as c}from"./runtime-core.esm-bundler-BHp59X9g.js";import{a as l,c as u}from"./index-BKQOYPID.js";import{t as d}from"./cubes-icon-3PWQ-mmR.js";var f=i({__name:`EmptyState.story`,setup(i){return(i,f)=>{let p=e(`component-info`),m=e(`pf-empty-state-header`),h=e(`pf-empty-state-body`),g=e(`pf-button`),_=e(`pf-empty-state-actions`),v=e(`pf-empty-state-footer`),y=e(`pf-empty-state`),b=e(`story-canvas`),x=e(`pf-spinner`),S=e(`pf-empty-state-icon`),C=e(`doc-page`);return a(),r(C,{name:`Components/EmptyState.story.vue`,title:`Empty State`},{description:t(()=>[...f[0]||=[s(`An `,-1),c(`b`,null,`empty state`,-1),s(` is a screen that is not yet populated with data or information. Empty states typically contain a short message and next steps for the user.`,-1)]]),apidocs:t(()=>[o(p,{name:`PfEmptyState`,doc:{name:`PfEmptyState`,exportName:`PfEmptyState`,displayName:`EmptyState`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`fullHeight`,description:`Cause component to consume the available height of its container`,required:!1,type:{name:`boolean`}},{name:`variant`,description:`Modifies EmptyState max-width`,required:!1,type:{name:`union`,elements:[{name:`"xs"`},{name:`"small"`},{name:`"large"`},{name:`"xl"`},{name:`"full"`}]}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/EmptyState/EmptyState.vue`]}}),o(p,{name:`PfEmptyStateActions`,doc:{name:`PfEmptyStateActions`,exportName:`PfEmptyStateActions`,displayName:`EmptyStateActions`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/EmptyState/EmptyStateActions.vue`]}}),o(p,{name:`PfEmptyStateBody`,doc:{name:`PfEmptyStateBody`,exportName:`PfEmptyStateHeader`,displayName:`EmptyStateHeader`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`title`,description:`Text of the title inside empty state header, will be wrapped in headingLevel`,required:!1,type:{name:`string`}},{name:`headingLevel`,description:`The heading level to use, default is h1`,required:!1,type:{name:`union`,elements:[{name:`"h1"`},{name:`"h2"`},{name:`"h3"`},{name:`"h4"`},{name:`"h5"`},{name:`"h6"`}]},defaultValue:{func:!1,value:`'h1'`}}],events:[],slots:[{name:`icon`},{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/EmptyState/EmptyStateHeader.vue`]}}),o(p,{name:`PfEmptyStateFooter`,doc:{name:`PfEmptyStateFooter`,exportName:`PfEmptyStateFooter`,displayName:`EmptyStateFooter`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/EmptyState/EmptyStateFooter.vue`]}}),o(p,{name:`PfEmptyStateHeader`}),o(p,{name:`PfEmptyStateIcon`,doc:{name:`PfEmptyStateIcon`,exportName:`PfEmptyStateIcon`,displayName:`EmptyStateIcon`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`color`,description:`Changes the color of the icon.`,required:!1,type:{name:`string`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/EmptyState/EmptyStateIcon.vue`]}})]),default:t(()=>[o(b,{title:`Example`,source:`<pf-empty-state>
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
</pf-empty-state>`},{default:t(()=>[o(y,null,{default:t(()=>[o(m,{title:`Empty state`},{icon:t(()=>[o(n(d))]),_:1}),o(h,null,{default:t(()=>[...f[1]||=[s(` This represents an the empty state pattern in Patternfly 6. Hopefully it's simple enough to use but flexible enough to meet a variety of needs. `,-1)]]),_:1}),o(v,null,{default:t(()=>[o(_,null,{default:t(()=>[o(g,{variant:`primary`},{default:t(()=>[...f[2]||=[s(`Primary action`,-1)]]),_:1})]),_:1}),o(_,null,{default:t(()=>[o(g,{variant:`link`},{default:t(()=>[...f[3]||=[s(`Multiple`,-1)]]),_:1}),o(g,{variant:`link`},{default:t(()=>[...f[4]||=[s(`Action Buttons`,-1)]]),_:1}),o(g,{variant:`link`},{default:t(()=>[...f[5]||=[s(`Can`,-1)]]),_:1}),o(g,{variant:`link`},{default:t(()=>[...f[6]||=[s(`Go here`,-1)]]),_:1}),o(g,{variant:`link`},{default:t(()=>[...f[7]||=[s(`In the secondary`,-1)]]),_:1}),o(g,{variant:`link`},{default:t(()=>[...f[8]||=[s(`Action area`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),o(b,{title:`Spinner`,source:`<pf-empty-state>
  <pf-empty-state-header title="Loading" heading-level="h4">
    <template #icon>
      <pf-empty-state-icon>
        <pf-spinner />
      </pf-empty-state-icon>
    </template>
  </pf-empty-state-header>
</pf-empty-state>`},{default:t(()=>[o(y,null,{default:t(()=>[o(m,{title:`Loading`,"heading-level":`h4`},{icon:t(()=>[o(S,null,{default:t(()=>[o(x)]),_:1})]),_:1})]),_:1})]),_:1}),o(b,{title:`No match found`,source:`<pf-empty-state>
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
</pf-empty-state>`},{default:t(()=>[o(y,null,{default:t(()=>[o(m,{title:`No results found`,"heading-level":`h4`},{icon:t(()=>[o(n(l))]),_:1}),o(h,null,{default:t(()=>[...f[9]||=[s(` No results match the filter criteria. Clear all filters and try again. `,-1)]]),_:1}),o(v,null,{default:t(()=>[o(_,null,{default:t(()=>[o(g,{variant:`link`},{default:t(()=>[...f[10]||=[s(`Clear all filters`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),o(b,{title:`Custom icon color`,source:`<pf-empty-state>
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
</pf-empty-state>`},{default:t(()=>[o(y,null,{default:t(()=>[o(m,{title:`Custom icon color`,"heading-level":`h4`},{icon:t(()=>[o(S,{color:`var(--pf-v6-global--success-color--100)`},{default:t(()=>[o(n(u))]),_:1})]),_:1}),o(h,null,{default:t(()=>[...f[11]||=[s(` This represents the empty state pattern in PatternFly with a custom icon color. Hopefully it's simple enough to use but flexible enough to meet a variety of needs `,-1)]]),_:1})]),_:1})]),_:1})]),_:1})}}});export{f as default};