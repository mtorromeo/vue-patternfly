import{f as V,g,r as o,a as d,c as q,o as h,w as l,b as e,d as u,t as r,u as I,e as v}from"./index-4O0pXY0z.js";const T={name:"ClockIcon",height:512,width:512,svgPath:"M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z",yOffset:0,xOffset:0},N=V(T),C=g({__name:"TextInput.story",setup(S){const s=o(null),p=o(""),m=o(""),x=o(""),c=o(0),f=o(0);return(O,a)=>{const b=d("component-info"),t=d("pf-text-input"),i=d("story-canvas"),y=d("doc-page");return h(),q(y,{name:"Components/TextInput.story.vue",title:"Text Input"},{description:l(()=>[...a[7]||(a[7]=[v("A ",-1),u("b",null,"text input",-1),v(" is used to gather free-form text from a user.",-1)])]),apidocs:l(()=>[e(b,{src:"packages/core/src/components/TextInput.vue",doc:{name:"PfTextInput",exportName:"default",displayName:"TextInput",description:"",tags:{},expose:[{name:"input"},{name:"focus"},{name:"value"},{name:"effectiveValidated"}],props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"disabled",description:"Flag to show if the text input is disabled.",required:!1,type:{name:"boolean"}},{name:"expanded",description:"Flag to apply expanded styling",required:!1,type:{name:"boolean"}},{name:"readonly",required:!1,type:{name:"boolean"}},{name:"readOnlyVariant",description:"Read only variant.",required:!1,type:{name:"union",elements:[{name:'"plain"'},{name:'"default"'}]}},{name:"validated",description:`Value to indicate if the text input is modified to show that validation state.
If set to success, text input will be modified to indicate valid state.
If set to error, text input will be modified to indicate error state.`,required:!1,type:{name:"InputValidateState"}},{name:"type",description:"Type that the text input accepts.",required:!1,type:{name:"T"}},{name:"modelValue",description:"Value of the text input.",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"null"}]},defaultValue:{func:!1,value:"undefined"}},{name:"modelModifiers",required:!1,type:{name:`{
  number?: N;
  trim?: boolean;
  lazy?: boolean;
}`}},{name:"ariaLabel",description:"Aria-label. The text input requires an associated id or aria-label.",required:!1,type:{name:"string"}},{name:"startTruncated",description:"Trim text at start",required:!1,type:{name:"boolean"}},{name:"autoValidate",required:!1,type:{name:"union",elements:[{name:'""'},{name:'"blur"'},{name:'"input"'},{name:'"change"'},{name:'"enter"'},{name:"boolean"}]},defaultValue:{func:!1,value:"true"}},{name:"noStatusIcon",description:"Disables validation status icon",required:!1,type:{name:"boolean"}}],events:[{name:"change",type:{names:["Event"]},description:"A callback for when the text input value changes."},{name:"blur",type:{names:["FocusEvent"]},description:"Callback function when text input is blurred (focus leaves)"},{name:"input",type:{names:["Event"]}},{name:"invalid",type:{names:["Event"]}},{name:"keyup",type:{names:["KeyboardEvent"]}},{name:"update:modelValue",type:{names:["TSConditionalType"]}},{name:"update:validated",type:{names:["InputValidateState"]}}],slots:[{name:"icon"}],sourceFiles:["../../packages/core/src/components/TextInput.vue"]}})]),default:l(()=>[e(i,{title:"Basic",source:`<pf-text-input v-model="text1" aria-label="text input example" />
<pre>Value: {{ JSON.stringify(text1) }}</pre>`},{default:l(()=>[e(t,{modelValue:s.value,"onUpdate:modelValue":a[0]||(a[0]=n=>s.value=n),"aria-label":"text input example"},null,8,["modelValue"]),u("pre",null,"Value: "+r(JSON.stringify(s.value)),1)]),_:1}),e(i,{title:"Numeric",source:`<pf-text-input v-model="number1" type="number" aria-label="text input example" />
<pre>Value: {{ JSON.stringify(number1) }}</pre>`},{default:l(()=>[e(t,{modelValue:c.value,"onUpdate:modelValue":a[1]||(a[1]=n=>c.value=n),type:"number","aria-label":"text input example"},null,8,["modelValue"]),u("pre",null,"Value: "+r(JSON.stringify(c.value)),1)]),_:1}),e(i,{title:"Number modifier",source:`<pf-text-input v-model.number="number2" aria-label="text input example" />
<pre>Value: {{ JSON.stringify(number2) }}</pre>`},{default:l(()=>[e(t,{modelValue:f.value,"onUpdate:modelValue":a[2]||(a[2]=n=>f.value=n),modelModifiers:{number:!0},"aria-label":"text input example"},null,8,["modelValue"]),u("pre",null,"Value: "+r(JSON.stringify(f.value)),1)]),_:1}),e(i,{title:"Trim modifier",source:`<pf-text-input v-model.trim="text2" aria-label="text input example" />
<pre>Value: {{ JSON.stringify(text2) }}</pre>`},{default:l(()=>[e(t,{modelValue:p.value,"onUpdate:modelValue":a[3]||(a[3]=n=>p.value=n),modelModifiers:{trim:!0},"aria-label":"text input example"},null,8,["modelValue"]),u("pre",null,"Value: "+r(JSON.stringify(p.value)),1)]),_:1}),e(i,{title:"Lazy modifier",source:`<pf-text-input v-model.lazy="text3" aria-label="text input example" />
<pre>Value: {{ JSON.stringify(text3) }}</pre>`},{default:l(()=>[e(t,{modelValue:m.value,"onUpdate:modelValue":a[4]||(a[4]=n=>m.value=n),modelModifiers:{lazy:!0},"aria-label":"text input example"},null,8,["modelValue"]),u("pre",null,"Value: "+r(JSON.stringify(m.value)),1)]),_:1}),e(i,{title:"Disabled",source:`<pf-text-input
disabled
model-value="disabled text input example"
aria-label="disabled text input example" />`},{default:l(()=>[e(t,{disabled:"","model-value":"disabled text input example","aria-label":"disabled text input example"})]),_:1}),e(i,{title:"Read only",source:`<pf-text-input
readonly
model-value="read only text input example"
aria-label="read only text input example" />`},{default:l(()=>[e(t,{readonly:"","model-value":"read only text input example","aria-label":"read only text input example"})]),_:1}),e(i,{title:"Validation",source:`<pf-text-input
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
  v-model="text4"
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
  no-status-icon />`},{default:l(()=>[e(t,{required:"",pattern:"[0-9a-f]*",placeholder:"hexadecimal value (does not validate)","aria-label":"does not validate","auto-validate":!1}),a[8]||(a[8]=u("br",null,null,-1)),e(t,{required:"",pattern:"[0-9a-f]*",placeholder:"hexadecimal value (validates on enter/submit)","aria-label":"validates on enter/submit","auto-validate":""}),a[9]||(a[9]=u("br",null,null,-1)),e(t,{required:"",pattern:"[0-9a-f]*",placeholder:"hexadecimal value (validates on blur)","aria-label":"validates on blur","auto-validate":"blur"}),a[10]||(a[10]=u("br",null,null,-1)),e(t,{modelValue:x.value,"onUpdate:modelValue":a[5]||(a[5]=n=>x.value=n),required:"",pattern:"[0-9a-f]*",placeholder:"hexadecimal value (validates on change)","aria-label":"validates on change","auto-validate":"change"},null,8,["modelValue"]),a[11]||(a[11]=u("br",null,null,-1)),e(t,{required:"",pattern:"[0-9a-f]*",placeholder:"hexadecimal value (validates on input)","aria-label":"validates on input","auto-validate":"input"}),a[12]||(a[12]=u("br",null,null,-1)),e(t,{required:"",pattern:"[0-9a-f]*",placeholder:"hexadecimal value (no status icon)","aria-label":"no status icon","auto-validate":"input","no-status-icon":""})]),_:1}),e(i,{title:"Truncated on left",source:'<pf-text-input start-truncated model-value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />'},{default:l(()=>[e(t,{"start-truncated":"","model-value":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]),_:1}),e(i,{title:"Select all",source:`<pf-text-input
model-value="select all on click"
aria-label="select-all"
@focus="($event.currentTarget as HTMLInputElement).select()" />`},{default:l(()=>[e(t,{"model-value":"select all on click","aria-label":"select-all",onFocus:a[6]||(a[6]=n=>n.currentTarget.select())})]),_:1}),e(i,{title:"Custom icon",source:`<pf-text-input aria-label="text input example">
  <template #icon>
    <ClockIcon />
  </template>
</pf-text-input>`},{default:l(()=>[e(t,{"aria-label":"text input example"},{icon:l(()=>[e(I(N))]),_:1})]),_:1})]),_:1})}}});export{C as default};
