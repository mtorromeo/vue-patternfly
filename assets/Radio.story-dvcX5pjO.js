import{_ as l,a as o,o as c,c as p,w as a,b as r,d as e,e as n}from"./index-jISOFsdf.js";const m={},u=n("b",null,"radio",-1),h=n("div",{class:"markdown pf-v5-c-content"},[n("h2",{class:"pf-v5-c-title"},"Examples")],-1);function f(b,y){const s=o("component-info"),i=o("pf-radio"),t=o("story-canvas"),d=o("doc-page");return c(),p(d,{name:"Components/Radio.story.vue",title:"Radio"},{description:a(()=>[r("A "),u,r(" button is used to present the user with mutually exclusive choices. Always present radio buttons in groups of 2 or more.")]),apidocs:a(()=>[e(s,{src:"packages/core/src/components/Radio.vue",doc:{name:"PfRadio",exportName:"default",displayName:"Radio",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"id",description:"Id of the radio.",required:!1,type:{name:"string"}},{name:"labelWrapped",description:"Flag to show if the radio label is wrapped on small screen.",required:!1,type:{name:"boolean"}},{name:"labelBeforeButton",description:"Flag to show if the radio label is shown before the radio button.",required:!1,type:{name:"boolean"}},{name:"checked",description:"Flag to show if the radio is checked.",required:!1,type:{name:"boolean"}},{name:"disabled",description:"Flag to show if the radio is disabled.",required:!1,type:{name:"boolean"}},{name:"valid",description:"Flag to show if the radio selection is valid or invalid.",required:!1,type:{name:"boolean"}},{name:"label",description:"Label text of the radio.",required:!1,type:{name:"string"}},{name:"name",description:"Name for group of radios",required:!0,type:{name:"string"}},{name:"ariaLabel",description:"Aria label for the radio.",required:!1,type:{name:"string"}},{name:"description",description:"Description text of the radio.",required:!1,type:{name:"string"}},{name:"body",description:"Body of the radio.",required:!1,type:{name:"string"}}],events:[{name:"change",type:{names:["Event"]}}],slots:[{name:"label"},{name:"description"},{name:"body"},{name:"default"}],sourceFiles:["../../packages/core/src/components/Radio.vue"]}},null,8,["doc"])]),default:a(()=>[h,e(t,{title:"Basic",source:'<pf-radio name="radio" label="Radio" />'},{default:a(()=>[e(i,{name:"radio",label:"Radio"})]),_:1}),e(t,{title:"With description",source:`<pf-radio
name="radio-with-description"
label="Radio with description"
description="Single-tenant cloud service hosted and managed by Red Hat that offers high-availability enterprise-grade clusters in a virtual private cloud on AWS or GCP." />`},{default:a(()=>[e(i,{name:"radio-with-description",label:"Radio with description",description:"Single-tenant cloud service hosted and managed by Red Hat that offers high-availability enterprise-grade clusters in a virtual private cloud on AWS or GCP."})]),_:1}),e(t,{title:"With description and body",source:`<pf-radio
name="radio-with-description-and-body"
label="Radio with description and body"
description="Single-tenant cloud service hosted and managed by Red Hat that offers high-availability enterprise-grade clusters in a virtual private cloud on AWS or GCP."
body="This is where custom content goes." />`},{default:a(()=>[e(i,{name:"radio-with-description-and-body",label:"Radio with description and body",description:"Single-tenant cloud service hosted and managed by Red Hat that offers high-availability enterprise-grade clusters in a virtual private cloud on AWS or GCP.",body:"This is where custom content goes."})]),_:1})]),_:1},8,["name"])}const v=l(m,[["render",f]]);export{v as default};
