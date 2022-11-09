import{M as v}from"./magnifying-glass-icon.011bc1b7.js";import{X as h}from"./xmark-icon.b83dc252.js";import{e as B,r as b,f as F,a as n,c as f,w as e,o,b as t,u as m,j as k,n as I,h as N,i as T,F as U,d as a,g as d,t as $}from"./index.cb2ac63d.js";import"./createIcon.388db085.js";const E=a("div",{class:"markdown pf-c-content"},[a("p",null,[d("A "),a("strong",null,"text input group"),d(" is a more flexible composable version of a "),a("a",{href:"#/stories/components/text-input"},"text input"),d(". It enables consumers of PatternFly to build custom inputs for filtering and similar use cases by placing elements like icons, chips groups and buttons within a text input.")]),a("h2",{class:"pf-c-title"},"Examples")],-1),P=B({__name:"TextInputGroup.story",setup(G){const u=b(""),l=b(""),g=F(["chip one","chip two","chip three","chip four","chip five","chip six","chip seven","chip eight","chip nine","chip ten","chip eleven","chip twelve","chip thirteen","chip fourteen"]);return(M,i)=>{const V=n("component-title"),r=n("pf-text-input-group-main"),s=n("pf-text-input-group"),c=n("story-canvas"),_=n("pf-button"),x=n("pf-text-input-group-utilities"),y=n("pf-chip"),C=n("pf-chip-group"),w=n("doc-page");return o(),f(w,{title:"Text input group"},{default:e(()=>[t(V,{name:"pf-text-input-group"}),E,t(c,{title:"Basic",source:`<pf-text-input-group>
  <pf-text-input-group-main></pf-text-input-group-main>
</pf-text-input-group>`},{default:e(()=>[t(s,null,{default:e(()=>[t(r)]),_:1})]),_:1}),t(c,{title:"Disabled",source:`<pf-text-input-group disabled>
  <pf-text-input-group-main model-value="Disabled" aria-label="Disabled text input group example input" ></pf-text-input-group-main>
</pf-text-input-group>`},{default:e(()=>[t(s,{disabled:""},{default:e(()=>[t(r,{"model-value":"Disabled","aria-label":"Disabled text input group example input"})]),_:1})]),_:1}),t(c,{title:"Utilities and icon",source:`<pf-text-input-group>
  <pf-text-input-group-main v-model="inputValue">
    <template #icon>
      <magnifying-glass-icon></magnifying-glass-icon>
    </template>
  </pf-text-input-group-main>
  <pf-text-input-group-utilities v-if="!!inputValue">
    <pf-button variant="plain" @click="inputValue = ''" aria-label="Clear button and input">
      <xmark-icon></xmark-icon>
    </pf-button>
  </pf-text-input-group-utilities>
</pf-text-input-group>`},{default:e(()=>[t(s,null,{default:e(()=>[t(r,{modelValue:u.value,"onUpdate:modelValue":i[0]||(i[0]=p=>u.value=p)},{icon:e(()=>[t(m(v))]),_:1},8,["modelValue"]),u.value?(o(),f(x,{key:0},{default:e(()=>[t(_,{variant:"plain",onClick:i[1]||(i[1]=p=>u.value=""),"aria-label":"Clear button and input"},{default:e(()=>[t(m(h))]),_:1})]),_:1})):k("",!0)]),_:1})]),_:1}),t(c,{title:"Filters",source:`<pf-text-input-group>
  <pf-text-input-group-main v-model="inputValue2">
    <template #icon v-if="!chips.length">
      <magnifying-glass-icon></magnifying-glass-icon>
    </template>
    <pf-chip-group>
      <pf-chip v-for="(chip, index) in chips" @click="chips.splice(index, 1)">{{ chip }}</pf-chip>
    </pf-chip-group>
  </pf-text-input-group-main>
  <pf-text-input-group-utilities v-if="!!inputValue2">
    <pf-button variant="plain" @click="inputValue2 = ''" aria-label="Clear button and input">
      <xmark-icon></xmark-icon>
    </pf-button>
  </pf-text-input-group-utilities>
</pf-text-input-group>`},{default:e(()=>[t(s,null,{default:e(()=>[t(r,{modelValue:l.value,"onUpdate:modelValue":i[2]||(i[2]=p=>l.value=p)},I({default:e(()=>[t(C,null,{default:e(()=>[(o(!0),N(U,null,T(g,(p,D)=>(o(),f(y,{onClick:S=>g.splice(D,1)},{default:e(()=>[d($(p),1)]),_:2},1032,["onClick"]))),256))]),_:1})]),_:2},[g.length?void 0:{name:"icon",fn:e(()=>[t(m(v))]),key:"0"}]),1032,["modelValue"]),l.value?(o(),f(x,{key:0},{default:e(()=>[t(_,{variant:"plain",onClick:i[3]||(i[3]=p=>l.value=""),"aria-label":"Clear button and input"},{default:e(()=>[t(m(h))]),_:1})]),_:1})):k("",!0)]),_:1})]),_:1})]),_:1})}}});export{P as default};
