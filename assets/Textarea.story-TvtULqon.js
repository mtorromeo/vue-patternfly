import{f as c,r as f,o as x,c as h,w as n,a as t,b as e,d as a,e as i}from"./index-9TsNn5Vt.js";const v={style:{"margin-bottom":"12px"}},z=c({__name:"Textarea.story",setup(b){const s=f(!1);return(y,l)=>{const d=i("component-info"),o=i("pf-textarea"),r=i("story-canvas"),m=i("pf-checkbox"),u=i("doc-page");return x(),h(u,{name:"Components/Textarea.story.vue",title:"Textarea"},{description:n(()=>l[1]||(l[1]=[t("A "),e("b",null,"text area",-1),t(" component is used for entering a paragraph of text that is longer than one line.")])),apidocs:n(()=>[a(d,{src:"packages/core/src/components/Textarea.vue",doc:{name:"PfTextarea",exportName:"default",displayName:"Textarea",description:"",tags:{},expose:[{name:"input"},{name:"focus"},{name:"value"},{name:"checkValidity"}],props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"disabled",description:"Flag to show if the text area is disabled.",required:!1,type:{name:"boolean"}},{name:"readonly",required:!1,type:{name:"boolean"}},{name:"readonlyVariant",description:"Read only variant.",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"plain"'}]}},{name:"autoResize",description:"Flag to modify height based on contents.",required:!1,type:{name:"boolean"}},{name:"resizeOrientation",description:"Sets the orientation to limit the resize to",tags:{values:[{description:"horizontal, vertical, both",title:"values"}]},required:!1,type:{name:"union",elements:[{name:'"horizontal"'},{name:'"vertical"'},{name:'"both"'}]},defaultValue:{func:!1,value:"'both'"}},{name:"pattern",description:"Specifies a regular expression that the value should match",required:!1,type:{name:"union",elements:[{name:"string"},{name:"RegExp"}]}},{name:"modelValue",description:"Value of the text area.",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"null"}]},defaultValue:{func:!1,value:"undefined"}},{name:"validated",description:`Value to indicate if the text area is modified to show that validation state.
If set to success, text area will be modified to indicate valid state.
If set to error, text area will be modified to indicate error state.`,required:!1,type:{name:"union",elements:[{name:'"success"'},{name:'"warning"'},{name:'"error"'},{name:'"default"'}]}},{name:"autoValidate",required:!1,type:{name:"union",elements:[{name:'""'},{name:'"blur"'},{name:'"input"'},{name:'"change"'},{name:'"enter"'},{name:"boolean"}]},defaultValue:{func:!1,value:"'change'"}},{name:"maxHeight",description:"Maximum height",required:!1,type:{name:"string"}},{name:"maxWidth",description:"Maximum width",required:!1,type:{name:"string"}}],events:[{name:"change",type:{names:["Event"]},description:"A callback for when the textarea value changes."},{name:"blur",type:{names:["FocusEvent"]},description:"Callback function when textarea is blurred (focus leaves)"},{name:"input",type:{names:["Event"]}},{name:"invalid",type:{names:["Event"]}},{name:"keyup",type:{names:["KeyboardEvent"]}},{name:"update:modelValue"},{name:"update:validated"}],sourceFiles:["../../packages/core/src/components/Textarea.vue"]}})]),default:n(()=>[l[2]||(l[2]=e("div",{class:"markdown pf-v5-c-content"},[e("h2",{class:"pf-v5-c-title"},"Differences from patternfly-react"),e("ul",null,[e("li",null,[t("Added the "),e("code",null,"pattern"),t(" prop with a custom implementation that emulates the "),e("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern"},"pattern"),t(" attribute of input elements.")]),e("li",null,[t("The "),e("code",null,"value"),t(" prop is replaced by "),e("code",null,"modelValue"),t(" so that the component can be used with "),e("code",null,"v-model"),t(". See "),e("a",{href:"#/"},"common differences from patternfly-react"),t(".")])]),e("h2",{class:"pf-v5-c-title"},"Examples")],-1)),a(r,{title:"With regex pattern validation",source:'<pf-textarea pattern="[0-9\\s]+" placeholder="Numbers and spaces only" />'},{default:n(()=>[a(o,{pattern:"[0-9\\s]+",placeholder:"Numbers and spaces only"})]),_:1}),a(r,{title:"Vertically resizable",source:'<pf-textarea resize-orientation="vertical" aria-label="text area vertical resize example" />'},{default:n(()=>[a(o,{"resize-orientation":"vertical","aria-label":"text area vertical resize example"})]),_:1}),a(r,{title:"Horizontally resizable",source:'<pf-textarea resize-orientation="horizontal" aria-label="text area horizontal resize example" />'},{default:n(()=>[a(o,{"resize-orientation":"horizontal","aria-label":"text area horizontal resize example"})]),_:1}),a(r,{title:"Disabled",source:'<pf-textarea aria-label="Disabled text area example" disabled />'},{default:n(()=>[a(o,{"aria-label":"Disabled text area example",disabled:""})]),_:1}),a(r,{title:"Read only",source:`<div style="margin-bottom: 12px">
  <pf-checkbox v-model="plain" label="Plain read only variant" />
</div>
<pf-textarea aria-label="read only text area example" model-value="read only text area example" :readonly-variant="plain ? 'plain' : 'default'" />`},{default:n(()=>[e("div",v,[a(m,{modelValue:s.value,"onUpdate:modelValue":l[0]||(l[0]=p=>s.value=p),label:"Plain read only variant"},null,8,["modelValue"])]),a(o,{"aria-label":"read only text area example","model-value":"read only text area example","readonly-variant":s.value?"plain":"default"},null,8,["readonly-variant"])]),_:1}),a(r,{title:"Auto resizing",source:'<pf-textarea aria-label="auto resizing text area example" auto-resize />'},{default:n(()=>[a(o,{"aria-label":"auto resizing text area example","auto-resize":""})]),_:1})]),_:1})}}});export{z as default};