import{g as f,r as u,a as r,c as g,o as c,w as t,b as n,e as p,d as y}from"./index-C7IOHyGY.js";const q=f({__name:"Pagination.story",setup(b){const i=u(1),s=u(10);return(v,e)=>{const l=r("component-info"),o=r("pf-pagination"),m=r("story-canvas"),d=r("doc-page");return c(),g(d,{name:"Components/Pagination.story.vue",title:"Pagination"},{description:t(()=>e[4]||(e[4]=[p("A "),y("b",null,"pagination",-1),p(" component gives users more navigational capability on pages with content views.")])),apidocs:t(()=>[n(l,{src:"packages/core/src/components/Pagination/Navigation.vue",doc:{name:"PfNavigation",exportName:"default",displayName:"Navigation",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"disabled",description:"Flag indicating if the pagination is disabled.",required:!1,type:{name:"boolean"}},{name:"compact",description:"Flag indicating if the pagination is compact.",required:!1,type:{name:"boolean"}},{name:"page",description:"The number of the current page.",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"lastPage",description:"The number of the last page.",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"firstPage",description:"The number of first page where pagination starts.",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"perPage",description:"Number of items per page.",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"10"}},{name:"pagesTitle",description:"The title of a page displayed beside the page number.",required:!1,type:{name:"string"}},{name:"pagesTitlePlural",description:"The title of a page displayed beside the page number (the plural form).",required:!1,type:{name:"string"}},{name:"toLastPageAriaLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Go to last page'"}},{name:"toNextPageAriaLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Go to next page'"}},{name:"toFirstPageAriaLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Go to first page'"}},{name:"toPreviousPageAriaLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Go to previous page'"}},{name:"currPageAriaLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Current page'"}},{name:"paginationAriaLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Pagination'"}}],events:[{name:"first-click",type:{names:["number"]}},{name:"previous-click",type:{names:["number"]}},{name:"next-click",type:{names:["number"]}},{name:"last-click",type:{names:["number"]}},{name:"set-page",type:{names:["number"]}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Pagination/Navigation.vue"]}}),n(l,{src:"packages/core/src/components/Pagination/Pagination.vue",doc:{name:"PfPagination",exportName:"default",displayName:"Pagination",description:"",tags:{},props:[{name:"insetXl2",required:!1,type:{name:"union",elements:[{name:'"none"'},{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'},{name:'"2xl"'},{name:'"3xl"'}]}},{name:"insetXl",required:!1,type:{name:"union",elements:[{name:'"none"'},{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'},{name:'"2xl"'},{name:'"3xl"'}]}},{name:"insetLg",required:!1,type:{name:"union",elements:[{name:'"none"'},{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'},{name:'"2xl"'},{name:'"3xl"'}]}},{name:"insetMd",required:!1,type:{name:"union",elements:[{name:'"none"'},{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'},{name:'"2xl"'},{name:'"3xl"'}]}},{name:"insetSm",required:!1,type:{name:"union",elements:[{name:'"none"'},{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'},{name:'"2xl"'},{name:'"3xl"'}]}},{name:"inset",required:!1,type:{name:"union",elements:[{name:'"none"'},{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'},{name:'"2xl"'},{name:'"3xl"'}]}},{name:"widgetId",description:"ID to ideintify widget on page.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'options-menu'"}},{name:"perPageOptions",description:"Select from options to number of items per page.",required:!1,type:{name:"Array",elements:[{name:"PerPageOption"}]},defaultValue:{func:!1,value:"() => [...defaultPerPageOptions]"}},{name:"perPage",description:"Number of items per page.",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"defaultPerPageOptions[0].value"}},{name:"page",description:"Current page number.",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"dropUp",description:'Flag indicating that the dropdown context menu should "drop" upwards.',required:!1,type:{name:"boolean"}},{name:"disabled",description:"Flag indicating if pagination is disabled",required:!1,type:{name:"boolean"}},{name:"lastFullPageShown",description:"Indicate whether to show last full page of results when user selects perPage value greater than remaining rows",required:!1,type:{name:"boolean"}},{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"variant",description:"Position where pagination is rendered.",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]}},{name:"static",description:"Flag indicating if pagination should not be sticky on mobile",required:!1,type:{name:"boolean"}},{name:"compact",description:"Flag indicating if pagination is compact",required:!1,type:{name:"boolean"}},{name:"sticky",description:"Flag indicating if pagination should stick to its position (based on variant)",required:!1,type:{name:"boolean"}},{name:"count",description:"Total number of items.",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"firstPage",description:"Page we start at.",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"offset",description:"Start index of rows to display, used in place of providing page",required:!1,type:{name:"number"}},{name:"itemsStart",description:"First index of items on current page.",required:!1,type:{name:"number"}},{name:"itemsEnd",description:"Last index of items on current page.",required:!1,type:{name:"number"}},{name:"titleItems",description:"The type or title of the items being paginated.",required:!1,type:{name:"string"}},{name:"titlePage",description:"The title of a page displayed beside the page number.",required:!1,type:{name:"string"}},{name:"titlePages",description:"The title of a page displayed beside the page number (plural form)",required:!1,type:{name:"string"}},{name:"titleItemsPerPage",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Items per page'"}},{name:"titlePerPageSuffix",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'per page'"}},{name:"toFirstPageAriaLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Go to first page'"}},{name:"toPreviousPageAriaLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Go to previous page'"}},{name:"toLastPageAriaLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Go to last page'"}},{name:"toNextPageAriaLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Go to next page'"}},{name:"titleOptionsToggle",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"currPageAriaLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Current page'"}},{name:"paginationAriaLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Pagination'"}}],events:[{name:"update:page",type:{names:["number"]}},{name:"update:perPage",type:{names:["number"]}},{name:"first-click",type:{names:["number"]}},{name:"previous-click",type:{names:["number"]}},{name:"next-click",type:{names:["number"]}},{name:"last-click",type:{names:["number"]}}],slots:[{name:"total",scoped:!0,bindings:[{name:"first-index",title:"binding"},{name:"last-index",title:"binding"},{name:"count",title:"binding"},{name:"title-items",title:"binding"}]},{name:"default"}],sourceFiles:["../../packages/core/src/components/Pagination/Pagination.vue"]}}),n(l,{src:"packages/core/src/components/Pagination/PaginationOptionsMenu.vue"})]),default:t(()=>[n(m,{title:"Example",source:`<pf-pagination
v-model:page="page"
v-model:per-page="perPage"
:count="333" />`},{default:t(()=>[n(o,{page:i.value,"onUpdate:page":e[0]||(e[0]=a=>i.value=a),"per-page":s.value,"onUpdate:perPage":e[1]||(e[1]=a=>s.value=a),count:333},null,8,["page","per-page"])]),_:1}),n(m,{title:"Inset",source:`<pf-pagination
v-model:page="page"
v-model:per-page="perPage"
:count="333"
inset="none"
inset-md="md"
inset-lg="2xl" />`},{default:t(()=>[n(o,{page:i.value,"onUpdate:page":e[2]||(e[2]=a=>i.value=a),"per-page":s.value,"onUpdate:perPage":e[3]||(e[3]=a=>s.value=a),count:333,inset:"none","inset-md":"md","inset-lg":"2xl"},null,8,["page","per-page"])]),_:1})]),_:1})}}});export{q as default};
