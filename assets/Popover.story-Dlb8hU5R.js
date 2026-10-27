import{F as e,G as t,H as n,I as r,K as i,N as a,Nt as o,c as s,d as c,ft as l,g as u,h as d,j as f,l as p,m,n as h,nt as g,rt as _}from"./runtime-core.esm-bundler-DKmYt4j6.js";import{B as v,G as y,H as b,U as x,V as S,Y as C,z as w}from"./index-Cl3hMFDe.js";var T={style:{margin:`50px`}},E={style:{margin:`50px`}},D={style:{margin:`50px`}},O={style:{margin:`50px`}},k=[`onClick`],A={style:{margin:`50px`}},j={style:{margin:`50px`}},M={style:{margin:`50px`}},N={style:{margin:`50px`}},P=[`value`],F={style:{margin:`50px`}},I={style:{margin:`50px`}},L=[`value`],R={style:{margin:`50px`}},z=u({__name:`Popover.story`,setup(u){let z=_(!1),B=n(`refTrigger`),V=[`auto`,`top`,`bottom`,`left`,`right`,`top-start`,`top-end`,`bottom-start`,`bottom-end`,`left-start`,`left-end`,`right-start`,`right-end`],H=g({position:`auto`,flip:!0,open:!1}),U={custom:w,info:v,success:x,warning:S,danger:b},W=_(`custom`);return(n,u)=>{let g=e(`component-info`),_=e(`pf-button`),v=e(`pf-popover`),b=e(`story-canvas`),x=e(`pf-checkbox`),S=e(`doc-page`);return f(),p(S,{name:`Components/Popover.story.vue`,title:`Popover`},{description:t(()=>[...u[8]||=[m(`A `,-1),s(`b`,null,`popover`,-1),m(` is in-app messaging that provides more information on specific product areas. Popovers display content in a new window that overlays the current page. Unlike modals, popovers don't block the current page.`,-1)]]),apidocs:t(()=>[d(g,{name:`PfPopover`,doc:{name:`PfPopover`,exportName:`PfPopover`,displayName:`Popover`,description:``,tags:{},expose:[{name:`visible`}],props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`noFocusTrap`,description:`Disables the focus trap of a popover opened by a click, such as when it has no focusable content`,required:!1,type:{name:`boolean`}},{name:`elementToFocus`,description:`The element to focus when the popover becomes visible. By default the first focusable element will receive focus.`,required:!1,type:{name:`union`,elements:[{name:`HTMLElement`},{name:`SVGElement`},{name:`string`}]}},{name:`appendTo`,description:`Element or selector where to render the floating popover`,required:!1,type:{name:`union`,elements:[{name:`"inline"`},{name:`string`},{name:`RendererElement`},{name:`null`},{name:`undefined`}]}},{name:`triggerRef`,description:`The trigger element, a selector or a function returning it, to use in place of the default slot`,required:!1,type:{name:`union`,elements:[{name:`HTMLElement`},{name:`string`},{name:`TSParenthesizedType`},{name:`null`}]}},{name:`hover`,tags:{deprecated:[{description:`Opens the popover on hover and focus rather than on click. Prefer a tooltip.`,title:`deprecated`}]},required:!1,type:{name:`boolean`}},{name:`autoWidth`,description:`Removes fixed-width and allows width to be defined by contents`,required:!1,type:{name:`boolean`}},{name:`noPadding`,description:`Allows content to touch edges of popover container`,required:!1,type:{name:`boolean`}},{name:`noClose`,description:`Hides the close button`,required:!1,type:{name:`boolean`}},{name:`noFlip`,description:`Keeps the popover at its position even when it does not fit, rather than flipping it`,required:!1,type:{name:`boolean`}},{name:`flipBehavior`,description:`The order of the positions to try when the popover does not fit at its position`,required:!1,type:{name:`Array`,elements:[{name:`Placement`}]},defaultValue:{func:!1,value:`() => defaultFlipBehavior`}},{name:`flipOptions`,description:`Options of the flip middleware, replacing flipBehavior`,required:!1,type:{name:`FlipOptions`}},{name:`placementOptions`,description:`Options of the auto placement middleware, used when position is "auto"`,required:!1,type:{name:`AutoPlacementOptions`}},{name:`noHideOnOutsideClick`,description:`Keeps the popover open when a click occurs outside of it`,required:!1,type:{name:`boolean`}},{name:`position`,description:`Popover position. Unless noFlip is set, it will change the position if there is not enough space for it, in the
order of flipBehavior.`,required:!1,type:{name:`union`,elements:[{name:`Placement`},{name:`"auto"`}]},defaultValue:{func:!1,value:`'top'`}},{name:`minWidth`,description:`Minimum width of the popover (default 6.25rem)`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`popoverMinWidth.value`}},{name:`maxWidth`,description:`Maximum width of the popover (default 18.75rem)`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`popoverMaxWidth.value`}},{name:`animationDuration`,description:`CSS fade transition animation duration`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`300`}},{name:`closeBtnAriaLabel`,description:`Accessible label for the close button`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`'Close'`}},{name:`distance`,description:`Distance of the popover to its target`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`25`}},{name:`ariaLabel`,description:`Accessible label for the popover, required when there is no header`,required:!1,type:{name:`string`}},{name:`headerComponent`,description:`Sets the heading level to use for the popover header`,required:!1,type:{name:`union`,elements:[{name:`"h1"`},{name:`"h2"`},{name:`"h3"`},{name:`"h4"`},{name:`"h5"`},{name:`"h6"`}]},defaultValue:{func:!1,value:`'h6'`}},{name:`alertSeverityVariant`,description:`Severity variants for an alert popover. This modifies the color of the header to match the severity.`,required:!1,type:{name:`union`,elements:[{name:`"custom"`},{name:`"info"`},{name:`"warning"`},{name:`"success"`},{name:`"danger"`}]}},{name:`alertSeverityScreenReaderText`,description:`Text announced by screen readers to indicate the severity of an alert popover. Defaults to "{variant} alert:".`,required:!1,type:{name:`string`}},{name:`zIndex`,description:`The z-index of the popover`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`9999`}},{name:`open`,defaultValue:{func:!1,value:`undefined`}}],events:[{name:`show`,type:{names:[`Event`]},description:`The popover was opened by a user interaction`},{name:`hide`,type:{names:[`Event`]},description:`The popover was closed by a user interaction`},{name:`shown`,description:`The popover has fully transitioned in`},{name:`hidden`,description:`The popover has fully transitioned out`}],slots:[{name:`default`,description:`The trigger of the popover, unless triggerRef is set`},{name:`header-icon`},{name:`header`,scoped:!0,bindings:[{name:`hide`,title:`binding`}],description:`Content of the popover header`},{name:`body`,scoped:!0,bindings:[{name:`hide`,title:`binding`}],description:`Content of the popover body`},{name:`footer`,scoped:!0,bindings:[{name:`hide`,title:`binding`}],description:`Content of the popover footer`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Popover.vue`]}})]),default:t(()=>[u[62]||=s(`div`,{class:`markdown pf-v6-c-content`},[s(`p`,null,`By default, the popover is appended to the document body in order to avoid the popover content not being fully visible. Another option is to increase the z-index of the element the popover is appended to to be higher than the z-index of the element that is hiding the popover.`),s(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),s(`ul`,null,[s(`li`,null,[m(`The trigger is the default slot, or `),s(`code`,null,`trigger-ref`),m(` (an element, a selector or a function returning it).`)]),s(`li`,null,[s(`code`,null,`headerContent`),m(`, `),s(`code`,null,`bodyContent`),m(`, `),s(`code`,null,`footerContent`),m(` and `),s(`code`,null,`headerIcon`),m(` are the `),s(`code`,null,`header`),m(`, `),s(`code`,null,`body`),m(`, `),s(`code`,null,`footer`),m(` and `),s(`code`,null,`header-icon`),m(` slots; the content slots receive a `),s(`code`,null,`hide`),m(` function.`)]),s(`li`,null,[m(`The visibility is bound with `),s(`code`,null,`v-model:open`),m(` (`),s(`code`,null,`isVisible`),m(`, `),s(`code`,null,`shouldOpen`),m(` and `),s(`code`,null,`shouldClose`),m(`); `),s(`code`,null,`show`),m(`, `),s(`code`,null,`hide`),m(`, `),s(`code`,null,`shown`),m(` and `),s(`code`,null,`hidden`),m(` are events.`)]),s(`li`,null,[s(`code`,null,`showClose`),m(`, `),s(`code`,null,`withFocusTrap`),m(`, `),s(`code`,null,`enableFlip`),m(` and `),s(`code`,null,`hideOnOutsideClick`),m(` are inverted into `),s(`code`,null,`no-close`),m(`, `),s(`code`,null,`no-focus-trap`),m(`, `),s(`code`,null,`no-flip`),m(` and `),s(`code`,null,`no-hide-on-outside-click`),m(`; `),s(`code`,null,`hasAutoWidth`),m(` is `),s(`code`,null,`auto-width`),m(` and `),s(`code`,null,`hasNoPadding`),m(` is `),s(`code`,null,`no-padding`),m(`.`)]),s(`li`,null,[s(`code`,null,`triggerAction="hover"`),m(` is the deprecated `),s(`code`,null,`hover`),m(` prop.`)]),s(`li`,null,[s(`code`,null,`flip-options`),m(` and `),s(`code`,null,`placement-options`),m(` customize the floating-ui flip and auto placement middlewares. See `),s(`a`,{href:`#/`},`common differences from patternfly-react`),m(`.`)])]),s(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),d(b,{title:`Basic`,source:`<div style="margin: 50px">
  <pf-popover aria-label="Basic popover">
    <pf-button>Toggle popover</pf-button>
    <template #header><div>Popover header</div></template>
    <template #body><div>Popovers are triggered by click rather than hover.</div></template>
    <template #footer>Popover footer</template>
  </pf-popover>
</div>`},{default:t(()=>[s(`div`,T,[d(v,{"aria-label":`Basic popover`},{header:t(()=>[...u[10]||=[s(`div`,null,`Popover header`,-1)]]),body:t(()=>[...u[11]||=[s(`div`,null,`Popovers are triggered by click rather than hover.`,-1)]]),footer:t(()=>[...u[12]||=[m(`Popover footer`,-1)]]),default:t(()=>[d(_,null,{default:t(()=>[...u[9]||=[m(`Toggle popover`,-1)]]),_:1})]),_:1})])]),_:1}),d(b,{title:`Hoverable`,source:`<div style="margin: 50px">
  <pf-popover hover aria-label="Hoverable popover">
    <pf-button>Hover to trigger popover</pf-button>
    <template #header><div>Popover header</div></template>
    <template #body><div>This popover opens on hover.</div></template>
    <template #footer>Popover footer</template>
  </pf-popover>
</div>`},{intro:t(()=>[...u[13]||=[s(`div`,{class:`markdown pf-v6-c-content`},[s(`p`,null,[m(`Set the `),s(`code`,null,`hover`),m(` property to make a `),s(`code`,null,`pf-popover`),m(` that is triggered via hover and focus rather than on click. When using a hoverable popover, you `),s(`strong`,null,`must not`),m(` include any interactive or semantic content (e.g. buttons, links, headings, lists, etc), as focus is not intended to enter a hoverable popover. Including such content may cause an inaccessible UI for users who are not able to reach the content when navigating via assistive tech.`)]),s(`p`,null,[m(`It is instead recommended to use our `),s(`a`,{href:`#/stories/components/tooltip`},`tooltip component`),m(`.`)])],-1)]]),default:t(()=>[s(`div`,E,[d(v,{hover:``,"aria-label":`Hoverable popover`},{header:t(()=>[...u[15]||=[s(`div`,null,`Popover header`,-1)]]),body:t(()=>[...u[16]||=[s(`div`,null,`This popover opens on hover.`,-1)]]),footer:t(()=>[...u[17]||=[m(`Popover footer`,-1)]]),default:t(()=>[d(_,null,{default:t(()=>[...u[14]||=[m(`Hover to trigger popover`,-1)]]),_:1})]),_:1})])]),_:1}),d(b,{title:`Close popover from content (controlled)`,source:`<div style="margin: 50px">
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
</div>`},{default:t(()=>[s(`div`,D,[d(v,{open:z.value,"onUpdate:open":u[1]||=e=>z.value=e,"aria-label":`Popover with button in the body that can close it`},{header:t(()=>[...u[19]||=[s(`div`,null,`Popover header`,-1)]]),body:t(()=>[s(`div`,null,[u[20]||=s(`div`,null,`A controlled popover can be closed by updating its open state after some user interaction.`,-1),s(`div`,null,[s(`button`,{onClick:u[0]||=e=>z.value=!1},`Close popover`)])])]),footer:t(()=>[...u[21]||=[m(`Popover footer`,-1)]]),default:t(()=>[d(_,null,{default:t(()=>[...u[18]||=[m(`Toggle popover`,-1)]]),_:1})]),_:1},8,[`open`])])]),_:1}),d(b,{title:`Close popover from content (uncontrolled)`,source:`<div style="margin: 50px">
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
</div>`},{intro:t(()=>[...u[22]||=[s(`div`,{class:`markdown pf-v6-c-content`},[s(`p`,null,[m(`Note: if you bind `),s(`code`,null,`v-model:open`),m(`, either refer to the example above or, if you want to use the `),s(`code`,null,`hide`),m(` function of the content slots, be sure to keep the open state in sync.`)])],-1)]]),default:t(()=>[s(`div`,O,[d(v,{"aria-label":`Uncontrolled popover with button in the body that can close it`},{header:t(()=>[...u[24]||=[s(`div`,null,`Popover header`,-1)]]),body:t(({hide:e})=>[s(`div`,null,[u[25]||=s(`div`,null,` All the content slots (header, body, footer) receive a hide function which can be used to close the popover after some user interaction. `,-1),s(`div`,null,[s(`button`,{onClick:e},`Close popover`,8,k)])])]),footer:t(()=>[...u[26]||=[m(`Popover footer`,-1)]]),default:t(()=>[d(_,null,{default:t(()=>[...u[23]||=[m(`Toggle popover`,-1)]]),_:1})]),_:1})])]),_:1}),d(b,{title:`Without header/footer/close and no padding`,source:`<div style="margin: 50px">
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
</div>`},{default:t(()=>[s(`div`,A,[d(v,{"aria-label":`Popover with no header, footer, close button, and padding`,"no-padding":``,"no-close":``,"no-focus-trap":``},{body:t(()=>[...u[28]||=[s(`div`,null,` This popover has no padding and is intended for use with content that has its own spacing and should touch the edges of the popover container. `,-1)]]),default:t(()=>[d(_,null,{default:t(()=>[...u[27]||=[m(`Toggle popover`,-1)]]),_:1})]),_:1})])]),_:1}),d(b,{title:`Width auto`,source:`<div style="margin: 50px">
  <pf-popover aria-label="Popover with auto-width" auto-width append-to="body">
    <pf-button>Toggle popover</pf-button>
    <template #body><div>Removes fixed-width and allows width to be defined by contents</div></template>
  </pf-popover>
</div>`},{intro:t(()=>[...u[29]||=[s(`div`,{class:`markdown pf-v6-c-content`},[s(`p`,null,[m(`Here the popover goes over the navigation, so the `),s(`code`,null,`append-to`),m(` property is set to the document body.`)])],-1)]]),default:t(()=>[s(`div`,j,[d(v,{"aria-label":`Popover with auto-width`,"auto-width":``,"append-to":`body`},{body:t(()=>[...u[31]||=[s(`div`,null,`Removes fixed-width and allows width to be defined by contents`,-1)]]),default:t(()=>[d(_,null,{default:t(()=>[...u[30]||=[m(`Toggle popover`,-1)]]),_:1})]),_:1})])]),_:1}),d(b,{title:`Popover react ref`,source:`<div style="margin: 50px">
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
</div>`},{intro:t(()=>[...u[32]||=[s(`div`,{class:`markdown pf-v6-c-content`},[s(`p`,null,[m(`The trigger can be passed to `),s(`code`,null,`trigger-ref`),m(` as an element, such as a template ref, instead of being wrapped by the popover.`)])],-1)]]),default:t(()=>[s(`div`,M,[s(`button`,{ref_key:`refTrigger`,ref:B},`Popover attached via template ref`,512),d(v,{"aria-label":`Popover with react reference example`,"trigger-ref":B.value},{header:t(()=>[...u[33]||=[s(`div`,null,`Popover header`,-1)]]),body:t(()=>[...u[34]||=[s(`div`,null,` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis. `,-1)]]),footer:t(()=>[...u[35]||=[m(`Popover footer`,-1)]]),_:1},8,[`trigger-ref`])])]),_:1}),d(b,{title:`Popover selector ref`,source:`<div style="margin: 50px">
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
</div>`},{default:t(()=>[s(`div`,N,[u[39]||=s(`button`,{id:`popover-selector`},`Popover attached via selector ref`,-1),d(v,{"aria-label":`Popover with selector reference example`,"trigger-ref":`#popover-selector`},{header:t(()=>[...u[36]||=[s(`div`,null,`Popover header`,-1)]]),body:t(()=>[...u[37]||=[s(`div`,null,` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis. `,-1)]]),footer:t(()=>[...u[38]||=[m(`Popover footer`,-1)]]),_:1})])]),_:1}),d(b,{title:`Advanced`,source:`<div>
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
</div>`},{default:t(()=>[s(`div`,null,[u[40]||=s(`span`,{style:{"padding-right":`10px`}},`Popover position`,-1),i(s(`select`,{"onUpdate:modelValue":u[2]||=e=>H.position=e,"aria-label":`Popover position`},[(f(),c(h,null,a(V,e=>s(`option`,{key:e,value:e},o(e),9,P)),64))],512),[[y,H.position]]),d(x,{id:`popover-advanced-check-1`,modelValue:H.flip,"onUpdate:modelValue":u[3]||=e=>H.flip=e,label:`Flip popover if the position falls outside the view`,"aria-label":`Keep in view`},null,8,[`modelValue`]),d(x,{id:`popover-advanced-check-2`,modelValue:H.open,"onUpdate:modelValue":u[4]||=e=>H.open=e,label:`Toggle popover from outside`,"aria-label":`Toggle popover from outside`},null,8,[`modelValue`])]),s(`div`,F,[d(v,{open:H.open,"onUpdate:open":u[5]||=e=>H.open=e,"aria-label":`Advanced popover usages example`,position:H.position,"no-hide-on-outside-click":``,"no-flip":!H.flip},{header:t(()=>[...u[42]||=[s(`div`,null,`Popover header`,-1)]]),body:t(()=>[...u[43]||=[s(`div`,null,` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis. `,-1)]]),footer:t(()=>[...u[44]||=[m(`Popover footer`,-1)]]),default:t(()=>[d(_,null,{default:t(()=>[...u[41]||=[m(`Toggle popover`,-1)]]),_:1})]),_:1},8,[`open`,`position`,`no-flip`])])]),_:1}),d(b,{title:`Popover with icon in the title`,source:`<div style="margin: 50px">
  <pf-popover aria-label="Popover with icon in the title example" append-to="body">
    <pf-button>Toggle popover</pf-button>
    <template #header-icon><bell-icon /></template>
    <template #header>Popover with icon</template>
    <template #body><div>Popovers are triggered by click rather than hover.</div></template>
    <template #footer>Popover footer</template>
  </pf-popover>
</div>`},{intro:t(()=>[...u[45]||=[s(`div`,{class:`markdown pf-v6-c-content`},[s(`p`,null,[m(`Here the popover goes over the navigation, so the `),s(`code`,null,`append-to`),m(` property is set to the document body.`)])],-1)]]),default:t(()=>[s(`div`,I,[d(v,{"aria-label":`Popover with icon in the title example`,"append-to":`body`},{"header-icon":t(()=>[d(l(w))]),header:t(()=>[...u[47]||=[m(`Popover with icon`,-1)]]),body:t(()=>[...u[48]||=[s(`div`,null,`Popovers are triggered by click rather than hover.`,-1)]]),footer:t(()=>[...u[49]||=[m(`Popover footer`,-1)]]),default:t(()=>[d(_,null,{default:t(()=>[...u[46]||=[m(`Toggle popover`,-1)]]),_:1})]),_:1})])]),_:1}),d(b,{title:`Alert popover`,source:`<div>
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
</div>`},{intro:t(()=>[...u[50]||=[s(`div`,{class:`markdown pf-v6-c-content`},[s(`p`,null,[m(`Here the popover goes over the navigation, so the `),s(`code`,null,`append-to`),m(` property is set to the document body.`)])],-1)]]),default:t(()=>[s(`div`,null,[u[51]||=s(`span`,{style:{"padding-right":`10px`}},`Alert variant:`,-1),i(s(`select`,{"onUpdate:modelValue":u[6]||=e=>W.value=e,"aria-label":`Popover alert type`},[(f(!0),c(h,null,a(Object.keys(U),e=>(f(),c(`option`,{key:e,value:e},o(e),9,L))),128))],512),[[y,W.value]])]),s(`div`,R,[d(v,{"aria-label":`Alert popover`,"alert-severity-variant":W.value,"header-component":`h1`,"append-to":`body`},{"header-icon":t(()=>[(f(),p(r(U[W.value])))]),header:t(()=>[...u[53]||=[m(`Default popover title`,-1)]]),body:t(()=>[...u[54]||=[s(`div`,null,`Popovers are triggered by click rather than hover.`,-1)]]),footer:t(()=>[...u[55]||=[m(`Popover footer`,-1)]]),default:t(()=>[d(_,null,{default:t(()=>[...u[52]||=[m(`Toggle popover`,-1)]]),_:1})]),_:1},8,[`alert-severity-variant`])])]),_:1}),d(b,{title:`Custom focus`,source:`<pf-popover element-to-focus="#popover-cancel-button" no-close aria-label="Popover with custom focus">
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
</pf-popover>`},{intro:t(()=>[...u[56]||=[s(`div`,{class:`markdown pf-v6-c-content`},[s(`p`,null,[m(`Use the `),s(`code`,null,`element-to-focus`),m(` property to customize which element inside the popover receives focus when opened.`)])],-1)]]),default:t(()=>[d(v,{"element-to-focus":`#popover-cancel-button`,"no-close":``,"aria-label":`Popover with custom focus`},{header:t(()=>[...u[58]||=[s(`div`,null,`Popover header`,-1)]]),body:t(()=>[s(`div`,null,[u[60]||=m(` Lorem ipsum dolor sit amet, consectetur adipisicing elit. `,-1),d(_,{component:`a`,inline:``,variant:`link`,href:`#basic`,onClick:u[7]||=C(()=>{},[`prevent`])},{default:t(()=>[...u[59]||=[m(` View the basic example `,-1)]]),_:1})])]),footer:t(({hide:e})=>[d(_,{id:`popover-cancel-button`,variant:`secondary`,onClick:e},{default:t(()=>[...u[61]||=[m(`Cancel`,-1)]]),_:1},8,[`onClick`])]),default:t(()=>[d(_,null,{default:t(()=>[...u[57]||=[m(`Toggle popover with custom focus`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})}}});export{z as default};