import{_ as r,o as d,c as m,w as t,b as o,a as l,d as i,e as a}from"./index-9TsNn5Vt.js";const u={};function T(g,e){const p=a("component-info"),n=a("pf-title"),s=a("story-canvas"),f=a("doc-page");return d(),m(f,{name:"Components/Title.story.vue",title:"Title"},{description:t(()=>e[0]||(e[0]=[o("div",{class:"markdown pf-v5-c-content"},[o("p",null,[l("A "),o("strong",null,"title"),l(" component applies top and bottom margins, font-weight, font-size, and line-height to titles. The most common usage for a title is to define headings within a page. For more information about the relationship between title component sizes and HTML heading levels, see the "),o("a",{href:"https://www.patternfly.org/design-foundations/typography#customizing-heading-levels"},"Typography guidelines"),l(".")])],-1)])),apidocs:t(()=>[i(p,{src:"packages/core/src/components/Title.vue",doc:{name:"PfTitle",exportName:"default",displayName:"Title",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"size",description:"The size of the Title",required:!1,type:{name:"TSTypeOperator"}},{name:"h",description:"Heading level to use",required:!1,type:{name:"union",elements:[{name:'"1"'},{name:'"2"'},{name:'"3"'},{name:'"4"'},{name:'"5"'},{name:'"6"'},{name:'"h1"'},{name:'"h2"'},{name:'"h3"'},{name:'"h4"'},{name:'"h5"'},{name:'"h6"'},{name:"number"}]},defaultValue:{func:!1,value:"1"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Title.vue"]}})]),default:t(()=>[i(s,{title:"Sizes",source:`<pf-title h="1" size="4xl">4xl Title</pf-title>
<pf-title h="2" size="3xl">3xl Title</pf-title>
<pf-title h="3" size="2xl">2xl Title</pf-title>
<pf-title h="4" size="xl">xl Title</pf-title>
<pf-title h="5" size="lg">lg Title</pf-title>
<pf-title h="6" size="md">md Title</pf-title>`},{default:t(()=>[i(n,{h:"1",size:"4xl"},{default:t(()=>e[1]||(e[1]=[l("4xl Title")])),_:1}),i(n,{h:"2",size:"3xl"},{default:t(()=>e[2]||(e[2]=[l("3xl Title")])),_:1}),i(n,{h:"3",size:"2xl"},{default:t(()=>e[3]||(e[3]=[l("2xl Title")])),_:1}),i(n,{h:"4",size:"xl"},{default:t(()=>e[4]||(e[4]=[l("xl Title")])),_:1}),i(n,{h:"5",size:"lg"},{default:t(()=>e[5]||(e[5]=[l("lg Title")])),_:1}),i(n,{h:"6",size:"md"},{default:t(()=>e[6]||(e[6]=[l("md Title")])),_:1})]),_:1}),i(s,{title:"Default size mappings",source:`<pf-title h="1">4xl Title</pf-title>
<pf-title h="2">3xl Title</pf-title>
<pf-title h="3">2xl Title</pf-title>
<pf-title h="4">xl Title</pf-title>
<pf-title h="5">lg Title</pf-title>
<pf-title h="6">md Title</pf-title>`},{default:t(()=>[i(n,{h:"1"},{default:t(()=>e[7]||(e[7]=[l("4xl Title")])),_:1}),i(n,{h:"2"},{default:t(()=>e[8]||(e[8]=[l("3xl Title")])),_:1}),i(n,{h:"3"},{default:t(()=>e[9]||(e[9]=[l("2xl Title")])),_:1}),i(n,{h:"4"},{default:t(()=>e[10]||(e[10]=[l("xl Title")])),_:1}),i(n,{h:"5"},{default:t(()=>e[11]||(e[11]=[l("lg Title")])),_:1}),i(n,{h:"6"},{default:t(()=>e[12]||(e[12]=[l("md Title")])),_:1})]),_:1})]),_:1})}const x=r(u,[["render",T]]);export{x as default};