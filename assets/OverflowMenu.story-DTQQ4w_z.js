import{F as e,H as t,K as n,N as r,Nt as i,Pt as a,c as o,d as s,g as c,h as l,it as u,j as d,l as f,m as p,n as m,pt as h,q as g}from"./runtime-core.esm-bundler-DO1530YC.js";import{D as _,K as v,W as y,j as b}from"./index-CUsetNQE.js";var x=y({name:`AlignLeftIcon`,height:512,width:448,svgPathData:`M288 64c0 17.7-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l224 0c17.7 0 32 14.3 32 32zm0 256c0 17.7-14.3 32-32 32L32 352c-17.7 0-32-14.3-32-32s14.3-32 32-32l224 0c17.7 0 32 14.3 32 32zM0 192c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 224c-17.7 0-32-14.3-32-32zM448 448c0 17.7-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z`,yOffset:0,xOffset:0}),S=y({name:`AlignCenterIcon`,height:512,width:448,svgPathData:`M352 64c0-17.7-14.3-32-32-32L128 32c-17.7 0-32 14.3-32 32s14.3 32 32 32l192 0c17.7 0 32-14.3 32-32zm96 128c0-17.7-14.3-32-32-32L32 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32zM0 448c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 416c-17.7 0-32 14.3-32 32zM352 320c0-17.7-14.3-32-32-32l-192 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l192 0c17.7 0 32-14.3 32-32z`,yOffset:0,xOffset:0}),C=y({name:`AlignRightIcon`,height:512,width:448,svgPathData:`M448 64c0 17.7-14.3 32-32 32L192 96c-17.7 0-32-14.3-32-32s14.3-32 32-32l224 0c17.7 0 32 14.3 32 32zm0 256c0 17.7-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l224 0c17.7 0 32 14.3 32 32zM0 192c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 224c-17.7 0-32-14.3-32-32zM448 448c0 17.7-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z`,yOffset:0,xOffset:0}),w={style:{width:`100%`,"max-width":`400px`}},T={for:`overflow-menu-container-width`},E={for:`overflow-menu-container-height`},D={style:{height:`1000px`}},O=c({__name:`OverflowMenu.story`,setup(c){let[y,O]=b();function k(e){return Array.from({length:e},(e,t)=>({label:`Item ${t+1}`,shared:!0}))}let A=u(100),j=t(`widthContainer`),M=u(100),N=t(`heightContainer`);return(t,c)=>{let u=e(`pf-menu-toggle`),b=e(`pf-overflow-menu-dropdown-item`),P=e(`pf-dropdown`),F=e(`component-info`),I=e(`pf-overflow-menu-item`),L=e(`pf-overflow-menu-group`),R=e(`pf-overflow-menu-content`),z=e(`pf-overflow-menu-control`),B=e(`pf-overflow-menu`),V=e(`story-canvas`),H=e(`pf-button`),U=e(`doc-page`);return d(),s(m,null,[l(h(y),null,{default:n(({label:e,items:t})=>[l(P,null,{toggle:n(()=>[l(u,{variant:`plain`,"aria-label":e},{icon:n(()=>[l(h(_))]),_:1},8,[`aria-label`])]),default:n(()=>[(d(!0),s(m,null,r(t,(e,t)=>(d(),f(b,{key:t,value:t,shared:e.shared},{default:n(()=>[p(a(e.label),1)]),_:2},1032,[`value`,`shared`]))),128))]),_:2},1024)]),_:1}),l(U,{name:`Components/OverflowMenu.story.vue`,title:`Overflow Menu`},{description:n(()=>[...c[2]||=[p(`An `,-1),o(`b`,null,`overflow menu`,-1),p(` groups a set of actions in a responsive horizontal list to help declutter an interface. Actions can be set to persist or collapse into a kebab as the viewpoint shrinks. Overflow menus are useful in toolbars or other places where a group of actions is required.`,-1)]]),apidocs:n(()=>[l(F,{name:`PfOverflowMenu`,doc:{name:`PfOverflowMenu`,exportName:`PfOverflowMenu`,displayName:`OverflowMenu`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`breakpoint`,description:`Indicates breakpoint at which to switch between expanded and collapsed states. The "sm" breakpoint does not apply to vertical overflow menus.`,required:!0,type:{name:`TSTypeOperator`}},{name:`breakpointReference`,description:`A container to base the specified breakpoint on instead of the viewport: an element, a ref or a function returning it`,required:!1,type:{name:`MaybeRefOrGetter`,elements:[{name:`union`,elements:[{name:`HTMLElement`},{name:`null`},{name:`undefined`}]}]}},{name:`vertical`,description:`Indicates the overflow menu orientation is vertical and should respond to height changes instead of width.`,required:!1,type:{name:`boolean`}}],events:[],slots:[{name:`default`,scoped:!0,bindings:[{name:`below-breakpoint`,title:`binding`}],description:`Content and control of the overflow menu`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/OverflowMenu/OverflowMenu.vue`]}}),l(F,{name:`PfOverflowMenuContent`,doc:{name:`PfOverflowMenuContent`,exportName:`PfOverflowMenuContent`,displayName:`OverflowMenuContent`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`persistent`,description:`Modifies the overflow menu content visibility`,required:!1,type:{name:`boolean`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/OverflowMenu/OverflowMenuContent.vue`]}}),l(F,{name:`PfOverflowMenuControl`,doc:{name:`PfOverflowMenuControl`,exportName:`PfOverflowMenuControl`,displayName:`OverflowMenuControl`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`additionalOptions`,description:`Triggers the overflow dropdown to persist at all viewport sizes`,required:!1,type:{name:`boolean`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/OverflowMenu/OverflowMenuControl.vue`]}}),l(F,{name:`PfOverflowMenuDropdownItem`,doc:{name:`PfOverflowMenuDropdownItem`,exportName:`PfOverflowMenuDropdownItem`,displayName:`OverflowMenuDropdownItem`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`shared`,description:`Indicates when a dropdown item shows and hides the corresponding list item`,required:!1,type:{name:`boolean`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/OverflowMenu/OverflowMenuDropdownItem.vue`]}}),l(F,{name:`PfOverflowMenuGroup`,doc:{name:`PfOverflowMenuGroup`,exportName:`PfOverflowMenuGroup`,displayName:`OverflowMenuGroup`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`persistent`,description:`Modifies the overflow menu group visibility`,required:!1,type:{name:`boolean`}},{name:`type`,description:`Indicates a button or icon group`,required:!1,type:{name:`union`,elements:[{name:`"button"`},{name:`"icon"`}]}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/OverflowMenu/OverflowMenuGroup.vue`]}}),l(F,{name:`PfOverflowMenuItem`,doc:{name:`PfOverflowMenuItem`,exportName:`PfOverflowMenuItem`,displayName:`OverflowMenuItem`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`persistent`,description:`Modifies the overflow menu item visibility`,required:!1,type:{name:`boolean`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/OverflowMenu/OverflowMenuItem.vue`]}})]),default:n(()=>[c[38]||=o(`div`,{class:`markdown pf-v6-c-content`},[o(`p`,null,[p(`The default slot of `),o(`code`,null,`pf-overflow-menu`),p(` receives `),o(`code`,null,`below-breakpoint`),p(`, which updates when the specified breakpoint is reached, to further customize behaviors that should respect responsive breakpoints (`),o(`code`,null,`OverflowMenuContext`),p(` in patternfly-react).`)]),o(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),o(`ul`,null,[o(`li`,null,[o(`code`,null,`isPersistent`),p(` is `),o(`code`,null,`persistent`),p(`, `),o(`code`,null,`isVertical`),p(` is `),o(`code`,null,`vertical`),p(`, `),o(`code`,null,`hasAdditionalOptions`),p(` is `),o(`code`,null,`additional-options`),p(` and `),o(`code`,null,`isShared`),p(` is `),o(`code`,null,`shared`),p(`.`)]),o(`li`,null,[p(`The `),o(`code`,null,`groupType`),p(` of `),o(`code`,null,`pf-overflow-menu-group`),p(` is `),o(`code`,null,`type`),p(`, and the `),o(`code`,null,`itemId`),p(` of `),o(`code`,null,`pf-overflow-menu-dropdown-item`),p(` is `),o(`code`,null,`value`),p(`, as in `),o(`code`,null,`pf-menu-item`),p(`.`)]),o(`li`,null,[o(`code`,null,`breakpoint-reference`),p(` takes the container element (such as a template ref) or a function returning it.`)]),o(`li`,null,[p(`The breakpoint state is the `),o(`code`,null,`below-breakpoint`),p(` prop of the default slot rather than a context. See `),o(`a`,{href:`#/`},`common differences from patternfly-react`),p(`.`)])]),o(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),l(V,{title:`Simple (responsive)`,source:`<pf-overflow-menu breakpoint="lg">
  <pf-overflow-menu-content>
    <pf-overflow-menu-item>Item</pf-overflow-menu-item>
    <pf-overflow-menu-item>Item</pf-overflow-menu-item>
    <pf-overflow-menu-group>
      <pf-overflow-menu-item>Item</pf-overflow-menu-item>
      <pf-overflow-menu-item>Item</pf-overflow-menu-item>
      <pf-overflow-menu-item>Item</pf-overflow-menu-item>
    </pf-overflow-menu-group>
  </pf-overflow-menu-content>
  <pf-overflow-menu-control>
    <overflow-dropdown label="Simple example overflow menu" :items="sharedItems(5)" />
  </pf-overflow-menu-control>
</pf-overflow-menu>`},{default:n(()=>[l(B,{breakpoint:`lg`},{default:n(()=>[l(R,null,{default:n(()=>[l(I,null,{default:n(()=>[...c[3]||=[p(`Item`,-1)]]),_:1}),l(I,null,{default:n(()=>[...c[4]||=[p(`Item`,-1)]]),_:1}),l(L,null,{default:n(()=>[l(I,null,{default:n(()=>[...c[5]||=[p(`Item`,-1)]]),_:1}),l(I,null,{default:n(()=>[...c[6]||=[p(`Item`,-1)]]),_:1}),l(I,null,{default:n(()=>[...c[7]||=[p(`Item`,-1)]]),_:1})]),_:1})]),_:1}),l(z,null,{default:n(()=>[l(h(O),{label:`Simple example overflow menu`,items:k(5)},null,8,[`items`])]),_:1})]),_:1})]),_:1}),l(V,{title:`Vertical`,source:`<pf-overflow-menu breakpoint="md" vertical>
  <pf-overflow-menu-content>
    <pf-overflow-menu-item>Item</pf-overflow-menu-item>
    <pf-overflow-menu-item>Item</pf-overflow-menu-item>
    <pf-overflow-menu-group>
      <pf-overflow-menu-item>Item</pf-overflow-menu-item>
      <pf-overflow-menu-item>Item</pf-overflow-menu-item>
      <pf-overflow-menu-item>Item</pf-overflow-menu-item>
    </pf-overflow-menu-group>
  </pf-overflow-menu-content>
  <pf-overflow-menu-control>
    <overflow-dropdown label="Simple example overflow menu" :items="sharedItems(5)" />
  </pf-overflow-menu-control>
</pf-overflow-menu>`},{intro:n(()=>[...c[8]||=[o(`div`,{class:`markdown pf-v6-c-content`},[o(`p`,null,[p(`Passing `),o(`code`,null,`vertical`),p(` to `),o(`code`,null,`pf-overflow-menu`),p(` will change its behavior to respond to breakpoints based on window height instead of width.`)])],-1)]]),default:n(()=>[l(B,{breakpoint:`md`,vertical:``},{default:n(()=>[l(R,null,{default:n(()=>[l(I,null,{default:n(()=>[...c[9]||=[p(`Item`,-1)]]),_:1}),l(I,null,{default:n(()=>[...c[10]||=[p(`Item`,-1)]]),_:1}),l(L,null,{default:n(()=>[l(I,null,{default:n(()=>[...c[11]||=[p(`Item`,-1)]]),_:1}),l(I,null,{default:n(()=>[...c[12]||=[p(`Item`,-1)]]),_:1}),l(I,null,{default:n(()=>[...c[13]||=[p(`Item`,-1)]]),_:1})]),_:1})]),_:1}),l(z,null,{default:n(()=>[l(h(O),{label:`Simple example overflow menu`,items:k(5)},null,8,[`items`])]),_:1})]),_:1})]),_:1}),l(V,{title:`Group types`,source:`<pf-overflow-menu breakpoint="lg">
  <pf-overflow-menu-content>
    <pf-overflow-menu-group>
      <pf-overflow-menu-item>Item</pf-overflow-menu-item>
      <pf-overflow-menu-item>Item</pf-overflow-menu-item>
      <pf-overflow-menu-item>Item</pf-overflow-menu-item>
    </pf-overflow-menu-group>
    <pf-overflow-menu-group type="button">
      <pf-overflow-menu-item>
        <pf-button variant="primary">Primary</pf-button>
      </pf-overflow-menu-item>
      <pf-overflow-menu-item>
        <pf-button variant="secondary">Secondary</pf-button>
      </pf-overflow-menu-item>
      <pf-overflow-menu-item>
        <pf-button variant="tertiary">Tertiary</pf-button>
      </pf-overflow-menu-item>
    </pf-overflow-menu-group>
    <pf-overflow-menu-group type="icon">
      <pf-overflow-menu-item>
        <pf-button variant="plain" aria-label="Align left">
          <template #icon><align-left-icon /></template>
        </pf-button>
      </pf-overflow-menu-item>
      <pf-overflow-menu-item>
        <pf-button variant="plain" aria-label="Align center">
          <template #icon><align-center-icon /></template>
        </pf-button>
      </pf-overflow-menu-item>
      <pf-overflow-menu-item>
        <pf-button variant="plain" aria-label="Align right">
          <template #icon><align-right-icon /></template>
        </pf-button>
      </pf-overflow-menu-item>
    </pf-overflow-menu-group>
  </pf-overflow-menu-content>
  <pf-overflow-menu-control>
    <overflow-dropdown
      label="Group example overflow menu"
      :items="
        [
          'Item 1',
          'Item 2',
          'Item 3',
          'Primary',
          'Secondary',
          'Tertiary',
          'Action 1',
          'Action 2',
          'Action 3',
        ].map(label => ({ label, shared: true }))
      "
    ></overflow-dropdown>
  </pf-overflow-menu-control>
</pf-overflow-menu>`},{default:n(()=>[l(B,{breakpoint:`lg`},{default:n(()=>[l(R,null,{default:n(()=>[l(L,null,{default:n(()=>[l(I,null,{default:n(()=>[...c[14]||=[p(`Item`,-1)]]),_:1}),l(I,null,{default:n(()=>[...c[15]||=[p(`Item`,-1)]]),_:1}),l(I,null,{default:n(()=>[...c[16]||=[p(`Item`,-1)]]),_:1})]),_:1}),l(L,{type:`button`},{default:n(()=>[l(I,null,{default:n(()=>[l(H,{variant:`primary`},{default:n(()=>[...c[17]||=[p(`Primary`,-1)]]),_:1})]),_:1}),l(I,null,{default:n(()=>[l(H,{variant:`secondary`},{default:n(()=>[...c[18]||=[p(`Secondary`,-1)]]),_:1})]),_:1}),l(I,null,{default:n(()=>[l(H,{variant:`tertiary`},{default:n(()=>[...c[19]||=[p(`Tertiary`,-1)]]),_:1})]),_:1})]),_:1}),l(L,{type:`icon`},{default:n(()=>[l(I,null,{default:n(()=>[l(H,{variant:`plain`,"aria-label":`Align left`},{icon:n(()=>[l(h(x))]),_:1})]),_:1}),l(I,null,{default:n(()=>[l(H,{variant:`plain`,"aria-label":`Align center`},{icon:n(()=>[l(h(S))]),_:1})]),_:1}),l(I,null,{default:n(()=>[l(H,{variant:`plain`,"aria-label":`Align right`},{icon:n(()=>[l(h(C))]),_:1})]),_:1})]),_:1})]),_:1}),l(z,null,{default:n(()=>[l(h(O),{label:`Group example overflow menu`,items:[`Item 1`,`Item 2`,`Item 3`,`Primary`,`Secondary`,`Tertiary`,`Action 1`,`Action 2`,`Action 3`].map(e=>({label:e,shared:!0}))},null,8,[`items`])]),_:1})]),_:1})]),_:1}),l(V,{title:`Multiple groups`,source:`<pf-overflow-menu breakpoint="lg">
  <pf-overflow-menu-content>
    <pf-overflow-menu-group type="button">
      <pf-overflow-menu-item>
        <pf-button variant="primary">Primary</pf-button>
      </pf-overflow-menu-item>
      <pf-overflow-menu-item>
        <pf-button variant="secondary">Secondary</pf-button>
      </pf-overflow-menu-item>
      <pf-overflow-menu-item>
        <pf-button variant="tertiary">Tertiary</pf-button>
      </pf-overflow-menu-item>
    </pf-overflow-menu-group>
    <pf-overflow-menu-group type="icon">
      <pf-overflow-menu-item>
        <pf-button variant="plain" aria-label="Align left">
          <template #icon><align-left-icon /></template>
        </pf-button>
      </pf-overflow-menu-item>
      <pf-overflow-menu-item>
        <pf-button variant="plain" aria-label="Align center">
          <template #icon><align-center-icon /></template>
        </pf-button>
      </pf-overflow-menu-item>
      <pf-overflow-menu-item>
        <pf-button variant="plain" aria-label="Align right">
          <template #icon><align-right-icon /></template>
        </pf-button>
      </pf-overflow-menu-item>
    </pf-overflow-menu-group>
  </pf-overflow-menu-content>
  <pf-overflow-menu-control additional-options>
    <overflow-dropdown
      label="Multiple group example overflow menu"
      :items="[
        ...['Primary', 'Secondary', 'Tertiary', 'Action 4', 'Action 5', 'Action 6'].map(label => ({
          label,
          shared: true,
        })),
        { label: 'Action 7' },
      ]"
    ></overflow-dropdown>
  </pf-overflow-menu-control>
</pf-overflow-menu>`},{default:n(()=>[l(B,{breakpoint:`lg`},{default:n(()=>[l(R,null,{default:n(()=>[l(L,{type:`button`},{default:n(()=>[l(I,null,{default:n(()=>[l(H,{variant:`primary`},{default:n(()=>[...c[20]||=[p(`Primary`,-1)]]),_:1})]),_:1}),l(I,null,{default:n(()=>[l(H,{variant:`secondary`},{default:n(()=>[...c[21]||=[p(`Secondary`,-1)]]),_:1})]),_:1}),l(I,null,{default:n(()=>[l(H,{variant:`tertiary`},{default:n(()=>[...c[22]||=[p(`Tertiary`,-1)]]),_:1})]),_:1})]),_:1}),l(L,{type:`icon`},{default:n(()=>[l(I,null,{default:n(()=>[l(H,{variant:`plain`,"aria-label":`Align left`},{icon:n(()=>[l(h(x))]),_:1})]),_:1}),l(I,null,{default:n(()=>[l(H,{variant:`plain`,"aria-label":`Align center`},{icon:n(()=>[l(h(S))]),_:1})]),_:1}),l(I,null,{default:n(()=>[l(H,{variant:`plain`,"aria-label":`Align right`},{icon:n(()=>[l(h(C))]),_:1})]),_:1})]),_:1})]),_:1}),l(z,{"additional-options":``},{default:n(()=>[l(h(O),{label:`Multiple group example overflow menu`,items:[...[`Primary`,`Secondary`,`Tertiary`,`Action 4`,`Action 5`,`Action 6`].map(e=>({label:e,shared:!0})),{label:`Action 7`}]},null,8,[`items`])]),_:1})]),_:1})]),_:1}),l(V,{title:`Persistent`,source:`<pf-overflow-menu breakpoint="lg">
  <pf-overflow-menu-content persistent>
    <pf-overflow-menu-group type="button" persistent>
      <pf-overflow-menu-item persistent>
        <pf-button variant="primary">Primary</pf-button>
      </pf-overflow-menu-item>
      <pf-overflow-menu-item>
        <pf-button variant="secondary">Secondary</pf-button>
      </pf-overflow-menu-item>
      <pf-overflow-menu-item>
        <pf-button variant="tertiary">Tertiary</pf-button>
      </pf-overflow-menu-item>
    </pf-overflow-menu-group>
  </pf-overflow-menu-content>
  <pf-overflow-menu-control additional-options>
    <overflow-dropdown
      label="Persistent example overflow menu"
      :items="[{ label: 'Secondary', shared: true }, { label: 'Tertiary', shared: true }, { label: 'Action 4' }]" />
  </pf-overflow-menu-control>
</pf-overflow-menu>`},{default:n(()=>[l(B,{breakpoint:`lg`},{default:n(()=>[l(R,{persistent:``},{default:n(()=>[l(L,{type:`button`,persistent:``},{default:n(()=>[l(I,{persistent:``},{default:n(()=>[l(H,{variant:`primary`},{default:n(()=>[...c[23]||=[p(`Primary`,-1)]]),_:1})]),_:1}),l(I,null,{default:n(()=>[l(H,{variant:`secondary`},{default:n(()=>[...c[24]||=[p(`Secondary`,-1)]]),_:1})]),_:1}),l(I,null,{default:n(()=>[l(H,{variant:`tertiary`},{default:n(()=>[...c[25]||=[p(`Tertiary`,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),l(z,{"additional-options":``},{default:n(()=>[l(h(O),{label:`Persistent example overflow menu`,items:[{label:`Secondary`,shared:!0},{label:`Tertiary`,shared:!0},{label:`Action 4`}]})]),_:1})]),_:1})]),_:1}),l(V,{title:`Breakpoint on container width`,source:`<div style="width: 100%; max-width: 400px">
  <label for="overflow-menu-container-width">Current container width: {{ containerWidth }}%</label>
  <input
    id="overflow-menu-container-width"
    v-model.number="containerWidth"
    type="range"
    min="20"
    max="100"
    step="20"
    style="display: block; width: 100%"
  >
</div>
<div
  ref="widthContainer"
  :style="{ width: \`\${containerWidth}%\`, padding: '1rem', borderWidth: '2px', borderStyle: 'dashed' }"
>
  <pf-overflow-menu :breakpoint-reference="widthContainer" breakpoint="sm">
    <pf-overflow-menu-content>
      <pf-overflow-menu-item>Item 1</pf-overflow-menu-item>
      <pf-overflow-menu-item>Item 2</pf-overflow-menu-item>
      <pf-overflow-menu-group>
        <pf-overflow-menu-item>Item 3</pf-overflow-menu-item>
        <pf-overflow-menu-item>Item 4</pf-overflow-menu-item>
        <pf-overflow-menu-item>Item 5</pf-overflow-menu-item>
      </pf-overflow-menu-group>
    </pf-overflow-menu-content>
    <pf-overflow-menu-control>
      <overflow-dropdown label="Breakpoint on container example overflow menu" :items="sharedItems(5)" />
    </pf-overflow-menu-control>
  </pf-overflow-menu>
</div>`},{intro:n(()=>[...c[26]||=[o(`div`,{class:`markdown pf-v6-c-content`},[o(`p`,null,[p(`By passing in the `),o(`code`,null,`breakpoint-reference`),p(` property, the overflow menu's breakpoint will be relative to the width of the reference container rather than the viewport width.`)]),o(`p`,null,`You can change the container width in this example by adjusting the slider. As the container width changes, the overflow menu will change between a horizontal menu and a vertical dropdown despite the viewport width not changing.`)],-1)]]),default:n(()=>[o(`div`,w,[o(`label`,T,`Current container width: `+a(A.value)+`%`,1),g(o(`input`,{id:`overflow-menu-container-width`,"onUpdate:modelValue":c[0]||=e=>A.value=e,type:`range`,min:`20`,max:`100`,step:`20`,style:{display:`block`,width:`100%`}},null,512),[[v,A.value,void 0,{number:!0}]])]),o(`div`,{ref_key:`widthContainer`,ref:j,style:i({width:`${A.value}%`,padding:`1rem`,borderWidth:`2px`,borderStyle:`dashed`})},[l(B,{"breakpoint-reference":j.value,breakpoint:`sm`},{default:n(()=>[l(R,null,{default:n(()=>[l(I,null,{default:n(()=>[...c[27]||=[p(`Item 1`,-1)]]),_:1}),l(I,null,{default:n(()=>[...c[28]||=[p(`Item 2`,-1)]]),_:1}),l(L,null,{default:n(()=>[l(I,null,{default:n(()=>[...c[29]||=[p(`Item 3`,-1)]]),_:1}),l(I,null,{default:n(()=>[...c[30]||=[p(`Item 4`,-1)]]),_:1}),l(I,null,{default:n(()=>[...c[31]||=[p(`Item 5`,-1)]]),_:1})]),_:1})]),_:1}),l(z,null,{default:n(()=>[l(h(O),{label:`Breakpoint on container example overflow menu`,items:k(5)},null,8,[`items`])]),_:1})]),_:1},8,[`breakpoint-reference`])],4)]),_:1}),l(V,{title:`Breakpoint on container height`,source:`<label for="overflow-menu-container-height">Current container height: {{ containerHeight }}%</label>
<input
  id="overflow-menu-container-height"
  v-model.number="containerHeight"
  type="range"
  min="20"
  max="100"
  step="20"
  style="display: block; width: 100%; max-width: 400px"
>
<div style="height: 1000px">
  <div
    ref="heightContainer"
    :style="{ height: \`\${containerHeight}%\`, padding: '1rem', borderWidth: '2px', borderStyle: 'dashed' }"
  >
    <pf-overflow-menu :breakpoint-reference="heightContainer" breakpoint="md" vertical>
      <pf-overflow-menu-content>
        <pf-overflow-menu-item>Item 1</pf-overflow-menu-item>
        <pf-overflow-menu-item>Item 2</pf-overflow-menu-item>
        <pf-overflow-menu-group>
          <pf-overflow-menu-item>Item 3</pf-overflow-menu-item>
          <pf-overflow-menu-item>Item 4</pf-overflow-menu-item>
          <pf-overflow-menu-item>Item 5</pf-overflow-menu-item>
        </pf-overflow-menu-group>
      </pf-overflow-menu-content>
      <pf-overflow-menu-control>
        <overflow-dropdown label="Height breakpoint on container example overflow menu" :items="sharedItems(5)" />
      </pf-overflow-menu-control>
    </pf-overflow-menu>
  </div>
</div>`},{intro:n(()=>[...c[32]||=[o(`div`,{class:`markdown pf-v6-c-content`},[o(`p`,null,[p(`By passing in the `),o(`code`,null,`breakpoint-reference`),p(` and `),o(`code`,null,`vertical`),p(` properties, the overflow menu's breakpoint will be determined relative to the height of the reference container rather than the window height.`)])],-1)]]),default:n(()=>[o(`label`,E,`Current container height: `+a(M.value)+`%`,1),g(o(`input`,{id:`overflow-menu-container-height`,"onUpdate:modelValue":c[1]||=e=>M.value=e,type:`range`,min:`20`,max:`100`,step:`20`,style:{display:`block`,width:`100%`,"max-width":`400px`}},null,512),[[v,M.value,void 0,{number:!0}]]),o(`div`,D,[o(`div`,{ref_key:`heightContainer`,ref:N,style:i({height:`${M.value}%`,padding:`1rem`,borderWidth:`2px`,borderStyle:`dashed`})},[l(B,{"breakpoint-reference":N.value,breakpoint:`md`,vertical:``},{default:n(()=>[l(R,null,{default:n(()=>[l(I,null,{default:n(()=>[...c[33]||=[p(`Item 1`,-1)]]),_:1}),l(I,null,{default:n(()=>[...c[34]||=[p(`Item 2`,-1)]]),_:1}),l(L,null,{default:n(()=>[l(I,null,{default:n(()=>[...c[35]||=[p(`Item 3`,-1)]]),_:1}),l(I,null,{default:n(()=>[...c[36]||=[p(`Item 4`,-1)]]),_:1}),l(I,null,{default:n(()=>[...c[37]||=[p(`Item 5`,-1)]]),_:1})]),_:1})]),_:1}),l(z,null,{default:n(()=>[l(h(O),{label:`Height breakpoint on container example overflow menu`,items:k(5)},null,8,[`items`])]),_:1})]),_:1},8,[`breakpoint-reference`])],4)])]),_:1})]),_:1})],64)}}});export{O as default};