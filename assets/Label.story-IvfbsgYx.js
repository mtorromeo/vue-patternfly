import{C as t}from"./circle-info-icon-yY8_iwOF.js";import{f as m,n as h,a as p,o as _,c as v,w as e,b as o,d as l,u as r,e as c}from"./index-jxZ-gaor.js";const g=c("b",null,"label",-1),C=c("br",null,null,-1),w=c("br",null,null,-1),y=c("br",null,null,-1),G=c("br",null,null,-1),x=c("br",null,null,-1),k=c("br",null,null,-1),B=c("br",null,null,-1),P=c("br",null,null,-1),O=c("br",null,null,-1),R=c("br",null,null,-1),T=c("br",null,null,-1),q=c("br",null,null,-1),L=c("br",null,null,-1),V=c("br",null,null,-1),F=c("br",null,null,-1),N=c("br",null,null,-1),S=c("br",null,null,-1),A=c("br",null,null,-1),I=c("br",null,null,-1),M=c("br",null,null,-1),E=c("br",null,null,-1),H=c("br",null,null,-1),W=c("br",null,null,-1),$=c("br",null,null,-1),j=c("br",null,null,-1),z=c("br",null,null,-1),D=c("br",null,null,-1),J=c("br",null,null,-1),X=m({__name:"Label.story",setup(K){const d=h();function a(u){var i;const b=(i=u.target)==null?void 0:i.closest(".pf-v5-c-label");b instanceof HTMLElement&&d.add({title:`Clicked close button on "${b.innerText}"`,variant:"info"})}return(u,b)=>{const i=p("component-info"),n=p("pf-label"),f=p("story-canvas"),s=p("doc-page");return _(),v(s,{title:"Label"},{description:e(()=>[o("The "),g,o(" component allows users to add specific element captions for user clarity and convenience.")]),apidocs:e(()=>[l(i,{src:"packages/core/src/components/Label.vue",doc:{name:"PfLabel",exportName:"default",displayName:"Label",description:"",tags:{},props:[{name:"color",description:"The color of the label outline/fill",required:!1,type:{name:"TSTypeOperator"},defaultValue:{func:!1,value:"'grey'"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"outline"'},{name:'"filled"'}]},defaultValue:{func:!1,value:"'filled'"}},{name:"tooltipPosition",required:!1,type:{name:"TooltipPosition"},defaultValue:{func:!1,value:"'top'"}},{name:"to",required:!1,type:{name:"RouteLocationRaw"}},{name:"href",required:!1,type:{name:"string"}},{name:"outline",required:!1,type:{name:"boolean"}},{name:"compact",description:"Flag indicating the label is compact.",required:!1,type:{name:"boolean"}},{name:"overflow",description:"Flag indicating if the label is an overflow label.",required:!1,type:{name:"boolean"}},{name:"textMaxWidth",description:"The max width of the label before it is truncated. Can be any valid CSS unit, such as '100%', '100px', or '16ch'.",required:!1,type:{name:"string"}},{name:"closeBtnAriaLabel",description:"Aria label for close button",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Close'"}},{name:"onClose",description:"Callback for when the label is clicked. This should not be passed in if the href or editable props are also passed in.",required:!1,type:{name:"TSFunctionType"}}],slots:[{name:"icon"},{name:"default"},{name:"actions"}],sourceFiles:["../../packages/core/src/components/Label.vue"]}},null,8,["doc"])]),default:e(()=>[l(f,{title:"Filled",source:`<pf-label>Grey</pf-label>
<pf-label>
  <template #icon>
    <circle-info-icon />
  </template>Grey icon
</pf-label>
<pf-label @close="alert">Grey removeable</pf-label>
<pf-label @close="alert">
  <template #icon>
    <circle-info-icon />
  </template>
  Grey icon removeable
</pf-label>
<pf-label href="#filled">Grey link</pf-label>
<pf-label href="#filled" @close="alert">Grey link removeable</pf-label>
<pf-label text-max-width="16ch" @close="alert">
  <template #icon>
    <circle-info-icon />
  </template>
  Grey label with icon that overflows
</pf-label>
<br>
<br>
<pf-label color="blue">Blue</pf-label>
<pf-label color="blue">
  <template #icon>
    <circle-info-icon />
  </template>
  Blue icon
</pf-label>
<pf-label color="blue" @close="alert">Blue removeable</pf-label>
<pf-label color="blue" @close="alert">
  <template #icon>
    <circle-info-icon />
  </template>
  Blue icon removeable
</pf-label>
<pf-label color="blue" href="#filled">Blue link</pf-label>
<pf-label color="blue" href="#filled" @close="alert">Blue link removeable</pf-label>
<pf-label color="blue" text-max-width="16ch" @close="alert">
  <template #icon>
    <circle-info-icon />
  </template>
  Blue label with icon that overflows
</pf-label>
<br>
<br>
<pf-label color="green">Green</pf-label>
<pf-label color="green">
  <template #icon>
    <circle-info-icon />
  </template>
  Green icon
</pf-label>
<pf-label color="green" @close="alert">Green removeable</pf-label>
<pf-label color="green" @close="alert">
  <template #icon>
    <circle-info-icon />
  </template>
  Green icon removeable
</pf-label>
<pf-label color="green" href="#filled">Green link</pf-label>
<pf-label color="green" href="#filled" @close="alert">Green link removeable</pf-label>
<pf-label color="green" text-max-width="16ch" @close="alert">
  <template #icon>
    <circle-info-icon />
  </template>
  Green label with icon that overflows
</pf-label>
<br>
<br>
<pf-label color="orange">Orange</pf-label>
<pf-label color="orange">
  <template #icon>
    <circle-info-icon />
  </template>
  Orange icon
</pf-label>
<pf-label color="orange" @close="alert">Orange removeable</pf-label>
<pf-label color="orange" @close="alert">
  <template #icon>
    <circle-info-icon />
  </template>
  Orange icon removeable
</pf-label>
<pf-label color="orange" href="#filled">Orange link</pf-label>
<pf-label color="orange" href="#filled" @close="alert">Orange link removeable</pf-label>
<pf-label color="orange" text-max-width="16ch" @close="alert">
  <template #icon>
    <circle-info-icon />
  </template>
  Orange label with icon that overflows
</pf-label>
<br>
<br>
<pf-label color="red">Red</pf-label>
<pf-label color="red">
  <template #icon>
    <circle-info-icon />
  </template>
  Red icon
</pf-label>
<pf-label color="red" @close="alert">Red removeable</pf-label>
<pf-label color="red" @close="alert">
  <template #icon>
    <circle-info-icon />
  </template>
  Red icon removeable
</pf-label>
<pf-label color="red" href="#filled">Red link</pf-label>
<pf-label color="red" href="#filled" @close="alert">Red link removeable</pf-label>
<pf-label color="red" text-max-width="16ch" @close="alert">
  <template #icon>
    <circle-info-icon />
  </template>
  Red label with icon that overflows
</pf-label>
<br>
<br>
<pf-label color="purple">Purple</pf-label>
<pf-label color="purple">
  <template #icon>
    <circle-info-icon />
  </template>
  Purple icon
</pf-label>
<pf-label color="purple" @close="alert">Purple removeable</pf-label>
<pf-label color="purple" @close="alert">
  <template #icon>
    <circle-info-icon />
  </template>
  Purple icon removeable
</pf-label>
<pf-label color="purple" href="#filled">Purple link</pf-label>
<pf-label color="purple" href="#filled" @close="alert">Purple link removeable</pf-label>
<pf-label color="purple" text-max-width="16ch" @close="alert">
  <template #icon>
    <circle-info-icon />
  </template>
  Purple label with icon that overflows
</pf-label>
<br>
<br>
<pf-label color="cyan">Cyan</pf-label>
<pf-label color="cyan">
  <template #icon>
    <circle-info-icon />
  </template>
  Cyan icon
</pf-label>
<pf-label color="cyan" @close="alert">Cyan removeable</pf-label>
<pf-label color="cyan" @close="alert">
  <template #icon>
    <circle-info-icon />
  </template>
  Cyan icon removeable
</pf-label>
<pf-label color="cyan" href="#filled">Cyan link</pf-label>
<pf-label color="cyan" href="#filled" @close="alert">Cyan link removeable</pf-label>
<pf-label color="cyan" text-max-width="16ch" @close="alert">
  <template #icon>
    <circle-info-icon />
  </template>
  Cyan label with icon that overflows
</pf-label>
<br>
<br>
<pf-label color="gold">Gold</pf-label>
<pf-label color="gold">
  <template #icon>
    <circle-info-icon />
  </template>
  Gold icon
</pf-label>
<pf-label color="gold" @close="alert">Gold removeable</pf-label>
<pf-label color="gold" @close="alert">
  <template #icon>
    <circle-info-icon />
  </template>
  Gold icon removeable
</pf-label>
<pf-label color="gold" href="#filled">Gold link</pf-label>
<pf-label color="gold" href="#filled" @close="alert">Gold link removeable</pf-label>
<pf-label color="gold" text-max-width="16ch" @close="alert">
  <template #icon>
    <circle-info-icon />
  </template>
  Gold label with icon that overflows
</pf-label>`},{default:e(()=>[l(n,null,{default:e(()=>[o("Grey")]),_:1}),l(n,null,{icon:e(()=>[l(r(t))]),default:e(()=>[o("Grey icon ")]),_:1}),l(n,{onClose:a},{default:e(()=>[o("Grey removeable")]),_:1}),l(n,{onClose:a},{icon:e(()=>[l(r(t))]),default:e(()=>[o(" Grey icon removeable ")]),_:1}),l(n,{href:"#filled"},{default:e(()=>[o("Grey link")]),_:1}),l(n,{href:"#filled",onClose:a},{default:e(()=>[o("Grey link removeable")]),_:1}),l(n,{"text-max-width":"16ch",onClose:a},{icon:e(()=>[l(r(t))]),default:e(()=>[o(" Grey label with icon that overflows ")]),_:1}),C,w,l(n,{color:"blue"},{default:e(()=>[o("Blue")]),_:1}),l(n,{color:"blue"},{icon:e(()=>[l(r(t))]),default:e(()=>[o(" Blue icon ")]),_:1}),l(n,{color:"blue",onClose:a},{default:e(()=>[o("Blue removeable")]),_:1}),l(n,{color:"blue",onClose:a},{icon:e(()=>[l(r(t))]),default:e(()=>[o(" Blue icon removeable ")]),_:1}),l(n,{color:"blue",href:"#filled"},{default:e(()=>[o("Blue link")]),_:1}),l(n,{color:"blue",href:"#filled",onClose:a},{default:e(()=>[o("Blue link removeable")]),_:1}),l(n,{color:"blue","text-max-width":"16ch",onClose:a},{icon:e(()=>[l(r(t))]),default:e(()=>[o(" Blue label with icon that overflows ")]),_:1}),y,G,l(n,{color:"green"},{default:e(()=>[o("Green")]),_:1}),l(n,{color:"green"},{icon:e(()=>[l(r(t))]),default:e(()=>[o(" Green icon ")]),_:1}),l(n,{color:"green",onClose:a},{default:e(()=>[o("Green removeable")]),_:1}),l(n,{color:"green",onClose:a},{icon:e(()=>[l(r(t))]),default:e(()=>[o(" Green icon removeable ")]),_:1}),l(n,{color:"green",href:"#filled"},{default:e(()=>[o("Green link")]),_:1}),l(n,{color:"green",href:"#filled",onClose:a},{default:e(()=>[o("Green link removeable")]),_:1}),l(n,{color:"green","text-max-width":"16ch",onClose:a},{icon:e(()=>[l(r(t))]),default:e(()=>[o(" Green label with icon that overflows ")]),_:1}),x,k,l(n,{color:"orange"},{default:e(()=>[o("Orange")]),_:1}),l(n,{color:"orange"},{icon:e(()=>[l(r(t))]),default:e(()=>[o(" Orange icon ")]),_:1}),l(n,{color:"orange",onClose:a},{default:e(()=>[o("Orange removeable")]),_:1}),l(n,{color:"orange",onClose:a},{icon:e(()=>[l(r(t))]),default:e(()=>[o(" Orange icon removeable ")]),_:1}),l(n,{color:"orange",href:"#filled"},{default:e(()=>[o("Orange link")]),_:1}),l(n,{color:"orange",href:"#filled",onClose:a},{default:e(()=>[o("Orange link removeable")]),_:1}),l(n,{color:"orange","text-max-width":"16ch",onClose:a},{icon:e(()=>[l(r(t))]),default:e(()=>[o(" Orange label with icon that overflows ")]),_:1}),B,P,l(n,{color:"red"},{default:e(()=>[o("Red")]),_:1}),l(n,{color:"red"},{icon:e(()=>[l(r(t))]),default:e(()=>[o(" Red icon ")]),_:1}),l(n,{color:"red",onClose:a},{default:e(()=>[o("Red removeable")]),_:1}),l(n,{color:"red",onClose:a},{icon:e(()=>[l(r(t))]),default:e(()=>[o(" Red icon removeable ")]),_:1}),l(n,{color:"red",href:"#filled"},{default:e(()=>[o("Red link")]),_:1}),l(n,{color:"red",href:"#filled",onClose:a},{default:e(()=>[o("Red link removeable")]),_:1}),l(n,{color:"red","text-max-width":"16ch",onClose:a},{icon:e(()=>[l(r(t))]),default:e(()=>[o(" Red label with icon that overflows ")]),_:1}),O,R,l(n,{color:"purple"},{default:e(()=>[o("Purple")]),_:1}),l(n,{color:"purple"},{icon:e(()=>[l(r(t))]),default:e(()=>[o(" Purple icon ")]),_:1}),l(n,{color:"purple",onClose:a},{default:e(()=>[o("Purple removeable")]),_:1}),l(n,{color:"purple",onClose:a},{icon:e(()=>[l(r(t))]),default:e(()=>[o(" Purple icon removeable ")]),_:1}),l(n,{color:"purple",href:"#filled"},{default:e(()=>[o("Purple link")]),_:1}),l(n,{color:"purple",href:"#filled",onClose:a},{default:e(()=>[o("Purple link removeable")]),_:1}),l(n,{color:"purple","text-max-width":"16ch",onClose:a},{icon:e(()=>[l(r(t))]),default:e(()=>[o(" Purple label with icon that overflows ")]),_:1}),T,q,l(n,{color:"cyan"},{default:e(()=>[o("Cyan")]),_:1}),l(n,{color:"cyan"},{icon:e(()=>[l(r(t))]),default:e(()=>[o(" Cyan icon ")]),_:1}),l(n,{color:"cyan",onClose:a},{default:e(()=>[o("Cyan removeable")]),_:1}),l(n,{color:"cyan",onClose:a},{icon:e(()=>[l(r(t))]),default:e(()=>[o(" Cyan icon removeable ")]),_:1}),l(n,{color:"cyan",href:"#filled"},{default:e(()=>[o("Cyan link")]),_:1}),l(n,{color:"cyan",href:"#filled",onClose:a},{default:e(()=>[o("Cyan link removeable")]),_:1}),l(n,{color:"cyan","text-max-width":"16ch",onClose:a},{icon:e(()=>[l(r(t))]),default:e(()=>[o(" Cyan label with icon that overflows ")]),_:1}),L,V,l(n,{color:"gold"},{default:e(()=>[o("Gold")]),_:1}),l(n,{color:"gold"},{icon:e(()=>[l(r(t))]),default:e(()=>[o(" Gold icon ")]),_:1}),l(n,{color:"gold",onClose:a},{default:e(()=>[o("Gold removeable")]),_:1}),l(n,{color:"gold",onClose:a},{icon:e(()=>[l(r(t))]),default:e(()=>[o(" Gold icon removeable ")]),_:1}),l(n,{color:"gold",href:"#filled"},{default:e(()=>[o("Gold link")]),_:1}),l(n,{color:"gold",href:"#filled",onClose:a},{default:e(()=>[o("Gold link removeable")]),_:1}),l(n,{color:"gold","text-max-width":"16ch",onClose:a},{icon:e(()=>[l(r(t))]),default:e(()=>[o(" Gold label with icon that overflows ")]),_:1})]),_:1}),l(f,{title:"Outline",source:`<pf-label outline>Grey</pf-label>
<pf-label outline>
  <template #icon>
    <circle-info-icon />
  </template>Grey icon
</pf-label>
<pf-label outline @close="alert">Grey removeable</pf-label>
<pf-label outline @close="alert">
  <template #icon>
    <circle-info-icon />
  </template>
  Grey icon removeable
</pf-label>
<pf-label outline href="#filled">Grey link</pf-label>
<pf-label outline href="#filled" @close="alert">Grey link removeable</pf-label>
<pf-label outline text-max-width="16ch" @close="alert">
  <template #icon>
    <circle-info-icon />
  </template>
  Grey label with icon that overflows
</pf-label>
<br>
<br>
<pf-label outline color="blue">Blue</pf-label>
<pf-label outline color="blue">
  <template #icon>
    <circle-info-icon />
  </template>
  Blue icon
</pf-label>
<pf-label outline color="blue" @close="alert">Blue removeable</pf-label>
<pf-label outline color="blue" @close="alert">
  <template #icon>
    <circle-info-icon />
  </template>
  Blue icon removeable
</pf-label>
<pf-label outline color="blue" href="#filled">Blue link</pf-label>
<pf-label outline color="blue" href="#filled" @close="alert">Blue link removeable</pf-label>
<pf-label outline color="blue" text-max-width="16ch" @close="alert">
  <template #icon>
    <circle-info-icon />
  </template>
  Blue label with icon that overflows
</pf-label>
<br>
<br>
<pf-label outline color="green">Green</pf-label>
<pf-label outline color="green">
  <template #icon>
    <circle-info-icon />
  </template>
  Green icon
</pf-label>
<pf-label outline color="green" @close="alert">Green removeable</pf-label>
<pf-label outline color="green" @close="alert">
  <template #icon>
    <circle-info-icon />
  </template>
  Green icon removeable
</pf-label>
<pf-label outline color="green" href="#filled">Green link</pf-label>
<pf-label outline color="green" href="#filled" @close="alert">Green link removeable</pf-label>
<pf-label outline color="green" text-max-width="16ch" @close="alert">
  <template #icon>
    <circle-info-icon />
  </template>
  Green label with icon that overflows
</pf-label>
<br>
<br>
<pf-label outline color="orange">Orange</pf-label>
<pf-label outline color="orange">
  <template #icon>
    <circle-info-icon />
  </template>
  Orange icon
</pf-label>
<pf-label outline color="orange" @close="alert">Orange removeable</pf-label>
<pf-label outline color="orange" @close="alert">
  <template #icon>
    <circle-info-icon />
  </template>
  Orange icon removeable
</pf-label>
<pf-label outline color="orange" href="#filled">Orange link</pf-label>
<pf-label outline color="orange" href="#filled" @close="alert">Orange link removeable</pf-label>
<pf-label outline color="orange" text-max-width="16ch" @close="alert">
  <template #icon>
    <circle-info-icon />
  </template>
  Orange label with icon that overflows
</pf-label>
<br>
<br>
<pf-label outline color="red">Red</pf-label>
<pf-label outline color="red">
  <template #icon>
    <circle-info-icon />
  </template>
  Red icon
</pf-label>
<pf-label outline color="red" @close="alert">Red removeable</pf-label>
<pf-label outline color="red" @close="alert">
  <template #icon>
    <circle-info-icon />
  </template>
  Red icon removeable
</pf-label>
<pf-label outline color="red" href="#filled">Red link</pf-label>
<pf-label outline color="red" href="#filled" @close="alert">Red link removeable</pf-label>
<pf-label outline color="red" text-max-width="16ch" @close="alert">
  <template #icon>
    <circle-info-icon />
  </template>
  Red label with icon that overflows
</pf-label>
<br>
<br>
<pf-label outline color="purple">Purple</pf-label>
<pf-label outline color="purple">
  <template #icon>
    <circle-info-icon />
  </template>
  Purple icon
</pf-label>
<pf-label outline color="purple" @close="alert">Purple removeable</pf-label>
<pf-label outline color="purple" @close="alert">
  <template #icon>
    <circle-info-icon />
  </template>
  Purple icon removeable
</pf-label>
<pf-label outline color="purple" href="#filled">Purple link</pf-label>
<pf-label outline color="purple" href="#filled" @close="alert">Purple link removeable</pf-label>
<pf-label outline color="purple" text-max-width="16ch" @close="alert">
  <template #icon>
    <circle-info-icon />
  </template>
  Purple label with icon that overflows
</pf-label>
<br>
<br>
<pf-label outline color="cyan">Cyan</pf-label>
<pf-label outline color="cyan">
  <template #icon>
    <circle-info-icon />
  </template>
  Cyan icon
</pf-label>
<pf-label outline color="cyan" @close="alert">Cyan removeable</pf-label>
<pf-label outline color="cyan" @close="alert">
  <template #icon>
    <circle-info-icon />
  </template>
  Cyan icon removeable
</pf-label>
<pf-label outline color="cyan" href="#filled">Cyan link</pf-label>
<pf-label outline color="cyan" href="#filled" @close="alert">Cyan link removeable</pf-label>
<pf-label outline color="cyan" text-max-width="16ch" @close="alert">
  <template #icon>
    <circle-info-icon />
  </template>
  Cyan label with icon that overflows
</pf-label>
<br>
<br>
<pf-label outline color="gold">Gold</pf-label>
<pf-label outline color="gold">
  <template #icon>
    <circle-info-icon />
  </template>
  Gold icon
</pf-label>
<pf-label outline color="gold" @close="alert">Gold removeable</pf-label>
<pf-label outline color="gold" @close="alert">
  <template #icon>
    <circle-info-icon />
  </template>
  Gold icon removeable
</pf-label>
<pf-label outline color="gold" href="#filled">Gold link</pf-label>
<pf-label outline color="gold" href="#filled" @close="alert">Gold link removeable</pf-label>
<pf-label outline color="gold" text-max-width="16ch" @close="alert">
  <template #icon>
    <circle-info-icon />
  </template>
  Gold label with icon that overflows
</pf-label>`},{default:e(()=>[l(n,{outline:""},{default:e(()=>[o("Grey")]),_:1}),l(n,{outline:""},{icon:e(()=>[l(r(t))]),default:e(()=>[o("Grey icon ")]),_:1}),l(n,{outline:"",onClose:a},{default:e(()=>[o("Grey removeable")]),_:1}),l(n,{outline:"",onClose:a},{icon:e(()=>[l(r(t))]),default:e(()=>[o(" Grey icon removeable ")]),_:1}),l(n,{outline:"",href:"#filled"},{default:e(()=>[o("Grey link")]),_:1}),l(n,{outline:"",href:"#filled",onClose:a},{default:e(()=>[o("Grey link removeable")]),_:1}),l(n,{outline:"","text-max-width":"16ch",onClose:a},{icon:e(()=>[l(r(t))]),default:e(()=>[o(" Grey label with icon that overflows ")]),_:1}),F,N,l(n,{outline:"",color:"blue"},{default:e(()=>[o("Blue")]),_:1}),l(n,{outline:"",color:"blue"},{icon:e(()=>[l(r(t))]),default:e(()=>[o(" Blue icon ")]),_:1}),l(n,{outline:"",color:"blue",onClose:a},{default:e(()=>[o("Blue removeable")]),_:1}),l(n,{outline:"",color:"blue",onClose:a},{icon:e(()=>[l(r(t))]),default:e(()=>[o(" Blue icon removeable ")]),_:1}),l(n,{outline:"",color:"blue",href:"#filled"},{default:e(()=>[o("Blue link")]),_:1}),l(n,{outline:"",color:"blue",href:"#filled",onClose:a},{default:e(()=>[o("Blue link removeable")]),_:1}),l(n,{outline:"",color:"blue","text-max-width":"16ch",onClose:a},{icon:e(()=>[l(r(t))]),default:e(()=>[o(" Blue label with icon that overflows ")]),_:1}),S,A,l(n,{outline:"",color:"green"},{default:e(()=>[o("Green")]),_:1}),l(n,{outline:"",color:"green"},{icon:e(()=>[l(r(t))]),default:e(()=>[o(" Green icon ")]),_:1}),l(n,{outline:"",color:"green",onClose:a},{default:e(()=>[o("Green removeable")]),_:1}),l(n,{outline:"",color:"green",onClose:a},{icon:e(()=>[l(r(t))]),default:e(()=>[o(" Green icon removeable ")]),_:1}),l(n,{outline:"",color:"green",href:"#filled"},{default:e(()=>[o("Green link")]),_:1}),l(n,{outline:"",color:"green",href:"#filled",onClose:a},{default:e(()=>[o("Green link removeable")]),_:1}),l(n,{outline:"",color:"green","text-max-width":"16ch",onClose:a},{icon:e(()=>[l(r(t))]),default:e(()=>[o(" Green label with icon that overflows ")]),_:1}),I,M,l(n,{outline:"",color:"orange"},{default:e(()=>[o("Orange")]),_:1}),l(n,{outline:"",color:"orange"},{icon:e(()=>[l(r(t))]),default:e(()=>[o(" Orange icon ")]),_:1}),l(n,{outline:"",color:"orange",onClose:a},{default:e(()=>[o("Orange removeable")]),_:1}),l(n,{outline:"",color:"orange",onClose:a},{icon:e(()=>[l(r(t))]),default:e(()=>[o(" Orange icon removeable ")]),_:1}),l(n,{outline:"",color:"orange",href:"#filled"},{default:e(()=>[o("Orange link")]),_:1}),l(n,{outline:"",color:"orange",href:"#filled",onClose:a},{default:e(()=>[o("Orange link removeable")]),_:1}),l(n,{outline:"",color:"orange","text-max-width":"16ch",onClose:a},{icon:e(()=>[l(r(t))]),default:e(()=>[o(" Orange label with icon that overflows ")]),_:1}),E,H,l(n,{outline:"",color:"red"},{default:e(()=>[o("Red")]),_:1}),l(n,{outline:"",color:"red"},{icon:e(()=>[l(r(t))]),default:e(()=>[o(" Red icon ")]),_:1}),l(n,{outline:"",color:"red",onClose:a},{default:e(()=>[o("Red removeable")]),_:1}),l(n,{outline:"",color:"red",onClose:a},{icon:e(()=>[l(r(t))]),default:e(()=>[o(" Red icon removeable ")]),_:1}),l(n,{outline:"",color:"red",href:"#filled"},{default:e(()=>[o("Red link")]),_:1}),l(n,{outline:"",color:"red",href:"#filled",onClose:a},{default:e(()=>[o("Red link removeable")]),_:1}),l(n,{outline:"",color:"red","text-max-width":"16ch",onClose:a},{icon:e(()=>[l(r(t))]),default:e(()=>[o(" Red label with icon that overflows ")]),_:1}),W,$,l(n,{outline:"",color:"purple"},{default:e(()=>[o("Purple")]),_:1}),l(n,{outline:"",color:"purple"},{icon:e(()=>[l(r(t))]),default:e(()=>[o(" Purple icon ")]),_:1}),l(n,{outline:"",color:"purple",onClose:a},{default:e(()=>[o("Purple removeable")]),_:1}),l(n,{outline:"",color:"purple",onClose:a},{icon:e(()=>[l(r(t))]),default:e(()=>[o(" Purple icon removeable ")]),_:1}),l(n,{outline:"",color:"purple",href:"#filled"},{default:e(()=>[o("Purple link")]),_:1}),l(n,{outline:"",color:"purple",href:"#filled",onClose:a},{default:e(()=>[o("Purple link removeable")]),_:1}),l(n,{outline:"",color:"purple","text-max-width":"16ch",onClose:a},{icon:e(()=>[l(r(t))]),default:e(()=>[o(" Purple label with icon that overflows ")]),_:1}),j,z,l(n,{outline:"",color:"cyan"},{default:e(()=>[o("Cyan")]),_:1}),l(n,{outline:"",color:"cyan"},{icon:e(()=>[l(r(t))]),default:e(()=>[o(" Cyan icon ")]),_:1}),l(n,{outline:"",color:"cyan",onClose:a},{default:e(()=>[o("Cyan removeable")]),_:1}),l(n,{outline:"",color:"cyan",onClose:a},{icon:e(()=>[l(r(t))]),default:e(()=>[o(" Cyan icon removeable ")]),_:1}),l(n,{outline:"",color:"cyan",href:"#filled"},{default:e(()=>[o("Cyan link")]),_:1}),l(n,{outline:"",color:"cyan",href:"#filled",onClose:a},{default:e(()=>[o("Cyan link removeable")]),_:1}),l(n,{outline:"",color:"cyan","text-max-width":"16ch",onClose:a},{icon:e(()=>[l(r(t))]),default:e(()=>[o(" Cyan label with icon that overflows ")]),_:1}),D,J,l(n,{outline:"",color:"gold"},{default:e(()=>[o("Gold")]),_:1}),l(n,{outline:"",color:"gold"},{icon:e(()=>[l(r(t))]),default:e(()=>[o(" Gold icon ")]),_:1}),l(n,{outline:"",color:"gold",onClose:a},{default:e(()=>[o("Gold removeable")]),_:1}),l(n,{outline:"",color:"gold",onClose:a},{icon:e(()=>[l(r(t))]),default:e(()=>[o(" Gold icon removeable ")]),_:1}),l(n,{outline:"",color:"gold",href:"#filled"},{default:e(()=>[o("Gold link")]),_:1}),l(n,{outline:"",color:"gold",href:"#filled",onClose:a},{default:e(()=>[o("Gold link removeable")]),_:1}),l(n,{outline:"",color:"gold","text-max-width":"16ch",onClose:a},{icon:e(()=>[l(r(t))]),default:e(()=>[o(" Gold label with icon that overflows ")]),_:1})]),_:1}),l(f,{title:"Compact",source:`<pf-label compact>Compact</pf-label>
<pf-label compact>
  <template #icon>
    <circle-info-icon />
  </template>Compact icon
</pf-label>
<pf-label compact @close="alert">Compact removeable</pf-label>
<pf-label compact @close="alert">
  <template #icon>
    <circle-info-icon />
  </template>
  Compact icon removeable
</pf-label>
<pf-label compact href="#filled">Compact link</pf-label>
<pf-label compact href="#filled" @close="alert">Compact link removeable</pf-label>
<pf-label compact text-max-width="16ch" @close="alert">
  <template #icon>
    <circle-info-icon />
  </template>
  Compact label with icon that overflows
</pf-label>`},{default:e(()=>[l(n,{compact:""},{default:e(()=>[o("Compact")]),_:1}),l(n,{compact:""},{icon:e(()=>[l(r(t))]),default:e(()=>[o("Compact icon ")]),_:1}),l(n,{compact:"",onClose:a},{default:e(()=>[o("Compact removeable")]),_:1}),l(n,{compact:"",onClose:a},{icon:e(()=>[l(r(t))]),default:e(()=>[o(" Compact icon removeable ")]),_:1}),l(n,{compact:"",href:"#filled"},{default:e(()=>[o("Compact link")]),_:1}),l(n,{compact:"",href:"#filled",onClose:a},{default:e(()=>[o("Compact link removeable")]),_:1}),l(n,{compact:"","text-max-width":"16ch",onClose:a},{icon:e(()=>[l(r(t))]),default:e(()=>[o(" Compact label with icon that overflows ")]),_:1})]),_:1}),l(f,{title:"Truncated",source:'<pf-label text-max-width="16ch" tooltip-position="right">Label is too long to fit in the label</pf-label>'},{default:e(()=>[l(n,{"text-max-width":"16ch","tooltip-position":"right"},{default:e(()=>[o("Label is too long to fit in the label")]),_:1})]),_:1})]),_:1})}}});export{X as default};
