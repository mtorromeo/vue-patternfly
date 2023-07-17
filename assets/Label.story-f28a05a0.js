import{c as p}from"./createIcon-e32faa20.js";import{e as s,a as t,o as d,c as m,w as e,b as l,g as n,u as r,d as i}from"./index-d4702c97.js";const _={name:"CircleInfoIcon",height:512,width:512,svgPath:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z",yOffset:0,xOffset:0},h=p(_),a=h,v=i("br",null,null,-1),g=i("br",null,null,-1),C=i("br",null,null,-1),y=i("br",null,null,-1),w=i("br",null,null,-1),k=i("br",null,null,-1),G=i("br",null,null,-1),B=i("br",null,null,-1),O=i("br",null,null,-1),P=i("br",null,null,-1),R=i("br",null,null,-1),I=i("br",null,null,-1),x=i("br",null,null,-1),L=i("br",null,null,-1),V=i("br",null,null,-1),z=i("br",null,null,-1),N=i("br",null,null,-1),H=i("br",null,null,-1),M=i("br",null,null,-1),T=i("br",null,null,-1),A=i("br",null,null,-1),F=i("br",null,null,-1),$=i("br",null,null,-1),j=i("br",null,null,-1),Q=s({__name:"Label.story",setup(q){const c=()=>window.alert("Clicked close button");return(D,E)=>{const u=t("component-title"),o=t("pf-label"),f=t("story-canvas"),b=t("doc-page");return d(),m(b,{title:"Label"},{default:e(()=>[l(u,{name:"pf-label"}),l(f,{title:"Filled",source:`<pf-label>Grey</pf-label>
<pf-label>
  <template #icon>
    <circle-info-icon></circle-info-icon>
  </template>Grey icon
</pf-label>
<pf-label close @close="alert">Grey removeable</pf-label>
<pf-label close @close="alert">
  <template #icon>
    <circle-info-icon></circle-info-icon>
  </template>
  Grey icon removeable
</pf-label>
<pf-label href="#filled">Grey link</pf-label>
<pf-label href="#filled" close @close="alert">Grey link removeable</pf-label>
<pf-label close truncated @close="alert">
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
<pf-label color="blue" close @close="alert">Blue removeable</pf-label>
<pf-label color="blue" close @close="alert">
  <template #icon>
    <circle-info-icon></circle-info-icon>
  </template>
  Blue icon removeable
</pf-label>
<pf-label color="blue" href="#filled">Blue link</pf-label>
<pf-label color="blue" href="#filled" close @close="alert">Blue link removeable</pf-label>
<pf-label color="blue" close truncated @close="alert">
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
<pf-label color="green" close @close="alert">Green removeable</pf-label>
<pf-label color="green" close @close="alert">
  <template #icon>
    <circle-info-icon></circle-info-icon>
  </template>
  Green icon removeable
</pf-label>
<pf-label color="green" href="#filled">Green link</pf-label>
<pf-label color="green" href="#filled" close @close="alert">Green link removeable</pf-label>
<pf-label color="green" close truncated @close="alert">
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
<pf-label color="orange" close @close="alert">Orange removeable</pf-label>
<pf-label color="orange" close @close="alert">
  <template #icon>
    <circle-info-icon></circle-info-icon>
  </template>
  Orange icon removeable
</pf-label>
<pf-label color="orange" href="#filled">Orange link</pf-label>
<pf-label color="orange" href="#filled" close @close="alert">Orange link removeable</pf-label>
<pf-label color="orange" close truncated @close="alert">
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
<pf-label color="red" close @close="alert">Red removeable</pf-label>
<pf-label color="red" close @close="alert">
  <template #icon>
    <circle-info-icon></circle-info-icon>
  </template>
  Red icon removeable
</pf-label>
<pf-label color="red" href="#filled">Red link</pf-label>
<pf-label color="red" href="#filled" close @close="alert">Red link removeable</pf-label>
<pf-label color="red" close truncated @close="alert">
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
<pf-label color="purple" close @close="alert">Purple removeable</pf-label>
<pf-label color="purple" close @close="alert">
  <template #icon>
    <circle-info-icon></circle-info-icon>
  </template>
  Purple icon removeable
</pf-label>
<pf-label color="purple" href="#filled">Purple link</pf-label>
<pf-label color="purple" href="#filled" close @close="alert">Purple link removeable</pf-label>
<pf-label color="purple" close truncated @close="alert">
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
<pf-label color="cyan" close @close="alert">Cyan removeable</pf-label>
<pf-label color="cyan" close @close="alert">
  <template #icon>
    <circle-info-icon></circle-info-icon>
  </template>
  Cyan icon removeable
</pf-label>
<pf-label color="cyan" href="#filled">Cyan link</pf-label>
<pf-label color="cyan" href="#filled" close @close="alert">Cyan link removeable</pf-label>
<pf-label color="cyan" close truncated @close="alert">
  <template #icon>
    <circle-info-icon></circle-info-icon>
  </template>
  Cyan label with icon that overflows
</pf-label>`},{default:e(()=>[l(o,null,{default:e(()=>[n("Grey")]),_:1}),l(o,null,{icon:e(()=>[l(r(a))]),default:e(()=>[n("Grey icon ")]),_:1}),l(o,{close:"",onClose:c},{default:e(()=>[n("Grey removeable")]),_:1}),l(o,{close:"",onClose:c},{icon:e(()=>[l(r(a))]),default:e(()=>[n(" Grey icon removeable ")]),_:1}),l(o,{href:"#filled"},{default:e(()=>[n("Grey link")]),_:1}),l(o,{href:"#filled",close:"",onClose:c},{default:e(()=>[n("Grey link removeable")]),_:1}),l(o,{close:"",truncated:"",onClose:c},{icon:e(()=>[l(r(a))]),default:e(()=>[n(" Grey label with icon that overflows ")]),_:1}),v,g,l(o,{color:"blue"},{default:e(()=>[n("Blue")]),_:1}),l(o,{color:"blue"},{icon:e(()=>[l(r(a))]),default:e(()=>[n(" Blue icon ")]),_:1}),l(o,{color:"blue",close:"",onClose:c},{default:e(()=>[n("Blue removeable")]),_:1}),l(o,{color:"blue",close:"",onClose:c},{icon:e(()=>[l(r(a))]),default:e(()=>[n(" Blue icon removeable ")]),_:1}),l(o,{color:"blue",href:"#filled"},{default:e(()=>[n("Blue link")]),_:1}),l(o,{color:"blue",href:"#filled",close:"",onClose:c},{default:e(()=>[n("Blue link removeable")]),_:1}),l(o,{color:"blue",close:"",truncated:"",onClose:c},{icon:e(()=>[l(r(a))]),default:e(()=>[n(" Blue label with icon that overflows ")]),_:1}),C,y,l(o,{color:"green"},{default:e(()=>[n("Green")]),_:1}),l(o,{color:"green"},{icon:e(()=>[l(r(a))]),default:e(()=>[n(" Green icon ")]),_:1}),l(o,{color:"green",close:"",onClose:c},{default:e(()=>[n("Green removeable")]),_:1}),l(o,{color:"green",close:"",onClose:c},{icon:e(()=>[l(r(a))]),default:e(()=>[n(" Green icon removeable ")]),_:1}),l(o,{color:"green",href:"#filled"},{default:e(()=>[n("Green link")]),_:1}),l(o,{color:"green",href:"#filled",close:"",onClose:c},{default:e(()=>[n("Green link removeable")]),_:1}),l(o,{color:"green",close:"",truncated:"",onClose:c},{icon:e(()=>[l(r(a))]),default:e(()=>[n(" Green label with icon that overflows ")]),_:1}),w,k,l(o,{color:"orange"},{default:e(()=>[n("Orange")]),_:1}),l(o,{color:"orange"},{icon:e(()=>[l(r(a))]),default:e(()=>[n(" Orange icon ")]),_:1}),l(o,{color:"orange",close:"",onClose:c},{default:e(()=>[n("Orange removeable")]),_:1}),l(o,{color:"orange",close:"",onClose:c},{icon:e(()=>[l(r(a))]),default:e(()=>[n(" Orange icon removeable ")]),_:1}),l(o,{color:"orange",href:"#filled"},{default:e(()=>[n("Orange link")]),_:1}),l(o,{color:"orange",href:"#filled",close:"",onClose:c},{default:e(()=>[n("Orange link removeable")]),_:1}),l(o,{color:"orange",close:"",truncated:"",onClose:c},{icon:e(()=>[l(r(a))]),default:e(()=>[n(" Orange label with icon that overflows ")]),_:1}),G,B,l(o,{color:"red"},{default:e(()=>[n("Red")]),_:1}),l(o,{color:"red"},{icon:e(()=>[l(r(a))]),default:e(()=>[n(" Red icon ")]),_:1}),l(o,{color:"red",close:"",onClose:c},{default:e(()=>[n("Red removeable")]),_:1}),l(o,{color:"red",close:"",onClose:c},{icon:e(()=>[l(r(a))]),default:e(()=>[n(" Red icon removeable ")]),_:1}),l(o,{color:"red",href:"#filled"},{default:e(()=>[n("Red link")]),_:1}),l(o,{color:"red",href:"#filled",close:"",onClose:c},{default:e(()=>[n("Red link removeable")]),_:1}),l(o,{color:"red",close:"",truncated:"",onClose:c},{icon:e(()=>[l(r(a))]),default:e(()=>[n(" Red label with icon that overflows ")]),_:1}),O,P,l(o,{color:"purple"},{default:e(()=>[n("Purple")]),_:1}),l(o,{color:"purple"},{icon:e(()=>[l(r(a))]),default:e(()=>[n(" Purple icon ")]),_:1}),l(o,{color:"purple",close:"",onClose:c},{default:e(()=>[n("Purple removeable")]),_:1}),l(o,{color:"purple",close:"",onClose:c},{icon:e(()=>[l(r(a))]),default:e(()=>[n(" Purple icon removeable ")]),_:1}),l(o,{color:"purple",href:"#filled"},{default:e(()=>[n("Purple link")]),_:1}),l(o,{color:"purple",href:"#filled",close:"",onClose:c},{default:e(()=>[n("Purple link removeable")]),_:1}),l(o,{color:"purple",close:"",truncated:"",onClose:c},{icon:e(()=>[l(r(a))]),default:e(()=>[n(" Purple label with icon that overflows ")]),_:1}),R,I,l(o,{color:"cyan"},{default:e(()=>[n("Cyan")]),_:1}),l(o,{color:"cyan"},{icon:e(()=>[l(r(a))]),default:e(()=>[n(" Cyan icon ")]),_:1}),l(o,{color:"cyan",close:"",onClose:c},{default:e(()=>[n("Cyan removeable")]),_:1}),l(o,{color:"cyan",close:"",onClose:c},{icon:e(()=>[l(r(a))]),default:e(()=>[n(" Cyan icon removeable ")]),_:1}),l(o,{color:"cyan",href:"#filled"},{default:e(()=>[n("Cyan link")]),_:1}),l(o,{color:"cyan",href:"#filled",close:"",onClose:c},{default:e(()=>[n("Cyan link removeable")]),_:1}),l(o,{color:"cyan",close:"",truncated:"",onClose:c},{icon:e(()=>[l(r(a))]),default:e(()=>[n(" Cyan label with icon that overflows ")]),_:1})]),_:1}),l(f,{title:"Outline",source:`<pf-label outline>Grey</pf-label>
<pf-label outline>
  <template #icon>
    <circle-info-icon></circle-info-icon>
  </template>Grey icon
</pf-label>
<pf-label outline close @close="alert">Grey removeable</pf-label>
<pf-label outline close @close="alert">
  <template #icon>
    <circle-info-icon></circle-info-icon>
  </template>
  Grey icon removeable
</pf-label>
<pf-label outline href="#filled">Grey link</pf-label>
<pf-label outline href="#filled" close @close="alert">Grey link removeable</pf-label>
<pf-label outline close truncated @close="alert">
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
<pf-label outline color="blue" close @close="alert">Blue removeable</pf-label>
<pf-label outline color="blue" close @close="alert">
  <template #icon>
    <circle-info-icon></circle-info-icon>
  </template>
  Blue icon removeable
</pf-label>
<pf-label outline color="blue" href="#filled">Blue link</pf-label>
<pf-label outline color="blue" href="#filled" close @close="alert">Blue link removeable</pf-label>
<pf-label outline color="blue" close truncated @close="alert">
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
<pf-label outline color="green" close @close="alert">Green removeable</pf-label>
<pf-label outline color="green" close @close="alert">
  <template #icon>
    <circle-info-icon></circle-info-icon>
  </template>
  Green icon removeable
</pf-label>
<pf-label outline color="green" href="#filled">Green link</pf-label>
<pf-label outline color="green" href="#filled" close @close="alert">Green link removeable</pf-label>
<pf-label outline color="green" close truncated @close="alert">
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
<pf-label outline color="orange" close @close="alert">Orange removeable</pf-label>
<pf-label outline color="orange" close @close="alert">
  <template #icon>
    <circle-info-icon></circle-info-icon>
  </template>
  Orange icon removeable
</pf-label>
<pf-label outline color="orange" href="#filled">Orange link</pf-label>
<pf-label outline color="orange" href="#filled" close @close="alert">Orange link removeable</pf-label>
<pf-label outline color="orange" close truncated @close="alert">
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
<pf-label outline color="red" close @close="alert">Red removeable</pf-label>
<pf-label outline color="red" close @close="alert">
  <template #icon>
    <circle-info-icon></circle-info-icon>
  </template>
  Red icon removeable
</pf-label>
<pf-label outline color="red" href="#filled">Red link</pf-label>
<pf-label outline color="red" href="#filled" close @close="alert">Red link removeable</pf-label>
<pf-label outline color="red" close truncated @close="alert">
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
<pf-label outline color="purple" close @close="alert">Purple removeable</pf-label>
<pf-label outline color="purple" close @close="alert">
  <template #icon>
    <circle-info-icon></circle-info-icon>
  </template>
  Purple icon removeable
</pf-label>
<pf-label outline color="purple" href="#filled">Purple link</pf-label>
<pf-label outline color="purple" href="#filled" close @close="alert">Purple link removeable</pf-label>
<pf-label outline color="purple" close truncated @close="alert">
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
<pf-label outline color="cyan" close @close="alert">Cyan removeable</pf-label>
<pf-label outline color="cyan" close @close="alert">
  <template #icon>
    <circle-info-icon></circle-info-icon>
  </template>
  Cyan icon removeable
</pf-label>
<pf-label outline color="cyan" href="#filled">Cyan link</pf-label>
<pf-label outline color="cyan" href="#filled" close @close="alert">Cyan link removeable</pf-label>
<pf-label outline color="cyan" close truncated @close="alert">
  <template #icon>
    <circle-info-icon></circle-info-icon>
  </template>
  Cyan label with icon that overflows
</pf-label>`},{default:e(()=>[l(o,{outline:""},{default:e(()=>[n("Grey")]),_:1}),l(o,{outline:""},{icon:e(()=>[l(r(a))]),default:e(()=>[n("Grey icon ")]),_:1}),l(o,{outline:"",close:"",onClose:c},{default:e(()=>[n("Grey removeable")]),_:1}),l(o,{outline:"",close:"",onClose:c},{icon:e(()=>[l(r(a))]),default:e(()=>[n(" Grey icon removeable ")]),_:1}),l(o,{outline:"",href:"#filled"},{default:e(()=>[n("Grey link")]),_:1}),l(o,{outline:"",href:"#filled",close:"",onClose:c},{default:e(()=>[n("Grey link removeable")]),_:1}),l(o,{outline:"",close:"",truncated:"",onClose:c},{icon:e(()=>[l(r(a))]),default:e(()=>[n(" Grey label with icon that overflows ")]),_:1}),x,L,l(o,{outline:"",color:"blue"},{default:e(()=>[n("Blue")]),_:1}),l(o,{outline:"",color:"blue"},{icon:e(()=>[l(r(a))]),default:e(()=>[n(" Blue icon ")]),_:1}),l(o,{outline:"",color:"blue",close:"",onClose:c},{default:e(()=>[n("Blue removeable")]),_:1}),l(o,{outline:"",color:"blue",close:"",onClose:c},{icon:e(()=>[l(r(a))]),default:e(()=>[n(" Blue icon removeable ")]),_:1}),l(o,{outline:"",color:"blue",href:"#filled"},{default:e(()=>[n("Blue link")]),_:1}),l(o,{outline:"",color:"blue",href:"#filled",close:"",onClose:c},{default:e(()=>[n("Blue link removeable")]),_:1}),l(o,{outline:"",color:"blue",close:"",truncated:"",onClose:c},{icon:e(()=>[l(r(a))]),default:e(()=>[n(" Blue label with icon that overflows ")]),_:1}),V,z,l(o,{outline:"",color:"green"},{default:e(()=>[n("Green")]),_:1}),l(o,{outline:"",color:"green"},{icon:e(()=>[l(r(a))]),default:e(()=>[n(" Green icon ")]),_:1}),l(o,{outline:"",color:"green",close:"",onClose:c},{default:e(()=>[n("Green removeable")]),_:1}),l(o,{outline:"",color:"green",close:"",onClose:c},{icon:e(()=>[l(r(a))]),default:e(()=>[n(" Green icon removeable ")]),_:1}),l(o,{outline:"",color:"green",href:"#filled"},{default:e(()=>[n("Green link")]),_:1}),l(o,{outline:"",color:"green",href:"#filled",close:"",onClose:c},{default:e(()=>[n("Green link removeable")]),_:1}),l(o,{outline:"",color:"green",close:"",truncated:"",onClose:c},{icon:e(()=>[l(r(a))]),default:e(()=>[n(" Green label with icon that overflows ")]),_:1}),N,H,l(o,{outline:"",color:"orange"},{default:e(()=>[n("Orange")]),_:1}),l(o,{outline:"",color:"orange"},{icon:e(()=>[l(r(a))]),default:e(()=>[n(" Orange icon ")]),_:1}),l(o,{outline:"",color:"orange",close:"",onClose:c},{default:e(()=>[n("Orange removeable")]),_:1}),l(o,{outline:"",color:"orange",close:"",onClose:c},{icon:e(()=>[l(r(a))]),default:e(()=>[n(" Orange icon removeable ")]),_:1}),l(o,{outline:"",color:"orange",href:"#filled"},{default:e(()=>[n("Orange link")]),_:1}),l(o,{outline:"",color:"orange",href:"#filled",close:"",onClose:c},{default:e(()=>[n("Orange link removeable")]),_:1}),l(o,{outline:"",color:"orange",close:"",truncated:"",onClose:c},{icon:e(()=>[l(r(a))]),default:e(()=>[n(" Orange label with icon that overflows ")]),_:1}),M,T,l(o,{outline:"",color:"red"},{default:e(()=>[n("Red")]),_:1}),l(o,{outline:"",color:"red"},{icon:e(()=>[l(r(a))]),default:e(()=>[n(" Red icon ")]),_:1}),l(o,{outline:"",color:"red",close:"",onClose:c},{default:e(()=>[n("Red removeable")]),_:1}),l(o,{outline:"",color:"red",close:"",onClose:c},{icon:e(()=>[l(r(a))]),default:e(()=>[n(" Red icon removeable ")]),_:1}),l(o,{outline:"",color:"red",href:"#filled"},{default:e(()=>[n("Red link")]),_:1}),l(o,{outline:"",color:"red",href:"#filled",close:"",onClose:c},{default:e(()=>[n("Red link removeable")]),_:1}),l(o,{outline:"",color:"red",close:"",truncated:"",onClose:c},{icon:e(()=>[l(r(a))]),default:e(()=>[n(" Red label with icon that overflows ")]),_:1}),A,F,l(o,{outline:"",color:"purple"},{default:e(()=>[n("Purple")]),_:1}),l(o,{outline:"",color:"purple"},{icon:e(()=>[l(r(a))]),default:e(()=>[n(" Purple icon ")]),_:1}),l(o,{outline:"",color:"purple",close:"",onClose:c},{default:e(()=>[n("Purple removeable")]),_:1}),l(o,{outline:"",color:"purple",close:"",onClose:c},{icon:e(()=>[l(r(a))]),default:e(()=>[n(" Purple icon removeable ")]),_:1}),l(o,{outline:"",color:"purple",href:"#filled"},{default:e(()=>[n("Purple link")]),_:1}),l(o,{outline:"",color:"purple",href:"#filled",close:"",onClose:c},{default:e(()=>[n("Purple link removeable")]),_:1}),l(o,{outline:"",color:"purple",close:"",truncated:"",onClose:c},{icon:e(()=>[l(r(a))]),default:e(()=>[n(" Purple label with icon that overflows ")]),_:1}),$,j,l(o,{outline:"",color:"cyan"},{default:e(()=>[n("Cyan")]),_:1}),l(o,{outline:"",color:"cyan"},{icon:e(()=>[l(r(a))]),default:e(()=>[n(" Cyan icon ")]),_:1}),l(o,{outline:"",color:"cyan",close:"",onClose:c},{default:e(()=>[n("Cyan removeable")]),_:1}),l(o,{outline:"",color:"cyan",close:"",onClose:c},{icon:e(()=>[l(r(a))]),default:e(()=>[n(" Cyan icon removeable ")]),_:1}),l(o,{outline:"",color:"cyan",href:"#filled"},{default:e(()=>[n("Cyan link")]),_:1}),l(o,{outline:"",color:"cyan",href:"#filled",close:"",onClose:c},{default:e(()=>[n("Cyan link removeable")]),_:1}),l(o,{outline:"",color:"cyan",close:"",truncated:"",onClose:c},{icon:e(()=>[l(r(a))]),default:e(()=>[n(" Cyan label with icon that overflows ")]),_:1})]),_:1}),l(f,{title:"Truncated",source:'<pf-label truncated tooltip-position="right">Label is too long to fit in the label</pf-label>'},{default:e(()=>[l(o,{truncated:"","tooltip-position":"right"},{default:e(()=>[n("Label is too long to fit in the label")]),_:1})]),_:1})]),_:1})}}});export{Q as default};
