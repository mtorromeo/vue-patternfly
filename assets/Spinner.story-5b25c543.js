import{_ as m,a,o as u,c as d,w as t,b as e,g as i,d as s}from"./index-bc10557f.js";const f={},_=s("div",{class:"markdown pf-v5-c-content"},[s("p",null,[i("A "),s("strong",null,"spinner"),i(" is used to indicate to users that an action is in progress. For actions that may take a long time, use a "),s("a",{href:"#/stories/components/progress"},"progress bar"),i(" instead.")]),s("h2",{class:"pf-v5-c-title"},"Examples")],-1);function x(h,g){const p=a("component-title"),n=a("pf-spinner"),o=a("story-canvas"),r=a("pf-text"),l=a("pf-text-content"),c=a("doc-page");return u(),d(c,{title:"Spinner"},{default:t(()=>[e(p,{name:"pf-spinner"}),_,e(o,{title:"Basic",source:"<pf-spinner />"},{default:t(()=>[e(n)]),_:1}),e(o,{title:"Size variations",source:`<pf-spinner size="sm" />
<pf-spinner size="md" />
<pf-spinner size="lg" />
<pf-spinner size="xl" />`},{default:t(()=>[e(n,{size:"sm"}),e(n,{size:"md"}),e(n,{size:"lg"}),e(n,{size:"xl"})]),_:1}),e(o,{title:"Custom size",source:'<pf-spinner diameter="80px" />'},{default:t(()=>[e(n,{diameter:"80px"})]),_:1}),e(o,{title:"Inline size",source:`<pf-text-content>
  <pf-text component="h1">
    Heading
    <pf-spinner inline aria-label="Spinner in a heading" />
  </pf-text>
  <pf-text component="p">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed hendrerit nisi in cursus maximus.
  </pf-text>
  <pf-text component="h2">
    Second level
    <pf-spinner inline aria-label="spinner in a subheading" />
  </pf-text>
  <pf-text component="p">
    Curabitur accumsan turpis pharetra blandit. Quisque condimentum maximus mi,
    <pf-spinner inline aria-label="Spinner in a paragraph" /> sit amet commodo arcu rutrum id. Proin pretium urna vel
    cursus venenatis. Suspendisse potenti.
  </pf-text>
  <small>
    Sometimes you need small text
    <pf-spinner inline aria-label="Spinner in a small element" />
  </small>
</pf-text-content>`},{default:t(()=>[e(l,null,{default:t(()=>[e(r,{component:"h1"},{default:t(()=>[i(" Heading "),e(n,{inline:"","aria-label":"Spinner in a heading"})]),_:1}),e(r,{component:"p"},{default:t(()=>[i(" Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed hendrerit nisi in cursus maximus. ")]),_:1}),e(r,{component:"h2"},{default:t(()=>[i(" Second level "),e(n,{inline:"","aria-label":"spinner in a subheading"})]),_:1}),e(r,{component:"p"},{default:t(()=>[i(" Curabitur accumsan turpis pharetra blandit. Quisque condimentum maximus mi, "),e(n,{inline:"","aria-label":"Spinner in a paragraph"}),i(" sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. ")]),_:1}),s("small",null,[i(" Sometimes you need small text "),e(n,{inline:"","aria-label":"Spinner in a small element"})])]),_:1})]),_:1})]),_:1})}const b=m(f,[["render",x]]);export{b as default};
