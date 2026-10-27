import{F as e,H as t,I as n,K as r,N as i,Pt as a,c as o,d as s,g as c,h as l,it as u,j as d,l as f,m as p,n as m,pt as h,q as g,rt as _}from"./runtime-core.esm-bundler-DO1530YC.js";import{B as v,G as y,H as b,U as x,V as S,Y as C,z as w}from"./index-CUsetNQE.js";var T={style:{margin:`50px`}},E={style:{margin:`50px`}},D={style:{margin:`50px`}},O={style:{margin:`50px`}},k=[`onClick`],A={style:{margin:`50px`}},j={style:{margin:`50px`}},M={style:{margin:`50px`}},N={style:{margin:`50px`}},P=[`value`],F={style:{margin:`50px`}},I={style:{margin:`50px`}},L=[`value`],R={style:{margin:`50px`}},z=c({__name:`Popover.story`,setup(c){let z=u(!1),B=t(`refTrigger`),V=[`auto`,`top`,`bottom`,`left`,`right`,`top-start`,`top-end`,`bottom-start`,`bottom-end`,`left-start`,`left-end`,`right-start`,`right-end`],H=_({position:`auto`,flip:!0,open:!1}),U={custom:w,info:v,success:x,warning:S,danger:b},W=u(`custom`);return(t,c)=>{let u=e(`component-info`),_=e(`pf-button`),v=e(`pf-popover`),b=e(`story-canvas`),x=e(`pf-checkbox`),S=e(`doc-page`);return d(),f(S,{name:`Components/Popover.story.vue`,title:`Popover`},{description:r(()=>[...c[8]||=[p(`A `,-1),o(`b`,null,`popover`,-1),p(` is in-app messaging that provides more information on specific product areas. Popovers display content in a new window that overlays the current page. Unlike modals, popovers don't block the current page.`,-1)]]),apidocs:r(()=>[l(u,{name:`PfPopover`,doc:{name:`PfPopover`,exportName:`PfPopover`,displayName:`Popover`,description:``,tags:{},expose:[{name:`visible`}],props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`noFocusTrap`,description:`Disables the focus trap of a popover opened by a click, such as when it has no focusable content`,required:!1,type:{name:`boolean`}},{name:`elementToFocus`,description:`The element to focus when the popover becomes visible. By default the first focusable element will receive focus.`,required:!1,type:{name:`union`,elements:[{name:`HTMLElement`},{name:`SVGElement`},{name:`string`}]}},{name:`appendTo`,description:`Element or selector where to render the floating popover`,required:!1,type:{name:`union`,elements:[{name:`"inline"`},{name:`string`},{name:`RendererElement`},{name:`null`},{name:`undefined`}]}},{name:`triggerRef`,description:`The trigger element, a selector or a function returning it, to use in place of the default slot`,required:!1,type:{name:`union`,elements:[{name:`HTMLElement`},{name:`string`},{name:`TSParenthesizedType`},{name:`null`}]}},{name:`hover`,tags:{deprecated:[{description:`Opens the popover on hover and focus rather than on click. Prefer a tooltip.`,title:`deprecated`}]},required:!1,type:{name:`boolean`}},{name:`autoWidth`,description:`Removes fixed-width and allows width to be defined by contents`,required:!1,type:{name:`boolean`}},{name:`noPadding`,description:`Allows content to touch edges of popover container`,required:!1,type:{name:`boolean`}},{name:`noClose`,description:`Hides the close button`,required:!1,type:{name:`boolean`}},{name:`noFlip`,description:`Keeps the popover at its position even when it does not fit, rather than flipping it`,required:!1,type:{name:`boolean`}},{name:`flipBehavior`,description:`The order of the positions to try when the popover does not fit at its position`,required:!1,type:{name:`Array`,elements:[{name:`Placement`}]},defaultValue:{func:!1,value:`() => defaultFlipBehavior`}},{name:`flipOptions`,description:`Options of the flip middleware, replacing flipBehavior`,required:!1,type:{name:`FlipOptions`}},{name:`placementOptions`,description:`Options of the auto placement middleware, used when position is "auto"`,required:!1,type:{name:`AutoPlacementOptions`}},{name:`noHideOnOutsideClick`,description:`Keeps the popover open when a click occurs outside of it`,required:!1,type:{name:`boolean`}},{name:`position`,description:`Popover position. Unless noFlip is set, it will change the position if there is not enough space for it, in the
order of flipBehavior.`,required:!1,type:{name:`union`,elements:[{name:`Placement`},{name:`"auto"`}]},defaultValue:{func:!1,value:`'top'`}},{name:`minWidth`,description:`Minimum width of the popover (default 6.25rem)`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`popoverMinWidth.value`}},{name:`maxWidth`,description:`Maximum width of the popover (default 18.75rem)`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`popoverMaxWidth.value`}},{name:`animationDuration`,description:`CSS fade transition animation duration`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`300`}},{name:`closeBtnAriaLabel`,description:"Accessible label for the close button. Defaults to the `popoverClose` message.",required:!1,type:{name:`string`}},{name:`distance`,description:`Distance of the popover to its target`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`25`}},{name:`ariaLabel`,description:`Accessible label for the popover, required when there is no header`,required:!1,type:{name:`string`}},{name:`headerComponent`,description:`Sets the heading level to use for the popover header`,required:!1,type:{name:`union`,elements:[{name:`"h1"`},{name:`"h2"`},{name:`"h3"`},{name:`"h4"`},{name:`"h5"`},{name:`"h6"`}]},defaultValue:{func:!1,value:`'h6'`}},{name:`alertSeverityVariant`,description:`Severity variants for an alert popover. This modifies the color of the header to match the severity.`,required:!1,type:{name:`union`,elements:[{name:`"custom"`},{name:`"info"`},{name:`"warning"`},{name:`"success"`},{name:`"danger"`}]}},{name:`alertSeverityScreenReaderText`,description:`Text announced by screen readers to indicate the severity of an alert popover. Defaults to "{variant} alert:".`,required:!1,type:{name:`string`}},{name:`zIndex`,description:`The z-index of the popover`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`9999`}},{name:`open`,defaultValue:{func:!1,value:`undefined`}}],events:[{name:`show`,type:{names:[`Event`]},description:`The popover was opened by a user interaction`},{name:`hide`,type:{names:[`Event`]},description:`The popover was closed by a user interaction`},{name:`shown`,description:`The popover has fully transitioned in`},{name:`hidden`,description:`The popover has fully transitioned out`}],slots:[{name:`default`,description:`The trigger of the popover, unless triggerRef is set`},{name:`header-icon`},{name:`header`,scoped:!0,bindings:[{name:`hide`,title:`binding`}],description:`Content of the popover header`},{name:`body`,scoped:!0,bindings:[{name:`hide`,title:`binding`}],description:`Content of the popover body`},{name:`footer`,scoped:!0,bindings:[{name:`hide`,title:`binding`}],description:`Content of the popover footer`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Popover.vue`]}})]),default:r(()=>[c[62]||=o(`div`,{class:`markdown pf-v6-c-content`},[o(`p`,null,`By default, the popover is appended to the document body in order to avoid the popover content not being fully visible. Another option is to increase the z-index of the element the popover is appended to to be higher than the z-index of the element that is hiding the popover.`),o(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),o(`ul`,null,[o(`li`,null,[p(`The trigger is the default slot, or `),o(`code`,null,`trigger-ref`),p(` (an element, a selector or a function returning it).`)]),o(`li`,null,[o(`code`,null,`headerContent`),p(`, `),o(`code`,null,`bodyContent`),p(`, `),o(`code`,null,`footerContent`),p(` and `),o(`code`,null,`headerIcon`),p(` are the `),o(`code`,null,`header`),p(`, `),o(`code`,null,`body`),p(`, `),o(`code`,null,`footer`),p(` and `),o(`code`,null,`header-icon`),p(` slots; the content slots receive a `),o(`code`,null,`hide`),p(` function.`)]),o(`li`,null,[p(`The visibility is bound with `),o(`code`,null,`v-model:open`),p(` (`),o(`code`,null,`isVisible`),p(`, `),o(`code`,null,`shouldOpen`),p(` and `),o(`code`,null,`shouldClose`),p(`); `),o(`code`,null,`show`),p(`, `),o(`code`,null,`hide`),p(`, `),o(`code`,null,`shown`),p(` and `),o(`code`,null,`hidden`),p(` are events.`)]),o(`li`,null,[o(`code`,null,`showClose`),p(`, `),o(`code`,null,`withFocusTrap`),p(`, `),o(`code`,null,`enableFlip`),p(` and `),o(`code`,null,`hideOnOutsideClick`),p(` are inverted into `),o(`code`,null,`no-close`),p(`, `),o(`code`,null,`no-focus-trap`),p(`, `),o(`code`,null,`no-flip`),p(` and `),o(`code`,null,`no-hide-on-outside-click`),p(`; `),o(`code`,null,`hasAutoWidth`),p(` is `),o(`code`,null,`auto-width`),p(` and `),o(`code`,null,`hasNoPadding`),p(` is `),o(`code`,null,`no-padding`),p(`.`)]),o(`li`,null,[o(`code`,null,`triggerAction="hover"`),p(` is the deprecated `),o(`code`,null,`hover`),p(` prop.`)]),o(`li`,null,[o(`code`,null,`flip-options`),p(` and `),o(`code`,null,`placement-options`),p(` customize the floating-ui flip and auto placement middlewares. See `),o(`a`,{href:`#/`},`common differences from patternfly-react`),p(`.`)])]),o(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),l(b,{title:`Basic`,source:`<div style="margin: 50px">
  <pf-popover aria-label="Basic popover">
    <pf-button>Toggle popover</pf-button>
    <template #header><div>Popover header</div></template>
    <template #body><div>Popovers are triggered by click rather than hover.</div></template>
    <template #footer>Popover footer</template>
  </pf-popover>
</div>`},{default:r(()=>[o(`div`,T,[l(v,{"aria-label":`Basic popover`},{header:r(()=>[...c[10]||=[o(`div`,null,`Popover header`,-1)]]),body:r(()=>[...c[11]||=[o(`div`,null,`Popovers are triggered by click rather than hover.`,-1)]]),footer:r(()=>[...c[12]||=[p(`Popover footer`,-1)]]),default:r(()=>[l(_,null,{default:r(()=>[...c[9]||=[p(`Toggle popover`,-1)]]),_:1})]),_:1})])]),_:1}),l(b,{title:`Hoverable`,source:`<div style="margin: 50px">
  <pf-popover hover aria-label="Hoverable popover">
    <pf-button>Hover to trigger popover</pf-button>
    <template #header><div>Popover header</div></template>
    <template #body><div>This popover opens on hover.</div></template>
    <template #footer>Popover footer</template>
  </pf-popover>
</div>`},{intro:r(()=>[...c[13]||=[o(`div`,{class:`markdown pf-v6-c-content`},[o(`p`,null,[p(`Set the `),o(`code`,null,`hover`),p(` property to make a `),o(`code`,null,`pf-popover`),p(` that is triggered via hover and focus rather than on click. When using a hoverable popover, you `),o(`strong`,null,`must not`),p(` include any interactive or semantic content (e.g. buttons, links, headings, lists, etc), as focus is not intended to enter a hoverable popover. Including such content may cause an inaccessible UI for users who are not able to reach the content when navigating via assistive tech.`)]),o(`p`,null,[p(`It is instead recommended to use our `),o(`a`,{href:`#/stories/components/tooltip`},`tooltip component`),p(`.`)])],-1)]]),default:r(()=>[o(`div`,E,[l(v,{hover:``,"aria-label":`Hoverable popover`},{header:r(()=>[...c[15]||=[o(`div`,null,`Popover header`,-1)]]),body:r(()=>[...c[16]||=[o(`div`,null,`This popover opens on hover.`,-1)]]),footer:r(()=>[...c[17]||=[p(`Popover footer`,-1)]]),default:r(()=>[l(_,null,{default:r(()=>[...c[14]||=[p(`Hover to trigger popover`,-1)]]),_:1})]),_:1})])]),_:1}),l(b,{title:`Close popover from content (controlled)`,source:`<div style="margin: 50px">
  <pf-popover v-model:open="controlledOpen" aria-label="Popover with button in the body that can close it">
    <pf-button>Toggle popover</pf-button>
    <template #header><div>Popover header</div></template>
    <template #body>
      <div>
        <div>A controlled popover can be closed by updating its open state after some user interaction.</div>
        <div>
          <button @click="controlledOpen = false">Close popover</button>
        </div>
      </div>
    </template>
    <template #footer>Popover footer</template>
  </pf-popover>
</div>`},{default:r(()=>[o(`div`,D,[l(v,{open:z.value,"onUpdate:open":c[1]||=e=>z.value=e,"aria-label":`Popover with button in the body that can close it`},{header:r(()=>[...c[19]||=[o(`div`,null,`Popover header`,-1)]]),body:r(()=>[o(`div`,null,[c[20]||=o(`div`,null,`A controlled popover can be closed by updating its open state after some user interaction.`,-1),o(`div`,null,[o(`button`,{onClick:c[0]||=e=>z.value=!1},`Close popover`)])])]),footer:r(()=>[...c[21]||=[p(`Popover footer`,-1)]]),default:r(()=>[l(_,null,{default:r(()=>[...c[18]||=[p(`Toggle popover`,-1)]]),_:1})]),_:1},8,[`open`])])]),_:1}),l(b,{title:`Close popover from content (uncontrolled)`,source:`<div style="margin: 50px">
  <pf-popover aria-label="Uncontrolled popover with button in the body that can close it">
    <pf-button>Toggle popover</pf-button>
    <template #header><div>Popover header</div></template>
    <template #body="{ hide }">
      <div>
        <div>
          All the content slots (header, body, footer) receive a hide function which can be used to close the
          popover after some user interaction.
        </div>
        <div>
          <button @click="hide">Close popover</button>
        </div>
      </div>
    </template>
    <template #footer>Popover footer</template>
  </pf-popover>
</div>`},{intro:r(()=>[...c[22]||=[o(`div`,{class:`markdown pf-v6-c-content`},[o(`p`,null,[p(`Note: if you bind `),o(`code`,null,`v-model:open`),p(`, either refer to the example above or, if you want to use the `),o(`code`,null,`hide`),p(` function of the content slots, be sure to keep the open state in sync.`)])],-1)]]),default:r(()=>[o(`div`,O,[l(v,{"aria-label":`Uncontrolled popover with button in the body that can close it`},{header:r(()=>[...c[24]||=[o(`div`,null,`Popover header`,-1)]]),body:r(({hide:e})=>[o(`div`,null,[c[25]||=o(`div`,null,` All the content slots (header, body, footer) receive a hide function which can be used to close the popover after some user interaction. `,-1),o(`div`,null,[o(`button`,{onClick:e},`Close popover`,8,k)])])]),footer:r(()=>[...c[26]||=[p(`Popover footer`,-1)]]),default:r(()=>[l(_,null,{default:r(()=>[...c[23]||=[p(`Toggle popover`,-1)]]),_:1})]),_:1})])]),_:1}),l(b,{title:`Without header/footer/close and no padding`,source:`<div style="margin: 50px">
  <pf-popover
    aria-label="Popover with no header, footer, close button, and padding"
    no-padding
    no-close
    no-focus-trap
  >
    <pf-button>Toggle popover</pf-button>
    <template #body>
      <div>
        This popover has no padding and is intended for use with content that has its own spacing and should touch
        the edges of the popover container.
      </div>
    </template>
  </pf-popover>
</div>`},{default:r(()=>[o(`div`,A,[l(v,{"aria-label":`Popover with no header, footer, close button, and padding`,"no-padding":``,"no-close":``,"no-focus-trap":``},{body:r(()=>[...c[28]||=[o(`div`,null,` This popover has no padding and is intended for use with content that has its own spacing and should touch the edges of the popover container. `,-1)]]),default:r(()=>[l(_,null,{default:r(()=>[...c[27]||=[p(`Toggle popover`,-1)]]),_:1})]),_:1})])]),_:1}),l(b,{title:`Width auto`,source:`<div style="margin: 50px">
  <pf-popover aria-label="Popover with auto-width" auto-width append-to="body">
    <pf-button>Toggle popover</pf-button>
    <template #body><div>Removes fixed-width and allows width to be defined by contents</div></template>
  </pf-popover>
</div>`},{intro:r(()=>[...c[29]||=[o(`div`,{class:`markdown pf-v6-c-content`},[o(`p`,null,[p(`Here the popover goes over the navigation, so the `),o(`code`,null,`append-to`),p(` property is set to the document body.`)])],-1)]]),default:r(()=>[o(`div`,j,[l(v,{"aria-label":`Popover with auto-width`,"auto-width":``,"append-to":`body`},{body:r(()=>[...c[31]||=[o(`div`,null,`Removes fixed-width and allows width to be defined by contents`,-1)]]),default:r(()=>[l(_,null,{default:r(()=>[...c[30]||=[p(`Toggle popover`,-1)]]),_:1})]),_:1})])]),_:1}),l(b,{title:`Popover react ref`,source:`<div style="margin: 50px">
  <button ref="refTrigger">Popover attached via template ref</button>
  <pf-popover aria-label="Popover with react reference example" :trigger-ref="refTrigger">
    <template #header><div>Popover header</div></template>
    <template #body>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.
      </div>
    </template>
    <template #footer>Popover footer</template>
  </pf-popover>
</div>`},{intro:r(()=>[...c[32]||=[o(`div`,{class:`markdown pf-v6-c-content`},[o(`p`,null,[p(`The trigger can be passed to `),o(`code`,null,`trigger-ref`),p(` as an element, such as a template ref, instead of being wrapped by the popover.`)])],-1)]]),default:r(()=>[o(`div`,M,[o(`button`,{ref_key:`refTrigger`,ref:B},`Popover attached via template ref`,512),l(v,{"aria-label":`Popover with react reference example`,"trigger-ref":B.value},{header:r(()=>[...c[33]||=[o(`div`,null,`Popover header`,-1)]]),body:r(()=>[...c[34]||=[o(`div`,null,` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis. `,-1)]]),footer:r(()=>[...c[35]||=[p(`Popover footer`,-1)]]),_:1},8,[`trigger-ref`])])]),_:1}),l(b,{title:`Popover selector ref`,source:`<div style="margin: 50px">
  <button id="popover-selector">Popover attached via selector ref</button>
  <pf-popover aria-label="Popover with selector reference example" trigger-ref="#popover-selector">
    <template #header><div>Popover header</div></template>
    <template #body>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.
      </div>
    </template>
    <template #footer>Popover footer</template>
  </pf-popover>
</div>`},{default:r(()=>[o(`div`,N,[c[39]||=o(`button`,{id:`popover-selector`},`Popover attached via selector ref`,-1),l(v,{"aria-label":`Popover with selector reference example`,"trigger-ref":`#popover-selector`},{header:r(()=>[...c[36]||=[o(`div`,null,`Popover header`,-1)]]),body:r(()=>[...c[37]||=[o(`div`,null,` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis. `,-1)]]),footer:r(()=>[...c[38]||=[p(`Popover footer`,-1)]]),_:1})])]),_:1}),l(b,{title:`Advanced`,source:`<div>
  <span style="padding-right: 10px">Popover position</span>
  <select v-model="advanced.position" aria-label="Popover position">
    <option v-for="p in positions" :key="p" :value="p">{{ p }}</option>
  </select>
  <pf-checkbox
    id="popover-advanced-check-1"
    v-model="advanced.flip"
    label="Flip popover if the position falls outside the view"
    aria-label="Keep in view" />
  <pf-checkbox
    id="popover-advanced-check-2"
    v-model="advanced.open"
    label="Toggle popover from outside"
    aria-label="Toggle popover from outside" />
</div>
<div style="margin: 50px">
  <pf-popover
    v-model:open="advanced.open"
    aria-label="Advanced popover usages example"
    :position="advanced.position"
    no-hide-on-outside-click
    :no-flip="!advanced.flip"
  >
    <pf-button>Toggle popover</pf-button>
    <template #header><div>Popover header</div></template>
    <template #body>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.
      </div>
    </template>
    <template #footer>Popover footer</template>
  </pf-popover>
</div>`},{default:r(()=>[o(`div`,null,[c[40]||=o(`span`,{style:{"padding-right":`10px`}},`Popover position`,-1),g(o(`select`,{"onUpdate:modelValue":c[2]||=e=>H.position=e,"aria-label":`Popover position`},[(d(),s(m,null,i(V,e=>o(`option`,{key:e,value:e},a(e),9,P)),64))],512),[[y,H.position]]),l(x,{id:`popover-advanced-check-1`,modelValue:H.flip,"onUpdate:modelValue":c[3]||=e=>H.flip=e,label:`Flip popover if the position falls outside the view`,"aria-label":`Keep in view`},null,8,[`modelValue`]),l(x,{id:`popover-advanced-check-2`,modelValue:H.open,"onUpdate:modelValue":c[4]||=e=>H.open=e,label:`Toggle popover from outside`,"aria-label":`Toggle popover from outside`},null,8,[`modelValue`])]),o(`div`,F,[l(v,{open:H.open,"onUpdate:open":c[5]||=e=>H.open=e,"aria-label":`Advanced popover usages example`,position:H.position,"no-hide-on-outside-click":``,"no-flip":!H.flip},{header:r(()=>[...c[42]||=[o(`div`,null,`Popover header`,-1)]]),body:r(()=>[...c[43]||=[o(`div`,null,` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis. `,-1)]]),footer:r(()=>[...c[44]||=[p(`Popover footer`,-1)]]),default:r(()=>[l(_,null,{default:r(()=>[...c[41]||=[p(`Toggle popover`,-1)]]),_:1})]),_:1},8,[`open`,`position`,`no-flip`])])]),_:1}),l(b,{title:`Popover with icon in the title`,source:`<div style="margin: 50px">
  <pf-popover aria-label="Popover with icon in the title example" append-to="body">
    <pf-button>Toggle popover</pf-button>
    <template #header-icon><bell-icon /></template>
    <template #header>Popover with icon</template>
    <template #body><div>Popovers are triggered by click rather than hover.</div></template>
    <template #footer>Popover footer</template>
  </pf-popover>
</div>`},{intro:r(()=>[...c[45]||=[o(`div`,{class:`markdown pf-v6-c-content`},[o(`p`,null,[p(`Here the popover goes over the navigation, so the `),o(`code`,null,`append-to`),p(` property is set to the document body.`)])],-1)]]),default:r(()=>[o(`div`,I,[l(v,{"aria-label":`Popover with icon in the title example`,"append-to":`body`},{"header-icon":r(()=>[l(h(w))]),header:r(()=>[...c[47]||=[p(`Popover with icon`,-1)]]),body:r(()=>[...c[48]||=[o(`div`,null,`Popovers are triggered by click rather than hover.`,-1)]]),footer:r(()=>[...c[49]||=[p(`Popover footer`,-1)]]),default:r(()=>[l(_,null,{default:r(()=>[...c[46]||=[p(`Toggle popover`,-1)]]),_:1})]),_:1})])]),_:1}),l(b,{title:`Alert popover`,source:`<div>
  <span style="padding-right: 10px">Alert variant:</span>
  <select v-model="alertVariant" aria-label="Popover alert type">
    <option v-for="variant in Object.keys(alertIcons)" :key="variant" :value="variant">{{ variant }}</option>
  </select>
</div>
<div style="margin: 50px">
  <pf-popover
    aria-label="Alert popover"
    :alert-severity-variant="alertVariant"
    header-component="h1"
    append-to="body"
  >
    <pf-button>Toggle popover</pf-button>
    <template #header-icon><component :is="alertIcons[alertVariant]" /></template>
    <template #header>Default popover title</template>
    <template #body><div>Popovers are triggered by click rather than hover.</div></template>
    <template #footer>Popover footer</template>
  </pf-popover>
</div>`},{intro:r(()=>[...c[50]||=[o(`div`,{class:`markdown pf-v6-c-content`},[o(`p`,null,[p(`Here the popover goes over the navigation, so the `),o(`code`,null,`append-to`),p(` property is set to the document body.`)])],-1)]]),default:r(()=>[o(`div`,null,[c[51]||=o(`span`,{style:{"padding-right":`10px`}},`Alert variant:`,-1),g(o(`select`,{"onUpdate:modelValue":c[6]||=e=>W.value=e,"aria-label":`Popover alert type`},[(d(!0),s(m,null,i(Object.keys(U),e=>(d(),s(`option`,{key:e,value:e},a(e),9,L))),128))],512),[[y,W.value]])]),o(`div`,R,[l(v,{"aria-label":`Alert popover`,"alert-severity-variant":W.value,"header-component":`h1`,"append-to":`body`},{"header-icon":r(()=>[(d(),f(n(U[W.value])))]),header:r(()=>[...c[53]||=[p(`Default popover title`,-1)]]),body:r(()=>[...c[54]||=[o(`div`,null,`Popovers are triggered by click rather than hover.`,-1)]]),footer:r(()=>[...c[55]||=[p(`Popover footer`,-1)]]),default:r(()=>[l(_,null,{default:r(()=>[...c[52]||=[p(`Toggle popover`,-1)]]),_:1})]),_:1},8,[`alert-severity-variant`])])]),_:1}),l(b,{title:`Custom focus`,source:`<pf-popover element-to-focus="#popover-cancel-button" no-close aria-label="Popover with custom focus">
  <pf-button>Toggle popover with custom focus</pf-button>
  <template #header><div>Popover header</div></template>
  <template #body>
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      <pf-button component="a" inline variant="link" href="#basic" @click.prevent>
        View the basic example
      </pf-button>
    </div>
  </template>
  <template #footer="{ hide }">
    <pf-button id="popover-cancel-button" variant="secondary" @click="hide">Cancel</pf-button>
  </template>
</pf-popover>`},{intro:r(()=>[...c[56]||=[o(`div`,{class:`markdown pf-v6-c-content`},[o(`p`,null,[p(`Use the `),o(`code`,null,`element-to-focus`),p(` property to customize which element inside the popover receives focus when opened.`)])],-1)]]),default:r(()=>[l(v,{"element-to-focus":`#popover-cancel-button`,"no-close":``,"aria-label":`Popover with custom focus`},{header:r(()=>[...c[58]||=[o(`div`,null,`Popover header`,-1)]]),body:r(()=>[o(`div`,null,[c[60]||=p(` Lorem ipsum dolor sit amet, consectetur adipisicing elit. `,-1),l(_,{component:`a`,inline:``,variant:`link`,href:`#basic`,onClick:c[7]||=C(()=>{},[`prevent`])},{default:r(()=>[...c[59]||=[p(` View the basic example `,-1)]]),_:1})])]),footer:r(({hide:e})=>[l(_,{id:`popover-cancel-button`,variant:`secondary`,onClick:e},{default:r(()=>[...c[61]||=[p(`Cancel`,-1)]]),_:1},8,[`onClick`])]),default:r(()=>[l(_,null,{default:r(()=>[...c[57]||=[p(`Toggle popover with custom focus`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})}}});export{z as default};