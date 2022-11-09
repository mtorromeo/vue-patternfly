import{e as h,r as p,a as r,c as v,w as l,o as y,b as a,d as n,g as c}from"./index.cb2ac63d.js";const b=n("div",{class:"markdown pf-c-content"},[n("p",null,[c("A "),n("strong",null,"search input"),c(" is a type of input field that can be user to search, find, or filter. See "),n("a",{href:"https://www.patternfly.org/v4/guidelines/filters"},"filter guidelines"),c(" for more information on using search input as a filter.")]),n("h2",{class:"pf-c-title"},"Examples")],-1),g=n("div",{class:"markdown pf-c-content"},[n("p",null,"The search input component can be used to dynamically build a one to one attribute-value advanced search. Using the attributes prop alongside the advancedSearchDelimiter will expose this functionality, as demonstrated in the following example. The search input component can also be used as a composable component and paired with a Popper or other elements to build a completely custom advanced search form.")],-1),F=h({__name:"SearchInput.story",setup(_){const s=p(""),o=p(""),i=p("username:player firstname:john");return(V,e)=>{const m=r("component-title"),d=r("pf-search-input"),u=r("story-canvas"),f=r("doc-page");return y(),v(f,{title:"Search input"},{default:l(()=>[a(m,{name:"pf-search-input"}),b,a(u,{title:"Basic",source:`<pf-search-input
v-model="filter"
placeholder="Find by name"
@clear="filter = ''" />`},{default:l(()=>[a(d,{modelValue:s.value,"onUpdate:modelValue":e[0]||(e[0]=t=>s.value=t),placeholder:"Find by name",onClear:e[1]||(e[1]=t=>s.value="")},null,8,["modelValue"])]),_:1}),a(u,{title:"Match with result count",source:`<pf-search-input
v-model="filter2"
placeholder="Find by name"
@clear="filter2 = ''"
:results-count="[...filter2.matchAll(/[a-z]/g)].length" />`},{default:l(()=>[a(d,{modelValue:o.value,"onUpdate:modelValue":e[2]||(e[2]=t=>o.value=t),placeholder:"Find by name",onClear:e[3]||(e[3]=t=>o.value=""),"results-count":[...o.value.matchAll(/[a-z]/g)].length},null,8,["modelValue","results-count"])]),_:1}),a(u,{title:"Advanced",source:`<pf-search-input
v-model="filter3"
:attributes="[
  { attr: 'username', display: 'Username' },
  { attr: 'firstname', display: 'First name' }
]"
advanced-search-delimiter=":"
placeholder="Find by name"
@search="void(0)"
@clear="filter3 = ''" />`},{intro:l(()=>[g]),default:l(()=>[a(d,{modelValue:i.value,"onUpdate:modelValue":e[4]||(e[4]=t=>i.value=t),attributes:[{attr:"username",display:"Username"},{attr:"firstname",display:"First name"}],"advanced-search-delimiter":":",placeholder:"Find by name",onSearch:e[5]||(e[5]=t=>{}),onClear:e[6]||(e[6]=t=>i.value="")},null,8,["modelValue"])]),_:1})]),_:1})}}});export{F as default};
