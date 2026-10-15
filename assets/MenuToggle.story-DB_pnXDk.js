import{N as e,Ot as t,U as n,c as r,et as i,h as a,k as o,l as s,m as c,p as l,s as u,st as d}from"./runtime-core.esm-bundler-Bo9Nr7Z8.js";import{d as f,n as p}from"./index-DEZgkdzS.js";import{t as m}from"./x-icon-uIuEq6C7.js";var h={style:{height:`80px`}},g=p(a({__name:`MenuToggle.story`,setup(a){let p=i(``);return(i,a)=>{let g=e(`component-info`),_=e(`pf-menu-toggle`),v=e(`story-canvas`),y=e(`pf-badge`),b=e(`pf-menu-toggle-checkbox`),x=e(`pf-menu-toggle-action`),S=e(`pf-avatar`),C=e(`pf-text-input-group-main`),w=e(`pf-button`),T=e(`pf-text-input-group-utilities`),E=e(`pf-text-input-group`),D=e(`pf-helper-text-item`),O=e(`pf-helper-text`),k=e(`doc-page`);return o(),r(k,{name:`Components/MenuToggle.story.vue`,title:`Menu toggle`},{description:n(()=>[...a[1]||=[l(`The `,-1),u(`b`,null,`menu toggle`,-1),l(` component pairs with the menu OR the panel component to create more customizable dropdown and select implementations. Using a menu toggle with a menu enables you to create custom component configurations not supported by the standard dropdown or select components.`,-1)]]),apidocs:n(()=>[c(g,{name:`PfMenuToggle`,doc:{name:`PfMenuToggle`,exportName:`PfMenuToggle`,displayName:`MenuToggle`,description:``,tags:{},expose:[{name:`el`},{name:`focus`}],props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`disabled`,description:`Flag indicating the toggle is disabled`,required:!1,type:{name:`boolean`}},{name:`fullHeight`,description:`Flag indicating the toggle is full height`,required:!1,type:{name:`boolean`}},{name:`fullWidth`,description:`Flag indicating the toggle takes up the full width of its parent`,required:!1,type:{name:`boolean`}},{name:`inForm`,description:`Flag indicating the toggle is placed inside a form`,required:!1,type:{name:`boolean`}},{name:`placeholder`,description:`Flag indicating the toggle contains placeholder text`,required:!1,type:{name:`boolean`}},{name:`settings`,description:`Flag indicating whether the toggle is a settings toggle. This will override the icon property`,required:!1,type:{name:`boolean`}},{name:`variant`,description:`Variant styles of the menu toggle`,required:!1,type:{name:`union`,elements:[{name:`"default"`},{name:`"plain"`},{name:`"primary"`},{name:`"plainText"`},{name:`"secondary"`},{name:`"typeahead"`}]}},{name:`status`,description:`Status styles of the menu toggle`,required:!1,type:{name:`union`,elements:[{name:`"success"`},{name:`"warning"`},{name:`"danger"`}]}},{name:`small`,description:`Smaller size of the menu toggle`,required:!1,type:{name:`boolean`}},{name:`circle`,description:`Flag indicating the toggle has circular styling. Can only be applied to plain toggles.`,required:!1,type:{name:`boolean`}},{name:`docked`,description:`Flag indicating the menu toggle is a docked variant. For use in docked navigation.`,required:!1,type:{name:`boolean`}},{name:`textExpanded`,description:`Flag indicating the docked toggle should display text. Only applies when isDocked is true.`,required:!1,type:{name:`boolean`}}],events:[],slots:[{name:`status-icon`},{name:`icon`},{name:`default`},{name:`split-buttons`},{name:`badge`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/MenuToggle/MenuToggle.vue`]}}),c(g,{name:`PfMenuToggleAction`,doc:{name:`PfMenuToggleAction`,exportName:`PfMenuToggleAction`,displayName:`MenuToggleAction`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/MenuToggle/MenuToggleAction.vue`]}}),c(g,{name:`PfMenuToggleCheckbox`,doc:{name:`PfMenuToggleCheckbox`,exportName:`PfMenuToggleCheckbox`,displayName:`MenuToggleCheckbox`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`checked`,description:`Flag to show if the checkbox is checked. Use null to set the checkbox indeterminate state`,required:!1,type:{name:`union`,elements:[{name:`boolean`},{name:`null`}]}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/MenuToggle/MenuToggleCheckbox.vue`]}})]),default:n(()=>[a[88]||=u(`div`,{class:`markdown pf-v6-c-content`},[u(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),c(v,{title:`Collapsed`,source:`<pf-menu-toggle>Collapsed</pf-menu-toggle>`},{default:n(()=>[c(_,null,{default:n(()=>[...a[2]||=[l(`Collapsed`,-1)]]),_:1})]),_:1}),c(v,{title:`Expanded`,source:`<pf-menu-toggle expanded>Expanded</pf-menu-toggle>`},{default:n(()=>[c(_,{expanded:``},{default:n(()=>[...a[3]||=[l(`Expanded`,-1)]]),_:1})]),_:1}),c(v,{title:`Disabled`,source:`<pf-menu-toggle disabled>Disabled</pf-menu-toggle>`},{default:n(()=>[c(_,{disabled:``},{default:n(()=>[...a[4]||=[l(`Disabled`,-1)]]),_:1})]),_:1}),c(v,{title:`With a badge`,source:`<pf-menu-toggle>
  Count
  <template #badge>
    <pf-badge>4 selected</pf-badge>
  </template>
</pf-menu-toggle>
<pf-menu-toggle variant="plainText">
  <template #badge>
    <pf-badge>4</pf-badge>
  </template>
</pf-menu-toggle>`},{default:n(()=>[c(_,null,{badge:n(()=>[c(y,null,{default:n(()=>[...a[5]||=[l(`4 selected`,-1)]]),_:1})]),default:n(()=>[a[6]||=l(` Count `,-1)]),_:1}),c(_,{variant:`plainText`},{badge:n(()=>[c(y,null,{default:n(()=>[...a[7]||=[l(`4`,-1)]]),_:1})]),_:1})]),_:1}),c(v,{title:`Settings toggle`,source:`<pf-menu-toggle settings>Settings</pf-menu-toggle>
<pf-menu-toggle settings variant="plain" aria-label="Settings" />`},{default:n(()=>[c(_,{settings:``},{default:n(()=>[...a[8]||=[l(`Settings`,-1)]]),_:1}),c(_,{settings:``,variant:`plain`,"aria-label":`Settings`})]),_:1}),c(v,{title:`Primary`,source:`<pf-menu-toggle variant="primary">Collapsed</pf-menu-toggle>
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
<pf-menu-toggle variant="primary" disabled>Disabled</pf-menu-toggle>`},{default:n(()=>[c(_,{variant:`primary`},{default:n(()=>[...a[9]||=[l(`Collapsed`,-1)]]),_:1}),a[14]||=l(` `+t(` `)+` `,-1),c(_,{variant:`primary`},{icon:n(()=>[c(d(f))]),default:n(()=>[a[10]||=l(` Icon `,-1)]),_:1}),a[15]||=l(` `+t(` `)+` `,-1),c(_,{variant:`primary`,settings:``},{default:n(()=>[...a[11]||=[l(` Settings `,-1)]]),_:1}),a[16]||=l(` `+t(` `)+` `,-1),c(_,{variant:`primary`,expanded:``},{default:n(()=>[...a[12]||=[l(`Expanded`,-1)]]),_:1}),a[17]||=l(` `+t(` `)+` `,-1),c(_,{variant:`primary`,disabled:``},{default:n(()=>[...a[13]||=[l(`Disabled`,-1)]]),_:1})]),_:1}),c(v,{title:`Secondary`,source:`<pf-menu-toggle variant="secondary">Collapsed</pf-menu-toggle>
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
<pf-menu-toggle variant="secondary" disabled>Disabled</pf-menu-toggle>`},{default:n(()=>[c(_,{variant:`secondary`},{default:n(()=>[...a[18]||=[l(`Collapsed`,-1)]]),_:1}),a[23]||=l(` `+t(` `)+` `,-1),c(_,{variant:`secondary`},{icon:n(()=>[c(d(f))]),default:n(()=>[a[19]||=l(` Icon `,-1)]),_:1}),a[24]||=l(` `+t(` `)+` `,-1),c(_,{variant:`secondary`,settings:``},{default:n(()=>[...a[20]||=[l(` Settings `,-1)]]),_:1}),a[25]||=l(` `+t(` `)+` `,-1),c(_,{variant:`secondary`,expanded:``},{default:n(()=>[...a[21]||=[l(`Expanded`,-1)]]),_:1}),a[26]||=l(` `+t(` `)+` `,-1),c(_,{variant:`secondary`,disabled:``},{default:n(()=>[...a[22]||=[l(`Disabled`,-1)]]),_:1})]),_:1}),c(v,{title:`Plain toggle with icon`,source:`<pf-menu-toggle variant="plain" />
{{ ' ' }}
<pf-menu-toggle variant="plain" expanded />
{{ ' ' }}
<pf-menu-toggle variant="plain" disabled />`},{default:n(()=>[c(_,{variant:`plain`}),a[27]||=l(` `+t(` `)+` `,-1),c(_,{variant:`plain`,expanded:``}),a[28]||=l(` `+t(` `)+` `,-1),c(_,{variant:`plain`,disabled:``})]),_:1}),c(v,{title:`Plain circle toggle`,source:`<pf-menu-toggle circle variant="plain" />
{{ ' ' }}
<pf-menu-toggle circle variant="plain" expanded />
{{ ' ' }}
<pf-menu-toggle circle variant="plain" disabled />`},{default:n(()=>[c(_,{circle:``,variant:`plain`}),a[29]||=l(` `+t(` `)+` `,-1),c(_,{circle:``,variant:`plain`,expanded:``}),a[30]||=l(` `+t(` `)+` `,-1),c(_,{circle:``,variant:`plain`,disabled:``})]),_:1}),c(v,{title:`Plain toggle with text label`,source:`<pf-menu-toggle variant="plainText">Custom text</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="plainText" expanded>Custom text (expanded)</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="plainText" disabled>Disabled</pf-menu-toggle>`},{default:n(()=>[c(_,{variant:`plainText`},{default:n(()=>[...a[31]||=[l(`Custom text`,-1)]]),_:1}),a[34]||=l(` `+t(` `)+` `,-1),c(_,{variant:`plainText`,expanded:``},{default:n(()=>[...a[32]||=[l(`Custom text (expanded)`,-1)]]),_:1}),a[35]||=l(` `+t(` `)+` `,-1),c(_,{variant:`plainText`,disabled:``},{default:n(()=>[...a[33]||=[l(`Disabled`,-1)]]),_:1})]),_:1}),c(v,{title:`Split toggle with checkbox`,source:`<pf-menu-toggle>
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
</pf-menu-toggle>`},{default:n(()=>[c(_,null,{"split-buttons":n(()=>[c(b)]),_:1}),a[36]||=l(` `+t(` `)+` `,-1),c(_,{expanded:``},{"split-buttons":n(()=>[c(b)]),_:1}),a[37]||=l(` `+t(` `)+` `,-1),c(_,{disabled:``},{"split-buttons":n(()=>[c(b,{disabled:``})]),_:1})]),_:1}),c(v,{title:`Split toggle (checkbox indeterminate with toggle text)`,source:`<pf-menu-toggle>
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
</pf-menu-toggle>`},{default:n(()=>[c(_,null,{"split-buttons":n(()=>[c(b,{checked:null},{default:n(()=>[...a[38]||=[l(`10 selected`,-1)]]),_:1})]),_:1}),a[41]||=l(` `+t(` `)+` `,-1),c(_,{expanded:``},{"split-buttons":n(()=>[c(b,{checked:null},{default:n(()=>[...a[39]||=[l(`10 selected`,-1)]]),_:1})]),_:1}),a[42]||=l(` `+t(` `)+` `,-1),c(_,{disabled:``},{"split-buttons":n(()=>[c(b,{checked:null,disabled:``},{default:n(()=>[...a[40]||=[l(`10 selected`,-1)]]),_:1})]),_:1})]),_:1}),c(v,{title:`Split toggle (checkbox, primary)`,source:`<pf-menu-toggle variant="primary">
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
</pf-menu-toggle>`},{default:n(()=>[c(_,{variant:`primary`},{"split-buttons":n(()=>[c(b,null,{default:n(()=>[...a[43]||=[l(`10 selected`,-1)]]),_:1})]),_:1}),a[46]||=l(` `+t(` `)+` `,-1),c(_,{variant:`primary`,expanded:``},{"split-buttons":n(()=>[c(b,null,{default:n(()=>[...a[44]||=[l(`10 selected`,-1)]]),_:1})]),_:1}),a[47]||=l(` `+t(` `)+` `,-1),c(_,{variant:`primary`,disabled:``},{"split-buttons":n(()=>[c(b,null,{default:n(()=>[...a[45]||=[l(`10 selected`,-1)]]),_:1})]),_:1})]),_:1}),c(v,{title:`Split toggle (checkbox, secondary)`,source:`<pf-menu-toggle variant="secondary">
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
</pf-menu-toggle>`},{default:n(()=>[c(_,{variant:`secondary`},{"split-buttons":n(()=>[c(b,null,{default:n(()=>[...a[48]||=[l(`10 selected`,-1)]]),_:1})]),_:1}),a[51]||=l(` `+t(` `)+` `,-1),c(_,{variant:`secondary`,expanded:``},{"split-buttons":n(()=>[c(b,null,{default:n(()=>[...a[49]||=[l(`10 selected`,-1)]]),_:1})]),_:1}),a[52]||=l(` `+t(` `)+` `,-1),c(_,{variant:`secondary`,disabled:``},{"split-buttons":n(()=>[c(b,{disabled:``},{default:n(()=>[...a[50]||=[l(`10 selected`,-1)]]),_:1})]),_:1})]),_:1}),c(v,{title:`Split toggle (action)`,source:`<pf-menu-toggle>
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
</pf-menu-toggle>`},{default:n(()=>[c(_,null,{"split-buttons":n(()=>[c(x,null,{default:n(()=>[...a[53]||=[l(`Action`,-1)]]),_:1})]),_:1}),a[56]||=l(` `+t(` `)+` `,-1),c(_,{expanded:``},{"split-buttons":n(()=>[c(x,null,{default:n(()=>[...a[54]||=[l(`Action`,-1)]]),_:1})]),_:1}),a[57]||=l(` `+t(` `)+` `,-1),c(_,{disabled:``},{"split-buttons":n(()=>[c(x,{disabled:``},{default:n(()=>[...a[55]||=[l(`Action`,-1)]]),_:1})]),_:1})]),_:1}),c(v,{title:`Split toggle (action, primary)`,source:`<pf-menu-toggle variant="primary">
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
</pf-menu-toggle>`},{default:n(()=>[c(_,{variant:`primary`},{"split-buttons":n(()=>[c(x,null,{default:n(()=>[...a[58]||=[l(`Action`,-1)]]),_:1})]),_:1}),a[61]||=l(` `+t(` `)+` `,-1),c(_,{variant:`primary`,expanded:``},{"split-buttons":n(()=>[c(x,null,{default:n(()=>[...a[59]||=[l(`Action`,-1)]]),_:1})]),_:1}),a[62]||=l(` `+t(` `)+` `,-1),c(_,{variant:`primary`,disabled:``},{"split-buttons":n(()=>[c(x,{disabled:``},{default:n(()=>[...a[60]||=[l(`Action`,-1)]]),_:1})]),_:1})]),_:1}),c(v,{title:`Split toggle (action, secondary)`,source:`<pf-menu-toggle variant="secondary">
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
</pf-menu-toggle>`},{default:n(()=>[c(_,{variant:`secondary`},{"split-buttons":n(()=>[c(x,null,{default:n(()=>[...a[63]||=[l(`Action`,-1)]]),_:1})]),_:1}),a[66]||=l(` `+t(` `)+` `,-1),c(_,{variant:`secondary`,expanded:``},{"split-buttons":n(()=>[c(x,null,{default:n(()=>[...a[64]||=[l(`Action`,-1)]]),_:1})]),_:1}),a[67]||=l(` `+t(` `)+` `,-1),c(_,{variant:`secondary`,disabled:``},{"split-buttons":n(()=>[c(x,{disabled:``},{default:n(()=>[...a[65]||=[l(`Action`,-1)]]),_:1})]),_:1})]),_:1}),c(v,{title:`With icon/image and text`,source:`<pf-menu-toggle variant="secondary">
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
</pf-menu-toggle>`},{default:n(()=>[c(_,{variant:`secondary`},{icon:n(()=>[c(d(f))]),default:n(()=>[a[68]||=l(` Icon `,-1)]),_:1}),a[70]||=l(` `+t(` `)+` `,-1),c(_,{variant:`secondary`,disabled:``},{icon:n(()=>[c(d(f))]),default:n(()=>[a[69]||=l(` Icon `,-1)]),_:1})]),_:1}),c(v,{title:`With avatar and text`,source:`<pf-menu-toggle>
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
</pf-menu-toggle>`},{default:n(()=>[c(_,null,{icon:n(()=>[c(S,{src:`avatar.svg`,alt:`avatar`})]),default:n(()=>[a[71]||=l(` Ned Username `,-1)]),_:1}),a[74]||=l(` `+t(` `)+` `,-1),c(_,{expanded:``},{icon:n(()=>[c(S,{src:`avatar.svg`,alt:`avatar`})]),default:n(()=>[a[72]||=l(` Ned Username `,-1)]),_:1}),a[75]||=l(` `+t(` `)+` `,-1),c(_,{disabled:``},{icon:n(()=>[c(S,{src:`avatar.svg`,alt:`avatar`})]),default:n(()=>[a[73]||=l(` Ned Username `,-1)]),_:1})]),_:1}),c(v,{title:`Full height`,source:`<div style="height:80px">
  <pf-menu-toggle full-height>Full height</pf-menu-toggle>
</div>`},{default:n(()=>[u(`div`,h,[c(_,{"full-height":``},{default:n(()=>[...a[76]||=[l(`Full height`,-1)]]),_:1})])]),_:1}),c(v,{title:`Full width`,source:`<pf-menu-toggle full-width>Full width</pf-menu-toggle>`},{default:n(()=>[c(_,{"full-width":``},{default:n(()=>[...a[77]||=[l(`Full width`,-1)]]),_:1})]),_:1}),c(v,{title:`Typeahead toggle`,source:`<pf-menu-toggle variant="typeahead" full-width>
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
</pf-menu-toggle>`},{default:n(()=>[c(_,{variant:`typeahead`,"full-width":``},{default:n(()=>[c(E,{plain:``},{default:n(()=>[c(C,{autocomplete:`off`,modelValue:p.value,"onUpdate:modelValue":a[0]||=e=>p.value=e},null,8,[`modelValue`]),c(T,null,{default:n(()=>[p.value?(o(),r(w,{key:0,variant:`plain`,"aria-label":`Clear input`},{icon:n(()=>[c(d(m))]),_:1})):s(``,!0)]),_:1})]),_:1})]),_:1})]),_:1}),c(v,{title:`Status toggle`,source:`<pf-menu-toggle status="success">Success</pf-menu-toggle>
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
</pf-helper-text>`},{default:n(()=>[c(_,{status:`success`},{default:n(()=>[...a[78]||=[l(`Success`,-1)]]),_:1}),a[83]||=u(`br`,null,null,-1),a[84]||=u(`br`,null,null,-1),c(_,{status:`warning`},{default:n(()=>[...a[79]||=[l(`Warning`,-1)]]),_:1}),c(O,null,{default:n(()=>[c(D,{variant:`warning`},{default:n(()=>[...a[80]||=[l(`Warning text that provides context about the menu toggle`,-1)]]),_:1})]),_:1}),a[85]||=u(`br`,null,null,-1),a[86]||=u(`br`,null,null,-1),c(_,{status:`danger`},{default:n(()=>[...a[81]||=[l(`Danger`,-1)]]),_:1}),c(O,null,{default:n(()=>[c(D,{variant:`error`},{default:n(()=>[...a[82]||=[l(`Danger text that provides context about the menu toggle`,-1)]]),_:1})]),_:1})]),_:1}),c(v,{title:`Placeholder text in toggle`,source:`<pf-menu-toggle placeholder>Placeholder text</pf-menu-toggle>`},{default:n(()=>[c(_,{placeholder:``},{default:n(()=>[...a[87]||=[l(`Placeholder text`,-1)]]),_:1})]),_:1})]),_:1})}}}),[[`__scopeId`,`data-v-733de951`]]);export{g as default};