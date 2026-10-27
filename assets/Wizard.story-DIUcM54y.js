import{F as e,K as t,N as n,Pt as r,c as i,d as a,g as o,h as s,it as c,j as l,l as u,m as d,n as f,pt as p,s as m}from"./runtime-core.esm-bundler-DO1530YC.js";import{T as h,W as g,j as _}from"./index-CUsetNQE.js";var v=g({name:`HashtagIcon`,height:512,width:512,svgPathData:`M214.7 .7c17.3 3.7 28.3 20.7 24.6 38l-19.1 89.3 126.5 0 22-102.7C372.4 8 389.4-3 406.7 .7s28.3 20.7 24.6 38L412.2 128 480 128c17.7 0 32 14.3 32 32s-14.3 32-32 32l-81.6 0-27.4 128 67.8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-81.6 0-22 102.7c-3.7 17.3-20.7 28.3-38 24.6s-28.3-20.7-24.6-38l19.1-89.3-126.5 0-22 102.7c-3.7 17.3-20.7 28.3-38 24.6s-28.3-20.7-24.6-38L99.8 384 32 384c-17.7 0-32-14.3-32-32s14.3-32 32-32l81.6 0 27.4-128-67.8 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l81.6 0 22-102.7C180.4 8 197.4-3 214.7 .7zM206.4 192l-27.4 128 126.5 0 27.4-128-126.5 0z`,yOffset:0,xOffset:0}),y=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum in neque nec pharetra. Duis lacinia vel sapien ut imperdiet. Nunc ultrices mollis dictum. Duis tempus, massa nec tincidunt tempor, enim ex porttitor odio, eu facilisis dolor tortor id sapien. Etiam sit amet molestie lacus. Nulla facilisi. Duis eget finibus ipsum. Quisque dictum enim sed sodales porta. Curabitur eget orci eu risus posuere pulvinar id nec turpis. Morbi mattis orci vel posuere tincidunt. Fusce bibendum et libero a auctor.`,b=`Proin elementum commodo sodales. Quisque eget libero mattis, ornare augue at, egestas nisi. Mauris ultrices orci fringilla pretium mattis. Aliquam erat volutpat. Sed pharetra condimentum dui, nec bibendum ante. Vestibulum sollicitudin, sem accumsan pharetra molestie, purus turpis lacinia lorem, commodo sodales quam lectus a urna. Nam gravida, felis a lacinia varius, ex ipsum ultrices orci, non egestas diam velit in mi. Ut sit amet commodo orci. Duis sed diam odio. Duis mi metus, dignissim in odio nec, ornare aliquet libero. Sed luctus elit nibh. Quisque et felis diam. Integer ac metus dolor.`,x=o({__name:`Wizard.story`,setup(o){let[g,x]=_(),S=c(`Thirty`),C=m(()=>/^\d+$/.test(S.value)),w=()=>alert(`Wow, you look a lot younger than ${S.value}.`),T=c(),E=c(!1),D=c(!1),O=c(`default`);return(o,c)=>{let m=e(`component-info`),_=e(`pf-wizard-step`),k=e(`pf-wizard`),A=e(`story-canvas`),j=e(`pf-button`),M=e(`pf-text-input`),N=e(`pf-helper-text-item`),P=e(`pf-helper-text`),F=e(`pf-form-helper-text`),I=e(`pf-form-group`),L=e(`pf-form`),R=e(`pf-description-list-term`),z=e(`pf-description-list-description`),B=e(`pf-description-list-group`),V=e(`pf-description-list`),H=e(`pf-wizard-header`),U=e(`pf-modal`),W=e(`pf-wizard-nav-item`),G=e(`pf-wizard-nav`),K=e(`pf-checkbox`),q=e(`pf-radio`),J=e(`doc-page`);return l(),u(J,{name:`Components/Wizard.story.vue`,title:`Wizard`},{description:t(()=>[...c[10]||=[d(` A `,-1),i(`b`,null,`wizard`,-1),d(` is used to guide a user through a complex, multi-step workflow. The wizard displays the steps in a navigation, the content of the current step and a footer with the actions to move between steps. `,-1)]]),apidocs:t(()=>[s(m,{name:`PfWizard`}),s(m,{name:`PfWizardStep`}),s(m,{name:`PfWizardBody`}),s(m,{name:`PfWizardFooter`}),s(m,{name:`PfWizardStepFooter`}),s(m,{name:`PfWizardFooterWrapper`}),s(m,{name:`PfWizardHeader`}),s(m,{name:`PfWizardNav`}),s(m,{name:`PfWizardNavItem`})]),default:t(()=>[c[76]||=i(`div`,{class:`markdown pf-v6-c-content`},[i(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),i(`ul`,null,[i(`li`,null,[d(`Sub-steps are `),i(`code`,null,`pf-wizard-step`),d(` components nested in their parent `),i(`code`,null,`pf-wizard-step`),d(`, instead of its `),i(`code`,null,`steps`),d(` prop. Any other content of a parent step is ignored, as parent steps are never active.`)]),i(`li`,null,[i(`code`,null,`footer`),d(` is the `),i(`code`,null,`footer-attrs`),d(` prop, with the props of `),i(`code`,null,`pf-wizard-footer`),d(` and its `),i(`code`,null,`onNext`),d(`, `),i(`code`,null,`onBack`),d(` and `),i(`code`,null,`onClose`),d(` handlers, or the `),i(`code`,null,`#footer`),d(` slot, which receives `),i(`code`,null,`activeStep`),d(`, `),i(`code`,null,`goToNextStep`),d(`, `),i(`code`,null,`goToPrevStep`),d(` and `),i(`code`,null,`close`),d(`. The same goes for `),i(`code`,null,`pf-wizard-step`),d(`: its `),i(`code`,null,`footer-attrs`),d(` are merged over the ones of the wizard instead of replacing them.`)]),i(`li`,null,[i(`code`,null,`nav`),d(` is the `),i(`code`,null,`nav-attrs`),d(` prop (`),i(`code`,null,`aria-label`),d(`, `),i(`code`,null,`aria-labelledby`),d(`) or the `),i(`code`,null,`#nav`),d(` slot, which receives `),i(`code`,null,`expanded`),d(`, `),i(`code`,null,`steps`),d(`, `),i(`code`,null,`activeStep`),d(` and `),i(`code`,null,`goToStepByIndex`),d(`.`)]),i(`li`,null,[d(`The `),i(`code`,null,`navItem`),d(` of a step is its `),i(`code`,null,`nav-item-attrs`),d(` prop or its `),i(`code`,null,`#nav-item`),d(` slot, which receives `),i(`code`,null,`step`),d(`, `),i(`code`,null,`activeStep`),d(`, `),i(`code`,null,`steps`),d(` and `),i(`code`,null,`goToStepByIndex`),d(`; `),i(`code`,null,`body`),d(` is `),i(`code`,null,`body-attrs`),d(`.`)]),i(`li`,null,[d(`The `),i(`code`,null,`name`),d(` of a step is a string; the `),i(`code`,null,`#name`),d(` slot of the step renders rich content in its navigation item and in the toggle.`)]),i(`li`,null,[i(`code`,null,`onSave`),d(` and `),i(`code`,null,`onClose`),d(` are the `),i(`code`,null,`@save`),d(` and `),i(`code`,null,`@close`),d(` listeners, `),i(`code`,null,`onStepChange`),d(` the `),i(`code`,null,`step-change`),d(` event. The scope of a step change is the string `),i(`code`,null,`'next'`),d(`, `),i(`code`,null,`'back'`),d(` or `),i(`code`,null,`'nav'`),d(`.`)]),i(`li`,null,[i(`code`,null,`shouldFocusContent`),d(` is inverted into `),i(`code`,null,`no-focus-content`),d(`; `),i(`code`,null,`isVisitRequired`),d(`, `),i(`code`,null,`isProgressive`),d(`, `),i(`code`,null,`isPlain`),d(` and `),i(`code`,null,`isNoPlainOnGlass`),d(` are `),i(`code`,null,`visit-required`),d(`, `),i(`code`,null,`progressive`),d(`, `),i(`code`,null,`plain`),d(` and `),i(`code`,null,`no-plain-on-glass`),d(`.`)]),i(`li`,null,[d(`The step flags drop their prefix: `),i(`code`,null,`disabled`),d(`, `),i(`code`,null,`hidden`),d(`, `),i(`code`,null,`expandable`),d(`, and `),i(`code`,null,`visited`),d(` in the step objects.`)]),i(`li`,null,[i(`code`,null,`toggle-aria-label`),d(` sets the aria-label of the toggle expanding the navigation on small screens. `),i(`code`,null,`WizardToggle`),d(` is internal to `),i(`code`,null,`pf-wizard`),d(`.`)]),i(`li`,null,[i(`code`,null,`useWizardContext`),d(` returns refs (`),i(`code`,null,`steps`),d(`, `),i(`code`,null,`activeStep`),d(`, `),i(`code`,null,`shouldFocusContent`),d(`, `),i(`code`,null,`mainWrapperRef`),d(`) and the navigation helpers. React's `),i(`code`,null,`useWizardFooter`),d(` hook is the `),i(`code`,null,`pf-wizard-step-footer`),d(` component.`)]),i(`li`,null,[i(`code`,null,`pf-wizard-footer`),d(` emits `),i(`code`,null,`next`),d(`, `),i(`code`,null,`back`),d(` and `),i(`code`,null,`close`),d(` and takes no `),i(`code`,null,`activeStep`),d(`; its button props are `),i(`code`,null,`next-button-attrs`),d(`, `),i(`code`,null,`back-button-attrs`),d(` and `),i(`code`,null,`cancel-button-attrs`),d(`, and the flags are `),i(`code`,null,`next-disabled`),d(`, `),i(`code`,null,`back-disabled`),d(`, `),i(`code`,null,`back-hidden`),d(` and `),i(`code`,null,`cancel-hidden`),d(`.`)]),i(`li`,null,[i(`code`,null,`pf-wizard-header`),d(` emits `),i(`code`,null,`close`),d(`; `),i(`code`,null,`isCloseHidden`),d(` is `),i(`code`,null,`close-hidden`),d(`. The title and description can also be passed as slots.`)]),i(`li`,null,[i(`code`,null,`pf-wizard-nav-item`),d(` emits `),i(`code`,null,`click`),d(` with the event and the step index. Its `),i(`code`,null,`content`),d(` can be passed as a slot, and the default slot holds the nested `),i(`code`,null,`pf-wizard-nav`),d(` with `),i(`code`,null,`inner-list`),d(`. See `),i(`a`,{href:`#/`},`common differences from patternfly-react`),d(`.`)])]),i(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),s(A,{title:`Basic`,source:`<pf-wizard :height="400" title="Basic wizard">
  <pf-wizard-step name="Step 1" id="basic-first-step">
    <p>
      The content of this step overflows and creates a scrollbar, which causes a tabindex of "0", a role of
      "region", and an aria-label or aria-labelledby to be applied.
    </p>
    <p>{{ lorem1 }}</p>
    <p>{{ lorem2 }}</p>
  </pf-wizard-step>
  <pf-wizard-step name="Step 2" id="basic-second-step">Step 2 content</pf-wizard-step>
  <pf-wizard-step name="Review" id="basic-review-step" :footer-attrs="{ nextButtonText: 'Finish' }">
    Review step content
  </pf-wizard-step>
