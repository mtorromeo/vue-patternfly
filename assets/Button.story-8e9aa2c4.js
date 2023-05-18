import{c as g}from"./createIcon-c74490a4.js";import{X as _}from"./xmark-icon-00e961ab.js";import{e as L,r as h,a as b,o as s,c as m,w as t,b as a,g as n,u as l,d as i,h as f,F as c,j as w}from"./index-da50a540.js";const S={name:"CirclePlusIcon",height:512,width:512,svgPath:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z",yOffset:0,xOffset:0},x=g(S),y=x,A={name:"SquareArrowUpRightIcon",height:512,width:448,svgPath:"M384 32c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H384zM160 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h94.1L119 327c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l135-135V328c0 13.3 10.7 24 24 24s24-10.7 24-24V168c0-13.3-10.7-24-24-24H160z",yOffset:0,xOffset:0},I=g(A),P=I,T={name:"CopyIcon",height:512,width:512,svgPath:"M272 0H396.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H272c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128H192v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z",yOffset:0,xOffset:0},R=g(T),D=R,H={name:"ArrowRightIcon",height:512,width:448,svgPath:"M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z",yOffset:0,xOffset:0},B=g(H),U=B,W=i("br",null,null,-1),O=i("br",null,null,-1),$=i("br",null,null,-1),z=i("br",null,null,-1),E=i("br",null,null,-1),M=i("br",null,null,-1),q=i("br",null,null,-1),N=i("br",null,null,-1),K=i("br",null,null,-1),F=i("br",null,null,-1),J=i("br",null,null,-1),X=i("b",null,"span",-1),j=i("b",null,"onclick",-1),G=i("b",null,"onKeydown",-1),Q=i("br",null,null,-1),Y=i("br",null,null,-1),Z=i("p",null,"Unread:",-1),tt=i("p",null,"Unread disabled:",-1),at=i("p",null,"Read:",-1),nt=i("p",null,"Read disabled:",-1),dt=L({__name:"Button.story",setup(et){const u=h(!1),p=h(!1);return(it,d)=>{const V=b("component-title"),e=b("pf-button"),o=b("story-canvas"),k=b("pf-tooltip"),r=b("pf-badge"),C=b("doc-page");return s(),m(C,{title:"Button"},{default:t(()=>[a(V,{name:"pf-button"}),a(o,{title:"Variations",source:`<pf-button variant="primary">Primary</pf-button>
<pf-button variant="secondary">Secondary</pf-button>
<pf-button variant="tertiary">Tertiary</pf-button>
<pf-button variant="danger">Danger</pf-button>
<pf-button variant="warning">Warning</pf-button>
<br>
<br>
<pf-button variant="link">
  <template #icon>
    <circle-plus-icon></circle-plus-icon>
  </template>
  Link
</pf-button>
<pf-button variant="link" icon-position="right">
  <template #icon>
    <square-arrow-up-right-icon></square-arrow-up-right-icon>
  </template>
  Link
</pf-button>
<pf-button variant="link" inline>Inline link</pf-button>
<br>
<br>
<pf-button variant="plain" aria-label="Action">
  <xmark-icon></xmark-icon>
</pf-button>
<br>
<br>
<pf-button variant="control">Control</pf-button>
<pf-button variant="control" aria-label="Copy">
  <copy-icon></copy-icon>
</pf-button>`},{default:t(()=>[a(e,{variant:"primary"},{default:t(()=>[n("Primary")]),_:1}),a(e,{variant:"secondary"},{default:t(()=>[n("Secondary")]),_:1}),a(e,{variant:"tertiary"},{default:t(()=>[n("Tertiary")]),_:1}),a(e,{variant:"danger"},{default:t(()=>[n("Danger")]),_:1}),a(e,{variant:"warning"},{default:t(()=>[n("Warning")]),_:1}),W,O,a(e,{variant:"link"},{icon:t(()=>[a(l(y))]),default:t(()=>[n(" Link ")]),_:1}),a(e,{variant:"link","icon-position":"right"},{icon:t(()=>[a(l(P))]),default:t(()=>[n(" Link ")]),_:1}),a(e,{variant:"link",inline:""},{default:t(()=>[n("Inline link")]),_:1}),$,z,a(e,{variant:"plain","aria-label":"Action"},{default:t(()=>[a(l(_))]),_:1}),E,M,a(e,{variant:"control"},{default:t(()=>[n("Control")]),_:1}),a(e,{variant:"control","aria-label":"Copy"},{default:t(()=>[a(l(D))]),_:1})]),_:1}),a(o,{title:"Disabled",source:`<pf-button disabled>Primary disabled</pf-button>
<pf-button disabled>Secondary disabled</pf-button>
<pf-button disabled variant="tertiary">Tertiary disabled</pf-button>
<pf-button disabled variant="danger">Danger disabled</pf-button>
<pf-button disabled variant="warning">Warning disabled</pf-button>
<br>
<br>
<pf-button disabled variant="link">
  <template #icon>
    <circle-plus-icon></circle-plus-icon>
  </template>
  Link disabled
</pf-button>
<pf-button disabled variant="link" inline>Inline link disabled</pf-button>
<pf-button disabled variant="plain" aria-label="Action">
  <xmark-icon></xmark-icon>
</pf-button>
<pf-button disabled variant="control">Control disabled</pf-button>`},{default:t(()=>[a(e,{disabled:""},{default:t(()=>[n("Primary disabled")]),_:1}),a(e,{disabled:""},{default:t(()=>[n("Secondary disabled")]),_:1}),a(e,{disabled:"",variant:"tertiary"},{default:t(()=>[n("Tertiary disabled")]),_:1}),a(e,{disabled:"",variant:"danger"},{default:t(()=>[n("Danger disabled")]),_:1}),a(e,{disabled:"",variant:"warning"},{default:t(()=>[n("Warning disabled")]),_:1}),q,N,a(e,{disabled:"",variant:"link"},{icon:t(()=>[a(l(y))]),default:t(()=>[n(" Link disabled ")]),_:1}),a(e,{disabled:"",variant:"link",inline:""},{default:t(()=>[n("Inline link disabled")]),_:1}),a(e,{disabled:"",variant:"plain","aria-label":"Action"},{default:t(()=>[a(l(_))]),_:1}),a(e,{disabled:"",variant:"control"},{default:t(()=>[n("Control disabled")]),_:1})]),_:1}),a(o,{title:"Aria disabled",source:`<pf-button aria-disabled>Primary aria disabled</pf-button>
<pf-button aria-disabled>Secondary aria disabled</pf-button>
<pf-button aria-disabled variant="tertiary">Tertiary aria disabled</pf-button>
<pf-button aria-disabled variant="danger">Danger aria disabled</pf-button>
<pf-button aria-disabled variant="warning">Warning aria disabled</pf-button>
<br>
<br>
<pf-button aria-disabled variant="link">
  <template #icon>
    <circle-plus-icon></circle-plus-icon>
  </template>
  Link aria disabled
</pf-button>
<pf-button aria-disabled variant="link" inline>Inline link aria disabled</pf-button>
<pf-button aria-disabled variant="plain" aria-label="Action">
  <xmark-icon></xmark-icon>
</pf-button>
<pf-button aria-disabled variant="control">Control aria disabled</pf-button>`},{default:t(()=>[a(e,{"aria-disabled":""},{default:t(()=>[n("Primary aria disabled")]),_:1}),a(e,{"aria-disabled":""},{default:t(()=>[n("Secondary aria disabled")]),_:1}),a(e,{"aria-disabled":"",variant:"tertiary"},{default:t(()=>[n("Tertiary aria disabled")]),_:1}),a(e,{"aria-disabled":"",variant:"danger"},{default:t(()=>[n("Danger aria disabled")]),_:1}),a(e,{"aria-disabled":"",variant:"warning"},{default:t(()=>[n("Warning aria disabled")]),_:1}),K,F,a(e,{"aria-disabled":"",variant:"link"},{icon:t(()=>[a(l(y))]),default:t(()=>[n(" Link aria disabled ")]),_:1}),a(e,{"aria-disabled":"",variant:"link",inline:""},{default:t(()=>[n("Inline link aria disabled")]),_:1}),a(e,{"aria-disabled":"",variant:"plain","aria-label":"Action"},{default:t(()=>[a(l(_))]),_:1}),a(e,{"aria-disabled":"",variant:"control"},{default:t(()=>[n("Control aria disabled")]),_:1})]),_:1}),a(o,{title:"Aria disable with tooltip",source:`<pf-tooltip
  content="Aria-disabled buttons are like disabled buttons, but focusable. Allows for tooltip support."
>
  <pf-button aria-disabled variant="secondary">Secondary button to core docs</pf-button>
`},{default:t(()=>[a(k,{content:"Aria-disabled buttons are like disabled buttons, but focusable. Allows for tooltip support."},{default:t(()=>[a(e,{"aria-disabled":"",variant:"secondary"},{default:t(()=>[n("Secondary button to core docs")]),_:1})]),_:1})]),_:1}),a(o,{title:"Aria disabled link as button with tooltip",source:`<pf-tooltip content="Aria-disabled link as button with tooltip">
  <pf-button
    component="a"
    aria-disabled
    href="https://pf4.patternfly.org/"
    target="_blank"
    variant="tertiary"
  >
    Tertiary link as button to core docs
  
</pf-tooltip>`},{default:t(()=>[a(k,{content:"Aria-disabled link as button with tooltip"},{default:t(()=>[a(e,{component:"a","aria-disabled":"",href:"https://pf4.patternfly.org/",target:"_blank",variant:"tertiary"},{default:t(()=>[n(" Tertiary link as button to core docs ")]),_:1})]),_:1})]),_:1}),a(o,{title:"Links as buttons",source:`<pf-button
  component="a"
  href="https://pf4.patternfly.org/"
  target="_blank"
  variant="primary"
>
  Link to core docs

<pf-button
  component="a"
  href="https://pf4.patternfly.org/"
  target="_blank"
  variant="secondary"
>
  Secondary link to core docs

<pf-button
  disabled
  component="a"
  href="https://pf4.patternfly.org/"
  target="_blank"
  variant="tertiary"
>
  Tertiary link to core docs

<pf-button
  component="a"
  href="https://pf4.patternfly.org/contribution/#modifiers"
  variant="link"
>
  Jump to modifiers in contribution guidelines
`},{default:t(()=>[a(e,{component:"a",href:"https://pf4.patternfly.org/",target:"_blank",variant:"primary"},{default:t(()=>[n(" Link to core docs ")]),_:1}),a(e,{component:"a",href:"https://pf4.patternfly.org/",target:"_blank",variant:"secondary"},{default:t(()=>[n(" Secondary link to core docs ")]),_:1}),a(e,{disabled:"",component:"a",href:"https://pf4.patternfly.org/",target:"_blank",variant:"tertiary"},{default:t(()=>[n(" Tertiary link to core docs ")]),_:1}),a(e,{component:"a",href:"https://pf4.patternfly.org/contribution/#modifiers",variant:"link"},{default:t(()=>[n(" Jump to modifiers in contribution guidelines ")]),_:1})]),_:1}),a(o,{title:"Inline link as span",source:`<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  <pf-button
    variant="link"
    inline
    component="span"
  >
    This is long button text that needs to be a span so that it will wrap inline with the text around it.
  
  Sed hendrerit nisi in cursus maximus. Ut malesuada nisi turpis, in condimentum velit elementum non.
</p>

<br>

<p>
  Note that using a
  <b>span</b> as a button does not fire the
  <b>onclick</b> event for Enter or Space keys.
  <pf-button variant="link" inline component="span" on-key-down="{handleKeydown}">
    An
    <b>onKeydown</b> event listener is needed for Enter and Space key presses to prevent their default behavior and trigger your code.
  </pf-button>
  Pressing the Enter or Space keys on the inline link as span above demonstrates this by triggering an alert.
</p>`},{default:t(()=>[i("p",null,[n(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. "),a(e,{variant:"link",inline:"",component:"span"},{default:t(()=>[n(" This is long button text that needs to be a span so that it will wrap inline with the text around it. ")]),_:1}),n(" Sed hendrerit nisi in cursus maximus. Ut malesuada nisi turpis, in condimentum velit elementum non. ")]),J,i("p",null,[n(" Note that using a "),X,n(" as a button does not fire the "),j,n(" event for Enter or Space keys. "),a(e,{variant:"link",inline:"",component:"span","on-key-down":"{handleKeydown}"},{default:t(()=>[n(" An "),G,n(" event listener is needed for Enter and Space key presses to prevent their default behavior and trigger your code. ")]),_:1}),n(" Pressing the Enter or Space keys on the inline link as span above demonstrates this by triggering an alert. ")])]),_:1}),a(o,{title:"Block level",source:"<pf-button block>Block level button</pf-button>"},{default:t(()=>[a(e,{block:""},{default:t(()=>[n("Block level button")]),_:1})]),_:1}),a(o,{title:"Types",source:`<pf-button type="submit">Submit</pf-button>
<pf-button type="reset">Reset</pf-button>
<pf-button>Default</pf-button>`},{default:t(()=>[a(e,{type:"submit"},{default:t(()=>[n("Submit")]),_:1}),a(e,{type:"reset"},{default:t(()=>[n("Reset")]),_:1}),a(e,null,{default:t(()=>[n("Default")]),_:1})]),_:1}),a(o,{title:"Small",source:`<pf-button variant="primary" small>Primary</pf-button>
<pf-button variant="secondary" small>Secondary</pf-button>
<pf-button variant="tertiary" small>Tertiary</pf-button>
<pf-button variant="danger" small>Danger</pf-button>
<pf-button variant="warning" small>Warning</pf-button>`},{default:t(()=>[a(e,{variant:"primary",small:""},{default:t(()=>[n("Primary")]),_:1}),a(e,{variant:"secondary",small:""},{default:t(()=>[n("Secondary")]),_:1}),a(e,{variant:"tertiary",small:""},{default:t(()=>[n("Tertiary")]),_:1}),a(e,{variant:"danger",small:""},{default:t(()=>[n("Danger")]),_:1}),a(e,{variant:"warning",small:""},{default:t(()=>[n("Warning")]),_:1})]),_:1}),a(o,{title:"Call to action",source:`<pf-button variant="primary" large>Call to action</pf-button>
<pf-button variant="secondary" large>Call to action</pf-button>
<pf-button variant="tertiary" large>Call to action</pf-button>
<pf-button variant="link" large>
  Call to action
  <arrow-right-icon></arrow-right-icon>
</pf-button>`},{default:t(()=>[a(e,{variant:"primary",large:""},{default:t(()=>[n("Call to action")]),_:1}),a(e,{variant:"secondary",large:""},{default:t(()=>[n("Call to action")]),_:1}),a(e,{variant:"tertiary",large:""},{default:t(()=>[n("Call to action")]),_:1}),a(e,{variant:"link",large:""},{default:t(()=>[n(" Call to action "),a(l(U))]),_:1})]),_:1}),a(o,{title:"Progress",source:`<pf-button
  :spinner-aria-value-text="primaryLoading ? 'Loading' : undefined"
  :loading="primaryLoading"
  variant="primary"
  @click="primaryLoading = true"
>
  <template v-if="primaryLoading">Loading...</template>
  <template v-else>Click to start loading</template>

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

<pf-button v-if="secondaryLoading" @click="secondaryLoading = false">Stop</pf-button>`},{default:t(()=>[a(e,{"spinner-aria-value-text":u.value?"Loading":void 0,loading:u.value,variant:"primary",onClick:d[0]||(d[0]=v=>u.value=!0)},{default:t(()=>[u.value?(s(),f(c,{key:0},[n("Loading...")],64)):(s(),f(c,{key:1},[n("Click to start loading")],64))]),_:1},8,["spinner-aria-value-text","loading"]),u.value?(s(),m(e,{key:0,onClick:d[1]||(d[1]=v=>u.value=!1)},{default:t(()=>[n("Stop")]),_:1})):w("",!0),Q,Y,a(e,{"spinner-aria-value-text":p.value?"Loading":void 0,loading:p.value,variant:"secondary",onClick:d[2]||(d[2]=v=>p.value=!0)},{default:t(()=>[p.value?(s(),f(c,{key:0},[n("Loading...")],64)):(s(),f(c,{key:1},[n("Click to start loading")],64))]),_:1},8,["spinner-aria-value-text","loading"]),p.value?(s(),m(e,{key:1,onClick:d[3]||(d[3]=v=>p.value=!1)},{default:t(()=>[n("Stop")]),_:1})):w("",!0)]),_:1}),a(o,{title:"With count",source:`<p>Unread:</p>
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
<pf-button disabled variant="link">View issues <template #badge><pf-badge read>7</pf-badge></template></pf-button>`},{default:t(()=>[Z,a(e,{variant:"primary"},{badge:t(()=>[a(r,null,{default:t(()=>[n("7")]),_:1})]),default:t(()=>[n("View issues ")]),_:1}),a(e,{variant:"secondary"},{badge:t(()=>[a(r,null,{default:t(()=>[n("7")]),_:1})]),default:t(()=>[n("View issues ")]),_:1}),a(e,{variant:"tertiary"},{badge:t(()=>[a(r,null,{default:t(()=>[n("7")]),_:1})]),default:t(()=>[n("View issues ")]),_:1}),a(e,{variant:"link"},{badge:t(()=>[a(r,null,{default:t(()=>[n("7")]),_:1})]),default:t(()=>[n("View issues ")]),_:1}),tt,a(e,{disabled:"",variant:"primary"},{badge:t(()=>[a(r,null,{default:t(()=>[n("7")]),_:1})]),default:t(()=>[n("View issues ")]),_:1}),a(e,{disabled:"",variant:"secondary"},{badge:t(()=>[a(r,null,{default:t(()=>[n("7")]),_:1})]),default:t(()=>[n("View issues ")]),_:1}),a(e,{disabled:"",variant:"tertiary"},{badge:t(()=>[a(r,null,{default:t(()=>[n("7")]),_:1})]),default:t(()=>[n("View issues ")]),_:1}),a(e,{disabled:"",variant:"link"},{badge:t(()=>[a(r,null,{default:t(()=>[n("7")]),_:1})]),default:t(()=>[n("View issues ")]),_:1}),at,a(e,{variant:"primary"},{badge:t(()=>[a(r,{read:""},{default:t(()=>[n("7")]),_:1})]),default:t(()=>[n("View issues ")]),_:1}),a(e,{variant:"secondary"},{badge:t(()=>[a(r,{read:""},{default:t(()=>[n("7")]),_:1})]),default:t(()=>[n("View issues ")]),_:1}),a(e,{variant:"tertiary"},{badge:t(()=>[a(r,{read:""},{default:t(()=>[n("7")]),_:1})]),default:t(()=>[n("View issues ")]),_:1}),a(e,{variant:"link"},{badge:t(()=>[a(r,{read:""},{default:t(()=>[n("7")]),_:1})]),default:t(()=>[n("View issues ")]),_:1}),nt,a(e,{disabled:"",variant:"primary"},{badge:t(()=>[a(r,{read:""},{default:t(()=>[n("7")]),_:1})]),default:t(()=>[n("View issues ")]),_:1}),a(e,{disabled:"",variant:"secondary"},{badge:t(()=>[a(r,{read:""},{default:t(()=>[n("7")]),_:1})]),default:t(()=>[n("View issues ")]),_:1}),a(e,{disabled:"",variant:"tertiary"},{badge:t(()=>[a(r,{read:""},{default:t(()=>[n("7")]),_:1})]),default:t(()=>[n("View issues ")]),_:1}),a(e,{disabled:"",variant:"link"},{badge:t(()=>[a(r,{read:""},{default:t(()=>[n("7")]),_:1})]),default:t(()=>[n("View issues ")]),_:1})]),_:1})]),_:1})}}});export{dt as default};
