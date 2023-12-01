import{M as b}from"./magnifying-glass-icon-qUUwUevQ.js";import{X as k}from"./xmark-icon-BYZj2ILe.js";import{f as C,r as y,g as w,a as n,o,c,w as t,b as g,d as e,u as d,k as I,v as F,i as N,j as U,F as D,e as x,t as M}from"./index-slCIAJif.js";const B=x("b",null,"text input group",-1),E=x("div",{class:"markdown pf-v5-c-content"},[x("h2",{class:"pf-v5-c-title"},"Examples")],-1),j=C({__name:"TextInputGroup.story",setup(q){const a=y(""),u=y(""),f=w(["chip one","chip two","chip three","chip four","chip five","chip six","chip seven","chip eight","chip nine","chip ten","chip eleven","chip twelve","chip thirteen","chip fourteen"]);return(P,i)=>{const m=n("component-info"),l=n("pf-text-input-group-main"),s=n("pf-text-input-group"),r=n("story-canvas"),_=n("pf-button"),h=n("pf-text-input-group-utilities"),T=n("pf-chip"),V=n("pf-chip-group"),G=n("doc-page");return o(),c(G,{title:"Text input group"},{description:t(()=>[g("A "),B,g(" is a more flexible composable version of a [text input](#/stories/components/text-input). It enables consumers of PatternFly to build custom inputs for filtering and similar use cases by placing elements like icons, chips groups and buttons within a text input.")]),apidocs:t(()=>[e(m,{src:"packages/core/src/components/TextInputGroup/TextInputGroup.vue",doc:{name:"PfTextInputGroup",exportName:"default",displayName:"TextInputGroup",description:"",tags:{},props:[{name:"disabled",description:"Adds disabled styling and a disabled context value which text input group main hooks into for the input itself",required:!1,type:{name:"boolean"}},{name:"plain",description:"Flag to indicate the toggle has no border or background",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/TextInputGroup/TextInputGroup.vue"]}},null,8,["doc"]),e(m,{src:"packages/core/src/components/TextInputGroup/TextInputGroupMain.vue",doc:{name:"PfTextInputGroupMain",exportName:"default",displayName:"TextInputGroupMain",description:"",tags:{},expose:[{name:"focus"}],props:[{name:"hint",description:"Suggestion that will show up like a placeholder even with text in the input",required:!1,type:{name:"string"}},{name:"modelValue",description:"Value for the input",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]}}],events:[{name:"update:modelValue",type:{names:["string"]}},{name:"change",type:{names:["Event"]},description:"Callback for when there is a change in the input field"},{name:"focus",type:{names:["FocusEvent"]},description:"Callback for when the input field is focused"},{name:"blur",type:{names:["FocusEvent"]},description:"Callback for when focus is lost on the input field"}],slots:[{name:"default"},{name:"icon"}],sourceFiles:["../../packages/core/src/components/TextInputGroup/TextInputGroupMain.vue"]}},null,8,["doc"]),e(m,{src:"packages/core/src/components/TextInputGroup/TextInputGroupUtilities.vue",doc:{name:"PfTextInputGroupUtilities",exportName:"default",displayName:"TextInputGroupUtilities",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/TextInputGroup/TextInputGroupUtilities.vue"]}},null,8,["doc"])]),default:t(()=>[E,e(r,{title:"Basic",source:`<pf-text-input-group>
  <pf-text-input-group-main />
</pf-text-input-group>`},{default:t(()=>[e(s,null,{default:t(()=>[e(l)]),_:1})]),_:1}),e(r,{title:"Disabled",source:`<pf-text-input-group disabled>
  <pf-text-input-group-main model-value="Disabled" aria-label="Disabled text input group example input" />
</pf-text-input-group>`},{default:t(()=>[e(s,{disabled:""},{default:t(()=>[e(l,{"model-value":"Disabled","aria-label":"Disabled text input group example input"})]),_:1})]),_:1}),e(r,{title:"Utilities and icon",source:`<pf-text-input-group>
  <pf-text-input-group-main v-model="inputValue">
    <template #icon>
      <magnifying-glass-icon />
    </template>
  </pf-text-input-group-main>
  <pf-text-input-group-utilities v-if="!!inputValue">
    <pf-button variant="plain" aria-label="Clear button and input" @click="inputValue = ''">
      <xmark-icon />
    </pf-button>
  </pf-text-input-group-utilities>
</pf-text-input-group>`},{default:t(()=>[e(s,null,{default:t(()=>[e(l,{modelValue:a.value,"onUpdate:modelValue":i[0]||(i[0]=p=>a.value=p)},{icon:t(()=>[e(d(b))]),_:1},8,["modelValue"]),a.value?(o(),c(h,{key:0},{default:t(()=>[e(_,{variant:"plain","aria-label":"Clear button and input",onClick:i[1]||(i[1]=p=>a.value="")},{default:t(()=>[e(d(k))]),_:1})]),_:1})):I("",!0)]),_:1})]),_:1}),e(r,{title:"Filters",source:`<pf-text-input-group>
  <pf-text-input-group-main v-model="inputValue2">
    <template v-if="!chips.length" #icon>
      <magnifying-glass-icon />
    </template>
    <pf-chip-group>
      <pf-chip v-for="(chip, index) in chips" :key="index" @click="chips.splice(index, 1)">{{ chip }}</pf-chip>
    </pf-chip-group>
  </pf-text-input-group-main>
  <pf-text-input-group-utilities v-if="!!inputValue2">
    <pf-button variant="plain" aria-label="Clear button and input" @click="inputValue2 = ''">
      <xmark-icon />
    </pf-button>
  </pf-text-input-group-utilities>
</pf-text-input-group>`},{default:t(()=>[e(s,null,{default:t(()=>[e(l,{modelValue:u.value,"onUpdate:modelValue":i[2]||(i[2]=p=>u.value=p)},F({default:t(()=>[e(V,null,{default:t(()=>[(o(!0),N(D,null,U(f,(p,v)=>(o(),c(T,{key:v,onClick:S=>f.splice(v,1)},{default:t(()=>[g(M(p),1)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:2},[f.length?void 0:{name:"icon",fn:t(()=>[e(d(b))]),key:"0"}]),1032,["modelValue"]),u.value?(o(),c(h,{key:0},{default:t(()=>[e(_,{variant:"plain","aria-label":"Clear button and input",onClick:i[3]||(i[3]=p=>u.value="")},{default:t(()=>[e(d(k))]),_:1})]),_:1})):I("",!0)]),_:1})]),_:1})]),_:1})}}});export{j as default};
