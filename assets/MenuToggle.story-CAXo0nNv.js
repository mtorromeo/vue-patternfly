import{G as g}from"./gear-icon-2QaXb7ry.js";import{E as f}from"./ellipsis-vertical-icon-Br2JCUFj.js";import{f as h,o as x,c as y,w as t,a,b as e,t as o,u as p,d as c,e as u,p as k,l as T,_ as A}from"./index-CXcl0Ekg.js";const b=s=>(k("data-v-38e849bd"),s=s(),T(),s),w=b(()=>c("b",null,"menu toggle",-1)),C=b(()=>c("div",{class:"markdown pf-v5-c-content"},[c("h2",{class:"pf-v5-c-title"},"Examples")],-1)),M={style:{height:"80px"}},I=h({__name:"MenuToggle.story",setup(s){return(S,F)=>{const r=u("component-info"),n=u("pf-menu-toggle"),l=u("story-canvas"),_=u("pf-badge"),i=u("pf-menu-toggle-checkbox"),d=u("pf-menu-toggle-action"),m=u("pf-avatar"),v=u("doc-page");return x(),y(v,{name:"Components/MenuToggle.story.vue",title:"Menu toggle"},{description:t(()=>[a("The "),w,a(" component pairs with the menu OR the panel component to create more customizable dropdown and select implementations. Using a menu toggle with a menu enables you to create custom component configurations not supported by the standard dropdown or select components.")]),apidocs:t(()=>[e(r,{src:"packages/core/src/components/MenuToggle/MenuToggle.vue",doc:{name:"PfMenuToggle",exportName:"default",displayName:"MenuToggle",description:"",tags:{},expose:[{name:"el"},{name:"focus"}],props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"expanded",description:"Flag indicating the toggle has expanded styling",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"disabled",description:"Flag indicating the toggle is disabled",required:!1,type:{name:"boolean"}},{name:"fullHeight",description:"Flag indicating the toggle is full height",required:!1,type:{name:"boolean"}},{name:"fullWidth",description:"Flag indicating the toggle takes up the full width of its parent",required:!1,type:{name:"boolean"}},{name:"splitButton",description:"Variant of split button toggle",required:!1,type:{name:"union",elements:[{name:"boolean"},{name:'"default"'},{name:'"action"'},{name:'"checkbox"'}]}},{name:"variant",description:"Variant styles of the menu toggle",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"plain"'},{name:'"primary"'},{name:'"plainText"'},{name:'"secondary"'},{name:'"typeahead"'}]}}],events:[{name:"update:expanded",type:{names:["boolean"]}}],slots:[{name:"default"},{name:"icon"},{name:"badge"}],sourceFiles:["../../packages/core/src/components/MenuToggle/MenuToggle.vue"]}},null,8,["doc"]),e(r,{src:"packages/core/src/components/MenuToggle/MenuToggleAction.vue",doc:{name:"PfMenuToggleAction",exportName:"default",displayName:"MenuToggleAction",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/MenuToggle/MenuToggleAction.vue"]}},null,8,["doc"]),e(r,{src:"packages/core/src/components/MenuToggle/MenuToggleCheckbox.vue",doc:{name:"PfMenuToggleCheckbox",exportName:"default",displayName:"MenuToggleCheckbox",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"valid",description:"Flag to show if the checkbox selection is valid or invalid",required:!1,type:{name:"boolean"}},{name:"defaultChecked",description:`Flag to set the default checked value of the checkbox when it is uncontrolled by React state.
To make the checkbox controlled instead use the isChecked prop, but do not use both.`,required:!1,type:{name:"union",elements:[{name:"boolean"},{name:"null"}]}}],sourceFiles:["../../packages/core/src/components/MenuToggle/MenuToggleCheckbox.vue"]}},null,8,["doc"])]),default:t(()=>[C,e(l,{title:"Collapsed",source:"<pf-menu-toggle>Collapsed</pf-menu-toggle>"},{default:t(()=>[e(n,null,{default:t(()=>[a("Collapsed")]),_:1})]),_:1}),e(l,{title:"Expanded",source:"<pf-menu-toggle expanded>Expanded</pf-menu-toggle>"},{default:t(()=>[e(n,{expanded:""},{default:t(()=>[a("Expanded")]),_:1})]),_:1}),e(l,{title:"Disabled",source:"<pf-menu-toggle disabled>Disabled</pf-menu-toggle>"},{default:t(()=>[e(n,{disabled:""},{default:t(()=>[a("Disabled")]),_:1})]),_:1}),e(l,{title:"Count",source:`<pf-menu-toggle>
  Count
  <template #badge>
    <pf-badge>4 selected</pf-badge>
  </template>
</pf-menu-toggle>`},{default:t(()=>[e(n,null,{badge:t(()=>[e(_,null,{default:t(()=>[a("4 selected")]),_:1})]),default:t(()=>[a(" Count ")]),_:1})]),_:1}),e(l,{title:"Primary",source:`<pf-menu-toggle variant="primary">Collapsed</pf-menu-toggle>
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
<pf-menu-toggle variant="primary" disabled>Disabled</pf-menu-toggle>`},{default:t(()=>[e(n,{variant:"primary"},{default:t(()=>[a("Collapsed")]),_:1}),a(" "+o(" ")+" "),e(n,{variant:"primary"},{icon:t(()=>[e(p(g))]),default:t(()=>[a(" Icon ")]),_:1}),a(" "+o(" ")+" "),e(n,{variant:"primary",expanded:""},{default:t(()=>[a("Expanded")]),_:1}),a(" "+o(" ")+" "),e(n,{variant:"primary",disabled:""},{default:t(()=>[a("Disabled")]),_:1})]),_:1}),e(l,{title:"Secondary",source:`<pf-menu-toggle variant="secondary">Collapsed</pf-menu-toggle>
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
<pf-menu-toggle variant="secondary" disabled>Disabled</pf-menu-toggle>`},{default:t(()=>[e(n,{variant:"secondary"},{default:t(()=>[a("Collapsed")]),_:1}),a(" "+o(" ")+" "),e(n,{variant:"secondary"},{icon:t(()=>[e(p(g))]),default:t(()=>[a(" Icon ")]),_:1}),a(" "+o(" ")+" "),e(n,{variant:"secondary",expanded:""},{default:t(()=>[a("Expanded")]),_:1}),a(" "+o(" ")+" "),e(n,{variant:"secondary",disabled:""},{default:t(()=>[a("Disabled")]),_:1})]),_:1}),e(l,{title:"Plain",source:`<pf-menu-toggle variant="plain"><ellipsis-vertical-icon /></pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="plain" expanded><ellipsis-vertical-icon /></pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="plain" disabled><ellipsis-vertical-icon /></pf-menu-toggle>`},{default:t(()=>[e(n,{variant:"plain"},{default:t(()=>[e(p(f))]),_:1}),a(" "+o(" ")+" "),e(n,{variant:"plain",expanded:""},{default:t(()=>[e(p(f))]),_:1}),a(" "+o(" ")+" "),e(n,{variant:"plain",disabled:""},{default:t(()=>[e(p(f))]),_:1})]),_:1}),e(l,{title:"Plain with text",source:`<pf-menu-toggle variant="plainText">Custom text</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="plainText" expanded>Custom text (expanded)</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle variant="plainText" disabled>Disabled</pf-menu-toggle>`},{default:t(()=>[e(n,{variant:"plainText"},{default:t(()=>[a("Custom text")]),_:1}),a(" "+o(" ")+" "),e(n,{variant:"plainText",expanded:""},{default:t(()=>[a("Custom text (expanded)")]),_:1}),a(" "+o(" ")+" "),e(n,{variant:"plainText",disabled:""},{default:t(()=>[a("Disabled")]),_:1})]),_:1}),e(l,{title:"Split button (checkbox)",source:`<pf-menu-toggle split-button>
  <pf-menu-toggle-checkbox />
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle split-button expanded>
  <pf-menu-toggle-checkbox />
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle split-button disabled>
  <pf-menu-toggle-checkbox disabled />
</pf-menu-toggle>`},{default:t(()=>[e(n,{"split-button":""},{default:t(()=>[e(i)]),_:1}),a(" "+o(" ")+" "),e(n,{"split-button":"",expanded:""},{default:t(()=>[e(i)]),_:1}),a(" "+o(" ")+" "),e(n,{"split-button":"",disabled:""},{default:t(()=>[e(i,{disabled:""})]),_:1})]),_:1}),e(l,{title:"Split button (checkbox with toggle text)",source:`<pf-menu-toggle split-button>
  <pf-menu-toggle-checkbox /> 10 selected
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle split-button expanded>
  <pf-menu-toggle-checkbox /> 10 selected
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle split-button disabled>
  <pf-menu-toggle-checkbox disabled /> 10 selected
</pf-menu-toggle>`},{default:t(()=>[e(n,{"split-button":""},{default:t(()=>[e(i),a(" 10 selected ")]),_:1}),a(" "+o(" ")+" "),e(n,{"split-button":"",expanded:""},{default:t(()=>[e(i),a(" 10 selected ")]),_:1}),a(" "+o(" ")+" "),e(n,{"split-button":"",disabled:""},{default:t(()=>[e(i,{disabled:""}),a(" 10 selected ")]),_:1})]),_:1}),e(l,{title:"Split button (checkbox, primary)",source:`<pf-menu-toggle split-button variant="primary">
  <pf-menu-toggle-checkbox /> 10 selected
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle split-button variant="primary" expanded>
  <pf-menu-toggle-checkbox /> 10 selected
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle split-button variant="primary" disabled>
  <pf-menu-toggle-checkbox disabled /> 10 selected
</pf-menu-toggle>`},{default:t(()=>[e(n,{"split-button":"",variant:"primary"},{default:t(()=>[e(i),a(" 10 selected ")]),_:1}),a(" "+o(" ")+" "),e(n,{"split-button":"",variant:"primary",expanded:""},{default:t(()=>[e(i),a(" 10 selected ")]),_:1}),a(" "+o(" ")+" "),e(n,{"split-button":"",variant:"primary",disabled:""},{default:t(()=>[e(i,{disabled:""}),a(" 10 selected ")]),_:1})]),_:1}),e(l,{title:"Split button (checkbox, secondary)",source:`<pf-menu-toggle split-button variant="secondary">
  <pf-menu-toggle-checkbox /> 10 selected
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle split-button variant="secondary" expanded>
  <pf-menu-toggle-checkbox /> 10 selected
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle split-button variant="secondary" disabled>
  <pf-menu-toggle-checkbox disabled /> 10 selected
</pf-menu-toggle>`},{default:t(()=>[e(n,{"split-button":"",variant:"secondary"},{default:t(()=>[e(i),a(" 10 selected ")]),_:1}),a(" "+o(" ")+" "),e(n,{"split-button":"",variant:"secondary",expanded:""},{default:t(()=>[e(i),a(" 10 selected ")]),_:1}),a(" "+o(" ")+" "),e(n,{"split-button":"",variant:"secondary",disabled:""},{default:t(()=>[e(i,{disabled:""}),a(" 10 selected ")]),_:1})]),_:1}),e(l,{title:"Split button (action)",source:`<pf-menu-toggle split-button="action">
  <pf-menu-toggle-action>Action</pf-menu-toggle-action>
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle split-button="action" expanded>
  <pf-menu-toggle-action>Action</pf-menu-toggle-action>
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle split-button="action" disabled>
  <pf-menu-toggle-action disabled>Action</pf-menu-toggle-action>
</pf-menu-toggle>`},{default:t(()=>[e(n,{"split-button":"action"},{default:t(()=>[e(d,null,{default:t(()=>[a("Action")]),_:1})]),_:1}),a(" "+o(" ")+" "),e(n,{"split-button":"action",expanded:""},{default:t(()=>[e(d,null,{default:t(()=>[a("Action")]),_:1})]),_:1}),a(" "+o(" ")+" "),e(n,{"split-button":"action",disabled:""},{default:t(()=>[e(d,{disabled:""},{default:t(()=>[a("Action")]),_:1})]),_:1})]),_:1}),e(l,{title:"Split button (action, primary)",source:`<pf-menu-toggle split-button="action" variant="primary">
  <pf-menu-toggle-action>Action</pf-menu-toggle-action>
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle split-button="action" variant="primary" expanded>
  <pf-menu-toggle-action>Action</pf-menu-toggle-action>
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle split-button="action" variant="primary" disabled>
  <pf-menu-toggle-action disabled>Action</pf-menu-toggle-action>
</pf-menu-toggle>`},{default:t(()=>[e(n,{"split-button":"action",variant:"primary"},{default:t(()=>[e(d,null,{default:t(()=>[a("Action")]),_:1})]),_:1}),a(" "+o(" ")+" "),e(n,{"split-button":"action",variant:"primary",expanded:""},{default:t(()=>[e(d,null,{default:t(()=>[a("Action")]),_:1})]),_:1}),a(" "+o(" ")+" "),e(n,{"split-button":"action",variant:"primary",disabled:""},{default:t(()=>[e(d,{disabled:""},{default:t(()=>[a("Action")]),_:1})]),_:1})]),_:1}),e(l,{title:"Split button (action, secondary)",source:`<pf-menu-toggle split-button="action" variant="secondary">
  <pf-menu-toggle-action>Action</pf-menu-toggle-action>
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle split-button="action" variant="secondary" expanded>
  <pf-menu-toggle-action>Action</pf-menu-toggle-action>
</pf-menu-toggle>
{{ ' ' }}
<pf-menu-toggle split-button="action" variant="secondary" disabled>
  <pf-menu-toggle-action disabled>Action</pf-menu-toggle-action>
</pf-menu-toggle>`},{default:t(()=>[e(n,{"split-button":"action",variant:"secondary"},{default:t(()=>[e(d,null,{default:t(()=>[a("Action")]),_:1})]),_:1}),a(" "+o(" ")+" "),e(n,{"split-button":"action",variant:"secondary",expanded:""},{default:t(()=>[e(d,null,{default:t(()=>[a("Action")]),_:1})]),_:1}),a(" "+o(" ")+" "),e(n,{"split-button":"action",variant:"secondary",disabled:""},{default:t(()=>[e(d,{disabled:""},{default:t(()=>[a("Action")]),_:1})]),_:1})]),_:1}),e(l,{title:"With icon/image and text",source:`<pf-menu-toggle variant="secondary">
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
</pf-menu-toggle>`},{default:t(()=>[e(n,{variant:"secondary"},{icon:t(()=>[e(p(g))]),default:t(()=>[a(" Icon ")]),_:1}),a(" "+o(" ")+" "),e(n,{variant:"secondary",disabled:""},{icon:t(()=>[e(p(g))]),default:t(()=>[a(" Icon ")]),_:1})]),_:1}),e(l,{title:"With avatar and text",source:`<pf-menu-toggle>
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
</pf-menu-toggle>`},{default:t(()=>[e(n,null,{icon:t(()=>[e(m,{src:"avatar.svg",alt:"avatar"})]),default:t(()=>[a(" Ned Username ")]),_:1}),a(" "+o(" ")+" "),e(n,{expanded:""},{icon:t(()=>[e(m,{src:"avatar.svg",alt:"avatar"})]),default:t(()=>[a(" Ned Username ")]),_:1}),a(" "+o(" ")+" "),e(n,{disabled:""},{icon:t(()=>[e(m,{src:"avatar.svg",alt:"avatar"})]),default:t(()=>[a(" Ned Username ")]),_:1})]),_:1}),e(l,{title:"Full height",source:`<div style="height:80px">
  <pf-menu-toggle full-height>Full height</pf-menu-toggle>
</div>`},{default:t(()=>[c("div",M,[e(n,{"full-height":""},{default:t(()=>[a("Full height")]),_:1})])]),_:1}),e(l,{title:"Full width",source:"<pf-menu-toggle full-width>Full width</pf-menu-toggle>"},{default:t(()=>[e(n,{"full-width":""},{default:t(()=>[a("Full width")]),_:1})]),_:1})]),_:1},8,["name"])}}}),E=A(I,[["__scopeId","data-v-38e849bd"]]);export{E as default};
