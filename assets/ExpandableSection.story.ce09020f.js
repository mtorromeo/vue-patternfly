import{e as b,r as _,a as n,o as c,c as v,w as e,b as t,g as m,j as s,F as f}from"./index.61b3793e.js";const w=s(" This content is visible only when the component is expanded. "),k=s(" This content is visible only when the component is expanded. "),S=s(" This content is visible only when the component is expanded. "),y=s("Show less"),T=s("Show more"),U=b({__name:"ExpandableSection.story",setup(B){const i=_(!1),a=_(!1);return(C,o)=>{const g=n("component-title"),p=n("pf-expandable-section"),l=n("story-canvas"),x=n("pf-stack-item"),h=n("pf-expandable-section-toggle"),r=n("pf-stack"),u=n("doc-page");return c(),v(u,{title:"Expandable Section"},{default:e(()=>[t(g,{name:"pf-expandable-section"}),t(l,{title:"Basic",source:`<pf-expandable-section v-model:expanded="expanded1" toggle-text-expanded="Show less" toggle-text-collapsed="Show more">
  This content is visible only when the component is expanded.
</pf-expandable-section>`},{default:e(()=>[t(p,{expanded:i.value,"onUpdate:expanded":o[0]||(o[0]=d=>i.value=d),"toggle-text-expanded":"Show less","toggle-text-collapsed":"Show more"},{default:e(()=>[w]),_:1},8,["expanded"])]),_:1}),t(l,{title:"Managed",source:`<pf-expandable-section toggle-text-expanded="Show less" toggle-text-collapsed="Show more">
  This content is visible only when the component is expanded.
</pf-expandable-section>`},{default:e(()=>[t(p,{"toggle-text-expanded":"Show less","toggle-text-collapsed":"Show more"},{default:e(()=>[k]),_:1})]),_:1}),t(l,{title:"Detached",source:`<pf-stack gutter>
  <pf-stack-item>
    <pf-expandable-section v-model:expanded="expanded2" detached content-id="detached-toggle-content">
      This content is visible only when the component is expanded.
    </pf-expandable-section>
  </pf-stack-item>
  <pf-stack-item>
    <pf-expandable-section-toggle v-model:expanded="expanded2" direction="up" content-id="detached-toggle-content">
      <template v-if="expanded2">Show less</template>
      <template v-else>Show more</template>
    </pf-expandable-section-toggle>
  </pf-stack-item>
</pf-stack>`},{default:e(()=>[t(r,{gutter:""},{default:e(()=>[t(x,null,{default:e(()=>[t(p,{expanded:a.value,"onUpdate:expanded":o[1]||(o[1]=d=>a.value=d),detached:"","content-id":"detached-toggle-content"},{default:e(()=>[S]),_:1},8,["expanded"])]),_:1}),t(x,null,{default:e(()=>[t(h,{expanded:a.value,"onUpdate:expanded":o[2]||(o[2]=d=>a.value=d),direction:"up","content-id":"detached-toggle-content"},{default:e(()=>[a.value?(c(),m(f,{key:0},[y],64)):(c(),m(f,{key:1},[T],64))]),_:1},8,["expanded"])]),_:1})]),_:1})]),_:1})]),_:1})}}});export{U as default};
