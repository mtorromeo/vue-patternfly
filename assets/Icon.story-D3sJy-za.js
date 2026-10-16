import{N as e,U as t,c as n,et as r,h as i,k as a,m as o,p as s,s as c,st as l}from"./runtime-core.esm-bundler-wvQKcJ7_.js";import{d as u,f as d,g as f,h as p,m,o as h,p as g,r as _,s as v}from"./index-JVD46Mu3.js";import{t as y}from"./circle-plus-icon-D727XEwy.js";var b={style:{"margin-bottom":`12px`}},x={style:{"margin-bottom":`12px`}},S=i({__name:`Icon.story`,setup(i){let S=r(!1),C=r(!1);return(r,i)=>{let w=e(`component-title`),T=e(`component-info`),E=e(`pf-icon`),D=e(`story-canvas`),O=e(`pf-content`),k=e(`pf-checkbox`),A=e(`pf-spinner`),j=e(`doc-page`);return a(),n(j,{name:`Components/Icon.story.vue`,title:`Icon`},{description:t(()=>[...i[2]||=[s(`An `,-1),c(`b`,null,`icon`,-1),s(` component is a container that allows for icons of varying dimensions, as well as spinners, to seamlessly replace each other without shifting surrounding content.`,-1)]]),apidocs:t(()=>[o(T,{name:`PfIcon`,doc:{name:`PfIcon`,exportName:`PfIcon`,displayName:`Icon`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`size`,description:`Size of the icon component container and icon.`,required:!1,type:{name:`union`,elements:[{name:`"sm"`},{name:`"md"`},{name:`"lg"`},{name:`"xl"`}]}},{name:`iconSize`,description:`Size of icon. Overrides the icon size set by the size property.`,required:!1,type:{name:`union`,elements:[{name:`"sm"`},{name:`"md"`},{name:`"lg"`},{name:`"xl"`}]}},{name:`progressIconSize`,description:`Size of progress icon. Overrides the icon size set by the size property.`,required:!1,type:{name:`union`,elements:[{name:`"sm"`},{name:`"md"`},{name:`"lg"`},{name:`"xl"`}]}},{name:`status`,description:`Status color of the icon`,required:!1,type:{name:`union`,elements:[{name:`"custom"`},{name:`"info"`},{name:`"success"`},{name:`"warning"`},{name:`"danger"`}]}},{name:`inline`,description:`Indicates the icon is inline and should inherit the text font size and color. Overriden by size and iconSize properties.`,required:!1,type:{name:`boolean`}},{name:`inProgress`,description:`Indicates the icon is in progress. Setting this property to true will swap the icon with the progressIcon.`,required:!1,type:{name:`boolean`}},{name:`defaultProgressArialabel`,description:`Aria-label for the default progress icon`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`'Loading...'`}},{name:`shouldMirrorRTL`,tags:{beta:[{description:`Flag indicating whether the icon passed as children should be mirrored for
right to left (RTL) languages. This will not mirror the icon passed to progressIcon.`,title:`beta`}]},required:!1,type:{name:`boolean`}}],events:[],slots:[{name:`default`},{name:`progress-icon`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Icon.vue`]}})]),default:t(()=>[o(w,{name:`pf-icon`}),i[18]||=c(`div`,{class:`markdown pf-v6-c-content`},[c(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),o(D,{title:`Basic`,source:`<pf-icon>
  <ArrowDownLongIcon />
</pf-icon>
<pf-icon>
  <AngleRightIcon />
</pf-icon>
<pf-icon>
  <AngleDownIcon />
</pf-icon>
<pf-icon>
  <GearIcon />
</pf-icon>`},{default:t(()=>[o(E,null,{default:t(()=>[o(l(_))]),_:1}),o(E,null,{default:t(()=>[o(l(h))]),_:1}),o(E,null,{default:t(()=>[o(l(v))]),_:1}),o(E,null,{default:t(()=>[o(l(u))]),_:1})]),_:1}),o(D,{title:`Size`,source:`<pf-icon size="sm">
  <CirclePlusIcon />
</pf-icon>
<pf-icon size="md">
  <CirclePlusIcon />
</pf-icon>
<pf-icon size="lg">
  <CirclePlusIcon />
</pf-icon>
<pf-icon size="xl">
  <CirclePlusIcon />
</pf-icon>`},{default:t(()=>[o(E,{size:`sm`},{default:t(()=>[o(l(y))]),_:1}),o(E,{size:`md`},{default:t(()=>[o(l(y))]),_:1}),o(E,{size:`lg`},{default:t(()=>[o(l(y))]),_:1}),o(E,{size:`xl`},{default:t(()=>[o(l(y))]),_:1})]),_:1}),o(D,{title:`Status color`,source:`<pf-icon status="danger">
  <CircleExclamationIcon />
</pf-icon>
<pf-icon status="warning">
  <TriangleExclamationIcon />
</pf-icon>
<pf-icon status="success">
  <CircleCheckIcon />
</pf-icon>
<pf-icon status="info">
  <CircleInfoIcon />
</pf-icon>
<pf-icon status="custom">
  <BellIcon />
</pf-icon>`},{intro:t(()=>[...i[3]||=[c(`div`,{class:`markdown pf-v6-c-content`},[c(`p`,null,`The following example demonstrates the various status variants of an icon. Keep in mind that these icons are displayed out of a typical context, and that you should not rely on color alone to convey status to users.`)],-1)]]),default:t(()=>[o(E,{status:`danger`},{default:t(()=>[o(l(p))]),_:1}),o(E,{status:`warning`},{default:t(()=>[o(l(m))]),_:1}),o(E,{status:`success`},{default:t(()=>[o(l(f))]),_:1}),o(E,{status:`info`},{default:t(()=>[o(l(g))]),_:1}),o(E,{status:`custom`},{default:t(()=>[o(l(d))]),_:1})]),_:1}),o(D,{title:`Sizing an icon within the icon container`,source:`<pf-icon size="xl" icon-size="sm">
  <CirclePlusIcon />
</pf-icon>
<pf-icon size="xl" icon-size="md">
  <CirclePlusIcon />
</pf-icon>
<pf-icon size="xl" icon-size="lg">
  <CirclePlusIcon />
</pf-icon>
<pf-icon size="xl">
  <CirclePlusIcon />
</pf-icon>`},{intro:t(()=>[...i[4]||=[c(`div`,{class:`markdown pf-v6-c-content`},[c(`p`,null,`Providing both size and iconSize properties allows the icon container to maintain a consistent size, even if the icon changes in size.`)],-1)]]),default:t(()=>[o(E,{size:`xl`,"icon-size":`sm`},{default:t(()=>[o(l(y))]),_:1}),o(E,{size:`xl`,"icon-size":`md`},{default:t(()=>[o(l(y))]),_:1}),o(E,{size:`xl`,"icon-size":`lg`},{default:t(()=>[o(l(y))]),_:1}),o(E,{size:`xl`},{default:t(()=>[o(l(y))]),_:1})]),_:1}),o(D,{title:`Inline`,source:`<pf-content>
  <h1>
    Heading
    <pf-icon inline>
      <CirclePlusIcon />
    </pf-icon>
  </h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed hendrerit nisi in cursus maximus.
  </p>
  <h2>
    Second level
    <pf-icon inline>
      <CirclePlusIcon />
    </pf-icon>
  </h2>
  <p>
    <pf-icon inline>
      <CirclePlusIcon />
    </pf-icon>
    Curabitur accumsan turpis pharetra
    <strong>
      augue tincidunt
      <pf-icon inline>
        <CirclePlusIcon />
      </pf-icon>
    </strong>
    blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus
    venenatis. Suspendisse potenti.
  </p>
  <small>
    Sometimes you need small text
    <pf-icon inline>
      <CirclePlusIcon />
    </pf-icon>
  </small>
  Inline with size specified:
  <pf-icon size="sm" inline>
    <CirclePlusIcon />
  </pf-icon>
  small,
  <pf-icon size="md" inline>
    <CirclePlusIcon />
  </pf-icon>
  medium,
  <pf-icon size="lg" inline>
    <CirclePlusIcon />
  </pf-icon>
  large,
  <pf-icon size="xl" inline>
    <CirclePlusIcon />
  </pf-icon>
  extra large
</pf-content>`},{default:t(()=>[o(O,null,{default:t(()=>[c(`h1`,null,[i[5]||=s(` Heading `,-1),o(E,{inline:``},{default:t(()=>[o(l(y))]),_:1})]),i[11]||=c(`p`,null,` Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed hendrerit nisi in cursus maximus. `,-1),c(`h2`,null,[i[6]||=s(` Second level `,-1),o(E,{inline:``},{default:t(()=>[o(l(y))]),_:1})]),c(`p`,null,[o(E,{inline:``},{default:t(()=>[o(l(y))]),_:1}),i[8]||=s(` Curabitur accumsan turpis pharetra `,-1),c(`strong`,null,[i[7]||=s(` augue tincidunt `,-1),o(E,{inline:``},{default:t(()=>[o(l(y))]),_:1})]),i[9]||=s(` blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. `,-1)]),c(`small`,null,[i[10]||=s(` Sometimes you need small text `,-1),o(E,{inline:``},{default:t(()=>[o(l(y))]),_:1})]),i[12]||=s(` Inline with size specified: `,-1),o(E,{size:`sm`,inline:``},{default:t(()=>[o(l(y))]),_:1}),i[13]||=s(` small, `,-1),o(E,{size:`md`,inline:``},{default:t(()=>[o(l(y))]),_:1}),i[14]||=s(` medium, `,-1),o(E,{size:`lg`,inline:``},{default:t(()=>[o(l(y))]),_:1}),i[15]||=s(` large, `,-1),o(E,{size:`xl`,inline:``},{default:t(()=>[o(l(y))]),_:1}),i[16]||=s(` extra large `,-1)]),_:1})]),_:1}),o(D,{title:`In progress`,source:`<div style="margin-bottom: 12px">
  <pf-checkbox
    v-model="inProgress"
    label="Toggle in progress state"
    aria-label="Set icon progress state" />
</div>

<pf-icon :in-progress="inProgress">
  <CircleCheckIcon />
</pf-icon>`},{intro:t(()=>[...i[17]||=[c(`div`,{class:`markdown pf-v6-c-content`},[c(`p`,null,[s(`Passing the `),c(`code`,null,`isInProgress`),s(` property will swap the icon to a progress icon. By default this progress icon will be a `),c(`code`,null,`Spinner`),s(` but may be customized or overriden using the `),c(`code`,null,`progressIcon`),s(` property.`)])],-1)]]),default:t(()=>[c(`div`,b,[o(k,{modelValue:S.value,"onUpdate:modelValue":i[0]||=e=>S.value=e,label:`Toggle in progress state`,"aria-label":`Set icon progress state`},null,8,[`modelValue`])]),o(E,{"in-progress":S.value},{default:t(()=>[o(l(f))]),_:1},8,[`in-progress`])]),_:1}),o(D,{title:`Custom in progress icon`,source:`<div style="margin-bottom: 12px">
  <pf-checkbox
    v-model="inProgress2"
    label="Toggle in progress state"
    aria-label="Set icon progress state" />
</div>

<pf-icon :in-progress="inProgress2">
  <CircleCheckIcon />

  <template #progress-icon>
    <pf-spinner diameter="2em" aria-label="Loading..." />
  </template>
</pf-icon>`},{default:t(()=>[c(`div`,x,[o(k,{modelValue:C.value,"onUpdate:modelValue":i[1]||=e=>C.value=e,label:`Toggle in progress state`,"aria-label":`Set icon progress state`},null,8,[`modelValue`])]),o(E,{"in-progress":C.value},{"progress-icon":t(()=>[o(A,{diameter:`2em`,"aria-label":`Loading...`})]),default:t(()=>[o(l(f))]),_:1},8,[`in-progress`])]),_:1})]),_:1})}}});export{S as default};