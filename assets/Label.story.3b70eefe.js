import{c as b}from"./createIcon.c185b123.js";import{e as p,a as i,c as d,w as e,o as _,b as l,u as c,j as n,d as a}from"./index.34b7ba95.js";const h={name:"InfoCircleIcon",height:512,width:512,svgPath:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z",yOffset:0,xOffset:0},r=b(h);const m=n("Grey"),C=n("Grey icon "),v=n("Grey removeable"),g=n(" Grey icon removeable "),I=n("Grey link"),y=n("Grey link removeable"),w=n(" Grey label with icon that overflows "),k=a("br",null,null,-1),G=a("br",null,null,-1),B=n("Blue"),O=n(" Blue icon "),P=n("Blue removeable"),R=n(" Blue icon removeable "),x=n("Blue link"),L=n("Blue link removeable"),z=n(" Blue label with icon that overflows "),N=a("br",null,null,-1),V=a("br",null,null,-1),T=n("Green"),j=n(" Green icon "),F=n("Green removeable"),M=n(" Green icon removeable "),q=n("Green link"),A=n("Green link removeable"),D=n(" Green label with icon that overflows "),E=a("br",null,null,-1),H=a("br",null,null,-1),J=n("Orange"),K=n(" Orange icon "),Q=n("Orange removeable"),S=n(" Orange icon removeable "),U=n("Orange link"),W=n("Orange link removeable"),X=n(" Orange label with icon that overflows "),Y=a("br",null,null,-1),Z=a("br",null,null,-1),$=n("Red"),ee=n(" Red icon "),le=n("Red removeable"),oe=n(" Red icon removeable "),ne=n("Red link"),te=n("Red link removeable"),ce=n(" Red label with icon that overflows "),re=a("br",null,null,-1),ae=a("br",null,null,-1),ie=n("Purple"),se=n(" Purple icon "),fe=n("Purple removeable"),ue=n(" Purple icon removeable "),be=n("Purple link"),pe=n("Purple link removeable"),de=n(" Purple label with icon that overflows "),_e=a("br",null,null,-1),he=a("br",null,null,-1),me=n("Cyan"),Ce=n(" Cyan icon "),ve=n("Cyan removeable"),ge=n(" Cyan icon removeable "),Ie=n("Cyan link"),ye=n("Cyan link removeable"),we=n(" Cyan label with icon that overflows "),ke=n("Grey"),Ge=n("Grey icon "),Be=n("Grey removeable"),Oe=n(" Grey icon removeable "),Pe=n("Grey link"),Re=n("Grey link removeable"),xe=n(" Grey label with icon that overflows "),Le=a("br",null,null,-1),ze=a("br",null,null,-1),Ne=n("Blue"),Ve=n(" Blue icon "),Te=n("Blue removeable"),je=n(" Blue icon removeable "),Fe=n("Blue link"),Me=n("Blue link removeable"),qe=n(" Blue label with icon that overflows "),Ae=a("br",null,null,-1),De=a("br",null,null,-1),Ee=n("Green"),He=n(" Green icon "),Je=n("Green removeable"),Ke=n(" Green icon removeable "),Qe=n("Green link"),Se=n("Green link removeable"),Ue=n(" Green label with icon that overflows "),We=a("br",null,null,-1),Xe=a("br",null,null,-1),Ye=n("Orange"),Ze=n(" Orange icon "),$e=n("Orange removeable"),el=n(" Orange icon removeable "),ll=n("Orange link"),ol=n("Orange link removeable"),nl=n(" Orange label with icon that overflows "),tl=a("br",null,null,-1),cl=a("br",null,null,-1),rl=n("Red"),al=n(" Red icon "),il=n("Red removeable"),sl=n(" Red icon removeable "),fl=n("Red link"),ul=n("Red link removeable"),bl=n(" Red label with icon that overflows "),pl=a("br",null,null,-1),dl=a("br",null,null,-1),_l=n("Purple"),hl=n(" Purple icon "),ml=n("Purple removeable"),Cl=n(" Purple icon removeable "),vl=n("Purple link"),gl=n("Purple link removeable"),Il=n(" Purple label with icon that overflows "),yl=a("br",null,null,-1),wl=a("br",null,null,-1),kl=n("Cyan"),Gl=n(" Cyan icon "),Bl=n("Cyan removeable"),Ol=n(" Cyan icon removeable "),Pl=n("Cyan link"),Rl=n("Cyan link removeable"),xl=n(" Cyan label with icon that overflows "),Ll=n("Label is too long to fit in the label"),Fl=p({setup(zl){const t=()=>window.alert("Clicked close button");return(Nl,Vl)=>{const f=i("component-title"),o=i("pf-label"),s=i("story-canvas"),u=i("doc-page");return _(),d(u,{title:"Label"},{default:e(()=>[l(f,{name:"pf-label"}),l(s,{title:"Filled",source:`<pf-label>Grey</pf-label>
<pf-label>
  <template #icon>
    <InfoCircleIcon />
  </template>Grey icon
</pf-label>
<pf-label close @close="alert">Grey removeable</pf-label>
<pf-label close @close="alert">
  <template #icon>
    <InfoCircleIcon />
  </template>
  Grey icon removeable
</pf-label>
<pf-label href="#filled">Grey link</pf-label>
<pf-label href="#filled" close @close="alert">Grey link removeable</pf-label>
<pf-label close truncated @close="alert">
  <template #icon>
    <InfoCircleIcon />
  </template>
  Grey label with icon that overflows
</pf-label>
<br>
<br>
<pf-label color="blue">Blue</pf-label>
<pf-label color="blue">
  <template #icon>
    <InfoCircleIcon />
  </template>
  Blue icon
</pf-label>
<pf-label color="blue" close @close="alert">Blue removeable</pf-label>
<pf-label color="blue" close @close="alert">
  <template #icon>
    <InfoCircleIcon />
  </template>
  Blue icon removeable
</pf-label>
<pf-label color="blue" href="#filled">Blue link</pf-label>
<pf-label color="blue" href="#filled" close @close="alert">Blue link removeable</pf-label>
<pf-label color="blue" close truncated @close="alert">
  <template #icon>
    <InfoCircleIcon />
  </template>
  Blue label with icon that overflows
</pf-label>
<br>
<br>
<pf-label color="green">Green</pf-label>
<pf-label color="green">
  <template #icon>
    <InfoCircleIcon />
  </template>
  Green icon
</pf-label>
<pf-label color="green" close @close="alert">Green removeable</pf-label>
<pf-label color="green" close @close="alert">
  <template #icon>
    <InfoCircleIcon />
  </template>
  Green icon removeable
</pf-label>
<pf-label color="green" href="#filled">Green link</pf-label>
<pf-label color="green" href="#filled" close @close="alert">Green link removeable</pf-label>
<pf-label color="green" close truncated @close="alert">
  <template #icon>
    <InfoCircleIcon />
  </template>
  Green label with icon that overflows
</pf-label>
<br>
<br>
<pf-label color="orange">Orange</pf-label>
<pf-label color="orange">
  <template #icon>
    <InfoCircleIcon />
  </template>
  Orange icon
</pf-label>
<pf-label color="orange" close @close="alert">Orange removeable</pf-label>
<pf-label color="orange" close @close="alert">
  <template #icon>
    <InfoCircleIcon />
  </template>
  Orange icon removeable
</pf-label>
<pf-label color="orange" href="#filled">Orange link</pf-label>
<pf-label color="orange" href="#filled" close @close="alert">Orange link removeable</pf-label>
<pf-label color="orange" close truncated @close="alert">
  <template #icon>
    <InfoCircleIcon />
  </template>
  Orange label with icon that overflows
</pf-label>
<br>
<br>
<pf-label color="red">Red</pf-label>
<pf-label color="red">
  <template #icon>
    <InfoCircleIcon />
  </template>
  Red icon
</pf-label>
<pf-label color="red" close @close="alert">Red removeable</pf-label>
<pf-label color="red" close @close="alert">
  <template #icon>
    <InfoCircleIcon />
  </template>
  Red icon removeable
</pf-label>
<pf-label color="red" href="#filled">Red link</pf-label>
<pf-label color="red" href="#filled" close @close="alert">Red link removeable</pf-label>
<pf-label color="red" close truncated @close="alert">
  <template #icon>
    <InfoCircleIcon />
  </template>
  Red label with icon that overflows
</pf-label>
<br>
<br>
<pf-label color="purple">Purple</pf-label>
<pf-label color="purple">
  <template #icon>
    <InfoCircleIcon />
  </template>
  Purple icon
</pf-label>
<pf-label color="purple" close @close="alert">Purple removeable</pf-label>
<pf-label color="purple" close @close="alert">
  <template #icon>
    <InfoCircleIcon />
  </template>
  Purple icon removeable
</pf-label>
<pf-label color="purple" href="#filled">Purple link</pf-label>
<pf-label color="purple" href="#filled" close @close="alert">Purple link removeable</pf-label>
<pf-label color="purple" close truncated @close="alert">
  <template #icon>
    <InfoCircleIcon />
  </template>
  Purple label with icon that overflows
</pf-label>
<br>
<br>
<pf-label color="cyan">Cyan</pf-label>
<pf-label color="cyan">
  <template #icon>
    <InfoCircleIcon />
  </template>
  Cyan icon
</pf-label>
<pf-label color="cyan" close @close="alert">Cyan removeable</pf-label>
<pf-label color="cyan" close @close="alert">
  <template #icon>
    <InfoCircleIcon />
  </template>
  Cyan icon removeable
</pf-label>
<pf-label color="cyan" href="#filled">Cyan link</pf-label>
<pf-label color="cyan" href="#filled" close @close="alert">Cyan link removeable</pf-label>
<pf-label color="cyan" close truncated @close="alert">
  <template #icon>
    <InfoCircleIcon />
  </template>
  Cyan label with icon that overflows
</pf-label>`},{default:e(()=>[l(o,null,{default:e(()=>[m]),_:1}),l(o,null,{icon:e(()=>[l(c(r))]),default:e(()=>[C]),_:1}),l(o,{close:"",onClose:t},{default:e(()=>[v]),_:1}),l(o,{close:"",onClose:t},{icon:e(()=>[l(c(r))]),default:e(()=>[g]),_:1}),l(o,{href:"#filled"},{default:e(()=>[I]),_:1}),l(o,{href:"#filled",close:"",onClose:t},{default:e(()=>[y]),_:1}),l(o,{close:"",truncated:"",onClose:t},{icon:e(()=>[l(c(r))]),default:e(()=>[w]),_:1}),k,G,l(o,{color:"blue"},{default:e(()=>[B]),_:1}),l(o,{color:"blue"},{icon:e(()=>[l(c(r))]),default:e(()=>[O]),_:1}),l(o,{color:"blue",close:"",onClose:t},{default:e(()=>[P]),_:1}),l(o,{color:"blue",close:"",onClose:t},{icon:e(()=>[l(c(r))]),default:e(()=>[R]),_:1}),l(o,{color:"blue",href:"#filled"},{default:e(()=>[x]),_:1}),l(o,{color:"blue",href:"#filled",close:"",onClose:t},{default:e(()=>[L]),_:1}),l(o,{color:"blue",close:"",truncated:"",onClose:t},{icon:e(()=>[l(c(r))]),default:e(()=>[z]),_:1}),N,V,l(o,{color:"green"},{default:e(()=>[T]),_:1}),l(o,{color:"green"},{icon:e(()=>[l(c(r))]),default:e(()=>[j]),_:1}),l(o,{color:"green",close:"",onClose:t},{default:e(()=>[F]),_:1}),l(o,{color:"green",close:"",onClose:t},{icon:e(()=>[l(c(r))]),default:e(()=>[M]),_:1}),l(o,{color:"green",href:"#filled"},{default:e(()=>[q]),_:1}),l(o,{color:"green",href:"#filled",close:"",onClose:t},{default:e(()=>[A]),_:1}),l(o,{color:"green",close:"",truncated:"",onClose:t},{icon:e(()=>[l(c(r))]),default:e(()=>[D]),_:1}),E,H,l(o,{color:"orange"},{default:e(()=>[J]),_:1}),l(o,{color:"orange"},{icon:e(()=>[l(c(r))]),default:e(()=>[K]),_:1}),l(o,{color:"orange",close:"",onClose:t},{default:e(()=>[Q]),_:1}),l(o,{color:"orange",close:"",onClose:t},{icon:e(()=>[l(c(r))]),default:e(()=>[S]),_:1}),l(o,{color:"orange",href:"#filled"},{default:e(()=>[U]),_:1}),l(o,{color:"orange",href:"#filled",close:"",onClose:t},{default:e(()=>[W]),_:1}),l(o,{color:"orange",close:"",truncated:"",onClose:t},{icon:e(()=>[l(c(r))]),default:e(()=>[X]),_:1}),Y,Z,l(o,{color:"red"},{default:e(()=>[$]),_:1}),l(o,{color:"red"},{icon:e(()=>[l(c(r))]),default:e(()=>[ee]),_:1}),l(o,{color:"red",close:"",onClose:t},{default:e(()=>[le]),_:1}),l(o,{color:"red",close:"",onClose:t},{icon:e(()=>[l(c(r))]),default:e(()=>[oe]),_:1}),l(o,{color:"red",href:"#filled"},{default:e(()=>[ne]),_:1}),l(o,{color:"red",href:"#filled",close:"",onClose:t},{default:e(()=>[te]),_:1}),l(o,{color:"red",close:"",truncated:"",onClose:t},{icon:e(()=>[l(c(r))]),default:e(()=>[ce]),_:1}),re,ae,l(o,{color:"purple"},{default:e(()=>[ie]),_:1}),l(o,{color:"purple"},{icon:e(()=>[l(c(r))]),default:e(()=>[se]),_:1}),l(o,{color:"purple",close:"",onClose:t},{default:e(()=>[fe]),_:1}),l(o,{color:"purple",close:"",onClose:t},{icon:e(()=>[l(c(r))]),default:e(()=>[ue]),_:1}),l(o,{color:"purple",href:"#filled"},{default:e(()=>[be]),_:1}),l(o,{color:"purple",href:"#filled",close:"",onClose:t},{default:e(()=>[pe]),_:1}),l(o,{color:"purple",close:"",truncated:"",onClose:t},{icon:e(()=>[l(c(r))]),default:e(()=>[de]),_:1}),_e,he,l(o,{color:"cyan"},{default:e(()=>[me]),_:1}),l(o,{color:"cyan"},{icon:e(()=>[l(c(r))]),default:e(()=>[Ce]),_:1}),l(o,{color:"cyan",close:"",onClose:t},{default:e(()=>[ve]),_:1}),l(o,{color:"cyan",close:"",onClose:t},{icon:e(()=>[l(c(r))]),default:e(()=>[ge]),_:1}),l(o,{color:"cyan",href:"#filled"},{default:e(()=>[Ie]),_:1}),l(o,{color:"cyan",href:"#filled",close:"",onClose:t},{default:e(()=>[ye]),_:1}),l(o,{color:"cyan",close:"",truncated:"",onClose:t},{icon:e(()=>[l(c(r))]),default:e(()=>[we]),_:1})]),_:1}),l(s,{title:"Outline",source:`<pf-label outline>Grey</pf-label>
<pf-label outline>
  <template #icon>
    <InfoCircleIcon />
  </template>Grey icon
</pf-label>
<pf-label outline close @close="alert">Grey removeable</pf-label>
<pf-label outline close @close="alert">
  <template #icon>
    <InfoCircleIcon />
  </template>
  Grey icon removeable
</pf-label>
<pf-label outline href="#filled">Grey link</pf-label>
<pf-label outline href="#filled" close @close="alert">Grey link removeable</pf-label>
<pf-label outline close truncated @close="alert">
  <template #icon>
    <InfoCircleIcon />
  </template>
  Grey label with icon that overflows
</pf-label>
<br>
<br>
<pf-label outline color="blue">Blue</pf-label>
<pf-label outline color="blue">
  <template #icon>
    <InfoCircleIcon />
  </template>
  Blue icon
</pf-label>
<pf-label outline color="blue" close @close="alert">Blue removeable</pf-label>
<pf-label outline color="blue" close @close="alert">
  <template #icon>
    <InfoCircleIcon />
  </template>
  Blue icon removeable
</pf-label>
<pf-label outline color="blue" href="#filled">Blue link</pf-label>
<pf-label outline color="blue" href="#filled" close @close="alert">Blue link removeable</pf-label>
<pf-label outline color="blue" close truncated @close="alert">
  <template #icon>
    <InfoCircleIcon />
  </template>
  Blue label with icon that overflows
</pf-label>
<br>
<br>
<pf-label outline color="green">Green</pf-label>
<pf-label outline color="green">
  <template #icon>
    <InfoCircleIcon />
  </template>
  Green icon
</pf-label>
<pf-label outline color="green" close @close="alert">Green removeable</pf-label>
<pf-label outline color="green" close @close="alert">
  <template #icon>
    <InfoCircleIcon />
  </template>
  Green icon removeable
</pf-label>
<pf-label outline color="green" href="#filled">Green link</pf-label>
<pf-label outline color="green" href="#filled" close @close="alert">Green link removeable</pf-label>
<pf-label outline color="green" close truncated @close="alert">
  <template #icon>
    <InfoCircleIcon />
  </template>
  Green label with icon that overflows
</pf-label>
<br>
<br>
<pf-label outline color="orange">Orange</pf-label>
<pf-label outline color="orange">
  <template #icon>
    <InfoCircleIcon />
  </template>
  Orange icon
</pf-label>
<pf-label outline color="orange" close @close="alert">Orange removeable</pf-label>
<pf-label outline color="orange" close @close="alert">
  <template #icon>
    <InfoCircleIcon />
  </template>
  Orange icon removeable
</pf-label>
<pf-label outline color="orange" href="#filled">Orange link</pf-label>
<pf-label outline color="orange" href="#filled" close @close="alert">Orange link removeable</pf-label>
<pf-label outline color="orange" close truncated @close="alert">
  <template #icon>
    <InfoCircleIcon />
  </template>
  Orange label with icon that overflows
</pf-label>
<br>
<br>
<pf-label outline color="red">Red</pf-label>
<pf-label outline color="red">
  <template #icon>
    <InfoCircleIcon />
  </template>
  Red icon
</pf-label>
<pf-label outline color="red" close @close="alert">Red removeable</pf-label>
<pf-label outline color="red" close @close="alert">
  <template #icon>
    <InfoCircleIcon />
  </template>
  Red icon removeable
</pf-label>
<pf-label outline color="red" href="#filled">Red link</pf-label>
<pf-label outline color="red" href="#filled" close @close="alert">Red link removeable</pf-label>
<pf-label outline color="red" close truncated @close="alert">
  <template #icon>
    <InfoCircleIcon />
  </template>
  Red label with icon that overflows
</pf-label>
<br>
<br>
<pf-label outline color="purple">Purple</pf-label>
<pf-label outline color="purple">
  <template #icon>
    <InfoCircleIcon />
  </template>
  Purple icon
</pf-label>
<pf-label outline color="purple" close @close="alert">Purple removeable</pf-label>
<pf-label outline color="purple" close @close="alert">
  <template #icon>
    <InfoCircleIcon />
  </template>
  Purple icon removeable
</pf-label>
<pf-label outline color="purple" href="#filled">Purple link</pf-label>
<pf-label outline color="purple" href="#filled" close @close="alert">Purple link removeable</pf-label>
<pf-label outline color="purple" close truncated @close="alert">
  <template #icon>
    <InfoCircleIcon />
  </template>
  Purple label with icon that overflows
</pf-label>
<br>
<br>
<pf-label outline color="cyan">Cyan</pf-label>
<pf-label outline color="cyan">
  <template #icon>
    <InfoCircleIcon />
  </template>
  Cyan icon
</pf-label>
<pf-label outline color="cyan" close @close="alert">Cyan removeable</pf-label>
<pf-label outline color="cyan" close @close="alert">
  <template #icon>
    <InfoCircleIcon />
  </template>
  Cyan icon removeable
</pf-label>
<pf-label outline color="cyan" href="#filled">Cyan link</pf-label>
<pf-label outline color="cyan" href="#filled" close @close="alert">Cyan link removeable</pf-label>
<pf-label outline color="cyan" close truncated @close="alert">
  <template #icon>
    <InfoCircleIcon />
  </template>
  Cyan label with icon that overflows
</pf-label>`},{default:e(()=>[l(o,{outline:""},{default:e(()=>[ke]),_:1}),l(o,{outline:""},{icon:e(()=>[l(c(r))]),default:e(()=>[Ge]),_:1}),l(o,{outline:"",close:"",onClose:t},{default:e(()=>[Be]),_:1}),l(o,{outline:"",close:"",onClose:t},{icon:e(()=>[l(c(r))]),default:e(()=>[Oe]),_:1}),l(o,{outline:"",href:"#filled"},{default:e(()=>[Pe]),_:1}),l(o,{outline:"",href:"#filled",close:"",onClose:t},{default:e(()=>[Re]),_:1}),l(o,{outline:"",close:"",truncated:"",onClose:t},{icon:e(()=>[l(c(r))]),default:e(()=>[xe]),_:1}),Le,ze,l(o,{outline:"",color:"blue"},{default:e(()=>[Ne]),_:1}),l(o,{outline:"",color:"blue"},{icon:e(()=>[l(c(r))]),default:e(()=>[Ve]),_:1}),l(o,{outline:"",color:"blue",close:"",onClose:t},{default:e(()=>[Te]),_:1}),l(o,{outline:"",color:"blue",close:"",onClose:t},{icon:e(()=>[l(c(r))]),default:e(()=>[je]),_:1}),l(o,{outline:"",color:"blue",href:"#filled"},{default:e(()=>[Fe]),_:1}),l(o,{outline:"",color:"blue",href:"#filled",close:"",onClose:t},{default:e(()=>[Me]),_:1}),l(o,{outline:"",color:"blue",close:"",truncated:"",onClose:t},{icon:e(()=>[l(c(r))]),default:e(()=>[qe]),_:1}),Ae,De,l(o,{outline:"",color:"green"},{default:e(()=>[Ee]),_:1}),l(o,{outline:"",color:"green"},{icon:e(()=>[l(c(r))]),default:e(()=>[He]),_:1}),l(o,{outline:"",color:"green",close:"",onClose:t},{default:e(()=>[Je]),_:1}),l(o,{outline:"",color:"green",close:"",onClose:t},{icon:e(()=>[l(c(r))]),default:e(()=>[Ke]),_:1}),l(o,{outline:"",color:"green",href:"#filled"},{default:e(()=>[Qe]),_:1}),l(o,{outline:"",color:"green",href:"#filled",close:"",onClose:t},{default:e(()=>[Se]),_:1}),l(o,{outline:"",color:"green",close:"",truncated:"",onClose:t},{icon:e(()=>[l(c(r))]),default:e(()=>[Ue]),_:1}),We,Xe,l(o,{outline:"",color:"orange"},{default:e(()=>[Ye]),_:1}),l(o,{outline:"",color:"orange"},{icon:e(()=>[l(c(r))]),default:e(()=>[Ze]),_:1}),l(o,{outline:"",color:"orange",close:"",onClose:t},{default:e(()=>[$e]),_:1}),l(o,{outline:"",color:"orange",close:"",onClose:t},{icon:e(()=>[l(c(r))]),default:e(()=>[el]),_:1}),l(o,{outline:"",color:"orange",href:"#filled"},{default:e(()=>[ll]),_:1}),l(o,{outline:"",color:"orange",href:"#filled",close:"",onClose:t},{default:e(()=>[ol]),_:1}),l(o,{outline:"",color:"orange",close:"",truncated:"",onClose:t},{icon:e(()=>[l(c(r))]),default:e(()=>[nl]),_:1}),tl,cl,l(o,{outline:"",color:"red"},{default:e(()=>[rl]),_:1}),l(o,{outline:"",color:"red"},{icon:e(()=>[l(c(r))]),default:e(()=>[al]),_:1}),l(o,{outline:"",color:"red",close:"",onClose:t},{default:e(()=>[il]),_:1}),l(o,{outline:"",color:"red",close:"",onClose:t},{icon:e(()=>[l(c(r))]),default:e(()=>[sl]),_:1}),l(o,{outline:"",color:"red",href:"#filled"},{default:e(()=>[fl]),_:1}),l(o,{outline:"",color:"red",href:"#filled",close:"",onClose:t},{default:e(()=>[ul]),_:1}),l(o,{outline:"",color:"red",close:"",truncated:"",onClose:t},{icon:e(()=>[l(c(r))]),default:e(()=>[bl]),_:1}),pl,dl,l(o,{outline:"",color:"purple"},{default:e(()=>[_l]),_:1}),l(o,{outline:"",color:"purple"},{icon:e(()=>[l(c(r))]),default:e(()=>[hl]),_:1}),l(o,{outline:"",color:"purple",close:"",onClose:t},{default:e(()=>[ml]),_:1}),l(o,{outline:"",color:"purple",close:"",onClose:t},{icon:e(()=>[l(c(r))]),default:e(()=>[Cl]),_:1}),l(o,{outline:"",color:"purple",href:"#filled"},{default:e(()=>[vl]),_:1}),l(o,{outline:"",color:"purple",href:"#filled",close:"",onClose:t},{default:e(()=>[gl]),_:1}),l(o,{outline:"",color:"purple",close:"",truncated:"",onClose:t},{icon:e(()=>[l(c(r))]),default:e(()=>[Il]),_:1}),yl,wl,l(o,{outline:"",color:"cyan"},{default:e(()=>[kl]),_:1}),l(o,{outline:"",color:"cyan"},{icon:e(()=>[l(c(r))]),default:e(()=>[Gl]),_:1}),l(o,{outline:"",color:"cyan",close:"",onClose:t},{default:e(()=>[Bl]),_:1}),l(o,{outline:"",color:"cyan",close:"",onClose:t},{icon:e(()=>[l(c(r))]),default:e(()=>[Ol]),_:1}),l(o,{outline:"",color:"cyan",href:"#filled"},{default:e(()=>[Pl]),_:1}),l(o,{outline:"",color:"cyan",href:"#filled",close:"",onClose:t},{default:e(()=>[Rl]),_:1}),l(o,{outline:"",color:"cyan",close:"",truncated:"",onClose:t},{icon:e(()=>[l(c(r))]),default:e(()=>[xl]),_:1})]),_:1}),l(s,{title:"Truncated",source:'<pf-label truncated tooltip-position="right">Label is too long to fit in the label</pf-label>'},{default:e(()=>[l(o,{truncated:"","tooltip-position":"right"},{default:e(()=>[Ll]),_:1})]),_:1})]),_:1})}}});export{Fl as default};
