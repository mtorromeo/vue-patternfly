import{F as e,G as t,Nt as n,c as r,ft as i,g as a,h as o,j as s,l as c,m as l,rt as u}from"./runtime-core.esm-bundler-DKmYt4j6.js";import{B as d,H as f,O as p,R as m,U as h,V as g,k as _,v,z as y}from"./index-Cl3hMFDe.js";import{t as b}from"./circle-plus-icon-CC9jckNx.js";var x={style:{"margin-bottom":`12px`}},S={style:{"margin-bottom":`12px`}},C=a({__name:`Icon.story`,setup(a){let C=u(!1),w=u(!1);return(a,u)=>{let T=e(`component-title`),E=e(`component-info`),D=e(`pf-icon`),O=e(`story-canvas`),k=e(`pf-content`),A=e(`pf-checkbox`),j=e(`pf-spinner`),M=e(`doc-page`);return s(),c(M,{name:`Components/Icon.story.vue`,title:`Icon`},{description:t(()=>[...u[2]||=[l(`An `,-1),r(`b`,null,`icon`,-1),l(` component is a container that allows for icons of varying dimensions, as well as spinners, to seamlessly replace each other without shifting surrounding content.`,-1)]]),apidocs:t(()=>[o(E,{name:`PfIcon`,doc:{name:`PfIcon`,exportName:`PfIcon`,displayName:`Icon`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`size`,description:`Size of the icon component container and icon.`,required:!1,type:{name:`IconSize`}},{name:`iconSize`,description:`Size of icon. Overrides the icon size set by the size property.`,required:!1,type:{name:`IconSize`}},{name:`progressIconSize`,description:`Size of progress icon. Overrides the icon size set by the size property.`,required:!1,type:{name:`IconSize`}},{name:`status`,description:`Status color of the icon`,required:!1,type:{name:`union`,elements:[{name:`"custom"`},{name:`"info"`},{name:`"success"`},{name:`"warning"`},{name:`"danger"`}]}},{name:`inline`,description:`Indicates the icon is inline and should inherit the text font size and color. Overriden by size and iconSize properties.`,required:!1,type:{name:`boolean`}},{name:`inProgress`,description:`Indicates the icon is in progress. Setting this property to true will swap the icon with the progressIcon.`,required:!1,type:{name:`boolean`}},{name:`defaultProgressArialabel`,description:`Aria-label for the default progress icon`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`'Loading...'`}},{name:`shouldMirrorRTL`,tags:{beta:[{description:`Flag indicating whether the icon passed as children should be mirrored for
right to left (RTL) languages. This will not mirror the icon passed to progressIcon.`,title:`beta`}]},required:!1,type:{name:`boolean`}}],events:[],slots:[{name:`default`},{name:`progress-icon`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Icon.vue`]}})]),default:t(()=>[o(T,{name:`pf-icon`}),u[43]||=r(`div`,{class:`markdown pf-v6-c-content`},[r(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),r(`ul`,null,[r(`li`,null,[l(`The `),r(`code`,null,`progressIcon`),l(` prop is replaced by the `),r(`code`,null,`progress-icon`),l(` slot. See `),r(`a`,{href:`#/`},`common differences from patternfly-react`),l(`.`)])]),r(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),o(O,{title:`Basic`,source:`<pf-icon>
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
</pf-icon>`},{default:t(()=>[o(D,null,{default:t(()=>[o(i(v))]),_:1}),u[3]||=l(` `+n(` `)+` `,-1),o(D,null,{default:t(()=>[o(i(p))]),_:1}),u[4]||=l(` `+n(` `)+` `,-1),o(D,null,{default:t(()=>[o(i(_))]),_:1}),u[5]||=l(` `+n(` `)+` `,-1),o(D,null,{default:t(()=>[o(i(m))]),_:1})]),_:1}),o(O,{title:`Standalone icon sizes`,source:`<pf-icon size="sm">
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
</pf-icon>`},{intro:t(()=>[...u[6]||=[r(`div`,{class:`markdown pf-v6-c-content`},[r(`p`,null,`These are the standard options for sizing icons.`)],-1)]]),default:t(()=>[o(D,{size:`sm`},{default:t(()=>[o(i(b))]),_:1}),u[7]||=l(` `+n(` `)+` `,-1),o(D,{size:`md`},{default:t(()=>[o(i(b))]),_:1}),u[8]||=l(` `+n(` `)+` `,-1),o(D,{size:`lg`},{default:t(()=>[o(i(b))]),_:1}),u[9]||=l(` `+n(` `)+` `,-1),o(D,{size:`xl`},{default:t(()=>[o(i(b))]),_:1}),u[10]||=l(` `+n(` `)+` `,-1),o(D,{size:`2xl`},{default:t(()=>[o(i(b))]),_:1}),u[11]||=l(` `+n(` `)+` `,-1),o(D,{size:`3xl`},{default:t(()=>[o(i(b))]),_:1})]),_:1}),o(O,{title:`Body sizes`,source:`<pf-icon size="bodySm">
  <CirclePlusIcon />
</pf-icon>
{{ ' ' }}
<pf-icon size="bodyDefault">
  <CirclePlusIcon />
</pf-icon>
{{ ' ' }}
<pf-icon size="bodyLg">
  <CirclePlusIcon />
</pf-icon>`},{intro:t(()=>[...u[12]||=[r(`div`,{class:`markdown pf-v6-c-content`},[r(`p`,null,`These size options are meant to make icons match the size of body text.`)],-1)]]),default:t(()=>[o(D,{size:`bodySm`},{default:t(()=>[o(i(b))]),_:1}),u[13]||=l(` `+n(` `)+` `,-1),o(D,{size:`bodyDefault`},{default:t(()=>[o(i(b))]),_:1}),u[14]||=l(` `+n(` `)+` `,-1),o(D,{size:`bodyLg`},{default:t(()=>[o(i(b))]),_:1})]),_:1}),o(O,{title:`Heading sizes`,source:`<pf-icon size="headingSm">
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
</pf-icon>`},{intro:t(()=>[...u[15]||=[r(`div`,{class:`markdown pf-v6-c-content`},[r(`p`,null,`These size options are meant to make icons match the size of heading text.`)],-1)]]),default:t(()=>[o(D,{size:`headingSm`},{default:t(()=>[o(i(b))]),_:1}),u[16]||=l(` `+n(` `)+` `,-1),o(D,{size:`headingMd`},{default:t(()=>[o(i(b))]),_:1}),u[17]||=l(` `+n(` `)+` `,-1),o(D,{size:`headingLg`},{default:t(()=>[o(i(b))]),_:1}),u[18]||=l(` `+n(` `)+` `,-1),o(D,{size:`headingXl`},{default:t(()=>[o(i(b))]),_:1}),u[19]||=l(` `+n(` `)+` `,-1),o(D,{size:`heading_2xl`},{default:t(()=>[o(i(b))]),_:1}),u[20]||=l(` `+n(` `)+` `,-1),o(D,{size:`heading_3xl`},{default:t(()=>[o(i(b))]),_:1})]),_:1}),o(O,{title:`Status colors`,source:`<pf-icon status="danger">
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
</pf-icon>`},{intro:t(()=>[...u[21]||=[r(`div`,{class:`markdown pf-v6-c-content`},[r(`p`,null,`The following example demonstrates the various status variants of an icon. Keep in mind that these icons are displayed out of a typical context, and that you should not rely on color alone to convey status to users.`)],-1)]]),default:t(()=>[o(D,{status:`danger`},{default:t(()=>[o(i(f))]),_:1}),u[22]||=l(` `+n(` `)+` `,-1),o(D,{status:`warning`},{default:t(()=>[o(i(g))]),_:1}),u[23]||=l(` `+n(` `)+` `,-1),o(D,{status:`success`},{default:t(()=>[o(i(h))]),_:1}),u[24]||=l(` `+n(` `)+` `,-1),o(D,{status:`info`},{default:t(()=>[o(i(d))]),_:1}),u[25]||=l(` `+n(` `)+` `,-1),o(D,{status:`custom`},{default:t(()=>[o(i(y))]),_:1})]),_:1}),o(O,{title:`Sizing an icon within the icon container`,source:`<pf-icon size="3xl" icon-size="lg">
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
</pf-icon>`},{intro:t(()=>[...u[26]||=[r(`div`,{class:`markdown pf-v6-c-content`},[r(`p`,null,[l(`Providing both `),r(`code`,null,`size`),l(` and `),r(`code`,null,`icon-size`),l(` properties allows the icon container to maintain a consistent size, even if the icon changes in size.`)])],-1)]]),default:t(()=>[o(D,{size:`3xl`,"icon-size":`lg`},{default:t(()=>[o(i(b))]),_:1}),u[27]||=l(` `+n(` `)+` `,-1),o(D,{size:`3xl`,"icon-size":`xl`},{default:t(()=>[o(i(b))]),_:1}),u[28]||=l(` `+n(` `)+` `,-1),o(D,{size:`3xl`,"icon-size":`2xl`},{default:t(()=>[o(i(b))]),_:1}),u[29]||=l(` `+n(` `)+` `,-1),o(D,{size:`3xl`},{default:t(()=>[o(i(b))]),_:1})]),_:1}),o(O,{title:`Inline`,source:`<pf-content>
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
</pf-content>`},{default:t(()=>[o(k,null,{default:t(()=>[r(`h1`,null,[u[30]||=l(` Heading `,-1),o(D,{inline:``},{default:t(()=>[o(i(b))]),_:1})]),u[36]||=r(`p`,null,`Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed hendrerit nisi in cursus maximus.`,-1),r(`h2`,null,[u[31]||=l(` Second level `,-1),o(D,{inline:``},{default:t(()=>[o(i(b))]),_:1})]),r(`p`,null,[o(D,{inline:``},{default:t(()=>[o(i(b))]),_:1}),u[33]||=l(` Curabitur accumsan turpis pharetra `,-1),r(`strong`,null,[u[32]||=l(` augue tincidunt `,-1),o(D,{inline:``},{default:t(()=>[o(i(b))]),_:1})]),u[34]||=l(` blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. `,-1)]),r(`small`,null,[u[35]||=l(` Sometimes you need small text `,-1),o(D,{inline:``},{default:t(()=>[o(i(b))]),_:1})]),u[37]||=l(` Inline with size specified: `,-1),o(D,{size:`sm`,inline:``},{default:t(()=>[o(i(b))]),_:1}),u[38]||=l(` small, `,-1),o(D,{size:`md`,inline:``},{default:t(()=>[o(i(b))]),_:1}),u[39]||=l(` medium, `,-1),o(D,{size:`lg`,inline:``},{default:t(()=>[o(i(b))]),_:1}),u[40]||=l(` large, `,-1),o(D,{size:`xl`,inline:``},{default:t(()=>[o(i(b))]),_:1}),u[41]||=l(` extra large `,-1)]),_:1})]),_:1}),o(O,{title:`In progress`,source:`<div style="margin-bottom: 12px">
  <pf-checkbox v-model="inProgress" label="Toggle in progress state" aria-label="Set icon progress state" />
</div>

<pf-icon :in-progress="inProgress">
  <CircleCheckIcon />
</pf-icon>`},{intro:t(()=>[...u[42]||=[r(`div`,{class:`markdown pf-v6-c-content`},[r(`p`,null,[l(`Passing the `),r(`code`,null,`in-progress`),l(` property will swap the icon to a progress icon. By default this progress icon will be a `),r(`code`,null,`pf-spinner`),l(` but may be customized or overriden using the `),r(`code`,null,`progress-icon`),l(` slot.`)])],-1)]]),default:t(()=>[r(`div`,x,[o(A,{modelValue:C.value,"onUpdate:modelValue":u[0]||=e=>C.value=e,label:`Toggle in progress state`,"aria-label":`Set icon progress state`},null,8,[`modelValue`])]),o(D,{"in-progress":C.value},{default:t(()=>[o(i(h))]),_:1},8,[`in-progress`])]),_:1}),o(O,{title:`Custom in progress icon`,source:`<div style="margin-bottom: 12px">
  <pf-checkbox v-model="inProgress2" label="Toggle in progress state" aria-label="Set icon progress state" />
</div>

<pf-icon :in-progress="inProgress2">
  <CircleCheckIcon />

  <template #progress-icon>
    <pf-spinner diameter="2em" aria-label="Loading..." />
  </template>
</pf-icon>`},{default:t(()=>[r(`div`,S,[o(A,{modelValue:w.value,"onUpdate:modelValue":u[1]||=e=>w.value=e,label:`Toggle in progress state`,"aria-label":`Set icon progress state`},null,8,[`modelValue`])]),o(D,{"in-progress":w.value},{"progress-icon":t(()=>[o(j,{diameter:`2em`,"aria-label":`Loading...`})]),default:t(()=>[o(i(h))]),_:1},8,[`in-progress`])]),_:1})]),_:1})}}});export{C as default};