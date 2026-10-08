import{$ as e,B as t,E as n,N as r,Q as i,U as a,at as o,c as s,h as c,k as l,m as u,p as d,s as f}from"./runtime-core.esm-bundler-BHp59X9g.js";import{u as p}from"./index-BKQOYPID.js";var m={style:{margin:`6rem`}},h={style:{"margin-top":`1rem`,height:`20rem`,width:`100%`,overflow:`auto`,position:`relative`,border:`1px dashed red`}},g=c({__name:`Tooltip.story`,setup(c){let g=t(`buttonRef`),_=i([`mouseenter`,`focus`]),v=e(!1),y=e(!0),b=e(`auto`),x=e(300),S=e(300),C=e(0),w=e(15);n(()=>{g.value?.el instanceof HTMLElement&&g.value.el.scrollIntoView({behavior:`instant`,block:`center`,inline:`center`})});function T(e,t){t?_.push(e):_.splice(_.indexOf(e),1)}return(e,t)=>{let n=r(`component-info`),i=r(`pf-tooltip`),c=r(`story-canvas`),g=r(`pf-checkbox`),E=r(`pf-form-group`),D=r(`pf-form-select-option`),O=r(`pf-form-select`),k=r(`pf-text-input`),A=r(`pf-input-group-item`),j=r(`pf-input-group-text`),M=r(`pf-input-group`),N=r(`pf-form`),P=r(`pf-bullseye`),F=r(`doc-page`);return l(),s(F,{name:`Components/Tooltip.story.vue`,title:`Tooltip`},{description:a(()=>[...t[10]||=[d(`A `,-1),f(`b`,null,`tooltip`,-1),d(` is in-app messaging used to identify elements on a page with short, clarifying text.`,-1)]]),apidocs:a(()=>[u(n,{name:`PfTooltip`,doc:{name:`PfTooltip`,exportName:`PfTooltip`,displayName:`Tooltip`,description:``,tags:{},expose:[{name:`el`}],props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`appendTo`,description:`Element or selector where to render the floating menu`,required:!1,type:{name:`union`,elements:[{name:`"inline"`},{name:`string`},{name:`RendererElement`},{name:`null`},{name:`undefined`}]}},{name:`position`,description:`Tooltip position`,required:!1,type:{name:`Placement`},defaultValue:{func:!1,value:`'top'`}},{name:`trigger`,description:`A combination of the strings 'mouseenter', 'focus' and 'click'`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`'mouseenter focus'`}},{name:`leftAligned`,description:`Flag to indicate that the text content is left aligned`,required:!1,type:{name:`boolean`}},{name:`entryDelay`,description:`Delay in ms before the tooltip appears`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`1000`}},{name:`exitDelay`,description:`Delay in ms before the tooltip disappears, Avoid passing in a value of "0", as users should
be given ample time to move their mouse from the trigger to the tooltip content without the content
being hidden.`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`0`}},{name:`distance`,description:`Distance of the tooltip to its target`,required:!1,type:{name:`union`,elements:[{name:`number`},{name:`string`}]},defaultValue:{func:!1,value:`15`}},{name:`aria`,description:`aria-labelledby or aria-describedby for tooltip.
The trigger will be cloned to add the aria attribute, and the corresponding id in the form of 'pf-tooltip-#' is added to the content container.
If you don't want that or prefer to add the aria attribute yourself on the trigger, set aria to 'none'.`,required:!1,type:{name:`union`,elements:[{name:`"describedby"`},{name:`"labelledby"`},{name:`"none"`}]},defaultValue:{func:!1,value:`'describedby'`}},{name:`animationDuration`,description:`CSS fade transition animation duration`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`300`}},{name:`minWidth`,description:`Minimum width of the tooltip. If set to "trigger", the minimum width will be set to the reference element width.`,required:!1,type:{name:`union`,elements:[{name:`string`},{name:`"trigger"`},{name:`"auto"`}]}},{name:`maxWidth`,description:`Maximum width of the tooltip`,required:!1,type:{name:`number`}},{name:`content`,description:`Tooltip content`,required:!1,type:{name:`string`}},{name:`flip`,description:`The desired position to flip the tooltip to if the initial position is not possible.
By setting this prop to 'flip' it attempts to flip the tooltip to the opposite side if there is no space.`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}}],events:[],slots:[{name:`default`},{name:`content`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Tooltip/Tooltip.vue`]}}),u(n,{name:`PfTooltipArrow`,doc:{name:`PfTooltipArrow`,exportName:`PfTooltipArrow`,displayName:`TooltipArrow`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Tooltip/TooltipArrow.vue`]}}),u(n,{name:`PfTooltipContent`,doc:{name:`PfTooltipContent`,exportName:`PfTooltipContent`,displayName:`TooltipContent`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`leftAligned`,required:!1,type:{name:`boolean`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Tooltip/TooltipContent.vue`]}})]),default:a(()=>[t[31]||=f(`div`,{class:`markdown pf-v6-c-content`},[f(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),u(c,{title:`Basic`,source:`<div style="margin: 6rem">
  <pf-tooltip>
    <template #content>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.</template>
    <pf-button>I have a tooltip!</pf-button>
  </pf-tooltip>
</div>`},{default:a(()=>[f(`div`,m,[u(i,null,{content:a(()=>[...t[11]||=[d(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.`,-1)]]),default:a(()=>[u(o(p),null,{default:a(()=>[...t[12]||=[d(`I have a tooltip!`,-1)]]),_:1})]),_:1})])]),_:1}),u(c,{title:`Options`,source:`<pf-form horizontal>
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
</div>`},{default:a(()=>[u(N,{horizontal:``},{default:a(()=>[u(E,{label:`Trigger`},{default:a(()=>[u(g,{label:`mouseenter`,"model-value":_.includes(`mouseenter`),"onUpdate:modelValue":t[0]||=e=>T(`mouseenter`,e)},null,8,[`model-value`]),u(g,{label:`focus`,"model-value":_.includes(`focus`),"onUpdate:modelValue":t[1]||=e=>T(`focus`,e)},null,8,[`model-value`]),u(g,{label:`click`,"model-value":_.includes(`click`),"onUpdate:modelValue":t[2]||=e=>T(`click`,e)},null,8,[`model-value`])]),_:1}),u(E,{label:`Content`},{default:a(()=>[u(g,{modelValue:v.value,"onUpdate:modelValue":t[3]||=e=>v.value=e,label:`Left aligned`},null,8,[`modelValue`])]),_:1}),u(E,{label:`Position`},{default:a(()=>[u(g,{modelValue:y.value,"onUpdate:modelValue":t[4]||=e=>y.value=e,label:`Flip (used only with position != 'auto')`},null,8,[`modelValue`]),u(O,{"model-value":b.value,"onUpdate:modelValue":t[5]||=e=>b.value=e},{default:a(()=>[u(D,{value:`auto`},{default:a(()=>[...t[13]||=[d(`auto`,-1)]]),_:1}),u(D,{value:`top`},{default:a(()=>[...t[14]||=[d(`top`,-1)]]),_:1}),u(D,{value:`bottom`},{default:a(()=>[...t[15]||=[d(`bottom`,-1)]]),_:1}),u(D,{value:`left`},{default:a(()=>[...t[16]||=[d(`left`,-1)]]),_:1}),u(D,{value:`right`},{default:a(()=>[...t[17]||=[d(`right`,-1)]]),_:1}),u(D,{value:`top-start`},{default:a(()=>[...t[18]||=[d(`top-start`,-1)]]),_:1}),u(D,{value:`top-end`},{default:a(()=>[...t[19]||=[d(`top-end`,-1)]]),_:1}),u(D,{value:`bottom-start`},{default:a(()=>[...t[20]||=[d(`bottom-start`,-1)]]),_:1}),u(D,{value:`bottom-end`},{default:a(()=>[...t[21]||=[d(`bottom-end`,-1)]]),_:1}),u(D,{value:`left-start`},{default:a(()=>[...t[22]||=[d(`left-start`,-1)]]),_:1}),u(D,{value:`left-end`},{default:a(()=>[...t[23]||=[d(`left-end`,-1)]]),_:1}),u(D,{value:`right-start`},{default:a(()=>[...t[24]||=[d(`right-start`,-1)]]),_:1}),u(D,{value:`right-end`},{default:a(()=>[...t[25]||=[d(`right-end`,-1)]]),_:1})]),_:1},8,[`model-value`])]),_:1}),u(E,{label:`Animation duration`},{default:a(()=>[u(M,null,{default:a(()=>[u(A,{fill:``},{default:a(()=>[u(k,{modelValue:x.value,"onUpdate:modelValue":t[6]||=e=>x.value=e,modelModifiers:{number:!0,lazy:!0},type:`number`},null,8,[`modelValue`])]),_:1}),u(j,null,{default:a(()=>[...t[26]||=[d(`ms`,-1)]]),_:1})]),_:1})]),_:1}),u(E,{label:`Entry delay`},{default:a(()=>[u(M,null,{default:a(()=>[u(A,{fill:``},{default:a(()=>[u(k,{modelValue:S.value,"onUpdate:modelValue":t[7]||=e=>S.value=e,modelModifiers:{number:!0,lazy:!0},type:`number`},null,8,[`modelValue`])]),_:1}),u(j,null,{default:a(()=>[...t[27]||=[d(`ms`,-1)]]),_:1})]),_:1})]),_:1}),u(E,{label:`Exit delay`},{default:a(()=>[u(M,null,{default:a(()=>[u(A,{fill:``},{default:a(()=>[u(k,{modelValue:C.value,"onUpdate:modelValue":t[8]||=e=>C.value=e,modelModifiers:{number:!0,lazy:!0},type:`number`},null,8,[`modelValue`])]),_:1}),u(j,null,{default:a(()=>[...t[28]||=[d(`ms`,-1)]]),_:1})]),_:1})]),_:1}),u(E,{label:`Distance`},{default:a(()=>[u(k,{modelValue:w.value,"onUpdate:modelValue":t[9]||=e=>w.value=e,modelModifiers:{lazy:!0},type:`number`},null,8,[`modelValue`])]),_:1})]),_:1}),f(`div`,h,[u(P,{style:{height:`200%`,width:`200%`}},{default:a(()=>[u(i,{trigger:_.join(` `),"left-aligned":v.value,position:b.value,flip:y.value,"animation-duration":x.value,"entry-delay":S.value,"exit-delay":C.value,distance:w.value},{content:a(()=>[...t[29]||=[d(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.`,-1)]]),default:a(()=>[u(o(p),{ref:`buttonRef`},{default:a(()=>[...t[30]||=[d(`I have a tooltip!`,-1)]]),_:1},512)]),_:1},8,[`trigger`,`left-aligned`,`position`,`flip`,`animation-duration`,`entry-delay`,`exit-delay`,`distance`])]),_:1})])]),_:1})]),_:1})}}});export{g as default};