</pf-wizard>`},{default:t(()=>[s(k,{height:400,title:`Basic wizard`},{default:t(()=>[s(_,{name:`Step 1`,id:`basic-first-step`},{default:t(()=>[c[11]||=i(`p`,null,` The content of this step overflows and creates a scrollbar, which causes a tabindex of "0", a role of "region", and an aria-label or aria-labelledby to be applied. `,-1),i(`p`,null,r(y)),i(`p`,null,r(b))]),_:1}),s(_,{name:`Step 2`,id:`basic-second-step`},{default:t(()=>[...c[12]||=[d(`Step 2 content`,-1)]]),_:1}),s(_,{name:`Review`,id:`basic-review-step`,"footer-attrs":{nextButtonText:`Finish`}},{default:t(()=>[...c[13]||=[d(` Review step content `,-1)]]),_:1})]),_:1})]),_:1}),s(A,{title:`Plain`,source:`<pf-wizard :height="400" title="Plain wizard" plain>
  <pf-wizard-step name="Step 1" id="plain-first-step"><p>Step 1 content</p></pf-wizard-step>
  <pf-wizard-step name="Step 2" id="plain-second-step"><p>Step 2 content</p></pf-wizard-step>
  <pf-wizard-step name="Review" id="plain-review-step" :footer-attrs="{ nextButtonText: 'Finish' }">
    <p>Review step content</p>
  </pf-wizard-step>
</pf-wizard>`},{default:t(()=>[s(k,{height:400,title:`Plain wizard`,plain:``},{default:t(()=>[s(_,{name:`Step 1`,id:`plain-first-step`},{default:t(()=>[...c[14]||=[i(`p`,null,`Step 1 content`,-1)]]),_:1}),s(_,{name:`Step 2`,id:`plain-second-step`},{default:t(()=>[...c[15]||=[i(`p`,null,`Step 2 content`,-1)]]),_:1}),s(_,{name:`Review`,id:`plain-review-step`,"footer-attrs":{nextButtonText:`Finish`}},{default:t(()=>[...c[16]||=[i(`p`,null,`Review step content`,-1)]]),_:1})]),_:1})]),_:1}),s(A,{title:`Focus content on next/back`,source:`<pf-wizard title="Wizard that focuses content on next or back click">
  <pf-wizard-step name="Step 1" id="wizard-focus-first-step">Step 1 content</pf-wizard-step>
  <pf-wizard-step name="Step 2" id="wizard-focus-second-step">Step 2 content</pf-wizard-step>
  <pf-wizard-step name="Review" id="wizard-focus-review-step" :footer-attrs="{ nextButtonText: 'Finish' }">
    Review step content
  </pf-wizard-step>
