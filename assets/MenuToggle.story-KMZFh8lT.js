import{G as d}from"./gear-icon-Ce2rxFHO.js";import{g as x,a as u,c as y,o as c,w as n,d as g,b as t,e as l,t as o,u as m,_ as k}from"./index-Coy-oaSw.js";const T={style:{height:"80px"}},w=x({__name:"MenuToggle.story",setup(A){return(C,e)=>{const r=u("component-info"),a=u("pf-menu-toggle"),i=u("story-canvas"),b=u("pf-badge"),p=u("pf-menu-toggle-checkbox"),s=u("pf-menu-toggle-action"),f=u("pf-avatar"),v=u("doc-page");return c(),y(v,{name:"Components/MenuToggle.story.vue",title:"Menu toggle"},{description:n(()=>[...e[0]||(e[0]=[l("The ",-1),g("b",null,"menu toggle",-1),l(" component pairs with the menu OR the panel component to create more customizable dropdown and select implementations. Using a menu toggle with a menu enables you to create custom component configurations not supported by the standard dropdown or select components.",-1)])]),apidocs:n(()=>[t(r,{src:"packages/core/src/components/MenuToggle/MenuToggle.vue",doc:{name:"PfMenuToggle",exportName:"default",displayName:"MenuToggle",description:"",tags:{},expose:[{name:"el"},{name:"focus"}],props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"disabled",description:"Flag indicating the toggle is disabled",required:!1,type:{name:"boolean"}},{name:"fullHeight",description:"Flag indicating the toggle is full height",required:!1,type:{name:"boolean"}},{name:"fullWidth",description:"Flag indicating the toggle takes up the full width of its parent",required:!1,type:{name:"boolean"}},{name:"placeholder",description:"Flag indicating the toggle contains placeholder text",required:!1,type:{name:"boolean"}},{name:"settings",description:"Flag indicating whether the toggle is a settings toggle. This will override the icon property",required:!1,type:{name:"boolean"}},{name:"variant",description:"Variant styles of the menu toggle",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"plain"'},{name:'"primary"'},{name:'"plainText"'},{name:'"secondary"'},{name:'"typeahead"'}]}},{name:"status",description:"Status styles of the menu toggle",required:!1,type:{name:"union",elements:[{name:'"success"'},{name:'"warning"'},{name:'"danger"'}]}},{name:"small",description:"Smaller size of the menu toggle",required:!1,type:{name:"boolean"}}],slots:[{name:"status-icon"},{name:"icon"},{name:"default"},{name:"split-buttons"},{name:"badge"}],sourceFiles:["../../packages/core/src/components/MenuToggle/MenuToggle.vue"]}}),t(r,{src:"packages/core/src/components/MenuToggle/MenuToggleAction.vue",doc:{name:"PfMenuToggleAction",exportName:"default",displayName:"MenuToggleAction",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/MenuToggle/MenuToggleAction.vue"]}}),t(r,{src:"packages/core/src/components/MenuToggle/MenuToggleCheckbox.vue",doc:{name:"PfMenuToggleCheckbox",exportName:"default",displayName:"MenuToggleCheckbox",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"checked",description:"Flag to show if the checkbox is checked. Use null to set the checkbox indeterminate state",required:!1,type:{name:"union",elements:[{name:"boolean"},{name:"null"}]}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/MenuToggle/MenuToggleCheckbox.vue"]}})]),default:n(()=>[e[73]||(e[73]=g("div",{class:"markdown pf-v6-c-content"},[g("h2",{class:"pf-v6-c-title"},"Examples")],-1)),t(i,{title:"Collapsed",source:"<pf-menu-toggle>Collapsed</pf-menu-toggle>"},{default:n(()=>[t(a,null,{default:n(()=>[...e[1]||(e[1]=[l("Collapsed",-1)])]),_:1})]),_:1}),t(i,{title:"Expanded",source:"<pf-menu-toggle expanded>Expanded</pf-menu-toggle>"},{default:n(()=>[t(a,{expanded:""},{default:n(()=>[...e[2]||(e[2]=[l("Expanded",-1)])]),_:1})]),_:1}),t(i,{title:"Disabled",source:"<pf-menu-toggle disabled>Disabled</pf-menu-toggle>"},{default:n(()=>[t(a,{disabled:""},{default:n(()=>[...e[3]||(e[3]=[l("Disabled",-1)])]),_:1})]),_:1}),t(i,{title:"Count",source:`<pf-menu-toggle>
  Count
  <template #badge>
    <pf-badge>4 selected</pf-badge>
  </template>
</pf-menu-toggle>`},{default:n(()=>[t(a,null,{badge:n(()=>[t(b,null,{default:n(()=>[...e[4]||(e[4]=[l("4 selected",-1)])]),_:1})]),default:n(()=>[e[5]||(e[5]=l(" Count ",-1))]),_:1})]),_:1}),t(i,{title:"Primary",source:`<pf-menu-toggle variant="primary">Collapsed</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="primary">
  <template #icon>
    <gear-icon />
  </template>
  Icon
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="primary" settings>
  Settings
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="primary" expanded>Expanded</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="primary" disabled>Disabled</pf-menu-toggle>`},{default:n(()=>[t(a,{variant:"primary"},{default:n(()=>[...e[6]||(e[6]=[l("Collapsed",-1)])]),_:1}),e[11]||(e[11]=l(" "+o(" ")+" ",-1)),t(a,{variant:"primary"},{icon:n(()=>[t(m(d))]),default:n(()=>[e[7]||(e[7]=l(" Icon ",-1))]),_:1}),e[12]||(e[12]=l(" "+o(" ")+" ",-1)),t(a,{variant:"primary",settings:""},{default:n(()=>[...e[8]||(e[8]=[l(" Settings ",-1)])]),_:1}),e[13]||(e[13]=l(" "+o(" ")+" ",-1)),t(a,{variant:"primary",expanded:""},{default:n(()=>[...e[9]||(e[9]=[l("Expanded",-1)])]),_:1}),e[14]||(e[14]=l(" "+o(" ")+" ",-1)),t(a,{variant:"primary",disabled:""},{default:n(()=>[...e[10]||(e[10]=[l("Disabled",-1)])]),_:1})]),_:1}),t(i,{title:"Secondary",source:`<pf-menu-toggle variant="secondary">Collapsed</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="secondary">
  <template #icon>
    <gear-icon />
  </template>
  Icon
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="secondary" settings>
  Settings
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="secondary" expanded>Expanded</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="secondary" disabled>Disabled</pf-menu-toggle>`},{default:n(()=>[t(a,{variant:"secondary"},{default:n(()=>[...e[15]||(e[15]=[l("Collapsed",-1)])]),_:1}),e[20]||(e[20]=l(" "+o(" ")+" ",-1)),t(a,{variant:"secondary"},{icon:n(()=>[t(m(d))]),default:n(()=>[e[16]||(e[16]=l(" Icon ",-1))]),_:1}),e[21]||(e[21]=l(" "+o(" ")+" ",-1)),t(a,{variant:"secondary",settings:""},{default:n(()=>[...e[17]||(e[17]=[l(" Settings ",-1)])]),_:1}),e[22]||(e[22]=l(" "+o(" ")+" ",-1)),t(a,{variant:"secondary",expanded:""},{default:n(()=>[...e[18]||(e[18]=[l("Expanded",-1)])]),_:1}),e[23]||(e[23]=l(" "+o(" ")+" ",-1)),t(a,{variant:"secondary",disabled:""},{default:n(()=>[...e[19]||(e[19]=[l("Disabled",-1)])]),_:1})]),_:1}),t(i,{title:"Plain",source:`<pf-menu-toggle variant="plain" />
{{ ' ' }}
<pf-menu-toggle variant="plain" expanded />
{{ ' ' }}
<pf-menu-toggle variant="plain" disabled />`},{default:n(()=>[t(a,{variant:"plain"}),e[24]||(e[24]=l(" "+o(" ")+" ",-1)),t(a,{variant:"plain",expanded:""}),e[25]||(e[25]=l(" "+o(" ")+" ",-1)),t(a,{variant:"plain",disabled:""})]),_:1}),t(i,{title:"Plain with text",source:`<pf-menu-toggle variant="plainText">Custom text</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="plainText" expanded>Custom text (expanded)</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="plainText" disabled>Disabled</pf-menu-toggle>`},{default:n(()=>[t(a,{variant:"plainText"},{default:n(()=>[...e[26]||(e[26]=[l("Custom text",-1)])]),_:1}),e[29]||(e[29]=l(" "+o(" ")+" ",-1)),t(a,{variant:"plainText",expanded:""},{default:n(()=>[...e[27]||(e[27]=[l("Custom text (expanded)",-1)])]),_:1}),e[30]||(e[30]=l(" "+o(" ")+" ",-1)),t(a,{variant:"plainText",disabled:""},{default:n(()=>[...e[28]||(e[28]=[l("Disabled",-1)])]),_:1})]),_:1}),t(i,{title:"Split button (checkbox)",source:`<pf-menu-toggle>
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
</pf-menu-toggle>`},{default:n(()=>[t(a,null,{"split-buttons":n(()=>[t(p)]),_:1}),e[31]||(e[31]=l(" "+o(" ")+" ",-1)),t(a,{expanded:""},{"split-buttons":n(()=>[t(p)]),_:1}),e[32]||(e[32]=l(" "+o(" ")+" ",-1)),t(a,{disabled:""},{"split-buttons":n(()=>[t(p,{disabled:""})]),_:1})]),_:1}),t(i,{title:"Split button (checkbox indeterminate with toggle text)",source:`<pf-menu-toggle>
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
</pf-menu-toggle>`},{default:n(()=>[t(a,null,{"split-buttons":n(()=>[t(p,{checked:null},{default:n(()=>[...e[33]||(e[33]=[l("10 selected",-1)])]),_:1})]),_:1}),e[36]||(e[36]=l(" "+o(" ")+" ",-1)),t(a,{expanded:""},{"split-buttons":n(()=>[t(p,{checked:null},{default:n(()=>[...e[34]||(e[34]=[l("10 selected",-1)])]),_:1})]),_:1}),e[37]||(e[37]=l(" "+o(" ")+" ",-1)),t(a,{disabled:""},{"split-buttons":n(()=>[t(p,{checked:null,disabled:""},{default:n(()=>[...e[35]||(e[35]=[l("10 selected",-1)])]),_:1})]),_:1})]),_:1}),t(i,{title:"Split button (checkbox, primary)",source:`<pf-menu-toggle variant="primary">
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
</pf-menu-toggle>`},{default:n(()=>[t(a,{variant:"primary"},{"split-buttons":n(()=>[t(p,null,{default:n(()=>[...e[38]||(e[38]=[l("10 selected",-1)])]),_:1})]),_:1}),e[41]||(e[41]=l(" "+o(" ")+" ",-1)),t(a,{variant:"primary",expanded:""},{"split-buttons":n(()=>[t(p,null,{default:n(()=>[...e[39]||(e[39]=[l("10 selected",-1)])]),_:1})]),_:1}),e[42]||(e[42]=l(" "+o(" ")+" ",-1)),t(a,{variant:"primary",disabled:""},{"split-buttons":n(()=>[t(p,null,{default:n(()=>[...e[40]||(e[40]=[l("10 selected",-1)])]),_:1})]),_:1})]),_:1}),t(i,{title:"Split button (checkbox, secondary)",source:`<pf-menu-toggle variant="secondary">
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
</pf-menu-toggle>`},{default:n(()=>[t(a,{variant:"secondary"},{"split-buttons":n(()=>[t(p,null,{default:n(()=>[...e[43]||(e[43]=[l("10 selected",-1)])]),_:1})]),_:1}),e[46]||(e[46]=l(" "+o(" ")+" ",-1)),t(a,{variant:"secondary",expanded:""},{"split-buttons":n(()=>[t(p,null,{default:n(()=>[...e[44]||(e[44]=[l("10 selected",-1)])]),_:1})]),_:1}),e[47]||(e[47]=l(" "+o(" ")+" ",-1)),t(a,{variant:"secondary",disabled:""},{"split-buttons":n(()=>[t(p,{disabled:""},{default:n(()=>[...e[45]||(e[45]=[l("10 selected",-1)])]),_:1})]),_:1})]),_:1}),t(i,{title:"Split button (action)",source:`<pf-menu-toggle>
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
</pf-menu-toggle>`},{default:n(()=>[t(a,null,{"split-buttons":n(()=>[t(s,null,{default:n(()=>[...e[48]||(e[48]=[l("Action",-1)])]),_:1})]),_:1}),e[51]||(e[51]=l(" "+o(" ")+" ",-1)),t(a,{expanded:""},{"split-buttons":n(()=>[t(s,null,{default:n(()=>[...e[49]||(e[49]=[l("Action",-1)])]),_:1})]),_:1}),e[52]||(e[52]=l(" "+o(" ")+" ",-1)),t(a,{disabled:""},{"split-buttons":n(()=>[t(s,{disabled:""},{default:n(()=>[...e[50]||(e[50]=[l("Action",-1)])]),_:1})]),_:1})]),_:1}),t(i,{title:"Split button (action, primary)",source:`<pf-menu-toggle variant="primary">
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
</pf-menu-toggle>`},{default:n(()=>[t(a,{variant:"primary"},{"split-buttons":n(()=>[t(s,null,{default:n(()=>[...e[53]||(e[53]=[l("Action",-1)])]),_:1})]),_:1}),e[56]||(e[56]=l(" "+o(" ")+" ",-1)),t(a,{variant:"primary",expanded:""},{"split-buttons":n(()=>[t(s,null,{default:n(()=>[...e[54]||(e[54]=[l("Action",-1)])]),_:1})]),_:1}),e[57]||(e[57]=l(" "+o(" ")+" ",-1)),t(a,{variant:"primary",disabled:""},{"split-buttons":n(()=>[t(s,{disabled:""},{default:n(()=>[...e[55]||(e[55]=[l("Action",-1)])]),_:1})]),_:1})]),_:1}),t(i,{title:"Split button (action, secondary)",source:`<pf-menu-toggle variant="secondary">
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
</pf-menu-toggle>`},{default:n(()=>[t(a,{variant:"secondary"},{"split-buttons":n(()=>[t(s,null,{default:n(()=>[...e[58]||(e[58]=[l("Action",-1)])]),_:1})]),_:1}),e[61]||(e[61]=l(" "+o(" ")+" ",-1)),t(a,{variant:"secondary",expanded:""},{"split-buttons":n(()=>[t(s,null,{default:n(()=>[...e[59]||(e[59]=[l("Action",-1)])]),_:1})]),_:1}),e[62]||(e[62]=l(" "+o(" ")+" ",-1)),t(a,{variant:"secondary",disabled:""},{"split-buttons":n(()=>[t(s,{disabled:""},{default:n(()=>[...e[60]||(e[60]=[l("Action",-1)])]),_:1})]),_:1})]),_:1}),t(i,{title:"With icon/image and text",source:`<pf-menu-toggle variant="secondary">
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
</pf-menu-toggle>`},{default:n(()=>[t(a,{variant:"secondary"},{icon:n(()=>[t(m(d))]),default:n(()=>[e[63]||(e[63]=l(" Icon ",-1))]),_:1}),e[65]||(e[65]=l(" "+o(" ")+" ",-1)),t(a,{variant:"secondary",disabled:""},{icon:n(()=>[t(m(d))]),default:n(()=>[e[64]||(e[64]=l(" Icon ",-1))]),_:1})]),_:1}),t(i,{title:"With avatar and text",source:`<pf-menu-toggle>
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
</pf-menu-toggle>`},{default:n(()=>[t(a,null,{icon:n(()=>[t(f,{src:"avatar.svg",alt:"avatar"})]),default:n(()=>[e[66]||(e[66]=l(" Ned Username ",-1))]),_:1}),e[69]||(e[69]=l(" "+o(" ")+" ",-1)),t(a,{expanded:""},{icon:n(()=>[t(f,{src:"avatar.svg",alt:"avatar"})]),default:n(()=>[e[67]||(e[67]=l(" Ned Username ",-1))]),_:1}),e[70]||(e[70]=l(" "+o(" ")+" ",-1)),t(a,{disabled:""},{icon:n(()=>[t(f,{src:"avatar.svg",alt:"avatar"})]),default:n(()=>[e[68]||(e[68]=l(" Ned Username ",-1))]),_:1})]),_:1}),t(i,{title:"Full height",source:`<div style="height:80px">
  <pf-menu-toggle full-height>Full height</pf-menu-toggle>
</div>`},{default:n(()=>[g("div",T,[t(a,{"full-height":""},{default:n(()=>[...e[71]||(e[71]=[l("Full height",-1)])]),_:1})])]),_:1}),t(i,{title:"Full width",source:"<pf-menu-toggle full-width>Full width</pf-menu-toggle>"},{default:n(()=>[t(a,{"full-width":""},{default:n(()=>[...e[72]||(e[72]=[l("Full width",-1)])]),_:1})]),_:1})]),_:1})}}}),I=k(w,[["__scopeId","data-v-8c1456ed"]]);export{I as default};
