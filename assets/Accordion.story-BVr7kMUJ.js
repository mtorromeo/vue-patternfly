import{F as e,K as t,c as n,g as r,h as i,it as a,j as o,l as s,m as c,pt as l}from"./runtime-core.esm-bundler-DO1530YC.js";import{O as u}from"./index-CUsetNQE.js";var d={style:{"margin-top":`30px`}},f=r({__name:`Accordion.story`,setup(r){let f=a(2),p=a(2),m=a(!0),h=a(4),g=a(!1),_=a(2);return(r,a)=>{let v=e(`component-info`),y=e(`pf-accordion-item`),b=e(`pf-accordion`),x=e(`story-canvas`),S=e(`pf-accordion-toggle`),C=e(`pf-accordion-content`),w=e(`pf-accordion-expandable-content-body`),T=e(`pf-button`),E=e(`pf-checkbox`),D=e(`doc-page`);return o(),s(D,{name:`Components/Accordion.story.vue`,title:`Accordion`},{description:t(()=>[...a[22]||=[c(`An `,-1),n(`b`,null,`accordion`,-1),c(` is an interactive container that expands and collapses to hide or reveal nested content. It takes advantage of progressive disclosure to help reduce page scrolling, by allowing users to choose whether they want to show or hide more detailed information as needed.`,-1)]]),apidocs:t(()=>[i(v,{name:`PfAccordion`,doc:{name:`PfAccordion`,exportName:`PfAccordion`,displayName:`Accordion`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`level`,description:`Heading level to use for the toggles when the accordion is not a definition list`,required:!1,type:{name:`AccordionHeadingLevel`},defaultValue:{func:!1,value:`3`}},{name:`dl`,description:`Flag to render the accordion as a definition list instead of a div with headings`,required:!1,type:{name:`boolean`}},{name:`bordered`,description:`Flag to indicate the accordion had a border`,required:!1,type:{name:`boolean`}},{name:`noPlainOnGlass`,tags:{beta:[{description:`Flag to prevent the accordion from automatically applying plain styling when glass theme is enabled.`,title:`beta`}]},required:!1,type:{name:`boolean`}},{name:`plain`,tags:{beta:[{description:`Flag to add plain styling to the accordion.`,title:`beta`}]},required:!1,type:{name:`boolean`}},{name:`large`,description:`Large display size variant.`,required:!1,type:{name:`boolean`}},{name:`togglePosition`,description:`Sets the toggle icon position for all accordion toggles.`,required:!1,type:{name:`union`,elements:[{name:`"start"`},{name:`"end"`}]},defaultValue:{func:!1,value:`'end'`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Accordion/Accordion.vue`]}}),i(v,{name:`PfAccordionItem`,doc:{name:`PfAccordionItem`,exportName:`PfAccordionItem`,displayName:`AccordionItem`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`title`,description:`Text of the toggle rendered when the default slot does not contain a pf-accordion-toggle.`,required:!1,type:{name:`string`}},{name:`toggleComponent`,description:`Container to override the default for the toggle rendered from title.`,required:!1,type:{name:`union`,elements:[{name:`string`},{name:`Component`}]}},{name:`toggleAttrs`,description:`Attributes added to the button of the toggle rendered from title, such as its id.`,required:!1,type:{name:`Omit`,elements:[{name:`ComponentProps`,elements:[{name:`TSTypeQuery`}]},{name:`"component"`}]}},{name:`contentComponent`,description:`Component to use as container of the content wrapping the default slot.`,required:!1,type:{name:`union`,elements:[{name:`string`},{name:`Component`}]}},{name:`contentAttrs`,description:`Attributes added to the content wrapping the default slot, such as its id or aria-labelledby.`,required:!1,type:{name:`HTMLAttributes`}},{name:`fixed`,description:`Flag to indicate the content wrapping the default slot is fixed.`,required:!1,type:{name:`boolean`}}],events:[],slots:[{name:`toggle`,description:`Content of the toggle, replacing title.`},{name:`default`,description:`The item content, wrapped in a pf-accordion-content unless it contains one, or a pf-accordion-toggle and a pf-accordion-content.`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Accordion/AccordionItem.vue`]}}),i(v,{name:`PfAccordionToggle`,doc:{name:`PfAccordionToggle`,exportName:`PfAccordionToggle`,displayName:`AccordionToggle`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`component`,description:`Container to override the default for toggle: a dt in a definition list, else a heading.`,required:!1,type:{name:`union`,elements:[{name:`string`},{name:`Component`}]}}],events:[{name:`click`,type:{names:[`MouseEvent`]}}],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Accordion/AccordionToggle.vue`]}}),i(v,{name:`PfAccordionContent`,doc:{name:`PfAccordionContent`,exportName:`PfAccordionContent`,displayName:`AccordionContent`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`fixed`,description:`Flag to indicate Accordion content is fixed`,required:!1,type:{name:`boolean`}},{name:`component`,description:`Component to use as content container: a dd in a definition list, else a div.`,required:!1,type:{name:`union`,elements:[{name:`string`},{name:`Component`}]}},{name:`customContent`,description:`Flag indicating content is custom. The expandable content body wrapper is removed from the children, so that
multiple pf-accordion-expandable-content-body can be rendered as content.`,required:!1,type:{name:`boolean`}},{name:`bodyAttrs`,description:`Attributes added to the expandable content body wrapping the children.`,required:!1,type:{name:`HTMLAttributes`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Accordion/AccordionContent.vue`]}}),i(v,{name:`PfAccordionExpandableContentBody`,doc:{name:`PfAccordionExpandableContentBody`,exportName:`PfAccordionExpandableContentBody`,displayName:`AccordionExpandableContentBody`,description:``,tags:{},props:[],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Accordion/AccordionExpandableContentBody.vue`]}})]),default:t(()=>[a[58]||=n(`div`,{class:`markdown pf-v6-c-content`},[n(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),n(`ul`,null,[n(`li`,null,[n(`code`,null,`pf-accordion`),c(` renders a div with headings by default; `),n(`code`,null,`dl`),c(` renders a definition list (`),n(`code`,null,`asDefinitionList`),c(`, which defaults to `),n(`code`,null,`true`),c(` upstream).`)]),n(`li`,null,[n(`code`,null,`level`),c(` replaces `),n(`code`,null,`headingLevel`),c(` and also accepts a number.`)]),n(`li`,null,[n(`code`,null,`large`),c(` replaces `),n(`code`,null,`displaySize="lg"`),c(`.`)]),n(`li`,null,[c(`The expanded state of `),n(`code`,null,`pf-accordion-item`),c(` is bound with `),n(`code`,null,`v-model:expanded`),c(` (`),n(`code`,null,`isExpanded`),c(`), and clicking a toggle updates it without an `),n(`code`,null,`onClick`),c(` handler.`)]),n(`li`,null,[n(`code`,null,`pf-accordion-item`),c(` renders the toggle and the content itself when its default slot does not contain a `),n(`code`,null,`pf-accordion-toggle`),c(`: the `),n(`code`,null,`title`),c(` prop or `),n(`code`,null,`toggle`),c(` slot is the toggle text, `),n(`code`,null,`toggle-component`),c(` and `),n(`code`,null,`toggle-attrs`),c(` configure the toggle, `),n(`code`,null,`content-component`),c(`, `),n(`code`,null,`content-attrs`),c(` and `),n(`code`,null,`fixed`),c(` the content wrapping the default slot, unless the slot already contains a `),n(`code`,null,`pf-accordion-content`),c(`.`)]),n(`li`,null,[n(`code`,null,`custom-content`),c(` replaces `),n(`code`,null,`isCustomContent`),c(` and `),n(`code`,null,`body-attrs`),c(` replaces `),n(`code`,null,`contentBodyProps`),c(` on `),n(`code`,null,`pf-accordion-content`),c(`. See `),n(`a`,{href:`#/`},`common differences from patternfly-react`),c(`.`)])]),n(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),i(x,{title:`Definition list`,source:`<pf-accordion dl>
  <pf-accordion-item title="Item one" :expanded="defList === 1" @update:expanded="defList = $event ? 1 : null">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua.
    </p>
  </pf-accordion-item>
  <pf-accordion-item title="Item two" :expanded="defList === 2" @update:expanded="defList = $event ? 2 : null">
    <p>
      Vivamus et tortor sed arcu congue vehicula eget et diam. Praesent nec dictum lorem. Aliquam id diam
      ultrices, faucibus erat id, maximus nunc.
    </p>
  </pf-accordion-item>
  <pf-accordion-item title="Item three" :expanded="defList === 3" @update:expanded="defList = $event ? 3 : null">
    <p>Morbi vitae urna quis nunc convallis hendrerit. Aliquam congue orci quis ultricies tempus.</p>
  </pf-accordion-item>
  <pf-accordion-item title="Item four" :expanded="defList === 4" @update:expanded="defList = $event ? 4 : null">
    <p>
      Donec vel posuere orci. Phasellus quis tortor a ex hendrerit efficitur. Aliquam lacinia ligula pharetra,
      sagittis ex ut, pellentesque diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
      cubilia Curae; Vestibulum ultricies nulla nibh. Etiam vel dui fermentum ligula ullamcorper eleifend non quis
      tortor. Morbi tempus ornare tempus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
      ridiculus mus. Mauris et velit neque. Donec ultricies condimentum mauris, pellentesque imperdiet libero
      convallis convallis. Aliquam erat volutpat. Donec rutrum semper tempus. Proin dictum imperdiet nibh, quis
      dapibus nulla. Integer sed tincidunt lectus, sit amet auctor eros.
    </p>
  </pf-accordion-item>
  <pf-accordion-item title="Item five" :expanded="defList === 5" @update:expanded="defList = $event ? 5 : null">
    <p>Vivamus finibus dictum ex id ultrices. Mauris dictum neque a iaculis blandit.</p>
  </pf-accordion-item>
</pf-accordion>`},{intro:t(()=>[...a[23]||=[n(`div`,{class:`markdown pf-v6-c-content`},[n(`p`,null,[c(`Each `),n(`code`,null,`pf-accordion-item`),c(` renders a toggle with its `),n(`code`,null,`title`),c(` and wraps its default slot in the expandable content. Set `),n(`code`,null,`dl`),c(` to render the accordion as a definition list.`)])],-1)]]),default:t(()=>[i(b,{dl:``},{default:t(()=>[i(y,{title:`Item one`,expanded:f.value===1,"onUpdate:expanded":a[0]||=e=>f.value=e?1:null},{default:t(()=>[...a[24]||=[n(`p`,null,` Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,-1)]]),_:1},8,[`expanded`]),i(y,{title:`Item two`,expanded:f.value===2,"onUpdate:expanded":a[1]||=e=>f.value=e?2:null},{default:t(()=>[...a[25]||=[n(`p`,null,` Vivamus et tortor sed arcu congue vehicula eget et diam. Praesent nec dictum lorem. Aliquam id diam ultrices, faucibus erat id, maximus nunc. `,-1)]]),_:1},8,[`expanded`]),i(y,{title:`Item three`,expanded:f.value===3,"onUpdate:expanded":a[2]||=e=>f.value=e?3:null},{default:t(()=>[...a[26]||=[n(`p`,null,`Morbi vitae urna quis nunc convallis hendrerit. Aliquam congue orci quis ultricies tempus.`,-1)]]),_:1},8,[`expanded`]),i(y,{title:`Item four`,expanded:f.value===4,"onUpdate:expanded":a[3]||=e=>f.value=e?4:null},{default:t(()=>[...a[27]||=[n(`p`,null,` Donec vel posuere orci. Phasellus quis tortor a ex hendrerit efficitur. Aliquam lacinia ligula pharetra, sagittis ex ut, pellentesque diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum ultricies nulla nibh. Etiam vel dui fermentum ligula ullamcorper eleifend non quis tortor. Morbi tempus ornare tempus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris et velit neque. Donec ultricies condimentum mauris, pellentesque imperdiet libero convallis convallis. Aliquam erat volutpat. Donec rutrum semper tempus. Proin dictum imperdiet nibh, quis dapibus nulla. Integer sed tincidunt lectus, sit amet auctor eros. `,-1)]]),_:1},8,[`expanded`]),i(y,{title:`Item five`,expanded:f.value===5,"onUpdate:expanded":a[4]||=e=>f.value=e?5:null},{default:t(()=>[...a[28]||=[n(`p`,null,`Vivamus finibus dictum ex id ultrices. Mauris dictum neque a iaculis blandit.`,-1)]]),_:1},8,[`expanded`])]),_:1})]),_:1}),i(x,{title:`Single expand behavior`,source:`<pf-accordion>
  <pf-accordion-item :expanded="single === 1" @update:expanded="single = $event ? 1 : null">
    <pf-accordion-toggle id="ex-toggle1">Item one</pf-accordion-toggle>
    <pf-accordion-content id="ex-expand1">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua.
      </p>
    </pf-accordion-content>
  </pf-accordion-item>
  <pf-accordion-item :expanded="single === 2" @update:expanded="single = $event ? 2 : null">
    <pf-accordion-toggle id="ex-toggle2">Item two</pf-accordion-toggle>
    <pf-accordion-content id="ex-expand2">
      <p>
        Vivamus et tortor sed arcu congue vehicula eget et diam. Praesent nec dictum lorem. Aliquam id diam
        ultrices, faucibus erat id, maximus nunc.
      </p>
    </pf-accordion-content>
  </pf-accordion-item>
  <pf-accordion-item :expanded="single === 3" @update:expanded="single = $event ? 3 : null">
    <pf-accordion-toggle id="ex-toggle3">Item three</pf-accordion-toggle>
    <pf-accordion-content id="ex-expand3">
      <p>Morbi vitae urna quis nunc convallis hendrerit. Aliquam congue orci quis ultricies tempus.</p>
    </pf-accordion-content>
  </pf-accordion-item>
  <pf-accordion-item :expanded="single === 4" @update:expanded="single = $event ? 4 : null">
    <pf-accordion-toggle id="ex-toggle4">Item four</pf-accordion-toggle>
    <pf-accordion-content id="ex-expand4">
      <p>
        Donec vel posuere orci. Phasellus quis tortor a ex hendrerit efficitur. Aliquam lacinia ligula pharetra,
        sagittis ex ut, pellentesque diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
        posuere cubilia Curae; Vestibulum ultricies nulla nibh. Etiam vel dui fermentum ligula ullamcorper
        eleifend non quis tortor. Morbi tempus ornare tempus. Orci varius natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus. Mauris et velit neque. Donec ultricies condimentum mauris,
        pellentesque imperdiet libero convallis convallis. Aliquam erat volutpat. Donec rutrum semper tempus.
        Proin dictum imperdiet nibh, quis dapibus nulla. Integer sed tincidunt lectus, sit amet auctor eros.
      </p>
    </pf-accordion-content>
  </pf-accordion-item>
  <pf-accordion-item :expanded="single === 5" @update:expanded="single = $event ? 5 : null">
    <pf-accordion-toggle id="ex-toggle5">Item five</pf-accordion-toggle>
    <pf-accordion-content id="ex-expand5">
      <p>Vivamus finibus dictum ex id ultrices. Mauris dictum neque a iaculis blandit.</p>
    </pf-accordion-content>
  </pf-accordion-item>
</pf-accordion>`},{intro:t(()=>[...a[29]||=[n(`div`,{class:`markdown pf-v6-c-content`},[n(`p`,null,[c(`The toggle and the content can also be composed with `),n(`code`,null,`pf-accordion-toggle`),c(` and `),n(`code`,null,`pf-accordion-content`),c(`. Binding each item to a shared value keeps a single item expanded.`)])],-1)]]),default:t(()=>[i(b,null,{default:t(()=>[i(y,{expanded:p.value===1,"onUpdate:expanded":a[5]||=e=>p.value=e?1:null},{default:t(()=>[i(S,{id:`ex-toggle1`},{default:t(()=>[...a[30]||=[c(`Item one`,-1)]]),_:1}),i(C,{id:`ex-expand1`},{default:t(()=>[...a[31]||=[n(`p`,null,` Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,-1)]]),_:1})]),_:1},8,[`expanded`]),i(y,{expanded:p.value===2,"onUpdate:expanded":a[6]||=e=>p.value=e?2:null},{default:t(()=>[i(S,{id:`ex-toggle2`},{default:t(()=>[...a[32]||=[c(`Item two`,-1)]]),_:1}),i(C,{id:`ex-expand2`},{default:t(()=>[...a[33]||=[n(`p`,null,` Vivamus et tortor sed arcu congue vehicula eget et diam. Praesent nec dictum lorem. Aliquam id diam ultrices, faucibus erat id, maximus nunc. `,-1)]]),_:1})]),_:1},8,[`expanded`]),i(y,{expanded:p.value===3,"onUpdate:expanded":a[7]||=e=>p.value=e?3:null},{default:t(()=>[i(S,{id:`ex-toggle3`},{default:t(()=>[...a[34]||=[c(`Item three`,-1)]]),_:1}),i(C,{id:`ex-expand3`},{default:t(()=>[...a[35]||=[n(`p`,null,`Morbi vitae urna quis nunc convallis hendrerit. Aliquam congue orci quis ultricies tempus.`,-1)]]),_:1})]),_:1},8,[`expanded`]),i(y,{expanded:p.value===4,"onUpdate:expanded":a[8]||=e=>p.value=e?4:null},{default:t(()=>[i(S,{id:`ex-toggle4`},{default:t(()=>[...a[36]||=[c(`Item four`,-1)]]),_:1}),i(C,{id:`ex-expand4`},{default:t(()=>[...a[37]||=[n(`p`,null,` Donec vel posuere orci. Phasellus quis tortor a ex hendrerit efficitur. Aliquam lacinia ligula pharetra, sagittis ex ut, pellentesque diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum ultricies nulla nibh. Etiam vel dui fermentum ligula ullamcorper eleifend non quis tortor. Morbi tempus ornare tempus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris et velit neque. Donec ultricies condimentum mauris, pellentesque imperdiet libero convallis convallis. Aliquam erat volutpat. Donec rutrum semper tempus. Proin dictum imperdiet nibh, quis dapibus nulla. Integer sed tincidunt lectus, sit amet auctor eros. `,-1)]]),_:1})]),_:1},8,[`expanded`]),i(y,{expanded:p.value===5,"onUpdate:expanded":a[9]||=e=>p.value=e?5:null},{default:t(()=>[i(S,{id:`ex-toggle5`},{default:t(()=>[...a[38]||=[c(`Item five`,-1)]]),_:1}),i(C,{id:`ex-expand5`},{default:t(()=>[...a[39]||=[n(`p`,null,`Vivamus finibus dictum ex id ultrices. Mauris dictum neque a iaculis blandit.`,-1)]]),_:1})]),_:1},8,[`expanded`])]),_:1})]),_:1}),i(x,{title:`Fixed with multiple expand behavior`,source:`<pf-accordion>
  <pf-accordion-item title="Item one" fixed>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua.
    </p>
  </pf-accordion-item>
  <pf-accordion-item title="Item two" fixed>
    <p>
      Vivamus et tortor sed arcu congue vehicula eget et diam. Praesent nec dictum lorem. Aliquam id diam
      ultrices, faucibus erat id, maximus nunc.
    </p>
  </pf-accordion-item>
  <pf-accordion-item title="Item three" fixed>
    <p>Morbi vitae urna quis nunc convallis hendrerit. Aliquam congue orci quis ultricies tempus.</p>
  </pf-accordion-item>
  <pf-accordion-item
    v-model:expanded="multipleFourExpanded"
    title="Item four"
    :toggle-attrs="{ id: 'ex2-toggle4' }"
    :content-attrs="{ id: 'ex2-expand4', 'aria-labelledby': 'ex2-toggle4' }"
    fixed
  >
    <p>
      Donec vel posuere orci. Phasellus quis tortor a ex hendrerit efficitur. Aliquam lacinia ligula pharetra,
      sagittis ex ut, pellentesque diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
      cubilia Curae; Vestibulum ultricies nulla nibh. Etiam vel dui fermentum ligula ullamcorper eleifend non quis
      tortor. Morbi tempus ornare tempus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
      ridiculus mus. Mauris et velit neque. Donec ultricies condimentum mauris, pellentesque imperdiet libero
      convallis convallis. Aliquam erat volutpat. Donec rutrum semper tempus. Proin dictum imperdiet nibh, quis
      dapibus nulla. Integer sed tincidunt lectus, sit amet auctor eros.
    </p>
    <p>
      Donec vel posuere orci. Phasellus quis tortor a ex hendrerit efficitur. Aliquam lacinia ligula pharetra,
      sagittis ex ut, pellentesque diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
      cubilia Curae; Vestibulum ultricies nulla nibh. Etiam vel dui fermentum ligula ullamcorper eleifend non quis
      tortor. Morbi tempus ornare tempus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
      ridiculus mus. Mauris et velit neque. Donec ultricies condimentum mauris, pellentesque imperdiet libero
      convallis convallis. Aliquam erat volutpat. Donec rutrum semper tempus. Proin dictum imperdiet nibh, quis
      dapibus nulla. Integer sed tincidunt lectus, sit amet auctor eros.
    </p>
  </pf-accordion-item>
  <pf-accordion-item title="Item five" fixed>
    <p>Vivamus finibus dictum ex id ultrices. Mauris dictum neque a iaculis blandit.</p>
  </pf-accordion-item>
</pf-accordion>`},{intro:t(()=>[...a[40]||=[n(`div`,{class:`markdown pf-v6-c-content`},[n(`p`,null,[c(`Without a shared value each item keeps its own expanded state. `),n(`code`,null,`fixed`),c(` limits the height of the content, which scrolls and becomes focusable when it overflows.`)])],-1)]]),default:t(()=>[i(b,null,{default:t(()=>[i(y,{title:`Item one`,fixed:``},{default:t(()=>[...a[41]||=[n(`p`,null,` Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,-1)]]),_:1}),i(y,{title:`Item two`,fixed:``},{default:t(()=>[...a[42]||=[n(`p`,null,` Vivamus et tortor sed arcu congue vehicula eget et diam. Praesent nec dictum lorem. Aliquam id diam ultrices, faucibus erat id, maximus nunc. `,-1)]]),_:1}),i(y,{title:`Item three`,fixed:``},{default:t(()=>[...a[43]||=[n(`p`,null,`Morbi vitae urna quis nunc convallis hendrerit. Aliquam congue orci quis ultricies tempus.`,-1)]]),_:1}),i(y,{expanded:m.value,"onUpdate:expanded":a[10]||=e=>m.value=e,title:`Item four`,"toggle-attrs":{id:`ex2-toggle4`},"content-attrs":{id:`ex2-expand4`,"aria-labelledby":`ex2-toggle4`},fixed:``},{default:t(()=>[...a[44]||=[n(`p`,null,` Donec vel posuere orci. Phasellus quis tortor a ex hendrerit efficitur. Aliquam lacinia ligula pharetra, sagittis ex ut, pellentesque diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum ultricies nulla nibh. Etiam vel dui fermentum ligula ullamcorper eleifend non quis tortor. Morbi tempus ornare tempus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris et velit neque. Donec ultricies condimentum mauris, pellentesque imperdiet libero convallis convallis. Aliquam erat volutpat. Donec rutrum semper tempus. Proin dictum imperdiet nibh, quis dapibus nulla. Integer sed tincidunt lectus, sit amet auctor eros. `,-1),n(`p`,null,` Donec vel posuere orci. Phasellus quis tortor a ex hendrerit efficitur. Aliquam lacinia ligula pharetra, sagittis ex ut, pellentesque diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum ultricies nulla nibh. Etiam vel dui fermentum ligula ullamcorper eleifend non quis tortor. Morbi tempus ornare tempus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris et velit neque. Donec ultricies condimentum mauris, pellentesque imperdiet libero convallis convallis. Aliquam erat volutpat. Donec rutrum semper tempus. Proin dictum imperdiet nibh, quis dapibus nulla. Integer sed tincidunt lectus, sit amet auctor eros. `,-1)]]),_:1},8,[`expanded`]),i(y,{title:`Item five`,fixed:``},{default:t(()=>[...a[45]||=[n(`p`,null,`Vivamus finibus dictum ex id ultrices. Mauris dictum neque a iaculis blandit.`,-1)]]),_:1})]),_:1})]),_:1}),i(x,{title:`Bordered`,source:`<pf-accordion dl bordered :large="displayLarge">
  <pf-accordion-item title="Item one" :expanded="bordered === 1" @update:expanded="bordered = $event ? 1 : null">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua.
    </p>
  </pf-accordion-item>
  <pf-accordion-item title="Item two" :expanded="bordered === 2" @update:expanded="bordered = $event ? 2 : null">
    <p>
      Vivamus et tortor sed arcu congue vehicula eget et diam. Praesent nec dictum lorem. Aliquam id diam
      ultrices, faucibus erat id, maximus nunc.
    </p>
  </pf-accordion-item>
  <pf-accordion-item
    title="Item three"
    :expanded="bordered === 3"
    @update:expanded="bordered = $event ? 3 : null"
  >
    <p>Morbi vitae urna quis nunc convallis hendrerit. Aliquam congue orci quis ultricies tempus.</p>
  </pf-accordion-item>
  <pf-accordion-item title="Item four" :expanded="bordered === 4" @update:expanded="bordered = $event ? 4 : null">
    <pf-accordion-content custom-content>
      <pf-accordion-expandable-content-body>
        Donec vel posuere orci. Phasellus quis tortor a ex hendrerit efficitur. Aliquam lacinia ligula pharetra,
        sagittis ex ut, pellentesque diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
        posuere cubilia Curae; Vestibulum ultricies nulla nibh. Etiam vel dui fermentum ligula ullamcorper
        eleifend non quis tortor. Morbi tempus ornare tempus. Orci varius natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus. Mauris et velit neque. Donec ultricies condimentum mauris,
        pellentesque imperdiet libero convallis convallis. Aliquam erat volutpat. Donec rutrum semper tempus.
        Proin dictum imperdiet nibh, quis dapibus nulla. Integer sed tincidunt lectus, sit amet auctor eros.
      </pf-accordion-expandable-content-body>
      <pf-accordion-expandable-content-body>
        <pf-button variant="link" large inline>Call to action <angle-right-icon /></pf-button>
      </pf-accordion-expandable-content-body>
    </pf-accordion-content>
  </pf-accordion-item>
  <pf-accordion-item title="Item five" :expanded="bordered === 5" @update:expanded="bordered = $event ? 5 : null">
    <p>Vivamus finibus dictum ex id ultrices. Mauris dictum neque a iaculis blandit.</p>
  </pf-accordion-item>
</pf-accordion>
<div style="margin-top: 30px">
  <pf-checkbox
    id="toggle-display-lg"
    v-model="displayLarge"
    label="Display size large"
    name="toggle-display-lg" />
</div>`},{intro:t(()=>[...a[46]||=[n(`div`,{class:`markdown pf-v6-c-content`},[n(`p`,null,[c(`A `),n(`code`,null,`pf-accordion-content`),c(` with `),n(`code`,null,`custom-content`),c(` can hold multiple `),n(`code`,null,`pf-accordion-expandable-content-body`),c(`.`)])],-1)]]),default:t(()=>[i(b,{dl:``,bordered:``,large:g.value},{default:t(()=>[i(y,{title:`Item one`,expanded:h.value===1,"onUpdate:expanded":a[11]||=e=>h.value=e?1:null},{default:t(()=>[...a[47]||=[n(`p`,null,` Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,-1)]]),_:1},8,[`expanded`]),i(y,{title:`Item two`,expanded:h.value===2,"onUpdate:expanded":a[12]||=e=>h.value=e?2:null},{default:t(()=>[...a[48]||=[n(`p`,null,` Vivamus et tortor sed arcu congue vehicula eget et diam. Praesent nec dictum lorem. Aliquam id diam ultrices, faucibus erat id, maximus nunc. `,-1)]]),_:1},8,[`expanded`]),i(y,{title:`Item three`,expanded:h.value===3,"onUpdate:expanded":a[13]||=e=>h.value=e?3:null},{default:t(()=>[...a[49]||=[n(`p`,null,`Morbi vitae urna quis nunc convallis hendrerit. Aliquam congue orci quis ultricies tempus.`,-1)]]),_:1},8,[`expanded`]),i(y,{title:`Item four`,expanded:h.value===4,"onUpdate:expanded":a[14]||=e=>h.value=e?4:null},{default:t(()=>[i(C,{"custom-content":``},{default:t(()=>[i(w,null,{default:t(()=>[...a[50]||=[c(` Donec vel posuere orci. Phasellus quis tortor a ex hendrerit efficitur. Aliquam lacinia ligula pharetra, sagittis ex ut, pellentesque diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum ultricies nulla nibh. Etiam vel dui fermentum ligula ullamcorper eleifend non quis tortor. Morbi tempus ornare tempus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris et velit neque. Donec ultricies condimentum mauris, pellentesque imperdiet libero convallis convallis. Aliquam erat volutpat. Donec rutrum semper tempus. Proin dictum imperdiet nibh, quis dapibus nulla. Integer sed tincidunt lectus, sit amet auctor eros. `,-1)]]),_:1}),i(w,null,{default:t(()=>[i(T,{variant:`link`,large:``,inline:``},{default:t(()=>[a[51]||=c(`Call to action `,-1),i(l(u))]),_:1})]),_:1})]),_:1})]),_:1},8,[`expanded`]),i(y,{title:`Item five`,expanded:h.value===5,"onUpdate:expanded":a[15]||=e=>h.value=e?5:null},{default:t(()=>[...a[52]||=[n(`p`,null,`Vivamus finibus dictum ex id ultrices. Mauris dictum neque a iaculis blandit.`,-1)]]),_:1},8,[`expanded`])]),_:1},8,[`large`]),n(`div`,d,[i(E,{id:`toggle-display-lg`,modelValue:g.value,"onUpdate:modelValue":a[16]||=e=>g.value=e,label:`Display size large`,name:`toggle-display-lg`},null,8,[`modelValue`])])]),_:1}),i(x,{title:`Toggle icon at start`,source:`<pf-accordion dl toggle-position="start">
  <pf-accordion-item
    title="Item one"
    :expanded="toggleStart === 1"
    @update:expanded="toggleStart = $event ? 1 : null"
  >
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua.
    </p>
  </pf-accordion-item>
  <pf-accordion-item
    title="Item two"
    :expanded="toggleStart === 2"
    @update:expanded="toggleStart = $event ? 2 : null"
  >
    <p>
      Vivamus et tortor sed arcu congue vehicula eget et diam. Praesent nec dictum lorem. Aliquam id diam
      ultrices, faucibus erat id, maximus nunc.
    </p>
  </pf-accordion-item>
  <pf-accordion-item
    title="Item three"
    :expanded="toggleStart === 3"
    @update:expanded="toggleStart = $event ? 3 : null"
  >
    <p>Morbi vitae urna quis nunc convallis hendrerit. Aliquam congue orci quis ultricies tempus.</p>
  </pf-accordion-item>
  <pf-accordion-item
    title="Item four"
    :expanded="toggleStart === 4"
    @update:expanded="toggleStart = $event ? 4 : null"
  >
    <p>
      Donec vel posuere orci. Phasellus quis tortor a ex hendrerit efficitur. Aliquam lacinia ligula pharetra,
      sagittis ex ut, pellentesque diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
      cubilia Curae; Vestibulum ultricies nulla nibh. Etiam vel dui fermentum ligula ullamcorper eleifend non quis
      tortor. Morbi tempus ornare tempus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
      ridiculus mus. Mauris et velit neque. Donec ultricies condimentum mauris, pellentesque imperdiet libero
      convallis convallis. Aliquam erat volutpat. Donec rutrum semper tempus. Proin dictum imperdiet nibh, quis
      dapibus nulla. Integer sed tincidunt lectus, sit amet auctor eros.
    </p>
  </pf-accordion-item>
  <pf-accordion-item
    title="Item five"
    :expanded="toggleStart === 5"
    @update:expanded="toggleStart = $event ? 5 : null"
  >
    <p>Vivamus finibus dictum ex id ultrices. Mauris dictum neque a iaculis blandit.</p>
  </pf-accordion-item>
</pf-accordion>`},{default:t(()=>[i(b,{dl:``,"toggle-position":`start`},{default:t(()=>[i(y,{title:`Item one`,expanded:_.value===1,"onUpdate:expanded":a[17]||=e=>_.value=e?1:null},{default:t(()=>[...a[53]||=[n(`p`,null,` Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,-1)]]),_:1},8,[`expanded`]),i(y,{title:`Item two`,expanded:_.value===2,"onUpdate:expanded":a[18]||=e=>_.value=e?2:null},{default:t(()=>[...a[54]||=[n(`p`,null,` Vivamus et tortor sed arcu congue vehicula eget et diam. Praesent nec dictum lorem. Aliquam id diam ultrices, faucibus erat id, maximus nunc. `,-1)]]),_:1},8,[`expanded`]),i(y,{title:`Item three`,expanded:_.value===3,"onUpdate:expanded":a[19]||=e=>_.value=e?3:null},{default:t(()=>[...a[55]||=[n(`p`,null,`Morbi vitae urna quis nunc convallis hendrerit. Aliquam congue orci quis ultricies tempus.`,-1)]]),_:1},8,[`expanded`]),i(y,{title:`Item four`,expanded:_.value===4,"onUpdate:expanded":a[20]||=e=>_.value=e?4:null},{default:t(()=>[...a[56]||=[n(`p`,null,` Donec vel posuere orci. Phasellus quis tortor a ex hendrerit efficitur. Aliquam lacinia ligula pharetra, sagittis ex ut, pellentesque diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum ultricies nulla nibh. Etiam vel dui fermentum ligula ullamcorper eleifend non quis tortor. Morbi tempus ornare tempus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris et velit neque. Donec ultricies condimentum mauris, pellentesque imperdiet libero convallis convallis. Aliquam erat volutpat. Donec rutrum semper tempus. Proin dictum imperdiet nibh, quis dapibus nulla. Integer sed tincidunt lectus, sit amet auctor eros. `,-1)]]),_:1},8,[`expanded`]),i(y,{title:`Item five`,expanded:_.value===5,"onUpdate:expanded":a[21]||=e=>_.value=e?5:null},{default:t(()=>[...a[57]||=[n(`p`,null,`Vivamus finibus dictum ex id ultrices. Mauris dictum neque a iaculis blandit.`,-1)]]),_:1},8,[`expanded`])]),_:1})]),_:1})]),_:1})}}});export{f as default};