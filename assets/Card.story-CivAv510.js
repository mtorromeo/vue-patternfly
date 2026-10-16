import{N as e,U as t,c as n,h as r,k as i,m as a,p as o,s,st as c}from"./runtime-core.esm-bundler-wvQKcJ7_.js";var l=new URL(`PF-HorizontalLogo-Color-Cbap-rZ-.svg`,import.meta.url).href,u=`data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Logo'%3e%3cpath%20id='Rectangle-Copy-17'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M15.6522%200H40V24.3478H37.3913C25.3851%2024.3478%2015.6522%2014.6149%2015.6522%202.6087V0Z'%20fill='%230066CC'/%3e%3cpath%20id='Path-2'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M40%200.869568L16.5217%2040H34.9367C37.7331%2040%2040%2037.7331%2040%2034.9367V0.869568Z'%20fill='url(%23paint0_linear_6460_7774)'/%3e%3cpath%20id='Path-2_2'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M39.1304%209.53674e-06L-3.8147e-06%2023.4783V5.0633C-3.8147e-06%202.26692%202.26691%209.53674e-06%205.06329%209.53674e-06L39.1304%209.53674e-06Z'%20fill='url(%23paint1_linear_6460_7774)'/%3e%3c/g%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_6460_7774'%20x1='1613.04'%20y1='0.869504'%20x2='-337.034'%20y2='3251'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%232B9AF3'/%3e%3cstop%20offset='1'%20stop-color='%2373BCF7'%20stop-opacity='0.502213'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_6460_7774'%20x1='39.1305'%20y1='-1573.04'%20x2='-3211'%20y2='377.033'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%232B9AF3'/%3e%3cstop%20offset='1'%20stop-color='%2373BCF7'%20stop-opacity='0.502213'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e`,d=[`src`],f=r({__name:`Card.story`,setup(r){return(r,f)=>{let p=e(`component-info`),m=e(`pf-card-title`),h=e(`pf-card-body`),g=e(`pf-card-footer`),_=e(`pf-card`),v=e(`story-canvas`),y=e(`pf-brand`),b=e(`pf-menu-toggle`),x=e(`pf-dropdown-item`),S=e(`pf-divider`),C=e(`pf-dropdown`),w=e(`pf-checkbox`),T=e(`pf-card-actions`),E=e(`pf-card-header`),D=e(`pf-card-expandable-content`),O=e(`doc-page`);return i(),n(O,{name:`Components/Card.story.vue`,title:`Card`},{description:t(()=>[...f[0]||=[o(`A `,-1),s(`b`,null,`card`,-1),o(` is a square or rectangular container that can contain any kind of content. Cards symbolize units of information, and each one acts as an entry point for users to access more details. For example, in dashboards and catalog views, cards function as a preview of a detailed page. Cards may also be used in data displays like card views, or for positioning content on a page.`,-1)]]),apidocs:t(()=>[a(p,{name:`PfCard`,doc:{name:`PfCard`,exportName:`PfCard`,displayName:`Card`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`component`,description:`Content rendered inside the Card`,required:!1,type:{name:`union`,elements:[{name:`string`},{name:`Component`}]},defaultValue:{func:!1,value:`'div'`}},{name:`compact`,description:`Modifies the card to include compact styling. Should not be used with isLarge.`,required:!1,type:{name:`boolean`}},{name:`selectable`,description:`Modifies the card to include selectable styling`,required:!1,type:{name:`boolean`}},{name:`selectableInput`,description:`Flag indicating that the card should render a hidden input to make it selectable`,required:!1,type:{name:`union`,elements:[{name:`boolean`},{name:`"hidden"`},{name:`"visible"`}]}},{name:`name`,description:`Name of the optional hidden input that tracks the selected status`,required:!1,type:{name:`string`}},{name:`clicked`,description:`Flag indicating whether a card that is either only clickable or that is both clickable and selectable
is currently clicked and has clicked styling.`,required:!1,type:{name:`boolean`}},{name:`large`,description:`Modifies the card to be large. Should not be used with isCompact.`,required:!1,type:{name:`boolean`}},{name:`fullHeight`,description:`Cause component to consume the available height of its container`,required:!1,type:{name:`boolean`}},{name:`plain`,description:`Modifies the card to include plain styling; this removes border and background`,required:!1,type:{name:`boolean`}},{name:`glass`,description:`Modifies the card to include glass styling when glass theme is enabled`,required:!1,type:{name:`boolean`}},{name:`expandable`,description:`Modifies the card to be expandable`,required:!1,type:{name:`boolean`}},{name:`disabled`,description:`Flag indicating that a clickable or selectable card is disabled.`,required:!1,type:{name:`boolean`}},{name:`variant`,description:`Card background color variant`,required:!1,type:{name:`union`,elements:[{name:`"default"`},{name:`"secondary"`}]}},{name:`onClick`,required:!1,type:{name:`TSFunctionType`}}],events:[{name:`change`,type:{names:[`Event`]}}],slots:[{name:`default`},{name:`icon`},{name:`badge`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Card/Card.vue`]}}),a(p,{name:`PfCardActions`,doc:{name:`PfCardActions`,exportName:`PfCardActions`,displayName:`CardActions`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`noOffset`,description:`Flag indicating that the actions have no offset.`,required:!1,type:{name:`boolean`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Card/CardActions.vue`]}}),a(p,{name:`PfCardExpandableContent`,doc:{name:`PfCardExpandableContent`,exportName:`PfCardExpandableContent`,displayName:`CardExpandableContent`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Card/CardExpandableContent.vue`]}}),a(p,{name:`PfCardFooter`,doc:{name:`PfCardFooter`,exportName:`PfCardFooter`,displayName:`CardFooter`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`component`,description:`Sets the base component to render.`,required:!1,type:{name:`union`,elements:[{name:`string`},{name:`Component`}]},defaultValue:{func:!1,value:`'div'`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Card/CardFooter.vue`]}}),a(p,{name:`PfCardHeader`,doc:{name:`PfCardHeader`,exportName:`PfCardHeader`,displayName:`CardHeader`,description:``,tags:{},expose:[{name:`toggle`}],props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`toggleRightAligned`,description:`Whether to right-align expandable toggle button`,required:!1,type:{name:`boolean`}},{name:`toggleButtonAttrs`,description:`Additional props for expandable toggle button`,required:!1,type:{name:`ComponentProps`,elements:[{name:`TSTypeQuery`}]},defaultValue:{func:!1,value:`() => ({})`}},{name:`wrap`,description:`Flag indicating that header wrapping is enabled`,required:!1,type:{name:`boolean`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Card/CardHeader.vue`]}}),a(p,{name:`PfCardHeaderMain`,doc:{name:`PfCardHeaderMain`,exportName:`PfCardHeaderMain`,displayName:`CardHeaderMain`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Card/CardHeaderMain.vue`]}}),a(p,{name:`PfCardTitle`,doc:{name:`PfCardTitle`,exportName:`PfCardTitle`,displayName:`CardTitle`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`component`,description:`Sets the base component to render.`,required:!1,type:{name:`union`,elements:[{name:`string`},{name:`Component`}]},defaultValue:{func:!1,value:`'div'`}}],events:[],slots:[{name:`default`},{name:`subtitle`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Card/CardTitle.vue`]}})]),default:t(()=>[f[39]||=s(`div`,{class:`markdown pf-v6-c-content`},[s(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),s(`ul`,null,[s(`li`,null,[o(`The expanded state is controlled by `),s(`code`,null,`v-model:expanded`),o(` or managed internally with the prop `),s(`code`,null,`expandable`),o(`.`)]),s(`li`,null,[o(`The `),s(`code`,null,`isFilled`),o(` prop of `),s(`code`,null,`pf-card-body`),o(` is replaced by `),s(`code`,null,`no-fill`),o(` with inverted behavior. See `),s(`a`,{href:`#/`},`common differences from patternfly-react`),o(`.`)])]),s(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),a(v,{title:`Basic`,source:`<pf-card>
  <pf-card-title>Title</pf-card-title>
  <pf-card-body>Body</pf-card-body>
  <pf-card-footer>Footer</pf-card-footer>
</pf-card>`},{default:t(()=>[a(_,null,{default:t(()=>[a(m,null,{default:t(()=>[...f[1]||=[o(`Title`,-1)]]),_:1}),a(h,null,{default:t(()=>[...f[2]||=[o(`Body`,-1)]]),_:1}),a(g,null,{default:t(()=>[...f[3]||=[o(`Footer`,-1)]]),_:1})]),_:1})]),_:1}),a(v,{title:`Card with subtitle`,source:`<pf-card>
  <pf-card-title>
    Title
    <template #subtitle>
      Subtitle
    </template>
  </pf-card-title>
  <pf-card-body>Body</pf-card-body>
  <pf-card-footer>Footer</pf-card-footer>
</pf-card>`},{default:t(()=>[a(_,null,{default:t(()=>[a(m,null,{subtitle:t(()=>[...f[4]||=[o(` Subtitle `,-1)]]),default:t(()=>[f[5]||=o(` Title `,-1)]),_:1}),a(h,null,{default:t(()=>[...f[6]||=[o(`Body`,-1)]]),_:1}),a(g,null,{default:t(()=>[...f[7]||=[o(`Footer`,-1)]]),_:1})]),_:1})]),_:1}),a(v,{title:`Secondary`,source:`<pf-card variant="secondary">
  <pf-card-title>Title</pf-card-title>
  <pf-card-body>Body</pf-card-body>
  <pf-card-footer>Footer</pf-card-footer>
</pf-card>`},{default:t(()=>[a(_,{variant:`secondary`},{default:t(()=>[a(m,null,{default:t(()=>[...f[8]||=[o(`Title`,-1)]]),_:1}),a(h,null,{default:t(()=>[...f[9]||=[o(`Body`,-1)]]),_:1}),a(g,null,{default:t(()=>[...f[10]||=[o(`Footer`,-1)]]),_:1})]),_:1})]),_:1}),a(v,{title:`With image and actions`,source:`<pf-card>
  <pf-card-header>
    <pf-brand :src="PfLogo" alt="PatternFly logo" style="height: 50px" />
    <pf-card-actions no-offset>
      <pf-dropdown position="right">
        <template #toggle>
          <pf-menu-toggle variant="plain" />
        </template>
        <pf-dropdown-item>Link</pf-dropdown-item>
        <pf-dropdown-item component="button">
          Action
        </pf-dropdown-item>
        <pf-dropdown-item disabled>
          Disabled Link
        </pf-dropdown-item>
        <pf-dropdown-item disabled component="button">
          Disabled Action
        </pf-dropdown-item>
        <pf-divider component="li" />
        <pf-dropdown-item>Separated Link</pf-dropdown-item>
        <pf-dropdown-item component="button">
          Separated Action
        </pf-dropdown-item>
      </pf-dropdown>
      <pf-checkbox aria-label="card checkbox example" />
    </pf-card-actions>
  </pf-card-header>
  <pf-card-title>Title</pf-card-title>
  <pf-card-body>Body</pf-card-body>
  <pf-card-footer>Footer</pf-card-footer>
</pf-card>`},{default:t(()=>[a(_,null,{default:t(()=>[a(E,null,{default:t(()=>[a(y,{src:c(l),alt:`PatternFly logo`,style:{height:`50px`}},null,8,[`src`]),a(T,{"no-offset":``},{default:t(()=>[a(C,{position:`right`},{toggle:t(()=>[a(b,{variant:`plain`})]),default:t(()=>[a(x,null,{default:t(()=>[...f[11]||=[o(`Link`,-1)]]),_:1}),a(x,{component:`button`},{default:t(()=>[...f[12]||=[o(` Action `,-1)]]),_:1}),a(x,{disabled:``},{default:t(()=>[...f[13]||=[o(` Disabled Link `,-1)]]),_:1}),a(x,{disabled:``,component:`button`},{default:t(()=>[...f[14]||=[o(` Disabled Action `,-1)]]),_:1}),a(S,{component:`li`}),a(x,null,{default:t(()=>[...f[15]||=[o(`Separated Link`,-1)]]),_:1}),a(x,{component:`button`},{default:t(()=>[...f[16]||=[o(` Separated Action `,-1)]]),_:1})]),_:1}),a(w,{"aria-label":`card checkbox example`})]),_:1})]),_:1}),a(m,null,{default:t(()=>[...f[17]||=[o(`Title`,-1)]]),_:1}),a(h,null,{default:t(()=>[...f[18]||=[o(`Body`,-1)]]),_:1}),a(g,null,{default:t(()=>[...f[19]||=[o(`Footer`,-1)]]),_:1})]),_:1})]),_:1}),a(v,{title:`Expandable with icon`,source:`<pf-card expandable>
  <pf-card-header>
    <img :src="PfIconLogo" alt="PatternFly logo" style="width: 27px">
    <pf-card-actions>
      <pf-dropdown position="right">
        <template #toggle>
          <pf-menu-toggle variant="plain" />
        </template>
        <pf-dropdown-item>Link</pf-dropdown-item>
        <pf-dropdown-item component="button">
          Action
        </pf-dropdown-item>
        <pf-dropdown-item disabled>
          Disabled Link
        </pf-dropdown-item>
        <pf-dropdown-item disabled component="button">
          Disabled Action
        </pf-dropdown-item>
      </pf-dropdown>
      <pf-checkbox aria-label="card checkbox example" />
    </pf-card-actions>
  </pf-card-header>
  <pf-card-expandable-content>
    <pf-card-body>Body</pf-card-body>
    <pf-card-footer>Footer</pf-card-footer>
  </pf-card-expandable-content>
</pf-card>`},{default:t(()=>[a(_,{expandable:``},{default:t(()=>[a(E,null,{default:t(()=>[s(`img`,{src:c(u),alt:`PatternFly logo`,style:{width:`27px`}},null,8,d),a(T,null,{default:t(()=>[a(C,{position:`right`},{toggle:t(()=>[a(b,{variant:`plain`})]),default:t(()=>[a(x,null,{default:t(()=>[...f[20]||=[o(`Link`,-1)]]),_:1}),a(x,{component:`button`},{default:t(()=>[...f[21]||=[o(` Action `,-1)]]),_:1}),a(x,{disabled:``},{default:t(()=>[...f[22]||=[o(` Disabled Link `,-1)]]),_:1}),a(x,{disabled:``,component:`button`},{default:t(()=>[...f[23]||=[o(` Disabled Action `,-1)]]),_:1})]),_:1}),a(w,{"aria-label":`card checkbox example`})]),_:1})]),_:1}),a(D,null,{default:t(()=>[a(h,null,{default:t(()=>[...f[24]||=[o(`Body`,-1)]]),_:1}),a(g,null,{default:t(()=>[...f[25]||=[o(`Footer`,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),a(v,{title:`Selectable cards`,source:`<pf-card selectable selectable-input="visible">
  <pf-card-header>
    <pf-card-actions>
      <pf-dropdown position="right">
        <template #toggle>
          <pf-menu-toggle variant="plain" />
        </template>
        <pf-dropdown-item>Link</pf-dropdown-item>
        <pf-dropdown-item component="button">
          Action
        </pf-dropdown-item>
        <pf-dropdown-item disabled>
          Disabled Link
        </pf-dropdown-item>
        <pf-dropdown-item disabled component="button">
          Disabled Action
        </pf-dropdown-item>
      </pf-dropdown>
    </pf-card-actions>
  </pf-card-header>
  <pf-card-title>First card</pf-card-title>
  <pf-card-body>This is a selectable card. Click me to select me. Click again to deselect me.</pf-card-body>
</pf-card>
<br>
<pf-card selectable selectable-input>
  <pf-card-header>
    <pf-card-title>Second card</pf-card-title>
  </pf-card-header>
  <pf-card-body>This is a selectable card. Click me to select me. Click again to deselect me.</pf-card-body>
</pf-card>
<br>
<pf-card selectable selectable-input disabled>
  <pf-card-header>
    <pf-card-title>Third card</pf-card-title>
  </pf-card-header>
  <pf-card-body>This is a raised but disabled card.</pf-card-body>
</pf-card>`},{intro:t(()=>[...f[26]||=[s(`div`,{class:`markdown pf-v6-c-content`},[s(`p`,null,`Selectable cards can only be selected one at a time, and are intended for use with primary-detail layout.`)],-1)]]),default:t(()=>[a(_,{selectable:``,"selectable-input":`visible`},{default:t(()=>[a(E,null,{default:t(()=>[a(T,null,{default:t(()=>[a(C,{position:`right`},{toggle:t(()=>[a(b,{variant:`plain`})]),default:t(()=>[a(x,null,{default:t(()=>[...f[27]||=[o(`Link`,-1)]]),_:1}),a(x,{component:`button`},{default:t(()=>[...f[28]||=[o(` Action `,-1)]]),_:1}),a(x,{disabled:``},{default:t(()=>[...f[29]||=[o(` Disabled Link `,-1)]]),_:1}),a(x,{disabled:``,component:`button`},{default:t(()=>[...f[30]||=[o(` Disabled Action `,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),a(m,null,{default:t(()=>[...f[31]||=[o(`First card`,-1)]]),_:1}),a(h,null,{default:t(()=>[...f[32]||=[o(`This is a selectable card. Click me to select me. Click again to deselect me.`,-1)]]),_:1})]),_:1}),f[37]||=s(`br`,null,null,-1),a(_,{selectable:``,"selectable-input":``},{default:t(()=>[a(E,null,{default:t(()=>[a(m,null,{default:t(()=>[...f[33]||=[o(`Second card`,-1)]]),_:1})]),_:1}),a(h,null,{default:t(()=>[...f[34]||=[o(`This is a selectable card. Click me to select me. Click again to deselect me.`,-1)]]),_:1})]),_:1}),f[38]||=s(`br`,null,null,-1),a(_,{selectable:``,"selectable-input":``,disabled:``},{default:t(()=>[a(E,null,{default:t(()=>[a(m,null,{default:t(()=>[...f[35]||=[o(`Third card`,-1)]]),_:1})]),_:1}),a(h,null,{default:t(()=>[...f[36]||=[o(`This is a raised but disabled card.`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})}}});export{f as default};