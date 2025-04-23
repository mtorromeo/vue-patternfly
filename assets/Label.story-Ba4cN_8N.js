import{C as i}from"./circle-info-icon-0J0tOPyo.js";import{g as c,m as v,a as u,c as g,o as C,w as e,b as o,d as f,e as n,u as a}from"./index-DK9vAQUq.js";const x=c({__name:"Label.story",setup(w){const m=v();function r(d){var p;const l=(p=d.target)==null?void 0:p.closest(".pf-v5-c-label");l instanceof HTMLElement&&m.add({title:`Clicked close button on "${l.innerText}"`,variant:"info"})}return(d,l)=>{const p=u("component-info"),t=u("pf-label"),b=u("story-canvas"),s=u("doc-page");return C(),g(s,{name:"Components/Label.story.vue",title:"Label"},{description:e(()=>l[0]||(l[0]=[n("The "),f("b",null,"label",-1),n(" component allows users to add specific element captions for user clarity and convenience.")])),apidocs:e(()=>[o(p,{src:"packages/core/src/components/Label.vue",doc:{name:"PfLabel",exportName:"default",displayName:"Label",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"color",description:"The color of the label outline/fill",required:!1,type:{name:"union",elements:[{name:'"blue"'},{name:'"cyan"'},{name:'"green"'},{name:'"orange"'},{name:'"purple"'},{name:'"red"'},{name:'"gold"'},{name:'"grey"'}]},defaultValue:{func:!1,value:"'grey'"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"outline"'},{name:'"filled"'}]},defaultValue:{func:!1,value:"'filled'"}},{name:"tooltipPosition",required:!1,type:{name:"Placement"},defaultValue:{func:!1,value:"'top'"}},{name:"to",required:!1,type:{name:"RouteLocationRaw"}},{name:"href",required:!1,type:{name:"string"}},{name:"outline",required:!1,type:{name:"boolean"}},{name:"compact",description:"Flag indicating the label is compact.",required:!1,type:{name:"boolean"}},{name:"overflow",description:"Flag indicating if the label is an overflow label.",required:!1,type:{name:"boolean"}},{name:"textMaxWidth",description:"The max width of the label before it is truncated. Can be any valid CSS unit, such as '100%', '100px', or '16ch'.",required:!1,type:{name:"string"}},{name:"closeBtnAriaLabel",description:"Aria label for close button",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Close'"}},{name:"onClose",description:"Callback for when the label is clicked. This should not be passed in if the href or editable props are also passed in.",required:!1,type:{name:"TSFunctionType"}}],slots:[{name:"icon"},{name:"default"},{name:"actions"}],sourceFiles:["../../packages/core/src/components/Label.vue"]}})]),default:e(()=>[o(b,{title:"Filled",source:`<pf-label>Grey</pf-label>
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
</pf-label>`},{default:e(()=>[o(t,null,{default:e(()=>l[1]||(l[1]=[n("Grey")])),_:1}),o(t,null,{icon:e(()=>[o(a(i))]),default:e(()=>[l[2]||(l[2]=n("Grey icon "))]),_:1}),o(t,{onClose:r},{default:e(()=>l[3]||(l[3]=[n("Grey removeable")])),_:1}),o(t,{onClose:r},{icon:e(()=>[o(a(i))]),default:e(()=>[l[4]||(l[4]=n(" Grey icon removeable "))]),_:1}),o(t,{href:"#filled"},{default:e(()=>l[5]||(l[5]=[n("Grey link")])),_:1}),o(t,{href:"#filled",onClose:r},{default:e(()=>l[6]||(l[6]=[n("Grey link removeable")])),_:1}),o(t,{"text-max-width":"16ch",onClose:r},{icon:e(()=>[o(a(i))]),default:e(()=>[l[7]||(l[7]=n(" Grey label with icon that overflows "))]),_:1}),l[57]||(l[57]=f("br",null,null,-1)),l[58]||(l[58]=f("br",null,null,-1)),o(t,{color:"blue"},{default:e(()=>l[8]||(l[8]=[n("Blue")])),_:1}),o(t,{color:"blue"},{icon:e(()=>[o(a(i))]),default:e(()=>[l[9]||(l[9]=n(" Blue icon "))]),_:1}),o(t,{color:"blue",onClose:r},{default:e(()=>l[10]||(l[10]=[n("Blue removeable")])),_:1}),o(t,{color:"blue",onClose:r},{icon:e(()=>[o(a(i))]),default:e(()=>[l[11]||(l[11]=n(" Blue icon removeable "))]),_:1}),o(t,{color:"blue",href:"#filled"},{default:e(()=>l[12]||(l[12]=[n("Blue link")])),_:1}),o(t,{color:"blue",href:"#filled",onClose:r},{default:e(()=>l[13]||(l[13]=[n("Blue link removeable")])),_:1}),o(t,{color:"blue","text-max-width":"16ch",onClose:r},{icon:e(()=>[o(a(i))]),default:e(()=>[l[14]||(l[14]=n(" Blue label with icon that overflows "))]),_:1}),l[59]||(l[59]=f("br",null,null,-1)),l[60]||(l[60]=f("br",null,null,-1)),o(t,{color:"green"},{default:e(()=>l[15]||(l[15]=[n("Green")])),_:1}),o(t,{color:"green"},{icon:e(()=>[o(a(i))]),default:e(()=>[l[16]||(l[16]=n(" Green icon "))]),_:1}),o(t,{color:"green",onClose:r},{default:e(()=>l[17]||(l[17]=[n("Green removeable")])),_:1}),o(t,{color:"green",onClose:r},{icon:e(()=>[o(a(i))]),default:e(()=>[l[18]||(l[18]=n(" Green icon removeable "))]),_:1}),o(t,{color:"green",href:"#filled"},{default:e(()=>l[19]||(l[19]=[n("Green link")])),_:1}),o(t,{color:"green",href:"#filled",onClose:r},{default:e(()=>l[20]||(l[20]=[n("Green link removeable")])),_:1}),o(t,{color:"green","text-max-width":"16ch",onClose:r},{icon:e(()=>[o(a(i))]),default:e(()=>[l[21]||(l[21]=n(" Green label with icon that overflows "))]),_:1}),l[61]||(l[61]=f("br",null,null,-1)),l[62]||(l[62]=f("br",null,null,-1)),o(t,{color:"orange"},{default:e(()=>l[22]||(l[22]=[n("Orange")])),_:1}),o(t,{color:"orange"},{icon:e(()=>[o(a(i))]),default:e(()=>[l[23]||(l[23]=n(" Orange icon "))]),_:1}),o(t,{color:"orange",onClose:r},{default:e(()=>l[24]||(l[24]=[n("Orange removeable")])),_:1}),o(t,{color:"orange",onClose:r},{icon:e(()=>[o(a(i))]),default:e(()=>[l[25]||(l[25]=n(" Orange icon removeable "))]),_:1}),o(t,{color:"orange",href:"#filled"},{default:e(()=>l[26]||(l[26]=[n("Orange link")])),_:1}),o(t,{color:"orange",href:"#filled",onClose:r},{default:e(()=>l[27]||(l[27]=[n("Orange link removeable")])),_:1}),o(t,{color:"orange","text-max-width":"16ch",onClose:r},{icon:e(()=>[o(a(i))]),default:e(()=>[l[28]||(l[28]=n(" Orange label with icon that overflows "))]),_:1}),l[63]||(l[63]=f("br",null,null,-1)),l[64]||(l[64]=f("br",null,null,-1)),o(t,{color:"red"},{default:e(()=>l[29]||(l[29]=[n("Red")])),_:1}),o(t,{color:"red"},{icon:e(()=>[o(a(i))]),default:e(()=>[l[30]||(l[30]=n(" Red icon "))]),_:1}),o(t,{color:"red",onClose:r},{default:e(()=>l[31]||(l[31]=[n("Red removeable")])),_:1}),o(t,{color:"red",onClose:r},{icon:e(()=>[o(a(i))]),default:e(()=>[l[32]||(l[32]=n(" Red icon removeable "))]),_:1}),o(t,{color:"red",href:"#filled"},{default:e(()=>l[33]||(l[33]=[n("Red link")])),_:1}),o(t,{color:"red",href:"#filled",onClose:r},{default:e(()=>l[34]||(l[34]=[n("Red link removeable")])),_:1}),o(t,{color:"red","text-max-width":"16ch",onClose:r},{icon:e(()=>[o(a(i))]),default:e(()=>[l[35]||(l[35]=n(" Red label with icon that overflows "))]),_:1}),l[65]||(l[65]=f("br",null,null,-1)),l[66]||(l[66]=f("br",null,null,-1)),o(t,{color:"purple"},{default:e(()=>l[36]||(l[36]=[n("Purple")])),_:1}),o(t,{color:"purple"},{icon:e(()=>[o(a(i))]),default:e(()=>[l[37]||(l[37]=n(" Purple icon "))]),_:1}),o(t,{color:"purple",onClose:r},{default:e(()=>l[38]||(l[38]=[n("Purple removeable")])),_:1}),o(t,{color:"purple",onClose:r},{icon:e(()=>[o(a(i))]),default:e(()=>[l[39]||(l[39]=n(" Purple icon removeable "))]),_:1}),o(t,{color:"purple",href:"#filled"},{default:e(()=>l[40]||(l[40]=[n("Purple link")])),_:1}),o(t,{color:"purple",href:"#filled",onClose:r},{default:e(()=>l[41]||(l[41]=[n("Purple link removeable")])),_:1}),o(t,{color:"purple","text-max-width":"16ch",onClose:r},{icon:e(()=>[o(a(i))]),default:e(()=>[l[42]||(l[42]=n(" Purple label with icon that overflows "))]),_:1}),l[67]||(l[67]=f("br",null,null,-1)),l[68]||(l[68]=f("br",null,null,-1)),o(t,{color:"cyan"},{default:e(()=>l[43]||(l[43]=[n("Cyan")])),_:1}),o(t,{color:"cyan"},{icon:e(()=>[o(a(i))]),default:e(()=>[l[44]||(l[44]=n(" Cyan icon "))]),_:1}),o(t,{color:"cyan",onClose:r},{default:e(()=>l[45]||(l[45]=[n("Cyan removeable")])),_:1}),o(t,{color:"cyan",onClose:r},{icon:e(()=>[o(a(i))]),default:e(()=>[l[46]||(l[46]=n(" Cyan icon removeable "))]),_:1}),o(t,{color:"cyan",href:"#filled"},{default:e(()=>l[47]||(l[47]=[n("Cyan link")])),_:1}),o(t,{color:"cyan",href:"#filled",onClose:r},{default:e(()=>l[48]||(l[48]=[n("Cyan link removeable")])),_:1}),o(t,{color:"cyan","text-max-width":"16ch",onClose:r},{icon:e(()=>[o(a(i))]),default:e(()=>[l[49]||(l[49]=n(" Cyan label with icon that overflows "))]),_:1}),l[69]||(l[69]=f("br",null,null,-1)),l[70]||(l[70]=f("br",null,null,-1)),o(t,{color:"gold"},{default:e(()=>l[50]||(l[50]=[n("Gold")])),_:1}),o(t,{color:"gold"},{icon:e(()=>[o(a(i))]),default:e(()=>[l[51]||(l[51]=n(" Gold icon "))]),_:1}),o(t,{color:"gold",onClose:r},{default:e(()=>l[52]||(l[52]=[n("Gold removeable")])),_:1}),o(t,{color:"gold",onClose:r},{icon:e(()=>[o(a(i))]),default:e(()=>[l[53]||(l[53]=n(" Gold icon removeable "))]),_:1}),o(t,{color:"gold",href:"#filled"},{default:e(()=>l[54]||(l[54]=[n("Gold link")])),_:1}),o(t,{color:"gold",href:"#filled",onClose:r},{default:e(()=>l[55]||(l[55]=[n("Gold link removeable")])),_:1}),o(t,{color:"gold","text-max-width":"16ch",onClose:r},{icon:e(()=>[o(a(i))]),default:e(()=>[l[56]||(l[56]=n(" Gold label with icon that overflows "))]),_:1})]),_:1}),o(b,{title:"Outline",source:`<pf-label outline>Grey</pf-label>
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
</pf-label>`},{default:e(()=>[o(t,{outline:""},{default:e(()=>l[71]||(l[71]=[n("Grey")])),_:1}),o(t,{outline:""},{icon:e(()=>[o(a(i))]),default:e(()=>[l[72]||(l[72]=n("Grey icon "))]),_:1}),o(t,{outline:"",onClose:r},{default:e(()=>l[73]||(l[73]=[n("Grey removeable")])),_:1}),o(t,{outline:"",onClose:r},{icon:e(()=>[o(a(i))]),default:e(()=>[l[74]||(l[74]=n(" Grey icon removeable "))]),_:1}),o(t,{outline:"",href:"#filled"},{default:e(()=>l[75]||(l[75]=[n("Grey link")])),_:1}),o(t,{outline:"",href:"#filled",onClose:r},{default:e(()=>l[76]||(l[76]=[n("Grey link removeable")])),_:1}),o(t,{outline:"","text-max-width":"16ch",onClose:r},{icon:e(()=>[o(a(i))]),default:e(()=>[l[77]||(l[77]=n(" Grey label with icon that overflows "))]),_:1}),l[127]||(l[127]=f("br",null,null,-1)),l[128]||(l[128]=f("br",null,null,-1)),o(t,{outline:"",color:"blue"},{default:e(()=>l[78]||(l[78]=[n("Blue")])),_:1}),o(t,{outline:"",color:"blue"},{icon:e(()=>[o(a(i))]),default:e(()=>[l[79]||(l[79]=n(" Blue icon "))]),_:1}),o(t,{outline:"",color:"blue",onClose:r},{default:e(()=>l[80]||(l[80]=[n("Blue removeable")])),_:1}),o(t,{outline:"",color:"blue",onClose:r},{icon:e(()=>[o(a(i))]),default:e(()=>[l[81]||(l[81]=n(" Blue icon removeable "))]),_:1}),o(t,{outline:"",color:"blue",href:"#filled"},{default:e(()=>l[82]||(l[82]=[n("Blue link")])),_:1}),o(t,{outline:"",color:"blue",href:"#filled",onClose:r},{default:e(()=>l[83]||(l[83]=[n("Blue link removeable")])),_:1}),o(t,{outline:"",color:"blue","text-max-width":"16ch",onClose:r},{icon:e(()=>[o(a(i))]),default:e(()=>[l[84]||(l[84]=n(" Blue label with icon that overflows "))]),_:1}),l[129]||(l[129]=f("br",null,null,-1)),l[130]||(l[130]=f("br",null,null,-1)),o(t,{outline:"",color:"green"},{default:e(()=>l[85]||(l[85]=[n("Green")])),_:1}),o(t,{outline:"",color:"green"},{icon:e(()=>[o(a(i))]),default:e(()=>[l[86]||(l[86]=n(" Green icon "))]),_:1}),o(t,{outline:"",color:"green",onClose:r},{default:e(()=>l[87]||(l[87]=[n("Green removeable")])),_:1}),o(t,{outline:"",color:"green",onClose:r},{icon:e(()=>[o(a(i))]),default:e(()=>[l[88]||(l[88]=n(" Green icon removeable "))]),_:1}),o(t,{outline:"",color:"green",href:"#filled"},{default:e(()=>l[89]||(l[89]=[n("Green link")])),_:1}),o(t,{outline:"",color:"green",href:"#filled",onClose:r},{default:e(()=>l[90]||(l[90]=[n("Green link removeable")])),_:1}),o(t,{outline:"",color:"green","text-max-width":"16ch",onClose:r},{icon:e(()=>[o(a(i))]),default:e(()=>[l[91]||(l[91]=n(" Green label with icon that overflows "))]),_:1}),l[131]||(l[131]=f("br",null,null,-1)),l[132]||(l[132]=f("br",null,null,-1)),o(t,{outline:"",color:"orange"},{default:e(()=>l[92]||(l[92]=[n("Orange")])),_:1}),o(t,{outline:"",color:"orange"},{icon:e(()=>[o(a(i))]),default:e(()=>[l[93]||(l[93]=n(" Orange icon "))]),_:1}),o(t,{outline:"",color:"orange",onClose:r},{default:e(()=>l[94]||(l[94]=[n("Orange removeable")])),_:1}),o(t,{outline:"",color:"orange",onClose:r},{icon:e(()=>[o(a(i))]),default:e(()=>[l[95]||(l[95]=n(" Orange icon removeable "))]),_:1}),o(t,{outline:"",color:"orange",href:"#filled"},{default:e(()=>l[96]||(l[96]=[n("Orange link")])),_:1}),o(t,{outline:"",color:"orange",href:"#filled",onClose:r},{default:e(()=>l[97]||(l[97]=[n("Orange link removeable")])),_:1}),o(t,{outline:"",color:"orange","text-max-width":"16ch",onClose:r},{icon:e(()=>[o(a(i))]),default:e(()=>[l[98]||(l[98]=n(" Orange label with icon that overflows "))]),_:1}),l[133]||(l[133]=f("br",null,null,-1)),l[134]||(l[134]=f("br",null,null,-1)),o(t,{outline:"",color:"red"},{default:e(()=>l[99]||(l[99]=[n("Red")])),_:1}),o(t,{outline:"",color:"red"},{icon:e(()=>[o(a(i))]),default:e(()=>[l[100]||(l[100]=n(" Red icon "))]),_:1}),o(t,{outline:"",color:"red",onClose:r},{default:e(()=>l[101]||(l[101]=[n("Red removeable")])),_:1}),o(t,{outline:"",color:"red",onClose:r},{icon:e(()=>[o(a(i))]),default:e(()=>[l[102]||(l[102]=n(" Red icon removeable "))]),_:1}),o(t,{outline:"",color:"red",href:"#filled"},{default:e(()=>l[103]||(l[103]=[n("Red link")])),_:1}),o(t,{outline:"",color:"red",href:"#filled",onClose:r},{default:e(()=>l[104]||(l[104]=[n("Red link removeable")])),_:1}),o(t,{outline:"",color:"red","text-max-width":"16ch",onClose:r},{icon:e(()=>[o(a(i))]),default:e(()=>[l[105]||(l[105]=n(" Red label with icon that overflows "))]),_:1}),l[135]||(l[135]=f("br",null,null,-1)),l[136]||(l[136]=f("br",null,null,-1)),o(t,{outline:"",color:"purple"},{default:e(()=>l[106]||(l[106]=[n("Purple")])),_:1}),o(t,{outline:"",color:"purple"},{icon:e(()=>[o(a(i))]),default:e(()=>[l[107]||(l[107]=n(" Purple icon "))]),_:1}),o(t,{outline:"",color:"purple",onClose:r},{default:e(()=>l[108]||(l[108]=[n("Purple removeable")])),_:1}),o(t,{outline:"",color:"purple",onClose:r},{icon:e(()=>[o(a(i))]),default:e(()=>[l[109]||(l[109]=n(" Purple icon removeable "))]),_:1}),o(t,{outline:"",color:"purple",href:"#filled"},{default:e(()=>l[110]||(l[110]=[n("Purple link")])),_:1}),o(t,{outline:"",color:"purple",href:"#filled",onClose:r},{default:e(()=>l[111]||(l[111]=[n("Purple link removeable")])),_:1}),o(t,{outline:"",color:"purple","text-max-width":"16ch",onClose:r},{icon:e(()=>[o(a(i))]),default:e(()=>[l[112]||(l[112]=n(" Purple label with icon that overflows "))]),_:1}),l[137]||(l[137]=f("br",null,null,-1)),l[138]||(l[138]=f("br",null,null,-1)),o(t,{outline:"",color:"cyan"},{default:e(()=>l[113]||(l[113]=[n("Cyan")])),_:1}),o(t,{outline:"",color:"cyan"},{icon:e(()=>[o(a(i))]),default:e(()=>[l[114]||(l[114]=n(" Cyan icon "))]),_:1}),o(t,{outline:"",color:"cyan",onClose:r},{default:e(()=>l[115]||(l[115]=[n("Cyan removeable")])),_:1}),o(t,{outline:"",color:"cyan",onClose:r},{icon:e(()=>[o(a(i))]),default:e(()=>[l[116]||(l[116]=n(" Cyan icon removeable "))]),_:1}),o(t,{outline:"",color:"cyan",href:"#filled"},{default:e(()=>l[117]||(l[117]=[n("Cyan link")])),_:1}),o(t,{outline:"",color:"cyan",href:"#filled",onClose:r},{default:e(()=>l[118]||(l[118]=[n("Cyan link removeable")])),_:1}),o(t,{outline:"",color:"cyan","text-max-width":"16ch",onClose:r},{icon:e(()=>[o(a(i))]),default:e(()=>[l[119]||(l[119]=n(" Cyan label with icon that overflows "))]),_:1}),l[139]||(l[139]=f("br",null,null,-1)),l[140]||(l[140]=f("br",null,null,-1)),o(t,{outline:"",color:"gold"},{default:e(()=>l[120]||(l[120]=[n("Gold")])),_:1}),o(t,{outline:"",color:"gold"},{icon:e(()=>[o(a(i))]),default:e(()=>[l[121]||(l[121]=n(" Gold icon "))]),_:1}),o(t,{outline:"",color:"gold",onClose:r},{default:e(()=>l[122]||(l[122]=[n("Gold removeable")])),_:1}),o(t,{outline:"",color:"gold",onClose:r},{icon:e(()=>[o(a(i))]),default:e(()=>[l[123]||(l[123]=n(" Gold icon removeable "))]),_:1}),o(t,{outline:"",color:"gold",href:"#filled"},{default:e(()=>l[124]||(l[124]=[n("Gold link")])),_:1}),o(t,{outline:"",color:"gold",href:"#filled",onClose:r},{default:e(()=>l[125]||(l[125]=[n("Gold link removeable")])),_:1}),o(t,{outline:"",color:"gold","text-max-width":"16ch",onClose:r},{icon:e(()=>[o(a(i))]),default:e(()=>[l[126]||(l[126]=n(" Gold label with icon that overflows "))]),_:1})]),_:1}),o(b,{title:"Compact",source:`<pf-label compact>Compact</pf-label>
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
</pf-label>`},{default:e(()=>[o(t,{compact:""},{default:e(()=>l[141]||(l[141]=[n("Compact")])),_:1}),o(t,{compact:""},{icon:e(()=>[o(a(i))]),default:e(()=>[l[142]||(l[142]=n("Compact icon "))]),_:1}),o(t,{compact:"",onClose:r},{default:e(()=>l[143]||(l[143]=[n("Compact removeable")])),_:1}),o(t,{compact:"",onClose:r},{icon:e(()=>[o(a(i))]),default:e(()=>[l[144]||(l[144]=n(" Compact icon removeable "))]),_:1}),o(t,{compact:"",href:"#filled"},{default:e(()=>l[145]||(l[145]=[n("Compact link")])),_:1}),o(t,{compact:"",href:"#filled",onClose:r},{default:e(()=>l[146]||(l[146]=[n("Compact link removeable")])),_:1}),o(t,{compact:"","text-max-width":"16ch",onClose:r},{icon:e(()=>[o(a(i))]),default:e(()=>[l[147]||(l[147]=n(" Compact label with icon that overflows "))]),_:1})]),_:1}),o(b,{title:"Truncated",source:'<pf-label text-max-width="16ch" tooltip-position="right">Label is too long to fit in the label</pf-label>'},{default:e(()=>[o(t,{"text-max-width":"16ch","tooltip-position":"right"},{default:e(()=>l[148]||(l[148]=[n("Label is too long to fit in the label")])),_:1})]),_:1})]),_:1})}}});export{x as default};
