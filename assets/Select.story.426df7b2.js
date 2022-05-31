import{e as C,r as x,f as P,c,w as t,a as n,o as i,b as e,i as b,g as h,h as _,F as M,d as a,j as r}from"./index.adfcb1e2.js";const w=a("div",{class:"markdown pf-c-content"},[a("p",null,[r("A "),a("strong",null,"select list"),r(" enables users to select one or more items from a list. Use a select list when options are dynamic or variable. "),a("a",{href:"https://www.patternfly.org/v4/components/select/design-guidelines"},"View PatternFly design guidelines")]),a("h2",{class:"pf-c-title"},"Differences from patternfly-react"),a("ul",null,[a("li",null,[r("There is no "),a("code",null,"grouped"),r(" prop since the presence of groups is auto-detected. See "),a("a",{href:"#/"},"common differences from patternfly-react"),r(".")])]),a("h2",{class:"pf-c-title"},"Examples")],-1),T=C({name:"Select.story",setup(F){const d=x(!1),g=P({Status:[{value:"Running",favorite:!1,description:"This is a description."},{value:"Stopped",favorite:!1},{value:"Down",favorite:!1,disabled:!0},{value:"Degraded",favorite:!1},{value:"Needs maintenance",favorite:!1}],"Vendor names":[{value:"Dell",favorite:!1},{value:"Samsung",favorite:!1},{value:"Hewlett-Packard",favorite:!1,description:"This is a description."}]});return(S,V)=>{const m=n("component-title"),l=n("pf-select-option"),s=n("pf-select"),o=n("story-canvas"),f=n("pf-divider"),u=n("pf-select-group"),k=n("doc-page");return i(),c(k,{title:"Select"},{default:t(()=>[e(m,{name:"pf-select"}),w,e(o,{title:"Single",source:`<pf-select>
  <pf-select-option value="Please Choose" placeholder disabled />
  <pf-select-option value="Mr" />
  <pf-select-option value="Miss" />
  <pf-select-option value="Mrs" />
  <pf-select-option value="Ms" />
  <pf-select-option value="Dr" disabled />
</pf-select>`},{default:t(()=>[e(s,null,{default:t(()=>[e(l,{value:"Please Choose",placeholder:"",disabled:""}),e(l,{value:"Mr"}),e(l,{value:"Miss"}),e(l,{value:"Mrs"}),e(l,{value:"Ms"}),e(l,{value:"Dr",disabled:""})]),_:1})]),_:1}),e(o,{title:"Single with description",source:`<pf-select>
  <pf-select-option value="Active" description="This is a description" />
  <pf-select-option value="Cancelled" />
  <pf-select-option value="Paused" />
  <pf-divider v-if="divider" />
  <pf-select-option value="Warning" />
  <pf-select-option value="Restarted" />
</pf-select>`},{default:t(()=>[e(s,null,{default:t(()=>[e(l,{value:"Active",description:"This is a description"}),e(l,{value:"Cancelled"}),e(l,{value:"Paused"}),d.value?(i(),c(f,{key:0})):b("",!0),e(l,{value:"Warning"}),e(l,{value:"Restarted"})]),_:1})]),_:1}),e(o,{title:"Grouped single",source:`<pf-select>
  <pf-select-group label="Status">
    <pf-select-option value="Running" />
    <pf-select-option value="Stopped" />
    <pf-select-option value="Down" />
    <pf-select-option value="Degraded" />
    <pf-select-option value="Needs maintenance" />
  </pf-select-group>
  <pf-divider v-if="divider" />
  <pf-select-group label="Vendor names">
    <pf-select-option value="Dell" />
    <pf-select-option value="Samsung" disabled />
    <pf-select-option value="Hewlett-Packard" />
  </pf-select-group>
</pf-select>`},{default:t(()=>[e(s,null,{default:t(()=>[e(u,{label:"Status"},{default:t(()=>[e(l,{value:"Running"}),e(l,{value:"Stopped"}),e(l,{value:"Down"}),e(l,{value:"Degraded"}),e(l,{value:"Needs maintenance"})]),_:1}),d.value?(i(),c(f,{key:0})):b("",!0),e(u,{label:"Vendor names"},{default:t(()=>[e(l,{value:"Dell"}),e(l,{value:"Samsung",disabled:""}),e(l,{value:"Hewlett-Packard"})]),_:1})]),_:1})]),_:1}),e(o,{title:"Checkbox input",source:`<pf-select placeholder="Filter by status" variant="checkbox">
  <pf-select-option value="Please Choose" placeholder disabled />
  <pf-select-option value="Mr" />
  <pf-select-option value="Miss" />
  <pf-select-option value="Mrs" />
  <pf-select-option value="Ms" />
  <pf-select-option value="Dr" disabled />
</pf-select>`},{default:t(()=>[e(s,{placeholder:"Filter by status",variant:"checkbox"},{default:t(()=>[e(l,{value:"Please Choose",placeholder:"",disabled:""}),e(l,{value:"Mr"}),e(l,{value:"Miss"}),e(l,{value:"Mrs"}),e(l,{value:"Ms"}),e(l,{value:"Dr",disabled:""})]),_:1})]),_:1}),e(o,{title:"Checkbox input with counts",source:`<pf-select placeholder="Filter by status" variant="checkbox">
  <pf-select-option value="Please Choose" placeholder disabled />
  <pf-select-option value="Mr" />
  <pf-select-option value="Miss" />
  <pf-select-option value="Mrs" />
  <pf-select-option value="Ms" />
  <pf-select-option value="Dr" disabled />
</pf-select>`},{default:t(()=>[e(s,{placeholder:"Filter by status",variant:"checkbox"},{default:t(()=>[e(l,{value:"Please Choose",placeholder:"",disabled:""}),e(l,{value:"Mr"}),e(l,{value:"Miss"}),e(l,{value:"Mrs"}),e(l,{value:"Ms"}),e(l,{value:"Dr",disabled:""})]),_:1})]),_:1}),e(o,{title:"Checkbox input no badge",source:`<pf-select placeholder="Filter by status" variant="checkbox" selection-badge-hidden>
  <pf-select-option value="Please Choose" placeholder disabled />
  <pf-select-option value="Mr" />
  <pf-select-option value="Miss" />
  <pf-select-option value="Mrs" />
  <pf-select-option value="Ms" />
  <pf-select-option value="Dr" disabled />
</pf-select>`},{default:t(()=>[e(s,{placeholder:"Filter by status",variant:"checkbox","selection-badge-hidden":""},{default:t(()=>[e(l,{value:"Please Choose",placeholder:"",disabled:""}),e(l,{value:"Mr"}),e(l,{value:"Miss"}),e(l,{value:"Mrs"}),e(l,{value:"Ms"}),e(l,{value:"Dr",disabled:""})]),_:1})]),_:1}),e(o,{title:"Grouped checkbox input",source:`<pf-select placeholder="Filter by status" variant="checkbox">
  <pf-select-option value="Please Choose" placeholder disabled />
  <pf-select-option value="Mr" />
  <pf-select-option value="Miss" />
  <pf-select-option value="Mrs" />
  <pf-select-option value="Ms" />
  <pf-select-option value="Dr" disabled />
</pf-select>`},{default:t(()=>[e(s,{placeholder:"Filter by status",variant:"checkbox"},{default:t(()=>[e(l,{value:"Please Choose",placeholder:"",disabled:""}),e(l,{value:"Mr"}),e(l,{value:"Miss"}),e(l,{value:"Mrs"}),e(l,{value:"Ms"}),e(l,{value:"Dr",disabled:""})]),_:1})]),_:1}),e(o,{title:"Grouped single with filtering",source:`<pf-select placeholder="Filter by status" variant="checkbox" inline-filter>
  <pf-select-option value="Please Choose" placeholder disabled />
  <pf-select-option value="Mr" />
  <pf-select-option value="Miss" />
  <pf-select-option value="Mrs" />
  <pf-select-option value="Ms" />
  <pf-select-option value="Dr" disabled />
</pf-select>`},{default:t(()=>[e(s,{placeholder:"Filter by status",variant:"checkbox","inline-filter":""},{default:t(()=>[e(l,{value:"Please Choose",placeholder:"",disabled:""}),e(l,{value:"Mr"}),e(l,{value:"Miss"}),e(l,{value:"Mrs"}),e(l,{value:"Ms"}),e(l,{value:"Dr",disabled:""})]),_:1})]),_:1}),e(o,{title:"Favorites",source:`<pf-select>
  <pf-select-group v-for="(groupOptions, group) of options" :key="group" :label="group">
    <pf-select-option
      v-for="option of groupOptions"
      :key="option.value"
      v-model:favorite="option.favorite"
      :value="option.value"
      :description="option.description"
      :disabled="option.disabled" />
  </pf-select-group>
</pf-select>`},{default:t(()=>[e(s,null,{default:t(()=>[(i(!0),h(M,null,_(g,(y,v)=>(i(),c(u,{key:v,label:v},{default:t(()=>[(i(!0),h(M,null,_(y,p=>(i(),c(l,{key:p.value,favorite:p.favorite,"onUpdate:favorite":D=>p.favorite=D,value:p.value,description:p.description,disabled:p.disabled},null,8,["favorite","onUpdate:favorite","value","description","disabled"]))),128))]),_:2},1032,["label"]))),128))]),_:1})]),_:1})]),_:1})}}});export{T as default};
