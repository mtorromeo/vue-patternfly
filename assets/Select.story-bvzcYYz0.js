import{e as w,r as S,f as C,a as c,o as i,c as r,w as l,b as e,g as s,j as h,h as b,i as k,F as _,d as a}from"./index-KWy3deFk.js";const P=a("div",{class:"markdown pf-v5-c-content"},[a("p",null,[s("A "),a("strong",null,"select list"),s(" enables users to select one or more items from a list. Use a select list when options are dynamic or variable. "),a("a",{href:"https://www.patternfly.org/components/select/design-guidelines"},"View PatternFly design guidelines")]),a("h2",{class:"pf-v5-c-title"},"Differences from patternfly-react"),a("ul",null,[a("li",null,[s("There is no "),a("code",null,"grouped"),s(" prop since the presence of groups is auto-detected. See "),a("a",{href:"#/"},"common differences from patternfly-react"),s(".")])]),a("h2",{class:"pf-v5-c-title"},"Examples")],-1),T=w({__name:"Select.story",setup(F){const f=S(!1),g=C({Status:[{value:"Running",favorite:!1,description:"This is a description."},{value:"Stopped",favorite:!1},{value:"Down",favorite:!1,disabled:!0},{value:"Degraded",favorite:!1},{value:"Needs maintenance",favorite:!1}],"Vendor names":[{value:"Dell",favorite:!1},{value:"Samsung",favorite:!1},{value:"Hewlett-Packard",favorite:!1,description:"This is a description."}]});return(V,N)=>{const m=c("component-title"),t=c("pf-select-option"),n=c("pf-select"),o=c("story-canvas"),d=c("pf-divider"),u=c("pf-select-group"),M=c("pf-text-input"),y=c("doc-page");return i(),r(y,{title:"Select"},{default:l(()=>[e(m,{name:"pf-select"}),P,e(o,{title:"Single",source:`<pf-select>
  <pf-select-option disabled>
    Please Choose
  </pf-select-option>
  <pf-select-option value="Mr" />
  <pf-select-option value="Miss" />
  <pf-select-option value="Mrs" />
  <pf-select-option value="Ms" />
  <pf-select-option value="Dr" disabled />
</pf-select>`},{default:l(()=>[e(n,null,{default:l(()=>[e(t,{disabled:""},{default:l(()=>[s(" Please Choose ")]),_:1}),e(t,{value:"Mr"}),e(t,{value:"Miss"}),e(t,{value:"Mrs"}),e(t,{value:"Ms"}),e(t,{value:"Dr",disabled:""})]),_:1})]),_:1}),e(o,{title:"Single with description",source:`<pf-select>
  <pf-select-option value="Active" description="This is a description" />
  <pf-select-option value="Cancelled" />
  <pf-select-option value="Paused" />
  <pf-divider v-if="divider" />
  <pf-select-option value="Warning" />
  <pf-select-option value="Restarted" />
</pf-select>`},{default:l(()=>[e(n,null,{default:l(()=>[e(t,{value:"Active",description:"This is a description"}),e(t,{value:"Cancelled"}),e(t,{value:"Paused"}),f.value?(i(),r(d,{key:0})):h("",!0),e(t,{value:"Warning"}),e(t,{value:"Restarted"})]),_:1})]),_:1}),e(o,{title:"Grouped single",source:`<pf-select>
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
</pf-select>`},{default:l(()=>[e(n,null,{default:l(()=>[e(u,{label:"Status"},{default:l(()=>[e(t,{value:"Running"}),e(t,{value:"Stopped"}),e(t,{value:"Down"}),e(t,{value:"Degraded"}),e(t,{value:"Needs maintenance"})]),_:1}),f.value?(i(),r(d,{key:0})):h("",!0),e(u,{label:"Vendor names"},{default:l(()=>[e(t,{value:"Dell"}),e(t,{value:"Samsung",disabled:""}),e(t,{value:"Hewlett-Packard"})]),_:1})]),_:1})]),_:1}),e(o,{title:"Checkbox input",source:`<pf-select placeholder="Filter by status" variant="checkbox">
  <pf-select-option disabled>
    Please Choose
  </pf-select-option>
  <pf-select-option check value="Mr" />
  <pf-select-option check value="Miss" />
  <pf-select-option check value="Mrs" />
  <pf-select-option check value="Ms" />
  <pf-select-option check value="Dr" disabled />
</pf-select>`},{default:l(()=>[e(n,{placeholder:"Filter by status",variant:"checkbox"},{default:l(()=>[e(t,{disabled:""},{default:l(()=>[s(" Please Choose ")]),_:1}),e(t,{check:"",value:"Mr"}),e(t,{check:"",value:"Miss"}),e(t,{check:"",value:"Mrs"}),e(t,{check:"",value:"Ms"}),e(t,{check:"",value:"Dr",disabled:""})]),_:1})]),_:1}),e(o,{title:"Checkbox input with counts",source:`<pf-select placeholder="Filter by status" variant="checkbox">
  <pf-select-option disabled>
    Please Choose
  </pf-select-option>
  <pf-select-option check value="Mr" />
  <pf-select-option check value="Miss" />
  <pf-select-option check value="Mrs" />
  <pf-select-option check value="Ms" />
  <pf-select-option check value="Dr" disabled />
</pf-select>`},{default:l(()=>[e(n,{placeholder:"Filter by status",variant:"checkbox"},{default:l(()=>[e(t,{disabled:""},{default:l(()=>[s(" Please Choose ")]),_:1}),e(t,{check:"",value:"Mr"}),e(t,{check:"",value:"Miss"}),e(t,{check:"",value:"Mrs"}),e(t,{check:"",value:"Ms"}),e(t,{check:"",value:"Dr",disabled:""})]),_:1})]),_:1}),e(o,{title:"Checkbox input no badge",source:`<pf-select placeholder="Filter by status" variant="checkbox" selection-badge-hidden>
  <pf-select-option disabled>
    Please Choose
  </pf-select-option>
  <pf-select-option check value="Mr" />
  <pf-select-option check value="Miss" />
  <pf-select-option check value="Mrs" />
  <pf-select-option check value="Ms" />
  <pf-select-option check value="Dr" disabled />
</pf-select>`},{default:l(()=>[e(n,{placeholder:"Filter by status",variant:"checkbox","selection-badge-hidden":""},{default:l(()=>[e(t,{disabled:""},{default:l(()=>[s(" Please Choose ")]),_:1}),e(t,{check:"",value:"Mr"}),e(t,{check:"",value:"Miss"}),e(t,{check:"",value:"Mrs"}),e(t,{check:"",value:"Ms"}),e(t,{check:"",value:"Dr",disabled:""})]),_:1})]),_:1}),e(o,{title:"Grouped checkbox input",source:`<pf-select placeholder="Filter by status" variant="checkbox">
  <pf-select-option disabled>
    Please Choose
  </pf-select-option>
  <pf-select-option check value="Mr" />
  <pf-select-option check value="Miss" />
  <pf-select-option check value="Mrs" />
  <pf-select-option check value="Ms" />
  <pf-select-option check value="Dr" disabled />
</pf-select>`},{default:l(()=>[e(n,{placeholder:"Filter by status",variant:"checkbox"},{default:l(()=>[e(t,{disabled:""},{default:l(()=>[s(" Please Choose ")]),_:1}),e(t,{check:"",value:"Mr"}),e(t,{check:"",value:"Miss"}),e(t,{check:"",value:"Mrs"}),e(t,{check:"",value:"Ms"}),e(t,{check:"",value:"Dr",disabled:""})]),_:1})]),_:1}),e(o,{title:"Grouped single with filtering",source:`<pf-select placeholder="Filter by status" variant="checkbox">
  <pf-text-input :auto-validate="false" aria-label="Filter menu items" type="search" icon-variant="search" />
  <pf-divider />
  <pf-select-group label="Status">
    <pf-select-option value="Running" />
    <pf-select-option value="Stopped" />
    <pf-select-option value="Down" />
    <pf-select-option value="Degraded" />
    <pf-select-option value="Needs maintenance" />
  </pf-select-group>
  <pf-select-group label="Vendor names">
    <pf-select-option value="Dell" />
    <pf-select-option value="Samsung" disabled />
    <pf-select-option value="Hewlett-Packard" />
  </pf-select-group>
</pf-select>`},{default:l(()=>[e(n,{placeholder:"Filter by status",variant:"checkbox"},{default:l(()=>[e(M,{"auto-validate":!1,"aria-label":"Filter menu items",type:"search","icon-variant":"search"}),e(d),e(u,{label:"Status"},{default:l(()=>[e(t,{value:"Running"}),e(t,{value:"Stopped"}),e(t,{value:"Down"}),e(t,{value:"Degraded"}),e(t,{value:"Needs maintenance"})]),_:1}),e(u,{label:"Vendor names"},{default:l(()=>[e(t,{value:"Dell"}),e(t,{value:"Samsung",disabled:""}),e(t,{value:"Hewlett-Packard"})]),_:1})]),_:1})]),_:1}),e(o,{title:"Favorites",source:`<pf-select>
  <pf-select-group v-for="(groupOptions, group) of options" :key="group" :label="group">
    <pf-select-option
      v-for="option of groupOptions"
      :key="option.value"
      v-model:favorited="option.favorite"
      :value="option.value"
      :description="option.description"
      :disabled="option.disabled" />
  </pf-select-group>
</pf-select>`},{default:l(()=>[e(n,null,{default:l(()=>[(i(!0),b(_,null,k(g,(D,v)=>(i(),r(u,{key:v,label:v},{default:l(()=>[(i(!0),b(_,null,k(D,p=>(i(),r(t,{key:p.value,favorited:p.favorite,"onUpdate:favorited":x=>p.favorite=x,value:p.value,description:p.description,disabled:p.disabled},null,8,["favorited","onUpdate:favorited","value","description","disabled"]))),128))]),_:2},1032,["label"]))),128))]),_:1})]),_:1})]),_:1})}}});export{T as default};
