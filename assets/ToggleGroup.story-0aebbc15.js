import{e as w,r as p,a as i,o as h,c as N,w as s,b as e,d as t,t as g,p as V,k,g as a,_ as D}from"./index-edd8fb86.js";const O=u=>(V("data-v-7160149c"),u=u(),k(),u),J=O(()=>t("div",{class:"markdown pf-v5-c-content"},[t("p",null,[a("A "),t("strong",null,"toggle group"),a(" is a group of controls that can be used to quickly switch between actions or states.")]),t("h2",{class:"pf-v5-c-title"},"Examples")],-1)),U=O(()=>t("div",{class:"markdown pf-v5-c-content"},[t("p",null,[a("The "),t("code",null,"pf-toggle-group"),a(" behaves like a multi-selection when no "),t("code",null,"v-model"),a(" prop is passed or when its value is a javascript "),t("code",null,"Array"),a(".")])],-1)),T={style:{"margin-bottom":"1em"}},A=w({__name:"ToggleGroup.story",setup(u){const c=p(!1),r=p([]),d=p(void 0),f=p(!1),m=p(!1),v=p(!1);return(I,l)=>{const x=i("component-title"),y=i("pf-switch"),n=i("pf-toggle-group-item"),_=i("pf-toggle-group"),b=i("story-canvas"),S=i("doc-page");return h(),N(S,{title:"Toggle group"},{default:s(()=>[e(x,{name:"pf-toggle-group"}),J,e(b,{title:"Default with multiple selectable",source:`<div style="margin-bottom: 1em">
  <pf-switch v-model:checked="disabledAll" label="Disable all" ></pf-switch>
</div>

<pf-toggle-group v-model="selectionSet" :disabled="disabledAll" aria-label="Default with multiple selectable">
  <pf-toggle-group-item text="Option 1" ></pf-toggle-group-item>
  <pf-toggle-group-item text="Option 2" value="Value of Option 2" ></pf-toggle-group-item>
  <pf-toggle-group-item text="Option 3" disabled ></pf-toggle-group-item>
</pf-toggle-group>

<pre>const selection = ref({{ JSON.stringify(selectionSet) }})</pre>`},{intro:s(()=>[U]),default:s(()=>[t("div",T,[e(y,{checked:c.value,"onUpdate:checked":l[0]||(l[0]=o=>c.value=o),label:"Disable all"},null,8,["checked"])]),e(_,{modelValue:r.value,"onUpdate:modelValue":l[1]||(l[1]=o=>r.value=o),disabled:c.value,"aria-label":"Default with multiple selectable"},{default:s(()=>[e(n,{text:"Option 1"}),e(n,{text:"Option 2",value:"Value of Option 2"}),e(n,{text:"Option 3",disabled:""})]),_:1},8,["modelValue","disabled"]),t("pre",null,"const selection = ref("+g(JSON.stringify(r.value))+")",1)]),_:1}),e(b,{title:"Default with single selectable",source:`<pf-toggle-group v-model="singleSelection" aria-label="Default with multiple selectable">
  <pf-toggle-group-item text="Option 1" ></pf-toggle-group-item>
  <pf-toggle-group-item text="Option 2" value="Value of Option 2" ></pf-toggle-group-item>
  <pf-toggle-group-item text="Option 3" ></pf-toggle-group-item>
</pf-toggle-group>

<pre>const singleSelection = ref({{ JSON.stringify(singleSelection) }})</pre>`},{default:s(()=>[e(_,{modelValue:d.value,"onUpdate:modelValue":l[2]||(l[2]=o=>d.value=o),"aria-label":"Default with multiple selectable"},{default:s(()=>[e(n,{text:"Option 1"}),e(n,{text:"Option 2",value:"Value of Option 2"}),e(n,{text:"Option 3"})]),_:1},8,["modelValue"]),t("pre",null,"const singleSelection = ref("+g(JSON.stringify(d.value))+")",1)]),_:1}),e(b,{title:"Unmanaged single selectable",source:`<pf-toggle-group aria-label="Default with multiple selectable">
  <pf-toggle-group-item v-model:selected="selected1" text="Option 1" ></pf-toggle-group-item>
  <pf-toggle-group-item v-model:selected="selected2" text="Option 2" ></pf-toggle-group-item>
  <pf-toggle-group-item v-model:selected="selected3" text="Option 3" ></pf-toggle-group-item>
</pf-toggle-group>

<pre>
  const selected1 = ref({{ JSON.stringify(selected1) }})
  const selected2 = ref({{ JSON.stringify(selected2) }})
  const selected3 = ref({{ JSON.stringify(selected3) }})
</pre>`},{default:s(()=>[e(_,{"aria-label":"Default with multiple selectable"},{default:s(()=>[e(n,{selected:f.value,"onUpdate:selected":l[3]||(l[3]=o=>f.value=o),text:"Option 1"},null,8,["selected"]),e(n,{selected:m.value,"onUpdate:selected":l[4]||(l[4]=o=>m.value=o),text:"Option 2"},null,8,["selected"]),e(n,{selected:v.value,"onUpdate:selected":l[5]||(l[5]=o=>v.value=o),text:"Option 3"},null,8,["selected"])]),_:1}),t("pre",null,"        const selected1 = ref("+g(JSON.stringify(f.value))+`)
        const selected2 = ref(`+g(JSON.stringify(m.value))+`)
        const selected3 = ref(`+g(JSON.stringify(v.value))+`)
      `,1)]),_:1})]),_:1})}}});const C=D(A,[["__scopeId","data-v-7160149c"]]);export{C as default};
