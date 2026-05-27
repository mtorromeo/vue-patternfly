import{D as e,E as t,I as n,N as r,O as i,S as a,V as o,d as s,j as c,n as l,x as u,z as d}from"./index-mFbvqZfx.js";var f={style:{height:`80px`}},p=l(i({__name:`MenuToggle.story`,setup(i){return(i,l)=>{let p=r(`component-info`),m=r(`pf-menu-toggle`),h=r(`story-canvas`),g=r(`pf-badge`),_=r(`pf-menu-toggle-checkbox`),v=r(`pf-menu-toggle-action`),y=r(`pf-avatar`),b=r(`doc-page`);return c(),a(b,{name:`Components/MenuToggle.story.vue`,title:`Menu toggle`},{description:n(()=>[...l[0]||=[t(`The `,-1),u(`b`,null,`menu toggle`,-1),t(` component pairs with the menu OR the panel component to create more customizable dropdown and select implementations. Using a menu toggle with a menu enables you to create custom component configurations not supported by the standard dropdown or select components.`,-1)]]),apidocs:n(()=>[e(p,{name:`PfMenuToggle`,doc:{name:`PfMenuToggle`,exportName:`PfMenuToggle`,displayName:`MenuToggle`,description:``,tags:{},expose:[{name:`el`},{name:`focus`}],props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`disabled`,description:`Flag indicating the toggle is disabled`,required:!1,type:{name:`boolean`}},{name:`fullHeight`,description:`Flag indicating the toggle is full height`,required:!1,type:{name:`boolean`}},{name:`fullWidth`,description:`Flag indicating the toggle takes up the full width of its parent`,required:!1,type:{name:`boolean`}},{name:`placeholder`,description:`Flag indicating the toggle contains placeholder text`,required:!1,type:{name:`boolean`}},{name:`settings`,description:`Flag indicating whether the toggle is a settings toggle. This will override the icon property`,required:!1,type:{name:`boolean`}},{name:`variant`,description:`Variant styles of the menu toggle`,required:!1,type:{name:`union`,elements:[{name:`"default"`},{name:`"plain"`},{name:`"primary"`},{name:`"plainText"`},{name:`"secondary"`},{name:`"typeahead"`}]}},{name:`status`,description:`Status styles of the menu toggle`,required:!1,type:{name:`union`,elements:[{name:`"success"`},{name:`"warning"`},{name:`"danger"`}]}},{name:`small`,description:`Smaller size of the menu toggle`,required:!1,type:{name:`boolean`}},{name:`circle`,description:`Flag indicating the toggle has circular styling. Can only be applied to plain toggles.`,required:!1,type:{name:`boolean`}},{name:`docked`,description:`Flag indicating the menu toggle is a docked variant. For use in docked navigation.`,required:!1,type:{name:`boolean`}},{name:`textExpanded`,description:`Flag indicating the docked toggle should display text. Only applies when isDocked is true.`,required:!1,type:{name:`boolean`}}],events:[],slots:[{name:`status-icon`},{name:`icon`},{name:`default`},{name:`split-buttons`},{name:`badge`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/MenuToggle/MenuToggle.vue`]}}),e(p,{name:`PfMenuToggleAction`,doc:{name:`PfMenuToggleAction`,exportName:`PfMenuToggleAction`,displayName:`MenuToggleAction`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/MenuToggle/MenuToggleAction.vue`]}}),e(p,{name:`PfMenuToggleCheckbox`,doc:{name:`PfMenuToggleCheckbox`,exportName:`PfMenuToggleCheckbox`,displayName:`MenuToggleCheckbox`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`checked`,description:`Flag to show if the checkbox is checked. Use null to set the checkbox indeterminate state`,required:!1,type:{name:`union`,elements:[{name:`boolean`},{name:`null`}]}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/MenuToggle/MenuToggleCheckbox.vue`]}})]),default:n(()=>[l[73]||=u(`div`,{class:`markdown pf-v6-c-content`},[u(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),e(h,{title:`Collapsed`,source:`<pf-menu-toggle>Collapsed</pf-menu-toggle>`},{default:n(()=>[e(m,null,{default:n(()=>[...l[1]||=[t(`Collapsed`,-1)]]),_:1})]),_:1}),e(h,{title:`Expanded`,source:`<pf-menu-toggle expanded>Expanded</pf-menu-toggle>`},{default:n(()=>[e(m,{expanded:``},{default:n(()=>[...l[2]||=[t(`Expanded`,-1)]]),_:1})]),_:1}),e(h,{title:`Disabled`,source:`<pf-menu-toggle disabled>Disabled</pf-menu-toggle>`},{default:n(()=>[e(m,{disabled:``},{default:n(()=>[...l[3]||=[t(`Disabled`,-1)]]),_:1})]),_:1}),e(h,{title:`Count`,source:`<pf-menu-toggle>
  Count
  <template #badge>
    <pf-badge>4 selected</pf-badge>
  </template>
</pf-menu-toggle>`},{default:n(()=>[e(m,null,{badge:n(()=>[e(g,null,{default:n(()=>[...l[4]||=[t(`4 selected`,-1)]]),_:1})]),default:n(()=>[l[5]||=t(` Count `,-1)]),_:1})]),_:1}),e(h,{title:`Primary`,source:`<pf-menu-toggle variant="primary">Collapsed</pf-menu-toggle>
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
<pf-menu-toggle variant="primary" disabled>Disabled</pf-menu-toggle>`},{default:n(()=>[e(m,{variant:`primary`},{default:n(()=>[...l[6]||=[t(`Collapsed`,-1)]]),_:1}),l[11]||=t(` `+o(` `)+` `,-1),e(m,{variant:`primary`},{icon:n(()=>[e(d(s))]),default:n(()=>[l[7]||=t(` Icon `,-1)]),_:1}),l[12]||=t(` `+o(` `)+` `,-1),e(m,{variant:`primary`,settings:``},{default:n(()=>[...l[8]||=[t(` Settings `,-1)]]),_:1}),l[13]||=t(` `+o(` `)+` `,-1),e(m,{variant:`primary`,expanded:``},{default:n(()=>[...l[9]||=[t(`Expanded`,-1)]]),_:1}),l[14]||=t(` `+o(` `)+` `,-1),e(m,{variant:`primary`,disabled:``},{default:n(()=>[...l[10]||=[t(`Disabled`,-1)]]),_:1})]),_:1}),e(h,{title:`Secondary`,source:`<pf-menu-toggle variant="secondary">Collapsed</pf-menu-toggle>
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
<pf-menu-toggle variant="secondary" disabled>Disabled</pf-menu-toggle>`},{default:n(()=>[e(m,{variant:`secondary`},{default:n(()=>[...l[15]||=[t(`Collapsed`,-1)]]),_:1}),l[20]||=t(` `+o(` `)+` `,-1),e(m,{variant:`secondary`},{icon:n(()=>[e(d(s))]),default:n(()=>[l[16]||=t(` Icon `,-1)]),_:1}),l[21]||=t(` `+o(` `)+` `,-1),e(m,{variant:`secondary`,settings:``},{default:n(()=>[...l[17]||=[t(` Settings `,-1)]]),_:1}),l[22]||=t(` `+o(` `)+` `,-1),e(m,{variant:`secondary`,expanded:``},{default:n(()=>[...l[18]||=[t(`Expanded`,-1)]]),_:1}),l[23]||=t(` `+o(` `)+` `,-1),e(m,{variant:`secondary`,disabled:``},{default:n(()=>[...l[19]||=[t(`Disabled`,-1)]]),_:1})]),_:1}),e(h,{title:`Plain`,source:`<pf-menu-toggle variant="plain" />
{{ ' ' }}
<pf-menu-toggle variant="plain" expanded />
{{ ' ' }}
<pf-menu-toggle variant="plain" disabled />`},{default:n(()=>[e(m,{variant:`plain`}),l[24]||=t(` `+o(` `)+` `,-1),e(m,{variant:`plain`,expanded:``}),l[25]||=t(` `+o(` `)+` `,-1),e(m,{variant:`plain`,disabled:``})]),_:1}),e(h,{title:`Plain with text`,source:`<pf-menu-toggle variant="plainText">Custom text</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="plainText" expanded>Custom text (expanded)</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="plainText" disabled>Disabled</pf-menu-toggle>`},{default:n(()=>[e(m,{variant:`plainText`},{default:n(()=>[...l[26]||=[t(`Custom text`,-1)]]),_:1}),l[29]||=t(` `+o(` `)+` `,-1),e(m,{variant:`plainText`,expanded:``},{default:n(()=>[...l[27]||=[t(`Custom text (expanded)`,-1)]]),_:1}),l[30]||=t(` `+o(` `)+` `,-1),e(m,{variant:`plainText`,disabled:``},{default:n(()=>[...l[28]||=[t(`Disabled`,-1)]]),_:1})]),_:1}),e(h,{title:`Split button (checkbox)`,source:`<pf-menu-toggle>
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
</pf-menu-toggle>`},{default:n(()=>[e(m,null,{"split-buttons":n(()=>[e(_)]),_:1}),l[31]||=t(` `+o(` `)+` `,-1),e(m,{expanded:``},{"split-buttons":n(()=>[e(_)]),_:1}),l[32]||=t(` `+o(` `)+` `,-1),e(m,{disabled:``},{"split-buttons":n(()=>[e(_,{disabled:``})]),_:1})]),_:1}),e(h,{title:`Split button (checkbox indeterminate with toggle text)`,source:`<pf-menu-toggle>
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
</pf-menu-toggle>`},{default:n(()=>[e(m,null,{"split-buttons":n(()=>[e(_,{checked:null},{default:n(()=>[...l[33]||=[t(`10 selected`,-1)]]),_:1})]),_:1}),l[36]||=t(` `+o(` `)+` `,-1),e(m,{expanded:``},{"split-buttons":n(()=>[e(_,{checked:null},{default:n(()=>[...l[34]||=[t(`10 selected`,-1)]]),_:1})]),_:1}),l[37]||=t(` `+o(` `)+` `,-1),e(m,{disabled:``},{"split-buttons":n(()=>[e(_,{checked:null,disabled:``},{default:n(()=>[...l[35]||=[t(`10 selected`,-1)]]),_:1})]),_:1})]),_:1}),e(h,{title:`Split button (checkbox, primary)`,source:`<pf-menu-toggle variant="primary">
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
</pf-menu-toggle>`},{default:n(()=>[e(m,{variant:`primary`},{"split-buttons":n(()=>[e(_,null,{default:n(()=>[...l[38]||=[t(`10 selected`,-1)]]),_:1})]),_:1}),l[41]||=t(` `+o(` `)+` `,-1),e(m,{variant:`primary`,expanded:``},{"split-buttons":n(()=>[e(_,null,{default:n(()=>[...l[39]||=[t(`10 selected`,-1)]]),_:1})]),_:1}),l[42]||=t(` `+o(` `)+` `,-1),e(m,{variant:`primary`,disabled:``},{"split-buttons":n(()=>[e(_,null,{default:n(()=>[...l[40]||=[t(`10 selected`,-1)]]),_:1})]),_:1})]),_:1}),e(h,{title:`Split button (checkbox, secondary)`,source:`<pf-menu-toggle variant="secondary">
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
</pf-menu-toggle>`},{default:n(()=>[e(m,{variant:`secondary`},{"split-buttons":n(()=>[e(_,null,{default:n(()=>[...l[43]||=[t(`10 selected`,-1)]]),_:1})]),_:1}),l[46]||=t(` `+o(` `)+` `,-1),e(m,{variant:`secondary`,expanded:``},{"split-buttons":n(()=>[e(_,null,{default:n(()=>[...l[44]||=[t(`10 selected`,-1)]]),_:1})]),_:1}),l[47]||=t(` `+o(` `)+` `,-1),e(m,{variant:`secondary`,disabled:``},{"split-buttons":n(()=>[e(_,{disabled:``},{default:n(()=>[...l[45]||=[t(`10 selected`,-1)]]),_:1})]),_:1})]),_:1}),e(h,{title:`Split button (action)`,source:`<pf-menu-toggle>
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
</pf-menu-toggle>`},{default:n(()=>[e(m,null,{"split-buttons":n(()=>[e(v,null,{default:n(()=>[...l[48]||=[t(`Action`,-1)]]),_:1})]),_:1}),l[51]||=t(` `+o(` `)+` `,-1),e(m,{expanded:``},{"split-buttons":n(()=>[e(v,null,{default:n(()=>[...l[49]||=[t(`Action`,-1)]]),_:1})]),_:1}),l[52]||=t(` `+o(` `)+` `,-1),e(m,{disabled:``},{"split-buttons":n(()=>[e(v,{disabled:``},{default:n(()=>[...l[50]||=[t(`Action`,-1)]]),_:1})]),_:1})]),_:1}),e(h,{title:`Split button (action, primary)`,source:`<pf-menu-toggle variant="primary">
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
</pf-menu-toggle>`},{default:n(()=>[e(m,{variant:`primary`},{"split-buttons":n(()=>[e(v,null,{default:n(()=>[...l[53]||=[t(`Action`,-1)]]),_:1})]),_:1}),l[56]||=t(` `+o(` `)+` `,-1),e(m,{variant:`primary`,expanded:``},{"split-buttons":n(()=>[e(v,null,{default:n(()=>[...l[54]||=[t(`Action`,-1)]]),_:1})]),_:1}),l[57]||=t(` `+o(` `)+` `,-1),e(m,{variant:`primary`,disabled:``},{"split-buttons":n(()=>[e(v,{disabled:``},{default:n(()=>[...l[55]||=[t(`Action`,-1)]]),_:1})]),_:1})]),_:1}),e(h,{title:`Split button (action, secondary)`,source:`<pf-menu-toggle variant="secondary">
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
</pf-menu-toggle>`},{default:n(()=>[e(m,{variant:`secondary`},{"split-buttons":n(()=>[e(v,null,{default:n(()=>[...l[58]||=[t(`Action`,-1)]]),_:1})]),_:1}),l[61]||=t(` `+o(` `)+` `,-1),e(m,{variant:`secondary`,expanded:``},{"split-buttons":n(()=>[e(v,null,{default:n(()=>[...l[59]||=[t(`Action`,-1)]]),_:1})]),_:1}),l[62]||=t(` `+o(` `)+` `,-1),e(m,{variant:`secondary`,disabled:``},{"split-buttons":n(()=>[e(v,{disabled:``},{default:n(()=>[...l[60]||=[t(`Action`,-1)]]),_:1})]),_:1})]),_:1}),e(h,{title:`With icon/image and text`,source:`<pf-menu-toggle variant="secondary">
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
</pf-menu-toggle>`},{default:n(()=>[e(m,{variant:`secondary`},{icon:n(()=>[e(d(s))]),default:n(()=>[l[63]||=t(` Icon `,-1)]),_:1}),l[65]||=t(` `+o(` `)+` `,-1),e(m,{variant:`secondary`,disabled:``},{icon:n(()=>[e(d(s))]),default:n(()=>[l[64]||=t(` Icon `,-1)]),_:1})]),_:1}),e(h,{title:`With avatar and text`,source:`<pf-menu-toggle>
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
</pf-menu-toggle>`},{default:n(()=>[e(m,null,{icon:n(()=>[e(y,{src:`avatar.svg`,alt:`avatar`})]),default:n(()=>[l[66]||=t(` Ned Username `,-1)]),_:1}),l[69]||=t(` `+o(` `)+` `,-1),e(m,{expanded:``},{icon:n(()=>[e(y,{src:`avatar.svg`,alt:`avatar`})]),default:n(()=>[l[67]||=t(` Ned Username `,-1)]),_:1}),l[70]||=t(` `+o(` `)+` `,-1),e(m,{disabled:``},{icon:n(()=>[e(y,{src:`avatar.svg`,alt:`avatar`})]),default:n(()=>[l[68]||=t(` Ned Username `,-1)]),_:1})]),_:1}),e(h,{title:`Full height`,source:`<div style="height:80px">
  <pf-menu-toggle full-height>Full height</pf-menu-toggle>
</div>`},{default:n(()=>[u(`div`,f,[e(m,{"full-height":``},{default:n(()=>[...l[71]||=[t(`Full height`,-1)]]),_:1})])]),_:1}),e(h,{title:`Full width`,source:`<pf-menu-toggle full-width>Full width</pf-menu-toggle>`},{default:n(()=>[e(m,{"full-width":``},{default:n(()=>[...l[72]||=[t(`Full width`,-1)]]),_:1})]),_:1})]),_:1})}}}),[[`__scopeId`,`data-v-51c68489`]]);export{p as default};