import{e as _,r as s,a as n,c as m,w as r,o as u,b as o}from"./index.4f10c340.js";const x=_({__name:"Pagination.story",setup(d){const t=s(1),p=s(10);return(f,e)=>{const c=n("component-title"),g=n("pf-pagination"),i=n("story-canvas"),l=n("doc-page");return u(),m(l,{title:"Pagination"},{default:r(()=>[o(c,{name:"pf-pagination"}),o(i,{title:"Example",source:`<pf-pagination
v-model:page="page"
v-model:per-page="perPage"
:count="333" />`},{default:r(()=>[o(g,{page:t.value,"onUpdate:page":e[0]||(e[0]=a=>t.value=a),"per-page":p.value,"onUpdate:per-page":e[1]||(e[1]=a=>p.value=a),count:333},null,8,["page","per-page"])]),_:1})]),_:1})}}});export{x as default};
