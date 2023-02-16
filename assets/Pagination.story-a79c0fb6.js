import{e as _,r as s,a as n,o as m,c as u,w as r,b as o}from"./index-f48eb9bb.js";const P=_({__name:"Pagination.story",setup(d){const t=s(1),p=s(10);return(f,e)=>{const c=n("component-title"),g=n("pf-pagination"),i=n("story-canvas"),l=n("doc-page");return m(),u(l,{title:"Pagination"},{default:r(()=>[o(c,{name:"pf-pagination"}),o(i,{title:"Example",source:`<pf-pagination
v-model:page="page"
v-model:per-page="perPage"
:count="333" />`},{default:r(()=>[o(g,{page:t.value,"onUpdate:page":e[0]||(e[0]=a=>t.value=a),"per-page":p.value,"onUpdate:perPage":e[1]||(e[1]=a=>p.value=a),count:333},null,8,["page","per-page"])]),_:1})]),_:1})}}});export{P as default};
