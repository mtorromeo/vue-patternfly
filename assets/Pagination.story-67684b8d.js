import{e as m,r as i,a as p,o as d,c,w as g,b as a}from"./index-a471940d.js";const P=m({__name:"Pagination.story",setup(v){const t=i(1),o=i(10);return(_,e)=>{const r=p("component-title"),l=p("pf-pagination"),s=p("story-canvas"),u=p("doc-page");return d(),c(u,{title:"Pagination"},{default:g(()=>[a(r,{name:"pf-pagination"}),a(s,{title:"Example",source:`<pf-pagination
v-model:page="page"
v-model:per-page="perPage"
:count="333" />`},{default:g(()=>[a(l,{page:t.value,"onUpdate:page":e[0]||(e[0]=n=>t.value=n),"per-page":o.value,"onUpdate:perPage":e[1]||(e[1]=n=>o.value=n),count:333},null,8,["page","per-page"])]),_:1}),a(s,{title:"Inset",source:`<pf-pagination
v-model:page="page"
v-model:per-page="perPage"
:count="333"
inset="none"
inset-md="md"
inset-lg="2xl" />`},{default:g(()=>[a(l,{page:t.value,"onUpdate:page":e[2]||(e[2]=n=>t.value=n),"per-page":o.value,"onUpdate:perPage":e[3]||(e[3]=n=>o.value=n),count:333,inset:"none","inset-md":"md","inset-lg":"2xl"},null,8,["page","per-page"])]),_:1})]),_:1})}}});export{P as default};
