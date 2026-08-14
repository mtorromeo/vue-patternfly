import{H as e,N as t,Q as n,c as r,k as i,m as a,p as o,s}from"./runtime-core.esm-bundler-DvxuuL12.js";var c={__name:`Accordion.story`,setup(c){let l=n(null);return(n,c)=>{let u=t(`component-info`),d=t(`pf-accordion-item`),f=t(`pf-accordion`),p=t(`story-canvas`),m=t(`doc-page`);return i(),r(m,{name:`Components/Accordion.story.vue`,title:`Accordion`},{description:e(()=>[...c[10]||=[o(`An `,-1),s(`b`,null,`accordion`,-1),o(` is an interactive container that expands and collapses to hide or reveal nested content. It takes advantage of progressive disclosure to help reduce page scrolling, by allowing users to choose whether they want to show or hide more detailed information as needed.`,-1)]]),apidocs:e(()=>[a(u,{name:`PfAccordion`,doc:{name:`PfAccordion`,exportName:`PfAccordion`,displayName:`Accordion`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`level`,description:`Heading level to use`,required:!1,type:{name:`union`,elements:[{name:`"h1"`},{name:`"h2"`},{name:`"h3"`},{name:`"h4"`},{name:`"h5"`},{name:`"h6"`},{name:`number`}]},defaultValue:{func:!1,value:`3`}},{name:`dl`,description:`Flag to indicate whether use definition list or div`,required:!1,type:{name:`boolean`}},{name:`bordered`,description:`Flag to indicate the accordion had a border`,required:!1,type:{name:`boolean`}},{name:`large`,description:`Large display size variant.`,required:!1,type:{name:`boolean`}},{name:`togglePosition`,description:`Sets the toggle icon position for all accordion toggles.`,required:!1,type:{name:`union`,elements:[{name:`"start"`},{name:`"end"`}]},defaultValue:{func:!1,value:`'end'`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Accordion/Accordion.vue`]}}),a(u,{name:`PfAccordionItem`,doc:{name:`PfAccordionItem`,exportName:`PfAccordionItem`,displayName:`AccordionItem`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`title`,required:!1,type:{name:`string`}},{name:`toggleComponent`,required:!1,type:{name:`string`}},{name:`contentComponent`,required:!1,type:{name:`string`}},{name:`fixed`,required:!1,type:{name:`boolean`}}],events:[{name:`click`,type:{names:[`PointerEvent`]}}],slots:[{name:`toggle`},{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Accordion/AccordionItem.vue`]}})]),default:e(()=>[a(p,{title:`Default`,source:`<pf-accordion>
  <pf-accordion-item
    title="Item One"
    :expanded="expanded == 1"
    @update:expanded="expanded = $event ? 1 : null"
  >
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua.
    </p>
  </pf-accordion-item>
  <pf-accordion-item
    title="Item Two"
    :expanded="expanded == 2"
    @update:expanded="expanded = $event ? 2 : null"
  >
    <p>
      Vivamus et tortor sed arcu congue vehicula eget et diam. Praesent nec dictum lorem. Aliquam id diam
      ultrices, faucibus erat id, maximus nunc.
    </p>
  </pf-accordion-item>
  <pf-accordion-item
    title="Item Three"
    :expanded="expanded == 3"
    @update:expanded="expanded = $event ? 3 : null"
  >
    <p>Morbi vitae urna quis nunc convallis hendrerit. Aliquam congue orci quis ultricies tempus.</p>
  </pf-accordion-item>
  <pf-accordion-item
    title="Item Four"
    :expanded="expanded == 4"
    @update:expanded="expanded = $event ? 4 : null"
  >
    <p>
      Donec vel posuere orci. Phasellus quis tortor a ex hendrerit efficitur. Aliquam lacinia ligula pharetra,
      sagittis ex ut, pellentesque diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
      posuere cubilia Curae; Vestibulum ultricies nulla nibh. Etiam vel dui fermentum ligula ullamcorper
      eleifend non quis tortor. Morbi tempus ornare tempus. Orci varius natoque penatibus et magnis dis
      parturient montes, nascetur ridiculus mus. Mauris et velit neque. Donec ultricies condimentum mauris,
      pellentesque imperdiet libero convallis convallis. Aliquam erat volutpat. Donec rutrum semper tempus.
      Proin dictum imperdiet nibh, quis dapibus nulla. Integer sed tincidunt lectus, sit amet auctor eros.
    </p>
  </pf-accordion-item>
  <pf-accordion-item
    title="Item Five"
    :expanded="expanded == 5"
    @update:expanded="expanded = $event ? 5 : null"
  >
    <p>Vivamus finibus dictum ex id ultrices. Mauris dictum neque a iaculis blandit.</p>
  </pf-accordion-item>
</pf-accordion>`},{default:e(()=>[a(f,null,{default:e(()=>[a(d,{title:`Item One`,expanded:l.value==1,"onUpdate:expanded":c[0]||=e=>l.value=e?1:null},{default:e(()=>[...c[11]||=[s(`p`,null,` Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,-1)]]),_:1},8,[`expanded`]),a(d,{title:`Item Two`,expanded:l.value==2,"onUpdate:expanded":c[1]||=e=>l.value=e?2:null},{default:e(()=>[...c[12]||=[s(`p`,null,` Vivamus et tortor sed arcu congue vehicula eget et diam. Praesent nec dictum lorem. Aliquam id diam ultrices, faucibus erat id, maximus nunc. `,-1)]]),_:1},8,[`expanded`]),a(d,{title:`Item Three`,expanded:l.value==3,"onUpdate:expanded":c[2]||=e=>l.value=e?3:null},{default:e(()=>[...c[13]||=[s(`p`,null,`Morbi vitae urna quis nunc convallis hendrerit. Aliquam congue orci quis ultricies tempus.`,-1)]]),_:1},8,[`expanded`]),a(d,{title:`Item Four`,expanded:l.value==4,"onUpdate:expanded":c[3]||=e=>l.value=e?4:null},{default:e(()=>[...c[14]||=[s(`p`,null,` Donec vel posuere orci. Phasellus quis tortor a ex hendrerit efficitur. Aliquam lacinia ligula pharetra, sagittis ex ut, pellentesque diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum ultricies nulla nibh. Etiam vel dui fermentum ligula ullamcorper eleifend non quis tortor. Morbi tempus ornare tempus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris et velit neque. Donec ultricies condimentum mauris, pellentesque imperdiet libero convallis convallis. Aliquam erat volutpat. Donec rutrum semper tempus. Proin dictum imperdiet nibh, quis dapibus nulla. Integer sed tincidunt lectus, sit amet auctor eros. `,-1)]]),_:1},8,[`expanded`]),a(d,{title:`Item Five`,expanded:l.value==5,"onUpdate:expanded":c[4]||=e=>l.value=e?5:null},{default:e(()=>[...c[15]||=[s(`p`,null,`Vivamus finibus dictum ex id ultrices. Mauris dictum neque a iaculis blandit.`,-1)]]),_:1},8,[`expanded`])]),_:1})]),_:1}),a(p,{title:`Definition List`,source:`<pf-accordion dl>
  <pf-accordion-item
    title="Item One"
    :expanded="expanded == 1"
    @update:expanded="expanded = $event ? 1 : null"
  >
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua.
    </p>
  </pf-accordion-item>
  <pf-accordion-item
    title="Item Two"
    :expanded="expanded == 2"
    @update:expanded="expanded = $event ? 2 : null"
  >
    <p>
      Vivamus et tortor sed arcu congue vehicula eget et diam. Praesent nec dictum lorem. Aliquam id diam
      ultrices, faucibus erat id, maximus nunc.
    </p>
  </pf-accordion-item>
  <pf-accordion-item
    title="Item Three"
    :expanded="expanded == 3"
    @update:expanded="expanded = $event ? 3 : null"
  >
    <p>Morbi vitae urna quis nunc convallis hendrerit. Aliquam congue orci quis ultricies tempus.</p>
  </pf-accordion-item>
  <pf-accordion-item
    title="Item Four"
    :expanded="expanded == 4"
    @update:expanded="expanded = $event ? 4 : null"
  >
    <p>
      Donec vel posuere orci. Phasellus quis tortor a ex hendrerit efficitur. Aliquam lacinia ligula pharetra,
      sagittis ex ut, pellentesque diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
      posuere cubilia Curae; Vestibulum ultricies nulla nibh. Etiam vel dui fermentum ligula ullamcorper
      eleifend non quis tortor. Morbi tempus ornare tempus. Orci varius natoque penatibus et magnis dis
      parturient montes, nascetur ridiculus mus. Mauris et velit neque. Donec ultricies condimentum mauris,
      pellentesque imperdiet libero convallis convallis. Aliquam erat volutpat. Donec rutrum semper tempus.
      Proin dictum imperdiet nibh, quis dapibus nulla. Integer sed tincidunt lectus, sit amet auctor eros.
    </p>
  </pf-accordion-item>
  <pf-accordion-item
    title="Item Five"
    :expanded="expanded == 5"
    @update:expanded="expanded = $event ? 5 : null"
  >
    <p>Vivamus finibus dictum ex id ultrices. Mauris dictum neque a iaculis blandit.</p>
  </pf-accordion-item>
</pf-accordion>`},{default:e(()=>[a(f,{dl:``},{default:e(()=>[a(d,{title:`Item One`,expanded:l.value==1,"onUpdate:expanded":c[5]||=e=>l.value=e?1:null},{default:e(()=>[...c[16]||=[s(`p`,null,` Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,-1)]]),_:1},8,[`expanded`]),a(d,{title:`Item Two`,expanded:l.value==2,"onUpdate:expanded":c[6]||=e=>l.value=e?2:null},{default:e(()=>[...c[17]||=[s(`p`,null,` Vivamus et tortor sed arcu congue vehicula eget et diam. Praesent nec dictum lorem. Aliquam id diam ultrices, faucibus erat id, maximus nunc. `,-1)]]),_:1},8,[`expanded`]),a(d,{title:`Item Three`,expanded:l.value==3,"onUpdate:expanded":c[7]||=e=>l.value=e?3:null},{default:e(()=>[...c[18]||=[s(`p`,null,`Morbi vitae urna quis nunc convallis hendrerit. Aliquam congue orci quis ultricies tempus.`,-1)]]),_:1},8,[`expanded`]),a(d,{title:`Item Four`,expanded:l.value==4,"onUpdate:expanded":c[8]||=e=>l.value=e?4:null},{default:e(()=>[...c[19]||=[s(`p`,null,` Donec vel posuere orci. Phasellus quis tortor a ex hendrerit efficitur. Aliquam lacinia ligula pharetra, sagittis ex ut, pellentesque diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum ultricies nulla nibh. Etiam vel dui fermentum ligula ullamcorper eleifend non quis tortor. Morbi tempus ornare tempus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris et velit neque. Donec ultricies condimentum mauris, pellentesque imperdiet libero convallis convallis. Aliquam erat volutpat. Donec rutrum semper tempus. Proin dictum imperdiet nibh, quis dapibus nulla. Integer sed tincidunt lectus, sit amet auctor eros. `,-1)]]),_:1},8,[`expanded`]),a(d,{title:`Item Five`,expanded:l.value==5,"onUpdate:expanded":c[9]||=e=>l.value=e?5:null},{default:e(()=>[...c[20]||=[s(`p`,null,`Vivamus finibus dictum ex id ultrices. Mauris dictum neque a iaculis blandit.`,-1)]]),_:1},8,[`expanded`])]),_:1})]),_:1})]),_:1})}}};export{c as default};