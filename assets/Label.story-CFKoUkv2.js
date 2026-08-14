import{H as e,N as t,c as n,h as r,it as i,k as a,m as o,p as s,s as c}from"./runtime-core.esm-bundler-DvxuuL12.js";import{p as l,t as u}from"./index-JKtqnbzt.js";var d=r({__name:`Label.story`,setup(r){let d=u();function f(e){let t=e.target?.closest(`.pf-v6-c-label`);t instanceof HTMLElement&&d.add({title:`Clicked close button on "${t.innerText}"`,variant:`info`})}return(r,u)=>{let d=t(`component-info`),p=t(`pf-title`),m=t(`pf-label`),h=t(`story-canvas`),g=t(`pf-label-group`),_=t(`doc-page`);return a(),n(_,{name:`Components/Label.story.vue`,title:`Label`},{description:e(()=>[...u[0]||=[s(`The `,-1),c(`b`,null,`label`,-1),s(` component allows users to add specific element captions for user clarity and convenience.`,-1)]]),apidocs:e(()=>[o(d,{name:`PfLabel`,doc:{name:`PfLabel`,exportName:`PfLabel`,displayName:`Label`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`color`,description:`The color of the label outline/fill`,required:!1,type:{name:`union`,elements:[{name:`"blue"`},{name:`"teal"`},{name:`"green"`},{name:`"orange"`},{name:`"purple"`},{name:`"red"`},{name:`"orangered"`},{name:`"grey"`},{name:`"yellow"`}]},defaultValue:{func:!1,value:`'grey'`}},{name:`variant`,description:`Variant of the label.`,required:!1,type:{name:`union`,elements:[{name:`"outline"`},{name:`"filled"`},{name:`"add"`}]},defaultValue:{func:!1,value:`'filled'`}},{name:`status`,description:`Status of the label with a respective icon and color. Overrides the color set by the color property.`,required:!1,type:{name:`union`,elements:[{name:`"success"`},{name:`"warning"`},{name:`"danger"`},{name:`"info"`},{name:`"custom"`}]}},{name:`tooltipPosition`,description:`Position of the tooltip which is displayed if text is truncated`,required:!1,type:{name:`Placement`},defaultValue:{func:!1,value:`'top'`}},{name:`to`,description:`vue-router destination for a label that is a router-link. If present, the label will change to an anchor element.`,required:!1,type:{name:`RouteLocationRaw`}},{name:`href`,description:`Href for a label that is a link. If present, the label will change to an anchor element. This should not be passed in if the onClick prop is also passed in.`,required:!1,type:{name:`string`}},{name:`outline`,required:!1,type:{name:`boolean`}},{name:`compact`,description:`Flag indicating the label is compact.`,required:!1,type:{name:`boolean`}},{name:`overflow`,description:`Flag indicating if the label is an overflow label.`,required:!1,type:{name:`boolean`}},{name:`textMaxWidth`,description:`The max width of the label before it is truncated. Can be any valid CSS unit, such as '100%', '100px', or '16ch'.`,required:!1,type:{name:`string`}},{name:`closeBtnAriaLabel`,description:`Aria label for close button`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`'Close'`}},{name:`onClose`,description:`Callback for when the label is clicked. This should not be passed in if the href or editable props are also passed in.`,required:!1,type:{name:`TSFunctionType`}},{name:`onClick`,description:`Callback for when the label is clicked. This should not be passed in if the href or isEditable props are also passed in.`,required:!1,type:{name:`TSFunctionType`}}],events:[],slots:[{name:`icon`},{name:`default`},{name:`actions`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Label/Label.vue`]}})]),default:e(()=>[o(h,{title:`Filled labels`,source:`<pf-title h="4">Non-status:</pf-title>
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
</pf-label>`},{default:e(()=>[o(p,{h:`4`},{default:e(()=>[...u[1]||=[s(`Non-status:`,-1)]]),_:1}),u[84]||=c(`br`,null,null,-1),o(m,null,{default:e(()=>[...u[2]||=[s(`Grey`,-1)]]),_:1}),o(m,null,{icon:e(()=>[o(i(l))]),default:e(()=>[u[3]||=s(`Grey icon `,-1)]),_:1}),o(m,{onClose:f},{default:e(()=>[...u[4]||=[s(`Grey removeable`,-1)]]),_:1}),o(m,{onClose:f},{icon:e(()=>[o(i(l))]),default:e(()=>[u[5]||=s(` Grey icon removeable `,-1)]),_:1}),o(m,{href:`#filled`},{default:e(()=>[...u[6]||=[s(`Grey link`,-1)]]),_:1}),o(m,{href:`#filled`,onClose:f},{default:e(()=>[...u[7]||=[s(`Grey link removeable`,-1)]]),_:1}),o(m,{"text-max-width":`16ch`,onClose:f},{icon:e(()=>[o(i(l))]),default:e(()=>[u[8]||=s(` Grey label with icon that overflows `,-1)]),_:1}),u[85]||=c(`br`,null,null,-1),u[86]||=c(`br`,null,null,-1),o(m,{color:`blue`},{default:e(()=>[...u[9]||=[s(`Blue`,-1)]]),_:1}),o(m,{color:`blue`},{icon:e(()=>[o(i(l))]),default:e(()=>[u[10]||=s(` Blue icon `,-1)]),_:1}),o(m,{color:`blue`,onClose:f},{default:e(()=>[...u[11]||=[s(`Blue removeable`,-1)]]),_:1}),o(m,{color:`blue`,onClose:f},{icon:e(()=>[o(i(l))]),default:e(()=>[u[12]||=s(` Blue icon removeable `,-1)]),_:1}),o(m,{color:`blue`,href:`#filled`},{default:e(()=>[...u[13]||=[s(`Blue link`,-1)]]),_:1}),o(m,{color:`blue`,href:`#filled`,onClose:f},{default:e(()=>[...u[14]||=[s(`Blue link removeable`,-1)]]),_:1}),o(m,{color:`blue`,"text-max-width":`16ch`,onClose:f},{icon:e(()=>[o(i(l))]),default:e(()=>[u[15]||=s(` Blue label with icon that overflows `,-1)]),_:1}),u[87]||=c(`br`,null,null,-1),u[88]||=c(`br`,null,null,-1),o(m,{color:`green`},{default:e(()=>[...u[16]||=[s(`Green`,-1)]]),_:1}),o(m,{color:`green`},{icon:e(()=>[o(i(l))]),default:e(()=>[u[17]||=s(` Green icon `,-1)]),_:1}),o(m,{color:`green`,onClose:f},{default:e(()=>[...u[18]||=[s(`Green removeable`,-1)]]),_:1}),o(m,{color:`green`,onClose:f},{icon:e(()=>[o(i(l))]),default:e(()=>[u[19]||=s(` Green icon removeable `,-1)]),_:1}),o(m,{color:`green`,href:`#filled`},{default:e(()=>[...u[20]||=[s(`Green link`,-1)]]),_:1}),o(m,{color:`green`,href:`#filled`,onClose:f},{default:e(()=>[...u[21]||=[s(`Green link removeable`,-1)]]),_:1}),o(m,{color:`green`,"text-max-width":`16ch`,onClose:f},{icon:e(()=>[o(i(l))]),default:e(()=>[u[22]||=s(` Green label with icon that overflows `,-1)]),_:1}),u[89]||=c(`br`,null,null,-1),u[90]||=c(`br`,null,null,-1),o(m,{color:`orange`},{default:e(()=>[...u[23]||=[s(`Orange`,-1)]]),_:1}),o(m,{color:`orange`},{icon:e(()=>[o(i(l))]),default:e(()=>[u[24]||=s(` Orange icon `,-1)]),_:1}),o(m,{color:`orange`,onClose:f},{default:e(()=>[...u[25]||=[s(`Orange removeable`,-1)]]),_:1}),o(m,{color:`orange`,onClose:f},{icon:e(()=>[o(i(l))]),default:e(()=>[u[26]||=s(` Orange icon removeable `,-1)]),_:1}),o(m,{color:`orange`,href:`#filled`},{default:e(()=>[...u[27]||=[s(`Orange link`,-1)]]),_:1}),o(m,{color:`orange`,href:`#filled`,onClose:f},{default:e(()=>[...u[28]||=[s(`Orange link removeable`,-1)]]),_:1}),o(m,{color:`orange`,"text-max-width":`16ch`,onClose:f},{icon:e(()=>[o(i(l))]),default:e(()=>[u[29]||=s(` Orange label with icon that overflows `,-1)]),_:1}),u[91]||=c(`br`,null,null,-1),u[92]||=c(`br`,null,null,-1),o(m,{color:`red`},{default:e(()=>[...u[30]||=[s(`Red`,-1)]]),_:1}),o(m,{color:`red`},{icon:e(()=>[o(i(l))]),default:e(()=>[u[31]||=s(` Red icon `,-1)]),_:1}),o(m,{color:`red`,onClose:f},{default:e(()=>[...u[32]||=[s(`Red removeable`,-1)]]),_:1}),o(m,{color:`red`,onClose:f},{icon:e(()=>[o(i(l))]),default:e(()=>[u[33]||=s(` Red icon removeable `,-1)]),_:1}),o(m,{color:`red`,href:`#filled`},{default:e(()=>[...u[34]||=[s(`Red link`,-1)]]),_:1}),o(m,{color:`red`,href:`#filled`,onClose:f},{default:e(()=>[...u[35]||=[s(`Red link removeable`,-1)]]),_:1}),o(m,{color:`red`,"text-max-width":`16ch`,onClose:f},{icon:e(()=>[o(i(l))]),default:e(()=>[u[36]||=s(` Red label with icon that overflows `,-1)]),_:1}),u[93]||=c(`br`,null,null,-1),u[94]||=c(`br`,null,null,-1),o(m,{color:`purple`},{default:e(()=>[...u[37]||=[s(`Purple`,-1)]]),_:1}),o(m,{color:`purple`},{icon:e(()=>[o(i(l))]),default:e(()=>[u[38]||=s(` Purple icon `,-1)]),_:1}),o(m,{color:`purple`,onClose:f},{default:e(()=>[...u[39]||=[s(`Purple removeable`,-1)]]),_:1}),o(m,{color:`purple`,onClose:f},{icon:e(()=>[o(i(l))]),default:e(()=>[u[40]||=s(` Purple icon removeable `,-1)]),_:1}),o(m,{color:`purple`,href:`#filled`},{default:e(()=>[...u[41]||=[s(`Purple link`,-1)]]),_:1}),o(m,{color:`purple`,href:`#filled`,onClose:f},{default:e(()=>[...u[42]||=[s(`Purple link removeable`,-1)]]),_:1}),o(m,{color:`purple`,"text-max-width":`16ch`,onClose:f},{icon:e(()=>[o(i(l))]),default:e(()=>[u[43]||=s(` Purple label with icon that overflows `,-1)]),_:1}),u[95]||=c(`br`,null,null,-1),u[96]||=c(`br`,null,null,-1),o(m,{color:`teal`},{default:e(()=>[...u[44]||=[s(`Teal`,-1)]]),_:1}),o(m,{color:`teal`},{icon:e(()=>[o(i(l))]),default:e(()=>[u[45]||=s(` Teal icon `,-1)]),_:1}),o(m,{color:`teal`,onClose:f},{default:e(()=>[...u[46]||=[s(`Teal removeable`,-1)]]),_:1}),o(m,{color:`teal`,onClose:f},{icon:e(()=>[o(i(l))]),default:e(()=>[u[47]||=s(` Teal icon removeable `,-1)]),_:1}),o(m,{color:`teal`,href:`#filled`},{default:e(()=>[...u[48]||=[s(`Teal link`,-1)]]),_:1}),o(m,{color:`teal`,href:`#filled`,onClose:f},{default:e(()=>[...u[49]||=[s(`Teal link removeable`,-1)]]),_:1}),o(m,{color:`teal`,"text-max-width":`16ch`,onClose:f},{icon:e(()=>[o(i(l))]),default:e(()=>[u[50]||=s(` Teal label with icon that overflows `,-1)]),_:1}),u[97]||=c(`br`,null,null,-1),u[98]||=c(`br`,null,null,-1),o(m,{color:`yellow`},{default:e(()=>[...u[51]||=[s(`Yellow`,-1)]]),_:1}),o(m,{color:`yellow`},{icon:e(()=>[o(i(l))]),default:e(()=>[u[52]||=s(` Yellow icon `,-1)]),_:1}),o(m,{color:`yellow`,onClose:f},{default:e(()=>[...u[53]||=[s(`Yellow removeable`,-1)]]),_:1}),o(m,{color:`yellow`,onClose:f},{icon:e(()=>[o(i(l))]),default:e(()=>[u[54]||=s(` Yellow icon removeable `,-1)]),_:1}),o(m,{color:`yellow`,href:`#filled`},{default:e(()=>[...u[55]||=[s(`Yellow link`,-1)]]),_:1}),o(m,{color:`yellow`,href:`#filled`,onClose:f},{default:e(()=>[...u[56]||=[s(`Yellow link removeable`,-1)]]),_:1}),o(m,{color:`yellow`,"text-max-width":`16ch`,onClose:f},{icon:e(()=>[o(i(l))]),default:e(()=>[u[57]||=s(` Yellow label with icon that overflows `,-1)]),_:1}),u[99]||=c(`br`,null,null,-1),u[100]||=c(`br`,null,null,-1),o(p,{h:`4`},{default:e(()=>[...u[58]||=[s(`Status:`,-1)]]),_:1}),u[101]||=c(`br`,null,null,-1),o(m,{status:`success`},{default:e(()=>[...u[59]||=[s(`Success`,-1)]]),_:1}),o(m,{status:`success`,onClose:f},{default:e(()=>[...u[60]||=[s(`Success removeable`,-1)]]),_:1}),o(m,{status:`success`,href:`#filled`},{default:e(()=>[...u[61]||=[s(`Success link`,-1)]]),_:1}),o(m,{status:`success`,href:`#filled`,onClose:f},{default:e(()=>[...u[62]||=[s(`Success link removeable`,-1)]]),_:1}),o(m,{status:`success`,"text-max-width":`16ch`,onClose:f},{default:e(()=>[...u[63]||=[s(` Success label with text that overflows `,-1)]]),_:1}),u[102]||=c(`br`,null,null,-1),u[103]||=c(`br`,null,null,-1),o(m,{status:`warning`},{default:e(()=>[...u[64]||=[s(`Warning`,-1)]]),_:1}),o(m,{status:`warning`,onClose:f},{default:e(()=>[...u[65]||=[s(`Warning removeable`,-1)]]),_:1}),o(m,{status:`warning`,href:`#filled`},{default:e(()=>[...u[66]||=[s(`Warning link`,-1)]]),_:1}),o(m,{status:`warning`,href:`#filled`,onClose:f},{default:e(()=>[...u[67]||=[s(`Warning link removeable`,-1)]]),_:1}),o(m,{status:`warning`,"text-max-width":`16ch`,onClose:f},{default:e(()=>[...u[68]||=[s(` Warning label with text that overflows `,-1)]]),_:1}),u[104]||=c(`br`,null,null,-1),u[105]||=c(`br`,null,null,-1),o(m,{status:`danger`},{default:e(()=>[...u[69]||=[s(`Danger`,-1)]]),_:1}),o(m,{status:`danger`,onClose:f},{default:e(()=>[...u[70]||=[s(`Danger removeable`,-1)]]),_:1}),o(m,{status:`danger`,href:`#filled`},{default:e(()=>[...u[71]||=[s(`Danger link`,-1)]]),_:1}),o(m,{status:`danger`,href:`#filled`,onClose:f},{default:e(()=>[...u[72]||=[s(`Danger link removeable`,-1)]]),_:1}),o(m,{status:`danger`,"text-max-width":`16ch`,onClose:f},{default:e(()=>[...u[73]||=[s(` Danger label with text that overflows `,-1)]]),_:1}),u[106]||=c(`br`,null,null,-1),u[107]||=c(`br`,null,null,-1),o(m,{status:`info`},{default:e(()=>[...u[74]||=[s(`Info`,-1)]]),_:1}),o(m,{status:`info`,onClose:f},{default:e(()=>[...u[75]||=[s(`Info removeable`,-1)]]),_:1}),o(m,{status:`info`,href:`#filled`},{default:e(()=>[...u[76]||=[s(`Info link`,-1)]]),_:1}),o(m,{status:`info`,href:`#filled`,onClose:f},{default:e(()=>[...u[77]||=[s(`Info link removeable`,-1)]]),_:1}),o(m,{status:`info`,"text-max-width":`16ch`,onClose:f},{default:e(()=>[...u[78]||=[s(` Info label with text that overflows `,-1)]]),_:1}),u[108]||=c(`br`,null,null,-1),u[109]||=c(`br`,null,null,-1),o(m,{status:`custom`},{default:e(()=>[...u[79]||=[s(`Custom`,-1)]]),_:1}),o(m,{status:`custom`,onClose:f},{default:e(()=>[...u[80]||=[s(`Custom removeable`,-1)]]),_:1}),o(m,{status:`custom`,href:`#filled`},{default:e(()=>[...u[81]||=[s(`Custom link`,-1)]]),_:1}),o(m,{status:`custom`,href:`#filled`,onClose:f},{default:e(()=>[...u[82]||=[s(`Custom link removeable`,-1)]]),_:1}),o(m,{status:`custom`,"text-max-width":`16ch`,onClose:f},{default:e(()=>[...u[83]||=[s(` Custom label with text that overflows `,-1)]]),_:1})]),_:1}),o(h,{title:`Outline labels`,source:`<pf-title h="4">Non-status:</pf-title>
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
</pf-label>`},{default:e(()=>[o(p,{h:`4`},{default:e(()=>[...u[110]||=[s(`Non-status:`,-1)]]),_:1}),u[193]||=c(`br`,null,null,-1),o(m,{outline:``},{default:e(()=>[...u[111]||=[s(`Grey`,-1)]]),_:1}),o(m,{outline:``},{icon:e(()=>[o(i(l))]),default:e(()=>[u[112]||=s(`Grey icon `,-1)]),_:1}),o(m,{outline:``,onClose:f},{default:e(()=>[...u[113]||=[s(`Grey removeable`,-1)]]),_:1}),o(m,{outline:``,onClose:f},{icon:e(()=>[o(i(l))]),default:e(()=>[u[114]||=s(` Grey icon removeable `,-1)]),_:1}),o(m,{outline:``,href:`#filled`},{default:e(()=>[...u[115]||=[s(`Grey link`,-1)]]),_:1}),o(m,{outline:``,href:`#filled`,onClose:f},{default:e(()=>[...u[116]||=[s(`Grey link removeable`,-1)]]),_:1}),o(m,{outline:``,"text-max-width":`16ch`,onClose:f},{icon:e(()=>[o(i(l))]),default:e(()=>[u[117]||=s(` Grey label with icon that overflows `,-1)]),_:1}),u[194]||=c(`br`,null,null,-1),u[195]||=c(`br`,null,null,-1),o(m,{outline:``,color:`blue`},{default:e(()=>[...u[118]||=[s(`Blue`,-1)]]),_:1}),o(m,{outline:``,color:`blue`},{icon:e(()=>[o(i(l))]),default:e(()=>[u[119]||=s(` Blue icon `,-1)]),_:1}),o(m,{outline:``,color:`blue`,onClose:f},{default:e(()=>[...u[120]||=[s(`Blue removeable`,-1)]]),_:1}),o(m,{outline:``,color:`blue`,onClose:f},{icon:e(()=>[o(i(l))]),default:e(()=>[u[121]||=s(` Blue icon removeable `,-1)]),_:1}),o(m,{outline:``,color:`blue`,href:`#filled`},{default:e(()=>[...u[122]||=[s(`Blue link`,-1)]]),_:1}),o(m,{outline:``,color:`blue`,href:`#filled`,onClose:f},{default:e(()=>[...u[123]||=[s(`Blue link removeable`,-1)]]),_:1}),o(m,{outline:``,color:`blue`,"text-max-width":`16ch`,onClose:f},{icon:e(()=>[o(i(l))]),default:e(()=>[u[124]||=s(` Blue label with icon that overflows `,-1)]),_:1}),u[196]||=c(`br`,null,null,-1),u[197]||=c(`br`,null,null,-1),o(m,{outline:``,color:`green`},{default:e(()=>[...u[125]||=[s(`Green`,-1)]]),_:1}),o(m,{outline:``,color:`green`},{icon:e(()=>[o(i(l))]),default:e(()=>[u[126]||=s(` Green icon `,-1)]),_:1}),o(m,{outline:``,color:`green`,onClose:f},{default:e(()=>[...u[127]||=[s(`Green removeable`,-1)]]),_:1}),o(m,{outline:``,color:`green`,onClose:f},{icon:e(()=>[o(i(l))]),default:e(()=>[u[128]||=s(` Green icon removeable `,-1)]),_:1}),o(m,{outline:``,color:`green`,href:`#filled`},{default:e(()=>[...u[129]||=[s(`Green link`,-1)]]),_:1}),o(m,{outline:``,color:`green`,href:`#filled`,onClose:f},{default:e(()=>[...u[130]||=[s(`Green link removeable`,-1)]]),_:1}),o(m,{outline:``,color:`green`,"text-max-width":`16ch`,onClose:f},{icon:e(()=>[o(i(l))]),default:e(()=>[u[131]||=s(` Green label with icon that overflows `,-1)]),_:1}),u[198]||=c(`br`,null,null,-1),u[199]||=c(`br`,null,null,-1),o(m,{outline:``,color:`orange`},{default:e(()=>[...u[132]||=[s(`Orange`,-1)]]),_:1}),o(m,{outline:``,color:`orange`},{icon:e(()=>[o(i(l))]),default:e(()=>[u[133]||=s(` Orange icon `,-1)]),_:1}),o(m,{outline:``,color:`orange`,onClose:f},{default:e(()=>[...u[134]||=[s(`Orange removeable`,-1)]]),_:1}),o(m,{outline:``,color:`orange`,onClose:f},{icon:e(()=>[o(i(l))]),default:e(()=>[u[135]||=s(` Orange icon removeable `,-1)]),_:1}),o(m,{outline:``,color:`orange`,href:`#filled`},{default:e(()=>[...u[136]||=[s(`Orange link`,-1)]]),_:1}),o(m,{outline:``,color:`orange`,href:`#filled`,onClose:f},{default:e(()=>[...u[137]||=[s(`Orange link removeable`,-1)]]),_:1}),o(m,{outline:``,color:`orange`,"text-max-width":`16ch`,onClose:f},{icon:e(()=>[o(i(l))]),default:e(()=>[u[138]||=s(` Orange label with icon that overflows `,-1)]),_:1}),u[200]||=c(`br`,null,null,-1),u[201]||=c(`br`,null,null,-1),o(m,{outline:``,color:`red`},{default:e(()=>[...u[139]||=[s(`Red`,-1)]]),_:1}),o(m,{outline:``,color:`red`},{icon:e(()=>[o(i(l))]),default:e(()=>[u[140]||=s(` Red icon `,-1)]),_:1}),o(m,{outline:``,color:`red`,onClose:f},{default:e(()=>[...u[141]||=[s(`Red removeable`,-1)]]),_:1}),o(m,{outline:``,color:`red`,onClose:f},{icon:e(()=>[o(i(l))]),default:e(()=>[u[142]||=s(` Red icon removeable `,-1)]),_:1}),o(m,{outline:``,color:`red`,href:`#filled`},{default:e(()=>[...u[143]||=[s(`Red link`,-1)]]),_:1}),o(m,{outline:``,color:`red`,href:`#filled`,onClose:f},{default:e(()=>[...u[144]||=[s(`Red link removeable`,-1)]]),_:1}),o(m,{outline:``,color:`red`,"text-max-width":`16ch`,onClose:f},{icon:e(()=>[o(i(l))]),default:e(()=>[u[145]||=s(` Red label with icon that overflows `,-1)]),_:1}),u[202]||=c(`br`,null,null,-1),u[203]||=c(`br`,null,null,-1),o(m,{outline:``,color:`purple`},{default:e(()=>[...u[146]||=[s(`Purple`,-1)]]),_:1}),o(m,{outline:``,color:`purple`},{icon:e(()=>[o(i(l))]),default:e(()=>[u[147]||=s(` Purple icon `,-1)]),_:1}),o(m,{outline:``,color:`purple`,onClose:f},{default:e(()=>[...u[148]||=[s(`Purple removeable`,-1)]]),_:1}),o(m,{outline:``,color:`purple`,onClose:f},{icon:e(()=>[o(i(l))]),default:e(()=>[u[149]||=s(` Purple icon removeable `,-1)]),_:1}),o(m,{outline:``,color:`purple`,href:`#filled`},{default:e(()=>[...u[150]||=[s(`Purple link`,-1)]]),_:1}),o(m,{outline:``,color:`purple`,href:`#filled`,onClose:f},{default:e(()=>[...u[151]||=[s(`Purple link removeable`,-1)]]),_:1}),o(m,{outline:``,color:`purple`,"text-max-width":`16ch`,onClose:f},{icon:e(()=>[o(i(l))]),default:e(()=>[u[152]||=s(` Purple label with icon that overflows `,-1)]),_:1}),u[204]||=c(`br`,null,null,-1),u[205]||=c(`br`,null,null,-1),o(m,{outline:``,color:`teal`},{default:e(()=>[...u[153]||=[s(`Teal`,-1)]]),_:1}),o(m,{outline:``,color:`teal`},{icon:e(()=>[o(i(l))]),default:e(()=>[u[154]||=s(` Teal icon `,-1)]),_:1}),o(m,{outline:``,color:`teal`,onClose:f},{default:e(()=>[...u[155]||=[s(`Teal removeable`,-1)]]),_:1}),o(m,{outline:``,color:`teal`,onClose:f},{icon:e(()=>[o(i(l))]),default:e(()=>[u[156]||=s(` Teal icon removeable `,-1)]),_:1}),o(m,{outline:``,color:`teal`,href:`#filled`},{default:e(()=>[...u[157]||=[s(`Teal link`,-1)]]),_:1}),o(m,{outline:``,color:`teal`,href:`#filled`,onClose:f},{default:e(()=>[...u[158]||=[s(`Teal link removeable`,-1)]]),_:1}),o(m,{outline:``,color:`teal`,"text-max-width":`16ch`,onClose:f},{icon:e(()=>[o(i(l))]),default:e(()=>[u[159]||=s(` Teal label with icon that overflows `,-1)]),_:1}),u[206]||=c(`br`,null,null,-1),u[207]||=c(`br`,null,null,-1),o(m,{outline:``,color:`yellow`},{default:e(()=>[...u[160]||=[s(`Yellow`,-1)]]),_:1}),o(m,{outline:``,color:`yellow`},{icon:e(()=>[o(i(l))]),default:e(()=>[u[161]||=s(` Yellow icon `,-1)]),_:1}),o(m,{outline:``,color:`yellow`,onClose:f},{default:e(()=>[...u[162]||=[s(`Yellow removeable`,-1)]]),_:1}),o(m,{outline:``,color:`yellow`,onClose:f},{icon:e(()=>[o(i(l))]),default:e(()=>[u[163]||=s(` Yellow icon removeable `,-1)]),_:1}),o(m,{outline:``,color:`yellow`,href:`#filled`},{default:e(()=>[...u[164]||=[s(`Yellow link`,-1)]]),_:1}),o(m,{outline:``,color:`yellow`,href:`#filled`,onClose:f},{default:e(()=>[...u[165]||=[s(`Yellow link removeable`,-1)]]),_:1}),o(m,{outline:``,color:`yellow`,"text-max-width":`16ch`,onClose:f},{icon:e(()=>[o(i(l))]),default:e(()=>[u[166]||=s(` Yellow label with icon that overflows `,-1)]),_:1}),u[208]||=c(`br`,null,null,-1),u[209]||=c(`br`,null,null,-1),o(p,{h:`4`},{default:e(()=>[...u[167]||=[s(`Status:`,-1)]]),_:1}),u[210]||=c(`br`,null,null,-1),o(m,{outline:``,status:`success`},{default:e(()=>[...u[168]||=[s(`Success`,-1)]]),_:1}),o(m,{outline:``,status:`success`,onClose:f},{default:e(()=>[...u[169]||=[s(`Success removeable`,-1)]]),_:1}),o(m,{outline:``,status:`success`,href:`#filled`},{default:e(()=>[...u[170]||=[s(`Success link`,-1)]]),_:1}),o(m,{outline:``,status:`success`,href:`#filled`,onClose:f},{default:e(()=>[...u[171]||=[s(`Success link removeable`,-1)]]),_:1}),o(m,{outline:``,status:`success`,"text-max-width":`16ch`,onClose:f},{default:e(()=>[...u[172]||=[s(` Success label with text that overflows `,-1)]]),_:1}),u[211]||=c(`br`,null,null,-1),u[212]||=c(`br`,null,null,-1),o(m,{outline:``,status:`warning`},{default:e(()=>[...u[173]||=[s(`Warning`,-1)]]),_:1}),o(m,{outline:``,status:`warning`,onClose:f},{default:e(()=>[...u[174]||=[s(`Warning removeable`,-1)]]),_:1}),o(m,{outline:``,status:`warning`,href:`#filled`},{default:e(()=>[...u[175]||=[s(`Warning link`,-1)]]),_:1}),o(m,{outline:``,status:`warning`,href:`#filled`,onClose:f},{default:e(()=>[...u[176]||=[s(`Warning link removeable`,-1)]]),_:1}),o(m,{outline:``,status:`warning`,"text-max-width":`16ch`,onClose:f},{default:e(()=>[...u[177]||=[s(` Warning label with text that overflows `,-1)]]),_:1}),u[213]||=c(`br`,null,null,-1),u[214]||=c(`br`,null,null,-1),o(m,{outline:``,status:`danger`},{default:e(()=>[...u[178]||=[s(`Danger`,-1)]]),_:1}),o(m,{outline:``,status:`danger`,onClose:f},{default:e(()=>[...u[179]||=[s(`Danger removeable`,-1)]]),_:1}),o(m,{outline:``,status:`danger`,href:`#filled`},{default:e(()=>[...u[180]||=[s(`Danger link`,-1)]]),_:1}),o(m,{outline:``,status:`danger`,href:`#filled`,onClose:f},{default:e(()=>[...u[181]||=[s(`Danger link removeable`,-1)]]),_:1}),o(m,{outline:``,status:`danger`,"text-max-width":`16ch`,onClose:f},{default:e(()=>[...u[182]||=[s(` Danger label with text that overflows `,-1)]]),_:1}),u[215]||=c(`br`,null,null,-1),u[216]||=c(`br`,null,null,-1),o(m,{outline:``,status:`info`},{default:e(()=>[...u[183]||=[s(`Info`,-1)]]),_:1}),o(m,{outline:``,status:`info`,onClose:f},{default:e(()=>[...u[184]||=[s(`Info removeable`,-1)]]),_:1}),o(m,{outline:``,status:`info`,href:`#filled`},{default:e(()=>[...u[185]||=[s(`Info link`,-1)]]),_:1}),o(m,{outline:``,status:`info`,href:`#filled`,onClose:f},{default:e(()=>[...u[186]||=[s(`Info link removeable`,-1)]]),_:1}),o(m,{outline:``,status:`info`,"text-max-width":`16ch`,onClose:f},{default:e(()=>[...u[187]||=[s(` Info label with text that overflows `,-1)]]),_:1}),u[217]||=c(`br`,null,null,-1),u[218]||=c(`br`,null,null,-1),o(m,{outline:``,status:`custom`},{default:e(()=>[...u[188]||=[s(`Custom`,-1)]]),_:1}),o(m,{outline:``,status:`custom`,onClose:f},{default:e(()=>[...u[189]||=[s(`Custom removeable`,-1)]]),_:1}),o(m,{outline:``,status:`custom`,href:`#filled`},{default:e(()=>[...u[190]||=[s(`Custom link`,-1)]]),_:1}),o(m,{outline:``,status:`custom`,href:`#filled`,onClose:f},{default:e(()=>[...u[191]||=[s(`Custom link removeable`,-1)]]),_:1}),o(m,{outline:``,status:`custom`,"text-max-width":`16ch`,onClose:f},{default:e(()=>[...u[192]||=[s(` Custom label with text that overflows `,-1)]]),_:1})]),_:1}),o(h,{title:`Compact labels`,source:`<pf-label compact>Compact</pf-label>
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
</pf-label>`},{default:e(()=>[o(m,{compact:``},{default:e(()=>[...u[219]||=[s(`Compact`,-1)]]),_:1}),o(m,{compact:``},{icon:e(()=>[o(i(l))]),default:e(()=>[u[220]||=s(`Compact icon `,-1)]),_:1}),o(m,{compact:``,onClose:f},{default:e(()=>[...u[221]||=[s(`Compact removeable`,-1)]]),_:1}),o(m,{compact:``,onClose:f},{icon:e(()=>[o(i(l))]),default:e(()=>[u[222]||=s(` Compact icon removeable `,-1)]),_:1}),o(m,{compact:``,href:`#filled`},{default:e(()=>[...u[223]||=[s(`Compact link`,-1)]]),_:1}),o(m,{compact:``,href:`#filled`,onClose:f},{default:e(()=>[...u[224]||=[s(`Compact link removeable`,-1)]]),_:1}),o(m,{compact:``,"text-max-width":`16ch`,onClose:f},{icon:e(()=>[o(i(l))]),default:e(()=>[u[225]||=s(` Compact label with icon that overflows `,-1)]),_:1})]),_:1}),o(h,{title:`Truncated labels`,source:`<pf-label text-max-width="16ch" tooltip-position="right">Label is too long to fit in the label</pf-label>`},{default:e(()=>[o(m,{"text-max-width":`16ch`,"tooltip-position":`right`},{default:e(()=>[...u[226]||=[s(`Label is too long to fit in the label`,-1)]]),_:1})]),_:1}),o(h,{title:`Label group with overflow`,source:`<pf-label-group>
  <pf-label><template #icon><circle-info-icon /></template> Label 1</pf-label>
  <pf-label color="blue"><template #icon><circle-info-icon /></template> Label 2</pf-label>
  <pf-label color="green"><template #icon><circle-info-icon /></template> Label 3</pf-label>
  <pf-label color="yellow"><template #icon><circle-info-icon /></template> Label 4</pf-label>
  <pf-label color="red"><template #icon><circle-info-icon /></template> Label 5</pf-label>
  <pf-label color="purple"><template #icon><circle-info-icon /></template> Label 6</pf-label>
</pf-label-group>`},{default:e(()=>[o(g,null,{default:e(()=>[o(m,null,{icon:e(()=>[o(i(l))]),default:e(()=>[u[227]||=s(` Label 1`,-1)]),_:1}),o(m,{color:`blue`},{icon:e(()=>[o(i(l))]),default:e(()=>[u[228]||=s(` Label 2`,-1)]),_:1}),o(m,{color:`green`},{icon:e(()=>[o(i(l))]),default:e(()=>[u[229]||=s(` Label 3`,-1)]),_:1}),o(m,{color:`yellow`},{icon:e(()=>[o(i(l))]),default:e(()=>[u[230]||=s(` Label 4`,-1)]),_:1}),o(m,{color:`red`},{icon:e(()=>[o(i(l))]),default:e(()=>[u[231]||=s(` Label 5`,-1)]),_:1}),o(m,{color:`purple`},{icon:e(()=>[o(i(l))]),default:e(()=>[u[232]||=s(` Label 6`,-1)]),_:1})]),_:1})]),_:1})]),_:1})}}});export{d as default};