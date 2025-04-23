import{f,g as v,r as s,a as u,c as x,o as b,w as n,b as e,d as i,u as y,e as p}from"./index-DK9vAQUq.js";const h={name:"ClockIcon",height:512,width:512,svgPath:"M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z",yOffset:0,xOffset:0},q=f(h),T=v({__name:"TextInput.story",setup(g){const r=s(""),d=s("");return(V,a)=>{const m=u("component-info"),t=u("pf-text-input"),l=u("story-canvas"),c=u("doc-page");return b(),x(c,{name:"Components/TextInput.story.vue",title:"Text Input"},{description:n(()=>a[3]||(a[3]=[p("A "),i("b",null,"text input",-1),p(" is used to gather free-form text from a user.")])),apidocs:n(()=>[e(m,{src:"packages/core/src/components/TextInput.vue",doc:{name:"PfTextInput",exportName:"default",displayName:"TextInput",description:"",tags:{},expose:[{name:"input"},{name:"focus"},{name:"value"},{name:"effectiveValidated"}],props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"disabled",description:"Flag to show if the text input is disabled.",required:!1,type:{name:"boolean"}},{name:"expanded",description:"Flag to apply expanded styling",required:!1,type:{name:"boolean"}},{name:"readonly",required:!1,type:{name:"boolean"}},{name:"readOnlyVariant",description:"Read only variant.",required:!1,type:{name:"union",elements:[{name:'"plain"'},{name:'"default"'}]}},{name:"validated",description:`Value to indicate if the text input is modified to show that validation state.
If set to success, text input will be modified to indicate valid state.
If set to error, text input will be modified to indicate error state.`,required:!1,type:{name:"InputValidateState"}},{name:"type",description:"Type that the text input accepts.",required:!1,type:{name:"union",elements:[{name:'"text"'},{name:'"date"'},{name:'"datetime-local"'},{name:'"email"'},{name:'"month"'},{name:'"number"'},{name:'"password"'},{name:'"search"'},{name:'"tel"'},{name:'"time"'},{name:'"url"'},{name:'"week"'}]},defaultValue:{func:!1,value:"'text'"}},{name:"modelValue",description:"Value of the text input.",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"null"}]},defaultValue:{func:!1,value:"undefined"}},{name:"ariaLabel",description:"Aria-label. The text input requires an associated id or aria-label.",required:!1,type:{name:"string"}},{name:"startTruncated",description:"Trim text at start",required:!1,type:{name:"boolean"}},{name:"autoValidate",required:!1,type:{name:"union",elements:[{name:'""'},{name:'"blur"'},{name:'"input"'},{name:'"change"'},{name:'"enter"'},{name:"boolean"}]},defaultValue:{func:!1,value:"true"}},{name:"noStatusIcon",description:"Disables validation status icon",required:!1,type:{name:"boolean"}}],events:[{name:"change",type:{names:["Event"]},description:"A callback for when the text input value changes."},{name:"blur",type:{names:["FocusEvent"]},description:"Callback function when text input is blurred (focus leaves)"},{name:"input",type:{names:["Event"]}},{name:"invalid",type:{names:["Event"]}},{name:"keyup",type:{names:["KeyboardEvent"]}},{name:"update:modelValue",type:{names:["string"]}},{name:"update:validated",type:{names:["InputValidateState"]}}],slots:[{name:"icon"}],sourceFiles:["../../packages/core/src/components/TextInput.vue"]}})]),default:n(()=>[e(l,{title:"Basic",source:'<pf-text-input v-model="text1" aria-label="text input example" />'},{default:n(()=>[e(t,{modelValue:r.value,"onUpdate:modelValue":a[0]||(a[0]=o=>r.value=o),"aria-label":"text input example"},null,8,["modelValue"])]),_:1}),e(l,{title:"Disabled",source:`<pf-text-input
disabled
model-value="disabled text input example"
aria-label="disabled text input example" />`},{default:n(()=>[e(t,{disabled:"","model-value":"disabled text input example","aria-label":"disabled text input example"})]),_:1}),e(l,{title:"Read only",source:`<pf-text-input
readonly
model-value="read only text input example"
aria-label="read only text input example" />`},{default:n(()=>[e(t,{readonly:"","model-value":"read only text input example","aria-label":"read only text input example"})]),_:1}),e(l,{title:"Validation",source:`<pf-text-input
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
  auto-validate="input" />
<br>
<pf-text-input
  required
  pattern="[0-9a-f]*"
  placeholder="hexadecimal value (no status icon)"
  aria-label="no status icon"
  auto-validate="input"
  no-status-icon />`},{default:n(()=>[e(t,{required:"",pattern:"[0-9a-f]*",placeholder:"hexadecimal value (does not validate)","aria-label":"does not validate","auto-validate":!1}),a[4]||(a[4]=i("br",null,null,-1)),e(t,{required:"",pattern:"[0-9a-f]*",placeholder:"hexadecimal value (validates on enter/submit)","aria-label":"validates on enter/submit","auto-validate":""}),a[5]||(a[5]=i("br",null,null,-1)),e(t,{required:"",pattern:"[0-9a-f]*",placeholder:"hexadecimal value (validates on blur)","aria-label":"validates on blur","auto-validate":"blur"}),a[6]||(a[6]=i("br",null,null,-1)),e(t,{modelValue:d.value,"onUpdate:modelValue":a[1]||(a[1]=o=>d.value=o),required:"",pattern:"[0-9a-f]*",placeholder:"hexadecimal value (validates on change)","aria-label":"validates on change","auto-validate":"change"},null,8,["modelValue"]),a[7]||(a[7]=i("br",null,null,-1)),e(t,{required:"",pattern:"[0-9a-f]*",placeholder:"hexadecimal value (validates on input)","aria-label":"validates on input","auto-validate":"input"}),a[8]||(a[8]=i("br",null,null,-1)),e(t,{required:"",pattern:"[0-9a-f]*",placeholder:"hexadecimal value (no status icon)","aria-label":"no status icon","auto-validate":"input","no-status-icon":""})]),_:1}),e(l,{title:"Truncated on left",source:'<pf-text-input start-truncated model-value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />'},{default:n(()=>[e(t,{"start-truncated":"","model-value":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]),_:1}),e(l,{title:"Select all",source:`<pf-text-input
model-value="select all on click"
aria-label="select-all"
@focus="($event.currentTarget as HTMLInputElement).select()" />`},{default:n(()=>[e(t,{"model-value":"select all on click","aria-label":"select-all",onFocus:a[2]||(a[2]=o=>o.currentTarget.select())})]),_:1}),e(l,{title:"Custom icon",source:`<pf-text-input aria-label="text input example">
  <template #icon>
    <ClockIcon />
  </template>
</pf-text-input>`},{default:n(()=>[e(t,{"aria-label":"text input example"},{icon:n(()=>[e(y(q))]),_:1})]),_:1})]),_:1})}}});export{T as default};
