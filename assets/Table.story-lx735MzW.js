import{f as B,g as S,r as I,h as W,o as u,c as g,w as a,a as t,b as e,t as s,i as T,j as N,F as C,d,e as i}from"./index-DSAMJE0Y.js";const A=d("b",null,"table",-1),M=d("div",{class:"markdown pf-v5-c-content"},[d("p",null,[t("Note: "),d("code",null,"Table"),t(" lives in its own package at "),d("a",{href:"https://www.npmjs.com/package/@vue-patternfly/table"},"@vue-patternfly/table"),t("!")]),d("p",null,[t("The "),d("code",null,"Table"),t(" component takes an explicit and declarative approach, and its implementation closely mirrors that of an HTML table.")]),d("p",null,[t("See "),d("a",{href:"#/"},"common differences from patternfly-react"),t(".")]),d("h2",{class:"pf-v5-c-title"},"Examples")],-1),R=d("br",null,null,-1),P=B({__name:"Table.story",setup(E){const f=S([{selected:!1,name:"one",branches:"two",prs:"three",workspaces:"four",lastCommit:"five"},{selected:!1,name:"one - 2",branches:null,prs:null,workspaces:"four - 2",lastCommit:"five - 2"},{selected:!1,name:"one - 3",branches:"two - 3",prs:"three - 3",workspaces:"four - 3",lastCommit:"five - 3"}]),n={name:"Repositories",branches:"Branches",prs:"Pull requests",workspaces:"Workspaces",lastCommit:"Last commit"},c=I("default"),v=W({get:()=>f.every(b=>b.selected),set(b){for(const p of f)p.selected=b}});return(b,p)=>{const m=i("component-info"),y=i("pf-toggle-group-item"),x=i("pf-toggle-group"),o=i("pf-th"),h=i("pf-tr"),k=i("pf-thead"),r=i("pf-td"),_=i("pf-tbody"),w=i("pf-table"),q=i("story-canvas"),F=i("doc-page");return u(),g(F,{name:"Components/Table.story.vue",title:"Table"},{description:a(()=>[t("A "),A,t(" is used to display large data sets that can be easily laid out in a simple grid with column headers.")]),apidocs:a(()=>[e(m,{src:"packages/table/src/Table.vue",doc:{name:"PfTable",exportName:"default",displayName:"Table",description:"",tags:{},props:[{name:"compact",description:"Reduces spacing and makes the table more compact",required:!1,type:{name:"boolean"}},{name:"noBorders",description:"Do not render borders",required:!1,type:{name:"boolean"}},{name:"gridBreakPoint",description:"Specifies the grid breakpoints",required:!1,type:{name:"union",elements:[{name:'""'},{name:'"grid"'},{name:'"grid-md"'},{name:'"grid-lg"'},{name:'"grid-xl"'},{name:'"grid-2xl"'}]},defaultValue:{func:!1,value:"'grid-md'"}},{name:"stickyHeader",description:"If set to true, the table header sticks to the top of its container",required:!1,type:{name:"boolean"}},{name:"treeTable",description:"Flag indicating table is a tree table",required:!1,type:{name:"boolean"}},{name:"nested",description:"Flag indicating this table is nested within another table",required:!1,type:{name:"boolean"}},{name:"striped",description:"Flag indicating this table should be striped. This property works best for a single <tbody> table. Striping may also be done manually by applying this property to Tbody and Tr components.",required:!1,type:{name:"boolean"}},{name:"expandable",description:"Flag indicating this table contains expandable rows to maintain proper striping",required:!1,type:{name:"boolean"}},{name:"nestedHeaderColumnSpans",description:"Collection of column spans for nested headers. Deprecated: see https://github.com/patternfly/patternfly/issues/4584",required:!1,type:{name:"Array",elements:[{name:"number"}]}},{name:"selectableRowCaptionText",description:"Visible text to add alongside the hidden a11y caption for tables with selectable rows.",required:!1,type:{name:"string"}},{name:"role",description:"A valid WAI-ARIA role to be applied to the table element",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'grid'"}},{name:"horizontalScroll",description:"Flag indicating this table can be scrolled horizontally",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["../../packages/table/src/Table.vue"]}}),e(m,{src:"packages/table/src/Thead.vue",doc:{name:"PfThead",exportName:"default",displayName:"Thead",description:"",tags:{},props:[{name:"noWrap",description:"Won't wrap the table head if true",required:!1,type:{name:"boolean"}},{name:"nestedHeader",description:"Indicates the <thead> contains a nested header",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["../../packages/table/src/Thead.vue"]}}),e(m,{src:"packages/table/src/Tbody.vue",doc:{name:"PfTbody",exportName:"default",displayName:"Tbody",description:"",tags:{},props:[{name:"expanded",description:"Modifies the body to allow for expandable rows",required:!1,type:{name:"boolean"}},{name:"oddStriped",description:"Flag indicating the <tbody> contains oddly striped rows.",required:!1,type:{name:"boolean"}},{name:"evenStriped",description:"Flag indicating the <tbody> contains evenly striped rows.",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["../../packages/table/src/Tbody.vue"]}}),e(m,{src:"packages/table/src/Tr.vue",doc:{name:"PfTr",exportName:"default",displayName:"Tr",description:"",tags:{},props:[{name:"hidden",description:"Flag indicating the Tr is hidden",required:!1,type:{name:"boolean"}},{name:"expanded",description:`Only applicable to Tr within the Tbody: Makes the row expandable and determines if it's expanded or not.
To prevent column widths from responding automatically when expandable rows are toggled, the width prop must also be passed into either the th or td component`,required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"editable",description:"Only applicable to Tr within the Tbody: Whether the row is editable",required:!1,type:{name:"boolean"}},{name:"clickable",description:"Flag which adds hover styles for the clickable table row",required:!1,type:{name:"boolean"}},{name:"selected",description:"Flag indicating the row is selected - adds selected styling",required:!1,type:{name:"boolean"}},{name:"striped",description:"Flag indicating the row is striped",required:!1,type:{name:"boolean"}},{name:"borderRow",description:"Flag indicating the row will act as a border. This is typically used for a table with a nested and sticky header.",required:!1,type:{name:"boolean"}},{name:"selectable",description:"Flag indicating that the row is selectable",required:!1,type:{name:"boolean"}},{name:"resetOffset",description:"Flag indicating the spacing offset of the first cell should be reset",required:!1,type:{name:"boolean"}},{name:"ariaLabel",required:!1,type:{name:"string"}},{name:"onClick",description:"An event handler for the row",required:!1,type:{name:"TSFunctionType"}}],slots:[{name:"default"}],sourceFiles:["../../packages/table/src/Tr.vue"]}}),e(m,{src:"packages/table/src/Th.vue",doc:{name:"PfTh",exportName:"default",displayName:"Th",description:"",tags:{},props:[{name:"component",description:"Element to render",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Component"}]},defaultValue:{func:!1,value:"'th'"}},{name:"textCenter",description:"Modifies cell to center its contents.",required:!1,type:{name:"boolean"}},{name:"modifier",description:"Style modifier to apply",required:!1,type:{name:"union",elements:[{name:'"breakWord"'},{name:'"fitContent"'},{name:'"nowrap"'},{name:'"truncate"'},{name:'"wrap"'}]}},{name:"width",description:"Width percentage modifier",required:!1,type:{name:"union",elements:[{name:"10"},{name:"15"},{name:"20"},{name:"25"},{name:"30"},{name:"35"},{name:"40"},{name:"45"},{name:"50"},{name:"60"},{name:"70"},{name:"80"},{name:"90"},{name:"100"}]}},{name:"dataLabel",description:`The column header the cell corresponds to. Applicable when this component is used as a direct child to <Tr>.
This attribute replaces table header in mobile viewport. It is rendered by ::before pseudo element.`,required:!1,type:{name:"string"}},{name:"selected",description:"Flag to indicate a selected cell/row. Renders a checkbox if true/false.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"scope",description:"Adds scope to the column to associate header cells with data cells",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'col'"}},{name:"sticky",description:"Indicates the header column should be sticky",required:!1,type:{name:"boolean"}},{name:"rightBorder",description:"Adds a border to the right side of the cell",required:!1,type:{name:"boolean"}},{name:"leftBorder",description:"Adds a border to the left side of the cell",required:!1,type:{name:"boolean"}},{name:"stickyMinWidth",description:"Minimum width for a sticky column",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'120px'"}},{name:"stickyLeftOffset",description:"Left offset of a sticky column. This will typically be equal to the combined value set by stickyMinWidth of any sticky columns that precede the current sticky column.",required:!1,type:{name:"string"}},{name:"stickyRightOffset",description:"Right offset of a sticky column. This will typically be equal to the combined value set by stickyMinWidth of any sticky columns that come after the current sticky column.",required:!1,type:{name:"string"}},{name:"subheader",description:"Indicates the <th> is part of a subheader of a nested header",required:!1,type:{name:"boolean"}},{name:"sortable",description:"Indicates that the table can be sorted by this column",required:!1,type:{name:"boolean"}},{name:"sorted",description:"Indicates that the table is sorted by this column",required:!1,type:{name:"boolean"}},{name:"direction",description:"Current sort direction",required:!1,type:{name:"union",elements:[{name:'"asc"'},{name:'"desc"'}]}},{name:"defaultDirection",description:'Defaulting sorting direction. Defaults to "asc".',required:!1,type:{name:"union",elements:[{name:'"asc"'},{name:'"desc"'}]}},{name:"favorites",description:"True to make this a favoritable sorting cell",required:!1,type:{name:"boolean"}}],events:[{name:"sort"},{name:"select",type:{names:["InputEvent"]},description:"Event triggered on selection",properties:[{type:{names:["InputEvent"]},name:"event"},{type:{names:["boolean"]},name:"value"}],tags:[{title:"param",type:{name:"InputEvent"},name:"event"},{title:"param",type:{name:"boolean"},name:"value"}]},{name:"update:selected",type:{names:["boolean"]},properties:[{type:{names:["boolean"]},name:"value"}],tags:[{title:"param",type:{name:"boolean"},name:"value"}]},{name:"update:direction",type:{names:["union"],elements:[{name:'"asc"'},{name:'"desc"'}]},properties:[{type:{names:["'asc' | 'desc'"]},name:"value"}],tags:[{title:"param",type:{name:"'asc' | 'desc'"},name:"value"}]}],slots:[{name:"default"}],sourceFiles:["../../packages/table/src/Th.vue"]}}),e(m,{src:"packages/table/src/Td.vue",doc:{name:"PfTd",exportName:"default",displayName:"Td",description:"",tags:{},props:[{name:"component",description:"Element to render",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Component"}]},defaultValue:{func:!1,value:"'td'"}},{name:"textCenter",description:"Modifies cell to center its contents.",required:!1,type:{name:"boolean"}},{name:"modifier",description:"Style modifier to apply",required:!1,type:{name:"union",elements:[{name:'"breakWord"'},{name:'"fitContent"'},{name:'"nowrap"'},{name:'"truncate"'},{name:'"wrap"'}]}},{name:"width",description:"Width percentage modifier",required:!1,type:{name:"union",elements:[{name:"10"},{name:"15"},{name:"20"},{name:"25"},{name:"30"},{name:"35"},{name:"40"},{name:"45"},{name:"50"},{name:"60"},{name:"70"},{name:"80"},{name:"90"},{name:"100"}]}},{name:"dataLabel",description:`The column header the cell corresponds to.
This attribute replaces table header in mobile viewport. It is rendered by ::before pseudo element.`,required:!1,type:{name:"string"}},{name:"selected",description:"Flag to indicate a selected cell/row. Renders a checkbox if true/false.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"draggable",description:"Turns the cell into the first cell in a draggable row",required:!1,type:{name:"union",elements:[{name:"string"},{name:"boolean"}]}},{name:"noPadding",description:"True to remove padding",required:!1,type:{name:"boolean"}},{name:"actionCell",description:"Applies pf-v5-c-table__action to td",required:!1,type:{name:"boolean"}},{name:"sticky",description:"Indicates the column should be sticky",required:!1,type:{name:"boolean"}},{name:"rightBorder",description:"Adds a border to the right side of the cell",required:!1,type:{name:"boolean"}},{name:"leftBorder",description:"Adds a border to the left side of the cell",required:!1,type:{name:"boolean"}},{name:"stickyMinWidth",description:"Minimum width for a sticky column",required:!1,type:{name:"string"}},{name:"stickyLeftOffset",description:"Left offset of a sticky column. This will typically be equal to the combined value set by stickyMinWidth of any sticky columns that precede the current sticky column.",required:!1,type:{name:"string"}},{name:"stickyRightOffset",description:"Right offset of a sticky column. This will typically be equal to the combined value set by stickyMinWidth of any sticky columns that come after the current sticky column.",required:!1,type:{name:"string"}}],events:[{name:"select",type:{names:["InputEvent"]},description:"Event triggered on selection",properties:[{type:{names:["InputEvent"]},name:"event"},{type:{names:["boolean"]},name:"value"}],tags:[{title:"param",type:{name:"InputEvent"},name:"event"},{title:"param",type:{name:"boolean"},name:"value"}]},{name:"update:selected",type:{names:["boolean"]},properties:[{type:{names:["boolean"]},name:"value"}],tags:[{title:"param",type:{name:"boolean"},name:"value"}]}],slots:[{name:"default"}],sourceFiles:["../../packages/table/src/Td.vue"]}})]),default:a(()=>[M,e(q,{title:"Basic",source:`<pf-toggle-group>
  <pf-toggle-group-item :selected="tableVariant === 'default'" @update:selected="tableVariant = 'default'">Default</pf-toggle-group-item>
  <pf-toggle-group-item :selected="tableVariant === 'compact'" @update:selected="tableVariant = 'compact'">Compact</pf-toggle-group-item>
  <pf-toggle-group-item :selected="tableVariant === 'compactBorderless'" @update:selected="tableVariant = 'compactBorderless'">Compact borderless</pf-toggle-group-item>
</pf-toggle-group>

<br>

<pf-table
  aria-label="Simple table"
  :compact="tableVariant !== 'default'"
  :no-borders="tableVariant === 'compactBorderless'"
>
  
  <pf-thead>
    <pf-tr>
      <pf-th>{{ columnNames.name }}</pf-th>
      <pf-th>{{ columnNames.branches }}</pf-th>
      <pf-th>{{ columnNames.prs }}</pf-th>
      <pf-th>{{ columnNames.workspaces }}</pf-th>
      <pf-th>{{ columnNames.lastCommit }}</pf-th>
    </pf-tr>
  </pf-thead>
  <pf-tbody>
    <pf-tr v-for="repo in repositories" :key="repo.name">
      <pf-td :data-label="columnNames.name">{{ repo.name }}</pf-td>
      <pf-td :data-label="columnNames.branches">{{ repo.branches }}</pf-td>
      <pf-td :data-label="columnNames.prs">{{ repo.prs }}</pf-td>
      <pf-td :data-label="columnNames.workspaces">{{ repo.workspaces }}</pf-td>
      <pf-td :data-label="columnNames.lastCommit">{{ repo.lastCommit }}</pf-td>
    </pf-tr>
  </pf-tbody>
</pf-table>`},{default:a(()=>[e(x,null,{default:a(()=>[e(y,{selected:c.value==="default","onUpdate:selected":p[0]||(p[0]=l=>c.value="default")},{default:a(()=>[t("Default")]),_:1},8,["selected"]),e(y,{selected:c.value==="compact","onUpdate:selected":p[1]||(p[1]=l=>c.value="compact")},{default:a(()=>[t("Compact")]),_:1},8,["selected"]),e(y,{selected:c.value==="compactBorderless","onUpdate:selected":p[2]||(p[2]=l=>c.value="compactBorderless")},{default:a(()=>[t("Compact borderless")]),_:1},8,["selected"])]),_:1}),R,e(w,{"aria-label":"Simple table",compact:c.value!=="default","no-borders":c.value==="compactBorderless"},{default:a(()=>[e(k,null,{default:a(()=>[e(h,null,{default:a(()=>[e(o,null,{default:a(()=>[t(s(n.name),1)]),_:1}),e(o,null,{default:a(()=>[t(s(n.branches),1)]),_:1}),e(o,null,{default:a(()=>[t(s(n.prs),1)]),_:1}),e(o,null,{default:a(()=>[t(s(n.workspaces),1)]),_:1}),e(o,null,{default:a(()=>[t(s(n.lastCommit),1)]),_:1})]),_:1})]),_:1}),e(_,null,{default:a(()=>[(u(!0),T(C,null,N(f,l=>(u(),g(h,{key:l.name},{default:a(()=>[e(r,{"data-label":n.name},{default:a(()=>[t(s(l.name),1)]),_:2},1032,["data-label"]),e(r,{"data-label":n.branches},{default:a(()=>[t(s(l.branches),1)]),_:2},1032,["data-label"]),e(r,{"data-label":n.prs},{default:a(()=>[t(s(l.prs),1)]),_:2},1032,["data-label"]),e(r,{"data-label":n.workspaces},{default:a(()=>[t(s(l.workspaces),1)]),_:2},1032,["data-label"]),e(r,{"data-label":n.lastCommit},{default:a(()=>[t(s(l.lastCommit),1)]),_:2},1032,["data-label"])]),_:2},1024))),128))]),_:1})]),_:1},8,["compact","no-borders"])]),_:1}),e(q,{title:"Selectable with checkbox",source:`<pf-table aria-label="Selectable table with checkbox">
  
  <pf-thead>
    <pf-tr>
      <pf-th v-model:selected="allRowsSelected" />
      <pf-th>{{ columnNames.name }}</pf-th>
      <pf-th>{{ columnNames.branches }}</pf-th>
      <pf-th>{{ columnNames.prs }}</pf-th>
      <pf-th>{{ columnNames.workspaces }}</pf-th>
      <pf-th>{{ columnNames.lastCommit }}</pf-th>
    </pf-tr>
  </pf-thead>
  <pf-tbody>
    <pf-tr v-for="repo in repositories" :key="repo.name">
      <pf-td v-model:selected="repo.selected" />
      <pf-td :data-label="columnNames.name">{{ repo.name }}</pf-td>
      <pf-td :data-label="columnNames.branches">{{ repo.branches }}</pf-td>
      <pf-td :data-label="columnNames.prs">{{ repo.prs }}</pf-td>
      <pf-td :data-label="columnNames.workspaces">{{ repo.workspaces }}</pf-td>
      <pf-td :data-label="columnNames.lastCommit">{{ repo.lastCommit }}</pf-td>
    </pf-tr>
  </pf-tbody>
</pf-table>`},{default:a(()=>[e(w,{"aria-label":"Selectable table with checkbox"},{default:a(()=>[e(k,null,{default:a(()=>[e(h,null,{default:a(()=>[e(o,{selected:v.value,"onUpdate:selected":p[3]||(p[3]=l=>v.value=l)},null,8,["selected"]),e(o,null,{default:a(()=>[t(s(n.name),1)]),_:1}),e(o,null,{default:a(()=>[t(s(n.branches),1)]),_:1}),e(o,null,{default:a(()=>[t(s(n.prs),1)]),_:1}),e(o,null,{default:a(()=>[t(s(n.workspaces),1)]),_:1}),e(o,null,{default:a(()=>[t(s(n.lastCommit),1)]),_:1})]),_:1})]),_:1}),e(_,null,{default:a(()=>[(u(!0),T(C,null,N(f,l=>(u(),g(h,{key:l.name},{default:a(()=>[e(r,{selected:l.selected,"onUpdate:selected":V=>l.selected=V},null,8,["selected","onUpdate:selected"]),e(r,{"data-label":n.name},{default:a(()=>[t(s(l.name),1)]),_:2},1032,["data-label"]),e(r,{"data-label":n.branches},{default:a(()=>[t(s(l.branches),1)]),_:2},1032,["data-label"]),e(r,{"data-label":n.prs},{default:a(()=>[t(s(l.prs),1)]),_:2},1032,["data-label"]),e(r,{"data-label":n.workspaces},{default:a(()=>[t(s(l.workspaces),1)]),_:2},1032,["data-label"]),e(r,{"data-label":n.lastCommit},{default:a(()=>[t(s(l.lastCommit),1)]),_:2},1032,["data-label"])]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1})}}});export{P as default};