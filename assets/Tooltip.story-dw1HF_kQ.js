import{E as e,H as t,N as n,Q as r,Z as i,c as a,h as o,it as s,k as c,m as l,p as u,s as d,z as f}from"./runtime-core.esm-bundler-DvxuuL12.js";import{u as p}from"./index-CGJnxYzR.js";var m={style:{margin:`6rem`}},h={style:{"margin-top":`1rem`,height:`20rem`,width:`100%`,overflow:`auto`,position:`relative`,border:`1px dashed red`}},g=o({__name:`Tooltip.story`,setup(o){let g=f(`buttonRef`),_=i([`mouseenter`,`focus`]),v=r(!1),y=r(!0),b=r(`auto`),x=r(300),S=r(300),C=r(0),w=r(15);e(()=>{g.value?.el instanceof HTMLElement&&g.value.el.scrollIntoView({behavior:`instant`,block:`center`,inline:`center`})});function T(e,t){t?_.push(e):_.splice(_.indexOf(e),1)}return(e,r)=>{let i=n(`component-info`),o=n(`pf-tooltip`),f=n(`story-canvas`),g=n(`pf-checkbox`),E=n(`pf-form-group`),D=n(`pf-form-select-option`),O=n(`pf-form-select`),k=n(`pf-text-input`),A=n(`pf-input-group-item`),j=n(`pf-input-group-text`),M=n(`pf-input-group`),N=n(`pf-form`),P=n(`pf-bullseye`),F=n(`doc-page`);return c(),a(F,{name:`Components/Tooltip.story.vue`,title:`Tooltip`},{description:t(()=>[...r[10]||=[u(`A `,-1),d(`b`,null,`tooltip`,-1),u(` is in-app messaging used to identify elements on a page with short, clarifying text.`,-1)]]),apidocs:t(()=>[l(i,{name:`PfTooltip`,doc:{name:`PfTooltip`,exportName:`PfTooltip`,displayName:`Tooltip`,description:``,tags:{},expose:[{name:`el`}],props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`appendTo`,description:`Element or selector where to render the floating menu`,required:!1,type:{name:`union`,elements:[{name:`"inline"`},{name:`string`},{name:`RendererElement`},{name:`null`},{name:`undefined`}]}},{name:`position`,description:`Tooltip position`,required:!1,type:{name:`Placement`},defaultValue:{func:!1,value:`'top'`}},{name:`trigger`,description:`A combination of the strings 'mouseenter', 'focus' and 'click'`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`'mouseenter focus'`}},{name:`leftAligned`,description:`Flag to indicate that the text content is left aligned`,required:!1,type:{name:`boolean`}},{name:`entryDelay`,description:`Delay in ms before the tooltip appears`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`1000`}},{name:`exitDelay`,description:`Delay in ms before the tooltip disappears, Avoid passing in a value of "0", as users should
be given ample time to move their mouse from the trigger to the tooltip content without the content
being hidden.`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`0`}},{name:`distance`,description:`Distance of the tooltip to its target`,required:!1,type:{name:`union`,elements:[{name:`number`},{name:`string`}]},defaultValue:{func:!1,value:`15`}},{name:`aria`,description:`aria-labelledby or aria-describedby for tooltip.
The trigger will be cloned to add the aria attribute, and the corresponding id in the form of 'pf-tooltip-#' is added to the content container.
If you don't want that or prefer to add the aria attribute yourself on the trigger, set aria to 'none'.`,required:!1,type:{name:`union`,elements:[{name:`"describedby"`},{name:`"labelledby"`},{name:`"none"`}]},defaultValue:{func:!1,value:`'describedby'`}},{name:`animationDuration`,description:`CSS fade transition animation duration`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`300`}},{name:`minWidth`,description:`Minimum width of the tooltip. If set to "trigger", the minimum width will be set to the reference element width.`,required:!1,type:{name:`union`,elements:[{name:`string`},{name:`"trigger"`},{name:`"auto"`}]}},{name:`maxWidth`,description:`Maximum width of the tooltip`,required:!1,type:{name:`number`}},{name:`content`,description:`Tooltip content`,required:!1,type:{name:`string`}},{name:`flip`,description:`The desired position to flip the tooltip to if the initial position is not possible.
By setting this prop to 'flip' it attempts to flip the tooltip to the opposite side if there is no space.`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}}],events:[],slots:[{name:`default`},{name:`content`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Tooltip/Tooltip.vue`]}}),l(i,{name:`PfTooltipArrow`,doc:{name:`PfTooltipArrow`,exportName:`PfTooltipArrow`,displayName:`TooltipArrow`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Tooltip/TooltipArrow.vue`]}}),l(i,{name:`PfTooltipContent`,doc:{name:`PfTooltipContent`,exportName:`PfTooltipContent`,displayName:`TooltipContent`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`leftAligned`,required:!1,type:{name:`boolean`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Tooltip/TooltipContent.vue`]}})]),default:t(()=>[r[31]||=d(`div`,{class:`markdown pf-v6-c-content`},[d(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),l(f,{title:`Basic`,source:`<div style="margin: 6rem">
  <pf-tooltip>
    <template #content>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.</template>
    <pf-button>I have a tooltip!</pf-button>
  </pf-tooltip>
</div>`},{default:t(()=>[d(`div`,m,[l(o,null,{content:t(()=>[...r[11]||=[u(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.`,-1)]]),default:t(()=>[l(s(p),null,{default:t(()=>[...r[12]||=[u(`I have a tooltip!`,-1)]]),_:1})]),_:1})])]),_:1}),l(f,{title:`Options`,source:`<pf-form horizontal>
  <pf-form-group label="Trigger">
    <pf-checkbox label="mouseenter" :model-value="trigger.includes('mouseenter')" @update:model-value="checkTrigger('mouseenter', $event)" />
    <pf-checkbox label="focus" :model-value="trigger.includes('focus')" @update:model-value="checkTrigger('focus', $event)" />
    <pf-checkbox label="click" :model-value="trigger.includes('click')" @update:model-value="checkTrigger('click', $event)" />
  </pf-form-group>

  <pf-form-group label="Content">
    <pf-checkbox v-model="leftAligned" label="Left aligned" />
  </pf-form-group>

  <pf-form-group label="Position">
    <pf-checkbox v-model="flip" label="Flip (used only with position != 'auto')" />

    <pf-form-select :model-value="position" @update:model-value="position = ($event as Placement)">
      <pf-form-select-option value="auto">auto</pf-form-select-option>
      <pf-form-select-option value="top">top</pf-form-select-option>
      <pf-form-select-option value="bottom">bottom</pf-form-select-option>
      <pf-form-select-option value="left">left</pf-form-select-option>
      <pf-form-select-option value="right">right</pf-form-select-option>
      <pf-form-select-option value="top-start">top-start</pf-form-select-option>
      <pf-form-select-option value="top-end">top-end</pf-form-select-option>
      <pf-form-select-option value="bottom-start">bottom-start</pf-form-select-option>
      <pf-form-select-option value="bottom-end">bottom-end</pf-form-select-option>
      <pf-form-select-option value="left-start">left-start</pf-form-select-option>
      <pf-form-select-option value="left-end">left-end</pf-form-select-option>
      <pf-form-select-option value="right-start">right-start</pf-form-select-option>
      <pf-form-select-option value="right-end">right-end</pf-form-select-option>
    </pf-form-select>
  </pf-form-group>

  <pf-form-group label="Animation duration">
    <pf-input-group>
      <pf-input-group-item fill>
        <pf-text-input v-model.number.lazy="animationDuration" type="number" />
      </pf-input-group-item>
      <pf-input-group-text>ms</pf-input-group-text>
    </pf-input-group>
  </pf-form-group>

  <pf-form-group label="Entry delay">
    <pf-input-group>
      <pf-input-group-item fill>
        <pf-text-input v-model.number.lazy="entryDelay" type="number" />
      </pf-input-group-item>
      <pf-input-group-text>ms</pf-input-group-text>
    </pf-input-group>
  </pf-form-group>

  <pf-form-group label="Exit delay">
    <pf-input-group>
      <pf-input-group-item fill>
        <pf-text-input v-model.number.lazy="exitDelay" type="number" />
      </pf-input-group-item>
      <pf-input-group-text>ms</pf-input-group-text>
    </pf-input-group>
  </pf-form-group>

  <pf-form-group label="Distance">
    <pf-text-input v-model.lazy="distance" type="number" />
  </pf-form-group>
</pf-form>

<div style="margin-top: 1rem; height: 20rem; width: 100%; overflow: auto; position: relative; border: 1px dashed red">
  <pf-bullseye style="height: 200%; width: 200%">
    <pf-tooltip
      :trigger="trigger.join(' ')"
      :left-aligned="leftAligned"
      :position="position"
      :flip="flip"
      :animation-duration="animationDuration"
      :entry-delay="entryDelay"
      :exit-delay="exitDelay"
      :distance="distance"
    >
      <template #content>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.</template>
      <pf-button ref="buttonRef">I have a tooltip!</pf-button>
    </pf-tooltip>
  </pf-bullseye>
</div>`},{default:t(()=>[l(N,{horizontal:``},{default:t(()=>[l(E,{label:`Trigger`},{default:t(()=>[l(g,{label:`mouseenter`,"model-value":_.includes(`mouseenter`),"onUpdate:modelValue":r[0]||=e=>T(`mouseenter`,e)},null,8,[`model-value`]),l(g,{label:`focus`,"model-value":_.includes(`focus`),"onUpdate:modelValue":r[1]||=e=>T(`focus`,e)},null,8,[`model-value`]),l(g,{label:`click`,"model-value":_.includes(`click`),"onUpdate:modelValue":r[2]||=e=>T(`click`,e)},null,8,[`model-value`])]),_:1}),l(E,{label:`Content`},{default:t(()=>[l(g,{modelValue:v.value,"onUpdate:modelValue":r[3]||=e=>v.value=e,label:`Left aligned`},null,8,[`modelValue`])]),_:1}),l(E,{label:`Position`},{default:t(()=>[l(g,{modelValue:y.value,"onUpdate:modelValue":r[4]||=e=>y.value=e,label:`Flip (used only with position != 'auto')`},null,8,[`modelValue`]),l(O,{"model-value":b.value,"onUpdate:modelValue":r[5]||=e=>b.value=e},{default:t(()=>[l(D,{value:`auto`},{default:t(()=>[...r[13]||=[u(`auto`,-1)]]),_:1}),l(D,{value:`top`},{default:t(()=>[...r[14]||=[u(`top`,-1)]]),_:1}),l(D,{value:`bottom`},{default:t(()=>[...r[15]||=[u(`bottom`,-1)]]),_:1}),l(D,{value:`left`},{default:t(()=>[...r[16]||=[u(`left`,-1)]]),_:1}),l(D,{value:`right`},{default:t(()=>[...r[17]||=[u(`right`,-1)]]),_:1}),l(D,{value:`top-start`},{default:t(()=>[...r[18]||=[u(`top-start`,-1)]]),_:1}),l(D,{value:`top-end`},{default:t(()=>[...r[19]||=[u(`top-end`,-1)]]),_:1}),l(D,{value:`bottom-start`},{default:t(()=>[...r[20]||=[u(`bottom-start`,-1)]]),_:1}),l(D,{value:`bottom-end`},{default:t(()=>[...r[21]||=[u(`bottom-end`,-1)]]),_:1}),l(D,{value:`left-start`},{default:t(()=>[...r[22]||=[u(`left-start`,-1)]]),_:1}),l(D,{value:`left-end`},{default:t(()=>[...r[23]||=[u(`left-end`,-1)]]),_:1}),l(D,{value:`right-start`},{default:t(()=>[...r[24]||=[u(`right-start`,-1)]]),_:1}),l(D,{value:`right-end`},{default:t(()=>[...r[25]||=[u(`right-end`,-1)]]),_:1})]),_:1},8,[`model-value`])]),_:1}),l(E,{label:`Animation duration`},{default:t(()=>[l(M,null,{default:t(()=>[l(A,{fill:``},{default:t(()=>[l(k,{modelValue:x.value,"onUpdate:modelValue":r[6]||=e=>x.value=e,modelModifiers:{number:!0,lazy:!0},type:`number`},null,8,[`modelValue`])]),_:1}),l(j,null,{default:t(()=>[...r[26]||=[u(`ms`,-1)]]),_:1})]),_:1})]),_:1}),l(E,{label:`Entry delay`},{default:t(()=>[l(M,null,{default:t(()=>[l(A,{fill:``},{default:t(()=>[l(k,{modelValue:S.value,"onUpdate:modelValue":r[7]||=e=>S.value=e,modelModifiers:{number:!0,lazy:!0},type:`number`},null,8,[`modelValue`])]),_:1}),l(j,null,{default:t(()=>[...r[27]||=[u(`ms`,-1)]]),_:1})]),_:1})]),_:1}),l(E,{label:`Exit delay`},{default:t(()=>[l(M,null,{default:t(()=>[l(A,{fill:``},{default:t(()=>[l(k,{modelValue:C.value,"onUpdate:modelValue":r[8]||=e=>C.value=e,modelModifiers:{number:!0,lazy:!0},type:`number`},null,8,[`modelValue`])]),_:1}),l(j,null,{default:t(()=>[...r[28]||=[u(`ms`,-1)]]),_:1})]),_:1})]),_:1}),l(E,{label:`Distance`},{default:t(()=>[l(k,{modelValue:w.value,"onUpdate:modelValue":r[9]||=e=>w.value=e,modelModifiers:{lazy:!0},type:`number`},null,8,[`modelValue`])]),_:1})]),_:1}),d(`div`,h,[l(P,{style:{height:`200%`,width:`200%`}},{default:t(()=>[l(o,{trigger:_.join(` `),"left-aligned":v.value,position:b.value,flip:y.value,"animation-duration":x.value,"entry-delay":S.value,"exit-delay":C.value,distance:w.value},{content:t(()=>[...r[29]||=[u(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.`,-1)]]),default:t(()=>[l(s(p),{ref:`buttonRef`},{default:t(()=>[...r[30]||=[u(`I have a tooltip!`,-1)]]),_:1},512)]),_:1},8,[`trigger`,`left-aligned`,`position`,`flip`,`animation-duration`,`entry-delay`,`exit-delay`,`distance`])]),_:1})])]),_:1})]),_:1})}}});export{g as default};