import{G as g}from"./gear-icon-YI2uJVmN.js";import{E as b}from"./ellipsis-vertical-icon-XjJD4NNK.js";import{f as y,a as p,c,o as k,w as n,d as r,b as t,e as o,t as l,u as s,_ as T}from"./index-svP4KyG3.js";const A={style:{height:"80px"}},w=y({__name:"MenuToggle.story",setup(C){return(M,e)=>{const m=p("component-info"),a=p("pf-menu-toggle"),i=p("story-canvas"),v=p("pf-badge"),d=p("pf-menu-toggle-checkbox"),u=p("pf-menu-toggle-action"),f=p("pf-avatar"),x=p("doc-page");return k(),c(x,{name:"Components/MenuToggle.story.vue",title:"Menu toggle"},{description:n(()=>e[0]||(e[0]=[o("The "),r("b",null,"menu toggle",-1),o(" component pairs with the menu OR the panel component to create more customizable dropdown and select implementations. Using a menu toggle with a menu enables you to create custom component configurations not supported by the standard dropdown or select components.")])),apidocs:n(()=>[t(m,{src:"packages/core/src/components/MenuToggle/MenuToggle.vue",doc:{name:"PfMenuToggle",exportName:"default",displayName:"MenuToggle",description:"",tags:{},expose:[{name:"el"},{name:"focus"}],props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"expanded",description:"Flag indicating the toggle has expanded styling",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"disabled",description:"Flag indicating the toggle is disabled",required:!1,type:{name:"boolean"}},{name:"fullHeight",description:"Flag indicating the toggle is full height",required:!1,type:{name:"boolean"}},{name:"fullWidth",description:"Flag indicating the toggle takes up the full width of its parent",required:!1,type:{name:"boolean"}},{name:"splitButton",description:"Variant of split button toggle",required:!1,type:{name:"union",elements:[{name:"boolean"},{name:'"default"'},{name:'"action"'},{name:'"checkbox"'}]}},{name:"variant",description:"Variant styles of the menu toggle",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"plain"'},{name:'"primary"'},{name:'"plainText"'},{name:'"secondary"'},{name:'"typeahead"'}]}}],events:[{name:"update:expanded",type:{names:["boolean"]}}],slots:[{name:"default"},{name:"icon"},{name:"badge"}],sourceFiles:["../../packages/core/src/components/MenuToggle/MenuToggle.vue"]}}),t(m,{src:"packages/core/src/components/MenuToggle/MenuToggleAction.vue",doc:{name:"PfMenuToggleAction",exportName:"default",displayName:"MenuToggleAction",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/MenuToggle/MenuToggleAction.vue"]}}),t(m,{src:"packages/core/src/components/MenuToggle/MenuToggleCheckbox.vue",doc:{name:"PfMenuToggleCheckbox",exportName:"default",displayName:"MenuToggleCheckbox",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"valid",description:"Flag to show if the checkbox selection is valid or invalid",required:!1,type:{name:"boolean"}},{name:"checked",description:"Flag to show if the checkbox is checked. Use null to set the checkbox indeterminate state",required:!1,type:{name:"union",elements:[{name:"boolean"},{name:"null"}]}}],sourceFiles:["../../packages/core/src/components/MenuToggle/MenuToggleCheckbox.vue"]}})]),default:n(()=>[e[69]||(e[69]=r("div",{class:"markdown pf-v5-c-content"},[r("h2",{class:"pf-v5-c-title"},"Examples")],-1)),t(i,{title:"Collapsed",source:"<pf-menu-toggle>Collapsed</pf-menu-toggle>"},{default:n(()=>[t(a,null,{default:n(()=>e[1]||(e[1]=[o("Collapsed")])),_:1})]),_:1}),t(i,{title:"Expanded",source:"<pf-menu-toggle expanded>Expanded</pf-menu-toggle>"},{default:n(()=>[t(a,{expanded:""},{default:n(()=>e[2]||(e[2]=[o("Expanded")])),_:1})]),_:1}),t(i,{title:"Disabled",source:"<pf-menu-toggle disabled>Disabled</pf-menu-toggle>"},{default:n(()=>[t(a,{disabled:""},{default:n(()=>e[3]||(e[3]=[o("Disabled")])),_:1})]),_:1}),t(i,{title:"Count",source:`<pf-menu-toggle>
  Count
  <template #badge>
    <pf-badge>4 selected</pf-badge>
  </template>
</pf-menu-toggle>`},{default:n(()=>[t(a,null,{badge:n(()=>[t(v,null,{default:n(()=>e[4]||(e[4]=[o("4 selected")])),_:1})]),default:n(()=>[e[5]||(e[5]=o(" Count "))]),_:1})]),_:1}),t(i,{title:"Primary",source:`<pf-menu-toggle variant="primary">Collapsed</pf-menu-toggle>
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
<pf-menu-toggle variant="primary" disabled>Disabled</pf-menu-toggle>`},{default:n(()=>[t(a,{variant:"primary"},{default:n(()=>e[6]||(e[6]=[o("Collapsed")])),_:1}),e[10]||(e[10]=o(" "+l(" ")+" ")),t(a,{variant:"primary"},{icon:n(()=>[t(s(g))]),default:n(()=>[e[7]||(e[7]=o(" Icon "))]),_:1}),e[11]||(e[11]=o(" "+l(" ")+" ")),t(a,{variant:"primary",expanded:""},{default:n(()=>e[8]||(e[8]=[o("Expanded")])),_:1}),e[12]||(e[12]=o(" "+l(" ")+" ")),t(a,{variant:"primary",disabled:""},{default:n(()=>e[9]||(e[9]=[o("Disabled")])),_:1})]),_:1}),t(i,{title:"Secondary",source:`<pf-menu-toggle variant="secondary">Collapsed</pf-menu-toggle>
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
<pf-menu-toggle variant="secondary" disabled>Disabled</pf-menu-toggle>`},{default:n(()=>[t(a,{variant:"secondary"},{default:n(()=>e[13]||(e[13]=[o("Collapsed")])),_:1}),e[17]||(e[17]=o(" "+l(" ")+" ")),t(a,{variant:"secondary"},{icon:n(()=>[t(s(g))]),default:n(()=>[e[14]||(e[14]=o(" Icon "))]),_:1}),e[18]||(e[18]=o(" "+l(" ")+" ")),t(a,{variant:"secondary",expanded:""},{default:n(()=>e[15]||(e[15]=[o("Expanded")])),_:1}),e[19]||(e[19]=o(" "+l(" ")+" ")),t(a,{variant:"secondary",disabled:""},{default:n(()=>e[16]||(e[16]=[o("Disabled")])),_:1})]),_:1}),t(i,{title:"Plain",source:`<pf-menu-toggle variant="plain"><ellipsis-vertical-icon /></pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="plain" expanded><ellipsis-vertical-icon /></pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="plain" disabled><ellipsis-vertical-icon /></pf-menu-toggle>`},{default:n(()=>[t(a,{variant:"plain"},{default:n(()=>[t(s(b))]),_:1}),e[20]||(e[20]=o(" "+l(" ")+" ")),t(a,{variant:"plain",expanded:""},{default:n(()=>[t(s(b))]),_:1}),e[21]||(e[21]=o(" "+l(" ")+" ")),t(a,{variant:"plain",disabled:""},{default:n(()=>[t(s(b))]),_:1})]),_:1}),t(i,{title:"Plain with text",source:`<pf-menu-toggle variant="plainText">Custom text</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="plainText" expanded>Custom text (expanded)</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="plainText" disabled>Disabled</pf-menu-toggle>`},{default:n(()=>[t(a,{variant:"plainText"},{default:n(()=>e[22]||(e[22]=[o("Custom text")])),_:1}),e[25]||(e[25]=o(" "+l(" ")+" ")),t(a,{variant:"plainText",expanded:""},{default:n(()=>e[23]||(e[23]=[o("Custom text (expanded)")])),_:1}),e[26]||(e[26]=o(" "+l(" ")+" ")),t(a,{variant:"plainText",disabled:""},{default:n(()=>e[24]||(e[24]=[o("Disabled")])),_:1})]),_:1}),t(i,{title:"Split button (checkbox)",source:`<pf-menu-toggle split-button>
  <pf-menu-toggle-checkbox />
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle split-button expanded>
  <pf-menu-toggle-checkbox />
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle split-button disabled>
  <pf-menu-toggle-checkbox disabled />
</pf-menu-toggle>`},{default:n(()=>[t(a,{"split-button":""},{default:n(()=>[t(d)]),_:1}),e[27]||(e[27]=o(" "+l(" ")+" ")),t(a,{"split-button":"",expanded:""},{default:n(()=>[t(d)]),_:1}),e[28]||(e[28]=o(" "+l(" ")+" ")),t(a,{"split-button":"",disabled:""},{default:n(()=>[t(d,{disabled:""})]),_:1})]),_:1}),t(i,{title:"Split button (checkbox indeterminate with toggle text)",source:`<pf-menu-toggle split-button>
  <pf-menu-toggle-checkbox :checked="null" /> 10 selected
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle split-button expanded>
  <pf-menu-toggle-checkbox :checked="null" /> 10 selected
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle split-button disabled>
  <pf-menu-toggle-checkbox :checked="null" disabled /> 10 selected
</pf-menu-toggle>`},{default:n(()=>[t(a,{"split-button":""},{default:n(()=>[t(d,{checked:null}),e[29]||(e[29]=o(" 10 selected "))]),_:1}),e[32]||(e[32]=o(" "+l(" ")+" ")),t(a,{"split-button":"",expanded:""},{default:n(()=>[t(d,{checked:null}),e[30]||(e[30]=o(" 10 selected "))]),_:1}),e[33]||(e[33]=o(" "+l(" ")+" ")),t(a,{"split-button":"",disabled:""},{default:n(()=>[t(d,{checked:null,disabled:""}),e[31]||(e[31]=o(" 10 selected "))]),_:1})]),_:1}),t(i,{title:"Split button (checkbox, primary)",source:`<pf-menu-toggle split-button variant="primary">
  <pf-menu-toggle-checkbox /> 10 selected
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle split-button variant="primary" expanded>
  <pf-menu-toggle-checkbox /> 10 selected
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle split-button variant="primary" disabled>
  <pf-menu-toggle-checkbox disabled /> 10 selected
</pf-menu-toggle>`},{default:n(()=>[t(a,{"split-button":"",variant:"primary"},{default:n(()=>[t(d),e[34]||(e[34]=o(" 10 selected "))]),_:1}),e[37]||(e[37]=o(" "+l(" ")+" ")),t(a,{"split-button":"",variant:"primary",expanded:""},{default:n(()=>[t(d),e[35]||(e[35]=o(" 10 selected "))]),_:1}),e[38]||(e[38]=o(" "+l(" ")+" ")),t(a,{"split-button":"",variant:"primary",disabled:""},{default:n(()=>[t(d,{disabled:""}),e[36]||(e[36]=o(" 10 selected "))]),_:1})]),_:1}),t(i,{title:"Split button (checkbox, secondary)",source:`<pf-menu-toggle split-button variant="secondary">
  <pf-menu-toggle-checkbox /> 10 selected
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle split-button variant="secondary" expanded>
  <pf-menu-toggle-checkbox /> 10 selected
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle split-button variant="secondary" disabled>
  <pf-menu-toggle-checkbox disabled /> 10 selected
</pf-menu-toggle>`},{default:n(()=>[t(a,{"split-button":"",variant:"secondary"},{default:n(()=>[t(d),e[39]||(e[39]=o(" 10 selected "))]),_:1}),e[42]||(e[42]=o(" "+l(" ")+" ")),t(a,{"split-button":"",variant:"secondary",expanded:""},{default:n(()=>[t(d),e[40]||(e[40]=o(" 10 selected "))]),_:1}),e[43]||(e[43]=o(" "+l(" ")+" ")),t(a,{"split-button":"",variant:"secondary",disabled:""},{default:n(()=>[t(d,{disabled:""}),e[41]||(e[41]=o(" 10 selected "))]),_:1})]),_:1}),t(i,{title:"Split button (action)",source:`<pf-menu-toggle split-button="action">
  <pf-menu-toggle-action>Action</pf-menu-toggle-action>
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle split-button="action" expanded>
  <pf-menu-toggle-action>Action</pf-menu-toggle-action>
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle split-button="action" disabled>
  <pf-menu-toggle-action disabled>Action</pf-menu-toggle-action>
</pf-menu-toggle>`},{default:n(()=>[t(a,{"split-button":"action"},{default:n(()=>[t(u,null,{default:n(()=>e[44]||(e[44]=[o("Action")])),_:1})]),_:1}),e[47]||(e[47]=o(" "+l(" ")+" ")),t(a,{"split-button":"action",expanded:""},{default:n(()=>[t(u,null,{default:n(()=>e[45]||(e[45]=[o("Action")])),_:1})]),_:1}),e[48]||(e[48]=o(" "+l(" ")+" ")),t(a,{"split-button":"action",disabled:""},{default:n(()=>[t(u,{disabled:""},{default:n(()=>e[46]||(e[46]=[o("Action")])),_:1})]),_:1})]),_:1}),t(i,{title:"Split button (action, primary)",source:`<pf-menu-toggle split-button="action" variant="primary">
  <pf-menu-toggle-action>Action</pf-menu-toggle-action>
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle split-button="action" variant="primary" expanded>
  <pf-menu-toggle-action>Action</pf-menu-toggle-action>
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle split-button="action" variant="primary" disabled>
  <pf-menu-toggle-action disabled>Action</pf-menu-toggle-action>
</pf-menu-toggle>`},{default:n(()=>[t(a,{"split-button":"action",variant:"primary"},{default:n(()=>[t(u,null,{default:n(()=>e[49]||(e[49]=[o("Action")])),_:1})]),_:1}),e[52]||(e[52]=o(" "+l(" ")+" ")),t(a,{"split-button":"action",variant:"primary",expanded:""},{default:n(()=>[t(u,null,{default:n(()=>e[50]||(e[50]=[o("Action")])),_:1})]),_:1}),e[53]||(e[53]=o(" "+l(" ")+" ")),t(a,{"split-button":"action",variant:"primary",disabled:""},{default:n(()=>[t(u,{disabled:""},{default:n(()=>e[51]||(e[51]=[o("Action")])),_:1})]),_:1})]),_:1}),t(i,{title:"Split button (action, secondary)",source:`<pf-menu-toggle split-button="action" variant="secondary">
  <pf-menu-toggle-action>Action</pf-menu-toggle-action>
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle split-button="action" variant="secondary" expanded>
  <pf-menu-toggle-action>Action</pf-menu-toggle-action>
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle split-button="action" variant="secondary" disabled>
  <pf-menu-toggle-action disabled>Action</pf-menu-toggle-action>
</pf-menu-toggle>`},{default:n(()=>[t(a,{"split-button":"action",variant:"secondary"},{default:n(()=>[t(u,null,{default:n(()=>e[54]||(e[54]=[o("Action")])),_:1})]),_:1}),e[57]||(e[57]=o(" "+l(" ")+" ")),t(a,{"split-button":"action",variant:"secondary",expanded:""},{default:n(()=>[t(u,null,{default:n(()=>e[55]||(e[55]=[o("Action")])),_:1})]),_:1}),e[58]||(e[58]=o(" "+l(" ")+" ")),t(a,{"split-button":"action",variant:"secondary",disabled:""},{default:n(()=>[t(u,{disabled:""},{default:n(()=>e[56]||(e[56]=[o("Action")])),_:1})]),_:1})]),_:1}),t(i,{title:"With icon/image and text",source:`<pf-menu-toggle variant="secondary">
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
</pf-menu-toggle>`},{default:n(()=>[t(a,{variant:"secondary"},{icon:n(()=>[t(s(g))]),default:n(()=>[e[59]||(e[59]=o(" Icon "))]),_:1}),e[61]||(e[61]=o(" "+l(" ")+" ")),t(a,{variant:"secondary",disabled:""},{icon:n(()=>[t(s(g))]),default:n(()=>[e[60]||(e[60]=o(" Icon "))]),_:1})]),_:1}),t(i,{title:"With avatar and text",source:`<pf-menu-toggle>
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
</pf-menu-toggle>`},{default:n(()=>[t(a,null,{icon:n(()=>[t(f,{src:"avatar.svg",alt:"avatar"})]),default:n(()=>[e[62]||(e[62]=o(" Ned Username "))]),_:1}),e[65]||(e[65]=o(" "+l(" ")+" ")),t(a,{expanded:""},{icon:n(()=>[t(f,{src:"avatar.svg",alt:"avatar"})]),default:n(()=>[e[63]||(e[63]=o(" Ned Username "))]),_:1}),e[66]||(e[66]=o(" "+l(" ")+" ")),t(a,{disabled:""},{icon:n(()=>[t(f,{src:"avatar.svg",alt:"avatar"})]),default:n(()=>[e[64]||(e[64]=o(" Ned Username "))]),_:1})]),_:1}),t(i,{title:"Full height",source:`<div style="height:80px">
  <pf-menu-toggle full-height>Full height</pf-menu-toggle>
</div>`},{default:n(()=>[r("div",A,[t(a,{"full-height":""},{default:n(()=>e[67]||(e[67]=[o("Full height")])),_:1})])]),_:1}),t(i,{title:"Full width",source:"<pf-menu-toggle full-width>Full width</pf-menu-toggle>"},{default:n(()=>[t(a,{"full-width":""},{default:n(()=>e[68]||(e[68]=[o("Full width")])),_:1})]),_:1})]),_:1})}}}),S=T(w,[["__scopeId","data-v-ff76cf3c"]]);export{S as default};
