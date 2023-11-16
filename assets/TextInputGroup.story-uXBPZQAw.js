import{M as h}from"./magnifying-glass-icon-DjteGBms.js";import{X as b}from"./xmark-icon-Bri-WPcf.js";import{e as B,r as k,f as F,a as n,o,c as f,w as e,b as t,u as m,j as V,v as I,h as N,i as T,F as U,d as u,g as d,t as $}from"./index-KWy3deFk.js";const E=u("div",{class:"markdown pf-v5-c-content"},[u("p",null,[d("A "),u("strong",null,"text input group"),d(" is a more flexible composable version of a "),u("a",{href:"#/stories/components/text-input"},"text input"),d(". It enables consumers of PatternFly to build custom inputs for filtering and similar use cases by placing elements like icons, chips groups and buttons within a text input.")]),u("h2",{class:"pf-v5-c-title"},"Examples")],-1),L=B({__name:"TextInputGroup.story",setup(G){const a=k(""),l=k(""),_=F(["chip one","chip two","chip three","chip four","chip five","chip six","chip seven","chip eight","chip nine","chip ten","chip eleven","chip twelve","chip thirteen","chip fourteen"]);return(M,i)=>{const y=n("component-title"),r=n("pf-text-input-group-main"),s=n("pf-text-input-group"),c=n("story-canvas"),g=n("pf-button"),x=n("pf-text-input-group-utilities"),C=n("pf-chip"),w=n("pf-chip-group"),D=n("doc-page");return o(),f(D,{title:"Text input group"},{default:e(()=>[t(y,{name:"pf-text-input-group"}),E,t(c,{title:"Basic",source:`<pf-text-input-group>
  <pf-text-input-group-main />
</pf-text-input-group>`},{default:e(()=>[t(s,null,{default:e(()=>[t(r)]),_:1})]),_:1}),t(c,{title:"Disabled",source:`<pf-text-input-group disabled>
  <pf-text-input-group-main model-value="Disabled" aria-label="Disabled text input group example input" />
</pf-text-input-group>`},{default:e(()=>[t(s,{disabled:""},{default:e(()=>[t(r,{"model-value":"Disabled","aria-label":"Disabled text input group example input"})]),_:1})]),_:1}),t(c,{title:"Utilities and icon",source:`<pf-text-input-group>
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
</pf-text-input-group>`},{default:e(()=>[t(s,null,{default:e(()=>[t(r,{modelValue:a.value,"onUpdate:modelValue":i[0]||(i[0]=p=>a.value=p)},{icon:e(()=>[t(m(h))]),_:1},8,["modelValue"]),a.value?(o(),f(x,{key:0},{default:e(()=>[t(g,{variant:"plain","aria-label":"Clear button and input",onClick:i[1]||(i[1]=p=>a.value="")},{default:e(()=>[t(m(b))]),_:1})]),_:1})):V("",!0)]),_:1})]),_:1}),t(c,{title:"Filters",source:`<pf-text-input-group>
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
</pf-text-input-group>`},{default:e(()=>[t(s,null,{default:e(()=>[t(r,{modelValue:l.value,"onUpdate:modelValue":i[2]||(i[2]=p=>l.value=p)},I({default:e(()=>[t(w,null,{default:e(()=>[(o(!0),N(U,null,T(_,(p,v)=>(o(),f(C,{key:v,onClick:S=>_.splice(v,1)},{default:e(()=>[d($(p),1)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:2},[_.length?void 0:{name:"icon",fn:e(()=>[t(m(h))]),key:"0"}]),1032,["modelValue"]),l.value?(o(),f(x,{key:0},{default:e(()=>[t(g,{variant:"plain","aria-label":"Clear button and input",onClick:i[3]||(i[3]=p=>l.value="")},{default:e(()=>[t(m(b))]),_:1})]),_:1})):V("",!0)]),_:1})]),_:1})]),_:1})}}});export{L as default};
