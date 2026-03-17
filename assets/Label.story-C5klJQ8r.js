import{H as e,N as t,c as n,h as r,it as i,k as a,m as o,p as s,s as c}from"./runtime-core.esm-bundler-BYNplpMz.js";import{p as l,t as u}from"./index-DA-Rfo6V.js";var d=r({__name:`Label.story`,setup(r){let d=u();function f(e){let t=e.target?.closest(`.pf-v6-c-label`);t instanceof HTMLElement&&d.add({title:`Clicked close button on "${t.innerText}"`,variant:`info`})}return(r,u)=>{let d=t(`component-info`),p=t(`pf-label`),m=t(`story-canvas`),h=t(`doc-page`);return a(),n(h,{name:`Components/Label.story.vue`,title:`Label`},{description:e(()=>[...u[0]||=[s(`The `,-1),c(`b`,null,`label`,-1),s(` component allows users to add specific element captions for user clarity and convenience.`,-1)]]),apidocs:e(()=>[o(d,{name:`PfLabel`,doc:{name:`PfLabel`,exportName:`PfLabel`,displayName:`Label`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`color`,description:`The color of the label outline/fill`,required:!1,type:{name:`union`,elements:[{name:`"blue"`},{name:`"teal"`},{name:`"green"`},{name:`"orange"`},{name:`"purple"`},{name:`"red"`},{name:`"orangered"`},{name:`"grey"`},{name:`"yellow"`}]},defaultValue:{func:!1,value:`'grey'`}},{name:`variant`,description:`Variant of the label.`,required:!1,type:{name:`union`,elements:[{name:`"outline"`},{name:`"filled"`},{name:`"add"`}]},defaultValue:{func:!1,value:`'filled'`}},{name:`status`,description:`Status of the label with a respective icon and color. Overrides the color set by the color property.`,required:!1,type:{name:`union`,elements:[{name:`"success"`},{name:`"warning"`},{name:`"danger"`},{name:`"info"`},{name:`"custom"`}]}},{name:`tooltipPosition`,description:`Position of the tooltip which is displayed if text is truncated`,required:!1,type:{name:`Placement`},defaultValue:{func:!1,value:`'top'`}},{name:`to`,description:`vue-router destination for a label that is a router-link. If present, the label will change to an anchor element.`,required:!1,type:{name:`RouteLocationRaw`}},{name:`href`,description:`Href for a label that is a link. If present, the label will change to an anchor element. This should not be passed in if the onClick prop is also passed in.`,required:!1,type:{name:`string`}},{name:`outline`,required:!1,type:{name:`boolean`}},{name:`compact`,description:`Flag indicating the label is compact.`,required:!1,type:{name:`boolean`}},{name:`overflow`,description:`Flag indicating if the label is an overflow label.`,required:!1,type:{name:`boolean`}},{name:`textMaxWidth`,description:`The max width of the label before it is truncated. Can be any valid CSS unit, such as '100%', '100px', or '16ch'.`,required:!1,type:{name:`string`}},{name:`closeBtnAriaLabel`,description:`Aria label for close button`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`'Close'`}},{name:`onClose`,description:`Callback for when the label is clicked. This should not be passed in if the href or editable props are also passed in.`,required:!1,type:{name:`TSFunctionType`}},{name:`onClick`,description:`Callback for when the label is clicked. This should not be passed in if the href or isEditable props are also passed in.`,required:!1,type:{name:`TSFunctionType`}}],events:[],slots:[{name:`icon`},{name:`default`},{name:`actions`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Label/Label.vue`]}})]),default:e(()=>[o(m,{title:`Filled`,source:`<pf-label>Grey</pf-label>
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
</pf-label>`},{default:e(()=>[o(p,null,{default:e(()=>[...u[1]||=[s(`Grey`,-1)]]),_:1}),o(p,null,{icon:e(()=>[o(i(l))]),default:e(()=>[u[2]||=s(`Grey icon `,-1)]),_:1}),o(p,{onClose:f},{default:e(()=>[...u[3]||=[s(`Grey removeable`,-1)]]),_:1}),o(p,{onClose:f},{icon:e(()=>[o(i(l))]),default:e(()=>[u[4]||=s(` Grey icon removeable `,-1)]),_:1}),o(p,{href:`#filled`},{default:e(()=>[...u[5]||=[s(`Grey link`,-1)]]),_:1}),o(p,{href:`#filled`,onClose:f},{default:e(()=>[...u[6]||=[s(`Grey link removeable`,-1)]]),_:1}),o(p,{"text-max-width":`16ch`,onClose:f},{icon:e(()=>[o(i(l))]),default:e(()=>[u[7]||=s(` Grey label with icon that overflows `,-1)]),_:1}),u[57]||=c(`br`,null,null,-1),u[58]||=c(`br`,null,null,-1),o(p,{color:`blue`},{default:e(()=>[...u[8]||=[s(`Blue`,-1)]]),_:1}),o(p,{color:`blue`},{icon:e(()=>[o(i(l))]),default:e(()=>[u[9]||=s(` Blue icon `,-1)]),_:1}),o(p,{color:`blue`,onClose:f},{default:e(()=>[...u[10]||=[s(`Blue removeable`,-1)]]),_:1}),o(p,{color:`blue`,onClose:f},{icon:e(()=>[o(i(l))]),default:e(()=>[u[11]||=s(` Blue icon removeable `,-1)]),_:1}),o(p,{color:`blue`,href:`#filled`},{default:e(()=>[...u[12]||=[s(`Blue link`,-1)]]),_:1}),o(p,{color:`blue`,href:`#filled`,onClose:f},{default:e(()=>[...u[13]||=[s(`Blue link removeable`,-1)]]),_:1}),o(p,{color:`blue`,"text-max-width":`16ch`,onClose:f},{icon:e(()=>[o(i(l))]),default:e(()=>[u[14]||=s(` Blue label with icon that overflows `,-1)]),_:1}),u[59]||=c(`br`,null,null,-1),u[60]||=c(`br`,null,null,-1),o(p,{color:`green`},{default:e(()=>[...u[15]||=[s(`Green`,-1)]]),_:1}),o(p,{color:`green`},{icon:e(()=>[o(i(l))]),default:e(()=>[u[16]||=s(` Green icon `,-1)]),_:1}),o(p,{color:`green`,onClose:f},{default:e(()=>[...u[17]||=[s(`Green removeable`,-1)]]),_:1}),o(p,{color:`green`,onClose:f},{icon:e(()=>[o(i(l))]),default:e(()=>[u[18]||=s(` Green icon removeable `,-1)]),_:1}),o(p,{color:`green`,href:`#filled`},{default:e(()=>[...u[19]||=[s(`Green link`,-1)]]),_:1}),o(p,{color:`green`,href:`#filled`,onClose:f},{default:e(()=>[...u[20]||=[s(`Green link removeable`,-1)]]),_:1}),o(p,{color:`green`,"text-max-width":`16ch`,onClose:f},{icon:e(()=>[o(i(l))]),default:e(()=>[u[21]||=s(` Green label with icon that overflows `,-1)]),_:1}),u[61]||=c(`br`,null,null,-1),u[62]||=c(`br`,null,null,-1),o(p,{color:`orange`},{default:e(()=>[...u[22]||=[s(`Orange`,-1)]]),_:1}),o(p,{color:`orange`},{icon:e(()=>[o(i(l))]),default:e(()=>[u[23]||=s(` Orange icon `,-1)]),_:1}),o(p,{color:`orange`,onClose:f},{default:e(()=>[...u[24]||=[s(`Orange removeable`,-1)]]),_:1}),o(p,{color:`orange`,onClose:f},{icon:e(()=>[o(i(l))]),default:e(()=>[u[25]||=s(` Orange icon removeable `,-1)]),_:1}),o(p,{color:`orange`,href:`#filled`},{default:e(()=>[...u[26]||=[s(`Orange link`,-1)]]),_:1}),o(p,{color:`orange`,href:`#filled`,onClose:f},{default:e(()=>[...u[27]||=[s(`Orange link removeable`,-1)]]),_:1}),o(p,{color:`orange`,"text-max-width":`16ch`,onClose:f},{icon:e(()=>[o(i(l))]),default:e(()=>[u[28]||=s(` Orange label with icon that overflows `,-1)]),_:1}),u[63]||=c(`br`,null,null,-1),u[64]||=c(`br`,null,null,-1),o(p,{color:`red`},{default:e(()=>[...u[29]||=[s(`Red`,-1)]]),_:1}),o(p,{color:`red`},{icon:e(()=>[o(i(l))]),default:e(()=>[u[30]||=s(` Red icon `,-1)]),_:1}),o(p,{color:`red`,onClose:f},{default:e(()=>[...u[31]||=[s(`Red removeable`,-1)]]),_:1}),o(p,{color:`red`,onClose:f},{icon:e(()=>[o(i(l))]),default:e(()=>[u[32]||=s(` Red icon removeable `,-1)]),_:1}),o(p,{color:`red`,href:`#filled`},{default:e(()=>[...u[33]||=[s(`Red link`,-1)]]),_:1}),o(p,{color:`red`,href:`#filled`,onClose:f},{default:e(()=>[...u[34]||=[s(`Red link removeable`,-1)]]),_:1}),o(p,{color:`red`,"text-max-width":`16ch`,onClose:f},{icon:e(()=>[o(i(l))]),default:e(()=>[u[35]||=s(` Red label with icon that overflows `,-1)]),_:1}),u[65]||=c(`br`,null,null,-1),u[66]||=c(`br`,null,null,-1),o(p,{color:`purple`},{default:e(()=>[...u[36]||=[s(`Purple`,-1)]]),_:1}),o(p,{color:`purple`},{icon:e(()=>[o(i(l))]),default:e(()=>[u[37]||=s(` Purple icon `,-1)]),_:1}),o(p,{color:`purple`,onClose:f},{default:e(()=>[...u[38]||=[s(`Purple removeable`,-1)]]),_:1}),o(p,{color:`purple`,onClose:f},{icon:e(()=>[o(i(l))]),default:e(()=>[u[39]||=s(` Purple icon removeable `,-1)]),_:1}),o(p,{color:`purple`,href:`#filled`},{default:e(()=>[...u[40]||=[s(`Purple link`,-1)]]),_:1}),o(p,{color:`purple`,href:`#filled`,onClose:f},{default:e(()=>[...u[41]||=[s(`Purple link removeable`,-1)]]),_:1}),o(p,{color:`purple`,"text-max-width":`16ch`,onClose:f},{icon:e(()=>[o(i(l))]),default:e(()=>[u[42]||=s(` Purple label with icon that overflows `,-1)]),_:1}),u[67]||=c(`br`,null,null,-1),u[68]||=c(`br`,null,null,-1),o(p,{color:`teal`},{default:e(()=>[...u[43]||=[s(`Teal`,-1)]]),_:1}),o(p,{color:`teal`},{icon:e(()=>[o(i(l))]),default:e(()=>[u[44]||=s(` Teal icon `,-1)]),_:1}),o(p,{color:`teal`,onClose:f},{default:e(()=>[...u[45]||=[s(`Teal removeable`,-1)]]),_:1}),o(p,{color:`teal`,onClose:f},{icon:e(()=>[o(i(l))]),default:e(()=>[u[46]||=s(` Teal icon removeable `,-1)]),_:1}),o(p,{color:`teal`,href:`#filled`},{default:e(()=>[...u[47]||=[s(`Teal link`,-1)]]),_:1}),o(p,{color:`teal`,href:`#filled`,onClose:f},{default:e(()=>[...u[48]||=[s(`Teal link removeable`,-1)]]),_:1}),o(p,{color:`teal`,"text-max-width":`16ch`,onClose:f},{icon:e(()=>[o(i(l))]),default:e(()=>[u[49]||=s(` Teal label with icon that overflows `,-1)]),_:1}),u[69]||=c(`br`,null,null,-1),u[70]||=c(`br`,null,null,-1),o(p,{color:`yellow`},{default:e(()=>[...u[50]||=[s(`Yellow`,-1)]]),_:1}),o(p,{color:`yellow`},{icon:e(()=>[o(i(l))]),default:e(()=>[u[51]||=s(` Yellow icon `,-1)]),_:1}),o(p,{color:`yellow`,onClose:f},{default:e(()=>[...u[52]||=[s(`Yellow removeable`,-1)]]),_:1}),o(p,{color:`yellow`,onClose:f},{icon:e(()=>[o(i(l))]),default:e(()=>[u[53]||=s(` Yellow icon removeable `,-1)]),_:1}),o(p,{color:`yellow`,href:`#filled`},{default:e(()=>[...u[54]||=[s(`Yellow link`,-1)]]),_:1}),o(p,{color:`yellow`,href:`#filled`,onClose:f},{default:e(()=>[...u[55]||=[s(`Yellow link removeable`,-1)]]),_:1}),o(p,{color:`yellow`,"text-max-width":`16ch`,onClose:f},{icon:e(()=>[o(i(l))]),default:e(()=>[u[56]||=s(` Yellow label with icon that overflows `,-1)]),_:1})]),_:1}),o(m,{title:`Outline`,source:`<pf-label outline>Grey</pf-label>
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
</pf-label>`},{default:e(()=>[o(p,{outline:``},{default:e(()=>[...u[71]||=[s(`Grey`,-1)]]),_:1}),o(p,{outline:``},{icon:e(()=>[o(i(l))]),default:e(()=>[u[72]||=s(`Grey icon `,-1)]),_:1}),o(p,{outline:``,onClose:f},{default:e(()=>[...u[73]||=[s(`Grey removeable`,-1)]]),_:1}),o(p,{outline:``,onClose:f},{icon:e(()=>[o(i(l))]),default:e(()=>[u[74]||=s(` Grey icon removeable `,-1)]),_:1}),o(p,{outline:``,href:`#filled`},{default:e(()=>[...u[75]||=[s(`Grey link`,-1)]]),_:1}),o(p,{outline:``,href:`#filled`,onClose:f},{default:e(()=>[...u[76]||=[s(`Grey link removeable`,-1)]]),_:1}),o(p,{outline:``,"text-max-width":`16ch`,onClose:f},{icon:e(()=>[o(i(l))]),default:e(()=>[u[77]||=s(` Grey label with icon that overflows `,-1)]),_:1}),u[127]||=c(`br`,null,null,-1),u[128]||=c(`br`,null,null,-1),o(p,{outline:``,color:`blue`},{default:e(()=>[...u[78]||=[s(`Blue`,-1)]]),_:1}),o(p,{outline:``,color:`blue`},{icon:e(()=>[o(i(l))]),default:e(()=>[u[79]||=s(` Blue icon `,-1)]),_:1}),o(p,{outline:``,color:`blue`,onClose:f},{default:e(()=>[...u[80]||=[s(`Blue removeable`,-1)]]),_:1}),o(p,{outline:``,color:`blue`,onClose:f},{icon:e(()=>[o(i(l))]),default:e(()=>[u[81]||=s(` Blue icon removeable `,-1)]),_:1}),o(p,{outline:``,color:`blue`,href:`#filled`},{default:e(()=>[...u[82]||=[s(`Blue link`,-1)]]),_:1}),o(p,{outline:``,color:`blue`,href:`#filled`,onClose:f},{default:e(()=>[...u[83]||=[s(`Blue link removeable`,-1)]]),_:1}),o(p,{outline:``,color:`blue`,"text-max-width":`16ch`,onClose:f},{icon:e(()=>[o(i(l))]),default:e(()=>[u[84]||=s(` Blue label with icon that overflows `,-1)]),_:1}),u[129]||=c(`br`,null,null,-1),u[130]||=c(`br`,null,null,-1),o(p,{outline:``,color:`green`},{default:e(()=>[...u[85]||=[s(`Green`,-1)]]),_:1}),o(p,{outline:``,color:`green`},{icon:e(()=>[o(i(l))]),default:e(()=>[u[86]||=s(` Green icon `,-1)]),_:1}),o(p,{outline:``,color:`green`,onClose:f},{default:e(()=>[...u[87]||=[s(`Green removeable`,-1)]]),_:1}),o(p,{outline:``,color:`green`,onClose:f},{icon:e(()=>[o(i(l))]),default:e(()=>[u[88]||=s(` Green icon removeable `,-1)]),_:1}),o(p,{outline:``,color:`green`,href:`#filled`},{default:e(()=>[...u[89]||=[s(`Green link`,-1)]]),_:1}),o(p,{outline:``,color:`green`,href:`#filled`,onClose:f},{default:e(()=>[...u[90]||=[s(`Green link removeable`,-1)]]),_:1}),o(p,{outline:``,color:`green`,"text-max-width":`16ch`,onClose:f},{icon:e(()=>[o(i(l))]),default:e(()=>[u[91]||=s(` Green label with icon that overflows `,-1)]),_:1}),u[131]||=c(`br`,null,null,-1),u[132]||=c(`br`,null,null,-1),o(p,{outline:``,color:`orange`},{default:e(()=>[...u[92]||=[s(`Orange`,-1)]]),_:1}),o(p,{outline:``,color:`orange`},{icon:e(()=>[o(i(l))]),default:e(()=>[u[93]||=s(` Orange icon `,-1)]),_:1}),o(p,{outline:``,color:`orange`,onClose:f},{default:e(()=>[...u[94]||=[s(`Orange removeable`,-1)]]),_:1}),o(p,{outline:``,color:`orange`,onClose:f},{icon:e(()=>[o(i(l))]),default:e(()=>[u[95]||=s(` Orange icon removeable `,-1)]),_:1}),o(p,{outline:``,color:`orange`,href:`#filled`},{default:e(()=>[...u[96]||=[s(`Orange link`,-1)]]),_:1}),o(p,{outline:``,color:`orange`,href:`#filled`,onClose:f},{default:e(()=>[...u[97]||=[s(`Orange link removeable`,-1)]]),_:1}),o(p,{outline:``,color:`orange`,"text-max-width":`16ch`,onClose:f},{icon:e(()=>[o(i(l))]),default:e(()=>[u[98]||=s(` Orange label with icon that overflows `,-1)]),_:1}),u[133]||=c(`br`,null,null,-1),u[134]||=c(`br`,null,null,-1),o(p,{outline:``,color:`red`},{default:e(()=>[...u[99]||=[s(`Red`,-1)]]),_:1}),o(p,{outline:``,color:`red`},{icon:e(()=>[o(i(l))]),default:e(()=>[u[100]||=s(` Red icon `,-1)]),_:1}),o(p,{outline:``,color:`red`,onClose:f},{default:e(()=>[...u[101]||=[s(`Red removeable`,-1)]]),_:1}),o(p,{outline:``,color:`red`,onClose:f},{icon:e(()=>[o(i(l))]),default:e(()=>[u[102]||=s(` Red icon removeable `,-1)]),_:1}),o(p,{outline:``,color:`red`,href:`#filled`},{default:e(()=>[...u[103]||=[s(`Red link`,-1)]]),_:1}),o(p,{outline:``,color:`red`,href:`#filled`,onClose:f},{default:e(()=>[...u[104]||=[s(`Red link removeable`,-1)]]),_:1}),o(p,{outline:``,color:`red`,"text-max-width":`16ch`,onClose:f},{icon:e(()=>[o(i(l))]),default:e(()=>[u[105]||=s(` Red label with icon that overflows `,-1)]),_:1}),u[135]||=c(`br`,null,null,-1),u[136]||=c(`br`,null,null,-1),o(p,{outline:``,color:`purple`},{default:e(()=>[...u[106]||=[s(`Purple`,-1)]]),_:1}),o(p,{outline:``,color:`purple`},{icon:e(()=>[o(i(l))]),default:e(()=>[u[107]||=s(` Purple icon `,-1)]),_:1}),o(p,{outline:``,color:`purple`,onClose:f},{default:e(()=>[...u[108]||=[s(`Purple removeable`,-1)]]),_:1}),o(p,{outline:``,color:`purple`,onClose:f},{icon:e(()=>[o(i(l))]),default:e(()=>[u[109]||=s(` Purple icon removeable `,-1)]),_:1}),o(p,{outline:``,color:`purple`,href:`#filled`},{default:e(()=>[...u[110]||=[s(`Purple link`,-1)]]),_:1}),o(p,{outline:``,color:`purple`,href:`#filled`,onClose:f},{default:e(()=>[...u[111]||=[s(`Purple link removeable`,-1)]]),_:1}),o(p,{outline:``,color:`purple`,"text-max-width":`16ch`,onClose:f},{icon:e(()=>[o(i(l))]),default:e(()=>[u[112]||=s(` Purple label with icon that overflows `,-1)]),_:1}),u[137]||=c(`br`,null,null,-1),u[138]||=c(`br`,null,null,-1),o(p,{outline:``,color:`teal`},{default:e(()=>[...u[113]||=[s(`Teal`,-1)]]),_:1}),o(p,{outline:``,color:`teal`},{icon:e(()=>[o(i(l))]),default:e(()=>[u[114]||=s(` Teal icon `,-1)]),_:1}),o(p,{outline:``,color:`teal`,onClose:f},{default:e(()=>[...u[115]||=[s(`Teal removeable`,-1)]]),_:1}),o(p,{outline:``,color:`teal`,onClose:f},{icon:e(()=>[o(i(l))]),default:e(()=>[u[116]||=s(` Teal icon removeable `,-1)]),_:1}),o(p,{outline:``,color:`teal`,href:`#filled`},{default:e(()=>[...u[117]||=[s(`Teal link`,-1)]]),_:1}),o(p,{outline:``,color:`teal`,href:`#filled`,onClose:f},{default:e(()=>[...u[118]||=[s(`Teal link removeable`,-1)]]),_:1}),o(p,{outline:``,color:`teal`,"text-max-width":`16ch`,onClose:f},{icon:e(()=>[o(i(l))]),default:e(()=>[u[119]||=s(` Teal label with icon that overflows `,-1)]),_:1}),u[139]||=c(`br`,null,null,-1),u[140]||=c(`br`,null,null,-1),o(p,{outline:``,color:`yellow`},{default:e(()=>[...u[120]||=[s(`Yellow`,-1)]]),_:1}),o(p,{outline:``,color:`yellow`},{icon:e(()=>[o(i(l))]),default:e(()=>[u[121]||=s(` Yellow icon `,-1)]),_:1}),o(p,{outline:``,color:`yellow`,onClose:f},{default:e(()=>[...u[122]||=[s(`Yellow removeable`,-1)]]),_:1}),o(p,{outline:``,color:`yellow`,onClose:f},{icon:e(()=>[o(i(l))]),default:e(()=>[u[123]||=s(` Yellow icon removeable `,-1)]),_:1}),o(p,{outline:``,color:`yellow`,href:`#filled`},{default:e(()=>[...u[124]||=[s(`Yellow link`,-1)]]),_:1}),o(p,{outline:``,color:`yellow`,href:`#filled`,onClose:f},{default:e(()=>[...u[125]||=[s(`Yellow link removeable`,-1)]]),_:1}),o(p,{outline:``,color:`yellow`,"text-max-width":`16ch`,onClose:f},{icon:e(()=>[o(i(l))]),default:e(()=>[u[126]||=s(` Yellow label with icon that overflows `,-1)]),_:1})]),_:1}),o(m,{title:`Compact`,source:`<pf-label compact>Compact</pf-label>
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
</pf-label>`},{default:e(()=>[o(p,{compact:``},{default:e(()=>[...u[141]||=[s(`Compact`,-1)]]),_:1}),o(p,{compact:``},{icon:e(()=>[o(i(l))]),default:e(()=>[u[142]||=s(`Compact icon `,-1)]),_:1}),o(p,{compact:``,onClose:f},{default:e(()=>[...u[143]||=[s(`Compact removeable`,-1)]]),_:1}),o(p,{compact:``,onClose:f},{icon:e(()=>[o(i(l))]),default:e(()=>[u[144]||=s(` Compact icon removeable `,-1)]),_:1}),o(p,{compact:``,href:`#filled`},{default:e(()=>[...u[145]||=[s(`Compact link`,-1)]]),_:1}),o(p,{compact:``,href:`#filled`,onClose:f},{default:e(()=>[...u[146]||=[s(`Compact link removeable`,-1)]]),_:1}),o(p,{compact:``,"text-max-width":`16ch`,onClose:f},{icon:e(()=>[o(i(l))]),default:e(()=>[u[147]||=s(` Compact label with icon that overflows `,-1)]),_:1})]),_:1}),o(m,{title:`Truncated`,source:`<pf-label text-max-width="16ch" tooltip-position="right">Label is too long to fit in the label</pf-label>`},{default:e(()=>[o(p,{"text-max-width":`16ch`,"tooltip-position":`right`},{default:e(()=>[...u[148]||=[s(`Label is too long to fit in the label`,-1)]]),_:1})]),_:1})]),_:1})}}});export{d as default};