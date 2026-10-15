import{$ as e,N as t,U as n,c as r,h as i,j as a,k as o,m as s,n as c,p as l,s as u,st as d,u as f}from"./runtime-core.esm-bundler-Bo9Nr7Z8.js";import{_ as p,f as m,v as h}from"./index-DEZgkdzS.js";import{t as g}from"./code-branch-icon-2UGWh941.js";var _=p({name:`LayerGroupIcon`,height:512,width:512,svgPathData:`M232.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L13.9 149.8C5.4 145.8 0 137.3 0 128s5.4-17.9 13.9-21.8L232.5 5.2zM48.1 218.4l164.3 75.9c27.7 12.8 59.6 12.8 87.3 0l164.3-75.9 34.1 15.8c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L13.9 277.8C5.4 273.8 0 265.3 0 256s5.4-17.9 13.9-21.8l34.1-15.8zM13.9 362.2l34.1-15.8 164.3 75.9c27.7 12.8 59.6 12.8 87.3 0l164.3-75.9 34.1 15.8c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L13.9 405.8C5.4 401.8 0 393.3 0 384s5.4-17.9 13.9-21.8z`,yOffset:0,xOffset:0}),v=p({name:`CubeIcon`,height:512,width:512,svgPathData:`M224.3-2.5c19.8-11.4 44.2-11.4 64 0L464.2 99c19.8 11.4 32 32.6 32 55.4l0 203c0 22.9-12.2 44-32 55.4L288.3 514.5c-19.8 11.4-44.2 11.4-64 0L48.5 413c-19.8-11.4-32-32.6-32-55.4l0-203c0-22.9 12.2-44 32-55.4L224.3-2.5zm207.8 360l0-166.1-143.8 83 0 166.1 143.8-83z`,yOffset:0,xOffset:0}),y=p({name:`ClipboardIcon`,height:512,width:384,svgPathData:`M320 32l-8.6 0C300.4 12.9 279.7 0 256 0L128 0C104.3 0 83.6 12.9 72.6 32L64 32C28.7 32 0 60.7 0 96L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-352c0-35.3-28.7-64-64-64zM136 112c-13.3 0-24-10.7-24-24s10.7-24 24-24l112 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-112 0z`,yOffset:0,xOffset:0}),b=p({name:`BarsIcon`,height:512,width:448,svgPathData:`M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z`,yOffset:0,xOffset:0}),x=i({__name:`Menu.story`,setup(i){let p=e([`item3`,`item4`]),x=e({Status:[{value:`Running`,favorite:!1,description:`This is a description.`},{value:`Stopped`,favorite:!1},{value:`Down`,favorite:!1,disabled:!0},{value:`Degraded`,favorite:!1},{value:`Needs maintenance`,favorite:!1}],"Vendor names":[{value:`Dell`,favorite:!1},{value:`Samsung`,favorite:!0},{value:`Hewlett-Packard`,favorite:!0,description:`This is a description.`}]});function S(e){let t=p.indexOf(e);t<0?p.push(e):p.splice(t,1)}return(e,i)=>{let C=t(`component-info`),w=t(`pf-menu-item`),T=t(`pf-menu-list`),E=t(`pf-menu-content`),D=t(`pf-menu`),O=t(`story-canvas`),k=t(`pf-divider`),A=t(`pf-menu-group`),j=t(`pf-search-input`),M=t(`pf-menu-input`),N=t(`pf-menu-item-action`),P=t(`doc-page`);return o(),r(P,{name:`Components/Menu.story.vue`,title:`Menu`},{description:n(()=>[...i[3]||=[u(`div`,{class:`markdown pf-v6-c-content`},[u(`p`,null,[l(`A `),u(`strong`,null,`menu`),l(` is a list of options or actions that users can choose from. It can be used in a variety of contexts whenever the user needs to choose between multiple values, options, or actions. A menu can be opened in a `),u(`a`,{href:`#/stories/components/dropdown`},`dropdown`),l(` or `),u(`a`,{href:`#/stories/components/select`},`select`),l(` list, or it can be revealed by right clicking on a specific region within a page.`)])],-1)]]),apidocs:n(()=>[s(C,{name:`PfDrilldownMenu`}),s(C,{name:`PfMenu`,doc:{name:`PfMenu`,exportName:`PfMenu`,displayName:`Menu`,description:``,tags:{},expose:[{name:`el`},{name:`items`},{name:`handleKeyboard`}],props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`containsFlyout`,tags:{beta:[{description:`Indicates if menu contains a flyout menu`,title:`beta`}]},required:!1,type:{name:`boolean`}},{name:`navFlyout`,tags:{beta:[{description:`Indicating that the menu should have nav flyout styling`,title:`beta`}]},required:!1,type:{name:`boolean`}},{name:`menuDrilledIn`,tags:{beta:[{description:`Indicates if a menu is drilled into`,title:`beta`}]},required:!1,type:{name:`boolean`}},{name:`activeItemId`,tags:{beta:[{description:`itemId of the currently active item. You can also specify isActive on the MenuItem.`,title:`beta`}]},required:!1,type:{name:`MenuItemId`}},{name:`rootMenu`,description:`Internal flag indicating if the Menu is the root of a menu tree`,required:!1,type:{name:`boolean`}},{name:`plain`,description:`Indicates if the menu should be without the outer box-shadow`,required:!1,type:{name:`boolean`}},{name:`scrollable`,description:`Indicates if the menu should be scrollable`,required:!1,type:{name:`boolean`}},{name:`onActionClick`,description:`Callback called when an MenuItems's action button is clicked. You can also specify it within a MenuItemAction.`,required:!1,type:{name:`TSFunctionType`}},{name:`favoritesLabel`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`'Favorites'`}}],events:[{name:`searchInputChange`,type:{names:[`Event`]},description:`A callback for when the input value changes.`},{name:`select`,type:{names:[`Event`]},description:`Callback for updating when item selection changes. You can also specify onClick on the MenuItem.`}],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Menu/Menu.vue`]}}),s(C,{name:`PfMenuBreadcrumb`,doc:{name:`PfMenuBreadcrumb`,exportName:`PfMenuBreadcrumb`,displayName:`MenuBreadcrumb`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Menu/MenuBreadcrumb.vue`]}}),s(C,{name:`PfMenuContent`,doc:{name:`PfMenuContent`,exportName:`PfMenuContent`,displayName:`MenuContent`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`menuHeight`,description:`Height of the menu content`,required:!1,type:{name:`string`}},{name:`maxMenuHeight`,description:`Maximum height of menu content`,required:!1,type:{name:`string`}},{name:`onHeight`,description:`Callback to return the height of the menu content`,required:!1,type:{name:`TSFunctionType`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Menu/MenuContent.vue`]}}),s(C,{name:`PfMenuFooter`,doc:{name:`PfMenuFooter`,exportName:`PfMenuFooter`,displayName:`MenuFooter`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Menu/MenuFooter.vue`]}}),s(C,{name:`PfMenuGroup`,doc:{name:`PfMenuGroup`,exportName:`PfSelectGroup`,displayName:`MenuGroup`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`label`,description:`Group label`,required:!1,type:{name:`string`}},{name:`titleId`,description:`ID for title label`,required:!1,type:{name:`string`}},{name:`labelHeadingLevel`,description:`Group label heading level. Default is h1.`,required:!1,type:{name:`union`,elements:[{name:`"h1"`},{name:`"h2"`},{name:`"h3"`},{name:`"h4"`},{name:`"h5"`},{name:`"h6"`}]},defaultValue:{func:!1,value:`'h1'`}}],events:[],slots:[{name:`label`},{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Menu/MenuGroup.vue`]}}),s(C,{name:`PfMenuInput`,doc:{name:`PfMenuInput`,exportName:`PfMenuInput`,displayName:`MenuInput`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Menu/MenuInput.vue`]}}),s(C,{name:`PfMenuItem`,doc:{name:`PfMenuItem`,exportName:`PfSelectOption`,displayName:`MenuItem`,description:``,tags:{},expose:[{name:`focus`},{name:`focused`}],props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`name`,required:!1,type:{name:`string`}},{name:`value`,required:!1,type:{name:`string`}},{name:`to`,description:`Target navigation link`,required:!1,type:{name:`string`}},{name:`check`,tags:{beta:[{description:`Flag indicating the item has a checkbox`,title:`beta`}]},required:!1,type:{name:`boolean`}},{name:`checkName`,tags:{beta:[{description:`Name of the checkbox`,title:`beta`}]},required:!1,type:{name:`string`}},{name:`active`,description:`Flag indicating whether the item is active`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`undefined`}},{name:`loadButton`,description:`Flag indicating if the item causes a load`,required:!1,type:{name:`boolean`}},{name:`loading`,description:`Flag indicating a loading state`,required:!1,type:{name:`boolean`}},{name:`component`,description:`Component used to render the menu item`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`'button'`}},{name:`componentAttrs`,description:`Additional attrs added to the link component`,required:!1,type:{name:`union`,elements:[{name:`Omit`,elements:[{name:`ButtonHTMLAttributes`},{name:`union`,elements:[{name:`"href"`},{name:`"aria-current"`},{name:`"disabled"`},{name:`"role"`},{name:`"for"`},{name:`"aria-disabled"`},{name:`"aria-expanded"`},{name:`"type"`},{name:`"download"`},{name:`"onClick"`}]}]},{name:`Omit`,elements:[{name:`AnchorHTMLAttributes`},{name:`union`,elements:[{name:`"href"`},{name:`"aria-current"`},{name:`"disabled"`},{name:`"role"`},{name:`"for"`},{name:`"aria-disabled"`},{name:`"aria-expanded"`},{name:`"type"`},{name:`"download"`},{name:`"onClick"`},{name:`"target"`},{name:`"referrerpolicy"`}]}]}]}},{name:`disabled`,description:`Render item as disabled option`,required:!1,type:{name:`boolean`}},{name:`description`,description:`Description of the menu item`,required:!1,type:{name:`string`}},{name:`externalLink`,description:`Render external link icon`,required:!1,type:{name:`boolean`}},{name:`selected`,description:`Flag indicating if the option is selected`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`undefined`}},{name:`focused`,description:`Flag indicating the item is focused`,required:!1,type:{name:`boolean`}},{name:`danger`,description:`Flag indicating the item is in danger state`,required:!1,type:{name:`boolean`}},{name:`direction`,tags:{beta:[{description:`Sub menu direction`,title:`beta`}]},required:!1,type:{name:`union`,elements:[{name:`"down"`},{name:`"up"`}]}},{name:`onPath`,tags:{beta:[{description:`True if item is on current selection path`,title:`beta`}]},required:!1,type:{name:`boolean`}},{name:`download`,description:`Navigation link download. Only set when the to property is present.`,required:!1,type:{name:`string`}},{name:`target`,description:`Navigation link target.`,required:!1,type:{name:`string`}},{name:`referrerpolicy`,description:`Navigation link referrerpolicy.`,required:!1,type:{name:`TSIndexedAccessType`}}],events:[{name:`click`,type:{names:[`Event`]},description:`Callback for item click`},{name:`showFlyout`,type:{names:[`Event`]},tags:[{title:`beta`,content:`Callback function when mouse leaves trigger`}]},{name:`update:favorited`,type:{names:[`boolean`]}}],slots:[{name:`icon`},{name:`default`},{name:`description`},{name:`flyout-menu`},{name:`actions`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Menu/MenuItem.vue`]}}),s(C,{name:`PfMenuItemAction`,doc:{name:`PfMenuItemAction`,exportName:`PfMenuItemAction`,displayName:`MenuItemAction`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`icon`,description:`The action icon to use`,required:!1,type:{name:`"favorites"`}},{name:`favorited`,description:`Flag indicating if the item is favorited`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`undefined`}},{name:`disabled`,description:`Disables action, can also be specified on the MenuItem instead`,required:!1,type:{name:`boolean`}},{name:`actionId`,description:`Identifies the action item in the onActionClick on the Menu`,required:!1,type:{name:`any`}}],events:[{name:`click`,type:{names:[`Event`]},description:`Callback on action click, can also specify onActionClick on the Menu instead`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Menu/MenuItemAction.vue`]}}),s(C,{name:`PfMenuList`,doc:{name:`PfMenuList`,exportName:`PfSelectList`,displayName:`MenuList`,description:``,tags:{},expose:[{name:`el`}],props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Menu/MenuList.vue`]}})]),default:n(()=>[i[42]||=u(`div`,{class:`markdown pf-v6-c-content`},[u(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),u(`ul`,null,[u(`li`,null,[l(`The `),u(`code`,null,`pf-menu-content`),l(`, `),u(`code`,null,`pf-menu-list`),l(` and `),u(`code`,null,`pf-menu-input`),l(` components are optional.`)])]),u(`p`,null,[l(`See `),u(`a`,{href:`#/`},`common differences from patternfly-react`),l(`.`)]),u(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),s(O,{title:`Basic`,source:`<pf-menu>
  <pf-menu-content>
    <pf-menu-list>
      <pf-menu-item>Action</pf-menu-item>
      <pf-menu-item to="#default-link2" @click.prevent>Link</pf-menu-item>
      <pf-menu-item disabled>Disabled action</pf-menu-item>
      <pf-menu-item disabled to="#default-link4">Disabled link</pf-menu-item>
    </pf-menu-list>
  </pf-menu-content>
</pf-menu>`},{default:n(()=>[s(D,null,{default:n(()=>[s(E,null,{default:n(()=>[s(T,null,{default:n(()=>[s(w,null,{default:n(()=>[...i[4]||=[l(`Action`,-1)]]),_:1}),s(w,{to:`#default-link2`,onClick:i[0]||=h(()=>{},[`prevent`])},{default:n(()=>[...i[5]||=[l(`Link`,-1)]]),_:1}),s(w,{disabled:``},{default:n(()=>[...i[6]||=[l(`Disabled action`,-1)]]),_:1}),s(w,{disabled:``,to:`#default-link4`},{default:n(()=>[...i[7]||=[l(`Disabled link`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),s(O,{title:`Basic (simplified)`,source:`<pf-menu>
  <pf-menu-item>Action</pf-menu-item>
  <pf-menu-item to="#default-link2" @click.prevent target="_blank">Link</pf-menu-item>
  <pf-menu-item disabled>Disabled action</pf-menu-item>
  <pf-menu-item disabled to="#default-link4">Disabled link</pf-menu-item>
</pf-menu>`},{default:n(()=>[s(D,null,{default:n(()=>[s(w,null,{default:n(()=>[...i[8]||=[l(`Action`,-1)]]),_:1}),s(w,{to:`#default-link2`,onClick:i[1]||=h(()=>{},[`prevent`]),target:`_blank`},{default:n(()=>[...i[9]||=[l(`Link`,-1)]]),_:1}),s(w,{disabled:``},{default:n(()=>[...i[10]||=[l(`Disabled action`,-1)]]),_:1}),s(w,{disabled:``,to:`#default-link4`},{default:n(()=>[...i[11]||=[l(`Disabled link`,-1)]]),_:1})]),_:1})]),_:1}),s(O,{title:`Danger menu item`,source:`<pf-menu>
  <pf-menu-content>
    <pf-menu-list>
      <pf-menu-item>Action 1</pf-menu-item>
      <pf-menu-item>Action 2</pf-menu-item>
      <pf-divider component="li" />
      <pf-menu-item danger>Delete</pf-menu-item>
    </pf-menu-list>
  </pf-menu-content>
</pf-menu>`},{default:n(()=>[s(D,null,{default:n(()=>[s(E,null,{default:n(()=>[s(T,null,{default:n(()=>[s(w,null,{default:n(()=>[...i[12]||=[l(`Action 1`,-1)]]),_:1}),s(w,null,{default:n(()=>[...i[13]||=[l(`Action 2`,-1)]]),_:1}),s(k,{component:`li`}),s(w,{danger:``},{default:n(()=>[...i[14]||=[l(`Delete`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),s(O,{title:`With icons`,source:`<pf-menu>
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
</pf-menu>`},{default:n(()=>[s(D,null,{default:n(()=>[s(E,null,{default:n(()=>[s(T,null,{default:n(()=>[s(w,null,{icon:n(()=>[s(d(g))]),default:n(()=>[i[15]||=l(` From git `,-1)]),_:1}),s(w,null,{icon:n(()=>[s(d(_))]),default:n(()=>[i[16]||=l(` Container image `,-1)]),_:1}),s(w,null,{icon:n(()=>[s(d(v))]),default:n(()=>[i[17]||=l(` Docker file `,-1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),s(O,{title:`With checkbox`,source:`<pf-menu>
  <pf-menu-content>
    <pf-menu-list>
      <pf-menu-item check>Checkbox 1</pf-menu-item>
      <pf-menu-item check>Checkbox 2</pf-menu-item>
      <pf-menu-item check disabled>Checkbox 3</pf-menu-item>
    </pf-menu-list>
  </pf-menu-content>
</pf-menu>`},{default:n(()=>[s(D,null,{default:n(()=>[s(E,null,{default:n(()=>[s(T,null,{default:n(()=>[s(w,{check:``},{default:n(()=>[...i[18]||=[l(`Checkbox 1`,-1)]]),_:1}),s(w,{check:``},{default:n(()=>[...i[19]||=[l(`Checkbox 2`,-1)]]),_:1}),s(w,{check:``,disabled:``},{default:n(()=>[...i[20]||=[l(`Checkbox 3`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),s(O,{title:`With favorites`,source:`<pf-menu>
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
</pf-menu>`},{default:n(()=>[s(D,null,{default:n(()=>[(o(!0),f(c,null,a(x,(e,t)=>(o(),r(A,{key:t,label:t},{default:n(()=>[(o(!0),f(c,null,a(e,e=>(o(),r(w,{key:e.value,favorited:e.favorite,"onUpdate:favorited":t=>e.favorite=t,name:e.value,value:e.value,description:e.description,disabled:e.disabled},null,8,[`favorited`,`onUpdate:favorited`,`name`,`value`,`description`,`disabled`]))),128))]),_:2},1032,[`label`]))),128))]),_:1})]),_:1}),s(O,{title:`Filtering with search input`,source:`<pf-menu>
  <pf-menu-input>
    <pf-search-input aria-label="Filter menu items" type="search" />
  </pf-menu-input>
  <pf-divider />
  <pf-menu-content>
    <pf-menu-list>
      <pf-menu-item>Action 1</pf-menu-item>
      <pf-menu-item>Action 2</pf-menu-item>
      <pf-menu-item>Action 3</pf-menu-item>
    </pf-menu-list>
  </pf-menu-content>
</pf-menu>`},{default:n(()=>[s(D,null,{default:n(()=>[s(M,null,{default:n(()=>[s(j,{"aria-label":`Filter menu items`,type:`search`})]),_:1}),s(k),s(E,null,{default:n(()=>[s(T,null,{default:n(()=>[s(w,null,{default:n(()=>[...i[21]||=[l(`Action 1`,-1)]]),_:1}),s(w,null,{default:n(()=>[...i[22]||=[l(`Action 2`,-1)]]),_:1}),s(w,null,{default:n(()=>[...i[23]||=[l(`Action 3`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),s(O,{title:`Filtering with text input (simplified)`,source:`<pf-menu>
  <pf-search-input aria-label="Filter menu items" type="search" />
  <pf-divider />
  <pf-menu-item>Action 1</pf-menu-item>
  <pf-menu-item>Action 2</pf-menu-item>
  <pf-menu-item>Action 3</pf-menu-item>
</pf-menu>`},{default:n(()=>[s(D,null,{default:n(()=>[s(j,{"aria-label":`Filter menu items`,type:`search`}),s(k),s(w,null,{default:n(()=>[...i[24]||=[l(`Action 1`,-1)]]),_:1}),s(w,null,{default:n(()=>[...i[25]||=[l(`Action 2`,-1)]]),_:1}),s(w,null,{default:n(()=>[...i[26]||=[l(`Action 3`,-1)]]),_:1})]),_:1})]),_:1}),s(O,{title:`With links`,source:`<pf-menu>
  <pf-menu-content>
    <pf-menu-list>
      <pf-menu-item to="#default-link-1" external-link>Link 1</pf-menu-item>
      <pf-menu-item to="#default-link-2" external-link>Link 2</pf-menu-item>
      <pf-menu-item to="#default-link-3">Link 3</pf-menu-item>
    </pf-menu-list>
  </pf-menu-content>
</pf-menu>`},{default:n(()=>[s(D,null,{default:n(()=>[s(E,null,{default:n(()=>[s(T,null,{default:n(()=>[s(w,{to:`#default-link-1`,"external-link":``},{default:n(()=>[...i[27]||=[l(`Link 1`,-1)]]),_:1}),s(w,{to:`#default-link-2`,"external-link":``},{default:n(()=>[...i[28]||=[l(`Link 2`,-1)]]),_:1}),s(w,{to:`#default-link-3`},{default:n(()=>[...i[29]||=[l(`Link 3`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),s(O,{title:`With titled groups`,source:`<pf-menu>
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
</pf-menu>`},{default:n(()=>[s(D,null,{default:n(()=>[s(E,null,{default:n(()=>[s(A,null,{default:n(()=>[s(T,null,{default:n(()=>[s(w,{to:`#`},{default:n(()=>[...i[30]||=[l(`Link not in group`,-1)]]),_:1})]),_:1})]),_:1}),s(A,{label:`Group 1`,"label-heading-level":`h3`},{default:n(()=>[s(T,null,{default:n(()=>[s(w,{to:`#`},{default:n(()=>[...i[31]||=[l(`Link 1`,-1)]]),_:1}),s(w,{to:`#`},{default:n(()=>[...i[32]||=[l(`Link 2`,-1)]]),_:1})]),_:1})]),_:1}),s(A,{label:`Group 2`,"label-heading-level":`h3`},{default:n(()=>[s(T,null,{default:n(()=>[s(w,{to:`#`},{default:n(()=>[...i[33]||=[l(`Link 1`,-1)]]),_:1}),s(w,{to:`#`},{default:n(()=>[...i[34]||=[l(`Link 2`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),s(O,{title:`With description`,source:`<pf-menu>
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
</pf-menu>`},{default:n(()=>[s(D,null,{default:n(()=>[s(E,null,{default:n(()=>[s(T,null,{default:n(()=>[s(w,{description:`Description`},{icon:n(()=>[s(d(g))]),default:n(()=>[i[35]||=l(` Action 1 `,-1)]),_:1}),s(w,{disabled:``,description:`Description`},{icon:n(()=>[s(d(g))]),default:n(()=>[i[36]||=l(` Action 2 disabled `,-1)]),_:1}),s(w,{description:`Nunc non ornare ex, et pretium dui. Duis nec augue at urna elementum blandit tincidunt eget metus. Aenean sed metus id urna dignissim interdum. Aenean vel nisl vitae arcu vehicula pulvinar eget nec turpis. Cras sit amet est est.`},{icon:n(()=>[s(d(g))]),default:n(()=>[i[37]||=l(` Action 3 `,-1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),s(O,{title:`With actions`,source:`<pf-menu @select="(event: Event, itemKey: string | number | symbol | null | undefined) => toggle(itemKey)">
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
</pf-menu>`},{default:n(()=>[s(D,{onSelect:i[2]||=(e,t)=>S(t)},{default:n(()=>[s(E,null,{default:n(()=>[s(A,{label:`Actions`,"label-heading-level":`h3`},{default:n(()=>[s(T,null,{default:n(()=>[s(w,{key:`item1`,selected:p.includes(`item1`),description:`This is a description`},{actions:n(()=>[s(N,{"action-id":`code`},{default:n(()=>[s(d(g),{"aria-hidden":``})]),_:1})]),default:n(()=>[i[38]||=l(` Item 1 `,-1)]),_:1},8,[`selected`]),s(w,{key:`item2`,selected:p.includes(`item2`),disabled:``,description:`This is a description`},{actions:n(()=>[s(N,{"action-id":`alert`},{default:n(()=>[s(d(m),{"aria-hidden":``})]),_:1})]),default:n(()=>[i[39]||=l(` Item 2 `,-1)]),_:1},8,[`selected`]),s(w,{key:`item3`,selected:p.includes(`item3`)},{actions:n(()=>[s(N,{"action-id":`copy`},{default:n(()=>[s(d(y),{"aria-hidden":``})]),_:1})]),default:n(()=>[i[40]||=l(` Item 3 `,-1)]),_:1},8,[`selected`]),s(w,{key:`item4`,selected:p.includes(`item4`),description:`This is a description`},{actions:n(()=>[s(N,{"action-id":`expand`},{default:n(()=>[s(d(b),{"aria-hidden":``})]),_:1})]),default:n(()=>[i[41]||=l(` Item 4 `,-1)]),_:1},8,[`selected`])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}});export{x as default};