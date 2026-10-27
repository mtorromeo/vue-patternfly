import{F as e,H as t,K as n,O as r,c as i,g as a,h as o,it as s,j as c,l,m as u,pt as d,rt as f}from"./runtime-core.esm-bundler-DO1530YC.js";import{L as p}from"./index-CUsetNQE.js";import{t as m}from"./copy-icon-YJ-AjuL7.js";var h={style:{margin:`6rem`}},g={style:{margin:`6rem`}},_={style:{margin:`6rem`}},v={style:{margin:`6rem`}},y={style:{"margin-top":`1rem`,height:`20rem`,width:`100%`,overflow:`auto`,position:`relative`,border:`1px dashed red`}},b=a({__name:`Tooltip.story`,setup(a){let b=t(`buttonRef`),x=t(`tooltipTrigger`),S=s(!1),C=s(!0),w=f([`mouseenter`,`focus`]),T=s(!1),E=s(!0),D=s(`auto`),O=s(300),k=s(300),A=s(300),j=s(15);r(()=>{b.value?.el instanceof HTMLElement&&b.value.el.scrollIntoView({behavior:`instant`,block:`center`,inline:`center`})});function M(e,t){C.value=!1,t?w.push(e):w.splice(w.indexOf(e),1)}return(t,r)=>{let a=e(`component-info`),s=e(`pf-tooltip`),f=e(`story-canvas`),b=e(`pf-checkbox`),N=e(`pf-form-group`),P=e(`pf-form-select-option`),F=e(`pf-form-select`),I=e(`pf-text-input`),L=e(`pf-input-group-item`),R=e(`pf-input-group-text`),z=e(`pf-input-group`),B=e(`pf-form`),V=e(`pf-bullseye`),H=e(`doc-page`);return c(),l(H,{name:`Components/Tooltip.story.vue`,title:`Tooltip`},{description:n(()=>[...r[14]||=[u(`A `,-1),i(`b`,null,`tooltip`,-1),u(` is in-app messaging used to identify elements on a page with short, clarifying text.`,-1)]]),apidocs:n(()=>[o(a,{name:`PfTooltip`,doc:{name:`PfTooltip`,exportName:`PfTooltip`,displayName:`Tooltip`,description:``,tags:{},expose:[{name:`el`}],props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`appendTo`,description:`Element or selector where to render the floating menu`,required:!1,type:{name:`union`,elements:[{name:`"inline"`},{name:`string`},{name:`RendererElement`},{name:`null`},{name:`undefined`}]}},{name:`id`,description:`Id of the tooltip, generated if not set`,required:!1,type:{name:`string`}},{name:`position`,description:`Tooltip position. The 'auto' position chooses the side with the most space.`,required:!1,type:{name:`Placement`},defaultValue:{func:!1,value:`'top'`}},{name:`trigger`,description:`A combination of the strings 'mouseenter', 'focus' and 'click', or 'manual' to show the tooltip only through v-model:visible`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`'mouseenter focus'`}},{name:`triggerRef`,description:`The trigger element, when it cannot be wrapped by the tooltip: an element, a selector or a function returning it.
It replaces the element of the default slot.`,required:!1,type:{name:`union`,elements:[{name:`HTMLElement`},{name:`string`},{name:`TSParenthesizedType`},{name:`null`}]}},{name:`leftAligned`,description:`Flag to indicate that the text content is left aligned`,required:!1,type:{name:`boolean`}},{name:`entryDelay`,description:`Delay in ms before the tooltip appears`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`300`}},{name:`exitDelay`,description:`Delay in ms before the tooltip disappears, Avoid passing in a value of "0", as users should
be given ample time to move their mouse from the trigger to the tooltip content without the content
being hidden.`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`300`}},{name:`distance`,description:`Distance of the tooltip to its target`,required:!1,type:{name:`union`,elements:[{name:`number`},{name:`string`}]},defaultValue:{func:!1,value:`15`}},{name:`aria`,description:`aria-labelledby or aria-describedby for tooltip.
The trigger gets the aria attribute, and the corresponding id in the form of 'pf-tooltip-#' is added to the content container.
If you don't want that or prefer to add the aria attribute yourself on the trigger, set aria to 'none'.`,required:!1,type:{name:`union`,elements:[{name:`"describedby"`},{name:`"labelledby"`},{name:`"none"`}]},defaultValue:{func:!1,value:`'describedby'`}},{name:`ariaLive`,description:`Determines whether the tooltip is an aria-live region. Defaults to 'polite' with a triggerRef, to ensure the
tooltip content is announced to assistive technologies, and to 'off' otherwise.`,required:!1,type:{name:`union`,elements:[{name:`"off"`},{name:`"polite"`}]}},{name:`animationDuration`,description:`CSS fade transition animation duration`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`300`}},{name:`minWidth`,description:`Minimum width of the tooltip. If set to "trigger", the minimum width will be set to the reference element width.`,required:!1,type:{name:`union`,elements:[{name:`string`},{name:`"trigger"`},{name:`"auto"`}]}},{name:`maxWidth`,description:`Maximum width of the tooltip, a number of pixels or a CSS length`,required:!1,type:{name:`union`,elements:[{name:`number`},{name:`string`}]}},{name:`zIndex`,description:`z-index of the tooltip`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`9999`}},{name:`content`,description:`Tooltip content, replaced by the content slot`,required:!1,type:{name:`string`}},{name:`flip`,description:`If true, tries to keep the tooltip in view by flipping it if necessary`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}}],events:[{name:`hidden`,description:`Emitted when the hide transition of the tooltip has finished`}],slots:[{name:`default`,description:`The trigger of the tooltip, unless triggerRef is set`},{name:`content`,description:`Content of the tooltip, replacing the content prop`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Tooltip/Tooltip.vue`]}}),o(a,{name:`PfTooltipArrow`,doc:{name:`PfTooltipArrow`,exportName:`PfTooltipArrow`,displayName:`TooltipArrow`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Tooltip/TooltipArrow.vue`]}}),o(a,{name:`PfTooltipContent`,doc:{name:`PfTooltipContent`,exportName:`PfTooltipContent`,displayName:`TooltipContent`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`leftAligned`,description:`Flag to align text to the left`,required:!1,type:{name:`boolean`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Tooltip/TooltipContent.vue`]}})]),default:n(()=>[r[40]||=i(`div`,{class:`markdown pf-v6-c-content`},[i(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),i(`ul`,null,[i(`li`,null,[u(`The trigger is the default slot, or `),i(`code`,null,`trigger-ref`),u(` (an element, a selector or a function returning it).`)]),i(`li`,null,[u(`The content is the `),i(`code`,null,`content`),u(` prop or slot; `),i(`code`,null,`isContentLeftAligned`),u(` is `),i(`code`,null,`left-aligned`),u(`.`)]),i(`li`,null,[u(`The visibility is bound with `),i(`code`,null,`v-model:visible`),u(` (`),i(`code`,null,`isVisible`),u(`) and `),i(`code`,null,`onTooltipHidden`),u(` is the `),i(`code`,null,`hidden`),u(` event.`)]),i(`li`,null,[i(`code`,null,`enableFlip`),u(` is `),i(`code`,null,`flip`),u(`; `),i(`code`,null,`flipBehavior`),u(` is not supported.`)]),i(`li`,null,[i(`code`,null,`max-width`),u(` also accepts a number of pixels. See `),i(`a`,{href:`#/`},`common differences from patternfly-react`),u(`.`)])]),i(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),o(f,{title:`Basic`,source:`<div style="margin: 6rem">
  <pf-tooltip>
    <template #content
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla
      turpis.</template>
    <pf-button>I have a tooltip!</pf-button>
  </pf-tooltip>
</div>`},{default:n(()=>[i(`div`,h,[o(s,null,{content:n(()=>[...r[15]||=[u(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.`,-1)]]),default:n(()=>[o(d(p),null,{default:n(()=>[...r[16]||=[u(`I have a tooltip!`,-1)]]),_:1})]),_:1})])]),_:1}),o(f,{title:`Tooltip react ref`,source:`<div style="margin: 6rem">
  <button ref="tooltipTrigger" aria-describedby="tooltip-ref1">Tooltip attached via template ref</button>
  <pf-tooltip id="tooltip-ref1" :trigger-ref="tooltipTrigger">
    <template #content>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.
    </template>
  </pf-tooltip>
</div>`},{intro:n(()=>[...r[17]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,[u(`The trigger can be passed to `),i(`code`,null,`trigger-ref`),u(` as an element, such as a template ref, instead of being wrapped by the tooltip.`)])],-1)]]),default:n(()=>[i(`div`,g,[i(`button`,{ref_key:`tooltipTrigger`,ref:x,"aria-describedby":`tooltip-ref1`},`Tooltip attached via template ref`,512),o(s,{id:`tooltip-ref1`,"trigger-ref":x.value},{content:n(()=>[...r[18]||=[u(` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis. `,-1)]]),_:1},8,[`trigger-ref`])])]),_:1}),o(f,{title:`Tooltip selector ref`,source:`<div style="margin: 6rem">
  <button id="tooltip-selector" aria-describedby="tooltip-ref2">Tooltip attached via selector ref</button>
  <pf-tooltip id="tooltip-ref2" trigger-ref="#tooltip-selector">
    <template #content>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.
    </template>
  </pf-tooltip>
</div>`},{default:n(()=>[i(`div`,_,[r[20]||=i(`button`,{id:`tooltip-selector`,"aria-describedby":`tooltip-ref2`},`Tooltip attached via selector ref`,-1),o(s,{id:`tooltip-ref2`,"trigger-ref":`#tooltip-selector`},{content:n(()=>[...r[19]||=[u(` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis. `,-1)]]),_:1})])]),_:1}),o(f,{title:`On icon with dynamic content`,source:`<div style="margin: 6rem">
  <pf-tooltip
    aria="none"
    aria-live="polite"
    :content="copied ? 'Successfully copied to clipboard!' : 'Copy to clipboard'"
  >
    <pf-button id="tt-ref" aria-label="Clipboard" variant="plain" @click="copied = !copied">
      <template #icon><copy-icon /></template>
    </pf-button>
  </pf-tooltip>
</div>`},{intro:n(()=>[...r[21]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,[u(`When the tooltip is used as a wrapper and its content will dynamically update, the `),i(`code`,null,`aria`),u(` prop should have a value of "none" passed in. This prevents assistive technologies from announcing the tooltip contents more than once. Additionally, the `),i(`code`,null,`aria-live`),u(` prop should have a value of "polite" passed in, in order for assistive technologies to announce when the tooltip contents gets updated.`)]),i(`p`,null,[u(`When using a `),i(`code`,null,`trigger-ref`),u(` with a tooltip that has dynamic content, the `),i(`code`,null,`aria`),u(` and `),i(`code`,null,`aria-live`),u(` props do not need to be manually passed in.`)])],-1)]]),default:n(()=>[i(`div`,v,[o(s,{aria:`none`,"aria-live":`polite`,content:S.value?`Successfully copied to clipboard!`:`Copy to clipboard`},{default:n(()=>[o(d(p),{id:`tt-ref`,"aria-label":`Clipboard`,variant:`plain`,onClick:r[0]||=e=>S.value=!S.value},{icon:n(()=>[o(d(m))]),_:1})]),_:1},8,[`content`])])]),_:1}),o(f,{title:`Options`,source:`<pf-form horizontal>
  <pf-form-group label="Trigger">
    <pf-checkbox
      label="mouseenter"
      :model-value="trigger.includes('mouseenter')"
      @update:model-value="checkTrigger('mouseenter', $event)" />
    <pf-checkbox
      label="focus"
      :model-value="trigger.includes('focus')"
      @update:model-value="checkTrigger('focus', $event)" />
    <pf-checkbox
      label="click"
      :model-value="trigger.includes('click')"
      @update:model-value="checkTrigger('click', $event)" />
    <pf-checkbox
      label="manual"
      :model-value="trigger.includes('manual')"
      @update:model-value="checkTrigger('manual', $event)" />
  </pf-form-group>

  <pf-form-group label="Visibility">
    <pf-checkbox
      v-model="visible"
      label="visible (also set the trigger to only manual to control it programmatically)" />
  </pf-form-group>

  <pf-form-group label="Content">
    <pf-checkbox v-model="leftAligned" label="Left aligned" />
  </pf-form-group>

  <pf-form-group label="Position">
    <pf-checkbox v-model="flip" label="Flip (used only with position != 'auto')" />

    <pf-form-select :model-value="position" @update:model-value="position = $event as Placement">
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

<div
  style="margin-top: 1rem; height: 20rem; width: 100%; overflow: auto; position: relative; border: 1px dashed red"
>
  <pf-bullseye style="height: 200%; width: 200%">
    <pf-tooltip
      v-model:visible="visible"
      :trigger="trigger.join(' ')"
      :left-aligned="leftAligned"
      :position="position"
      :flip="flip"
      :animation-duration="animationDuration"
      :entry-delay="entryDelay"
      :exit-delay="exitDelay"
      :distance="distance"
    >
      <template #content
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla
        turpis.</template>
      <pf-button ref="buttonRef">I have a tooltip!</pf-button>
    </pf-tooltip>
  </pf-bullseye>
</div>`},{default:n(()=>[o(B,{horizontal:``},{default:n(()=>[o(N,{label:`Trigger`},{default:n(()=>[o(b,{label:`mouseenter`,"model-value":w.includes(`mouseenter`),"onUpdate:modelValue":r[1]||=e=>M(`mouseenter`,e)},null,8,[`model-value`]),o(b,{label:`focus`,"model-value":w.includes(`focus`),"onUpdate:modelValue":r[2]||=e=>M(`focus`,e)},null,8,[`model-value`]),o(b,{label:`click`,"model-value":w.includes(`click`),"onUpdate:modelValue":r[3]||=e=>M(`click`,e)},null,8,[`model-value`]),o(b,{label:`manual`,"model-value":w.includes(`manual`),"onUpdate:modelValue":r[4]||=e=>M(`manual`,e)},null,8,[`model-value`])]),_:1}),o(N,{label:`Visibility`},{default:n(()=>[o(b,{modelValue:C.value,"onUpdate:modelValue":r[5]||=e=>C.value=e,label:`visible (also set the trigger to only manual to control it programmatically)`},null,8,[`modelValue`])]),_:1}),o(N,{label:`Content`},{default:n(()=>[o(b,{modelValue:T.value,"onUpdate:modelValue":r[6]||=e=>T.value=e,label:`Left aligned`},null,8,[`modelValue`])]),_:1}),o(N,{label:`Position`},{default:n(()=>[o(b,{modelValue:E.value,"onUpdate:modelValue":r[7]||=e=>E.value=e,label:`Flip (used only with position != 'auto')`},null,8,[`modelValue`]),o(F,{"model-value":D.value,"onUpdate:modelValue":r[8]||=e=>D.value=e},{default:n(()=>[o(P,{value:`auto`},{default:n(()=>[...r[22]||=[u(`auto`,-1)]]),_:1}),o(P,{value:`top`},{default:n(()=>[...r[23]||=[u(`top`,-1)]]),_:1}),o(P,{value:`bottom`},{default:n(()=>[...r[24]||=[u(`bottom`,-1)]]),_:1}),o(P,{value:`left`},{default:n(()=>[...r[25]||=[u(`left`,-1)]]),_:1}),o(P,{value:`right`},{default:n(()=>[...r[26]||=[u(`right`,-1)]]),_:1}),o(P,{value:`top-start`},{default:n(()=>[...r[27]||=[u(`top-start`,-1)]]),_:1}),o(P,{value:`top-end`},{default:n(()=>[...r[28]||=[u(`top-end`,-1)]]),_:1}),o(P,{value:`bottom-start`},{default:n(()=>[...r[29]||=[u(`bottom-start`,-1)]]),_:1}),o(P,{value:`bottom-end`},{default:n(()=>[...r[30]||=[u(`bottom-end`,-1)]]),_:1}),o(P,{value:`left-start`},{default:n(()=>[...r[31]||=[u(`left-start`,-1)]]),_:1}),o(P,{value:`left-end`},{default:n(()=>[...r[32]||=[u(`left-end`,-1)]]),_:1}),o(P,{value:`right-start`},{default:n(()=>[...r[33]||=[u(`right-start`,-1)]]),_:1}),o(P,{value:`right-end`},{default:n(()=>[...r[34]||=[u(`right-end`,-1)]]),_:1})]),_:1},8,[`model-value`])]),_:1}),o(N,{label:`Animation duration`},{default:n(()=>[o(z,null,{default:n(()=>[o(L,{fill:``},{default:n(()=>[o(I,{modelValue:O.value,"onUpdate:modelValue":r[9]||=e=>O.value=e,modelModifiers:{number:!0,lazy:!0},type:`number`},null,8,[`modelValue`])]),_:1}),o(R,null,{default:n(()=>[...r[35]||=[u(`ms`,-1)]]),_:1})]),_:1})]),_:1}),o(N,{label:`Entry delay`},{default:n(()=>[o(z,null,{default:n(()=>[o(L,{fill:``},{default:n(()=>[o(I,{modelValue:k.value,"onUpdate:modelValue":r[10]||=e=>k.value=e,modelModifiers:{number:!0,lazy:!0},type:`number`},null,8,[`modelValue`])]),_:1}),o(R,null,{default:n(()=>[...r[36]||=[u(`ms`,-1)]]),_:1})]),_:1})]),_:1}),o(N,{label:`Exit delay`},{default:n(()=>[o(z,null,{default:n(()=>[o(L,{fill:``},{default:n(()=>[o(I,{modelValue:A.value,"onUpdate:modelValue":r[11]||=e=>A.value=e,modelModifiers:{number:!0,lazy:!0},type:`number`},null,8,[`modelValue`])]),_:1}),o(R,null,{default:n(()=>[...r[37]||=[u(`ms`,-1)]]),_:1})]),_:1})]),_:1}),o(N,{label:`Distance`},{default:n(()=>[o(I,{modelValue:j.value,"onUpdate:modelValue":r[12]||=e=>j.value=e,modelModifiers:{lazy:!0},type:`number`},null,8,[`modelValue`])]),_:1})]),_:1}),i(`div`,y,[o(V,{style:{height:`200%`,width:`200%`}},{default:n(()=>[o(s,{visible:C.value,"onUpdate:visible":r[13]||=e=>C.value=e,trigger:w.join(` `),"left-aligned":T.value,position:D.value,flip:E.value,"animation-duration":O.value,"entry-delay":k.value,"exit-delay":A.value,distance:j.value},{content:n(()=>[...r[38]||=[u(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.`,-1)]]),default:n(()=>[o(d(p),{ref:`buttonRef`},{default:n(()=>[...r[39]||=[u(`I have a tooltip!`,-1)]]),_:1},512)]),_:1},8,[`visible`,`trigger`,`left-aligned`,`position`,`flip`,`animation-duration`,`entry-delay`,`exit-delay`,`distance`])]),_:1})])]),_:1})]),_:1})}}});export{b as default};