import{c as b}from"./createIcon.5cfab69a.js";import{e as p,a,c as d,w as e,o as _,b as l,u as t,j as n,d as r}from"./index.d06ccf2e.js";const h={name:"CircleInfoIcon",height:512,width:512,svgPath:"M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S224 177.7 224 160C224 142.3 238.3 128 256 128zM296 384h-80C202.8 384 192 373.3 192 360s10.75-24 24-24h16v-64H224c-13.25 0-24-10.75-24-24S210.8 224 224 224h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24S309.3 384 296 384z",yOffset:0,xOffset:0},m=b(h),i=m,v=n("Grey"),C=n("Grey icon "),g=n("Grey removeable"),y=n(" Grey icon removeable "),w=n("Grey link"),k=n("Grey link removeable"),G=n(" Grey label with icon that overflows "),B=r("br",null,null,-1),O=r("br",null,null,-1),P=n("Blue"),R=n(" Blue icon "),I=n("Blue removeable"),x=n(" Blue icon removeable "),L=n("Blue link"),S=n("Blue link removeable"),z=n(" Blue label with icon that overflows "),M=r("br",null,null,-1),N=r("br",null,null,-1),V=n("Green"),T=n(" Green icon "),j=n("Green removeable"),F=n(" Green icon removeable "),H=n("Green link"),$=n("Green link removeable"),q=n(" Green label with icon that overflows "),A=r("br",null,null,-1),D=r("br",null,null,-1),E=n("Orange"),J=n(" Orange icon "),K=n("Orange removeable"),Q=n(" Orange icon removeable "),U=n("Orange link"),W=n("Orange link removeable"),X=n(" Orange label with icon that overflows "),Y=r("br",null,null,-1),Z=r("br",null,null,-1),ee=n("Red"),le=n(" Red icon "),oe=n("Red removeable"),ne=n(" Red icon removeable "),ce=n("Red link"),te=n("Red link removeable"),ie=n(" Red label with icon that overflows "),re=r("br",null,null,-1),ae=r("br",null,null,-1),fe=n("Purple"),se=n(" Purple icon "),ue=n("Purple removeable"),be=n(" Purple icon removeable "),pe=n("Purple link"),de=n("Purple link removeable"),_e=n(" Purple label with icon that overflows "),he=r("br",null,null,-1),me=r("br",null,null,-1),ve=n("Cyan"),Ce=n(" Cyan icon "),ge=n("Cyan removeable"),ye=n(" Cyan icon removeable "),we=n("Cyan link"),ke=n("Cyan link removeable"),Ge=n(" Cyan label with icon that overflows "),Be=n("Grey"),Oe=n("Grey icon "),Pe=n("Grey removeable"),Re=n(" Grey icon removeable "),Ie=n("Grey link"),xe=n("Grey link removeable"),Le=n(" Grey label with icon that overflows "),Se=r("br",null,null,-1),ze=r("br",null,null,-1),Me=n("Blue"),Ne=n(" Blue icon "),Ve=n("Blue removeable"),Te=n(" Blue icon removeable "),je=n("Blue link"),Fe=n("Blue link removeable"),He=n(" Blue label with icon that overflows "),$e=r("br",null,null,-1),qe=r("br",null,null,-1),Ae=n("Green"),De=n(" Green icon "),Ee=n("Green removeable"),Je=n(" Green icon removeable "),Ke=n("Green link"),Qe=n("Green link removeable"),Ue=n(" Green label with icon that overflows "),We=r("br",null,null,-1),Xe=r("br",null,null,-1),Ye=n("Orange"),Ze=n(" Orange icon "),el=n("Orange removeable"),ll=n(" Orange icon removeable "),ol=n("Orange link"),nl=n("Orange link removeable"),cl=n(" Orange label with icon that overflows "),tl=r("br",null,null,-1),il=r("br",null,null,-1),rl=n("Red"),al=n(" Red icon "),fl=n("Red removeable"),sl=n(" Red icon removeable "),ul=n("Red link"),bl=n("Red link removeable"),pl=n(" Red label with icon that overflows "),dl=r("br",null,null,-1),_l=r("br",null,null,-1),hl=n("Purple"),ml=n(" Purple icon "),vl=n("Purple removeable"),Cl=n(" Purple icon removeable "),gl=n("Purple link"),yl=n("Purple link removeable"),wl=n(" Purple label with icon that overflows "),kl=r("br",null,null,-1),Gl=r("br",null,null,-1),Bl=n("Cyan"),Ol=n(" Cyan icon "),Pl=n("Cyan removeable"),Rl=n(" Cyan icon removeable "),Il=n("Cyan link"),xl=n("Cyan link removeable"),Ll=n(" Cyan label with icon that overflows "),Sl=n("Label is too long to fit in the label"),jl=p({__name:"Label.story",setup(zl){const c=()=>window.alert("Clicked close button");return(Ml,Nl)=>{const s=a("component-title"),o=a("pf-label"),f=a("story-canvas"),u=a("doc-page");return _(),d(u,{title:"Label"},{default:e(()=>[l(s,{name:"pf-label"}),l(f,{title:"Filled",source:`<pf-label>Grey</pf-label>
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
</pf-label>`},{default:e(()=>[l(o,null,{default:e(()=>[v]),_:1}),l(o,null,{icon:e(()=>[l(t(i))]),default:e(()=>[C]),_:1}),l(o,{close:"",onClose:c},{default:e(()=>[g]),_:1}),l(o,{close:"",onClose:c},{icon:e(()=>[l(t(i))]),default:e(()=>[y]),_:1}),l(o,{href:"#filled"},{default:e(()=>[w]),_:1}),l(o,{href:"#filled",close:"",onClose:c},{default:e(()=>[k]),_:1}),l(o,{close:"",truncated:"",onClose:c},{icon:e(()=>[l(t(i))]),default:e(()=>[G]),_:1}),B,O,l(o,{color:"blue"},{default:e(()=>[P]),_:1}),l(o,{color:"blue"},{icon:e(()=>[l(t(i))]),default:e(()=>[R]),_:1}),l(o,{color:"blue",close:"",onClose:c},{default:e(()=>[I]),_:1}),l(o,{color:"blue",close:"",onClose:c},{icon:e(()=>[l(t(i))]),default:e(()=>[x]),_:1}),l(o,{color:"blue",href:"#filled"},{default:e(()=>[L]),_:1}),l(o,{color:"blue",href:"#filled",close:"",onClose:c},{default:e(()=>[S]),_:1}),l(o,{color:"blue",close:"",truncated:"",onClose:c},{icon:e(()=>[l(t(i))]),default:e(()=>[z]),_:1}),M,N,l(o,{color:"green"},{default:e(()=>[V]),_:1}),l(o,{color:"green"},{icon:e(()=>[l(t(i))]),default:e(()=>[T]),_:1}),l(o,{color:"green",close:"",onClose:c},{default:e(()=>[j]),_:1}),l(o,{color:"green",close:"",onClose:c},{icon:e(()=>[l(t(i))]),default:e(()=>[F]),_:1}),l(o,{color:"green",href:"#filled"},{default:e(()=>[H]),_:1}),l(o,{color:"green",href:"#filled",close:"",onClose:c},{default:e(()=>[$]),_:1}),l(o,{color:"green",close:"",truncated:"",onClose:c},{icon:e(()=>[l(t(i))]),default:e(()=>[q]),_:1}),A,D,l(o,{color:"orange"},{default:e(()=>[E]),_:1}),l(o,{color:"orange"},{icon:e(()=>[l(t(i))]),default:e(()=>[J]),_:1}),l(o,{color:"orange",close:"",onClose:c},{default:e(()=>[K]),_:1}),l(o,{color:"orange",close:"",onClose:c},{icon:e(()=>[l(t(i))]),default:e(()=>[Q]),_:1}),l(o,{color:"orange",href:"#filled"},{default:e(()=>[U]),_:1}),l(o,{color:"orange",href:"#filled",close:"",onClose:c},{default:e(()=>[W]),_:1}),l(o,{color:"orange",close:"",truncated:"",onClose:c},{icon:e(()=>[l(t(i))]),default:e(()=>[X]),_:1}),Y,Z,l(o,{color:"red"},{default:e(()=>[ee]),_:1}),l(o,{color:"red"},{icon:e(()=>[l(t(i))]),default:e(()=>[le]),_:1}),l(o,{color:"red",close:"",onClose:c},{default:e(()=>[oe]),_:1}),l(o,{color:"red",close:"",onClose:c},{icon:e(()=>[l(t(i))]),default:e(()=>[ne]),_:1}),l(o,{color:"red",href:"#filled"},{default:e(()=>[ce]),_:1}),l(o,{color:"red",href:"#filled",close:"",onClose:c},{default:e(()=>[te]),_:1}),l(o,{color:"red",close:"",truncated:"",onClose:c},{icon:e(()=>[l(t(i))]),default:e(()=>[ie]),_:1}),re,ae,l(o,{color:"purple"},{default:e(()=>[fe]),_:1}),l(o,{color:"purple"},{icon:e(()=>[l(t(i))]),default:e(()=>[se]),_:1}),l(o,{color:"purple",close:"",onClose:c},{default:e(()=>[ue]),_:1}),l(o,{color:"purple",close:"",onClose:c},{icon:e(()=>[l(t(i))]),default:e(()=>[be]),_:1}),l(o,{color:"purple",href:"#filled"},{default:e(()=>[pe]),_:1}),l(o,{color:"purple",href:"#filled",close:"",onClose:c},{default:e(()=>[de]),_:1}),l(o,{color:"purple",close:"",truncated:"",onClose:c},{icon:e(()=>[l(t(i))]),default:e(()=>[_e]),_:1}),he,me,l(o,{color:"cyan"},{default:e(()=>[ve]),_:1}),l(o,{color:"cyan"},{icon:e(()=>[l(t(i))]),default:e(()=>[Ce]),_:1}),l(o,{color:"cyan",close:"",onClose:c},{default:e(()=>[ge]),_:1}),l(o,{color:"cyan",close:"",onClose:c},{icon:e(()=>[l(t(i))]),default:e(()=>[ye]),_:1}),l(o,{color:"cyan",href:"#filled"},{default:e(()=>[we]),_:1}),l(o,{color:"cyan",href:"#filled",close:"",onClose:c},{default:e(()=>[ke]),_:1}),l(o,{color:"cyan",close:"",truncated:"",onClose:c},{icon:e(()=>[l(t(i))]),default:e(()=>[Ge]),_:1})]),_:1}),l(f,{title:"Outline",source:`<pf-label outline>Grey</pf-label>
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
</pf-label>`},{default:e(()=>[l(o,{outline:""},{default:e(()=>[Be]),_:1}),l(o,{outline:""},{icon:e(()=>[l(t(i))]),default:e(()=>[Oe]),_:1}),l(o,{outline:"",close:"",onClose:c},{default:e(()=>[Pe]),_:1}),l(o,{outline:"",close:"",onClose:c},{icon:e(()=>[l(t(i))]),default:e(()=>[Re]),_:1}),l(o,{outline:"",href:"#filled"},{default:e(()=>[Ie]),_:1}),l(o,{outline:"",href:"#filled",close:"",onClose:c},{default:e(()=>[xe]),_:1}),l(o,{outline:"",close:"",truncated:"",onClose:c},{icon:e(()=>[l(t(i))]),default:e(()=>[Le]),_:1}),Se,ze,l(o,{outline:"",color:"blue"},{default:e(()=>[Me]),_:1}),l(o,{outline:"",color:"blue"},{icon:e(()=>[l(t(i))]),default:e(()=>[Ne]),_:1}),l(o,{outline:"",color:"blue",close:"",onClose:c},{default:e(()=>[Ve]),_:1}),l(o,{outline:"",color:"blue",close:"",onClose:c},{icon:e(()=>[l(t(i))]),default:e(()=>[Te]),_:1}),l(o,{outline:"",color:"blue",href:"#filled"},{default:e(()=>[je]),_:1}),l(o,{outline:"",color:"blue",href:"#filled",close:"",onClose:c},{default:e(()=>[Fe]),_:1}),l(o,{outline:"",color:"blue",close:"",truncated:"",onClose:c},{icon:e(()=>[l(t(i))]),default:e(()=>[He]),_:1}),$e,qe,l(o,{outline:"",color:"green"},{default:e(()=>[Ae]),_:1}),l(o,{outline:"",color:"green"},{icon:e(()=>[l(t(i))]),default:e(()=>[De]),_:1}),l(o,{outline:"",color:"green",close:"",onClose:c},{default:e(()=>[Ee]),_:1}),l(o,{outline:"",color:"green",close:"",onClose:c},{icon:e(()=>[l(t(i))]),default:e(()=>[Je]),_:1}),l(o,{outline:"",color:"green",href:"#filled"},{default:e(()=>[Ke]),_:1}),l(o,{outline:"",color:"green",href:"#filled",close:"",onClose:c},{default:e(()=>[Qe]),_:1}),l(o,{outline:"",color:"green",close:"",truncated:"",onClose:c},{icon:e(()=>[l(t(i))]),default:e(()=>[Ue]),_:1}),We,Xe,l(o,{outline:"",color:"orange"},{default:e(()=>[Ye]),_:1}),l(o,{outline:"",color:"orange"},{icon:e(()=>[l(t(i))]),default:e(()=>[Ze]),_:1}),l(o,{outline:"",color:"orange",close:"",onClose:c},{default:e(()=>[el]),_:1}),l(o,{outline:"",color:"orange",close:"",onClose:c},{icon:e(()=>[l(t(i))]),default:e(()=>[ll]),_:1}),l(o,{outline:"",color:"orange",href:"#filled"},{default:e(()=>[ol]),_:1}),l(o,{outline:"",color:"orange",href:"#filled",close:"",onClose:c},{default:e(()=>[nl]),_:1}),l(o,{outline:"",color:"orange",close:"",truncated:"",onClose:c},{icon:e(()=>[l(t(i))]),default:e(()=>[cl]),_:1}),tl,il,l(o,{outline:"",color:"red"},{default:e(()=>[rl]),_:1}),l(o,{outline:"",color:"red"},{icon:e(()=>[l(t(i))]),default:e(()=>[al]),_:1}),l(o,{outline:"",color:"red",close:"",onClose:c},{default:e(()=>[fl]),_:1}),l(o,{outline:"",color:"red",close:"",onClose:c},{icon:e(()=>[l(t(i))]),default:e(()=>[sl]),_:1}),l(o,{outline:"",color:"red",href:"#filled"},{default:e(()=>[ul]),_:1}),l(o,{outline:"",color:"red",href:"#filled",close:"",onClose:c},{default:e(()=>[bl]),_:1}),l(o,{outline:"",color:"red",close:"",truncated:"",onClose:c},{icon:e(()=>[l(t(i))]),default:e(()=>[pl]),_:1}),dl,_l,l(o,{outline:"",color:"purple"},{default:e(()=>[hl]),_:1}),l(o,{outline:"",color:"purple"},{icon:e(()=>[l(t(i))]),default:e(()=>[ml]),_:1}),l(o,{outline:"",color:"purple",close:"",onClose:c},{default:e(()=>[vl]),_:1}),l(o,{outline:"",color:"purple",close:"",onClose:c},{icon:e(()=>[l(t(i))]),default:e(()=>[Cl]),_:1}),l(o,{outline:"",color:"purple",href:"#filled"},{default:e(()=>[gl]),_:1}),l(o,{outline:"",color:"purple",href:"#filled",close:"",onClose:c},{default:e(()=>[yl]),_:1}),l(o,{outline:"",color:"purple",close:"",truncated:"",onClose:c},{icon:e(()=>[l(t(i))]),default:e(()=>[wl]),_:1}),kl,Gl,l(o,{outline:"",color:"cyan"},{default:e(()=>[Bl]),_:1}),l(o,{outline:"",color:"cyan"},{icon:e(()=>[l(t(i))]),default:e(()=>[Ol]),_:1}),l(o,{outline:"",color:"cyan",close:"",onClose:c},{default:e(()=>[Pl]),_:1}),l(o,{outline:"",color:"cyan",close:"",onClose:c},{icon:e(()=>[l(t(i))]),default:e(()=>[Rl]),_:1}),l(o,{outline:"",color:"cyan",href:"#filled"},{default:e(()=>[Il]),_:1}),l(o,{outline:"",color:"cyan",href:"#filled",close:"",onClose:c},{default:e(()=>[xl]),_:1}),l(o,{outline:"",color:"cyan",close:"",truncated:"",onClose:c},{icon:e(()=>[l(t(i))]),default:e(()=>[Ll]),_:1})]),_:1}),l(f,{title:"Truncated",source:'<pf-label truncated tooltip-position="right">Label is too long to fit in the label</pf-label>'},{default:e(()=>[l(o,{truncated:"","tooltip-position":"right"},{default:e(()=>[Sl]),_:1})]),_:1})]),_:1})}}});export{jl as default};
