import{f as w,r as a,a as i,o as T,c as S,w as n,b as p,d as e,e as l,t as r,p as N,l as V,_ as k}from"./index-jISOFsdf.js";const y=u=>(N("data-v-76bbab8f"),u=u(),V(),u),G=y(()=>l("b",null,"toggle group",-1)),D=y(()=>l("div",{class:"markdown pf-v5-c-content"},[l("h2",{class:"pf-v5-c-title"},"Examples")],-1)),q=y(()=>l("div",{class:"markdown pf-v5-c-content"},[l("p",null,[p("The "),l("code",null,"pf-toggle-group"),p(" behaves like a multi-selection when no "),l("code",null,"v-model"),p(" prop is passed or when its value is a javascript "),l("code",null,"Array"),p(".")])],-1)),J={style:{"margin-bottom":"1em"}},I=w({__name:"ToggleGroup.story",setup(u){const d=a(!1),c=a([]),g=a(void 0),m=a(!1),f=a(!1),v=a(!1);return(U,t)=>{const O=i("component-info"),h=i("pf-switch"),s=i("pf-toggle-group-item"),b=i("pf-toggle-group"),_=i("story-canvas"),x=i("doc-page");return T(),S(x,{name:"Components/ToggleGroup.story.vue",title:"Toggle group"},{description:n(()=>[p("A "),G,p(" is a group of controls that can be used to quickly switch between actions or states.")]),apidocs:n(()=>[e(O,{src:"packages/core/src/components/ToggleGroup/ToggleGroup.vue",doc:{name:"PfToggleGroup",exportName:"default",displayName:"ToggleGroup",description:"",tags:{},props:[{name:"compact",description:"Modifies the toggle group to include compact styling.",required:!1,type:{name:"boolean"}},{name:"disabled",description:"Disable all toggle group items under this component.",required:!1,type:{name:"boolean"}},{name:"modelValue",required:!1,type:{name:"T"}}],events:[{name:"update:modelValue",type:{names:["T"]}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/ToggleGroup/ToggleGroup.vue"]}},null,8,["doc"]),e(O,{src:"packages/core/src/components/ToggleGroup/ToggleGroupItem.vue",doc:{name:"PfToggleGroupItem",exportName:"default",displayName:"ToggleGroupItem",description:"",tags:{},props:[{name:"text",description:"Text rendered inside the toggle group item",required:!1,type:{name:"string"}},{name:"value",required:!1,type:{name:"T"}},{name:"disabled",description:"Flag indicating if the toggle group item is disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"selected",description:"Flag indicating if the toggle group item is selected",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"ariaLabel",description:"required when icon is used with no supporting text",required:!1,type:{name:"string"}},{name:"buttonId",description:"Optional id for the button within the toggle group item",required:!1,type:{name:"string"}}],events:[{name:"click",type:{names:["union"],elements:[{name:"MouseEvent"},{name:"TouchEvent"}]}},{name:"update:selected",type:{names:["boolean"]}}],slots:[{name:"icon"},{name:"default"}],sourceFiles:["../../packages/core/src/components/ToggleGroup/ToggleGroupItem.vue"]}},null,8,["doc"])]),default:n(()=>[D,e(_,{title:"Default with multiple selectable",source:`<div style="margin-bottom: 1em">
  <pf-switch v-model:checked="disabledAll" label="Disable all" />
</div>

<pf-toggle-group v-model="selectionSet" :disabled="disabledAll" aria-label="Default with multiple selectable">
  <pf-toggle-group-item text="Option 1" />
  <pf-toggle-group-item text="Option 2" value="Value of Option 2" />
  <pf-toggle-group-item text="Option 3" disabled />
</pf-toggle-group>

<pre>const selection = ref({{ JSON.stringify(selectionSet) }})</pre>`},{intro:n(()=>[q]),default:n(()=>[l("div",J,[e(h,{checked:d.value,"onUpdate:checked":t[0]||(t[0]=o=>d.value=o),label:"Disable all"},null,8,["checked"])]),e(b,{modelValue:c.value,"onUpdate:modelValue":t[1]||(t[1]=o=>c.value=o),disabled:d.value,"aria-label":"Default with multiple selectable"},{default:n(()=>[e(s,{text:"Option 1"}),e(s,{text:"Option 2",value:"Value of Option 2"}),e(s,{text:"Option 3",disabled:""})]),_:1},8,["modelValue","disabled"]),l("pre",null,"const selection = ref("+r(JSON.stringify(c.value))+")",1)]),_:1}),e(_,{title:"Default with single selectable",source:`<pf-toggle-group v-model="singleSelection" aria-label="Default with multiple selectable">
  <pf-toggle-group-item text="Option 1" />
  <pf-toggle-group-item text="Option 2" value="Value of Option 2" />
  <pf-toggle-group-item text="Option 3" />
</pf-toggle-group>

<pre>const singleSelection = ref({{ JSON.stringify(singleSelection) }})</pre>`},{default:n(()=>[e(b,{modelValue:g.value,"onUpdate:modelValue":t[2]||(t[2]=o=>g.value=o),"aria-label":"Default with multiple selectable"},{default:n(()=>[e(s,{text:"Option 1"}),e(s,{text:"Option 2",value:"Value of Option 2"}),e(s,{text:"Option 3"})]),_:1},8,["modelValue"]),l("pre",null,"const singleSelection = ref("+r(JSON.stringify(g.value))+")",1)]),_:1}),e(_,{title:"Unmanaged single selectable",source:`<pf-toggle-group aria-label="Default with multiple selectable">
  <pf-toggle-group-item v-model:selected="selected1" text="Option 1" />
  <pf-toggle-group-item v-model:selected="selected2" text="Option 2" />
  <pf-toggle-group-item v-model:selected="selected3" text="Option 3" />
</pf-toggle-group>

<pre>
  const selected1 = ref({{ JSON.stringify(selected1) }})
  const selected2 = ref({{ JSON.stringify(selected2) }})
  const selected3 = ref({{ JSON.stringify(selected3) }})
</pre>`},{default:n(()=>[e(b,{"aria-label":"Default with multiple selectable"},{default:n(()=>[e(s,{selected:m.value,"onUpdate:selected":t[3]||(t[3]=o=>m.value=o),text:"Option 1"},null,8,["selected"]),e(s,{selected:f.value,"onUpdate:selected":t[4]||(t[4]=o=>f.value=o),text:"Option 2"},null,8,["selected"]),e(s,{selected:v.value,"onUpdate:selected":t[5]||(t[5]=o=>v.value=o),text:"Option 3"},null,8,["selected"])]),_:1}),l("pre",null,"        const selected1 = ref("+r(JSON.stringify(m.value))+`)
        const selected2 = ref(`+r(JSON.stringify(f.value))+`)
        const selected3 = ref(`+r(JSON.stringify(v.value))+`)
      `,1)]),_:1})]),_:1},8,["name"])}}}),C=k(I,[["__scopeId","data-v-76bbab8f"]]);export{C as default};
