import{e as m,r as p,a as u,o as x,c as v,w as t,b as e,d as i}from"./index.61b3793e.js";const f=i("br",null,null,-1),b=i("br",null,null,-1),_=i("br",null,null,-1),h=i("br",null,null,-1),g=i("br",null,null,-1),q=i("br",null,null,-1),z=m({__name:"TextInput.story",setup(w){const r=p(""),d=p("");return(C,n)=>{const s=u("component-title"),a=u("pf-text-input"),l=u("story-canvas"),c=u("doc-page");return x(),v(c,{title:"Text Input"},{default:t(()=>[e(s,{name:"pf-text-input"}),e(l,{title:"Basic",source:'<pf-text-input v-model="text1" aria-label="text input example" ></pf-text-input>'},{default:t(()=>[e(a,{modelValue:r.value,"onUpdate:modelValue":n[0]||(n[0]=o=>r.value=o),"aria-label":"text input example"},null,8,["modelValue"])]),_:1}),e(l,{title:"Disabled",source:`<pf-text-input
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
  auto-validate="input" />`},{default:t(()=>[e(a,{required:"",pattern:"[0-9a-f]*",placeholder:"hexadecimal value (does not validate)","aria-label":"does not validate","auto-validate":!1}),f,e(a,{required:"",pattern:"[0-9a-f]*",placeholder:"hexadecimal value (validates on enter/submit)","aria-label":"validates on enter/submit","auto-validate":""}),b,e(a,{required:"",pattern:"[0-9a-f]*",placeholder:"hexadecimal value (validates on blur)","aria-label":"validates on blur","auto-validate":"blur"}),_,e(a,{modelValue:d.value,"onUpdate:modelValue":n[1]||(n[1]=o=>d.value=o),required:"",pattern:"[0-9a-f]*",placeholder:"hexadecimal value (validates on change)","aria-label":"validates on change","auto-validate":"change"},null,8,["modelValue"]),h,e(a,{required:"",pattern:"[0-9a-f]*",placeholder:"hexadecimal value (validates on input)","aria-label":"validates on input","auto-validate":"input"})]),_:1}),e(l,{title:"Truncated on left",source:'<pf-text-input left-trucated model-value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." ></pf-text-input>'},{default:t(()=>[e(a,{"left-trucated":"","model-value":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]),_:1}),e(l,{title:"Select all",source:`<pf-text-input
value="select all on click"
aria-label="select-all"
@focus="($event.target as HTMLInputElement).select()" />`},{default:t(()=>[e(a,{value:"select all on click","aria-label":"select-all",onFocus:n[2]||(n[2]=o=>o.target.select())})]),_:1}),e(l,{title:"Icon variants",source:`<pf-text-input aria-label="text input example" icon-variant="calendar" ></pf-text-input>
<br>
<pf-text-input aria-label="text input example" icon-variant="clock" ></pf-text-input>
<br>
<pf-text-input
  aria-label="text input example"
  icon-dimensions="24px 24px"
  icon-url="data:image/svg+xml;charset=utf8,%3Csvg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 512 512&quot;%3E%3Cpath fill=&quot;%23a18fff&quot; d=&quot;M158.87.15c-16.16-1.52-31.2 8.42-35.33 24.12l-14.81 56.27c187.62 5.49 314.54 130.61 322.48 317l56.94-15.78c15.72-4.36 25.49-19.68 23.62-35.9C490.89 165.08 340.78 17.32 158.87.15zm-58.47 112L.55 491.64a16.21 16.21 0 0 0 20 19.75l379-105.1c-4.27-174.89-123.08-292.14-299.15-294.1zM128 416a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm48-152a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm104 104a32 32 0 1 1 32-32 32 32 0 0 1-32 32z&quot;/%3E%3C/svg%3E" />`},{default:t(()=>[e(a,{"aria-label":"text input example","icon-variant":"calendar"}),g,e(a,{"aria-label":"text input example","icon-variant":"clock"}),q,e(a,{"aria-label":"text input example","icon-dimensions":"24px 24px","icon-url":'data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"%3E%3Cpath fill="%23a18fff" d="M158.87.15c-16.16-1.52-31.2 8.42-35.33 24.12l-14.81 56.27c187.62 5.49 314.54 130.61 322.48 317l56.94-15.78c15.72-4.36 25.49-19.68 23.62-35.9C490.89 165.08 340.78 17.32 158.87.15zm-58.47 112L.55 491.64a16.21 16.21 0 0 0 20 19.75l379-105.1c-4.27-174.89-123.08-292.14-299.15-294.1zM128 416a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm48-152a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm104 104a32 32 0 1 1 32-32 32 32 0 0 1-32 32z"/%3E%3C/svg%3E'})]),_:1})]),_:1})}}});export{z as default};
