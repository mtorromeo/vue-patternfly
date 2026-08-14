import{H as e,N as t,Q as n,c as r,h as i,it as a,k as o,m as s,p as c,s as l}from"./runtime-core.esm-bundler-DvxuuL12.js";import{d as u,f as d,g as f,h as p,m,o as h,p as g,r as _,s as v}from"./index-JKtqnbzt.js";import{t as y}from"./circle-plus-icon-BB3ASbH7.js";var b={style:{"margin-bottom":`12px`}},x={style:{"margin-bottom":`12px`}},S=i({__name:`Icon.story`,setup(i){let S=n(!1),C=n(!1);return(n,i)=>{let w=t(`component-title`),T=t(`component-info`),E=t(`pf-icon`),D=t(`story-canvas`),O=t(`pf-content`),k=t(`pf-checkbox`),A=t(`pf-spinner`),j=t(`doc-page`);return o(),r(j,{name:`Components/Icon.story.vue`,title:`Icon`},{description:e(()=>[...i[2]||=[c(`An `,-1),l(`b`,null,`icon`,-1),c(` component is a container that allows for icons of varying dimensions, as well as spinners, to seamlessly replace each other without shifting surrounding content.`,-1)]]),apidocs:e(()=>[s(T,{name:`PfIcon`,doc:{name:`PfIcon`,exportName:`PfIcon`,displayName:`Icon`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`size`,description:`Size of the icon component container and icon.`,required:!1,type:{name:`union`,elements:[{name:`"sm"`},{name:`"md"`},{name:`"lg"`},{name:`"xl"`}]}},{name:`iconSize`,description:`Size of icon. Overrides the icon size set by the size property.`,required:!1,type:{name:`union`,elements:[{name:`"sm"`},{name:`"md"`},{name:`"lg"`},{name:`"xl"`}]}},{name:`progressIconSize`,description:`Size of progress icon. Overrides the icon size set by the size property.`,required:!1,type:{name:`union`,elements:[{name:`"sm"`},{name:`"md"`},{name:`"lg"`},{name:`"xl"`}]}},{name:`status`,description:`Status color of the icon`,required:!1,type:{name:`union`,elements:[{name:`"custom"`},{name:`"info"`},{name:`"success"`},{name:`"warning"`},{name:`"danger"`}]}},{name:`inline`,description:`Indicates the icon is inline and should inherit the text font size and color. Overriden by size and iconSize properties.`,required:!1,type:{name:`boolean`}},{name:`inProgress`,description:`Indicates the icon is in progress. Setting this property to true will swap the icon with the progressIcon.`,required:!1,type:{name:`boolean`}},{name:`defaultProgressArialabel`,description:`Aria-label for the default progress icon`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`'Loading...'`}},{name:`shouldMirrorRTL`,tags:{beta:[{description:`Flag indicating whether the icon passed as children should be mirrored for
right to left (RTL) languages. This will not mirror the icon passed to progressIcon.`,title:`beta`}]},required:!1,type:{name:`boolean`}}],events:[],slots:[{name:`default`},{name:`progress-icon`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Icon.vue`]}})]),default:e(()=>[s(w,{name:`pf-icon`}),i[18]||=l(`div`,{class:`markdown pf-v6-c-content`},[l(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),s(D,{title:`Basic`,source:`<pf-icon>
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
</pf-icon>`},{default:e(()=>[s(E,null,{default:e(()=>[s(a(_))]),_:1}),s(E,null,{default:e(()=>[s(a(h))]),_:1}),s(E,null,{default:e(()=>[s(a(v))]),_:1}),s(E,null,{default:e(()=>[s(a(u))]),_:1})]),_:1}),s(D,{title:`Size`,source:`<pf-icon size="sm">
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
</pf-icon>`},{default:e(()=>[s(E,{size:`sm`},{default:e(()=>[s(a(y))]),_:1}),s(E,{size:`md`},{default:e(()=>[s(a(y))]),_:1}),s(E,{size:`lg`},{default:e(()=>[s(a(y))]),_:1}),s(E,{size:`xl`},{default:e(()=>[s(a(y))]),_:1})]),_:1}),s(D,{title:`Status color`,source:`<pf-icon status="danger">
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
</pf-icon>`},{intro:e(()=>[...i[3]||=[l(`div`,{class:`markdown pf-v6-c-content`},[l(`p`,null,`The following example demonstrates the various status variants of an icon. Keep in mind that these icons are displayed out of a typical context, and that you should not rely on color alone to convey status to users.`)],-1)]]),default:e(()=>[s(E,{status:`danger`},{default:e(()=>[s(a(p))]),_:1}),s(E,{status:`warning`},{default:e(()=>[s(a(m))]),_:1}),s(E,{status:`success`},{default:e(()=>[s(a(f))]),_:1}),s(E,{status:`info`},{default:e(()=>[s(a(g))]),_:1}),s(E,{status:`custom`},{default:e(()=>[s(a(d))]),_:1})]),_:1}),s(D,{title:`Sizing an icon within the icon container`,source:`<pf-icon size="xl" icon-size="sm">
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
</pf-icon>`},{intro:e(()=>[...i[4]||=[l(`div`,{class:`markdown pf-v6-c-content`},[l(`p`,null,`Providing both size and iconSize properties allows the icon container to maintain a consistent size, even if the icon changes in size.`)],-1)]]),default:e(()=>[s(E,{size:`xl`,"icon-size":`sm`},{default:e(()=>[s(a(y))]),_:1}),s(E,{size:`xl`,"icon-size":`md`},{default:e(()=>[s(a(y))]),_:1}),s(E,{size:`xl`,"icon-size":`lg`},{default:e(()=>[s(a(y))]),_:1}),s(E,{size:`xl`},{default:e(()=>[s(a(y))]),_:1})]),_:1}),s(D,{title:`Inline`,source:`<pf-content>
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
</pf-content>`},{default:e(()=>[s(O,null,{default:e(()=>[l(`h1`,null,[i[5]||=c(` Heading `,-1),s(E,{inline:``},{default:e(()=>[s(a(y))]),_:1})]),i[11]||=l(`p`,null,` Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed hendrerit nisi in cursus maximus. `,-1),l(`h2`,null,[i[6]||=c(` Second level `,-1),s(E,{inline:``},{default:e(()=>[s(a(y))]),_:1})]),l(`p`,null,[s(E,{inline:``},{default:e(()=>[s(a(y))]),_:1}),i[8]||=c(` Curabitur accumsan turpis pharetra `,-1),l(`strong`,null,[i[7]||=c(` augue tincidunt `,-1),s(E,{inline:``},{default:e(()=>[s(a(y))]),_:1})]),i[9]||=c(` blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. `,-1)]),l(`small`,null,[i[10]||=c(` Sometimes you need small text `,-1),s(E,{inline:``},{default:e(()=>[s(a(y))]),_:1})]),i[12]||=c(` Inline with size specified: `,-1),s(E,{size:`sm`,inline:``},{default:e(()=>[s(a(y))]),_:1}),i[13]||=c(` small, `,-1),s(E,{size:`md`,inline:``},{default:e(()=>[s(a(y))]),_:1}),i[14]||=c(` medium, `,-1),s(E,{size:`lg`,inline:``},{default:e(()=>[s(a(y))]),_:1}),i[15]||=c(` large, `,-1),s(E,{size:`xl`,inline:``},{default:e(()=>[s(a(y))]),_:1}),i[16]||=c(` extra large `,-1)]),_:1})]),_:1}),s(D,{title:`In progress`,source:`<div style="margin-bottom: 12px">
  <pf-checkbox
    v-model="inProgress"
    label="Toggle in progress state"
    aria-label="Set icon progress state" />
</div>

<pf-icon :in-progress="inProgress">
  <CircleCheckIcon />
</pf-icon>`},{intro:e(()=>[...i[17]||=[l(`div`,{class:`markdown pf-v6-c-content`},[l(`p`,null,[c(`Passing the `),l(`code`,null,`isInProgress`),c(` property will swap the icon to a progress icon. By default this progress icon will be a `),l(`code`,null,`Spinner`),c(` but may be customized or overriden using the `),l(`code`,null,`progressIcon`),c(` property.`)])],-1)]]),default:e(()=>[l(`div`,b,[s(k,{modelValue:S.value,"onUpdate:modelValue":i[0]||=e=>S.value=e,label:`Toggle in progress state`,"aria-label":`Set icon progress state`},null,8,[`modelValue`])]),s(E,{"in-progress":S.value},{default:e(()=>[s(a(f))]),_:1},8,[`in-progress`])]),_:1}),s(D,{title:`Custom in progress icon`,source:`<div style="margin-bottom: 12px">
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
</pf-icon>`},{default:e(()=>[l(`div`,x,[s(k,{modelValue:C.value,"onUpdate:modelValue":i[1]||=e=>C.value=e,label:`Toggle in progress state`,"aria-label":`Set icon progress state`},null,8,[`modelValue`])]),s(E,{"in-progress":C.value},{"progress-icon":e(()=>[s(A,{diameter:`2em`,"aria-label":`Loading...`})]),default:e(()=>[s(a(f))]),_:1},8,[`in-progress`])]),_:1})]),_:1})}}});export{S as default};