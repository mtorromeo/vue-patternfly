import{N as e,U as t,c as n,et as r,h as i,k as a,l as o,m as s,n as c,p as l,s as u,st as d,u as f}from"./runtime-core.esm-bundler-wvQKcJ7_.js";import{b as p,d as m,i as h,t as g,y as _}from"./index-gkhET_bk.js";import{t as v}from"./circle-plus-icon-CwFrvV3q.js";var y=_({name:`SquareArrowUpRightIcon`,height:512,width:448,svgPathData:`M384 32c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0zM272 296c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24l-112 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l54.1 0-103 103c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l103-103 0 54.1z`,yOffset:0,xOffset:0}),b=_({name:`CopyIcon`,height:512,width:448,svgPathData:`M192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-200.6c0-17.4-7.1-34.1-19.7-46.2L370.6 17.8C358.7 6.4 342.8 0 326.3 0L192 0zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-64 0 0 16-192 0 0-256 16 0 0-64-16 0z`,yOffset:0,xOffset:0}),x=i({__name:`Button.story`,setup(i){let _=g(),x=r(!1),S=r(!1),C=r(!1);function w(){_.add({title:`clicked span pf-button`,variant:`info`})}return(r,i)=>{let g=e(`component-info`),_=e(`pf-button`),T=e(`story-canvas`),E=e(`pf-tooltip`),D=e(`pf-badge`),O=e(`doc-page`);return a(),n(O,{name:`Components/Button.story.vue`,title:`Button`},{description:t(()=>[...i[5]||=[l(`A `,-1),u(`b`,null,`button`,-1),l(` is a box area or text that communicates and triggers user actions when clicked or selected. Buttons can be used to communicate and immediately trigger actions a user can take in an application, like submitting a form, canceling a process, or creating a new object. Buttons can also be used to take a user to a new location, like another page inside of a web application, or an external site such as help or documentation.`,-1)]]),apidocs:t(()=>[s(g,{name:`PfButton`,doc:{name:`PfButton`,exportName:`PfButton`,displayName:`Button`,description:``,tags:{},expose:[{name:`el`}],props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`component`,description:`Sets the base component to render. defaults to button`,required:!1,type:{name:`union`,elements:[{name:`string`},{name:`Component`}]},defaultValue:{func:!1,value:`"auto"`}},{name:`block`,description:`Adds block styling to button`,required:!1,type:{name:`boolean`}},{name:`disabled`,description:`Adds disabled styling and disables the button using the disabled html attribute`,required:!1,type:{name:`boolean`}},{name:`ariaDisabled`,description:`Adds disabled styling and communicates that the button is disabled using the aria-disabled html attribute`,required:!1,type:{name:`boolean`}},{name:`loading`,description:`Adds progress styling to button`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`undefined`}},{name:`spinnerAriaValueText`,description:`Text describing that current loading status or progress`,required:!1,type:{name:`string`}},{name:`spinnerAriaLabel`,description:`Accessible label for the spinner to describe what is loading`,required:!1,type:{name:`string`}},{name:`spinnerAriaLabelledBy`,description:`Id of element which describes what is being loaded`,required:!1,type:{name:`string`}},{name:`inoperableEvents`,description:`Events to prevent when the button is in an aria-disabled state. Defaults to click and keypress`,required:!1,type:{name:`Array`,elements:[{name:`string`}]}},{name:`inline`,description:`Adds inline styling to a link button`,required:!1,type:{name:`boolean`}},{name:`favorite`,description:`Adds favorite styling to a button`,required:!1,type:{name:`boolean`}},{name:`favorited`,description:`Flag indicating whether the button is favorited or not, only when favorite is true.`,required:!1,type:{name:`boolean`}},{name:`type`,description:`Sets button type`,required:!1,type:{name:`union`,elements:[{name:`"button"`},{name:`"submit"`},{name:`"reset"`}]},defaultValue:{func:!1,value:`"button"`}},{name:`variant`,description:`Adds button variant styles`,required:!1,type:{name:`union`,elements:[{name:`"primary"`},{name:`"secondary"`},{name:`"tertiary"`},{name:`"danger"`},{name:`"warning"`},{name:`"link"`},{name:`"plain"`},{name:`"control"`},{name:`"stateful"`}]},defaultValue:{func:!1,value:`"primary"`}},{name:`state`,description:`Sets state of the stateful button variant. Default is "unread"`,required:!1,type:{name:`union`,elements:[{name:`"read"`},{name:`"unread"`},{name:`"attention"`}]}},{name:`noPadding`,description:`Applies no padding on a plain button variant. Use when plain button is placed inline with text`,required:!1,type:{name:`boolean`}},{name:`iconPosition`,description:`Sets position of the link icon`,required:!1,type:{name:`union`,elements:[{name:`"start"`},{name:`"end"`}]},defaultValue:{func:!1,value:`"start"`}},{name:`tabindex`,description:`Sets the button tabindex.`,required:!1,type:{name:`number`}},{name:`small`,description:`Adds small styling to the button`,required:!1,type:{name:`boolean`}},{name:`large`,description:`Adds large styling to the button`,required:!1,type:{name:`boolean`}},{name:`danger`,description:`Adds danger styling to secondary or link button variants`,required:!1,type:{name:`boolean`}},{name:`badgeClass`,description:`Class name for the badge container`,required:!1,type:{name:`string`}},{name:`expanded`,description:`Flag indicating whether content the button controls is expanded or not. Required when hamburger is true. Applies additional expanded styling when docked is true.`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`undefined`}},{name:`settings`,description:`Flag indicating the button is a settings button. This will override the icon property.`,required:!1,type:{name:`boolean`}},{name:`hamburger`,description:`Flag indicating the button is a hamburger button. This will override the icon property.`,required:!1,type:{name:`boolean`}},{name:`hamburgerVariant`,description:`Adjusts and animates the hamburger icon to indicate what will happen upon clicking the button.`,required:!1,type:{name:`union`,elements:[{name:`"expand"`},{name:`"collapse"`}]}},{name:`circle`,description:`Flag indicating the button is a circle button. Intended for buttons that only contain an icon..`,required:!1,type:{name:`boolean`}},{name:`docked`,description:`Flag indicating the button is a docked variant button. For use in docked navigation.`,required:!1,type:{name:`boolean`}},{name:`to`,description:`Route Location the link should navigate to when clicked on.`,required:!1,type:{name:`RouteLocationRaw`}},{name:`replace`,description:"Calls `router.replace` instead of `router.push`.",required:!1,type:{name:`boolean`}},{name:`href`,required:!1,type:{name:`string`}},{name:`ariaCurrent`,required:!1,type:{name:`string`}}],events:[{name:`click`,type:{names:[`PointerEvent`]}}],slots:[{name:`default`},{name:`icon`},{name:`badge`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Button.vue`]}})]),default:t(()=>[s(T,{title:`Variations`,source:`<pf-button variant="primary">Primary</pf-button>
<pf-button variant="secondary">Secondary</pf-button>
<pf-button variant="tertiary">Tertiary</pf-button>
<pf-button variant="danger">Danger</pf-button>
<pf-button variant="warning">Warning</pf-button>
<br>
<br>
<pf-button variant="link">
  <template #icon>
    <circle-plus-icon />
  </template>
  Link
</pf-button>
<pf-button variant="link" icon-position="end">
  <template #icon>
    <square-arrow-up-right-icon />
  </template>
  Link
</pf-button>
<pf-button variant="link" inline>Inline link</pf-button>
<br>
<br>
<pf-button variant="plain" aria-label="Action">
  <template #icon>
    <xmark-icon />
  </template>
</pf-button>
<br>
<br>
<pf-button variant="control">Control</pf-button>
<pf-button variant="control" aria-label="Copy">
  <template #icon>
    <copy-icon />
  </template>
</pf-button>`},{default:t(()=>[s(_,{variant:`primary`},{default:t(()=>[...i[6]||=[l(`Primary`,-1)]]),_:1}),s(_,{variant:`secondary`},{default:t(()=>[...i[7]||=[l(`Secondary`,-1)]]),_:1}),s(_,{variant:`tertiary`},{default:t(()=>[...i[8]||=[l(`Tertiary`,-1)]]),_:1}),s(_,{variant:`danger`},{default:t(()=>[...i[9]||=[l(`Danger`,-1)]]),_:1}),s(_,{variant:`warning`},{default:t(()=>[...i[10]||=[l(`Warning`,-1)]]),_:1}),i[15]||=u(`br`,null,null,-1),i[16]||=u(`br`,null,null,-1),s(_,{variant:`link`},{icon:t(()=>[s(d(v))]),default:t(()=>[i[11]||=l(` Link `,-1)]),_:1}),s(_,{variant:`link`,"icon-position":`end`},{icon:t(()=>[s(d(y))]),default:t(()=>[i[12]||=l(` Link `,-1)]),_:1}),s(_,{variant:`link`,inline:``},{default:t(()=>[...i[13]||=[l(`Inline link`,-1)]]),_:1}),i[17]||=u(`br`,null,null,-1),i[18]||=u(`br`,null,null,-1),s(_,{variant:`plain`,"aria-label":`Action`},{icon:t(()=>[s(d(m))]),_:1}),i[19]||=u(`br`,null,null,-1),i[20]||=u(`br`,null,null,-1),s(_,{variant:`control`},{default:t(()=>[...i[14]||=[l(`Control`,-1)]]),_:1}),s(_,{variant:`control`,"aria-label":`Copy`},{icon:t(()=>[s(d(b))]),_:1})]),_:1}),s(T,{title:`Disabled`,source:`<pf-button disabled>Primary disabled</pf-button>
<pf-button disabled>Secondary disabled</pf-button>
<pf-button disabled variant="tertiary">Tertiary disabled</pf-button>
<pf-button disabled variant="danger">Danger disabled</pf-button>
<pf-button disabled variant="warning">Warning disabled</pf-button>
<br>
<br>
<pf-button disabled variant="link">
  <template #icon>
    <circle-plus-icon />
  </template>
  Link disabled
</pf-button>
<pf-button disabled variant="link" inline>Inline link disabled</pf-button>
<pf-button disabled variant="plain" aria-label="Action">
  <template #icon>
    <xmark-icon />
  </template>
</pf-button>
<pf-button disabled variant="control">Control disabled</pf-button>`},{default:t(()=>[s(_,{disabled:``},{default:t(()=>[...i[21]||=[l(`Primary disabled`,-1)]]),_:1}),s(_,{disabled:``},{default:t(()=>[...i[22]||=[l(`Secondary disabled`,-1)]]),_:1}),s(_,{disabled:``,variant:`tertiary`},{default:t(()=>[...i[23]||=[l(`Tertiary disabled`,-1)]]),_:1}),s(_,{disabled:``,variant:`danger`},{default:t(()=>[...i[24]||=[l(`Danger disabled`,-1)]]),_:1}),s(_,{disabled:``,variant:`warning`},{default:t(()=>[...i[25]||=[l(`Warning disabled`,-1)]]),_:1}),i[29]||=u(`br`,null,null,-1),i[30]||=u(`br`,null,null,-1),s(_,{disabled:``,variant:`link`},{icon:t(()=>[s(d(v))]),default:t(()=>[i[26]||=l(` Link disabled `,-1)]),_:1}),s(_,{disabled:``,variant:`link`,inline:``},{default:t(()=>[...i[27]||=[l(`Inline link disabled`,-1)]]),_:1}),s(_,{disabled:``,variant:`plain`,"aria-label":`Action`},{icon:t(()=>[s(d(m))]),_:1}),s(_,{disabled:``,variant:`control`},{default:t(()=>[...i[28]||=[l(`Control disabled`,-1)]]),_:1})]),_:1}),s(T,{title:`Aria disabled`,source:`<pf-button aria-disabled>Primary aria disabled</pf-button>
<pf-button aria-disabled>Secondary aria disabled</pf-button>
<pf-button aria-disabled variant="tertiary">Tertiary aria disabled</pf-button>
<pf-button aria-disabled variant="danger">Danger aria disabled</pf-button>
<pf-button aria-disabled variant="warning">Warning aria disabled</pf-button>
<br>
<br>
<pf-button aria-disabled variant="link">
  <template #icon>
    <circle-plus-icon />
  </template>
  Link aria disabled
</pf-button>
<pf-button aria-disabled variant="link" inline>Inline link aria disabled</pf-button>
<pf-button aria-disabled variant="plain" aria-label="Action">
  <template #icon>
    <xmark-icon />
  </template>
</pf-button>
<pf-button aria-disabled variant="control">Control aria disabled</pf-button>`},{default:t(()=>[s(_,{"aria-disabled":``},{default:t(()=>[...i[31]||=[l(`Primary aria disabled`,-1)]]),_:1}),s(_,{"aria-disabled":``},{default:t(()=>[...i[32]||=[l(`Secondary aria disabled`,-1)]]),_:1}),s(_,{"aria-disabled":``,variant:`tertiary`},{default:t(()=>[...i[33]||=[l(`Tertiary aria disabled`,-1)]]),_:1}),s(_,{"aria-disabled":``,variant:`danger`},{default:t(()=>[...i[34]||=[l(`Danger aria disabled`,-1)]]),_:1}),s(_,{"aria-disabled":``,variant:`warning`},{default:t(()=>[...i[35]||=[l(`Warning aria disabled`,-1)]]),_:1}),i[39]||=u(`br`,null,null,-1),i[40]||=u(`br`,null,null,-1),s(_,{"aria-disabled":``,variant:`link`},{icon:t(()=>[s(d(v))]),default:t(()=>[i[36]||=l(` Link aria disabled `,-1)]),_:1}),s(_,{"aria-disabled":``,variant:`link`,inline:``},{default:t(()=>[...i[37]||=[l(`Inline link aria disabled`,-1)]]),_:1}),s(_,{"aria-disabled":``,variant:`plain`,"aria-label":`Action`},{icon:t(()=>[s(d(m))]),_:1}),s(_,{"aria-disabled":``,variant:`control`},{default:t(()=>[...i[38]||=[l(`Control aria disabled`,-1)]]),_:1})]),_:1}),s(T,{title:`Aria disable with tooltip`,source:`<pf-tooltip
  content="Aria-disabled buttons are like disabled buttons, but focusable. Allows for tooltip support."
>
  <pf-button aria-disabled variant="secondary">Secondary button to core docs</pf-button>
</pf-tooltip>`},{default:t(()=>[s(E,{content:`Aria-disabled buttons are like disabled buttons, but focusable. Allows for tooltip support.`},{default:t(()=>[s(_,{"aria-disabled":``,variant:`secondary`},{default:t(()=>[...i[41]||=[l(`Secondary button to core docs`,-1)]]),_:1})]),_:1})]),_:1}),s(T,{title:`Aria disabled link as button with tooltip`,source:`<pf-tooltip content="Aria-disabled link as button with tooltip">
  <pf-button
    component="a"
    aria-disabled
    href="https://www.patternfly.org/"
    target="_blank"
    variant="tertiary"
  >
    Tertiary link as button to core docs
  </pf-button>
</pf-tooltip>`},{default:t(()=>[s(E,{content:`Aria-disabled link as button with tooltip`},{default:t(()=>[s(_,{component:`a`,"aria-disabled":``,href:`https://www.patternfly.org/`,target:`_blank`,variant:`tertiary`},{default:t(()=>[...i[42]||=[l(` Tertiary link as button to core docs `,-1)]]),_:1})]),_:1})]),_:1}),s(T,{title:`Links as buttons`,source:`<pf-button
  component="a"
  href="https://www.patternfly.org/"
  target="_blank"
  variant="primary"
>
  Link to core docs
</pf-button>
<pf-button
  component="a"
  href="https://www.patternfly.org/"
  target="_blank"
  variant="secondary"
>
  Secondary link to core docs
</pf-button>
<pf-button
  disabled
  component="a"
  href="https://www.patternfly.org/"
  target="_blank"
  variant="tertiary"
>
  Tertiary link to core docs
</pf-button>
<pf-button
  component="a"
  href="https://www.patternfly.org/contribution/#modifiers"
  variant="link"
>
  Jump to modifiers in contribution guidelines
</pf-button>`},{default:t(()=>[s(_,{component:`a`,href:`https://www.patternfly.org/`,target:`_blank`,variant:`primary`},{default:t(()=>[...i[43]||=[l(` Link to core docs `,-1)]]),_:1}),s(_,{component:`a`,href:`https://www.patternfly.org/`,target:`_blank`,variant:`secondary`},{default:t(()=>[...i[44]||=[l(` Secondary link to core docs `,-1)]]),_:1}),s(_,{disabled:``,component:`a`,href:`https://www.patternfly.org/`,target:`_blank`,variant:`tertiary`},{default:t(()=>[...i[45]||=[l(` Tertiary link to core docs `,-1)]]),_:1}),s(_,{component:`a`,href:`https://www.patternfly.org/contribution/#modifiers`,variant:`link`},{default:t(()=>[...i[46]||=[l(` Jump to modifiers in contribution guidelines `,-1)]]),_:1})]),_:1}),s(T,{title:`Inline link as span`,source:`<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  <pf-button
    variant="link"
    inline
    component="span"
  >
    This is long button text that needs to be a span so that it will wrap inline with the text around it.
  </pf-button>
  Sed hendrerit nisi in cursus maximus. Ut malesuada nisi turpis, in condimentum velit elementum non.
</p>

<br>

<p>
  Note that using a
  <b>span</b> as a button does not fire the
  <b>click</b> event for Enter or Space keys.
  <pf-button variant="link" inline component="span" @keydown.prevent="handleKeydown">
    An
    <b>keydown</b> event listener is needed for Enter and Space key presses to prevent their default behavior and trigger your code.
  </pf-button>
  Pressing the Enter or Space keys on the inline link as span above demonstrates this by triggering an alert.
</p>`},{default:t(()=>[u(`p`,null,[i[48]||=l(` Lorem ipsum dolor sit amet, consectetur adipiscing elit. `,-1),s(_,{variant:`link`,inline:``,component:`span`},{default:t(()=>[...i[47]||=[l(` This is long button text that needs to be a span so that it will wrap inline with the text around it. `,-1)]]),_:1}),i[49]||=l(` Sed hendrerit nisi in cursus maximus. Ut malesuada nisi turpis, in condimentum velit elementum non. `,-1)]),i[57]||=u(`br`,null,null,-1),u(`p`,null,[i[51]||=l(` Note that using a `,-1),i[52]||=u(`b`,null,`span`,-1),i[53]||=l(` as a button does not fire the `,-1),i[54]||=u(`b`,null,`click`,-1),i[55]||=l(` event for Enter or Space keys. `,-1),s(_,{variant:`link`,inline:``,component:`span`,onKeydown:p(w,[`prevent`])},{default:t(()=>[...i[50]||=[l(` An `,-1),u(`b`,null,`keydown`,-1),l(` event listener is needed for Enter and Space key presses to prevent their default behavior and trigger your code. `,-1)]]),_:1}),i[56]||=l(` Pressing the Enter or Space keys on the inline link as span above demonstrates this by triggering an alert. `,-1)])]),_:1}),s(T,{title:`Block level`,source:`<pf-button block>Block level button</pf-button>`},{default:t(()=>[s(_,{block:``},{default:t(()=>[...i[58]||=[l(`Block level button`,-1)]]),_:1})]),_:1}),s(T,{title:`Types`,source:`<pf-button type="submit">Submit</pf-button>
<pf-button type="reset">Reset</pf-button>
<pf-button>Default</pf-button>`},{default:t(()=>[s(_,{type:`submit`},{default:t(()=>[...i[59]||=[l(`Submit`,-1)]]),_:1}),s(_,{type:`reset`},{default:t(()=>[...i[60]||=[l(`Reset`,-1)]]),_:1}),s(_,null,{default:t(()=>[...i[61]||=[l(`Default`,-1)]]),_:1})]),_:1}),s(T,{title:`Small`,source:`<pf-button variant="primary" small>Primary</pf-button>
<pf-button variant="secondary" small>Secondary</pf-button>
<pf-button variant="tertiary" small>Tertiary</pf-button>
<pf-button variant="danger" small>Danger</pf-button>
<pf-button variant="warning" small>Warning</pf-button>`},{default:t(()=>[s(_,{variant:`primary`,small:``},{default:t(()=>[...i[62]||=[l(`Primary`,-1)]]),_:1}),s(_,{variant:`secondary`,small:``},{default:t(()=>[...i[63]||=[l(`Secondary`,-1)]]),_:1}),s(_,{variant:`tertiary`,small:``},{default:t(()=>[...i[64]||=[l(`Tertiary`,-1)]]),_:1}),s(_,{variant:`danger`,small:``},{default:t(()=>[...i[65]||=[l(`Danger`,-1)]]),_:1}),s(_,{variant:`warning`,small:``},{default:t(()=>[...i[66]||=[l(`Warning`,-1)]]),_:1})]),_:1}),s(T,{title:`Call to action`,source:`<pf-button variant="primary" large>Call to action</pf-button>
<pf-button variant="secondary" large>Call to action</pf-button>
<pf-button variant="tertiary" large>Call to action</pf-button>
<pf-button variant="link" large icon-position="end">
  <template #icon>
    <arrow-right-icon />
  </template>
  Call to action
</pf-button>`},{default:t(()=>[s(_,{variant:`primary`,large:``},{default:t(()=>[...i[67]||=[l(`Call to action`,-1)]]),_:1}),s(_,{variant:`secondary`,large:``},{default:t(()=>[...i[68]||=[l(`Call to action`,-1)]]),_:1}),s(_,{variant:`tertiary`,large:``},{default:t(()=>[...i[69]||=[l(`Call to action`,-1)]]),_:1}),s(_,{variant:`link`,large:``,"icon-position":`end`},{icon:t(()=>[s(d(h))]),default:t(()=>[i[70]||=l(` Call to action `,-1)]),_:1})]),_:1}),s(T,{title:`Progress`,source:`<pf-button
  :spinner-aria-value-text="primaryLoading ? 'Loading' : undefined"
  :loading="primaryLoading"
  variant="primary"
  @click="primaryLoading = true"
>
  <template v-if="primaryLoading">Loading...</template>
  <template v-else>Click to start loading</template>
</pf-button>
<pf-button v-if="primaryLoading" @click="primaryLoading = false">Stop</pf-button>

<br>
<br>

<pf-button
  :spinner-aria-value-text="secondaryLoading ? 'Loading' : undefined"
  :loading="secondaryLoading"
  variant="secondary"
  @click="secondaryLoading = true"
>
  <template v-if="secondaryLoading">Loading...</template>
  <template v-else>Click to start loading</template>
</pf-button>
<pf-button v-if="secondaryLoading" @click="secondaryLoading = false">Stop</pf-button>`},{default:t(()=>[s(_,{"spinner-aria-value-text":x.value?`Loading`:void 0,loading:x.value,variant:`primary`,onClick:i[0]||=e=>x.value=!0},{default:t(()=>[x.value?(a(),f(c,{key:0},[l(`Loading...`)],64)):(a(),f(c,{key:1},[l(`Click to start loading`)],64))]),_:1},8,[`spinner-aria-value-text`,`loading`]),x.value?(a(),n(_,{key:0,onClick:i[1]||=e=>x.value=!1},{default:t(()=>[...i[71]||=[l(`Stop`,-1)]]),_:1})):o(``,!0),i[73]||=u(`br`,null,null,-1),i[74]||=u(`br`,null,null,-1),s(_,{"spinner-aria-value-text":S.value?`Loading`:void 0,loading:S.value,variant:`secondary`,onClick:i[2]||=e=>S.value=!0},{default:t(()=>[S.value?(a(),f(c,{key:0},[l(`Loading...`)],64)):(a(),f(c,{key:1},[l(`Click to start loading`)],64))]),_:1},8,[`spinner-aria-value-text`,`loading`]),S.value?(a(),n(_,{key:1,onClick:i[3]||=e=>S.value=!1},{default:t(()=>[...i[72]||=[l(`Stop`,-1)]]),_:1})):o(``,!0)]),_:1}),s(T,{title:`With count`,source:`<p>Unread:</p>
<pf-button variant="primary">View issues <template #badge><pf-badge>7</pf-badge></template></pf-button>
<pf-button variant="secondary">View issues <template #badge><pf-badge>7</pf-badge></template></pf-button>
<pf-button variant="tertiary">View issues <template #badge><pf-badge>7</pf-badge></template></pf-button>
<pf-button variant="link">View issues <template #badge><pf-badge>7</pf-badge></template></pf-button>
<p>Unread disabled:</p>
<pf-button disabled variant="primary">View issues <template #badge><pf-badge>7</pf-badge></template></pf-button>
<pf-button disabled variant="secondary">View issues <template #badge><pf-badge>7</pf-badge></template></pf-button>
<pf-button disabled variant="tertiary">View issues <template #badge><pf-badge>7</pf-badge></template></pf-button>
<pf-button disabled variant="link">View issues <template #badge><pf-badge>7</pf-badge></template></pf-button>
<p>Read:</p>
<pf-button variant="primary">View issues <template #badge><pf-badge read>7</pf-badge></template></pf-button>
<pf-button variant="secondary">View issues <template #badge><pf-badge read>7</pf-badge></template></pf-button>
<pf-button variant="tertiary">View issues <template #badge><pf-badge read>7</pf-badge></template></pf-button>
<pf-button variant="link">View issues <template #badge><pf-badge read>7</pf-badge></template></pf-button>
<p>Read disabled:</p>
<pf-button disabled variant="primary">View issues <template #badge><pf-badge read>7</pf-badge></template></pf-button>
<pf-button disabled variant="secondary">View issues <template #badge><pf-badge read>7</pf-badge></template></pf-button>
<pf-button disabled variant="tertiary">View issues <template #badge><pf-badge read>7</pf-badge></template></pf-button>
<pf-button disabled variant="link">View issues <template #badge><pf-badge read>7</pf-badge></template></pf-button>`},{default:t(()=>[i[107]||=u(`p`,null,`Unread:`,-1),s(_,{variant:`primary`},{badge:t(()=>[s(D,null,{default:t(()=>[...i[75]||=[l(`7`,-1)]]),_:1})]),default:t(()=>[i[76]||=l(`View issues `,-1)]),_:1}),s(_,{variant:`secondary`},{badge:t(()=>[s(D,null,{default:t(()=>[...i[77]||=[l(`7`,-1)]]),_:1})]),default:t(()=>[i[78]||=l(`View issues `,-1)]),_:1}),s(_,{variant:`tertiary`},{badge:t(()=>[s(D,null,{default:t(()=>[...i[79]||=[l(`7`,-1)]]),_:1})]),default:t(()=>[i[80]||=l(`View issues `,-1)]),_:1}),s(_,{variant:`link`},{badge:t(()=>[s(D,null,{default:t(()=>[...i[81]||=[l(`7`,-1)]]),_:1})]),default:t(()=>[i[82]||=l(`View issues `,-1)]),_:1}),i[108]||=u(`p`,null,`Unread disabled:`,-1),s(_,{disabled:``,variant:`primary`},{badge:t(()=>[s(D,null,{default:t(()=>[...i[83]||=[l(`7`,-1)]]),_:1})]),default:t(()=>[i[84]||=l(`View issues `,-1)]),_:1}),s(_,{disabled:``,variant:`secondary`},{badge:t(()=>[s(D,null,{default:t(()=>[...i[85]||=[l(`7`,-1)]]),_:1})]),default:t(()=>[i[86]||=l(`View issues `,-1)]),_:1}),s(_,{disabled:``,variant:`tertiary`},{badge:t(()=>[s(D,null,{default:t(()=>[...i[87]||=[l(`7`,-1)]]),_:1})]),default:t(()=>[i[88]||=l(`View issues `,-1)]),_:1}),s(_,{disabled:``,variant:`link`},{badge:t(()=>[s(D,null,{default:t(()=>[...i[89]||=[l(`7`,-1)]]),_:1})]),default:t(()=>[i[90]||=l(`View issues `,-1)]),_:1}),i[109]||=u(`p`,null,`Read:`,-1),s(_,{variant:`primary`},{badge:t(()=>[s(D,{read:``},{default:t(()=>[...i[91]||=[l(`7`,-1)]]),_:1})]),default:t(()=>[i[92]||=l(`View issues `,-1)]),_:1}),s(_,{variant:`secondary`},{badge:t(()=>[s(D,{read:``},{default:t(()=>[...i[93]||=[l(`7`,-1)]]),_:1})]),default:t(()=>[i[94]||=l(`View issues `,-1)]),_:1}),s(_,{variant:`tertiary`},{badge:t(()=>[s(D,{read:``},{default:t(()=>[...i[95]||=[l(`7`,-1)]]),_:1})]),default:t(()=>[i[96]||=l(`View issues `,-1)]),_:1}),s(_,{variant:`link`},{badge:t(()=>[s(D,{read:``},{default:t(()=>[...i[97]||=[l(`7`,-1)]]),_:1})]),default:t(()=>[i[98]||=l(`View issues `,-1)]),_:1}),i[110]||=u(`p`,null,`Read disabled:`,-1),s(_,{disabled:``,variant:`primary`},{badge:t(()=>[s(D,{read:``},{default:t(()=>[...i[99]||=[l(`7`,-1)]]),_:1})]),default:t(()=>[i[100]||=l(`View issues `,-1)]),_:1}),s(_,{disabled:``,variant:`secondary`},{badge:t(()=>[s(D,{read:``},{default:t(()=>[...i[101]||=[l(`7`,-1)]]),_:1})]),default:t(()=>[i[102]||=l(`View issues `,-1)]),_:1}),s(_,{disabled:``,variant:`tertiary`},{badge:t(()=>[s(D,{read:``},{default:t(()=>[...i[103]||=[l(`7`,-1)]]),_:1})]),default:t(()=>[i[104]||=l(`View issues `,-1)]),_:1}),s(_,{disabled:``,variant:`link`},{badge:t(()=>[s(D,{read:``},{default:t(()=>[...i[105]||=[l(`7`,-1)]]),_:1})]),default:t(()=>[i[106]||=l(`View issues `,-1)]),_:1})]),_:1}),s(T,{title:`Animated examples`,source:`<pf-button variant="plain" favorite :favorited="favorited" @click="favorited = !favorited" />
<pf-button variant="plain" settings />
<pf-button variant="plain" hamburger />
<pf-button variant="plain" hamburger hamburger-variant="expand" />
<pf-button variant="plain" hamburger hamburger-variant="collapse" />`},{default:t(()=>[s(_,{variant:`plain`,favorite:``,favorited:C.value,onClick:i[4]||=e=>C.value=!C.value},null,8,[`favorited`]),s(_,{variant:`plain`,settings:``}),s(_,{variant:`plain`,hamburger:``}),s(_,{variant:`plain`,hamburger:``,"hamburger-variant":`expand`}),s(_,{variant:`plain`,hamburger:``,"hamburger-variant":`collapse`})]),_:1})]),_:1})}}});export{x as default};