</pf-wizard>`},{intro:t(()=>[...c[17]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,[d(`The main content element of the `),i(`code`,null,`pf-wizard`),d(` is focused when navigating with the next and back buttons, so that users can navigate through the content of a `),i(`code`,null,`pf-wizard-step`),d(` in order. Pass the `),i(`code`,null,`no-focus-content`),d(` property to disable this behavior.`)])],-1)]]),default:t(()=>[s(k,{title:`Wizard that focuses content on next or back click`},{default:t(()=>[s(_,{name:`Step 1`,id:`wizard-focus-first-step`},{default:t(()=>[...c[18]||=[d(`Step 1 content`,-1)]]),_:1}),s(_,{name:`Step 2`,id:`wizard-focus-second-step`},{default:t(()=>[...c[19]||=[d(`Step 2 content`,-1)]]),_:1}),s(_,{name:`Review`,id:`wizard-focus-review-step`,"footer-attrs":{nextButtonText:`Finish`}},{default:t(()=>[...c[20]||=[d(` Review step content `,-1)]]),_:1})]),_:1})]),_:1}),s(A,{title:`Basic with disabled steps`,source:`<pf-wizard :height="400" title="Basic disabled wizard">
  <pf-wizard-step name="Step 1" id="bdisabled-first-step">Step 1 content</pf-wizard-step>
  <pf-wizard-step name="Step 2" id="bdisabled-second-step" disabled>Step 2 content</pf-wizard-step>
  <pf-wizard-step name="Step 3" id="bdisabled-third-step">Step 3 content</pf-wizard-step>
  <pf-wizard-step name="Step 4" id="bdisabled-fourth-step" disabled>Step 4 content</pf-wizard-step>
  <pf-wizard-step name="Review" id="bdisabled-review-step" :footer-attrs="{ nextButtonText: 'Finish' }">
    Review step content
  </pf-wizard-step>
</pf-wizard>`},{default:t(()=>[s(k,{height:400,title:`Basic disabled wizard`},{default:t(()=>[s(_,{name:`Step 1`,id:`bdisabled-first-step`},{default:t(()=>[...c[21]||=[d(`Step 1 content`,-1)]]),_:1}),s(_,{name:`Step 2`,id:`bdisabled-second-step`,disabled:``},{default:t(()=>[...c[22]||=[d(`Step 2 content`,-1)]]),_:1}),s(_,{name:`Step 3`,id:`bdisabled-third-step`},{default:t(()=>[...c[23]||=[d(`Step 3 content`,-1)]]),_:1}),s(_,{name:`Step 4`,id:`bdisabled-fourth-step`,disabled:``},{default:t(()=>[...c[24]||=[d(`Step 4 content`,-1)]]),_:1}),s(_,{name:`Review`,id:`bdisabled-review-step`,"footer-attrs":{nextButtonText:`Finish`}},{default:t(()=>[...c[25]||=[d(` Review step content `,-1)]]),_:1})]),_:1})]),_:1}),s(A,{title:`Anchors for nav items`,source:`<pf-wizard :height="400" title="Anchor link wizard">
  <pf-wizard-step
    id="navanchors-pf3-step"
    :nav-item-attrs="{ component: 'a', href: 'https://www.patternfly.org/v3', target: '_blank' }"
  >
    <template #name><up-right-from-square-icon /> PF3</template>
    Step 1: Read about PF3
  </pf-wizard-step>
  <pf-wizard-step
    id="navanchors-pf4-step"
    :nav-item-attrs="{ component: 'a', href: 'https://www.patternfly.org/v4', target: '_blank' }"
  >
    <template #name><up-right-from-square-icon /> PF4</template>
    Step 2: Read about PF4
  </pf-wizard-step>
  <pf-wizard-step
    id="navanchors-slack-step"
    :nav-item-attrs="{ component: 'a', href: 'https://patternfly.slack.com', target: '_blank' }"
  >
    <template #name><hashtag-icon /> Join us on slack</template>
    <pf-button variant="link" component="a" target="_blank" href="https://patternfly.slack.com">
      Join the conversation
    </pf-button>
  </pf-wizard-step>
</pf-wizard>`},{default:t(()=>[s(k,{height:400,title:`Anchor link wizard`},{default:t(()=>[s(_,{id:`navanchors-pf3-step`,"nav-item-attrs":{component:`a`,href:`https://www.patternfly.org/v3`,target:`_blank`}},{name:t(()=>[s(p(h)),c[26]||=d(` PF3`,-1)]),default:t(()=>[c[27]||=d(` Step 1: Read about PF3 `,-1)]),_:1}),s(_,{id:`navanchors-pf4-step`,"nav-item-attrs":{component:`a`,href:`https://www.patternfly.org/v4`,target:`_blank`}},{name:t(()=>[s(p(h)),c[28]||=d(` PF4`,-1)]),default:t(()=>[c[29]||=d(` Step 2: Read about PF4 `,-1)]),_:1}),s(_,{id:`navanchors-slack-step`,"nav-item-attrs":{component:`a`,href:`https://patternfly.slack.com`,target:`_blank`}},{name:t(()=>[s(p(v)),c[30]||=d(` Join us on slack`,-1)]),default:t(()=>[s(j,{variant:`link`,component:`a`,target:`_blank`,href:`https://patternfly.slack.com`},{default:t(()=>[...c[31]||=[d(` Join the conversation `,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),s(A,{title:`Incrementally enabled steps`,source:`<pf-wizard :height="400" title="Incrementally enabled steps wizard" visit-required>
  <pf-wizard-step name="Step 1" id="req-visit-first-step">Step 1 content</pf-wizard-step>
  <pf-wizard-step name="Step 2" id="req-visit-second-step">Step 2 content</pf-wizard-step>
  <pf-wizard-step name="Step 3" id="req-visit-third-step">Step 3 content</pf-wizard-step>
  <pf-wizard-step name="Step 4" id="req-visit-fourth-step">Step 4 content</pf-wizard-step>
  <pf-wizard-step name="Review" id="req-visit-review-step" :footer-attrs="{ nextButtonText: 'Finish' }">
    Review step content
  </pf-wizard-step>
</pf-wizard>`},{default:t(()=>[s(k,{height:400,title:`Incrementally enabled steps wizard`,"visit-required":``},{default:t(()=>[s(_,{name:`Step 1`,id:`req-visit-first-step`},{default:t(()=>[...c[32]||=[d(`Step 1 content`,-1)]]),_:1}),s(_,{name:`Step 2`,id:`req-visit-second-step`},{default:t(()=>[...c[33]||=[d(`Step 2 content`,-1)]]),_:1}),s(_,{name:`Step 3`,id:`req-visit-third-step`},{default:t(()=>[...c[34]||=[d(`Step 3 content`,-1)]]),_:1}),s(_,{name:`Step 4`,id:`req-visit-fourth-step`},{default:t(()=>[...c[35]||=[d(`Step 4 content`,-1)]]),_:1}),s(_,{name:`Review`,id:`req-visit-review-step`,"footer-attrs":{nextButtonText:`Finish`}},{default:t(()=>[...c[36]||=[d(` Review step content `,-1)]]),_:1})]),_:1})]),_:1}),s(A,{title:`Expandable steps`,source:`<pf-wizard :height="400" title="Expandable steps wizard">
  <pf-wizard-step name="Step 1" id="expand-steps-1" expandable>
    <pf-wizard-step name="Substep A" id="expand-steps-sub-a">Substep A content</pf-wizard-step>
    <pf-wizard-step name="Substep B" id="expand-steps-sub-b">Substep B content</pf-wizard-step>
  </pf-wizard-step>
  <pf-wizard-step name="Step 2" id="expand-steps-2">Step 2 content</pf-wizard-step>
  <pf-wizard-step name="Step 3" id="expand-steps-3" expandable>
    <pf-wizard-step name="Substep C" id="expand-steps-sub-c">Substep C content</pf-wizard-step>
    <pf-wizard-step name="Substep D" id="expand-steps-sub-d">Substep D content</pf-wizard-step>
  </pf-wizard-step>
  <pf-wizard-step name="Step 4" id="expand-steps-4">Step 4 content</pf-wizard-step>
  <pf-wizard-step name="Review" id="expand-steps-review" :footer-attrs="{ nextButtonText: 'Finish' }">
    Review step content
  </pf-wizard-step>
