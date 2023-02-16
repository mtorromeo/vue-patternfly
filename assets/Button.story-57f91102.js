import{c as f}from"./createIcon-55dd72c0.js";import{X as g}from"./xmark-icon-22b9ff5d.js";import{e as L,r as k,a as p,o as d,c as y,w as n,b as t,g as a,u as r,d as i,h as c,F as b,j as h}from"./index-d92aa1ec.js";const S={name:"CirclePlusIcon",height:512,width:512,svgPath:"M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z",yOffset:0,xOffset:0},x=f(S),_=x,A={name:"SquareArrowUpRightIcon",height:512,width:448,svgPath:"M384 32c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H384zM160 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h94.1L119 327c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l135-135V328c0 13.3 10.7 24 24 24s24-10.7 24-24V168c0-13.3-10.7-24-24-24H160z",yOffset:0,xOffset:0},I=f(A),P=I,V={name:"CopyIcon",height:512,width:512,svgPath:"M224 0c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224zM64 160c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64H64V224h64V160H64z",yOffset:0,xOffset:0},T=f(V),D=T,H={name:"ArrowRightIcon",height:512,width:448,svgPath:"M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z",yOffset:0,xOffset:0},B=f(H),R=B,O=i("br",null,null,-1),W=i("br",null,null,-1),$=i("br",null,null,-1),z=i("br",null,null,-1),E=i("br",null,null,-1),M=i("br",null,null,-1),q=i("br",null,null,-1),N=i("br",null,null,-1),U=i("br",null,null,-1),K=i("br",null,null,-1),F=i("br",null,null,-1),J=i("b",null,"span",-1),X=i("b",null,"onclick",-1),j=i("b",null,"onKeydown",-1),G=i("br",null,null,-1),Q=i("br",null,null,-1),et=L({__name:"Button.story",setup(Y){const s=k(!1),u=k(!1);return(Z,l)=>{const w=p("component-title"),e=p("pf-button"),o=p("story-canvas"),m=p("pf-tooltip"),C=p("doc-page");return d(),y(C,{title:"Button"},{default:n(()=>[t(w,{name:"pf-button"}),t(o,{title:"Variations",source:`<pf-button variant="primary">Primary</pf-button>
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
</pf-button>`},{default:n(()=>[t(e,{variant:"primary"},{default:n(()=>[a("Primary")]),_:1}),t(e,{variant:"secondary"},{default:n(()=>[a("Secondary")]),_:1}),t(e,{variant:"tertiary"},{default:n(()=>[a("Tertiary")]),_:1}),t(e,{variant:"danger"},{default:n(()=>[a("Danger")]),_:1}),t(e,{variant:"warning"},{default:n(()=>[a("Warning")]),_:1}),O,W,t(e,{variant:"link"},{icon:n(()=>[t(r(_))]),default:n(()=>[a(" Link ")]),_:1}),t(e,{variant:"link","icon-position":"right"},{icon:n(()=>[t(r(P))]),default:n(()=>[a(" Link ")]),_:1}),t(e,{variant:"link",inline:""},{default:n(()=>[a("Inline link")]),_:1}),$,z,t(e,{variant:"plain","aria-label":"Action"},{default:n(()=>[t(r(g))]),_:1}),E,M,t(e,{variant:"control"},{default:n(()=>[a("Control")]),_:1}),t(e,{variant:"control","aria-label":"Copy"},{default:n(()=>[t(r(D))]),_:1})]),_:1}),t(o,{title:"Disabled",source:`<pf-button disabled>Primary disabled</pf-button>
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
<pf-button disabled variant="control">Control disabled</pf-button>`},{default:n(()=>[t(e,{disabled:""},{default:n(()=>[a("Primary disabled")]),_:1}),t(e,{disabled:""},{default:n(()=>[a("Secondary disabled")]),_:1}),t(e,{disabled:"",variant:"tertiary"},{default:n(()=>[a("Tertiary disabled")]),_:1}),t(e,{disabled:"",variant:"danger"},{default:n(()=>[a("Danger disabled")]),_:1}),t(e,{disabled:"",variant:"warning"},{default:n(()=>[a("Warning disabled")]),_:1}),q,N,t(e,{disabled:"",variant:"link"},{icon:n(()=>[t(r(_))]),default:n(()=>[a(" Link disabled ")]),_:1}),t(e,{disabled:"",variant:"link",inline:""},{default:n(()=>[a("Inline link disabled")]),_:1}),t(e,{disabled:"",variant:"plain","aria-label":"Action"},{default:n(()=>[t(r(g))]),_:1}),t(e,{disabled:"",variant:"control"},{default:n(()=>[a("Control disabled")]),_:1})]),_:1}),t(o,{title:"Aria disabled",source:`<pf-button aria-disabled>Primary aria disabled</pf-button>
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
<pf-button aria-disabled variant="control">Control aria disabled</pf-button>`},{default:n(()=>[t(e,{"aria-disabled":""},{default:n(()=>[a("Primary aria disabled")]),_:1}),t(e,{"aria-disabled":""},{default:n(()=>[a("Secondary aria disabled")]),_:1}),t(e,{"aria-disabled":"",variant:"tertiary"},{default:n(()=>[a("Tertiary aria disabled")]),_:1}),t(e,{"aria-disabled":"",variant:"danger"},{default:n(()=>[a("Danger aria disabled")]),_:1}),t(e,{"aria-disabled":"",variant:"warning"},{default:n(()=>[a("Warning aria disabled")]),_:1}),U,K,t(e,{"aria-disabled":"",variant:"link"},{icon:n(()=>[t(r(_))]),default:n(()=>[a(" Link aria disabled ")]),_:1}),t(e,{"aria-disabled":"",variant:"link",inline:""},{default:n(()=>[a("Inline link aria disabled")]),_:1}),t(e,{"aria-disabled":"",variant:"plain","aria-label":"Action"},{default:n(()=>[t(r(g))]),_:1}),t(e,{"aria-disabled":"",variant:"control"},{default:n(()=>[a("Control aria disabled")]),_:1})]),_:1}),t(o,{title:"Aria disable with tooltip",source:`<pf-tooltip
  content="Aria-disabled buttons are like disabled buttons, but focusable. Allows for tooltip support."
>
  <pf-button aria-disabled variant="secondary">Secondary button to core docs</pf-button>
`},{default:n(()=>[t(m,{content:"Aria-disabled buttons are like disabled buttons, but focusable. Allows for tooltip support."},{default:n(()=>[t(e,{"aria-disabled":"",variant:"secondary"},{default:n(()=>[a("Secondary button to core docs")]),_:1})]),_:1})]),_:1}),t(o,{title:"Aria disabled link as button with tooltip",source:`<pf-tooltip content="Aria-disabled link as button with tooltip">
  <pf-button
    component="a"
    aria-disabled
    href="https://pf4.patternfly.org/"
    target="_blank"
    variant="tertiary"
  >
    Tertiary link as button to core docs
  
</pf-tooltip>`},{default:n(()=>[t(m,{content:"Aria-disabled link as button with tooltip"},{default:n(()=>[t(e,{component:"a","aria-disabled":"",href:"https://pf4.patternfly.org/",target:"_blank",variant:"tertiary"},{default:n(()=>[a(" Tertiary link as button to core docs ")]),_:1})]),_:1})]),_:1}),t(o,{title:"Links as buttons",source:`<pf-button
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
`},{default:n(()=>[t(e,{component:"a",href:"https://pf4.patternfly.org/",target:"_blank",variant:"primary"},{default:n(()=>[a(" Link to core docs ")]),_:1}),t(e,{component:"a",href:"https://pf4.patternfly.org/",target:"_blank",variant:"secondary"},{default:n(()=>[a(" Secondary link to core docs ")]),_:1}),t(e,{disabled:"",component:"a",href:"https://pf4.patternfly.org/",target:"_blank",variant:"tertiary"},{default:n(()=>[a(" Tertiary link to core docs ")]),_:1}),t(e,{component:"a",href:"https://pf4.patternfly.org/contribution/#modifiers",variant:"link"},{default:n(()=>[a(" Jump to modifiers in contribution guidelines ")]),_:1})]),_:1}),t(o,{title:"Inline link as span",source:`<p>
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
</p>`},{default:n(()=>[i("p",null,[a(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. "),t(e,{variant:"link",inline:"",component:"span"},{default:n(()=>[a(" This is long button text that needs to be a span so that it will wrap inline with the text around it. ")]),_:1}),a(" Sed hendrerit nisi in cursus maximus. Ut malesuada nisi turpis, in condimentum velit elementum non. ")]),F,i("p",null,[a(" Note that using a "),J,a(" as a button does not fire the "),X,a(" event for Enter or Space keys. "),t(e,{variant:"link",inline:"",component:"span","on-key-down":"{handleKeydown}"},{default:n(()=>[a(" An "),j,a(" event listener is needed for Enter and Space key presses to prevent their default behavior and trigger your code. ")]),_:1}),a(" Pressing the Enter or Space keys on the inline link as span above demonstrates this by triggering an alert. ")])]),_:1}),t(o,{title:"Block level",source:"<pf-button block>Block level button</pf-button>"},{default:n(()=>[t(e,{block:""},{default:n(()=>[a("Block level button")]),_:1})]),_:1}),t(o,{title:"Types",source:`<pf-button type="submit">Submit</pf-button>
<pf-button type="reset">Reset</pf-button>
<pf-button>Default</pf-button>`},{default:n(()=>[t(e,{type:"submit"},{default:n(()=>[a("Submit")]),_:1}),t(e,{type:"reset"},{default:n(()=>[a("Reset")]),_:1}),t(e,null,{default:n(()=>[a("Default")]),_:1})]),_:1}),t(o,{title:"Small",source:`<pf-button variant="primary" small>Primary</pf-button>
<pf-button variant="secondary" small>Secondary</pf-button>
<pf-button variant="tertiary" small>Tertiary</pf-button>
<pf-button variant="danger" small>Danger</pf-button>
<pf-button variant="warning" small>Warning</pf-button>`},{default:n(()=>[t(e,{variant:"primary",small:""},{default:n(()=>[a("Primary")]),_:1}),t(e,{variant:"secondary",small:""},{default:n(()=>[a("Secondary")]),_:1}),t(e,{variant:"tertiary",small:""},{default:n(()=>[a("Tertiary")]),_:1}),t(e,{variant:"danger",small:""},{default:n(()=>[a("Danger")]),_:1}),t(e,{variant:"warning",small:""},{default:n(()=>[a("Warning")]),_:1})]),_:1}),t(o,{title:"Call to action",source:`<pf-button variant="primary" large>Call to action</pf-button>
<pf-button variant="secondary" large>Call to action</pf-button>
<pf-button variant="tertiary" large>Call to action</pf-button>
<pf-button variant="link" large>
  Call to action
  <arrow-right-icon></arrow-right-icon>
</pf-button>`},{default:n(()=>[t(e,{variant:"primary",large:""},{default:n(()=>[a("Call to action")]),_:1}),t(e,{variant:"secondary",large:""},{default:n(()=>[a("Call to action")]),_:1}),t(e,{variant:"tertiary",large:""},{default:n(()=>[a("Call to action")]),_:1}),t(e,{variant:"link",large:""},{default:n(()=>[a(" Call to action "),t(r(R))]),_:1})]),_:1}),t(o,{title:"Progress",source:`<pf-button
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

<pf-button v-if="secondaryLoading" @click="secondaryLoading = false">Stop</pf-button>`},{default:n(()=>[t(e,{"spinner-aria-value-text":s.value?"Loading":void 0,loading:s.value,variant:"primary",onClick:l[0]||(l[0]=v=>s.value=!0)},{default:n(()=>[s.value?(d(),c(b,{key:0},[a("Loading...")],64)):(d(),c(b,{key:1},[a("Click to start loading")],64))]),_:1},8,["spinner-aria-value-text","loading"]),s.value?(d(),y(e,{key:0,onClick:l[1]||(l[1]=v=>s.value=!1)},{default:n(()=>[a("Stop")]),_:1})):h("",!0),G,Q,t(e,{"spinner-aria-value-text":u.value?"Loading":void 0,loading:u.value,variant:"secondary",onClick:l[2]||(l[2]=v=>u.value=!0)},{default:n(()=>[u.value?(d(),c(b,{key:0},[a("Loading...")],64)):(d(),c(b,{key:1},[a("Click to start loading")],64))]),_:1},8,["spinner-aria-value-text","loading"]),u.value?(d(),y(e,{key:1,onClick:l[3]||(l[3]=v=>u.value=!1)},{default:n(()=>[a("Stop")]),_:1})):h("",!0)]),_:1})]),_:1})}}});export{et as default};
