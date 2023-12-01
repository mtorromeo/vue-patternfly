import{_ as m,a,o as d,c as u,w as n,b as t,d as e,e as o}from"./index-0yq5x7pK.js";const f={},_=o("b",null,"spinner",-1),x=o("div",{class:"markdown pf-v5-c-content"},[o("h2",{class:"pf-v5-c-title"},"Examples")],-1);function g(h,b){const p=a("component-info"),i=a("pf-spinner"),s=a("story-canvas"),r=a("pf-text"),l=a("pf-text-content"),c=a("doc-page");return d(),u(c,{title:"Spinner"},{description:n(()=>[t("A "),_,t(" is used to indicate to users that an action is in progress. For actions that may take a long time, use a [progress bar](#/stories/components/progress) instead.")]),apidocs:n(()=>[e(p,{src:"packages/core/src/components/Spinner.vue",doc:{name:"PfSpinner",exportName:"default",displayName:"Spinner",description:"",tags:{},props:[{name:"size",description:"Size variant of progress.",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'}]},defaultValue:{func:!1,value:"'xl'"}},{name:"ariaValueText",description:"Text describing that current loading status or progress",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Loading...'"}},{name:"diameter",description:"Diameter of spinner set as CSS variable",required:!1,type:{name:"string"}},{name:"inline",tags:{beta:[{description:"Indicates the spinner is inline and the size should inherit the text font size. This will override the size prop.",title:"beta"}]},required:!1,type:{name:"boolean"}},{name:"ariaLabel",description:"Accessible label to describe what is loading",required:!1,type:{name:"string"}},{name:"ariaLabelledby",description:"Id of element which describes what is being loaded",required:!1,type:{name:"string"}}],sourceFiles:["../../packages/core/src/components/Spinner.vue"]}},null,8,["doc"])]),default:n(()=>[x,e(s,{title:"Basic",source:"<pf-spinner />"},{default:n(()=>[e(i)]),_:1}),e(s,{title:"Size variations",source:`<pf-spinner size="sm" />
<pf-spinner size="md" />
<pf-spinner size="lg" />
<pf-spinner size="xl" />`},{default:n(()=>[e(i,{size:"sm"}),e(i,{size:"md"}),e(i,{size:"lg"}),e(i,{size:"xl"})]),_:1}),e(s,{title:"Custom size",source:'<pf-spinner diameter="80px" />'},{default:n(()=>[e(i,{diameter:"80px"})]),_:1}),e(s,{title:"Inline size",source:`<pf-text-content>
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
</pf-text-content>`},{default:n(()=>[e(l,null,{default:n(()=>[e(r,{component:"h1"},{default:n(()=>[t(" Heading "),e(i,{inline:"","aria-label":"Spinner in a heading"})]),_:1}),e(r,{component:"p"},{default:n(()=>[t(" Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed hendrerit nisi in cursus maximus. ")]),_:1}),e(r,{component:"h2"},{default:n(()=>[t(" Second level "),e(i,{inline:"","aria-label":"spinner in a subheading"})]),_:1}),e(r,{component:"p"},{default:n(()=>[t(" Curabitur accumsan turpis pharetra blandit. Quisque condimentum maximus mi, "),e(i,{inline:"","aria-label":"Spinner in a paragraph"}),t(" sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. ")]),_:1}),o("small",null,[t(" Sometimes you need small text "),e(i,{inline:"","aria-label":"Spinner in a small element"})])]),_:1})]),_:1})]),_:1})}const v=m(f,[["render",g]]);export{v as default};
