import{N as e,U as t,c as n,k as r,m as i,p as a,s as o}from"./runtime-core.esm-bundler-DZwyVwFG.js";import{n as s}from"./index--Exe4Myj.js";var c={};function l(s,c){let l=e(`component-info`),u=e(`pf-spinner`),d=e(`story-canvas`),f=e(`pf-content`),p=e(`doc-page`);return r(),n(p,{name:`Components/Spinner.story.vue`,title:`Spinner`},{description:t(()=>[...c[0]||=[a(`A `,-1),o(`b`,null,`spinner`,-1),a(` is used to indicate to users that an action is in progress. For actions that may take a long time, use a [progress bar](#/stories/components/progress) instead.`,-1)]]),apidocs:t(()=>[i(l,{name:`PfSpinner`,doc:{name:`PfSpinner`,exportName:`PfSpinner`,displayName:`Spinner`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`size`,description:`Size variant of progress.`,required:!1,type:{name:`union`,elements:[{name:`"sm"`},{name:`"md"`},{name:`"lg"`},{name:`"xl"`}]},defaultValue:{func:!1,value:`'xl'`}},{name:`ariaValueText`,description:`Text describing that current loading status or progress`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`'Loading...'`}},{name:`diameter`,description:`Diameter of spinner set as CSS variable`,required:!1,type:{name:`string`}},{name:`inline`,tags:{beta:[{description:`Indicates the spinner is inline and the size should inherit the text font size. This will override the size prop.`,title:`beta`}]},required:!1,type:{name:`boolean`}},{name:`ariaLabel`,description:`Accessible label to describe what is loading`,required:!1,type:{name:`string`}},{name:`ariaLabelledby`,description:`Id of element which describes what is being loaded`,required:!1,type:{name:`string`}}],events:[],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Spinner.vue`]}})]),default:t(()=>[c[7]||=o(`div`,{class:`markdown pf-v6-c-content`},[o(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),i(d,{title:`Basic`,source:`<pf-spinner />`},{default:t(()=>[i(u)]),_:1}),i(d,{title:`Size variations`,source:`<pf-spinner size="sm" />
<pf-spinner size="md" />
<pf-spinner size="lg" />
<pf-spinner size="xl" />`},{default:t(()=>[i(u,{size:`sm`}),i(u,{size:`md`}),i(u,{size:`lg`}),i(u,{size:`xl`})]),_:1}),i(d,{title:`Custom size`,source:`<pf-spinner diameter="80px" />`},{default:t(()=>[i(u,{diameter:`80px`})]),_:1}),i(d,{title:`Inline size`,source:`<pf-content>
  <h1>
    Heading
    <pf-spinner inline aria-label="Spinner in a heading" />
  </h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed hendrerit nisi in cursus maximus.
  </p>
  <h2>
    Second level
    <pf-spinner inline aria-label="spinner in a subheading" />
  </h2>
  <p>
    Curabitur accumsan turpis pharetra blandit. Quisque condimentum maximus mi,
    <pf-spinner inline aria-label="Spinner in a paragraph" /> sit amet commodo arcu rutrum id. Proin pretium urna vel
    cursus venenatis. Suspendisse potenti.
  </p>
  <small>
    Sometimes you need small text
    <pf-spinner inline aria-label="Spinner in a small element" />
  </small>
</pf-content>`},{default:t(()=>[i(f,null,{default:t(()=>[o(`h1`,null,[c[1]||=a(` Heading `,-1),i(u,{inline:``,"aria-label":`Spinner in a heading`})]),c[6]||=o(`p`,null,` Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed hendrerit nisi in cursus maximus. `,-1),o(`h2`,null,[c[2]||=a(` Second level `,-1),i(u,{inline:``,"aria-label":`spinner in a subheading`})]),o(`p`,null,[c[3]||=a(` Curabitur accumsan turpis pharetra blandit. Quisque condimentum maximus mi, `,-1),i(u,{inline:``,"aria-label":`Spinner in a paragraph`}),c[4]||=a(` sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. `,-1)]),o(`small`,null,[c[5]||=a(` Sometimes you need small text `,-1),i(u,{inline:``,"aria-label":`Spinner in a small element`})])]),_:1})]),_:1})]),_:1})}var u=s(c,[[`render`,l]]);export{u as default};