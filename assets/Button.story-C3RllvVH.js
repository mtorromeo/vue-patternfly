import{F as e,G as t,N as n,Nt as r,c as i,d as a,ft as o,g as s,h as c,j as l,l as u,m as d,n as f,rt as p,y as m}from"./runtime-core.esm-bundler-DKmYt4j6.js";import{F as h,O as g,S as _,W as v,t as y,z as b}from"./index-Cl3hMFDe.js";import{t as x}from"./circle-plus-icon-CC9jckNx.js";import{t as S}from"./square-arrow-up-right-icon-xdnhqWk_.js";import{t as C}from"./copy-icon-CKeQI736.js";var w=v({name:`UploadIcon`,height:512,width:448,svgPathData:`M256 109.3L256 320c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-210.7-41.4 41.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l96-96c12.5-12.5 32.8-12.5 45.3 0l96 96c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 109.3zM224 400c44.2 0 80-35.8 80-80l80 0c35.3 0 64 28.7 64 64l0 32c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64l0-32c0-35.3 28.7-64 64-64l80 0c0 44.2 35.8 80 80 80zm144 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48z`,yOffset:0,xOffset:0}),T=s({__name:`Button.story`,setup(s){let v=y(),T=p(!0),E=p(!0),D=p(!0),O=p(!1),k=p(!1),A=p(!1),j=[`primary`,`secondary`,`tertiary`,`control`,`link`],M=[{title:`Unread:`,read:!1,disabled:!1},{title:`Unread disabled:`,read:!1,disabled:!0},{title:`Read:`,read:!0,disabled:!1},{title:`Read disabled:`,read:!0,disabled:!0}],N=[`primary`,`secondary`,`tertiary`,`danger`,`warning`,`link`],P=(e,{attrs:t,slots:n})=>m(`a`,{...t,href:`#`},n.default?.());function F(e){(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),v.add({title:`${e.key===`Enter`?`Enter`:`Space`} key default behavior stopped by keydown`,variant:`info`}))}return(s,p)=>{let m=e(`component-info`),v=e(`pf-button`),y=e(`pf-flex`),I=e(`story-canvas`),L=e(`pf-tooltip`),R=e(`pf-badge`),z=e(`doc-page`);return l(),u(z,{name:`Components/Button.story.vue`,title:`Button`},{description:t(()=>[...p[6]||=[d(`A `,-1),i(`b`,null,`button`,-1),d(` is a box area or text that communicates and triggers user actions when clicked or selected. Buttons can be used to communicate and immediately trigger actions a user can take in an application, like submitting a form, canceling a process, or creating a new object. Buttons can also be used to take a user to a new location, like another page inside of a web application, or an external site such as help or documentation.`,-1)]]),apidocs:t(()=>[c(m,{name:`PfButton`,doc:{name:`PfButton`,exportName:`PfButton`,displayName:`Button`,description:``,tags:{},expose:[{name:`el`}],props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`component`,description:`Sets the base component to render. defaults to button`,required:!1,type:{name:`union`,elements:[{name:`string`},{name:`Component`}]},defaultValue:{func:!1,value:`'auto'`}},{name:`clicked`,description:`Adds clicked styling to button.`,required:!1,type:{name:`boolean`}},{name:`block`,description:`Adds block styling to button`,required:!1,type:{name:`boolean`}},{name:`disabled`,description:`Adds disabled styling and disables the button using the disabled html attribute`,required:!1,type:{name:`boolean`}},{name:`ariaDisabled`,description:`Adds disabled styling and communicates that the button is disabled using the aria-disabled html attribute`,required:!1,type:{name:`boolean`}},{name:`loading`,description:`Adds progress styling to button and shows a spinner while true. The button stays clickable.`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`undefined`}},{name:`spinnerAriaValueText`,description:`Text describing that current loading status or progress`,required:!1,type:{name:`string`}},{name:`spinnerAriaLabel`,description:`Accessible label for the spinner to describe what is loading`,required:!1,type:{name:`string`}},{name:`spinnerAriaLabelledBy`,description:`Id of element which describes what is being loaded`,required:!1,type:{name:`string`}},{name:`inoperableEvents`,description:`Events to prevent when the button is in an aria-disabled state. Defaults to click and keypress`,required:!1,type:{name:`Array`,elements:[{name:`string`}]}},{name:`inline`,description:`Adds inline styling to a link button`,required:!1,type:{name:`boolean`}},{name:`favorite`,description:`Adds favorite styling to a button`,required:!1,type:{name:`boolean`}},{name:`favorited`,description:`Flag indicating whether the button is favorited or not, only when favorite is true.`,required:!1,type:{name:`boolean`}},{name:`type`,description:`Sets button type`,required:!1,type:{name:`union`,elements:[{name:`"button"`},{name:`"submit"`},{name:`"reset"`}]},defaultValue:{func:!1,value:`'button'`}},{name:`variant`,description:`Adds button variant styles`,required:!1,type:{name:`union`,elements:[{name:`"primary"`},{name:`"secondary"`},{name:`"tertiary"`},{name:`"danger"`},{name:`"warning"`},{name:`"link"`},{name:`"plain"`},{name:`"control"`},{name:`"stateful"`}]},defaultValue:{func:!1,value:`'primary'`}},{name:`state`,description:`Sets state of the stateful button variant. Default is "unread"`,required:!1,type:{name:`union`,elements:[{name:`"read"`},{name:`"unread"`},{name:`"attention"`}]}},{name:`noPadding`,description:`Applies no padding on a plain button variant. Use when plain button is placed inline with text`,required:!1,type:{name:`boolean`}},{name:`iconPosition`,description:`Sets position of the link icon`,required:!1,type:{name:`union`,elements:[{name:`"start"`},{name:`"end"`}]},defaultValue:{func:!1,value:`'start'`}},{name:`tabindex`,description:`Sets the button tabindex.`,required:!1,type:{name:`number`}},{name:`small`,description:`Adds small styling to the button`,required:!1,type:{name:`boolean`}},{name:`large`,description:`Adds large styling to the button`,required:!1,type:{name:`boolean`}},{name:`danger`,description:`Adds danger styling to secondary or link button variants`,required:!1,type:{name:`boolean`}},{name:`badgeClass`,description:`Class name for the badge container`,required:!1,type:{name:`string`}},{name:`expanded`,description:`Flag indicating whether content the button controls is expanded or not. Required when hamburger is true. Applies additional expanded styling when docked is true.`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`undefined`}},{name:`settings`,description:`Flag indicating the button is a settings button. This will override the icon property.`,required:!1,type:{name:`boolean`}},{name:`hamburger`,description:`Flag indicating the button is a hamburger button. This will override the icon property.`,required:!1,type:{name:`boolean`}},{name:`hamburgerVariant`,description:`Adjusts and animates the hamburger icon to indicate what will happen upon clicking the button.`,required:!1,type:{name:`union`,elements:[{name:`"expand"`},{name:`"collapse"`}]}},{name:`circle`,description:`Flag indicating the button is a circle button. Intended for buttons that only contain an icon..`,required:!1,type:{name:`boolean`}},{name:`docked`,description:`Flag indicating the button is a docked variant button. For use in docked navigation.`,required:!1,type:{name:`boolean`}},{name:`to`,description:`Route Location the link should navigate to when clicked on.`,required:!1,type:{name:`RouteLocationRaw`}},{name:`replace`,description:"Calls `router.replace` instead of `router.push`.",required:!1,type:{name:`boolean`}},{name:`href`,required:!1,type:{name:`string`}},{name:`ariaCurrent`,required:!1,type:{name:`string`}}],events:[{name:`click`,type:{names:[`PointerEvent`]}}],slots:[{name:`default`,description:`Content rendered inside the button`},{name:`icon`,description:`Icon of the button, overridden by settings, hamburger and favorite`},{name:`badge`,description:`Count rendered after the content: use a pf-badge`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Button.vue`]}})]),default:t(()=>[p[102]||=i(`div`,{class:`markdown pf-v6-c-content`},[i(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),i(`ul`,null,[i(`li`,null,[i(`code`,null,`small`),d(` and `),i(`code`,null,`large`),d(` replace `),i(`code`,null,`size="sm"`),d(` and `),i(`code`,null,`size="lg"`),d(`.`)]),i(`li`,null,[d(`The `),i(`code`,null,`icon`),d(` prop is replaced by the `),i(`code`,null,`icon`),d(` slot, and `),i(`code`,null,`countOptions`),d(` by the `),i(`code`,null,`badge`),d(` slot holding a `),i(`code`,null,`pf-badge`),d(` (with `),i(`code`,null,`badge-class`),d(` for the count container).`)]),i(`li`,null,[i(`code`,null,`to`),d(` renders the button as a router link and `),i(`code`,null,`href`),d(` as a link, without passing `),i(`code`,null,`component`),d(`.`)]),i(`li`,null,[i(`code`,null,`no-padding`),d(` replaces `),i(`code`,null,`hasNoPadding`),d(`.`)])]),i(`p`,null,[d(`See `),i(`a`,{href:`#/`},`common differences from patternfly-react`),d(`.`)]),i(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),c(I,{title:`Variant examples`,source:`<pf-flex column-gap="sm">
  <pf-button variant="primary" ouia-id="Primary">Primary</pf-button>
  <pf-button variant="secondary" ouia-id="Secondary">Secondary</pf-button>
  <pf-button variant="secondary" ouia-id="DangerSecondary" danger>Danger Secondary</pf-button>
  <pf-button variant="tertiary" ouia-id="Tertiary">Tertiary</pf-button>
  <pf-button variant="danger" ouia-id="Danger">Danger</pf-button>
  <pf-button variant="warning" ouia-id="Warning">Warning</pf-button>
</pf-flex>
<br>
<pf-flex column-gap="sm">
  <pf-button variant="link">
    <template #icon><circle-plus-icon /></template>
    Link
  </pf-button>
  <pf-button variant="link" icon-position="end">
    <template #icon><square-arrow-up-right-icon /></template>
    Link
  </pf-button>
  <pf-button variant="link" inline>Inline link</pf-button>
  <pf-button variant="link" danger>Danger link</pf-button>
  <pf-button variant="plain" aria-label="Action">
    <template #icon><xmark-icon /></template>
  </pf-button>
</pf-flex>
<br>
<pf-flex column-gap="sm">
  <pf-button variant="control">Control</pf-button>
  <pf-button variant="control" aria-label="Copy">
    <template #icon><copy-icon /></template>
  </pf-button>
</pf-flex>
<br>
<pf-flex column-gap="sm">
  <pf-button variant="stateful" state="read">
    <template #icon><bell-icon /></template>
    Stateful read
  </pf-button>
  <pf-button variant="stateful" state="unread">
    <template #icon><bell-icon /></template>
    Stateful unread
  </pf-button>
  <pf-button variant="stateful" state="attention">
    <template #icon><bell-icon /></template>
    Stateful attention
  </pf-button>
</pf-flex>`},{intro:t(()=>[...p[7]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,[d(`PatternFly supports several button styling variants to be used in different scenarios as needed. The following button variants can be assigned using the `),i(`code`,null,`variant`),d(` property.`)]),i(`table`,null,[i(`thead`,null,[i(`tr`,null,[i(`th`,null,`Variant`),i(`th`,null,`Description`)])]),i(`tbody`,null,[i(`tr`,null,[i(`td`,null,`Primary`),i(`td`,null,`Primary buttons are the most visually prominent variant. Use for the most important call to action.`)]),i(`tr`,null,[i(`td`,null,`Secondary`),i(`td`,null,`Secondary buttons are less visually prominant than primary buttons. Use for general actions on a page that require less emphasis than primary buttons.`)]),i(`tr`,null,[i(`td`,null,`Tertiary`),i(`td`,null,`Tertiary buttons are the least visually prominent variant. Use to retain a classic button format with less emphasis than primary or secondary buttons.`)]),i(`tr`,null,[i(`td`,null,`Danger`),i(`td`,null,[d(`Danger buttons may be used for actions that are potentially destructive or difficult/impossible to undo. Danger is an independent variant, but all button variants may use the `),i(`code`,null,`danger`),d(` property to apply similar styling.`)])]),i(`tr`,null,[i(`td`,null,`Warning`),i(`td`,null,`Warning buttons may be used for actions that change an important setting or behavior, but not in a destructive or irreversible way.`)]),i(`tr`,null,[i(`td`,null,`Link`),i(`td`,null,[d(`Links are labeled, but have no background or border. Use for actions that require less emphasis, actions that navigate users to another page within the same window, and/or actions that navigate to external pages in a new window. Links may be placed inline with text using the `),i(`code`,null,`inline`),d(` property.`)])]),i(`tr`,null,[i(`td`,null,`Plain`),i(`td`,null,`Plain buttons have no styling and are intended to be labeled with icons.`)]),i(`tr`,null,[i(`td`,null,`Control`),i(`td`,null,`Control buttons can be labeled with text or icons. Primarily intended to be paired with other controls in an input group.`)]),i(`tr`,null,[i(`td`,null,`Stateful`),i(`td`,null,[d(`Stateful buttons are ideal for displaying the state of notifications. They have 3 states: `),i(`code`,null,`read`),d(`, `),i(`code`,null,`unread`),d(` and `),i(`code`,null,`attention`),d(`.`)])])])])],-1)]]),default:t(()=>[c(y,{"column-gap":`sm`},{default:t(()=>[c(v,{variant:`primary`,"ouia-id":`Primary`},{default:t(()=>[...p[8]||=[d(`Primary`,-1)]]),_:1}),c(v,{variant:`secondary`,"ouia-id":`Secondary`},{default:t(()=>[...p[9]||=[d(`Secondary`,-1)]]),_:1}),c(v,{variant:`secondary`,"ouia-id":`DangerSecondary`,danger:``},{default:t(()=>[...p[10]||=[d(`Danger Secondary`,-1)]]),_:1}),c(v,{variant:`tertiary`,"ouia-id":`Tertiary`},{default:t(()=>[...p[11]||=[d(`Tertiary`,-1)]]),_:1}),c(v,{variant:`danger`,"ouia-id":`Danger`},{default:t(()=>[...p[12]||=[d(`Danger`,-1)]]),_:1}),c(v,{variant:`warning`,"ouia-id":`Warning`},{default:t(()=>[...p[13]||=[d(`Warning`,-1)]]),_:1})]),_:1}),p[22]||=i(`br`,null,null,-1),c(y,{"column-gap":`sm`},{default:t(()=>[c(v,{variant:`link`},{icon:t(()=>[c(o(x))]),default:t(()=>[p[14]||=d(` Link `,-1)]),_:1}),c(v,{variant:`link`,"icon-position":`end`},{icon:t(()=>[c(o(S))]),default:t(()=>[p[15]||=d(` Link `,-1)]),_:1}),c(v,{variant:`link`,inline:``},{default:t(()=>[...p[16]||=[d(`Inline link`,-1)]]),_:1}),c(v,{variant:`link`,danger:``},{default:t(()=>[...p[17]||=[d(`Danger link`,-1)]]),_:1}),c(v,{variant:`plain`,"aria-label":`Action`},{icon:t(()=>[c(o(h))]),_:1})]),_:1}),p[23]||=i(`br`,null,null,-1),c(y,{"column-gap":`sm`},{default:t(()=>[c(v,{variant:`control`},{default:t(()=>[...p[18]||=[d(`Control`,-1)]]),_:1}),c(v,{variant:`control`,"aria-label":`Copy`},{icon:t(()=>[c(o(C))]),_:1})]),_:1}),p[24]||=i(`br`,null,null,-1),c(y,{"column-gap":`sm`},{default:t(()=>[c(v,{variant:`stateful`,state:`read`},{icon:t(()=>[c(o(b))]),default:t(()=>[p[19]||=d(` Stateful read `,-1)]),_:1}),c(v,{variant:`stateful`,state:`unread`},{icon:t(()=>[c(o(b))]),default:t(()=>[p[20]||=d(` Stateful unread `,-1)]),_:1}),c(v,{variant:`stateful`,state:`attention`},{icon:t(()=>[c(o(b))]),default:t(()=>[p[21]||=d(` Stateful attention `,-1)]),_:1})]),_:1})]),_:1}),c(I,{title:`Disabled buttons`,source:`<pf-flex column-gap="sm">
  <pf-button disabled>Primary</pf-button>
  <pf-button variant="secondary" disabled>Secondary</pf-button>
  <pf-button variant="secondary" danger disabled>Danger secondary</pf-button>
  <pf-button disabled variant="tertiary">Tertiary</pf-button>
  <pf-button disabled variant="danger">Danger</pf-button>
  <pf-button disabled variant="warning">Warning</pf-button>
</pf-flex>
<br>
<pf-flex column-gap="sm">
  <pf-button disabled variant="link">
    <template #icon><circle-plus-icon /></template>
    Link
  </pf-button>
  <pf-button disabled variant="link" inline>Inline link</pf-button>
  <pf-button variant="link" danger disabled>Danger link</pf-button>
  <pf-button disabled variant="plain" aria-label="Action">
    <template #icon><xmark-icon /></template>
  </pf-button>
</pf-flex>
<br>
<pf-flex column-gap="sm">
  <pf-button disabled variant="control">Control</pf-button>
  <pf-button disabled variant="control" aria-label="Copy">
    <template #icon><copy-icon /></template>
  </pf-button>
</pf-flex>`},{intro:t(()=>[...p[25]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,[d(`To indicate that an action is currently unavailable, all button variations can be disabled using the `),i(`code`,null,`disabled`),d(` property.`)])],-1)]]),default:t(()=>[c(y,{"column-gap":`sm`},{default:t(()=>[c(v,{disabled:``},{default:t(()=>[...p[26]||=[d(`Primary`,-1)]]),_:1}),c(v,{variant:`secondary`,disabled:``},{default:t(()=>[...p[27]||=[d(`Secondary`,-1)]]),_:1}),c(v,{variant:`secondary`,danger:``,disabled:``},{default:t(()=>[...p[28]||=[d(`Danger secondary`,-1)]]),_:1}),c(v,{disabled:``,variant:`tertiary`},{default:t(()=>[...p[29]||=[d(`Tertiary`,-1)]]),_:1}),c(v,{disabled:``,variant:`danger`},{default:t(()=>[...p[30]||=[d(`Danger`,-1)]]),_:1}),c(v,{disabled:``,variant:`warning`},{default:t(()=>[...p[31]||=[d(`Warning`,-1)]]),_:1})]),_:1}),p[36]||=i(`br`,null,null,-1),c(y,{"column-gap":`sm`},{default:t(()=>[c(v,{disabled:``,variant:`link`},{icon:t(()=>[c(o(x))]),default:t(()=>[p[32]||=d(` Link `,-1)]),_:1}),c(v,{disabled:``,variant:`link`,inline:``},{default:t(()=>[...p[33]||=[d(`Inline link`,-1)]]),_:1}),c(v,{variant:`link`,danger:``,disabled:``},{default:t(()=>[...p[34]||=[d(`Danger link`,-1)]]),_:1}),c(v,{disabled:``,variant:`plain`,"aria-label":`Action`},{icon:t(()=>[c(o(h))]),_:1})]),_:1}),p[37]||=i(`br`,null,null,-1),c(y,{"column-gap":`sm`},{default:t(()=>[c(v,{disabled:``,variant:`control`},{default:t(()=>[...p[35]||=[d(`Control`,-1)]]),_:1}),c(v,{disabled:``,variant:`control`,"aria-label":`Copy`},{icon:t(()=>[c(o(C))]),_:1})]),_:1})]),_:1}),c(I,{title:`Small buttons`,source:`<pf-flex column-gap="sm">
  <pf-button variant="primary" small>Primary</pf-button>
  <pf-button variant="secondary" small>Secondary</pf-button>
  <pf-button variant="tertiary" small>Tertiary</pf-button>
  <pf-button variant="danger" small>Danger</pf-button>
  <pf-button variant="warning" small>Warning</pf-button>
</pf-flex>`},{intro:t(()=>[...p[38]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,[d(`To fit into tight spaces, primary, secondary, tertiary, danger, and warning button variations can be made smaller using the `),i(`code`,null,`small`),d(` property.`)])],-1)]]),default:t(()=>[c(y,{"column-gap":`sm`},{default:t(()=>[c(v,{variant:`primary`,small:``},{default:t(()=>[...p[39]||=[d(`Primary`,-1)]]),_:1}),c(v,{variant:`secondary`,small:``},{default:t(()=>[...p[40]||=[d(`Secondary`,-1)]]),_:1}),c(v,{variant:`tertiary`,small:``},{default:t(()=>[...p[41]||=[d(`Tertiary`,-1)]]),_:1}),c(v,{variant:`danger`,small:``},{default:t(()=>[...p[42]||=[d(`Danger`,-1)]]),_:1}),c(v,{variant:`warning`,small:``},{default:t(()=>[...p[43]||=[d(`Warning`,-1)]]),_:1})]),_:1})]),_:1}),c(I,{title:`Call to action (CTA) buttons`,source:`<pf-flex column-gap="sm">
  <pf-button variant="primary" large>Call to action</pf-button>
  <pf-button variant="secondary" large>Call to action</pf-button>
  <pf-button variant="tertiary" large>Call to action</pf-button>
  <pf-button variant="link" large icon-position="end">
    <template #icon><angle-right-icon /></template>
    Call to action
  </pf-button>
</pf-flex>`},{intro:t(()=>[...p[44]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,[d(`CTA buttons and links direct users to complete an action. Primary, secondary, tertiary, and link button variants can be styled as CTAs using the `),i(`code`,null,`large`),d(` property.`)])],-1)]]),default:t(()=>[c(y,{"column-gap":`sm`},{default:t(()=>[c(v,{variant:`primary`,large:``},{default:t(()=>[...p[45]||=[d(`Call to action`,-1)]]),_:1}),c(v,{variant:`secondary`,large:``},{default:t(()=>[...p[46]||=[d(`Call to action`,-1)]]),_:1}),c(v,{variant:`tertiary`,large:``},{default:t(()=>[...p[47]||=[d(`Call to action`,-1)]]),_:1}),c(v,{variant:`link`,large:``,"icon-position":`end`},{icon:t(()=>[c(o(g))]),default:t(()=>[p[48]||=d(` Call to action `,-1)]),_:1})]),_:1})]),_:1}),c(I,{title:`Block level buttons`,source:`<pf-button block>Block level button</pf-button>`},{intro:t(()=>[...p[49]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,[d(`Block level buttons span the full width of the parent element and can be enabled using the `),i(`code`,null,`block`),d(` property.`)])],-1)]]),default:t(()=>[c(v,{block:``},{default:t(()=>[...p[50]||=[d(`Block level button`,-1)]]),_:1})]),_:1}),c(I,{title:`Progress indicators`,source:`<pf-flex column-gap="sm">
  <pf-button
    id="primary-loading-button"
    variant="primary"
    :loading="primaryLoading"
    spinner-aria-value-text="Loading"
    spinner-aria-labelled-by="primary-loading-button"
    @click="primaryLoading = !primaryLoading"
  >
    {{ primaryLoading ? 'Click to stop loading' : 'Click to start loading' }}
  </pf-button>
  <pf-button
    variant="secondary"
    :loading="secondaryLoading"
    spinner-aria-value-text="Loading"
    spinner-aria-label="Content being loaded"
    @click="secondaryLoading = !secondaryLoading"
  >
    {{ secondaryLoading ? 'Click to stop loading' : 'Click to start loading' }}
  </pf-button>
</pf-flex>
<br>
<pf-button
  variant="plain"
  :aria-label="uploading ? undefined : 'Upload'"
  :loading="uploading"
  spinner-aria-value-text="Loading"
  spinner-aria-label="Uploading data"
  @click="uploading = !uploading"
>
  <template #icon><upload-icon /></template>
</pf-button>
<br>
<br>
<pf-button
  variant="link"
  inline
  :loading="inlineLoading"
  spinner-aria-value-text="Loading"
  spinner-aria-label="Content being loaded"
  @click="inlineLoading = !inlineLoading"
>
  {{ inlineLoading ? 'Pause loading logs' : 'Resume loading logs' }}
</pf-button>`},{intro:t(()=>[...p[51]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,`Progress indicators can be added to buttons to identify that an action is in progress after a click.`)],-1)]]),default:t(()=>[c(y,{"column-gap":`sm`},{default:t(()=>[c(v,{id:`primary-loading-button`,variant:`primary`,loading:T.value,"spinner-aria-value-text":`Loading`,"spinner-aria-labelled-by":`primary-loading-button`,onClick:p[0]||=e=>T.value=!T.value},{default:t(()=>[d(r(T.value?`Click to stop loading`:`Click to start loading`),1)]),_:1},8,[`loading`]),c(v,{variant:`secondary`,loading:E.value,"spinner-aria-value-text":`Loading`,"spinner-aria-label":`Content being loaded`,onClick:p[1]||=e=>E.value=!E.value},{default:t(()=>[d(r(E.value?`Click to stop loading`:`Click to start loading`),1)]),_:1},8,[`loading`])]),_:1}),p[52]||=i(`br`,null,null,-1),c(v,{variant:`plain`,"aria-label":O.value?void 0:`Upload`,loading:O.value,"spinner-aria-value-text":`Loading`,"spinner-aria-label":`Uploading data`,onClick:p[2]||=e=>O.value=!O.value},{icon:t(()=>[c(o(w))]),_:1},8,[`aria-label`,`loading`]),p[53]||=i(`br`,null,null,-1),p[54]||=i(`br`,null,null,-1),c(v,{variant:`link`,inline:``,loading:D.value,"spinner-aria-value-text":`Loading`,"spinner-aria-label":`Content being loaded`,onClick:p[3]||=e=>D.value=!D.value},{default:t(()=>[d(r(D.value?`Pause loading logs`:`Resume loading logs`),1)]),_:1},8,[`loading`])]),_:1}),c(I,{title:`Links as buttons`,source:`<pf-flex>
  <pf-button href="https://www.patternfly.org/" target="_blank" variant="primary">
    Link to PatternFly home
  </pf-button>
  <pf-button href="https://www.patternfly.org/" target="_blank" variant="secondary">
    Secondary link to PatternFly home
  </pf-button>
  <pf-button disabled href="https://www.patternfly.org/" target="_blank" variant="tertiary">
    Tertiary link to PatternFly home
  </pf-button>
  <pf-button href="https://www.patternfly.org/" variant="link">Jump to PatternFly home</pf-button>
</pf-flex>`},{intro:t(()=>[...p[55]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,[d(`Buttons that link to another resource may take the form of primary, secondary, tertiary, or link variants. Set an `),i(`code`,null,`href`),d(` property to render the button as a link; `),i(`code`,null,`component="a"`),d(` is implied.`)])],-1)]]),default:t(()=>[c(y,null,{default:t(()=>[c(v,{href:`https://www.patternfly.org/`,target:`_blank`,variant:`primary`},{default:t(()=>[...p[56]||=[d(` Link to PatternFly home `,-1)]]),_:1}),c(v,{href:`https://www.patternfly.org/`,target:`_blank`,variant:`secondary`},{default:t(()=>[...p[57]||=[d(` Secondary link to PatternFly home `,-1)]]),_:1}),c(v,{disabled:``,href:`https://www.patternfly.org/`,target:`_blank`,variant:`tertiary`},{default:t(()=>[...p[58]||=[d(` Tertiary link to PatternFly home `,-1)]]),_:1}),c(v,{href:`https://www.patternfly.org/`,variant:`link`},{default:t(()=>[...p[59]||=[d(`Jump to PatternFly home`,-1)]]),_:1})]),_:1})]),_:1}),c(I,{title:`Inline link as span`,source:`<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  <pf-button variant="link" inline component="span">
    This is long button text that needs to be a span so that it will wrap inline with the text around it.
  </pf-button>
  Sed hendrerit nisi in cursus maximus. Ut malesuada nisi turpis, in condimentum velit elementum non.
</p>
<br>
<p>
  Note that using a <b>span</b> as a button does not fire the <b>click</b> event for Enter or Space keys.
  <pf-button variant="link" inline component="span" @keydown="handleKeydown">
    A <b>keydown</b> event listener is needed for Enter and Space key presses to prevent their default behavior
    and trigger your code.
  </pf-button>
  Pressing the Enter or Space keys on the inline link as span above demonstrates this by triggering an alert.
</p>`},{intro:t(()=>[...p[60]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,[d(`Inline links should use `),i(`code`,null,`component="span"`),d(` and the `),i(`code`,null,`inline`),d(` property to wrap inline with surrounding text.`)])],-1)]]),default:t(()=>[i(`p`,null,[p[62]||=d(` Lorem ipsum dolor sit amet, consectetur adipiscing elit. `,-1),c(v,{variant:`link`,inline:``,component:`span`},{default:t(()=>[...p[61]||=[d(` This is long button text that needs to be a span so that it will wrap inline with the text around it. `,-1)]]),_:1}),p[63]||=d(` Sed hendrerit nisi in cursus maximus. Ut malesuada nisi turpis, in condimentum velit elementum non. `,-1)]),p[71]||=i(`br`,null,null,-1),i(`p`,null,[p[65]||=d(` Note that using a `,-1),p[66]||=i(`b`,null,`span`,-1),p[67]||=d(` as a button does not fire the `,-1),p[68]||=i(`b`,null,`click`,-1),p[69]||=d(` event for Enter or Space keys. `,-1),c(v,{variant:`link`,inline:``,component:`span`,onKeydown:F},{default:t(()=>[...p[64]||=[d(` A `,-1),i(`b`,null,`keydown`,-1),d(` event listener is needed for Enter and Space key presses to prevent their default behavior and trigger your code. `,-1)]]),_:1}),p[70]||=d(` Pressing the Enter or Space keys on the inline link as span above demonstrates this by triggering an alert. `,-1)])]),_:1}),c(I,{title:`Custom component`,source:`<pf-button variant="link" :component="CustomLink">Router link</pf-button>`},{intro:t(()=>[...p[72]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,[d(`In addition to being able to pass a string to the `),i(`code`,null,`component`),d(` property, you can pass a component for more fine-tuned customization.`)])],-1)]]),default:t(()=>[c(v,{variant:`link`,component:P},{default:t(()=>[...p[73]||=[d(`Router link`,-1)]]),_:1})]),_:1}),c(I,{title:`Aria-disabled examples`,source:`<pf-flex column-gap="sm">
  <pf-button aria-disabled>Primary aria disabled</pf-button>
  <pf-button aria-disabled variant="link">
    <template #icon><circle-plus-icon /></template>
    Link aria disabled
  </pf-button>
  <pf-button aria-disabled variant="link" inline>Inline link aria disabled</pf-button>
</pf-flex>
<br>
<pf-flex column-gap="sm">
  <pf-tooltip
    content="Aria-disabled buttons are like disabled buttons, but focusable. Allows for tooltip support."
  >
    <pf-button aria-disabled>Primary button with tooltip</pf-button>
  </pf-tooltip>
  <pf-tooltip content="Aria-disabled link as button with tooltip">
    <pf-button aria-disabled href="https://www.patternfly.org/" target="_blank" variant="secondary">
      Secondary link as button to PatternFly home
    </pf-button>
  </pf-tooltip>
</pf-flex>`},{intro:t(()=>[...p[74]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,[i(`a`,{href:`https://www.w3.org/WAI/standards-guidelines/aria/`},`Accessible Rich Internet Applications (ARIA)`),d(` is a set of roles and attributes specified by the World Wide Web Consortium. ARIA defines ways to make web content and web applications more accessible to people with disabilities.`)]),i(`p`,null,[d(`Buttons that are aria-disabled are similar to normal disabled buttons, except they can receive focus. Every button variant can be aria-disabled using the `),i(`code`,null,`aria-disabled`),d(` property.`)]),i(`p`,null,`Unlike normal disabled buttons, aria-disabled buttons can support tooltips. Furthermore, aria-disabled buttons can operate as links, which also support tooltips.`)],-1)]]),default:t(()=>[c(y,{"column-gap":`sm`},{default:t(()=>[c(v,{"aria-disabled":``},{default:t(()=>[...p[75]||=[d(`Primary aria disabled`,-1)]]),_:1}),c(v,{"aria-disabled":``,variant:`link`},{icon:t(()=>[c(o(x))]),default:t(()=>[p[76]||=d(` Link aria disabled `,-1)]),_:1}),c(v,{"aria-disabled":``,variant:`link`,inline:``},{default:t(()=>[...p[77]||=[d(`Inline link aria disabled`,-1)]]),_:1})]),_:1}),p[80]||=i(`br`,null,null,-1),c(y,{"column-gap":`sm`},{default:t(()=>[c(L,{content:`Aria-disabled buttons are like disabled buttons, but focusable. Allows for tooltip support.`},{default:t(()=>[c(v,{"aria-disabled":``},{default:t(()=>[...p[78]||=[d(`Primary button with tooltip`,-1)]]),_:1})]),_:1}),c(L,{content:`Aria-disabled link as button with tooltip`},{default:t(()=>[c(v,{"aria-disabled":``,href:`https://www.patternfly.org/`,target:`_blank`,variant:`secondary`},{default:t(()=>[...p[79]||=[d(` Secondary link as button to PatternFly home `,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),c(I,{title:`Button with count`,source:`<div v-for="group in countGroups" :key="group.title">
  <div>{{ group.title }}</div>
  <pf-flex column-gap="sm">
    <pf-button
      v-for="variant in countVariants"
      :key="variant"
      :variant="variant"
      :disabled="group.disabled"
      :badge-class="group.read ? 'custom-badge-read' : 'custom-badge-unread'"
    >
      Issues
      <template #badge>
        <pf-badge :read="group.read" :disabled="group.disabled">{{ group.read ? 10 : 7 }}</pf-badge>
      </template>
    </pf-button>
  </pf-flex>
  <br>
</div>`},{intro:t(()=>[...p[81]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,[d(`Buttons can display a count in the form of a badge to indicate some value or number by passing a `),i(`code`,null,`pf-badge`),d(` in the `),i(`code`,null,`badge`),d(` slot. The `),i(`code`,null,`badge-class`),d(` property adds classes to the count container.`)])],-1)]]),default:t(()=>[(l(),a(f,null,n(M,e=>i(`div`,{key:e.title},[i(`div`,null,r(e.title),1),c(y,{"column-gap":`sm`},{default:t(()=>[(l(),a(f,null,n(j,n=>c(v,{key:n,variant:n,disabled:e.disabled,"badge-class":e.read?`custom-badge-read`:`custom-badge-unread`},{badge:t(()=>[c(R,{read:e.read,disabled:e.disabled},{default:t(()=>[d(r(e.read?10:7),1)]),_:2},1032,[`read`,`disabled`])]),default:t(()=>[p[82]||=d(` Issues `,-1)]),_:2},1032,[`variant`,`disabled`,`badge-class`])),64))]),_:2},1024),p[83]||=i(`br`,null,null,-1)])),64))]),_:1}),c(I,{title:`Plain with no padding`,source:`<p>
  This is an example of a button
  <pf-button variant="plain" no-padding aria-label="More info">
    <template #icon><circle-question-icon /></template>
  </pf-button>
  which is placed inline with text
</p>`},{intro:t(()=>[...p[84]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,[d(`To display a plain/icon button inline with text, use the `),i(`code`,null,`no-padding`),d(` prop in addition to `),i(`code`,null,`variant="plain"`),d(`.`)])],-1)]]),default:t(()=>[i(`p`,null,[p[85]||=d(` This is an example of a button `,-1),c(v,{variant:`plain`,"no-padding":``,"aria-label":`More info`},{icon:t(()=>[c(o(_))]),_:1}),p[86]||=d(` which is placed inline with text `,-1)])]),_:1}),c(I,{title:`Stateful`,source:`<pf-flex>
  <div>
    <div><strong>Read</strong></div>
    <pf-button variant="stateful" state="read">
      <template #icon><bell-icon /></template>
      10 <span class="pf-v6-screen-reader">items</span>
    </pf-button>
  </div>
  <div>
    <div><strong>Unread</strong></div>
    <pf-button variant="stateful" state="unread">
      <template #icon><bell-icon /></template>
      10 <span class="pf-v6-screen-reader">unread items</span>
    </pf-button>
  </div>
  <div>
    <div><strong>Attention</strong></div>
    <pf-button variant="stateful" state="attention">
      <template #icon><bell-icon /></template>
      10 <span class="pf-v6-screen-reader">unread items, needs attention</span>
    </pf-button>
  </div>
</pf-flex>`},{intro:t(()=>[...p[87]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,[d(`Stateful buttons are ideal for displaying the state of notifications. Use `),i(`code`,null,`variant="stateful"`),d(` alongside with the `),i(`code`,null,`state`),d(` property, which can have these 3 values: `),i(`code`,null,`read`),d(`, `),i(`code`,null,`unread`),d(` (used as default) and `),i(`code`,null,`attention`),d(` (which means unread and requires attention).`)])],-1)]]),default:t(()=>[c(y,null,{default:t(()=>[i(`div`,null,[p[90]||=i(`div`,null,[i(`strong`,null,`Read`)],-1),c(v,{variant:`stateful`,state:`read`},{icon:t(()=>[c(o(b))]),default:t(()=>[p[88]||=d(` 10 `,-1),p[89]||=i(`span`,{class:`pf-v6-screen-reader`},`items`,-1)]),_:1})]),i(`div`,null,[p[93]||=i(`div`,null,[i(`strong`,null,`Unread`)],-1),c(v,{variant:`stateful`,state:`unread`},{icon:t(()=>[c(o(b))]),default:t(()=>[p[91]||=d(` 10 `,-1),p[92]||=i(`span`,{class:`pf-v6-screen-reader`},`unread items`,-1)]),_:1})]),i(`div`,null,[p[96]||=i(`div`,null,[i(`strong`,null,`Attention`)],-1),c(v,{variant:`stateful`,state:`attention`},{icon:t(()=>[c(o(b))]),default:t(()=>[p[94]||=d(` 10 `,-1),p[95]||=i(`span`,{class:`pf-v6-screen-reader`},`unread items, needs attention`,-1)]),_:1})])]),_:1})]),_:1}),c(I,{title:`Circle buttons`,source:`<pf-flex column-gap="sm">
  <pf-button
    v-for="variant in circleVariants"
    :key="variant"
    :variant="variant"
    circle
    :aria-label="\`Add \${variant} circle variant example\`"
  >
    <template #icon><circle-plus-icon /></template>
  </pf-button>
  <pf-button variant="control" circle aria-label="Copy control circle variant example">
    <template #icon><copy-icon /></template>
  </pf-button>
  <pf-button variant="plain" circle aria-label="Remove plain circle variant example">
    <template #icon><xmark-icon /></template>
  </pf-button>
  <pf-button
    v-for="state in ['unread', 'read', 'attention'] as const"
    :key="state"
    variant="stateful"
    :state="state"
    circle
    :aria-label="\`Stateful \${state} circle variant example\`"
  >
    <template #icon><bell-icon /></template>
  </pf-button>
  <pf-button
    variant="plain"
    circle
    :aria-label="circleUploading ? undefined : 'Upload circle variant example'"
    :loading="circleUploading"
    spinner-aria-value-text="Loading circle variant example"
    spinner-aria-label="Uploading circle variant example data"
    @click="circleUploading = !circleUploading"
  >
    <template #icon><upload-icon /></template>
  </pf-button>
</pf-flex>`},{intro:t(()=>[...p[97]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,[d(`Pass `),i(`code`,null,`circle`),d(` to a button to modify its styling from simply rounded corners to complete circles. Circle buttons are intended for buttons that only contain an icon and adequate accessible naming.`)])],-1)]]),default:t(()=>[c(y,{"column-gap":`sm`},{default:t(()=>[(l(),a(f,null,n(N,e=>c(v,{key:e,variant:e,circle:``,"aria-label":`Add ${e} circle variant example`},{icon:t(()=>[c(o(x))]),_:1},8,[`variant`,`aria-label`])),64)),c(v,{variant:`control`,circle:``,"aria-label":`Copy control circle variant example`},{icon:t(()=>[c(o(C))]),_:1}),c(v,{variant:`plain`,circle:``,"aria-label":`Remove plain circle variant example`},{icon:t(()=>[c(o(h))]),_:1}),(l(),a(f,null,n([`unread`,`read`,`attention`],e=>c(v,{key:e,variant:`stateful`,state:e,circle:``,"aria-label":`Stateful ${e} circle variant example`},{icon:t(()=>[c(o(b))]),_:1},8,[`state`,`aria-label`])),64)),c(v,{variant:`plain`,circle:``,"aria-label":k.value?void 0:`Upload circle variant example`,loading:k.value,"spinner-aria-value-text":`Loading circle variant example`,"spinner-aria-label":`Uploading circle variant example data`,onClick:p[4]||=e=>k.value=!k.value},{icon:t(()=>[c(o(w))]),_:1},8,[`aria-label`,`loading`])]),_:1})]),_:1}),p[103]||=i(`div`,{class:`markdown pf-v6-c-content`},[i(`h2`,{class:`pf-v6-c-title`},`Animated examples`),i(`p`,null,[d(`The following `),i(`code`,null,`pf-button`),d(` implementations have animations built into them. When using one of the following implementations, the `),i(`code`,null,`icon`),d(` slot will be overridden due to the animations needing specific icons internally.`)])],-1),c(I,{title:`Favorite`,source:`<pf-button
variant="plain"
:aria-label="favorited ? 'Favorite example favorited' : 'Favorite example not favorited'"
favorite
:favorited="favorited"
@click="favorited = !favorited" />`},{intro:t(()=>[...p[98]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,[d(`You can pass both the `),i(`code`,null,`favorite`),d(` and `),i(`code`,null,`variant="plain"`),d(` properties into the `),i(`code`,null,`pf-button`),d(` to create a favorite button. Passing the `),i(`code`,null,`favorited`),d(` property will determine the current favorited state and update styling accordingly.`)])],-1)]]),default:t(()=>[c(v,{variant:`plain`,"aria-label":A.value?`Favorite example favorited`:`Favorite example not favorited`,favorite:``,favorited:A.value,onClick:p[5]||=e=>A.value=!A.value},null,8,[`aria-label`,`favorited`])]),_:1}),c(I,{title:`Settings`,source:`<pf-flex>
  <pf-button settings variant="plain" aria-label="Settings" />
  <pf-button settings variant="control">Settings</pf-button>
</pf-flex>`},{intro:t(()=>[...p[99]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,[d(`For a "settings" button with animations on hover and focus, you can pass the `),i(`code`,null,`settings`),d(` property into either a `),i(`code`,null,`variant="plain"`),d(` or `),i(`code`,null,`variant="control"`),d(` button.`)])],-1)]]),default:t(()=>[c(y,null,{default:t(()=>[c(v,{settings:``,variant:`plain`,"aria-label":`Settings`}),c(v,{settings:``,variant:`control`},{default:t(()=>[...p[100]||=[d(`Settings`,-1)]]),_:1})]),_:1})]),_:1}),c(I,{title:`Hamburger`,source:`<pf-flex>
  <pf-button variant="plain" :expanded="false" aria-label="Hamburger example" hamburger />
  <pf-button
    variant="plain"
    :expanded="false"
    aria-label="Hamburger example"
    hamburger
    hamburger-variant="expand" />
  <pf-button
    variant="plain"
    :expanded="true"
    aria-label="Hamburger example"
    hamburger
    hamburger-variant="collapse" />
</pf-flex>`},{intro:t(()=>[...p[101]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,[d(`For a "hamburger" button that will animate based on the `),i(`code`,null,`hamburger-variant`),d(` property, you can pass the `),i(`code`,null,`hamburger`),d(` property. This will render the default icon for a hamburger button, and updating the `),i(`code`,null,`hamburger-variant`),d(` property with a value of either "expand" or "collapse" will change the icon accordingly with an animation on hover and focus.`)]),i(`p`,null,[d(`When used within a `),i(`code`,null,`pf-masthead`),d(`, the animations and icon updates will occur automatically.`)])],-1)]]),default:t(()=>[c(y,null,{default:t(()=>[c(v,{variant:`plain`,expanded:!1,"aria-label":`Hamburger example`,hamburger:``}),c(v,{variant:`plain`,expanded:!1,"aria-label":`Hamburger example`,hamburger:``,"hamburger-variant":`expand`}),c(v,{variant:`plain`,expanded:!0,"aria-label":`Hamburger example`,hamburger:``,"hamburger-variant":`collapse`})]),_:1})]),_:1}),p[104]||=i(`div`,{class:`markdown pf-v6-c-content`},[i(`h2`,{class:`pf-v6-c-title`},`Using router links`),i(`p`,null,[d(`Router links can be used for in-app linking to prevent page reloading. Pass the route to the `),i(`code`,null,`to`),d(` property, and the button renders a `),i(`code`,null,`router-link`),d(` navigating to it: `),i(`code`,null,`<pf-button variant="link" to="/home">Router link</pf-button>`),d(`.`)])],-1)]),_:1})}}});export{T as default};