</pf-wizard>`},{default:t(()=>[s(k,{height:400,title:`Expandable steps wizard`},{default:t(()=>[s(_,{name:`Step 1`,id:`expand-steps-1`,expandable:``},{default:t(()=>[s(_,{name:`Substep A`,id:`expand-steps-sub-a`},{default:t(()=>[...c[37]||=[d(`Substep A content`,-1)]]),_:1}),s(_,{name:`Substep B`,id:`expand-steps-sub-b`},{default:t(()=>[...c[38]||=[d(`Substep B content`,-1)]]),_:1})]),_:1}),s(_,{name:`Step 2`,id:`expand-steps-2`},{default:t(()=>[...c[39]||=[d(`Step 2 content`,-1)]]),_:1}),s(_,{name:`Step 3`,id:`expand-steps-3`,expandable:``},{default:t(()=>[s(_,{name:`Substep C`,id:`expand-steps-sub-c`},{default:t(()=>[...c[40]||=[d(`Substep C content`,-1)]]),_:1}),s(_,{name:`Substep D`,id:`expand-steps-sub-d`},{default:t(()=>[...c[41]||=[d(`Substep D content`,-1)]]),_:1})]),_:1}),s(_,{name:`Step 4`,id:`expand-steps-4`},{default:t(()=>[...c[42]||=[d(`Step 4 content`,-1)]]),_:1}),s(_,{name:`Review`,id:`expand-steps-review`,"footer-attrs":{nextButtonText:`Finish`}},{default:t(()=>[...c[43]||=[d(` Review step content `,-1)]]),_:1})]),_:1})]),_:1}),s(A,{title:`Progress after submission`,src:`stories/Components/Wizard-SubmitProgress.vue`,source:`<template>
  <validation-progress v-if="submitted" @close="onClose" />
  <pf-wizard v-else :height="400" title="Submit progress wizard" @close="onClose">
    <pf-wizard-step name="Step 1" id="submit-progress-step-1">Step 1 content</pf-wizard-step>
    <pf-wizard-step name="Step 2" id="submit-progress-step-2">Step 2 content</pf-wizard-step>
    <pf-wizard-step
      name="Review"
      id="submit-progress-review"
      :footer-attrs="{ nextButtonText: 'Finish', onNext: () => (submitted = true) }"
    >
      Review step content
    </pf-wizard-step>
  </pf-wizard>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import ValidationProgress from './Wizard-ValidationProgress.vue';

const submitted = ref(false);

const onClose = () => console.log('Some close action occurs here.');
<\/script>`}),s(A,{title:`Enabled on form validation`,source:`<pf-wizard visit-required :height="400" title="Enabled on form validation wizard" @save="onSaveAge">
  <pf-wizard-step name="Information" id="form-valid-info">Information content</pf-wizard-step>
  <pf-wizard-step name="Configuration" id="form-valid-config">
    <pf-wizard-step
      name="Substep A with validation"
      id="form-valid-sub-a"
      :footer-attrs="{ nextDisabled: !ageValid }"
    >
      <pf-form>
        <pf-form-group label="Age:" field-id="form-valid-age">
          <pf-text-input
            id="form-valid-age"
            v-model="age"
            :validated="ageValid ? 'default' : 'error'"
            aria-describedby="form-valid-age-helper" />
          <pf-form-helper-text>
            <pf-helper-text>
              <pf-helper-text-item id="form-valid-age-helper" :variant="ageValid ? 'default' : 'error'">
                {{ ageValid ? 'Write your age in numbers.' : 'Age has to be a number' }}
              </pf-helper-text-item>
            </pf-helper-text>
          </pf-form-helper-text>
        </pf-form-group>
      </pf-form>
    </pf-wizard-step>
    <pf-wizard-step name="Substep B" id="form-valid-sub-b">Substep B content</pf-wizard-step>
  </pf-wizard-step>
  <pf-wizard-step name="Additional" id="form-valid-additional">Additional step content</pf-wizard-step>
  <pf-wizard-step name="Review" id="form-valid-review" :footer-attrs="{ nextButtonText: 'Submit form' }" />
</pf-wizard>`},{default:t(()=>[s(k,{"visit-required":``,height:400,title:`Enabled on form validation wizard`,onSave:w},{default:t(()=>[s(_,{name:`Information`,id:`form-valid-info`},{default:t(()=>[...c[44]||=[d(`Information content`,-1)]]),_:1}),s(_,{name:`Configuration`,id:`form-valid-config`},{default:t(()=>[s(_,{name:`Substep A with validation`,id:`form-valid-sub-a`,"footer-attrs":{nextDisabled:!C.value}},{default:t(()=>[s(L,null,{default:t(()=>[s(I,{label:`Age:`,"field-id":`form-valid-age`},{default:t(()=>[s(M,{id:`form-valid-age`,modelValue:S.value,"onUpdate:modelValue":c[0]||=e=>S.value=e,validated:C.value?`default`:`error`,"aria-describedby":`form-valid-age-helper`},null,8,[`modelValue`,`validated`]),s(F,null,{default:t(()=>[s(P,null,{default:t(()=>[s(N,{id:`form-valid-age-helper`,variant:C.value?`default`:`error`},{default:t(()=>[d(r(C.value?`Write your age in numbers.`:`Age has to be a number`),1)]),_:1},8,[`variant`])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,[`footer-attrs`]),s(_,{name:`Substep B`,id:`form-valid-sub-b`},{default:t(()=>[...c[45]||=[d(`Substep B content`,-1)]]),_:1})]),_:1}),s(_,{name:`Additional`,id:`form-valid-additional`},{default:t(()=>[...c[46]||=[d(`Additional step content`,-1)]]),_:1}),s(_,{name:`Review`,id:`form-valid-review`,"footer-attrs":{nextButtonText:`Submit form`}})]),_:1})]),_:1}),s(A,{title:`Validate on button press`,src:`stories/Components/Wizard-ValidateOnButtonPress.vue`,source:`<template>
  <validation-progress v-if="submitted && firstStepValid" @close="onClose" />
  <pf-wizard v-else title="Validate on button press wizard" :height="400" @close="onClose">
    <pf-wizard-step name="Step 1" id="validate-btn-step-1">Step 1 content</pf-wizard-step>
    <pf-wizard-step name="Step 2" id="validate-btn-step-2">Step 2 content</pf-wizard-step>
    <pf-wizard-step name="Final Step" id="validate-btn-finish-step">
      <div v-if="errorOnSubmit" style="padding: 15px 0">
        <pf-alert inline variant="danger" title="Validation failed, please try again." />
      </div>
      <pf-form>
        <pf-form-group label="Age:" field-id="validate-btn-age">
          <pf-text-input
            id="validate-btn-age"
            v-model="age"
            :validated="!errorOnSubmit || firstStepValid ? 'default' : 'error'"
            aria-describedby="validate-btn-age-helper"
          />
          <pf-form-helper-text>
            <pf-helper-text>
              <pf-helper-text-item
                id="validate-btn-age-helper"
                :variant="!errorOnSubmit || firstStepValid ? 'default' : 'error'"
              >
                {{ !errorOnSubmit || firstStepValid ? 'Write your age in numbers.' : 'Age has to be a number' }}
              </pf-helper-text-item>
            </pf-helper-text>
          </pf-form-helper-text>
        </pf-form-group>
      </pf-form>

      <template #footer="{ goToNextStep, goToPrevStep }">
        <pf-wizard-footer-wrapper>
          <pf-action-list>
            <pf-action-list-group>
              <pf-action-list-item>
                <pf-button variant="secondary" @click="goToPrevStep">Back</pf-button>
              </pf-action-list-item>
              <pf-action-list-item>
                <pf-button @click="onValidate(goToNextStep)">Validate</pf-button>
              </pf-action-list-item>
            </pf-action-list-group>
          </pf-action-list>
        </pf-wizard-footer-wrapper>
      </template>
    </pf-wizard-step>
  </pf-wizard>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import ValidationProgress from './Wizard-ValidationProgress.vue';

