import{G as g}from"./gear-icon-DJoEP_Vx.js";import{E as b}from"./ellipsis-vertical-icon-OyX2OlO1.js";import{g as x,a as u,c as y,o as c,w as n,d as m,b as t,e as l,t as o,u as d,_ as k}from"./index-CLAsC7lD.js";const T={style:{height:"80px"}},A=x({__name:"MenuToggle.story",setup(w){return(C,e)=>{const r=u("component-info"),a=u("pf-menu-toggle"),i=u("story-canvas"),v=u("pf-badge"),p=u("pf-menu-toggle-checkbox"),s=u("pf-menu-toggle-action"),f=u("pf-avatar"),_=u("doc-page");return c(),y(_,{name:"Components/MenuToggle.story.vue",title:"Menu toggle"},{description:n(()=>e[0]||(e[0]=[l("The "),m("b",null,"menu toggle",-1),l(" component pairs with the menu OR the panel component to create more customizable dropdown and select implementations. Using a menu toggle with a menu enables you to create custom component configurations not supported by the standard dropdown or select components.")])),apidocs:n(()=>[t(r,{src:"packages/core/src/components/MenuToggle/MenuToggle.vue",doc:{name:"PfMenuToggle",exportName:"default",displayName:"MenuToggle",description:"",tags:{},expose:[{name:"el"},{name:"focus"}],props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"disabled",description:"Flag indicating the toggle is disabled",required:!1,type:{name:"boolean"}},{name:"fullHeight",description:"Flag indicating the toggle is full height",required:!1,type:{name:"boolean"}},{name:"fullWidth",description:"Flag indicating the toggle takes up the full width of its parent",required:!1,type:{name:"boolean"}},{name:"placeholder",description:"Flag indicating the toggle contains placeholder text",required:!1,type:{name:"boolean"}},{name:"variant",description:"Variant styles of the menu toggle",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"plain"'},{name:'"primary"'},{name:'"plainText"'},{name:'"secondary"'},{name:'"typeahead"'}]}},{name:"status",description:"Status styles of the menu toggle",required:!1,type:{name:"union",elements:[{name:'"success"'},{name:'"warning"'},{name:'"danger"'}]}},{name:"small",description:"Smaller size of the menu toggle",required:!1,type:{name:"boolean"}}],slots:[{name:"status-icon"},{name:"default"},{name:"icon"},{name:"split-buttons"},{name:"badge"}],sourceFiles:["../../packages/core/src/components/MenuToggle/MenuToggle.vue"]}}),t(r,{src:"packages/core/src/components/MenuToggle/MenuToggleAction.vue",doc:{name:"PfMenuToggleAction",exportName:"default",displayName:"MenuToggleAction",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/MenuToggle/MenuToggleAction.vue"]}}),t(r,{src:"packages/core/src/components/MenuToggle/MenuToggleCheckbox.vue",doc:{name:"PfMenuToggleCheckbox",exportName:"default",displayName:"MenuToggleCheckbox",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"checked",description:"Flag to show if the checkbox is checked. Use null to set the checkbox indeterminate state",required:!1,type:{name:"union",elements:[{name:"boolean"},{name:"null"}]}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/MenuToggle/MenuToggleCheckbox.vue"]}})]),default:n(()=>[e[69]||(e[69]=m("div",{class:"markdown pf-v6-c-content"},[m("h2",{class:"pf-v6-c-title"},"Examples")],-1)),t(i,{title:"Collapsed",source:"<pf-menu-toggle>Collapsed</pf-menu-toggle>"},{default:n(()=>[t(a,null,{default:n(()=>e[1]||(e[1]=[l("Collapsed")])),_:1,__:[1]})]),_:1}),t(i,{title:"Expanded",source:"<pf-menu-toggle expanded>Expanded</pf-menu-toggle>"},{default:n(()=>[t(a,{expanded:""},{default:n(()=>e[2]||(e[2]=[l("Expanded")])),_:1,__:[2]})]),_:1}),t(i,{title:"Disabled",source:"<pf-menu-toggle disabled>Disabled</pf-menu-toggle>"},{default:n(()=>[t(a,{disabled:""},{default:n(()=>e[3]||(e[3]=[l("Disabled")])),_:1,__:[3]})]),_:1}),t(i,{title:"Count",source:`<pf-menu-toggle>
  Count
  <template #badge>
    <pf-badge>4 selected</pf-badge>
  </template>
</pf-menu-toggle>`},{default:n(()=>[t(a,null,{badge:n(()=>[t(v,null,{default:n(()=>e[4]||(e[4]=[l("4 selected")])),_:1,__:[4]})]),default:n(()=>[e[5]||(e[5]=l(" Count "))]),_:1,__:[5]})]),_:1}),t(i,{title:"Primary",source:`<pf-menu-toggle variant="primary">Collapsed</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="primary">
  <template #icon>
    <gear-icon />
  </template>
  Icon
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="primary" expanded>Expanded</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="primary" disabled>Disabled</pf-menu-toggle>`},{default:n(()=>[t(a,{variant:"primary"},{default:n(()=>e[6]||(e[6]=[l("Collapsed")])),_:1,__:[6]}),e[10]||(e[10]=l(" "+o(" ")+" ")),t(a,{variant:"primary"},{icon:n(()=>[t(d(g))]),default:n(()=>[e[7]||(e[7]=l(" Icon "))]),_:1,__:[7]}),e[11]||(e[11]=l(" "+o(" ")+" ")),t(a,{variant:"primary",expanded:""},{default:n(()=>e[8]||(e[8]=[l("Expanded")])),_:1,__:[8]}),e[12]||(e[12]=l(" "+o(" ")+" ")),t(a,{variant:"primary",disabled:""},{default:n(()=>e[9]||(e[9]=[l("Disabled")])),_:1,__:[9]})]),_:1,__:[10,11,12]}),t(i,{title:"Secondary",source:`<pf-menu-toggle variant="secondary">Collapsed</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="secondary">
  <template #icon>
    <gear-icon />
  </template>
  Icon
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="secondary" expanded>Expanded</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="secondary" disabled>Disabled</pf-menu-toggle>`},{default:n(()=>[t(a,{variant:"secondary"},{default:n(()=>e[13]||(e[13]=[l("Collapsed")])),_:1,__:[13]}),e[17]||(e[17]=l(" "+o(" ")+" ")),t(a,{variant:"secondary"},{icon:n(()=>[t(d(g))]),default:n(()=>[e[14]||(e[14]=l(" Icon "))]),_:1,__:[14]}),e[18]||(e[18]=l(" "+o(" ")+" ")),t(a,{variant:"secondary",expanded:""},{default:n(()=>e[15]||(e[15]=[l("Expanded")])),_:1,__:[15]}),e[19]||(e[19]=l(" "+o(" ")+" ")),t(a,{variant:"secondary",disabled:""},{default:n(()=>e[16]||(e[16]=[l("Disabled")])),_:1,__:[16]})]),_:1,__:[17,18,19]}),t(i,{title:"Plain",source:`<pf-menu-toggle variant="plain"><ellipsis-vertical-icon /></pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="plain" expanded><ellipsis-vertical-icon /></pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="plain" disabled><ellipsis-vertical-icon /></pf-menu-toggle>`},{default:n(()=>[t(a,{variant:"plain"},{default:n(()=>[t(d(b))]),_:1}),e[20]||(e[20]=l(" "+o(" ")+" ")),t(a,{variant:"plain",expanded:""},{default:n(()=>[t(d(b))]),_:1}),e[21]||(e[21]=l(" "+o(" ")+" ")),t(a,{variant:"plain",disabled:""},{default:n(()=>[t(d(b))]),_:1})]),_:1,__:[20,21]}),t(i,{title:"Plain with text",source:`<pf-menu-toggle variant="plainText">Custom text</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="plainText" expanded>Custom text (expanded)</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="plainText" disabled>Disabled</pf-menu-toggle>`},{default:n(()=>[t(a,{variant:"plainText"},{default:n(()=>e[22]||(e[22]=[l("Custom text")])),_:1,__:[22]}),e[25]||(e[25]=l(" "+o(" ")+" ")),t(a,{variant:"plainText",expanded:""},{default:n(()=>e[23]||(e[23]=[l("Custom text (expanded)")])),_:1,__:[23]}),e[26]||(e[26]=l(" "+o(" ")+" ")),t(a,{variant:"plainText",disabled:""},{default:n(()=>e[24]||(e[24]=[l("Disabled")])),_:1,__:[24]})]),_:1,__:[25,26]}),t(i,{title:"Split button (checkbox)",source:`<pf-menu-toggle>
  <template #split-buttons>
    <pf-menu-toggle-checkbox />
  </template>
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle expanded>
  <template #split-buttons>
    <pf-menu-toggle-checkbox />
  </template>
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle disabled>
  <template #split-buttons>
    <pf-menu-toggle-checkbox disabled />
  </template>
</pf-menu-toggle>`},{default:n(()=>[t(a,null,{"split-buttons":n(()=>[t(p)]),_:1}),e[27]||(e[27]=l(" "+o(" ")+" ")),t(a,{expanded:""},{"split-buttons":n(()=>[t(p)]),_:1}),e[28]||(e[28]=l(" "+o(" ")+" ")),t(a,{disabled:""},{"split-buttons":n(()=>[t(p,{disabled:""})]),_:1})]),_:1,__:[27,28]}),t(i,{title:"Split button (checkbox indeterminate with toggle text)",source:`<pf-menu-toggle>
  <template #split-buttons>
    <pf-menu-toggle-checkbox :checked="null">10 selected</pf-menu-toggle-checkbox>
  </template>
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle expanded>
  <template #split-buttons>
    <pf-menu-toggle-checkbox :checked="null">10 selected</pf-menu-toggle-checkbox>
  </template>
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle disabled>
  <template #split-buttons>
    <pf-menu-toggle-checkbox :checked="null" disabled>10 selected</pf-menu-toggle-checkbox>
  </template>
</pf-menu-toggle>`},{default:n(()=>[t(a,null,{"split-buttons":n(()=>[t(p,{checked:null},{default:n(()=>e[29]||(e[29]=[l("10 selected")])),_:1,__:[29]})]),_:1}),e[32]||(e[32]=l(" "+o(" ")+" ")),t(a,{expanded:""},{"split-buttons":n(()=>[t(p,{checked:null},{default:n(()=>e[30]||(e[30]=[l("10 selected")])),_:1,__:[30]})]),_:1}),e[33]||(e[33]=l(" "+o(" ")+" ")),t(a,{disabled:""},{"split-buttons":n(()=>[t(p,{checked:null,disabled:""},{default:n(()=>e[31]||(e[31]=[l("10 selected")])),_:1,__:[31]})]),_:1})]),_:1,__:[32,33]}),t(i,{title:"Split button (checkbox, primary)",source:`<pf-menu-toggle variant="primary">
  <template #split-buttons>
    <pf-menu-toggle-checkbox>10 selected</pf-menu-toggle-checkbox>
  </template>
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="primary" expanded>
  <template #split-buttons>
    <pf-menu-toggle-checkbox>10 selected</pf-menu-toggle-checkbox>
  </template>
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="primary" disabled>
  <template #split-buttons>
    <pf-menu-toggle-checkbox>10 selected</pf-menu-toggle-checkbox>
  </template>
</pf-menu-toggle>`},{default:n(()=>[t(a,{variant:"primary"},{"split-buttons":n(()=>[t(p,null,{default:n(()=>e[34]||(e[34]=[l("10 selected")])),_:1,__:[34]})]),_:1}),e[37]||(e[37]=l(" "+o(" ")+" ")),t(a,{variant:"primary",expanded:""},{"split-buttons":n(()=>[t(p,null,{default:n(()=>e[35]||(e[35]=[l("10 selected")])),_:1,__:[35]})]),_:1}),e[38]||(e[38]=l(" "+o(" ")+" ")),t(a,{variant:"primary",disabled:""},{"split-buttons":n(()=>[t(p,null,{default:n(()=>e[36]||(e[36]=[l("10 selected")])),_:1,__:[36]})]),_:1})]),_:1,__:[37,38]}),t(i,{title:"Split button (checkbox, secondary)",source:`<pf-menu-toggle variant="secondary">
  <template #split-buttons>
    <pf-menu-toggle-checkbox>10 selected</pf-menu-toggle-checkbox>
  </template>
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="secondary" expanded>
  <template #split-buttons>
    <pf-menu-toggle-checkbox>10 selected</pf-menu-toggle-checkbox>
  </template>
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="secondary" disabled>
  <template #split-buttons>
    <pf-menu-toggle-checkbox disabled>10 selected</pf-menu-toggle-checkbox>
  </template>
</pf-menu-toggle>`},{default:n(()=>[t(a,{variant:"secondary"},{"split-buttons":n(()=>[t(p,null,{default:n(()=>e[39]||(e[39]=[l("10 selected")])),_:1,__:[39]})]),_:1}),e[42]||(e[42]=l(" "+o(" ")+" ")),t(a,{variant:"secondary",expanded:""},{"split-buttons":n(()=>[t(p,null,{default:n(()=>e[40]||(e[40]=[l("10 selected")])),_:1,__:[40]})]),_:1}),e[43]||(e[43]=l(" "+o(" ")+" ")),t(a,{variant:"secondary",disabled:""},{"split-buttons":n(()=>[t(p,{disabled:""},{default:n(()=>e[41]||(e[41]=[l("10 selected")])),_:1,__:[41]})]),_:1})]),_:1,__:[42,43]}),t(i,{title:"Split button (action)",source:`<pf-menu-toggle>
  <template #split-buttons>
    <pf-menu-toggle-action>Action</pf-menu-toggle-action>
  </template>
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle expanded>
  <template #split-buttons>
    <pf-menu-toggle-action>Action</pf-menu-toggle-action>
  </template>
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle disabled>
  <template #split-buttons>
    <pf-menu-toggle-action disabled>Action</pf-menu-toggle-action>
  </template>
</pf-menu-toggle>`},{default:n(()=>[t(a,null,{"split-buttons":n(()=>[t(s,null,{default:n(()=>e[44]||(e[44]=[l("Action")])),_:1,__:[44]})]),_:1}),e[47]||(e[47]=l(" "+o(" ")+" ")),t(a,{expanded:""},{"split-buttons":n(()=>[t(s,null,{default:n(()=>e[45]||(e[45]=[l("Action")])),_:1,__:[45]})]),_:1}),e[48]||(e[48]=l(" "+o(" ")+" ")),t(a,{disabled:""},{"split-buttons":n(()=>[t(s,{disabled:""},{default:n(()=>e[46]||(e[46]=[l("Action")])),_:1,__:[46]})]),_:1})]),_:1,__:[47,48]}),t(i,{title:"Split button (action, primary)",source:`<pf-menu-toggle variant="primary">
  <template #split-buttons>
    <pf-menu-toggle-action>Action</pf-menu-toggle-action>
  </template>
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="primary" expanded>
  <template #split-buttons>
    <pf-menu-toggle-action>Action</pf-menu-toggle-action>
  </template>
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="primary" disabled>
  <template #split-buttons>
    <pf-menu-toggle-action disabled>Action</pf-menu-toggle-action>
  </template>
</pf-menu-toggle>`},{default:n(()=>[t(a,{variant:"primary"},{"split-buttons":n(()=>[t(s,null,{default:n(()=>e[49]||(e[49]=[l("Action")])),_:1,__:[49]})]),_:1}),e[52]||(e[52]=l(" "+o(" ")+" ")),t(a,{variant:"primary",expanded:""},{"split-buttons":n(()=>[t(s,null,{default:n(()=>e[50]||(e[50]=[l("Action")])),_:1,__:[50]})]),_:1}),e[53]||(e[53]=l(" "+o(" ")+" ")),t(a,{variant:"primary",disabled:""},{"split-buttons":n(()=>[t(s,{disabled:""},{default:n(()=>e[51]||(e[51]=[l("Action")])),_:1,__:[51]})]),_:1})]),_:1,__:[52,53]}),t(i,{title:"Split button (action, secondary)",source:`<pf-menu-toggle variant="secondary">
  <template #split-buttons>
    <pf-menu-toggle-action>Action</pf-menu-toggle-action>
  </template>
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="secondary" expanded>
  <template #split-buttons>
    <pf-menu-toggle-action>Action</pf-menu-toggle-action>
  </template>
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="secondary" disabled>
  <template #split-buttons>
    <pf-menu-toggle-action disabled>Action</pf-menu-toggle-action>
  </template>
</pf-menu-toggle>`},{default:n(()=>[t(a,{variant:"secondary"},{"split-buttons":n(()=>[t(s,null,{default:n(()=>e[54]||(e[54]=[l("Action")])),_:1,__:[54]})]),_:1}),e[57]||(e[57]=l(" "+o(" ")+" ")),t(a,{variant:"secondary",expanded:""},{"split-buttons":n(()=>[t(s,null,{default:n(()=>e[55]||(e[55]=[l("Action")])),_:1,__:[55]})]),_:1}),e[58]||(e[58]=l(" "+o(" ")+" ")),t(a,{variant:"secondary",disabled:""},{"split-buttons":n(()=>[t(s,{disabled:""},{default:n(()=>e[56]||(e[56]=[l("Action")])),_:1,__:[56]})]),_:1})]),_:1,__:[57,58]}),t(i,{title:"With icon/image and text",source:`<pf-menu-toggle variant="secondary">
  <template #icon>
    <gear-icon />
  </template>
  Icon
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="secondary" disabled>
  <template #icon>
    <gear-icon />
  </template>
  Icon
</pf-menu-toggle>`},{default:n(()=>[t(a,{variant:"secondary"},{icon:n(()=>[t(d(g))]),default:n(()=>[e[59]||(e[59]=l(" Icon "))]),_:1,__:[59]}),e[61]||(e[61]=l(" "+o(" ")+" ")),t(a,{variant:"secondary",disabled:""},{icon:n(()=>[t(d(g))]),default:n(()=>[e[60]||(e[60]=l(" Icon "))]),_:1,__:[60]})]),_:1,__:[61]}),t(i,{title:"With avatar and text",source:`<pf-menu-toggle>
  <template #icon>
    <pf-avatar src="avatar.svg" alt="avatar" />
  </template>
  Ned Username
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle expanded>
  <template #icon>
    <pf-avatar src="avatar.svg" alt="avatar" />
  </template>
  Ned Username
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle disabled>
  <template #icon>
    <pf-avatar src="avatar.svg" alt="avatar" />
  </template>
  Ned Username
</pf-menu-toggle>`},{default:n(()=>[t(a,null,{icon:n(()=>[t(f,{src:"avatar.svg",alt:"avatar"})]),default:n(()=>[e[62]||(e[62]=l(" Ned Username "))]),_:1,__:[62]}),e[65]||(e[65]=l(" "+o(" ")+" ")),t(a,{expanded:""},{icon:n(()=>[t(f,{src:"avatar.svg",alt:"avatar"})]),default:n(()=>[e[63]||(e[63]=l(" Ned Username "))]),_:1,__:[63]}),e[66]||(e[66]=l(" "+o(" ")+" ")),t(a,{disabled:""},{icon:n(()=>[t(f,{src:"avatar.svg",alt:"avatar"})]),default:n(()=>[e[64]||(e[64]=l(" Ned Username "))]),_:1,__:[64]})]),_:1,__:[65,66]}),t(i,{title:"Full height",source:`<div style="height:80px">
  <pf-menu-toggle full-height>Full height</pf-menu-toggle>
</div>`},{default:n(()=>[m("div",T,[t(a,{"full-height":""},{default:n(()=>e[67]||(e[67]=[l("Full height")])),_:1,__:[67]})])]),_:1}),t(i,{title:"Full width",source:"<pf-menu-toggle full-width>Full width</pf-menu-toggle>"},{default:n(()=>[t(a,{"full-width":""},{default:n(()=>e[68]||(e[68]=[l("Full width")])),_:1,__:[68]})]),_:1})]),_:1,__:[69]})}}}),N=k(A,[["__scopeId","data-v-40732c4a"]]);export{N as default};
