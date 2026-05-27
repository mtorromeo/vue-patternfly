import{D as e,E as t,I as n,N as r,O as i,R as a,S as o,a as s,d as c,f as l,g as u,h as d,j as f,m as p,p as m,r as h,s as g,x as _,z as v}from"./index-mFbvqZfx.js";import{t as y}from"./circle-plus-icon-B8aCQzuP.js";var b={style:{"margin-bottom":`12px`}},x={style:{"margin-bottom":`12px`}},S=i({__name:`Icon.story`,setup(i){let S=a(!1),C=a(!1);return(i,a)=>{let w=r(`component-title`),T=r(`component-info`),E=r(`pf-icon`),D=r(`story-canvas`),O=r(`pf-content`),k=r(`pf-checkbox`),A=r(`pf-spinner`),j=r(`doc-page`);return f(),o(j,{name:`Components/Icon.story.vue`,title:`Icon`},{description:n(()=>[...a[2]||=[t(`An `,-1),_(`b`,null,`icon`,-1),t(` component is a container that allows for icons of varying dimensions, as well as spinners, to seamlessly replace each other without shifting surrounding content.`,-1)]]),apidocs:n(()=>[e(T,{name:`PfIcon`,doc:{name:`PfIcon`,exportName:`PfIcon`,displayName:`Icon`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`size`,description:`Size of the icon component container and icon.`,required:!1,type:{name:`union`,elements:[{name:`"sm"`},{name:`"md"`},{name:`"lg"`},{name:`"xl"`}]}},{name:`iconSize`,description:`Size of icon. Overrides the icon size set by the size property.`,required:!1,type:{name:`union`,elements:[{name:`"sm"`},{name:`"md"`},{name:`"lg"`},{name:`"xl"`}]}},{name:`progressIconSize`,description:`Size of progress icon. Overrides the icon size set by the size property.`,required:!1,type:{name:`union`,elements:[{name:`"sm"`},{name:`"md"`},{name:`"lg"`},{name:`"xl"`}]}},{name:`status`,description:`Status color of the icon`,required:!1,type:{name:`union`,elements:[{name:`"custom"`},{name:`"info"`},{name:`"success"`},{name:`"warning"`},{name:`"danger"`}]}},{name:`inline`,description:`Indicates the icon is inline and should inherit the text font size and color. Overriden by size and iconSize properties.`,required:!1,type:{name:`boolean`}},{name:`inProgress`,description:`Indicates the icon is in progress. Setting this property to true will swap the icon with the progressIcon.`,required:!1,type:{name:`boolean`}},{name:`defaultProgressArialabel`,description:`Aria-label for the default progress icon`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`'Loading...'`}},{name:`shouldMirrorRTL`,tags:{beta:[{description:`Flag indicating whether the icon passed as children should be mirrored for
right to left (RTL) languages. This will not mirror the icon passed to progressIcon.`,title:`beta`}]},required:!1,type:{name:`boolean`}}],events:[],slots:[{name:`default`},{name:`progress-icon`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Icon.vue`]}})]),default:n(()=>[e(w,{name:`pf-icon`}),a[18]||=_(`div`,{class:`markdown pf-v6-c-content`},[_(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),e(D,{title:`Basic`,source:`<pf-icon>
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
</pf-icon>`},{default:n(()=>[e(E,null,{default:n(()=>[e(v(h))]),_:1}),e(E,null,{default:n(()=>[e(v(g))]),_:1}),e(E,null,{default:n(()=>[e(v(s))]),_:1}),e(E,null,{default:n(()=>[e(v(c))]),_:1})]),_:1}),e(D,{title:`Size`,source:`<pf-icon size="sm">
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
</pf-icon>`},{default:n(()=>[e(E,{size:`sm`},{default:n(()=>[e(v(y))]),_:1}),e(E,{size:`md`},{default:n(()=>[e(v(y))]),_:1}),e(E,{size:`lg`},{default:n(()=>[e(v(y))]),_:1}),e(E,{size:`xl`},{default:n(()=>[e(v(y))]),_:1})]),_:1}),e(D,{title:`Status color`,source:`<pf-icon status="danger">
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
</pf-icon>`},{intro:n(()=>[...a[3]||=[_(`div`,{class:`markdown pf-v6-c-content`},[_(`p`,null,`The following example demonstrates the various status variants of an icon. Keep in mind that these icons are displayed out of a typical context, and that you should not rely on color alone to convey status to users.`)],-1)]]),default:n(()=>[e(E,{status:`danger`},{default:n(()=>[e(v(d))]),_:1}),e(E,{status:`warning`},{default:n(()=>[e(v(p))]),_:1}),e(E,{status:`success`},{default:n(()=>[e(v(u))]),_:1}),e(E,{status:`info`},{default:n(()=>[e(v(m))]),_:1}),e(E,{status:`custom`},{default:n(()=>[e(v(l))]),_:1})]),_:1}),e(D,{title:`Sizing an icon within the icon container`,source:`<pf-icon size="xl" icon-size="sm">
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
</pf-icon>`},{intro:n(()=>[...a[4]||=[_(`div`,{class:`markdown pf-v6-c-content`},[_(`p`,null,`Providing both size and iconSize properties allows the icon container to maintain a consistent size, even if the icon changes in size.`)],-1)]]),default:n(()=>[e(E,{size:`xl`,"icon-size":`sm`},{default:n(()=>[e(v(y))]),_:1}),e(E,{size:`xl`,"icon-size":`md`},{default:n(()=>[e(v(y))]),_:1}),e(E,{size:`xl`,"icon-size":`lg`},{default:n(()=>[e(v(y))]),_:1}),e(E,{size:`xl`},{default:n(()=>[e(v(y))]),_:1})]),_:1}),e(D,{title:`Inline`,source:`<pf-content>
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
</pf-content>`},{default:n(()=>[e(O,null,{default:n(()=>[_(`h1`,null,[a[5]||=t(` Heading `,-1),e(E,{inline:``},{default:n(()=>[e(v(y))]),_:1})]),a[11]||=_(`p`,null,` Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed hendrerit nisi in cursus maximus. `,-1),_(`h2`,null,[a[6]||=t(` Second level `,-1),e(E,{inline:``},{default:n(()=>[e(v(y))]),_:1})]),_(`p`,null,[e(E,{inline:``},{default:n(()=>[e(v(y))]),_:1}),a[8]||=t(` Curabitur accumsan turpis pharetra `,-1),_(`strong`,null,[a[7]||=t(` augue tincidunt `,-1),e(E,{inline:``},{default:n(()=>[e(v(y))]),_:1})]),a[9]||=t(` blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. `,-1)]),_(`small`,null,[a[10]||=t(` Sometimes you need small text `,-1),e(E,{inline:``},{default:n(()=>[e(v(y))]),_:1})]),a[12]||=t(` Inline with size specified: `,-1),e(E,{size:`sm`,inline:``},{default:n(()=>[e(v(y))]),_:1}),a[13]||=t(` small, `,-1),e(E,{size:`md`,inline:``},{default:n(()=>[e(v(y))]),_:1}),a[14]||=t(` medium, `,-1),e(E,{size:`lg`,inline:``},{default:n(()=>[e(v(y))]),_:1}),a[15]||=t(` large, `,-1),e(E,{size:`xl`,inline:``},{default:n(()=>[e(v(y))]),_:1}),a[16]||=t(` extra large `,-1)]),_:1})]),_:1}),e(D,{title:`In progress`,source:`<div style="margin-bottom: 12px">
  <pf-checkbox
    v-model="inProgress"
    label="Toggle in progress state"
    aria-label="Set icon progress state" />
</div>

<pf-icon :in-progress="inProgress">
  <CircleCheckIcon />
</pf-icon>`},{intro:n(()=>[...a[17]||=[_(`div`,{class:`markdown pf-v6-c-content`},[_(`p`,null,[t(`Passing the `),_(`code`,null,`isInProgress`),t(` property will swap the icon to a progress icon. By default this progress icon will be a `),_(`code`,null,`Spinner`),t(` but may be customized or overriden using the `),_(`code`,null,`progressIcon`),t(` property.`)])],-1)]]),default:n(()=>[_(`div`,b,[e(k,{modelValue:S.value,"onUpdate:modelValue":a[0]||=e=>S.value=e,label:`Toggle in progress state`,"aria-label":`Set icon progress state`},null,8,[`modelValue`])]),e(E,{"in-progress":S.value},{default:n(()=>[e(v(u))]),_:1},8,[`in-progress`])]),_:1}),e(D,{title:`Custom in progress icon`,source:`<div style="margin-bottom: 12px">
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
</pf-icon>`},{default:n(()=>[_(`div`,x,[e(k,{modelValue:C.value,"onUpdate:modelValue":a[1]||=e=>C.value=e,label:`Toggle in progress state`,"aria-label":`Set icon progress state`},null,8,[`modelValue`])]),e(E,{"in-progress":C.value},{"progress-icon":n(()=>[e(A,{diameter:`2em`,"aria-label":`Loading...`})]),default:n(()=>[e(v(u))]),_:1},8,[`in-progress`])]),_:1})]),_:1})}}});export{S as default};