import{F as e,K as t,Pt as n,c as r,g as i,h as a,it as o,j as s,l as c,m as l,pt as u}from"./runtime-core.esm-bundler-DO1530YC.js";import{B as d,H as f,O as p,R as m,U as h,V as g,k as _,v,z as y}from"./index-CUsetNQE.js";import{t as b}from"./circle-plus-icon-CTlGxH5Q.js";var x={style:{"margin-bottom":`12px`}},S={style:{"margin-bottom":`12px`}},C=i({__name:`Icon.story`,setup(i){let C=o(!1),w=o(!1);return(i,o)=>{let T=e(`component-title`),E=e(`component-info`),D=e(`pf-icon`),O=e(`story-canvas`),k=e(`pf-content`),A=e(`pf-checkbox`),j=e(`pf-spinner`),M=e(`doc-page`);return s(),c(M,{name:`Components/Icon.story.vue`,title:`Icon`},{description:t(()=>[...o[2]||=[l(`An `,-1),r(`b`,null,`icon`,-1),l(` component is a container that allows for icons of varying dimensions, as well as spinners, to seamlessly replace each other without shifting surrounding content.`,-1)]]),apidocs:t(()=>[a(E,{name:`PfIcon`,doc:{name:`PfIcon`,exportName:`PfIcon`,displayName:`Icon`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`size`,description:`Size of the icon component container and icon.`,required:!1,type:{name:`IconSize`}},{name:`iconSize`,description:`Size of icon. Overrides the icon size set by the size property.`,required:!1,type:{name:`IconSize`}},{name:`progressIconSize`,description:`Size of progress icon. Overrides the icon size set by the size property.`,required:!1,type:{name:`IconSize`}},{name:`status`,description:`Status color of the icon`,required:!1,type:{name:`union`,elements:[{name:`"custom"`},{name:`"info"`},{name:`"success"`},{name:`"warning"`},{name:`"danger"`}]}},{name:`inline`,description:`Indicates the icon is inline and should inherit the text font size and color. Overriden by size and iconSize properties.`,required:!1,type:{name:`boolean`}},{name:`inProgress`,description:`Indicates the icon is in progress. Setting this property to true will swap the icon with the progressIcon.`,required:!1,type:{name:`boolean`}},{name:`defaultProgressArialabel`,description:"Aria-label for the default progress icon. Defaults to the `iconProgress` message.",required:!1,type:{name:`string`}},{name:`shouldMirrorRTL`,tags:{beta:[{description:`Flag indicating whether the icon passed as children should be mirrored for
right to left (RTL) languages. This will not mirror the icon passed to progressIcon.`,title:`beta`}]},required:!1,type:{name:`boolean`}}],events:[],slots:[{name:`default`},{name:`progress-icon`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Icon.vue`]}})]),default:t(()=>[a(T,{name:`pf-icon`}),o[43]||=r(`div`,{class:`markdown pf-v6-c-content`},[r(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),r(`ul`,null,[r(`li`,null,[l(`The `),r(`code`,null,`progressIcon`),l(` prop is replaced by the `),r(`code`,null,`progress-icon`),l(` slot. See `),r(`a`,{href:`#/`},`common differences from patternfly-react`),l(`.`)])]),r(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),a(O,{title:`Basic`,source:`<pf-icon>
  <ArrowDownLongIcon />
</pf-icon>
{{ ' ' }}
<pf-icon>
  <AngleRightIcon />
</pf-icon>
{{ ' ' }}
<pf-icon>
  <AngleDownIcon />
</pf-icon>
{{ ' ' }}
<pf-icon>
  <GearIcon />
</pf-icon>`},{default:t(()=>[a(D,null,{default:t(()=>[a(u(v))]),_:1}),o[3]||=l(` `+n(` `)+` `,-1),a(D,null,{default:t(()=>[a(u(p))]),_:1}),o[4]||=l(` `+n(` `)+` `,-1),a(D,null,{default:t(()=>[a(u(_))]),_:1}),o[5]||=l(` `+n(` `)+` `,-1),a(D,null,{default:t(()=>[a(u(m))]),_:1})]),_:1}),a(O,{title:`Standalone icon sizes`,source:`<pf-icon size="sm">
  <CirclePlusIcon />
</pf-icon>
{{ ' ' }}
<pf-icon size="md">
  <CirclePlusIcon />
</pf-icon>
{{ ' ' }}
<pf-icon size="lg">
  <CirclePlusIcon />
</pf-icon>
{{ ' ' }}
<pf-icon size="xl">
  <CirclePlusIcon />
</pf-icon>
{{ ' ' }}
<pf-icon size="2xl">
  <CirclePlusIcon />
</pf-icon>
{{ ' ' }}
<pf-icon size="3xl">
  <CirclePlusIcon />
</pf-icon>`},{intro:t(()=>[...o[6]||=[r(`div`,{class:`markdown pf-v6-c-content`},[r(`p`,null,`These are the standard options for sizing icons.`)],-1)]]),default:t(()=>[a(D,{size:`sm`},{default:t(()=>[a(u(b))]),_:1}),o[7]||=l(` `+n(` `)+` `,-1),a(D,{size:`md`},{default:t(()=>[a(u(b))]),_:1}),o[8]||=l(` `+n(` `)+` `,-1),a(D,{size:`lg`},{default:t(()=>[a(u(b))]),_:1}),o[9]||=l(` `+n(` `)+` `,-1),a(D,{size:`xl`},{default:t(()=>[a(u(b))]),_:1}),o[10]||=l(` `+n(` `)+` `,-1),a(D,{size:`2xl`},{default:t(()=>[a(u(b))]),_:1}),o[11]||=l(` `+n(` `)+` `,-1),a(D,{size:`3xl`},{default:t(()=>[a(u(b))]),_:1})]),_:1}),a(O,{title:`Body sizes`,source:`<pf-icon size="bodySm">
  <CirclePlusIcon />
</pf-icon>
{{ ' ' }}
<pf-icon size="bodyDefault">
  <CirclePlusIcon />
</pf-icon>
{{ ' ' }}
<pf-icon size="bodyLg">
  <CirclePlusIcon />
</pf-icon>`},{intro:t(()=>[...o[12]||=[r(`div`,{class:`markdown pf-v6-c-content`},[r(`p`,null,`These size options are meant to make icons match the size of body text.`)],-1)]]),default:t(()=>[a(D,{size:`bodySm`},{default:t(()=>[a(u(b))]),_:1}),o[13]||=l(` `+n(` `)+` `,-1),a(D,{size:`bodyDefault`},{default:t(()=>[a(u(b))]),_:1}),o[14]||=l(` `+n(` `)+` `,-1),a(D,{size:`bodyLg`},{default:t(()=>[a(u(b))]),_:1})]),_:1}),a(O,{title:`Heading sizes`,source:`<pf-icon size="headingSm">
  <CirclePlusIcon />
</pf-icon>
{{ ' ' }}
<pf-icon size="headingMd">
  <CirclePlusIcon />
</pf-icon>
{{ ' ' }}
<pf-icon size="headingLg">
  <CirclePlusIcon />
</pf-icon>
{{ ' ' }}
<pf-icon size="headingXl">
  <CirclePlusIcon />
</pf-icon>
{{ ' ' }}
<pf-icon size="heading_2xl">
  <CirclePlusIcon />
</pf-icon>
{{ ' ' }}
<pf-icon size="heading_3xl">
  <CirclePlusIcon />
</pf-icon>`},{intro:t(()=>[...o[15]||=[r(`div`,{class:`markdown pf-v6-c-content`},[r(`p`,null,`These size options are meant to make icons match the size of heading text.`)],-1)]]),default:t(()=>[a(D,{size:`headingSm`},{default:t(()=>[a(u(b))]),_:1}),o[16]||=l(` `+n(` `)+` `,-1),a(D,{size:`headingMd`},{default:t(()=>[a(u(b))]),_:1}),o[17]||=l(` `+n(` `)+` `,-1),a(D,{size:`headingLg`},{default:t(()=>[a(u(b))]),_:1}),o[18]||=l(` `+n(` `)+` `,-1),a(D,{size:`headingXl`},{default:t(()=>[a(u(b))]),_:1}),o[19]||=l(` `+n(` `)+` `,-1),a(D,{size:`heading_2xl`},{default:t(()=>[a(u(b))]),_:1}),o[20]||=l(` `+n(` `)+` `,-1),a(D,{size:`heading_3xl`},{default:t(()=>[a(u(b))]),_:1})]),_:1}),a(O,{title:`Status colors`,source:`<pf-icon status="danger">
  <CircleExclamationIcon />
</pf-icon>
{{ ' ' }}
<pf-icon status="warning">
  <TriangleExclamationIcon />
</pf-icon>
{{ ' ' }}
<pf-icon status="success">
  <CircleCheckIcon />
</pf-icon>
{{ ' ' }}
<pf-icon status="info">
  <CircleInfoIcon />
</pf-icon>
{{ ' ' }}
<pf-icon status="custom">
  <BellIcon />
</pf-icon>`},{intro:t(()=>[...o[21]||=[r(`div`,{class:`markdown pf-v6-c-content`},[r(`p`,null,`The following example demonstrates the various status variants of an icon. Keep in mind that these icons are displayed out of a typical context, and that you should not rely on color alone to convey status to users.`)],-1)]]),default:t(()=>[a(D,{status:`danger`},{default:t(()=>[a(u(f))]),_:1}),o[22]||=l(` `+n(` `)+` `,-1),a(D,{status:`warning`},{default:t(()=>[a(u(g))]),_:1}),o[23]||=l(` `+n(` `)+` `,-1),a(D,{status:`success`},{default:t(()=>[a(u(h))]),_:1}),o[24]||=l(` `+n(` `)+` `,-1),a(D,{status:`info`},{default:t(()=>[a(u(d))]),_:1}),o[25]||=l(` `+n(` `)+` `,-1),a(D,{status:`custom`},{default:t(()=>[a(u(y))]),_:1})]),_:1}),a(O,{title:`Sizing an icon within the icon container`,source:`<pf-icon size="3xl" icon-size="lg">
  <CirclePlusIcon />
</pf-icon>
{{ ' ' }}
<pf-icon size="3xl" icon-size="xl">
  <CirclePlusIcon />
</pf-icon>
{{ ' ' }}
<pf-icon size="3xl" icon-size="2xl">
  <CirclePlusIcon />
</pf-icon>
{{ ' ' }}
<pf-icon size="3xl">
  <CirclePlusIcon />
</pf-icon>`},{intro:t(()=>[...o[26]||=[r(`div`,{class:`markdown pf-v6-c-content`},[r(`p`,null,[l(`Providing both `),r(`code`,null,`size`),l(` and `),r(`code`,null,`icon-size`),l(` properties allows the icon container to maintain a consistent size, even if the icon changes in size.`)])],-1)]]),default:t(()=>[a(D,{size:`3xl`,"icon-size":`lg`},{default:t(()=>[a(u(b))]),_:1}),o[27]||=l(` `+n(` `)+` `,-1),a(D,{size:`3xl`,"icon-size":`xl`},{default:t(()=>[a(u(b))]),_:1}),o[28]||=l(` `+n(` `)+` `,-1),a(D,{size:`3xl`,"icon-size":`2xl`},{default:t(()=>[a(u(b))]),_:1}),o[29]||=l(` `+n(` `)+` `,-1),a(D,{size:`3xl`},{default:t(()=>[a(u(b))]),_:1})]),_:1}),a(O,{title:`Inline`,source:`<pf-content>
  <h1>
    Heading
    <pf-icon inline>
      <CirclePlusIcon />
    </pf-icon>
  </h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed hendrerit nisi in cursus maximus.</p>
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
</pf-content>`},{default:t(()=>[a(k,null,{default:t(()=>[r(`h1`,null,[o[30]||=l(` Heading `,-1),a(D,{inline:``},{default:t(()=>[a(u(b))]),_:1})]),o[36]||=r(`p`,null,`Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed hendrerit nisi in cursus maximus.`,-1),r(`h2`,null,[o[31]||=l(` Second level `,-1),a(D,{inline:``},{default:t(()=>[a(u(b))]),_:1})]),r(`p`,null,[a(D,{inline:``},{default:t(()=>[a(u(b))]),_:1}),o[33]||=l(` Curabitur accumsan turpis pharetra `,-1),r(`strong`,null,[o[32]||=l(` augue tincidunt `,-1),a(D,{inline:``},{default:t(()=>[a(u(b))]),_:1})]),o[34]||=l(` blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. `,-1)]),r(`small`,null,[o[35]||=l(` Sometimes you need small text `,-1),a(D,{inline:``},{default:t(()=>[a(u(b))]),_:1})]),o[37]||=l(` Inline with size specified: `,-1),a(D,{size:`sm`,inline:``},{default:t(()=>[a(u(b))]),_:1}),o[38]||=l(` small, `,-1),a(D,{size:`md`,inline:``},{default:t(()=>[a(u(b))]),_:1}),o[39]||=l(` medium, `,-1),a(D,{size:`lg`,inline:``},{default:t(()=>[a(u(b))]),_:1}),o[40]||=l(` large, `,-1),a(D,{size:`xl`,inline:``},{default:t(()=>[a(u(b))]),_:1}),o[41]||=l(` extra large `,-1)]),_:1})]),_:1}),a(O,{title:`In progress`,source:`<div style="margin-bottom: 12px">
  <pf-checkbox v-model="inProgress" label="Toggle in progress state" aria-label="Set icon progress state" />
</div>

<pf-icon :in-progress="inProgress">
  <CircleCheckIcon />
</pf-icon>`},{intro:t(()=>[...o[42]||=[r(`div`,{class:`markdown pf-v6-c-content`},[r(`p`,null,[l(`Passing the `),r(`code`,null,`in-progress`),l(` property will swap the icon to a progress icon. By default this progress icon will be a `),r(`code`,null,`pf-spinner`),l(` but may be customized or overriden using the `),r(`code`,null,`progress-icon`),l(` slot.`)])],-1)]]),default:t(()=>[r(`div`,x,[a(A,{modelValue:C.value,"onUpdate:modelValue":o[0]||=e=>C.value=e,label:`Toggle in progress state`,"aria-label":`Set icon progress state`},null,8,[`modelValue`])]),a(D,{"in-progress":C.value},{default:t(()=>[a(u(h))]),_:1},8,[`in-progress`])]),_:1}),a(O,{title:`Custom in progress icon`,source:`<div style="margin-bottom: 12px">
  <pf-checkbox v-model="inProgress2" label="Toggle in progress state" aria-label="Set icon progress state" />
</div>

<pf-icon :in-progress="inProgress2">
  <CircleCheckIcon />

  <template #progress-icon>
    <pf-spinner diameter="2em" aria-label="Loading..." />
  </template>
</pf-icon>`},{default:t(()=>[r(`div`,S,[a(A,{modelValue:w.value,"onUpdate:modelValue":o[1]||=e=>w.value=e,label:`Toggle in progress state`,"aria-label":`Set icon progress state`},null,8,[`modelValue`])]),a(D,{"in-progress":w.value},{"progress-icon":t(()=>[a(j,{diameter:`2em`,"aria-label":`Loading...`})]),default:t(()=>[a(u(h))]),_:1},8,[`in-progress`])]),_:1})]),_:1})}}});export{C as default};