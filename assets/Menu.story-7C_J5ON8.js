import{m as I,f as V,g as A,a as u,o as g,c as M,w as n,d as e,b as t,q,u as m,i as F,j as L,F as w,B as G,e as a}from"./index-GvDS6dA2.js";import{C as b}from"./code-branch-icon--FtHQWZZ.js";import{B as S}from"./bell-icon-8lyrOzQG.js";const H={name:"LayerGroupIcon",height:512,width:576,svgPath:"M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z",yOffset:0,xOffset:0},O=I(H),z=O,E={name:"CubeIcon",height:512,width:512,svgPath:"M234.5 5.7c13.9-5 29.1-5 43.1 0l192 68.6C495 83.4 512 107.5 512 134.6V377.4c0 27-17 51.2-42.5 60.3l-192 68.6c-13.9 5-29.1 5-43.1 0l-192-68.6C17 428.6 0 404.5 0 377.4V134.6c0-27 17-51.2 42.5-60.3l192-68.6zM256 66L82.3 128 256 190l173.7-62L256 66zm32 368.6l160-57.1v-188L288 246.6v188z",yOffset:0,xOffset:0},W=I(E),Y=W,R={name:"ClipboardIcon",height:512,width:384,svgPath:"M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM112 192H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z",yOffset:0,xOffset:0},$=I(R),U=$,j=a("div",{class:"markdown pf-v5-c-content"},[a("p",null,[t("A "),a("strong",null,"menu"),t(" is a list of options or actions that users can choose from. It can be used in a variety of contexts whenever the user needs to choose between multiple values, options, or actions. A menu can be opened in a "),a("a",{href:"#/stories/components/dropdown"},"dropdown"),t(" or "),a("a",{href:"#/stories/components/select"},"select"),t(" list, or it can be revealed by right clicking on a specific region within a page.")])],-1),K=a("div",{class:"markdown pf-v5-c-content"},[a("h2",{class:"pf-v5-c-title"},"Differences from patternfly-react"),a("ul",null,[a("li",null,[t("The "),a("code",null,"pf-menu-content"),t(", "),a("code",null,"pf-menu-list"),t(" and "),a("code",null,"pf-menu-input"),t(" components are optional.")])]),a("p",null,[t("See "),a("a",{href:"#/"},"common differences from patternfly-react"),t(".")]),a("h2",{class:"pf-v5-c-title"},"Examples")],-1),ee=V({__name:"Menu.story",setup(J){const r=A(["item3","item4"]),D=A({Status:[{value:"Running",favorite:!1,description:"This is a description."},{value:"Stopped",favorite:!1},{value:"Down",favorite:!1,disabled:!0},{value:"Degraded",favorite:!1},{value:"Needs maintenance",favorite:!1}],"Vendor names":[{value:"Dell",favorite:!1},{value:"Samsung",favorite:!0},{value:"Hewlett-Packard",favorite:!0,description:"This is a description."}]});function N(k){const d=r.indexOf(k);d<0?r.push(k):r.splice(d,1)}return(k,d)=>{const c=u("component-info"),i=u("pf-menu-item"),s=u("pf-menu-list"),p=u("pf-menu-content"),l=u("pf-menu"),o=u("story-canvas"),y=u("pf-divider"),h=u("pf-menu-group"),C=u("pf-text-input"),T=u("pf-menu-input"),v=u("pf-menu-item-action"),B=u("doc-page");return g(),M(B,{title:"Menu"},{description:n(()=>[j]),apidocs:n(()=>[e(c,{src:"packages/core/src/components/Menu/DrilldownMenu.vue",doc:{name:"PfDrilldownMenu",exportName:"default",displayName:"DrilldownMenu",description:"",tags:{},props:[{name:"menuDrilledIn",description:"Flag indicating whether the menu is drilled in",required:!1,type:{name:"boolean"}},{name:"onHeight",description:"Optional callback to get the height of the sub menu",required:!1,type:{name:"TSFunctionType"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Menu/DrilldownMenu.vue"]}},null,8,["doc"]),e(c,{src:"packages/core/src/components/Menu/Menu.vue",doc:{name:"PfMenu",exportName:"default",displayName:"Menu",description:"",tags:{},expose:[{name:"el"}],props:[{name:"selected",description:"Single itemId for single select menus, or array of itemIds for multi select. You can also specify isSelected on the MenuItem.",required:!1,type:{name:"union",elements:[{name:"MenuItemId"},{name:"Array",elements:[{name:"MenuItemId"}]},{name:"null"}]}},{name:"containsFlyout",tags:{beta:[{description:"Indicates if menu contains a flyout menu",title:"beta"}]},required:!1,type:{name:"boolean"}},{name:"navFlyout",tags:{beta:[{description:"Indicating that the menu should have nav flyout styling",title:"beta"}]},required:!1,type:{name:"boolean"}},{name:"menuDrilledIn",tags:{beta:[{description:"Indicates if a menu is drilled into",title:"beta"}]},required:!1,type:{name:"boolean"}},{name:"activeItemId",tags:{beta:[{description:"itemId of the currently active item. You can also specify isActive on the MenuItem.",title:"beta"}]},required:!1,type:{name:"MenuItemId"}},{name:"rootMenu",description:"Internal flag indicating if the Menu is the root of a menu tree",required:!1,type:{name:"boolean"}},{name:"plain",description:"Indicates if the menu should be without the outer box-shadow",required:!1,type:{name:"boolean"}},{name:"scrollable",description:"Indicates if the menu should be srollable",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"union",elements:[{name:"number"},{name:"string"}]}},{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"onActionClick",description:"Callback called when an MenuItems's action button is clicked. You can also specify it within a MenuItemAction.",required:!1,type:{name:"TSFunctionType"}},{name:"favoritesLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Favorites'"}}],events:[{name:"search-input-change",type:{names:["Event"]},description:"A callback for when the input value changes."},{name:"select",type:{names:["Event"]},description:"Callback for updating when item selection changes. You can also specify onClick on the MenuItem."},{name:"update:selected",type:{names:["union"],elements:[{name:"MenuItemId"},{name:"Array",elements:[{name:"MenuItemId"}]},{name:"null"}]}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Menu/Menu.vue"]}},null,8,["doc"]),e(c,{src:"packages/core/src/components/Menu/MenuBreadcrumb.vue",doc:{name:"PfMenuBreadcrumb",exportName:"default",displayName:"MenuBreadcrumb",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Menu/MenuBreadcrumb.vue"]}},null,8,["doc"]),e(c,{src:"packages/core/src/components/Menu/MenuContent.vue",doc:{name:"PfMenuContent",exportName:"default",displayName:"MenuContent",description:"",tags:{},props:[{name:"menuHeight",description:"Height of the menu content",required:!1,type:{name:"string"}},{name:"maxMenuHeight",description:"Maximum height of menu content",required:!1,type:{name:"string"}},{name:"onHeight",description:"Callback to return the height of the menu content",required:!1,type:{name:"TSFunctionType"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Menu/MenuContent.vue"]}},null,8,["doc"]),e(c,{src:"packages/core/src/components/Menu/MenuFooter.vue",doc:{name:"PfMenuFooter",exportName:"default",displayName:"MenuFooter",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Menu/MenuFooter.vue"]}},null,8,["doc"]),e(c,{src:"packages/core/src/components/Menu/MenuGroup.vue",doc:{name:"PfMenuGroup",exportName:"default",displayName:"MenuGroup",description:"",tags:{},props:[{name:"label",description:"Group label",required:!1,type:{name:"string"}},{name:"titleId",description:"ID for title label",required:!1,type:{name:"string"}},{name:"labelHeadingLevel",description:"Group label heading level. Default is h1.",required:!1,type:{name:"union",elements:[{name:'"h1"'},{name:'"h2"'},{name:'"h3"'},{name:'"h4"'},{name:'"h5"'},{name:'"h6"'}]},defaultValue:{func:!1,value:"'h1'"}}],slots:[{name:"label"},{name:"default"}],sourceFiles:["../../packages/core/src/components/Menu/MenuGroup.vue"]}},null,8,["doc"]),e(c,{src:"packages/core/src/components/Menu/MenuInput.vue",doc:{name:"PfMenuInput",exportName:"default",displayName:"MenuInput",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Menu/MenuInput.vue"]}},null,8,["doc"]),e(c,{src:"packages/core/src/components/Menu/MenuItem.vue",doc:{name:"PfMenuItem",exportName:"default",displayName:"MenuItem",description:"",tags:{},props:[{name:"name",required:!1,type:{name:"string"}},{name:"value",required:!1,type:{name:"string"}},{name:"to",description:"Target navigation link",required:!1,type:{name:"string"}},{name:"check",tags:{beta:[{description:"Flag indicating the item has a checkbox",title:"beta"}]},required:!1,type:{name:"boolean"}},{name:"checkName",tags:{beta:[{description:"Name of the checkbox",title:"beta"}]},required:!1,type:{name:"string"}},{name:"active",description:"Flag indicating whether the item is active",required:!1,type:{name:"boolean"}},{name:"favorited",description:"Flag indicating if the item is favorited",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"loadButton",description:"Flag indicating if the item causes a load",required:!1,type:{name:"boolean"}},{name:"loading",description:"Flag indicating a loading state",required:!1,type:{name:"boolean"}},{name:"component",description:"Component used to render the menu item",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'button'"}},{name:"disabled",description:"Render item as disabled option",required:!1,type:{name:"boolean"}},{name:"description",description:"Description of the menu item",required:!1,type:{name:"string"}},{name:"externalLink",description:"Render external link icon",required:!1,type:{name:"boolean"}},{name:"selected",description:"Flag indicating if the option is selected",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"focused",description:"Flag indicating the item is focused",required:!1,type:{name:"boolean"}},{name:"danger",description:"Flag indicating the item is in danger state",required:!1,type:{name:"boolean"}},{name:"direction",tags:{beta:[{description:"Sub menu direction",title:"beta"}]},required:!1,type:{name:"union",elements:[{name:'"down"'},{name:'"up"'}]}},{name:"onPath",tags:{beta:[{description:"True if item is on current selection path",title:"beta"}]},required:!1,type:{name:"boolean"}}],events:[{name:"update:favorited",type:{names:["boolean"]}},{name:"click",type:{names:["Event"]},description:"Callback for item click"},{name:"show-flyout",type:{names:["Event"]},tags:[{title:"beta",content:"Callback function when mouse leaves trigger"}]}],slots:[{name:"icon"},{name:"default"},{name:"description"},{name:"flyoutMenu"},{name:"actions"}],sourceFiles:["../../packages/core/src/components/Menu/MenuItem.vue"]}},null,8,["doc"]),e(c,{src:"packages/core/src/components/Menu/MenuItemAction.vue",doc:{name:"PfMenuItemAction",exportName:"default",displayName:"MenuItemAction",description:"",tags:{},props:[{name:"icon",description:"The action icon to use",required:!1,type:{name:'"favorites"'}},{name:"ariaLabel",description:"Accessibility label",required:!1,type:{name:"string"}},{name:"favorited",description:"Flag indicating if the item is favorited",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"disabled",description:"Disables action, can also be specified on the MenuItem instead",required:!1,type:{name:"boolean"}},{name:"actionId",description:"Identifies the action item in the onActionClick on the Menu",required:!1,type:{name:"any"}}],events:[{name:"click",type:{names:["Event"]},description:"Callback on action click, can also specify onActionClick on the Menu instead"}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Menu/MenuItemAction.vue"]}},null,8,["doc"]),e(c,{src:"packages/core/src/components/Menu/MenuList.vue",doc:{name:"PfMenuList",exportName:"default",displayName:"MenuList",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Menu/MenuList.vue"]}},null,8,["doc"])]),default:n(()=>[K,e(o,{title:"Basic",source:`<pf-menu>
  <pf-menu-content>
    <pf-menu-list>
      <pf-menu-item>Action</pf-menu-item>
      <pf-menu-item to="#default-link2" @click.prevent>Link</pf-menu-item>
      <pf-menu-item disabled>Disabled action</pf-menu-item>
      <pf-menu-item disabled to="#default-link4">Disabled link</pf-menu-item>
    </pf-menu-list>
  </pf-menu-content>
</pf-menu>`},{default:n(()=>[e(l,null,{default:n(()=>[e(p,null,{default:n(()=>[e(s,null,{default:n(()=>[e(i,null,{default:n(()=>[t("Action")]),_:1}),e(i,{to:"#default-link2",onClick:d[0]||(d[0]=q(()=>{},["prevent"]))},{default:n(()=>[t("Link")]),_:1}),e(i,{disabled:""},{default:n(()=>[t("Disabled action")]),_:1}),e(i,{disabled:"",to:"#default-link4"},{default:n(()=>[t("Disabled link")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(o,{title:"Basic (simplified)",source:`<pf-menu>
  <pf-menu-item>Action</pf-menu-item>
  <pf-menu-item to="#default-link2" @click.prevent>Link</pf-menu-item>
  <pf-menu-item disabled>Disabled action</pf-menu-item>
  <pf-menu-item disabled to="#default-link4">Disabled link</pf-menu-item>
</pf-menu>`},{default:n(()=>[e(l,null,{default:n(()=>[e(i,null,{default:n(()=>[t("Action")]),_:1}),e(i,{to:"#default-link2",onClick:d[1]||(d[1]=q(()=>{},["prevent"]))},{default:n(()=>[t("Link")]),_:1}),e(i,{disabled:""},{default:n(()=>[t("Disabled action")]),_:1}),e(i,{disabled:"",to:"#default-link4"},{default:n(()=>[t("Disabled link")]),_:1})]),_:1})]),_:1}),e(o,{title:"Danger menu item",source:`<pf-menu>
  <pf-menu-content>
    <pf-menu-list>
      <pf-menu-item>Action 1</pf-menu-item>
      <pf-menu-item>Action 2</pf-menu-item>
      <pf-divider component="li" />
      <pf-menu-item danger>Delete</pf-menu-item>
    </pf-menu-list>
  </pf-menu-content>
</pf-menu>`},{default:n(()=>[e(l,null,{default:n(()=>[e(p,null,{default:n(()=>[e(s,null,{default:n(()=>[e(i,null,{default:n(()=>[t("Action 1")]),_:1}),e(i,null,{default:n(()=>[t("Action 2")]),_:1}),e(y,{component:"li"}),e(i,{danger:""},{default:n(()=>[t("Delete")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(o,{title:"With icons",source:`<pf-menu>
  <pf-menu-content>
    <pf-menu-list>
      <pf-menu-item>
        <template #icon><code-branch-icon /></template>
        From git
      </pf-menu-item>
      <pf-menu-item>
        <template #icon><layer-group-icon /></template>
        Container image
      </pf-menu-item>
      <pf-menu-item>
        <template #icon><cube-icon /></template>
        Docker file
      </pf-menu-item>
    </pf-menu-list>
  </pf-menu-content>
</pf-menu>`},{default:n(()=>[e(l,null,{default:n(()=>[e(p,null,{default:n(()=>[e(s,null,{default:n(()=>[e(i,null,{icon:n(()=>[e(m(b))]),default:n(()=>[t(" From git ")]),_:1}),e(i,null,{icon:n(()=>[e(m(z))]),default:n(()=>[t(" Container image ")]),_:1}),e(i,null,{icon:n(()=>[e(m(Y))]),default:n(()=>[t(" Docker file ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(o,{title:"With checkbox",source:`<pf-menu>
  <pf-menu-content>
    <pf-menu-list>
      <pf-menu-item check>Checkbox 1</pf-menu-item>
      <pf-menu-item check>Checkbox 2</pf-menu-item>
      <pf-menu-item check disabled>Checkbox 3</pf-menu-item>
    </pf-menu-list>
  </pf-menu-content>
</pf-menu>`},{default:n(()=>[e(l,null,{default:n(()=>[e(p,null,{default:n(()=>[e(s,null,{default:n(()=>[e(i,{check:""},{default:n(()=>[t("Checkbox 1")]),_:1}),e(i,{check:""},{default:n(()=>[t("Checkbox 2")]),_:1}),e(i,{check:"",disabled:""},{default:n(()=>[t("Checkbox 3")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(o,{title:"With favorites",source:`<pf-menu>
  <pf-menu-group v-for="(groupOptions, group) of options" :key="group" :label="group">
    <pf-menu-item
      v-for="option of groupOptions"
      :key="option.value"
      v-model:favorited="option.favorite"
      :name="option.value"
      :value="option.value"
      :description="option.description"
      :disabled="option.disabled" />
  </pf-menu-group>
</pf-menu>`},{default:n(()=>[e(l,null,{default:n(()=>[(g(!0),F(w,null,L(D,(x,_)=>(g(),M(h,{key:_,label:_},{default:n(()=>[(g(!0),F(w,null,L(x,f=>(g(),M(i,{key:f.value,favorited:f.favorite,"onUpdate:favorited":P=>f.favorite=P,name:f.value,value:f.value,description:f.description,disabled:f.disabled},null,8,["favorited","onUpdate:favorited","name","value","description","disabled"]))),128))]),_:2},1032,["label"]))),128))]),_:1})]),_:1}),e(o,{title:"Filtering with search input",source:`<pf-menu>
  <pf-menu-input>
    <pf-text-input :auto-validate="false" aria-label="Filter menu items" type="search" icon-variant="search" />
  </pf-menu-input>
  <pf-divider />
  <pf-menu-content>
    <pf-menu-list>
      <pf-menu-item>Action 1</pf-menu-item>
      <pf-menu-item>Action 2</pf-menu-item>
      <pf-menu-item>Action 3</pf-menu-item>
    </pf-menu-list>
  </pf-menu-content>
</pf-menu>`},{default:n(()=>[e(l,null,{default:n(()=>[e(T,null,{default:n(()=>[e(C,{"auto-validate":!1,"aria-label":"Filter menu items",type:"search","icon-variant":"search"})]),_:1}),e(y),e(p,null,{default:n(()=>[e(s,null,{default:n(()=>[e(i,null,{default:n(()=>[t("Action 1")]),_:1}),e(i,null,{default:n(()=>[t("Action 2")]),_:1}),e(i,null,{default:n(()=>[t("Action 3")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(o,{title:"Filtering with text input (simplified)",source:`<pf-menu>
  <pf-text-input :auto-validate="false" aria-label="Filter menu items" type="search" icon-variant="search" />
  <pf-divider />
  <pf-menu-item>Action 1</pf-menu-item>
  <pf-menu-item>Action 2</pf-menu-item>
  <pf-menu-item>Action 3</pf-menu-item>
</pf-menu>`},{default:n(()=>[e(l,null,{default:n(()=>[e(C,{"auto-validate":!1,"aria-label":"Filter menu items",type:"search","icon-variant":"search"}),e(y),e(i,null,{default:n(()=>[t("Action 1")]),_:1}),e(i,null,{default:n(()=>[t("Action 2")]),_:1}),e(i,null,{default:n(()=>[t("Action 3")]),_:1})]),_:1})]),_:1}),e(o,{title:"With links",source:`<pf-menu>
  <pf-menu-content>
    <pf-menu-list>
      <pf-menu-item to="#default-link-1" external-link>Link 1</pf-menu-item>
      <pf-menu-item to="#default-link-2" external-link>Link 2</pf-menu-item>
      <pf-menu-item to="#default-link-3">Link 3</pf-menu-item>
    </pf-menu-list>
  </pf-menu-content>
</pf-menu>`},{default:n(()=>[e(l,null,{default:n(()=>[e(p,null,{default:n(()=>[e(s,null,{default:n(()=>[e(i,{to:"#default-link-1","external-link":""},{default:n(()=>[t("Link 1")]),_:1}),e(i,{to:"#default-link-2","external-link":""},{default:n(()=>[t("Link 2")]),_:1}),e(i,{to:"#default-link-3"},{default:n(()=>[t("Link 3")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(o,{title:"With titled groups",source:`<pf-menu>
  <pf-menu-content>
    <pf-menu-group>
      <pf-menu-list>
        <pf-menu-item to="#">Link not in group</pf-menu-item>
      </pf-menu-list>
    </pf-menu-group>
    <pf-menu-group label="Group 1" label-heading-level="h3">
      <pf-menu-list>
        <pf-menu-item to="#">Link 1</pf-menu-item>
        <pf-menu-item to="#">Link 2</pf-menu-item>
      </pf-menu-list>
    </pf-menu-group>
    <pf-menu-group label="Group 2" label-heading-level="h3">
      <pf-menu-list>
        <pf-menu-item to="#">Link 1</pf-menu-item>
        <pf-menu-item to="#">Link 2</pf-menu-item>
      </pf-menu-list>
    </pf-menu-group>
  </pf-menu-content>
</pf-menu>`},{default:n(()=>[e(l,null,{default:n(()=>[e(p,null,{default:n(()=>[e(h,null,{default:n(()=>[e(s,null,{default:n(()=>[e(i,{to:"#"},{default:n(()=>[t("Link not in group")]),_:1})]),_:1})]),_:1}),e(h,{label:"Group 1","label-heading-level":"h3"},{default:n(()=>[e(s,null,{default:n(()=>[e(i,{to:"#"},{default:n(()=>[t("Link 1")]),_:1}),e(i,{to:"#"},{default:n(()=>[t("Link 2")]),_:1})]),_:1})]),_:1}),e(h,{label:"Group 2","label-heading-level":"h3"},{default:n(()=>[e(s,null,{default:n(()=>[e(i,{to:"#"},{default:n(()=>[t("Link 1")]),_:1}),e(i,{to:"#"},{default:n(()=>[t("Link 2")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(o,{title:"With description",source:`<pf-menu>
  <pf-menu-content>
    <pf-menu-list>
      <pf-menu-item description="Description">
        <template #icon><code-branch-icon /></template>
        Action 1
      </pf-menu-item>
      <pf-menu-item disabled description="Description">
        <template #icon><code-branch-icon /></template>
        Action 2 disabled
      </pf-menu-item>
      <pf-menu-item
        description="Nunc non ornare ex, et pretium dui. Duis nec augue at urna elementum blandit tincidunt eget metus. Aenean sed metus id urna dignissim interdum. Aenean vel nisl vitae arcu vehicula pulvinar eget nec turpis. Cras sit amet est est."
      >
        <template #icon><code-branch-icon /></template>
        Action 3
      </pf-menu-item>
    </pf-menu-list>
  </pf-menu-content>
</pf-menu>`},{default:n(()=>[e(l,null,{default:n(()=>[e(p,null,{default:n(()=>[e(s,null,{default:n(()=>[e(i,{description:"Description"},{icon:n(()=>[e(m(b))]),default:n(()=>[t(" Action 1 ")]),_:1}),e(i,{disabled:"",description:"Description"},{icon:n(()=>[e(m(b))]),default:n(()=>[t(" Action 2 disabled ")]),_:1}),e(i,{description:"Nunc non ornare ex, et pretium dui. Duis nec augue at urna elementum blandit tincidunt eget metus. Aenean sed metus id urna dignissim interdum. Aenean vel nisl vitae arcu vehicula pulvinar eget nec turpis. Cras sit amet est est."},{icon:n(()=>[e(m(b))]),default:n(()=>[t(" Action 3 ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(o,{title:"With actions",source:`<pf-menu @select="(event: Event, itemKey: string | number | symbol | null | undefined) => toggle(itemKey)">
  <pf-menu-content>
    <pf-menu-group label="Actions" label-heading-level="h3">
      <pf-menu-list>
        <pf-menu-item
          key="item1"
          :selected="selected.includes('item1')"
          description="This is a description"
        >
          Item 1
          <template #actions>
            <pf-menu-item-action action-id="code">
              <code-branch-icon aria-hidden />
            </pf-menu-item-action>
          </template>
        </pf-menu-item>

        <pf-menu-item
          key="item2"
          :selected="selected.includes('item2')"
          disabled
          description="This is a description"
        >
          Item 2
          <template #actions>
            <pf-menu-item-action action-id="alert">
              <bell-icon aria-hidden />
            </pf-menu-item-action>
          </template>
        </pf-menu-item>

        <pf-menu-item
          key="item3"
          :selected="selected.includes('item3')"
        >
          Item 3
          <template #actions>
            <pf-menu-item-action action-id="copy">
              <clipboard-icon aria-hidden />
            </pf-menu-item-action>
          </template>
        </pf-menu-item>

        <pf-menu-item
          key="item4"
          :selected="selected.includes('item4')"
          description="This is a description"
        >
          Item 4
          <template #actions>
            <pf-menu-item-action action-id="expand">
              <bars-icon aria-hidden />
            </pf-menu-item-action>
          </template>
        </pf-menu-item>
      </pf-menu-list>
    </pf-menu-group>
  </pf-menu-content>
</pf-menu>`},{default:n(()=>[e(l,{onSelect:d[2]||(d[2]=(x,_)=>N(_))},{default:n(()=>[e(p,null,{default:n(()=>[e(h,{label:"Actions","label-heading-level":"h3"},{default:n(()=>[e(s,null,{default:n(()=>[e(i,{key:"item1",selected:r.includes("item1"),description:"This is a description"},{actions:n(()=>[e(v,{"action-id":"code"},{default:n(()=>[e(m(b),{"aria-hidden":""})]),_:1})]),default:n(()=>[t(" Item 1 ")]),_:1},8,["selected"]),e(i,{key:"item2",selected:r.includes("item2"),disabled:"",description:"This is a description"},{actions:n(()=>[e(v,{"action-id":"alert"},{default:n(()=>[e(m(S),{"aria-hidden":""})]),_:1})]),default:n(()=>[t(" Item 2 ")]),_:1},8,["selected"]),e(i,{key:"item3",selected:r.includes("item3")},{actions:n(()=>[e(v,{"action-id":"copy"},{default:n(()=>[e(m(U),{"aria-hidden":""})]),_:1})]),default:n(()=>[t(" Item 3 ")]),_:1},8,["selected"]),e(i,{key:"item4",selected:r.includes("item4"),description:"This is a description"},{actions:n(()=>[e(v,{"action-id":"expand"},{default:n(()=>[e(m(G),{"aria-hidden":""})]),_:1})]),default:n(()=>[t(" Item 4 ")]),_:1},8,["selected"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}});export{ee as default};