const age = ref('Thirty');
const submitted = ref(false);
const errorOnSubmit = ref(false);
const firstStepValid = computed(() => /^\\d+$/.test(age.value));

const onClose = () => console.log('Some close action occurs here.');

function onValidate(goToNextStep: () => void) {
  submitted.value = true;
  if (!firstStepValid.value) {
    submitted.value = false;
    errorOnSubmit.value = true;
  } else {
    goToNextStep();
  }
}
<\/script>`}),s(A,{title:`Progressive steps`,source:`<pf-wizard :height="400" title="Progressive steps wizard" progressive>
  <pf-wizard-step id="progressive-step-1" name="Get started">Get started content</pf-wizard-step>
  <pf-wizard-step id="progressive-step-2" name="Update options">Update options content</pf-wizard-step>
  <pf-wizard-step id="progressive-step-3" name="Quick options">
    <pf-wizard-step id="progressive-substep-1" name="Substep 1">Substep 1 content</pf-wizard-step>
    <pf-wizard-step id="progressive-substep-2" name="Substep 2">Substep 2 content</pf-wizard-step>
    <pf-wizard-step id="progressive-substep-3" name="Substep 3">Substep 3 content</pf-wizard-step>
  </pf-wizard-step>
  <pf-wizard-step id="progressive-step-4" name="Review" :footer-attrs="{ nextButtonText: 'Finish' }">
    Review content
  </pf-wizard-step>
</pf-wizard>`},{default:t(()=>[s(k,{height:400,title:`Progressive steps wizard`,progressive:``},{default:t(()=>[s(_,{id:`progressive-step-1`,name:`Get started`},{default:t(()=>[...c[47]||=[d(`Get started content`,-1)]]),_:1}),s(_,{id:`progressive-step-2`,name:`Update options`},{default:t(()=>[...c[48]||=[d(`Update options content`,-1)]]),_:1}),s(_,{id:`progressive-step-3`,name:`Quick options`},{default:t(()=>[s(_,{id:`progressive-substep-1`,name:`Substep 1`},{default:t(()=>[...c[49]||=[d(`Substep 1 content`,-1)]]),_:1}),s(_,{id:`progressive-substep-2`,name:`Substep 2`},{default:t(()=>[...c[50]||=[d(`Substep 2 content`,-1)]]),_:1}),s(_,{id:`progressive-substep-3`,name:`Substep 3`},{default:t(()=>[...c[51]||=[d(`Substep 3 content`,-1)]]),_:1})]),_:1}),s(_,{id:`progressive-step-4`,name:`Review`,"footer-attrs":{nextButtonText:`Finish`}},{default:t(()=>[...c[52]||=[d(` Review content `,-1)]]),_:1})]),_:1})]),_:1}),s(A,{title:`Get current step`,source:`<define-current-step>
  <pf-description-list horizontal compact :aria-label="\`\${currentStep?.name} prop data\`">
    <pf-description-list-group>
      <pf-description-list-term>Index</pf-description-list-term>
      <pf-description-list-description>{{ currentStep?.index }}</pf-description-list-description>
    </pf-description-list-group>
    <pf-description-list-group>
      <pf-description-list-term>ID</pf-description-list-term>
      <pf-description-list-description>{{ currentStep?.id }}</pf-description-list-description>
    </pf-description-list-group>
    <pf-description-list-group>
      <pf-description-list-term>Name</pf-description-list-term>
      <pf-description-list-description>{{ currentStep?.name }}</pf-description-list-description>
    </pf-description-list-group>
    <pf-description-list-group>
      <pf-description-list-term>Visited</pf-description-list-term>
      <pf-description-list-description>{{
        currentStep?.visited ? 'true' : 'false'
      }}</pf-description-list-description>
    </pf-description-list-group>
  </pf-description-list>
</define-current-step>

<pf-wizard :height="400" title="Get current step wizard" @step-change="(_event, step) => (currentStep = step)">
  <pf-wizard-step name="Step 1" id="get-current-step-1">
    <reuse-current-step v-if="currentStep" />
    <template v-else>Step 1 content</template>
  </pf-wizard-step>
  <pf-wizard-step name="Step 2" id="get-current-step-2" disabled>
    <pf-wizard-step name="Substep 1" id="get-current-substep-1"><reuse-current-step /></pf-wizard-step>
    <pf-wizard-step name="Substep 2" id="get-current-substep-2"><reuse-current-step /></pf-wizard-step>
  </pf-wizard-step>
  <pf-wizard-step name="Step 3" id="get-current-step-3">
    <pf-wizard-step name="Substep 3" id="get-current-substep-3"><reuse-current-step /></pf-wizard-step>
    <pf-wizard-step name="Substep 4" id="get-current-substep-4"><reuse-current-step /></pf-wizard-step>
  </pf-wizard-step>
  <pf-wizard-step name="Step 4" id="get-current-step-4">
    <pf-wizard-step name="Substep 5" id="get-current-substep-5" hidden><reuse-current-step /></pf-wizard-step>
    <pf-wizard-step name="Substep 6" id="get-current-substep-6"><reuse-current-step /></pf-wizard-step>
  </pf-wizard-step>
  <pf-wizard-step name="Review" id="get-current-review-step" :footer-attrs="{ nextButtonText: 'Finish' }">
    <reuse-current-step />
  </pf-wizard-step>
