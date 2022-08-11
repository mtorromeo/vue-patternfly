import{e as C,r as x,f as P,a as n,c,w as l,o as p,b as e,i as b,g as h,h as _,F as M,d as o,j as r}from"./index.d06ccf2e.js";const w=o("div",{class:"markdown pf-c-content"},[o("p",null,[r("A "),o("strong",null,"select list"),r(" enables users to select one or more items from a list. Use a select list when options are dynamic or variable. "),o("a",{href:"https://www.patternfly.org/v4/components/select/design-guidelines"},"View PatternFly design guidelines")]),o("h2",{class:"pf-c-title"},"Differences from patternfly-react"),o("ul",null,[o("li",null,[r("There is no "),o("code",null,"grouped"),r(" prop since the presence of groups is auto-detected. See "),o("a",{href:"#/"},"common differences from patternfly-react"),r(".")])]),o("h2",{class:"pf-c-title"},"Examples")],-1),T=C({__name:"Select.story",setup(F){const f=x(!1),g=P({Status:[{value:"Running",favorite:!1,description:"This is a description."},{value:"Stopped",favorite:!1},{value:"Down",favorite:!1,disabled:!0},{value:"Degraded",favorite:!1},{value:"Needs maintenance",favorite:!1}],"Vendor names":[{value:"Dell",favorite:!1},{value:"Samsung",favorite:!1},{value:"Hewlett-Packard",favorite:!1,description:"This is a description."}]});return(S,V)=>{const m=n("component-title"),t=n("pf-select-option"),s=n("pf-select"),a=n("story-canvas"),d=n("pf-divider"),u=n("pf-select-group"),k=n("doc-page");return p(),c(k,{title:"Select"},{default:l(()=>[e(m,{name:"pf-select"}),w,e(a,{title:"Single",source:`<pf-select>
  <pf-select-option value="Please Choose" placeholder disabled ></pf-select-option>
  <pf-select-option value="Mr" ></pf-select-option>
  <pf-select-option value="Miss" ></pf-select-option>
  <pf-select-option value="Mrs" ></pf-select-option>
  <pf-select-option value="Ms" ></pf-select-option>
  <pf-select-option value="Dr" disabled ></pf-select-option>
</pf-select>`},{default:l(()=>[e(s,null,{default:l(()=>[e(t,{value:"Please Choose",placeholder:"",disabled:""}),e(t,{value:"Mr"}),e(t,{value:"Miss"}),e(t,{value:"Mrs"}),e(t,{value:"Ms"}),e(t,{value:"Dr",disabled:""})]),_:1})]),_:1}),e(a,{title:"Single with description",source:`<pf-select>
  <pf-select-option value="Active" description="This is a description" ></pf-select-option>
  <pf-select-option value="Cancelled" ></pf-select-option>
  <pf-select-option value="Paused" ></pf-select-option>
  <pf-divider v-if="divider" ></pf-divider>
  <pf-select-option value="Warning" ></pf-select-option>
  <pf-select-option value="Restarted" ></pf-select-option>
</pf-select>`},{default:l(()=>[e(s,null,{default:l(()=>[e(t,{value:"Active",description:"This is a description"}),e(t,{value:"Cancelled"}),e(t,{value:"Paused"}),f.value?(p(),c(d,{key:0})):b("",!0),e(t,{value:"Warning"}),e(t,{value:"Restarted"})]),_:1})]),_:1}),e(a,{title:"Grouped single",source:`<pf-select>
  <pf-select-group label="Status">
    <pf-select-option value="Running" ></pf-select-option>
    <pf-select-option value="Stopped" ></pf-select-option>
    <pf-select-option value="Down" ></pf-select-option>
    <pf-select-option value="Degraded" ></pf-select-option>
    <pf-select-option value="Needs maintenance" ></pf-select-option>
  </pf-select-group>
  <pf-divider v-if="divider" ></pf-divider>
  <pf-select-group label="Vendor names">
    <pf-select-option value="Dell" ></pf-select-option>
    <pf-select-option value="Samsung" disabled ></pf-select-option>
    <pf-select-option value="Hewlett-Packard" ></pf-select-option>
  </pf-select-group>
</pf-select>`},{default:l(()=>[e(s,null,{default:l(()=>[e(u,{label:"Status"},{default:l(()=>[e(t,{value:"Running"}),e(t,{value:"Stopped"}),e(t,{value:"Down"}),e(t,{value:"Degraded"}),e(t,{value:"Needs maintenance"})]),_:1}),f.value?(p(),c(d,{key:0})):b("",!0),e(u,{label:"Vendor names"},{default:l(()=>[e(t,{value:"Dell"}),e(t,{value:"Samsung",disabled:""}),e(t,{value:"Hewlett-Packard"})]),_:1})]),_:1})]),_:1}),e(a,{title:"Checkbox input",source:`<pf-select placeholder="Filter by status" variant="checkbox">
  <pf-select-option value="Please Choose" placeholder disabled ></pf-select-option>
  <pf-select-option value="Mr" ></pf-select-option>
  <pf-select-option value="Miss" ></pf-select-option>
  <pf-select-option value="Mrs" ></pf-select-option>
  <pf-select-option value="Ms" ></pf-select-option>
  <pf-select-option value="Dr" disabled ></pf-select-option>
</pf-select>`},{default:l(()=>[e(s,{placeholder:"Filter by status",variant:"checkbox"},{default:l(()=>[e(t,{value:"Please Choose",placeholder:"",disabled:""}),e(t,{value:"Mr"}),e(t,{value:"Miss"}),e(t,{value:"Mrs"}),e(t,{value:"Ms"}),e(t,{value:"Dr",disabled:""})]),_:1})]),_:1}),e(a,{title:"Checkbox input with counts",source:`<pf-select placeholder="Filter by status" variant="checkbox">
  <pf-select-option value="Please Choose" placeholder disabled ></pf-select-option>
  <pf-select-option value="Mr" ></pf-select-option>
  <pf-select-option value="Miss" ></pf-select-option>
  <pf-select-option value="Mrs" ></pf-select-option>
  <pf-select-option value="Ms" ></pf-select-option>
  <pf-select-option value="Dr" disabled ></pf-select-option>
</pf-select>`},{default:l(()=>[e(s,{placeholder:"Filter by status",variant:"checkbox"},{default:l(()=>[e(t,{value:"Please Choose",placeholder:"",disabled:""}),e(t,{value:"Mr"}),e(t,{value:"Miss"}),e(t,{value:"Mrs"}),e(t,{value:"Ms"}),e(t,{value:"Dr",disabled:""})]),_:1})]),_:1}),e(a,{title:"Checkbox input no badge",source:`<pf-select placeholder="Filter by status" variant="checkbox" selection-badge-hidden>
  <pf-select-option value="Please Choose" placeholder disabled ></pf-select-option>
  <pf-select-option value="Mr" ></pf-select-option>
  <pf-select-option value="Miss" ></pf-select-option>
  <pf-select-option value="Mrs" ></pf-select-option>
  <pf-select-option value="Ms" ></pf-select-option>
  <pf-select-option value="Dr" disabled ></pf-select-option>
</pf-select>`},{default:l(()=>[e(s,{placeholder:"Filter by status",variant:"checkbox","selection-badge-hidden":""},{default:l(()=>[e(t,{value:"Please Choose",placeholder:"",disabled:""}),e(t,{value:"Mr"}),e(t,{value:"Miss"}),e(t,{value:"Mrs"}),e(t,{value:"Ms"}),e(t,{value:"Dr",disabled:""})]),_:1})]),_:1}),e(a,{title:"Grouped checkbox input",source:`<pf-select placeholder="Filter by status" variant="checkbox">
  <pf-select-option value="Please Choose" placeholder disabled ></pf-select-option>
  <pf-select-option value="Mr" ></pf-select-option>
  <pf-select-option value="Miss" ></pf-select-option>
  <pf-select-option value="Mrs" ></pf-select-option>
  <pf-select-option value="Ms" ></pf-select-option>
  <pf-select-option value="Dr" disabled ></pf-select-option>
</pf-select>`},{default:l(()=>[e(s,{placeholder:"Filter by status",variant:"checkbox"},{default:l(()=>[e(t,{value:"Please Choose",placeholder:"",disabled:""}),e(t,{value:"Mr"}),e(t,{value:"Miss"}),e(t,{value:"Mrs"}),e(t,{value:"Ms"}),e(t,{value:"Dr",disabled:""})]),_:1})]),_:1}),e(a,{title:"Grouped single with filtering",source:`<pf-select placeholder="Filter by status" variant="checkbox" inline-filter>
  <pf-select-option value="Please Choose" placeholder disabled ></pf-select-option>
  <pf-select-option value="Mr" ></pf-select-option>
  <pf-select-option value="Miss" ></pf-select-option>
  <pf-select-option value="Mrs" ></pf-select-option>
  <pf-select-option value="Ms" ></pf-select-option>
  <pf-select-option value="Dr" disabled ></pf-select-option>
</pf-select>`},{default:l(()=>[e(s,{placeholder:"Filter by status",variant:"checkbox","inline-filter":""},{default:l(()=>[e(t,{value:"Please Choose",placeholder:"",disabled:""}),e(t,{value:"Mr"}),e(t,{value:"Miss"}),e(t,{value:"Mrs"}),e(t,{value:"Ms"}),e(t,{value:"Dr",disabled:""})]),_:1})]),_:1}),e(a,{title:"Favorites",source:`<pf-select>
  <pf-select-group v-for="(groupOptions, group) of options" :key="group" :label="group">
    <pf-select-option
      v-for="option of groupOptions"
      :key="option.value"
      v-model:favorite="option.favorite"
      :value="option.value"
      :description="option.description"
      :disabled="option.disabled" />
  </pf-select-group>
</pf-select>`},{default:l(()=>[e(s,null,{default:l(()=>[(p(!0),h(M,null,_(g,(y,v)=>(p(),c(u,{key:v,label:v},{default:l(()=>[(p(!0),h(M,null,_(y,i=>(p(),c(t,{key:i.value,favorite:i.favorite,"onUpdate:favorite":D=>i.favorite=D,value:i.value,description:i.description,disabled:i.disabled},null,8,["favorite","onUpdate:favorite","value","description","disabled"]))),128))]),_:2},1032,["label"]))),128))]),_:1})]),_:1})]),_:1})}}});export{T as default};
