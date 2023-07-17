import{e as C,r as x,f as P,a,o as p,c as f,w as l,b as e,g as o,j as h,h as k,i as b,F as _,d as s}from"./index-7fe4494a.js";const w=s("div",{class:"markdown pf-c-content"},[s("p",null,[o("A "),s("strong",null,"select list"),o(" enables users to select one or more items from a list. Use a select list when options are dynamic or variable. "),s("a",{href:"https://www.patternfly.org/v4/components/select/design-guidelines"},"View PatternFly design guidelines")]),s("h2",{class:"pf-c-title"},"Differences from patternfly-react"),s("ul",null,[s("li",null,[o("There is no "),s("code",null,"grouped"),o(" prop since the presence of groups is auto-detected. See "),s("a",{href:"#/"},"common differences from patternfly-react"),o(".")])]),s("h2",{class:"pf-c-title"},"Examples")],-1),T=C({__name:"Select.story",setup(F){const u=x(!1),M=P({Status:[{value:"Running",favorite:!1,description:"This is a description."},{value:"Stopped",favorite:!1},{value:"Down",favorite:!1,disabled:!0},{value:"Degraded",favorite:!1},{value:"Needs maintenance",favorite:!1}],"Vendor names":[{value:"Dell",favorite:!1},{value:"Samsung",favorite:!1},{value:"Hewlett-Packard",favorite:!1,description:"This is a description."}]});return(S,V)=>{const g=a("component-title"),t=a("pf-select-option"),c=a("pf-select"),n=a("story-canvas"),d=a("pf-divider"),r=a("pf-select-group"),m=a("doc-page");return p(),f(m,{title:"Select"},{default:l(()=>[e(g,{name:"pf-select"}),w,e(n,{title:"Single",source:`<pf-select>
  <pf-select-option placeholder disabled>
    Please Choose
  </pf-select-option>
  <pf-select-option value="Mr" ></pf-select-option>
  <pf-select-option value="Miss" ></pf-select-option>
  <pf-select-option value="Mrs" ></pf-select-option>
  <pf-select-option value="Ms" ></pf-select-option>
  <pf-select-option value="Dr" disabled ></pf-select-option>
</pf-select>`},{default:l(()=>[e(c,null,{default:l(()=>[e(t,{placeholder:"",disabled:""},{default:l(()=>[o(" Please Choose ")]),_:1}),e(t,{value:"Mr"}),e(t,{value:"Miss"}),e(t,{value:"Mrs"}),e(t,{value:"Ms"}),e(t,{value:"Dr",disabled:""})]),_:1})]),_:1}),e(n,{title:"Single with description",source:`<pf-select>
  <pf-select-option value="Active" description="This is a description" ></pf-select-option>
  <pf-select-option value="Cancelled" ></pf-select-option>
  <pf-select-option value="Paused" ></pf-select-option>
  <pf-divider v-if="divider" ></pf-divider>
  <pf-select-option value="Warning" ></pf-select-option>
  <pf-select-option value="Restarted" ></pf-select-option>
</pf-select>`},{default:l(()=>[e(c,null,{default:l(()=>[e(t,{value:"Active",description:"This is a description"}),e(t,{value:"Cancelled"}),e(t,{value:"Paused"}),u.value?(p(),f(d,{key:0})):h("",!0),e(t,{value:"Warning"}),e(t,{value:"Restarted"})]),_:1})]),_:1}),e(n,{title:"Grouped single",source:`<pf-select>
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
</pf-select>`},{default:l(()=>[e(c,null,{default:l(()=>[e(r,{label:"Status"},{default:l(()=>[e(t,{value:"Running"}),e(t,{value:"Stopped"}),e(t,{value:"Down"}),e(t,{value:"Degraded"}),e(t,{value:"Needs maintenance"})]),_:1}),u.value?(p(),f(d,{key:0})):h("",!0),e(r,{label:"Vendor names"},{default:l(()=>[e(t,{value:"Dell"}),e(t,{value:"Samsung",disabled:""}),e(t,{value:"Hewlett-Packard"})]),_:1})]),_:1})]),_:1}),e(n,{title:"Checkbox input",source:`<pf-select placeholder="Filter by status" variant="checkbox">
  <pf-select-option placeholder disabled>
    Please Choose
  </pf-select-option>
  <pf-select-option check value="Mr" ></pf-select-option>
  <pf-select-option check value="Miss" ></pf-select-option>
  <pf-select-option check value="Mrs" ></pf-select-option>
  <pf-select-option check value="Ms" ></pf-select-option>
  <pf-select-option check value="Dr" disabled ></pf-select-option>
</pf-select>`},{default:l(()=>[e(c,{placeholder:"Filter by status",variant:"checkbox"},{default:l(()=>[e(t,{placeholder:"",disabled:""},{default:l(()=>[o(" Please Choose ")]),_:1}),e(t,{check:"",value:"Mr"}),e(t,{check:"",value:"Miss"}),e(t,{check:"",value:"Mrs"}),e(t,{check:"",value:"Ms"}),e(t,{check:"",value:"Dr",disabled:""})]),_:1})]),_:1}),e(n,{title:"Checkbox input with counts",source:`<pf-select placeholder="Filter by status" variant="checkbox">
  <pf-select-option disabled>
    Please Choose
  </pf-select-option>
  <pf-select-option check value="Mr" ></pf-select-option>
  <pf-select-option check value="Miss" ></pf-select-option>
  <pf-select-option check value="Mrs" ></pf-select-option>
  <pf-select-option check value="Ms" ></pf-select-option>
  <pf-select-option check value="Dr" disabled ></pf-select-option>
</pf-select>`},{default:l(()=>[e(c,{placeholder:"Filter by status",variant:"checkbox"},{default:l(()=>[e(t,{disabled:""},{default:l(()=>[o(" Please Choose ")]),_:1}),e(t,{check:"",value:"Mr"}),e(t,{check:"",value:"Miss"}),e(t,{check:"",value:"Mrs"}),e(t,{check:"",value:"Ms"}),e(t,{check:"",value:"Dr",disabled:""})]),_:1})]),_:1}),e(n,{title:"Checkbox input no badge",source:`<pf-select placeholder="Filter by status" variant="checkbox" selection-badge-hidden>
  <pf-select-option disabled>
    Please Choose
  </pf-select-option>
  <pf-select-option check value="Mr" ></pf-select-option>
  <pf-select-option check value="Miss" ></pf-select-option>
  <pf-select-option check value="Mrs" ></pf-select-option>
  <pf-select-option check value="Ms" ></pf-select-option>
  <pf-select-option check value="Dr" disabled ></pf-select-option>
</pf-select>`},{default:l(()=>[e(c,{placeholder:"Filter by status",variant:"checkbox","selection-badge-hidden":""},{default:l(()=>[e(t,{disabled:""},{default:l(()=>[o(" Please Choose ")]),_:1}),e(t,{check:"",value:"Mr"}),e(t,{check:"",value:"Miss"}),e(t,{check:"",value:"Mrs"}),e(t,{check:"",value:"Ms"}),e(t,{check:"",value:"Dr",disabled:""})]),_:1})]),_:1}),e(n,{title:"Grouped checkbox input",source:`<pf-select placeholder="Filter by status" variant="checkbox">
  <pf-select-option disabled>
    Please Choose
  </pf-select-option>
  <pf-select-option check value="Mr" ></pf-select-option>
  <pf-select-option check value="Miss" ></pf-select-option>
  <pf-select-option check value="Mrs" ></pf-select-option>
  <pf-select-option check value="Ms" ></pf-select-option>
  <pf-select-option check value="Dr" disabled ></pf-select-option>
</pf-select>`},{default:l(()=>[e(c,{placeholder:"Filter by status",variant:"checkbox"},{default:l(()=>[e(t,{disabled:""},{default:l(()=>[o(" Please Choose ")]),_:1}),e(t,{check:"",value:"Mr"}),e(t,{check:"",value:"Miss"}),e(t,{check:"",value:"Mrs"}),e(t,{check:"",value:"Ms"}),e(t,{check:"",value:"Dr",disabled:""})]),_:1})]),_:1}),e(n,{title:"Grouped single with filtering",source:`<pf-select placeholder="Filter by status" variant="checkbox" inline-filter>
  <pf-select-option disabled>
    Please Choose
  </pf-select-option>
  <pf-select-option check value="Mr" ></pf-select-option>
  <pf-select-option check value="Miss" ></pf-select-option>
  <pf-select-option check value="Mrs" ></pf-select-option>
  <pf-select-option check value="Ms" ></pf-select-option>
  <pf-select-option check value="Dr" disabled ></pf-select-option>
</pf-select>`},{default:l(()=>[e(c,{placeholder:"Filter by status",variant:"checkbox","inline-filter":""},{default:l(()=>[e(t,{disabled:""},{default:l(()=>[o(" Please Choose ")]),_:1}),e(t,{check:"",value:"Mr"}),e(t,{check:"",value:"Miss"}),e(t,{check:"",value:"Mrs"}),e(t,{check:"",value:"Ms"}),e(t,{check:"",value:"Dr",disabled:""})]),_:1})]),_:1}),e(n,{title:"Favorites",source:`<pf-select>
  <pf-select-group v-for="(groupOptions, group) of options" :key="group" :label="group">
    <pf-select-option
      v-for="option of groupOptions"
      :key="option.value"
      v-model:favorite="option.favorite"
      :value="option.value"
      :description="option.description"
      :disabled="option.disabled" />
  </pf-select-group>
</pf-select>`},{default:l(()=>[e(c,null,{default:l(()=>[(p(!0),k(_,null,b(M,(y,v)=>(p(),f(r,{key:v,label:v},{default:l(()=>[(p(!0),k(_,null,b(y,i=>(p(),f(t,{key:i.value,favorite:i.favorite,"onUpdate:favorite":D=>i.favorite=D,value:i.value,description:i.description,disabled:i.disabled},null,8,["favorite","onUpdate:favorite","value","description","disabled"]))),128))]),_:2},1032,["label"]))),128))]),_:1})]),_:1})]),_:1})}}});export{T as default};
