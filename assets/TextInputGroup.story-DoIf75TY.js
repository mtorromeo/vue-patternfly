import{M as _}from"./magnifying-glass-icon-ByF1zggB.js";import{X as y}from"./xmark-icon-B0n0tFLS.js";import{f as w,r as k,g as C,o,c,w as t,a as g,b as x,d as e,u as d,k as I,q,i as F,j as N,F as S,e as a,t as U}from"./index-9TsNn5Vt.js";const P=w({__name:"TextInputGroup.story",setup(D){const p=k(""),u=k(""),m=C(["chip one","chip two","chip three","chip four","chip five","chip six","chip seven","chip eight","chip nine","chip ten","chip eleven","chip twelve","chip thirteen","chip fourteen"]);return(M,n)=>{const f=a("component-info"),s=a("pf-text-input-group-main"),l=a("pf-text-input-group"),r=a("story-canvas"),h=a("pf-button"),v=a("pf-text-input-group-utilities"),V=a("pf-chip"),T=a("pf-chip-group"),G=a("doc-page");return o(),c(G,{name:"Components/TextInputGroup.story.vue",title:"Text input group"},{description:t(()=>n[4]||(n[4]=[g("A "),x("b",null,"text input group",-1),g(" is a more flexible composable version of a [text input](#/stories/components/text-input). It enables consumers of PatternFly to build custom inputs for filtering and similar use cases by placing elements like icons, chips groups and buttons within a text input.")])),apidocs:t(()=>[e(f,{src:"packages/core/src/components/TextInputGroup/TextInputGroup.vue",doc:{name:"PfTextInputGroup",exportName:"default",displayName:"TextInputGroup",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"disabled",description:"Adds disabled styling and a disabled context value which text input group main hooks into for the input itself",required:!1,type:{name:"boolean"}},{name:"plain",description:"Flag to indicate the toggle has no border or background",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/TextInputGroup/TextInputGroup.vue"]}}),e(f,{src:"packages/core/src/components/TextInputGroup/TextInputGroupMain.vue",doc:{name:"PfTextInputGroupMain",exportName:"default",displayName:"TextInputGroupMain",description:"",tags:{},expose:[{name:"input"},{name:"focus"}],props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"hint",description:"Suggestion that will show up like a placeholder even with text in the input",required:!1,type:{name:"string"}},{name:"modelValue",description:"Value for the input",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"null"}]}}],events:[{name:"update:modelValue",type:{names:["string"]}},{name:"change",type:{names:["Event"]},description:"Callback for when there is a change in the input field"},{name:"focus",type:{names:["FocusEvent"]},description:"Callback for when the input field is focused"},{name:"blur",type:{names:["FocusEvent"]},description:"Callback for when focus is lost on the input field"}],slots:[{name:"default"},{name:"icon"}],sourceFiles:["../../packages/core/src/components/TextInputGroup/TextInputGroupMain.vue"]}}),e(f,{src:"packages/core/src/components/TextInputGroup/TextInputGroupUtilities.vue",doc:{name:"PfTextInputGroupUtilities",exportName:"default",displayName:"TextInputGroupUtilities",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/TextInputGroup/TextInputGroupUtilities.vue"]}})]),default:t(()=>[n[5]||(n[5]=x("div",{class:"markdown pf-v5-c-content"},[x("h2",{class:"pf-v5-c-title"},"Examples")],-1)),e(r,{title:"Basic",source:`<pf-text-input-group>
  <pf-text-input-group-main />
</pf-text-input-group>`},{default:t(()=>[e(l,null,{default:t(()=>[e(s)]),_:1})]),_:1}),e(r,{title:"Disabled",source:`<pf-text-input-group disabled>
  <pf-text-input-group-main model-value="Disabled" aria-label="Disabled text input group example input" />
</pf-text-input-group>`},{default:t(()=>[e(l,{disabled:""},{default:t(()=>[e(s,{"model-value":"Disabled","aria-label":"Disabled text input group example input"})]),_:1})]),_:1}),e(r,{title:"Utilities and icon",source:`<pf-text-input-group>
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
</pf-text-input-group>`},{default:t(()=>[e(l,null,{default:t(()=>[e(s,{modelValue:p.value,"onUpdate:modelValue":n[0]||(n[0]=i=>p.value=i)},{icon:t(()=>[e(d(_))]),_:1},8,["modelValue"]),p.value?(o(),c(v,{key:0},{default:t(()=>[e(h,{variant:"plain","aria-label":"Clear button and input",onClick:n[1]||(n[1]=i=>p.value="")},{default:t(()=>[e(d(y))]),_:1})]),_:1})):I("",!0)]),_:1})]),_:1}),e(r,{title:"Filters",source:`<pf-text-input-group>
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
</pf-text-input-group>`},{default:t(()=>[e(l,null,{default:t(()=>[e(s,{modelValue:u.value,"onUpdate:modelValue":n[2]||(n[2]=i=>u.value=i)},q({default:t(()=>[e(T,null,{default:t(()=>[(o(!0),F(S,null,N(m,(i,b)=>(o(),c(V,{key:b,onClick:O=>m.splice(b,1)},{default:t(()=>[g(U(i),1)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:2},[m.length?void 0:{name:"icon",fn:t(()=>[e(d(_))]),key:"0"}]),1032,["modelValue"]),u.value?(o(),c(v,{key:0},{default:t(()=>[e(h,{variant:"plain","aria-label":"Clear button and input",onClick:n[3]||(n[3]=i=>u.value="")},{default:t(()=>[e(d(y))]),_:1})]),_:1})):I("",!0)]),_:1})]),_:1})]),_:1})}}});export{P as default};