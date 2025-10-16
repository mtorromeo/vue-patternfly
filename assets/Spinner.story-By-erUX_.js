import{_ as u,a as r,c as d,o as c,w as a,d as s,b as n,e as t}from"./index-Duu062da.js";const f={};function g(b,e){const l=r("component-info"),i=r("pf-spinner"),o=r("story-canvas"),p=r("pf-content"),m=r("doc-page");return c(),d(m,{name:"Components/Spinner.story.vue",title:"Spinner"},{description:a(()=>[...e[0]||(e[0]=[t("A ",-1),s("b",null,"spinner",-1),t(" is used to indicate to users that an action is in progress. For actions that may take a long time, use a [progress bar](#/stories/components/progress) instead.",-1)])]),apidocs:a(()=>[n(l,{src:"packages/core/src/components/Spinner.vue",doc:{name:"PfSpinner",exportName:"default",displayName:"Spinner",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"size",description:"Size variant of progress.",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'}]},defaultValue:{func:!1,value:"'xl'"}},{name:"ariaValueText",description:"Text describing that current loading status or progress",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Loading...'"}},{name:"diameter",description:"Diameter of spinner set as CSS variable",required:!1,type:{name:"string"}},{name:"inline",tags:{beta:[{description:"Indicates the spinner is inline and the size should inherit the text font size. This will override the size prop.",title:"beta"}]},required:!1,type:{name:"boolean"}},{name:"ariaLabel",description:"Accessible label to describe what is loading",required:!1,type:{name:"string"}},{name:"ariaLabelledby",description:"Id of element which describes what is being loaded",required:!1,type:{name:"string"}}],sourceFiles:["../../packages/core/src/components/Spinner.vue"]}})]),default:a(()=>[e[7]||(e[7]=s("div",{class:"markdown pf-v6-c-content"},[s("h2",{class:"pf-v6-c-title"},"Examples")],-1)),n(o,{title:"Basic",source:"<pf-spinner />"},{default:a(()=>[n(i)]),_:1}),n(o,{title:"Size variations",source:`<pf-spinner size="sm" />
<pf-spinner size="md" />
<pf-spinner size="lg" />
<pf-spinner size="xl" />`},{default:a(()=>[n(i,{size:"sm"}),n(i,{size:"md"}),n(i,{size:"lg"}),n(i,{size:"xl"})]),_:1}),n(o,{title:"Custom size",source:'<pf-spinner diameter="80px" />'},{default:a(()=>[n(i,{diameter:"80px"})]),_:1}),n(o,{title:"Inline size",source:`<pf-content>
  <h1>
    Heading
    <pf-spinner inline aria-label="Spinner in a heading" />
  </h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed hendrerit nisi in cursus maximus.
  </p>
  <h2>
    Second level
    <pf-spinner inline aria-label="spinner in a subheading" />
  </h2>
  <p>
    Curabitur accumsan turpis pharetra blandit. Quisque condimentum maximus mi,
    <pf-spinner inline aria-label="Spinner in a paragraph" /> sit amet commodo arcu rutrum id. Proin pretium urna vel
    cursus venenatis. Suspendisse potenti.
  </p>
  <small>
    Sometimes you need small text
    <pf-spinner inline aria-label="Spinner in a small element" />
  </small>
</pf-content>`},{default:a(()=>[n(p,null,{default:a(()=>[s("h1",null,[e[1]||(e[1]=t(" Heading ",-1)),n(i,{inline:"","aria-label":"Spinner in a heading"})]),e[6]||(e[6]=s("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed hendrerit nisi in cursus maximus. ",-1)),s("h2",null,[e[2]||(e[2]=t(" Second level ",-1)),n(i,{inline:"","aria-label":"spinner in a subheading"})]),s("p",null,[e[3]||(e[3]=t(" Curabitur accumsan turpis pharetra blandit. Quisque condimentum maximus mi, ",-1)),n(i,{inline:"","aria-label":"Spinner in a paragraph"}),e[4]||(e[4]=t(" sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. ",-1))]),s("small",null,[e[5]||(e[5]=t(" Sometimes you need small text ",-1)),n(i,{inline:"","aria-label":"Spinner in a small element"})])]),_:1})]),_:1})]),_:1})}const v=u(f,[["render",g]]);export{v as default};
