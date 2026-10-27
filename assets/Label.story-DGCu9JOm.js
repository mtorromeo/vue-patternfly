import{F as e,G as t,N as n,Nt as r,c as i,d as a,ft as o,g as s,h as c,j as l,l as u,m as d,n as f,nt as p,rt as m}from"./runtime-core.esm-bundler-DKmYt4j6.js";import{B as h,t as g}from"./index-Cl3hMFDe.js";import{t as _}from"./cube-icon-DnZbl0Bs.js";var v=s({__name:`Label.story`,setup(s){let v=[[`grey`,`Grey`],[`blue`,`Blue`],[`green`,`Green`],[`orange`,`Orange`],[`red`,`Red`],[`orangered`,`Orange red`],[`purple`,`Purple`],[`teal`,`Teal`],[`yellow`,`Yellow`]],y=[[`success`,`Success`],[`warning`,`Warning`],[`danger`,`Danger`],[`info`,`Info`],[`custom`,`Custom`]],b=[[`grey`,`Label 1`],[`blue`,`Label 2`],[`green`,`Label 3`],[`orange`,`Label 4`],[`red`,`Label 5`],[`purple`,`Label 6`]],x=[[`Label 1`,`grey`],[`Label 2`,`blue`],[`Label 3`,`green`],[`Label 4`,`orange`],[`Label 5`,`red`]],S=m([...x]),C=m([...x]),w=m(`Editable label`),T=m(`Compact editable label`),E=p([`Editable label`,`Editable label 2`,`Editable label 3`]),D=3,O=p([{id:0,name:`Label 1`,editable:!1},{id:1,name:`Label 2`,editable:!1},{id:2,name:`Label 3`,editable:!0}]);function k(){O.unshift({id:D++,name:`New Label`,editable:!0})}let A=g();function j(e,t){let n=e.target?.closest(`.pf-v6-c-label`);n instanceof HTMLElement&&A.add({title:`${t} "${n.innerText}"`,variant:`info`})}function M(e){j(e,`Clicked close button on`)}function N(e){j(e,`Clicked`)}return(s,p)=>{let m=e(`component-info`),g=e(`pf-label`),x=e(`story-canvas`),D=e(`pf-label-group`),A=e(`doc-page`);return l(),u(A,{name:`Components/Label.story.vue`,title:`Label`},{description:t(()=>[...p[12]||=[d(`The `,-1),i(`b`,null,`label`,-1),d(` component allows users to add specific element captions for user clarity and convenience.`,-1)]]),apidocs:t(()=>[c(m,{name:`PfLabel`,doc:{name:`PfLabel`,exportName:`PfLabel`,displayName:`Label`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`color`,description:`The color of the label outline/fill`,required:!1,type:{name:`union`,elements:[{name:`"blue"`},{name:`"teal"`},{name:`"green"`},{name:`"orange"`},{name:`"purple"`},{name:`"red"`},{name:`"orangered"`},{name:`"grey"`},{name:`"yellow"`}]},defaultValue:{func:!1,value:`'grey'`}},{name:`variant`,description:`Variant of the label.`,required:!1,type:{name:`union`,elements:[{name:`"outline"`},{name:`"filled"`},{name:`"add"`}]},defaultValue:{func:!1,value:`'filled'`}},{name:`status`,description:`Status of the label with a respective icon and color. Overrides the color set by the color property.`,required:!1,type:{name:`union`,elements:[{name:`"success"`},{name:`"warning"`},{name:`"danger"`},{name:`"info"`},{name:`"custom"`}]}},{name:`tooltipPosition`,description:`Position of the tooltip which is displayed if text is truncated`,required:!1,type:{name:`Placement`},defaultValue:{func:!1,value:`'top'`}},{name:`to`,description:`vue-router destination for a label that is a router-link. If present, the label will change to an anchor element.`,required:!1,type:{name:`RouteLocationRaw`}},{name:`href`,description:`Href for a label that is a link. If present, the label will change to an anchor element. This should not be passed in if the onClick prop is also passed in.`,required:!1,type:{name:`string`}},{name:`outline`,description:`Flag for the outline variant, same as variant="outline".`,required:!1,type:{name:`boolean`}},{name:`compact`,description:`Flag indicating the label is compact.`,required:!1,type:{name:`boolean`}},{name:`disabled`,description:`Flag indicating the label is disabled. Works only on clickable labels, so either href, to or onClick must be passed in.`,required:!1,type:{name:`boolean`}},{name:`overflow`,description:`Flag indicating if the label is an overflow label.`,required:!1,type:{name:`boolean`}},{name:`editable`,description:`Flag indicating the label is editable. Click or press enter or space to start editing it.`,required:!1,type:{name:`boolean`}},{name:`editableAttrs`,description:`Additional attributes for the editable label button and text input, like aria-label.`,required:!1,type:{name:`InputHTMLAttributes`}},{name:`textMaxWidth`,description:`The max width of the label before it is truncated. Can be any valid CSS unit, such as '100%', '100px', or '16ch'.`,required:!1,type:{name:`string`}},{name:`closeBtnAriaLabel`,description:`Aria label for close button. Defaults to "Close" followed by the label text.`,required:!1,type:{name:`string`}},{name:`closeBtnAttrs`,description:`Additional attributes for the default close button.`,required:!1,type:{name:`ComponentProps`,elements:[{name:`TSTypeQuery`}]}},{name:`onClose`,description:`Callback for when the close button is clicked. If present, the label will have a close button.`,required:!1,type:{name:`TSFunctionType`}},{name:`onClick`,description:`Callback for when the label is clicked. This should not be passed in if the href or editable props are also passed in.`,required:!1,type:{name:`TSFunctionType`}}],events:[{name:`editComplete`,type:{names:[`union`],elements:[{name:`MouseEvent`},{name:`KeyboardEvent`}]},description:`An editable label completed an edit, with the new text`},{name:`editCancel`,type:{names:[`KeyboardEvent`]},description:`An editable label canceled an edit, with the previous text`}],slots:[{name:`icon`},{name:`default`},{name:`actions`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Label/Label.vue`]}}),c(m,{name:`PfLabelGroup`,doc:{name:`PfLabelGroup`,exportName:`PfLabelGroup`,displayName:`LabelGroup`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`id`,description:`Id of the category label, which labels the list and the close button. Generated when not set.`,required:!1,type:{name:`string`}},{name:`defaultOpen`,description:`Flag for having the label group default to expanded`,required:!1,type:{name:`boolean`}},{name:`closable`,description:`Flag if label group can be closed`,required:!1,type:{name:`boolean`}},{name:`compact`,description:`Flag indicating the labels in the group are compact`,required:!1,type:{name:`boolean`}},{name:`vertical`,description:`Flag to implement a vertical layout`,required:!1,type:{name:`boolean`}},{name:`editable`,description:`Flag indicating contained labels are editable. Allows spacing for a text input after the labels.`,required:!1,type:{name:`boolean`}},{name:`editableTextarea`,description:`Flag indicating the editable label group should be appended with a textarea.`,required:!1,type:{name:`boolean`}},{name:`editableTextareaAttrs`,description:`Additional attributes for the editable textarea.`,required:!1,type:{name:`TextareaHTMLAttributes`}},{name:`category`,description:`Category name text for the label group category.  If this prop is supplied the label group with have a label and category styling applied`,required:!1,type:{name:`string`}},{name:`numLabels`,description:`Set number of labels to show before overflow`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`3`}},{name:`tooltipPosition`,description:`Position of the tooltip which is displayed if the category name text is longer`,required:!1,type:{name:`Placement`},defaultValue:{func:!1,value:`'top'`}},{name:`closeBtnAriaLabel`,description:`Aria label for close button`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`'Close label group'`}},{name:`ariaLabel`,description:`Aria label for label group that does not have a category name`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`'Label group category'`}},{name:`expandedText`,description:`Customizable "Show Less" text string`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`'Show Less'`}},{name:`collapsedText`,description:'Customizable template string. Use variable "${remaining}" for the overflow label count.',required:!1,type:{name:`string`},defaultValue:{func:!1,value:"'${remaining} more'"}}],events:[{name:`click`,type:{names:[`PointerEvent`]}},{name:`overflowLabelClick`,type:{names:[`PointerEvent`]}}],slots:[{name:`default`},{name:`add-label-control`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Label/LabelGroup.vue`]}})]),default:t(()=>[p[60]||=i(`div`,{class:`markdown pf-v6-c-content`},[i(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),i(`ul`,null,[i(`li`,null,[d(`The `),i(`code`,null,`render`),d(` prop is replaced by the `),i(`code`,null,`to`),d(` prop, which renders a vue-router `),i(`code`,null,`router-link`),d(`.`)]),i(`li`,null,[d(`The `),i(`code`,null,`icon`),d(` prop is replaced by the `),i(`code`,null,`icon`),d(` slot, and `),i(`code`,null,`closeBtn`),d(` by the `),i(`code`,null,`actions`),d(` slot.`)]),i(`li`,null,[d(`The `),i(`code`,null,`variant="overflow"`),d(` is replaced by the `),i(`code`,null,`overflow`),d(` prop; `),i(`code`,null,`outline`),d(` is also available as a flag.`)]),i(`li`,null,[d(`The `),i(`code`,null,`editableProps`),d(` and `),i(`code`,null,`closeBtnProps`),d(` props are replaced by `),i(`code`,null,`editable-attrs`),d(` and `),i(`code`,null,`close-btn-attrs`),d(`, and `),i(`code`,null,`onEditComplete`),d(`/`),i(`code`,null,`onEditCancel`),d(` by the `),i(`code`,null,`edit-complete`),d(`/`),i(`code`,null,`edit-cancel`),d(` events.`)]),i(`li`,null,[d(`The `),i(`code`,null,`categoryName`),d(` prop of `),i(`code`,null,`pf-label-group`),d(` is replaced by `),i(`code`,null,`category`),d(`, `),i(`code`,null,`addLabelControl`),d(` by the `),i(`code`,null,`add-label-control`),d(` slot, `),i(`code`,null,`hasEditableTextArea`),d(` by `),i(`code`,null,`editable-textarea`),d(` and `),i(`code`,null,`editableTextAreaProps`),d(` by `),i(`code`,null,`editable-textarea-attrs`),d(`.`)]),i(`li`,null,[i(`code`,null,`pf-label-group`),d(` emits `),i(`code`,null,`overflow-label-click`),d(` when its overflow label is clicked. See `),i(`a`,{href:`#/`},`common differences from patternfly-react`),d(`.`)])]),i(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),c(x,{title:`Filled labels`,source:`<strong>Non-status:</strong>
<br>
<br>

<strong>Status:</strong>
<br>
<br>`},{default:t(()=>[p[17]||=i(`strong`,null,`Non-status:`,-1),p[18]||=i(`br`,null,null,-1),p[19]||=i(`br`,null,null,-1),(l(),a(f,null,n(v,([e,n])=>(l(),a(f,{key:e},[c(g,{color:e},{default:t(()=>[d(r(n),1)]),_:2},1032,[`color`]),c(g,{color:e},{icon:t(()=>[c(o(_))]),default:t(()=>[d(` `+r(n)+` icon `,1)]),_:2},1032,[`color`]),c(g,{color:e,onClose:M},{default:t(()=>[d(r(n)+` removable`,1)]),_:2},1032,[`color`]),c(g,{color:e,onClose:M},{icon:t(()=>[c(o(_))]),default:t(()=>[d(` `+r(n)+` icon removable `,1)]),_:2},1032,[`color`]),c(g,{color:e,href:`#filled`},{default:t(()=>[d(r(n)+` link`,1)]),_:2},1032,[`color`]),c(g,{color:e,href:`#filled`,onClose:M},{default:t(()=>[d(r(n)+` link removable`,1)]),_:2},1032,[`color`]),c(g,{color:e,onClick:N},{default:t(()=>[d(r(n)+` clickable`,1)]),_:2},1032,[`color`]),c(g,{color:e,onClick:N,onClose:M},{default:t(()=>[d(r(n)+` clickable removable`,1)]),_:2},1032,[`color`]),c(g,{color:e,"text-max-width":`16ch`,onClose:M},{icon:t(()=>[c(o(_))]),default:t(()=>[d(` `+r(n)+` label with icon that overflows `,1)]),_:2},1032,[`color`]),c(g,{color:e,disabled:``,href:`#filled`,onClose:M},{icon:t(()=>[c(o(_))]),default:t(()=>[d(` `+r(n)+` link removable (disabled) `,1)]),_:2},1032,[`color`]),c(g,{color:e,disabled:``,onClick:N,onClose:M},{icon:t(()=>[c(o(_))]),default:t(()=>[d(` `+r(n)+` clickable removable (disabled) `,1)]),_:2},1032,[`color`]),p[13]||=i(`br`,null,null,-1),p[14]||=i(`br`,null,null,-1)],64))),64)),p[20]||=i(`strong`,null,`Status:`,-1),p[21]||=i(`br`,null,null,-1),p[22]||=i(`br`,null,null,-1),(l(),a(f,null,n(y,([e,n])=>(l(),a(f,{key:e},[c(g,{status:e},{default:t(()=>[d(r(n),1)]),_:2},1032,[`status`]),c(g,{status:e,onClose:M},{default:t(()=>[d(r(n)+` removable`,1)]),_:2},1032,[`status`]),c(g,{status:e,href:`#filled`},{default:t(()=>[d(r(n)+` link`,1)]),_:2},1032,[`status`]),c(g,{status:e,href:`#filled`,onClose:M},{default:t(()=>[d(r(n)+` link removable`,1)]),_:2},1032,[`status`]),c(g,{status:e,onClick:N},{default:t(()=>[d(r(n)+` clickable`,1)]),_:2},1032,[`status`]),c(g,{status:e,onClick:N,onClose:M},{default:t(()=>[d(r(n)+` clickable removable`,1)]),_:2},1032,[`status`]),c(g,{status:e,"text-max-width":`16ch`,onClose:M},{default:t(()=>[d(r(n)+` label with text that overflows `,1)]),_:2},1032,[`status`]),p[15]||=i(`br`,null,null,-1),p[16]||=i(`br`,null,null,-1)],64))),64))]),_:1}),c(x,{title:`Outlined labels`,source:`<strong>Non-status:</strong>
<br>
<br>

<strong>Status:</strong>
<br>
<br>`},{default:t(()=>[p[27]||=i(`strong`,null,`Non-status:`,-1),p[28]||=i(`br`,null,null,-1),p[29]||=i(`br`,null,null,-1),(l(),a(f,null,n(v,([e,n])=>(l(),a(f,{key:e},[c(g,{variant:`outline`,color:e},{default:t(()=>[d(r(n),1)]),_:2},1032,[`color`]),c(g,{variant:`outline`,color:e},{icon:t(()=>[c(o(_))]),default:t(()=>[d(` `+r(n)+` icon `,1)]),_:2},1032,[`color`]),c(g,{variant:`outline`,color:e,onClose:M},{default:t(()=>[d(r(n)+` removable`,1)]),_:2},1032,[`color`]),c(g,{variant:`outline`,color:e,onClose:M},{icon:t(()=>[c(o(_))]),default:t(()=>[d(` `+r(n)+` icon removable `,1)]),_:2},1032,[`color`]),c(g,{variant:`outline`,color:e,href:`#outline`},{default:t(()=>[d(r(n)+` link`,1)]),_:2},1032,[`color`]),c(g,{variant:`outline`,color:e,href:`#outline`,onClose:M},{default:t(()=>[d(r(n)+` link removable `,1)]),_:2},1032,[`color`]),c(g,{variant:`outline`,color:e,onClick:N},{default:t(()=>[d(r(n)+` clickable`,1)]),_:2},1032,[`color`]),c(g,{variant:`outline`,color:e,onClick:N,onClose:M},{default:t(()=>[d(r(n)+` clickable removable `,1)]),_:2},1032,[`color`]),c(g,{variant:`outline`,color:e,"text-max-width":`16ch`,onClose:M},{icon:t(()=>[c(o(_))]),default:t(()=>[d(` `+r(n)+` label with icon that overflows `,1)]),_:2},1032,[`color`]),c(g,{variant:`outline`,color:e,disabled:``,href:`#outline`,onClose:M},{icon:t(()=>[c(o(_))]),default:t(()=>[d(` `+r(n)+` link removable (disabled) `,1)]),_:2},1032,[`color`]),c(g,{variant:`outline`,color:e,disabled:``,onClick:N,onClose:M},{icon:t(()=>[c(o(_))]),default:t(()=>[d(` `+r(n)+` clickable removable (disabled) `,1)]),_:2},1032,[`color`]),p[23]||=i(`br`,null,null,-1),p[24]||=i(`br`,null,null,-1)],64))),64)),p[30]||=i(`strong`,null,`Status:`,-1),p[31]||=i(`br`,null,null,-1),p[32]||=i(`br`,null,null,-1),(l(),a(f,null,n(y,([e,n])=>(l(),a(f,{key:e},[c(g,{variant:`outline`,status:e},{default:t(()=>[d(r(n),1)]),_:2},1032,[`status`]),c(g,{variant:`outline`,status:e,onClose:M},{default:t(()=>[d(r(n)+` removable`,1)]),_:2},1032,[`status`]),c(g,{variant:`outline`,status:e,href:`#outline`},{default:t(()=>[d(r(n)+` link`,1)]),_:2},1032,[`status`]),c(g,{variant:`outline`,status:e,href:`#outline`,onClose:M},{default:t(()=>[d(r(n)+` link removable `,1)]),_:2},1032,[`status`]),c(g,{variant:`outline`,status:e,onClick:N},{default:t(()=>[d(r(n)+` clickable`,1)]),_:2},1032,[`status`]),c(g,{variant:`outline`,status:e,onClick:N,onClose:M},{default:t(()=>[d(r(n)+` clickable removable `,1)]),_:2},1032,[`status`]),c(g,{variant:`outline`,status:e,"text-max-width":`16ch`,onClose:M},{default:t(()=>[d(r(n)+` label with text that overflows `,1)]),_:2},1032,[`status`]),p[25]||=i(`br`,null,null,-1),p[26]||=i(`br`,null,null,-1)],64))),64))]),_:1}),c(x,{title:`Compact labels`,source:`<pf-label compact>Compact</pf-label>
<pf-label compact>
  <template #icon><cube-icon /></template>
  Compact icon
</pf-label>
<pf-label compact @close="closed">Compact removable</pf-label>
<pf-label compact @close="closed">
  <template #icon><cube-icon /></template>
  Compact icon removable
</pf-label>
<pf-label compact href="#compact">Compact link</pf-label>
<pf-label compact href="#compact" @close="closed">Compact link removable</pf-label>
<pf-label compact @click="clicked">Compact clickable</pf-label>
<pf-label compact @click="clicked" @close="closed">Compact clickable removable</pf-label>
<pf-label compact text-max-width="16ch" @close="closed">
  <template #icon><cube-icon /></template>
  Compact label with icon that overflows
</pf-label>
<pf-label compact disabled href="#compact" @close="closed">
  <template #icon><cube-icon /></template>
  Compact link removable (disabled)
</pf-label>
<pf-label compact disabled @click="clicked" @close="closed">
  <template #icon><cube-icon /></template>
  Compact clickable removable (disabled)
</pf-label>`},{default:t(()=>[c(g,{compact:``},{default:t(()=>[...p[33]||=[d(`Compact`,-1)]]),_:1}),c(g,{compact:``},{icon:t(()=>[c(o(_))]),default:t(()=>[p[34]||=d(` Compact icon `,-1)]),_:1}),c(g,{compact:``,onClose:M},{default:t(()=>[...p[35]||=[d(`Compact removable`,-1)]]),_:1}),c(g,{compact:``,onClose:M},{icon:t(()=>[c(o(_))]),default:t(()=>[p[36]||=d(` Compact icon removable `,-1)]),_:1}),c(g,{compact:``,href:`#compact`},{default:t(()=>[...p[37]||=[d(`Compact link`,-1)]]),_:1}),c(g,{compact:``,href:`#compact`,onClose:M},{default:t(()=>[...p[38]||=[d(`Compact link removable`,-1)]]),_:1}),c(g,{compact:``,onClick:N},{default:t(()=>[...p[39]||=[d(`Compact clickable`,-1)]]),_:1}),c(g,{compact:``,onClick:N,onClose:M},{default:t(()=>[...p[40]||=[d(`Compact clickable removable`,-1)]]),_:1}),c(g,{compact:``,"text-max-width":`16ch`,onClose:M},{icon:t(()=>[c(o(_))]),default:t(()=>[p[41]||=d(` Compact label with icon that overflows `,-1)]),_:1}),c(g,{compact:``,disabled:``,href:`#compact`,onClose:M},{icon:t(()=>[c(o(_))]),default:t(()=>[p[42]||=d(` Compact link removable (disabled) `,-1)]),_:1}),c(g,{compact:``,disabled:``,onClick:N,onClose:M},{icon:t(()=>[c(o(_))]),default:t(()=>[p[43]||=d(` Compact clickable removable (disabled) `,-1)]),_:1})]),_:1}),c(x,{title:`Label with router link`,source:`<pf-label color="blue" to="/" text-max-width="16ch" @close="closed">
  <template #icon><circle-info-icon /></template>
  Blue label router link with icon that overflows
</pf-label>`},{intro:t(()=>[...p[44]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,[d(`Labels may be passed a vue-router destination in the `),i(`code`,null,`to`),d(` prop to render a `),i(`code`,null,`router-link`),d(`, for in-app linking without reloading the page.`)])],-1)]]),default:t(()=>[c(g,{color:`blue`,to:`/`,"text-max-width":`16ch`,onClose:M},{icon:t(()=>[c(o(h))]),default:t(()=>[p[45]||=d(` Blue label router link with icon that overflows `,-1)]),_:1})]),_:1}),c(x,{title:`Editable labels`,source:`<pf-label
  color="blue"
  close-btn-aria-label="Custom close button for editable label"
  editable
  :editable-attrs="{ 'aria-label': \`Editable label with text \${labelText}\`, id: 'editable-label' }"
  @close="closed"
  @edit-complete="(_, text) => (labelText = text)"
  @edit-cancel="(_, text) => (labelText = text)"
>
  {{ labelText }}
</pf-label>
<pf-label
  compact
  close-btn-aria-label="Custom close button for compact editable label"
  editable
  :editable-attrs="{
    'aria-label': \`Editable compact label with text \${compactLabelText}\`,
    id: 'compact-editable-label',
  }"
  @close="closed"
  @edit-complete="(_, text) => (compactLabelText = text)"
  @edit-cancel="(_, text) => (compactLabelText = text)"
>
  {{ compactLabelText }}
</pf-label>`},{intro:t(()=>[...p[46]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,`Click or press either enter or space to begin editing a label. After editing, click outside the label or press enter again to complete the edit. To cancel an edit, press escape.`),i(`p`,null,[d(`You can also customize any label's close button aria-label as this example shows with `),i(`code`,null,`close-btn-aria-label`),d(`.`)])],-1)]]),default:t(()=>[c(g,{color:`blue`,"close-btn-aria-label":`Custom close button for editable label`,editable:``,"editable-attrs":{"aria-label":`Editable label with text ${w.value}`,id:`editable-label`},onClose:M,onEditComplete:p[0]||=(e,t)=>w.value=t,onEditCancel:p[1]||=(e,t)=>w.value=t},{default:t(()=>[d(r(w.value),1)]),_:1},8,[`editable-attrs`]),c(g,{compact:``,"close-btn-aria-label":`Custom close button for compact editable label`,editable:``,"editable-attrs":{"aria-label":`Editable compact label with text ${T.value}`,id:`compact-editable-label`},onClose:M,onEditComplete:p[2]||=(e,t)=>T.value=t,onEditCancel:p[3]||=(e,t)=>T.value=t},{default:t(()=>[d(r(T.value),1)]),_:1},8,[`editable-attrs`])]),_:1}),c(x,{title:`Basic label group`,source:`<pf-label-group>
  <pf-label>
    <template #icon><circle-info-icon /></template>
    Label 1
  </pf-label>
  <pf-label color="blue">
    <template #icon><circle-info-icon /></template>
    Label 2
  </pf-label>
  <pf-label color="green">
    <template #icon><circle-info-icon /></template>
    Label 3
  </pf-label>
</pf-label-group>`},{intro:t(()=>[...p[47]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,`Use a label group when you have multiple labels to display at once.`)],-1)]]),default:t(()=>[c(D,null,{default:t(()=>[c(g,null,{icon:t(()=>[c(o(h))]),default:t(()=>[p[48]||=d(` Label 1 `,-1)]),_:1}),c(g,{color:`blue`},{icon:t(()=>[c(o(h))]),default:t(()=>[p[49]||=d(` Label 2 `,-1)]),_:1}),c(g,{color:`green`},{icon:t(()=>[c(o(h))]),default:t(()=>[p[50]||=d(` Label 3 `,-1)]),_:1})]),_:1})]),_:1}),c(x,{title:`Label group with overflow`,source:`<pf-label-group>
  <pf-label v-for="[color, name] in overflowLabels" :key="name" :color="color">
    <template #icon><circle-info-icon /></template>
    {{ name }}
  </pf-label>
</pf-label-group>`},{intro:t(()=>[...p[51]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,`An overflow label can be added to the end of a group to save space when the number of labels exceeds some threshold. Click the overflow label to expand and collapse the group.`)],-1)]]),default:t(()=>[c(D,null,{default:t(()=>[(l(),a(f,null,n(b,([e,n])=>c(g,{key:n,color:e},{icon:t(()=>[c(o(h))]),default:t(()=>[d(` `+r(n),1)]),_:2},1032,[`color`])),64))]),_:1})]),_:1}),c(x,{title:`Label group with categories`,source:`<pf-label-group category="Group label">
  <pf-label>
    <template #icon><circle-info-icon /></template>
    Label 1
  </pf-label>
  <pf-label color="blue">
    <template #icon><circle-info-icon /></template>
    Label 2
  </pf-label>
  <pf-label color="green">
    <template #icon><circle-info-icon /></template>
    Label 3
  </pf-label>
</pf-label-group>`},{intro:t(()=>[...p[52]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,`Use a category name to organize a set of labels.`)],-1)]]),default:t(()=>[c(D,{category:`Group label`},{default:t(()=>[c(g,null,{icon:t(()=>[c(o(h))]),default:t(()=>[p[53]||=d(` Label 1 `,-1)]),_:1}),c(g,{color:`blue`},{icon:t(()=>[c(o(h))]),default:t(()=>[p[54]||=d(` Label 2 `,-1)]),_:1}),c(g,{color:`green`},{icon:t(()=>[c(o(h))]),default:t(()=>[p[55]||=d(` Label 3 `,-1)]),_:1})]),_:1})]),_:1}),c(x,{title:`Label group with removable categories`,source:`<pf-label-group category="Group label" closable @click="categoryLabels = []">
  <pf-label v-for="[name, color] in categoryLabels" :key="name" :color="color">
    <template #icon><circle-info-icon /></template>
    {{ name }}
  </pf-label>
</pf-label-group>`},{default:t(()=>[c(D,{category:`Group label`,closable:``,onClick:p[4]||=e=>S.value=[]},{default:t(()=>[(l(!0),a(f,null,n(S.value,([e,n])=>(l(),u(g,{key:e,color:n},{icon:t(()=>[c(o(h))]),default:t(()=>[d(` `+r(e),1)]),_:2},1032,[`color`]))),128))]),_:1})]),_:1}),c(x,{title:`Vertical label group`,source:`<pf-label-group category="Group label with a very long name" vertical closable @click="verticalLabels = []">
  <pf-label v-for="[name, color] in verticalLabels" :key="name" :color="color">
    <template #icon><circle-info-icon /></template>
    {{ name }}
  </pf-label>
</pf-label-group>`},{intro:t(()=>[...p[56]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,`Labels in a group can also be stacked vertically. This example shows a vertical label group with a category name and overflow.`)],-1)]]),default:t(()=>[c(D,{category:`Group label with a very long name`,vertical:``,closable:``,onClick:p[5]||=e=>C.value=[]},{default:t(()=>[(l(!0),a(f,null,n(C.value,([e,n])=>(l(),u(g,{key:e,color:n},{icon:t(()=>[c(o(h))]),default:t(()=>[d(` `+r(e),1)]),_:2},1032,[`color`]))),128))]),_:1})]),_:1}),c(x,{title:`Editable label group`,source:`<pf-label-group :num-labels="5" editable>
  <pf-label
    color="blue"
    editable
    :editable-attrs="{ 'aria-label': \`Editable label with text \${editableLabels[0]}\`, id: 'editable-label-1' }"
    @close="closed"
    @edit-complete="(_, text) => (editableLabels[0] = text)"
    @edit-cancel="(_, text) => (editableLabels[0] = text)"
  >
    {{ editableLabels[0] }}
  </pf-label>
  <pf-label color="green">Static label</pf-label>
  <pf-label
    color="blue"
    editable
    :editable-attrs="{ 'aria-label': \`Editable label with text \${editableLabels[1]}\`, id: 'editable-label-2' }"
    @close="closed"
    @edit-complete="(_, text) => (editableLabels[1] = text)"
    @edit-cancel="(_, text) => (editableLabels[1] = text)"
  >
    {{ editableLabels[1] }}
  </pf-label>
  <pf-label
    color="blue"
    editable
    :editable-attrs="{ 'aria-label': \`Editable label with text \${editableLabels[2]}\`, id: 'editable-label-3' }"
    @close="closed"
    @edit-complete="(_, text) => (editableLabels[2] = text)"
    @edit-cancel="(_, text) => (editableLabels[2] = text)"
  >
    {{ editableLabels[2] }}
  </pf-label>
</pf-label-group>`},{default:t(()=>[c(D,{"num-labels":5,editable:``},{default:t(()=>[c(g,{color:`blue`,editable:``,"editable-attrs":{"aria-label":`Editable label with text ${E[0]}`,id:`editable-label-1`},onClose:M,onEditComplete:p[6]||=(e,t)=>E[0]=t,onEditCancel:p[7]||=(e,t)=>E[0]=t},{default:t(()=>[d(r(E[0]),1)]),_:1},8,[`editable-attrs`]),c(g,{color:`green`},{default:t(()=>[...p[57]||=[d(`Static label`,-1)]]),_:1}),c(g,{color:`blue`,editable:``,"editable-attrs":{"aria-label":`Editable label with text ${E[1]}`,id:`editable-label-2`},onClose:M,onEditComplete:p[8]||=(e,t)=>E[1]=t,onEditCancel:p[9]||=(e,t)=>E[1]=t},{default:t(()=>[d(r(E[1]),1)]),_:1},8,[`editable-attrs`]),c(g,{color:`blue`,editable:``,"editable-attrs":{"aria-label":`Editable label with text ${E[2]}`,id:`editable-label-3`},onClose:M,onEditComplete:p[10]||=(e,t)=>E[2]=t,onEditCancel:p[11]||=(e,t)=>E[2]=t},{default:t(()=>[d(r(E[2]),1)]),_:1},8,[`editable-attrs`])]),_:1})]),_:1}),c(x,{title:`Editable label group with add button`,source:`<pf-label-group category="Label group 1" :num-labels="5" editable>
  <pf-label
    v-for="(label, index) in addLabels"
    :key="label.id"
    color="blue"
    :editable="label.editable"
    :editable-attrs="label.editable ? { 'aria-label': \`Editable label with text \${label.name}\` } : undefined"
    @close="addLabels.splice(index, 1)"
    @edit-complete="(_, text) => (label.name = text)"
    @edit-cancel="(_, text) => (label.name = text)"
  >
    {{ label.name }}
  </pf-label>
  <template #add-label-control>
    <pf-label variant="add" @click="addLabel">Add label</pf-label>
  </template>
</pf-label-group>`},{intro:t(()=>[...p[58]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,`The contents of a label group can be modified by removing labels or adding new ones using the add button.`)],-1)]]),default:t(()=>[c(D,{category:`Label group 1`,"num-labels":5,editable:``},{"add-label-control":t(()=>[c(g,{variant:`add`,onClick:k},{default:t(()=>[...p[59]||=[d(`Add label`,-1)]]),_:1})]),default:t(()=>[(l(!0),a(f,null,n(O,(e,n)=>(l(),u(g,{key:e.id,color:`blue`,editable:e.editable,"editable-attrs":e.editable?{"aria-label":`Editable label with text ${e.name}`}:void 0,onClose:e=>O.splice(n,1),onEditComplete:(t,n)=>e.name=n,onEditCancel:(t,n)=>e.name=n},{default:t(()=>[d(r(e.name),1)]),_:2},1032,[`editable`,`editable-attrs`,`onClose`,`onEditComplete`,`onEditCancel`]))),128))]),_:1})]),_:1})]),_:1})}}});export{v as default};