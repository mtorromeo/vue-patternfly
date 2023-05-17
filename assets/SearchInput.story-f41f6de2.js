import{e as h,r as i,a as d,o as b,c as y,w as n,b as a,d as l,g as c}from"./index-1db6e39c.js";const g=l("div",{class:"markdown pf-c-content"},[l("p",null,[c("A "),l("strong",null,"search input"),c(" is a type of input field that can be user to search, find, or filter. See "),l("a",{href:"https://www.patternfly.org/v4/guidelines/filters"},"filter guidelines"),c(" for more information on using search input as a filter.")]),l("h2",{class:"pf-c-title"},"Examples")],-1),V=l("div",{class:"markdown pf-c-content"},[l("p",null,"The search input component can be used to dynamically build a one to one attribute-value advanced search. Using the attributes prop alongside the advancedSearchDelimiter will expose this functionality, as demonstrated in the following example. The search input component can also be used as a composable component and paired with a Popper or other elements to build a completely custom advanced search form.")],-1),F=h({__name:"SearchInput.story",setup(_){const u=i(""),o=i(""),p=i(""),m=i("username:player firstname:john");return(w,e)=>{const f=d("component-title"),r=d("pf-search-input"),s=d("story-canvas"),v=d("doc-page");return b(),y(v,{title:"Search input"},{default:n(()=>[a(f,{name:"pf-search-input"}),g,a(s,{title:"Basic",source:`<pf-search-input
v-model="filter"
placeholder="Find by name"
@clear="filter = ''" />`},{default:n(()=>[a(r,{modelValue:u.value,"onUpdate:modelValue":e[0]||(e[0]=t=>u.value=t),placeholder:"Find by name",onClear:e[1]||(e[1]=t=>u.value="")},null,8,["modelValue"])]),_:1}),a(s,{title:"Match with result count",source:`<pf-search-input
v-model="filter2"
placeholder="Find by name"
@clear="filter2 = ''"
:results-count="[...filter2.matchAll(/[a-z]/g)].length" />`},{default:n(()=>[a(r,{modelValue:o.value,"onUpdate:modelValue":e[2]||(e[2]=t=>o.value=t),placeholder:"Find by name",onClear:e[3]||(e[3]=t=>o.value=""),"results-count":[...o.value.matchAll(/[a-z]/g)].length},null,8,["modelValue","results-count"])]),_:1}),a(s,{title:"With expandable button",source:`<pf-search-input
v-model="filter3"
expandable
@clear="filter3 = ''" />`},{default:n(()=>[a(r,{modelValue:p.value,"onUpdate:modelValue":e[4]||(e[4]=t=>p.value=t),expandable:"",onClear:e[5]||(e[5]=t=>p.value="")},null,8,["modelValue"])]),_:1}),a(s,{title:"Advanced",source:`<pf-search-input
v-model="filter4"
:attributes="[
  { attr: 'username', display: 'Username' },
  { attr: 'firstname', display: 'First name' }
]"
advanced-search-delimiter=":"
placeholder="Find by name"
@search="void(0)"
@clear="filter4 = ''" />`},{intro:n(()=>[V]),default:n(()=>[a(r,{modelValue:m.value,"onUpdate:modelValue":e[6]||(e[6]=t=>m.value=t),attributes:[{attr:"username",display:"Username"},{attr:"firstname",display:"First name"}],"advanced-search-delimiter":":",placeholder:"Find by name",onSearch:e[7]||(e[7]=t=>{}),onClear:e[8]||(e[8]=t=>m.value="")},null,8,["modelValue"])]),_:1})]),_:1})}}});export{F as default};