</pf-wizard>`},{default:t(()=>[s(p(g),null,{default:t(()=>[s(V,{horizontal:``,compact:``,"aria-label":`${T.value?.name} prop data`},{default:t(()=>[s(B,null,{default:t(()=>[s(R,null,{default:t(()=>[...c[53]||=[d(`Index`,-1)]]),_:1}),s(z,null,{default:t(()=>[d(r(T.value?.index),1)]),_:1})]),_:1}),s(B,null,{default:t(()=>[s(R,null,{default:t(()=>[...c[54]||=[d(`ID`,-1)]]),_:1}),s(z,null,{default:t(()=>[d(r(T.value?.id),1)]),_:1})]),_:1}),s(B,null,{default:t(()=>[s(R,null,{default:t(()=>[...c[55]||=[d(`Name`,-1)]]),_:1}),s(z,null,{default:t(()=>[d(r(T.value?.name),1)]),_:1})]),_:1}),s(B,null,{default:t(()=>[s(R,null,{default:t(()=>[...c[56]||=[d(`Visited`,-1)]]),_:1}),s(z,null,{default:t(()=>[d(r(T.value?.visited?`true`:`false`),1)]),_:1})]),_:1})]),_:1},8,[`aria-label`])]),_:1}),s(k,{height:400,title:`Get current step wizard`,onStepChange:c[1]||=(e,t)=>T.value=t},{default:t(()=>[s(_,{name:`Step 1`,id:`get-current-step-1`},{default:t(()=>[T.value?(l(),u(p(x),{key:0})):(l(),a(f,{key:1},[d(`Step 1 content`)],64))]),_:1}),s(_,{name:`Step 2`,id:`get-current-step-2`,disabled:``},{default:t(()=>[s(_,{name:`Substep 1`,id:`get-current-substep-1`},{default:t(()=>[s(p(x))]),_:1}),s(_,{name:`Substep 2`,id:`get-current-substep-2`},{default:t(()=>[s(p(x))]),_:1})]),_:1}),s(_,{name:`Step 3`,id:`get-current-step-3`},{default:t(()=>[s(_,{name:`Substep 3`,id:`get-current-substep-3`},{default:t(()=>[s(p(x))]),_:1}),s(_,{name:`Substep 4`,id:`get-current-substep-4`},{default:t(()=>[s(p(x))]),_:1})]),_:1}),s(_,{name:`Step 4`,id:`get-current-step-4`},{default:t(()=>[s(_,{name:`Substep 5`,id:`get-current-substep-5`,hidden:``},{default:t(()=>[s(p(x))]),_:1}),s(_,{name:`Substep 6`,id:`get-current-substep-6`},{default:t(()=>[s(p(x))]),_:1})]),_:1}),s(_,{name:`Review`,id:`get-current-review-step`,"footer-attrs":{nextButtonText:`Finish`}},{default:t(()=>[s(p(x))]),_:1})]),_:1})]),_:1}),s(A,{title:`Within modal`,source:`<pf-button @click="modalOpen = true">Show Modal</pf-button>

<pf-modal v-model:open="modalOpen" aria-label="Wizard modal" variant="medium" no-body-wrapper no-close>
  <pf-wizard :height="400" title="In modal wizard" @close="modalOpen = false">
    <template #header>
      <pf-wizard-header
        title="Wizard in modal"
        description="Simple wizard description"
        close-button-aria-label="Close wizard"
        @close="modalOpen = false" />
    </template>
    <pf-wizard-step name="Step 1" id="in-modal-step-1">Step 1 content</pf-wizard-step>
    <pf-wizard-step name="Step 2" id="in-modal-step-2">Step 2 content</pf-wizard-step>
    <pf-wizard-step
      name="Review"
      id="in-modal-review-step"
      :footer-attrs="{ nextButtonText: 'Finish', onNext: () => (modalOpen = false) }"
    >
      Review step content
    </pf-wizard-step>
  </pf-wizard>
</pf-modal>`},{default:t(()=>[s(j,{onClick:c[2]||=e=>E.value=!0},{default:t(()=>[...c[57]||=[d(`Show Modal`,-1)]]),_:1}),s(U,{open:E.value,"onUpdate:open":c[5]||=e=>E.value=e,"aria-label":`Wizard modal`,variant:`medium`,"no-body-wrapper":``,"no-close":``},{default:t(()=>[s(k,{height:400,title:`In modal wizard`,onClose:c[4]||=e=>E.value=!1},{header:t(()=>[s(H,{title:`Wizard in modal`,description:`Simple wizard description`,"close-button-aria-label":`Close wizard`,onClose:c[3]||=e=>E.value=!1})]),default:t(()=>[s(_,{name:`Step 1`,id:`in-modal-step-1`},{default:t(()=>[...c[58]||=[d(`Step 1 content`,-1)]]),_:1}),s(_,{name:`Step 2`,id:`in-modal-step-2`},{default:t(()=>[...c[59]||=[d(`Step 2 content`,-1)]]),_:1}),s(_,{name:`Review`,id:`in-modal-review-step`,"footer-attrs":{nextButtonText:`Finish`,onNext:()=>E.value=!1}},{default:t(()=>[...c[60]||=[d(` Review step content `,-1)]]),_:1},8,[`footer-attrs`])]),_:1})]),_:1},8,[`open`])]),_:1}),s(A,{title:`Step drawer content`,src:`stories/Components/Wizard-StepDrawerContent.vue`,source:`<template>
  <pf-wizard :height="400" title="With drawer wizard">
    <pf-wizard-step :body-attrs="{ noPadding: true }" name="Step 1" id="with-drawer-step-1">
      <drawer-step-content />
    </pf-wizard-step>
    <pf-wizard-step name="Step 2" id="with-drawer-step-2">
      <pf-wizard-step :body-attrs="{ noPadding: true }" name="Substep 1" id="with-drawer-substep-1">
        <drawer-step-content />
      </pf-wizard-step>
      <pf-wizard-step :body-attrs="{ noPadding: true }" name="Substep 2" id="with-drawer-substep-2">
        <drawer-step-content />
      </pf-wizard-step>
    </pf-wizard-step>
    <pf-wizard-step name="Review" id="with-drawer-review-step" :footer-attrs="{ nextButtonText: 'Finish' }">
      Review step content
    </pf-wizard-step>
  </pf-wizard>
</template>

<script lang="ts" setup>
import DrawerStepContent from './Wizard-DrawerStepContent.vue';
<\/script>`}),s(A,{title:`Custom navigation`,source:`<pf-wizard :height="400">
  <template #nav="{ expanded, steps, activeStep, goToStepByIndex }">
    <pf-wizard-nav :expanded="expanded">
      <pf-wizard-nav-item
        v-for="step in steps"
        :id="String(step.id)"
        :key="step.id"
        :content="step.name"
        :current="activeStep?.id === step.id"
        :disabled="step.disabled"
        :step-index="step.index"
        @click="goToStepByIndex(step.index)" />
    </pf-wizard-nav>
  </template>
  <pf-wizard-step name="Step 1" id="custom-nav-first-step">Did you say...custom nav?</pf-wizard-step>
  <pf-wizard-step name="Step 2" id="custom-nav-second-step">Oh, you didn't?</pf-wizard-step>
  <pf-wizard-step name="Review" id="custom-nav-review-step" :footer-attrs="{ nextButtonText: 'Wrap it up' }">
    Well, this is awkward.
  </pf-wizard-step>
</pf-wizard>`},{default:t(()=>[s(k,{height:400},{nav:t(({expanded:e,steps:r,activeStep:i,goToStepByIndex:o})=>[s(G,{expanded:e},{default:t(()=>[(l(!0),a(f,null,n(r,e=>(l(),u(W,{id:String(e.id),key:e.id,content:e.name,current:i?.id===e.id,disabled:e.disabled,"step-index":e.index,onClick:t=>o(e.index)},null,8,[`id`,`content`,`current`,`disabled`,`step-index`,`onClick`]))),128))]),_:2},1032,[`expanded`])]),default:t(()=>[s(_,{name:`Step 1`,id:`custom-nav-first-step`},{default:t(()=>[...c[61]||=[d(`Did you say...custom nav?`,-1)]]),_:1}),s(_,{name:`Step 2`,id:`custom-nav-second-step`},{default:t(()=>[...c[62]||=[d(`Oh, you didn't?`,-1)]]),_:1}),s(_,{name:`Review`,id:`custom-nav-review-step`,"footer-attrs":{nextButtonText:`Wrap it up`}},{default:t(()=>[...c[63]||=[d(` Well, this is awkward. `,-1)]]),_:1})]),_:1})]),_:1}),s(A,{title:`Header`,source:`<pf-wizard :height="400" title="Header wizard">
  <template #header>
    <pf-wizard-header
      title="You're a wizard, Harry"
      description="To be clear, all those not named Harry are not wizards."
      close-button-aria-label="Close header" />
  </template>
  <pf-wizard-step name="Step 1" id="header-first-step">Step 1 content</pf-wizard-step>
  <pf-wizard-step name="Step 2" id="header-second-step">Step 2 content</pf-wizard-step>
  <pf-wizard-step name="Review" id="header-review-step" :footer-attrs="{ nextButtonText: 'Finish' }">
    Review step content
  </pf-wizard-step>
