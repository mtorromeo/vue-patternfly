import{_ as h,a as o,o as d,c as p,w as s,b as e,d as n,g as i}from"./index-1db6e39c.js";const r={},f=n("div",{class:"markdown pf-c-content"},[n("p",null,[i("A "),n("strong",null,"skeleton"),i(" is a type of loading state that allows you to expose content incrementally. For content that may take a long time to load, use a progress bar in place of a skeleton. See full "),n("a",{href:"https://www.patternfly.org/v4/components/skeleton/design-guidelines"},"Design guidelines"),i(" on the official patternfly documentation.")]),n("h2",{class:"pf-c-title"},"Examples")],-1),_=n("br",null,null,-1),w=n("br",null,null,-1),g=n("br",null,null,-1);function u(k,m){const a=o("component-title"),t=o("pf-skeleton"),l=o("story-canvas"),c=o("doc-page");return d(),p(c,{title:"Skeleton"},{default:s(()=>[e(a,{name:"pf-skeleton"}),f,e(l,{title:"Basic",source:"<pf-skeleton />"},{default:s(()=>[e(t)]),_:1}),e(l,{title:"Percentage widths",source:`<pf-skeleton width="50%" />
<br>
<pf-skeleton width="60%" />
<br>
<pf-skeleton width="75%" />
<br>
<pf-skeleton width="100%" />`},{default:s(()=>[e(t,{width:"50%"}),_,e(t,{width:"60%"}),w,e(t,{width:"75%"}),g,e(t,{width:"100%"})]),_:1}),e(l,{title:"Percentage widths",style:{height:"400px",display:"flex","align-items":"flex-end","justify-content":"space-between"},source:`<pf-skeleton width="15%" height="33%" />
<pf-skeleton width="15%" height="50%" />
<pf-skeleton width="15%" height="60%" />
<pf-skeleton width="15%" height="75%" />
<pf-skeleton width="15%" height="100%" />`},{default:s(()=>[e(t,{width:"15%",height:"33%"}),e(t,{width:"15%",height:"50%"}),e(t,{width:"15%",height:"60%"}),e(t,{width:"15%",height:"75%"}),e(t,{width:"15%",height:"100%"})]),_:1})]),_:1})}const x=h(r,[["render",u]]);export{x as default};
