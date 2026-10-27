import{F as e,G as t,Nt as n,c as r,ft as i,g as a,h as o,j as s,l as c,m as l,rt as u}from"./runtime-core.esm-bundler-DKmYt4j6.js";import{U as d}from"./index-Cl3hMFDe.js";var f=a({__name:`ExpandableSection.story`,setup(a){let f=u(!1),p=u(!1),m=u(!1),h=u(!0),g=u(!1),_=u(!1),v=u(!1),y=u(!1),b=u(!1),x=u(!1);return(a,u)=>{let S=e(`component-info`),C=e(`pf-expandable-section`),w=e(`story-canvas`),T=e(`pf-stack-item`),E=e(`pf-expandable-section-toggle`),D=e(`pf-stack`),O=e(`pf-checkbox`),k=e(`pf-badge`),A=e(`doc-page`);return s(),c(A,{name:`Components/ExpandableSection.story.vue`,title:`Expandable Section`},{description:t(()=>[...u[12]||=[l(`An `,-1),r(`b`,null,`expandable section`,-1),l(` component is used to support progressive disclosure in a form or page by hiding additional content when you don't want it to be shown by default. An expandable section can contain any type of content such as plain text, form inputs, and charts.`,-1)]]),apidocs:t(()=>[o(S,{name:`PfExpandableSection`,doc:{name:`PfExpandableSection`,exportName:`PfExpandableSection`,displayName:`ExpandableSection`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`toggleText`,description:`Text that appears in the attached toggle`,required:!1,type:{name:`string`}},{name:`toggleTextExpanded`,description:`Text that appears in the attached toggle when expanded (will override toggleText if both are specified; used for uncontrolled expandable with dynamic toggle text)`,required:!1,type:{name:`string`}},{name:`toggleTextCollapsed`,description:`Text that appears in the attached toggle when collapsed (will override toggleText if both are specified; used for uncontrolled expandable with dynamic toggle text)`,required:!1,type:{name:`string`}},{name:`detached`,description:`Indicates the expandable section has a detached toggle`,required:!1,type:{name:`boolean`}},{name:`contentId`,description:`ID of the content of the expandable section. When detached, it must match the contentId of the pf-expandable-section-toggle.`,required:!1,type:{name:`string`}},{name:`toggleId`,description:`ID of the toggle, which gives the content its accessible name via aria-labelledby. When detached, it must match the toggleId of the pf-expandable-section-toggle.`,required:!1,type:{name:`string`}},{name:`large`,description:`Flag for disclosure styling.`,required:!1,type:{name:`boolean`}},{name:`widthLimited`,description:`Flag to indicate the width of the component is limited. Set to true for disclosure styling.`,required:!1,type:{name:`boolean`}},{name:`indented`,description:`Flag to indicate if the content is indented.`,required:!1,type:{name:`boolean`}},{name:`truncate`,description:`Truncates the expandable content, to the given number of lines or to 3 lines when true`,required:!1,type:{name:`union`,elements:[{name:`boolean`},{name:`number`}]}},{name:`direction`,description:`Sets the direction of the expandable animation when detached. If this prop is not passed, animation will not occur.`,required:!1,type:{name:`union`,elements:[{name:`"up"`},{name:`"down"`}]}},{name:`toggleWrapper`,description:`The HTML element to use for the toggle wrapper. Use a heading level when the toggle text should function as a heading.`,required:!1,type:{name:`union`,elements:[{name:`"div"`},{name:`"h1"`},{name:`"h2"`},{name:`"h3"`},{name:`"h4"`},{name:`"h5"`},{name:`"h6"`}]},defaultValue:{func:!1,value:`'div'`}},{name:`noToggleIcon`,description:`Hides the toggle icon. Make sure the toggle text still conveys the expanded state.`,required:!1,type:{name:`boolean`}},{name:`toggleAttrs`,description:`Additional attributes for the toggle button, like aria-label and aria-labelledby`,required:!1,type:{name:`ComponentProps`,elements:[{name:`TSTypeQuery`}]}}],events:[],slots:[{name:`toggle-icon`},{name:`toggle-text`,scoped:!0,bindings:[{name:`expanded`,title:`binding`}]},{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/ExpandableSection/ExpandableSection.vue`]}}),o(S,{name:`PfExpandableSectionToggle`,doc:{name:`PfExpandableSectionToggle`,exportName:`PfExpandableSectionToggle`,displayName:`ExpandableSectionToggle`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`contentId`,description:`ID of the content of the expandable section. It must match the contentId of the pf-expandable-section.`,required:!1,type:{name:`string`}},{name:`toggleId`,description:`ID of the toggle. It must match the toggleId of the pf-expandable-section.`,required:!1,type:{name:`string`}},{name:`direction`,description:`Direction the toggle arrow should point when the expandable section is expanded.`,required:!1,type:{name:`union`,elements:[{name:`"up"`},{name:`"down"`}]},defaultValue:{func:!1,value:`'down'`}},{name:`truncate`,description:`Flag to determine toggle styling when the expandable content is truncated.`,required:!1,type:{name:`boolean`}},{name:`detached`,description:`Flag indicating that the expandable section and expandable toggle are detached from one another.`,required:!1,type:{name:`boolean`}},{name:`toggleWrapper`,description:`The HTML element to use for the toggle wrapper. Use a heading level when the toggle text should function as a heading.`,required:!1,type:{name:`union`,elements:[{name:`"div"`},{name:`"h1"`},{name:`"h2"`},{name:`"h3"`},{name:`"h4"`},{name:`"h5"`},{name:`"h6"`}]},defaultValue:{func:!1,value:`'div'`}},{name:`toggleAttrs`,description:`Additional attributes for the toggle button, like aria-label and aria-labelledby`,required:!1,type:{name:`ComponentProps`,elements:[{name:`TSTypeQuery`}]}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/ExpandableSection/ExpandableSectionToggle.vue`]}})]),default:t(()=>[u[48]||=r(`div`,{class:`markdown pf-v6-c-content`},[r(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),r(`ul`,null,[r(`li`,null,[l(`The expanded state is bound with `),r(`code`,null,`v-model:expanded`),l(` (`),r(`code`,null,`isExpanded`),l(`, `),r(`code`,null,`onToggle`),l(`); without it the state is managed internally.`)]),r(`li`,null,[l(`The `),r(`code`,null,`displaySize="lg"`),l(` prop is replaced by the `),r(`code`,null,`large`),l(` boolean.`)]),r(`li`,null,[l(`The `),r(`code`,null,`variant="truncate"`),l(` and `),r(`code`,null,`truncateMaxLines`),l(` props are merged into `),r(`code`,null,`truncate`),l(`: `),r(`code`,null,`true`),l(` truncates after the default 3 lines, a number after that many lines.`)]),r(`li`,null,[l(`The `),r(`code`,null,`toggleContent`),l(` prop is replaced by the `),r(`code`,null,`toggle-text`),l(` slot, which receives `),r(`code`,null,`expanded`),l(` in place of the function form.`)]),r(`li`,null,[l(`The `),r(`code`,null,`toggleIcon`),l(` prop is replaced by the `),r(`code`,null,`toggle-icon`),l(` slot, and `),r(`code`,null,`hasToggleIcon`),l(` by `),r(`code`,null,`no-toggle-icon`),l(` with inverted behavior.`)]),r(`li`,null,[l(`The `),r(`code`,null,`toggleAriaLabel`),l(` and `),r(`code`,null,`toggleAriaLabelledBy`),l(` props are replaced by `),r(`code`,null,`toggle-attrs`),l(`, which sets any attribute on the toggle button.`)]),r(`li`,null,[l(`The `),r(`code`,null,`hasTruncatedContent`),l(` prop of `),r(`code`,null,`pf-expandable-section-toggle`),l(` is replaced by `),r(`code`,null,`truncate`),l(`. See `),r(`a`,{href:`#/`},`common differences from patternfly-react`),l(`.`)])]),r(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),o(w,{title:`Basic`,source:`<pf-expandable-section
  v-model:expanded="basicExpanded"
  :toggle-text="basicExpanded ? 'Show less basic example content' : 'Show more basic example content'"
>
  This content is visible only when the component is expanded.
</pf-expandable-section>`},{default:t(()=>[o(C,{expanded:f.value,"onUpdate:expanded":u[0]||=e=>f.value=e,"toggle-text":f.value?`Show less basic example content`:`Show more basic example content`},{default:t(()=>[...u[13]||=[l(` This content is visible only when the component is expanded. `,-1)]]),_:1},8,[`expanded`,`toggle-text`])]),_:1}),o(w,{title:`Uncontrolled`,source:`<pf-expandable-section toggle-text="Show more uncontrolled example content">
  This content is visible only when the component is expanded.
</pf-expandable-section>`},{default:t(()=>[o(C,{"toggle-text":`Show more uncontrolled example content`},{default:t(()=>[...u[14]||=[l(` This content is visible only when the component is expanded. `,-1)]]),_:1})]),_:1}),o(w,{title:`Uncontrolled with dynamic toggle text`,source:`<pf-expandable-section
  toggle-text-expanded="Show less uncontrolled dynamic toggle example content"
  toggle-text-collapsed="Show more uncontrolled dynamic toggle example content"
>
  This content is visible only when the component is expanded.
</pf-expandable-section>`},{default:t(()=>[o(C,{"toggle-text-expanded":`Show less uncontrolled dynamic toggle example content`,"toggle-text-collapsed":`Show more uncontrolled dynamic toggle example content`},{default:t(()=>[...u[15]||=[l(` This content is visible only when the component is expanded. `,-1)]]),_:1})]),_:1}),o(w,{title:`Uncontrolled with dynamic toggle content (function)`,source:`<pf-expandable-section>
  <template #toggle-text="{ expanded }">
    {{
      expanded
        ? 'Show less uncontrolled dynamic toggle example content'
        : 'Show more uncontrolled dynamic toggle example content'
    }}
  </template>
  This content is visible only when the component is expanded.
</pf-expandable-section>`},{intro:t(()=>[...u[16]||=[r(`div`,{class:`markdown pf-v6-c-content`},[r(`p`,null,[l(`Use the `),r(`code`,null,`expanded`),l(` value passed to the `),r(`code`,null,`toggle-text`),l(` slot to dynamically render different content based on the expanded state without managing state yourself.`)])],-1)]]),default:t(()=>[o(C,null,{"toggle-text":t(({expanded:e})=>[l(n(e?`Show less uncontrolled dynamic toggle example content`:`Show more uncontrolled dynamic toggle example content`),1)]),default:t(()=>[u[17]||=l(` This content is visible only when the component is expanded. `,-1)]),_:1})]),_:1}),o(w,{title:`Detached`,source:`<pf-stack gutter>
  <pf-stack-item>
    <pf-expandable-section
      v-model:expanded="detachedExpanded"
      detached
      direction="up"
      toggle-id="detached-expandable-section-toggle"
      content-id="detached-expandable-section-content"
    >
      This content is visible only when the component is expanded.
    </pf-expandable-section>
  </pf-stack-item>
  <pf-stack-item>
    <pf-expandable-section-toggle
      v-model:expanded="detachedExpanded"
      toggle-id="detached-expandable-section-toggle"
      content-id="detached-expandable-section-content"
      direction="up"
    >
      {{ detachedExpanded ? 'Show less detached example content' : 'Show more detached example content' }}
    </pf-expandable-section-toggle>
  </pf-stack-item>
</pf-stack>`},{intro:t(()=>[...u[18]||=[r(`div`,{class:`markdown pf-v6-c-content`},[r(`p`,null,[l(`When passing the `),r(`code`,null,`detached`),l(` property into `),r(`code`,null,`pf-expandable-section`),l(`, you must also manually pass in the same `),r(`code`,null,`toggle-id`),l(` and `),r(`code`,null,`content-id`),l(` properties to both `),r(`code`,null,`pf-expandable-section`),l(` and `),r(`code`,null,`pf-expandable-section-toggle`),l(`. This will link the content to the toggle via ARIA attributes.`)]),r(`p`,null,[l(`By default animations will not be enabled for a detached `),r(`code`,null,`pf-expandable-section`),l(`. You must manually pass the `),r(`code`,null,`direction`),l(` property with an appropriate value based on where the expandable content is rendered. If the expandable content is above the expandable toggle, `),r(`code`,null,`direction="up"`),l(` must be passed like in this example.`)])],-1)]]),default:t(()=>[o(D,{gutter:``},{default:t(()=>[o(T,null,{default:t(()=>[o(C,{expanded:p.value,"onUpdate:expanded":u[1]||=e=>p.value=e,detached:``,direction:`up`,"toggle-id":`detached-expandable-section-toggle`,"content-id":`detached-expandable-section-content`},{default:t(()=>[...u[19]||=[l(` This content is visible only when the component is expanded. `,-1)]]),_:1},8,[`expanded`])]),_:1}),o(T,null,{default:t(()=>[o(E,{expanded:p.value,"onUpdate:expanded":u[2]||=e=>p.value=e,"toggle-id":`detached-expandable-section-toggle`,"content-id":`detached-expandable-section-content`,direction:`up`},{default:t(()=>[l(n(p.value?`Show less detached example content`:`Show more detached example content`),1)]),_:1},8,[`expanded`])]),_:1})]),_:1})]),_:1}),o(w,{title:`Disclosure variation`,source:`<pf-expandable-section
  v-model:expanded="disclosureExpanded"
  :toggle-text="
    disclosureExpanded
      ? 'Show less disclosure variation example content'
      : 'Show more disclosure variation example content'
  "
  large
  width-limited
>
  This content is visible only when the component is expanded.
</pf-expandable-section>`},{intro:t(()=>[...u[20]||=[r(`div`,{class:`markdown pf-v6-c-content`},[r(`p`,null,[l(`You can pass in the `),r(`code`,null,`large`),l(` property for a disclosure variation styling.`)])],-1)]]),default:t(()=>[o(C,{expanded:m.value,"onUpdate:expanded":u[3]||=e=>m.value=e,"toggle-text":m.value?`Show less disclosure variation example content`:`Show more disclosure variation example content`,large:``,"width-limited":``},{default:t(()=>[...u[21]||=[l(` This content is visible only when the component is expanded. `,-1)]]),_:1},8,[`expanded`,`toggle-text`])]),_:1}),o(w,{title:`Indented expandable content`,source:`<pf-checkbox id="displaySize-checkbox" v-model="indentedLarge" label="large" />
<br>
<pf-expandable-section
  v-model:expanded="indentedExpanded"
  :toggle-text="indentedExpanded ? 'Show less indented example content' : 'Show more indented example content'"
  indented
  :large="indentedLarge"
>
  This content is visible only when the component is expanded.
</pf-expandable-section>`},{intro:t(()=>[...u[22]||=[r(`div`,{class:`markdown pf-v6-c-content`},[r(`p`,null,[l(`You can indent the expandable content by passing in the `),r(`code`,null,`indented`),l(` property. This will not affect the expandable toggle.`)])],-1)]]),default:t(()=>[o(O,{id:`displaySize-checkbox`,modelValue:g.value,"onUpdate:modelValue":u[4]||=e=>g.value=e,label:`large`},null,8,[`modelValue`]),u[24]||=r(`br`,null,null,-1),o(C,{expanded:h.value,"onUpdate:expanded":u[5]||=e=>h.value=e,"toggle-text":h.value?`Show less indented example content`:`Show more indented example content`,indented:``,large:g.value},{default:t(()=>[...u[23]||=[l(` This content is visible only when the component is expanded. `,-1)]]),_:1},8,[`expanded`,`toggle-text`,`large`])]),_:1}),o(w,{title:`With custom toggle content`,source:`<pf-stack gutter>
  <pf-stack-item>
    <h3>Custom Toggle Content</h3>
    <p>You can use custom content such as icons and badges in the toggle:</p>
    <pf-expandable-section v-model:expanded="customExpanded">
      <template #toggle-text>
        <div>
          <span>You can also use icons </span>
          <circle-check-icon />
          <span> or badges </span>
          <pf-badge read>4</pf-badge>
          <span> !</span>
        </div>
      </template>
      This content is visible only when the component is expanded.
    </pf-expandable-section>
  </pf-stack-item>

  <pf-stack-item>
    <h3>Accessibility Note</h3>
    <p>
      <strong>Important:</strong> If you need the toggle text to function as a heading in the document structure,
      do NOT put heading elements (h1-h6) inside the <code>toggle-text</code> slot, as this creates invalid HTML
      structure. Instead, use the <code>toggle-wrapper</code> prop.
    </p>
  </pf-stack-item>
</pf-stack>`},{intro:t(()=>[...u[25]||=[r(`div`,{class:`markdown pf-v6-c-content`},[r(`p`,null,[l(`By using the `),r(`code`,null,`toggle-text`),l(` slot, you can pass in content other than a simple string such as an icon or a badge. When passing in custom content in this way, you should not pass in any interactive element such as a button.`)])],-1)]]),default:t(()=>[o(D,{gutter:``},{default:t(()=>[o(T,null,{default:t(()=>[u[31]||=r(`h3`,null,`Custom Toggle Content`,-1),u[32]||=r(`p`,null,`You can use custom content such as icons and badges in the toggle:`,-1),o(C,{expanded:_.value,"onUpdate:expanded":u[6]||=e=>_.value=e},{"toggle-text":t(()=>[r(`div`,null,[u[27]||=r(`span`,null,`You can also use icons `,-1),o(i(d)),u[28]||=r(`span`,null,` or badges `,-1),o(k,{read:``},{default:t(()=>[...u[26]||=[l(`4`,-1)]]),_:1}),u[29]||=r(`span`,null,` !`,-1)])]),default:t(()=>[u[30]||=l(` This content is visible only when the component is expanded. `,-1)]),_:1},8,[`expanded`])]),_:1}),o(T,null,{default:t(()=>[...u[33]||=[r(`h3`,null,`Accessibility Note`,-1),r(`p`,null,[r(`strong`,null,`Important:`),l(` If you need the toggle text to function as a heading in the document structure, do NOT put heading elements (h1-h6) inside the `),r(`code`,null,`toggle-text`),l(` slot, as this creates invalid HTML structure. Instead, use the `),r(`code`,null,`toggle-wrapper`),l(` prop. `)],-1)]]),_:1})]),_:1})]),_:1}),o(w,{title:`With heading semantics`,source:`<pf-stack gutter>
  <pf-stack-item>
    <h4>Document with Expandable Sections</h4>
    <p>This demonstrates how to use expandable sections with proper heading semantics.</p>

    <pf-expandable-section
      v-model:expanded="headingExpanded1"
      toggle-wrapper="h5"
      toggle-text="Toggle as a heading"
    >
      <p>
        This content is visible only when the component is expanded. The toggle text above functions as a proper
        heading in the document structure, which is important for screen readers and other assistive technologies.
      </p>
      <p>
        When using the <code>toggle-wrapper</code> prop with heading elements (h1-h6), the button is rendered
        inside the heading element, maintaining proper semantic structure.
      </p>
    </pf-expandable-section>
  </pf-stack-item>

  <pf-stack-item>
    <h4>Detached Variant with Heading</h4>
    <p>You can also use the detached variant with heading semantics:</p>

    <pf-expandable-section-toggle
      v-model:expanded="headingExpandedDetached"
      toggle-wrapper="h5"
      toggle-id="detached-heading-toggle"
      content-id="detached-heading-content"
    >
      Detached Toggle with Heading
    </pf-expandable-section-toggle>

    <pf-expandable-section
      v-model:expanded="headingExpandedDetached"
      detached
      toggle-id="detached-heading-toggle"
      content-id="detached-heading-content"
    >
      <p>This is detached content that can be positioned anywhere in the DOM.</p>
    </pf-expandable-section>
  </pf-stack-item>

  <pf-stack-item>
    <h4>Custom Content with Heading</h4>
    <p>You can also use custom content within heading wrappers:</p>

    <pf-expandable-section v-model:expanded="headingExpanded2" toggle-wrapper="h5">
      <template #toggle-text>
        <span><circle-check-icon /> Custom Heading Content with Icon</span>
      </template>
      <p>This expandable section uses custom content with an icon inside a heading wrapper.</p>
    </pf-expandable-section>
  </pf-stack-item>
</pf-stack>`},{intro:t(()=>[...u[34]||=[r(`div`,{class:`markdown pf-v6-c-content`},[r(`p`,null,[l(`When the toggle text should function as a heading in the document structure, use the `),r(`code`,null,`toggle-wrapper`),l(` prop to specify a heading element (h1-h6). This ensures proper semantic structure for screen readers and other assistive technologies. The toggle button is rendered inside the heading element.`)])],-1)]]),default:t(()=>[o(D,{gutter:``},{default:t(()=>[o(T,null,{default:t(()=>[u[36]||=r(`h4`,null,`Document with Expandable Sections`,-1),u[37]||=r(`p`,null,`This demonstrates how to use expandable sections with proper heading semantics.`,-1),o(C,{expanded:v.value,"onUpdate:expanded":u[7]||=e=>v.value=e,"toggle-wrapper":`h5`,"toggle-text":`Toggle as a heading`},{default:t(()=>[...u[35]||=[r(`p`,null,` This content is visible only when the component is expanded. The toggle text above functions as a proper heading in the document structure, which is important for screen readers and other assistive technologies. `,-1),r(`p`,null,[l(` When using the `),r(`code`,null,`toggle-wrapper`),l(` prop with heading elements (h1-h6), the button is rendered inside the heading element, maintaining proper semantic structure. `)],-1)]]),_:1},8,[`expanded`])]),_:1}),o(T,null,{default:t(()=>[u[40]||=r(`h4`,null,`Detached Variant with Heading`,-1),u[41]||=r(`p`,null,`You can also use the detached variant with heading semantics:`,-1),o(E,{expanded:b.value,"onUpdate:expanded":u[8]||=e=>b.value=e,"toggle-wrapper":`h5`,"toggle-id":`detached-heading-toggle`,"content-id":`detached-heading-content`},{default:t(()=>[...u[38]||=[l(` Detached Toggle with Heading `,-1)]]),_:1},8,[`expanded`]),o(C,{expanded:b.value,"onUpdate:expanded":u[9]||=e=>b.value=e,detached:``,"toggle-id":`detached-heading-toggle`,"content-id":`detached-heading-content`},{default:t(()=>[...u[39]||=[r(`p`,null,`This is detached content that can be positioned anywhere in the DOM.`,-1)]]),_:1},8,[`expanded`])]),_:1}),o(T,null,{default:t(()=>[u[44]||=r(`h4`,null,`Custom Content with Heading`,-1),u[45]||=r(`p`,null,`You can also use custom content within heading wrappers:`,-1),o(C,{expanded:y.value,"onUpdate:expanded":u[10]||=e=>y.value=e,"toggle-wrapper":`h5`},{"toggle-text":t(()=>[r(`span`,null,[o(i(d)),u[42]||=l(` Custom Heading Content with Icon`,-1)])]),default:t(()=>[u[43]||=r(`p`,null,`This expandable section uses custom content with an icon inside a heading wrapper.`,-1)]),_:1},8,[`expanded`])]),_:1})]),_:1})]),_:1}),o(w,{title:`Truncate expansion`,source:`<pf-expandable-section
  v-model:expanded="truncateExpanded"
  truncate
  :toggle-text="truncateExpanded ? 'Show less truncated content' : 'Show more truncated content'"
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec dignissim turpis, et tristique purus.
  Phasellus efficitur ante quis dolor viverra imperdiet. Orci varius natoque penatibus et magnis dis parturient
  montes, nascetur ridiculus mus. Pellentesque laoreet, sem ac elementum semper, lectus mauris vestibulum nulla,
  eget volutpat massa neque vel turpis. Donec finibus enim eu leo accumsan consectetur. Praesent massa diam,
  tincidunt eu dui ac, ullamcorper elementum est. Phasellus metus felis, venenatis vitae semper nec, porta a
  metus. Vestibulum justo nisi, imperdiet id eleifend at, varius nec lorem. Fusce porttitor mollis nibh, ut
  elementum ante commodo tincidunt. Integer tincidunt at ipsum non aliquet.
</pf-expandable-section>`},{intro:t(()=>[...u[46]||=[r(`div`,{class:`markdown pf-v6-c-content`},[r(`p`,null,[l(`By passing in `),r(`code`,null,`truncate`),l(`, the expandable content will be visible up to a maximum number of lines before being truncated, with the toggle revealing or hiding the truncated content. By default the expandable content will truncate after 3 lines, and this can be customized by passing a number of lines to `),r(`code`,null,`truncate`),l(` instead, like `),r(`code`,null,`:truncate="2"`),l(`.`)])],-1)]]),default:t(()=>[o(C,{expanded:x.value,"onUpdate:expanded":u[11]||=e=>x.value=e,truncate:``,"toggle-text":x.value?`Show less truncated content`:`Show more truncated content`},{default:t(()=>[...u[47]||=[l(` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec dignissim turpis, et tristique purus. Phasellus efficitur ante quis dolor viverra imperdiet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque laoreet, sem ac elementum semper, lectus mauris vestibulum nulla, eget volutpat massa neque vel turpis. Donec finibus enim eu leo accumsan consectetur. Praesent massa diam, tincidunt eu dui ac, ullamcorper elementum est. Phasellus metus felis, venenatis vitae semper nec, porta a metus. Vestibulum justo nisi, imperdiet id eleifend at, varius nec lorem. Fusce porttitor mollis nibh, ut elementum ante commodo tincidunt. Integer tincidunt at ipsum non aliquet. `,-1)]]),_:1},8,[`expanded`,`toggle-text`])]),_:1})]),_:1})}}});export{f as default};