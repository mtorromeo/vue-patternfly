import{D as e,E as t,I as n,N as r,O as i,S as a,j as o,p as s,t as c,x as l,z as u}from"./index-mFbvqZfx.js";var d=i({__name:`Label.story`,setup(i){let d=c();function f(e){let t=e.target?.closest(`.pf-v6-c-label`);t instanceof HTMLElement&&d.add({title:`Clicked close button on "${t.innerText}"`,variant:`info`})}return(i,c)=>{let d=r(`component-info`),p=r(`pf-label`),m=r(`story-canvas`),h=r(`doc-page`);return o(),a(h,{name:`Components/Label.story.vue`,title:`Label`},{description:n(()=>[...c[0]||=[t(`The `,-1),l(`b`,null,`label`,-1),t(` component allows users to add specific element captions for user clarity and convenience.`,-1)]]),apidocs:n(()=>[e(d,{name:`PfLabel`,doc:{name:`PfLabel`,exportName:`PfLabel`,displayName:`Label`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`color`,description:`The color of the label outline/fill`,required:!1,type:{name:`union`,elements:[{name:`"blue"`},{name:`"teal"`},{name:`"green"`},{name:`"orange"`},{name:`"purple"`},{name:`"red"`},{name:`"orangered"`},{name:`"grey"`},{name:`"yellow"`}]},defaultValue:{func:!1,value:`'grey'`}},{name:`variant`,description:`Variant of the label.`,required:!1,type:{name:`union`,elements:[{name:`"outline"`},{name:`"filled"`},{name:`"add"`}]},defaultValue:{func:!1,value:`'filled'`}},{name:`status`,description:`Status of the label with a respective icon and color. Overrides the color set by the color property.`,required:!1,type:{name:`union`,elements:[{name:`"success"`},{name:`"warning"`},{name:`"danger"`},{name:`"info"`},{name:`"custom"`}]}},{name:`tooltipPosition`,description:`Position of the tooltip which is displayed if text is truncated`,required:!1,type:{name:`Placement`},defaultValue:{func:!1,value:`'top'`}},{name:`to`,description:`vue-router destination for a label that is a router-link. If present, the label will change to an anchor element.`,required:!1,type:{name:`RouteLocationRaw`}},{name:`href`,description:`Href for a label that is a link. If present, the label will change to an anchor element. This should not be passed in if the onClick prop is also passed in.`,required:!1,type:{name:`string`}},{name:`outline`,required:!1,type:{name:`boolean`}},{name:`compact`,description:`Flag indicating the label is compact.`,required:!1,type:{name:`boolean`}},{name:`overflow`,description:`Flag indicating if the label is an overflow label.`,required:!1,type:{name:`boolean`}},{name:`textMaxWidth`,description:`The max width of the label before it is truncated. Can be any valid CSS unit, such as '100%', '100px', or '16ch'.`,required:!1,type:{name:`string`}},{name:`closeBtnAriaLabel`,description:`Aria label for close button`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`'Close'`}},{name:`onClose`,description:`Callback for when the label is clicked. This should not be passed in if the href or editable props are also passed in.`,required:!1,type:{name:`TSFunctionType`}},{name:`onClick`,description:`Callback for when the label is clicked. This should not be passed in if the href or isEditable props are also passed in.`,required:!1,type:{name:`TSFunctionType`}}],events:[],slots:[{name:`icon`},{name:`default`},{name:`actions`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Label/Label.vue`]}})]),default:n(()=>[e(m,{title:`Filled`,source:`<pf-label>Grey</pf-label>
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
</pf-label>`},{default:n(()=>[e(p,null,{default:n(()=>[...c[1]||=[t(`Grey`,-1)]]),_:1}),e(p,null,{icon:n(()=>[e(u(s))]),default:n(()=>[c[2]||=t(`Grey icon `,-1)]),_:1}),e(p,{onClose:f},{default:n(()=>[...c[3]||=[t(`Grey removeable`,-1)]]),_:1}),e(p,{onClose:f},{icon:n(()=>[e(u(s))]),default:n(()=>[c[4]||=t(` Grey icon removeable `,-1)]),_:1}),e(p,{href:`#filled`},{default:n(()=>[...c[5]||=[t(`Grey link`,-1)]]),_:1}),e(p,{href:`#filled`,onClose:f},{default:n(()=>[...c[6]||=[t(`Grey link removeable`,-1)]]),_:1}),e(p,{"text-max-width":`16ch`,onClose:f},{icon:n(()=>[e(u(s))]),default:n(()=>[c[7]||=t(` Grey label with icon that overflows `,-1)]),_:1}),c[57]||=l(`br`,null,null,-1),c[58]||=l(`br`,null,null,-1),e(p,{color:`blue`},{default:n(()=>[...c[8]||=[t(`Blue`,-1)]]),_:1}),e(p,{color:`blue`},{icon:n(()=>[e(u(s))]),default:n(()=>[c[9]||=t(` Blue icon `,-1)]),_:1}),e(p,{color:`blue`,onClose:f},{default:n(()=>[...c[10]||=[t(`Blue removeable`,-1)]]),_:1}),e(p,{color:`blue`,onClose:f},{icon:n(()=>[e(u(s))]),default:n(()=>[c[11]||=t(` Blue icon removeable `,-1)]),_:1}),e(p,{color:`blue`,href:`#filled`},{default:n(()=>[...c[12]||=[t(`Blue link`,-1)]]),_:1}),e(p,{color:`blue`,href:`#filled`,onClose:f},{default:n(()=>[...c[13]||=[t(`Blue link removeable`,-1)]]),_:1}),e(p,{color:`blue`,"text-max-width":`16ch`,onClose:f},{icon:n(()=>[e(u(s))]),default:n(()=>[c[14]||=t(` Blue label with icon that overflows `,-1)]),_:1}),c[59]||=l(`br`,null,null,-1),c[60]||=l(`br`,null,null,-1),e(p,{color:`green`},{default:n(()=>[...c[15]||=[t(`Green`,-1)]]),_:1}),e(p,{color:`green`},{icon:n(()=>[e(u(s))]),default:n(()=>[c[16]||=t(` Green icon `,-1)]),_:1}),e(p,{color:`green`,onClose:f},{default:n(()=>[...c[17]||=[t(`Green removeable`,-1)]]),_:1}),e(p,{color:`green`,onClose:f},{icon:n(()=>[e(u(s))]),default:n(()=>[c[18]||=t(` Green icon removeable `,-1)]),_:1}),e(p,{color:`green`,href:`#filled`},{default:n(()=>[...c[19]||=[t(`Green link`,-1)]]),_:1}),e(p,{color:`green`,href:`#filled`,onClose:f},{default:n(()=>[...c[20]||=[t(`Green link removeable`,-1)]]),_:1}),e(p,{color:`green`,"text-max-width":`16ch`,onClose:f},{icon:n(()=>[e(u(s))]),default:n(()=>[c[21]||=t(` Green label with icon that overflows `,-1)]),_:1}),c[61]||=l(`br`,null,null,-1),c[62]||=l(`br`,null,null,-1),e(p,{color:`orange`},{default:n(()=>[...c[22]||=[t(`Orange`,-1)]]),_:1}),e(p,{color:`orange`},{icon:n(()=>[e(u(s))]),default:n(()=>[c[23]||=t(` Orange icon `,-1)]),_:1}),e(p,{color:`orange`,onClose:f},{default:n(()=>[...c[24]||=[t(`Orange removeable`,-1)]]),_:1}),e(p,{color:`orange`,onClose:f},{icon:n(()=>[e(u(s))]),default:n(()=>[c[25]||=t(` Orange icon removeable `,-1)]),_:1}),e(p,{color:`orange`,href:`#filled`},{default:n(()=>[...c[26]||=[t(`Orange link`,-1)]]),_:1}),e(p,{color:`orange`,href:`#filled`,onClose:f},{default:n(()=>[...c[27]||=[t(`Orange link removeable`,-1)]]),_:1}),e(p,{color:`orange`,"text-max-width":`16ch`,onClose:f},{icon:n(()=>[e(u(s))]),default:n(()=>[c[28]||=t(` Orange label with icon that overflows `,-1)]),_:1}),c[63]||=l(`br`,null,null,-1),c[64]||=l(`br`,null,null,-1),e(p,{color:`red`},{default:n(()=>[...c[29]||=[t(`Red`,-1)]]),_:1}),e(p,{color:`red`},{icon:n(()=>[e(u(s))]),default:n(()=>[c[30]||=t(` Red icon `,-1)]),_:1}),e(p,{color:`red`,onClose:f},{default:n(()=>[...c[31]||=[t(`Red removeable`,-1)]]),_:1}),e(p,{color:`red`,onClose:f},{icon:n(()=>[e(u(s))]),default:n(()=>[c[32]||=t(` Red icon removeable `,-1)]),_:1}),e(p,{color:`red`,href:`#filled`},{default:n(()=>[...c[33]||=[t(`Red link`,-1)]]),_:1}),e(p,{color:`red`,href:`#filled`,onClose:f},{default:n(()=>[...c[34]||=[t(`Red link removeable`,-1)]]),_:1}),e(p,{color:`red`,"text-max-width":`16ch`,onClose:f},{icon:n(()=>[e(u(s))]),default:n(()=>[c[35]||=t(` Red label with icon that overflows `,-1)]),_:1}),c[65]||=l(`br`,null,null,-1),c[66]||=l(`br`,null,null,-1),e(p,{color:`purple`},{default:n(()=>[...c[36]||=[t(`Purple`,-1)]]),_:1}),e(p,{color:`purple`},{icon:n(()=>[e(u(s))]),default:n(()=>[c[37]||=t(` Purple icon `,-1)]),_:1}),e(p,{color:`purple`,onClose:f},{default:n(()=>[...c[38]||=[t(`Purple removeable`,-1)]]),_:1}),e(p,{color:`purple`,onClose:f},{icon:n(()=>[e(u(s))]),default:n(()=>[c[39]||=t(` Purple icon removeable `,-1)]),_:1}),e(p,{color:`purple`,href:`#filled`},{default:n(()=>[...c[40]||=[t(`Purple link`,-1)]]),_:1}),e(p,{color:`purple`,href:`#filled`,onClose:f},{default:n(()=>[...c[41]||=[t(`Purple link removeable`,-1)]]),_:1}),e(p,{color:`purple`,"text-max-width":`16ch`,onClose:f},{icon:n(()=>[e(u(s))]),default:n(()=>[c[42]||=t(` Purple label with icon that overflows `,-1)]),_:1}),c[67]||=l(`br`,null,null,-1),c[68]||=l(`br`,null,null,-1),e(p,{color:`teal`},{default:n(()=>[...c[43]||=[t(`Teal`,-1)]]),_:1}),e(p,{color:`teal`},{icon:n(()=>[e(u(s))]),default:n(()=>[c[44]||=t(` Teal icon `,-1)]),_:1}),e(p,{color:`teal`,onClose:f},{default:n(()=>[...c[45]||=[t(`Teal removeable`,-1)]]),_:1}),e(p,{color:`teal`,onClose:f},{icon:n(()=>[e(u(s))]),default:n(()=>[c[46]||=t(` Teal icon removeable `,-1)]),_:1}),e(p,{color:`teal`,href:`#filled`},{default:n(()=>[...c[47]||=[t(`Teal link`,-1)]]),_:1}),e(p,{color:`teal`,href:`#filled`,onClose:f},{default:n(()=>[...c[48]||=[t(`Teal link removeable`,-1)]]),_:1}),e(p,{color:`teal`,"text-max-width":`16ch`,onClose:f},{icon:n(()=>[e(u(s))]),default:n(()=>[c[49]||=t(` Teal label with icon that overflows `,-1)]),_:1}),c[69]||=l(`br`,null,null,-1),c[70]||=l(`br`,null,null,-1),e(p,{color:`yellow`},{default:n(()=>[...c[50]||=[t(`Yellow`,-1)]]),_:1}),e(p,{color:`yellow`},{icon:n(()=>[e(u(s))]),default:n(()=>[c[51]||=t(` Yellow icon `,-1)]),_:1}),e(p,{color:`yellow`,onClose:f},{default:n(()=>[...c[52]||=[t(`Yellow removeable`,-1)]]),_:1}),e(p,{color:`yellow`,onClose:f},{icon:n(()=>[e(u(s))]),default:n(()=>[c[53]||=t(` Yellow icon removeable `,-1)]),_:1}),e(p,{color:`yellow`,href:`#filled`},{default:n(()=>[...c[54]||=[t(`Yellow link`,-1)]]),_:1}),e(p,{color:`yellow`,href:`#filled`,onClose:f},{default:n(()=>[...c[55]||=[t(`Yellow link removeable`,-1)]]),_:1}),e(p,{color:`yellow`,"text-max-width":`16ch`,onClose:f},{icon:n(()=>[e(u(s))]),default:n(()=>[c[56]||=t(` Yellow label with icon that overflows `,-1)]),_:1})]),_:1}),e(m,{title:`Outline`,source:`<pf-label outline>Grey</pf-label>
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
</pf-label>`},{default:n(()=>[e(p,{outline:``},{default:n(()=>[...c[71]||=[t(`Grey`,-1)]]),_:1}),e(p,{outline:``},{icon:n(()=>[e(u(s))]),default:n(()=>[c[72]||=t(`Grey icon `,-1)]),_:1}),e(p,{outline:``,onClose:f},{default:n(()=>[...c[73]||=[t(`Grey removeable`,-1)]]),_:1}),e(p,{outline:``,onClose:f},{icon:n(()=>[e(u(s))]),default:n(()=>[c[74]||=t(` Grey icon removeable `,-1)]),_:1}),e(p,{outline:``,href:`#filled`},{default:n(()=>[...c[75]||=[t(`Grey link`,-1)]]),_:1}),e(p,{outline:``,href:`#filled`,onClose:f},{default:n(()=>[...c[76]||=[t(`Grey link removeable`,-1)]]),_:1}),e(p,{outline:``,"text-max-width":`16ch`,onClose:f},{icon:n(()=>[e(u(s))]),default:n(()=>[c[77]||=t(` Grey label with icon that overflows `,-1)]),_:1}),c[127]||=l(`br`,null,null,-1),c[128]||=l(`br`,null,null,-1),e(p,{outline:``,color:`blue`},{default:n(()=>[...c[78]||=[t(`Blue`,-1)]]),_:1}),e(p,{outline:``,color:`blue`},{icon:n(()=>[e(u(s))]),default:n(()=>[c[79]||=t(` Blue icon `,-1)]),_:1}),e(p,{outline:``,color:`blue`,onClose:f},{default:n(()=>[...c[80]||=[t(`Blue removeable`,-1)]]),_:1}),e(p,{outline:``,color:`blue`,onClose:f},{icon:n(()=>[e(u(s))]),default:n(()=>[c[81]||=t(` Blue icon removeable `,-1)]),_:1}),e(p,{outline:``,color:`blue`,href:`#filled`},{default:n(()=>[...c[82]||=[t(`Blue link`,-1)]]),_:1}),e(p,{outline:``,color:`blue`,href:`#filled`,onClose:f},{default:n(()=>[...c[83]||=[t(`Blue link removeable`,-1)]]),_:1}),e(p,{outline:``,color:`blue`,"text-max-width":`16ch`,onClose:f},{icon:n(()=>[e(u(s))]),default:n(()=>[c[84]||=t(` Blue label with icon that overflows `,-1)]),_:1}),c[129]||=l(`br`,null,null,-1),c[130]||=l(`br`,null,null,-1),e(p,{outline:``,color:`green`},{default:n(()=>[...c[85]||=[t(`Green`,-1)]]),_:1}),e(p,{outline:``,color:`green`},{icon:n(()=>[e(u(s))]),default:n(()=>[c[86]||=t(` Green icon `,-1)]),_:1}),e(p,{outline:``,color:`green`,onClose:f},{default:n(()=>[...c[87]||=[t(`Green removeable`,-1)]]),_:1}),e(p,{outline:``,color:`green`,onClose:f},{icon:n(()=>[e(u(s))]),default:n(()=>[c[88]||=t(` Green icon removeable `,-1)]),_:1}),e(p,{outline:``,color:`green`,href:`#filled`},{default:n(()=>[...c[89]||=[t(`Green link`,-1)]]),_:1}),e(p,{outline:``,color:`green`,href:`#filled`,onClose:f},{default:n(()=>[...c[90]||=[t(`Green link removeable`,-1)]]),_:1}),e(p,{outline:``,color:`green`,"text-max-width":`16ch`,onClose:f},{icon:n(()=>[e(u(s))]),default:n(()=>[c[91]||=t(` Green label with icon that overflows `,-1)]),_:1}),c[131]||=l(`br`,null,null,-1),c[132]||=l(`br`,null,null,-1),e(p,{outline:``,color:`orange`},{default:n(()=>[...c[92]||=[t(`Orange`,-1)]]),_:1}),e(p,{outline:``,color:`orange`},{icon:n(()=>[e(u(s))]),default:n(()=>[c[93]||=t(` Orange icon `,-1)]),_:1}),e(p,{outline:``,color:`orange`,onClose:f},{default:n(()=>[...c[94]||=[t(`Orange removeable`,-1)]]),_:1}),e(p,{outline:``,color:`orange`,onClose:f},{icon:n(()=>[e(u(s))]),default:n(()=>[c[95]||=t(` Orange icon removeable `,-1)]),_:1}),e(p,{outline:``,color:`orange`,href:`#filled`},{default:n(()=>[...c[96]||=[t(`Orange link`,-1)]]),_:1}),e(p,{outline:``,color:`orange`,href:`#filled`,onClose:f},{default:n(()=>[...c[97]||=[t(`Orange link removeable`,-1)]]),_:1}),e(p,{outline:``,color:`orange`,"text-max-width":`16ch`,onClose:f},{icon:n(()=>[e(u(s))]),default:n(()=>[c[98]||=t(` Orange label with icon that overflows `,-1)]),_:1}),c[133]||=l(`br`,null,null,-1),c[134]||=l(`br`,null,null,-1),e(p,{outline:``,color:`red`},{default:n(()=>[...c[99]||=[t(`Red`,-1)]]),_:1}),e(p,{outline:``,color:`red`},{icon:n(()=>[e(u(s))]),default:n(()=>[c[100]||=t(` Red icon `,-1)]),_:1}),e(p,{outline:``,color:`red`,onClose:f},{default:n(()=>[...c[101]||=[t(`Red removeable`,-1)]]),_:1}),e(p,{outline:``,color:`red`,onClose:f},{icon:n(()=>[e(u(s))]),default:n(()=>[c[102]||=t(` Red icon removeable `,-1)]),_:1}),e(p,{outline:``,color:`red`,href:`#filled`},{default:n(()=>[...c[103]||=[t(`Red link`,-1)]]),_:1}),e(p,{outline:``,color:`red`,href:`#filled`,onClose:f},{default:n(()=>[...c[104]||=[t(`Red link removeable`,-1)]]),_:1}),e(p,{outline:``,color:`red`,"text-max-width":`16ch`,onClose:f},{icon:n(()=>[e(u(s))]),default:n(()=>[c[105]||=t(` Red label with icon that overflows `,-1)]),_:1}),c[135]||=l(`br`,null,null,-1),c[136]||=l(`br`,null,null,-1),e(p,{outline:``,color:`purple`},{default:n(()=>[...c[106]||=[t(`Purple`,-1)]]),_:1}),e(p,{outline:``,color:`purple`},{icon:n(()=>[e(u(s))]),default:n(()=>[c[107]||=t(` Purple icon `,-1)]),_:1}),e(p,{outline:``,color:`purple`,onClose:f},{default:n(()=>[...c[108]||=[t(`Purple removeable`,-1)]]),_:1}),e(p,{outline:``,color:`purple`,onClose:f},{icon:n(()=>[e(u(s))]),default:n(()=>[c[109]||=t(` Purple icon removeable `,-1)]),_:1}),e(p,{outline:``,color:`purple`,href:`#filled`},{default:n(()=>[...c[110]||=[t(`Purple link`,-1)]]),_:1}),e(p,{outline:``,color:`purple`,href:`#filled`,onClose:f},{default:n(()=>[...c[111]||=[t(`Purple link removeable`,-1)]]),_:1}),e(p,{outline:``,color:`purple`,"text-max-width":`16ch`,onClose:f},{icon:n(()=>[e(u(s))]),default:n(()=>[c[112]||=t(` Purple label with icon that overflows `,-1)]),_:1}),c[137]||=l(`br`,null,null,-1),c[138]||=l(`br`,null,null,-1),e(p,{outline:``,color:`teal`},{default:n(()=>[...c[113]||=[t(`Teal`,-1)]]),_:1}),e(p,{outline:``,color:`teal`},{icon:n(()=>[e(u(s))]),default:n(()=>[c[114]||=t(` Teal icon `,-1)]),_:1}),e(p,{outline:``,color:`teal`,onClose:f},{default:n(()=>[...c[115]||=[t(`Teal removeable`,-1)]]),_:1}),e(p,{outline:``,color:`teal`,onClose:f},{icon:n(()=>[e(u(s))]),default:n(()=>[c[116]||=t(` Teal icon removeable `,-1)]),_:1}),e(p,{outline:``,color:`teal`,href:`#filled`},{default:n(()=>[...c[117]||=[t(`Teal link`,-1)]]),_:1}),e(p,{outline:``,color:`teal`,href:`#filled`,onClose:f},{default:n(()=>[...c[118]||=[t(`Teal link removeable`,-1)]]),_:1}),e(p,{outline:``,color:`teal`,"text-max-width":`16ch`,onClose:f},{icon:n(()=>[e(u(s))]),default:n(()=>[c[119]||=t(` Teal label with icon that overflows `,-1)]),_:1}),c[139]||=l(`br`,null,null,-1),c[140]||=l(`br`,null,null,-1),e(p,{outline:``,color:`yellow`},{default:n(()=>[...c[120]||=[t(`Yellow`,-1)]]),_:1}),e(p,{outline:``,color:`yellow`},{icon:n(()=>[e(u(s))]),default:n(()=>[c[121]||=t(` Yellow icon `,-1)]),_:1}),e(p,{outline:``,color:`yellow`,onClose:f},{default:n(()=>[...c[122]||=[t(`Yellow removeable`,-1)]]),_:1}),e(p,{outline:``,color:`yellow`,onClose:f},{icon:n(()=>[e(u(s))]),default:n(()=>[c[123]||=t(` Yellow icon removeable `,-1)]),_:1}),e(p,{outline:``,color:`yellow`,href:`#filled`},{default:n(()=>[...c[124]||=[t(`Yellow link`,-1)]]),_:1}),e(p,{outline:``,color:`yellow`,href:`#filled`,onClose:f},{default:n(()=>[...c[125]||=[t(`Yellow link removeable`,-1)]]),_:1}),e(p,{outline:``,color:`yellow`,"text-max-width":`16ch`,onClose:f},{icon:n(()=>[e(u(s))]),default:n(()=>[c[126]||=t(` Yellow label with icon that overflows `,-1)]),_:1})]),_:1}),e(m,{title:`Compact`,source:`<pf-label compact>Compact</pf-label>
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
</pf-label>`},{default:n(()=>[e(p,{compact:``},{default:n(()=>[...c[141]||=[t(`Compact`,-1)]]),_:1}),e(p,{compact:``},{icon:n(()=>[e(u(s))]),default:n(()=>[c[142]||=t(`Compact icon `,-1)]),_:1}),e(p,{compact:``,onClose:f},{default:n(()=>[...c[143]||=[t(`Compact removeable`,-1)]]),_:1}),e(p,{compact:``,onClose:f},{icon:n(()=>[e(u(s))]),default:n(()=>[c[144]||=t(` Compact icon removeable `,-1)]),_:1}),e(p,{compact:``,href:`#filled`},{default:n(()=>[...c[145]||=[t(`Compact link`,-1)]]),_:1}),e(p,{compact:``,href:`#filled`,onClose:f},{default:n(()=>[...c[146]||=[t(`Compact link removeable`,-1)]]),_:1}),e(p,{compact:``,"text-max-width":`16ch`,onClose:f},{icon:n(()=>[e(u(s))]),default:n(()=>[c[147]||=t(` Compact label with icon that overflows `,-1)]),_:1})]),_:1}),e(m,{title:`Truncated`,source:`<pf-label text-max-width="16ch" tooltip-position="right">Label is too long to fit in the label</pf-label>`},{default:n(()=>[e(p,{"text-max-width":`16ch`,"tooltip-position":`right`},{default:n(()=>[...c[148]||=[t(`Label is too long to fit in the label`,-1)]]),_:1})]),_:1})]),_:1})}}});export{d as default};