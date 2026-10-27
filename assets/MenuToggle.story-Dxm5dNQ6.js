import{F as e,G as t,Nt as n,c as r,ft as i,g as a,h as o,j as s,l as c,m as l,rt as u,u as d}from"./runtime-core.esm-bundler-DKmYt4j6.js";import{D as f,W as p,n as m,y as h}from"./index-Cl3hMFDe.js";var g=p({name:`XIcon`,height:512,width:384,svgPathData:`M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z`,yOffset:0,xOffset:0}),_={style:{height:`80px`}},v=m(a({__name:`MenuToggle.story`,setup(a){let p=u(``);return(a,u)=>{let m=e(`component-info`),v=e(`pf-menu-toggle`),y=e(`story-canvas`),b=e(`pf-badge`),x=e(`pf-avatar`),S=e(`pf-menu-toggle-checkbox`),C=e(`pf-menu-toggle-action`),w=e(`pf-text-input-group-main`),T=e(`pf-button`),E=e(`pf-text-input-group-utilities`),D=e(`pf-text-input-group`),O=e(`pf-helper-text-item`),k=e(`pf-helper-text`),A=e(`doc-page`);return s(),c(A,{name:`Components/MenuToggle.story.vue`,title:`Menu toggle`},{description:t(()=>[...u[2]||=[l(`The `,-1),r(`b`,null,`menu toggle`,-1),l(` component pairs with the menu OR the panel component to create more customizable dropdown and select implementations. Using a menu toggle with a menu enables you to create custom component configurations not supported by the standard dropdown or select components.`,-1)]]),apidocs:t(()=>[o(m,{name:`PfMenuToggle`,doc:{name:`PfMenuToggle`,exportName:`PfMenuToggle`,displayName:`MenuToggle`,description:``,tags:{},expose:[{name:`el`},{name:`focus`}],props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`disabled`,description:`Flag indicating the toggle is disabled`,required:!1,type:{name:`boolean`}},{name:`fullHeight`,description:`Flag indicating the toggle is full height`,required:!1,type:{name:`boolean`}},{name:`fullWidth`,description:`Flag indicating the toggle takes up the full width of its parent`,required:!1,type:{name:`boolean`}},{name:`inForm`,description:`Flag indicating the toggle is placed inside a form`,required:!1,type:{name:`boolean`}},{name:`placeholder`,description:`Flag indicating the toggle contains placeholder text`,required:!1,type:{name:`boolean`}},{name:`settings`,description:`Flag indicating whether the toggle is a settings toggle. This will override the icon property`,required:!1,type:{name:`boolean`}},{name:`variant`,description:`Variant styles of the menu toggle`,required:!1,type:{name:`union`,elements:[{name:`"default"`},{name:`"plain"`},{name:`"primary"`},{name:`"plainText"`},{name:`"secondary"`},{name:`"typeahead"`}]}},{name:`status`,description:`Status styles of the menu toggle`,required:!1,type:{name:`union`,elements:[{name:`"success"`},{name:`"warning"`},{name:`"danger"`}]}},{name:`small`,description:`Smaller size of the menu toggle`,required:!1,type:{name:`boolean`}},{name:`circle`,description:`Flag indicating the toggle has circular styling. Can only be applied to plain toggles.`,required:!1,type:{name:`boolean`}},{name:`docked`,description:`Flag indicating the menu toggle is a docked variant. For use in docked navigation.`,required:!1,type:{name:`boolean`}},{name:`ariaHaspopup`,description:`Indicates what type of popup will be triggered by the menu toggle. A value of true is the same as a value of "menu".`,required:!1,type:{name:`union`,elements:[{name:`"menu"`},{name:`"listbox"`},{name:`"true"`},{name:`"false"`},{name:`boolean`}]},defaultValue:{func:!1,value:`'menu'`}}],events:[{name:`click`,type:{names:[`MouseEvent`]},description:`The toggle button was clicked`}],slots:[{name:`status-icon`},{name:`icon`},{name:`default`},{name:`split-buttons`},{name:`badge`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/MenuToggle/MenuToggle.vue`]}}),o(m,{name:`PfMenuToggleAction`,doc:{name:`PfMenuToggleAction`,exportName:`PfMenuToggleAction`,displayName:`MenuToggleAction`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/MenuToggle/MenuToggleAction.vue`]}}),o(m,{name:`PfMenuToggleCheckbox`,doc:{name:`PfMenuToggleCheckbox`,exportName:`PfMenuToggleCheckbox`,displayName:`MenuToggleCheckbox`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`invalid`,description:`Flag to show if the checkbox selection is invalid`,required:!1,type:{name:`boolean`}}],events:[{name:`change`,type:{names:[`Event`]}}],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/MenuToggle/MenuToggleCheckbox.vue`]}})]),default:t(()=>[u[88]||=r(`div`,{class:`markdown pf-v6-c-content`},[r(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),r(`ul`,null,[r(`li`,null,[l(`The expanded state is bound with `),r(`code`,null,`v-model:expanded`),l(`, and clicking the toggle button toggles it when unbound.`)]),r(`li`,null,[r(`code`,null,`@click`),l(` is emitted only by the toggle button: in a split or typeahead toggle, clicks on the split button items or on the input do not emit it.`)]),r(`li`,null,[l(`The `),r(`code`,null,`icon`),l(`, `),r(`code`,null,`badge`),l(` and `),r(`code`,null,`statusIcon`),l(` props are replaced by the `),r(`code`,null,`icon`),l(`, `),r(`code`,null,`badge`),l(` and `),r(`code`,null,`status-icon`),l(` slots.`)]),r(`li`,null,[l(`The `),r(`code`,null,`splitButtonItems`),l(` prop is replaced by the `),r(`code`,null,`split-buttons`),l(` slot.`)]),r(`li`,null,[r(`code`,null,`size="sm"`),l(` is replaced by the `),r(`code`,null,`small`),l(` prop.`)]),r(`li`,null,[l(`A `),r(`code`,null,`plain`),l(` toggle with no content renders an ellipsis icon.`)]),r(`li`,null,`The toggle button of a disabled typeahead toggle is disabled too.`),r(`li`,null,[l(`The checked state of `),r(`code`,null,`pf-menu-toggle-checkbox`),l(` is bound with `),r(`code`,null,`v-model:checked`),l(` (`),r(`code`,null,`isChecked`),l(`, `),r(`code`,null,`null`),l(` for indeterminate), which also manages it internally when unbound (`),r(`code`,null,`defaultChecked`),l(`); changes are emitted with `),r(`code`,null,`@change`),l(`.`)]),r(`li`,null,[l(`The `),r(`code`,null,`isValid`),l(` prop of `),r(`code`,null,`pf-menu-toggle-checkbox`),l(` is replaced by `),r(`code`,null,`invalid`),l(` with inverted behavior.`)]),r(`li`,null,[l(`The `),r(`code`,null,`id`),l(` of `),r(`code`,null,`pf-menu-toggle-checkbox`),l(` goes on the input, rather than being used as its `),r(`code`,null,`name`),l(` and as the `),r(`code`,null,`id`),l(` of the label text. See `),r(`a`,{href:`#/`},`common differences from patternfly-react`),l(`.`)])]),r(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),o(y,{title:`Collapsed toggle`,source:`<pf-menu-toggle :aria-haspopup="false">Collapsed</pf-menu-toggle>`},{intro:t(()=>[...u[3]||=[r(`div`,{class:`markdown pf-v6-c-content`},[r(`p`,null,`A toggle is collapsed until it is selected by a user.`)],-1)]]),default:t(()=>[o(v,{"aria-haspopup":!1},{default:t(()=>[...u[4]||=[l(`Collapsed`,-1)]]),_:1})]),_:1}),o(y,{title:`Expanded toggle`,source:`<pf-menu-toggle :aria-haspopup="false" expanded>Expanded</pf-menu-toggle>`},{intro:t(()=>[...u[5]||=[r(`div`,{class:`markdown pf-v6-c-content`},[r(`p`,null,[l(`When a user selects a toggle, it becomes expanded and is styled with a blue underline. To flag expanded toggles, and apply expanded styling, use the `),r(`code`,null,`expanded`),l(` property, bound with `),r(`code`,null,`v-model:expanded`),l(`.`)])],-1)]]),default:t(()=>[o(v,{"aria-haspopup":!1,expanded:``},{default:t(()=>[...u[6]||=[l(`Expanded`,-1)]]),_:1})]),_:1}),o(y,{title:`Small toggle`,source:`<pf-menu-toggle :aria-haspopup="false" small>Small toggle</pf-menu-toggle>`},{intro:t(()=>[...u[7]||=[r(`div`,{class:`markdown pf-v6-c-content`},[r(`p`,null,[l(`You can pass the `),r(`code`,null,`small`),l(` property to a `),r(`code`,null,`pf-menu-toggle`),l(` to style it as a small toggle, such as within a `),r(`a`,{href:`#/stories/components/breadcrumb`},`breadcrumb`),l(`.`)])],-1)]]),default:t(()=>[o(v,{"aria-haspopup":!1,small:``},{default:t(()=>[...u[8]||=[l(`Small toggle`,-1)]]),_:1})]),_:1}),o(y,{title:`Disabled toggle`,source:`<pf-menu-toggle :aria-haspopup="false" disabled>Disabled</pf-menu-toggle>`},{intro:t(()=>[...u[9]||=[r(`div`,{class:`markdown pf-v6-c-content`},[r(`p`,null,[l(`To disable the selection and expansion of a toggle, use the `),r(`code`,null,`disabled`),l(` property.`)])],-1)]]),default:t(()=>[o(v,{"aria-haspopup":!1,disabled:``},{default:t(()=>[...u[10]||=[l(`Disabled`,-1)]]),_:1})]),_:1}),o(y,{title:`With a badge`,source:`<pf-menu-toggle :aria-haspopup="false">
  Count
  <template #badge>
    <pf-badge>4 selected</pf-badge>
  </template>
</pf-menu-toggle>
<pf-menu-toggle :aria-haspopup="false" variant="plainText">
  <template #badge>
    <pf-badge screen-reader-text="additional items">4</pf-badge>
  </template>
</pf-menu-toggle>`},{intro:t(()=>[...u[11]||=[r(`div`,{class:`markdown pf-v6-c-content`},[r(`p`,null,[l(`To display a count of selected items in a toggle, use the `),r(`code`,null,`badge`),l(` slot. You can also pass in `),r(`code`,null,`variant="plainText"`),l(` for a badge only toggle.`)])],-1)]]),default:t(()=>[o(v,{"aria-haspopup":!1},{badge:t(()=>[o(b,null,{default:t(()=>[...u[12]||=[l(`4 selected`,-1)]]),_:1})]),default:t(()=>[u[13]||=l(` Count `,-1)]),_:1}),o(v,{"aria-haspopup":!1,variant:`plainText`},{badge:t(()=>[o(b,{"screen-reader-text":`additional items`},{default:t(()=>[...u[14]||=[l(`4`,-1)]]),_:1})]),_:1})]),_:1}),o(y,{title:`Settings toggle`,source:`<pf-menu-toggle :aria-haspopup="false" settings>Settings</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle :aria-haspopup="false" settings variant="plain" aria-label="Settings" />`},{intro:t(()=>[...u[15]||=[r(`div`,{class:`markdown pf-v6-c-content`},[r(`p`,null,[l(`To create a "settings" menu toggle that will animate on hover and focus, you can pass the `),r(`code`,null,`settings`),l(` property in. Doing so will override the `),r(`code`,null,`icon`),l(` slot, as a specific icon is used internally for the animations.`)])],-1)]]),default:t(()=>[o(v,{"aria-haspopup":!1,settings:``},{default:t(()=>[...u[16]||=[l(`Settings`,-1)]]),_:1}),u[17]||=l(` `+n(` `)+` `,-1),o(v,{"aria-haspopup":!1,settings:``,variant:`plain`,"aria-label":`Settings`})]),_:1}),o(y,{title:`Custom icons`,source:`<pf-menu-toggle :aria-haspopup="false" variant="primary">
  <template #icon>
    <plus-icon />
  </template>
  Icon
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle :aria-haspopup="false" variant="secondary">
  <template #icon>
    <plus-icon />
  </template>
  Icon
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle :aria-haspopup="false" variant="secondary" disabled>
  <template #icon>
    <plus-icon />
  </template>
  Icon
</pf-menu-toggle>`},{intro:t(()=>[...u[18]||=[r(`div`,{class:`markdown pf-v6-c-content`},[r(`p`,null,[l(`To add a recognizable icon to a menu toggle, use the `),r(`code`,null,`icon`),l(` slot. The following example adds a `),r(`code`,null,`plus-icon`),l(` to the toggle.`)]),r(`p`,null,[l(`For most basic icons, it is recommended to wrap it inside our `),r(`a`,{href:`#/stories/components/icon`},`icon component`),l(`.`)])],-1)]]),default:t(()=>[o(v,{"aria-haspopup":!1,variant:`primary`},{icon:t(()=>[o(i(h))]),default:t(()=>[u[19]||=l(` Icon `,-1)]),_:1}),u[22]||=l(` `+n(` `)+` `,-1),o(v,{"aria-haspopup":!1,variant:`secondary`},{icon:t(()=>[o(i(h))]),default:t(()=>[u[20]||=l(` Icon `,-1)]),_:1}),u[23]||=l(` `+n(` `)+` `,-1),o(v,{"aria-haspopup":!1,variant:`secondary`,disabled:``},{icon:t(()=>[o(i(h))]),default:t(()=>[u[21]||=l(` Icon `,-1)]),_:1})]),_:1}),o(y,{title:`With avatar and text`,source:`<pf-menu-toggle :aria-haspopup="false">
  <template #icon>
    <pf-avatar src="avatar.svg" alt="avatar" size="sm" />
  </template>
  Ned Username
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle :aria-haspopup="false" expanded>
  <template #icon>
    <pf-avatar src="avatar.svg" alt="avatar" size="sm" />
  </template>
  Ned Username
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle :aria-haspopup="false" disabled>
  <template #icon>
    <pf-avatar src="avatar.svg" alt="avatar" size="sm" />
  </template>
  Ned Username
</pf-menu-toggle>`},{intro:t(()=>[...u[24]||=[r(`div`,{class:`markdown pf-v6-c-content`},[r(`p`,null,[l(`You can also pass images into the `),r(`code`,null,`icon`),l(` slot. The following example passes in a `),r(`code`,null,`pf-avatar`),l(`.`)]),r(`p`,null,`This can be used alongside a text label that provides more context for the image.`)],-1)]]),default:t(()=>[o(v,{"aria-haspopup":!1},{icon:t(()=>[o(x,{src:`avatar.svg`,alt:`avatar`,size:`sm`})]),default:t(()=>[u[25]||=l(` Ned Username `,-1)]),_:1}),u[28]||=l(` `+n(` `)+` `,-1),o(v,{"aria-haspopup":!1,expanded:``},{icon:t(()=>[o(x,{src:`avatar.svg`,alt:`avatar`,size:`sm`})]),default:t(()=>[u[26]||=l(` Ned Username `,-1)]),_:1}),u[29]||=l(` `+n(` `)+` `,-1),o(v,{"aria-haspopup":!1,disabled:``},{icon:t(()=>[o(x,{src:`avatar.svg`,alt:`avatar`,size:`sm`})]),default:t(()=>[u[27]||=l(` Ned Username `,-1)]),_:1})]),_:1}),o(y,{title:`Variant styles`,source:`<pf-menu-toggle :aria-haspopup="false" variant="primary">Collapsed</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle :aria-haspopup="false" variant="primary" expanded>Expanded</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle :aria-haspopup="false" variant="primary" disabled>Disabled</pf-menu-toggle>`},{intro:t(()=>[...u[30]||=[r(`div`,{class:`markdown pf-v6-c-content`},[r(`p`,null,[l(`Variant styling can be applied to menu toggles. In the following example, the toggle uses primary styling by passing `),r(`code`,null,`variant="primary"`),l(` into the `),r(`code`,null,`pf-menu-toggle`),l(` component. Additional variant options include "default", "plain", "plainText", "secondary", and "typeahead".`)])],-1)]]),default:t(()=>[o(v,{"aria-haspopup":!1,variant:`primary`},{default:t(()=>[...u[31]||=[l(`Collapsed`,-1)]]),_:1}),u[34]||=l(` `+n(` `)+` `,-1),o(v,{"aria-haspopup":!1,variant:`primary`,expanded:``},{default:t(()=>[...u[32]||=[l(`Expanded`,-1)]]),_:1}),u[35]||=l(` `+n(` `)+` `,-1),o(v,{"aria-haspopup":!1,variant:`primary`,disabled:``},{default:t(()=>[...u[33]||=[l(`Disabled`,-1)]]),_:1})]),_:1}),o(y,{title:`Plain toggle with icon`,source:`<pf-menu-toggle :aria-haspopup="false" variant="plain" aria-label="plain kebab">
  <template #icon>
    <ellipsis-vertical-icon />
  </template>
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle :aria-haspopup="false" variant="plain" expanded aria-label="plain expanded kebab">
  <template #icon>
    <ellipsis-vertical-icon />
  </template>
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle :aria-haspopup="false" variant="plain" disabled aria-label="disabled plain kebab">
  <template #icon>
    <ellipsis-vertical-icon />
  </template>
</pf-menu-toggle>`},{intro:t(()=>[...u[36]||=[r(`div`,{class:`markdown pf-v6-c-content`},[r(`p`,null,[l(`To apply plain styling to a menu toggle with an icon, pass in `),r(`code`,null,`variant="plain"`),l(`. This will remove the default bottom border and caret. You may pass in an `),r(`code`,null,`icon`),l(` slot to serve as the menu toggle; without one, an `),r(`code`,null,`ellipsis-vertical-icon`),l(` is rendered.`)]),r(`p`,null,[l(`If the toggle does not have any visible text content, use the `),r(`code`,null,`aria-label`),l(` attribute to provide an accessible name.`)])],-1)]]),default:t(()=>[o(v,{"aria-haspopup":!1,variant:`plain`,"aria-label":`plain kebab`},{icon:t(()=>[o(i(f))]),_:1}),u[37]||=l(` `+n(` `)+` `,-1),o(v,{"aria-haspopup":!1,variant:`plain`,expanded:``,"aria-label":`plain expanded kebab`},{icon:t(()=>[o(i(f))]),_:1}),u[38]||=l(` `+n(` `)+` `,-1),o(v,{"aria-haspopup":!1,variant:`plain`,disabled:``,"aria-label":`disabled plain kebab`},{icon:t(()=>[o(i(f))]),_:1})]),_:1}),o(y,{title:`Plain circle toggle`,source:`<pf-menu-toggle :aria-haspopup="false" circle variant="plain" aria-label="plain circle kebab">
  <template #icon>
    <ellipsis-vertical-icon />
  </template>
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle :aria-haspopup="false" circle variant="plain" expanded aria-label="plain circle expanded kebab">
  <template #icon>
    <ellipsis-vertical-icon />
  </template>
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle :aria-haspopup="false" circle variant="plain" disabled aria-label="disabled plain circle kebab">
  <template #icon>
    <ellipsis-vertical-icon />
  </template>
</pf-menu-toggle>`},{intro:t(()=>[...u[39]||=[r(`div`,{class:`markdown pf-v6-c-content`},[r(`p`,null,[l(`You can also pass the `),r(`code`,null,`circle`),l(` property to a plain, icon-only toggle to adjust the styling to a complete circular shape, rather than a rounded square.`)])],-1)]]),default:t(()=>[o(v,{"aria-haspopup":!1,circle:``,variant:`plain`,"aria-label":`plain circle kebab`},{icon:t(()=>[o(i(f))]),_:1}),u[40]||=l(` `+n(` `)+` `,-1),o(v,{"aria-haspopup":!1,circle:``,variant:`plain`,expanded:``,"aria-label":`plain circle expanded kebab`},{icon:t(()=>[o(i(f))]),_:1}),u[41]||=l(` `+n(` `)+` `,-1),o(v,{"aria-haspopup":!1,circle:``,variant:`plain`,disabled:``,"aria-label":`disabled plain circle kebab`},{icon:t(()=>[o(i(f))]),_:1})]),_:1}),o(y,{title:`Plain toggle with text label`,source:`<pf-menu-toggle :aria-haspopup="false" variant="plainText" disabled aria-label="Disabled plain menu toggle">
  Disabled
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle :aria-haspopup="false" variant="plainText" aria-label="Plain menu toggle">
  Custom text
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle :aria-haspopup="false" variant="plainText" expanded aria-label="Expanded plain menu toggle">
  Custom text (expanded)
</pf-menu-toggle>`},{intro:t(()=>[...u[42]||=[r(`div`,{class:`markdown pf-v6-c-content`},[r(`p`,null,[l(`To apply plain styling to a menu toggle with a text label, pass in `),r(`code`,null,`variant="plainText"`),l(`. Unlike the "plain" variant, "plainText" adds a caret pointing down in the toggle.`)])],-1)]]),default:t(()=>[o(v,{"aria-haspopup":!1,variant:`plainText`,disabled:``,"aria-label":`Disabled plain menu toggle`},{default:t(()=>[...u[43]||=[l(` Disabled `,-1)]]),_:1}),u[46]||=l(` `+n(` `)+` `,-1),o(v,{"aria-haspopup":!1,variant:`plainText`,"aria-label":`Plain menu toggle`},{default:t(()=>[...u[44]||=[l(` Custom text `,-1)]]),_:1}),u[47]||=l(` `+n(` `)+` `,-1),o(v,{"aria-haspopup":!1,variant:`plainText`,expanded:``,"aria-label":`Expanded plain menu toggle`},{default:t(()=>[...u[45]||=[l(` Custom text (expanded) `,-1)]]),_:1})]),_:1}),o(y,{title:`Split toggle with checkbox`,source:`<pf-menu-toggle aria-label="Menu toggle with checkbox split button">
  <template #split-buttons>
    <pf-menu-toggle-checkbox aria-label="Select all" />
  </template>
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="primary" aria-label="Menu toggle with checkbox split button">
  <template #split-buttons>
    <pf-menu-toggle-checkbox aria-label="Select all" />
  </template>
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="secondary" aria-label="Menu toggle with checkbox split button">
  <template #split-buttons>
    <pf-menu-toggle-checkbox aria-label="Select all" />
  </template>
</pf-menu-toggle>`},{intro:t(()=>[...u[48]||=[r(`div`,{class:`markdown pf-v6-c-content`},[r(`p`,null,`To add a checkbox (or other action/control) to a menu toggle, use a split button.`),r(`p`,null,[l(`A `),r(`code`,null,`pf-menu-toggle`),l(` can be rendered as a split button by filling its `),r(`code`,null,`split-buttons`),l(` slot with the elements to be displayed before the toggle button.`)]),r(`p`,null,[l(`The following example shows a split button with a `),r(`code`,null,`pf-menu-toggle-checkbox`),l(`.`)]),r(`p`,null,`Variant styling can be applied to split button toggles to adjust their appearance for different scenarios. Both "primary" and "secondary" variants can be used with split button toggles.`)],-1)]]),default:t(()=>[o(v,{"aria-label":`Menu toggle with checkbox split button`},{"split-buttons":t(()=>[o(S,{"aria-label":`Select all`})]),_:1}),u[49]||=l(` `+n(` `)+` `,-1),o(v,{variant:`primary`,"aria-label":`Menu toggle with checkbox split button`},{"split-buttons":t(()=>[o(S,{"aria-label":`Select all`})]),_:1}),u[50]||=l(` `+n(` `)+` `,-1),o(v,{variant:`secondary`,"aria-label":`Menu toggle with checkbox split button`},{"split-buttons":t(()=>[o(S,{"aria-label":`Select all`})]),_:1})]),_:1}),o(y,{title:`Split toggle with labeled checkbox`,source:`<pf-menu-toggle aria-label="Menu toggle with checkbox split button and text">
  <template #split-buttons>
    <pf-menu-toggle-checkbox aria-label="Select all">10 selected</pf-menu-toggle-checkbox>
  </template>
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="primary" aria-label="Primary menu toggle with checkbox split button">
  <template #split-buttons>
    <pf-menu-toggle-checkbox aria-label="Select all">10 selected</pf-menu-toggle-checkbox>
  </template>
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="secondary" aria-label="Secondary menu toggle with checkbox split button">
  <template #split-buttons>
    <pf-menu-toggle-checkbox aria-label="Select all">10 selected</pf-menu-toggle-checkbox>
  </template>
</pf-menu-toggle>`},{intro:t(()=>[...u[51]||=[r(`div`,{class:`markdown pf-v6-c-content`},[r(`p`,null,`You can allow users to select a toggle checkbox by clicking either the checkbox or the text label.`),r(`p`,null,[l(`To link a split toggle label to the toggle's checkbox, pass the label to the default slot of the `),r(`code`,null,`pf-menu-toggle-checkbox`),l(` in the `),r(`code`,null,`split-buttons`),l(` slot.`)])],-1)]]),default:t(()=>[o(v,{"aria-label":`Menu toggle with checkbox split button and text`},{"split-buttons":t(()=>[o(S,{"aria-label":`Select all`},{default:t(()=>[...u[52]||=[l(`10 selected`,-1)]]),_:1})]),_:1}),u[55]||=l(` `+n(` `)+` `,-1),o(v,{variant:`primary`,"aria-label":`Primary menu toggle with checkbox split button`},{"split-buttons":t(()=>[o(S,{"aria-label":`Select all`},{default:t(()=>[...u[53]||=[l(`10 selected`,-1)]]),_:1})]),_:1}),u[56]||=l(` `+n(` `)+` `,-1),o(v,{variant:`secondary`,"aria-label":`Secondary menu toggle with checkbox split button`},{"split-buttons":t(()=>[o(S,{"aria-label":`Select all`},{default:t(()=>[...u[54]||=[l(`10 selected`,-1)]]),_:1})]),_:1})]),_:1}),o(y,{title:`Split toggle with checkbox and toggle text`,source:`<pf-menu-toggle aria-label="Menu toggle with checkbox split button and text">
  <template #split-buttons>
    <pf-menu-toggle-checkbox aria-label="Select all" />
  </template>
  10 selected
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="primary" aria-label="Primary menu toggle with checkbox split button">
  <template #split-buttons>
    <pf-menu-toggle-checkbox aria-label="Select all" />
  </template>
  10 selected
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="secondary" aria-label="Secondary menu toggle with checkbox split button">
  <template #split-buttons>
    <pf-menu-toggle-checkbox aria-label="Select all" />
  </template>
  10 selected
</pf-menu-toggle>`},{intro:t(()=>[...u[57]||=[r(`div`,{class:`markdown pf-v6-c-content`},[r(`p`,null,[l(`To link a split toggle label to the toggle button itself, pass the label to the default slot of the `),r(`code`,null,`pf-menu-toggle`),l(`, instead of the `),r(`code`,null,`split-buttons`),l(` slot.`)])],-1)]]),default:t(()=>[o(v,{"aria-label":`Menu toggle with checkbox split button and text`},{"split-buttons":t(()=>[o(S,{"aria-label":`Select all`})]),default:t(()=>[u[58]||=l(` 10 selected `,-1)]),_:1}),u[61]||=l(` `+n(` `)+` `,-1),o(v,{variant:`primary`,"aria-label":`Primary menu toggle with checkbox split button`},{"split-buttons":t(()=>[o(S,{"aria-label":`Select all`})]),default:t(()=>[u[59]||=l(` 10 selected `,-1)]),_:1}),u[62]||=l(` `+n(` `)+` `,-1),o(v,{variant:`secondary`,"aria-label":`Secondary menu toggle with checkbox split button`},{"split-buttons":t(()=>[o(S,{"aria-label":`Select all`})]),default:t(()=>[u[60]||=l(` 10 selected `,-1)]),_:1})]),_:1}),o(y,{title:`Split toggle with action`,source:`<pf-menu-toggle aria-label="Menu toggle with action split button">
  <template #split-buttons>
    <pf-menu-toggle-action aria-label="Action">Action</pf-menu-toggle-action>
  </template>
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="primary" aria-label="Menu toggle with action split button">
  <template #split-buttons>
    <pf-menu-toggle-action aria-label="Action">Action</pf-menu-toggle-action>
  </template>
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="secondary" aria-label="Menu toggle with action split button">
  <template #split-buttons>
    <pf-menu-toggle-action aria-label="Action">Action</pf-menu-toggle-action>
  </template>
</pf-menu-toggle>`},{intro:t(()=>[...u[63]||=[r(`div`,{class:`markdown pf-v6-c-content`},[r(`p`,null,[l(`To add an action to a split button, add a `),r(`code`,null,`pf-menu-toggle-action`),l(` to the `),r(`code`,null,`split-buttons`),l(` slot.`)]),r(`p`,null,`Actions may be used with primary and secondary toggle variants.`)],-1)]]),default:t(()=>[o(v,{"aria-label":`Menu toggle with action split button`},{"split-buttons":t(()=>[o(C,{"aria-label":`Action`},{default:t(()=>[...u[64]||=[l(`Action`,-1)]]),_:1})]),_:1}),u[67]||=l(` `+n(` `)+` `,-1),o(v,{variant:`primary`,"aria-label":`Menu toggle with action split button`},{"split-buttons":t(()=>[o(C,{"aria-label":`Action`},{default:t(()=>[...u[65]||=[l(`Action`,-1)]]),_:1})]),_:1}),u[68]||=l(` `+n(` `)+` `,-1),o(v,{variant:`secondary`,"aria-label":`Menu toggle with action split button`},{"split-buttons":t(()=>[o(C,{"aria-label":`Action`},{default:t(()=>[...u[66]||=[l(`Action`,-1)]]),_:1})]),_:1})]),_:1}),o(y,{title:`Full height toggle`,source:`<div style="height: 80px">
  <pf-menu-toggle :aria-haspopup="false" full-height aria-label="Full height menu toggle">
    Full height
  </pf-menu-toggle>
</div>`},{intro:t(()=>[...u[69]||=[r(`div`,{class:`markdown pf-v6-c-content`},[r(`p`,null,[l(`A full height toggle fills the height of its parent. To flag a full height toggle, use the `),r(`code`,null,`full-height`),l(` property.`)]),r(`p`,null,[l(`In the following example, the toggle fills the size of the "80px" `),r(`code`,null,`<div>`),l(` element that it is within.`)])],-1)]]),default:t(()=>[r(`div`,_,[o(v,{"aria-haspopup":!1,"full-height":``,"aria-label":`Full height menu toggle`},{default:t(()=>[...u[70]||=[l(` Full height `,-1)]]),_:1})])]),_:1}),o(y,{title:`Full width toggle`,source:`<pf-menu-toggle :aria-haspopup="false" full-width aria-label="Full width menu toggle">Full width</pf-menu-toggle>`},{intro:t(()=>[...u[71]||=[r(`div`,{class:`markdown pf-v6-c-content`},[r(`p`,null,[l(`A full width toggle fills the width of its parent. To flag a full width toggle, use the `),r(`code`,null,`full-width`),l(` property.`)]),r(`p`,null,`In the following example, the toggle fills the width of its parent as the window size changes.`)],-1)]]),default:t(()=>[o(v,{"aria-haspopup":!1,"full-width":``,"aria-label":`Full width menu toggle`},{default:t(()=>[...u[72]||=[l(`Full width`,-1)]]),_:1})]),_:1}),o(y,{title:`Toggle in a form`,source:`<pf-menu-toggle :aria-haspopup="false" in-form aria-label="Menu toggle in a form">In form</pf-menu-toggle>`},{intro:t(()=>[...u[73]||=[r(`div`,{class:`markdown pf-v6-c-content`},[r(`p`,null,[l(`When a menu toggle is used inside a form, pass the `),r(`code`,null,`in-form`),l(` property so the toggle receives form-appropriate styling.`)])],-1)]]),default:t(()=>[o(v,{"aria-haspopup":!1,"in-form":``,"aria-label":`Menu toggle in a form`},{default:t(()=>[...u[74]||=[l(`In form`,-1)]]),_:1})]),_:1}),o(y,{title:`Typeahead toggle`,source:`<pf-menu-toggle :aria-haspopup="false" variant="typeahead" full-width aria-label="Typeahead menu toggle">
  <pf-text-input-group plain>
    <pf-text-input-group-main id="typeahead-select-input" v-model="inputValue" autocomplete="off" />

    <pf-text-input-group-utilities>
      <pf-button v-if="inputValue" variant="plain" aria-label="Clear input value" @click="inputValue = ''">
        <template #icon>
          <x-icon />
        </template>
      </pf-button>
    </pf-text-input-group-utilities>
  </pf-text-input-group>
</pf-menu-toggle>`},{intro:t(()=>[...u[75]||=[r(`div`,{class:`markdown pf-v6-c-content`},[r(`p`,null,[l(`To create a typeahead toggle, pass in `),r(`code`,null,`variant="typeahead"`),l(` to the `),r(`code`,null,`pf-menu-toggle`),l(`. Then, pass a `),r(`code`,null,`pf-text-input-group`),l(` component in the default slot of the `),r(`code`,null,`pf-menu-toggle`),l(`.`)]),r(`p`,null,[l(`To create a multiple typeahead toggle, pass a `),r(`code`,null,`pf-text-input-group`),l(` component implemented like the `),r(`a`,{href:`#/stories/components/text-input-group`},`text input group's filter example`),l(` in the default slot of `),r(`code`,null,`pf-menu-toggle`),l(`.`)])],-1)]]),default:t(()=>[o(v,{"aria-haspopup":!1,variant:`typeahead`,"full-width":``,"aria-label":`Typeahead menu toggle`},{default:t(()=>[o(D,{plain:``},{default:t(()=>[o(w,{id:`typeahead-select-input`,modelValue:p.value,"onUpdate:modelValue":u[0]||=e=>p.value=e,autocomplete:`off`},null,8,[`modelValue`]),o(E,null,{default:t(()=>[p.value?(s(),c(T,{key:0,variant:`plain`,"aria-label":`Clear input value`,onClick:u[1]||=e=>p.value=``},{icon:t(()=>[o(i(g))]),_:1})):d(``,!0)]),_:1})]),_:1})]),_:1})]),_:1}),o(y,{title:`Status toggle`,source:`<pf-menu-toggle :aria-haspopup="false" status="success">Success</pf-menu-toggle>
<br>
<br>
<pf-menu-toggle :aria-haspopup="false" status="warning">Warning</pf-menu-toggle>
<pf-helper-text>
  <pf-helper-text-item variant="warning">Warning text that explains the issue.</pf-helper-text-item>
</pf-helper-text>
<br>
<br>
<pf-menu-toggle :aria-haspopup="false" status="danger">Danger</pf-menu-toggle>
<pf-helper-text>
  <pf-helper-text-item variant="error">Danger text that explains the issue.</pf-helper-text-item>
</pf-helper-text>`},{intro:t(()=>[...u[76]||=[r(`div`,{class:`markdown pf-v6-c-content`},[r(`p`,null,[l(`To create a toggle with a status, pass in the `),r(`code`,null,`status`),l(` property to the `),r(`code`,null,`pf-menu-toggle`),l(`. The default icon associated with each status may be overridden by using the `),r(`code`,null,`status-icon`),l(` slot.`)]),r(`p`,null,`When the status value is "warning" or "danger", you must include helper text that conveys what is causing the warning/error.`)],-1)]]),default:t(()=>[o(v,{"aria-haspopup":!1,status:`success`},{default:t(()=>[...u[77]||=[l(`Success`,-1)]]),_:1}),u[82]||=r(`br`,null,null,-1),u[83]||=r(`br`,null,null,-1),o(v,{"aria-haspopup":!1,status:`warning`},{default:t(()=>[...u[78]||=[l(`Warning`,-1)]]),_:1}),o(k,null,{default:t(()=>[o(O,{variant:`warning`},{default:t(()=>[...u[79]||=[l(`Warning text that explains the issue.`,-1)]]),_:1})]),_:1}),u[84]||=r(`br`,null,null,-1),u[85]||=r(`br`,null,null,-1),o(v,{"aria-haspopup":!1,status:`danger`},{default:t(()=>[...u[80]||=[l(`Danger`,-1)]]),_:1}),o(k,null,{default:t(()=>[o(O,{variant:`error`},{default:t(()=>[...u[81]||=[l(`Danger text that explains the issue.`,-1)]]),_:1})]),_:1})]),_:1}),o(y,{title:`Placeholder text in toggle`,source:`<pf-menu-toggle :aria-haspopup="false" placeholder>Placeholder text</pf-menu-toggle>`},{intro:t(()=>[...u[86]||=[r(`div`,{class:`markdown pf-v6-c-content`},[r(`p`,null,[l(`To indicate the toggle contains placeholder text, pass the `),r(`code`,null,`placeholder`),l(` property to the `),r(`code`,null,`pf-menu-toggle`),l(`.`)])],-1)]]),default:t(()=>[o(v,{"aria-haspopup":!1,placeholder:``},{default:t(()=>[...u[87]||=[l(`Placeholder text`,-1)]]),_:1})]),_:1})]),_:1})}}}),[[`__scopeId`,`data-v-fd475098`]]);export{v as default};