</pf-wizard>`},{default:t(()=>[s(k,{height:400,title:`Header wizard`},{header:t(()=>[s(H,{title:`You're a wizard, Harry`,description:`To be clear, all those not named Harry are not wizards.`,"close-button-aria-label":`Close header`})]),default:t(()=>[s(_,{name:`Step 1`,id:`header-first-step`},{default:t(()=>[...c[64]||=[d(`Step 1 content`,-1)]]),_:1}),s(_,{name:`Step 2`,id:`header-second-step`},{default:t(()=>[...c[65]||=[d(`Step 2 content`,-1)]]),_:1}),s(_,{name:`Review`,id:`header-review-step`,"footer-attrs":{nextButtonText:`Finish`}},{default:t(()=>[...c[66]||=[d(` Review step content `,-1)]]),_:1})]),_:1})]),_:1}),s(A,{title:`Custom footer`,src:`stories/Components/Wizard-CustomFooter.vue`,source:`<template>
  <pf-wizard :height="400" title="Custom footer wizard">
    <pf-wizard-step name="Step 1" id="custom-footer-first-step">Step 1 content</pf-wizard-step>
    <pf-wizard-step id="custom-footer-second-step" name="Step 2">
      Step 2 content with a custom async footer

      <template #footer="{ goToNextStep, goToPrevStep, close }">
        <pf-wizard-footer-wrapper>
          <pf-action-list>
            <pf-action-list-group>
              <pf-action-list-item>
                <pf-button variant="secondary" :disabled="loading" @click="goToPrevStep">Back</pf-button>
              </pf-action-list-item>
              <pf-action-list-item>
                <pf-button variant="primary" :loading="loading" :disabled="loading" @click="asyncNext(goToNextStep)">
                  Async Next
                </pf-button>
              </pf-action-list-item>
            </pf-action-list-group>
            <pf-action-list-group>
              <pf-action-list-item>
                <pf-button variant="link" :disabled="loading" @click="close">Cancel</pf-button>
              </pf-action-list-item>
            </pf-action-list-group>
          </pf-action-list>
        </pf-wizard-footer-wrapper>
      </template>
    </pf-wizard-step>
    <pf-wizard-step
      id="custom-footer-review-step"
      name="Review"
      :footer-attrs="{
        nextButtonText: 'Submit',
        onNext: onSubmit,
        nextDisabled: submitting,
        backDisabled: submitting,
      }"
    >
      <pf-flex direction="column" align-items="center" space-items="lg">
        <pf-flex-item v-if="submitting === undefined" align-self="flex-start">Review step content</pf-flex-item>
        <template v-else-if="submitting">
          <div>Calculating wizard score...</div>
          <pf-spinner />
        </template>
        <template v-else>50 points to Gryffindor!</template>
      </pf-flex>
    </pf-wizard-step>

    <template #footer="{ activeStep, goToNextStep, goToPrevStep, close }">
      <pf-wizard-footer
        :back-disabled="activeStep.index === 1"
        @next="goToNextStep"
        @back="goToPrevStep"
        @close="close"
      />
    </template>
  </pf-wizard>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const loading = ref(false);
const submitting = ref<boolean>();

async function asyncNext(goToNextStep: () => void) {
  loading.value = true;
  await new Promise(resolve => setTimeout(resolve, 2000));
  loading.value = false;
  goToNextStep();
}

async function onSubmit() {
  submitting.value = true;
  await new Promise(resolve => setTimeout(resolve, 5000));
  submitting.value = false;
}
<\/script>`}),s(A,{title:`Footer from the step content`,src:`stories/Components/Wizard-StepFooter.vue`,source:`<template>
  <pf-wizard :height="400" title="Step footer wizard">
    <pf-wizard-step name="Name" id="step-footer-name-step">
      <pf-form>
        <pf-form-group label="Name:" field-id="step-footer-name">
          <pf-text-input id="step-footer-name" v-model="name" />
        </pf-form-group>
      </pf-form>
      <pf-wizard-step-footer :next-disabled="!name" :next-button-text="name ? \`Continue as \${name}\` : 'Next'" />
    </pf-wizard-step>
    <pf-wizard-step name="Confirm" id="step-footer-confirm-step">
      <pf-checkbox id="step-footer-confirm" v-model="confirmed" label="I confirm my name is correct" />
      <pf-wizard-step-footer v-slot="{ goToPrevStep, close }">
        <pf-action-list>
          <pf-action-list-group>
            <pf-action-list-item>
              <pf-button variant="secondary" @click="goToPrevStep">Back</pf-button>
            </pf-action-list-item>
            <pf-action-list-item>
              <pf-button variant="primary" :disabled="!confirmed" @click="close">Done</pf-button>
            </pf-action-list-item>
          </pf-action-list-group>
        </pf-action-list>
      </pf-wizard-step-footer>
    </pf-wizard-step>
  </pf-wizard>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const name = ref('');
const confirmed = ref(false);
<\/script>`},{intro:t(()=>[...c[67]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,[i(`code`,null,`pf-wizard-step-footer`),d(` replaces the footer of the wizard while it is mounted, so a component rendered in a step can control the footer with its own state. It renders nothing where it is placed: its props are applied to the default footer, as the `),i(`code`,null,`footer-attrs`),d(` of a step, while its default slot replaces the content of the footer and receives `),i(`code`,null,`activeStep`),d(`, `),i(`code`,null,`goToNextStep`),d(`, `),i(`code`,null,`goToPrevStep`),d(` and `),i(`code`,null,`close`),d(`. The slot is wrapped in a `),i(`code`,null,`pf-wizard-footer-wrapper`),d(`, unless `),i(`code`,null,`unwrapped`),d(` is set to render it as the whole footer.`)]),i(`p`,null,[d(`A step's `),i(`code`,null,`footer`),d(` slot and `),i(`code`,null,`footer-attrs`),d(` take precedence over it.`)])],-1)]]),_:1}),s(A,{title:`Custom navigation item`,source:`<pf-wizard :height="400" title="Custom navigation item wizard">
  <pf-wizard-step name="Step 1" id="custom-nav-item-first-step">Step 1 content</pf-wizard-step>
  <pf-wizard-step id="custom-nav-item-second-step" name="Step 2">
    <template #nav-item="{ step, activeStep, goToStepByIndex }">
      <pf-wizard-nav-item
        :id="String(step.id)"
        :current="activeStep?.id === step.id"
        :step-index="step.index"
        @click="goToStepByIndex(step.index)"
      >
        <template #content><span>Custom item</span></template>
      </pf-wizard-nav-item>
    </template>
    Step 2 content with a custom navigation item
  </pf-wizard-step>
  <pf-wizard-step name="Review" id="custom-nav-item-review-step" :footer-attrs="{ nextButtonText: 'Finish' }">
    Review step content
  </pf-wizard-step>
