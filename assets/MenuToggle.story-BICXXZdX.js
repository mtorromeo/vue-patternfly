import{$ as e,Et as t,N as n,U as r,at as i,c as a,h as o,k as s,l as c,m as l,p as u,s as d}from"./runtime-core.esm-bundler-BHp59X9g.js";import{d as f,n as p}from"./index-BKQOYPID.js";import{t as m}from"./x-icon-CapCoVOq.js";var h={style:{height:`80px`}},g=p(o({__name:`MenuToggle.story`,setup(o){let p=e(``);return(e,o)=>{let g=n(`component-info`),_=n(`pf-menu-toggle`),v=n(`story-canvas`),y=n(`pf-badge`),b=n(`pf-menu-toggle-checkbox`),x=n(`pf-menu-toggle-action`),S=n(`pf-avatar`),C=n(`pf-text-input-group-main`),w=n(`pf-button`),T=n(`pf-text-input-group-utilities`),E=n(`pf-text-input-group`),D=n(`pf-helper-text-item`),O=n(`pf-helper-text`),k=n(`doc-page`);return s(),a(k,{name:`Components/MenuToggle.story.vue`,title:`Menu toggle`},{description:r(()=>[...o[1]||=[u(`The `,-1),d(`b`,null,`menu toggle`,-1),u(` component pairs with the menu OR the panel component to create more customizable dropdown and select implementations. Using a menu toggle with a menu enables you to create custom component configurations not supported by the standard dropdown or select components.`,-1)]]),apidocs:r(()=>[l(g,{name:`PfMenuToggle`,doc:{name:`PfMenuToggle`,exportName:`PfMenuToggle`,displayName:`MenuToggle`,description:``,tags:{},expose:[{name:`el`},{name:`focus`}],props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`disabled`,description:`Flag indicating the toggle is disabled`,required:!1,type:{name:`boolean`}},{name:`fullHeight`,description:`Flag indicating the toggle is full height`,required:!1,type:{name:`boolean`}},{name:`fullWidth`,description:`Flag indicating the toggle takes up the full width of its parent`,required:!1,type:{name:`boolean`}},{name:`inForm`,description:`Flag indicating the toggle is placed inside a form`,required:!1,type:{name:`boolean`}},{name:`placeholder`,description:`Flag indicating the toggle contains placeholder text`,required:!1,type:{name:`boolean`}},{name:`settings`,description:`Flag indicating whether the toggle is a settings toggle. This will override the icon property`,required:!1,type:{name:`boolean`}},{name:`variant`,description:`Variant styles of the menu toggle`,required:!1,type:{name:`union`,elements:[{name:`"default"`},{name:`"plain"`},{name:`"primary"`},{name:`"plainText"`},{name:`"secondary"`},{name:`"typeahead"`}]}},{name:`status`,description:`Status styles of the menu toggle`,required:!1,type:{name:`union`,elements:[{name:`"success"`},{name:`"warning"`},{name:`"danger"`}]}},{name:`small`,description:`Smaller size of the menu toggle`,required:!1,type:{name:`boolean`}},{name:`circle`,description:`Flag indicating the toggle has circular styling. Can only be applied to plain toggles.`,required:!1,type:{name:`boolean`}},{name:`docked`,description:`Flag indicating the menu toggle is a docked variant. For use in docked navigation.`,required:!1,type:{name:`boolean`}},{name:`textExpanded`,description:`Flag indicating the docked toggle should display text. Only applies when isDocked is true.`,required:!1,type:{name:`boolean`}}],events:[],slots:[{name:`status-icon`},{name:`icon`},{name:`default`},{name:`split-buttons`},{name:`badge`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/MenuToggle/MenuToggle.vue`]}}),l(g,{name:`PfMenuToggleAction`,doc:{name:`PfMenuToggleAction`,exportName:`PfMenuToggleAction`,displayName:`MenuToggleAction`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/MenuToggle/MenuToggleAction.vue`]}}),l(g,{name:`PfMenuToggleCheckbox`,doc:{name:`PfMenuToggleCheckbox`,exportName:`PfMenuToggleCheckbox`,displayName:`MenuToggleCheckbox`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`checked`,description:`Flag to show if the checkbox is checked. Use null to set the checkbox indeterminate state`,required:!1,type:{name:`union`,elements:[{name:`boolean`},{name:`null`}]}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/MenuToggle/MenuToggleCheckbox.vue`]}})]),default:r(()=>[o[88]||=d(`div`,{class:`markdown pf-v6-c-content`},[d(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),l(v,{title:`Collapsed`,source:`<pf-menu-toggle>Collapsed</pf-menu-toggle>`},{default:r(()=>[l(_,null,{default:r(()=>[...o[2]||=[u(`Collapsed`,-1)]]),_:1})]),_:1}),l(v,{title:`Expanded`,source:`<pf-menu-toggle expanded>Expanded</pf-menu-toggle>`},{default:r(()=>[l(_,{expanded:``},{default:r(()=>[...o[3]||=[u(`Expanded`,-1)]]),_:1})]),_:1}),l(v,{title:`Disabled`,source:`<pf-menu-toggle disabled>Disabled</pf-menu-toggle>`},{default:r(()=>[l(_,{disabled:``},{default:r(()=>[...o[4]||=[u(`Disabled`,-1)]]),_:1})]),_:1}),l(v,{title:`With a badge`,source:`<pf-menu-toggle>
  Count
  <template #badge>
    <pf-badge>4 selected</pf-badge>
  </template>
</pf-menu-toggle>
<pf-menu-toggle variant="plainText">
  <template #badge>
    <pf-badge>4</pf-badge>
  </template>
</pf-menu-toggle>`},{default:r(()=>[l(_,null,{badge:r(()=>[l(y,null,{default:r(()=>[...o[5]||=[u(`4 selected`,-1)]]),_:1})]),default:r(()=>[o[6]||=u(` Count `,-1)]),_:1}),l(_,{variant:`plainText`},{badge:r(()=>[l(y,null,{default:r(()=>[...o[7]||=[u(`4`,-1)]]),_:1})]),_:1})]),_:1}),l(v,{title:`Settings toggle`,source:`<pf-menu-toggle settings>Settings</pf-menu-toggle>
<pf-menu-toggle settings variant="plain" aria-label="Settings" />`},{default:r(()=>[l(_,{settings:``},{default:r(()=>[...o[8]||=[u(`Settings`,-1)]]),_:1}),l(_,{settings:``,variant:`plain`,"aria-label":`Settings`})]),_:1}),l(v,{title:`Primary`,source:`<pf-menu-toggle variant="primary">Collapsed</pf-menu-toggle>
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
<pf-menu-toggle variant="primary" disabled>Disabled</pf-menu-toggle>`},{default:r(()=>[l(_,{variant:`primary`},{default:r(()=>[...o[9]||=[u(`Collapsed`,-1)]]),_:1}),o[14]||=u(` `+t(` `)+` `,-1),l(_,{variant:`primary`},{icon:r(()=>[l(i(f))]),default:r(()=>[o[10]||=u(` Icon `,-1)]),_:1}),o[15]||=u(` `+t(` `)+` `,-1),l(_,{variant:`primary`,settings:``},{default:r(()=>[...o[11]||=[u(` Settings `,-1)]]),_:1}),o[16]||=u(` `+t(` `)+` `,-1),l(_,{variant:`primary`,expanded:``},{default:r(()=>[...o[12]||=[u(`Expanded`,-1)]]),_:1}),o[17]||=u(` `+t(` `)+` `,-1),l(_,{variant:`primary`,disabled:``},{default:r(()=>[...o[13]||=[u(`Disabled`,-1)]]),_:1})]),_:1}),l(v,{title:`Secondary`,source:`<pf-menu-toggle variant="secondary">Collapsed</pf-menu-toggle>
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
<pf-menu-toggle variant="secondary" disabled>Disabled</pf-menu-toggle>`},{default:r(()=>[l(_,{variant:`secondary`},{default:r(()=>[...o[18]||=[u(`Collapsed`,-1)]]),_:1}),o[23]||=u(` `+t(` `)+` `,-1),l(_,{variant:`secondary`},{icon:r(()=>[l(i(f))]),default:r(()=>[o[19]||=u(` Icon `,-1)]),_:1}),o[24]||=u(` `+t(` `)+` `,-1),l(_,{variant:`secondary`,settings:``},{default:r(()=>[...o[20]||=[u(` Settings `,-1)]]),_:1}),o[25]||=u(` `+t(` `)+` `,-1),l(_,{variant:`secondary`,expanded:``},{default:r(()=>[...o[21]||=[u(`Expanded`,-1)]]),_:1}),o[26]||=u(` `+t(` `)+` `,-1),l(_,{variant:`secondary`,disabled:``},{default:r(()=>[...o[22]||=[u(`Disabled`,-1)]]),_:1})]),_:1}),l(v,{title:`Plain toggle with icon`,source:`<pf-menu-toggle variant="plain" />
{{ ' ' }}
<pf-menu-toggle variant="plain" expanded />
{{ ' ' }}
<pf-menu-toggle variant="plain" disabled />`},{default:r(()=>[l(_,{variant:`plain`}),o[27]||=u(` `+t(` `)+` `,-1),l(_,{variant:`plain`,expanded:``}),o[28]||=u(` `+t(` `)+` `,-1),l(_,{variant:`plain`,disabled:``})]),_:1}),l(v,{title:`Plain circle toggle`,source:`<pf-menu-toggle circle variant="plain" />
{{ ' ' }}
<pf-menu-toggle circle variant="plain" expanded />
{{ ' ' }}
<pf-menu-toggle circle variant="plain" disabled />`},{default:r(()=>[l(_,{circle:``,variant:`plain`}),o[29]||=u(` `+t(` `)+` `,-1),l(_,{circle:``,variant:`plain`,expanded:``}),o[30]||=u(` `+t(` `)+` `,-1),l(_,{circle:``,variant:`plain`,disabled:``})]),_:1}),l(v,{title:`Plain toggle with text label`,source:`<pf-menu-toggle variant="plainText">Custom text</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="plainText" expanded>Custom text (expanded)</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="plainText" disabled>Disabled</pf-menu-toggle>`},{default:r(()=>[l(_,{variant:`plainText`},{default:r(()=>[...o[31]||=[u(`Custom text`,-1)]]),_:1}),o[34]||=u(` `+t(` `)+` `,-1),l(_,{variant:`plainText`,expanded:``},{default:r(()=>[...o[32]||=[u(`Custom text (expanded)`,-1)]]),_:1}),o[35]||=u(` `+t(` `)+` `,-1),l(_,{variant:`plainText`,disabled:``},{default:r(()=>[...o[33]||=[u(`Disabled`,-1)]]),_:1})]),_:1}),l(v,{title:`Split toggle with checkbox`,source:`<pf-menu-toggle>
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
</pf-menu-toggle>`},{default:r(()=>[l(_,null,{"split-buttons":r(()=>[l(b)]),_:1}),o[36]||=u(` `+t(` `)+` `,-1),l(_,{expanded:``},{"split-buttons":r(()=>[l(b)]),_:1}),o[37]||=u(` `+t(` `)+` `,-1),l(_,{disabled:``},{"split-buttons":r(()=>[l(b,{disabled:``})]),_:1})]),_:1}),l(v,{title:`Split toggle (checkbox indeterminate with toggle text)`,source:`<pf-menu-toggle>
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
</pf-menu-toggle>`},{default:r(()=>[l(_,null,{"split-buttons":r(()=>[l(b,{checked:null},{default:r(()=>[...o[38]||=[u(`10 selected`,-1)]]),_:1})]),_:1}),o[41]||=u(` `+t(` `)+` `,-1),l(_,{expanded:``},{"split-buttons":r(()=>[l(b,{checked:null},{default:r(()=>[...o[39]||=[u(`10 selected`,-1)]]),_:1})]),_:1}),o[42]||=u(` `+t(` `)+` `,-1),l(_,{disabled:``},{"split-buttons":r(()=>[l(b,{checked:null,disabled:``},{default:r(()=>[...o[40]||=[u(`10 selected`,-1)]]),_:1})]),_:1})]),_:1}),l(v,{title:`Split toggle (checkbox, primary)`,source:`<pf-menu-toggle variant="primary">
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
</pf-menu-toggle>`},{default:r(()=>[l(_,{variant:`primary`},{"split-buttons":r(()=>[l(b,null,{default:r(()=>[...o[43]||=[u(`10 selected`,-1)]]),_:1})]),_:1}),o[46]||=u(` `+t(` `)+` `,-1),l(_,{variant:`primary`,expanded:``},{"split-buttons":r(()=>[l(b,null,{default:r(()=>[...o[44]||=[u(`10 selected`,-1)]]),_:1})]),_:1}),o[47]||=u(` `+t(` `)+` `,-1),l(_,{variant:`primary`,disabled:``},{"split-buttons":r(()=>[l(b,null,{default:r(()=>[...o[45]||=[u(`10 selected`,-1)]]),_:1})]),_:1})]),_:1}),l(v,{title:`Split toggle (checkbox, secondary)`,source:`<pf-menu-toggle variant="secondary">
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
</pf-menu-toggle>`},{default:r(()=>[l(_,{variant:`secondary`},{"split-buttons":r(()=>[l(b,null,{default:r(()=>[...o[48]||=[u(`10 selected`,-1)]]),_:1})]),_:1}),o[51]||=u(` `+t(` `)+` `,-1),l(_,{variant:`secondary`,expanded:``},{"split-buttons":r(()=>[l(b,null,{default:r(()=>[...o[49]||=[u(`10 selected`,-1)]]),_:1})]),_:1}),o[52]||=u(` `+t(` `)+` `,-1),l(_,{variant:`secondary`,disabled:``},{"split-buttons":r(()=>[l(b,{disabled:``},{default:r(()=>[...o[50]||=[u(`10 selected`,-1)]]),_:1})]),_:1})]),_:1}),l(v,{title:`Split toggle (action)`,source:`<pf-menu-toggle>
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
</pf-menu-toggle>`},{default:r(()=>[l(_,null,{"split-buttons":r(()=>[l(x,null,{default:r(()=>[...o[53]||=[u(`Action`,-1)]]),_:1})]),_:1}),o[56]||=u(` `+t(` `)+` `,-1),l(_,{expanded:``},{"split-buttons":r(()=>[l(x,null,{default:r(()=>[...o[54]||=[u(`Action`,-1)]]),_:1})]),_:1}),o[57]||=u(` `+t(` `)+` `,-1),l(_,{disabled:``},{"split-buttons":r(()=>[l(x,{disabled:``},{default:r(()=>[...o[55]||=[u(`Action`,-1)]]),_:1})]),_:1})]),_:1}),l(v,{title:`Split toggle (action, primary)`,source:`<pf-menu-toggle variant="primary">
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
</pf-menu-toggle>`},{default:r(()=>[l(_,{variant:`primary`},{"split-buttons":r(()=>[l(x,null,{default:r(()=>[...o[58]||=[u(`Action`,-1)]]),_:1})]),_:1}),o[61]||=u(` `+t(` `)+` `,-1),l(_,{variant:`primary`,expanded:``},{"split-buttons":r(()=>[l(x,null,{default:r(()=>[...o[59]||=[u(`Action`,-1)]]),_:1})]),_:1}),o[62]||=u(` `+t(` `)+` `,-1),l(_,{variant:`primary`,disabled:``},{"split-buttons":r(()=>[l(x,{disabled:``},{default:r(()=>[...o[60]||=[u(`Action`,-1)]]),_:1})]),_:1})]),_:1}),l(v,{title:`Split toggle (action, secondary)`,source:`<pf-menu-toggle variant="secondary">
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
</pf-menu-toggle>`},{default:r(()=>[l(_,{variant:`secondary`},{"split-buttons":r(()=>[l(x,null,{default:r(()=>[...o[63]||=[u(`Action`,-1)]]),_:1})]),_:1}),o[66]||=u(` `+t(` `)+` `,-1),l(_,{variant:`secondary`,expanded:``},{"split-buttons":r(()=>[l(x,null,{default:r(()=>[...o[64]||=[u(`Action`,-1)]]),_:1})]),_:1}),o[67]||=u(` `+t(` `)+` `,-1),l(_,{variant:`secondary`,disabled:``},{"split-buttons":r(()=>[l(x,{disabled:``},{default:r(()=>[...o[65]||=[u(`Action`,-1)]]),_:1})]),_:1})]),_:1}),l(v,{title:`With icon/image and text`,source:`<pf-menu-toggle variant="secondary">
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
</pf-menu-toggle>`},{default:r(()=>[l(_,{variant:`secondary`},{icon:r(()=>[l(i(f))]),default:r(()=>[o[68]||=u(` Icon `,-1)]),_:1}),o[70]||=u(` `+t(` `)+` `,-1),l(_,{variant:`secondary`,disabled:``},{icon:r(()=>[l(i(f))]),default:r(()=>[o[69]||=u(` Icon `,-1)]),_:1})]),_:1}),l(v,{title:`With avatar and text`,source:`<pf-menu-toggle>
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
</pf-menu-toggle>`},{default:r(()=>[l(_,null,{icon:r(()=>[l(S,{src:`avatar.svg`,alt:`avatar`})]),default:r(()=>[o[71]||=u(` Ned Username `,-1)]),_:1}),o[74]||=u(` `+t(` `)+` `,-1),l(_,{expanded:``},{icon:r(()=>[l(S,{src:`avatar.svg`,alt:`avatar`})]),default:r(()=>[o[72]||=u(` Ned Username `,-1)]),_:1}),o[75]||=u(` `+t(` `)+` `,-1),l(_,{disabled:``},{icon:r(()=>[l(S,{src:`avatar.svg`,alt:`avatar`})]),default:r(()=>[o[73]||=u(` Ned Username `,-1)]),_:1})]),_:1}),l(v,{title:`Full height`,source:`<div style="height:80px">
  <pf-menu-toggle full-height>Full height</pf-menu-toggle>
</div>`},{default:r(()=>[d(`div`,h,[l(_,{"full-height":``},{default:r(()=>[...o[76]||=[u(`Full height`,-1)]]),_:1})])]),_:1}),l(v,{title:`Full width`,source:`<pf-menu-toggle full-width>Full width</pf-menu-toggle>`},{default:r(()=>[l(_,{"full-width":``},{default:r(()=>[...o[77]||=[u(`Full width`,-1)]]),_:1})]),_:1}),l(v,{title:`Typeahead toggle`,source:`<pf-menu-toggle variant="typeahead" full-width>
  <pf-text-input-group plain>
    <pf-text-input-group-main autocomplete="off" v-model="inputValue" />

    <pf-text-input-group-utilities>
      <pf-button v-if="inputValue" variant="plain" aria-label="Clear input">
        <template #icon>
          <x-icon />
        </template>
      </pf-button>
    </pf-text-input-group-utilities>
  </pf-text-input-group>
</pf-menu-toggle>`},{default:r(()=>[l(_,{variant:`typeahead`,"full-width":``},{default:r(()=>[l(E,{plain:``},{default:r(()=>[l(C,{autocomplete:`off`,modelValue:p.value,"onUpdate:modelValue":o[0]||=e=>p.value=e},null,8,[`modelValue`]),l(T,null,{default:r(()=>[p.value?(s(),a(w,{key:0,variant:`plain`,"aria-label":`Clear input`},{icon:r(()=>[l(i(m))]),_:1})):c(``,!0)]),_:1})]),_:1})]),_:1})]),_:1}),l(v,{title:`Status toggle`,source:`<pf-menu-toggle status="success">Success</pf-menu-toggle>
<br>
<br>
<pf-menu-toggle status="warning">Warning</pf-menu-toggle>
<pf-helper-text>
  <pf-helper-text-item variant="warning">Warning text that provides context about the menu toggle</pf-helper-text-item>
</pf-helper-text>
<br>
<br>
<pf-menu-toggle status="danger">Danger</pf-menu-toggle>
<pf-helper-text>
  <pf-helper-text-item variant="error">Danger text that provides context about the menu toggle</pf-helper-text-item>
</pf-helper-text>`},{default:r(()=>[l(_,{status:`success`},{default:r(()=>[...o[78]||=[u(`Success`,-1)]]),_:1}),o[83]||=d(`br`,null,null,-1),o[84]||=d(`br`,null,null,-1),l(_,{status:`warning`},{default:r(()=>[...o[79]||=[u(`Warning`,-1)]]),_:1}),l(O,null,{default:r(()=>[l(D,{variant:`warning`},{default:r(()=>[...o[80]||=[u(`Warning text that provides context about the menu toggle`,-1)]]),_:1})]),_:1}),o[85]||=d(`br`,null,null,-1),o[86]||=d(`br`,null,null,-1),l(_,{status:`danger`},{default:r(()=>[...o[81]||=[u(`Danger`,-1)]]),_:1}),l(O,null,{default:r(()=>[l(D,{variant:`error`},{default:r(()=>[...o[82]||=[u(`Danger text that provides context about the menu toggle`,-1)]]),_:1})]),_:1})]),_:1}),l(v,{title:`Placeholder text in toggle`,source:`<pf-menu-toggle placeholder>Placeholder text</pf-menu-toggle>`},{default:r(()=>[l(_,{placeholder:``},{default:r(()=>[...o[87]||=[u(`Placeholder text`,-1)]]),_:1})]),_:1})]),_:1})}}}),[[`__scopeId`,`data-v-733de951`]]);export{g as default};