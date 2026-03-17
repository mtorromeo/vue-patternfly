import{H as e,N as t,Tt as n,c as r,h as i,it as a,k as o,m as s,p as c,s as l}from"./runtime-core.esm-bundler-BYNplpMz.js";import{d as u,n as d}from"./index-DA-Rfo6V.js";var f={style:{height:`80px`}},p=d(i({__name:`MenuToggle.story`,setup(i){return(i,d)=>{let p=t(`component-info`),m=t(`pf-menu-toggle`),h=t(`story-canvas`),g=t(`pf-badge`),_=t(`pf-menu-toggle-checkbox`),v=t(`pf-menu-toggle-action`),y=t(`pf-avatar`),b=t(`doc-page`);return o(),r(b,{name:`Components/MenuToggle.story.vue`,title:`Menu toggle`},{description:e(()=>[...d[0]||=[c(`The `,-1),l(`b`,null,`menu toggle`,-1),c(` component pairs with the menu OR the panel component to create more customizable dropdown and select implementations. Using a menu toggle with a menu enables you to create custom component configurations not supported by the standard dropdown or select components.`,-1)]]),apidocs:e(()=>[s(p,{name:`PfMenuToggle`,doc:{name:`PfMenuToggle`,exportName:`PfMenuToggle`,displayName:`MenuToggle`,description:``,tags:{},expose:[{name:`el`},{name:`focus`}],props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`disabled`,description:`Flag indicating the toggle is disabled`,required:!1,type:{name:`boolean`}},{name:`fullHeight`,description:`Flag indicating the toggle is full height`,required:!1,type:{name:`boolean`}},{name:`fullWidth`,description:`Flag indicating the toggle takes up the full width of its parent`,required:!1,type:{name:`boolean`}},{name:`placeholder`,description:`Flag indicating the toggle contains placeholder text`,required:!1,type:{name:`boolean`}},{name:`settings`,description:`Flag indicating whether the toggle is a settings toggle. This will override the icon property`,required:!1,type:{name:`boolean`}},{name:`variant`,description:`Variant styles of the menu toggle`,required:!1,type:{name:`union`,elements:[{name:`"default"`},{name:`"plain"`},{name:`"primary"`},{name:`"plainText"`},{name:`"secondary"`},{name:`"typeahead"`}]}},{name:`status`,description:`Status styles of the menu toggle`,required:!1,type:{name:`union`,elements:[{name:`"success"`},{name:`"warning"`},{name:`"danger"`}]}},{name:`small`,description:`Smaller size of the menu toggle`,required:!1,type:{name:`boolean`}}],events:[],slots:[{name:`status-icon`},{name:`icon`},{name:`default`},{name:`split-buttons`},{name:`badge`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/MenuToggle/MenuToggle.vue`]}}),s(p,{name:`PfMenuToggleAction`,doc:{name:`PfMenuToggleAction`,exportName:`PfMenuToggleAction`,displayName:`MenuToggleAction`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/MenuToggle/MenuToggleAction.vue`]}}),s(p,{name:`PfMenuToggleCheckbox`,doc:{name:`PfMenuToggleCheckbox`,exportName:`PfMenuToggleCheckbox`,displayName:`MenuToggleCheckbox`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`checked`,description:`Flag to show if the checkbox is checked. Use null to set the checkbox indeterminate state`,required:!1,type:{name:`union`,elements:[{name:`boolean`},{name:`null`}]}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/MenuToggle/MenuToggleCheckbox.vue`]}})]),default:e(()=>[d[73]||=l(`div`,{class:`markdown pf-v6-c-content`},[l(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),s(h,{title:`Collapsed`,source:`<pf-menu-toggle>Collapsed</pf-menu-toggle>`},{default:e(()=>[s(m,null,{default:e(()=>[...d[1]||=[c(`Collapsed`,-1)]]),_:1})]),_:1}),s(h,{title:`Expanded`,source:`<pf-menu-toggle expanded>Expanded</pf-menu-toggle>`},{default:e(()=>[s(m,{expanded:``},{default:e(()=>[...d[2]||=[c(`Expanded`,-1)]]),_:1})]),_:1}),s(h,{title:`Disabled`,source:`<pf-menu-toggle disabled>Disabled</pf-menu-toggle>`},{default:e(()=>[s(m,{disabled:``},{default:e(()=>[...d[3]||=[c(`Disabled`,-1)]]),_:1})]),_:1}),s(h,{title:`Count`,source:`<pf-menu-toggle>
  Count
  <template #badge>
    <pf-badge>4 selected</pf-badge>
  </template>
</pf-menu-toggle>`},{default:e(()=>[s(m,null,{badge:e(()=>[s(g,null,{default:e(()=>[...d[4]||=[c(`4 selected`,-1)]]),_:1})]),default:e(()=>[d[5]||=c(` Count `,-1)]),_:1})]),_:1}),s(h,{title:`Primary`,source:`<pf-menu-toggle variant="primary">Collapsed</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="primary">
  <template #icon>
    <gear-icon />
  </template>
  Icon
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="primary" settings>
  Settings
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="primary" expanded>Expanded</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="primary" disabled>Disabled</pf-menu-toggle>`},{default:e(()=>[s(m,{variant:`primary`},{default:e(()=>[...d[6]||=[c(`Collapsed`,-1)]]),_:1}),d[11]||=c(` `+n(` `)+` `,-1),s(m,{variant:`primary`},{icon:e(()=>[s(a(u))]),default:e(()=>[d[7]||=c(` Icon `,-1)]),_:1}),d[12]||=c(` `+n(` `)+` `,-1),s(m,{variant:`primary`,settings:``},{default:e(()=>[...d[8]||=[c(` Settings `,-1)]]),_:1}),d[13]||=c(` `+n(` `)+` `,-1),s(m,{variant:`primary`,expanded:``},{default:e(()=>[...d[9]||=[c(`Expanded`,-1)]]),_:1}),d[14]||=c(` `+n(` `)+` `,-1),s(m,{variant:`primary`,disabled:``},{default:e(()=>[...d[10]||=[c(`Disabled`,-1)]]),_:1})]),_:1}),s(h,{title:`Secondary`,source:`<pf-menu-toggle variant="secondary">Collapsed</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="secondary">
  <template #icon>
    <gear-icon />
  </template>
  Icon
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="secondary" settings>
  Settings
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="secondary" expanded>Expanded</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="secondary" disabled>Disabled</pf-menu-toggle>`},{default:e(()=>[s(m,{variant:`secondary`},{default:e(()=>[...d[15]||=[c(`Collapsed`,-1)]]),_:1}),d[20]||=c(` `+n(` `)+` `,-1),s(m,{variant:`secondary`},{icon:e(()=>[s(a(u))]),default:e(()=>[d[16]||=c(` Icon `,-1)]),_:1}),d[21]||=c(` `+n(` `)+` `,-1),s(m,{variant:`secondary`,settings:``},{default:e(()=>[...d[17]||=[c(` Settings `,-1)]]),_:1}),d[22]||=c(` `+n(` `)+` `,-1),s(m,{variant:`secondary`,expanded:``},{default:e(()=>[...d[18]||=[c(`Expanded`,-1)]]),_:1}),d[23]||=c(` `+n(` `)+` `,-1),s(m,{variant:`secondary`,disabled:``},{default:e(()=>[...d[19]||=[c(`Disabled`,-1)]]),_:1})]),_:1}),s(h,{title:`Plain`,source:`<pf-menu-toggle variant="plain" />
{{ ' ' }}
<pf-menu-toggle variant="plain" expanded />
{{ ' ' }}
<pf-menu-toggle variant="plain" disabled />`},{default:e(()=>[s(m,{variant:`plain`}),d[24]||=c(` `+n(` `)+` `,-1),s(m,{variant:`plain`,expanded:``}),d[25]||=c(` `+n(` `)+` `,-1),s(m,{variant:`plain`,disabled:``})]),_:1}),s(h,{title:`Plain with text`,source:`<pf-menu-toggle variant="plainText">Custom text</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="plainText" expanded>Custom text (expanded)</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="plainText" disabled>Disabled</pf-menu-toggle>`},{default:e(()=>[s(m,{variant:`plainText`},{default:e(()=>[...d[26]||=[c(`Custom text`,-1)]]),_:1}),d[29]||=c(` `+n(` `)+` `,-1),s(m,{variant:`plainText`,expanded:``},{default:e(()=>[...d[27]||=[c(`Custom text (expanded)`,-1)]]),_:1}),d[30]||=c(` `+n(` `)+` `,-1),s(m,{variant:`plainText`,disabled:``},{default:e(()=>[...d[28]||=[c(`Disabled`,-1)]]),_:1})]),_:1}),s(h,{title:`Split button (checkbox)`,source:`<pf-menu-toggle>
  <template #split-buttons>
    <pf-menu-toggle-checkbox />
  </template>
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle expanded>
  <template #split-buttons>
    <pf-menu-toggle-checkbox />
  </template>
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle disabled>
  <template #split-buttons>
    <pf-menu-toggle-checkbox disabled />
  </template>
</pf-menu-toggle>`},{default:e(()=>[s(m,null,{"split-buttons":e(()=>[s(_)]),_:1}),d[31]||=c(` `+n(` `)+` `,-1),s(m,{expanded:``},{"split-buttons":e(()=>[s(_)]),_:1}),d[32]||=c(` `+n(` `)+` `,-1),s(m,{disabled:``},{"split-buttons":e(()=>[s(_,{disabled:``})]),_:1})]),_:1}),s(h,{title:`Split button (checkbox indeterminate with toggle text)`,source:`<pf-menu-toggle>
  <template #split-buttons>
    <pf-menu-toggle-checkbox :checked="null">10 selected</pf-menu-toggle-checkbox>
  </template>
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle expanded>
  <template #split-buttons>
    <pf-menu-toggle-checkbox :checked="null">10 selected</pf-menu-toggle-checkbox>
  </template>
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle disabled>
  <template #split-buttons>
    <pf-menu-toggle-checkbox :checked="null" disabled>10 selected</pf-menu-toggle-checkbox>
  </template>
</pf-menu-toggle>`},{default:e(()=>[s(m,null,{"split-buttons":e(()=>[s(_,{checked:null},{default:e(()=>[...d[33]||=[c(`10 selected`,-1)]]),_:1})]),_:1}),d[36]||=c(` `+n(` `)+` `,-1),s(m,{expanded:``},{"split-buttons":e(()=>[s(_,{checked:null},{default:e(()=>[...d[34]||=[c(`10 selected`,-1)]]),_:1})]),_:1}),d[37]||=c(` `+n(` `)+` `,-1),s(m,{disabled:``},{"split-buttons":e(()=>[s(_,{checked:null,disabled:``},{default:e(()=>[...d[35]||=[c(`10 selected`,-1)]]),_:1})]),_:1})]),_:1}),s(h,{title:`Split button (checkbox, primary)`,source:`<pf-menu-toggle variant="primary">
  <template #split-buttons>
    <pf-menu-toggle-checkbox>10 selected</pf-menu-toggle-checkbox>
  </template>
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="primary" expanded>
  <template #split-buttons>
    <pf-menu-toggle-checkbox>10 selected</pf-menu-toggle-checkbox>
  </template>
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="primary" disabled>
  <template #split-buttons>
    <pf-menu-toggle-checkbox>10 selected</pf-menu-toggle-checkbox>
  </template>
</pf-menu-toggle>`},{default:e(()=>[s(m,{variant:`primary`},{"split-buttons":e(()=>[s(_,null,{default:e(()=>[...d[38]||=[c(`10 selected`,-1)]]),_:1})]),_:1}),d[41]||=c(` `+n(` `)+` `,-1),s(m,{variant:`primary`,expanded:``},{"split-buttons":e(()=>[s(_,null,{default:e(()=>[...d[39]||=[c(`10 selected`,-1)]]),_:1})]),_:1}),d[42]||=c(` `+n(` `)+` `,-1),s(m,{variant:`primary`,disabled:``},{"split-buttons":e(()=>[s(_,null,{default:e(()=>[...d[40]||=[c(`10 selected`,-1)]]),_:1})]),_:1})]),_:1}),s(h,{title:`Split button (checkbox, secondary)`,source:`<pf-menu-toggle variant="secondary">
  <template #split-buttons>
    <pf-menu-toggle-checkbox>10 selected</pf-menu-toggle-checkbox>
  </template>
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="secondary" expanded>
  <template #split-buttons>
    <pf-menu-toggle-checkbox>10 selected</pf-menu-toggle-checkbox>
  </template>
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="secondary" disabled>
  <template #split-buttons>
    <pf-menu-toggle-checkbox disabled>10 selected</pf-menu-toggle-checkbox>
  </template>
</pf-menu-toggle>`},{default:e(()=>[s(m,{variant:`secondary`},{"split-buttons":e(()=>[s(_,null,{default:e(()=>[...d[43]||=[c(`10 selected`,-1)]]),_:1})]),_:1}),d[46]||=c(` `+n(` `)+` `,-1),s(m,{variant:`secondary`,expanded:``},{"split-buttons":e(()=>[s(_,null,{default:e(()=>[...d[44]||=[c(`10 selected`,-1)]]),_:1})]),_:1}),d[47]||=c(` `+n(` `)+` `,-1),s(m,{variant:`secondary`,disabled:``},{"split-buttons":e(()=>[s(_,{disabled:``},{default:e(()=>[...d[45]||=[c(`10 selected`,-1)]]),_:1})]),_:1})]),_:1}),s(h,{title:`Split button (action)`,source:`<pf-menu-toggle>
  <template #split-buttons>
    <pf-menu-toggle-action>Action</pf-menu-toggle-action>
  </template>
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle expanded>
  <template #split-buttons>
    <pf-menu-toggle-action>Action</pf-menu-toggle-action>
  </template>
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle disabled>
  <template #split-buttons>
    <pf-menu-toggle-action disabled>Action</pf-menu-toggle-action>
  </template>
</pf-menu-toggle>`},{default:e(()=>[s(m,null,{"split-buttons":e(()=>[s(v,null,{default:e(()=>[...d[48]||=[c(`Action`,-1)]]),_:1})]),_:1}),d[51]||=c(` `+n(` `)+` `,-1),s(m,{expanded:``},{"split-buttons":e(()=>[s(v,null,{default:e(()=>[...d[49]||=[c(`Action`,-1)]]),_:1})]),_:1}),d[52]||=c(` `+n(` `)+` `,-1),s(m,{disabled:``},{"split-buttons":e(()=>[s(v,{disabled:``},{default:e(()=>[...d[50]||=[c(`Action`,-1)]]),_:1})]),_:1})]),_:1}),s(h,{title:`Split button (action, primary)`,source:`<pf-menu-toggle variant="primary">
  <template #split-buttons>
    <pf-menu-toggle-action>Action</pf-menu-toggle-action>
  </template>
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="primary" expanded>
  <template #split-buttons>
    <pf-menu-toggle-action>Action</pf-menu-toggle-action>
  </template>
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="primary" disabled>
  <template #split-buttons>
    <pf-menu-toggle-action disabled>Action</pf-menu-toggle-action>
  </template>
</pf-menu-toggle>`},{default:e(()=>[s(m,{variant:`primary`},{"split-buttons":e(()=>[s(v,null,{default:e(()=>[...d[53]||=[c(`Action`,-1)]]),_:1})]),_:1}),d[56]||=c(` `+n(` `)+` `,-1),s(m,{variant:`primary`,expanded:``},{"split-buttons":e(()=>[s(v,null,{default:e(()=>[...d[54]||=[c(`Action`,-1)]]),_:1})]),_:1}),d[57]||=c(` `+n(` `)+` `,-1),s(m,{variant:`primary`,disabled:``},{"split-buttons":e(()=>[s(v,{disabled:``},{default:e(()=>[...d[55]||=[c(`Action`,-1)]]),_:1})]),_:1})]),_:1}),s(h,{title:`Split button (action, secondary)`,source:`<pf-menu-toggle variant="secondary">
  <template #split-buttons>
    <pf-menu-toggle-action>Action</pf-menu-toggle-action>
  </template>
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="secondary" expanded>
  <template #split-buttons>
    <pf-menu-toggle-action>Action</pf-menu-toggle-action>
  </template>
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="secondary" disabled>
  <template #split-buttons>
    <pf-menu-toggle-action disabled>Action</pf-menu-toggle-action>
  </template>
</pf-menu-toggle>`},{default:e(()=>[s(m,{variant:`secondary`},{"split-buttons":e(()=>[s(v,null,{default:e(()=>[...d[58]||=[c(`Action`,-1)]]),_:1})]),_:1}),d[61]||=c(` `+n(` `)+` `,-1),s(m,{variant:`secondary`,expanded:``},{"split-buttons":e(()=>[s(v,null,{default:e(()=>[...d[59]||=[c(`Action`,-1)]]),_:1})]),_:1}),d[62]||=c(` `+n(` `)+` `,-1),s(m,{variant:`secondary`,disabled:``},{"split-buttons":e(()=>[s(v,{disabled:``},{default:e(()=>[...d[60]||=[c(`Action`,-1)]]),_:1})]),_:1})]),_:1}),s(h,{title:`With icon/image and text`,source:`<pf-menu-toggle variant="secondary">
  <template #icon>
    <gear-icon />
  </template>
  Icon
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="secondary" disabled>
  <template #icon>
    <gear-icon />
  </template>
  Icon
</pf-menu-toggle>`},{default:e(()=>[s(m,{variant:`secondary`},{icon:e(()=>[s(a(u))]),default:e(()=>[d[63]||=c(` Icon `,-1)]),_:1}),d[65]||=c(` `+n(` `)+` `,-1),s(m,{variant:`secondary`,disabled:``},{icon:e(()=>[s(a(u))]),default:e(()=>[d[64]||=c(` Icon `,-1)]),_:1})]),_:1}),s(h,{title:`With avatar and text`,source:`<pf-menu-toggle>
  <template #icon>
    <pf-avatar src="avatar.svg" alt="avatar" />
  </template>
  Ned Username
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle expanded>
  <template #icon>
    <pf-avatar src="avatar.svg" alt="avatar" />
  </template>
  Ned Username
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle disabled>
  <template #icon>
    <pf-avatar src="avatar.svg" alt="avatar" />
  </template>
  Ned Username
</pf-menu-toggle>`},{default:e(()=>[s(m,null,{icon:e(()=>[s(y,{src:`avatar.svg`,alt:`avatar`})]),default:e(()=>[d[66]||=c(` Ned Username `,-1)]),_:1}),d[69]||=c(` `+n(` `)+` `,-1),s(m,{expanded:``},{icon:e(()=>[s(y,{src:`avatar.svg`,alt:`avatar`})]),default:e(()=>[d[67]||=c(` Ned Username `,-1)]),_:1}),d[70]||=c(` `+n(` `)+` `,-1),s(m,{disabled:``},{icon:e(()=>[s(y,{src:`avatar.svg`,alt:`avatar`})]),default:e(()=>[d[68]||=c(` Ned Username `,-1)]),_:1})]),_:1}),s(h,{title:`Full height`,source:`<div style="height:80px">
  <pf-menu-toggle full-height>Full height</pf-menu-toggle>
</div>`},{default:e(()=>[l(`div`,f,[s(m,{"full-height":``},{default:e(()=>[...d[71]||=[c(`Full height`,-1)]]),_:1})])]),_:1}),s(h,{title:`Full width`,source:`<pf-menu-toggle full-width>Full width</pf-menu-toggle>`},{default:e(()=>[s(m,{"full-width":``},{default:e(()=>[...d[72]||=[c(`Full width`,-1)]]),_:1})]),_:1})]),_:1})}}}),[[`__scopeId`,`data-v-0b60c2cc`]]);export{p as default};