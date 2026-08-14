import{H as e,N as t,Q as n,c as r,h as i,it as a,k as o,l as s,m as c,n as l,p as u,s as d,u as f}from"./runtime-core.esm-bundler-DvxuuL12.js";import{_ as p,i as m,l as h,t as g,v as _}from"./index-JKtqnbzt.js";import{t as v}from"./circle-plus-icon-BB3ASbH7.js";var y=p({name:`SquareArrowUpRightIcon`,height:512,width:448,svgPathData:`M384 32c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0zM160 144c-13.3 0-24 10.7-24 24s10.7 24 24 24l94.1 0L119 327c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l135-135L288 328c0 13.3 10.7 24 24 24s24-10.7 24-24l0-160c0-13.3-10.7-24-24-24l-152 0z`,yOffset:0,xOffset:0}),b=p({name:`CopyIcon`,height:512,width:448,svgPathData:`M208 0L332.1 0c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9L448 336c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48zM48 128l80 0 0 64-64 0 0 256 192 0 0-32 64 0 0 48c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 176c0-26.5 21.5-48 48-48z`,yOffset:0,xOffset:0}),x=i({__name:`Button.story`,setup(i){let p=g(),x=n(!1),S=n(!1),C=n(!1);function w(){p.add({title:`clicked span pf-button`,variant:`info`})}return(n,i)=>{let p=t(`component-info`),g=t(`pf-button`),T=t(`story-canvas`),E=t(`pf-tooltip`),D=t(`pf-badge`),O=t(`doc-page`);return o(),r(O,{name:`Components/Button.story.vue`,title:`Button`},{description:e(()=>[...i[5]||=[u(`A `,-1),d(`b`,null,`button`,-1),u(` is a box area or text that communicates and triggers user actions when clicked or selected. Buttons can be used to communicate and immediately trigger actions a user can take in an application, like submitting a form, canceling a process, or creating a new object. Buttons can also be used to take a user to a new location, like another page inside of a web application, or an external site such as help or documentation.`,-1)]]),apidocs:e(()=>[c(p,{name:`PfButton`,doc:{name:`PfButton`,exportName:`PfButton`,displayName:`Button`,description:``,tags:{},expose:[{name:`el`}],props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`component`,description:`Sets the base component to render. defaults to button`,required:!1,type:{name:`union`,elements:[{name:`string`},{name:`Component`}]},defaultValue:{func:!1,value:`"auto"`}},{name:`block`,description:`Adds block styling to button`,required:!1,type:{name:`boolean`}},{name:`disabled`,description:`Adds disabled styling and disables the button using the disabled html attribute`,required:!1,type:{name:`boolean`}},{name:`ariaDisabled`,description:`Adds disabled styling and communicates that the button is disabled using the aria-disabled html attribute`,required:!1,type:{name:`boolean`}},{name:`loading`,description:`Adds progress styling to button`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`undefined`}},{name:`spinnerAriaValueText`,description:`Text describing that current loading status or progress`,required:!1,type:{name:`string`}},{name:`spinnerAriaLabel`,description:`Accessible label for the spinner to describe what is loading`,required:!1,type:{name:`string`}},{name:`spinnerAriaLabelledBy`,description:`Id of element which describes what is being loaded`,required:!1,type:{name:`string`}},{name:`inoperableEvents`,description:`Events to prevent when the button is in an aria-disabled state`,required:!1,type:{name:`Array`,elements:[{name:`string`}]}},{name:`inline`,description:`Adds inline styling to a link button`,required:!1,type:{name:`boolean`}},{name:`favorite`,description:`Adds favorite styling to a button`,required:!1,type:{name:`boolean`}},{name:`favorited`,description:`Flag indicating whether the button is favorited or not, only when favorite is true.`,required:!1,type:{name:`boolean`}},{name:`type`,description:`Sets button type`,required:!1,type:{name:`union`,elements:[{name:`"button"`},{name:`"submit"`},{name:`"reset"`}]},defaultValue:{func:!1,value:`"button"`}},{name:`variant`,description:`Adds button variant styles`,required:!1,type:{name:`union`,elements:[{name:`"primary"`},{name:`"secondary"`},{name:`"tertiary"`},{name:`"danger"`},{name:`"warning"`},{name:`"link"`},{name:`"plain"`},{name:`"control"`},{name:`"stateful"`}]},defaultValue:{func:!1,value:`"primary"`}},{name:`state`,description:`Sets state of the stateful button variant. Default is "unread"`,required:!1,type:{name:`union`,elements:[{name:`"read"`},{name:`"unread"`},{name:`"attention"`}]}},{name:`noPadding`,description:`Applies no padding on a plain button variant. Use when plain button is placed inline with text`,required:!1,type:{name:`boolean`}},{name:`iconPosition`,description:`Sets position of the link icon`,required:!1,type:{name:`union`,elements:[{name:`"start"`},{name:`"end"`}]},defaultValue:{func:!1,value:`"start"`}},{name:`tabindex`,description:`Sets the button tabindex.`,required:!1,type:{name:`number`}},{name:`small`,description:`Adds small styling to the button`,required:!1,type:{name:`boolean`}},{name:`large`,description:`Adds large styling to the button`,required:!1,type:{name:`boolean`}},{name:`danger`,description:`Adds danger styling to secondary or link button variants`,required:!1,type:{name:`boolean`}},{name:`badgeClass`,description:`Class name for the badge container`,required:!1,type:{name:`string`}},{name:`expanded`,description:`Flag indicating whether content the button controls is expanded or not. Required when hamburger is true.`,required:!1,type:{name:`boolean`}},{name:`settings`,description:`Flag indicating the button is a settings button. This will override the icon property.`,required:!1,type:{name:`boolean`}},{name:`hamburger`,description:`Flag indicating the button is a hamburger button. This will override the icon property.`,required:!1,type:{name:`boolean`}},{name:`hamburgerVariant`,description:`Adjusts and animates the hamburger icon to indicate what will happen upon clicking the button.`,required:!1,type:{name:`union`,elements:[{name:`"expand"`},{name:`"collapse"`}]}},{name:`circle`,description:`Flag indicating the button is a circle button. Intended for buttons that only contain an icon..`,required:!1,type:{name:`boolean`}},{name:`docked`,description:`Flag indicating the button is a docked variant button. For use in docked navigation.`,required:!1,type:{name:`boolean`}},{name:`textExpanded`,description:`Flag indicating the docked button should display text. Only applies when isDocked is true.`,required:!1,type:{name:`boolean`}},{name:`to`,description:`Route Location the link should navigate to when clicked on.`,required:!1,type:{name:`RouteLocationRaw`}},{name:`replace`,description:"Calls `router.replace` instead of `router.push`.",required:!1,type:{name:`boolean`}},{name:`href`,required:!1,type:{name:`string`}},{name:`ariaCurrent`,required:!1,type:{name:`string`}}],events:[{name:`click`,type:{names:[`PointerEvent`]}}],slots:[{name:`default`},{name:`icon`},{name:`badge`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Button.vue`]}})]),default:e(()=>[c(T,{title:`Variations`,source:`<pf-button variant="primary">Primary</pf-button>
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
</pf-button>`},{default:e(()=>[c(g,{variant:`primary`},{default:e(()=>[...i[6]||=[u(`Primary`,-1)]]),_:1}),c(g,{variant:`secondary`},{default:e(()=>[...i[7]||=[u(`Secondary`,-1)]]),_:1}),c(g,{variant:`tertiary`},{default:e(()=>[...i[8]||=[u(`Tertiary`,-1)]]),_:1}),c(g,{variant:`danger`},{default:e(()=>[...i[9]||=[u(`Danger`,-1)]]),_:1}),c(g,{variant:`warning`},{default:e(()=>[...i[10]||=[u(`Warning`,-1)]]),_:1}),i[15]||=d(`br`,null,null,-1),i[16]||=d(`br`,null,null,-1),c(g,{variant:`link`},{icon:e(()=>[c(a(v))]),default:e(()=>[i[11]||=u(` Link `,-1)]),_:1}),c(g,{variant:`link`,"icon-position":`end`},{icon:e(()=>[c(a(y))]),default:e(()=>[i[12]||=u(` Link `,-1)]),_:1}),c(g,{variant:`link`,inline:``},{default:e(()=>[...i[13]||=[u(`Inline link`,-1)]]),_:1}),i[17]||=d(`br`,null,null,-1),i[18]||=d(`br`,null,null,-1),c(g,{variant:`plain`,"aria-label":`Action`},{icon:e(()=>[c(a(h))]),_:1}),i[19]||=d(`br`,null,null,-1),i[20]||=d(`br`,null,null,-1),c(g,{variant:`control`},{default:e(()=>[...i[14]||=[u(`Control`,-1)]]),_:1}),c(g,{variant:`control`,"aria-label":`Copy`},{icon:e(()=>[c(a(b))]),_:1})]),_:1}),c(T,{title:`Disabled`,source:`<pf-button disabled>Primary disabled</pf-button>
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
<pf-button disabled variant="control">Control disabled</pf-button>`},{default:e(()=>[c(g,{disabled:``},{default:e(()=>[...i[21]||=[u(`Primary disabled`,-1)]]),_:1}),c(g,{disabled:``},{default:e(()=>[...i[22]||=[u(`Secondary disabled`,-1)]]),_:1}),c(g,{disabled:``,variant:`tertiary`},{default:e(()=>[...i[23]||=[u(`Tertiary disabled`,-1)]]),_:1}),c(g,{disabled:``,variant:`danger`},{default:e(()=>[...i[24]||=[u(`Danger disabled`,-1)]]),_:1}),c(g,{disabled:``,variant:`warning`},{default:e(()=>[...i[25]||=[u(`Warning disabled`,-1)]]),_:1}),i[29]||=d(`br`,null,null,-1),i[30]||=d(`br`,null,null,-1),c(g,{disabled:``,variant:`link`},{icon:e(()=>[c(a(v))]),default:e(()=>[i[26]||=u(` Link disabled `,-1)]),_:1}),c(g,{disabled:``,variant:`link`,inline:``},{default:e(()=>[...i[27]||=[u(`Inline link disabled`,-1)]]),_:1}),c(g,{disabled:``,variant:`plain`,"aria-label":`Action`},{icon:e(()=>[c(a(h))]),_:1}),c(g,{disabled:``,variant:`control`},{default:e(()=>[...i[28]||=[u(`Control disabled`,-1)]]),_:1})]),_:1}),c(T,{title:`Aria disabled`,source:`<pf-button aria-disabled>Primary aria disabled</pf-button>
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
<pf-button aria-disabled variant="control">Control aria disabled</pf-button>`},{default:e(()=>[c(g,{"aria-disabled":``},{default:e(()=>[...i[31]||=[u(`Primary aria disabled`,-1)]]),_:1}),c(g,{"aria-disabled":``},{default:e(()=>[...i[32]||=[u(`Secondary aria disabled`,-1)]]),_:1}),c(g,{"aria-disabled":``,variant:`tertiary`},{default:e(()=>[...i[33]||=[u(`Tertiary aria disabled`,-1)]]),_:1}),c(g,{"aria-disabled":``,variant:`danger`},{default:e(()=>[...i[34]||=[u(`Danger aria disabled`,-1)]]),_:1}),c(g,{"aria-disabled":``,variant:`warning`},{default:e(()=>[...i[35]||=[u(`Warning aria disabled`,-1)]]),_:1}),i[39]||=d(`br`,null,null,-1),i[40]||=d(`br`,null,null,-1),c(g,{"aria-disabled":``,variant:`link`},{icon:e(()=>[c(a(v))]),default:e(()=>[i[36]||=u(` Link aria disabled `,-1)]),_:1}),c(g,{"aria-disabled":``,variant:`link`,inline:``},{default:e(()=>[...i[37]||=[u(`Inline link aria disabled`,-1)]]),_:1}),c(g,{"aria-disabled":``,variant:`plain`,"aria-label":`Action`},{icon:e(()=>[c(a(h))]),_:1}),c(g,{"aria-disabled":``,variant:`control`},{default:e(()=>[...i[38]||=[u(`Control aria disabled`,-1)]]),_:1})]),_:1}),c(T,{title:`Aria disable with tooltip`,source:`<pf-tooltip
  content="Aria-disabled buttons are like disabled buttons, but focusable. Allows for tooltip support."
>
  <pf-button aria-disabled variant="secondary">Secondary button to core docs</pf-button>
</pf-tooltip>`},{default:e(()=>[c(E,{content:`Aria-disabled buttons are like disabled buttons, but focusable. Allows for tooltip support.`},{default:e(()=>[c(g,{"aria-disabled":``,variant:`secondary`},{default:e(()=>[...i[41]||=[u(`Secondary button to core docs`,-1)]]),_:1})]),_:1})]),_:1}),c(T,{title:`Aria disabled link as button with tooltip`,source:`<pf-tooltip content="Aria-disabled link as button with tooltip">
  <pf-button
    component="a"
    aria-disabled
    href="https://www.patternfly.org/"
    target="_blank"
    variant="tertiary"
  >
    Tertiary link as button to core docs
  </pf-button>
</pf-tooltip>`},{default:e(()=>[c(E,{content:`Aria-disabled link as button with tooltip`},{default:e(()=>[c(g,{component:`a`,"aria-disabled":``,href:`https://www.patternfly.org/`,target:`_blank`,variant:`tertiary`},{default:e(()=>[...i[42]||=[u(` Tertiary link as button to core docs `,-1)]]),_:1})]),_:1})]),_:1}),c(T,{title:`Links as buttons`,source:`<pf-button
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
</pf-button>`},{default:e(()=>[c(g,{component:`a`,href:`https://www.patternfly.org/`,target:`_blank`,variant:`primary`},{default:e(()=>[...i[43]||=[u(` Link to core docs `,-1)]]),_:1}),c(g,{component:`a`,href:`https://www.patternfly.org/`,target:`_blank`,variant:`secondary`},{default:e(()=>[...i[44]||=[u(` Secondary link to core docs `,-1)]]),_:1}),c(g,{disabled:``,component:`a`,href:`https://www.patternfly.org/`,target:`_blank`,variant:`tertiary`},{default:e(()=>[...i[45]||=[u(` Tertiary link to core docs `,-1)]]),_:1}),c(g,{component:`a`,href:`https://www.patternfly.org/contribution/#modifiers`,variant:`link`},{default:e(()=>[...i[46]||=[u(` Jump to modifiers in contribution guidelines `,-1)]]),_:1})]),_:1}),c(T,{title:`Inline link as span`,source:`<p>
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
</p>`},{default:e(()=>[d(`p`,null,[i[48]||=u(` Lorem ipsum dolor sit amet, consectetur adipiscing elit. `,-1),c(g,{variant:`link`,inline:``,component:`span`},{default:e(()=>[...i[47]||=[u(` This is long button text that needs to be a span so that it will wrap inline with the text around it. `,-1)]]),_:1}),i[49]||=u(` Sed hendrerit nisi in cursus maximus. Ut malesuada nisi turpis, in condimentum velit elementum non. `,-1)]),i[57]||=d(`br`,null,null,-1),d(`p`,null,[i[51]||=u(` Note that using a `,-1),i[52]||=d(`b`,null,`span`,-1),i[53]||=u(` as a button does not fire the `,-1),i[54]||=d(`b`,null,`click`,-1),i[55]||=u(` event for Enter or Space keys. `,-1),c(g,{variant:`link`,inline:``,component:`span`,onKeydown:_(w,[`prevent`])},{default:e(()=>[...i[50]||=[u(` An `,-1),d(`b`,null,`keydown`,-1),u(` event listener is needed for Enter and Space key presses to prevent their default behavior and trigger your code. `,-1)]]),_:1}),i[56]||=u(` Pressing the Enter or Space keys on the inline link as span above demonstrates this by triggering an alert. `,-1)])]),_:1}),c(T,{title:`Block level`,source:`<pf-button block>Block level button</pf-button>`},{default:e(()=>[c(g,{block:``},{default:e(()=>[...i[58]||=[u(`Block level button`,-1)]]),_:1})]),_:1}),c(T,{title:`Types`,source:`<pf-button type="submit">Submit</pf-button>
<pf-button type="reset">Reset</pf-button>
<pf-button>Default</pf-button>`},{default:e(()=>[c(g,{type:`submit`},{default:e(()=>[...i[59]||=[u(`Submit`,-1)]]),_:1}),c(g,{type:`reset`},{default:e(()=>[...i[60]||=[u(`Reset`,-1)]]),_:1}),c(g,null,{default:e(()=>[...i[61]||=[u(`Default`,-1)]]),_:1})]),_:1}),c(T,{title:`Small`,source:`<pf-button variant="primary" small>Primary</pf-button>
<pf-button variant="secondary" small>Secondary</pf-button>
<pf-button variant="tertiary" small>Tertiary</pf-button>
<pf-button variant="danger" small>Danger</pf-button>
<pf-button variant="warning" small>Warning</pf-button>`},{default:e(()=>[c(g,{variant:`primary`,small:``},{default:e(()=>[...i[62]||=[u(`Primary`,-1)]]),_:1}),c(g,{variant:`secondary`,small:``},{default:e(()=>[...i[63]||=[u(`Secondary`,-1)]]),_:1}),c(g,{variant:`tertiary`,small:``},{default:e(()=>[...i[64]||=[u(`Tertiary`,-1)]]),_:1}),c(g,{variant:`danger`,small:``},{default:e(()=>[...i[65]||=[u(`Danger`,-1)]]),_:1}),c(g,{variant:`warning`,small:``},{default:e(()=>[...i[66]||=[u(`Warning`,-1)]]),_:1})]),_:1}),c(T,{title:`Call to action`,source:`<pf-button variant="primary" large>Call to action</pf-button>
<pf-button variant="secondary" large>Call to action</pf-button>
<pf-button variant="tertiary" large>Call to action</pf-button>
<pf-button variant="link" large icon-position="end">
  <template #icon>
    <arrow-right-icon />
  </template>
  Call to action
</pf-button>`},{default:e(()=>[c(g,{variant:`primary`,large:``},{default:e(()=>[...i[67]||=[u(`Call to action`,-1)]]),_:1}),c(g,{variant:`secondary`,large:``},{default:e(()=>[...i[68]||=[u(`Call to action`,-1)]]),_:1}),c(g,{variant:`tertiary`,large:``},{default:e(()=>[...i[69]||=[u(`Call to action`,-1)]]),_:1}),c(g,{variant:`link`,large:``,"icon-position":`end`},{icon:e(()=>[c(a(m))]),default:e(()=>[i[70]||=u(` Call to action `,-1)]),_:1})]),_:1}),c(T,{title:`Progress`,source:`<pf-button
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
<pf-button v-if="secondaryLoading" @click="secondaryLoading = false">Stop</pf-button>`},{default:e(()=>[c(g,{"spinner-aria-value-text":x.value?`Loading`:void 0,loading:x.value,variant:`primary`,onClick:i[0]||=e=>x.value=!0},{default:e(()=>[x.value?(o(),f(l,{key:0},[u(`Loading...`)],64)):(o(),f(l,{key:1},[u(`Click to start loading`)],64))]),_:1},8,[`spinner-aria-value-text`,`loading`]),x.value?(o(),r(g,{key:0,onClick:i[1]||=e=>x.value=!1},{default:e(()=>[...i[71]||=[u(`Stop`,-1)]]),_:1})):s(``,!0),i[73]||=d(`br`,null,null,-1),i[74]||=d(`br`,null,null,-1),c(g,{"spinner-aria-value-text":S.value?`Loading`:void 0,loading:S.value,variant:`secondary`,onClick:i[2]||=e=>S.value=!0},{default:e(()=>[S.value?(o(),f(l,{key:0},[u(`Loading...`)],64)):(o(),f(l,{key:1},[u(`Click to start loading`)],64))]),_:1},8,[`spinner-aria-value-text`,`loading`]),S.value?(o(),r(g,{key:1,onClick:i[3]||=e=>S.value=!1},{default:e(()=>[...i[72]||=[u(`Stop`,-1)]]),_:1})):s(``,!0)]),_:1}),c(T,{title:`With count`,source:`<p>Unread:</p>
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
<pf-button disabled variant="link">View issues <template #badge><pf-badge read>7</pf-badge></template></pf-button>`},{default:e(()=>[i[107]||=d(`p`,null,`Unread:`,-1),c(g,{variant:`primary`},{badge:e(()=>[c(D,null,{default:e(()=>[...i[75]||=[u(`7`,-1)]]),_:1})]),default:e(()=>[i[76]||=u(`View issues `,-1)]),_:1}),c(g,{variant:`secondary`},{badge:e(()=>[c(D,null,{default:e(()=>[...i[77]||=[u(`7`,-1)]]),_:1})]),default:e(()=>[i[78]||=u(`View issues `,-1)]),_:1}),c(g,{variant:`tertiary`},{badge:e(()=>[c(D,null,{default:e(()=>[...i[79]||=[u(`7`,-1)]]),_:1})]),default:e(()=>[i[80]||=u(`View issues `,-1)]),_:1}),c(g,{variant:`link`},{badge:e(()=>[c(D,null,{default:e(()=>[...i[81]||=[u(`7`,-1)]]),_:1})]),default:e(()=>[i[82]||=u(`View issues `,-1)]),_:1}),i[108]||=d(`p`,null,`Unread disabled:`,-1),c(g,{disabled:``,variant:`primary`},{badge:e(()=>[c(D,null,{default:e(()=>[...i[83]||=[u(`7`,-1)]]),_:1})]),default:e(()=>[i[84]||=u(`View issues `,-1)]),_:1}),c(g,{disabled:``,variant:`secondary`},{badge:e(()=>[c(D,null,{default:e(()=>[...i[85]||=[u(`7`,-1)]]),_:1})]),default:e(()=>[i[86]||=u(`View issues `,-1)]),_:1}),c(g,{disabled:``,variant:`tertiary`},{badge:e(()=>[c(D,null,{default:e(()=>[...i[87]||=[u(`7`,-1)]]),_:1})]),default:e(()=>[i[88]||=u(`View issues `,-1)]),_:1}),c(g,{disabled:``,variant:`link`},{badge:e(()=>[c(D,null,{default:e(()=>[...i[89]||=[u(`7`,-1)]]),_:1})]),default:e(()=>[i[90]||=u(`View issues `,-1)]),_:1}),i[109]||=d(`p`,null,`Read:`,-1),c(g,{variant:`primary`},{badge:e(()=>[c(D,{read:``},{default:e(()=>[...i[91]||=[u(`7`,-1)]]),_:1})]),default:e(()=>[i[92]||=u(`View issues `,-1)]),_:1}),c(g,{variant:`secondary`},{badge:e(()=>[c(D,{read:``},{default:e(()=>[...i[93]||=[u(`7`,-1)]]),_:1})]),default:e(()=>[i[94]||=u(`View issues `,-1)]),_:1}),c(g,{variant:`tertiary`},{badge:e(()=>[c(D,{read:``},{default:e(()=>[...i[95]||=[u(`7`,-1)]]),_:1})]),default:e(()=>[i[96]||=u(`View issues `,-1)]),_:1}),c(g,{variant:`link`},{badge:e(()=>[c(D,{read:``},{default:e(()=>[...i[97]||=[u(`7`,-1)]]),_:1})]),default:e(()=>[i[98]||=u(`View issues `,-1)]),_:1}),i[110]||=d(`p`,null,`Read disabled:`,-1),c(g,{disabled:``,variant:`primary`},{badge:e(()=>[c(D,{read:``},{default:e(()=>[...i[99]||=[u(`7`,-1)]]),_:1})]),default:e(()=>[i[100]||=u(`View issues `,-1)]),_:1}),c(g,{disabled:``,variant:`secondary`},{badge:e(()=>[c(D,{read:``},{default:e(()=>[...i[101]||=[u(`7`,-1)]]),_:1})]),default:e(()=>[i[102]||=u(`View issues `,-1)]),_:1}),c(g,{disabled:``,variant:`tertiary`},{badge:e(()=>[c(D,{read:``},{default:e(()=>[...i[103]||=[u(`7`,-1)]]),_:1})]),default:e(()=>[i[104]||=u(`View issues `,-1)]),_:1}),c(g,{disabled:``,variant:`link`},{badge:e(()=>[c(D,{read:``},{default:e(()=>[...i[105]||=[u(`7`,-1)]]),_:1})]),default:e(()=>[i[106]||=u(`View issues `,-1)]),_:1})]),_:1}),c(T,{title:`Animated examples`,source:`<pf-button variant="plain" favorite :favorited="favorited" @click="favorited = !favorited" />
<pf-button variant="plain" settings />
<pf-button variant="plain" hamburger />
<pf-button variant="plain" hamburger hamburger-variant="expand" />
<pf-button variant="plain" hamburger hamburger-variant="collapse" />`},{default:e(()=>[c(g,{variant:`plain`,favorite:``,favorited:C.value,onClick:i[4]||=e=>C.value=!C.value},null,8,[`favorited`]),c(g,{variant:`plain`,settings:``}),c(g,{variant:`plain`,hamburger:``}),c(g,{variant:`plain`,hamburger:``,"hamburger-variant":`expand`}),c(g,{variant:`plain`,hamburger:``,"hamburger-variant":`collapse`})]),_:1})]),_:1})}}});export{x as default};