import{e as v,r as _,a as n,c as b,w as e,o as s,b as t,g as f,j as p,F as m}from"./index.fa1d7b40.js";const k=p(" This content is visible only when the component is expanded. "),w=p(" This content is visible only when the component is expanded. "),S=p("Show less"),y=p("Show more"),U=v({setup(T){const l=_(!1),a=_(!1);return(B,o)=>{const g=n("component-title"),c=n("pf-expandable-section"),i=n("story-canvas"),x=n("pf-stack-item"),r=n("pf-expandable-section-toggle"),u=n("pf-stack"),h=n("doc-page");return s(),b(h,{title:"Expandable Section"},{default:e(()=>[t(g,{name:"pf-expandable-section"}),t(i,{title:"Basic",source:`<pf-expandable-section v-model:expanded="expanded1" toggle-text-expanded="Show less" toggle-text-collapsed="Show more">
  This content is visible only when the component is expanded.
</pf-expandable-section>`},{default:e(()=>[t(c,{expanded:l.value,"onUpdate:expanded":o[0]||(o[0]=d=>l.value=d),"toggle-text-expanded":"Show less","toggle-text-collapsed":"Show more"},{default:e(()=>[k]),_:1},8,["expanded"])]),_:1}),t(i,{title:"Detached",source:`<pf-stack gutter>
  <pf-stack-item>
    <pf-expandable-section v-model:expanded="expanded2" :expanded="expanded2" detached content-id="detached-toggle-content">
      This content is visible only when the component is expanded.
    </pf-expandable-section>
  </pf-stack-item>
  <pf-stack-item>
    <pf-expandable-section-toggle v-model:expanded="expanded2" direction="up" content-id="detached-toggle-content">
      <template v-if="expanded2">Show less</template>
      <template v-else>Show more</template>
    </pf-expandable-section-toggle>
  </pf-stack-item>
</pf-stack>`},{default:e(()=>[t(u,{gutter:""},{default:e(()=>[t(x,null,{default:e(()=>[t(c,{expanded:a.value,"onUpdate:expanded":o[1]||(o[1]=d=>a.value=d),detached:"","content-id":"detached-toggle-content"},{default:e(()=>[w]),_:1},8,["expanded"])]),_:1}),t(x,null,{default:e(()=>[t(r,{expanded:a.value,"onUpdate:expanded":o[2]||(o[2]=d=>a.value=d),direction:"up","content-id":"detached-toggle-content"},{default:e(()=>[a.value?(s(),f(m,{key:0},[S],64)):(s(),f(m,{key:1},[y],64))]),_:1},8,["expanded"])]),_:1})]),_:1})]),_:1})]),_:1})}}});export{U as default};
