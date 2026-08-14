import{H as e,N as t,c as n,h as r,it as i,k as a,m as o,p as s,s as c}from"./runtime-core.esm-bundler-DvxuuL12.js";var l=``+new URL(`PF-HorizontalLogo-Color-Cbap-rZ-.svg`,import.meta.url).href,u=`data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Logo'%3e%3cpath%20id='Rectangle-Copy-17'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M15.6522%200H40V24.3478H37.3913C25.3851%2024.3478%2015.6522%2014.6149%2015.6522%202.6087V0Z'%20fill='%230066CC'/%3e%3cpath%20id='Path-2'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M40%200.869568L16.5217%2040H34.9367C37.7331%2040%2040%2037.7331%2040%2034.9367V0.869568Z'%20fill='url(%23paint0_linear_6460_7774)'/%3e%3cpath%20id='Path-2_2'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M39.1304%209.53674e-06L-3.8147e-06%2023.4783V5.0633C-3.8147e-06%202.26692%202.26691%209.53674e-06%205.06329%209.53674e-06L39.1304%209.53674e-06Z'%20fill='url(%23paint1_linear_6460_7774)'/%3e%3c/g%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_6460_7774'%20x1='1613.04'%20y1='0.869504'%20x2='-337.034'%20y2='3251'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%232B9AF3'/%3e%3cstop%20offset='1'%20stop-color='%2373BCF7'%20stop-opacity='0.502213'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_6460_7774'%20x1='39.1305'%20y1='-1573.04'%20x2='-3211'%20y2='377.033'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%232B9AF3'/%3e%3cstop%20offset='1'%20stop-color='%2373BCF7'%20stop-opacity='0.502213'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e`,d=[`src`],f=r({__name:`Card.story`,setup(r){return(r,f)=>{let p=t(`component-info`),m=t(`pf-card-title`),h=t(`pf-card-body`),g=t(`pf-card-footer`),_=t(`pf-card`),v=t(`story-canvas`),y=t(`pf-brand`),b=t(`pf-menu-toggle`),x=t(`pf-dropdown-item`),S=t(`pf-divider`),C=t(`pf-dropdown`),w=t(`pf-checkbox`),T=t(`pf-card-actions`),E=t(`pf-card-header`),D=t(`pf-card-expandable-content`),O=t(`doc-page`);return a(),n(O,{name:`Components/Card.story.vue`,title:`Card`},{description:e(()=>[...f[0]||=[s(`A `,-1),c(`b`,null,`card`,-1),s(` is a square or rectangular container that can contain any kind of content. Cards symbolize units of information, and each one acts as an entry point for users to access more details. For example, in dashboards and catalog views, cards function as a preview of a detailed page. Cards may also be used in data displays like card views, or for positioning content on a page.`,-1)]]),apidocs:e(()=>[o(p,{name:`PfCard`,doc:{name:`PfCard`,exportName:`PfCard`,displayName:`Card`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`component`,description:`Content rendered inside the Card`,required:!1,type:{name:`union`,elements:[{name:`string`},{name:`Component`}]},defaultValue:{func:!1,value:`'div'`}},{name:`compact`,description:`Modifies the card to include compact styling. Should not be used with isLarge.`,required:!1,type:{name:`boolean`}},{name:`selectable`,description:`Modifies the card to include selectable styling`,required:!1,type:{name:`boolean`}},{name:`selectableInput`,description:`Flag indicating that the card should render a hidden input to make it selectable`,required:!1,type:{name:`union`,elements:[{name:`boolean`},{name:`"hidden"`},{name:`"visible"`}]}},{name:`name`,description:`Name of the optional hidden input that tracks the selected status`,required:!1,type:{name:`string`}},{name:`clicked`,description:`Flag indicating whether a card that is either only clickable or that is both clickable and selectable
is currently clicked and has clicked styling.`,required:!1,type:{name:`boolean`}},{name:`large`,description:`Modifies the card to be large. Should not be used with isCompact.`,required:!1,type:{name:`boolean`}},{name:`fullHeight`,description:`Cause component to consume the available height of its container`,required:!1,type:{name:`boolean`}},{name:`plain`,description:`Modifies the card to include plain styling; this removes border and background`,required:!1,type:{name:`boolean`}},{name:`glass`,description:`Modifies the card to include glass styling when glass theme is enabled`,required:!1,type:{name:`boolean`}},{name:`expandable`,description:`Modifies the card to be expandable`,required:!1,type:{name:`boolean`}},{name:`disabled`,description:`Flag indicating that a clickable or selectable card is disabled.`,required:!1,type:{name:`boolean`}},{name:`variant`,description:`Card background color variant`,required:!1,type:{name:`union`,elements:[{name:`"default"`},{name:`"secondary"`}]}},{name:`onClick`,required:!1,type:{name:`TSFunctionType`}}],events:[{name:`change`,type:{names:[`Event`]}}],slots:[{name:`default`},{name:`icon`},{name:`badge`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Card/Card.vue`]}}),o(p,{name:`PfCardActions`,doc:{name:`PfCardActions`,exportName:`PfCardActions`,displayName:`CardActions`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`noOffset`,description:`Flag indicating that the actions have no offset.`,required:!1,type:{name:`boolean`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Card/CardActions.vue`]}}),o(p,{name:`PfCardExpandableContent`,doc:{name:`PfCardExpandableContent`,exportName:`PfCardExpandableContent`,displayName:`CardExpandableContent`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`noOffset`,description:`Flag indicating that the actions have no offset.`,required:!1,type:{name:`boolean`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Card/CardExpandableContent.vue`]}}),o(p,{name:`PfCardFooter`,doc:{name:`PfCardFooter`,exportName:`PfCardFooter`,displayName:`CardFooter`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`component`,description:`Sets the base component to render.`,required:!1,type:{name:`union`,elements:[{name:`string`},{name:`Component`}]},defaultValue:{func:!1,value:`'div'`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Card/CardFooter.vue`]}}),o(p,{name:`PfCardHeader`,doc:{name:`PfCardHeader`,exportName:`PfCardHeader`,displayName:`CardHeader`,description:``,tags:{},expose:[{name:`toggle`}],props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`toggleRightAligned`,description:`Whether to right-align expandable toggle button`,required:!1,type:{name:`boolean`}},{name:`toggleButtonAttrs`,description:`Additional props for expandable toggle button`,required:!1,type:{name:`ComponentProps`,elements:[{name:`TSTypeQuery`}]},defaultValue:{func:!1,value:`() => ({})`}},{name:`wrap`,description:`Flag indicating that header wrapping is enabled`,required:!1,type:{name:`boolean`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Card/CardHeader.vue`]}}),o(p,{name:`PfCardHeaderMain`,doc:{name:`PfCardHeaderMain`,exportName:`PfCardHeaderMain`,displayName:`CardHeaderMain`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Card/CardHeaderMain.vue`]}}),o(p,{name:`PfCardTitle`,doc:{name:`PfCardTitle`,exportName:`PfCardTitle`,displayName:`CardTitle`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`component`,description:`Sets the base component to render.`,required:!1,type:{name:`union`,elements:[{name:`string`},{name:`Component`}]},defaultValue:{func:!1,value:`'div'`}}],events:[],slots:[{name:`default`},{name:`subtitle`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Card/CardTitle.vue`]}})]),default:e(()=>[f[39]||=c(`div`,{class:`markdown pf-v6-c-content`},[c(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),c(`ul`,null,[c(`li`,null,[s(`The expanded state is controlled by `),c(`code`,null,`v-model:expanded`),s(` or managed internally with the prop `),c(`code`,null,`expandable`),s(`. See `),c(`a`,{href:`#/`},`common differences from patternfly-react`),s(`.`)])]),c(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),o(v,{title:`Basic`,source:`<pf-card>
  <pf-card-title>Title</pf-card-title>
  <pf-card-body>Body</pf-card-body>
  <pf-card-footer>Footer</pf-card-footer>
</pf-card>`},{default:e(()=>[o(_,null,{default:e(()=>[o(m,null,{default:e(()=>[...f[1]||=[s(`Title`,-1)]]),_:1}),o(h,null,{default:e(()=>[...f[2]||=[s(`Body`,-1)]]),_:1}),o(g,null,{default:e(()=>[...f[3]||=[s(`Footer`,-1)]]),_:1})]),_:1})]),_:1}),o(v,{title:`Card with subtitle`,source:`<pf-card>
  <pf-card-title>
    Title
    <template #subtitle>
      Subtitle
    </template>
  </pf-card-title>
  <pf-card-body>Body</pf-card-body>
  <pf-card-footer>Footer</pf-card-footer>
</pf-card>`},{default:e(()=>[o(_,null,{default:e(()=>[o(m,null,{subtitle:e(()=>[...f[4]||=[s(` Subtitle `,-1)]]),default:e(()=>[f[5]||=s(` Title `,-1)]),_:1}),o(h,null,{default:e(()=>[...f[6]||=[s(`Body`,-1)]]),_:1}),o(g,null,{default:e(()=>[...f[7]||=[s(`Footer`,-1)]]),_:1})]),_:1})]),_:1}),o(v,{title:`Secondary`,source:`<pf-card variant="secondary">
  <pf-card-title>Title</pf-card-title>
  <pf-card-body>Body</pf-card-body>
  <pf-card-footer>Footer</pf-card-footer>
</pf-card>`},{default:e(()=>[o(_,{variant:`secondary`},{default:e(()=>[o(m,null,{default:e(()=>[...f[8]||=[s(`Title`,-1)]]),_:1}),o(h,null,{default:e(()=>[...f[9]||=[s(`Body`,-1)]]),_:1}),o(g,null,{default:e(()=>[...f[10]||=[s(`Footer`,-1)]]),_:1})]),_:1})]),_:1}),o(v,{title:`With image and actions`,source:`<pf-card>
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
</pf-card>`},{default:e(()=>[o(_,null,{default:e(()=>[o(E,null,{default:e(()=>[o(y,{src:i(l),alt:`PatternFly logo`,style:{height:`50px`}},null,8,[`src`]),o(T,{"no-offset":``},{default:e(()=>[o(C,{position:`right`},{toggle:e(()=>[o(b,{variant:`plain`})]),default:e(()=>[o(x,null,{default:e(()=>[...f[11]||=[s(`Link`,-1)]]),_:1}),o(x,{component:`button`},{default:e(()=>[...f[12]||=[s(` Action `,-1)]]),_:1}),o(x,{disabled:``},{default:e(()=>[...f[13]||=[s(` Disabled Link `,-1)]]),_:1}),o(x,{disabled:``,component:`button`},{default:e(()=>[...f[14]||=[s(` Disabled Action `,-1)]]),_:1}),o(S,{component:`li`}),o(x,null,{default:e(()=>[...f[15]||=[s(`Separated Link`,-1)]]),_:1}),o(x,{component:`button`},{default:e(()=>[...f[16]||=[s(` Separated Action `,-1)]]),_:1})]),_:1}),o(w,{"aria-label":`card checkbox example`})]),_:1})]),_:1}),o(m,null,{default:e(()=>[...f[17]||=[s(`Title`,-1)]]),_:1}),o(h,null,{default:e(()=>[...f[18]||=[s(`Body`,-1)]]),_:1}),o(g,null,{default:e(()=>[...f[19]||=[s(`Footer`,-1)]]),_:1})]),_:1})]),_:1}),o(v,{title:`Expandable with icon`,source:`<pf-card expandable>
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
</pf-card>`},{default:e(()=>[o(_,{expandable:``},{default:e(()=>[o(E,null,{default:e(()=>[c(`img`,{src:i(u),alt:`PatternFly logo`,style:{width:`27px`}},null,8,d),o(T,null,{default:e(()=>[o(C,{position:`right`},{toggle:e(()=>[o(b,{variant:`plain`})]),default:e(()=>[o(x,null,{default:e(()=>[...f[20]||=[s(`Link`,-1)]]),_:1}),o(x,{component:`button`},{default:e(()=>[...f[21]||=[s(` Action `,-1)]]),_:1}),o(x,{disabled:``},{default:e(()=>[...f[22]||=[s(` Disabled Link `,-1)]]),_:1}),o(x,{disabled:``,component:`button`},{default:e(()=>[...f[23]||=[s(` Disabled Action `,-1)]]),_:1})]),_:1}),o(w,{"aria-label":`card checkbox example`})]),_:1})]),_:1}),o(D,null,{default:e(()=>[o(h,null,{default:e(()=>[...f[24]||=[s(`Body`,-1)]]),_:1}),o(g,null,{default:e(()=>[...f[25]||=[s(`Footer`,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),o(v,{title:`Selectable cards`,source:`<pf-card selectable selectable-input="visible">
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
</pf-card>`},{intro:e(()=>[...f[26]||=[c(`div`,{class:`markdown pf-v6-c-content`},[c(`p`,null,`Selectable cards can only be selected one at a time, and are intended for use with primary-detail layout.`)],-1)]]),default:e(()=>[o(_,{selectable:``,"selectable-input":`visible`},{default:e(()=>[o(E,null,{default:e(()=>[o(T,null,{default:e(()=>[o(C,{position:`right`},{toggle:e(()=>[o(b,{variant:`plain`})]),default:e(()=>[o(x,null,{default:e(()=>[...f[27]||=[s(`Link`,-1)]]),_:1}),o(x,{component:`button`},{default:e(()=>[...f[28]||=[s(` Action `,-1)]]),_:1}),o(x,{disabled:``},{default:e(()=>[...f[29]||=[s(` Disabled Link `,-1)]]),_:1}),o(x,{disabled:``,component:`button`},{default:e(()=>[...f[30]||=[s(` Disabled Action `,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),o(m,null,{default:e(()=>[...f[31]||=[s(`First card`,-1)]]),_:1}),o(h,null,{default:e(()=>[...f[32]||=[s(`This is a selectable card. Click me to select me. Click again to deselect me.`,-1)]]),_:1})]),_:1}),f[37]||=c(`br`,null,null,-1),o(_,{selectable:``,"selectable-input":``},{default:e(()=>[o(E,null,{default:e(()=>[o(m,null,{default:e(()=>[...f[33]||=[s(`Second card`,-1)]]),_:1})]),_:1}),o(h,null,{default:e(()=>[...f[34]||=[s(`This is a selectable card. Click me to select me. Click again to deselect me.`,-1)]]),_:1})]),_:1}),f[38]||=c(`br`,null,null,-1),o(_,{selectable:``,"selectable-input":``,disabled:``},{default:e(()=>[o(E,null,{default:e(()=>[o(m,null,{default:e(()=>[...f[35]||=[s(`Third card`,-1)]]),_:1})]),_:1}),o(h,null,{default:e(()=>[...f[36]||=[s(`This is a raised but disabled card.`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})}}});export{f as default};