import{m as f,f as v,r as s,a as u,o as x,c as b,w as t,b as p,d as e,u as h,e as o}from"./index-lgjncdPo.js";const y={name:"ClockIcon",height:512,width:512,svgPath:"M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z",yOffset:0,xOffset:0},_=f(y),g=_,q=o("b",null,"text input",-1),V=o("br",null,null,-1),I=o("br",null,null,-1),T=o("br",null,null,-1),k=o("br",null,null,-1),A=v({__name:"TextInput.story",setup(w){const d=s(""),r=s("");return(C,l)=>{const m=u("component-info"),a=u("pf-text-input"),n=u("story-canvas"),c=u("doc-page");return x(),b(c,{name:"Components/TextInput.story.vue",title:"Text Input"},{description:t(()=>[p("A "),q,p(" is used to gather free-form text from a user.")]),apidocs:t(()=>[e(m,{src:"packages/core/src/components/TextInput.vue",doc:{name:"PfTextInput",exportName:"default",displayName:"TextInput",description:"",tags:{},expose:[{name:"input"},{name:"focus"},{name:"value"},{name:"effectiveValidated"}],props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"disabled",description:"Flag to show if the text input is disabled.",required:!1,type:{name:"boolean"}},{name:"expanded",description:"Flag to apply expanded styling",required:!1,type:{name:"boolean"}},{name:"readonly",required:!1,type:{name:"boolean"}},{name:"readOnlyVariant",description:"Read only variant.",required:!1,type:{name:"union",elements:[{name:'"plain"'},{name:'"default"'}]}},{name:"validated",description:`Value to indicate if the text input is modified to show that validation state.
If set to success, text input will be modified to indicate valid state.
If set to error, text input will be modified to indicate error state.`,required:!1,type:{name:"InputValidateState"}},{name:"type",description:"Type that the text input accepts.",required:!1,type:{name:"union",elements:[{name:'"text"'},{name:'"date"'},{name:'"datetime-local"'},{name:'"email"'},{name:'"month"'},{name:'"number"'},{name:'"password"'},{name:'"search"'},{name:'"tel"'},{name:'"time"'},{name:'"url"'},{name:'"week"'}]},defaultValue:{func:!1,value:"'text'"}},{name:"modelValue",description:"Value of the text input.",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]},defaultValue:{func:!1,value:"undefined"}},{name:"ariaLabel",description:"Aria-label. The text input requires an associated id or aria-label.",required:!1,type:{name:"string"}},{name:"startTruncated",description:"Trim text at start",required:!1,type:{name:"boolean"}},{name:"autoValidate",required:!1,type:{name:"union",elements:[{name:'""'},{name:'"blur"'},{name:'"input"'},{name:'"change"'},{name:'"enter"'},{name:"boolean"}]},defaultValue:{func:!1,value:"'change'"}}],events:[{name:"change",type:{names:["Event"]},description:"A callback for when the text input value changes."},{name:"blur",type:{names:["FocusEvent"]},description:"Callback function when text input is blurred (focus leaves)"},{name:"input",type:{names:["Event"]}},{name:"invalid",type:{names:["Event"]}},{name:"keyup",type:{names:["KeyboardEvent"]}},{name:"update:modelValue"},{name:"update:validated"}],slots:[{name:"icon"}],sourceFiles:["../../packages/core/src/components/TextInput.vue"]}},null,8,["doc"])]),default:t(()=>[e(n,{title:"Basic",source:'<pf-text-input v-model="text1" aria-label="text input example" />'},{default:t(()=>[e(a,{modelValue:d.value,"onUpdate:modelValue":l[0]||(l[0]=i=>d.value=i),"aria-label":"text input example"},null,8,["modelValue"])]),_:1}),e(n,{title:"Disabled",source:`<pf-text-input
disabled
model-value="disabled text input example"
aria-label="disabled text input example" />`},{default:t(()=>[e(a,{disabled:"","model-value":"disabled text input example","aria-label":"disabled text input example"})]),_:1}),e(n,{title:"Read only",source:`<pf-text-input
readonly
model-value="read only text input example"
aria-label="read only text input example" />`},{default:t(()=>[e(a,{readonly:"","model-value":"read only text input example","aria-label":"read only text input example"})]),_:1}),e(n,{title:"Validation",source:`<pf-text-input
  required
  pattern="[0-9a-f]*"
  placeholder="hexadecimal value (does not validate)"
  aria-label="does not validate"
  :auto-validate="false" />
<br>
<pf-text-input
  required
  pattern="[0-9a-f]*"
  placeholder="hexadecimal value (validates on enter/submit)"
  aria-label="validates on enter/submit"
  auto-validate />
<br>
<pf-text-input
  required
  pattern="[0-9a-f]*"
  placeholder="hexadecimal value (validates on blur)"
  aria-label="validates on blur"
  auto-validate="blur" />
<br>
<pf-text-input
  v-model="text2"
  required
  pattern="[0-9a-f]*"
  placeholder="hexadecimal value (validates on change)"
  aria-label="validates on change"
  auto-validate="change" />
<br>
<pf-text-input
  required
  pattern="[0-9a-f]*"
  placeholder="hexadecimal value (validates on input)"
  aria-label="validates on input"
  auto-validate="input" />`},{default:t(()=>[e(a,{required:"",pattern:"[0-9a-f]*",placeholder:"hexadecimal value (does not validate)","aria-label":"does not validate","auto-validate":!1}),V,e(a,{required:"",pattern:"[0-9a-f]*",placeholder:"hexadecimal value (validates on enter/submit)","aria-label":"validates on enter/submit","auto-validate":""}),I,e(a,{required:"",pattern:"[0-9a-f]*",placeholder:"hexadecimal value (validates on blur)","aria-label":"validates on blur","auto-validate":"blur"}),T,e(a,{modelValue:r.value,"onUpdate:modelValue":l[1]||(l[1]=i=>r.value=i),required:"",pattern:"[0-9a-f]*",placeholder:"hexadecimal value (validates on change)","aria-label":"validates on change","auto-validate":"change"},null,8,["modelValue"]),k,e(a,{required:"",pattern:"[0-9a-f]*",placeholder:"hexadecimal value (validates on input)","aria-label":"validates on input","auto-validate":"input"})]),_:1}),e(n,{title:"Truncated on left",source:'<pf-text-input start-truncated model-value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />'},{default:t(()=>[e(a,{"start-truncated":"","model-value":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]),_:1}),e(n,{title:"Select all",source:`<pf-text-input
model-value="select all on click"
aria-label="select-all"
@focus="($event.currentTarget as HTMLInputElement).select()" />`},{default:t(()=>[e(a,{"model-value":"select all on click","aria-label":"select-all",onFocus:l[2]||(l[2]=i=>i.currentTarget.select())})]),_:1}),e(n,{title:"Custom icon",source:`<pf-text-input aria-label="text input example">
  <template #icon>
    <ClockIcon />
  </template>
</pf-text-input>`},{default:t(()=>[e(a,{"aria-label":"text input example"},{icon:t(()=>[e(h(g))]),_:1})]),_:1})]),_:1},8,["name"])}}});export{A as default};
