import{F as e,G as t,I as n,N as r,Nt as i,c as a,d as o,ft as s,g as c,h as l,j as u,l as d,m as f,n as p,nt as m,rt as h,y as g}from"./runtime-core.esm-bundler-DKmYt4j6.js";import{W as _}from"./index-Cl3hMFDe.js";import{t as v}from"./cubes-icon-CqiNdIGM.js";import{t as y}from"./cloud-icon-BXWfDcZ7.js";import{t as b}from"./code-icon-DsTR7EwR.js";import{t as x}from"./folder-icon-DxdCDukg.js";import{t as S}from"./folder-open-icon-BeZBPVOh.js";var C=_({name:`LinkIcon`,height:512,width:576,svgPathData:`M419.5 96c-16.6 0-32.7 4.5-46.8 12.7-15.8-16-34.2-29.4-54.5-39.5 28.2-24 64.1-37.2 101.3-37.2 86.4 0 156.5 70 156.5 156.5 0 41.5-16.5 81.3-45.8 110.6l-71.1 71.1c-29.3 29.3-69.1 45.8-110.6 45.8-86.4 0-156.5-70-156.5-156.5 0-1.5 0-3 .1-4.5 .5-17.7 15.2-31.6 32.9-31.1s31.6 15.2 31.1 32.9c0 .9 0 1.8 0 2.6 0 51.1 41.4 92.5 92.5 92.5 24.5 0 48-9.7 65.4-27.1l71.1-71.1c17.3-17.3 27.1-40.9 27.1-65.4 0-51.1-41.4-92.5-92.5-92.5zM275.2 173.3c-1.9-.8-3.8-1.9-5.5-3.1-12.6-6.5-27-10.2-42.1-10.2-24.5 0-48 9.7-65.4 27.1L91.1 258.2c-17.3 17.3-27.1 40.9-27.1 65.4 0 51.1 41.4 92.5 92.5 92.5 16.5 0 32.6-4.4 46.7-12.6 15.8 16 34.2 29.4 54.6 39.5-28.2 23.9-64 37.2-101.3 37.2-86.4 0-156.5-70-156.5-156.5 0-41.5 16.5-81.3 45.8-110.6l71.1-71.1c29.3-29.3 69.1-45.8 110.6-45.8 86.6 0 156.5 70.6 156.5 156.9 0 1.3 0 2.6 0 3.9-.4 17.7-15.1 31.6-32.8 31.2s-31.6-15.1-31.2-32.8c0-.8 0-1.5 0-2.3 0-33.7-18-63.3-44.8-79.6z`,yOffset:0,xOffset:0}),w=5,T=c({__name:`Navigation.story`,setup(_){let T=m({default:0,grouped:`group-1_item-1`,expandable:`nav-expandable-group-1_item-1`,thirdLevel:`nav-expand3rd-group-1_item-1`,mixed:`ungrouped_item-1`,horizontal:0,subnav:0,flyout:`nav-flyout-default-link-1`,icons:0,docked:0}),E=m({expandable:`nav-expandable-group-1`,thirdLevel:`nav-expand3rd-group-1`,mixed:``}),D=h(!1);function O(e){console.log(e)}function k(e,t,n){O(`Group ${t} expanded? ${n}`)}function A(e,t,n){E.expandable=t,T.expandable=n}function j(e,t,n){E.thirdLevel=t,T.thirdLevel=n}function M(e,t,n){E.mixed=t,T.mixed=n}let N=c({props:{depth:{type:Number,required:!0}},setup(t){let[n,r,i,a]=[`pf-menu`,`pf-menu-content`,`pf-menu-list`,`pf-menu-item`].map(t=>e(t)),o=e=>e.preventDefault(),s=e=>g(a,{value:e,onClick:o},{default:()=>`Next menu`,...t.depth>1&&{"flyout-menu":()=>g(N,{depth:t.depth-1})}});return()=>g(n,{id:`nav-flyout-menu-${t.depth}`,containsFlyout:!0,navFlyout:!0,onSelect:(e,t)=>T.flyout=t},()=>g(r,()=>g(i,()=>[s(`nav-flyout-next-menu-${t.depth}`),...Array.from({length:w-t.depth},(e,n)=>g(a,{key:n,value:`nav-flyout-${t.depth}-${n}`,to:`#menu-link-${t.depth}-${n}`,active:T.flyout===`nav-flyout-${t.depth}-${n}`,onClick:o},()=>`Menu ${t.depth} item ${n}`)),s(`nav-flyout-next-menu-2-${t.depth}`)])))}});return(c,m)=>{let h=e(`component-info`),g=e(`pf-nav-item`),_=e(`pf-nav-list`),w=e(`pf-nav`),P=e(`story-canvas`),F=e(`pf-nav-group`),I=e(`pf-nav-expandable`),L=e(`pf-nav-item-separator`),R=e(`pf-menu-item`),z=e(`pf-drilldown-menu`),B=e(`pf-menu-list`),V=e(`pf-menu-content`),H=e(`pf-menu`),U=e(`doc-page`);return u(),d(U,{name:`Components/Navigation.story.vue`,title:`Navigation`},{description:t(()=>[...m[9]||=[f(`A `,-1),a(`b`,null,`navigation`,-1),f(` organizes an application's structure and content, making it easy to find information and accomplish tasks. Navigation communicates relationships, context, and actions a user can take within an application.`,-1)]]),apidocs:t(()=>[l(h,{name:`PfNav`,doc:{name:`PfNav`,exportName:`PfNav`,displayName:`Nav`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`variant`,description:`The nav variant to use. Docked is in beta.`,required:!1,type:{name:`union`,elements:[{name:`"default"`},{name:`"horizontal"`},{name:`"horizontal-subnav"`},{name:`"docked"`}]},defaultValue:{func:!1,value:`'default'`}},{name:`ariaLabel`,description:`Accessible label for the nav when there are multiple navs on the page`,required:!1,type:{name:`string`}},{name:`expanded`,description:`Flag indicating the docked nav should display text. Only applies when variant is docked.`,required:!1,type:{name:`boolean`}}],events:[{name:`select`,type:{names:[`Event`]},description:`An item was selected`},{name:`toggle`,type:{names:[`Event`]},description:`An expandable was expanded or collapsed`}],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Nav/Nav.vue`]}}),l(h,{name:`PfNavList`,doc:{name:`PfNavList`,exportName:`PfNavList`,displayName:`NavList`,description:``,tags:{},props:[{name:`backScrollAriaLabel`,description:`Aria-label for the back scroll button`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`'Scroll back'`}},{name:`forwardScrollAriaLabel`,description:`Aria-label for the forward scroll button`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`'Scroll forward'`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Nav/NavList.vue`]}}),l(h,{name:`PfNavGroup`,doc:{name:`PfNavGroup`,exportName:`PfNavGroup`,displayName:`NavGroup`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`title`,description:`Title shown for the group. Without one, the group needs an aria-label.`,required:!1,type:{name:`string`}},{name:`id`,description:`Identifier of the title, labelling the group. Generated when not set.`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`() => useId()`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Nav/NavGroup.vue`]}}),l(h,{name:`PfNavItem`,doc:{name:`PfNavItem`,exportName:`PfNavItem`,displayName:`NavItem`,description:``,tags:{},expose:[{name:`el`,description:`The nav item element`}],props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`component`,description:`Element rendering the nav item`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`'li'`}},{name:`linkComponent`,description:"Element or component rendering the link. Defaults to a router-link with `to`, an anchor otherwise, or a button with a flyout",required:!1,type:{name:`string`}},{name:`groupId`,description:`Group identifier, emitted with the select event of the item and of the nav`,required:!1,type:{name:`NavId`}},{name:`itemId`,description:`Item identifier, emitted with the select event of the item and of the nav`,required:!1,type:{name:`NavId`}},{name:`active`,description:`Flag indicating whether the item is active`,required:!1,type:{name:`boolean`}},{name:`preventDefault`,description:`Prevents the default link action on click, to handle the navigation yourself`,required:!1,type:{name:`boolean`}},{name:`itemClass`,description:`Additional classes added to the nav item`,required:!1,type:{name:`TSIndexedAccessType`}},{name:`itemAttrs`,description:`Additional attributes added to the nav item`,required:!1,type:{name:`HTMLAttributes`}},{name:`to`,description:`Router location of the link. Should not be used with a flyout.`,required:!1,type:{name:`RouteLocationRaw`}},{name:`tabindex`,description:`Tab index of the link. Removed from the tab order while the page sidebar is collapsed when not set.`,required:!1,type:{name:`union`,elements:[{name:`string`},{name:`number`}]}},{name:`zIndex`,description:`z-index of the flyout`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`9999`}}],events:[{name:`showflyout`,description:`The flyout was shown`},{name:`select`,type:{names:[`Event`]},description:`The item was clicked`}],slots:[{name:`icon`,description:`Icon added before the content`},{name:`default`,description:`Content of the link`},{name:`flyout`,description:`Flyout of the item, usually a pf-menu with nav-flyout. The item renders a button rather than a link.`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Nav/NavItem.vue`]}}),l(h,{name:`PfNavItemSeparator`,doc:{name:`PfNavItemSeparator`,exportName:`PfNavItemSeparator`,displayName:`NavItemSeparator`,description:``,tags:{},props:[],events:[],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Nav/NavItemSeparator.vue`]}}),l(h,{name:`PfNavExpandable`,doc:{name:`PfNavExpandable`,exportName:`PfNavExpandable`,displayName:`NavExpandable`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`title`,description:`Title shown for the expandable list, replaced by the title slot`,required:!1,type:{name:`string`}},{name:`srText`,description:`If defined, screen readers will read this text instead of the list title`,required:!1,type:{name:`string`}},{name:`groupId`,description:`Group identifier, emitted with update:expanded and with the toggle event of the nav`,required:!1,type:{name:`NavId`}},{name:`id`,description:`Identifier of the toggle (or of the srText heading), labelling the list. Generated when not set.`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`() => useId()`}},{name:`active`,description:`Makes the expandable list title active`,required:!1,type:{name:`boolean`}},{name:`expanded`,description:`Expands the list: the initial state, followed whenever it changes. Bind it with v-model:expanded to track clicks.`,required:!1,type:{name:`boolean`}},{name:`expandableIcon`,description:`Adds an expandable icon to indicate the section is expandable`,required:!1,type:{name:`boolean`}},{name:`buttonAttrs`,description:`Additional attributes added to the toggle button`,required:!1,type:{name:`ButtonHTMLAttributes`}}],events:[{name:`update:expanded`,type:{names:[`boolean`]},description:`The list was expanded or collapsed by its toggle`}],slots:[{name:`icon`,description:`Icon rendered before the title`},{name:`title`,description:`Title of the expandable list, replacing the title prop`},{name:`default`,description:`Items of the expandable list`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Nav/NavExpandable.vue`]}})]),default:t(()=>[m[27]||=a(`div`,{class:`markdown pf-v6-c-content`},[a(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),a(`ul`,null,[a(`li`,null,[a(`code`,null,`pf-nav`),f(` emits `),a(`code`,null,`select`),f(` with the event, the group id, the item id and the item location (`),a(`code`,null,`onSelect`),f(`), and `),a(`code`,null,`toggle`),f(` with the event, the group id and the expanded state (`),a(`code`,null,`onToggle`),f(`).`)]),a(`li`,null,[a(`code`,null,`pf-nav-item`),f(` emits its own `),a(`code`,null,`select`),f(` with the event, the group id and the item id (`),a(`code`,null,`onClick`),f(`), and `),a(`code`,null,`showflyout`),f(` (`),a(`code`,null,`onShowFlyout`),f(`).`)]),a(`li`,null,[a(`code`,null,`to`),f(` of `),a(`code`,null,`pf-nav-item`),f(` is a vue-router location rendered with a `),a(`code`,null,`router-link`),f(`, which also marks the active route as current; a plain link uses `),a(`code`,null,`href`),f(`.`)]),a(`li`,null,[a(`code`,null,`component`),f(` of `),a(`code`,null,`pf-nav-item`),f(` is the element of the item, while `),a(`code`,null,`link-component`),f(` replaces the link element (`),a(`code`,null,`component`),f(`, or a custom child element); the `),a(`code`,null,`class`),f(` and the attributes go on the link, `),a(`code`,null,`item-class`),f(` and `),a(`code`,null,`item-attrs`),f(` on the item.`)]),a(`li`,null,[f(`The `),a(`code`,null,`icon`),f(` and `),a(`code`,null,`flyout`),f(` props of `),a(`code`,null,`pf-nav-item`),f(` and the `),a(`code`,null,`icon`),f(` prop of `),a(`code`,null,`pf-nav-expandable`),f(` are slots; the `),a(`code`,null,`title`),f(` of `),a(`code`,null,`pf-nav-expandable`),f(` can also be a slot.`)]),a(`li`,null,[a(`code`,null,`pf-nav-expandable`),f(` toggles itself: `),a(`code`,null,`expanded`),f(` sets its state whenever it changes and `),a(`code`,null,`v-model:expanded`),f(` tracks the toggles, emitted with the group id (`),a(`code`,null,`onExpand`),f(`).`)]),a(`li`,null,[a(`code`,null,`has-expandable-icon`),f(` is `),a(`code`,null,`expandable-icon`),f(` and `),a(`code`,null,`buttonProps`),f(` is `),a(`code`,null,`button-attrs`),f(`. See `),a(`a`,{href:`#/`},`common differences from patternfly-react`),f(`.`)])]),a(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),l(P,{title:`Default`,source:`<pf-nav aria-label="Default global" ouia-id="DefaultNav" @select="(_e, _g, itemId) => (active.default = itemId)">
  <pf-nav-list>
    <pf-nav-item
      v-for="i in 4"
      :id="\`nav-default-link\${i}\`"
      :key="i"
      prevent-default
      :href="\`#nav-default-link\${i}\`"
      :item-id="i - 1"
      :active="active.default === i - 1"
    >
      Default Link {{ i }}
    </pf-nav-item>
  </pf-nav-list>
</pf-nav>`},{default:t(()=>[l(w,{"aria-label":`Default global`,"ouia-id":`DefaultNav`,onSelect:m[0]||=(e,t,n)=>T.default=n},{default:t(()=>[l(_,null,{default:t(()=>[(u(),o(p,null,r(4,e=>l(g,{id:`nav-default-link${e}`,key:e,"prevent-default":``,href:`#nav-default-link${e}`,"item-id":e-1,active:T.default===e-1},{default:t(()=>[f(` Default Link `+i(e),1)]),_:2},1032,[`id`,`href`,`item-id`,`active`])),64))]),_:1})]),_:1})]),_:1}),l(P,{title:`Grouped`,source:'<pf-nav aria-label="Grouped global" @select="(_e, _g, itemId) => (active.grouped = itemId)">\n  <pf-nav-group v-for="g in 2" :key="g" :title="`Section title ${g}`">\n    <pf-nav-item\n      v-for="i in 3"\n      :key="i"\n      prevent-default\n      :href="`#nav-group${g}-item${i}`"\n      :item-id="`group-${g}_item-${i}`"\n      :active="active.grouped === `group-${g}_item-${i}`"\n    >\n      Group {{ g }} Link {{ i }}\n    </pf-nav-item>\n  </pf-nav-group>\n</pf-nav>'},{intro:t(()=>[...m[10]||=[a(`div`,{class:`markdown pf-v6-c-content`},[a(`p`,null,[f(`The following example shows two navigation groups, each with a `),a(`code`,null,`title`),f(` prop passed into the nav group component. To keep nav groups accessible an `),a(`code`,null,`aria-label`),f(` must be passed in if the `),a(`code`,null,`title`),f(` prop is not passed in.`)])],-1)]]),default:t(()=>[l(w,{"aria-label":`Grouped global`,onSelect:m[1]||=(e,t,n)=>T.grouped=n},{default:t(()=>[(u(),o(p,null,r(2,e=>l(F,{key:e,title:`Section title ${e}`},{default:t(()=>[(u(),o(p,null,r(3,n=>l(g,{key:n,"prevent-default":``,href:`#nav-group${e}-item${n}`,"item-id":`group-${e}_item-${n}`,active:T.grouped===`group-${e}_item-${n}`},{default:t(()=>[f(` Group `+i(e)+` Link `+i(n),1)]),_:2},1032,[`href`,`item-id`,`active`])),64))]),_:2},1032,[`title`])),64))]),_:1})]),_:1}),l(P,{title:`Expandable`,source:`<pf-nav aria-label="Expandable global" @select="onExpandableSelect" @toggle="onToggle">
  <pf-nav-list>
    <pf-nav-expandable
      title="Expandable Group 1"
      group-id="nav-expandable-group-1"
      :active="activeGroup.expandable === 'nav-expandable-group-1'"
      expanded
    >
      <pf-nav-item
        v-for="i in 3"
        :id="\`expandable-\${i}\`"
        :key="i"
        prevent-default
        :href="\`#expandable-\${i}\`"
        group-id="nav-expandable-group-1"
        :item-id="\`nav-expandable-group-1_item-\${i}\`"
        :active="active.expandable === \`nav-expandable-group-1_item-\${i}\`"
      >
        Subnav 1 Link {{ i }}
      </pf-nav-item>
    </pf-nav-expandable>
    <pf-nav-expandable
      title="Expandable Group 2"
      group-id="nav-expandable-group-2"
      :active="activeGroup.expandable === 'nav-expandable-group-2'"
      expanded
    >
      <pf-nav-item
        id="expandable-custom-click"
        prevent-default
        href="#expandable-custom-click"
        group-id="nav-expandable-group-2"
        item-id="nav-expandable-group-2_custom-click"
        :active="active.expandable === 'nav-expandable-group-2_custom-click'"
        @select="(_e, _g, itemId) => log(\`Custom click handler on \${itemId}\`)"
      >
        Custom onClick Link
      </pf-nav-item>
      <pf-nav-item
        v-for="i in 3"
        :id="\`expandable-\${i + 3}\`"
        :key="i"
        prevent-default
        :href="\`#expandable-\${i + 3}\`"
        group-id="nav-expandable-group-2"
        :item-id="\`nav-expandable-group-2_item-\${i}\`"
        :active="active.expandable === \`nav-expandable-group-2_item-\${i}\`"
      >
        Subnav 2 Link {{ i }}
      </pf-nav-item>
    </pf-nav-expandable>
  </pf-nav-list>
</pf-nav>`},{intro:t(()=>[...m[11]||=[a(`div`,{class:`markdown pf-v6-c-content`},[a(`p`,null,[f(`A `),a(`code`,null,`pf-nav-expandable`),f(` toggles its list on click: `),a(`code`,null,`expanded`),f(` sets the initial state, and `),a(`code`,null,`v-model:expanded`),f(` or the `),a(`code`,null,`toggle`),f(` event of the nav report the changes.`)])],-1)]]),default:t(()=>[l(w,{"aria-label":`Expandable global`,onSelect:A,onToggle:k},{default:t(()=>[l(_,null,{default:t(()=>[l(I,{title:`Expandable Group 1`,"group-id":`nav-expandable-group-1`,active:E.expandable===`nav-expandable-group-1`,expanded:``},{default:t(()=>[(u(),o(p,null,r(3,e=>l(g,{id:`expandable-${e}`,key:e,"prevent-default":``,href:`#expandable-${e}`,"group-id":`nav-expandable-group-1`,"item-id":`nav-expandable-group-1_item-${e}`,active:T.expandable===`nav-expandable-group-1_item-${e}`},{default:t(()=>[f(` Subnav 1 Link `+i(e),1)]),_:2},1032,[`id`,`href`,`item-id`,`active`])),64))]),_:1},8,[`active`]),l(I,{title:`Expandable Group 2`,"group-id":`nav-expandable-group-2`,active:E.expandable===`nav-expandable-group-2`,expanded:``},{default:t(()=>[l(g,{id:`expandable-custom-click`,"prevent-default":``,href:`#expandable-custom-click`,"group-id":`nav-expandable-group-2`,"item-id":`nav-expandable-group-2_custom-click`,active:T.expandable===`nav-expandable-group-2_custom-click`,onSelect:m[2]||=(e,t,n)=>O(`Custom click handler on ${n}`)},{default:t(()=>[...m[12]||=[f(` Custom onClick Link `,-1)]]),_:1},8,[`active`]),(u(),o(p,null,r(3,e=>l(g,{id:`expandable-${e+3}`,key:e,"prevent-default":``,href:`#expandable-${e+3}`,"group-id":`nav-expandable-group-2`,"item-id":`nav-expandable-group-2_item-${e}`,active:T.expandable===`nav-expandable-group-2_item-${e}`},{default:t(()=>[f(` Subnav 2 Link `+i(e),1)]),_:2},1032,[`id`,`href`,`item-id`,`active`])),64))]),_:1},8,[`active`])]),_:1})]),_:1})]),_:1}),l(P,{title:`Expandable third level`,source:`<pf-nav aria-label="Expandable third level global" @select="onThirdLevelSelect" @toggle="onToggle">
  <pf-nav-list>
    <pf-nav-expandable
      title="Expandable section title 1"
      group-id="nav-expand3rd-group-1"
      :active="activeGroup.thirdLevel === 'nav-expand3rd-group-1'"
      expanded
    >
      <pf-nav-item
        v-for="i in 3"
        :id="\`expandable3rd-\${i}\`"
        :key="i"
        prevent-default
        :href="\`#expandable3rd-\${i}\`"
        group-id="nav-expand3rd-group-1"
        :item-id="\`nav-expand3rd-group-1_item-\${i}\`"
        :active="active.thirdLevel === \`nav-expand3rd-group-1_item-\${i}\`"
      >
        With 3rd 1 Link {{ i }}
      </pf-nav-item>
    </pf-nav-expandable>
    <pf-nav-expandable
      title="Expandable section title 2"
      group-id="nav-expand3rd-group-2"
      :active="activeGroup.thirdLevel === 'nav-expand3rd-group-2'"
      expanded
    >
      <pf-nav-item
        id="expandable3rd-4"
        prevent-default
        href="#expandable3rd-4"
        group-id="nav-expand3rd-group-2"
        item-id="nav-expand3rd-group-2_item-1"
        :active="active.thirdLevel === 'nav-expand3rd-group-2_item-1'"
      >
        With 3rd 2 Link 1
      </pf-nav-item>
      <pf-nav-expandable
        title="Expandable third level"
        group-id="nav-expand3rd-group-3"
        :active="activeGroup.thirdLevel === 'nav-expand3rd-group-3'"
        expanded
      >
        <pf-nav-item
          v-for="i in 2"
          :id="\`expandable3rd-\${i + 4}\`"
          :key="i"
          prevent-default
          :href="\`#expandable3rd-\${i + 4}\`"
          group-id="nav-expand3rd-group-3"
          :item-id="\`nav-expand3rd-group-3_item-\${i}\`"
          :active="active.thirdLevel === \`nav-expand3rd-group-3_item-\${i}\`"
        >
          Third Level Link {{ i }}
        </pf-nav-item>
      </pf-nav-expandable>
      <pf-nav-item
        id="expandable3rd-7"
        prevent-default
        href="#expandable3rd-7"
        group-id="nav-expand3rd-group-2"
        item-id="nav-expand3rd-group-2_item-2"
        :active="active.thirdLevel === 'nav-expand3rd-group-2_item-2'"
      >
        With 3rd 2 Link 2
      </pf-nav-item>
    </pf-nav-expandable>
  </pf-nav-list>
</pf-nav>`},{default:t(()=>[l(w,{"aria-label":`Expandable third level global`,onSelect:j,onToggle:k},{default:t(()=>[l(_,null,{default:t(()=>[l(I,{title:`Expandable section title 1`,"group-id":`nav-expand3rd-group-1`,active:E.thirdLevel===`nav-expand3rd-group-1`,expanded:``},{default:t(()=>[(u(),o(p,null,r(3,e=>l(g,{id:`expandable3rd-${e}`,key:e,"prevent-default":``,href:`#expandable3rd-${e}`,"group-id":`nav-expand3rd-group-1`,"item-id":`nav-expand3rd-group-1_item-${e}`,active:T.thirdLevel===`nav-expand3rd-group-1_item-${e}`},{default:t(()=>[f(` With 3rd 1 Link `+i(e),1)]),_:2},1032,[`id`,`href`,`item-id`,`active`])),64))]),_:1},8,[`active`]),l(I,{title:`Expandable section title 2`,"group-id":`nav-expand3rd-group-2`,active:E.thirdLevel===`nav-expand3rd-group-2`,expanded:``},{default:t(()=>[l(g,{id:`expandable3rd-4`,"prevent-default":``,href:`#expandable3rd-4`,"group-id":`nav-expand3rd-group-2`,"item-id":`nav-expand3rd-group-2_item-1`,active:T.thirdLevel===`nav-expand3rd-group-2_item-1`},{default:t(()=>[...m[13]||=[f(` With 3rd 2 Link 1 `,-1)]]),_:1},8,[`active`]),l(I,{title:`Expandable third level`,"group-id":`nav-expand3rd-group-3`,active:E.thirdLevel===`nav-expand3rd-group-3`,expanded:``},{default:t(()=>[(u(),o(p,null,r(2,e=>l(g,{id:`expandable3rd-${e+4}`,key:e,"prevent-default":``,href:`#expandable3rd-${e+4}`,"group-id":`nav-expand3rd-group-3`,"item-id":`nav-expand3rd-group-3_item-${e}`,active:T.thirdLevel===`nav-expand3rd-group-3_item-${e}`},{default:t(()=>[f(` Third Level Link `+i(e),1)]),_:2},1032,[`id`,`href`,`item-id`,`active`])),64))]),_:1},8,[`active`]),l(g,{id:`expandable3rd-7`,"prevent-default":``,href:`#expandable3rd-7`,"group-id":`nav-expand3rd-group-2`,"item-id":`nav-expand3rd-group-2_item-2`,active:T.thirdLevel===`nav-expand3rd-group-2_item-2`},{default:t(()=>[...m[14]||=[f(` With 3rd 2 Link 2 `,-1)]]),_:1},8,[`active`])]),_:1},8,[`active`])]),_:1})]),_:1})]),_:1}),l(P,{title:`Mixed`,source:`<pf-nav aria-label="Mixed global" @select="onMixedSelect">
  <pf-nav-list>
    <pf-nav-item
      id="mixed-1"
      prevent-default
      href="#mixed-1"
      item-id="ungrouped_item-1"
      :active="active.mixed === 'ungrouped_item-1'"
    >
      Link 1 (not expandable)
    </pf-nav-item>
    <pf-nav-expandable
      title="Expandable section title 1"
      group-id="nav-mixed-group-1"
      :active="activeGroup.mixed === 'nav-mixed-group-1'"
    >
      <pf-nav-item
        id="mixed-2"
        prevent-default
        href="#mixed-2"
        group-id="nav-mixed-group-1"
        item-id="nav-mixed-group-1_item-1"
        :active="active.mixed === 'nav-mixed-group-1_item-1'"
      >
        Mixed Link 1
      </pf-nav-item>
      <pf-nav-item-separator />
      <pf-nav-item
        v-for="i in [2, 3]"
        :id="\`mixed-\${i + 1}\`"
        :key="i"
        prevent-default
        :href="\`#mixed-\${i + 1}\`"
        group-id="nav-mixed-group-1"
        :item-id="\`nav-mixed-group-1_item-\${i}\`"
        :active="active.mixed === \`nav-mixed-group-1_item-\${i}\`"
      >
        Mixed Link {{ i }}
      </pf-nav-item>
    </pf-nav-expandable>
    <pf-nav-expandable
      title="Expandable section title 2"
      group-id="nav-mixed-group-2"
      :active="activeGroup.mixed === 'nav-mixed-group-2'"
    >
      <pf-nav-item
        v-for="i in 3"
        :id="\`mixed-\${i + 4}\`"
        :key="i"
        prevent-default
        :href="\`#mixed-\${i + 4}\`"
        group-id="nav-mixed-group-2"
        :item-id="\`nav-mixed-group-2_item-\${i}\`"
        :active="active.mixed === \`nav-mixed-group-2_item-\${i}\`"
      >
        Mixed 2 Link {{ i }}
      </pf-nav-item>
    </pf-nav-expandable>
  </pf-nav-list>
</pf-nav>`},{default:t(()=>[l(w,{"aria-label":`Mixed global`,onSelect:M},{default:t(()=>[l(_,null,{default:t(()=>[l(g,{id:`mixed-1`,"prevent-default":``,href:`#mixed-1`,"item-id":`ungrouped_item-1`,active:T.mixed===`ungrouped_item-1`},{default:t(()=>[...m[15]||=[f(` Link 1 (not expandable) `,-1)]]),_:1},8,[`active`]),l(I,{title:`Expandable section title 1`,"group-id":`nav-mixed-group-1`,active:E.mixed===`nav-mixed-group-1`},{default:t(()=>[l(g,{id:`mixed-2`,"prevent-default":``,href:`#mixed-2`,"group-id":`nav-mixed-group-1`,"item-id":`nav-mixed-group-1_item-1`,active:T.mixed===`nav-mixed-group-1_item-1`},{default:t(()=>[...m[16]||=[f(` Mixed Link 1 `,-1)]]),_:1},8,[`active`]),l(L),(u(),o(p,null,r([2,3],e=>l(g,{id:`mixed-${e+1}`,key:e,"prevent-default":``,href:`#mixed-${e+1}`,"group-id":`nav-mixed-group-1`,"item-id":`nav-mixed-group-1_item-${e}`,active:T.mixed===`nav-mixed-group-1_item-${e}`},{default:t(()=>[f(` Mixed Link `+i(e),1)]),_:2},1032,[`id`,`href`,`item-id`,`active`])),64))]),_:1},8,[`active`]),l(I,{title:`Expandable section title 2`,"group-id":`nav-mixed-group-2`,active:E.mixed===`nav-mixed-group-2`},{default:t(()=>[(u(),o(p,null,r(3,e=>l(g,{id:`mixed-${e+4}`,key:e,"prevent-default":``,href:`#mixed-${e+4}`,"group-id":`nav-mixed-group-2`,"item-id":`nav-mixed-group-2_item-${e}`,active:T.mixed===`nav-mixed-group-2_item-${e}`},{default:t(()=>[f(` Mixed 2 Link `+i(e),1)]),_:2},1032,[`id`,`href`,`item-id`,`active`])),64))]),_:1},8,[`active`])]),_:1})]),_:1})]),_:1}),l(P,{title:`Horizontal navigation`,source:`<pf-nav
  variant="horizontal"
  aria-label="Horizontal nav local"
  @select="(_e, _g, itemId) => (active.horizontal = itemId)"
>
  <pf-nav-list>
    <pf-nav-item
      v-for="i in 10"
      :id="\`horizontal-nav-\${i}\`"
      :key="i"
      prevent-default
      :href="\`#horizontal-nav-\${i}\`"
      :item-id="i"
      :active="active.horizontal === i"
    >
      Horizontal navigation item {{ i }}
    </pf-nav-item>
  </pf-nav-list>
</pf-nav>`},{default:t(()=>[l(w,{variant:`horizontal`,"aria-label":`Horizontal nav local`,onSelect:m[3]||=(e,t,n)=>T.horizontal=n},{default:t(()=>[l(_,null,{default:t(()=>[(u(),o(p,null,r(10,e=>l(g,{id:`horizontal-nav-${e}`,key:e,"prevent-default":``,href:`#horizontal-nav-${e}`,"item-id":e,active:T.horizontal===e},{default:t(()=>[f(` Horizontal navigation item `+i(e),1)]),_:2},1032,[`id`,`href`,`item-id`,`active`])),64))]),_:1})]),_:1})]),_:1}),l(P,{title:`Horizontal subnav`,source:`<pf-nav
  variant="horizontal-subnav"
  aria-label="Horizontal subnav local"
  @select="(_e, _g, itemId) => (active.subnav = itemId)"
>
  <pf-nav-list>
    <pf-nav-item
      v-for="i in 10"
      :id="\`horizontal-subnav-\${i}\`"
      :key="i"
      prevent-default
      :href="\`#horizontal-subnav-\${i}\`"
      :item-id="i"
      :active="active.subnav === i"
    >
      Horizontal subnav item {{ i }}
    </pf-nav-item>
  </pf-nav-list>
</pf-nav>`},{default:t(()=>[l(w,{variant:`horizontal-subnav`,"aria-label":`Horizontal subnav local`,onSelect:m[4]||=(e,t,n)=>T.subnav=n},{default:t(()=>[l(_,null,{default:t(()=>[(u(),o(p,null,r(10,e=>l(g,{id:`horizontal-subnav-${e}`,key:e,"prevent-default":``,href:`#horizontal-subnav-${e}`,"item-id":e,active:T.subnav===e},{default:t(()=>[f(` Horizontal subnav item `+i(e),1)]),_:2},1032,[`id`,`href`,`item-id`,`active`])),64))]),_:1})]),_:1})]),_:1}),l(P,{title:`Flyout`,"max-width":`300px`,source:`<pf-nav aria-label="Flyout global" @select="(_e, _g, itemId) => (active.flyout = itemId)">
  <pf-nav-list>
    <pf-nav-item
      v-for="i in 2"
      :id="\`nav-flyout-default-link-\${i}\`"
      :key="i"
      prevent-default
      :href="\`#nav-flyout-default-link-\${i}\`"
      :item-id="\`nav-flyout-default-link-\${i}\`"
      :active="active.flyout === \`nav-flyout-default-link-\${i}\`"
    >
      Flyout Link {{ i }}
    </pf-nav-item>
    <pf-nav-item
      id="nav-flyout-default-link-3"
      prevent-default
      item-id="nav-flyout-default-link-3"
      :active="active.flyout === 'nav-flyout-default-link-3'"
    >
      Flyout Link 3
      <template #flyout>
        <flyout-menu :depth="3" />
      </template>
    </pf-nav-item>
    <pf-nav-item
      id="nav-flyout-default-link4"
      prevent-default
      href="#nav-flyout-default-link4"
      item-id="nav-flyout-default-link-4"
      :active="active.flyout === 'nav-flyout-default-link-4'"
    >
      Flyout Link 4
    </pf-nav-item>
  </pf-nav-list>
</pf-nav>`},{intro:t(()=>[...m[17]||=[a(`div`,{class:`markdown pf-v6-c-content`},[a(`p`,null,[f(`A flyout should be a `),a(`code`,null,`pf-menu`),f(` component with `),a(`code`,null,`nav-flyout`),f(`, passed in the `),a(`code`,null,`flyout`),f(` slot of the `),a(`code`,null,`pf-nav-item`),f(`. Press `),a(`code`,null,`space`),f(`, `),a(`code`,null,`enter`),f(` or `),a(`code`,null,`right arrow`),f(` to open a flyout using the keyboard, use the arrow keys to navigate between flyout items, and press `),a(`code`,null,`escape`),f(` or `),a(`code`,null,`left arrow`),f(` to close a flyout.`)]),a(`p`,null,[f(`In this example `),a(`code`,null,`flyout-menu`),f(` is a local component rendering a `),a(`code`,null,`pf-menu`),f(` whose "Next menu" items open the menu of the next depth in their `),a(`code`,null,`flyout-menu`),f(` slot.`)])],-1)]]),default:t(()=>[l(w,{"aria-label":`Flyout global`,onSelect:m[5]||=(e,t,n)=>T.flyout=n},{default:t(()=>[l(_,null,{default:t(()=>[(u(),o(p,null,r(2,e=>l(g,{id:`nav-flyout-default-link-${e}`,key:e,"prevent-default":``,href:`#nav-flyout-default-link-${e}`,"item-id":`nav-flyout-default-link-${e}`,active:T.flyout===`nav-flyout-default-link-${e}`},{default:t(()=>[f(` Flyout Link `+i(e),1)]),_:2},1032,[`id`,`href`,`item-id`,`active`])),64)),l(g,{id:`nav-flyout-default-link-3`,"prevent-default":``,"item-id":`nav-flyout-default-link-3`,active:T.flyout===`nav-flyout-default-link-3`},{flyout:t(()=>[l(s(N),{depth:3})]),default:t(()=>[m[18]||=f(` Flyout Link 3 `,-1)]),_:1},8,[`active`]),l(g,{id:`nav-flyout-default-link4`,"prevent-default":``,href:`#nav-flyout-default-link4`,"item-id":`nav-flyout-default-link-4`,active:T.flyout===`nav-flyout-default-link-4`},{default:t(()=>[...m[19]||=[f(` Flyout Link 4 `,-1)]]),_:1},8,[`active`])]),_:1})]),_:1})]),_:1}),l(P,{title:`Drilldown`,"max-width":`300px`,source:`<pf-nav aria-label="Drilldown global">
  <pf-menu id="nav-drilldown-rootMenu" contains-drilldown>
    <pf-menu-content>
      <pf-menu-list>
        <pf-menu-item value="nav-drilldown-item-1" direction="down" description="SubMenu 1">
          Item 1
          <template #drilldown-menu>
            <pf-drilldown-menu id="nav-drilldown-subMenu-1">
              <pf-menu-item value="nav-drilldown-subMenu-1-breadcrumb" direction="up">Item 1</pf-menu-item>
              <pf-menu-item value="nav-drilldown-subMenu-1_item-1" description="SubMenu 2" direction="down">
                SubMenu 1 - Item 1
                <template #drilldown-menu>
                  <pf-drilldown-menu id="nav-drilldown-subMenu-2">
                    <pf-menu-item value="nav-drilldown-subMenu-2-breadcrumb" direction="up">
                      SubMenu 1 - Item 1
                    </pf-menu-item>
                    <pf-menu-item
                      v-for="i in 3"
                      :key="i"
                      :value="\`nav-drilldown-subMenu-2_item-\${i}\`"
                      :to="\`#subMenu-2_item-\${i}\`"
                    >
                      SubMenu 2 - Item {{ i }}
                    </pf-menu-item>
                  </pf-drilldown-menu>
                </template>
              </pf-menu-item>
              <pf-menu-item
                v-for="i in [2, 3]"
                :key="i"
                :value="\`nav-drilldown-subMenu-1_item-\${i}\`"
                :to="\`#subMenu-1_item-\${i}\`"
              >
                SubMenu 1 - Item {{ i }}
              </pf-menu-item>
            </pf-drilldown-menu>
          </template>
        </pf-menu-item>
        <pf-menu-item value="nav-drilldown-item-2" to="#item-2">Item 2</pf-menu-item>
        <pf-menu-item value="nav-drilldown-item-3" to="#item-3">Item 3</pf-menu-item>
      </pf-menu-list>
    </pf-menu-content>
  </pf-menu>
</pf-nav>`},{default:t(()=>[l(w,{"aria-label":`Drilldown global`},{default:t(()=>[l(H,{id:`nav-drilldown-rootMenu`,"contains-drilldown":``},{default:t(()=>[l(V,null,{default:t(()=>[l(B,null,{default:t(()=>[l(R,{value:`nav-drilldown-item-1`,direction:`down`,description:`SubMenu 1`},{"drilldown-menu":t(()=>[l(z,{id:`nav-drilldown-subMenu-1`},{default:t(()=>[l(R,{value:`nav-drilldown-subMenu-1-breadcrumb`,direction:`up`},{default:t(()=>[...m[20]||=[f(`Item 1`,-1)]]),_:1}),l(R,{value:`nav-drilldown-subMenu-1_item-1`,description:`SubMenu 2`,direction:`down`},{"drilldown-menu":t(()=>[l(z,{id:`nav-drilldown-subMenu-2`},{default:t(()=>[l(R,{value:`nav-drilldown-subMenu-2-breadcrumb`,direction:`up`},{default:t(()=>[...m[21]||=[f(` SubMenu 1 - Item 1 `,-1)]]),_:1}),(u(),o(p,null,r(3,e=>l(R,{key:e,value:`nav-drilldown-subMenu-2_item-${e}`,to:`#subMenu-2_item-${e}`},{default:t(()=>[f(` SubMenu 2 - Item `+i(e),1)]),_:2},1032,[`value`,`to`])),64))]),_:1})]),default:t(()=>[m[22]||=f(` SubMenu 1 - Item 1 `,-1)]),_:1}),(u(),o(p,null,r([2,3],e=>l(R,{key:e,value:`nav-drilldown-subMenu-1_item-${e}`,to:`#subMenu-1_item-${e}`},{default:t(()=>[f(` SubMenu 1 - Item `+i(e),1)]),_:2},1032,[`value`,`to`])),64))]),_:1})]),default:t(()=>[m[23]||=f(` Item 1 `,-1)]),_:1}),l(R,{value:`nav-drilldown-item-2`,to:`#item-2`},{default:t(()=>[...m[24]||=[f(`Item 2`,-1)]]),_:1}),l(R,{value:`nav-drilldown-item-3`,to:`#item-3`},{default:t(()=>[...m[25]||=[f(`Item 3`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),l(P,{title:`With icons`,source:`<pf-nav aria-label="Icon global" ouia-id="IconNav" @select="(_e, _g, itemId) => (active.icons = itemId)">
  <pf-nav-list>
    <pf-nav-item
      v-for="(icon, i) in [CubesIcon, FolderIcon, CloudIcon, LinkIcon]"
      :id="\`nav-icon-link\${i + 1}\`"
      :key="i"
      prevent-default
      :href="\`#nav-icon-link\${i + 1}\`"
      :item-id="i"
      :active="active.icons === i"
    >
      <template #icon>
        <component :is="icon" />
      </template>
      Link {{ i + 1 }}
    </pf-nav-item>
    <pf-nav-expandable title="Expandable" group-id="nav-icon-expandable">
      <template #icon>
        <folder-open-icon />
      </template>
      <pf-nav-item
        v-for="i in 2"
        :id="\`nav-icon-expandable-link\${i}\`"
        :key="i"
        prevent-default
        :href="\`#nav-icon-expandable-link\${i}\`"
        :item-id="i + 3"
        :active="active.icons === i + 3"
      >
        Subnav link {{ i }}
      </pf-nav-item>
    </pf-nav-expandable>
  </pf-nav-list>
</pf-nav>`},{default:t(()=>[l(w,{"aria-label":`Icon global`,"ouia-id":`IconNav`,onSelect:m[6]||=(e,t,n)=>T.icons=n},{default:t(()=>[l(_,null,{default:t(()=>[(u(!0),o(p,null,r([s(v),s(x),s(y),s(C)],(e,r)=>(u(),d(g,{id:`nav-icon-link${r+1}`,key:r,"prevent-default":``,href:`#nav-icon-link${r+1}`,"item-id":r,active:T.icons===r},{icon:t(()=>[(u(),d(n(e)))]),default:t(()=>[f(` Link `+i(r+1),1)]),_:2},1032,[`id`,`href`,`item-id`,`active`]))),128)),l(I,{title:`Expandable`,"group-id":`nav-icon-expandable`},{icon:t(()=>[l(s(S))]),default:t(()=>[(u(),o(p,null,r(2,e=>l(g,{id:`nav-icon-expandable-link${e}`,key:e,"prevent-default":``,href:`#nav-icon-expandable-link${e}`,"item-id":e+3,active:T.icons===e+3},{default:t(()=>[f(` Subnav link `+i(e),1)]),_:2},1032,[`id`,`href`,`item-id`,`active`])),64))]),_:1})]),_:1})]),_:1})]),_:1}),l(P,{title:`Docked`,source:`<pf-nav
  variant="docked"
  aria-label="Default global"
  ouia-id="DockedNav"
  @select="(_e, _g, itemId) => (active.docked = itemId)"
>
  <pf-nav-list>
    <pf-nav-item
      v-for="(icon, i) in [CubesIcon, CloudIcon, CodeIcon]"
      :id="\`nav-docked-link\${i + 1}\`"
      :key="i"
      prevent-default
      :href="\`#nav-docked-link\${i + 1}\`"
      :item-id="i"
      :active="active.docked === i"
    >
      <template #icon>
        <component :is="icon" />
      </template>
      Default Link {{ i + 1 }}
    </pf-nav-item>
    <pf-nav-expandable
      v-model:expanded="dockedGroupExpanded"
      title="Expandable Group 1"
      group-id="nav-expandable-group-1"
      expandable-icon
      :button-attrs="{ 'aria-label': 'Expandable Group 1' }"
    >
      <template #icon>
        <folder-icon />
      </template>
      <pf-nav-item
        v-for="i in 3"
        :id="\`docked-expandable-\${i}\`"
        :key="i"
        prevent-default
        :href="\`#docked-expandable-\${i}\`"
        group-id="nav-expandable-group-1"
        :item-id="i + 2"
        :active="active.docked === i + 2"
      >
        Subnav 1 Link {{ i }}
      </pf-nav-item>
    </pf-nav-expandable>
  </pf-nav-list>
</pf-nav>`},{intro:t(()=>[...m[26]||=[a(`div`,{class:`markdown pf-v6-c-content`},[a(`p`,null,[f(`The docked variant of navigation displays only icons passed to child `),a(`code`,null,`pf-nav-item`),f(` or `),a(`code`,null,`pf-nav-expandable`),f(`. Text becomes visible with the `),a(`code`,null,`expanded`),f(` property, or when the dock of an outer page or compass is expanded.`)]),a(`p`,null,[a(`code`,null,`pf-nav-expandable`),f(` items should include the `),a(`code`,null,`expandable-icon`),f(` prop to indicate their expandable nature while in the collapsed state of the docked nav as the caret will not be rendered.`)])],-1)]]),default:t(()=>[l(w,{variant:`docked`,"aria-label":`Default global`,"ouia-id":`DockedNav`,onSelect:m[8]||=(e,t,n)=>T.docked=n},{default:t(()=>[l(_,null,{default:t(()=>[(u(!0),o(p,null,r([s(v),s(y),s(b)],(e,r)=>(u(),d(g,{id:`nav-docked-link${r+1}`,key:r,"prevent-default":``,href:`#nav-docked-link${r+1}`,"item-id":r,active:T.docked===r},{icon:t(()=>[(u(),d(n(e)))]),default:t(()=>[f(` Default Link `+i(r+1),1)]),_:2},1032,[`id`,`href`,`item-id`,`active`]))),128)),l(I,{expanded:D.value,"onUpdate:expanded":m[7]||=e=>D.value=e,title:`Expandable Group 1`,"group-id":`nav-expandable-group-1`,"expandable-icon":``,"button-attrs":{"aria-label":`Expandable Group 1`}},{icon:t(()=>[l(s(x))]),default:t(()=>[(u(),o(p,null,r(3,e=>l(g,{id:`docked-expandable-${e}`,key:e,"prevent-default":``,href:`#docked-expandable-${e}`,"group-id":`nav-expandable-group-1`,"item-id":e+2,active:T.docked===e+2},{default:t(()=>[f(` Subnav 1 Link `+i(e),1)]),_:2},1032,[`id`,`href`,`item-id`,`active`])),64))]),_:1},8,[`expanded`])]),_:1})]),_:1})]),_:1})]),_:1})}}});export{T as default};