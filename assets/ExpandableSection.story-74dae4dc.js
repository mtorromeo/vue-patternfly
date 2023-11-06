import{e as b,r as m,a as n,o as c,c as v,w as e,b as t,g as p,h as f,F as g}from"./index-a471940d.js";const y=b({__name:"ExpandableSection.story",setup(w){const i=m(!1),a=m(!1);return(k,o)=>{const _=n("component-title"),l=n("pf-expandable-section"),s=n("story-canvas"),x=n("pf-stack-item"),h=n("pf-expandable-section-toggle"),r=n("pf-stack"),u=n("doc-page");return c(),v(u,{title:"Expandable Section"},{default:e(()=>[t(_,{name:"pf-expandable-section"}),t(s,{title:"Basic",source:`<pf-expandable-section v-model:expanded="expanded1" toggle-text-expanded="Show less" toggle-text-collapsed="Show more">
  This content is visible only when the component is expanded.
</pf-expandable-section>`},{default:e(()=>[t(l,{expanded:i.value,"onUpdate:expanded":o[0]||(o[0]=d=>i.value=d),"toggle-text-expanded":"Show less","toggle-text-collapsed":"Show more"},{default:e(()=>[p(" This content is visible only when the component is expanded. ")]),_:1},8,["expanded"])]),_:1}),t(s,{title:"Managed",source:`<pf-expandable-section toggle-text-expanded="Show less" toggle-text-collapsed="Show more">
  This content is visible only when the component is expanded.
</pf-expandable-section>`},{default:e(()=>[t(l,{"toggle-text-expanded":"Show less","toggle-text-collapsed":"Show more"},{default:e(()=>[p(" This content is visible only when the component is expanded. ")]),_:1})]),_:1}),t(s,{title:"Detached",source:`<pf-stack gutter>
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
</pf-stack>`},{default:e(()=>[t(r,{gutter:""},{default:e(()=>[t(x,null,{default:e(()=>[t(l,{expanded:a.value,"onUpdate:expanded":o[1]||(o[1]=d=>a.value=d),detached:"","content-id":"detached-toggle-content"},{default:e(()=>[p(" This content is visible only when the component is expanded. ")]),_:1},8,["expanded"])]),_:1}),t(x,null,{default:e(()=>[t(h,{expanded:a.value,"onUpdate:expanded":o[2]||(o[2]=d=>a.value=d),direction:"up","content-id":"detached-toggle-content"},{default:e(()=>[a.value?(c(),f(g,{key:0},[p("Show less")],64)):(c(),f(g,{key:1},[p("Show more")],64))]),_:1},8,["expanded"])]),_:1})]),_:1})]),_:1})]),_:1})}}});export{y as default};
