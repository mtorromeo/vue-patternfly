import{N as e,U as t,c as n,h as r,k as i,m as a,p as o,s,st as c}from"./runtime-core.esm-bundler-wvQKcJ7_.js";import{h as l,t as u}from"./index-gkhET_bk.js";var d=r({__name:`Label.story`,setup(r){let d=u();function f(e){let t=e.target?.closest(`.pf-v6-c-label`);t instanceof HTMLElement&&d.add({title:`Clicked close button on "${t.innerText}"`,variant:`info`})}return(r,u)=>{let d=e(`component-info`),p=e(`pf-title`),m=e(`pf-label`),h=e(`story-canvas`),g=e(`pf-label-group`),_=e(`doc-page`);return i(),n(_,{name:`Components/Label.story.vue`,title:`Label`},{description:t(()=>[...u[0]||=[o(`The `,-1),s(`b`,null,`label`,-1),o(` component allows users to add specific element captions for user clarity and convenience.`,-1)]]),apidocs:t(()=>[a(d,{name:`PfLabel`,doc:{name:`PfLabel`,exportName:`PfLabel`,displayName:`Label`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`color`,description:`The color of the label outline/fill`,required:!1,type:{name:`union`,elements:[{name:`"blue"`},{name:`"teal"`},{name:`"green"`},{name:`"orange"`},{name:`"purple"`},{name:`"red"`},{name:`"orangered"`},{name:`"grey"`},{name:`"yellow"`}]},defaultValue:{func:!1,value:`'grey'`}},{name:`variant`,description:`Variant of the label.`,required:!1,type:{name:`union`,elements:[{name:`"outline"`},{name:`"filled"`},{name:`"add"`}]},defaultValue:{func:!1,value:`'filled'`}},{name:`status`,description:`Status of the label with a respective icon and color. Overrides the color set by the color property.`,required:!1,type:{name:`union`,elements:[{name:`"success"`},{name:`"warning"`},{name:`"danger"`},{name:`"info"`},{name:`"custom"`}]}},{name:`tooltipPosition`,description:`Position of the tooltip which is displayed if text is truncated`,required:!1,type:{name:`Placement`},defaultValue:{func:!1,value:`'top'`}},{name:`to`,description:`vue-router destination for a label that is a router-link. If present, the label will change to an anchor element.`,required:!1,type:{name:`RouteLocationRaw`}},{name:`href`,description:`Href for a label that is a link. If present, the label will change to an anchor element. This should not be passed in if the onClick prop is also passed in.`,required:!1,type:{name:`string`}},{name:`outline`,required:!1,type:{name:`boolean`}},{name:`compact`,description:`Flag indicating the label is compact.`,required:!1,type:{name:`boolean`}},{name:`disabled`,description:`Flag indicating the label is disabled. Applies to clickable and link labels, and to the close button.`,required:!1,type:{name:`boolean`}},{name:`overflow`,description:`Flag indicating if the label is an overflow label.`,required:!1,type:{name:`boolean`}},{name:`textMaxWidth`,description:`The max width of the label before it is truncated. Can be any valid CSS unit, such as '100%', '100px', or '16ch'.`,required:!1,type:{name:`string`}},{name:`closeBtnAriaLabel`,description:`Aria label for close button`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`'Close'`}},{name:`onClose`,description:`Callback for when the label is clicked. This should not be passed in if the href or editable props are also passed in.`,required:!1,type:{name:`TSFunctionType`}},{name:`onClick`,description:`Callback for when the label is clicked. This should not be passed in if the href or isEditable props are also passed in.`,required:!1,type:{name:`TSFunctionType`}}],events:[],slots:[{name:`icon`},{name:`default`},{name:`actions`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Label/Label.vue`]}})]),default:t(()=>[a(h,{title:`Filled labels`,source:`<pf-title h="4">Non-status:</pf-title>
<br>

<pf-label>Grey</pf-label>
<pf-label>
  <template #icon>
    <circle-info-icon />
  </template>Grey icon
</pf-label>
<pf-label @close="alert">Grey removeable</pf-label>
<pf-label @close="alert">
  <template #icon>
    <circle-info-icon />
  </template>
  Grey icon removeable
</pf-label>
<pf-label href="#filled">Grey link</pf-label>
<pf-label href="#filled" @close="alert">Grey link removeable</pf-label>
<pf-label text-max-width="16ch" @close="alert">
  <template #icon>
    <circle-info-icon />
  </template>
  Grey label with icon that overflows
</pf-label>
<br>
<br>
<pf-label color="blue">Blue</pf-label>
<pf-label color="blue">
  <template #icon>
    <circle-info-icon />
  </template>
  Blue icon
</pf-label>
<pf-label color="blue" @close="alert">Blue removeable</pf-label>
<pf-label color="blue" @close="alert">
  <template #icon>
    <circle-info-icon />
  </template>
  Blue icon removeable
</pf-label>
<pf-label color="blue" href="#filled">Blue link</pf-label>
<pf-label color="blue" href="#filled" @close="alert">Blue link removeable</pf-label>
<pf-label color="blue" text-max-width="16ch" @close="alert">
  <template #icon>
    <circle-info-icon />
  </template>
  Blue label with icon that overflows
</pf-label>
<br>
<br>
<pf-label color="green">Green</pf-label>
<pf-label color="green">
  <template #icon>
    <circle-info-icon />
  </template>
  Green icon
</pf-label>
<pf-label color="green" @close="alert">Green removeable</pf-label>
<pf-label color="green" @close="alert">
  <template #icon>
    <circle-info-icon />
  </template>
  Green icon removeable
</pf-label>
<pf-label color="green" href="#filled">Green link</pf-label>
<pf-label color="green" href="#filled" @close="alert">Green link removeable</pf-label>
<pf-label color="green" text-max-width="16ch" @close="alert">
  <template #icon>
    <circle-info-icon />
  </template>
  Green label with icon that overflows
</pf-label>
<br>
<br>
<pf-label color="orange">Orange</pf-label>
<pf-label color="orange">
  <template #icon>
    <circle-info-icon />
  </template>
  Orange icon
</pf-label>
<pf-label color="orange" @close="alert">Orange removeable</pf-label>
<pf-label color="orange" @close="alert">
  <template #icon>
    <circle-info-icon />
  </template>
  Orange icon removeable
</pf-label>
<pf-label color="orange" href="#filled">Orange link</pf-label>
<pf-label color="orange" href="#filled" @close="alert">Orange link removeable</pf-label>
<pf-label color="orange" text-max-width="16ch" @close="alert">
  <template #icon>
    <circle-info-icon />
  </template>
  Orange label with icon that overflows
</pf-label>
<br>
<br>
<pf-label color="red">Red</pf-label>
<pf-label color="red">
  <template #icon>
    <circle-info-icon />
  </template>
  Red icon
</pf-label>
<pf-label color="red" @close="alert">Red removeable</pf-label>
<pf-label color="red" @close="alert">
  <template #icon>
    <circle-info-icon />
  </template>
  Red icon removeable
</pf-label>
<pf-label color="red" href="#filled">Red link</pf-label>
<pf-label color="red" href="#filled" @close="alert">Red link removeable</pf-label>
<pf-label color="red" text-max-width="16ch" @close="alert">
  <template #icon>
    <circle-info-icon />
  </template>
  Red label with icon that overflows
</pf-label>
<br>
<br>
<pf-label color="purple">Purple</pf-label>
<pf-label color="purple">
  <template #icon>
    <circle-info-icon />
  </template>
  Purple icon
</pf-label>
<pf-label color="purple" @close="alert">Purple removeable</pf-label>
<pf-label color="purple" @close="alert">
  <template #icon>
    <circle-info-icon />
  </template>
  Purple icon removeable
</pf-label>
<pf-label color="purple" href="#filled">Purple link</pf-label>
<pf-label color="purple" href="#filled" @close="alert">Purple link removeable</pf-label>
<pf-label color="purple" text-max-width="16ch" @close="alert">
  <template #icon>
    <circle-info-icon />
  </template>
  Purple label with icon that overflows
</pf-label>
<br>
<br>
<pf-label color="teal">Teal</pf-label>
<pf-label color="teal">
  <template #icon>
    <circle-info-icon />
  </template>
  Teal icon
</pf-label>
<pf-label color="teal" @close="alert">Teal removeable</pf-label>
<pf-label color="teal" @close="alert">
  <template #icon>
    <circle-info-icon />
  </template>
  Teal icon removeable
</pf-label>
<pf-label color="teal" href="#filled">Teal link</pf-label>
<pf-label color="teal" href="#filled" @close="alert">Teal link removeable</pf-label>
<pf-label color="teal" text-max-width="16ch" @close="alert">
  <template #icon>
    <circle-info-icon />
  </template>
  Teal label with icon that overflows
</pf-label>
<br>
<br>
<pf-label color="yellow">Yellow</pf-label>
<pf-label color="yellow">
  <template #icon>
    <circle-info-icon />
  </template>
  Yellow icon
</pf-label>
<pf-label color="yellow" @close="alert">Yellow removeable</pf-label>
<pf-label color="yellow" @close="alert">
  <template #icon>
    <circle-info-icon />
  </template>
  Yellow icon removeable
</pf-label>
<pf-label color="yellow" href="#filled">Yellow link</pf-label>
<pf-label color="yellow" href="#filled" @close="alert">Yellow link removeable</pf-label>
<pf-label color="yellow" text-max-width="16ch" @close="alert">
  <template #icon>
    <circle-info-icon />
  </template>
  Yellow label with icon that overflows
</pf-label>
<br>
<br>

<pf-title h="4">Status:</pf-title>
<br>

<pf-label status="success">Success</pf-label>
<pf-label status="success" @close="alert">Success removeable</pf-label>
<pf-label status="success" href="#filled">Success link</pf-label>
<pf-label status="success" href="#filled" @close="alert">Success link removeable</pf-label>
<pf-label status="success" text-max-width="16ch" @close="alert">
  Success label with text that overflows
</pf-label>
<br>
<br>

<pf-label status="warning">Warning</pf-label>
<pf-label status="warning" @close="alert">Warning removeable</pf-label>
<pf-label status="warning" href="#filled">Warning link</pf-label>
<pf-label status="warning" href="#filled" @close="alert">Warning link removeable</pf-label>
<pf-label status="warning" text-max-width="16ch" @close="alert">
  Warning label with text that overflows
</pf-label>
<br>
<br>

<pf-label status="danger">Danger</pf-label>
<pf-label status="danger" @close="alert">Danger removeable</pf-label>
<pf-label status="danger" href="#filled">Danger link</pf-label>
<pf-label status="danger" href="#filled" @close="alert">Danger link removeable</pf-label>
<pf-label status="danger" text-max-width="16ch" @close="alert">
  Danger label with text that overflows
</pf-label>
<br>
<br>

<pf-label status="info">Info</pf-label>
<pf-label status="info" @close="alert">Info removeable</pf-label>
<pf-label status="info" href="#filled">Info link</pf-label>
<pf-label status="info" href="#filled" @close="alert">Info link removeable</pf-label>
<pf-label status="info" text-max-width="16ch" @close="alert">
  Info label with text that overflows
</pf-label>
<br>
<br>

<pf-label status="custom">Custom</pf-label>
<pf-label status="custom" @close="alert">Custom removeable</pf-label>
<pf-label status="custom" href="#filled">Custom link</pf-label>
<pf-label status="custom" href="#filled" @close="alert">Custom link removeable</pf-label>
<pf-label status="custom" text-max-width="16ch" @close="alert">
  Custom label with text that overflows
</pf-label>`},{default:t(()=>[a(p,{h:`4`},{default:t(()=>[...u[1]||=[o(`Non-status:`,-1)]]),_:1}),u[84]||=s(`br`,null,null,-1),a(m,null,{default:t(()=>[...u[2]||=[o(`Grey`,-1)]]),_:1}),a(m,null,{icon:t(()=>[a(c(l))]),default:t(()=>[u[3]||=o(`Grey icon `,-1)]),_:1}),a(m,{onClose:f},{default:t(()=>[...u[4]||=[o(`Grey removeable`,-1)]]),_:1}),a(m,{onClose:f},{icon:t(()=>[a(c(l))]),default:t(()=>[u[5]||=o(` Grey icon removeable `,-1)]),_:1}),a(m,{href:`#filled`},{default:t(()=>[...u[6]||=[o(`Grey link`,-1)]]),_:1}),a(m,{href:`#filled`,onClose:f},{default:t(()=>[...u[7]||=[o(`Grey link removeable`,-1)]]),_:1}),a(m,{"text-max-width":`16ch`,onClose:f},{icon:t(()=>[a(c(l))]),default:t(()=>[u[8]||=o(` Grey label with icon that overflows `,-1)]),_:1}),u[85]||=s(`br`,null,null,-1),u[86]||=s(`br`,null,null,-1),a(m,{color:`blue`},{default:t(()=>[...u[9]||=[o(`Blue`,-1)]]),_:1}),a(m,{color:`blue`},{icon:t(()=>[a(c(l))]),default:t(()=>[u[10]||=o(` Blue icon `,-1)]),_:1}),a(m,{color:`blue`,onClose:f},{default:t(()=>[...u[11]||=[o(`Blue removeable`,-1)]]),_:1}),a(m,{color:`blue`,onClose:f},{icon:t(()=>[a(c(l))]),default:t(()=>[u[12]||=o(` Blue icon removeable `,-1)]),_:1}),a(m,{color:`blue`,href:`#filled`},{default:t(()=>[...u[13]||=[o(`Blue link`,-1)]]),_:1}),a(m,{color:`blue`,href:`#filled`,onClose:f},{default:t(()=>[...u[14]||=[o(`Blue link removeable`,-1)]]),_:1}),a(m,{color:`blue`,"text-max-width":`16ch`,onClose:f},{icon:t(()=>[a(c(l))]),default:t(()=>[u[15]||=o(` Blue label with icon that overflows `,-1)]),_:1}),u[87]||=s(`br`,null,null,-1),u[88]||=s(`br`,null,null,-1),a(m,{color:`green`},{default:t(()=>[...u[16]||=[o(`Green`,-1)]]),_:1}),a(m,{color:`green`},{icon:t(()=>[a(c(l))]),default:t(()=>[u[17]||=o(` Green icon `,-1)]),_:1}),a(m,{color:`green`,onClose:f},{default:t(()=>[...u[18]||=[o(`Green removeable`,-1)]]),_:1}),a(m,{color:`green`,onClose:f},{icon:t(()=>[a(c(l))]),default:t(()=>[u[19]||=o(` Green icon removeable `,-1)]),_:1}),a(m,{color:`green`,href:`#filled`},{default:t(()=>[...u[20]||=[o(`Green link`,-1)]]),_:1}),a(m,{color:`green`,href:`#filled`,onClose:f},{default:t(()=>[...u[21]||=[o(`Green link removeable`,-1)]]),_:1}),a(m,{color:`green`,"text-max-width":`16ch`,onClose:f},{icon:t(()=>[a(c(l))]),default:t(()=>[u[22]||=o(` Green label with icon that overflows `,-1)]),_:1}),u[89]||=s(`br`,null,null,-1),u[90]||=s(`br`,null,null,-1),a(m,{color:`orange`},{default:t(()=>[...u[23]||=[o(`Orange`,-1)]]),_:1}),a(m,{color:`orange`},{icon:t(()=>[a(c(l))]),default:t(()=>[u[24]||=o(` Orange icon `,-1)]),_:1}),a(m,{color:`orange`,onClose:f},{default:t(()=>[...u[25]||=[o(`Orange removeable`,-1)]]),_:1}),a(m,{color:`orange`,onClose:f},{icon:t(()=>[a(c(l))]),default:t(()=>[u[26]||=o(` Orange icon removeable `,-1)]),_:1}),a(m,{color:`orange`,href:`#filled`},{default:t(()=>[...u[27]||=[o(`Orange link`,-1)]]),_:1}),a(m,{color:`orange`,href:`#filled`,onClose:f},{default:t(()=>[...u[28]||=[o(`Orange link removeable`,-1)]]),_:1}),a(m,{color:`orange`,"text-max-width":`16ch`,onClose:f},{icon:t(()=>[a(c(l))]),default:t(()=>[u[29]||=o(` Orange label with icon that overflows `,-1)]),_:1}),u[91]||=s(`br`,null,null,-1),u[92]||=s(`br`,null,null,-1),a(m,{color:`red`},{default:t(()=>[...u[30]||=[o(`Red`,-1)]]),_:1}),a(m,{color:`red`},{icon:t(()=>[a(c(l))]),default:t(()=>[u[31]||=o(` Red icon `,-1)]),_:1}),a(m,{color:`red`,onClose:f},{default:t(()=>[...u[32]||=[o(`Red removeable`,-1)]]),_:1}),a(m,{color:`red`,onClose:f},{icon:t(()=>[a(c(l))]),default:t(()=>[u[33]||=o(` Red icon removeable `,-1)]),_:1}),a(m,{color:`red`,href:`#filled`},{default:t(()=>[...u[34]||=[o(`Red link`,-1)]]),_:1}),a(m,{color:`red`,href:`#filled`,onClose:f},{default:t(()=>[...u[35]||=[o(`Red link removeable`,-1)]]),_:1}),a(m,{color:`red`,"text-max-width":`16ch`,onClose:f},{icon:t(()=>[a(c(l))]),default:t(()=>[u[36]||=o(` Red label with icon that overflows `,-1)]),_:1}),u[93]||=s(`br`,null,null,-1),u[94]||=s(`br`,null,null,-1),a(m,{color:`purple`},{default:t(()=>[...u[37]||=[o(`Purple`,-1)]]),_:1}),a(m,{color:`purple`},{icon:t(()=>[a(c(l))]),default:t(()=>[u[38]||=o(` Purple icon `,-1)]),_:1}),a(m,{color:`purple`,onClose:f},{default:t(()=>[...u[39]||=[o(`Purple removeable`,-1)]]),_:1}),a(m,{color:`purple`,onClose:f},{icon:t(()=>[a(c(l))]),default:t(()=>[u[40]||=o(` Purple icon removeable `,-1)]),_:1}),a(m,{color:`purple`,href:`#filled`},{default:t(()=>[...u[41]||=[o(`Purple link`,-1)]]),_:1}),a(m,{color:`purple`,href:`#filled`,onClose:f},{default:t(()=>[...u[42]||=[o(`Purple link removeable`,-1)]]),_:1}),a(m,{color:`purple`,"text-max-width":`16ch`,onClose:f},{icon:t(()=>[a(c(l))]),default:t(()=>[u[43]||=o(` Purple label with icon that overflows `,-1)]),_:1}),u[95]||=s(`br`,null,null,-1),u[96]||=s(`br`,null,null,-1),a(m,{color:`teal`},{default:t(()=>[...u[44]||=[o(`Teal`,-1)]]),_:1}),a(m,{color:`teal`},{icon:t(()=>[a(c(l))]),default:t(()=>[u[45]||=o(` Teal icon `,-1)]),_:1}),a(m,{color:`teal`,onClose:f},{default:t(()=>[...u[46]||=[o(`Teal removeable`,-1)]]),_:1}),a(m,{color:`teal`,onClose:f},{icon:t(()=>[a(c(l))]),default:t(()=>[u[47]||=o(` Teal icon removeable `,-1)]),_:1}),a(m,{color:`teal`,href:`#filled`},{default:t(()=>[...u[48]||=[o(`Teal link`,-1)]]),_:1}),a(m,{color:`teal`,href:`#filled`,onClose:f},{default:t(()=>[...u[49]||=[o(`Teal link removeable`,-1)]]),_:1}),a(m,{color:`teal`,"text-max-width":`16ch`,onClose:f},{icon:t(()=>[a(c(l))]),default:t(()=>[u[50]||=o(` Teal label with icon that overflows `,-1)]),_:1}),u[97]||=s(`br`,null,null,-1),u[98]||=s(`br`,null,null,-1),a(m,{color:`yellow`},{default:t(()=>[...u[51]||=[o(`Yellow`,-1)]]),_:1}),a(m,{color:`yellow`},{icon:t(()=>[a(c(l))]),default:t(()=>[u[52]||=o(` Yellow icon `,-1)]),_:1}),a(m,{color:`yellow`,onClose:f},{default:t(()=>[...u[53]||=[o(`Yellow removeable`,-1)]]),_:1}),a(m,{color:`yellow`,onClose:f},{icon:t(()=>[a(c(l))]),default:t(()=>[u[54]||=o(` Yellow icon removeable `,-1)]),_:1}),a(m,{color:`yellow`,href:`#filled`},{default:t(()=>[...u[55]||=[o(`Yellow link`,-1)]]),_:1}),a(m,{color:`yellow`,href:`#filled`,onClose:f},{default:t(()=>[...u[56]||=[o(`Yellow link removeable`,-1)]]),_:1}),a(m,{color:`yellow`,"text-max-width":`16ch`,onClose:f},{icon:t(()=>[a(c(l))]),default:t(()=>[u[57]||=o(` Yellow label with icon that overflows `,-1)]),_:1}),u[99]||=s(`br`,null,null,-1),u[100]||=s(`br`,null,null,-1),a(p,{h:`4`},{default:t(()=>[...u[58]||=[o(`Status:`,-1)]]),_:1}),u[101]||=s(`br`,null,null,-1),a(m,{status:`success`},{default:t(()=>[...u[59]||=[o(`Success`,-1)]]),_:1}),a(m,{status:`success`,onClose:f},{default:t(()=>[...u[60]||=[o(`Success removeable`,-1)]]),_:1}),a(m,{status:`success`,href:`#filled`},{default:t(()=>[...u[61]||=[o(`Success link`,-1)]]),_:1}),a(m,{status:`success`,href:`#filled`,onClose:f},{default:t(()=>[...u[62]||=[o(`Success link removeable`,-1)]]),_:1}),a(m,{status:`success`,"text-max-width":`16ch`,onClose:f},{default:t(()=>[...u[63]||=[o(` Success label with text that overflows `,-1)]]),_:1}),u[102]||=s(`br`,null,null,-1),u[103]||=s(`br`,null,null,-1),a(m,{status:`warning`},{default:t(()=>[...u[64]||=[o(`Warning`,-1)]]),_:1}),a(m,{status:`warning`,onClose:f},{default:t(()=>[...u[65]||=[o(`Warning removeable`,-1)]]),_:1}),a(m,{status:`warning`,href:`#filled`},{default:t(()=>[...u[66]||=[o(`Warning link`,-1)]]),_:1}),a(m,{status:`warning`,href:`#filled`,onClose:f},{default:t(()=>[...u[67]||=[o(`Warning link removeable`,-1)]]),_:1}),a(m,{status:`warning`,"text-max-width":`16ch`,onClose:f},{default:t(()=>[...u[68]||=[o(` Warning label with text that overflows `,-1)]]),_:1}),u[104]||=s(`br`,null,null,-1),u[105]||=s(`br`,null,null,-1),a(m,{status:`danger`},{default:t(()=>[...u[69]||=[o(`Danger`,-1)]]),_:1}),a(m,{status:`danger`,onClose:f},{default:t(()=>[...u[70]||=[o(`Danger removeable`,-1)]]),_:1}),a(m,{status:`danger`,href:`#filled`},{default:t(()=>[...u[71]||=[o(`Danger link`,-1)]]),_:1}),a(m,{status:`danger`,href:`#filled`,onClose:f},{default:t(()=>[...u[72]||=[o(`Danger link removeable`,-1)]]),_:1}),a(m,{status:`danger`,"text-max-width":`16ch`,onClose:f},{default:t(()=>[...u[73]||=[o(` Danger label with text that overflows `,-1)]]),_:1}),u[106]||=s(`br`,null,null,-1),u[107]||=s(`br`,null,null,-1),a(m,{status:`info`},{default:t(()=>[...u[74]||=[o(`Info`,-1)]]),_:1}),a(m,{status:`info`,onClose:f},{default:t(()=>[...u[75]||=[o(`Info removeable`,-1)]]),_:1}),a(m,{status:`info`,href:`#filled`},{default:t(()=>[...u[76]||=[o(`Info link`,-1)]]),_:1}),a(m,{status:`info`,href:`#filled`,onClose:f},{default:t(()=>[...u[77]||=[o(`Info link removeable`,-1)]]),_:1}),a(m,{status:`info`,"text-max-width":`16ch`,onClose:f},{default:t(()=>[...u[78]||=[o(` Info label with text that overflows `,-1)]]),_:1}),u[108]||=s(`br`,null,null,-1),u[109]||=s(`br`,null,null,-1),a(m,{status:`custom`},{default:t(()=>[...u[79]||=[o(`Custom`,-1)]]),_:1}),a(m,{status:`custom`,onClose:f},{default:t(()=>[...u[80]||=[o(`Custom removeable`,-1)]]),_:1}),a(m,{status:`custom`,href:`#filled`},{default:t(()=>[...u[81]||=[o(`Custom link`,-1)]]),_:1}),a(m,{status:`custom`,href:`#filled`,onClose:f},{default:t(()=>[...u[82]||=[o(`Custom link removeable`,-1)]]),_:1}),a(m,{status:`custom`,"text-max-width":`16ch`,onClose:f},{default:t(()=>[...u[83]||=[o(` Custom label with text that overflows `,-1)]]),_:1})]),_:1}),a(h,{title:`Outline labels`,source:`<pf-title h="4">Non-status:</pf-title>
<br>

<pf-label outline>Grey</pf-label>
<pf-label outline>
  <template #icon>
    <circle-info-icon />
  </template>Grey icon
</pf-label>
<pf-label outline @close="alert">Grey removeable</pf-label>
<pf-label outline @close="alert">
  <template #icon>
    <circle-info-icon />
  </template>
  Grey icon removeable
</pf-label>
<pf-label outline href="#filled">Grey link</pf-label>
<pf-label outline href="#filled" @close="alert">Grey link removeable</pf-label>
<pf-label outline text-max-width="16ch" @close="alert">
  <template #icon>
    <circle-info-icon />
  </template>
  Grey label with icon that overflows
</pf-label>
<br>
<br>
<pf-label outline color="blue">Blue</pf-label>
<pf-label outline color="blue">
  <template #icon>
    <circle-info-icon />
  </template>
  Blue icon
</pf-label>
<pf-label outline color="blue" @close="alert">Blue removeable</pf-label>
<pf-label outline color="blue" @close="alert">
  <template #icon>
    <circle-info-icon />
  </template>
  Blue icon removeable
</pf-label>
<pf-label outline color="blue" href="#filled">Blue link</pf-label>
<pf-label outline color="blue" href="#filled" @close="alert">Blue link removeable</pf-label>
<pf-label outline color="blue" text-max-width="16ch" @close="alert">
  <template #icon>
    <circle-info-icon />
  </template>
  Blue label with icon that overflows
</pf-label>
<br>
<br>
<pf-label outline color="green">Green</pf-label>
<pf-label outline color="green">
  <template #icon>
    <circle-info-icon />
  </template>
  Green icon
</pf-label>
<pf-label outline color="green" @close="alert">Green removeable</pf-label>
<pf-label outline color="green" @close="alert">
  <template #icon>
    <circle-info-icon />
  </template>
  Green icon removeable
</pf-label>
<pf-label outline color="green" href="#filled">Green link</pf-label>
<pf-label outline color="green" href="#filled" @close="alert">Green link removeable</pf-label>
<pf-label outline color="green" text-max-width="16ch" @close="alert">
  <template #icon>
    <circle-info-icon />
  </template>
  Green label with icon that overflows
</pf-label>
<br>
<br>
<pf-label outline color="orange">Orange</pf-label>
<pf-label outline color="orange">
  <template #icon>
    <circle-info-icon />
  </template>
  Orange icon
</pf-label>
<pf-label outline color="orange" @close="alert">Orange removeable</pf-label>
<pf-label outline color="orange" @close="alert">
  <template #icon>
    <circle-info-icon />
  </template>
  Orange icon removeable
</pf-label>
<pf-label outline color="orange" href="#filled">Orange link</pf-label>
<pf-label outline color="orange" href="#filled" @close="alert">Orange link removeable</pf-label>
<pf-label outline color="orange" text-max-width="16ch" @close="alert">
  <template #icon>
    <circle-info-icon />
  </template>
  Orange label with icon that overflows
</pf-label>
<br>
<br>
<pf-label outline color="red">Red</pf-label>
<pf-label outline color="red">
  <template #icon>
    <circle-info-icon />
  </template>
  Red icon
</pf-label>
<pf-label outline color="red" @close="alert">Red removeable</pf-label>
<pf-label outline color="red" @close="alert">
  <template #icon>
    <circle-info-icon />
  </template>
  Red icon removeable
</pf-label>
<pf-label outline color="red" href="#filled">Red link</pf-label>
<pf-label outline color="red" href="#filled" @close="alert">Red link removeable</pf-label>
<pf-label outline color="red" text-max-width="16ch" @close="alert">
  <template #icon>
    <circle-info-icon />
  </template>
  Red label with icon that overflows
</pf-label>
<br>
<br>
<pf-label outline color="purple">Purple</pf-label>
<pf-label outline color="purple">
  <template #icon>
    <circle-info-icon />
  </template>
  Purple icon
</pf-label>
<pf-label outline color="purple" @close="alert">Purple removeable</pf-label>
<pf-label outline color="purple" @close="alert">
  <template #icon>
    <circle-info-icon />
  </template>
  Purple icon removeable
</pf-label>
<pf-label outline color="purple" href="#filled">Purple link</pf-label>
<pf-label outline color="purple" href="#filled" @close="alert">Purple link removeable</pf-label>
<pf-label outline color="purple" text-max-width="16ch" @close="alert">
  <template #icon>
    <circle-info-icon />
  </template>
  Purple label with icon that overflows
</pf-label>
<br>
<br>
<pf-label outline color="teal">Teal</pf-label>
<pf-label outline color="teal">
  <template #icon>
    <circle-info-icon />
  </template>
  Teal icon
</pf-label>
<pf-label outline color="teal" @close="alert">Teal removeable</pf-label>
<pf-label outline color="teal" @close="alert">
  <template #icon>
    <circle-info-icon />
  </template>
  Teal icon removeable
</pf-label>
<pf-label outline color="teal" href="#filled">Teal link</pf-label>
<pf-label outline color="teal" href="#filled" @close="alert">Teal link removeable</pf-label>
<pf-label outline color="teal" text-max-width="16ch" @close="alert">
  <template #icon>
    <circle-info-icon />
  </template>
  Teal label with icon that overflows
</pf-label>
<br>
<br>
<pf-label outline color="yellow">Yellow</pf-label>
<pf-label outline color="yellow">
  <template #icon>
    <circle-info-icon />
  </template>
  Yellow icon
</pf-label>
<pf-label outline color="yellow" @close="alert">Yellow removeable</pf-label>
<pf-label outline color="yellow" @close="alert">
  <template #icon>
    <circle-info-icon />
  </template>
  Yellow icon removeable
</pf-label>
<pf-label outline color="yellow" href="#filled">Yellow link</pf-label>
<pf-label outline color="yellow" href="#filled" @close="alert">Yellow link removeable</pf-label>
<pf-label outline color="yellow" text-max-width="16ch" @close="alert">
  <template #icon>
    <circle-info-icon />
  </template>
  Yellow label with icon that overflows
</pf-label>
<br>
<br>

<pf-title h="4">Status:</pf-title>
<br>

<pf-label outline status="success">Success</pf-label>
<pf-label outline status="success" @close="alert">Success removeable</pf-label>
<pf-label outline status="success" href="#filled">Success link</pf-label>
<pf-label outline status="success" href="#filled" @close="alert">Success link removeable</pf-label>
<pf-label outline status="success" text-max-width="16ch" @close="alert">
  Success label with text that overflows
</pf-label>
<br>
<br>

<pf-label outline status="warning">Warning</pf-label>
<pf-label outline status="warning" @close="alert">Warning removeable</pf-label>
<pf-label outline status="warning" href="#filled">Warning link</pf-label>
<pf-label outline status="warning" href="#filled" @close="alert">Warning link removeable</pf-label>
<pf-label outline status="warning" text-max-width="16ch" @close="alert">
  Warning label with text that overflows
</pf-label>
<br>
<br>

<pf-label outline status="danger">Danger</pf-label>
<pf-label outline status="danger" @close="alert">Danger removeable</pf-label>
<pf-label outline status="danger" href="#filled">Danger link</pf-label>
<pf-label outline status="danger" href="#filled" @close="alert">Danger link removeable</pf-label>
<pf-label outline status="danger" text-max-width="16ch" @close="alert">
  Danger label with text that overflows
</pf-label>
<br>
<br>

<pf-label outline status="info">Info</pf-label>
<pf-label outline status="info" @close="alert">Info removeable</pf-label>
<pf-label outline status="info" href="#filled">Info link</pf-label>
<pf-label outline status="info" href="#filled" @close="alert">Info link removeable</pf-label>
<pf-label outline status="info" text-max-width="16ch" @close="alert">
  Info label with text that overflows
</pf-label>
<br>
<br>

<pf-label outline status="custom">Custom</pf-label>
<pf-label outline status="custom" @close="alert">Custom removeable</pf-label>
<pf-label outline status="custom" href="#filled">Custom link</pf-label>
<pf-label outline status="custom" href="#filled" @close="alert">Custom link removeable</pf-label>
<pf-label outline status="custom" text-max-width="16ch" @close="alert">
  Custom label with text that overflows
</pf-label>`},{default:t(()=>[a(p,{h:`4`},{default:t(()=>[...u[110]||=[o(`Non-status:`,-1)]]),_:1}),u[193]||=s(`br`,null,null,-1),a(m,{outline:``},{default:t(()=>[...u[111]||=[o(`Grey`,-1)]]),_:1}),a(m,{outline:``},{icon:t(()=>[a(c(l))]),default:t(()=>[u[112]||=o(`Grey icon `,-1)]),_:1}),a(m,{outline:``,onClose:f},{default:t(()=>[...u[113]||=[o(`Grey removeable`,-1)]]),_:1}),a(m,{outline:``,onClose:f},{icon:t(()=>[a(c(l))]),default:t(()=>[u[114]||=o(` Grey icon removeable `,-1)]),_:1}),a(m,{outline:``,href:`#filled`},{default:t(()=>[...u[115]||=[o(`Grey link`,-1)]]),_:1}),a(m,{outline:``,href:`#filled`,onClose:f},{default:t(()=>[...u[116]||=[o(`Grey link removeable`,-1)]]),_:1}),a(m,{outline:``,"text-max-width":`16ch`,onClose:f},{icon:t(()=>[a(c(l))]),default:t(()=>[u[117]||=o(` Grey label with icon that overflows `,-1)]),_:1}),u[194]||=s(`br`,null,null,-1),u[195]||=s(`br`,null,null,-1),a(m,{outline:``,color:`blue`},{default:t(()=>[...u[118]||=[o(`Blue`,-1)]]),_:1}),a(m,{outline:``,color:`blue`},{icon:t(()=>[a(c(l))]),default:t(()=>[u[119]||=o(` Blue icon `,-1)]),_:1}),a(m,{outline:``,color:`blue`,onClose:f},{default:t(()=>[...u[120]||=[o(`Blue removeable`,-1)]]),_:1}),a(m,{outline:``,color:`blue`,onClose:f},{icon:t(()=>[a(c(l))]),default:t(()=>[u[121]||=o(` Blue icon removeable `,-1)]),_:1}),a(m,{outline:``,color:`blue`,href:`#filled`},{default:t(()=>[...u[122]||=[o(`Blue link`,-1)]]),_:1}),a(m,{outline:``,color:`blue`,href:`#filled`,onClose:f},{default:t(()=>[...u[123]||=[o(`Blue link removeable`,-1)]]),_:1}),a(m,{outline:``,color:`blue`,"text-max-width":`16ch`,onClose:f},{icon:t(()=>[a(c(l))]),default:t(()=>[u[124]||=o(` Blue label with icon that overflows `,-1)]),_:1}),u[196]||=s(`br`,null,null,-1),u[197]||=s(`br`,null,null,-1),a(m,{outline:``,color:`green`},{default:t(()=>[...u[125]||=[o(`Green`,-1)]]),_:1}),a(m,{outline:``,color:`green`},{icon:t(()=>[a(c(l))]),default:t(()=>[u[126]||=o(` Green icon `,-1)]),_:1}),a(m,{outline:``,color:`green`,onClose:f},{default:t(()=>[...u[127]||=[o(`Green removeable`,-1)]]),_:1}),a(m,{outline:``,color:`green`,onClose:f},{icon:t(()=>[a(c(l))]),default:t(()=>[u[128]||=o(` Green icon removeable `,-1)]),_:1}),a(m,{outline:``,color:`green`,href:`#filled`},{default:t(()=>[...u[129]||=[o(`Green link`,-1)]]),_:1}),a(m,{outline:``,color:`green`,href:`#filled`,onClose:f},{default:t(()=>[...u[130]||=[o(`Green link removeable`,-1)]]),_:1}),a(m,{outline:``,color:`green`,"text-max-width":`16ch`,onClose:f},{icon:t(()=>[a(c(l))]),default:t(()=>[u[131]||=o(` Green label with icon that overflows `,-1)]),_:1}),u[198]||=s(`br`,null,null,-1),u[199]||=s(`br`,null,null,-1),a(m,{outline:``,color:`orange`},{default:t(()=>[...u[132]||=[o(`Orange`,-1)]]),_:1}),a(m,{outline:``,color:`orange`},{icon:t(()=>[a(c(l))]),default:t(()=>[u[133]||=o(` Orange icon `,-1)]),_:1}),a(m,{outline:``,color:`orange`,onClose:f},{default:t(()=>[...u[134]||=[o(`Orange removeable`,-1)]]),_:1}),a(m,{outline:``,color:`orange`,onClose:f},{icon:t(()=>[a(c(l))]),default:t(()=>[u[135]||=o(` Orange icon removeable `,-1)]),_:1}),a(m,{outline:``,color:`orange`,href:`#filled`},{default:t(()=>[...u[136]||=[o(`Orange link`,-1)]]),_:1}),a(m,{outline:``,color:`orange`,href:`#filled`,onClose:f},{default:t(()=>[...u[137]||=[o(`Orange link removeable`,-1)]]),_:1}),a(m,{outline:``,color:`orange`,"text-max-width":`16ch`,onClose:f},{icon:t(()=>[a(c(l))]),default:t(()=>[u[138]||=o(` Orange label with icon that overflows `,-1)]),_:1}),u[200]||=s(`br`,null,null,-1),u[201]||=s(`br`,null,null,-1),a(m,{outline:``,color:`red`},{default:t(()=>[...u[139]||=[o(`Red`,-1)]]),_:1}),a(m,{outline:``,color:`red`},{icon:t(()=>[a(c(l))]),default:t(()=>[u[140]||=o(` Red icon `,-1)]),_:1}),a(m,{outline:``,color:`red`,onClose:f},{default:t(()=>[...u[141]||=[o(`Red removeable`,-1)]]),_:1}),a(m,{outline:``,color:`red`,onClose:f},{icon:t(()=>[a(c(l))]),default:t(()=>[u[142]||=o(` Red icon removeable `,-1)]),_:1}),a(m,{outline:``,color:`red`,href:`#filled`},{default:t(()=>[...u[143]||=[o(`Red link`,-1)]]),_:1}),a(m,{outline:``,color:`red`,href:`#filled`,onClose:f},{default:t(()=>[...u[144]||=[o(`Red link removeable`,-1)]]),_:1}),a(m,{outline:``,color:`red`,"text-max-width":`16ch`,onClose:f},{icon:t(()=>[a(c(l))]),default:t(()=>[u[145]||=o(` Red label with icon that overflows `,-1)]),_:1}),u[202]||=s(`br`,null,null,-1),u[203]||=s(`br`,null,null,-1),a(m,{outline:``,color:`purple`},{default:t(()=>[...u[146]||=[o(`Purple`,-1)]]),_:1}),a(m,{outline:``,color:`purple`},{icon:t(()=>[a(c(l))]),default:t(()=>[u[147]||=o(` Purple icon `,-1)]),_:1}),a(m,{outline:``,color:`purple`,onClose:f},{default:t(()=>[...u[148]||=[o(`Purple removeable`,-1)]]),_:1}),a(m,{outline:``,color:`purple`,onClose:f},{icon:t(()=>[a(c(l))]),default:t(()=>[u[149]||=o(` Purple icon removeable `,-1)]),_:1}),a(m,{outline:``,color:`purple`,href:`#filled`},{default:t(()=>[...u[150]||=[o(`Purple link`,-1)]]),_:1}),a(m,{outline:``,color:`purple`,href:`#filled`,onClose:f},{default:t(()=>[...u[151]||=[o(`Purple link removeable`,-1)]]),_:1}),a(m,{outline:``,color:`purple`,"text-max-width":`16ch`,onClose:f},{icon:t(()=>[a(c(l))]),default:t(()=>[u[152]||=o(` Purple label with icon that overflows `,-1)]),_:1}),u[204]||=s(`br`,null,null,-1),u[205]||=s(`br`,null,null,-1),a(m,{outline:``,color:`teal`},{default:t(()=>[...u[153]||=[o(`Teal`,-1)]]),_:1}),a(m,{outline:``,color:`teal`},{icon:t(()=>[a(c(l))]),default:t(()=>[u[154]||=o(` Teal icon `,-1)]),_:1}),a(m,{outline:``,color:`teal`,onClose:f},{default:t(()=>[...u[155]||=[o(`Teal removeable`,-1)]]),_:1}),a(m,{outline:``,color:`teal`,onClose:f},{icon:t(()=>[a(c(l))]),default:t(()=>[u[156]||=o(` Teal icon removeable `,-1)]),_:1}),a(m,{outline:``,color:`teal`,href:`#filled`},{default:t(()=>[...u[157]||=[o(`Teal link`,-1)]]),_:1}),a(m,{outline:``,color:`teal`,href:`#filled`,onClose:f},{default:t(()=>[...u[158]||=[o(`Teal link removeable`,-1)]]),_:1}),a(m,{outline:``,color:`teal`,"text-max-width":`16ch`,onClose:f},{icon:t(()=>[a(c(l))]),default:t(()=>[u[159]||=o(` Teal label with icon that overflows `,-1)]),_:1}),u[206]||=s(`br`,null,null,-1),u[207]||=s(`br`,null,null,-1),a(m,{outline:``,color:`yellow`},{default:t(()=>[...u[160]||=[o(`Yellow`,-1)]]),_:1}),a(m,{outline:``,color:`yellow`},{icon:t(()=>[a(c(l))]),default:t(()=>[u[161]||=o(` Yellow icon `,-1)]),_:1}),a(m,{outline:``,color:`yellow`,onClose:f},{default:t(()=>[...u[162]||=[o(`Yellow removeable`,-1)]]),_:1}),a(m,{outline:``,color:`yellow`,onClose:f},{icon:t(()=>[a(c(l))]),default:t(()=>[u[163]||=o(` Yellow icon removeable `,-1)]),_:1}),a(m,{outline:``,color:`yellow`,href:`#filled`},{default:t(()=>[...u[164]||=[o(`Yellow link`,-1)]]),_:1}),a(m,{outline:``,color:`yellow`,href:`#filled`,onClose:f},{default:t(()=>[...u[165]||=[o(`Yellow link removeable`,-1)]]),_:1}),a(m,{outline:``,color:`yellow`,"text-max-width":`16ch`,onClose:f},{icon:t(()=>[a(c(l))]),default:t(()=>[u[166]||=o(` Yellow label with icon that overflows `,-1)]),_:1}),u[208]||=s(`br`,null,null,-1),u[209]||=s(`br`,null,null,-1),a(p,{h:`4`},{default:t(()=>[...u[167]||=[o(`Status:`,-1)]]),_:1}),u[210]||=s(`br`,null,null,-1),a(m,{outline:``,status:`success`},{default:t(()=>[...u[168]||=[o(`Success`,-1)]]),_:1}),a(m,{outline:``,status:`success`,onClose:f},{default:t(()=>[...u[169]||=[o(`Success removeable`,-1)]]),_:1}),a(m,{outline:``,status:`success`,href:`#filled`},{default:t(()=>[...u[170]||=[o(`Success link`,-1)]]),_:1}),a(m,{outline:``,status:`success`,href:`#filled`,onClose:f},{default:t(()=>[...u[171]||=[o(`Success link removeable`,-1)]]),_:1}),a(m,{outline:``,status:`success`,"text-max-width":`16ch`,onClose:f},{default:t(()=>[...u[172]||=[o(` Success label with text that overflows `,-1)]]),_:1}),u[211]||=s(`br`,null,null,-1),u[212]||=s(`br`,null,null,-1),a(m,{outline:``,status:`warning`},{default:t(()=>[...u[173]||=[o(`Warning`,-1)]]),_:1}),a(m,{outline:``,status:`warning`,onClose:f},{default:t(()=>[...u[174]||=[o(`Warning removeable`,-1)]]),_:1}),a(m,{outline:``,status:`warning`,href:`#filled`},{default:t(()=>[...u[175]||=[o(`Warning link`,-1)]]),_:1}),a(m,{outline:``,status:`warning`,href:`#filled`,onClose:f},{default:t(()=>[...u[176]||=[o(`Warning link removeable`,-1)]]),_:1}),a(m,{outline:``,status:`warning`,"text-max-width":`16ch`,onClose:f},{default:t(()=>[...u[177]||=[o(` Warning label with text that overflows `,-1)]]),_:1}),u[213]||=s(`br`,null,null,-1),u[214]||=s(`br`,null,null,-1),a(m,{outline:``,status:`danger`},{default:t(()=>[...u[178]||=[o(`Danger`,-1)]]),_:1}),a(m,{outline:``,status:`danger`,onClose:f},{default:t(()=>[...u[179]||=[o(`Danger removeable`,-1)]]),_:1}),a(m,{outline:``,status:`danger`,href:`#filled`},{default:t(()=>[...u[180]||=[o(`Danger link`,-1)]]),_:1}),a(m,{outline:``,status:`danger`,href:`#filled`,onClose:f},{default:t(()=>[...u[181]||=[o(`Danger link removeable`,-1)]]),_:1}),a(m,{outline:``,status:`danger`,"text-max-width":`16ch`,onClose:f},{default:t(()=>[...u[182]||=[o(` Danger label with text that overflows `,-1)]]),_:1}),u[215]||=s(`br`,null,null,-1),u[216]||=s(`br`,null,null,-1),a(m,{outline:``,status:`info`},{default:t(()=>[...u[183]||=[o(`Info`,-1)]]),_:1}),a(m,{outline:``,status:`info`,onClose:f},{default:t(()=>[...u[184]||=[o(`Info removeable`,-1)]]),_:1}),a(m,{outline:``,status:`info`,href:`#filled`},{default:t(()=>[...u[185]||=[o(`Info link`,-1)]]),_:1}),a(m,{outline:``,status:`info`,href:`#filled`,onClose:f},{default:t(()=>[...u[186]||=[o(`Info link removeable`,-1)]]),_:1}),a(m,{outline:``,status:`info`,"text-max-width":`16ch`,onClose:f},{default:t(()=>[...u[187]||=[o(` Info label with text that overflows `,-1)]]),_:1}),u[217]||=s(`br`,null,null,-1),u[218]||=s(`br`,null,null,-1),a(m,{outline:``,status:`custom`},{default:t(()=>[...u[188]||=[o(`Custom`,-1)]]),_:1}),a(m,{outline:``,status:`custom`,onClose:f},{default:t(()=>[...u[189]||=[o(`Custom removeable`,-1)]]),_:1}),a(m,{outline:``,status:`custom`,href:`#filled`},{default:t(()=>[...u[190]||=[o(`Custom link`,-1)]]),_:1}),a(m,{outline:``,status:`custom`,href:`#filled`,onClose:f},{default:t(()=>[...u[191]||=[o(`Custom link removeable`,-1)]]),_:1}),a(m,{outline:``,status:`custom`,"text-max-width":`16ch`,onClose:f},{default:t(()=>[...u[192]||=[o(` Custom label with text that overflows `,-1)]]),_:1})]),_:1}),a(h,{title:`Compact labels`,source:`<pf-label compact>Compact</pf-label>
<pf-label compact>
  <template #icon>
    <circle-info-icon />
  </template>Compact icon
</pf-label>
<pf-label compact @close="alert">Compact removeable</pf-label>
<pf-label compact @close="alert">
  <template #icon>
    <circle-info-icon />
  </template>
  Compact icon removeable
</pf-label>
<pf-label compact href="#filled">Compact link</pf-label>
<pf-label compact href="#filled" @close="alert">Compact link removeable</pf-label>
<pf-label compact text-max-width="16ch" @close="alert">
  <template #icon>
    <circle-info-icon />
  </template>
  Compact label with icon that overflows
</pf-label>`},{default:t(()=>[a(m,{compact:``},{default:t(()=>[...u[219]||=[o(`Compact`,-1)]]),_:1}),a(m,{compact:``},{icon:t(()=>[a(c(l))]),default:t(()=>[u[220]||=o(`Compact icon `,-1)]),_:1}),a(m,{compact:``,onClose:f},{default:t(()=>[...u[221]||=[o(`Compact removeable`,-1)]]),_:1}),a(m,{compact:``,onClose:f},{icon:t(()=>[a(c(l))]),default:t(()=>[u[222]||=o(` Compact icon removeable `,-1)]),_:1}),a(m,{compact:``,href:`#filled`},{default:t(()=>[...u[223]||=[o(`Compact link`,-1)]]),_:1}),a(m,{compact:``,href:`#filled`,onClose:f},{default:t(()=>[...u[224]||=[o(`Compact link removeable`,-1)]]),_:1}),a(m,{compact:``,"text-max-width":`16ch`,onClose:f},{icon:t(()=>[a(c(l))]),default:t(()=>[u[225]||=o(` Compact label with icon that overflows `,-1)]),_:1})]),_:1}),a(h,{title:`Truncated labels`,source:`<pf-label text-max-width="16ch" tooltip-position="right">Label is too long to fit in the label</pf-label>`},{default:t(()=>[a(m,{"text-max-width":`16ch`,"tooltip-position":`right`},{default:t(()=>[...u[226]||=[o(`Label is too long to fit in the label`,-1)]]),_:1})]),_:1}),a(h,{title:`Label group with overflow`,source:`<pf-label-group>
  <pf-label><template #icon><circle-info-icon /></template> Label 1</pf-label>
  <pf-label color="blue"><template #icon><circle-info-icon /></template> Label 2</pf-label>
  <pf-label color="green"><template #icon><circle-info-icon /></template> Label 3</pf-label>
  <pf-label color="yellow"><template #icon><circle-info-icon /></template> Label 4</pf-label>
  <pf-label color="red"><template #icon><circle-info-icon /></template> Label 5</pf-label>
  <pf-label color="purple"><template #icon><circle-info-icon /></template> Label 6</pf-label>
</pf-label-group>`},{default:t(()=>[a(g,null,{default:t(()=>[a(m,null,{icon:t(()=>[a(c(l))]),default:t(()=>[u[227]||=o(` Label 1`,-1)]),_:1}),a(m,{color:`blue`},{icon:t(()=>[a(c(l))]),default:t(()=>[u[228]||=o(` Label 2`,-1)]),_:1}),a(m,{color:`green`},{icon:t(()=>[a(c(l))]),default:t(()=>[u[229]||=o(` Label 3`,-1)]),_:1}),a(m,{color:`yellow`},{icon:t(()=>[a(c(l))]),default:t(()=>[u[230]||=o(` Label 4`,-1)]),_:1}),a(m,{color:`red`},{icon:t(()=>[a(c(l))]),default:t(()=>[u[231]||=o(` Label 5`,-1)]),_:1}),a(m,{color:`purple`},{icon:t(()=>[a(c(l))]),default:t(()=>[u[232]||=o(` Label 6`,-1)]),_:1})]),_:1})]),_:1})]),_:1})}}});export{d as default};