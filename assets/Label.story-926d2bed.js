import{c as s}from"./createIcon-2047615e.js";import{e as h,m as _,a as p,o as v,c as g,w as l,b as e,g as n,u as a,d as t}from"./index-d13fed59.js";const C={name:"CircleInfoIcon",height:512,width:512,svgPath:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z",yOffset:0,xOffset:0},w=s(C),i=w,y=t("br",null,null,-1),G=t("br",null,null,-1),x=t("br",null,null,-1),k=t("br",null,null,-1),B=t("br",null,null,-1),O=t("br",null,null,-1),P=t("br",null,null,-1),R=t("br",null,null,-1),I=t("br",null,null,-1),L=t("br",null,null,-1),T=t("br",null,null,-1),V=t("br",null,null,-1),z=t("br",null,null,-1),H=t("br",null,null,-1),M=t("br",null,null,-1),N=t("br",null,null,-1),A=t("br",null,null,-1),$=t("br",null,null,-1),E=t("br",null,null,-1),F=t("br",null,null,-1),S=t("br",null,null,-1),j=t("br",null,null,-1),q=t("br",null,null,-1),D=t("br",null,null,-1),J=t("br",null,null,-1),K=t("br",null,null,-1),Q=t("br",null,null,-1),U=t("br",null,null,-1),Z=h({__name:"Label.story",setup(W){const d=_();function c(u){var r;const b=(r=u.target)==null?void 0:r.closest(".pf-v5-c-label");b instanceof HTMLElement&&d.add({title:`Clicked close button on "${b.innerText}"`,variant:"info"})}return(u,b)=>{const r=p("component-title"),o=p("pf-label"),f=p("story-canvas"),m=p("doc-page");return v(),g(m,{title:"Label"},{default:l(()=>[e(r,{name:"pf-label"}),e(f,{title:"Filled",source:`<pf-label>Grey</pf-label>
<pf-label>
  <template #icon>
    <circle-info-icon></circle-info-icon>
  </template>Grey icon
</pf-label>
<pf-label @close="alert">Grey removeable</pf-label>
<pf-label @close="alert">
  <template #icon>
    <circle-info-icon></circle-info-icon>
  </template>
  Grey icon removeable
</pf-label>
<pf-label href="#filled">Grey link</pf-label>
<pf-label href="#filled" @close="alert">Grey link removeable</pf-label>
<pf-label text-max-width="16ch" @close="alert">
  <template #icon>
    <circle-info-icon></circle-info-icon>
  </template>
  Grey label with icon that overflows
</pf-label>
<br>
<br>
<pf-label color="blue">Blue</pf-label>
<pf-label color="blue">
  <template #icon>
    <circle-info-icon></circle-info-icon>
  </template>
  Blue icon
</pf-label>
<pf-label color="blue" @close="alert">Blue removeable</pf-label>
<pf-label color="blue" @close="alert">
  <template #icon>
    <circle-info-icon></circle-info-icon>
  </template>
  Blue icon removeable
</pf-label>
<pf-label color="blue" href="#filled">Blue link</pf-label>
<pf-label color="blue" href="#filled" @close="alert">Blue link removeable</pf-label>
<pf-label color="blue" text-max-width="16ch" @close="alert">
  <template #icon>
    <circle-info-icon></circle-info-icon>
  </template>
  Blue label with icon that overflows
</pf-label>
<br>
<br>
<pf-label color="green">Green</pf-label>
<pf-label color="green">
  <template #icon>
    <circle-info-icon></circle-info-icon>
  </template>
  Green icon
</pf-label>
<pf-label color="green" @close="alert">Green removeable</pf-label>
<pf-label color="green" @close="alert">
  <template #icon>
    <circle-info-icon></circle-info-icon>
  </template>
  Green icon removeable
</pf-label>
<pf-label color="green" href="#filled">Green link</pf-label>
<pf-label color="green" href="#filled" @close="alert">Green link removeable</pf-label>
<pf-label color="green" text-max-width="16ch" @close="alert">
  <template #icon>
    <circle-info-icon></circle-info-icon>
  </template>
  Green label with icon that overflows
</pf-label>
<br>
<br>
<pf-label color="orange">Orange</pf-label>
<pf-label color="orange">
  <template #icon>
    <circle-info-icon></circle-info-icon>
  </template>
  Orange icon
</pf-label>
<pf-label color="orange" @close="alert">Orange removeable</pf-label>
<pf-label color="orange" @close="alert">
  <template #icon>
    <circle-info-icon></circle-info-icon>
  </template>
  Orange icon removeable
</pf-label>
<pf-label color="orange" href="#filled">Orange link</pf-label>
<pf-label color="orange" href="#filled" @close="alert">Orange link removeable</pf-label>
<pf-label color="orange" text-max-width="16ch" @close="alert">
  <template #icon>
    <circle-info-icon></circle-info-icon>
  </template>
  Orange label with icon that overflows
</pf-label>
<br>
<br>
<pf-label color="red">Red</pf-label>
<pf-label color="red">
  <template #icon>
    <circle-info-icon></circle-info-icon>
  </template>
  Red icon
</pf-label>
<pf-label color="red" @close="alert">Red removeable</pf-label>
<pf-label color="red" @close="alert">
  <template #icon>
    <circle-info-icon></circle-info-icon>
  </template>
  Red icon removeable
</pf-label>
<pf-label color="red" href="#filled">Red link</pf-label>
<pf-label color="red" href="#filled" @close="alert">Red link removeable</pf-label>
<pf-label color="red" text-max-width="16ch" @close="alert">
  <template #icon>
    <circle-info-icon></circle-info-icon>
  </template>
  Red label with icon that overflows
</pf-label>
<br>
<br>
<pf-label color="purple">Purple</pf-label>
<pf-label color="purple">
  <template #icon>
    <circle-info-icon></circle-info-icon>
  </template>
  Purple icon
</pf-label>
<pf-label color="purple" @close="alert">Purple removeable</pf-label>
<pf-label color="purple" @close="alert">
  <template #icon>
    <circle-info-icon></circle-info-icon>
  </template>
  Purple icon removeable
</pf-label>
<pf-label color="purple" href="#filled">Purple link</pf-label>
<pf-label color="purple" href="#filled" @close="alert">Purple link removeable</pf-label>
<pf-label color="purple" text-max-width="16ch" @close="alert">
  <template #icon>
    <circle-info-icon></circle-info-icon>
  </template>
  Purple label with icon that overflows
</pf-label>
<br>
<br>
<pf-label color="cyan">Cyan</pf-label>
<pf-label color="cyan">
  <template #icon>
    <circle-info-icon></circle-info-icon>
  </template>
  Cyan icon
</pf-label>
<pf-label color="cyan" @close="alert">Cyan removeable</pf-label>
<pf-label color="cyan" @close="alert">
  <template #icon>
    <circle-info-icon></circle-info-icon>
  </template>
  Cyan icon removeable
</pf-label>
<pf-label color="cyan" href="#filled">Cyan link</pf-label>
<pf-label color="cyan" href="#filled" @close="alert">Cyan link removeable</pf-label>
<pf-label color="cyan" text-max-width="16ch" @close="alert">
  <template #icon>
    <circle-info-icon></circle-info-icon>
  </template>
  Cyan label with icon that overflows
</pf-label>
<br>
<br>
<pf-label color="gold">Gold</pf-label>
<pf-label color="gold">
  <template #icon>
    <circle-info-icon></circle-info-icon>
  </template>
  Gold icon
</pf-label>
<pf-label color="gold" @close="alert">Gold removeable</pf-label>
<pf-label color="gold" @close="alert">
  <template #icon>
    <circle-info-icon></circle-info-icon>
  </template>
  Gold icon removeable
</pf-label>
<pf-label color="gold" href="#filled">Gold link</pf-label>
<pf-label color="gold" href="#filled" @close="alert">Gold link removeable</pf-label>
<pf-label color="gold" text-max-width="16ch" @close="alert">
  <template #icon>
    <circle-info-icon></circle-info-icon>
  </template>
  Gold label with icon that overflows
</pf-label>`},{default:l(()=>[e(o,null,{default:l(()=>[n("Grey")]),_:1}),e(o,null,{icon:l(()=>[e(a(i))]),default:l(()=>[n("Grey icon ")]),_:1}),e(o,{onClose:c},{default:l(()=>[n("Grey removeable")]),_:1}),e(o,{onClose:c},{icon:l(()=>[e(a(i))]),default:l(()=>[n(" Grey icon removeable ")]),_:1}),e(o,{href:"#filled"},{default:l(()=>[n("Grey link")]),_:1}),e(o,{href:"#filled",onClose:c},{default:l(()=>[n("Grey link removeable")]),_:1}),e(o,{"text-max-width":"16ch",onClose:c},{icon:l(()=>[e(a(i))]),default:l(()=>[n(" Grey label with icon that overflows ")]),_:1}),y,G,e(o,{color:"blue"},{default:l(()=>[n("Blue")]),_:1}),e(o,{color:"blue"},{icon:l(()=>[e(a(i))]),default:l(()=>[n(" Blue icon ")]),_:1}),e(o,{color:"blue",onClose:c},{default:l(()=>[n("Blue removeable")]),_:1}),e(o,{color:"blue",onClose:c},{icon:l(()=>[e(a(i))]),default:l(()=>[n(" Blue icon removeable ")]),_:1}),e(o,{color:"blue",href:"#filled"},{default:l(()=>[n("Blue link")]),_:1}),e(o,{color:"blue",href:"#filled",onClose:c},{default:l(()=>[n("Blue link removeable")]),_:1}),e(o,{color:"blue","text-max-width":"16ch",onClose:c},{icon:l(()=>[e(a(i))]),default:l(()=>[n(" Blue label with icon that overflows ")]),_:1}),x,k,e(o,{color:"green"},{default:l(()=>[n("Green")]),_:1}),e(o,{color:"green"},{icon:l(()=>[e(a(i))]),default:l(()=>[n(" Green icon ")]),_:1}),e(o,{color:"green",onClose:c},{default:l(()=>[n("Green removeable")]),_:1}),e(o,{color:"green",onClose:c},{icon:l(()=>[e(a(i))]),default:l(()=>[n(" Green icon removeable ")]),_:1}),e(o,{color:"green",href:"#filled"},{default:l(()=>[n("Green link")]),_:1}),e(o,{color:"green",href:"#filled",onClose:c},{default:l(()=>[n("Green link removeable")]),_:1}),e(o,{color:"green","text-max-width":"16ch",onClose:c},{icon:l(()=>[e(a(i))]),default:l(()=>[n(" Green label with icon that overflows ")]),_:1}),B,O,e(o,{color:"orange"},{default:l(()=>[n("Orange")]),_:1}),e(o,{color:"orange"},{icon:l(()=>[e(a(i))]),default:l(()=>[n(" Orange icon ")]),_:1}),e(o,{color:"orange",onClose:c},{default:l(()=>[n("Orange removeable")]),_:1}),e(o,{color:"orange",onClose:c},{icon:l(()=>[e(a(i))]),default:l(()=>[n(" Orange icon removeable ")]),_:1}),e(o,{color:"orange",href:"#filled"},{default:l(()=>[n("Orange link")]),_:1}),e(o,{color:"orange",href:"#filled",onClose:c},{default:l(()=>[n("Orange link removeable")]),_:1}),e(o,{color:"orange","text-max-width":"16ch",onClose:c},{icon:l(()=>[e(a(i))]),default:l(()=>[n(" Orange label with icon that overflows ")]),_:1}),P,R,e(o,{color:"red"},{default:l(()=>[n("Red")]),_:1}),e(o,{color:"red"},{icon:l(()=>[e(a(i))]),default:l(()=>[n(" Red icon ")]),_:1}),e(o,{color:"red",onClose:c},{default:l(()=>[n("Red removeable")]),_:1}),e(o,{color:"red",onClose:c},{icon:l(()=>[e(a(i))]),default:l(()=>[n(" Red icon removeable ")]),_:1}),e(o,{color:"red",href:"#filled"},{default:l(()=>[n("Red link")]),_:1}),e(o,{color:"red",href:"#filled",onClose:c},{default:l(()=>[n("Red link removeable")]),_:1}),e(o,{color:"red","text-max-width":"16ch",onClose:c},{icon:l(()=>[e(a(i))]),default:l(()=>[n(" Red label with icon that overflows ")]),_:1}),I,L,e(o,{color:"purple"},{default:l(()=>[n("Purple")]),_:1}),e(o,{color:"purple"},{icon:l(()=>[e(a(i))]),default:l(()=>[n(" Purple icon ")]),_:1}),e(o,{color:"purple",onClose:c},{default:l(()=>[n("Purple removeable")]),_:1}),e(o,{color:"purple",onClose:c},{icon:l(()=>[e(a(i))]),default:l(()=>[n(" Purple icon removeable ")]),_:1}),e(o,{color:"purple",href:"#filled"},{default:l(()=>[n("Purple link")]),_:1}),e(o,{color:"purple",href:"#filled",onClose:c},{default:l(()=>[n("Purple link removeable")]),_:1}),e(o,{color:"purple","text-max-width":"16ch",onClose:c},{icon:l(()=>[e(a(i))]),default:l(()=>[n(" Purple label with icon that overflows ")]),_:1}),T,V,e(o,{color:"cyan"},{default:l(()=>[n("Cyan")]),_:1}),e(o,{color:"cyan"},{icon:l(()=>[e(a(i))]),default:l(()=>[n(" Cyan icon ")]),_:1}),e(o,{color:"cyan",onClose:c},{default:l(()=>[n("Cyan removeable")]),_:1}),e(o,{color:"cyan",onClose:c},{icon:l(()=>[e(a(i))]),default:l(()=>[n(" Cyan icon removeable ")]),_:1}),e(o,{color:"cyan",href:"#filled"},{default:l(()=>[n("Cyan link")]),_:1}),e(o,{color:"cyan",href:"#filled",onClose:c},{default:l(()=>[n("Cyan link removeable")]),_:1}),e(o,{color:"cyan","text-max-width":"16ch",onClose:c},{icon:l(()=>[e(a(i))]),default:l(()=>[n(" Cyan label with icon that overflows ")]),_:1}),z,H,e(o,{color:"gold"},{default:l(()=>[n("Gold")]),_:1}),e(o,{color:"gold"},{icon:l(()=>[e(a(i))]),default:l(()=>[n(" Gold icon ")]),_:1}),e(o,{color:"gold",onClose:c},{default:l(()=>[n("Gold removeable")]),_:1}),e(o,{color:"gold",onClose:c},{icon:l(()=>[e(a(i))]),default:l(()=>[n(" Gold icon removeable ")]),_:1}),e(o,{color:"gold",href:"#filled"},{default:l(()=>[n("Gold link")]),_:1}),e(o,{color:"gold",href:"#filled",onClose:c},{default:l(()=>[n("Gold link removeable")]),_:1}),e(o,{color:"gold","text-max-width":"16ch",onClose:c},{icon:l(()=>[e(a(i))]),default:l(()=>[n(" Gold label with icon that overflows ")]),_:1})]),_:1}),e(f,{title:"Outline",source:`<pf-label outline>Grey</pf-label>
<pf-label outline>
  <template #icon>
    <circle-info-icon></circle-info-icon>
  </template>Grey icon
</pf-label>
<pf-label outline @close="alert">Grey removeable</pf-label>
<pf-label outline @close="alert">
  <template #icon>
    <circle-info-icon></circle-info-icon>
  </template>
  Grey icon removeable
</pf-label>
<pf-label outline href="#filled">Grey link</pf-label>
<pf-label outline href="#filled" @close="alert">Grey link removeable</pf-label>
<pf-label outline text-max-width="16ch" @close="alert">
  <template #icon>
    <circle-info-icon></circle-info-icon>
  </template>
  Grey label with icon that overflows
</pf-label>
<br>
<br>
<pf-label outline color="blue">Blue</pf-label>
<pf-label outline color="blue">
  <template #icon>
    <circle-info-icon></circle-info-icon>
  </template>
  Blue icon
</pf-label>
<pf-label outline color="blue" @close="alert">Blue removeable</pf-label>
<pf-label outline color="blue" @close="alert">
  <template #icon>
    <circle-info-icon></circle-info-icon>
  </template>
  Blue icon removeable
</pf-label>
<pf-label outline color="blue" href="#filled">Blue link</pf-label>
<pf-label outline color="blue" href="#filled" @close="alert">Blue link removeable</pf-label>
<pf-label outline color="blue" text-max-width="16ch" @close="alert">
  <template #icon>
    <circle-info-icon></circle-info-icon>
  </template>
  Blue label with icon that overflows
</pf-label>
<br>
<br>
<pf-label outline color="green">Green</pf-label>
<pf-label outline color="green">
  <template #icon>
    <circle-info-icon></circle-info-icon>
  </template>
  Green icon
</pf-label>
<pf-label outline color="green" @close="alert">Green removeable</pf-label>
<pf-label outline color="green" @close="alert">
  <template #icon>
    <circle-info-icon></circle-info-icon>
  </template>
  Green icon removeable
</pf-label>
<pf-label outline color="green" href="#filled">Green link</pf-label>
<pf-label outline color="green" href="#filled" @close="alert">Green link removeable</pf-label>
<pf-label outline color="green" text-max-width="16ch" @close="alert">
  <template #icon>
    <circle-info-icon></circle-info-icon>
  </template>
  Green label with icon that overflows
</pf-label>
<br>
<br>
<pf-label outline color="orange">Orange</pf-label>
<pf-label outline color="orange">
  <template #icon>
    <circle-info-icon></circle-info-icon>
  </template>
  Orange icon
</pf-label>
<pf-label outline color="orange" @close="alert">Orange removeable</pf-label>
<pf-label outline color="orange" @close="alert">
  <template #icon>
    <circle-info-icon></circle-info-icon>
  </template>
  Orange icon removeable
</pf-label>
<pf-label outline color="orange" href="#filled">Orange link</pf-label>
<pf-label outline color="orange" href="#filled" @close="alert">Orange link removeable</pf-label>
<pf-label outline color="orange" text-max-width="16ch" @close="alert">
  <template #icon>
    <circle-info-icon></circle-info-icon>
  </template>
  Orange label with icon that overflows
</pf-label>
<br>
<br>
<pf-label outline color="red">Red</pf-label>
<pf-label outline color="red">
  <template #icon>
    <circle-info-icon></circle-info-icon>
  </template>
  Red icon
</pf-label>
<pf-label outline color="red" @close="alert">Red removeable</pf-label>
<pf-label outline color="red" @close="alert">
  <template #icon>
    <circle-info-icon></circle-info-icon>
  </template>
  Red icon removeable
</pf-label>
<pf-label outline color="red" href="#filled">Red link</pf-label>
<pf-label outline color="red" href="#filled" @close="alert">Red link removeable</pf-label>
<pf-label outline color="red" text-max-width="16ch" @close="alert">
  <template #icon>
    <circle-info-icon></circle-info-icon>
  </template>
  Red label with icon that overflows
</pf-label>
<br>
<br>
<pf-label outline color="purple">Purple</pf-label>
<pf-label outline color="purple">
  <template #icon>
    <circle-info-icon></circle-info-icon>
  </template>
  Purple icon
</pf-label>
<pf-label outline color="purple" @close="alert">Purple removeable</pf-label>
<pf-label outline color="purple" @close="alert">
  <template #icon>
    <circle-info-icon></circle-info-icon>
  </template>
  Purple icon removeable
</pf-label>
<pf-label outline color="purple" href="#filled">Purple link</pf-label>
<pf-label outline color="purple" href="#filled" @close="alert">Purple link removeable</pf-label>
<pf-label outline color="purple" text-max-width="16ch" @close="alert">
  <template #icon>
    <circle-info-icon></circle-info-icon>
  </template>
  Purple label with icon that overflows
</pf-label>
<br>
<br>
<pf-label outline color="cyan">Cyan</pf-label>
<pf-label outline color="cyan">
  <template #icon>
    <circle-info-icon></circle-info-icon>
  </template>
  Cyan icon
</pf-label>
<pf-label outline color="cyan" @close="alert">Cyan removeable</pf-label>
<pf-label outline color="cyan" @close="alert">
  <template #icon>
    <circle-info-icon></circle-info-icon>
  </template>
  Cyan icon removeable
</pf-label>
<pf-label outline color="cyan" href="#filled">Cyan link</pf-label>
<pf-label outline color="cyan" href="#filled" @close="alert">Cyan link removeable</pf-label>
<pf-label outline color="cyan" text-max-width="16ch" @close="alert">
  <template #icon>
    <circle-info-icon></circle-info-icon>
  </template>
  Cyan label with icon that overflows
</pf-label>
<br>
<br>
<pf-label outline color="gold">Gold</pf-label>
<pf-label outline color="gold">
  <template #icon>
    <circle-info-icon></circle-info-icon>
  </template>
  Gold icon
</pf-label>
<pf-label outline color="gold" @close="alert">Gold removeable</pf-label>
<pf-label outline color="gold" @close="alert">
  <template #icon>
    <circle-info-icon></circle-info-icon>
  </template>
  Gold icon removeable
</pf-label>
<pf-label outline color="gold" href="#filled">Gold link</pf-label>
<pf-label outline color="gold" href="#filled" @close="alert">Gold link removeable</pf-label>
<pf-label outline color="gold" text-max-width="16ch" @close="alert">
  <template #icon>
    <circle-info-icon></circle-info-icon>
  </template>
  Gold label with icon that overflows
</pf-label>`},{default:l(()=>[e(o,{outline:""},{default:l(()=>[n("Grey")]),_:1}),e(o,{outline:""},{icon:l(()=>[e(a(i))]),default:l(()=>[n("Grey icon ")]),_:1}),e(o,{outline:"",onClose:c},{default:l(()=>[n("Grey removeable")]),_:1}),e(o,{outline:"",onClose:c},{icon:l(()=>[e(a(i))]),default:l(()=>[n(" Grey icon removeable ")]),_:1}),e(o,{outline:"",href:"#filled"},{default:l(()=>[n("Grey link")]),_:1}),e(o,{outline:"",href:"#filled",onClose:c},{default:l(()=>[n("Grey link removeable")]),_:1}),e(o,{outline:"","text-max-width":"16ch",onClose:c},{icon:l(()=>[e(a(i))]),default:l(()=>[n(" Grey label with icon that overflows ")]),_:1}),M,N,e(o,{outline:"",color:"blue"},{default:l(()=>[n("Blue")]),_:1}),e(o,{outline:"",color:"blue"},{icon:l(()=>[e(a(i))]),default:l(()=>[n(" Blue icon ")]),_:1}),e(o,{outline:"",color:"blue",onClose:c},{default:l(()=>[n("Blue removeable")]),_:1}),e(o,{outline:"",color:"blue",onClose:c},{icon:l(()=>[e(a(i))]),default:l(()=>[n(" Blue icon removeable ")]),_:1}),e(o,{outline:"",color:"blue",href:"#filled"},{default:l(()=>[n("Blue link")]),_:1}),e(o,{outline:"",color:"blue",href:"#filled",onClose:c},{default:l(()=>[n("Blue link removeable")]),_:1}),e(o,{outline:"",color:"blue","text-max-width":"16ch",onClose:c},{icon:l(()=>[e(a(i))]),default:l(()=>[n(" Blue label with icon that overflows ")]),_:1}),A,$,e(o,{outline:"",color:"green"},{default:l(()=>[n("Green")]),_:1}),e(o,{outline:"",color:"green"},{icon:l(()=>[e(a(i))]),default:l(()=>[n(" Green icon ")]),_:1}),e(o,{outline:"",color:"green",onClose:c},{default:l(()=>[n("Green removeable")]),_:1}),e(o,{outline:"",color:"green",onClose:c},{icon:l(()=>[e(a(i))]),default:l(()=>[n(" Green icon removeable ")]),_:1}),e(o,{outline:"",color:"green",href:"#filled"},{default:l(()=>[n("Green link")]),_:1}),e(o,{outline:"",color:"green",href:"#filled",onClose:c},{default:l(()=>[n("Green link removeable")]),_:1}),e(o,{outline:"",color:"green","text-max-width":"16ch",onClose:c},{icon:l(()=>[e(a(i))]),default:l(()=>[n(" Green label with icon that overflows ")]),_:1}),E,F,e(o,{outline:"",color:"orange"},{default:l(()=>[n("Orange")]),_:1}),e(o,{outline:"",color:"orange"},{icon:l(()=>[e(a(i))]),default:l(()=>[n(" Orange icon ")]),_:1}),e(o,{outline:"",color:"orange",onClose:c},{default:l(()=>[n("Orange removeable")]),_:1}),e(o,{outline:"",color:"orange",onClose:c},{icon:l(()=>[e(a(i))]),default:l(()=>[n(" Orange icon removeable ")]),_:1}),e(o,{outline:"",color:"orange",href:"#filled"},{default:l(()=>[n("Orange link")]),_:1}),e(o,{outline:"",color:"orange",href:"#filled",onClose:c},{default:l(()=>[n("Orange link removeable")]),_:1}),e(o,{outline:"",color:"orange","text-max-width":"16ch",onClose:c},{icon:l(()=>[e(a(i))]),default:l(()=>[n(" Orange label with icon that overflows ")]),_:1}),S,j,e(o,{outline:"",color:"red"},{default:l(()=>[n("Red")]),_:1}),e(o,{outline:"",color:"red"},{icon:l(()=>[e(a(i))]),default:l(()=>[n(" Red icon ")]),_:1}),e(o,{outline:"",color:"red",onClose:c},{default:l(()=>[n("Red removeable")]),_:1}),e(o,{outline:"",color:"red",onClose:c},{icon:l(()=>[e(a(i))]),default:l(()=>[n(" Red icon removeable ")]),_:1}),e(o,{outline:"",color:"red",href:"#filled"},{default:l(()=>[n("Red link")]),_:1}),e(o,{outline:"",color:"red",href:"#filled",onClose:c},{default:l(()=>[n("Red link removeable")]),_:1}),e(o,{outline:"",color:"red","text-max-width":"16ch",onClose:c},{icon:l(()=>[e(a(i))]),default:l(()=>[n(" Red label with icon that overflows ")]),_:1}),q,D,e(o,{outline:"",color:"purple"},{default:l(()=>[n("Purple")]),_:1}),e(o,{outline:"",color:"purple"},{icon:l(()=>[e(a(i))]),default:l(()=>[n(" Purple icon ")]),_:1}),e(o,{outline:"",color:"purple",onClose:c},{default:l(()=>[n("Purple removeable")]),_:1}),e(o,{outline:"",color:"purple",onClose:c},{icon:l(()=>[e(a(i))]),default:l(()=>[n(" Purple icon removeable ")]),_:1}),e(o,{outline:"",color:"purple",href:"#filled"},{default:l(()=>[n("Purple link")]),_:1}),e(o,{outline:"",color:"purple",href:"#filled",onClose:c},{default:l(()=>[n("Purple link removeable")]),_:1}),e(o,{outline:"",color:"purple","text-max-width":"16ch",onClose:c},{icon:l(()=>[e(a(i))]),default:l(()=>[n(" Purple label with icon that overflows ")]),_:1}),J,K,e(o,{outline:"",color:"cyan"},{default:l(()=>[n("Cyan")]),_:1}),e(o,{outline:"",color:"cyan"},{icon:l(()=>[e(a(i))]),default:l(()=>[n(" Cyan icon ")]),_:1}),e(o,{outline:"",color:"cyan",onClose:c},{default:l(()=>[n("Cyan removeable")]),_:1}),e(o,{outline:"",color:"cyan",onClose:c},{icon:l(()=>[e(a(i))]),default:l(()=>[n(" Cyan icon removeable ")]),_:1}),e(o,{outline:"",color:"cyan",href:"#filled"},{default:l(()=>[n("Cyan link")]),_:1}),e(o,{outline:"",color:"cyan",href:"#filled",onClose:c},{default:l(()=>[n("Cyan link removeable")]),_:1}),e(o,{outline:"",color:"cyan","text-max-width":"16ch",onClose:c},{icon:l(()=>[e(a(i))]),default:l(()=>[n(" Cyan label with icon that overflows ")]),_:1}),Q,U,e(o,{outline:"",color:"gold"},{default:l(()=>[n("Gold")]),_:1}),e(o,{outline:"",color:"gold"},{icon:l(()=>[e(a(i))]),default:l(()=>[n(" Gold icon ")]),_:1}),e(o,{outline:"",color:"gold",onClose:c},{default:l(()=>[n("Gold removeable")]),_:1}),e(o,{outline:"",color:"gold",onClose:c},{icon:l(()=>[e(a(i))]),default:l(()=>[n(" Gold icon removeable ")]),_:1}),e(o,{outline:"",color:"gold",href:"#filled"},{default:l(()=>[n("Gold link")]),_:1}),e(o,{outline:"",color:"gold",href:"#filled",onClose:c},{default:l(()=>[n("Gold link removeable")]),_:1}),e(o,{outline:"",color:"gold","text-max-width":"16ch",onClose:c},{icon:l(()=>[e(a(i))]),default:l(()=>[n(" Gold label with icon that overflows ")]),_:1})]),_:1}),e(f,{title:"Compact",source:`<pf-label compact>Compact</pf-label>
<pf-label compact>
  <template #icon>
    <circle-info-icon></circle-info-icon>
  </template>Compact icon
</pf-label>
<pf-label compact @close="alert">Compact removeable</pf-label>
<pf-label compact @close="alert">
  <template #icon>
    <circle-info-icon></circle-info-icon>
  </template>
  Compact icon removeable
</pf-label>
<pf-label compact href="#filled">Compact link</pf-label>
<pf-label compact href="#filled" @close="alert">Compact link removeable</pf-label>
<pf-label compact text-max-width="16ch" @close="alert">
  <template #icon>
    <circle-info-icon></circle-info-icon>
  </template>
  Compact label with icon that overflows
</pf-label>`},{default:l(()=>[e(o,{compact:""},{default:l(()=>[n("Compact")]),_:1}),e(o,{compact:""},{icon:l(()=>[e(a(i))]),default:l(()=>[n("Compact icon ")]),_:1}),e(o,{compact:"",onClose:c},{default:l(()=>[n("Compact removeable")]),_:1}),e(o,{compact:"",onClose:c},{icon:l(()=>[e(a(i))]),default:l(()=>[n(" Compact icon removeable ")]),_:1}),e(o,{compact:"",href:"#filled"},{default:l(()=>[n("Compact link")]),_:1}),e(o,{compact:"",href:"#filled",onClose:c},{default:l(()=>[n("Compact link removeable")]),_:1}),e(o,{compact:"","text-max-width":"16ch",onClose:c},{icon:l(()=>[e(a(i))]),default:l(()=>[n(" Compact label with icon that overflows ")]),_:1})]),_:1}),e(f,{title:"Truncated",source:'<pf-label text-max-width="16ch" tooltip-position="right">Label is too long to fit in the label</pf-label>'},{default:l(()=>[e(o,{"text-max-width":"16ch","tooltip-position":"right"},{default:l(()=>[n("Label is too long to fit in the label")]),_:1})]),_:1})]),_:1})}}});export{Z as default};
