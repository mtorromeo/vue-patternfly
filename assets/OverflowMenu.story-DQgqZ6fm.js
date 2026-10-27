import{F as e,G as t,H as n,K as r,Mt as i,N as a,Nt as o,c as s,d as c,ft as l,g as u,h as d,j as f,l as p,m,n as h,rt as g}from"./runtime-core.esm-bundler-DKmYt4j6.js";import{D as _,K as v,W as y,j as b}from"./index-Cl3hMFDe.js";var x=y({name:`AlignLeftIcon`,height:512,width:448,svgPathData:`M288 64c0 17.7-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l224 0c17.7 0 32 14.3 32 32zm0 256c0 17.7-14.3 32-32 32L32 352c-17.7 0-32-14.3-32-32s14.3-32 32-32l224 0c17.7 0 32 14.3 32 32zM0 192c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 224c-17.7 0-32-14.3-32-32zM448 448c0 17.7-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z`,yOffset:0,xOffset:0}),S=y({name:`AlignCenterIcon`,height:512,width:448,svgPathData:`M352 64c0-17.7-14.3-32-32-32L128 32c-17.7 0-32 14.3-32 32s14.3 32 32 32l192 0c17.7 0 32-14.3 32-32zm96 128c0-17.7-14.3-32-32-32L32 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32zM0 448c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 416c-17.7 0-32 14.3-32 32zM352 320c0-17.7-14.3-32-32-32l-192 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l192 0c17.7 0 32-14.3 32-32z`,yOffset:0,xOffset:0}),C=y({name:`AlignRightIcon`,height:512,width:448,svgPathData:`M448 64c0 17.7-14.3 32-32 32L192 96c-17.7 0-32-14.3-32-32s14.3-32 32-32l224 0c17.7 0 32 14.3 32 32zm0 256c0 17.7-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l224 0c17.7 0 32 14.3 32 32zM0 192c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 224c-17.7 0-32-14.3-32-32zM448 448c0 17.7-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z`,yOffset:0,xOffset:0}),w={style:{width:`100%`,"max-width":`400px`}},T={for:`overflow-menu-container-width`},E={for:`overflow-menu-container-height`},D={style:{height:`1000px`}},O=u({__name:`OverflowMenu.story`,setup(u){let[y,O]=b();function k(e){return Array.from({length:e},(e,t)=>({label:`Item ${t+1}`,shared:!0}))}let A=g(100),j=n(`widthContainer`),M=g(100),N=n(`heightContainer`);return(n,u)=>{let g=e(`pf-menu-toggle`),b=e(`pf-overflow-menu-dropdown-item`),P=e(`pf-dropdown`),F=e(`component-info`),I=e(`pf-overflow-menu-item`),L=e(`pf-overflow-menu-group`),R=e(`pf-overflow-menu-content`),z=e(`pf-overflow-menu-control`),B=e(`pf-overflow-menu`),V=e(`story-canvas`),H=e(`pf-button`),U=e(`doc-page`);return f(),c(h,null,[d(l(y),null,{default:t(({label:e,items:n})=>[d(P,{"close-on-select":``},{toggle:t(()=>[d(g,{variant:`plain`,"aria-label":e},{icon:t(()=>[d(l(_))]),_:1},8,[`aria-label`])]),default:t(()=>[(f(!0),c(h,null,a(n,(e,n)=>(f(),p(b,{key:n,value:n,shared:e.shared},{default:t(()=>[m(o(e.label),1)]),_:2},1032,[`value`,`shared`]))),128))]),_:2},1024)]),_:1}),d(U,{name:`Components/OverflowMenu.story.vue`,title:`Overflow Menu`},{description:t(()=>[...u[2]||=[m(`An `,-1),s(`b`,null,`overflow menu`,-1),m(` groups a set of actions in a responsive horizontal list to help declutter an interface. Actions can be set to persist or collapse into a kebab as the viewpoint shrinks. Overflow menus are useful in toolbars or other places where a group of actions is required.`,-1)]]),apidocs:t(()=>[d(F,{name:`PfOverflowMenu`,doc:{name:`PfOverflowMenu`,exportName:`PfOverflowMenu`,displayName:`OverflowMenu`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`breakpoint`,description:`Indicates breakpoint at which to switch between expanded and collapsed states. The "sm" breakpoint does not apply to vertical overflow menus.`,required:!0,type:{name:`TSTypeOperator`}},{name:`breakpointReference`,description:`A container to base the specified breakpoint on instead of the viewport: an element, a ref or a function returning it`,required:!1,type:{name:`MaybeRefOrGetter`,elements:[{name:`union`,elements:[{name:`HTMLElement`},{name:`null`},{name:`undefined`}]}]}},{name:`vertical`,description:`Indicates the overflow menu orientation is vertical and should respond to height changes instead of width.`,required:!1,type:{name:`boolean`}}],events:[],slots:[{name:`default`,scoped:!0,bindings:[{name:`below-breakpoint`,title:`binding`}],description:`Content and control of the overflow menu`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/OverflowMenu/OverflowMenu.vue`]}}),d(F,{name:`PfOverflowMenuContent`,doc:{name:`PfOverflowMenuContent`,exportName:`PfOverflowMenuContent`,displayName:`OverflowMenuContent`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`persistent`,description:`Modifies the overflow menu content visibility`,required:!1,type:{name:`boolean`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/OverflowMenu/OverflowMenuContent.vue`]}}),d(F,{name:`PfOverflowMenuControl`,doc:{name:`PfOverflowMenuControl`,exportName:`PfOverflowMenuControl`,displayName:`OverflowMenuControl`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`additionalOptions`,description:`Triggers the overflow dropdown to persist at all viewport sizes`,required:!1,type:{name:`boolean`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/OverflowMenu/OverflowMenuControl.vue`]}}),d(F,{name:`PfOverflowMenuDropdownItem`,doc:{name:`PfOverflowMenuDropdownItem`,exportName:`PfOverflowMenuDropdownItem`,displayName:`OverflowMenuDropdownItem`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`shared`,description:`Indicates when a dropdown item shows and hides the corresponding list item`,required:!1,type:{name:`boolean`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/OverflowMenu/OverflowMenuDropdownItem.vue`]}}),d(F,{name:`PfOverflowMenuGroup`,doc:{name:`PfOverflowMenuGroup`,exportName:`PfOverflowMenuGroup`,displayName:`OverflowMenuGroup`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`persistent`,description:`Modifies the overflow menu group visibility`,required:!1,type:{name:`boolean`}},{name:`type`,description:`Indicates a button or icon group`,required:!1,type:{name:`union`,elements:[{name:`"button"`},{name:`"icon"`}]}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/OverflowMenu/OverflowMenuGroup.vue`]}}),d(F,{name:`PfOverflowMenuItem`,doc:{name:`PfOverflowMenuItem`,exportName:`PfOverflowMenuItem`,displayName:`OverflowMenuItem`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`persistent`,description:`Modifies the overflow menu item visibility`,required:!1,type:{name:`boolean`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/OverflowMenu/OverflowMenuItem.vue`]}})]),default:t(()=>[u[38]||=s(`div`,{class:`markdown pf-v6-c-content`},[s(`p`,null,[m(`The default slot of `),s(`code`,null,`pf-overflow-menu`),m(` receives `),s(`code`,null,`below-breakpoint`),m(`, which updates when the specified breakpoint is reached, to further customize behaviors that should respect responsive breakpoints (`),s(`code`,null,`OverflowMenuContext`),m(` in patternfly-react).`)]),s(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),s(`ul`,null,[s(`li`,null,[s(`code`,null,`isPersistent`),m(` is `),s(`code`,null,`persistent`),m(`, `),s(`code`,null,`isVertical`),m(` is `),s(`code`,null,`vertical`),m(`, `),s(`code`,null,`hasAdditionalOptions`),m(` is `),s(`code`,null,`additional-options`),m(` and `),s(`code`,null,`isShared`),m(` is `),s(`code`,null,`shared`),m(`.`)]),s(`li`,null,[m(`The `),s(`code`,null,`groupType`),m(` of `),s(`code`,null,`pf-overflow-menu-group`),m(` is `),s(`code`,null,`type`),m(`, and the `),s(`code`,null,`itemId`),m(` of `),s(`code`,null,`pf-overflow-menu-dropdown-item`),m(` is `),s(`code`,null,`value`),m(`, as in `),s(`code`,null,`pf-menu-item`),m(`.`)]),s(`li`,null,[s(`code`,null,`breakpoint-reference`),m(` takes the container element (such as a template ref) or a function returning it.`)]),s(`li`,null,[m(`The breakpoint state is the `),s(`code`,null,`below-breakpoint`),m(` prop of the default slot rather than a context. See `),s(`a`,{href:`#/`},`common differences from patternfly-react`),m(`.`)])]),s(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),d(V,{title:`Simple (responsive)`,source:`<pf-overflow-menu breakpoint="lg">
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
</pf-overflow-menu>`},{default:t(()=>[d(B,{breakpoint:`lg`},{default:t(()=>[d(R,null,{default:t(()=>[d(I,null,{default:t(()=>[...u[3]||=[m(`Item`,-1)]]),_:1}),d(I,null,{default:t(()=>[...u[4]||=[m(`Item`,-1)]]),_:1}),d(L,null,{default:t(()=>[d(I,null,{default:t(()=>[...u[5]||=[m(`Item`,-1)]]),_:1}),d(I,null,{default:t(()=>[...u[6]||=[m(`Item`,-1)]]),_:1}),d(I,null,{default:t(()=>[...u[7]||=[m(`Item`,-1)]]),_:1})]),_:1})]),_:1}),d(z,null,{default:t(()=>[d(l(O),{label:`Simple example overflow menu`,items:k(5)},null,8,[`items`])]),_:1})]),_:1})]),_:1}),d(V,{title:`Vertical`,source:`<pf-overflow-menu breakpoint="md" vertical>
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
</pf-overflow-menu>`},{intro:t(()=>[...u[8]||=[s(`div`,{class:`markdown pf-v6-c-content`},[s(`p`,null,[m(`Passing `),s(`code`,null,`vertical`),m(` to `),s(`code`,null,`pf-overflow-menu`),m(` will change its behavior to respond to breakpoints based on window height instead of width.`)])],-1)]]),default:t(()=>[d(B,{breakpoint:`md`,vertical:``},{default:t(()=>[d(R,null,{default:t(()=>[d(I,null,{default:t(()=>[...u[9]||=[m(`Item`,-1)]]),_:1}),d(I,null,{default:t(()=>[...u[10]||=[m(`Item`,-1)]]),_:1}),d(L,null,{default:t(()=>[d(I,null,{default:t(()=>[...u[11]||=[m(`Item`,-1)]]),_:1}),d(I,null,{default:t(()=>[...u[12]||=[m(`Item`,-1)]]),_:1}),d(I,null,{default:t(()=>[...u[13]||=[m(`Item`,-1)]]),_:1})]),_:1})]),_:1}),d(z,null,{default:t(()=>[d(l(O),{label:`Simple example overflow menu`,items:k(5)},null,8,[`items`])]),_:1})]),_:1})]),_:1}),d(V,{title:`Group types`,source:`<pf-overflow-menu breakpoint="lg">
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
</pf-overflow-menu>`},{default:t(()=>[d(B,{breakpoint:`lg`},{default:t(()=>[d(R,null,{default:t(()=>[d(L,null,{default:t(()=>[d(I,null,{default:t(()=>[...u[14]||=[m(`Item`,-1)]]),_:1}),d(I,null,{default:t(()=>[...u[15]||=[m(`Item`,-1)]]),_:1}),d(I,null,{default:t(()=>[...u[16]||=[m(`Item`,-1)]]),_:1})]),_:1}),d(L,{type:`button`},{default:t(()=>[d(I,null,{default:t(()=>[d(H,{variant:`primary`},{default:t(()=>[...u[17]||=[m(`Primary`,-1)]]),_:1})]),_:1}),d(I,null,{default:t(()=>[d(H,{variant:`secondary`},{default:t(()=>[...u[18]||=[m(`Secondary`,-1)]]),_:1})]),_:1}),d(I,null,{default:t(()=>[d(H,{variant:`tertiary`},{default:t(()=>[...u[19]||=[m(`Tertiary`,-1)]]),_:1})]),_:1})]),_:1}),d(L,{type:`icon`},{default:t(()=>[d(I,null,{default:t(()=>[d(H,{variant:`plain`,"aria-label":`Align left`},{icon:t(()=>[d(l(x))]),_:1})]),_:1}),d(I,null,{default:t(()=>[d(H,{variant:`plain`,"aria-label":`Align center`},{icon:t(()=>[d(l(S))]),_:1})]),_:1}),d(I,null,{default:t(()=>[d(H,{variant:`plain`,"aria-label":`Align right`},{icon:t(()=>[d(l(C))]),_:1})]),_:1})]),_:1})]),_:1}),d(z,null,{default:t(()=>[d(l(O),{label:`Group example overflow menu`,items:[`Item 1`,`Item 2`,`Item 3`,`Primary`,`Secondary`,`Tertiary`,`Action 1`,`Action 2`,`Action 3`].map(e=>({label:e,shared:!0}))},null,8,[`items`])]),_:1})]),_:1})]),_:1}),d(V,{title:`Multiple groups`,source:`<pf-overflow-menu breakpoint="lg">
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
</pf-overflow-menu>`},{default:t(()=>[d(B,{breakpoint:`lg`},{default:t(()=>[d(R,null,{default:t(()=>[d(L,{type:`button`},{default:t(()=>[d(I,null,{default:t(()=>[d(H,{variant:`primary`},{default:t(()=>[...u[20]||=[m(`Primary`,-1)]]),_:1})]),_:1}),d(I,null,{default:t(()=>[d(H,{variant:`secondary`},{default:t(()=>[...u[21]||=[m(`Secondary`,-1)]]),_:1})]),_:1}),d(I,null,{default:t(()=>[d(H,{variant:`tertiary`},{default:t(()=>[...u[22]||=[m(`Tertiary`,-1)]]),_:1})]),_:1})]),_:1}),d(L,{type:`icon`},{default:t(()=>[d(I,null,{default:t(()=>[d(H,{variant:`plain`,"aria-label":`Align left`},{icon:t(()=>[d(l(x))]),_:1})]),_:1}),d(I,null,{default:t(()=>[d(H,{variant:`plain`,"aria-label":`Align center`},{icon:t(()=>[d(l(S))]),_:1})]),_:1}),d(I,null,{default:t(()=>[d(H,{variant:`plain`,"aria-label":`Align right`},{icon:t(()=>[d(l(C))]),_:1})]),_:1})]),_:1})]),_:1}),d(z,{"additional-options":``},{default:t(()=>[d(l(O),{label:`Multiple group example overflow menu`,items:[...[`Primary`,`Secondary`,`Tertiary`,`Action 4`,`Action 5`,`Action 6`].map(e=>({label:e,shared:!0})),{label:`Action 7`}]},null,8,[`items`])]),_:1})]),_:1})]),_:1}),d(V,{title:`Persistent`,source:`<pf-overflow-menu breakpoint="lg">
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
</pf-overflow-menu>`},{default:t(()=>[d(B,{breakpoint:`lg`},{default:t(()=>[d(R,{persistent:``},{default:t(()=>[d(L,{type:`button`,persistent:``},{default:t(()=>[d(I,{persistent:``},{default:t(()=>[d(H,{variant:`primary`},{default:t(()=>[...u[23]||=[m(`Primary`,-1)]]),_:1})]),_:1}),d(I,null,{default:t(()=>[d(H,{variant:`secondary`},{default:t(()=>[...u[24]||=[m(`Secondary`,-1)]]),_:1})]),_:1}),d(I,null,{default:t(()=>[d(H,{variant:`tertiary`},{default:t(()=>[...u[25]||=[m(`Tertiary`,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),d(z,{"additional-options":``},{default:t(()=>[d(l(O),{label:`Persistent example overflow menu`,items:[{label:`Secondary`,shared:!0},{label:`Tertiary`,shared:!0},{label:`Action 4`}]})]),_:1})]),_:1})]),_:1}),d(V,{title:`Breakpoint on container width`,source:`<div style="width: 100%; max-width: 400px">
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
</div>`},{intro:t(()=>[...u[26]||=[s(`div`,{class:`markdown pf-v6-c-content`},[s(`p`,null,[m(`By passing in the `),s(`code`,null,`breakpoint-reference`),m(` property, the overflow menu's breakpoint will be relative to the width of the reference container rather than the viewport width.`)]),s(`p`,null,`You can change the container width in this example by adjusting the slider. As the container width changes, the overflow menu will change between a horizontal menu and a vertical dropdown despite the viewport width not changing.`)],-1)]]),default:t(()=>[s(`div`,w,[s(`label`,T,`Current container width: `+o(A.value)+`%`,1),r(s(`input`,{id:`overflow-menu-container-width`,"onUpdate:modelValue":u[0]||=e=>A.value=e,type:`range`,min:`20`,max:`100`,step:`20`,style:{display:`block`,width:`100%`}},null,512),[[v,A.value,void 0,{number:!0}]])]),s(`div`,{ref_key:`widthContainer`,ref:j,style:i({width:`${A.value}%`,padding:`1rem`,borderWidth:`2px`,borderStyle:`dashed`})},[d(B,{"breakpoint-reference":j.value,breakpoint:`sm`},{default:t(()=>[d(R,null,{default:t(()=>[d(I,null,{default:t(()=>[...u[27]||=[m(`Item 1`,-1)]]),_:1}),d(I,null,{default:t(()=>[...u[28]||=[m(`Item 2`,-1)]]),_:1}),d(L,null,{default:t(()=>[d(I,null,{default:t(()=>[...u[29]||=[m(`Item 3`,-1)]]),_:1}),d(I,null,{default:t(()=>[...u[30]||=[m(`Item 4`,-1)]]),_:1}),d(I,null,{default:t(()=>[...u[31]||=[m(`Item 5`,-1)]]),_:1})]),_:1})]),_:1}),d(z,null,{default:t(()=>[d(l(O),{label:`Breakpoint on container example overflow menu`,items:k(5)},null,8,[`items`])]),_:1})]),_:1},8,[`breakpoint-reference`])],4)]),_:1}),d(V,{title:`Breakpoint on container height`,source:`<label for="overflow-menu-container-height">Current container height: {{ containerHeight }}%</label>
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
</div>`},{intro:t(()=>[...u[32]||=[s(`div`,{class:`markdown pf-v6-c-content`},[s(`p`,null,[m(`By passing in the `),s(`code`,null,`breakpoint-reference`),m(` and `),s(`code`,null,`vertical`),m(` properties, the overflow menu's breakpoint will be determined relative to the height of the reference container rather than the window height.`)])],-1)]]),default:t(()=>[s(`label`,E,`Current container height: `+o(M.value)+`%`,1),r(s(`input`,{id:`overflow-menu-container-height`,"onUpdate:modelValue":u[1]||=e=>M.value=e,type:`range`,min:`20`,max:`100`,step:`20`,style:{display:`block`,width:`100%`,"max-width":`400px`}},null,512),[[v,M.value,void 0,{number:!0}]]),s(`div`,D,[s(`div`,{ref_key:`heightContainer`,ref:N,style:i({height:`${M.value}%`,padding:`1rem`,borderWidth:`2px`,borderStyle:`dashed`})},[d(B,{"breakpoint-reference":N.value,breakpoint:`md`,vertical:``},{default:t(()=>[d(R,null,{default:t(()=>[d(I,null,{default:t(()=>[...u[33]||=[m(`Item 1`,-1)]]),_:1}),d(I,null,{default:t(()=>[...u[34]||=[m(`Item 2`,-1)]]),_:1}),d(L,null,{default:t(()=>[d(I,null,{default:t(()=>[...u[35]||=[m(`Item 3`,-1)]]),_:1}),d(I,null,{default:t(()=>[...u[36]||=[m(`Item 4`,-1)]]),_:1}),d(I,null,{default:t(()=>[...u[37]||=[m(`Item 5`,-1)]]),_:1})]),_:1})]),_:1}),d(z,null,{default:t(()=>[d(l(O),{label:`Height breakpoint on container example overflow menu`,items:k(5)},null,8,[`items`])]),_:1})]),_:1},8,[`breakpoint-reference`])],4)])]),_:1})]),_:1})],64)}}});export{O as default};