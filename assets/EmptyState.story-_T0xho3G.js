import{F as e,K as t,c as n,g as r,h as i,it as a,j as o,l as s,m as c,pt as l}from"./runtime-core.esm-bundler-DO1530YC.js";import{A as u,C as d}from"./index-CUsetNQE.js";import{t as f}from"./cubes-icon-Cgiu6-gY.js";var p=r({__name:`EmptyState.story`,setup(r){let p=a(`success`),m={success:`danger`,danger:`warning`,warning:`info`,info:`custom`,custom:`success`},h={success:`You're all set`,danger:`You're not set`,warning:`You're probably not set`,info:`You might be set`,custom:`You're custom`};function g(){p.value=m[p.value]}return(r,a)=>{let m=e(`component-info`),_=e(`pf-empty-state-body`),v=e(`pf-button`),y=e(`pf-empty-state-actions`),b=e(`pf-empty-state-footer`),x=e(`pf-empty-state`),S=e(`story-canvas`),C=e(`pf-spinner`),w=e(`pf-empty-state-icon`),T=e(`doc-page`);return o(),s(T,{name:`Components/EmptyState.story.vue`,title:`Empty State`},{description:t(()=>[...a[0]||=[c(`An `,-1),n(`b`,null,`empty state`,-1),c(` is a screen that is not yet populated with data or information. Empty states typically contain a short message and next steps for the user.`,-1)]]),apidocs:t(()=>[i(m,{name:`PfEmptyState`,doc:{name:`PfEmptyState`,exportName:`PfEmptyState`,displayName:`EmptyState`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`fullHeight`,description:`Cause component to consume the available height of its container`,required:!1,type:{name:`boolean`}},{name:`variant`,description:`Modifies empty state max-width and sizes of icon, title and body`,required:!1,type:{name:`union`,elements:[{name:`"xs"`},{name:`"sm"`},{name:`"lg"`},{name:`"xl"`},{name:`"full"`}]},defaultValue:{func:!1,value:`'full'`}},{name:`status`,description:`Status of the empty state, will set a default status icon and color. Icon can be overwritten using the icon slot`,required:!1,type:{name:`union`,elements:[{name:`"danger"`},{name:`"warning"`},{name:`"success"`},{name:`"info"`},{name:`"custom"`}]}},{name:`title`,description:`Text of the title inside empty state header, will be wrapped in headingLevel`,required:!1,type:{name:`string`}},{name:`headingLevel`,description:`The heading level to use, default is h1`,required:!1,type:{name:`union`,elements:[{name:`"h1"`},{name:`"h2"`},{name:`"h3"`},{name:`"h4"`},{name:`"h5"`},{name:`"h6"`}]},defaultValue:{func:!1,value:`'h1'`}},{name:`headerClass`,description:`Additional classes added to the empty state header`,required:!1,type:{name:`TSIndexedAccessType`}},{name:`titleClass`,description:`Additional classes added to the title inside empty state header`,required:!1,type:{name:`TSIndexedAccessType`}}],events:[],slots:[{name:`icon`,description:`Empty state icon, wrapped in a pf-empty-state-icon. Can also be a pf-spinner`},{name:`title`,description:`Title content, wrapped in headingLevel. Overrides the title prop`},{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/EmptyState/EmptyState.vue`]}}),i(m,{name:`PfEmptyStateBody`,doc:{name:`PfEmptyStateBody`,exportName:`PfEmptyStateBody`,displayName:`EmptyStateBody`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/EmptyState/EmptyStateBody.vue`]}}),i(m,{name:`PfEmptyStateFooter`,doc:{name:`PfEmptyStateFooter`,exportName:`PfEmptyStateFooter`,displayName:`EmptyStateFooter`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/EmptyState/EmptyStateFooter.vue`]}}),i(m,{name:`PfEmptyStateActions`,doc:{name:`PfEmptyStateActions`,exportName:`PfEmptyStateActions`,displayName:`EmptyStateActions`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/EmptyState/EmptyStateActions.vue`]}}),i(m,{name:`PfEmptyStateHeader`,doc:{name:`PfEmptyStateHeader`,exportName:`PfEmptyStateHeader`,displayName:`EmptyStateHeader`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`title`,description:`Text of the title inside empty state header, will be wrapped in headingLevel`,required:!1,type:{name:`string`}},{name:`headingLevel`,description:`The heading level to use, default is h1`,required:!1,type:{name:`union`,elements:[{name:`"h1"`},{name:`"h2"`},{name:`"h3"`},{name:`"h4"`},{name:`"h5"`},{name:`"h6"`}]},defaultValue:{func:!1,value:`'h1'`}},{name:`titleClass`,description:`Additional classes added to the title inside empty state header`,required:!1,type:{name:`TSIndexedAccessType`}}],events:[],slots:[{name:`icon`,description:`Empty state icon, wrapped in a pf-empty-state-icon. Can also be a pf-spinner`},{name:`title`,description:`Title content, wrapped in headingLevel. Overrides the title prop`},{name:`default`,description:`Content rendered in the title wrapper, after the heading`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/EmptyState/EmptyStateHeader.vue`]}}),i(m,{name:`PfEmptyStateIcon`,doc:{name:`PfEmptyStateIcon`,exportName:`PfEmptyStateIcon`,displayName:`EmptyStateIcon`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`color`,description:`Changes the color of the icon.`,required:!1,type:{name:`string`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/EmptyState/EmptyStateIcon.vue`]}})]),default:t(()=>[a[52]||=n(`div`,{class:`markdown pf-v6-c-content`},[n(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),n(`ul`,null,[n(`li`,null,[c(`The `),n(`code`,null,`titleText`),c(` prop is replaced by the `),n(`code`,null,`title`),c(` prop or the `),n(`code`,null,`title`),c(` slot.`)]),n(`li`,null,[c(`The `),n(`code`,null,`icon`),c(` prop is replaced by the `),n(`code`,null,`icon`),c(` slot, which also takes a `),n(`code`,null,`pf-spinner`),c(`; with a `),n(`code`,null,`status`),c(` it defaults to the status icon.`)]),n(`li`,null,[c(`The `),n(`code`,null,`headerClassName`),c(` and `),n(`code`,null,`titleClassName`),c(` props are replaced by `),n(`code`,null,`header-class`),c(` and `),n(`code`,null,`title-class`),c(`.`)]),n(`li`,null,`The header is rendered only when there is a title, an icon or a status, instead of always being rendered empty.`),n(`li`,null,[n(`code`,null,`pf-empty-state-header`),c(` and `),n(`code`,null,`pf-empty-state-icon`),c(`, internal upstream, are exported to build a header by hand: `),n(`ul`,null,[n(`li`,null,[c(`the `),n(`code`,null,`default`),c(` slot of `),n(`code`,null,`pf-empty-state-header`),c(` is rendered in the title wrapper, after the heading;`)]),n(`li`,null,[c(`the `),n(`code`,null,`color`),c(` prop of `),n(`code`,null,`pf-empty-state-icon`),c(` sets a custom icon color. See `),n(`a`,{href:`#/`},`common differences from patternfly-react`),c(`.`)])])])]),n(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),i(S,{title:`Basic`,source:`<pf-empty-state title="Empty state" heading-level="h4">
  <template #icon>
    <cubes-icon />
  </template>
  <pf-empty-state-body>
    This represents the empty state pattern in PatternFly. Hopefully it's simple enough to use but flexible enough
    to meet a variety of needs.
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
</pf-empty-state>`},{default:t(()=>[i(x,{title:`Empty state`,"heading-level":`h4`},{icon:t(()=>[i(l(f))]),default:t(()=>[i(_,null,{default:t(()=>[...a[1]||=[c(` This represents the empty state pattern in PatternFly. Hopefully it's simple enough to use but flexible enough to meet a variety of needs. `,-1)]]),_:1}),i(b,null,{default:t(()=>[i(y,null,{default:t(()=>[i(v,{variant:`primary`},{default:t(()=>[...a[2]||=[c(`Primary action`,-1)]]),_:1})]),_:1}),i(y,null,{default:t(()=>[i(v,{variant:`link`},{default:t(()=>[...a[3]||=[c(`Multiple`,-1)]]),_:1}),i(v,{variant:`link`},{default:t(()=>[...a[4]||=[c(`Action Buttons`,-1)]]),_:1}),i(v,{variant:`link`},{default:t(()=>[...a[5]||=[c(`Can`,-1)]]),_:1}),i(v,{variant:`link`},{default:t(()=>[...a[6]||=[c(`Go here`,-1)]]),_:1}),i(v,{variant:`link`},{default:t(()=>[...a[7]||=[c(`In the secondary`,-1)]]),_:1}),i(v,{variant:`link`},{default:t(()=>[...a[8]||=[c(`Action area`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),i(S,{title:`Extra small`,source:`<pf-empty-state variant="xs" title="Empty state" heading-level="h4">
  <template #icon>
    <cubes-icon />
  </template>
  <pf-empty-state-body>
    This represents an the empty state pattern in PatternFly. The icon is optional.
  </pf-empty-state-body>
  <pf-empty-state-footer>
    <pf-empty-state-actions>
      <pf-button variant="link">Multiple</pf-button>
      <pf-button variant="link">Action Buttons</pf-button>
      <pf-button variant="link">Can</pf-button>
      <pf-button variant="link">Go here</pf-button>
      <pf-button variant="link">In the secondary</pf-button>
      <pf-button variant="link">Action area</pf-button>
    </pf-empty-state-actions>
  </pf-empty-state-footer>
</pf-empty-state>`},{default:t(()=>[i(x,{variant:`xs`,title:`Empty state`,"heading-level":`h4`},{icon:t(()=>[i(l(f))]),default:t(()=>[i(_,null,{default:t(()=>[...a[9]||=[c(` This represents an the empty state pattern in PatternFly. The icon is optional. `,-1)]]),_:1}),i(b,null,{default:t(()=>[i(y,null,{default:t(()=>[i(v,{variant:`link`},{default:t(()=>[...a[10]||=[c(`Multiple`,-1)]]),_:1}),i(v,{variant:`link`},{default:t(()=>[...a[11]||=[c(`Action Buttons`,-1)]]),_:1}),i(v,{variant:`link`},{default:t(()=>[...a[12]||=[c(`Can`,-1)]]),_:1}),i(v,{variant:`link`},{default:t(()=>[...a[13]||=[c(`Go here`,-1)]]),_:1}),i(v,{variant:`link`},{default:t(()=>[...a[14]||=[c(`In the secondary`,-1)]]),_:1}),i(v,{variant:`link`},{default:t(()=>[...a[15]||=[c(`Action area`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),i(S,{title:`Small`,source:`<pf-empty-state variant="sm" title="Empty state" heading-level="h4">
  <template #icon>
    <cubes-icon />
  </template>
  <pf-empty-state-body>
    This represents the empty state pattern in PatternFly. Hopefully it's simple enough to use but flexible enough
    to meet a variety of needs.
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
</pf-empty-state>`},{default:t(()=>[i(x,{variant:`sm`,title:`Empty state`,"heading-level":`h4`},{icon:t(()=>[i(l(f))]),default:t(()=>[i(_,null,{default:t(()=>[...a[16]||=[c(` This represents the empty state pattern in PatternFly. Hopefully it's simple enough to use but flexible enough to meet a variety of needs. `,-1)]]),_:1}),i(b,null,{default:t(()=>[i(y,null,{default:t(()=>[i(v,{variant:`primary`},{default:t(()=>[...a[17]||=[c(`Primary action`,-1)]]),_:1})]),_:1}),i(y,null,{default:t(()=>[i(v,{variant:`link`},{default:t(()=>[...a[18]||=[c(`Multiple`,-1)]]),_:1}),i(v,{variant:`link`},{default:t(()=>[...a[19]||=[c(`Action Buttons`,-1)]]),_:1}),i(v,{variant:`link`},{default:t(()=>[...a[20]||=[c(`Can`,-1)]]),_:1}),i(v,{variant:`link`},{default:t(()=>[...a[21]||=[c(`Go here`,-1)]]),_:1}),i(v,{variant:`link`},{default:t(()=>[...a[22]||=[c(`In the secondary`,-1)]]),_:1}),i(v,{variant:`link`},{default:t(()=>[...a[23]||=[c(`Action area`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),i(S,{title:`Large`,source:`<pf-empty-state variant="lg" title="Empty state" heading-level="h4">
  <template #icon>
    <cubes-icon />
  </template>
  <pf-empty-state-body>
    This represents the empty state pattern in PatternFly. Hopefully it's simple enough to use but flexible enough
    to meet a variety of needs.
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
</pf-empty-state>`},{default:t(()=>[i(x,{variant:`lg`,title:`Empty state`,"heading-level":`h4`},{icon:t(()=>[i(l(f))]),default:t(()=>[i(_,null,{default:t(()=>[...a[24]||=[c(` This represents the empty state pattern in PatternFly. Hopefully it's simple enough to use but flexible enough to meet a variety of needs. `,-1)]]),_:1}),i(b,null,{default:t(()=>[i(y,null,{default:t(()=>[i(v,{variant:`primary`},{default:t(()=>[...a[25]||=[c(`Primary action`,-1)]]),_:1})]),_:1}),i(y,null,{default:t(()=>[i(v,{variant:`link`},{default:t(()=>[...a[26]||=[c(`Multiple`,-1)]]),_:1}),i(v,{variant:`link`},{default:t(()=>[...a[27]||=[c(`Action Buttons`,-1)]]),_:1}),i(v,{variant:`link`},{default:t(()=>[...a[28]||=[c(`Can`,-1)]]),_:1}),i(v,{variant:`link`},{default:t(()=>[...a[29]||=[c(`Go here`,-1)]]),_:1}),i(v,{variant:`link`},{default:t(()=>[...a[30]||=[c(`In the secondary`,-1)]]),_:1}),i(v,{variant:`link`},{default:t(()=>[...a[31]||=[c(`Action area`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),i(S,{title:`Extra large`,source:`<pf-empty-state variant="xl" title="Empty state" heading-level="h4">
  <template #icon>
    <cubes-icon />
  </template>
  <pf-empty-state-body>
    This represents the empty state pattern in PatternFly. Hopefully it's simple enough to use but flexible enough
    to meet a variety of needs.
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
</pf-empty-state>`},{default:t(()=>[i(x,{variant:`xl`,title:`Empty state`,"heading-level":`h4`},{icon:t(()=>[i(l(f))]),default:t(()=>[i(_,null,{default:t(()=>[...a[32]||=[c(` This represents the empty state pattern in PatternFly. Hopefully it's simple enough to use but flexible enough to meet a variety of needs. `,-1)]]),_:1}),i(b,null,{default:t(()=>[i(y,null,{default:t(()=>[i(v,{variant:`primary`},{default:t(()=>[...a[33]||=[c(`Primary action`,-1)]]),_:1})]),_:1}),i(y,null,{default:t(()=>[i(v,{variant:`link`},{default:t(()=>[...a[34]||=[c(`Multiple`,-1)]]),_:1}),i(v,{variant:`link`},{default:t(()=>[...a[35]||=[c(`Action Buttons`,-1)]]),_:1}),i(v,{variant:`link`},{default:t(()=>[...a[36]||=[c(`Can`,-1)]]),_:1}),i(v,{variant:`link`},{default:t(()=>[...a[37]||=[c(`Go here`,-1)]]),_:1}),i(v,{variant:`link`},{default:t(()=>[...a[38]||=[c(`In the secondary`,-1)]]),_:1}),i(v,{variant:`link`},{default:t(()=>[...a[39]||=[c(`Action area`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),i(S,{title:`With status`,source:`<pf-empty-state :status="status" :title="titleMap[status]" heading-level="h4">
  <pf-empty-state-body>
    This represents an the empty state pattern in PatternFly. Hopefully it's simple enough to use but flexible
    enough to meet a variety of needs.
  </pf-empty-state-body>
  <pf-empty-state-footer>
    <pf-empty-state-actions>
      <pf-button variant="primary" @click="toggleStatus">Toggle status</pf-button>
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
</pf-empty-state>`},{default:t(()=>[i(x,{status:p.value,title:h[p.value],"heading-level":`h4`},{default:t(()=>[i(_,null,{default:t(()=>[...a[40]||=[c(` This represents an the empty state pattern in PatternFly. Hopefully it's simple enough to use but flexible enough to meet a variety of needs. `,-1)]]),_:1}),i(b,null,{default:t(()=>[i(y,null,{default:t(()=>[i(v,{variant:`primary`,onClick:g},{default:t(()=>[...a[41]||=[c(`Toggle status`,-1)]]),_:1})]),_:1}),i(y,null,{default:t(()=>[i(v,{variant:`link`},{default:t(()=>[...a[42]||=[c(`Multiple`,-1)]]),_:1}),i(v,{variant:`link`},{default:t(()=>[...a[43]||=[c(`Action Buttons`,-1)]]),_:1}),i(v,{variant:`link`},{default:t(()=>[...a[44]||=[c(`Can`,-1)]]),_:1}),i(v,{variant:`link`},{default:t(()=>[...a[45]||=[c(`Go here`,-1)]]),_:1}),i(v,{variant:`link`},{default:t(()=>[...a[46]||=[c(`In the secondary`,-1)]]),_:1}),i(v,{variant:`link`},{default:t(()=>[...a[47]||=[c(`Action area`,-1)]]),_:1})]),_:1})]),_:1})]),_:1},8,[`status`,`title`])]),_:1}),i(S,{title:`Spinner`,source:`<pf-empty-state title="Loading" heading-level="h4">
  <template #icon>
    <pf-spinner />
  </template>
</pf-empty-state>`},{default:t(()=>[i(x,{title:`Loading`,"heading-level":`h4`},{icon:t(()=>[i(C)]),_:1})]),_:1}),i(S,{title:`No match found`,source:`<pf-empty-state title="No results found" heading-level="h4">
  <template #icon>
    <magnifying-glass-icon />
  </template>
  <pf-empty-state-body>
    No results match the filter criteria. Clear all filters and try again.
  </pf-empty-state-body>
  <pf-empty-state-footer>
    <pf-empty-state-actions>
      <pf-button variant="link">Clear all filters</pf-button>
    </pf-empty-state-actions>
  </pf-empty-state-footer>
</pf-empty-state>`},{default:t(()=>[i(x,{title:`No results found`,"heading-level":`h4`},{icon:t(()=>[i(l(d))]),default:t(()=>[i(_,null,{default:t(()=>[...a[48]||=[c(` No results match the filter criteria. Clear all filters and try again. `,-1)]]),_:1}),i(b,null,{default:t(()=>[i(y,null,{default:t(()=>[i(v,{variant:`link`},{default:t(()=>[...a[49]||=[c(`Clear all filters`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),i(S,{title:`Custom icon color`,source:`<pf-empty-state title="Custom icon color" heading-level="h4">
  <template #icon>
    <pf-empty-state-icon color="var(--pf-t--global--icon--color--status--success--default)">
      <check-icon />
    </pf-empty-state-icon>
  </template>
  <pf-empty-state-body>
    This represents the empty state pattern in PatternFly with a custom icon color. Hopefully it's simple enough
    to use but flexible enough to meet a variety of needs.
  </pf-empty-state-body>
</pf-empty-state>`},{intro:t(()=>[...a[50]||=[n(`div`,{class:`markdown pf-v6-c-content`},[n(`p`,null,[c(`Wrap the icon in a `),n(`code`,null,`pf-empty-state-icon`),c(` to give it a custom `),n(`code`,null,`color`),c(`.`)])],-1)]]),default:t(()=>[i(x,{title:`Custom icon color`,"heading-level":`h4`},{icon:t(()=>[i(w,{color:`var(--pf-t--global--icon--color--status--success--default)`},{default:t(()=>[i(l(u))]),_:1})]),default:t(()=>[i(_,null,{default:t(()=>[...a[51]||=[c(` This represents the empty state pattern in PatternFly with a custom icon color. Hopefully it's simple enough to use but flexible enough to meet a variety of needs. `,-1)]]),_:1})]),_:1})]),_:1})]),_:1})}}});export{p as default};