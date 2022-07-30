import{c as b}from"./createIcon.e6f94ec4.js";import{e as p,a as i,o as d,c as _,w as e,b as l,u as t,j as n,d as a}from"./index.61b3793e.js";const h={name:"InfoCircleIcon",height:512,width:512,svgPath:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z",yOffset:0,xOffset:0},m=b(h),r=m,C=n("Grey"),I=n("Grey icon "),v=n("Grey removeable"),g=n(" Grey icon removeable "),y=n("Grey link"),w=n("Grey link removeable"),k=n(" Grey label with icon that overflows "),G=a("br",null,null,-1),B=a("br",null,null,-1),O=n("Blue"),P=n(" Blue icon "),R=n("Blue removeable"),x=n(" Blue icon removeable "),L=n("Blue link"),z=n("Blue link removeable"),N=n(" Blue label with icon that overflows "),V=a("br",null,null,-1),T=a("br",null,null,-1),j=n("Green"),F=n(" Green icon "),M=n("Green removeable"),$=n(" Green icon removeable "),q=n("Green link"),A=n("Green link removeable"),D=n(" Green label with icon that overflows "),E=a("br",null,null,-1),H=a("br",null,null,-1),J=n("Orange"),K=n(" Orange icon "),Q=n("Orange removeable"),S=n(" Orange icon removeable "),U=n("Orange link"),W=n("Orange link removeable"),X=n(" Orange label with icon that overflows "),Y=a("br",null,null,-1),Z=a("br",null,null,-1),ee=n("Red"),le=n(" Red icon "),oe=n("Red removeable"),ne=n(" Red icon removeable "),ce=n("Red link"),te=n("Red link removeable"),re=n(" Red label with icon that overflows "),ae=a("br",null,null,-1),ie=a("br",null,null,-1),fe=n("Purple"),se=n(" Purple icon "),ue=n("Purple removeable"),be=n(" Purple icon removeable "),pe=n("Purple link"),de=n("Purple link removeable"),_e=n(" Purple label with icon that overflows "),he=a("br",null,null,-1),me=a("br",null,null,-1),Ce=n("Cyan"),Ie=n(" Cyan icon "),ve=n("Cyan removeable"),ge=n(" Cyan icon removeable "),ye=n("Cyan link"),we=n("Cyan link removeable"),ke=n(" Cyan label with icon that overflows "),Ge=n("Grey"),Be=n("Grey icon "),Oe=n("Grey removeable"),Pe=n(" Grey icon removeable "),Re=n("Grey link"),xe=n("Grey link removeable"),Le=n(" Grey label with icon that overflows "),ze=a("br",null,null,-1),Ne=a("br",null,null,-1),Ve=n("Blue"),Te=n(" Blue icon "),je=n("Blue removeable"),Fe=n(" Blue icon removeable "),Me=n("Blue link"),$e=n("Blue link removeable"),qe=n(" Blue label with icon that overflows "),Ae=a("br",null,null,-1),De=a("br",null,null,-1),Ee=n("Green"),He=n(" Green icon "),Je=n("Green removeable"),Ke=n(" Green icon removeable "),Qe=n("Green link"),Se=n("Green link removeable"),Ue=n(" Green label with icon that overflows "),We=a("br",null,null,-1),Xe=a("br",null,null,-1),Ye=n("Orange"),Ze=n(" Orange icon "),el=n("Orange removeable"),ll=n(" Orange icon removeable "),ol=n("Orange link"),nl=n("Orange link removeable"),cl=n(" Orange label with icon that overflows "),tl=a("br",null,null,-1),rl=a("br",null,null,-1),al=n("Red"),il=n(" Red icon "),fl=n("Red removeable"),sl=n(" Red icon removeable "),ul=n("Red link"),bl=n("Red link removeable"),pl=n(" Red label with icon that overflows "),dl=a("br",null,null,-1),_l=a("br",null,null,-1),hl=n("Purple"),ml=n(" Purple icon "),Cl=n("Purple removeable"),Il=n(" Purple icon removeable "),vl=n("Purple link"),gl=n("Purple link removeable"),yl=n(" Purple label with icon that overflows "),wl=a("br",null,null,-1),kl=a("br",null,null,-1),Gl=n("Cyan"),Bl=n(" Cyan icon "),Ol=n("Cyan removeable"),Pl=n(" Cyan icon removeable "),Rl=n("Cyan link"),xl=n("Cyan link removeable"),Ll=n(" Cyan label with icon that overflows "),zl=n("Label is too long to fit in the label"),Ml=p({__name:"Label.story",setup(Nl){const c=()=>window.alert("Clicked close button");return(Vl,Tl)=>{const s=i("component-title"),o=i("pf-label"),f=i("story-canvas"),u=i("doc-page");return d(),_(u,{title:"Label"},{default:e(()=>[l(s,{name:"pf-label"}),l(f,{title:"Filled",source:`<pf-label>Grey</pf-label>
<pf-label>
  <template #icon>
    <InfoCircleIcon></InfoCircleIcon>
  </template>Grey icon
</pf-label>
<pf-label close @close="alert">Grey removeable</pf-label>
<pf-label close @close="alert">
  <template #icon>
    <InfoCircleIcon></InfoCircleIcon>
  </template>
  Grey icon removeable
</pf-label>
<pf-label href="#filled">Grey link</pf-label>
<pf-label href="#filled" close @close="alert">Grey link removeable</pf-label>
<pf-label close truncated @close="alert">
  <template #icon>
    <InfoCircleIcon></InfoCircleIcon>
  </template>
  Grey label with icon that overflows
</pf-label>
<br>
<br>
<pf-label color="blue">Blue</pf-label>
<pf-label color="blue">
  <template #icon>
    <InfoCircleIcon></InfoCircleIcon>
  </template>
  Blue icon
</pf-label>
<pf-label color="blue" close @close="alert">Blue removeable</pf-label>
<pf-label color="blue" close @close="alert">
  <template #icon>
    <InfoCircleIcon></InfoCircleIcon>
  </template>
  Blue icon removeable
</pf-label>
<pf-label color="blue" href="#filled">Blue link</pf-label>
<pf-label color="blue" href="#filled" close @close="alert">Blue link removeable</pf-label>
<pf-label color="blue" close truncated @close="alert">
  <template #icon>
    <InfoCircleIcon></InfoCircleIcon>
  </template>
  Blue label with icon that overflows
</pf-label>
<br>
<br>
<pf-label color="green">Green</pf-label>
<pf-label color="green">
  <template #icon>
    <InfoCircleIcon></InfoCircleIcon>
  </template>
  Green icon
</pf-label>
<pf-label color="green" close @close="alert">Green removeable</pf-label>
<pf-label color="green" close @close="alert">
  <template #icon>
    <InfoCircleIcon></InfoCircleIcon>
  </template>
  Green icon removeable
</pf-label>
<pf-label color="green" href="#filled">Green link</pf-label>
<pf-label color="green" href="#filled" close @close="alert">Green link removeable</pf-label>
<pf-label color="green" close truncated @close="alert">
  <template #icon>
    <InfoCircleIcon></InfoCircleIcon>
  </template>
  Green label with icon that overflows
</pf-label>
<br>
<br>
<pf-label color="orange">Orange</pf-label>
<pf-label color="orange">
  <template #icon>
    <InfoCircleIcon></InfoCircleIcon>
  </template>
  Orange icon
</pf-label>
<pf-label color="orange" close @close="alert">Orange removeable</pf-label>
<pf-label color="orange" close @close="alert">
  <template #icon>
    <InfoCircleIcon></InfoCircleIcon>
  </template>
  Orange icon removeable
</pf-label>
<pf-label color="orange" href="#filled">Orange link</pf-label>
<pf-label color="orange" href="#filled" close @close="alert">Orange link removeable</pf-label>
<pf-label color="orange" close truncated @close="alert">
  <template #icon>
    <InfoCircleIcon></InfoCircleIcon>
  </template>
  Orange label with icon that overflows
</pf-label>
<br>
<br>
<pf-label color="red">Red</pf-label>
<pf-label color="red">
  <template #icon>
    <InfoCircleIcon></InfoCircleIcon>
  </template>
  Red icon
</pf-label>
<pf-label color="red" close @close="alert">Red removeable</pf-label>
<pf-label color="red" close @close="alert">
  <template #icon>
    <InfoCircleIcon></InfoCircleIcon>
  </template>
  Red icon removeable
</pf-label>
<pf-label color="red" href="#filled">Red link</pf-label>
<pf-label color="red" href="#filled" close @close="alert">Red link removeable</pf-label>
<pf-label color="red" close truncated @close="alert">
  <template #icon>
    <InfoCircleIcon></InfoCircleIcon>
  </template>
  Red label with icon that overflows
</pf-label>
<br>
<br>
<pf-label color="purple">Purple</pf-label>
<pf-label color="purple">
  <template #icon>
    <InfoCircleIcon></InfoCircleIcon>
  </template>
  Purple icon
</pf-label>
<pf-label color="purple" close @close="alert">Purple removeable</pf-label>
<pf-label color="purple" close @close="alert">
  <template #icon>
    <InfoCircleIcon></InfoCircleIcon>
  </template>
  Purple icon removeable
</pf-label>
<pf-label color="purple" href="#filled">Purple link</pf-label>
<pf-label color="purple" href="#filled" close @close="alert">Purple link removeable</pf-label>
<pf-label color="purple" close truncated @close="alert">
  <template #icon>
    <InfoCircleIcon></InfoCircleIcon>
  </template>
  Purple label with icon that overflows
</pf-label>
<br>
<br>
<pf-label color="cyan">Cyan</pf-label>
<pf-label color="cyan">
  <template #icon>
    <InfoCircleIcon></InfoCircleIcon>
  </template>
  Cyan icon
</pf-label>
<pf-label color="cyan" close @close="alert">Cyan removeable</pf-label>
<pf-label color="cyan" close @close="alert">
  <template #icon>
    <InfoCircleIcon></InfoCircleIcon>
  </template>
  Cyan icon removeable
</pf-label>
<pf-label color="cyan" href="#filled">Cyan link</pf-label>
<pf-label color="cyan" href="#filled" close @close="alert">Cyan link removeable</pf-label>
<pf-label color="cyan" close truncated @close="alert">
  <template #icon>
    <InfoCircleIcon></InfoCircleIcon>
  </template>
  Cyan label with icon that overflows
</pf-label>`},{default:e(()=>[l(o,null,{default:e(()=>[C]),_:1}),l(o,null,{icon:e(()=>[l(t(r))]),default:e(()=>[I]),_:1}),l(o,{close:"",onClose:c},{default:e(()=>[v]),_:1}),l(o,{close:"",onClose:c},{icon:e(()=>[l(t(r))]),default:e(()=>[g]),_:1}),l(o,{href:"#filled"},{default:e(()=>[y]),_:1}),l(o,{href:"#filled",close:"",onClose:c},{default:e(()=>[w]),_:1}),l(o,{close:"",truncated:"",onClose:c},{icon:e(()=>[l(t(r))]),default:e(()=>[k]),_:1}),G,B,l(o,{color:"blue"},{default:e(()=>[O]),_:1}),l(o,{color:"blue"},{icon:e(()=>[l(t(r))]),default:e(()=>[P]),_:1}),l(o,{color:"blue",close:"",onClose:c},{default:e(()=>[R]),_:1}),l(o,{color:"blue",close:"",onClose:c},{icon:e(()=>[l(t(r))]),default:e(()=>[x]),_:1}),l(o,{color:"blue",href:"#filled"},{default:e(()=>[L]),_:1}),l(o,{color:"blue",href:"#filled",close:"",onClose:c},{default:e(()=>[z]),_:1}),l(o,{color:"blue",close:"",truncated:"",onClose:c},{icon:e(()=>[l(t(r))]),default:e(()=>[N]),_:1}),V,T,l(o,{color:"green"},{default:e(()=>[j]),_:1}),l(o,{color:"green"},{icon:e(()=>[l(t(r))]),default:e(()=>[F]),_:1}),l(o,{color:"green",close:"",onClose:c},{default:e(()=>[M]),_:1}),l(o,{color:"green",close:"",onClose:c},{icon:e(()=>[l(t(r))]),default:e(()=>[$]),_:1}),l(o,{color:"green",href:"#filled"},{default:e(()=>[q]),_:1}),l(o,{color:"green",href:"#filled",close:"",onClose:c},{default:e(()=>[A]),_:1}),l(o,{color:"green",close:"",truncated:"",onClose:c},{icon:e(()=>[l(t(r))]),default:e(()=>[D]),_:1}),E,H,l(o,{color:"orange"},{default:e(()=>[J]),_:1}),l(o,{color:"orange"},{icon:e(()=>[l(t(r))]),default:e(()=>[K]),_:1}),l(o,{color:"orange",close:"",onClose:c},{default:e(()=>[Q]),_:1}),l(o,{color:"orange",close:"",onClose:c},{icon:e(()=>[l(t(r))]),default:e(()=>[S]),_:1}),l(o,{color:"orange",href:"#filled"},{default:e(()=>[U]),_:1}),l(o,{color:"orange",href:"#filled",close:"",onClose:c},{default:e(()=>[W]),_:1}),l(o,{color:"orange",close:"",truncated:"",onClose:c},{icon:e(()=>[l(t(r))]),default:e(()=>[X]),_:1}),Y,Z,l(o,{color:"red"},{default:e(()=>[ee]),_:1}),l(o,{color:"red"},{icon:e(()=>[l(t(r))]),default:e(()=>[le]),_:1}),l(o,{color:"red",close:"",onClose:c},{default:e(()=>[oe]),_:1}),l(o,{color:"red",close:"",onClose:c},{icon:e(()=>[l(t(r))]),default:e(()=>[ne]),_:1}),l(o,{color:"red",href:"#filled"},{default:e(()=>[ce]),_:1}),l(o,{color:"red",href:"#filled",close:"",onClose:c},{default:e(()=>[te]),_:1}),l(o,{color:"red",close:"",truncated:"",onClose:c},{icon:e(()=>[l(t(r))]),default:e(()=>[re]),_:1}),ae,ie,l(o,{color:"purple"},{default:e(()=>[fe]),_:1}),l(o,{color:"purple"},{icon:e(()=>[l(t(r))]),default:e(()=>[se]),_:1}),l(o,{color:"purple",close:"",onClose:c},{default:e(()=>[ue]),_:1}),l(o,{color:"purple",close:"",onClose:c},{icon:e(()=>[l(t(r))]),default:e(()=>[be]),_:1}),l(o,{color:"purple",href:"#filled"},{default:e(()=>[pe]),_:1}),l(o,{color:"purple",href:"#filled",close:"",onClose:c},{default:e(()=>[de]),_:1}),l(o,{color:"purple",close:"",truncated:"",onClose:c},{icon:e(()=>[l(t(r))]),default:e(()=>[_e]),_:1}),he,me,l(o,{color:"cyan"},{default:e(()=>[Ce]),_:1}),l(o,{color:"cyan"},{icon:e(()=>[l(t(r))]),default:e(()=>[Ie]),_:1}),l(o,{color:"cyan",close:"",onClose:c},{default:e(()=>[ve]),_:1}),l(o,{color:"cyan",close:"",onClose:c},{icon:e(()=>[l(t(r))]),default:e(()=>[ge]),_:1}),l(o,{color:"cyan",href:"#filled"},{default:e(()=>[ye]),_:1}),l(o,{color:"cyan",href:"#filled",close:"",onClose:c},{default:e(()=>[we]),_:1}),l(o,{color:"cyan",close:"",truncated:"",onClose:c},{icon:e(()=>[l(t(r))]),default:e(()=>[ke]),_:1})]),_:1}),l(f,{title:"Outline",source:`<pf-label outline>Grey</pf-label>
<pf-label outline>
  <template #icon>
    <InfoCircleIcon></InfoCircleIcon>
  </template>Grey icon
</pf-label>
<pf-label outline close @close="alert">Grey removeable</pf-label>
<pf-label outline close @close="alert">
  <template #icon>
    <InfoCircleIcon></InfoCircleIcon>
  </template>
  Grey icon removeable
</pf-label>
<pf-label outline href="#filled">Grey link</pf-label>
<pf-label outline href="#filled" close @close="alert">Grey link removeable</pf-label>
<pf-label outline close truncated @close="alert">
  <template #icon>
    <InfoCircleIcon></InfoCircleIcon>
  </template>
  Grey label with icon that overflows
</pf-label>
<br>
<br>
<pf-label outline color="blue">Blue</pf-label>
<pf-label outline color="blue">
  <template #icon>
    <InfoCircleIcon></InfoCircleIcon>
  </template>
  Blue icon
</pf-label>
<pf-label outline color="blue" close @close="alert">Blue removeable</pf-label>
<pf-label outline color="blue" close @close="alert">
  <template #icon>
    <InfoCircleIcon></InfoCircleIcon>
  </template>
  Blue icon removeable
</pf-label>
<pf-label outline color="blue" href="#filled">Blue link</pf-label>
<pf-label outline color="blue" href="#filled" close @close="alert">Blue link removeable</pf-label>
<pf-label outline color="blue" close truncated @close="alert">
  <template #icon>
    <InfoCircleIcon></InfoCircleIcon>
  </template>
  Blue label with icon that overflows
</pf-label>
<br>
<br>
<pf-label outline color="green">Green</pf-label>
<pf-label outline color="green">
  <template #icon>
    <InfoCircleIcon></InfoCircleIcon>
  </template>
  Green icon
</pf-label>
<pf-label outline color="green" close @close="alert">Green removeable</pf-label>
<pf-label outline color="green" close @close="alert">
  <template #icon>
    <InfoCircleIcon></InfoCircleIcon>
  </template>
  Green icon removeable
</pf-label>
<pf-label outline color="green" href="#filled">Green link</pf-label>
<pf-label outline color="green" href="#filled" close @close="alert">Green link removeable</pf-label>
<pf-label outline color="green" close truncated @close="alert">
  <template #icon>
    <InfoCircleIcon></InfoCircleIcon>
  </template>
  Green label with icon that overflows
</pf-label>
<br>
<br>
<pf-label outline color="orange">Orange</pf-label>
<pf-label outline color="orange">
  <template #icon>
    <InfoCircleIcon></InfoCircleIcon>
  </template>
  Orange icon
</pf-label>
<pf-label outline color="orange" close @close="alert">Orange removeable</pf-label>
<pf-label outline color="orange" close @close="alert">
  <template #icon>
    <InfoCircleIcon></InfoCircleIcon>
  </template>
  Orange icon removeable
</pf-label>
<pf-label outline color="orange" href="#filled">Orange link</pf-label>
<pf-label outline color="orange" href="#filled" close @close="alert">Orange link removeable</pf-label>
<pf-label outline color="orange" close truncated @close="alert">
  <template #icon>
    <InfoCircleIcon></InfoCircleIcon>
  </template>
  Orange label with icon that overflows
</pf-label>
<br>
<br>
<pf-label outline color="red">Red</pf-label>
<pf-label outline color="red">
  <template #icon>
    <InfoCircleIcon></InfoCircleIcon>
  </template>
  Red icon
</pf-label>
<pf-label outline color="red" close @close="alert">Red removeable</pf-label>
<pf-label outline color="red" close @close="alert">
  <template #icon>
    <InfoCircleIcon></InfoCircleIcon>
  </template>
  Red icon removeable
</pf-label>
<pf-label outline color="red" href="#filled">Red link</pf-label>
<pf-label outline color="red" href="#filled" close @close="alert">Red link removeable</pf-label>
<pf-label outline color="red" close truncated @close="alert">
  <template #icon>
    <InfoCircleIcon></InfoCircleIcon>
  </template>
  Red label with icon that overflows
</pf-label>
<br>
<br>
<pf-label outline color="purple">Purple</pf-label>
<pf-label outline color="purple">
  <template #icon>
    <InfoCircleIcon></InfoCircleIcon>
  </template>
  Purple icon
</pf-label>
<pf-label outline color="purple" close @close="alert">Purple removeable</pf-label>
<pf-label outline color="purple" close @close="alert">
  <template #icon>
    <InfoCircleIcon></InfoCircleIcon>
  </template>
  Purple icon removeable
</pf-label>
<pf-label outline color="purple" href="#filled">Purple link</pf-label>
<pf-label outline color="purple" href="#filled" close @close="alert">Purple link removeable</pf-label>
<pf-label outline color="purple" close truncated @close="alert">
  <template #icon>
    <InfoCircleIcon></InfoCircleIcon>
  </template>
  Purple label with icon that overflows
</pf-label>
<br>
<br>
<pf-label outline color="cyan">Cyan</pf-label>
<pf-label outline color="cyan">
  <template #icon>
    <InfoCircleIcon></InfoCircleIcon>
  </template>
  Cyan icon
</pf-label>
<pf-label outline color="cyan" close @close="alert">Cyan removeable</pf-label>
<pf-label outline color="cyan" close @close="alert">
  <template #icon>
    <InfoCircleIcon></InfoCircleIcon>
  </template>
  Cyan icon removeable
</pf-label>
<pf-label outline color="cyan" href="#filled">Cyan link</pf-label>
<pf-label outline color="cyan" href="#filled" close @close="alert">Cyan link removeable</pf-label>
<pf-label outline color="cyan" close truncated @close="alert">
  <template #icon>
    <InfoCircleIcon></InfoCircleIcon>
  </template>
  Cyan label with icon that overflows
</pf-label>`},{default:e(()=>[l(o,{outline:""},{default:e(()=>[Ge]),_:1}),l(o,{outline:""},{icon:e(()=>[l(t(r))]),default:e(()=>[Be]),_:1}),l(o,{outline:"",close:"",onClose:c},{default:e(()=>[Oe]),_:1}),l(o,{outline:"",close:"",onClose:c},{icon:e(()=>[l(t(r))]),default:e(()=>[Pe]),_:1}),l(o,{outline:"",href:"#filled"},{default:e(()=>[Re]),_:1}),l(o,{outline:"",href:"#filled",close:"",onClose:c},{default:e(()=>[xe]),_:1}),l(o,{outline:"",close:"",truncated:"",onClose:c},{icon:e(()=>[l(t(r))]),default:e(()=>[Le]),_:1}),ze,Ne,l(o,{outline:"",color:"blue"},{default:e(()=>[Ve]),_:1}),l(o,{outline:"",color:"blue"},{icon:e(()=>[l(t(r))]),default:e(()=>[Te]),_:1}),l(o,{outline:"",color:"blue",close:"",onClose:c},{default:e(()=>[je]),_:1}),l(o,{outline:"",color:"blue",close:"",onClose:c},{icon:e(()=>[l(t(r))]),default:e(()=>[Fe]),_:1}),l(o,{outline:"",color:"blue",href:"#filled"},{default:e(()=>[Me]),_:1}),l(o,{outline:"",color:"blue",href:"#filled",close:"",onClose:c},{default:e(()=>[$e]),_:1}),l(o,{outline:"",color:"blue",close:"",truncated:"",onClose:c},{icon:e(()=>[l(t(r))]),default:e(()=>[qe]),_:1}),Ae,De,l(o,{outline:"",color:"green"},{default:e(()=>[Ee]),_:1}),l(o,{outline:"",color:"green"},{icon:e(()=>[l(t(r))]),default:e(()=>[He]),_:1}),l(o,{outline:"",color:"green",close:"",onClose:c},{default:e(()=>[Je]),_:1}),l(o,{outline:"",color:"green",close:"",onClose:c},{icon:e(()=>[l(t(r))]),default:e(()=>[Ke]),_:1}),l(o,{outline:"",color:"green",href:"#filled"},{default:e(()=>[Qe]),_:1}),l(o,{outline:"",color:"green",href:"#filled",close:"",onClose:c},{default:e(()=>[Se]),_:1}),l(o,{outline:"",color:"green",close:"",truncated:"",onClose:c},{icon:e(()=>[l(t(r))]),default:e(()=>[Ue]),_:1}),We,Xe,l(o,{outline:"",color:"orange"},{default:e(()=>[Ye]),_:1}),l(o,{outline:"",color:"orange"},{icon:e(()=>[l(t(r))]),default:e(()=>[Ze]),_:1}),l(o,{outline:"",color:"orange",close:"",onClose:c},{default:e(()=>[el]),_:1}),l(o,{outline:"",color:"orange",close:"",onClose:c},{icon:e(()=>[l(t(r))]),default:e(()=>[ll]),_:1}),l(o,{outline:"",color:"orange",href:"#filled"},{default:e(()=>[ol]),_:1}),l(o,{outline:"",color:"orange",href:"#filled",close:"",onClose:c},{default:e(()=>[nl]),_:1}),l(o,{outline:"",color:"orange",close:"",truncated:"",onClose:c},{icon:e(()=>[l(t(r))]),default:e(()=>[cl]),_:1}),tl,rl,l(o,{outline:"",color:"red"},{default:e(()=>[al]),_:1}),l(o,{outline:"",color:"red"},{icon:e(()=>[l(t(r))]),default:e(()=>[il]),_:1}),l(o,{outline:"",color:"red",close:"",onClose:c},{default:e(()=>[fl]),_:1}),l(o,{outline:"",color:"red",close:"",onClose:c},{icon:e(()=>[l(t(r))]),default:e(()=>[sl]),_:1}),l(o,{outline:"",color:"red",href:"#filled"},{default:e(()=>[ul]),_:1}),l(o,{outline:"",color:"red",href:"#filled",close:"",onClose:c},{default:e(()=>[bl]),_:1}),l(o,{outline:"",color:"red",close:"",truncated:"",onClose:c},{icon:e(()=>[l(t(r))]),default:e(()=>[pl]),_:1}),dl,_l,l(o,{outline:"",color:"purple"},{default:e(()=>[hl]),_:1}),l(o,{outline:"",color:"purple"},{icon:e(()=>[l(t(r))]),default:e(()=>[ml]),_:1}),l(o,{outline:"",color:"purple",close:"",onClose:c},{default:e(()=>[Cl]),_:1}),l(o,{outline:"",color:"purple",close:"",onClose:c},{icon:e(()=>[l(t(r))]),default:e(()=>[Il]),_:1}),l(o,{outline:"",color:"purple",href:"#filled"},{default:e(()=>[vl]),_:1}),l(o,{outline:"",color:"purple",href:"#filled",close:"",onClose:c},{default:e(()=>[gl]),_:1}),l(o,{outline:"",color:"purple",close:"",truncated:"",onClose:c},{icon:e(()=>[l(t(r))]),default:e(()=>[yl]),_:1}),wl,kl,l(o,{outline:"",color:"cyan"},{default:e(()=>[Gl]),_:1}),l(o,{outline:"",color:"cyan"},{icon:e(()=>[l(t(r))]),default:e(()=>[Bl]),_:1}),l(o,{outline:"",color:"cyan",close:"",onClose:c},{default:e(()=>[Ol]),_:1}),l(o,{outline:"",color:"cyan",close:"",onClose:c},{icon:e(()=>[l(t(r))]),default:e(()=>[Pl]),_:1}),l(o,{outline:"",color:"cyan",href:"#filled"},{default:e(()=>[Rl]),_:1}),l(o,{outline:"",color:"cyan",href:"#filled",close:"",onClose:c},{default:e(()=>[xl]),_:1}),l(o,{outline:"",color:"cyan",close:"",truncated:"",onClose:c},{icon:e(()=>[l(t(r))]),default:e(()=>[Ll]),_:1})]),_:1}),l(f,{title:"Truncated",source:'<pf-label truncated tooltip-position="right">Label is too long to fit in the label</pf-label>'},{default:e(()=>[l(o,{truncated:"","tooltip-position":"right"},{default:e(()=>[zl]),_:1})]),_:1})]),_:1})}}});export{Ml as default};
