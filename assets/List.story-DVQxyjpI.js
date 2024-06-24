import{m as f,f as _,o as h,c as y,w as e,a as i,b as t,u as a,d as c,e as o}from"./index-DSAMJE0Y.js";const v={name:"BookOpenIcon",height:512,width:576,svgPath:"M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5V78.6c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8V454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5V83.8c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11V456c0 11.4 11.7 19.3 22.4 15.5z",yOffset:0,xOffset:0},d=f(v),g={name:"KeyIcon",height:1024,width:1024,svgPath:"M802,320 C748.980664,320 706,277.019336 706,224 C706,170.980664 748.980664,128 802,128 C855.019336,128 898,170.980664 898,224 C898,277.019336 855.019336,320 802,320 M704,0 C527.3,0 384,143.3 384,320 C383.937788,357.490503 390.505571,394.696657 403.4,429.9 L0,824.1 L0,1024 L192,1024 L192,896 L320,896 L320,768 L448,768 L597,622 C596.906403,621.881923 596.838304,621.745723 596.8,621.6 C631.220126,633.811107 667.47802,640.034477 704,640 C880.7,640 1024,496.7 1024,320 C1024,143.3 880.7,0 704,0",yOffset:0,xOffset:0},m=f(g),C={name:"DesktopIcon",height:512,width:576,svgPath:"M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64H240l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H346.7L336 416H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM512 64V288H64V64H512z",yOffset:0,xOffset:0},r=f(C),L=c("b",null,"list",-1),I=c("div",{class:"markdown pf-v5-c-content"},[c("h2",{class:"pf-v5-c-title"},"Examples")],-1),V=_({__name:"List.story",setup(S){return(b,k)=>{const p=o("component-info"),n=o("pf-list-item"),l=o("pf-list"),s=o("story-canvas"),u=o("doc-page");return h(),y(u,{name:"Components/List.story.vue",title:"List"},{description:e(()=>[i("A "),L,i(" component embeds a formatted list (bulleted or numbered list) into page content.")]),apidocs:e(()=>[t(p,{src:"packages/core/src/components/List/List.vue",doc:{name:"PfList",exportName:"default",displayName:"List",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"variant",description:"Adds list variant styles",required:!1,type:{name:'"inline"'}},{name:"bordered",description:"Modifies the list to add borders between items",required:!1,type:{name:"boolean"}},{name:"plain",description:"Modifies the list to include plain styling",required:!1,type:{name:"boolean"}},{name:"iconSize",description:"Modifies the size of the icons in the list",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"large"'}]},defaultValue:{func:!1,value:"'default'"}},{name:"type",description:"Sets the way items are numbered if variant is set to ordered",required:!1,type:{name:"union",elements:[{name:'"1"'},{name:'"a"'},{name:'"A"'},{name:'"i"'},{name:'"I"'}]},defaultValue:{func:!1,value:"'1'"}},{name:"component",required:!1,type:{name:"union",elements:[{name:'"ol"'},{name:'"ul"'}]},defaultValue:{func:!1,value:"'ul'"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/List/List.vue"]}}),t(p,{src:"packages/core/src/components/List/ListItem.vue",doc:{name:"PfListItem",exportName:"default",displayName:"ListItem",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}}],slots:[{name:"icon"},{name:"default"}],sourceFiles:["../../packages/core/src/components/List/ListItem.vue"]}})]),default:e(()=>[I,t(s,{title:"Basic",source:`<pf-list>
  <pf-list-item>First</pf-list-item>
  <pf-list-item>Second</pf-list-item>
  <pf-list-item>Third</pf-list-item>
</pf-list>`},{default:e(()=>[t(l,null,{default:e(()=>[t(n,null,{default:e(()=>[i("First")]),_:1}),t(n,null,{default:e(()=>[i("Second")]),_:1}),t(n,null,{default:e(()=>[i("Third")]),_:1})]),_:1})]),_:1}),t(s,{title:"Inline",source:`<pf-list variant="inline">
  <pf-list-item>First</pf-list-item>
  <pf-list-item>Second</pf-list-item>
  <pf-list-item>Third</pf-list-item>
</pf-list>`},{default:e(()=>[t(l,{variant:"inline"},{default:e(()=>[t(n,null,{default:e(()=>[i("First")]),_:1}),t(n,null,{default:e(()=>[i("Second")]),_:1}),t(n,null,{default:e(()=>[i("Third")]),_:1})]),_:1})]),_:1}),t(s,{title:"Ordered",source:`<pf-list component="ol">
  <pf-list-item>First</pf-list-item>
  <pf-list-item>Second</pf-list-item>
  <pf-list-item>Third</pf-list-item>
</pf-list>`},{default:e(()=>[t(l,{component:"ol"},{default:e(()=>[t(n,null,{default:e(()=>[i("First")]),_:1}),t(n,null,{default:e(()=>[i("Second")]),_:1}),t(n,null,{default:e(()=>[i("Third")]),_:1})]),_:1})]),_:1}),t(s,{title:"Plain",source:`<pf-list plain>
  <pf-list-item>First</pf-list-item>
  <pf-list-item>Second</pf-list-item>
  <pf-list-item>Third</pf-list-item>
</pf-list>`},{default:e(()=>[t(l,{plain:""},{default:e(()=>[t(n,null,{default:e(()=>[i("First")]),_:1}),t(n,null,{default:e(()=>[i("Second")]),_:1}),t(n,null,{default:e(()=>[i("Third")]),_:1})]),_:1})]),_:1}),t(s,{title:"With horizontal rules",source:`<pf-list plain bordered>
  <pf-list-item>First</pf-list-item>
  <pf-list-item>Second</pf-list-item>
  <pf-list-item>Third</pf-list-item>
</pf-list>`},{default:e(()=>[t(l,{plain:"",bordered:""},{default:e(()=>[t(n,null,{default:e(()=>[i("First")]),_:1}),t(n,null,{default:e(()=>[i("Second")]),_:1}),t(n,null,{default:e(()=>[i("Third")]),_:1})]),_:1})]),_:1}),t(s,{title:"With icons",source:`<pf-list plain>
  <pf-list-item><template #icon><book-open-icon /></template> First</pf-list-item>
  <pf-list-item><template #icon><key-icon /></template> Second</pf-list-item>
  <pf-list-item><template #icon><desktop-icon /></template> Third</pf-list-item>
</pf-list>`},{default:e(()=>[t(l,{plain:""},{default:e(()=>[t(n,null,{icon:e(()=>[t(a(d))]),default:e(()=>[i(" First")]),_:1}),t(n,null,{icon:e(()=>[t(a(m))]),default:e(()=>[i(" Second")]),_:1}),t(n,null,{icon:e(()=>[t(a(r))]),default:e(()=>[i(" Third")]),_:1})]),_:1})]),_:1}),t(s,{title:"With large icons",source:`<pf-list plain icon-size="large">
  <pf-list-item><template #icon><book-open-icon /></template> First</pf-list-item>
  <pf-list-item><template #icon><key-icon /></template> Second</pf-list-item>
  <pf-list-item><template #icon><desktop-icon /></template> Third</pf-list-item>
</pf-list>`},{default:e(()=>[t(l,{plain:"","icon-size":"large"},{default:e(()=>[t(n,null,{icon:e(()=>[t(a(d))]),default:e(()=>[i(" First")]),_:1}),t(n,null,{icon:e(()=>[t(a(m))]),default:e(()=>[i(" Second")]),_:1}),t(n,null,{icon:e(()=>[t(a(r))]),default:e(()=>[i(" Third")]),_:1})]),_:1})]),_:1})]),_:1})}}});export{V as default};