import{f as C,g as T,m as P,r as y,a as b,c as k,o as s,w as n,b as e,d as r,e as a,u as d,n as B,l as A,j as m,F as g}from"./index-Coy-oaSw.js";import{C as w}from"./circle-plus-icon-DIdEMoKV.js";import{X as L}from"./xmark-icon-dnrOEvj-.js";const R={name:"SquareArrowUpRightIcon",height:512,width:448,svgPath:"M384 32c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0zM160 144c-13.3 0-24 10.7-24 24s10.7 24 24 24l94.1 0L119 327c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l135-135L288 328c0 13.3 10.7 24 24 24s24-10.7 24-24l0-160c0-13.3-10.7-24-24-24l-152 0z",yOffset:0,xOffset:0},D=C(R),E={name:"CopyIcon",height:512,width:448,svgPath:"M208 0L332.1 0c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9L448 336c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48zM48 128l80 0 0 64-64 0 0 256 192 0 0-32 64 0 0 48c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 176c0-26.5 21.5-48 48-48z",yOffset:0,xOffset:0},U=C(E),W={name:"ArrowRightIcon",height:512,width:448,svgPath:"M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z",yOffset:0,xOffset:0},N=C(W),j=T({__name:"Button.story",setup(O){const x=P(),u=y(!1),p=y(!1),v=y(!1);function S(){x.add({title:"clicked span pf-button",variant:"info"})}return(F,t)=>{const q=b("component-info"),i=b("pf-button"),l=b("story-canvas"),V=b("pf-tooltip"),o=b("pf-badge"),I=b("doc-page");return s(),k(I,{name:"Components/Button.story.vue",title:"Button"},{description:n(()=>[...t[5]||(t[5]=[a("A ",-1),r("b",null,"button",-1),a(" is a box area or text that communicates and triggers user actions when clicked or selected. Buttons can be used to communicate and immediately trigger actions a user can take in an application, like submitting a form, canceling a process, or creating a new object. Buttons can also be used to take a user to a new location, like another page inside of a web application, or an external site such as help or documentation.",-1)])]),apidocs:n(()=>[e(q,{src:"packages/core/src/components/Button.vue",doc:{name:"PfButton",exportName:"default",displayName:"Button",description:"",tags:{},expose:[{name:"el"}],props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"component",description:"Sets the base component to render. defaults to button",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Component"}]},defaultValue:{func:!1,value:"'auto'"}},{name:"block",description:"Adds block styling to button",required:!1,type:{name:"boolean"}},{name:"disabled",description:"Adds disabled styling and disables the button using the disabled html attribute",required:!1,type:{name:"boolean"}},{name:"ariaDisabled",description:"Adds disabled styling and communicates that the button is disabled using the aria-disabled html attribute",required:!1,type:{name:"boolean"}},{name:"loading",description:"Adds progress styling to button",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"spinnerAriaValueText",description:"Text describing that current loading status or progress",required:!1,type:{name:"string"}},{name:"spinnerAriaLabel",description:"Accessible label for the spinner to describe what is loading",required:!1,type:{name:"string"}},{name:"spinnerAriaLabelledBy",description:"Id of element which describes what is being loaded",required:!1,type:{name:"string"}},{name:"inoperableEvents",description:"Events to prevent when the button is in an aria-disabled state",required:!1,type:{name:"Array",elements:[{name:"string"}]}},{name:"inline",description:"Adds inline styling to a link button",required:!1,type:{name:"boolean"}},{name:"favorite",description:"Adds favorite styling to a button",required:!1,type:{name:"boolean"}},{name:"favorited",description:"Flag indicating whether the button is favorited or not, only when favorite is true.",required:!1,type:{name:"boolean"}},{name:"type",description:"Sets button type",required:!1,type:{name:"union",elements:[{name:'"button"'},{name:'"submit"'},{name:'"reset"'}]},defaultValue:{func:!1,value:"'button'"}},{name:"variant",description:"Adds button variant styles",required:!1,type:{name:"union",elements:[{name:'"primary"'},{name:'"secondary"'},{name:'"tertiary"'},{name:'"danger"'},{name:'"warning"'},{name:'"link"'},{name:'"plain"'},{name:'"control"'},{name:'"stateful"'}]},defaultValue:{func:!1,value:"'primary'"}},{name:"state",description:'Sets state of the stateful button variant. Default is "unread"',required:!1,type:{name:"union",elements:[{name:'"read"'},{name:'"unread"'},{name:'"attention"'}]}},{name:"noPadding",description:"Applies no padding on a plain button variant. Use when plain button is placed inline with text",required:!1,type:{name:"boolean"}},{name:"iconPosition",description:"Sets position of the link icon",required:!1,type:{name:"union",elements:[{name:'"start"'},{name:'"end"'}]},defaultValue:{func:!1,value:"'start'"}},{name:"tabindex",description:"Sets the button tabindex.",required:!1,type:{name:"number"}},{name:"small",description:"Adds small styling to the button",required:!1,type:{name:"boolean"}},{name:"large",description:"Adds large styling to the button",required:!1,type:{name:"boolean"}},{name:"danger",description:"Adds danger styling to secondary or link button variants",required:!1,type:{name:"boolean"}},{name:"badgeClass",description:"Class name for the badge container",required:!1,type:{name:"string"}},{name:"expanded",description:"Flag indicating whether content the button controls is expanded or not. Required when hamburger is true.",required:!1,type:{name:"boolean"}},{name:"settings",description:"Flag indicating the button is a settings button. This will override the icon property.",required:!1,type:{name:"boolean"}},{name:"hamburger",description:"Flag indicating the button is a hamburger button. This will override the icon property.",required:!1,type:{name:"boolean"}},{name:"hamburgerVariant",description:"Adjusts and animates the hamburger icon to indicate what will happen upon clicking the button.",required:!1,type:{name:"union",elements:[{name:'"expand"'},{name:'"collapse"'}]}},{name:"to",description:"Route Location the link should navigate to when clicked on.",required:!1,type:{name:"RouteLocationRaw"}},{name:"replace",description:"Calls `router.replace` instead of `router.push`.",required:!1,type:{name:"boolean"}},{name:"href",required:!1,type:{name:"string"}},{name:"ariaCurrent",required:!1,type:{name:"string"}}],events:[{name:"click",type:{names:["PointerEvent"]}}],slots:[{name:"default"},{name:"icon"},{name:"badge"}],sourceFiles:["../../packages/core/src/components/Button.vue"]}})]),default:n(()=>[e(l,{title:"Variations",source:`<pf-button variant="primary">Primary</pf-button>
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
</pf-button>`},{default:n(()=>[e(i,{variant:"primary"},{default:n(()=>[...t[6]||(t[6]=[a("Primary",-1)])]),_:1}),e(i,{variant:"secondary"},{default:n(()=>[...t[7]||(t[7]=[a("Secondary",-1)])]),_:1}),e(i,{variant:"tertiary"},{default:n(()=>[...t[8]||(t[8]=[a("Tertiary",-1)])]),_:1}),e(i,{variant:"danger"},{default:n(()=>[...t[9]||(t[9]=[a("Danger",-1)])]),_:1}),e(i,{variant:"warning"},{default:n(()=>[...t[10]||(t[10]=[a("Warning",-1)])]),_:1}),t[15]||(t[15]=r("br",null,null,-1)),t[16]||(t[16]=r("br",null,null,-1)),e(i,{variant:"link"},{icon:n(()=>[e(d(w))]),default:n(()=>[t[11]||(t[11]=a(" Link ",-1))]),_:1}),e(i,{variant:"link","icon-position":"end"},{icon:n(()=>[e(d(D))]),default:n(()=>[t[12]||(t[12]=a(" Link ",-1))]),_:1}),e(i,{variant:"link",inline:""},{default:n(()=>[...t[13]||(t[13]=[a("Inline link",-1)])]),_:1}),t[17]||(t[17]=r("br",null,null,-1)),t[18]||(t[18]=r("br",null,null,-1)),e(i,{variant:"plain","aria-label":"Action"},{icon:n(()=>[e(d(L))]),_:1}),t[19]||(t[19]=r("br",null,null,-1)),t[20]||(t[20]=r("br",null,null,-1)),e(i,{variant:"control"},{default:n(()=>[...t[14]||(t[14]=[a("Control",-1)])]),_:1}),e(i,{variant:"control","aria-label":"Copy"},{icon:n(()=>[e(d(U))]),_:1})]),_:1}),e(l,{title:"Disabled",source:`<pf-button disabled>Primary disabled</pf-button>
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
<pf-button disabled variant="control">Control disabled</pf-button>`},{default:n(()=>[e(i,{disabled:""},{default:n(()=>[...t[21]||(t[21]=[a("Primary disabled",-1)])]),_:1}),e(i,{disabled:""},{default:n(()=>[...t[22]||(t[22]=[a("Secondary disabled",-1)])]),_:1}),e(i,{disabled:"",variant:"tertiary"},{default:n(()=>[...t[23]||(t[23]=[a("Tertiary disabled",-1)])]),_:1}),e(i,{disabled:"",variant:"danger"},{default:n(()=>[...t[24]||(t[24]=[a("Danger disabled",-1)])]),_:1}),e(i,{disabled:"",variant:"warning"},{default:n(()=>[...t[25]||(t[25]=[a("Warning disabled",-1)])]),_:1}),t[29]||(t[29]=r("br",null,null,-1)),t[30]||(t[30]=r("br",null,null,-1)),e(i,{disabled:"",variant:"link"},{icon:n(()=>[e(d(w))]),default:n(()=>[t[26]||(t[26]=a(" Link disabled ",-1))]),_:1}),e(i,{disabled:"",variant:"link",inline:""},{default:n(()=>[...t[27]||(t[27]=[a("Inline link disabled",-1)])]),_:1}),e(i,{disabled:"",variant:"plain","aria-label":"Action"},{icon:n(()=>[e(d(L))]),_:1}),e(i,{disabled:"",variant:"control"},{default:n(()=>[...t[28]||(t[28]=[a("Control disabled",-1)])]),_:1})]),_:1}),e(l,{title:"Aria disabled",source:`<pf-button aria-disabled>Primary aria disabled</pf-button>
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
<pf-button aria-disabled variant="control">Control aria disabled</pf-button>`},{default:n(()=>[e(i,{"aria-disabled":""},{default:n(()=>[...t[31]||(t[31]=[a("Primary aria disabled",-1)])]),_:1}),e(i,{"aria-disabled":""},{default:n(()=>[...t[32]||(t[32]=[a("Secondary aria disabled",-1)])]),_:1}),e(i,{"aria-disabled":"",variant:"tertiary"},{default:n(()=>[...t[33]||(t[33]=[a("Tertiary aria disabled",-1)])]),_:1}),e(i,{"aria-disabled":"",variant:"danger"},{default:n(()=>[...t[34]||(t[34]=[a("Danger aria disabled",-1)])]),_:1}),e(i,{"aria-disabled":"",variant:"warning"},{default:n(()=>[...t[35]||(t[35]=[a("Warning aria disabled",-1)])]),_:1}),t[39]||(t[39]=r("br",null,null,-1)),t[40]||(t[40]=r("br",null,null,-1)),e(i,{"aria-disabled":"",variant:"link"},{icon:n(()=>[e(d(w))]),default:n(()=>[t[36]||(t[36]=a(" Link aria disabled ",-1))]),_:1}),e(i,{"aria-disabled":"",variant:"link",inline:""},{default:n(()=>[...t[37]||(t[37]=[a("Inline link aria disabled",-1)])]),_:1}),e(i,{"aria-disabled":"",variant:"plain","aria-label":"Action"},{icon:n(()=>[e(d(L))]),_:1}),e(i,{"aria-disabled":"",variant:"control"},{default:n(()=>[...t[38]||(t[38]=[a("Control aria disabled",-1)])]),_:1})]),_:1}),e(l,{title:"Aria disable with tooltip",source:`<pf-tooltip
  content="Aria-disabled buttons are like disabled buttons, but focusable. Allows for tooltip support."
>
  <pf-button aria-disabled variant="secondary">Secondary button to core docs</pf-button>
</pf-tooltip>`},{default:n(()=>[e(V,{content:"Aria-disabled buttons are like disabled buttons, but focusable. Allows for tooltip support."},{default:n(()=>[e(i,{"aria-disabled":"",variant:"secondary"},{default:n(()=>[...t[41]||(t[41]=[a("Secondary button to core docs",-1)])]),_:1})]),_:1})]),_:1}),e(l,{title:"Aria disabled link as button with tooltip",source:`<pf-tooltip content="Aria-disabled link as button with tooltip">
  <pf-button
    component="a"
    aria-disabled
    href="https://www.patternfly.org/"
    target="_blank"
    variant="tertiary"
  >
    Tertiary link as button to core docs
  </pf-button>
</pf-tooltip>`},{default:n(()=>[e(V,{content:"Aria-disabled link as button with tooltip"},{default:n(()=>[e(i,{component:"a","aria-disabled":"",href:"https://www.patternfly.org/",target:"_blank",variant:"tertiary"},{default:n(()=>[...t[42]||(t[42]=[a(" Tertiary link as button to core docs ",-1)])]),_:1})]),_:1})]),_:1}),e(l,{title:"Links as buttons",source:`<pf-button
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
</pf-button>`},{default:n(()=>[e(i,{component:"a",href:"https://www.patternfly.org/",target:"_blank",variant:"primary"},{default:n(()=>[...t[43]||(t[43]=[a(" Link to core docs ",-1)])]),_:1}),e(i,{component:"a",href:"https://www.patternfly.org/",target:"_blank",variant:"secondary"},{default:n(()=>[...t[44]||(t[44]=[a(" Secondary link to core docs ",-1)])]),_:1}),e(i,{disabled:"",component:"a",href:"https://www.patternfly.org/",target:"_blank",variant:"tertiary"},{default:n(()=>[...t[45]||(t[45]=[a(" Tertiary link to core docs ",-1)])]),_:1}),e(i,{component:"a",href:"https://www.patternfly.org/contribution/#modifiers",variant:"link"},{default:n(()=>[...t[46]||(t[46]=[a(" Jump to modifiers in contribution guidelines ",-1)])]),_:1})]),_:1}),e(l,{title:"Inline link as span",source:`<p>
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
</p>`},{default:n(()=>[r("p",null,[t[48]||(t[48]=a(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",-1)),e(i,{variant:"link",inline:"",component:"span"},{default:n(()=>[...t[47]||(t[47]=[a(" This is long button text that needs to be a span so that it will wrap inline with the text around it. ",-1)])]),_:1}),t[49]||(t[49]=a(" Sed hendrerit nisi in cursus maximus. Ut malesuada nisi turpis, in condimentum velit elementum non. ",-1))]),t[57]||(t[57]=r("br",null,null,-1)),r("p",null,[t[51]||(t[51]=a(" Note that using a ",-1)),t[52]||(t[52]=r("b",null,"span",-1)),t[53]||(t[53]=a(" as a button does not fire the ",-1)),t[54]||(t[54]=r("b",null,"click",-1)),t[55]||(t[55]=a(" event for Enter or Space keys. ",-1)),e(i,{variant:"link",inline:"",component:"span",onKeydown:B(S,["prevent"])},{default:n(()=>[...t[50]||(t[50]=[a(" An ",-1),r("b",null,"keydown",-1),a(" event listener is needed for Enter and Space key presses to prevent their default behavior and trigger your code. ",-1)])]),_:1}),t[56]||(t[56]=a(" Pressing the Enter or Space keys on the inline link as span above demonstrates this by triggering an alert. ",-1))])]),_:1}),e(l,{title:"Block level",source:"<pf-button block>Block level button</pf-button>"},{default:n(()=>[e(i,{block:""},{default:n(()=>[...t[58]||(t[58]=[a("Block level button",-1)])]),_:1})]),_:1}),e(l,{title:"Types",source:`<pf-button type="submit">Submit</pf-button>
<pf-button type="reset">Reset</pf-button>
<pf-button>Default</pf-button>`},{default:n(()=>[e(i,{type:"submit"},{default:n(()=>[...t[59]||(t[59]=[a("Submit",-1)])]),_:1}),e(i,{type:"reset"},{default:n(()=>[...t[60]||(t[60]=[a("Reset",-1)])]),_:1}),e(i,null,{default:n(()=>[...t[61]||(t[61]=[a("Default",-1)])]),_:1})]),_:1}),e(l,{title:"Small",source:`<pf-button variant="primary" small>Primary</pf-button>
<pf-button variant="secondary" small>Secondary</pf-button>
<pf-button variant="tertiary" small>Tertiary</pf-button>
<pf-button variant="danger" small>Danger</pf-button>
<pf-button variant="warning" small>Warning</pf-button>`},{default:n(()=>[e(i,{variant:"primary",small:""},{default:n(()=>[...t[62]||(t[62]=[a("Primary",-1)])]),_:1}),e(i,{variant:"secondary",small:""},{default:n(()=>[...t[63]||(t[63]=[a("Secondary",-1)])]),_:1}),e(i,{variant:"tertiary",small:""},{default:n(()=>[...t[64]||(t[64]=[a("Tertiary",-1)])]),_:1}),e(i,{variant:"danger",small:""},{default:n(()=>[...t[65]||(t[65]=[a("Danger",-1)])]),_:1}),e(i,{variant:"warning",small:""},{default:n(()=>[...t[66]||(t[66]=[a("Warning",-1)])]),_:1})]),_:1}),e(l,{title:"Call to action",source:`<pf-button variant="primary" large>Call to action</pf-button>
<pf-button variant="secondary" large>Call to action</pf-button>
<pf-button variant="tertiary" large>Call to action</pf-button>
<pf-button variant="link" large icon-position="end">
  <template #icon>
    <arrow-right-icon />
  </template>
  Call to action
</pf-button>`},{default:n(()=>[e(i,{variant:"primary",large:""},{default:n(()=>[...t[67]||(t[67]=[a("Call to action",-1)])]),_:1}),e(i,{variant:"secondary",large:""},{default:n(()=>[...t[68]||(t[68]=[a("Call to action",-1)])]),_:1}),e(i,{variant:"tertiary",large:""},{default:n(()=>[...t[69]||(t[69]=[a("Call to action",-1)])]),_:1}),e(i,{variant:"link",large:"","icon-position":"end"},{icon:n(()=>[e(d(N))]),default:n(()=>[t[70]||(t[70]=a(" Call to action ",-1))]),_:1})]),_:1}),e(l,{title:"Progress",source:`<pf-button
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
<pf-button v-if="secondaryLoading" @click="secondaryLoading = false">Stop</pf-button>`},{default:n(()=>[e(i,{"spinner-aria-value-text":u.value?"Loading":void 0,loading:u.value,variant:"primary",onClick:t[0]||(t[0]=f=>u.value=!0)},{default:n(()=>[u.value?(s(),m(g,{key:0},[a("Loading...")],64)):(s(),m(g,{key:1},[a("Click to start loading")],64))]),_:1},8,["spinner-aria-value-text","loading"]),u.value?(s(),k(i,{key:0,onClick:t[1]||(t[1]=f=>u.value=!1)},{default:n(()=>[...t[71]||(t[71]=[a("Stop",-1)])]),_:1})):A("",!0),t[73]||(t[73]=r("br",null,null,-1)),t[74]||(t[74]=r("br",null,null,-1)),e(i,{"spinner-aria-value-text":p.value?"Loading":void 0,loading:p.value,variant:"secondary",onClick:t[2]||(t[2]=f=>p.value=!0)},{default:n(()=>[p.value?(s(),m(g,{key:0},[a("Loading...")],64)):(s(),m(g,{key:1},[a("Click to start loading")],64))]),_:1},8,["spinner-aria-value-text","loading"]),p.value?(s(),k(i,{key:1,onClick:t[3]||(t[3]=f=>p.value=!1)},{default:n(()=>[...t[72]||(t[72]=[a("Stop",-1)])]),_:1})):A("",!0)]),_:1}),e(l,{title:"With count",source:`<p>Unread:</p>
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
<pf-button disabled variant="link">View issues <template #badge><pf-badge read>7</pf-badge></template></pf-button>`},{default:n(()=>[t[107]||(t[107]=r("p",null,"Unread:",-1)),e(i,{variant:"primary"},{badge:n(()=>[e(o,null,{default:n(()=>[...t[75]||(t[75]=[a("7",-1)])]),_:1})]),default:n(()=>[t[76]||(t[76]=a("View issues ",-1))]),_:1}),e(i,{variant:"secondary"},{badge:n(()=>[e(o,null,{default:n(()=>[...t[77]||(t[77]=[a("7",-1)])]),_:1})]),default:n(()=>[t[78]||(t[78]=a("View issues ",-1))]),_:1}),e(i,{variant:"tertiary"},{badge:n(()=>[e(o,null,{default:n(()=>[...t[79]||(t[79]=[a("7",-1)])]),_:1})]),default:n(()=>[t[80]||(t[80]=a("View issues ",-1))]),_:1}),e(i,{variant:"link"},{badge:n(()=>[e(o,null,{default:n(()=>[...t[81]||(t[81]=[a("7",-1)])]),_:1})]),default:n(()=>[t[82]||(t[82]=a("View issues ",-1))]),_:1}),t[108]||(t[108]=r("p",null,"Unread disabled:",-1)),e(i,{disabled:"",variant:"primary"},{badge:n(()=>[e(o,null,{default:n(()=>[...t[83]||(t[83]=[a("7",-1)])]),_:1})]),default:n(()=>[t[84]||(t[84]=a("View issues ",-1))]),_:1}),e(i,{disabled:"",variant:"secondary"},{badge:n(()=>[e(o,null,{default:n(()=>[...t[85]||(t[85]=[a("7",-1)])]),_:1})]),default:n(()=>[t[86]||(t[86]=a("View issues ",-1))]),_:1}),e(i,{disabled:"",variant:"tertiary"},{badge:n(()=>[e(o,null,{default:n(()=>[...t[87]||(t[87]=[a("7",-1)])]),_:1})]),default:n(()=>[t[88]||(t[88]=a("View issues ",-1))]),_:1}),e(i,{disabled:"",variant:"link"},{badge:n(()=>[e(o,null,{default:n(()=>[...t[89]||(t[89]=[a("7",-1)])]),_:1})]),default:n(()=>[t[90]||(t[90]=a("View issues ",-1))]),_:1}),t[109]||(t[109]=r("p",null,"Read:",-1)),e(i,{variant:"primary"},{badge:n(()=>[e(o,{read:""},{default:n(()=>[...t[91]||(t[91]=[a("7",-1)])]),_:1})]),default:n(()=>[t[92]||(t[92]=a("View issues ",-1))]),_:1}),e(i,{variant:"secondary"},{badge:n(()=>[e(o,{read:""},{default:n(()=>[...t[93]||(t[93]=[a("7",-1)])]),_:1})]),default:n(()=>[t[94]||(t[94]=a("View issues ",-1))]),_:1}),e(i,{variant:"tertiary"},{badge:n(()=>[e(o,{read:""},{default:n(()=>[...t[95]||(t[95]=[a("7",-1)])]),_:1})]),default:n(()=>[t[96]||(t[96]=a("View issues ",-1))]),_:1}),e(i,{variant:"link"},{badge:n(()=>[e(o,{read:""},{default:n(()=>[...t[97]||(t[97]=[a("7",-1)])]),_:1})]),default:n(()=>[t[98]||(t[98]=a("View issues ",-1))]),_:1}),t[110]||(t[110]=r("p",null,"Read disabled:",-1)),e(i,{disabled:"",variant:"primary"},{badge:n(()=>[e(o,{read:""},{default:n(()=>[...t[99]||(t[99]=[a("7",-1)])]),_:1})]),default:n(()=>[t[100]||(t[100]=a("View issues ",-1))]),_:1}),e(i,{disabled:"",variant:"secondary"},{badge:n(()=>[e(o,{read:""},{default:n(()=>[...t[101]||(t[101]=[a("7",-1)])]),_:1})]),default:n(()=>[t[102]||(t[102]=a("View issues ",-1))]),_:1}),e(i,{disabled:"",variant:"tertiary"},{badge:n(()=>[e(o,{read:""},{default:n(()=>[...t[103]||(t[103]=[a("7",-1)])]),_:1})]),default:n(()=>[t[104]||(t[104]=a("View issues ",-1))]),_:1}),e(i,{disabled:"",variant:"link"},{badge:n(()=>[e(o,{read:""},{default:n(()=>[...t[105]||(t[105]=[a("7",-1)])]),_:1})]),default:n(()=>[t[106]||(t[106]=a("View issues ",-1))]),_:1})]),_:1}),e(l,{title:"Animated examples",source:`<pf-button variant="plain" favorite :favorited="favorited" @click="favorited = !favorited" />
<pf-button variant="plain" settings />
<pf-button variant="plain" hamburger />
<pf-button variant="plain" hamburger hamburger-variant="expand" />
<pf-button variant="plain" hamburger hamburger-variant="collapse" />`},{default:n(()=>[e(i,{variant:"plain",favorite:"",favorited:v.value,onClick:t[4]||(t[4]=f=>v.value=!v.value)},null,8,["favorited"]),e(i,{variant:"plain",settings:""}),e(i,{variant:"plain",hamburger:""}),e(i,{variant:"plain",hamburger:"","hamburger-variant":"expand"}),e(i,{variant:"plain",hamburger:"","hamburger-variant":"collapse"})]),_:1})]),_:1})}}});export{j as default};
