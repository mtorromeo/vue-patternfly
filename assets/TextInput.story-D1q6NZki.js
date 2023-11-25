import{m,e as x,r as s,a as o,o as v,c as b,w as t,b as e,u as f,d as u}from"./index-aHpSD51e.js";const _={name:"ClockIcon",height:512,width:512,svgPath:"M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z",yOffset:0,xOffset:0},h=m(_),q=h,g=u("br",null,null,-1),y=u("br",null,null,-1),V=u("br",null,null,-1),C=u("br",null,null,-1),B=x({__name:"TextInput.story",setup(k){const d=s(""),r=s("");return(I,n)=>{const p=o("component-title"),a=o("pf-text-input"),l=o("story-canvas"),c=o("doc-page");return v(),b(c,{title:"Text Input"},{default:t(()=>[e(p,{name:"pf-text-input"}),e(l,{title:"Basic",source:'<pf-text-input v-model="text1" aria-label="text input example" />'},{default:t(()=>[e(a,{modelValue:d.value,"onUpdate:modelValue":n[0]||(n[0]=i=>d.value=i),"aria-label":"text input example"},null,8,["modelValue"])]),_:1}),e(l,{title:"Disabled",source:`<pf-text-input
disabled
value="disabled text input example"
aria-label="disabled text input example" />`},{default:t(()=>[e(a,{disabled:"",value:"disabled text input example","aria-label":"disabled text input example"})]),_:1}),e(l,{title:"Read only",source:`<pf-text-input
readonly
value="read only text input example"
aria-label="read only text input example" />`},{default:t(()=>[e(a,{readonly:"",value:"read only text input example","aria-label":"read only text input example"})]),_:1}),e(l,{title:"Validation",source:`<pf-text-input
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
  auto-validate="input" />`},{default:t(()=>[e(a,{required:"",pattern:"[0-9a-f]*",placeholder:"hexadecimal value (does not validate)","aria-label":"does not validate","auto-validate":!1}),g,e(a,{required:"",pattern:"[0-9a-f]*",placeholder:"hexadecimal value (validates on enter/submit)","aria-label":"validates on enter/submit","auto-validate":""}),y,e(a,{required:"",pattern:"[0-9a-f]*",placeholder:"hexadecimal value (validates on blur)","aria-label":"validates on blur","auto-validate":"blur"}),V,e(a,{modelValue:r.value,"onUpdate:modelValue":n[1]||(n[1]=i=>r.value=i),required:"",pattern:"[0-9a-f]*",placeholder:"hexadecimal value (validates on change)","aria-label":"validates on change","auto-validate":"change"},null,8,["modelValue"]),C,e(a,{required:"",pattern:"[0-9a-f]*",placeholder:"hexadecimal value (validates on input)","aria-label":"validates on input","auto-validate":"input"})]),_:1}),e(l,{title:"Truncated on left",source:'<pf-text-input start-truncated model-value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />'},{default:t(()=>[e(a,{"start-truncated":"","model-value":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]),_:1}),e(l,{title:"Select all",source:`<pf-text-input
value="select all on click"
aria-label="select-all"
@focus="($event.currentTarget as HTMLInputElement).select()" />`},{default:t(()=>[e(a,{value:"select all on click","aria-label":"select-all",onFocus:n[2]||(n[2]=i=>i.currentTarget.select())})]),_:1}),e(l,{title:"Custom icon",source:`<pf-text-input aria-label="text input example">
  <template #icon>
    <ClockIcon />
  </template>
</pf-text-input>`},{default:t(()=>[e(a,{"aria-label":"text input example"},{icon:t(()=>[e(f(q))]),_:1})]),_:1})]),_:1})}}});export{B as default};
