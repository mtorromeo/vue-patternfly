import{H as e,N as t,Q as n,Tt as r,c as i,h as a,it as o,k as s,l as c,m as l,p as u,s as d}from"./runtime-core.esm-bundler-DvxuuL12.js";import{d as f,n as p}from"./index-JKtqnbzt.js";import{t as m}from"./x-icon-DgWDux4z.js";var h={style:{height:`80px`}},g=p(a({__name:`MenuToggle.story`,setup(a){let p=n(``);return(n,a)=>{let g=t(`component-info`),_=t(`pf-menu-toggle`),v=t(`story-canvas`),y=t(`pf-badge`),b=t(`pf-menu-toggle-checkbox`),x=t(`pf-menu-toggle-action`),S=t(`pf-avatar`),C=t(`pf-text-input-group-main`),w=t(`pf-button`),T=t(`pf-text-input-group-utilities`),E=t(`pf-text-input-group`),D=t(`pf-helper-text-item`),O=t(`pf-helper-text`),k=t(`doc-page`);return s(),i(k,{name:`Components/MenuToggle.story.vue`,title:`Menu toggle`},{description:e(()=>[...a[1]||=[u(`The `,-1),d(`b`,null,`menu toggle`,-1),u(` component pairs with the menu OR the panel component to create more customizable dropdown and select implementations. Using a menu toggle with a menu enables you to create custom component configurations not supported by the standard dropdown or select components.`,-1)]]),apidocs:e(()=>[l(g,{name:`PfMenuToggle`,doc:{name:`PfMenuToggle`,exportName:`PfMenuToggle`,displayName:`MenuToggle`,description:``,tags:{},expose:[{name:`el`},{name:`focus`}],props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`disabled`,description:`Flag indicating the toggle is disabled`,required:!1,type:{name:`boolean`}},{name:`fullHeight`,description:`Flag indicating the toggle is full height`,required:!1,type:{name:`boolean`}},{name:`fullWidth`,description:`Flag indicating the toggle takes up the full width of its parent`,required:!1,type:{name:`boolean`}},{name:`inForm`,description:`Flag indicating the toggle is placed inside a form`,required:!1,type:{name:`boolean`}},{name:`placeholder`,description:`Flag indicating the toggle contains placeholder text`,required:!1,type:{name:`boolean`}},{name:`settings`,description:`Flag indicating whether the toggle is a settings toggle. This will override the icon property`,required:!1,type:{name:`boolean`}},{name:`variant`,description:`Variant styles of the menu toggle`,required:!1,type:{name:`union`,elements:[{name:`"default"`},{name:`"plain"`},{name:`"primary"`},{name:`"plainText"`},{name:`"secondary"`},{name:`"typeahead"`}]}},{name:`status`,description:`Status styles of the menu toggle`,required:!1,type:{name:`union`,elements:[{name:`"success"`},{name:`"warning"`},{name:`"danger"`}]}},{name:`small`,description:`Smaller size of the menu toggle`,required:!1,type:{name:`boolean`}},{name:`circle`,description:`Flag indicating the toggle has circular styling. Can only be applied to plain toggles.`,required:!1,type:{name:`boolean`}},{name:`docked`,description:`Flag indicating the menu toggle is a docked variant. For use in docked navigation.`,required:!1,type:{name:`boolean`}},{name:`textExpanded`,description:`Flag indicating the docked toggle should display text. Only applies when isDocked is true.`,required:!1,type:{name:`boolean`}}],events:[],slots:[{name:`status-icon`},{name:`icon`},{name:`default`},{name:`split-buttons`},{name:`badge`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/MenuToggle/MenuToggle.vue`]}}),l(g,{name:`PfMenuToggleAction`,doc:{name:`PfMenuToggleAction`,exportName:`PfMenuToggleAction`,displayName:`MenuToggleAction`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/MenuToggle/MenuToggleAction.vue`]}}),l(g,{name:`PfMenuToggleCheckbox`,doc:{name:`PfMenuToggleCheckbox`,exportName:`PfMenuToggleCheckbox`,displayName:`MenuToggleCheckbox`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`checked`,description:`Flag to show if the checkbox is checked. Use null to set the checkbox indeterminate state`,required:!1,type:{name:`union`,elements:[{name:`boolean`},{name:`null`}]}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/MenuToggle/MenuToggleCheckbox.vue`]}})]),default:e(()=>[a[88]||=d(`div`,{class:`markdown pf-v6-c-content`},[d(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),l(v,{title:`Collapsed`,source:`<pf-menu-toggle>Collapsed</pf-menu-toggle>`},{default:e(()=>[l(_,null,{default:e(()=>[...a[2]||=[u(`Collapsed`,-1)]]),_:1})]),_:1}),l(v,{title:`Expanded`,source:`<pf-menu-toggle expanded>Expanded</pf-menu-toggle>`},{default:e(()=>[l(_,{expanded:``},{default:e(()=>[...a[3]||=[u(`Expanded`,-1)]]),_:1})]),_:1}),l(v,{title:`Disabled`,source:`<pf-menu-toggle disabled>Disabled</pf-menu-toggle>`},{default:e(()=>[l(_,{disabled:``},{default:e(()=>[...a[4]||=[u(`Disabled`,-1)]]),_:1})]),_:1}),l(v,{title:`With a badge`,source:`<pf-menu-toggle>
  Count
  <template #badge>
    <pf-badge>4 selected</pf-badge>
  </template>
</pf-menu-toggle>
<pf-menu-toggle variant="plainText">
  <template #badge>
    <pf-badge>4</pf-badge>
  </template>
</pf-menu-toggle>`},{default:e(()=>[l(_,null,{badge:e(()=>[l(y,null,{default:e(()=>[...a[5]||=[u(`4 selected`,-1)]]),_:1})]),default:e(()=>[a[6]||=u(` Count `,-1)]),_:1}),l(_,{variant:`plainText`},{badge:e(()=>[l(y,null,{default:e(()=>[...a[7]||=[u(`4`,-1)]]),_:1})]),_:1})]),_:1}),l(v,{title:`Settings toggle`,source:`<pf-menu-toggle settings>Settings</pf-menu-toggle>
<pf-menu-toggle settings variant="plain" aria-label="Settings" />`},{default:e(()=>[l(_,{settings:``},{default:e(()=>[...a[8]||=[u(`Settings`,-1)]]),_:1}),l(_,{settings:``,variant:`plain`,"aria-label":`Settings`})]),_:1}),l(v,{title:`Primary`,source:`<pf-menu-toggle variant="primary">Collapsed</pf-menu-toggle>
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
<pf-menu-toggle variant="primary" disabled>Disabled</pf-menu-toggle>`},{default:e(()=>[l(_,{variant:`primary`},{default:e(()=>[...a[9]||=[u(`Collapsed`,-1)]]),_:1}),a[14]||=u(` `+r(` `)+` `,-1),l(_,{variant:`primary`},{icon:e(()=>[l(o(f))]),default:e(()=>[a[10]||=u(` Icon `,-1)]),_:1}),a[15]||=u(` `+r(` `)+` `,-1),l(_,{variant:`primary`,settings:``},{default:e(()=>[...a[11]||=[u(` Settings `,-1)]]),_:1}),a[16]||=u(` `+r(` `)+` `,-1),l(_,{variant:`primary`,expanded:``},{default:e(()=>[...a[12]||=[u(`Expanded`,-1)]]),_:1}),a[17]||=u(` `+r(` `)+` `,-1),l(_,{variant:`primary`,disabled:``},{default:e(()=>[...a[13]||=[u(`Disabled`,-1)]]),_:1})]),_:1}),l(v,{title:`Secondary`,source:`<pf-menu-toggle variant="secondary">Collapsed</pf-menu-toggle>
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
<pf-menu-toggle variant="secondary" disabled>Disabled</pf-menu-toggle>`},{default:e(()=>[l(_,{variant:`secondary`},{default:e(()=>[...a[18]||=[u(`Collapsed`,-1)]]),_:1}),a[23]||=u(` `+r(` `)+` `,-1),l(_,{variant:`secondary`},{icon:e(()=>[l(o(f))]),default:e(()=>[a[19]||=u(` Icon `,-1)]),_:1}),a[24]||=u(` `+r(` `)+` `,-1),l(_,{variant:`secondary`,settings:``},{default:e(()=>[...a[20]||=[u(` Settings `,-1)]]),_:1}),a[25]||=u(` `+r(` `)+` `,-1),l(_,{variant:`secondary`,expanded:``},{default:e(()=>[...a[21]||=[u(`Expanded`,-1)]]),_:1}),a[26]||=u(` `+r(` `)+` `,-1),l(_,{variant:`secondary`,disabled:``},{default:e(()=>[...a[22]||=[u(`Disabled`,-1)]]),_:1})]),_:1}),l(v,{title:`Plain toggle with icon`,source:`<pf-menu-toggle variant="plain" />
{{ ' ' }}
<pf-menu-toggle variant="plain" expanded />
{{ ' ' }}
<pf-menu-toggle variant="plain" disabled />`},{default:e(()=>[l(_,{variant:`plain`}),a[27]||=u(` `+r(` `)+` `,-1),l(_,{variant:`plain`,expanded:``}),a[28]||=u(` `+r(` `)+` `,-1),l(_,{variant:`plain`,disabled:``})]),_:1}),l(v,{title:`Plain circle toggle`,source:`<pf-menu-toggle circle variant="plain" />
{{ ' ' }}
<pf-menu-toggle circle variant="plain" expanded />
{{ ' ' }}
<pf-menu-toggle circle variant="plain" disabled />`},{default:e(()=>[l(_,{circle:``,variant:`plain`}),a[29]||=u(` `+r(` `)+` `,-1),l(_,{circle:``,variant:`plain`,expanded:``}),a[30]||=u(` `+r(` `)+` `,-1),l(_,{circle:``,variant:`plain`,disabled:``})]),_:1}),l(v,{title:`Plain toggle with text label`,source:`<pf-menu-toggle variant="plainText">Custom text</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="plainText" expanded>Custom text (expanded)</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="plainText" disabled>Disabled</pf-menu-toggle>`},{default:e(()=>[l(_,{variant:`plainText`},{default:e(()=>[...a[31]||=[u(`Custom text`,-1)]]),_:1}),a[34]||=u(` `+r(` `)+` `,-1),l(_,{variant:`plainText`,expanded:``},{default:e(()=>[...a[32]||=[u(`Custom text (expanded)`,-1)]]),_:1}),a[35]||=u(` `+r(` `)+` `,-1),l(_,{variant:`plainText`,disabled:``},{default:e(()=>[...a[33]||=[u(`Disabled`,-1)]]),_:1})]),_:1}),l(v,{title:`Split toggle with checkbox`,source:`<pf-menu-toggle>
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
</pf-menu-toggle>`},{default:e(()=>[l(_,null,{"split-buttons":e(()=>[l(b)]),_:1}),a[36]||=u(` `+r(` `)+` `,-1),l(_,{expanded:``},{"split-buttons":e(()=>[l(b)]),_:1}),a[37]||=u(` `+r(` `)+` `,-1),l(_,{disabled:``},{"split-buttons":e(()=>[l(b,{disabled:``})]),_:1})]),_:1}),l(v,{title:`Split toggle (checkbox indeterminate with toggle text)`,source:`<pf-menu-toggle>
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
</pf-menu-toggle>`},{default:e(()=>[l(_,null,{"split-buttons":e(()=>[l(b,{checked:null},{default:e(()=>[...a[38]||=[u(`10 selected`,-1)]]),_:1})]),_:1}),a[41]||=u(` `+r(` `)+` `,-1),l(_,{expanded:``},{"split-buttons":e(()=>[l(b,{checked:null},{default:e(()=>[...a[39]||=[u(`10 selected`,-1)]]),_:1})]),_:1}),a[42]||=u(` `+r(` `)+` `,-1),l(_,{disabled:``},{"split-buttons":e(()=>[l(b,{checked:null,disabled:``},{default:e(()=>[...a[40]||=[u(`10 selected`,-1)]]),_:1})]),_:1})]),_:1}),l(v,{title:`Split toggle (checkbox, primary)`,source:`<pf-menu-toggle variant="primary">
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
</pf-menu-toggle>`},{default:e(()=>[l(_,{variant:`primary`},{"split-buttons":e(()=>[l(b,null,{default:e(()=>[...a[43]||=[u(`10 selected`,-1)]]),_:1})]),_:1}),a[46]||=u(` `+r(` `)+` `,-1),l(_,{variant:`primary`,expanded:``},{"split-buttons":e(()=>[l(b,null,{default:e(()=>[...a[44]||=[u(`10 selected`,-1)]]),_:1})]),_:1}),a[47]||=u(` `+r(` `)+` `,-1),l(_,{variant:`primary`,disabled:``},{"split-buttons":e(()=>[l(b,null,{default:e(()=>[...a[45]||=[u(`10 selected`,-1)]]),_:1})]),_:1})]),_:1}),l(v,{title:`Split toggle (checkbox, secondary)`,source:`<pf-menu-toggle variant="secondary">
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
</pf-menu-toggle>`},{default:e(()=>[l(_,{variant:`secondary`},{"split-buttons":e(()=>[l(b,null,{default:e(()=>[...a[48]||=[u(`10 selected`,-1)]]),_:1})]),_:1}),a[51]||=u(` `+r(` `)+` `,-1),l(_,{variant:`secondary`,expanded:``},{"split-buttons":e(()=>[l(b,null,{default:e(()=>[...a[49]||=[u(`10 selected`,-1)]]),_:1})]),_:1}),a[52]||=u(` `+r(` `)+` `,-1),l(_,{variant:`secondary`,disabled:``},{"split-buttons":e(()=>[l(b,{disabled:``},{default:e(()=>[...a[50]||=[u(`10 selected`,-1)]]),_:1})]),_:1})]),_:1}),l(v,{title:`Split toggle (action)`,source:`<pf-menu-toggle>
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
</pf-menu-toggle>`},{default:e(()=>[l(_,null,{"split-buttons":e(()=>[l(x,null,{default:e(()=>[...a[53]||=[u(`Action`,-1)]]),_:1})]),_:1}),a[56]||=u(` `+r(` `)+` `,-1),l(_,{expanded:``},{"split-buttons":e(()=>[l(x,null,{default:e(()=>[...a[54]||=[u(`Action`,-1)]]),_:1})]),_:1}),a[57]||=u(` `+r(` `)+` `,-1),l(_,{disabled:``},{"split-buttons":e(()=>[l(x,{disabled:``},{default:e(()=>[...a[55]||=[u(`Action`,-1)]]),_:1})]),_:1})]),_:1}),l(v,{title:`Split toggle (action, primary)`,source:`<pf-menu-toggle variant="primary">
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
</pf-menu-toggle>`},{default:e(()=>[l(_,{variant:`primary`},{"split-buttons":e(()=>[l(x,null,{default:e(()=>[...a[58]||=[u(`Action`,-1)]]),_:1})]),_:1}),a[61]||=u(` `+r(` `)+` `,-1),l(_,{variant:`primary`,expanded:``},{"split-buttons":e(()=>[l(x,null,{default:e(()=>[...a[59]||=[u(`Action`,-1)]]),_:1})]),_:1}),a[62]||=u(` `+r(` `)+` `,-1),l(_,{variant:`primary`,disabled:``},{"split-buttons":e(()=>[l(x,{disabled:``},{default:e(()=>[...a[60]||=[u(`Action`,-1)]]),_:1})]),_:1})]),_:1}),l(v,{title:`Split toggle (action, secondary)`,source:`<pf-menu-toggle variant="secondary">
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
</pf-menu-toggle>`},{default:e(()=>[l(_,{variant:`secondary`},{"split-buttons":e(()=>[l(x,null,{default:e(()=>[...a[63]||=[u(`Action`,-1)]]),_:1})]),_:1}),a[66]||=u(` `+r(` `)+` `,-1),l(_,{variant:`secondary`,expanded:``},{"split-buttons":e(()=>[l(x,null,{default:e(()=>[...a[64]||=[u(`Action`,-1)]]),_:1})]),_:1}),a[67]||=u(` `+r(` `)+` `,-1),l(_,{variant:`secondary`,disabled:``},{"split-buttons":e(()=>[l(x,{disabled:``},{default:e(()=>[...a[65]||=[u(`Action`,-1)]]),_:1})]),_:1})]),_:1}),l(v,{title:`With icon/image and text`,source:`<pf-menu-toggle variant="secondary">
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
</pf-menu-toggle>`},{default:e(()=>[l(_,{variant:`secondary`},{icon:e(()=>[l(o(f))]),default:e(()=>[a[68]||=u(` Icon `,-1)]),_:1}),a[70]||=u(` `+r(` `)+` `,-1),l(_,{variant:`secondary`,disabled:``},{icon:e(()=>[l(o(f))]),default:e(()=>[a[69]||=u(` Icon `,-1)]),_:1})]),_:1}),l(v,{title:`With avatar and text`,source:`<pf-menu-toggle>
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
</pf-menu-toggle>`},{default:e(()=>[l(_,null,{icon:e(()=>[l(S,{src:`avatar.svg`,alt:`avatar`})]),default:e(()=>[a[71]||=u(` Ned Username `,-1)]),_:1}),a[74]||=u(` `+r(` `)+` `,-1),l(_,{expanded:``},{icon:e(()=>[l(S,{src:`avatar.svg`,alt:`avatar`})]),default:e(()=>[a[72]||=u(` Ned Username `,-1)]),_:1}),a[75]||=u(` `+r(` `)+` `,-1),l(_,{disabled:``},{icon:e(()=>[l(S,{src:`avatar.svg`,alt:`avatar`})]),default:e(()=>[a[73]||=u(` Ned Username `,-1)]),_:1})]),_:1}),l(v,{title:`Full height`,source:`<div style="height:80px">
  <pf-menu-toggle full-height>Full height</pf-menu-toggle>
</div>`},{default:e(()=>[d(`div`,h,[l(_,{"full-height":``},{default:e(()=>[...a[76]||=[u(`Full height`,-1)]]),_:1})])]),_:1}),l(v,{title:`Full width`,source:`<pf-menu-toggle full-width>Full width</pf-menu-toggle>`},{default:e(()=>[l(_,{"full-width":``},{default:e(()=>[...a[77]||=[u(`Full width`,-1)]]),_:1})]),_:1}),l(v,{title:`Typeahead toggle`,source:`<pf-menu-toggle variant="typeahead" full-width>
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
</pf-menu-toggle>`},{default:e(()=>[l(_,{variant:`typeahead`,"full-width":``},{default:e(()=>[l(E,{plain:``},{default:e(()=>[l(C,{autocomplete:`off`,modelValue:p.value,"onUpdate:modelValue":a[0]||=e=>p.value=e},null,8,[`modelValue`]),l(T,null,{default:e(()=>[p.value?(s(),i(w,{key:0,variant:`plain`,"aria-label":`Clear input`},{icon:e(()=>[l(o(m))]),_:1})):c(``,!0)]),_:1})]),_:1})]),_:1})]),_:1}),l(v,{title:`Status toggle`,source:`<pf-menu-toggle status="success">Success</pf-menu-toggle>
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
</pf-helper-text>`},{default:e(()=>[l(_,{status:`success`},{default:e(()=>[...a[78]||=[u(`Success`,-1)]]),_:1}),a[83]||=d(`br`,null,null,-1),a[84]||=d(`br`,null,null,-1),l(_,{status:`warning`},{default:e(()=>[...a[79]||=[u(`Warning`,-1)]]),_:1}),l(O,null,{default:e(()=>[l(D,{variant:`warning`},{default:e(()=>[...a[80]||=[u(`Warning text that provides context about the menu toggle`,-1)]]),_:1})]),_:1}),a[85]||=d(`br`,null,null,-1),a[86]||=d(`br`,null,null,-1),l(_,{status:`danger`},{default:e(()=>[...a[81]||=[u(`Danger`,-1)]]),_:1}),l(O,null,{default:e(()=>[l(D,{variant:`error`},{default:e(()=>[...a[82]||=[u(`Danger text that provides context about the menu toggle`,-1)]]),_:1})]),_:1})]),_:1}),l(v,{title:`Placeholder text in toggle`,source:`<pf-menu-toggle placeholder>Placeholder text</pf-menu-toggle>`},{default:e(()=>[l(_,{placeholder:``},{default:e(()=>[...a[87]||=[u(`Placeholder text`,-1)]]),_:1})]),_:1})]),_:1})}}}),[[`__scopeId`,`data-v-733de951`]]);export{g as default};