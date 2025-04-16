import{f as u,g as m,r as _,a,c as v,o as p,w as e,b as o,j as y,l as w,e as n,u as g,t as c,d as h}from"./index-CbKHU2HW.js";const b={name:"UploadIcon",height:512,width:512,svgPath:"M288 109.3L288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-242.7-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3zM64 352l128 0c0 35.3 28.7 64 64 64s64-28.7 64-64l128 0c35.3 0 64 28.7 64 64l0 32c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64l0-32c0-35.3 28.7-64 64-64zM432 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z",yOffset:0,xOffset:0},x=u(b),C={key:0},F=m({__name:"FileUpload.story",setup(U){const t=_(null);return(k,l)=>{const r=a("component-info"),s=a("pf-file-upload"),i=a("story-canvas"),d=a("doc-page");return p(),v(d,{name:"Components/FileUpload.story.vue",title:"File Upload"},{description:e(()=>l[1]||(l[1]=[n(" A "),h("b",null,"simple file upload",-1),n(" component allows the users to upload a single file into the browser. This is primarily used for uploading and previewing text files, but other file types will also be accepted. ")])),apidocs:e(()=>[o(r,{src:"packages/core/src/components/FielUpload.vue"})]),default:e(()=>[o(i,{title:"Simple text file",source:`<pf-file-upload :data-types="['text/plain']" />`},{default:e(()=>[o(s,{"data-types":["text/plain"]})]),_:1}),o(i,{title:"Custom file preview",source:`<pf-file-upload browse-button-text="Upload" hide-default-preview @file-input-change="file = $event">
  <div v-if="file">
    <upload-icon />
    Custom preview here for your {{ file.size }}-byte file named {{ file.name }}
  </div>
</pf-file-upload>`},{default:e(()=>[o(s,{"browse-button-text":"Upload","hide-default-preview":"",onFileInputChange:l[0]||(l[0]=f=>t.value=f)},{default:e(()=>[t.value?(p(),y("div",C,[o(g(x)),n(" Custom preview here for your "+c(t.value.size)+"-byte file named "+c(t.value.name),1)])):w("",!0)]),_:1})]),_:1})]),_:1})}}});export{F as default};
