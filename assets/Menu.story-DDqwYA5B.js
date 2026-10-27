import{F as e,G as t,H as n,N as r,Nt as i,T as a,c as o,d as s,ft as c,g as l,h as u,j as d,l as f,m as p,n as m,nt as h,p as ee,rt as g,s as _,u as v}from"./runtime-core.esm-bundler-DKmYt4j6.js";import{E as te,W as y,Y as b,z as ne}from"./index-Cl3hMFDe.js";import{t as x}from"./database-icon-DotyWhik.js";import{t as S}from"./code-branch-icon-9LI3daNg.js";import{t as C}from"./cube-icon-DnZbl0Bs.js";import{t as re}from"./clipboard-icon-DcDuzfZU.js";var w=y({name:`LayerGroupIcon`,height:512,width:512,svgPathData:`M232.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L13.9 149.8C5.4 145.8 0 137.3 0 128s5.4-17.9 13.9-21.8L232.5 5.2zM48.1 218.4l164.3 75.9c27.7 12.8 59.6 12.8 87.3 0l164.3-75.9 34.1 15.8c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L13.9 277.8C5.4 273.8 0 265.3 0 256s5.4-17.9 13.9-21.8l34.1-15.8zM13.9 362.2l34.1-15.8 164.3 75.9c27.7 12.8 59.6 12.8 87.3 0l164.3-75.9 34.1 15.8c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L13.9 405.8C5.4 401.8 0 393.3 0 384s5.4-17.9 13.9-21.8z`,yOffset:0,xOffset:0}),ie=y({name:`BarsIcon`,height:512,width:448,svgPathData:`M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z`,yOffset:0,xOffset:0}),ae=y({name:`TableIcon`,height:512,width:448,svgPathData:`M384 32c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64l-320 0-6.5-.3C25.2 476.4 0 449.1 0 416L0 96C0 60.7 28.7 32 64 32l320 0zM64 320l0 96 128 0 0-96-128 0zm192 0l0 96 128 0 0-96-128 0zM64 256l128 0 0-96-128 0 0 96zm192 0l128 0 0-96-128 0 0 96z`,yOffset:0,xOffset:0}),oe={style:{"margin-top":`20px`}},T=l({__name:`Menu.story`,setup(l){let y=g(!1),T=g([]);function se(e,t,n){console.log(`clicked on ${String(t)} - ${String(n)}`)}let E=g([]),ce=h({Status:[{value:`Running`,favorite:!1,description:`This is a description.`},{value:`Stopped`,favorite:!1},{value:`Down`,favorite:!1,disabled:!0},{value:`Degraded`,favorite:!1},{value:`Needs maintenance`,favorite:!1}],"Vendor names":[{value:`Dell`,favorite:!1},{value:`Samsung`,favorite:!0},{value:`Hewlett-Packard`,favorite:!0,description:`This is a description.`}]}),D=g(``),O=_(()=>[`Action 1`,`Action 2`,`Action 3`].filter(e=>!D.value||e.toLowerCase().includes(D.value.toLowerCase()))),k=g(0),A=g([]),j=[{value:`view-more-0`,label:`Action`},{value:`view-more-1`,label:`Link`,to:`#default-link2`},{value:`view-more-2`,label:`Disabled action`,disabled:!0},{value:`view-more-3`,label:`Disabled link`,disabled:!0,to:`#default-link4`},{value:`view-more-4`,label:`Action 2`},{value:`view-more-5`,label:`Action 3`},{value:`view-more-6`,label:`Action 4`},{value:`view-more-7`,label:`Action 5`},{value:`view-more-8`,label:`Final option`}],M=g(3),N=g(!1),le=g(`view-more-0`),ue=n(`viewMoreMenu`);function de(){N.value=!0,setTimeout(()=>{let e=M.value;M.value=Math.min(e+3,j.length),N.value=!1;let t=j.slice(e,M.value).find(e=>!e.disabled);t&&(le.value=t.value,a(()=>{(ue.value?.el?.querySelectorAll(`li > button, li > a`)[j.indexOf(t)])?.focus()}))},2e3)}let P=g([`initial-state-rootMenu`,`initial-state-drilldownMenuStart`]),F=g([`group:start_rollout`,`group:app_grouping`]),I=g(`initial-state-drilldownMenuStartGrouping`),L=[{value:`start_rollout`,label:`Start rollout`,children:[{value:`app_grouping`,label:`Application grouping`,description:`Groups A-C`,children:[`Group A`,`Group B`,`Group C`]},{value:`count`,label:`Count`},{value:`labels`,label:`Labels`,children:[`Label 1`,`Label 2`,`Label 3`]},{value:`annotations`,label:`Annotations`}]},{value:`pause_rollout`,label:`Pause rollouts`,children:[{value:`app_grouping`,label:`Application grouping`,description:`Groups A-C`,children:[`Group A`,`Group B`,`Group C`]},{value:`count`,label:`Count`},{value:`labels`,label:`Labels`,children:[`Label 1`,`Label 2`,`Label 3`]},{value:`annotations`,label:`Annotations`}]}],R=g(!1),z=g([]),B=g([]),V=g(`breadcrumbs-rootMenu`),H=_(()=>{let e={};for(let t of L){e[t.value]=t.label;for(let n of t.children)e[`${t.value}:${n.value}`]=n.label}return e});function U(e){V.value=z.value[e]??`breadcrumbs-rootMenu`,z.value=z.value.slice(0,e),B.value=B.value.slice(0,e)}let W=g(``),G=[{item:`Application grouping`,description:`Description text`},{item:`Labels`},{item:`Annotations`},{item:`Count`},{item:`Count 2`},{item:`Count 3`},{item:`Other`}],K=_(()=>G.filter(e=>!W.value||e.item.toLowerCase().includes(W.value.toLowerCase()))),q=g(!1);return(n,a)=>{let l=e(`component-info`),h=e(`pf-menu-item`),g=e(`pf-menu-list`),_=e(`pf-menu-content`),G=e(`pf-menu`),J=e(`pf-checkbox`),Y=e(`story-canvas`),X=e(`pf-divider`),Z=e(`pf-menu-item-action`),Q=e(`pf-menu-group`),fe=e(`pf-button`),pe=e(`pf-menu-footer`),me=e(`pf-search-input`),he=e(`pf-menu-search-input`),ge=e(`pf-menu-search`),_e=e(`pf-spinner`),$=e(`pf-drilldown-menu`),ve=e(`pf-breadcrumb-item`),ye=e(`pf-badge`),be=e(`pf-menu-toggle`),xe=e(`pf-dropdown-item`),Se=e(`pf-dropdown`),Ce=e(`pf-breadcrumb-heading`),we=e(`pf-breadcrumb`),Te=e(`pf-menu-breadcrumb`),Ee=e(`pf-menu-container`),De=e(`doc-page`);return d(),f(De,{name:`Components/Menu.story.vue`,title:`Menu`},{description:t(()=>[...a[25]||=[o(`div`,{class:`markdown pf-v6-c-content`},[o(`p`,null,[p(`A `),o(`strong`,null,`menu`),p(` is a list of options or actions that users can choose from. It can be used in a variety of contexts whenever the user needs to choose between multiple values, options, or actions. A menu can be opened in a `),o(`a`,{href:`#/stories/components/dropdown`},`dropdown`),p(` or `),o(`a`,{href:`#/stories/components/select`},`select`),p(` list, or it can be revealed by right clicking on a specific region within a page.`)])],-1)]]),apidocs:t(()=>[u(l,{name:`PfMenu`,doc:{name:`PfMenu`,exportName:`PfMenu`,displayName:`Menu`,description:``,tags:{},expose:[{name:`el`},{name:`items`},{name:`handleKeyboard`}],props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`id`,description:`ID of the menu. Generated when not set, it identifies the menus of a drilldown.`,required:!1,type:{name:`string`}},{name:`selected`,description:`Single itemId for single select menus, or array of itemIds for multi select. You can also specify isSelected on the MenuItem.`,required:!1,type:{name:`union`,elements:[{name:`T`},{name:`null`}]},defaultValue:{func:!1,value:`null`}},{name:`containsFlyout`,tags:{beta:[{description:`Indicates if menu contains a flyout menu`,title:`beta`}]},required:!1,type:{name:`boolean`}},{name:`navFlyout`,tags:{beta:[{description:`Indicating that the menu should have nav flyout styling`,title:`beta`}]},required:!1,type:{name:`boolean`}},{name:`containsDrilldown`,description:`Indicates if menu contains a drilldown menu`,required:!1,type:{name:`boolean`}},{name:`menuDrilledIn`,description:`Indicates if a menu is drilled into`,required:!1,type:{name:`boolean`}},{name:`activeItemId`,tags:{beta:[{description:`itemId of the currently active item. You can also specify isActive on the MenuItem.`,title:`beta`}]},required:!1,type:{name:`MenuItemId`}},{name:`plain`,description:`Indicates if the menu should be without the outer box-shadow`,required:!1,type:{name:`boolean`}},{name:`scrollable`,description:`Indicates if the menu should be scrollable`,required:!1,type:{name:`boolean`}},{name:`role`,description:`Determines the accessible role of the menu. For a non-checkbox menu that can have one or more items selected, pass in "listbox".`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`'menu'`}},{name:`onActionClick`,description:`Callback called when an MenuItems's action button is clicked. You can also specify it within a MenuItemAction.`,required:!1,type:{name:`TSFunctionType`}},{name:`favoritesLabel`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`'Favorites'`}}],events:[{name:`searchInputChange`,type:{names:[`Event`]},description:`A callback for when the input value changes.`},{name:`select`,type:{names:[`Event`]},description:`Callback for updating when item selection changes. You can also specify onClick on the MenuItem.`},{name:`update:selected`,type:{names:[`TSConditionalType`]}},{name:`drillIn`,type:{names:[`Event`]},description:`Drilling into a submenu, from the menu fromMenuId to toMenuId through the item itemId`},{name:`drillOut`,type:{names:[`Event`]},description:`Drilling out of a submenu, to the menu toMenuId through the item itemId`},{name:`getMenuHeight`,type:{names:[`string`]},description:`Height of the content of a menu of the drilldown`}],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Menu/Menu.vue`]}}),u(l,{name:`PfMenuContent`,doc:{name:`PfMenuContent`,exportName:`PfMenuContent`,displayName:`MenuContent`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`menuHeight`,description:`Height of the menu content. In a drilldown menu it defaults to the height of the active menu.`,required:!1,type:{name:`string`}},{name:`maxMenuHeight`,description:`Maximum height of menu content`,required:!1,type:{name:`string`}},{name:`onHeight`,description:`Callback to return the height of the menu content`,required:!1,type:{name:`TSFunctionType`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Menu/MenuContent.vue`]}}),u(l,{name:`PfMenuList`,doc:{name:`PfMenuList`,exportName:`PfSelectList`,displayName:`MenuList`,description:``,tags:{},expose:[{name:`el`}],props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`ariaMultiselectable`,description:`Indicates to assistive technologies whether more than one item can be selected
for a non-checkbox menu. Only applies when the menu's role is "listbox".`,required:!1,type:{name:`boolean`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Menu/MenuList.vue`]}}),u(l,{name:`PfMenuItem`,doc:{name:`PfMenuItem`,exportName:`PfSelectOption`,displayName:`MenuItem`,description:``,tags:{},expose:[{name:`focus`},{name:`focused`}],props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`name`,description:`Name of a hidden input submitting the item value with a form`,required:!1,type:{name:`string`}},{name:`value`,description:`Identifies the item in the menu select event`,required:!1,type:{name:`union`,elements:[{name:`string`},{name:`number`}]}},{name:`to`,description:`Target navigation link`,required:!1,type:{name:`string`}},{name:`check`,tags:{beta:[{description:`Flag indicating the item has a checkbox`,title:`beta`}]},required:!1,type:{name:`boolean`}},{name:`checkName`,tags:{beta:[{description:`Name of the checkbox`,title:`beta`}]},required:!1,type:{name:`string`}},{name:`active`,description:`Flag indicating whether the item is active`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`undefined`}},{name:`loadButton`,description:`Flag indicating if the item causes a load`,required:!1,type:{name:`boolean`}},{name:`loading`,description:`Flag indicating a loading state`,required:!1,type:{name:`boolean`}},{name:`component`,description:`Component used to render the menu item`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`'button'`}},{name:`componentAttrs`,description:`Additional attrs added to the link component`,required:!1,type:{name:`union`,elements:[{name:`Omit`,elements:[{name:`ButtonHTMLAttributes`},{name:`union`,elements:[{name:`"href"`},{name:`"aria-current"`},{name:`"disabled"`},{name:`"role"`},{name:`"for"`},{name:`"aria-disabled"`},{name:`"aria-expanded"`},{name:`"type"`},{name:`"download"`},{name:`"onClick"`}]}]},{name:`Omit`,elements:[{name:`AnchorHTMLAttributes`},{name:`union`,elements:[{name:`"href"`},{name:`"aria-current"`},{name:`"disabled"`},{name:`"role"`},{name:`"for"`},{name:`"aria-disabled"`},{name:`"aria-expanded"`},{name:`"type"`},{name:`"download"`},{name:`"onClick"`},{name:`"target"`},{name:`"referrerpolicy"`}]}]}]}},{name:`disabled`,description:`Render item as disabled option`,required:!1,type:{name:`boolean`}},{name:`ariaDisabled`,description:`Render item as aria-disabled option: it stays focusable but cannot be selected`,required:!1,type:{name:`boolean`}},{name:`tooltip`,description:"Content of a tooltip shown on the item. The `tooltip` slot can be used for rich content.",required:!1,type:{name:`string`}},{name:`tooltipAttrs`,description:"Additional attrs passed to the tooltip, such as its `position`",required:!1,type:{name:`Omit`,elements:[{name:`ComponentProps`,elements:[{name:`TSTypeQuery`}]},{name:`"content"`}]}},{name:`description`,description:`Description of the menu item`,required:!1,type:{name:`string`}},{name:`externalLink`,description:`Render external link icon`,required:!1,type:{name:`boolean`}},{name:`selected`,description:`Flag indicating if the option is selected`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`undefined`}},{name:`focused`,description:`Flag indicating the item is focused`,required:!1,type:{name:`boolean`}},{name:`danger`,description:`Flag indicating the item is in danger state`,required:!1,type:{name:`boolean`}},{name:`direction`,tags:{beta:[{description:`Sub menu direction`,title:`beta`}]},required:!1,type:{name:`union`,elements:[{name:`"down"`},{name:`"up"`}]}},{name:`onPath`,tags:{beta:[{description:`True if item is on current selection path`,title:`beta`}]},required:!1,type:{name:`boolean`}},{name:`download`,description:`Navigation link download. Only set when the to property is present.`,required:!1,type:{name:`string`}},{name:`target`,description:`Navigation link target.`,required:!1,type:{name:`string`}},{name:`referrerpolicy`,description:`Navigation link referrerpolicy.`,required:!1,type:{name:`TSIndexedAccessType`}}],events:[{name:`click`,type:{names:[`Event`]},description:`Callback for item click`},{name:`showFlyout`,type:{names:[`Event`]},tags:[{title:`beta`,content:`Callback function when mouse leaves trigger`}]},{name:`update:favorited`,type:{names:[`boolean`]}}],slots:[{name:`tooltip`,description:`Content of a tooltip shown on the item`},{name:`icon`},{name:`default`},{name:`description`},{name:`flyout-menu`},{name:`drilldown-menu`},{name:`actions`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Menu/MenuItem.vue`]}}),u(l,{name:`PfMenuItemAction`,doc:{name:`PfMenuItemAction`,exportName:`PfMenuItemAction`,displayName:`MenuItemAction`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`icon`,description:`The action icon to use: "favorites" for the star icon, or the icon slot for a custom icon`,required:!1,type:{name:`"favorites"`}},{name:`favorited`,description:`Flag indicating if the item is favorited`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`undefined`}},{name:`disabled`,description:`Disables action, can also be specified on the MenuItem instead`,required:!1,type:{name:`boolean`}},{name:`actionId`,description:`Identifies the action item in the onActionClick on the Menu`,required:!1,type:{name:`unknown`}}],events:[{name:`click`,type:{names:[`Event`]},description:`Callback on action click, can also specify onActionClick on the Menu instead`}],slots:[{name:`icon`,description:`Custom icon of the action`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Menu/MenuItemAction.vue`]}}),u(l,{name:`PfMenuGroup`,doc:{name:`PfMenuGroup`,exportName:`PfSelectGroup`,displayName:`MenuGroup`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`label`,description:`Group label`,required:!1,type:{name:`string`}},{name:`titleId`,description:`ID for title label`,required:!1,type:{name:`string`}},{name:`labelHeadingLevel`,description:`Group label heading level. Default is h1.`,required:!1,type:{name:`union`,elements:[{name:`"h1"`},{name:`"h2"`},{name:`"h3"`},{name:`"h4"`},{name:`"h5"`},{name:`"h6"`}]},defaultValue:{func:!1,value:`'h1'`}}],events:[],slots:[{name:`label`},{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Menu/MenuGroup.vue`]}}),u(l,{name:`PfMenuSearch`}),u(l,{name:`PfMenuSearchInput`,doc:{name:`PfMenuSearchInput`,description:`Wraps the search input inside a pf-menu-search`,tags:{},exportName:`PfMenuSearchInput`,displayName:`MenuSearchInput`,props:[],events:[],slots:[{name:`default`,description:`The search input, like a pf-search-input`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Menu/MenuSearchInput.vue`]}}),u(l,{name:`PfMenuFooter`,doc:{name:`PfMenuFooter`,exportName:`PfMenuFooter`,displayName:`MenuFooter`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Menu/MenuFooter.vue`]}}),u(l,{name:`PfDrilldownMenu`,doc:{name:`PfDrilldownMenu`,description:"Submenu of a drilldown menu, passed in the `drilldown-menu` slot of a pf-menu-item.",tags:{},exportName:`PfDrilldownMenu`,displayName:`DrilldownMenu`,props:[{name:`id`,description:`ID of the drilldown sub-menu. Generated when not set.`,required:!1,type:{name:`string`}},{name:`menuDrilledIn`,description:`Flag indicating whether the menu is drilled in`,required:!1,type:{name:`boolean`}},{name:`onHeight`,description:`Optional callback to get the height of the sub menu`,required:!1,type:{name:`TSFunctionType`}}],events:[],slots:[{name:`default`,description:`Items of the submenu`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Menu/DrilldownMenu.vue`]}}),u(l,{name:`PfMenuBreadcrumb`,doc:{name:`PfMenuBreadcrumb`,exportName:`PfMenuBreadcrumb`,displayName:`MenuBreadcrumb`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Menu/MenuBreadcrumb.vue`]}}),u(l,{name:`PfMenuContainer`,doc:{name:`PfMenuContainer`,description:`Container that links a menu and its toggle, handling basic keyboard input and the opening and closing of the menu.`,tags:{},exportName:`PfMenuContainer`,displayName:`MenuContainer`,props:[{name:`openChangeKeys`,description:`Keys that close the menu, defaults to tab and escape. It is highly recommended to include Escape in the array, while Tab may be omitted if the menu contains non-menu items that are focusable.`,required:!1,type:{name:`Array`,elements:[{name:`string`}]},defaultValue:{func:!1,value:`() => ['Escape', 'Tab']`}},{name:`onToggleKeydown`,description:`Callback to override the toggle keydown behavior. By default, when the toggle has focus and the menu is open, pressing the up/down arrow keys will focus a valid non-disabled menu item - the first item for the down arrow key and last item for the up arrow key.`,required:!1,type:{name:`TSFunctionType`}},{name:`zIndex`,description:`z-index of the menu`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`9999`}},{name:`placement`,description:`Placement of the menu relative to the toggle`,required:!1,type:{name:`Placement`},defaultValue:{func:!1,value:`'bottom-start'`}},{name:`appendTo`,description:`Element or selector where to render the floating menu`,required:!1,type:{name:`union`,elements:[{name:`"inline"`},{name:`string`},{name:`RendererElement`},{name:`null`},{name:`undefined`}]}},{name:`shouldFocusFirstItemOnOpen`,tags:{beta:[{description:`Flag indicating the first menu item should be focused after opening the menu.`,title:`beta`}]},required:!1,type:{name:`boolean`}},{name:`scrollOnItemFocus`,description:`Flag indicating the page scrolls to the first menu item when it is focused.`,required:!1,type:{name:`boolean`}},{name:`focusTimeoutDelay`,description:`Time in ms to wait before focusing the first menu item. Defaults to 0`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`0`}}],events:[],slots:[{name:`toggle`,scoped:!0,bindings:[{name:`open`,title:`binding`},{name:`toggle`,title:`binding`}],description:"The toggle of the menu, like a pf-menu-toggle; `toggle()` opens or closes the menu"},{name:`default`,description:`The menu, like a pf-menu`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Menu/MenuContainer.vue`]}})]),default:t(()=>[a[205]||=o(`div`,{class:`markdown pf-v6-c-content`},[o(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),o(`ul`,null,[o(`li`,null,[p(`The `),o(`code`,null,`pf-menu-content`),p(`, `),o(`code`,null,`pf-menu-list`),p(` and `),o(`code`,null,`pf-menu-search`),p(` components are optional: items and inputs are wrapped automatically. `),o(`code`,null,`pf-menu-search`),p(` is also available as `),o(`code`,null,`pf-menu-input`),p(`.`)]),o(`li`,null,[p(`The `),o(`code`,null,`itemId`),p(` prop of `),o(`code`,null,`pf-menu-item`),p(` is replaced by `),o(`code`,null,`value`),p(`, falling back to the `),o(`code`,null,`key`),p(` of the item.`)]),o(`li`,null,[p(`The selection is bound with `),o(`code`,null,`v-model:selected`),p(`, toggling the selected value (or values for an array) when an item is clicked.`)]),o(`li`,null,[p(`The `),o(`code`,null,`icon`),p(`, `),o(`code`,null,`actions`),p(` and `),o(`code`,null,`description`),p(` props of `),o(`code`,null,`pf-menu-item`),p(` are slots; `),o(`code`,null,`flyoutMenu`),p(` and `),o(`code`,null,`drilldownMenu`),p(` are the `),o(`code`,null,`flyout-menu`),p(` and `),o(`code`,null,`drilldown-menu`),p(` slots.`)]),o(`li`,null,[p(`The `),o(`code`,null,`icon`),p(` of `),o(`code`,null,`pf-menu-item-action`),p(` is the `),o(`code`,null,`icon`),p(` slot, or `),o(`code`,null,`icon="favorites"`),p(`.`)]),o(`li`,null,[p(`Favorited items (`),o(`code`,null,`v-model:favorited`),p(`) are copied in a favorites group at the top of the menu.`)]),o(`li`,null,[p(`The drilldown state (`),o(`code`,null,`drilledInMenus`),p(`, `),o(`code`,null,`drilldownItemPath`),p(`, `),o(`code`,null,`activeMenu`),p(`) is managed by `),o(`code`,null,`pf-menu`),p(` and can be bound with `),o(`code`,null,`v-model`),p(`; `),o(`code`,null,`drill-in`),p(`, `),o(`code`,null,`drill-out`),p(` and `),o(`code`,null,`get-menu-height`),p(` are emitted. The content of the root menu follows the height of the active menu unless `),o(`code`,null,`menu-height`),p(` is set.`)]),o(`li`,null,[o(`code`,null,`pf-menu-container`),p(` takes the toggle in its `),o(`code`,null,`toggle`),p(` slot, whose `),o(`code`,null,`toggle()`),p(` opens or closes the menu, and the open state with `),o(`code`,null,`v-model:open`),p(`. See `),o(`a`,{href:`#/`},`common differences from patternfly-react`),p(`.`)])]),o(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),u(Y,{title:`Basic menus`,source:`<pf-menu :plain="basicPlain">
  <pf-menu-content>
    <pf-menu-list>
      <pf-menu-item :value="0">Action</pf-menu-item>
      <pf-menu-item :value="1" to="#default-link2" @click.prevent>Link</pf-menu-item>
      <pf-menu-item disabled>Disabled action</pf-menu-item>
      <pf-menu-item disabled to="#default-link4">Disabled link</pf-menu-item>
      <pf-menu-item aria-disabled tooltip="aria-disabled action" :tooltip-attrs="{ position: 'top' }">
        Aria-disabled action
      </pf-menu-item>
      <pf-menu-item
        aria-disabled
        to="#default-link5"
        tooltip="aria-disabled link"
        :tooltip-attrs="{ position: 'top' }"
      >
        Aria-disabled link
      </pf-menu-item>
    </pf-menu-list>
  </pf-menu-content>
</pf-menu>
<div style="margin-top: 20px">
  <pf-checkbox id="toggle-plain" v-model="basicPlain" label="Plain menu" aria-label="plain menu checkbox" />
</div>`},{default:t(()=>[u(G,{plain:y.value},{default:t(()=>[u(_,null,{default:t(()=>[u(g,null,{default:t(()=>[u(h,{value:0},{default:t(()=>[...a[26]||=[p(`Action`,-1)]]),_:1}),u(h,{value:1,to:`#default-link2`,onClick:a[0]||=b(()=>{},[`prevent`])},{default:t(()=>[...a[27]||=[p(`Link`,-1)]]),_:1}),u(h,{disabled:``},{default:t(()=>[...a[28]||=[p(`Disabled action`,-1)]]),_:1}),u(h,{disabled:``,to:`#default-link4`},{default:t(()=>[...a[29]||=[p(`Disabled link`,-1)]]),_:1}),u(h,{"aria-disabled":``,tooltip:`aria-disabled action`,"tooltip-attrs":{position:`top`}},{default:t(()=>[...a[30]||=[p(` Aria-disabled action `,-1)]]),_:1}),u(h,{"aria-disabled":``,to:`#default-link5`,tooltip:`aria-disabled link`,"tooltip-attrs":{position:`top`}},{default:t(()=>[...a[31]||=[p(` Aria-disabled link `,-1)]]),_:1})]),_:1})]),_:1})]),_:1},8,[`plain`]),o(`div`,oe,[u(J,{id:`toggle-plain`,modelValue:y.value,"onUpdate:modelValue":a[1]||=e=>y.value=e,label:`Plain menu`,"aria-label":`plain menu checkbox`},null,8,[`modelValue`])])]),_:1}),u(Y,{title:`Basic (simplified)`,source:`<pf-menu>
  <pf-menu-item :value="0">Action</pf-menu-item>
  <pf-menu-item :value="1" to="#default-link2" @click.prevent>Link</pf-menu-item>
  <pf-menu-item disabled>Disabled action</pf-menu-item>
  <pf-menu-item disabled to="#default-link4">Disabled link</pf-menu-item>
</pf-menu>`},{intro:t(()=>[...a[32]||=[o(`div`,{class:`markdown pf-v6-c-content`},[o(`p`,null,[o(`code`,null,`pf-menu-content`),p(` and `),o(`code`,null,`pf-menu-list`),p(` are added automatically around the items when omitted.`)])],-1)]]),default:t(()=>[u(G,null,{default:t(()=>[u(h,{value:0},{default:t(()=>[...a[33]||=[p(`Action`,-1)]]),_:1}),u(h,{value:1,to:`#default-link2`,onClick:a[2]||=b(()=>{},[`prevent`])},{default:t(()=>[...a[34]||=[p(`Link`,-1)]]),_:1}),u(h,{disabled:``},{default:t(()=>[...a[35]||=[p(`Disabled action`,-1)]]),_:1}),u(h,{disabled:``,to:`#default-link4`},{default:t(()=>[...a[36]||=[p(`Disabled link`,-1)]]),_:1})]),_:1})]),_:1}),u(Y,{title:`Danger menu item`,source:`<pf-menu>
  <pf-menu-content>
    <pf-menu-list>
      <pf-menu-item :value="0">Action 1</pf-menu-item>
      <pf-menu-item :value="1">Action 2</pf-menu-item>
      <pf-divider component="li" />
      <pf-menu-item :value="2" danger>Delete</pf-menu-item>
    </pf-menu-list>
  </pf-menu-content>
</pf-menu>`},{default:t(()=>[u(G,null,{default:t(()=>[u(_,null,{default:t(()=>[u(g,null,{default:t(()=>[u(h,{value:0},{default:t(()=>[...a[37]||=[p(`Action 1`,-1)]]),_:1}),u(h,{value:1},{default:t(()=>[...a[38]||=[p(`Action 2`,-1)]]),_:1}),u(X,{component:`li`}),u(h,{value:2,danger:``},{default:t(()=>[...a[39]||=[p(`Delete`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),u(Y,{title:`With icons`,source:`<pf-menu>
  <pf-menu-content>
    <pf-menu-list>
      <pf-menu-item :value="0">
        <template #icon><code-branch-icon /></template>
        From git
      </pf-menu-item>
      <pf-menu-item :value="1">
        <template #icon><layer-group-icon /></template>
        Container image
      </pf-menu-item>
      <pf-menu-item :value="2">
        <template #icon><cube-icon /></template>
        Docker file
      </pf-menu-item>
    </pf-menu-list>
  </pf-menu-content>
</pf-menu>`},{default:t(()=>[u(G,null,{default:t(()=>[u(_,null,{default:t(()=>[u(g,null,{default:t(()=>[u(h,{value:0},{icon:t(()=>[u(c(S))]),default:t(()=>[a[40]||=p(` From git `,-1)]),_:1}),u(h,{value:1},{icon:t(()=>[u(c(w))]),default:t(()=>[a[41]||=p(` Container image `,-1)]),_:1}),u(h,{value:2},{icon:t(()=>[u(c(C))]),default:t(()=>[a[42]||=p(` Docker file `,-1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),u(Y,{title:`With actions`,source:`<pf-menu v-model:selected="actionsSelected" :active-item-id="0" :on-action-click="onActionClick">
  <pf-menu-content>
    <pf-menu-group label="Actions" label-heading-level="h3">
      <pf-menu-list>
        <pf-menu-item :value="0" description="This is a description">
          Item 1
          <template #actions>
            <pf-menu-item-action action-id="code" aria-label="Code">
              <template #icon><code-branch-icon /></template>
            </pf-menu-item-action>
          </template>
        </pf-menu-item>
        <pf-menu-item :value="1" disabled description="This is a description">
          Item 2
          <template #actions>
            <pf-menu-item-action action-id="alert" aria-label="Alert">
              <template #icon><bell-icon /></template>
            </pf-menu-item-action>
          </template>
        </pf-menu-item>
        <pf-menu-item :value="2">
          Item 3
          <template #actions>
            <pf-menu-item-action action-id="copy" aria-label="Copy">
              <template #icon><clipboard-icon /></template>
            </pf-menu-item-action>
          </template>
        </pf-menu-item>
        <pf-menu-item :value="3" description="This is a description">
          Item 4
          <template #actions>
            <pf-menu-item-action action-id="expand" aria-label="Expand">
              <template #icon><bars-icon /></template>
            </pf-menu-item-action>
          </template>
        </pf-menu-item>
      </pf-menu-list>
    </pf-menu-group>
  </pf-menu-content>
</pf-menu>`},{default:t(()=>[u(G,{selected:T.value,"onUpdate:selected":a[3]||=e=>T.value=e,"active-item-id":0,"on-action-click":se},{default:t(()=>[u(_,null,{default:t(()=>[u(Q,{label:`Actions`,"label-heading-level":`h3`},{default:t(()=>[u(g,null,{default:t(()=>[u(h,{value:0,description:`This is a description`},{actions:t(()=>[u(Z,{"action-id":`code`,"aria-label":`Code`},{icon:t(()=>[u(c(S))]),_:1})]),default:t(()=>[a[43]||=p(` Item 1 `,-1)]),_:1}),u(h,{value:1,disabled:``,description:`This is a description`},{actions:t(()=>[u(Z,{"action-id":`alert`,"aria-label":`Alert`},{icon:t(()=>[u(c(ne))]),_:1})]),default:t(()=>[a[44]||=p(` Item 2 `,-1)]),_:1}),u(h,{value:2},{actions:t(()=>[u(Z,{"action-id":`copy`,"aria-label":`Copy`},{icon:t(()=>[u(c(re))]),_:1})]),default:t(()=>[a[45]||=p(` Item 3 `,-1)]),_:1}),u(h,{value:3,description:`This is a description`},{actions:t(()=>[u(Z,{"action-id":`expand`,"aria-label":`Expand`},{icon:t(()=>[u(c(ie))]),_:1})]),default:t(()=>[a[46]||=p(` Item 4 `,-1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,[`selected`])]),_:1}),u(Y,{title:`With links`,source:`<pf-menu>
  <pf-menu-content>
    <pf-menu-list>
      <pf-menu-item :value="0" external-link to="#default-link1">Link 1</pf-menu-item>
      <pf-menu-item :value="1" external-link to="#default-link2">Link 2</pf-menu-item>
      <pf-menu-item :value="2" to="#default-link3">Link 3</pf-menu-item>
    </pf-menu-list>
  </pf-menu-content>
</pf-menu>`},{default:t(()=>[u(G,null,{default:t(()=>[u(_,null,{default:t(()=>[u(g,null,{default:t(()=>[u(h,{value:0,"external-link":``,to:`#default-link1`},{default:t(()=>[...a[47]||=[p(`Link 1`,-1)]]),_:1}),u(h,{value:1,"external-link":``,to:`#default-link2`},{default:t(()=>[...a[48]||=[p(`Link 2`,-1)]]),_:1}),u(h,{value:2,to:`#default-link3`},{default:t(()=>[...a[49]||=[p(`Link 3`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),u(Y,{title:`With descriptions`,source:`<pf-menu>
  <pf-menu-content>
    <pf-menu-list>
      <pf-menu-item :value="0" description="Description">
        <template #icon><code-branch-icon /></template>
        Action 1
      </pf-menu-item>
      <pf-menu-item :value="1" disabled description="Description">
        <template #icon><code-branch-icon /></template>
        Action 2 disabled
      </pf-menu-item>
      <pf-menu-item
        :value="2"
        description="Nunc non ornare ex, et pretium dui. Duis nec augue at urna elementum blandit tincidunt eget metus. Aenean sed metus id urna dignissim interdum. Aenean vel nisl vitae arcu vehicula pulvinar eget nec turpis. Cras sit amet est est."
      >
        <template #icon><code-branch-icon /></template>
        Action 3
      </pf-menu-item>
    </pf-menu-list>
  </pf-menu-content>
</pf-menu>`},{default:t(()=>[u(G,null,{default:t(()=>[u(_,null,{default:t(()=>[u(g,null,{default:t(()=>[u(h,{value:0,description:`Description`},{icon:t(()=>[u(c(S))]),default:t(()=>[a[50]||=p(` Action 1 `,-1)]),_:1}),u(h,{value:1,disabled:``,description:`Description`},{icon:t(()=>[u(c(S))]),default:t(()=>[a[51]||=p(` Action 2 disabled `,-1)]),_:1}),u(h,{value:2,description:`Nunc non ornare ex, et pretium dui. Duis nec augue at urna elementum blandit tincidunt eget metus. Aenean sed metus id urna dignissim interdum. Aenean vel nisl vitae arcu vehicula pulvinar eget nec turpis. Cras sit amet est est.`},{icon:t(()=>[u(c(S))]),default:t(()=>[a[52]||=p(` Action 3 `,-1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),u(Y,{title:`Item checkbox`,source:`<pf-menu v-model:selected="checkboxSelected">
  <pf-menu-content>
    <pf-menu-list>
      <pf-menu-item :value="0" check>Checkbox 1</pf-menu-item>
      <pf-menu-item :value="1" check>Checkbox 2</pf-menu-item>
      <pf-menu-item :value="2" check disabled>Checkbox 3</pf-menu-item>
    </pf-menu-list>
  </pf-menu-content>
</pf-menu>`},{default:t(()=>[u(G,{selected:E.value,"onUpdate:selected":a[4]||=e=>E.value=e},{default:t(()=>[u(_,null,{default:t(()=>[u(g,null,{default:t(()=>[u(h,{value:0,check:``},{default:t(()=>[...a[53]||=[p(`Checkbox 1`,-1)]]),_:1}),u(h,{value:1,check:``},{default:t(()=>[...a[54]||=[p(`Checkbox 2`,-1)]]),_:1}),u(h,{value:2,check:``,disabled:``},{default:t(()=>[...a[55]||=[p(`Checkbox 3`,-1)]]),_:1})]),_:1})]),_:1})]),_:1},8,[`selected`])]),_:1}),u(Y,{title:`Menu footer`,source:`<pf-menu>
  <pf-menu-content>
    <pf-menu-list>
      <pf-menu-item :value="0">Action</pf-menu-item>
      <pf-menu-item :value="1" to="#default-link2" @click.prevent>Link</pf-menu-item>
      <pf-menu-item disabled>Disabled action</pf-menu-item>
      <pf-menu-item disabled to="#default-link4">Disabled link</pf-menu-item>
    </pf-menu-list>
  </pf-menu-content>
  <pf-menu-footer>
    <pf-button variant="link" inline>Action</pf-button>
  </pf-menu-footer>
</pf-menu>`},{default:t(()=>[u(G,null,{default:t(()=>[u(_,null,{default:t(()=>[u(g,null,{default:t(()=>[u(h,{value:0},{default:t(()=>[...a[56]||=[p(`Action`,-1)]]),_:1}),u(h,{value:1,to:`#default-link2`,onClick:a[5]||=b(()=>{},[`prevent`])},{default:t(()=>[...a[57]||=[p(`Link`,-1)]]),_:1}),u(h,{disabled:``},{default:t(()=>[...a[58]||=[p(`Disabled action`,-1)]]),_:1}),u(h,{disabled:``,to:`#default-link4`},{default:t(()=>[...a[59]||=[p(`Disabled link`,-1)]]),_:1})]),_:1})]),_:1}),u(pe,null,{default:t(()=>[u(fe,{variant:`link`,inline:``},{default:t(()=>[...a[60]||=[p(`Action`,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),u(Y,{title:`Separated items`,source:`<pf-menu>
  <pf-menu-content>
    <pf-menu-list>
      <pf-menu-item :value="0">Action 1</pf-menu-item>
      <pf-menu-item :value="1">Action 2</pf-menu-item>
      <pf-divider component="li" />
      <pf-menu-item :value="2">Action 3</pf-menu-item>
    </pf-menu-list>
  </pf-menu-content>
</pf-menu>`},{default:t(()=>[u(G,null,{default:t(()=>[u(_,null,{default:t(()=>[u(g,null,{default:t(()=>[u(h,{value:0},{default:t(()=>[...a[61]||=[p(`Action 1`,-1)]]),_:1}),u(h,{value:1},{default:t(()=>[...a[62]||=[p(`Action 2`,-1)]]),_:1}),u(X,{component:`li`}),u(h,{value:2},{default:t(()=>[...a[63]||=[p(`Action 3`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),u(Y,{title:`Titled groups of items`,source:`<pf-menu>
  <pf-menu-content>
    <pf-menu-group>
      <pf-menu-list>
        <pf-menu-item :value="0" to="#">Link not in group</pf-menu-item>
      </pf-menu-list>
    </pf-menu-group>
    <pf-divider />
    <pf-menu-group label="Group 1" label-heading-level="h3">
      <pf-menu-list>
        <pf-menu-item :value="1" to="#">Link 1</pf-menu-item>
        <pf-menu-item :value="2">Link 2</pf-menu-item>
      </pf-menu-list>
    </pf-menu-group>
    <pf-divider />
    <pf-menu-group label="Group 2" label-heading-level="h3">
      <pf-menu-list>
        <pf-menu-item :value="3" to="#">Link 1</pf-menu-item>
        <pf-menu-item :value="4" to="#">Link 2</pf-menu-item>
      </pf-menu-list>
    </pf-menu-group>
  </pf-menu-content>
</pf-menu>`},{default:t(()=>[u(G,null,{default:t(()=>[u(_,null,{default:t(()=>[u(Q,null,{default:t(()=>[u(g,null,{default:t(()=>[u(h,{value:0,to:`#`},{default:t(()=>[...a[64]||=[p(`Link not in group`,-1)]]),_:1})]),_:1})]),_:1}),u(X),u(Q,{label:`Group 1`,"label-heading-level":`h3`},{default:t(()=>[u(g,null,{default:t(()=>[u(h,{value:1,to:`#`},{default:t(()=>[...a[65]||=[p(`Link 1`,-1)]]),_:1}),u(h,{value:2},{default:t(()=>[...a[66]||=[p(`Link 2`,-1)]]),_:1})]),_:1})]),_:1}),u(X),u(Q,{label:`Group 2`,"label-heading-level":`h3`},{default:t(()=>[u(g,null,{default:t(()=>[u(h,{value:3,to:`#`},{default:t(()=>[...a[67]||=[p(`Link 1`,-1)]]),_:1}),u(h,{value:4,to:`#`},{default:t(()=>[...a[68]||=[p(`Link 2`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),u(Y,{title:`With favorites`,source:`<pf-menu>
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
</pf-menu>`},{intro:t(()=>[...a[69]||=[o(`div`,{class:`markdown pf-v6-c-content`},[o(`p`,null,[p(`Items with `),o(`code`,null,`v-model:favorited`),p(` have a favorite action. The favorited items are copied in a favorites group at the top of the menu.`)])],-1)]]),default:t(()=>[u(G,null,{default:t(()=>[(d(!0),s(m,null,r(ce,(e,n)=>(d(),f(Q,{key:n,label:n},{default:t(()=>[(d(!0),s(m,null,r(e,e=>(d(),f(h,{key:e.value,favorited:e.favorite,"onUpdate:favorited":t=>e.favorite=t,name:e.value,value:e.value,description:e.description,disabled:e.disabled},null,8,[`favorited`,`onUpdate:favorited`,`name`,`value`,`description`,`disabled`]))),128))]),_:2},1032,[`label`]))),128))]),_:1})]),_:1}),u(Y,{title:`Filtering with search input`,source:`<pf-menu>
  <pf-menu-search>
    <pf-menu-search-input>
      <pf-search-input v-model="filter" aria-label="Filter menu items" />
    </pf-menu-search-input>
  </pf-menu-search>
  <pf-divider />
  <pf-menu-content>
    <pf-menu-list>
      <pf-menu-item v-for="(item, index) in filteredItems" :key="item" :value="index">{{ item }}</pf-menu-item>
      <pf-menu-item v-if="filter && !filteredItems.length" disabled>No results found</pf-menu-item>
    </pf-menu-list>
  </pf-menu-content>
</pf-menu>`},{default:t(()=>[u(G,null,{default:t(()=>[u(ge,null,{default:t(()=>[u(he,null,{default:t(()=>[u(me,{modelValue:D.value,"onUpdate:modelValue":a[6]||=e=>D.value=e,"aria-label":`Filter menu items`},null,8,[`modelValue`])]),_:1})]),_:1}),u(X),u(_,null,{default:t(()=>[u(g,null,{default:t(()=>[(d(!0),s(m,null,r(O.value,(e,n)=>(d(),f(h,{key:e,value:n},{default:t(()=>[p(i(e),1)]),_:2},1032,[`value`]))),128)),D.value&&!O.value.length?(d(),f(h,{key:0,disabled:``},{default:t(()=>[...a[70]||=[p(`No results found`,-1)]]),_:1})):v(``,!0)]),_:1})]),_:1})]),_:1})]),_:1}),u(Y,{title:`Option single select menu`,source:`<pf-menu v-model:selected="singleSelected" role="listbox" :active-item-id="singleSelected ?? undefined">
  <pf-menu-content>
    <pf-menu-list aria-label="Menu single select example">
      <pf-menu-item :value="0">Option 1</pf-menu-item>
      <pf-menu-item :value="1">Option 2</pf-menu-item>
      <pf-menu-item :value="2">
        <template #icon><table-icon /></template>
        Option 3
      </pf-menu-item>
    </pf-menu-list>
  </pf-menu-content>
</pf-menu>`},{default:t(()=>[u(G,{selected:k.value,"onUpdate:selected":a[7]||=e=>k.value=e,role:`listbox`,"active-item-id":k.value??void 0},{default:t(()=>[u(_,null,{default:t(()=>[u(g,{"aria-label":`Menu single select example`},{default:t(()=>[u(h,{value:0},{default:t(()=>[...a[71]||=[p(`Option 1`,-1)]]),_:1}),u(h,{value:1},{default:t(()=>[...a[72]||=[p(`Option 2`,-1)]]),_:1}),u(h,{value:2},{icon:t(()=>[u(c(ae))]),default:t(()=>[a[73]||=p(` Option 3 `,-1)]),_:1})]),_:1})]),_:1})]),_:1},8,[`selected`,`active-item-id`])]),_:1}),u(Y,{title:`Option multi select menu`,source:`<pf-menu v-model:selected="multiSelected" role="listbox" :active-item-id="0">
  <pf-menu-content>
    <pf-menu-list aria-multiselectable aria-label="Menu multi select example">
      <pf-menu-item :value="0">Option 1</pf-menu-item>
      <pf-menu-item :value="1">Option 2</pf-menu-item>
      <pf-menu-item :value="2">
        <template #icon><table-icon /></template>
        Option 3
      </pf-menu-item>
    </pf-menu-list>
  </pf-menu-content>
</pf-menu>`},{default:t(()=>[u(G,{selected:A.value,"onUpdate:selected":a[8]||=e=>A.value=e,role:`listbox`,"active-item-id":0},{default:t(()=>[u(_,null,{default:t(()=>[u(g,{"aria-multiselectable":``,"aria-label":`Menu multi select example`},{default:t(()=>[u(h,{value:0},{default:t(()=>[...a[74]||=[p(`Option 1`,-1)]]),_:1}),u(h,{value:1},{default:t(()=>[...a[75]||=[p(`Option 2`,-1)]]),_:1}),u(h,{value:2},{icon:t(()=>[u(c(ae))]),default:t(()=>[a[76]||=p(` Option 3 `,-1)]),_:1})]),_:1})]),_:1})]),_:1},8,[`selected`])]),_:1}),u(Y,{title:`Scrollable menus`,source:`<pf-menu scrollable>
  <pf-menu-content>
    <pf-menu-list>
      <pf-menu-item :value="0">Action 1</pf-menu-item>
      <pf-menu-item :value="1">Action 2</pf-menu-item>
      <pf-menu-item :value="2">Action 3</pf-menu-item>
      <pf-menu-item :value="3">Action 4</pf-menu-item>
      <pf-menu-item :value="4">Action 5</pf-menu-item>
      <pf-menu-item :value="5">Action 6</pf-menu-item>
      <pf-menu-item :value="6">Action 7</pf-menu-item>
      <pf-menu-item :value="7">Action 8</pf-menu-item>
      <pf-menu-item :value="8">Action 9</pf-menu-item>
      <pf-menu-item :value="9">Action 10</pf-menu-item>
      <pf-menu-item :value="10">Action 11</pf-menu-item>
      <pf-menu-item :value="11">Action 12</pf-menu-item>
      <pf-menu-item :value="12">Action 13</pf-menu-item>
      <pf-menu-item :value="13">Action 14</pf-menu-item>
      <pf-menu-item :value="14">Action 15</pf-menu-item>
      <pf-menu-item :value="15" to="#default-link2" @click.prevent>Link</pf-menu-item>
      <pf-menu-item disabled>Disabled action</pf-menu-item>
      <pf-menu-item disabled to="#default-link4">Disabled link</pf-menu-item>
    </pf-menu-list>
  </pf-menu-content>
</pf-menu>`},{default:t(()=>[u(G,{scrollable:``},{default:t(()=>[u(_,null,{default:t(()=>[u(g,null,{default:t(()=>[u(h,{value:0},{default:t(()=>[...a[77]||=[p(`Action 1`,-1)]]),_:1}),u(h,{value:1},{default:t(()=>[...a[78]||=[p(`Action 2`,-1)]]),_:1}),u(h,{value:2},{default:t(()=>[...a[79]||=[p(`Action 3`,-1)]]),_:1}),u(h,{value:3},{default:t(()=>[...a[80]||=[p(`Action 4`,-1)]]),_:1}),u(h,{value:4},{default:t(()=>[...a[81]||=[p(`Action 5`,-1)]]),_:1}),u(h,{value:5},{default:t(()=>[...a[82]||=[p(`Action 6`,-1)]]),_:1}),u(h,{value:6},{default:t(()=>[...a[83]||=[p(`Action 7`,-1)]]),_:1}),u(h,{value:7},{default:t(()=>[...a[84]||=[p(`Action 8`,-1)]]),_:1}),u(h,{value:8},{default:t(()=>[...a[85]||=[p(`Action 9`,-1)]]),_:1}),u(h,{value:9},{default:t(()=>[...a[86]||=[p(`Action 10`,-1)]]),_:1}),u(h,{value:10},{default:t(()=>[...a[87]||=[p(`Action 11`,-1)]]),_:1}),u(h,{value:11},{default:t(()=>[...a[88]||=[p(`Action 12`,-1)]]),_:1}),u(h,{value:12},{default:t(()=>[...a[89]||=[p(`Action 13`,-1)]]),_:1}),u(h,{value:13},{default:t(()=>[...a[90]||=[p(`Action 14`,-1)]]),_:1}),u(h,{value:14},{default:t(()=>[...a[91]||=[p(`Action 15`,-1)]]),_:1}),u(h,{value:15,to:`#default-link2`,onClick:a[9]||=b(()=>{},[`prevent`])},{default:t(()=>[...a[92]||=[p(`Link`,-1)]]),_:1}),u(h,{disabled:``},{default:t(()=>[...a[93]||=[p(`Disabled action`,-1)]]),_:1}),u(h,{disabled:``,to:`#default-link4`},{default:t(()=>[...a[94]||=[p(`Disabled link`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),u(Y,{title:`Scrollable menu with custom height`,source:`<pf-menu scrollable>
  <pf-menu-content menu-height="200px">
    <pf-menu-list>
      <pf-menu-item :value="0">Action 1</pf-menu-item>
      <pf-menu-item :value="1">Action 2</pf-menu-item>
      <pf-menu-item :value="2">Action 3</pf-menu-item>
      <pf-menu-item :value="3">Action 4</pf-menu-item>
      <pf-menu-item :value="4">Action 5</pf-menu-item>
      <pf-menu-item :value="5">Action 6</pf-menu-item>
      <pf-menu-item :value="6">Action 7</pf-menu-item>
      <pf-menu-item :value="7">Action 8</pf-menu-item>
      <pf-menu-item :value="8">Action 9</pf-menu-item>
      <pf-menu-item :value="9">Action 10</pf-menu-item>
      <pf-menu-item :value="10">Action 11</pf-menu-item>
      <pf-menu-item :value="11">Action 12</pf-menu-item>
      <pf-menu-item :value="12">Action 13</pf-menu-item>
      <pf-menu-item :value="13">Action 14</pf-menu-item>
      <pf-menu-item :value="14">Action 15</pf-menu-item>
      <pf-menu-item :value="15" to="#default-link2" @click.prevent>Link</pf-menu-item>
      <pf-menu-item disabled>Disabled action</pf-menu-item>
      <pf-menu-item disabled to="#default-link4">Disabled link</pf-menu-item>
    </pf-menu-list>
  </pf-menu-content>
</pf-menu>`},{default:t(()=>[u(G,{scrollable:``},{default:t(()=>[u(_,{"menu-height":`200px`},{default:t(()=>[u(g,null,{default:t(()=>[u(h,{value:0},{default:t(()=>[...a[95]||=[p(`Action 1`,-1)]]),_:1}),u(h,{value:1},{default:t(()=>[...a[96]||=[p(`Action 2`,-1)]]),_:1}),u(h,{value:2},{default:t(()=>[...a[97]||=[p(`Action 3`,-1)]]),_:1}),u(h,{value:3},{default:t(()=>[...a[98]||=[p(`Action 4`,-1)]]),_:1}),u(h,{value:4},{default:t(()=>[...a[99]||=[p(`Action 5`,-1)]]),_:1}),u(h,{value:5},{default:t(()=>[...a[100]||=[p(`Action 6`,-1)]]),_:1}),u(h,{value:6},{default:t(()=>[...a[101]||=[p(`Action 7`,-1)]]),_:1}),u(h,{value:7},{default:t(()=>[...a[102]||=[p(`Action 8`,-1)]]),_:1}),u(h,{value:8},{default:t(()=>[...a[103]||=[p(`Action 9`,-1)]]),_:1}),u(h,{value:9},{default:t(()=>[...a[104]||=[p(`Action 10`,-1)]]),_:1}),u(h,{value:10},{default:t(()=>[...a[105]||=[p(`Action 11`,-1)]]),_:1}),u(h,{value:11},{default:t(()=>[...a[106]||=[p(`Action 12`,-1)]]),_:1}),u(h,{value:12},{default:t(()=>[...a[107]||=[p(`Action 13`,-1)]]),_:1}),u(h,{value:13},{default:t(()=>[...a[108]||=[p(`Action 14`,-1)]]),_:1}),u(h,{value:14},{default:t(()=>[...a[109]||=[p(`Action 15`,-1)]]),_:1}),u(h,{value:15,to:`#default-link2`,onClick:a[10]||=b(()=>{},[`prevent`])},{default:t(()=>[...a[110]||=[p(`Link`,-1)]]),_:1}),u(h,{disabled:``},{default:t(()=>[...a[111]||=[p(`Disabled action`,-1)]]),_:1}),u(h,{disabled:``,to:`#default-link4`},{default:t(()=>[...a[112]||=[p(`Disabled link`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),u(Y,{title:`With view more`,source:`<pf-menu ref="viewMoreMenu" :active-item-id="viewMoreActive">
  <pf-menu-content>
    <pf-menu-list>
      <pf-menu-item
        v-for="option in viewMoreOptions.slice(0, viewMoreCount)"
        :key="option.value"
        :value="option.value"
        :disabled="option.disabled"
        :to="option.to"
        @click="option.to && $event.preventDefault()"
      >
        {{ option.label }}
      </pf-menu-item>
      <pf-menu-item
        v-if="viewMoreCount !== viewMoreOptions.length"
        value="loader"
        :load-button="!viewMoreLoading"
        :loading="viewMoreLoading"
        @click="onViewMoreClick"
      >
        <pf-spinner v-if="viewMoreLoading" size="lg" />
        <template v-else>View more</template>
      </pf-menu-item>
    </pf-menu-list>
  </pf-menu-content>
</pf-menu>`},{intro:t(()=>[...a[113]||=[o(`div`,{class:`markdown pf-v6-c-content`},[o(`p`,null,`If you want to initially render only a certain number of menu items within a large menu, you can add a "view more" menu item with a click handler that will render additional menu items.`),o(`p`,null,`In this example, 3 additional menu items are revealed each time the "view more" option is selected, with a loading icon simulating a network call to fetch more items. After all items are visible, the "view more" link disappears.`)],-1)]]),default:t(()=>[u(G,{ref_key:`viewMoreMenu`,ref:ue,"active-item-id":le.value},{default:t(()=>[u(_,null,{default:t(()=>[u(g,null,{default:t(()=>[(d(!0),s(m,null,r(j.slice(0,M.value),e=>(d(),f(h,{key:e.value,value:e.value,disabled:e.disabled,to:e.to,onClick:t=>e.to&&t.preventDefault()},{default:t(()=>[p(i(e.label),1)]),_:2},1032,[`value`,`disabled`,`to`,`onClick`]))),128)),M.value===j.length?v(``,!0):(d(),f(h,{key:0,value:`loader`,"load-button":!N.value,loading:N.value,onClick:de},{default:t(()=>[N.value?(d(),f(_e,{key:0,size:`lg`})):(d(),s(m,{key:1},[p(`View more`)],64))]),_:1},8,[`load-button`,`loading`]))]),_:1})]),_:1})]),_:1},8,[`active-item-id`])]),_:1}),u(Y,{title:`With drilldown`,source:`<pf-menu id="drilldown-rootMenu" contains-drilldown>
  <pf-menu-content>
    <pf-menu-list>
      <pf-menu-item value="group:start_rollout" direction="down">
        Start rollout
        <template #drilldown-menu>
          <pf-drilldown-menu id="drilldown-drilldownMenuStart">
            <pf-menu-item value="group:start_rollout_breadcrumb" direction="up">Start rollout</pf-menu-item>
            <pf-divider component="li" />
            <pf-menu-item value="group:app_grouping" description="Groups A-C" direction="down">
              Application grouping
              <template #drilldown-menu>
                <pf-drilldown-menu id="drilldown-drilldownMenuStartGrouping">
                  <pf-menu-item value="group:app_grouping_breadcrumb" direction="up"
                    >Application grouping</pf-menu-item>
                  <pf-divider component="li" />
                  <pf-menu-item value="group_a">Group A</pf-menu-item>
                  <pf-menu-item value="group_b">Group B</pf-menu-item>
                  <pf-menu-item value="group_c">Group C</pf-menu-item>
                </pf-drilldown-menu>
              </template>
            </pf-menu-item>
            <pf-menu-item value="count">Count</pf-menu-item>
            <pf-menu-item value="group:labels" direction="down">
              Labels
              <template #drilldown-menu>
                <pf-drilldown-menu id="drilldown-drilldownMenuStartLabels">
                  <pf-menu-item value="group:labels_breadcrumb" direction="up">Labels</pf-menu-item>
                  <pf-divider component="li" />
                  <pf-menu-item value="label_1">Label 1</pf-menu-item>
                  <pf-menu-item value="label_2">Label 2</pf-menu-item>
                  <pf-menu-item value="label_3">Label 3</pf-menu-item>
                </pf-drilldown-menu>
              </template>
            </pf-menu-item>
            <pf-menu-item value="annotations">Annotations</pf-menu-item>
          </pf-drilldown-menu>
        </template>
      </pf-menu-item>
      <pf-menu-item value="group:pause_rollout" direction="down">
        Pause rollouts
        <template #drilldown-menu>
          <pf-drilldown-menu id="drilldown-drilldownMenuPause">
            <pf-menu-item value="group:pause_rollout_breadcrumb" direction="up">Pause rollouts</pf-menu-item>
            <pf-divider component="li" />
            <pf-menu-item value="group:app_grouping" description="Groups A-C" direction="down">
              Application grouping
              <template #drilldown-menu>
                <pf-drilldown-menu id="drilldown-drilldownMenuGrouping">
                  <pf-menu-item value="group:app_grouping_breadcrumb" direction="up"
                    >Application grouping</pf-menu-item>
                  <pf-divider component="li" />
                  <pf-menu-item value="group_a">Group A</pf-menu-item>
                  <pf-menu-item value="group_b">Group B</pf-menu-item>
                  <pf-menu-item value="group_c">Group C</pf-menu-item>
                </pf-drilldown-menu>
              </template>
            </pf-menu-item>
            <pf-menu-item value="count">Count</pf-menu-item>
            <pf-menu-item value="group:labels" direction="down">
              Labels
              <template #drilldown-menu>
                <pf-drilldown-menu id="drilldown-drilldownMenuLabels">
                  <pf-menu-item value="group:labels_breadcrumb" direction="up">Labels</pf-menu-item>
                  <pf-divider component="li" />
                  <pf-menu-item value="label_1">Label 1</pf-menu-item>
                  <pf-menu-item value="label_2">Label 2</pf-menu-item>
                  <pf-menu-item value="label_3">Label 3</pf-menu-item>
                </pf-drilldown-menu>
              </template>
            </pf-menu-item>
            <pf-menu-item value="annotations">Annotations</pf-menu-item>
          </pf-drilldown-menu>
        </template>
      </pf-menu-item>
      <pf-menu-item value="group:storage" direction="down">
        <template #icon><database-icon /></template>
        Add storage
        <template #drilldown-menu>
          <pf-drilldown-menu id="drilldown-drilldownMenuStorage">
            <pf-menu-item value="group:storage_breadcrumb" direction="up">
              <template #icon><database-icon /></template>
              Add storage
            </pf-menu-item>
            <pf-divider component="li" />
            <pf-menu-item value="git">
              <template #icon><code-branch-icon /></template>
              From git
            </pf-menu-item>
            <pf-menu-item value="container">
              <template #icon><layer-group-icon /></template>
              Container image
            </pf-menu-item>
            <pf-menu-item value="docker">
              <template #icon><cube-icon /></template>
              Docker file
            </pf-menu-item>
          </pf-drilldown-menu>
        </template>
      </pf-menu-item>
      <pf-menu-item value="edit">Edit</pf-menu-item>
      <pf-menu-item value="delete_deployment">Delete deployment config</pf-menu-item>
    </pf-menu-list>
  </pf-menu-content>
</pf-menu>`},{intro:t(()=>[...a[114]||=[o(`div`,{class:`markdown pf-v6-c-content`},[o(`p`,null,[p(`Use a drilldown menu to contain different levels of menu items. When a parent menu item (an item with a `),o(`code`,null,`pf-drilldown-menu`),p(` in its `),o(`code`,null,`drilldown-menu`),p(` slot and `),o(`code`,null,`direction="down"`),p(`) is selected, the menu is replaced with the children items; an item with `),o(`code`,null,`direction="up"`),p(` drills back out.`)]),o(`ul`,null,[o(`li`,null,[p(`To indicate that a menu contains a drilldown, use the `),o(`code`,null,`contains-drilldown`),p(` property.`)]),o(`li`,null,[o(`code`,null,`pf-menu`),p(` manages the path of drilled-in menu item ids, the drilled-in menus and the active menu, which can be bound with `),o(`code`,null,`v-model:drilldown-item-path`),p(`, `),o(`code`,null,`v-model:drilled-in-menus`),p(` and `),o(`code`,null,`v-model:active-menu`),p(`.`)]),o(`li`,null,[p(`The `),o(`code`,null,`drill-in`),p(` and `),o(`code`,null,`drill-out`),p(` events are emitted when drilling into and out of a submenu.`)]),o(`li`,null,[p(`The content of the root menu follows the height of the active menu, which is also emitted with `),o(`code`,null,`get-menu-height`),p(`.`)])])],-1)]]),default:t(()=>[u(G,{id:`drilldown-rootMenu`,"contains-drilldown":``},{default:t(()=>[u(_,null,{default:t(()=>[u(g,null,{default:t(()=>[u(h,{value:`group:start_rollout`,direction:`down`},{"drilldown-menu":t(()=>[u($,{id:`drilldown-drilldownMenuStart`},{default:t(()=>[u(h,{value:`group:start_rollout_breadcrumb`,direction:`up`},{default:t(()=>[...a[115]||=[p(`Start rollout`,-1)]]),_:1}),u(X,{component:`li`}),u(h,{value:`group:app_grouping`,description:`Groups A-C`,direction:`down`},{"drilldown-menu":t(()=>[u($,{id:`drilldown-drilldownMenuStartGrouping`},{default:t(()=>[u(h,{value:`group:app_grouping_breadcrumb`,direction:`up`},{default:t(()=>[...a[116]||=[p(`Application grouping`,-1)]]),_:1}),u(X,{component:`li`}),u(h,{value:`group_a`},{default:t(()=>[...a[117]||=[p(`Group A`,-1)]]),_:1}),u(h,{value:`group_b`},{default:t(()=>[...a[118]||=[p(`Group B`,-1)]]),_:1}),u(h,{value:`group_c`},{default:t(()=>[...a[119]||=[p(`Group C`,-1)]]),_:1})]),_:1})]),default:t(()=>[a[120]||=p(` Application grouping `,-1)]),_:1}),u(h,{value:`count`},{default:t(()=>[...a[121]||=[p(`Count`,-1)]]),_:1}),u(h,{value:`group:labels`,direction:`down`},{"drilldown-menu":t(()=>[u($,{id:`drilldown-drilldownMenuStartLabels`},{default:t(()=>[u(h,{value:`group:labels_breadcrumb`,direction:`up`},{default:t(()=>[...a[122]||=[p(`Labels`,-1)]]),_:1}),u(X,{component:`li`}),u(h,{value:`label_1`},{default:t(()=>[...a[123]||=[p(`Label 1`,-1)]]),_:1}),u(h,{value:`label_2`},{default:t(()=>[...a[124]||=[p(`Label 2`,-1)]]),_:1}),u(h,{value:`label_3`},{default:t(()=>[...a[125]||=[p(`Label 3`,-1)]]),_:1})]),_:1})]),default:t(()=>[a[126]||=p(` Labels `,-1)]),_:1}),u(h,{value:`annotations`},{default:t(()=>[...a[127]||=[p(`Annotations`,-1)]]),_:1})]),_:1})]),default:t(()=>[a[128]||=p(` Start rollout `,-1)]),_:1}),u(h,{value:`group:pause_rollout`,direction:`down`},{"drilldown-menu":t(()=>[u($,{id:`drilldown-drilldownMenuPause`},{default:t(()=>[u(h,{value:`group:pause_rollout_breadcrumb`,direction:`up`},{default:t(()=>[...a[129]||=[p(`Pause rollouts`,-1)]]),_:1}),u(X,{component:`li`}),u(h,{value:`group:app_grouping`,description:`Groups A-C`,direction:`down`},{"drilldown-menu":t(()=>[u($,{id:`drilldown-drilldownMenuGrouping`},{default:t(()=>[u(h,{value:`group:app_grouping_breadcrumb`,direction:`up`},{default:t(()=>[...a[130]||=[p(`Application grouping`,-1)]]),_:1}),u(X,{component:`li`}),u(h,{value:`group_a`},{default:t(()=>[...a[131]||=[p(`Group A`,-1)]]),_:1}),u(h,{value:`group_b`},{default:t(()=>[...a[132]||=[p(`Group B`,-1)]]),_:1}),u(h,{value:`group_c`},{default:t(()=>[...a[133]||=[p(`Group C`,-1)]]),_:1})]),_:1})]),default:t(()=>[a[134]||=p(` Application grouping `,-1)]),_:1}),u(h,{value:`count`},{default:t(()=>[...a[135]||=[p(`Count`,-1)]]),_:1}),u(h,{value:`group:labels`,direction:`down`},{"drilldown-menu":t(()=>[u($,{id:`drilldown-drilldownMenuLabels`},{default:t(()=>[u(h,{value:`group:labels_breadcrumb`,direction:`up`},{default:t(()=>[...a[136]||=[p(`Labels`,-1)]]),_:1}),u(X,{component:`li`}),u(h,{value:`label_1`},{default:t(()=>[...a[137]||=[p(`Label 1`,-1)]]),_:1}),u(h,{value:`label_2`},{default:t(()=>[...a[138]||=[p(`Label 2`,-1)]]),_:1}),u(h,{value:`label_3`},{default:t(()=>[...a[139]||=[p(`Label 3`,-1)]]),_:1})]),_:1})]),default:t(()=>[a[140]||=p(` Labels `,-1)]),_:1}),u(h,{value:`annotations`},{default:t(()=>[...a[141]||=[p(`Annotations`,-1)]]),_:1})]),_:1})]),default:t(()=>[a[142]||=p(` Pause rollouts `,-1)]),_:1}),u(h,{value:`group:storage`,direction:`down`},{icon:t(()=>[u(c(x))]),"drilldown-menu":t(()=>[u($,{id:`drilldown-drilldownMenuStorage`},{default:t(()=>[u(h,{value:`group:storage_breadcrumb`,direction:`up`},{icon:t(()=>[u(c(x))]),default:t(()=>[a[143]||=p(` Add storage `,-1)]),_:1}),u(X,{component:`li`}),u(h,{value:`git`},{icon:t(()=>[u(c(S))]),default:t(()=>[a[144]||=p(` From git `,-1)]),_:1}),u(h,{value:`container`},{icon:t(()=>[u(c(w))]),default:t(()=>[a[145]||=p(` Container image `,-1)]),_:1}),u(h,{value:`docker`},{icon:t(()=>[u(c(C))]),default:t(()=>[a[146]||=p(` Docker file `,-1)]),_:1})]),_:1})]),default:t(()=>[a[147]||=p(` Add storage `,-1)]),_:1}),u(h,{value:`edit`},{default:t(()=>[...a[148]||=[p(`Edit`,-1)]]),_:1}),u(h,{value:`delete_deployment`},{default:t(()=>[...a[149]||=[p(`Delete deployment config`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),u(Y,{title:`Initially drilled-in menu`,source:`<pf-menu
  id="initial-state-rootMenu"
  contains-drilldown
  v-model:drilled-in-menus="initialDrilledIn"
  v-model:drilldown-item-path="initialPath"
  v-model:active-menu="initialActiveMenu"
>
  <pf-menu-content>
    <pf-menu-list>
      <pf-menu-item value="group:start_rollout" direction="down">
        Start rollout
        <template #drilldown-menu>
          <pf-drilldown-menu id="initial-state-drilldownMenuStart">
            <pf-menu-item value="group:start_rollout_breadcrumb" direction="up">Start rollout</pf-menu-item>
            <pf-divider component="li" />
            <pf-menu-item value="group:app_grouping" description="Groups A-C" direction="down">
              Application grouping
              <template #drilldown-menu>
                <pf-drilldown-menu id="initial-state-drilldownMenuStartGrouping">
                  <pf-menu-item value="group:app_grouping_breadcrumb" direction="up"
                    >Application grouping</pf-menu-item>
                  <pf-divider component="li" />
                  <pf-menu-item value="group_a">Group A</pf-menu-item>
                  <pf-menu-item value="group_b">Group B</pf-menu-item>
                  <pf-menu-item value="group_c">Group C</pf-menu-item>
                </pf-drilldown-menu>
              </template>
            </pf-menu-item>
            <pf-menu-item value="count">Count</pf-menu-item>
            <pf-menu-item value="group:labels" direction="down">
              Labels
              <template #drilldown-menu>
                <pf-drilldown-menu id="initial-state-drilldownMenuStartLabels">
                  <pf-menu-item value="group:labels_breadcrumb" direction="up">Labels</pf-menu-item>
                  <pf-divider component="li" />
                  <pf-menu-item value="label_1">Label 1</pf-menu-item>
                  <pf-menu-item value="label_2">Label 2</pf-menu-item>
                  <pf-menu-item value="label_3">Label 3</pf-menu-item>
                </pf-drilldown-menu>
              </template>
            </pf-menu-item>
            <pf-menu-item value="annotations">Annotations</pf-menu-item>
          </pf-drilldown-menu>
        </template>
      </pf-menu-item>
      <pf-menu-item value="group:pause_rollout" direction="down">
        Pause rollouts
        <template #drilldown-menu>
          <pf-drilldown-menu id="initial-state-drilldownMenuPause">
            <pf-menu-item value="group:pause_rollout_breadcrumb" direction="up">Pause rollouts</pf-menu-item>
            <pf-divider component="li" />
            <pf-menu-item value="group:app_grouping" description="Groups A-C" direction="down">
              Application grouping
              <template #drilldown-menu>
                <pf-drilldown-menu id="initial-state-drilldownMenuGrouping">
                  <pf-menu-item value="group:app_grouping_breadcrumb" direction="up"
                    >Application grouping</pf-menu-item>
                  <pf-divider component="li" />
                  <pf-menu-item value="group_a">Group A</pf-menu-item>
                  <pf-menu-item value="group_b">Group B</pf-menu-item>
                  <pf-menu-item value="group_c">Group C</pf-menu-item>
                </pf-drilldown-menu>
              </template>
            </pf-menu-item>
            <pf-menu-item value="count">Count</pf-menu-item>
            <pf-menu-item value="group:labels" direction="down">
              Labels
              <template #drilldown-menu>
                <pf-drilldown-menu id="initial-state-drilldownMenuLabels">
                  <pf-menu-item value="group:labels_breadcrumb" direction="up">Labels</pf-menu-item>
                  <pf-divider component="li" />
                  <pf-menu-item value="label_1">Label 1</pf-menu-item>
                  <pf-menu-item value="label_2">Label 2</pf-menu-item>
                  <pf-menu-item value="label_3">Label 3</pf-menu-item>
                </pf-drilldown-menu>
              </template>
            </pf-menu-item>
            <pf-menu-item value="annotations">Annotations</pf-menu-item>
          </pf-drilldown-menu>
        </template>
      </pf-menu-item>
      <pf-menu-item value="group:storage" direction="down">
        <template #icon><database-icon /></template>
        Add storage
        <template #drilldown-menu>
          <pf-drilldown-menu id="initial-state-drilldownMenuStorage">
            <pf-menu-item value="group:storage_breadcrumb" direction="up">
              <template #icon><database-icon /></template>
              Add storage
            </pf-menu-item>
            <pf-divider component="li" />
            <pf-menu-item value="git">
              <template #icon><code-branch-icon /></template>
              From git
            </pf-menu-item>
            <pf-menu-item value="container">
              <template #icon><layer-group-icon /></template>
              Container image
            </pf-menu-item>
            <pf-menu-item value="docker">
              <template #icon><cube-icon /></template>
              Docker file
            </pf-menu-item>
          </pf-drilldown-menu>
        </template>
      </pf-menu-item>
      <pf-menu-item value="edit">Edit</pf-menu-item>
      <pf-menu-item value="delete_deployment">Delete deployment config</pf-menu-item>
    </pf-menu-list>
  </pf-menu-content>
</pf-menu>`},{intro:t(()=>[...a[150]||=[o(`div`,{class:`markdown pf-v6-c-content`},[o(`p`,null,[p(`To render an initially drilled-in menu, bind `),o(`code`,null,`v-model:drilldown-item-path`),p(`, `),o(`code`,null,`v-model:drilled-in-menus`),p(` and `),o(`code`,null,`v-model:active-menu`),p(` to their initial values.`)])],-1)]]),default:t(()=>[u(G,{id:`initial-state-rootMenu`,"contains-drilldown":``,"drilled-in-menus":P.value,"onUpdate:drilledInMenus":a[11]||=e=>P.value=e,"drilldown-item-path":F.value,"onUpdate:drilldownItemPath":a[12]||=e=>F.value=e,"active-menu":I.value,"onUpdate:activeMenu":a[13]||=e=>I.value=e},{default:t(()=>[u(_,null,{default:t(()=>[u(g,null,{default:t(()=>[u(h,{value:`group:start_rollout`,direction:`down`},{"drilldown-menu":t(()=>[u($,{id:`initial-state-drilldownMenuStart`},{default:t(()=>[u(h,{value:`group:start_rollout_breadcrumb`,direction:`up`},{default:t(()=>[...a[151]||=[p(`Start rollout`,-1)]]),_:1}),u(X,{component:`li`}),u(h,{value:`group:app_grouping`,description:`Groups A-C`,direction:`down`},{"drilldown-menu":t(()=>[u($,{id:`initial-state-drilldownMenuStartGrouping`},{default:t(()=>[u(h,{value:`group:app_grouping_breadcrumb`,direction:`up`},{default:t(()=>[...a[152]||=[p(`Application grouping`,-1)]]),_:1}),u(X,{component:`li`}),u(h,{value:`group_a`},{default:t(()=>[...a[153]||=[p(`Group A`,-1)]]),_:1}),u(h,{value:`group_b`},{default:t(()=>[...a[154]||=[p(`Group B`,-1)]]),_:1}),u(h,{value:`group_c`},{default:t(()=>[...a[155]||=[p(`Group C`,-1)]]),_:1})]),_:1})]),default:t(()=>[a[156]||=p(` Application grouping `,-1)]),_:1}),u(h,{value:`count`},{default:t(()=>[...a[157]||=[p(`Count`,-1)]]),_:1}),u(h,{value:`group:labels`,direction:`down`},{"drilldown-menu":t(()=>[u($,{id:`initial-state-drilldownMenuStartLabels`},{default:t(()=>[u(h,{value:`group:labels_breadcrumb`,direction:`up`},{default:t(()=>[...a[158]||=[p(`Labels`,-1)]]),_:1}),u(X,{component:`li`}),u(h,{value:`label_1`},{default:t(()=>[...a[159]||=[p(`Label 1`,-1)]]),_:1}),u(h,{value:`label_2`},{default:t(()=>[...a[160]||=[p(`Label 2`,-1)]]),_:1}),u(h,{value:`label_3`},{default:t(()=>[...a[161]||=[p(`Label 3`,-1)]]),_:1})]),_:1})]),default:t(()=>[a[162]||=p(` Labels `,-1)]),_:1}),u(h,{value:`annotations`},{default:t(()=>[...a[163]||=[p(`Annotations`,-1)]]),_:1})]),_:1})]),default:t(()=>[a[164]||=p(` Start rollout `,-1)]),_:1}),u(h,{value:`group:pause_rollout`,direction:`down`},{"drilldown-menu":t(()=>[u($,{id:`initial-state-drilldownMenuPause`},{default:t(()=>[u(h,{value:`group:pause_rollout_breadcrumb`,direction:`up`},{default:t(()=>[...a[165]||=[p(`Pause rollouts`,-1)]]),_:1}),u(X,{component:`li`}),u(h,{value:`group:app_grouping`,description:`Groups A-C`,direction:`down`},{"drilldown-menu":t(()=>[u($,{id:`initial-state-drilldownMenuGrouping`},{default:t(()=>[u(h,{value:`group:app_grouping_breadcrumb`,direction:`up`},{default:t(()=>[...a[166]||=[p(`Application grouping`,-1)]]),_:1}),u(X,{component:`li`}),u(h,{value:`group_a`},{default:t(()=>[...a[167]||=[p(`Group A`,-1)]]),_:1}),u(h,{value:`group_b`},{default:t(()=>[...a[168]||=[p(`Group B`,-1)]]),_:1}),u(h,{value:`group_c`},{default:t(()=>[...a[169]||=[p(`Group C`,-1)]]),_:1})]),_:1})]),default:t(()=>[a[170]||=p(` Application grouping `,-1)]),_:1}),u(h,{value:`count`},{default:t(()=>[...a[171]||=[p(`Count`,-1)]]),_:1}),u(h,{value:`group:labels`,direction:`down`},{"drilldown-menu":t(()=>[u($,{id:`initial-state-drilldownMenuLabels`},{default:t(()=>[u(h,{value:`group:labels_breadcrumb`,direction:`up`},{default:t(()=>[...a[172]||=[p(`Labels`,-1)]]),_:1}),u(X,{component:`li`}),u(h,{value:`label_1`},{default:t(()=>[...a[173]||=[p(`Label 1`,-1)]]),_:1}),u(h,{value:`label_2`},{default:t(()=>[...a[174]||=[p(`Label 2`,-1)]]),_:1}),u(h,{value:`label_3`},{default:t(()=>[...a[175]||=[p(`Label 3`,-1)]]),_:1})]),_:1})]),default:t(()=>[a[176]||=p(` Labels `,-1)]),_:1}),u(h,{value:`annotations`},{default:t(()=>[...a[177]||=[p(`Annotations`,-1)]]),_:1})]),_:1})]),default:t(()=>[a[178]||=p(` Pause rollouts `,-1)]),_:1}),u(h,{value:`group:storage`,direction:`down`},{icon:t(()=>[u(c(x))]),"drilldown-menu":t(()=>[u($,{id:`initial-state-drilldownMenuStorage`},{default:t(()=>[u(h,{value:`group:storage_breadcrumb`,direction:`up`},{icon:t(()=>[u(c(x))]),default:t(()=>[a[179]||=p(` Add storage `,-1)]),_:1}),u(X,{component:`li`}),u(h,{value:`git`},{icon:t(()=>[u(c(S))]),default:t(()=>[a[180]||=p(` From git `,-1)]),_:1}),u(h,{value:`container`},{icon:t(()=>[u(c(w))]),default:t(()=>[a[181]||=p(` Container image `,-1)]),_:1}),u(h,{value:`docker`},{icon:t(()=>[u(c(C))]),default:t(()=>[a[182]||=p(` Docker file `,-1)]),_:1})]),_:1})]),default:t(()=>[a[183]||=p(` Add storage `,-1)]),_:1}),u(h,{value:`edit`},{default:t(()=>[...a[184]||=[p(`Edit`,-1)]]),_:1}),u(h,{value:`delete_deployment`},{default:t(()=>[...a[185]||=[p(`Delete deployment config`,-1)]]),_:1})]),_:1})]),_:1})]),_:1},8,[`drilled-in-menus`,`drilldown-item-path`,`active-menu`])]),_:1}),u(Y,{title:`With drilldown - submenu functions`,source:`<pf-menu id="functions-rootMenu" contains-drilldown>
  <pf-menu-content>
    <pf-menu-list>
      <pf-menu-item v-for="group in rolloutGroups" :key="group.value" :value="group.value" direction="down">
        {{ group.label }}
        <template #drilldown-menu>
          <pf-drilldown-menu :id="\`functions-\${group.value}\`">
            <pf-menu-item :value="\`\${group.value}_breadcrumb\`" direction="up">{{ group.label }}</pf-menu-item>
            <pf-divider component="li" />
            <pf-menu-item
              v-for="child in group.children"
              :key="child.value"
              :value="child.value"
              :direction="child.children ? 'down' : undefined"
            >
              {{ child.label }}
              <template v-if="child.children" #drilldown-menu>
                <pf-drilldown-menu :id="\`functions-\${group.value}-\${child.value}\`">
                  <pf-menu-item :value="\`\${child.value}_breadcrumb\`" direction="up">{{
                    child.label
                  }}</pf-menu-item>
                  <pf-divider component="li" />
                  <pf-menu-item v-for="leaf in child.children" :key="leaf" :value="leaf">{{ leaf }}</pf-menu-item>
                </pf-drilldown-menu>
              </template>
            </pf-menu-item>
          </pf-drilldown-menu>
        </template>
      </pf-menu-item>
      <pf-menu-item value="edit">Edit</pf-menu-item>
      <pf-menu-item value="delete_deployment">Delete deployment config</pf-menu-item>
    </pf-menu-list>
  </pf-menu-content>
</pf-menu>`},{intro:t(()=>[...a[186]||=[o(`div`,{class:`markdown pf-v6-c-content`},[o(`p`,null,`For added flexibility with large menus, the submenus can be generated from data, rather than writing everything up front.`)],-1)]]),default:t(()=>[u(G,{id:`functions-rootMenu`,"contains-drilldown":``},{default:t(()=>[u(_,null,{default:t(()=>[u(g,null,{default:t(()=>[(d(),s(m,null,r(L,e=>u(h,{key:e.value,value:e.value,direction:`down`},{"drilldown-menu":t(()=>[u($,{id:`functions-${e.value}`},{default:t(()=>[u(h,{value:`${e.value}_breadcrumb`,direction:`up`},{default:t(()=>[p(i(e.label),1)]),_:2},1032,[`value`]),u(X,{component:`li`}),(d(!0),s(m,null,r(e.children,n=>(d(),f(h,{key:n.value,value:n.value,direction:n.children?`down`:void 0},ee({default:t(()=>[p(i(n.label)+` `,1)]),_:2},[n.children?{name:`drilldown-menu`,fn:t(()=>[u($,{id:`functions-${e.value}-${n.value}`},{default:t(()=>[u(h,{value:`${n.value}_breadcrumb`,direction:`up`},{default:t(()=>[p(i(n.label),1)]),_:2},1032,[`value`]),u(X,{component:`li`}),(d(!0),s(m,null,r(n.children,e=>(d(),f(h,{key:e,value:e},{default:t(()=>[p(i(e),1)]),_:2},1032,[`value`]))),128))]),_:2},1032,[`id`])]),key:`0`}:void 0]),1032,[`value`,`direction`]))),128))]),_:2},1032,[`id`])]),default:t(()=>[p(i(e.label)+` `,1)]),_:2},1032,[`value`])),64)),u(h,{value:`edit`},{default:t(()=>[...a[187]||=[p(`Edit`,-1)]]),_:1}),u(h,{value:`delete_deployment`},{default:t(()=>[...a[188]||=[p(`Delete deployment config`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),u(Y,{title:`With drilldown breadcrumbs`,source:`<pf-checkbox
  id="toggle-max-menu-height"
  v-model="withMaxMenuHeight"
  label="Set max menu height"
  aria-label="Set max menu height checkbox" />
<br>
<pf-menu
  id="breadcrumbs-rootMenu"
  v-model:drilled-in-menus="breadcrumbDrilledIn"
  v-model:drilldown-item-path="breadcrumbPath"
  v-model:active-menu="breadcrumbActiveMenu"
  contains-drilldown
  :scrollable="withMaxMenuHeight"
>
  <template v-if="breadcrumbPath.length">
    <pf-menu-breadcrumb>
      <pf-breadcrumb>
        <pf-breadcrumb-item component="button" @click="drillOutTo(0)">Root</pf-breadcrumb-item>
        <pf-breadcrumb-item v-if="breadcrumbPath.length > 1" dropdown>
          <pf-dropdown close-on-select>
            <template #toggle>
              <pf-menu-toggle variant="plainText" aria-label="Previous levels">
                <template #badge><pf-badge read screen-reader-text="additional item">1</pf-badge></template>
              </pf-menu-toggle>
            </template>
            <pf-dropdown-item @click="drillOutTo(1)">
              <template #icon><angle-left-icon /></template>
              {{ breadcrumbLabels[breadcrumbPath[0]] }}
            </pf-dropdown-item>
          </pf-dropdown>
        </pf-breadcrumb-item>
        <pf-breadcrumb-heading component="button">
          {{ breadcrumbLabels[breadcrumbPath[breadcrumbPath.length - 1]] }}
        </pf-breadcrumb-heading>
      </pf-breadcrumb>
    </pf-menu-breadcrumb>
    <pf-divider />
  </template>
  <pf-menu-content :max-menu-height="withMaxMenuHeight ? '100px' : 'auto'">
    <pf-menu-list>
      <pf-menu-item v-for="group in rolloutGroups" :key="group.value" :value="group.value" direction="down">
        {{ group.label }}
        <template #drilldown-menu>
          <pf-drilldown-menu :id="\`breadcrumbs-\${group.value}\`">
            <pf-menu-item
              v-for="child in group.children"
              :key="child.value"
              :value="\`\${group.value}:\${child.value}\`"
              :description="child.description"
              :direction="child.children ? 'down' : undefined"
            >
              {{ child.label }} ({{ group.label.toLowerCase() }})
              <template v-if="child.children" #drilldown-menu>
                <pf-drilldown-menu :id="\`breadcrumbs-\${group.value}-\${child.value}\`">
                  <pf-menu-item v-for="leaf in child.children" :key="leaf" :value="leaf">
                    {{ leaf }} ({{ group.label.toLowerCase() }})
                  </pf-menu-item>
                </pf-drilldown-menu>
              </template>
            </pf-menu-item>
          </pf-drilldown-menu>
        </template>
      </pf-menu-item>
      <pf-menu-item value="edit">Edit</pf-menu-item>
      <pf-menu-item value="delete_deployment">Delete deployment config</pf-menu-item>
    </pf-menu-list>
  </pf-menu-content>
</pf-menu>`},{intro:t(()=>[...a[189]||=[o(`div`,{class:`markdown pf-v6-c-content`},[o(`p`,null,[p(`Use `),o(`a`,{href:`#/stories/components/breadcrumb`},`breadcrumbs`),p(` when a drilldown menu has more than 2 levels to offer users better navigation. Here the breadcrumb is built from the drilldown state bound with `),o(`code`,null,`v-model`),p(`, and drills out by truncating it.`)]),o(`p`,null,[p(`To control the height of a menu, use the `),o(`code`,null,`max-menu-height`),p(` property. Selecting the "Set max menu height" checkbox in the following example sets the menu height to "100px" and makes the menu scrollable.`)])],-1)]]),default:t(()=>[u(J,{id:`toggle-max-menu-height`,modelValue:R.value,"onUpdate:modelValue":a[14]||=e=>R.value=e,label:`Set max menu height`,"aria-label":`Set max menu height checkbox`},null,8,[`modelValue`]),a[194]||=o(`br`,null,null,-1),u(G,{id:`breadcrumbs-rootMenu`,"drilled-in-menus":z.value,"onUpdate:drilledInMenus":a[17]||=e=>z.value=e,"drilldown-item-path":B.value,"onUpdate:drilldownItemPath":a[18]||=e=>B.value=e,"active-menu":V.value,"onUpdate:activeMenu":a[19]||=e=>V.value=e,"contains-drilldown":``,scrollable:R.value},{default:t(()=>[B.value.length?(d(),s(m,{key:0},[u(Te,null,{default:t(()=>[u(we,null,{default:t(()=>[u(ve,{component:`button`,onClick:a[15]||=e=>U(0)},{default:t(()=>[...a[190]||=[p(`Root`,-1)]]),_:1}),B.value.length>1?(d(),f(ve,{key:0,dropdown:``},{default:t(()=>[u(Se,{"close-on-select":``},{toggle:t(()=>[u(be,{variant:`plainText`,"aria-label":`Previous levels`},{badge:t(()=>[u(ye,{read:``,"screen-reader-text":`additional item`},{default:t(()=>[...a[191]||=[p(`1`,-1)]]),_:1})]),_:1})]),default:t(()=>[u(xe,{onClick:a[16]||=e=>U(1)},{icon:t(()=>[u(c(te))]),default:t(()=>[p(` `+i(H.value[B.value[0]]),1)]),_:1})]),_:1})]),_:1})):v(``,!0),u(Ce,{component:`button`},{default:t(()=>[p(i(H.value[B.value[B.value.length-1]]),1)]),_:1})]),_:1})]),_:1}),u(X)],64)):v(``,!0),u(_,{"max-menu-height":R.value?`100px`:`auto`},{default:t(()=>[u(g,null,{default:t(()=>[(d(),s(m,null,r(L,e=>u(h,{key:e.value,value:e.value,direction:`down`},{"drilldown-menu":t(()=>[u($,{id:`breadcrumbs-${e.value}`},{default:t(()=>[(d(!0),s(m,null,r(e.children,n=>(d(),f(h,{key:n.value,value:`${e.value}:${n.value}`,description:n.description,direction:n.children?`down`:void 0},ee({default:t(()=>[p(i(n.label)+` (`+i(e.label.toLowerCase())+`) `,1)]),_:2},[n.children?{name:`drilldown-menu`,fn:t(()=>[u($,{id:`breadcrumbs-${e.value}-${n.value}`},{default:t(()=>[(d(!0),s(m,null,r(n.children,n=>(d(),f(h,{key:n,value:n},{default:t(()=>[p(i(n)+` (`+i(e.label.toLowerCase())+`) `,1)]),_:2},1032,[`value`]))),128))]),_:2},1032,[`id`])]),key:`0`}:void 0]),1032,[`value`,`description`,`direction`]))),128))]),_:2},1032,[`id`])]),default:t(()=>[p(i(e.label)+` `,1)]),_:2},1032,[`value`])),64)),u(h,{value:`edit`},{default:t(()=>[...a[192]||=[p(`Edit`,-1)]]),_:1}),u(h,{value:`delete_deployment`},{default:t(()=>[...a[193]||=[p(`Delete deployment config`,-1)]]),_:1})]),_:1})]),_:1},8,[`max-menu-height`])]),_:1},8,[`drilled-in-menus`,`drilldown-item-path`,`active-menu`,`scrollable`])]),_:1}),u(Y,{title:`With drilldown and inline filter`,source:`<pf-menu id="filter_drilldown-rootMenu" contains-drilldown>
  <pf-menu-content>
    <pf-menu-list>
      <pf-menu-item value="filter_group:start_rollout" direction="down">
        Start rollout
        <template #drilldown-menu>
          <pf-drilldown-menu id="filter_drilldown-drilldownMenuStart">
            <pf-menu-item value="filter_group:start_rollout_breadcrumb" direction="up"
              >Start rollout</pf-menu-item>
            <pf-divider component="li" />
            <pf-menu-search>
              <pf-menu-search-input>
                <pf-search-input v-model="startInput" aria-label="Filter menu items" />
              </pf-menu-search-input>
            </pf-menu-search>
            <pf-divider component="li" />
            <pf-menu-item
              v-for="(opt, index) in filteredStartItems"
              :key="opt.item"
              :value="index"
              :description="opt.description"
            >
              {{ opt.item }}
            </pf-menu-item>
            <pf-menu-item v-if="startInput && !filteredStartItems.length" disabled>No results found</pf-menu-item>
          </pf-drilldown-menu>
        </template>
      </pf-menu-item>
      <pf-menu-item value="item-a">Item B</pf-menu-item>
      <pf-menu-item value="item-b">Item C</pf-menu-item>
      <pf-menu-item value="item-c">Item D</pf-menu-item>
    </pf-menu-list>
  </pf-menu-content>
</pf-menu>`},{default:t(()=>[u(G,{id:`filter_drilldown-rootMenu`,"contains-drilldown":``},{default:t(()=>[u(_,null,{default:t(()=>[u(g,null,{default:t(()=>[u(h,{value:`filter_group:start_rollout`,direction:`down`},{"drilldown-menu":t(()=>[u($,{id:`filter_drilldown-drilldownMenuStart`},{default:t(()=>[u(h,{value:`filter_group:start_rollout_breadcrumb`,direction:`up`},{default:t(()=>[...a[195]||=[p(`Start rollout`,-1)]]),_:1}),u(X,{component:`li`}),u(ge,null,{default:t(()=>[u(he,null,{default:t(()=>[u(me,{modelValue:W.value,"onUpdate:modelValue":a[20]||=e=>W.value=e,"aria-label":`Filter menu items`},null,8,[`modelValue`])]),_:1})]),_:1}),u(X,{component:`li`}),(d(!0),s(m,null,r(K.value,(e,n)=>(d(),f(h,{key:e.item,value:n,description:e.description},{default:t(()=>[p(i(e.item),1)]),_:2},1032,[`value`,`description`]))),128)),W.value&&!K.value.length?(d(),f(h,{key:0,disabled:``},{default:t(()=>[...a[196]||=[p(`No results found`,-1)]]),_:1})):v(``,!0)]),_:1})]),default:t(()=>[a[197]||=p(` Start rollout `,-1)]),_:1}),u(h,{value:`item-a`},{default:t(()=>[...a[198]||=[p(`Item B`,-1)]]),_:1}),u(h,{value:`item-b`},{default:t(()=>[...a[199]||=[p(`Item C`,-1)]]),_:1}),u(h,{value:`item-c`},{default:t(()=>[...a[200]||=[p(`Item D`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),u(Y,{title:`Menu container`,source:`<pf-menu-container v-model:open="containerOpen" should-focus-first-item-on-open>
  <template #toggle>
    <pf-menu-toggle v-model:expanded="containerOpen">
      {{ containerOpen ? 'Expanded' : 'Collapsed' }}
    </pf-menu-toggle>
  </template>
  <pf-menu @select="containerOpen = false">
    <pf-menu-content>
      <pf-menu-list>
        <pf-menu-item :value="0">Action</pf-menu-item>
        <pf-menu-item :value="1" to="#default-link2" @click.prevent>Link</pf-menu-item>
        <pf-menu-item disabled>Disabled action</pf-menu-item>
      </pf-menu-list>
    </pf-menu-content>
  </pf-menu>
</pf-menu-container>`},{intro:t(()=>[...a[201]||=[o(`div`,{class:`markdown pf-v6-c-content`},[o(`p`,null,[o(`code`,null,`pf-menu-container`),p(` links a menu to its toggle: it positions the menu, closes it on outside clicks and with the `),o(`code`,null,`open-change-keys`),p(` (tab and escape by default), and focuses the first or last item with the arrow keys from the toggle.`)])],-1)]]),default:t(()=>[u(Ee,{open:q.value,"onUpdate:open":a[24]||=e=>q.value=e,"should-focus-first-item-on-open":``},{toggle:t(()=>[u(be,{expanded:q.value,"onUpdate:expanded":a[21]||=e=>q.value=e},{default:t(()=>[p(i(q.value?`Expanded`:`Collapsed`),1)]),_:1},8,[`expanded`])]),default:t(()=>[u(G,{onSelect:a[23]||=e=>q.value=!1},{default:t(()=>[u(_,null,{default:t(()=>[u(g,null,{default:t(()=>[u(h,{value:0},{default:t(()=>[...a[202]||=[p(`Action`,-1)]]),_:1}),u(h,{value:1,to:`#default-link2`,onClick:a[22]||=b(()=>{},[`prevent`])},{default:t(()=>[...a[203]||=[p(`Link`,-1)]]),_:1}),u(h,{disabled:``},{default:t(()=>[...a[204]||=[p(`Disabled action`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,[`open`])]),_:1})]),_:1})}}});export{T as default};