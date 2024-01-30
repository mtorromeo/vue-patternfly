import{_ as c,o as d,c as h,w as n,a as i,b as e,d as o,e as s}from"./index-HBVQKJa5.js";const p={},m=o("b",null,"skeleton",-1),f=o("div",{class:"markdown pf-v5-c-content"},[o("h2",{class:"pf-v5-c-title"},"Examples")],-1),u=o("br",null,null,-1),_=o("br",null,null,-1),g=o("br",null,null,-1);function k(w,y){const l=s("component-info"),t=s("pf-skeleton"),a=s("story-canvas"),r=s("doc-page");return d(),h(r,{name:"Components/Skeleton.story.vue",title:"Skeleton"},{description:n(()=>[i("A "),m,i(" is a type of loading state that allows you to expose content incrementally. For content that may take a long time to load, use a progress bar in place of a skeleton.")]),apidocs:n(()=>[e(l,{src:"packages/core/src/components/Skeleton.vue",doc:{name:"PfSkeleton",exportName:"default",displayName:"Skeleton",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"width",description:"The width of the Skeleton. Must specify pixels or percentage.",required:!1,type:{name:"string"}},{name:"height",description:"The height of the Skeleton. Must specify pixels or percentage.",required:!1,type:{name:"string"}},{name:"fontSize",description:"Position of the tooltip which is displayed if title is truncated.",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'},{name:'"2xl"'},{name:'"3xl"'},{name:'"4xl"'}]}},{name:"shape",description:"The shape of the Skeleton.",required:!1,type:{name:"union",elements:[{name:'"circle"'},{name:'"square"'}]}},{name:"screenreaderText",description:"Text read just to screen reader users.",required:!1,type:{name:"string"}}],sourceFiles:["../../packages/core/src/components/Skeleton.vue"]}},null,8,["doc"])]),default:n(()=>[f,e(a,{title:"Basic",source:"<pf-skeleton />"},{default:n(()=>[e(t)]),_:1}),e(a,{title:"Percentage widths",source:`<pf-skeleton width="50%" />
<br>
<pf-skeleton width="60%" />
<br>
<pf-skeleton width="75%" />
<br>
<pf-skeleton width="100%" />`},{default:n(()=>[e(t,{width:"50%"}),u,e(t,{width:"60%"}),_,e(t,{width:"75%"}),g,e(t,{width:"100%"})]),_:1}),e(a,{title:"Percentage widths",style:{height:"400px",display:"flex","align-items":"flex-end","justify-content":"space-between"},source:`<pf-skeleton width="15%" height="33%" />
<pf-skeleton width="15%" height="50%" />
<pf-skeleton width="15%" height="60%" />
<pf-skeleton width="15%" height="75%" />
<pf-skeleton width="15%" height="100%" />`},{default:n(()=>[e(t,{width:"15%",height:"33%"}),e(t,{width:"15%",height:"50%"}),e(t,{width:"15%",height:"60%"}),e(t,{width:"15%",height:"75%"}),e(t,{width:"15%",height:"100%"})]),_:1})]),_:1},8,["name"])}const S=c(p,[["render",k]]);export{S as default};