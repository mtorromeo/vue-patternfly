import{F as e,K as t,N as n,Pt as r,c as i,d as a,g as o,h as s,ht as c,it as l,j as u,l as d,m as f,n as p,pt as m,rt as h,u as g}from"./runtime-core.esm-bundler-DO1530YC.js";import{S as _,V as v,z as y}from"./index-CUsetNQE.js";var b=`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,x=o({__name:`Modal.story`,setup(o){let x=h({basic:!1,scrollable:!1,description:!1,top:!1,size:!1,width:!1,customHeader:!1,noHeader:!1,titleIcon:!1,customIcon:!1,dropdown:!1,help:!1,form:!1,focus:!1,notAnimated:!1,shortcut:!1}),S=[`small`,`medium`,`large`],C=l(`small`),w=l(!1);function T(){w.value?(w.value=!1,document.getElementById(`modal-dropdown-toggle`)?.focus()):x.dropdown=!1}let E=h({name:``,email:``,address:``}),D=[`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
  magna aliqua. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Semper auctor neque vitae tempus.
  Diam donec adipiscing tristique risus. Augue eget arcu dictum varius duis. Ut enim blandit volutpat maecenas
  volutpat blandit aliquam. Sit amet mauris commodo quis imperdiet massa tincidunt. Habitant morbi tristique senectus
  et netus. Fames ac turpis egestas sed tempus urna. Neque laoreet suspendisse interdum consectetur libero id.
  Volutpat lacus laoreet non curabitur gravida arcu ac tortor. Porta nibh venenatis cras sed felis eget velit. Nullam
  non nisi est sit amet facilisis. Nunc mi ipsum faucibus vitae. Lorem sed risus ultricies tristique nulla aliquet
  enim tortor at. Egestas sed tempus urna et pharetra pharetra massa massa ultricies. Lacinia quis vel eros donec ac
  odio tempor orci. Malesuada fames ac turpis egestas integer eget aliquet.`,`Neque aliquam vestibulum morbi blandit cursus risus at ultrices. Molestie at elementum eu facilisis sed odio morbi.
  Elit pellentesque habitant morbi tristique. Consequat nisl vel pretium lectus quam id leo in vitae. Quis varius
  quam quisque id diam vel quam elementum. Viverra nam libero justo laoreet sit amet cursus. Sollicitudin tempor id
  eu nisl nunc. Orci nulla pellentesque dignissim enim sit amet venenatis. Dignissim enim sit amet venenatis urna
  cursus eget. Iaculis at erat pellentesque adipiscing commodo elit. Faucibus pulvinar elementum integer enim neque
  volutpat. Nullam vehicula ipsum a arcu cursus vitae congue mauris. Nunc mattis enim ut tellus elementum sagittis
  vitae. Blandit cursus risus at ultrices. Tellus mauris a diam maecenas sed enim. Non diam phasellus vestibulum
  lorem sed risus ultricies tristique nulla.`,`Nulla pharetra diam sit amet nisl suscipit adipiscing. Ac tortor vitae purus faucibus ornare suspendisse sed nisi.
  Sed felis eget velit aliquet sagittis id consectetur purus. Tincidunt tortor aliquam nulla facilisi cras fermentum.
  Volutpat est velit egestas dui id ornare arcu odio. Pharetra magna ac placerat vestibulum. Ultrices sagittis orci a
  scelerisque purus semper eget duis at. Nisi est sit amet facilisis magna etiam tempor orci eu. Convallis tellus id
  interdum velit. Facilisis sed odio morbi quis commodo odio aenean sed.`,`Eu scelerisque felis imperdiet proin fermentum leo vel orci porta. Facilisi etiam dignissim diam quis enim lobortis
  scelerisque fermentum. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Magna etiam tempor
  orci eu lobortis elementum. Quis auctor elit sed vulputate mi sit. Eleifend quam adipiscing vitae proin sagittis
  nisl rhoncus mattis rhoncus. Erat velit scelerisque in dictum non. Sit amet nulla facilisi morbi tempus iaculis
  urna. Enim ut tellus elementum sagittis vitae et leo duis ut. Lectus arcu bibendum at varius vel pharetra vel
  turpis. Morbi tristique senectus et netus et. Eget aliquet nibh praesent tristique magna sit amet purus gravida.
  Nisl purus in mollis nunc sed id semper risus. Id neque aliquam vestibulum morbi. Mauris a diam maecenas sed enim
  ut sem. Egestas tellus rutrum tellus pellentesque.`];return(o,l)=>{let h=e(`component-info`),O=e(`pf-button`),k=e(`pf-modal-header`),A=e(`pf-modal-body`),j=e(`pf-modal-footer`),M=e(`pf-modal`),N=e(`story-canvas`),P=e(`pf-radio`),F=e(`pf-content`),I=e(`pf-flex`),L=e(`pf-title`),R=e(`pf-dropdown-item`),z=e(`pf-dropdown-list`),B=e(`pf-dropdown`),V=e(`pf-popover`),H=e(`pf-form-group-label-help`),U=e(`pf-text-input`),W=e(`pf-form-group`),G=e(`pf-form`),K=e(`doc-page`);return u(),d(K,{name:`Components/Modal.story.vue`,title:`Modal`},{description:t(()=>[...l[66]||=[f(`A `,-1),i(`b`,null,`modal`,-1),f(` displays important information to a user without requiring them to navigate to a new page.`,-1)]]),apidocs:t(()=>[s(h,{name:`PfModal`,doc:{name:`PfModal`,exportName:`PfModal`,displayName:`Modal`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`open`,description:`Flag to show the modal`,required:!1,type:{name:`boolean`}},{name:`noClose`,description:`Flag to remove the close button in the header area of the modal`,required:!1,type:{name:`boolean`}},{name:`noBodyWrapper`,description:`Flag indicating if loose modal content should not be placed in a modal body wrapper`,required:!1,type:{name:`boolean`}},{name:`disableFocusTrap`,description:`Flag to disable focus trap`,required:!1,type:{name:`boolean`}},{name:`elementToFocus`,description:`The element to focus when the modal opens. By default the first
