import{_ as d,a as s,c,o as f,w as t,d as p,b as e,e as a}from"./index-DvyTOdlb.js";const g={};function x(b,n){const l=s("component-info"),i=s("pf-spinner"),r=s("story-canvas"),o=s("pf-text"),m=s("pf-text-content"),u=s("doc-page");return f(),c(u,{name:"Components/Spinner.story.vue",title:"Spinner"},{description:t(()=>n[0]||(n[0]=[a("A "),p("b",null,"spinner",-1),a(" is used to indicate to users that an action is in progress. For actions that may take a long time, use a [progress bar](#/stories/components/progress) instead.")])),apidocs:t(()=>[e(l,{src:"packages/core/src/components/Spinner.vue",doc:{name:"PfSpinner",exportName:"default",displayName:"Spinner",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"size",description:"Size variant of progress.",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'}]},defaultValue:{func:!1,value:"'xl'"}},{name:"ariaValueText",description:"Text describing that current loading status or progress",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Loading...'"}},{name:"diameter",description:"Diameter of spinner set as CSS variable",required:!1,type:{name:"string"}},{name:"inline",tags:{beta:[{description:"Indicates the spinner is inline and the size should inherit the text font size. This will override the size prop.",title:"beta"}]},required:!1,type:{name:"boolean"}},{name:"ariaLabel",description:"Accessible label to describe what is loading",required:!1,type:{name:"string"}},{name:"ariaLabelledby",description:"Id of element which describes what is being loaded",required:!1,type:{name:"string"}}],sourceFiles:["../../packages/core/src/components/Spinner.vue"]}})]),default:t(()=>[n[7]||(n[7]=p("div",{class:"markdown pf-v5-c-content"},[p("h2",{class:"pf-v5-c-title"},"Examples")],-1)),e(r,{title:"Basic",source:"<pf-spinner />"},{default:t(()=>[e(i)]),_:1}),e(r,{title:"Size variations",source:`<pf-spinner size="sm" />
<pf-spinner size="md" />
<pf-spinner size="lg" />
<pf-spinner size="xl" />`},{default:t(()=>[e(i,{size:"sm"}),e(i,{size:"md"}),e(i,{size:"lg"}),e(i,{size:"xl"})]),_:1}),e(r,{title:"Custom size",source:'<pf-spinner diameter="80px" />'},{default:t(()=>[e(i,{diameter:"80px"})]),_:1}),e(r,{title:"Inline size",source:`<pf-text-content>
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
</pf-text-content>`},{default:t(()=>[e(m,null,{default:t(()=>[e(o,{component:"h1"},{default:t(()=>[n[1]||(n[1]=a(" Heading ")),e(i,{inline:"","aria-label":"Spinner in a heading"})]),_:1}),e(o,{component:"p"},{default:t(()=>n[2]||(n[2]=[a(" Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed hendrerit nisi in cursus maximus. ")])),_:1}),e(o,{component:"h2"},{default:t(()=>[n[3]||(n[3]=a(" Second level ")),e(i,{inline:"","aria-label":"spinner in a subheading"})]),_:1}),e(o,{component:"p"},{default:t(()=>[n[4]||(n[4]=a(" Curabitur accumsan turpis pharetra blandit. Quisque condimentum maximus mi, ")),e(i,{inline:"","aria-label":"Spinner in a paragraph"}),n[5]||(n[5]=a(" sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. "))]),_:1}),p("small",null,[n[6]||(n[6]=a(" Sometimes you need small text ")),e(i,{inline:"","aria-label":"Spinner in a small element"})])]),_:1})]),_:1})]),_:1})}const v=d(g,[["render",x]]);export{v as default};