</pf-wizard>`},{default:t(()=>[s(k,{height:400,title:`Custom navigation item wizard`},{default:t(()=>[s(_,{name:`Step 1`,id:`custom-nav-item-first-step`},{default:t(()=>[...c[68]||=[d(`Step 1 content`,-1)]]),_:1}),s(_,{id:`custom-nav-item-second-step`,name:`Step 2`},{"nav-item":t(({step:e,activeStep:n,goToStepByIndex:r})=>[s(W,{id:String(e.id),current:n?.id===e.id,"step-index":e.index,onClick:t=>r(e.index)},{content:t(()=>[...c[69]||=[i(`span`,null,`Custom item`,-1)]]),_:1},8,[`id`,`current`,`step-index`,`onClick`])]),default:t(()=>[c[70]||=d(` Step 2 content with a custom navigation item `,-1)]),_:1}),s(_,{name:`Review`,id:`custom-nav-item-review-step`,"footer-attrs":{nextButtonText:`Finish`}},{default:t(()=>[...c[71]||=[d(` Review step content `,-1)]]),_:1})]),_:1})]),_:1}),s(A,{title:`Toggle step visibility`,source:`<pf-wizard :height="400" title="Toggle step visibility wizard">
  <pf-wizard-step name="Hidden action step" id="toggle-visible-step-1">
    <pf-checkbox
      id="toggle-hide-step-checkbox"
      v-model="hideStep"
      label="Toggle visibility of the next step"
      name="Toggle Hide Step Checkbox" />
  </pf-wizard-step>
  <pf-wizard-step name="Step 2" id="toggle-visible-step-2" :hidden="hideStep">Step 2 content</pf-wizard-step>
  <pf-wizard-step name="Review" id="toggle-visible-review-step" :footer-attrs="{ nextButtonText: 'Finish' }">
    Review step content
  </pf-wizard-step>
</pf-wizard>`},{default:t(()=>[s(k,{height:400,title:`Toggle step visibility wizard`},{default:t(()=>[s(_,{name:`Hidden action step`,id:`toggle-visible-step-1`},{default:t(()=>[s(K,{id:`toggle-hide-step-checkbox`,modelValue:D.value,"onUpdate:modelValue":c[6]||=e=>D.value=e,label:`Toggle visibility of the next step`,name:`Toggle Hide Step Checkbox`},null,8,[`modelValue`])]),_:1}),s(_,{name:`Step 2`,id:`toggle-visible-step-2`,hidden:D.value},{default:t(()=>[...c[72]||=[d(`Step 2 content`,-1)]]),_:1},8,[`hidden`]),s(_,{name:`Review`,id:`toggle-visible-review-step`,"footer-attrs":{nextButtonText:`Finish`}},{default:t(()=>[...c[73]||=[d(` Review step content `,-1)]]),_:1})]),_:1})]),_:1}),s(A,{title:`Step status`,source:`<pf-wizard :height="400" title="Step status wizard">
  <pf-wizard-step :status="stepStatus as WizardStepStatus" id="status-step-1" name="Step 1"
    >Step 1 content</pf-wizard-step>
  <pf-wizard-step name="Status step" id="error-status-step-2">
    <pf-radio
      id="toggle-error-checkbox"
      v-model="stepStatus"
      value="error"
      label="Give step 1 an error status"
      name="Toggle Status" />
    <pf-radio
      id="toggle-success-checkbox"
      v-model="stepStatus"
      value="success"
      label="Give step 1 a success status"
      name="Toggle Status" />
    <pf-radio
      id="toggle-warning-checkbox"
      v-model="stepStatus"
      value="warning"
      label="Give step 1 a warning status"
      name="Toggle Status" />
  </pf-wizard-step>
  <pf-wizard-step name="Review" id="status-review-step" :footer-attrs="{ nextButtonText: 'Finish' }">
    Review step content
  </pf-wizard-step>
</pf-wizard>`},{default:t(()=>[s(k,{height:400,title:`Step status wizard`},{default:t(()=>[s(_,{status:O.value,id:`status-step-1`,name:`Step 1`},{default:t(()=>[...c[74]||=[d(`Step 1 content`,-1)]]),_:1},8,[`status`]),s(_,{name:`Status step`,id:`error-status-step-2`},{default:t(()=>[s(q,{id:`toggle-error-checkbox`,modelValue:O.value,"onUpdate:modelValue":c[7]||=e=>O.value=e,value:`error`,label:`Give step 1 an error status`,name:`Toggle Status`},null,8,[`modelValue`]),s(q,{id:`toggle-success-checkbox`,modelValue:O.value,"onUpdate:modelValue":c[8]||=e=>O.value=e,value:`success`,label:`Give step 1 a success status`,name:`Toggle Status`},null,8,[`modelValue`]),s(q,{id:`toggle-warning-checkbox`,modelValue:O.value,"onUpdate:modelValue":c[9]||=e=>O.value=e,value:`warning`,label:`Give step 1 a warning status`,name:`Toggle Status`},null,8,[`modelValue`])]),_:1}),s(_,{name:`Review`,id:`status-review-step`,"footer-attrs":{nextButtonText:`Finish`}},{default:t(()=>[...c[75]||=[d(` Review step content `,-1)]]),_:1})]),_:1})]),_:1}),c[77]||=i(`div`,{class:`markdown pf-v6-c-content`},[i(`h2`,{class:`pf-v6-c-title`},`Composables`),i(`h3`,{class:`pf-v6-c-title`},`useWizardContext`),i(`p`,null,[d(`Gives access to the state and navigation helpers of the closest `),i(`code`,null,`pf-wizard`),d(`, from a component rendered in a step or in a custom footer or navigation:`)]),i(`pre`,{class:`shiki nord`,style:{"background-color":`#2e3440ff`,color:`#d8dee9ff`},tabindex:`0`},[i(`code`,null,[i(`span`,{class:`line`},[i(`span`,{style:{color:`#81A1C1`}},`import`),i(`span`,{style:{color:`#ECEFF4`}},` {`),i(`span`,{style:{color:`#D8DEE9`}},` useWizardContext`),i(`span`,{style:{color:`#ECEFF4`}},` }`),i(`span`,{style:{color:`#81A1C1`}},` from`),i(`span`,{style:{color:`#ECEFF4`}},` '`),i(`span`,{style:{color:`#A3BE8C`}},`@vue-patternfly/core`),i(`span`,{style:{color:`#ECEFF4`}},`'`),i(`span`,{style:{color:`#81A1C1`}},`;`)]),d(`
`),i(`span`,{class:`line`}),d(`
`),i(`span`,{class:`line`},[i(`span`,{style:{color:`#81A1C1`}},`const`),i(`span`,{style:{color:`#ECEFF4`}},` {`),i(`span`,{style:{color:`#D8DEE9`}},` activeStep`),i(`span`,{style:{color:`#ECEFF4`}},`,`),i(`span`,{style:{color:`#D8DEE9`}},` goToNextStep`),i(`span`,{style:{color:`#ECEFF4`}},` }`),i(`span`,{style:{color:`#81A1C1`}},` =`),i(`span`,{style:{color:`#88C0D0`}},` useWizardContext`),i(`span`,{style:{color:`#D8DEE9FF`}},`()`),i(`span`,{style:{color:`#81A1C1`}},`;`)]),d(`
`),i(`span`,{class:`line`})])])],-1)]),_:1})}}});export{x as default};