focusable element will receive focus.`,required:!1,type:{name:`union`,elements:[{name:`HTMLElement`},{name:`SVGElement`},{name:`string`}]}},{name:`focusTrapId`,description:`Id of the focus trap, to append menus to it so that they break out of the modal box`,required:!1,type:{name:`string`}},{name:`backdropClass`,description:`Additional classes added to the modal backdrop`,required:!1,type:{name:`TSIndexedAccessType`}},{name:`title`,description:`Simple text content of the Modal Header, also used for aria-label on the body`,required:!1,type:{name:`string`}},{name:`titleLabel`,description:`Optional title label text for screen readers`,required:!1,type:{name:`string`}},{name:`titleIconVariant`,description:`Optional alert icon (or other) to show before the title of the Modal Header
When the predefined alert types are used the default styling
will be automatically applied`,required:!1,type:{name:`ModalTitleIconVariant`}},{name:`appendTo`,description:`The parent container to append the modal to. Defaults to document.body`,required:!1,type:{name:`union`,elements:[{name:`HTMLElement`},{name:`string`},{name:`TSParenthesizedType`}]}},{name:`ariaDescribedby`,description:`Id of Modal Box description`,required:!1,type:{name:`string`}},{name:`variant`,description:`Variant of the modal`,required:!1,type:{name:`union`,elements:[{name:`"default"`},{name:`"small"`},{name:`"medium"`},{name:`"large"`}]},defaultValue:{func:!1,value:`'default'`}},{name:`width`,description:`Default width of the modal.`,required:!1,type:{name:`union`,elements:[{name:`number`},{name:`string`}]}},{name:`maxWidth`,description:`Maximum width of the modal.`,required:!1,type:{name:`union`,elements:[{name:`number`},{name:`string`}]}},{name:`position`,description:`Alternate position of the modal`,required:!1,type:{name:`union`,elements:[{name:`"default"`},{name:`"top"`}]},defaultValue:{func:!1,value:`'default'`}},{name:`positionOffset`,description:`Offset from alternate position. Can be any valid CSS length/percentage`,required:!1,type:{name:`string`}},{name:`descriptorId`,description:`Id of the ModalBoxBody`,required:!1,type:{name:`string`}},{name:`component`,required:!1,type:{name:`union`,elements:[{name:`string`},{name:`Component`}]},defaultValue:{func:!1,value:`'div'`}},{name:`noAnimations`,description:`Flag to disable animations.`,required:!1,type:{name:`boolean`}},{name:`onEscapePress`,description:`Called when Escape is pressed while the modal is open, in place of closing it`,required:!1,type:{name:`TSFunctionType`}}],events:[{name:`update:open`,type:{names:[`boolean`]}}],slots:[{name:`header`,description:`Custom content of the modal header, replacing the title and the description`},{name:`title-icon`},{name:`description`,description:`Description of the modal, in the header`},{name:`help`,description:`Help section of the modal header`},{name:`default`,description:`Content of the modal: wrapped in a modal body unless it is made of pf-modal-header, pf-modal-body and pf-modal-footer`},{name:`footer`,description:`Content of the modal footer`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Modal/Modal.vue`]}}),s(h,{name:`PfModalHeader`,doc:{name:`PfModalHeader`,exportName:`PfModalHeader`,displayName:`ModalHeader`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`title`,description:`Content rendered inside the modal title. Ignored when the default slot replaces the header content.`,required:!1,type:{name:`string`}},{name:`labelId`,description:`Id of the modal title. Generated when not set.`,required:!1,type:{name:`string`}},{name:`titleIconVariant`,description:`Optional alert icon to show before the title. When the predefined alert types are used the default styling
will be automatically applied. A custom icon can be passed in the title-icon slot.`,required:!1,type:{name:`ModalTitleIconVariant`}},{name:`titleLabel`,description:`Optional title label text for screen readers`,required:!1,type:{name:`string`}},{name:`description`,description:`Description of the modal, replaced by the description slot`,required:!1,type:{name:`string`}},{name:`descriptorId`,description:`Id of the modal description. Generated when not set.`,required:!1,type:{name:`string`}}],events:[],slots:[{name:`default`,description:`Custom content of the header, replacing the title and the description`},{name:`title-icon`},{name:`description`,description:`Description of the modal, replacing the description prop`},{name:`help`,description:`Help section of the header, such as a help popover`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Modal/ModalHeader.vue`]}}),s(h,{name:`PfModalBody`,doc:{name:`PfModalBody`,exportName:`PfModalBody`,displayName:`ModalBody`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Modal/ModalBody.vue`]}}),s(h,{name:`PfModalFooter`,doc:{name:`PfModalFooter`,exportName:`PfModalFooter`,displayName:`ModalFooter`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Modal/ModalFooter.vue`]}})]),default:t(()=>[l[163]||=i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,[f(`When using the modal component, it is recommended to control it via the `),i(`code`,null,`open`),f(` property rather than conditionally rendering the modal.`)]),i(`p`,null,`Conditional rendering can potentially lead to unforeseen issues, especially with animations enabled.`),i(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),i(`ul`,null,[i(`li`,null,[f(`The open state is bound with `),i(`code`,null,`v-model:open`),f(`: the close button and the Escape key set it to `),i(`code`,null,`false`),f(` (`),i(`code`,null,`onClose`),f(`).`)]),i(`li`,null,[f(`The close button is shown unless `),i(`code`,null,`no-close`),f(` is set, rather than only when `),i(`code`,null,`onClose`),f(` is passed.`)]),i(`li`,null,[f(`An `),i(`code`,null,`@escape-press`),f(` listener replaces the closing on Escape (`),i(`code`,null,`onEscapePress`),f(`).`)]),i(`li`,null,[i(`code`,null,`pf-modal`),f(` also accepts the header and the footer directly, as shortcuts for `),i(`code`,null,`pf-modal-header`),f(` and `),i(`code`,null,`pf-modal-footer`),f(`: the `),i(`code`,null,`title`),f(`, `),i(`code`,null,`title-icon-variant`),f(` and `),i(`code`,null,`title-label`),f(` props, and the `),i(`code`,null,`header`),f(`, `),i(`code`,null,`title-icon`),f(`, `),i(`code`,null,`description`),f(`, `),i(`code`,null,`help`),f(` and `),i(`code`,null,`footer`),f(` slots.`)]),i(`li`,null,[f(`Content that is not a `),i(`code`,null,`pf-modal-header`),f(`, `),i(`code`,null,`pf-modal-body`),f(` or `),i(`code`,null,`pf-modal-footer`),f(` is wrapped in a `),i(`code`,null,`pf-modal-body`),f(`, unless `),i(`code`,null,`no-body-wrapper`),f(` is set.`)]),i(`li`,null,[f(`Inside a modal, the title and the description of `),i(`code`,null,`pf-modal-header`),f(` label and describe the dialog, so `),i(`code`,null,`aria-labelledby`),f(`, `),i(`code`,null,`aria-describedby`),f(`, `),i(`code`,null,`label-id`),f(` and `),i(`code`,null,`descriptor-id`),f(` are only needed to point elsewhere.`)]),i(`li`,null,[i(`code`,null,`title-label`),f(` replaces `),i(`code`,null,`titleScreenReaderText`),f(`, and a custom title icon goes in the `),i(`code`,null,`title-icon`),f(` slot rather than in `),i(`code`,null,`titleIconVariant`),f(`.`)]),i(`li`,null,[i(`code`,null,`hasAnimations`),f(` is replaced by `),i(`code`,null,`no-animations`),f(` with inverted behavior.`)]),i(`li`,null,[i(`code`,null,`backdropClassName`),f(` is replaced by `),i(`code`,null,`backdrop-class`),f(`.`)]),i(`li`,null,[i(`code`,null,`append-to`),f(` also accepts a CSS selector. See `),i(`a`,{href:`#/`},`common differences from patternfly-react`),f(`.`)])]),i(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),s(N,{title:`Basic modals`,source:`<pf-button variant="primary" ouia-id="ShowBasicModal" @click="open.basic = true">Show basic modal</pf-button>
<pf-modal v-model:open="open.basic" ouia-id="BasicModal">
  <pf-modal-header title="Basic modal" />
  <pf-modal-body>{{ lorem }}</pf-modal-body>
  <pf-modal-footer>
    <pf-button variant="primary" @click="open.basic = false">Confirm</pf-button>
    <pf-button variant="link" @click="open.basic = false">Cancel</pf-button>
  </pf-modal-footer>
</pf-modal>`},{intro:t(()=>[...l[67]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,`Basic modals give users the option to either confirm or cancel an action.`),i(`p`,null,[f(`To flag an open modal, bind the `),i(`code`,null,`open`),f(` property with `),i(`code`,null,`v-model:open`),f(`, which the close button and the Escape key set to `),i(`code`,null,`false`),f(`.`)]),i(`p`,null,[f(`The `),i(`code`,null,`pf-modal-body`),f(`, `),i(`code`,null,`pf-modal-header`),f(`, and `),i(`code`,null,`pf-modal-footer`),f(` components are not required, but are typically used to display the main content of the modal, modal title, and any button actions, respectively.`)])],-1)]]),default:t(()=>[s(O,{variant:`primary`,"ouia-id":`ShowBasicModal`,onClick:l[0]||=e=>x.basic=!0},{default:t(()=>[...l[68]||=[f(`Show basic modal`,-1)]]),_:1}),s(M,{open:x.basic,"onUpdate:open":l[3]||=e=>x.basic=e,"ouia-id":`BasicModal`},{default:t(()=>[s(k,{title:`Basic modal`}),s(A,null,{default:t(()=>[f(r(b))]),_:1}),s(j,null,{default:t(()=>[s(O,{variant:`primary`,onClick:l[1]||=e=>x.basic=!1},{default:t(()=>[...l[69]||=[f(`Confirm`,-1)]]),_:1}),s(O,{variant:`link`,onClick:l[2]||=e=>x.basic=!1},{default:t(()=>[...l[70]||=[f(`Cancel`,-1)]]),_:1})]),_:1})]),_:1},8,[`open`])]),_:1}),s(N,{title:`Scrollable modals`,source:`<pf-button variant="primary" @click="open.scrollable = true">Show modal</pf-button>
<pf-modal
  v-model:open="open.scrollable"
  variant="small"
  style="--pf-v6-c-modal-box--MaxHeight: min(25rem, calc(100% - var(--pf-t--global--spacer--2xl)))"
>
  <pf-modal-header title="Modal with overflowing content" />
  <pf-modal-body tabindex="0" aria-label="Scrollable modal content">
    <template v-for="(paragraph, i) in longLorem" :key="i">
      <template v-if="i">
        <br>
        <br>
      </template>
      {{ paragraph }}
    </template>
  </pf-modal-body>
  <pf-modal-footer>
    <pf-button variant="primary" @click="open.scrollable = false">Confirm</pf-button>
    <pf-button variant="link" @click="open.scrollable = false">Cancel</pf-button>
  </pf-modal-footer>
</pf-modal>`},{intro:t(()=>[...l[71]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,[f(`To enable keyboard-accessible scrolling of a modal's content, pass `),i(`code`,null,`tabindex="0"`),f(` to the `),i(`code`,null,`pf-modal-body`),f(`.`)]),i(`p`,null,[f(`In this example the height of the modal is limited with the `),i(`code`,null,`--pf-v6-c-modal-box--MaxHeight`),f(` variable, so that its content overflows on any screen.`)])],-1)]]),default:t(()=>[s(O,{variant:`primary`,onClick:l[4]||=e=>x.scrollable=!0},{default:t(()=>[...l[72]||=[f(`Show modal`,-1)]]),_:1}),s(M,{open:x.scrollable,"onUpdate:open":l[7]||=e=>x.scrollable=e,variant:`small`,style:{"--pf-v6-c-modal-box--MaxHeight":`min(25rem, calc(100% - var(--pf-t--global--spacer--2xl)))`}},{default:t(()=>[s(k,{title:`Modal with overflowing content`}),s(A,{tabindex:`0`,"aria-label":`Scrollable modal content`},{default:t(()=>[(u(),a(p,null,n(D,(e,t)=>(u(),a(p,{key:t},[t?(u(),a(p,{key:0},[l[73]||=i(`br`,null,null,-1),l[74]||=i(`br`,null,null,-1)],64)):g(``,!0),f(` `+r(e),1)],64))),64))]),_:1}),s(j,null,{default:t(()=>[s(O,{variant:`primary`,onClick:l[5]||=e=>x.scrollable=!1},{default:t(()=>[...l[75]||=[f(`Confirm`,-1)]]),_:1}),s(O,{variant:`link`,onClick:l[6]||=e=>x.scrollable=!1},{default:t(()=>[...l[76]||=[f(`Cancel`,-1)]]),_:1})]),_:1})]),_:1},8,[`open`])]),_:1}),s(N,{title:`With a static description`,source:`<pf-button variant="primary" @click="open.description = true">Show modal with description</pf-button>
<pf-modal
  v-model:open="open.description"
  variant="small"
  style="--pf-v6-c-modal-box--MaxHeight: min(25rem, calc(100% - var(--pf-t--global--spacer--2xl)))"
>
  <pf-modal-header
    title="Modal with description"
    description="A description is used when you want to provide more info about the modal than the title is able to describe. The content in the description is static and will not scroll with the rest of the modal body." />
  <pf-modal-body tabindex="0">
    <template v-for="(paragraph, i) in longLorem" :key="i">
      <template v-if="i">
        <br>
        <br>
      </template>
      {{ paragraph }}
    </template>
  </pf-modal-body>
  <pf-modal-footer>
    <pf-button variant="primary" @click="open.description = false">Confirm</pf-button>
    <pf-button variant="link" @click="open.description = false">Cancel</pf-button>
  </pf-modal-footer>
</pf-modal>`},{intro:t(()=>[...l[77]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,[f(`To provide additional information about a modal, use the `),i(`code`,null,`description`),f(` property of the `),i(`code`,null,`pf-modal-header`),f(` (or its `),i(`code`,null,`description`),f(` slot). Descriptions are static and do not scroll with other modal content.`)])],-1)]]),default:t(()=>[s(O,{variant:`primary`,onClick:l[8]||=e=>x.description=!0},{default:t(()=>[...l[78]||=[f(`Show modal with description`,-1)]]),_:1}),s(M,{open:x.description,"onUpdate:open":l[11]||=e=>x.description=e,variant:`small`,style:{"--pf-v6-c-modal-box--MaxHeight":`min(25rem, calc(100% - var(--pf-t--global--spacer--2xl)))`}},{default:t(()=>[s(k,{title:`Modal with description`,description:`A description is used when you want to provide more info about the modal than the title is able to describe. The content in the description is static and will not scroll with the rest of the modal body.`}),s(A,{tabindex:`0`},{default:t(()=>[(u(),a(p,null,n(D,(e,t)=>(u(),a(p,{key:t},[t?(u(),a(p,{key:0},[l[79]||=i(`br`,null,null,-1),l[80]||=i(`br`,null,null,-1)],64)):g(``,!0),f(` `+r(e),1)],64))),64))]),_:1}),s(j,null,{default:t(()=>[s(O,{variant:`primary`,onClick:l[9]||=e=>x.description=!1},{default:t(()=>[...l[81]||=[f(`Confirm`,-1)]]),_:1}),s(O,{variant:`link`,onClick:l[10]||=e=>x.description=!1},{default:t(()=>[...l[82]||=[f(`Cancel`,-1)]]),_:1})]),_:1})]),_:1},8,[`open`])]),_:1}),s(N,{title:`Top aligned`,source:`<pf-button variant="primary" @click="open.top = true">Show top aligned modal</pf-button>
<pf-modal v-model:open="open.top" position="top">
  <pf-modal-header title="Top aligned modal" />
  <pf-modal-body>{{ lorem }}</pf-modal-body>
  <pf-modal-footer>
    <pf-button variant="primary" @click="open.top = false">Confirm</pf-button>
    <pf-button variant="link" @click="open.top = false">Cancel</pf-button>
  </pf-modal-footer>
</pf-modal>`},{intro:t(()=>[...l[83]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,[f(`To override a modal's default center alignment, use the `),i(`code`,null,`position`),f(` property. In this example, `),i(`code`,null,`position`),f(` is set to "top", which moves the modal to the top of the screen.`)])],-1)]]),default:t(()=>[s(O,{variant:`primary`,onClick:l[12]||=e=>x.top=!0},{default:t(()=>[...l[84]||=[f(`Show top aligned modal`,-1)]]),_:1}),s(M,{open:x.top,"onUpdate:open":l[15]||=e=>x.top=e,position:`top`},{default:t(()=>[s(k,{title:`Top aligned modal`}),s(A,null,{default:t(()=>[f(r(b))]),_:1}),s(j,null,{default:t(()=>[s(O,{variant:`primary`,onClick:l[13]||=e=>x.top=!1},{default:t(()=>[...l[85]||=[f(`Confirm`,-1)]]),_:1}),s(O,{variant:`link`,onClick:l[14]||=e=>x.top=!1},{default:t(()=>[...l[86]||=[f(`Cancel`,-1)]]),_:1})]),_:1})]),_:1},8,[`open`])]),_:1}),s(N,{title:`Modal sizes`,source:`<pf-radio
  v-for="size in sizes"
  :id="\`modal-size-\${size}-selector\`"
  :key="size"
  name="Variant options"
  :label="\`\${capitalize(size)} variant\`"
  :checked="size === selectedSize"
  @change="selectedSize = size" />
<br>
<pf-button variant="primary" @click="open.size = true">Show modal</pf-button>
<pf-modal v-model:open="open.size" :variant="selectedSize">
  <pf-modal-header :title="\`\${capitalize(selectedSize)} modal\`" />
  <pf-modal-body>{{ lorem }}</pf-modal-body>
  <pf-modal-footer>
    <pf-button variant="primary" @click="open.size = false">Confirm</pf-button>
    <pf-button variant="link" @click="open.size = false">Cancel</pf-button>
  </pf-modal-footer>
</pf-modal>`},{intro:t(()=>[...l[87]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,[f(`To adjust the size of a modal, use the `),i(`code`,null,`variant`),f(` property. Modal variants include "small", "medium", "large", and "default".`)]),i(`p`,null,`In the following example, you can display each modal size option. To launch a modal with a specific size, first select the respective radio button, followed by the "Show modal" button.`)],-1)]]),default:t(()=>[(u(),a(p,null,n(S,e=>s(P,{id:`modal-size-${e}-selector`,key:e,name:`Variant options`,label:`${c(e)} variant`,checked:e===C.value,onChange:t=>C.value=e},null,8,[`id`,`label`,`checked`,`onChange`])),64)),l[91]||=i(`br`,null,null,-1),s(O,{variant:`primary`,onClick:l[16]||=e=>x.size=!0},{default:t(()=>[...l[88]||=[f(`Show modal`,-1)]]),_:1}),s(M,{open:x.size,"onUpdate:open":l[19]||=e=>x.size=e,variant:C.value},{default:t(()=>[s(k,{title:`${c(C.value)} modal`},null,8,[`title`]),s(A,null,{default:t(()=>[f(r(b))]),_:1}),s(j,null,{default:t(()=>[s(O,{variant:`primary`,onClick:l[17]||=e=>x.size=!1},{default:t(()=>[...l[89]||=[f(`Confirm`,-1)]]),_:1}),s(O,{variant:`link`,onClick:l[18]||=e=>x.size=!1},{default:t(()=>[...l[90]||=[f(`Cancel`,-1)]]),_:1})]),_:1})]),_:1},8,[`open`,`variant`])]),_:1}),s(N,{title:`Custom width`,source:`<pf-button variant="primary" @click="open.width = true">Show custom width modal</pf-button>
<pf-modal v-model:open="open.width" width="50%">
  <pf-modal-header title="Custom width modal" />
  <pf-modal-body>{{ lorem }}</pf-modal-body>
  <pf-modal-footer>
    <pf-button variant="primary" @click="open.width = false">Confirm</pf-button>
    <pf-button variant="link" @click="open.width = false">Cancel</pf-button>
  </pf-modal-footer>
</pf-modal>`},{intro:t(()=>[...l[92]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,[f(`To choose a specific width for a modal, use the `),i(`code`,null,`width`),f(` property. The following example has a `),i(`code`,null,`width`),f(` of "50%".`)])],-1)]]),default:t(()=>[s(O,{variant:`primary`,onClick:l[20]||=e=>x.width=!0},{default:t(()=>[...l[93]||=[f(`Show custom width modal`,-1)]]),_:1}),s(M,{open:x.width,"onUpdate:open":l[23]||=e=>x.width=e,width:`50%`},{default:t(()=>[s(k,{title:`Custom width modal`}),s(A,null,{default:t(()=>[f(r(b))]),_:1}),s(j,null,{default:t(()=>[s(O,{variant:`primary`,onClick:l[21]||=e=>x.width=!1},{default:t(()=>[...l[94]||=[f(`Confirm`,-1)]]),_:1}),s(O,{variant:`link`,onClick:l[22]||=e=>x.width=!1},{default:t(()=>[...l[95]||=[f(`Cancel`,-1)]]),_:1})]),_:1})]),_:1},8,[`open`])]),_:1}),s(N,{title:`Custom header`,source:`<pf-button variant="primary" @click="open.customHeader = true">Show custom header/footer modal</pf-button>
<pf-modal
  v-model:open="open.customHeader"
  variant="large"
  aria-labelledby="modal-custom-header-label"
  aria-describedby="modal-custom-header-description"
>
  <pf-modal-header>
    <pf-content>
      <h1 id="modal-custom-header-label">Custom header modal</h1>
      <p>Add custom content to the header by not passing the title prop the modal box header component.</p>
    </pf-content>
  </pf-modal-header>
  <pf-modal-body>
    <span id="modal-custom-header-description">
      When static text describing the modal is available outside of the modal header, it can be given an ID that
      is then passed in as the modal's aria-describedby value.
    </span>
    <br>
    <br>
    {{ lorem }}
  </pf-modal-body>
  <pf-modal-footer>
    <pf-title h="4" size="md">
      <pf-flex space-items="sm">
        <triangle-exclamation-icon />
        <span>Custom modal footer.</span>
      </pf-flex>
    </pf-title>
  </pf-modal-footer>
</pf-modal>`},{intro:t(()=>[...l[96]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,[f(`To add a custom header to a modal, your custom content must be passed in the default slot of the `),i(`code`,null,`pf-modal-header`),f(` component. Do not pass the `),i(`code`,null,`title`),f(` property to `),i(`code`,null,`pf-modal-header`),f(` when using a custom header, and label the modal with `),i(`code`,null,`aria-labelledby`),f(`.`)])],-1)]]),default:t(()=>[s(O,{variant:`primary`,onClick:l[24]||=e=>x.customHeader=!0},{default:t(()=>[...l[97]||=[f(`Show custom header/footer modal`,-1)]]),_:1}),s(M,{open:x.customHeader,"onUpdate:open":l[25]||=e=>x.customHeader=e,variant:`large`,"aria-labelledby":`modal-custom-header-label`,"aria-describedby":`modal-custom-header-description`},{default:t(()=>[s(k,null,{default:t(()=>[s(F,null,{default:t(()=>[...l[98]||=[i(`h1`,{id:`modal-custom-header-label`},`Custom header modal`,-1),i(`p`,null,`Add custom content to the header by not passing the title prop the modal box header component.`,-1)]]),_:1})]),_:1}),s(A,null,{default:t(()=>[l[99]||=i(`span`,{id:`modal-custom-header-description`},` When static text describing the modal is available outside of the modal header, it can be given an ID that is then passed in as the modal's aria-describedby value. `,-1),l[100]||=i(`br`,null,null,-1),l[101]||=i(`br`,null,null,-1),f(` `+r(b))]),_:1}),s(j,null,{default:t(()=>[s(L,{h:`4`,size:`md`},{default:t(()=>[s(I,{"space-items":`sm`},{default:t(()=>[s(m(v)),l[102]||=i(`span`,null,`Custom modal footer.`,-1)]),_:1})]),_:1})]),_:1})]),_:1},8,[`open`])]),_:1}),s(N,{title:`No header or footer`,source:`<pf-button variant="primary" @click="open.noHeader = true">Show no header/footer modal</pf-button>
<pf-modal
  v-model:open="open.noHeader"
  variant="large"
  aria-label="No header/footer modal"
  aria-describedby="modal-no-header-description"
>
  <pf-modal-body>
    <span id="modal-no-header-description">
      When static text describing the modal is available outside of the modal header, it can be given an ID that
      is then passed in as the modal's aria-describedby value.
    </span>
    <br>
    <br>
    {{ lorem }}
  </pf-modal-body>
</pf-modal>`},{intro:t(()=>[...l[103]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,`To exclusively present information in a modal, remove the header and/or footer.`),i(`p`,null,[f(`When a modal has no header or footer, make sure to add an `),i(`code`,null,`aria-label`),f(` explicitly stating this, so that those using assistive technologies can understand this context.`)])],-1)]]),default:t(()=>[s(O,{variant:`primary`,onClick:l[26]||=e=>x.noHeader=!0},{default:t(()=>[...l[104]||=[f(`Show no header/footer modal`,-1)]]),_:1}),s(M,{open:x.noHeader,"onUpdate:open":l[27]||=e=>x.noHeader=e,variant:`large`,"aria-label":`No header/footer modal`,"aria-describedby":`modal-no-header-description`},{default:t(()=>[s(A,null,{default:t(()=>[l[105]||=i(`span`,{id:`modal-no-header-description`},` When static text describing the modal is available outside of the modal header, it can be given an ID that is then passed in as the modal's aria-describedby value. `,-1),l[106]||=i(`br`,null,null,-1),l[107]||=i(`br`,null,null,-1),f(` `+r(b))]),_:1})]),_:1},8,[`open`])]),_:1}),s(N,{title:`Title icon`,source:`<pf-button variant="primary" @click="open.titleIcon = true">Show title icon modal</pf-button>
<pf-modal v-model:open="open.titleIcon" aria-describedby="modal-title-icon-description">
  <pf-modal-header title="Title icon modal" title-icon-variant="warning" />
  <pf-modal-body>
    <span id="modal-title-icon-description">
      When static text describing the modal is available outside of the modal header, it can be given an ID that
      is then passed in as the modal's aria-describedby value.
    </span>
    <br>
    <br>
    {{ lorem }}
  </pf-modal-body>
  <pf-modal-footer>
    <pf-button variant="primary" @click="open.titleIcon = false">Confirm</pf-button>
    <pf-button variant="link" @click="open.titleIcon = false">Cancel</pf-button>
  </pf-modal-footer>
</pf-modal>`},{intro:t(()=>[...l[108]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,[f(`To add an icon before a modal's title, use the `),i(`code`,null,`title-icon-variant`),f(` property, which can be set to a "success", "danger", "warning", "info" or "custom" variant. The following example uses a "warning" variant.`)])],-1)]]),default:t(()=>[s(O,{variant:`primary`,onClick:l[28]||=e=>x.titleIcon=!0},{default:t(()=>[...l[109]||=[f(`Show title icon modal`,-1)]]),_:1}),s(M,{open:x.titleIcon,"onUpdate:open":l[31]||=e=>x.titleIcon=e,"aria-describedby":`modal-title-icon-description`},{default:t(()=>[s(k,{title:`Title icon modal`,"title-icon-variant":`warning`}),s(A,null,{default:t(()=>[l[110]||=i(`span`,{id:`modal-title-icon-description`},` When static text describing the modal is available outside of the modal header, it can be given an ID that is then passed in as the modal's aria-describedby value. `,-1),l[111]||=i(`br`,null,null,-1),l[112]||=i(`br`,null,null,-1),f(` `+r(b))]),_:1}),s(j,null,{default:t(()=>[s(O,{variant:`primary`,onClick:l[29]||=e=>x.titleIcon=!1},{default:t(()=>[...l[113]||=[f(`Confirm`,-1)]]),_:1}),s(O,{variant:`link`,onClick:l[30]||=e=>x.titleIcon=!1},{default:t(()=>[...l[114]||=[f(`Cancel`,-1)]]),_:1})]),_:1})]),_:1},8,[`open`])]),_:1}),s(N,{title:`Custom title icon`,source:`<pf-button variant="primary" @click="open.customIcon = true">Show custom title icon modal</pf-button>
<pf-modal v-model:open="open.customIcon" aria-describedby="modal-custom-icon-description">
  <pf-modal-header title="Custom title icon modal">
    <template #title-icon>
      <bell-icon />
    </template>
  </pf-modal-header>
  <pf-modal-body>
    <span id="modal-custom-icon-description">
      When static text describing the modal is available outside of the modal header, it can be given an ID that
      is then passed in as the modal's aria-describedby value.
    </span>
    <br>
    <br>
    {{ lorem }}
  </pf-modal-body>
  <pf-modal-footer>
    <pf-button variant="primary" @click="open.customIcon = false">Confirm</pf-button>
    <pf-button variant="link" @click="open.customIcon = false">Cancel</pf-button>
  </pf-modal-footer>
</pf-modal>`},{intro:t(()=>[...l[115]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,[f(`To add a custom icon before a modal's title, pass it in the `),i(`code`,null,`title-icon`),f(` slot of the `),i(`code`,null,`pf-modal-header`),f(`.`)])],-1)]]),default:t(()=>[s(O,{variant:`primary`,onClick:l[32]||=e=>x.customIcon=!0},{default:t(()=>[...l[116]||=[f(`Show custom title icon modal`,-1)]]),_:1}),s(M,{open:x.customIcon,"onUpdate:open":l[35]||=e=>x.customIcon=e,"aria-describedby":`modal-custom-icon-description`},{default:t(()=>[s(k,{title:`Custom title icon modal`},{"title-icon":t(()=>[s(m(y))]),_:1}),s(A,null,{default:t(()=>[l[117]||=i(`span`,{id:`modal-custom-icon-description`},` When static text describing the modal is available outside of the modal header, it can be given an ID that is then passed in as the modal's aria-describedby value. `,-1),l[118]||=i(`br`,null,null,-1),l[119]||=i(`br`,null,null,-1),f(` `+r(b))]),_:1}),s(j,null,{default:t(()=>[s(O,{variant:`primary`,onClick:l[33]||=e=>x.customIcon=!1},{default:t(()=>[...l[120]||=[f(`Confirm`,-1)]]),_:1}),s(O,{variant:`link`,onClick:l[34]||=e=>x.customIcon=!1},{default:t(()=>[...l[121]||=[f(`Cancel`,-1)]]),_:1})]),_:1})]),_:1},8,[`open`])]),_:1}),s(N,{title:`With wizard`,source:``},{intro:t(()=>[...l[122]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,[f(`To guide users through a series of steps in a modal, you can add a wizard to a modal, without the modal's own close button (`),i(`code`,null,`no-close`),f(`).`)]),i(`p`,null,`The wizard component is not available in vue-patternfly yet, so this example cannot be shown.`)],-1)]]),_:1}),s(N,{title:`With dropdown`,source:`<pf-button variant="primary" @click="open.dropdown = true">Show dropdown modal</pf-button>
<pf-modal
  v-model:open="open.dropdown"
  variant="small"
  focus-trap-id="modal-with-dropdown-focus-trap"
  @escape-press="onDropdownModalEscape"
  @update:open="dropdownOpen = false"
>
  <pf-modal-header title="Dropdown modal" />
  <pf-modal-body>
    <div>
      Using the dropdown's default append location will interfere with keyboard accessibility due to the modal's
      built-in focus trap. To allow the dropdown to visually break out of the modal container, set the dropdown's
      append-to property to the id of the focus trap for the modal. This can be done by adding the focus-trap-id
      prop to the modal, and then setting the append location to that as per this example. Otherwise you can use
      "inline" to allow it to scroll within the modal itself. Appending to the focus trap should allow the menu to
      expand visually outside the modal (no scrollbar created in the modal itself), and still allow focusing the
      content within that menu via keyboard. You should also handle the modal's closing behavior by listening to
      <em>escape-press</em> on the modal component. This allows the "escape" key to collapse the dropdown without
      closing the entire modal.
    </div>
    <br>
    <div>
      <pf-dropdown
        v-model:open="dropdownOpen"
        text="Dropdown"
        id="modal-dropdown-toggle"
        append-to="#modal-with-dropdown-focus-trap"
        should-focus-toggle-on-select
      >
        <pf-dropdown-list>
          <pf-dropdown-item :value="0">Action</pf-dropdown-item>
          <pf-dropdown-item :value="1" to="#default-link2" @click="$event.preventDefault()"
            >Link</pf-dropdown-item>
          <pf-dropdown-item :value="2" disabled>Disabled Action</pf-dropdown-item>
          <pf-dropdown-item :value="3" disabled to="#default-link4">Disabled Link</pf-dropdown-item>
        </pf-dropdown-list>
      </pf-dropdown>
    </div>
  </pf-modal-body>
  <pf-modal-footer>
    <pf-button variant="primary" @click="open.dropdown = false">Confirm</pf-button>
    <pf-button variant="link" @click="open.dropdown = false">Cancel</pf-button>
  </pf-modal-footer>
</pf-modal>`},{intro:t(()=>[...l[123]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,[f(`To present a menu of actions or links to a user, you can add a `),i(`a`,{href:`#/stories/components/dropdown`},`dropdown`),f(` to a modal.`)]),i(`p`,null,[f(`Using the dropdown's default append location will interfere with keyboard accessibility due to the modal's built-in focus trap. To allow the dropdown to visually break out of the modal container, set the dropdown's `),i(`code`,null,`append-to`),f(` property to the id of the focus trap of the modal, set with the modal's `),i(`code`,null,`focus-trap-id`),f(` property. Otherwise you can use "inline" to allow it to scroll within the modal itself. Appending to the focus trap should allow the menu to expand visually outside the modal (no scrollbar created in the modal itself), and still allow focusing the content within that menu via keyboard. You should also handle the modal's closing behavior by listening to `),i(`code`,null,`@escape-press`),f(` on the `),i(`code`,null,`pf-modal`),f(`. This allows the "escape" key to collapse the dropdown without closing the entire modal.`)])],-1)]]),default:t(()=>[s(O,{variant:`primary`,onClick:l[36]||=e=>x.dropdown=!0},{default:t(()=>[...l[124]||=[f(`Show dropdown modal`,-1)]]),_:1}),s(M,{open:x.dropdown,"onUpdate:open":[l[41]||=e=>x.dropdown=e,l[42]||=e=>w.value=!1],variant:`small`,"focus-trap-id":`modal-with-dropdown-focus-trap`,onEscapePress:T},{default:t(()=>[s(k,{title:`Dropdown modal`}),s(A,null,{default:t(()=>[l[129]||=i(`div`,null,[f(` Using the dropdown's default append location will interfere with keyboard accessibility due to the modal's built-in focus trap. To allow the dropdown to visually break out of the modal container, set the dropdown's append-to property to the id of the focus trap for the modal. This can be done by adding the focus-trap-id prop to the modal, and then setting the append location to that as per this example. Otherwise you can use "inline" to allow it to scroll within the modal itself. Appending to the focus trap should allow the menu to expand visually outside the modal (no scrollbar created in the modal itself), and still allow focusing the content within that menu via keyboard. You should also handle the modal's closing behavior by listening to `),i(`em`,null,`escape-press`),f(` on the modal component. This allows the "escape" key to collapse the dropdown without closing the entire modal. `)],-1),l[130]||=i(`br`,null,null,-1),i(`div`,null,[s(B,{open:w.value,"onUpdate:open":l[38]||=e=>w.value=e,text:`Dropdown`,id:`modal-dropdown-toggle`,"append-to":`#modal-with-dropdown-focus-trap`,"should-focus-toggle-on-select":``},{default:t(()=>[s(z,null,{default:t(()=>[s(R,{value:0},{default:t(()=>[...l[125]||=[f(`Action`,-1)]]),_:1}),s(R,{value:1,to:`#default-link2`,onClick:l[37]||=e=>e.preventDefault()},{default:t(()=>[...l[126]||=[f(`Link`,-1)]]),_:1}),s(R,{value:2,disabled:``},{default:t(()=>[...l[127]||=[f(`Disabled Action`,-1)]]),_:1}),s(R,{value:3,disabled:``,to:`#default-link4`},{default:t(()=>[...l[128]||=[f(`Disabled Link`,-1)]]),_:1})]),_:1})]),_:1},8,[`open`])])]),_:1}),s(j,null,{default:t(()=>[s(O,{variant:`primary`,onClick:l[39]||=e=>x.dropdown=!1},{default:t(()=>[...l[131]||=[f(`Confirm`,-1)]]),_:1}),s(O,{variant:`link`,onClick:l[40]||=e=>x.dropdown=!1},{default:t(()=>[...l[132]||=[f(`Cancel`,-1)]]),_:1})]),_:1})]),_:1},8,[`open`])]),_:1}),s(N,{title:`With help`,source:`<pf-button variant="primary" @click="open.help = true">Show with help modal</pf-button>
<pf-modal v-model:open="open.help" variant="small">
  <pf-modal-header title="With help modal">
    <template #help>
      <pf-popover>
        <pf-button variant="plain" aria-label="Help">
          <template #icon>
            <circle-question-icon />
          </template>
        </pf-button>
        <template #header>
          <div>Help Popover</div>
        </template>
        <template #body>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla
            turpis.
          </div>
        </template>
        <template #footer>Popover Footer</template>
      </pf-popover>
    </template>
  </pf-modal-header>
  <pf-modal-body>{{ lorem }}</pf-modal-body>
  <pf-modal-footer>
    <pf-button variant="primary" @click="open.help = false">Confirm</pf-button>
    <pf-button variant="link" @click="open.help = false">Cancel</pf-button>
  </pf-modal-footer>
</pf-modal>`},{intro:t(()=>[...l[133]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,[f(`To help simplify and explain complex models, add a help `),i(`a`,{href:`#/stories/components/popover`},`popover`),f(` in the `),i(`code`,null,`help`),f(` slot of the `),i(`code`,null,`pf-modal-header`),f(`. Only place a help icon at the modal level if its information applies to all content in the modal. If the help popover is specific to a particular modal section, place the help icon beside that section instead.`)])],-1)]]),default:t(()=>[s(O,{variant:`primary`,onClick:l[43]||=e=>x.help=!0},{default:t(()=>[...l[134]||=[f(`Show with help modal`,-1)]]),_:1}),s(M,{open:x.help,"onUpdate:open":l[46]||=e=>x.help=e,variant:`small`},{default:t(()=>[s(k,{title:`With help modal`},{help:t(()=>[s(V,null,{header:t(()=>[...l[135]||=[i(`div`,null,`Help Popover`,-1)]]),body:t(()=>[...l[136]||=[i(`div`,null,` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis. `,-1)]]),footer:t(()=>[...l[137]||=[f(`Popover Footer`,-1)]]),default:t(()=>[s(O,{variant:`plain`,"aria-label":`Help`},{icon:t(()=>[s(m(_))]),_:1})]),_:1})]),_:1}),s(A,null,{default:t(()=>[f(r(b))]),_:1}),s(j,null,{default:t(()=>[s(O,{variant:`primary`,onClick:l[44]||=e=>x.help=!1},{default:t(()=>[...l[138]||=[f(`Confirm`,-1)]]),_:1}),s(O,{variant:`link`,onClick:l[45]||=e=>x.help=!1},{default:t(()=>[...l[139]||=[f(`Cancel`,-1)]]),_:1})]),_:1})]),_:1},8,[`open`])]),_:1}),s(N,{title:`With form`,source:`<pf-button variant="primary" @click="open.form = true">Show modal with form</pf-button>
<pf-modal v-model:open="open.form" variant="small">
  <pf-modal-header
    title="Create account"
    description="Enter your personal information below to create an account." />
  <pf-modal-body>
    <pf-form id="modal-with-form-form">
      <pf-form-group label="Name" required field-id="modal-with-form-form-name">
        <template #label-help>
          <pf-popover>
            <template #header>
              <div>
                The <a href="https://schema.org/name" target="_blank" rel="noopener noreferrer">name</a> of a
                <a href="https://schema.org/Person" target="_blank" rel="noopener noreferrer">Person</a>
              </div>
            </template>
            <template #body>
              <div>
                Often composed of
                <a href="https://schema.org/givenName" target="_blank" rel="noopener noreferrer">givenName</a>
                and
                <a href="https://schema.org/familyName" target="_blank" rel="noopener noreferrer">familyName</a>.
              </div>
            </template>
            <pf-form-group-label-help aria-label="More info for name field" />
          </pf-popover>
        </template>
        <pf-text-input
          id="modal-with-form-form-name"
          v-model="form.name"
          required
          type="email"
          name="modal-with-form-form-name" />
      </pf-form-group>
      <pf-form-group label="E-mail" required field-id="modal-with-form-form-email">
        <template #label-help>
          <pf-popover>
            <template #header>
              <div>
                The <a href="https://schema.org/email" target="_blank" rel="noopener noreferrer">e-mail</a> of a
                <a href="https://schema.org/Person" target="_blank" rel="noopener noreferrer">person</a>
              </div>
            </template>
            <template #body>
              <div>
                Valid <a href="https://schema.org/email" target="_blank" rel="noopener noreferrer">e-mail</a>
                address.
              </div>
            </template>
            <pf-form-group-label-help aria-label="More info for e-mail field" />
          </pf-popover>
        </template>
        <pf-text-input
          id="modal-with-form-form-email"
          v-model="form.email"
          required
          type="email"
          name="modal-with-form-form-email" />
      </pf-form-group>
      <pf-form-group label="Address" required field-id="modal-with-form-form-address">
        <template #label-help>
          <pf-popover>
            <template #header>
              <div>
                The <a href="https://schema.org/address" target="_blank" rel="noopener noreferrer">address</a> of
                a <a href="https://schema.org/Person" target="_blank" rel="noopener noreferrer">person</a>
              </div>
            </template>
            <template #body>
              <div>
                Valid
                <a href="https://schema.org/PostalAddress" target="_blank" rel="noopener noreferrer"
                  >postal address.</a>
              </div>
            </template>
            <pf-form-group-label-help aria-label="More info for address field" />
          </pf-popover>
        </template>
        <pf-text-input
          id="modal-with-form-form-address"
          v-model="form.address"
          required
          type="email"
          name="modal-with-form-form-address" />
      </pf-form-group>
    </pf-form>
  </pf-modal-body>
  <pf-modal-footer>
    <pf-button variant="primary" form="modal-with-form-form" @click="open.form = false">Confirm</pf-button>
    <pf-button variant="link" @click="open.form = false">Cancel</pf-button>
  </pf-modal-footer>
</pf-modal>`},{intro:t(()=>[...l[140]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,[f(`To collect user input within a modal, you can add a `),i(`a`,{href:`#/stories/components/form`},`form`),f(`.`)]),i(`p`,null,[f(`To enable form submission from a button in the modal's footer (outside of the `),i(`code`,null,`pf-form`),f(`), set the button's `),i(`code`,null,`form`),f(` attribute equal to the form's id.`)])],-1)]]),default:t(()=>[s(O,{variant:`primary`,onClick:l[47]||=e=>x.form=!0},{default:t(()=>[...l[141]||=[f(`Show modal with form`,-1)]]),_:1}),s(M,{open:x.form,"onUpdate:open":l[53]||=e=>x.form=e,variant:`small`},{default:t(()=>[s(k,{title:`Create account`,description:`Enter your personal information below to create an account.`}),s(A,null,{default:t(()=>[s(G,{id:`modal-with-form-form`},{default:t(()=>[s(W,{label:`Name`,required:``,"field-id":`modal-with-form-form-name`},{"label-help":t(()=>[s(V,null,{header:t(()=>[...l[142]||=[i(`div`,null,[f(` The `),i(`a`,{href:`https://schema.org/name`,target:`_blank`,rel:`noopener noreferrer`},`name`),f(` of a `),i(`a`,{href:`https://schema.org/Person`,target:`_blank`,rel:`noopener noreferrer`},`Person`)],-1)]]),body:t(()=>[...l[143]||=[i(`div`,null,[f(` Often composed of `),i(`a`,{href:`https://schema.org/givenName`,target:`_blank`,rel:`noopener noreferrer`},`givenName`),f(` and `),i(`a`,{href:`https://schema.org/familyName`,target:`_blank`,rel:`noopener noreferrer`},`familyName`),f(`. `)],-1)]]),default:t(()=>[s(H,{"aria-label":`More info for name field`})]),_:1})]),default:t(()=>[s(U,{id:`modal-with-form-form-name`,modelValue:E.name,"onUpdate:modelValue":l[48]||=e=>E.name=e,required:``,type:`email`,name:`modal-with-form-form-name`},null,8,[`modelValue`])]),_:1}),s(W,{label:`E-mail`,required:``,"field-id":`modal-with-form-form-email`},{"label-help":t(()=>[s(V,null,{header:t(()=>[...l[144]||=[i(`div`,null,[f(` The `),i(`a`,{href:`https://schema.org/email`,target:`_blank`,rel:`noopener noreferrer`},`e-mail`),f(` of a `),i(`a`,{href:`https://schema.org/Person`,target:`_blank`,rel:`noopener noreferrer`},`person`)],-1)]]),body:t(()=>[...l[145]||=[i(`div`,null,[f(` Valid `),i(`a`,{href:`https://schema.org/email`,target:`_blank`,rel:`noopener noreferrer`},`e-mail`),f(` address. `)],-1)]]),default:t(()=>[s(H,{"aria-label":`More info for e-mail field`})]),_:1})]),default:t(()=>[s(U,{id:`modal-with-form-form-email`,modelValue:E.email,"onUpdate:modelValue":l[49]||=e=>E.email=e,required:``,type:`email`,name:`modal-with-form-form-email`},null,8,[`modelValue`])]),_:1}),s(W,{label:`Address`,required:``,"field-id":`modal-with-form-form-address`},{"label-help":t(()=>[s(V,null,{header:t(()=>[...l[146]||=[i(`div`,null,[f(` The `),i(`a`,{href:`https://schema.org/address`,target:`_blank`,rel:`noopener noreferrer`},`address`),f(` of a `),i(`a`,{href:`https://schema.org/Person`,target:`_blank`,rel:`noopener noreferrer`},`person`)],-1)]]),body:t(()=>[...l[147]||=[i(`div`,null,[f(` Valid `),i(`a`,{href:`https://schema.org/PostalAddress`,target:`_blank`,rel:`noopener noreferrer`},`postal address.`)],-1)]]),default:t(()=>[s(H,{"aria-label":`More info for address field`})]),_:1})]),default:t(()=>[s(U,{id:`modal-with-form-form-address`,modelValue:E.address,"onUpdate:modelValue":l[50]||=e=>E.address=e,required:``,type:`email`,name:`modal-with-form-form-address`},null,8,[`modelValue`])]),_:1})]),_:1})]),_:1}),s(j,null,{default:t(()=>[s(O,{variant:`primary`,form:`modal-with-form-form`,onClick:l[51]||=e=>x.form=!1},{default:t(()=>[...l[148]||=[f(`Confirm`,-1)]]),_:1}),s(O,{variant:`link`,onClick:l[52]||=e=>x.form=!1},{default:t(()=>[...l[149]||=[f(`Cancel`,-1)]]),_:1})]),_:1})]),_:1},8,[`open`])]),_:1}),s(N,{title:`Custom focus`,source:`<pf-button variant="primary" ouia-id="ShowCustomFocusModal" @click="open.focus = true">
  Show modal with custom focus
</pf-button>
<pf-modal v-model:open="open.focus" element-to-focus="#modal-custom-focus-confirm-button">
  <pf-modal-header title="Modal with custom focus" />
  <pf-modal-body>{{ lorem }}</pf-modal-body>
  <pf-modal-footer>
    <pf-button id="modal-custom-focus-confirm-button" variant="primary" @click="open.focus = false">
      Confirm
    </pf-button>
    <pf-button variant="link" @click="open.focus = false">Cancel</pf-button>
  </pf-modal-footer>
</pf-modal>`},{intro:t(()=>[...l[150]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,[f(`To customize which element inside the modal receives focus when initially opened, use the `),i(`code`,null,`element-to-focus`),f(` property.`)])],-1)]]),default:t(()=>[s(O,{variant:`primary`,"ouia-id":`ShowCustomFocusModal`,onClick:l[54]||=e=>x.focus=!0},{default:t(()=>[...l[151]||=[f(` Show modal with custom focus `,-1)]]),_:1}),s(M,{open:x.focus,"onUpdate:open":l[57]||=e=>x.focus=e,"element-to-focus":`#modal-custom-focus-confirm-button`},{default:t(()=>[s(k,{title:`Modal with custom focus`}),s(A,null,{default:t(()=>[f(r(b))]),_:1}),s(j,null,{default:t(()=>[s(O,{id:`modal-custom-focus-confirm-button`,variant:`primary`,onClick:l[55]||=e=>x.focus=!1},{default:t(()=>[...l[152]||=[f(` Confirm `,-1)]]),_:1}),s(O,{variant:`link`,onClick:l[56]||=e=>x.focus=!1},{default:t(()=>[...l[153]||=[f(`Cancel`,-1)]]),_:1})]),_:1})]),_:1},8,[`open`])]),_:1}),s(N,{title:`Non animated modal`,source:`<pf-button variant="primary" @click="open.notAnimated = true">Show no animations modal</pf-button>
<pf-modal
  v-model:open="open.notAnimated"
  no-animations
  variant="large"
  element-to-focus="#modal-not-animated-confirm-button"
>
  <pf-modal-header title="Not Animated Modal Header" />
  <pf-modal-body>{{ lorem }}</pf-modal-body>
  <pf-modal-footer>
    <pf-button id="modal-not-animated-confirm-button" variant="primary" @click="open.notAnimated = false">
      Confirm
    </pf-button>
    <pf-button variant="link" @click="open.notAnimated = false">Cancel</pf-button>
  </pf-modal-footer>
</pf-modal>`},{intro:t(()=>[...l[154]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,[f(`To explicitly disable animations, set the `),i(`code`,null,`no-animations`),f(` property on the modal.`)])],-1)]]),default:t(()=>[s(O,{variant:`primary`,onClick:l[58]||=e=>x.notAnimated=!0},{default:t(()=>[...l[155]||=[f(`Show no animations modal`,-1)]]),_:1}),s(M,{open:x.notAnimated,"onUpdate:open":l[61]||=e=>x.notAnimated=e,"no-animations":``,variant:`large`,"element-to-focus":`#modal-not-animated-confirm-button`},{default:t(()=>[s(k,{title:`Not Animated Modal Header`}),s(A,null,{default:t(()=>[f(r(b))]),_:1}),s(j,null,{default:t(()=>[s(O,{id:`modal-not-animated-confirm-button`,variant:`primary`,onClick:l[59]||=e=>x.notAnimated=!1},{default:t(()=>[...l[156]||=[f(` Confirm `,-1)]]),_:1}),s(O,{variant:`link`,onClick:l[60]||=e=>x.notAnimated=!1},{default:t(()=>[...l[157]||=[f(`Cancel`,-1)]]),_:1})]),_:1})]),_:1},8,[`open`])]),_:1}),s(N,{title:`Shortcut props and slots`,source:`<pf-button variant="primary" @click="open.shortcut = true">Show modal</pf-button>
<pf-modal v-model:open="open.shortcut" title="Shortcut modal" variant="small">
  {{ lorem }}
  <template #description>A description in the header of the modal.</template>
  <template #footer>
    <pf-button variant="primary" @click="open.shortcut = false">Confirm</pf-button>
    <pf-button variant="link" @click="open.shortcut = false">Cancel</pf-button>
  </template>
</pf-modal>`},{intro:t(()=>[...l[158]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,[f(`The header and the footer can also be passed to `),i(`code`,null,`pf-modal`),f(` directly: the `),i(`code`,null,`title`),f(`, `),i(`code`,null,`title-icon-variant`),f(` and `),i(`code`,null,`title-label`),f(` props, and the `),i(`code`,null,`description`),f(`, `),i(`code`,null,`help`),f(`, `),i(`code`,null,`title-icon`),f(`, `),i(`code`,null,`header`),f(` and `),i(`code`,null,`footer`),f(` slots fill a `),i(`code`,null,`pf-modal-header`),f(` and a `),i(`code`,null,`pf-modal-footer`),f(`, while the rest of the content is wrapped in a `),i(`code`,null,`pf-modal-body`),f(`.`)])],-1)]]),default:t(()=>[s(O,{variant:`primary`,onClick:l[62]||=e=>x.shortcut=!0},{default:t(()=>[...l[159]||=[f(`Show modal`,-1)]]),_:1}),s(M,{open:x.shortcut,"onUpdate:open":l[65]||=e=>x.shortcut=e,title:`Shortcut modal`,variant:`small`},{description:t(()=>[...l[160]||=[f(`A description in the header of the modal.`,-1)]]),footer:t(()=>[s(O,{variant:`primary`,onClick:l[63]||=e=>x.shortcut=!1},{default:t(()=>[...l[161]||=[f(`Confirm`,-1)]]),_:1}),s(O,{variant:`link`,onClick:l[64]||=e=>x.shortcut=!1},{default:t(()=>[...l[162]||=[f(`Cancel`,-1)]]),_:1})]),default:t(()=>[f(r(b)+` `)]),_:1},8,[`open`])]),_:1})]),_:1})}}});export{x as default};