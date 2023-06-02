import{_ as u,a,o as c,c as p,w as t,b as e,d as s,g as r}from"./index-fd9ab4ce.js";const v={},f=s("div",{class:"markdown pf-c-content"},[s("p",null,[r("A "),s("strong",null,"progress"),r(" bar informs users about the completion status of an ongoing process or task. See full "),s("a",{href:"https://www.patternfly.org/v4/components/progress/design-guidelines"},"Design guidelines"),r(" on the official patternfly documentation.")]),s("h2",{class:"pf-c-title"},"Examples")],-1);function d(g,_){const o=a("component-title"),l=a("pf-progress"),i=a("story-canvas"),n=a("doc-page");return c(),p(n,{title:"Progress"},{default:t(()=>[e(o,{name:"pf-progress"}),f,e(i,{title:"Basic",source:'<pf-progress :value="33" title="Title" />'},{default:t(()=>[e(l,{value:33,title:"Title"})]),_:1}),e(i,{title:"Small",source:'<pf-progress :value="33" title="Title" size="sm" />'},{default:t(()=>[e(l,{value:33,title:"Title",size:"sm"})]),_:1}),e(i,{title:"Large",source:'<pf-progress :value="33" title="Title" size="lg" />'},{default:t(()=>[e(l,{value:33,title:"Title",size:"lg"})]),_:1}),e(i,{title:"Outside",source:'<pf-progress :value="33" title="Title" measure-location="outside" />'},{default:t(()=>[e(l,{value:33,title:"Title","measure-location":"outside"})]),_:1}),e(i,{title:"Inside",source:'<pf-progress :value="33" title="Title" measure-location="inside" />'},{default:t(()=>[e(l,{value:33,title:"Title","measure-location":"inside"})]),_:1}),e(i,{title:"Success",source:'<pf-progress :value="33" title="Title" variant="success" />'},{default:t(()=>[e(l,{value:33,title:"Title",variant:"success"})]),_:1}),e(i,{title:"Failure",source:'<pf-progress :value="33" title="Title" variant="danger" />'},{default:t(()=>[e(l,{value:33,title:"Title",variant:"danger"})]),_:1}),e(i,{title:"Warning",source:'<pf-progress :value="33" title="Title" variant="warning" />'},{default:t(()=>[e(l,{value:33,title:"Title",variant:"warning"})]),_:1}),e(i,{title:"Inside success",source:'<pf-progress :value="33" title="Title" variant="success" measure-location="inside" />'},{default:t(()=>[e(l,{value:33,title:"Title",variant:"success","measure-location":"inside"})]),_:1}),e(i,{title:"Outside failure",source:'<pf-progress :value="33" title="Title" variant="danger" measure-location="outside" />'},{default:t(()=>[e(l,{value:33,title:"Title",variant:"danger","measure-location":"outside"})]),_:1}),e(i,{title:"Single line",source:'<pf-progress :value="33" title="Title" measure-location="outside" />'},{default:t(()=>[e(l,{value:33,title:"Title","measure-location":"outside"})]),_:1}),e(i,{title:"Without measure",source:'<pf-progress :value="33" title="Title" measure-location="none" />'},{default:t(()=>[e(l,{value:33,title:"Title","measure-location":"none"})]),_:1}),e(i,{title:"Failure without measure",source:'<pf-progress :value="33" title="Title" variant="danger" measure-location="none" />'},{default:t(()=>[e(l,{value:33,title:"Title",variant:"danger","measure-location":"none"})]),_:1}),e(i,{title:"Finite step",source:'<pf-progress :value="2" title="Title" :max="5" label="2 of 5" value-text="2 of 5" />'},{default:t(()=>[e(l,{value:2,title:"Title",max:5,label:"2 of 5","value-text":"2 of 5"})]),_:1}),e(i,{title:"Progress (step instruction)",source:`<pf-progress
:value="2"
title="Title"
:max="5"
label="Step 2: Copying files"
value-text="Step 2: Copying files" />`},{default:t(()=>[e(l,{value:2,title:"Title",max:5,label:"Step 2: Copying files","value-text":"Step 2: Copying files"})]),_:1}),e(i,{title:"Truncate title",source:`<pf-progress
:value="33"
title="Very very very very very very very very very very very long title which should be truncated if it does not fit onto one line above the progress bar"
title-truncated />`},{default:t(()=>[e(l,{value:33,title:"Very very very very very very very very very very very long title which should be truncated if it does not fit onto one line above the progress bar","title-truncated":""})]),_:1})]),_:1})}const T=u(v,[["render",d]]);export{T as default};
