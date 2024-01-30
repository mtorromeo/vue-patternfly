import{_ as r,o as d,c as l,w as t,a as i,b as e,d as p,e as o}from"./index-HBVQKJa5.js";const h={},m=p("b",null,"checkbox",-1);function u(b,f){const s=o("component-info"),a=o("pf-checkbox"),n=o("story-canvas"),c=o("doc-page");return d(),l(c,{name:"Components/Checkbox.story.vue",title:"Checkbox"},{description:t(()=>[i("A "),m,i(" is used to select a single item or multiple items, typically to choose elements to perform an action or to reflect a binary setting.")]),apidocs:t(()=>[e(s,{src:"packages/core/src/components/Checkbox.vue",doc:{name:"PfCheckbox",exportName:"default",displayName:"Checkbox",description:"",tags:{},expose:[{name:"input"}],props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"component",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Component"}]},defaultValue:{func:!1,value:"'div'"}},{name:"modelValue",description:"Flag to show if the radio is checked.",required:!1,type:{name:"union",elements:[{name:"boolean"},{name:"null"}]}},{name:"disabled",description:"Flag to show if the radio is disabled.",required:!1,type:{name:"boolean"}},{name:"valid",description:"Flag to show if the radio selection is valid or invalid.",required:!1,type:{name:"boolean"}},{name:"id",description:"Id of the radio.",required:!1,type:{name:"string"}},{name:"label",description:"Label text of the radio.",required:!1,type:{name:"string"}},{name:"body",description:"Body of the radio.",required:!1,type:{name:"string"}},{name:"description",description:"Description text of the radio.",required:!1,type:{name:"string"}},{name:"name",required:!1,type:{name:"string"}}],events:[{name:"change",type:{names:["Event"]}},{name:"update:modelValue",type:{names:["boolean"]}}],slots:[{name:"label"},{name:"description"},{name:"body"}],sourceFiles:["../../packages/core/src/components/Checkbox.vue"]}},null,8,["doc"])]),default:t(()=>[e(n,{title:"Default",source:'<pf-checkbox id="basic-checkbox" label="Basic checkbox" />'},{default:t(()=>[e(a,{id:"basic-checkbox",label:"Basic checkbox"})]),_:1}),e(n,{title:"With description",source:`<pf-checkbox
id="checkbox-with-description"
label="Checkbox with description"
description="Single-tenant cloud service hosted and managed by Red Hat that offers high-availability enterprise-grade clusters in a virtual private cloud on AWS or GCP." />`},{default:t(()=>[e(a,{id:"checkbox-with-description",label:"Checkbox with description",description:"Single-tenant cloud service hosted and managed by Red Hat that offers high-availability enterprise-grade clusters in a virtual private cloud on AWS or GCP."})]),_:1}),e(n,{title:"With description and body",source:`<pf-checkbox
id="checkbox-with-description-and-body"
label="Checkbox with description and body"
description="Single-tenant cloud service hosted and managed by Red Hat that offers high-availability enterprise-grade clusters in a virtual private cloud on AWS or GCP."
body="This is where custom content goes." />`},{default:t(()=>[e(a,{id:"checkbox-with-description-and-body",label:"Checkbox with description and body",description:"Single-tenant cloud service hosted and managed by Red Hat that offers high-availability enterprise-grade clusters in a virtual private cloud on AWS or GCP.",body:"This is where custom content goes."})]),_:1})]),_:1},8,["name"])}const g=r(h,[["render",u]]);export{g as default};