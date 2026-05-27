import{C as e,D as t,E as n,I as r,N as i,O as a,R as o,S as s,_ as c,i as l,j as u,l as d,t as f,v as p,w as m,x as h,y as g,z as _}from"./index-mFbvqZfx.js";import{t as v}from"./circle-plus-icon-B8aCQzuP.js";var y=c({name:`SquareArrowUpRightIcon`,height:512,width:448,svgPathData:`M384 32c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0zM160 144c-13.3 0-24 10.7-24 24s10.7 24 24 24l94.1 0L119 327c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l135-135L288 328c0 13.3 10.7 24 24 24s24-10.7 24-24l0-160c0-13.3-10.7-24-24-24l-152 0z`,yOffset:0,xOffset:0}),b=c({name:`CopyIcon`,height:512,width:448,svgPathData:`M208 0L332.1 0c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9L448 336c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48zM48 128l80 0 0 64-64 0 0 256 192 0 0-32 64 0 0 48c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 176c0-26.5 21.5-48 48-48z`,yOffset:0,xOffset:0}),x=a({__name:`Button.story`,setup(a){let c=f(),x=o(!1),S=o(!1),C=o(!1);function w(){c.add({title:`clicked span pf-button`,variant:`info`})}return(a,o)=>{let c=i(`component-info`),f=i(`pf-button`),T=i(`story-canvas`),E=i(`pf-tooltip`),D=i(`pf-badge`),O=i(`doc-page`);return u(),s(O,{name:`Components/Button.story.vue`,title:`Button`},{description:r(()=>[...o[5]||=[n(`A `,-1),h(`b`,null,`button`,-1),n(` is a box area or text that communicates and triggers user actions when clicked or selected. Buttons can be used to communicate and immediately trigger actions a user can take in an application, like submitting a form, canceling a process, or creating a new object. Buttons can also be used to take a user to a new location, like another page inside of a web application, or an external site such as help or documentation.`,-1)]]),apidocs:r(()=>[t(c,{name:`PfButton`,doc:{name:`PfButton`,exportName:`PfButton`,displayName:`Button`,description:``,tags:{},expose:[{name:`el`}],props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`component`,description:`Sets the base component to render. defaults to button`,required:!1,type:{name:`union`,elements:[{name:`string`},{name:`Component`}]},defaultValue:{func:!1,value:`"auto"`}},{name:`block`,description:`Adds block styling to button`,required:!1,type:{name:`boolean`}},{name:`disabled`,description:`Adds disabled styling and disables the button using the disabled html attribute`,required:!1,type:{name:`boolean`}},{name:`ariaDisabled`,description:`Adds disabled styling and communicates that the button is disabled using the aria-disabled html attribute`,required:!1,type:{name:`boolean`}},{name:`loading`,description:`Adds progress styling to button`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`undefined`}},{name:`spinnerAriaValueText`,description:`Text describing that current loading status or progress`,required:!1,type:{name:`string`}},{name:`spinnerAriaLabel`,description:`Accessible label for the spinner to describe what is loading`,required:!1,type:{name:`string`}},{name:`spinnerAriaLabelledBy`,description:`Id of element which describes what is being loaded`,required:!1,type:{name:`string`}},{name:`inoperableEvents`,description:`Events to prevent when the button is in an aria-disabled state`,required:!1,type:{name:`Array`,elements:[{name:`string`}]}},{name:`inline`,description:`Adds inline styling to a link button`,required:!1,type:{name:`boolean`}},{name:`favorite`,description:`Adds favorite styling to a button`,required:!1,type:{name:`boolean`}},{name:`favorited`,description:`Flag indicating whether the button is favorited or not, only when favorite is true.`,required:!1,type:{name:`boolean`}},{name:`type`,description:`Sets button type`,required:!1,type:{name:`union`,elements:[{name:`"button"`},{name:`"submit"`},{name:`"reset"`}]},defaultValue:{func:!1,value:`"button"`}},{name:`variant`,description:`Adds button variant styles`,required:!1,type:{name:`union`,elements:[{name:`"primary"`},{name:`"secondary"`},{name:`"tertiary"`},{name:`"danger"`},{name:`"warning"`},{name:`"link"`},{name:`"plain"`},{name:`"control"`},{name:`"stateful"`}]},defaultValue:{func:!1,value:`"primary"`}},{name:`state`,description:`Sets state of the stateful button variant. Default is "unread"`,required:!1,type:{name:`union`,elements:[{name:`"read"`},{name:`"unread"`},{name:`"attention"`}]}},{name:`noPadding`,description:`Applies no padding on a plain button variant. Use when plain button is placed inline with text`,required:!1,type:{name:`boolean`}},{name:`iconPosition`,description:`Sets position of the link icon`,required:!1,type:{name:`union`,elements:[{name:`"start"`},{name:`"end"`}]},defaultValue:{func:!1,value:`"start"`}},{name:`tabindex`,description:`Sets the button tabindex.`,required:!1,type:{name:`number`}},{name:`small`,description:`Adds small styling to the button`,required:!1,type:{name:`boolean`}},{name:`large`,description:`Adds large styling to the button`,required:!1,type:{name:`boolean`}},{name:`danger`,description:`Adds danger styling to secondary or link button variants`,required:!1,type:{name:`boolean`}},{name:`badgeClass`,description:`Class name for the badge container`,required:!1,type:{name:`string`}},{name:`expanded`,description:`Flag indicating whether content the button controls is expanded or not. Required when hamburger is true.`,required:!1,type:{name:`boolean`}},{name:`settings`,description:`Flag indicating the button is a settings button. This will override the icon property.`,required:!1,type:{name:`boolean`}},{name:`hamburger`,description:`Flag indicating the button is a hamburger button. This will override the icon property.`,required:!1,type:{name:`boolean`}},{name:`hamburgerVariant`,description:`Adjusts and animates the hamburger icon to indicate what will happen upon clicking the button.`,required:!1,type:{name:`union`,elements:[{name:`"expand"`},{name:`"collapse"`}]}},{name:`circle`,description:`Flag indicating the button is a circle button. Intended for buttons that only contain an icon..`,required:!1,type:{name:`boolean`}},{name:`docked`,description:`Flag indicating the button is a docked variant button. For use in docked navigation.`,required:!1,type:{name:`boolean`}},{name:`textExpanded`,description:`Flag indicating the docked button should display text. Only applies when isDocked is true.`,required:!1,type:{name:`boolean`}},{name:`to`,description:`Route Location the link should navigate to when clicked on.`,required:!1,type:{name:`RouteLocationRaw`}},{name:`replace`,description:"Calls `router.replace` instead of `router.push`.",required:!1,type:{name:`boolean`}},{name:`href`,required:!1,type:{name:`string`}},{name:`ariaCurrent`,required:!1,type:{name:`string`}}],events:[{name:`click`,type:{names:[`PointerEvent`]}}],slots:[{name:`default`},{name:`icon`},{name:`badge`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Button.vue`]}})]),default:r(()=>[t(T,{title:`Variations`,source:`<pf-button variant="primary">Primary</pf-button>
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
</pf-button>`},{default:r(()=>[t(f,{variant:`primary`},{default:r(()=>[...o[6]||=[n(`Primary`,-1)]]),_:1}),t(f,{variant:`secondary`},{default:r(()=>[...o[7]||=[n(`Secondary`,-1)]]),_:1}),t(f,{variant:`tertiary`},{default:r(()=>[...o[8]||=[n(`Tertiary`,-1)]]),_:1}),t(f,{variant:`danger`},{default:r(()=>[...o[9]||=[n(`Danger`,-1)]]),_:1}),t(f,{variant:`warning`},{default:r(()=>[...o[10]||=[n(`Warning`,-1)]]),_:1}),o[15]||=h(`br`,null,null,-1),o[16]||=h(`br`,null,null,-1),t(f,{variant:`link`},{icon:r(()=>[t(_(v))]),default:r(()=>[o[11]||=n(` Link `,-1)]),_:1}),t(f,{variant:`link`,"icon-position":`end`},{icon:r(()=>[t(_(y))]),default:r(()=>[o[12]||=n(` Link `,-1)]),_:1}),t(f,{variant:`link`,inline:``},{default:r(()=>[...o[13]||=[n(`Inline link`,-1)]]),_:1}),o[17]||=h(`br`,null,null,-1),o[18]||=h(`br`,null,null,-1),t(f,{variant:`plain`,"aria-label":`Action`},{icon:r(()=>[t(_(d))]),_:1}),o[19]||=h(`br`,null,null,-1),o[20]||=h(`br`,null,null,-1),t(f,{variant:`control`},{default:r(()=>[...o[14]||=[n(`Control`,-1)]]),_:1}),t(f,{variant:`control`,"aria-label":`Copy`},{icon:r(()=>[t(_(b))]),_:1})]),_:1}),t(T,{title:`Disabled`,source:`<pf-button disabled>Primary disabled</pf-button>
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
<pf-button disabled variant="control">Control disabled</pf-button>`},{default:r(()=>[t(f,{disabled:``},{default:r(()=>[...o[21]||=[n(`Primary disabled`,-1)]]),_:1}),t(f,{disabled:``},{default:r(()=>[...o[22]||=[n(`Secondary disabled`,-1)]]),_:1}),t(f,{disabled:``,variant:`tertiary`},{default:r(()=>[...o[23]||=[n(`Tertiary disabled`,-1)]]),_:1}),t(f,{disabled:``,variant:`danger`},{default:r(()=>[...o[24]||=[n(`Danger disabled`,-1)]]),_:1}),t(f,{disabled:``,variant:`warning`},{default:r(()=>[...o[25]||=[n(`Warning disabled`,-1)]]),_:1}),o[29]||=h(`br`,null,null,-1),o[30]||=h(`br`,null,null,-1),t(f,{disabled:``,variant:`link`},{icon:r(()=>[t(_(v))]),default:r(()=>[o[26]||=n(` Link disabled `,-1)]),_:1}),t(f,{disabled:``,variant:`link`,inline:``},{default:r(()=>[...o[27]||=[n(`Inline link disabled`,-1)]]),_:1}),t(f,{disabled:``,variant:`plain`,"aria-label":`Action`},{icon:r(()=>[t(_(d))]),_:1}),t(f,{disabled:``,variant:`control`},{default:r(()=>[...o[28]||=[n(`Control disabled`,-1)]]),_:1})]),_:1}),t(T,{title:`Aria disabled`,source:`<pf-button aria-disabled>Primary aria disabled</pf-button>
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
<pf-button aria-disabled variant="control">Control aria disabled</pf-button>`},{default:r(()=>[t(f,{"aria-disabled":``},{default:r(()=>[...o[31]||=[n(`Primary aria disabled`,-1)]]),_:1}),t(f,{"aria-disabled":``},{default:r(()=>[...o[32]||=[n(`Secondary aria disabled`,-1)]]),_:1}),t(f,{"aria-disabled":``,variant:`tertiary`},{default:r(()=>[...o[33]||=[n(`Tertiary aria disabled`,-1)]]),_:1}),t(f,{"aria-disabled":``,variant:`danger`},{default:r(()=>[...o[34]||=[n(`Danger aria disabled`,-1)]]),_:1}),t(f,{"aria-disabled":``,variant:`warning`},{default:r(()=>[...o[35]||=[n(`Warning aria disabled`,-1)]]),_:1}),o[39]||=h(`br`,null,null,-1),o[40]||=h(`br`,null,null,-1),t(f,{"aria-disabled":``,variant:`link`},{icon:r(()=>[t(_(v))]),default:r(()=>[o[36]||=n(` Link aria disabled `,-1)]),_:1}),t(f,{"aria-disabled":``,variant:`link`,inline:``},{default:r(()=>[...o[37]||=[n(`Inline link aria disabled`,-1)]]),_:1}),t(f,{"aria-disabled":``,variant:`plain`,"aria-label":`Action`},{icon:r(()=>[t(_(d))]),_:1}),t(f,{"aria-disabled":``,variant:`control`},{default:r(()=>[...o[38]||=[n(`Control aria disabled`,-1)]]),_:1})]),_:1}),t(T,{title:`Aria disable with tooltip`,source:`<pf-tooltip
  content="Aria-disabled buttons are like disabled buttons, but focusable. Allows for tooltip support."
>
  <pf-button aria-disabled variant="secondary">Secondary button to core docs</pf-button>
</pf-tooltip>`},{default:r(()=>[t(E,{content:`Aria-disabled buttons are like disabled buttons, but focusable. Allows for tooltip support.`},{default:r(()=>[t(f,{"aria-disabled":``,variant:`secondary`},{default:r(()=>[...o[41]||=[n(`Secondary button to core docs`,-1)]]),_:1})]),_:1})]),_:1}),t(T,{title:`Aria disabled link as button with tooltip`,source:`<pf-tooltip content="Aria-disabled link as button with tooltip">
  <pf-button
    component="a"
    aria-disabled
    href="https://www.patternfly.org/"
    target="_blank"
    variant="tertiary"
  >
    Tertiary link as button to core docs
  </pf-button>
</pf-tooltip>`},{default:r(()=>[t(E,{content:`Aria-disabled link as button with tooltip`},{default:r(()=>[t(f,{component:`a`,"aria-disabled":``,href:`https://www.patternfly.org/`,target:`_blank`,variant:`tertiary`},{default:r(()=>[...o[42]||=[n(` Tertiary link as button to core docs `,-1)]]),_:1})]),_:1})]),_:1}),t(T,{title:`Links as buttons`,source:`<pf-button
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
</pf-button>`},{default:r(()=>[t(f,{component:`a`,href:`https://www.patternfly.org/`,target:`_blank`,variant:`primary`},{default:r(()=>[...o[43]||=[n(` Link to core docs `,-1)]]),_:1}),t(f,{component:`a`,href:`https://www.patternfly.org/`,target:`_blank`,variant:`secondary`},{default:r(()=>[...o[44]||=[n(` Secondary link to core docs `,-1)]]),_:1}),t(f,{disabled:``,component:`a`,href:`https://www.patternfly.org/`,target:`_blank`,variant:`tertiary`},{default:r(()=>[...o[45]||=[n(` Tertiary link to core docs `,-1)]]),_:1}),t(f,{component:`a`,href:`https://www.patternfly.org/contribution/#modifiers`,variant:`link`},{default:r(()=>[...o[46]||=[n(` Jump to modifiers in contribution guidelines `,-1)]]),_:1})]),_:1}),t(T,{title:`Inline link as span`,source:`<p>
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
</p>`},{default:r(()=>[h(`p`,null,[o[48]||=n(` Lorem ipsum dolor sit amet, consectetur adipiscing elit. `,-1),t(f,{variant:`link`,inline:``,component:`span`},{default:r(()=>[...o[47]||=[n(` This is long button text that needs to be a span so that it will wrap inline with the text around it. `,-1)]]),_:1}),o[49]||=n(` Sed hendrerit nisi in cursus maximus. Ut malesuada nisi turpis, in condimentum velit elementum non. `,-1)]),o[57]||=h(`br`,null,null,-1),h(`p`,null,[o[51]||=n(` Note that using a `,-1),o[52]||=h(`b`,null,`span`,-1),o[53]||=n(` as a button does not fire the `,-1),o[54]||=h(`b`,null,`click`,-1),o[55]||=n(` event for Enter or Space keys. `,-1),t(f,{variant:`link`,inline:``,component:`span`,onKeydown:p(w,[`prevent`])},{default:r(()=>[...o[50]||=[n(` An `,-1),h(`b`,null,`keydown`,-1),n(` event listener is needed for Enter and Space key presses to prevent their default behavior and trigger your code. `,-1)]]),_:1}),o[56]||=n(` Pressing the Enter or Space keys on the inline link as span above demonstrates this by triggering an alert. `,-1)])]),_:1}),t(T,{title:`Block level`,source:`<pf-button block>Block level button</pf-button>`},{default:r(()=>[t(f,{block:``},{default:r(()=>[...o[58]||=[n(`Block level button`,-1)]]),_:1})]),_:1}),t(T,{title:`Types`,source:`<pf-button type="submit">Submit</pf-button>
<pf-button type="reset">Reset</pf-button>
<pf-button>Default</pf-button>`},{default:r(()=>[t(f,{type:`submit`},{default:r(()=>[...o[59]||=[n(`Submit`,-1)]]),_:1}),t(f,{type:`reset`},{default:r(()=>[...o[60]||=[n(`Reset`,-1)]]),_:1}),t(f,null,{default:r(()=>[...o[61]||=[n(`Default`,-1)]]),_:1})]),_:1}),t(T,{title:`Small`,source:`<pf-button variant="primary" small>Primary</pf-button>
<pf-button variant="secondary" small>Secondary</pf-button>
<pf-button variant="tertiary" small>Tertiary</pf-button>
<pf-button variant="danger" small>Danger</pf-button>
<pf-button variant="warning" small>Warning</pf-button>`},{default:r(()=>[t(f,{variant:`primary`,small:``},{default:r(()=>[...o[62]||=[n(`Primary`,-1)]]),_:1}),t(f,{variant:`secondary`,small:``},{default:r(()=>[...o[63]||=[n(`Secondary`,-1)]]),_:1}),t(f,{variant:`tertiary`,small:``},{default:r(()=>[...o[64]||=[n(`Tertiary`,-1)]]),_:1}),t(f,{variant:`danger`,small:``},{default:r(()=>[...o[65]||=[n(`Danger`,-1)]]),_:1}),t(f,{variant:`warning`,small:``},{default:r(()=>[...o[66]||=[n(`Warning`,-1)]]),_:1})]),_:1}),t(T,{title:`Call to action`,source:`<pf-button variant="primary" large>Call to action</pf-button>
<pf-button variant="secondary" large>Call to action</pf-button>
<pf-button variant="tertiary" large>Call to action</pf-button>
<pf-button variant="link" large icon-position="end">
  <template #icon>
    <arrow-right-icon />
  </template>
  Call to action
</pf-button>`},{default:r(()=>[t(f,{variant:`primary`,large:``},{default:r(()=>[...o[67]||=[n(`Call to action`,-1)]]),_:1}),t(f,{variant:`secondary`,large:``},{default:r(()=>[...o[68]||=[n(`Call to action`,-1)]]),_:1}),t(f,{variant:`tertiary`,large:``},{default:r(()=>[...o[69]||=[n(`Call to action`,-1)]]),_:1}),t(f,{variant:`link`,large:``,"icon-position":`end`},{icon:r(()=>[t(_(l))]),default:r(()=>[o[70]||=n(` Call to action `,-1)]),_:1})]),_:1}),t(T,{title:`Progress`,source:`<pf-button
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
<pf-button v-if="secondaryLoading" @click="secondaryLoading = false">Stop</pf-button>`},{default:r(()=>[t(f,{"spinner-aria-value-text":x.value?`Loading`:void 0,loading:x.value,variant:`primary`,onClick:o[0]||=e=>x.value=!0},{default:r(()=>[x.value?(u(),m(g,{key:0},[n(`Loading...`)],64)):(u(),m(g,{key:1},[n(`Click to start loading`)],64))]),_:1},8,[`spinner-aria-value-text`,`loading`]),x.value?(u(),s(f,{key:0,onClick:o[1]||=e=>x.value=!1},{default:r(()=>[...o[71]||=[n(`Stop`,-1)]]),_:1})):e(``,!0),o[73]||=h(`br`,null,null,-1),o[74]||=h(`br`,null,null,-1),t(f,{"spinner-aria-value-text":S.value?`Loading`:void 0,loading:S.value,variant:`secondary`,onClick:o[2]||=e=>S.value=!0},{default:r(()=>[S.value?(u(),m(g,{key:0},[n(`Loading...`)],64)):(u(),m(g,{key:1},[n(`Click to start loading`)],64))]),_:1},8,[`spinner-aria-value-text`,`loading`]),S.value?(u(),s(f,{key:1,onClick:o[3]||=e=>S.value=!1},{default:r(()=>[...o[72]||=[n(`Stop`,-1)]]),_:1})):e(``,!0)]),_:1}),t(T,{title:`With count`,source:`<p>Unread:</p>
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
<pf-button disabled variant="link">View issues <template #badge><pf-badge read>7</pf-badge></template></pf-button>`},{default:r(()=>[o[107]||=h(`p`,null,`Unread:`,-1),t(f,{variant:`primary`},{badge:r(()=>[t(D,null,{default:r(()=>[...o[75]||=[n(`7`,-1)]]),_:1})]),default:r(()=>[o[76]||=n(`View issues `,-1)]),_:1}),t(f,{variant:`secondary`},{badge:r(()=>[t(D,null,{default:r(()=>[...o[77]||=[n(`7`,-1)]]),_:1})]),default:r(()=>[o[78]||=n(`View issues `,-1)]),_:1}),t(f,{variant:`tertiary`},{badge:r(()=>[t(D,null,{default:r(()=>[...o[79]||=[n(`7`,-1)]]),_:1})]),default:r(()=>[o[80]||=n(`View issues `,-1)]),_:1}),t(f,{variant:`link`},{badge:r(()=>[t(D,null,{default:r(()=>[...o[81]||=[n(`7`,-1)]]),_:1})]),default:r(()=>[o[82]||=n(`View issues `,-1)]),_:1}),o[108]||=h(`p`,null,`Unread disabled:`,-1),t(f,{disabled:``,variant:`primary`},{badge:r(()=>[t(D,null,{default:r(()=>[...o[83]||=[n(`7`,-1)]]),_:1})]),default:r(()=>[o[84]||=n(`View issues `,-1)]),_:1}),t(f,{disabled:``,variant:`secondary`},{badge:r(()=>[t(D,null,{default:r(()=>[...o[85]||=[n(`7`,-1)]]),_:1})]),default:r(()=>[o[86]||=n(`View issues `,-1)]),_:1}),t(f,{disabled:``,variant:`tertiary`},{badge:r(()=>[t(D,null,{default:r(()=>[...o[87]||=[n(`7`,-1)]]),_:1})]),default:r(()=>[o[88]||=n(`View issues `,-1)]),_:1}),t(f,{disabled:``,variant:`link`},{badge:r(()=>[t(D,null,{default:r(()=>[...o[89]||=[n(`7`,-1)]]),_:1})]),default:r(()=>[o[90]||=n(`View issues `,-1)]),_:1}),o[109]||=h(`p`,null,`Read:`,-1),t(f,{variant:`primary`},{badge:r(()=>[t(D,{read:``},{default:r(()=>[...o[91]||=[n(`7`,-1)]]),_:1})]),default:r(()=>[o[92]||=n(`View issues `,-1)]),_:1}),t(f,{variant:`secondary`},{badge:r(()=>[t(D,{read:``},{default:r(()=>[...o[93]||=[n(`7`,-1)]]),_:1})]),default:r(()=>[o[94]||=n(`View issues `,-1)]),_:1}),t(f,{variant:`tertiary`},{badge:r(()=>[t(D,{read:``},{default:r(()=>[...o[95]||=[n(`7`,-1)]]),_:1})]),default:r(()=>[o[96]||=n(`View issues `,-1)]),_:1}),t(f,{variant:`link`},{badge:r(()=>[t(D,{read:``},{default:r(()=>[...o[97]||=[n(`7`,-1)]]),_:1})]),default:r(()=>[o[98]||=n(`View issues `,-1)]),_:1}),o[110]||=h(`p`,null,`Read disabled:`,-1),t(f,{disabled:``,variant:`primary`},{badge:r(()=>[t(D,{read:``},{default:r(()=>[...o[99]||=[n(`7`,-1)]]),_:1})]),default:r(()=>[o[100]||=n(`View issues `,-1)]),_:1}),t(f,{disabled:``,variant:`secondary`},{badge:r(()=>[t(D,{read:``},{default:r(()=>[...o[101]||=[n(`7`,-1)]]),_:1})]),default:r(()=>[o[102]||=n(`View issues `,-1)]),_:1}),t(f,{disabled:``,variant:`tertiary`},{badge:r(()=>[t(D,{read:``},{default:r(()=>[...o[103]||=[n(`7`,-1)]]),_:1})]),default:r(()=>[o[104]||=n(`View issues `,-1)]),_:1}),t(f,{disabled:``,variant:`link`},{badge:r(()=>[t(D,{read:``},{default:r(()=>[...o[105]||=[n(`7`,-1)]]),_:1})]),default:r(()=>[o[106]||=n(`View issues `,-1)]),_:1})]),_:1}),t(T,{title:`Animated examples`,source:`<pf-button variant="plain" favorite :favorited="favorited" @click="favorited = !favorited" />
<pf-button variant="plain" settings />
<pf-button variant="plain" hamburger />
<pf-button variant="plain" hamburger hamburger-variant="expand" />
<pf-button variant="plain" hamburger hamburger-variant="collapse" />`},{default:r(()=>[t(f,{variant:`plain`,favorite:``,favorited:C.value,onClick:o[4]||=e=>C.value=!C.value},null,8,[`favorited`]),t(f,{variant:`plain`,settings:``}),t(f,{variant:`plain`,hamburger:``}),t(f,{variant:`plain`,hamburger:``,"hamburger-variant":`expand`}),t(f,{variant:`plain`,hamburger:``,"hamburger-variant":`collapse`})]),_:1})]),_:1})}}});export{x as default};