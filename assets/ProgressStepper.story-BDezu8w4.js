import{F as e,G as t,N as n,Nt as r,c as i,d as a,ft as o,g as s,h as c,j as l,l as u,m as d,n as f,nt as p}from"./runtime-core.esm-bundler-DKmYt4j6.js";import{W as m}from"./index-Cl3hMFDe.js";var h=m({name:`InProgressIcon`,height:1024,width:1024,svgPathData:`M513.417211,16.013668 L513.417211,112.013668 C513.406007,120.539653 520.082422,127.576718 528.597211,128.013668 C732.697211,136.513668 896.147211,305.013668 896.147211,511.343668 C896.147211,723.013668 724.007211,895.163668 512.417211,895.163668 C437.186239,895.277345 363.602574,873.135095 300.927211,831.523668 C294.58293,827.2982 286.138663,828.135095 280.747211,833.523668 L211.807211,902.353668 C208.502935,905.676185 206.82123,910.280199 207.20607,914.950237 C207.590911,919.620275 210.00361,923.886884 213.807211,926.623668 C300.709573,989.398037 405.213535,1023.13146 512.417211,1023.01398 C794.537211,1023.01398 1023.91724,793.433668 1023.91724,511.413668 C1024.00721,235.103668 804.007211,9.22366802 529.897211,0.00645736761 C525.571205,-0.116171039 521.377128,1.51204372 518.271915,4.52681369 C515.166702,7.54158367 513.415263,11.6857144 513.417211,16.013668 M97.1272107,212.923668 C64.2190689,258.479443 39.0698895,309.162997 22.6972107,362.923668 C21.2705092,367.756559 22.2039184,372.979173 25.2163356,377.018685 C28.2287528,381.058197 32.9681443,383.442545 38.0072107,383.453683 L139.407211,383.453683 C145.970195,383.46249 151.873012,379.462528 154.297211,373.363668 C164.307669,347.593304 177.068112,322.977652 192.357211,299.943668 C196.579666,293.633658 195.741339,285.216847 190.357211,279.863668 L121.497211,211.013668 C118.186635,207.662531 113.567544,205.940538 108.871166,206.30669 C104.174788,206.672841 99.8783994,209.089927 97.1272107,212.913668 M112.907211,511.433663 L17.0072107,511.433663 C12.679257,511.433663 8.5351263,513.183159 5.52035633,516.288373 C2.50558635,519.393586 0.877371594,523.587662 1.00721065,527.913668 C4.13104542,629.408217 37.6085847,727.635936 97.1172107,809.913668 C99.8539943,813.717268 104.120603,816.129968 108.790642,816.514809 C113.46068,816.899649 118.064693,815.217944 121.387211,811.913668 L190.217211,743.073668 C195.605784,737.682216 196.442679,729.237949 192.217211,722.893668 C153.520825,664.580171 131.611534,596.745437 128.887211,526.813668 C128.553964,518.220138 121.487197,511.427209 112.887211,511.433663`,yOffset:0,xOffset:0}),g=m({name:`PendingIcon`,height:1024,width:1024,svgPathData:`M512.1,895.9 C300.3,895.9 128.1,723.8 128.1,511.9 C128.1,300.2 300.3,127.9 512.1,127.9 C723.8,127.9 896,300.2 896.1,511.9 C896.1,723.7 723.8,895.9 512.1,895.9 M512.1,0 C229.7,0 0,229.7 0,512 C0,794.3 229.7,1024 512.1,1024 C794.3,1024 1024,794.3 1024,512 C1024,229.7 794.3,0 512.1,0 M704,288 L704,272 C704,263.2 696.8,256 688,256 L336,256 C327.2,256 320,263.2 320,272 L320,288 C320,447 480,449 480,512 C480,575 320,575 320,736 L320,752 C320,760.8 327.2,768 336,768 L688,768 C696.8,768 704,760.8 704,752 L704,736 C704,576 544,577 544,512 C544,447 704,448 704,288 M603.9,704 L420.3,704 C417.3,704 418.2,695 419.4,686.8 C426.8,634.5 480.1,617.4 495.2,612.3 C512.3,606.6 512.3,606.6 528.9,612.3 C544,617.6 597.6,635.4 604.8,687 C605.9,695.2 606.9,704 603.9,704`,yOffset:0,xOffset:0}),_=s({__name:`ProgressStepper.story`,setup(s){let m=p({vertical:!1,center:!1}),_=p({vertical:!1,center:!1}),v=[{title:`First step`,variant:`success`,label:`completed step, step with success`},{title:`Second step`,variant:`success`,label:`completed step, step with success`},{title:`Third step`,variant:`warning`,label:`completed step, step with warning`},{title:`Fourth step`,variant:`info`,label:`step with info`,current:!0},{title:`Fifth step`,variant:`pending`,label:`pending step`}],y=[{title:`First step`,variant:`success`,label:`completed step, step with success`},{title:`Second step`,variant:`success`,label:`completed step, step with success`},{title:`Third step`,variant:`success`,label:`completed step, step with success`},{title:`Fourth step`,variant:`danger`,label:`step with danger`,current:!0},{title:`Fifth step`,variant:`pending`,label:`pending step`}];return(s,p)=>{let b=e(`component-info`),x=e(`pf-progress-step`),S=e(`pf-progress-stepper`),C=e(`story-canvas`),w=e(`pf-checkbox`),T=e(`pf-popover`),E=e(`doc-page`);return l(),u(E,{name:`Components/ProgressStepper.story.vue`,title:`Progress stepper`},{description:t(()=>[...p[4]||=[d(`A `,-1),i(`b`,null,`progress stepper`,-1),d(` displays a timeline of tasks in a workflow and tracks the user's current progress through this workflow.`,-1)]]),apidocs:t(()=>[c(b,{name:`PfProgressStepper`,doc:{name:`PfProgressStepper`,exportName:`PfProgressStepper`,displayName:`ProgressStepper`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`centerAligned`,description:`Flag indicating the progress stepper should be centered.`,required:!1,type:{name:`boolean`}},{name:`vertical`,description:`Flag indicating the progress stepper has a vertical layout.`,required:!1,type:{name:`boolean`}},{name:`compact`,description:`Flag indicating the progress stepper should be rendered compactly.`,required:!1,type:{name:`boolean`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/ProgressStepper/ProgressStepper.vue`]}}),c(b,{name:`PfProgressStep`,doc:{name:`PfProgressStep`,exportName:`PfProgressStep`,displayName:`ProgressStep`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`variant`,description:`Variant of the progress step. Each variant has a default icon.`,required:!1,type:{name:`union`,elements:[{name:`"default"`},{name:`"success"`},{name:`"info"`},{name:`"pending"`},{name:`"warning"`},{name:`"danger"`}]}},{name:`current`,description:`Flag indicating the progress step is the current step.`,required:!1,type:{name:`boolean`}},{name:`description`,description:`Description text of a progress step, replaced by the description slot.`,required:!1,type:{name:`string`}},{name:`titleId`,description:`ID of the title of the progress step.`,required:!1,type:{name:`string`}}],events:[],slots:[{name:`icon`,description:`Custom icon of the progress step, overriding the variant icon`},{name:`default`,description:`Title of the progress step`},{name:`popover`,scoped:!0,bindings:[{name:`trigger`,title:`binding`}],description:`A help popover for the step, such as a pf-popover with trigger as trigger-ref. The title becomes its trigger button.`},{name:`description`,description:`Description of the progress step, replacing the description prop`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/ProgressStepper/ProgressStep.vue`]}})]),default:t(()=>[p[34]||=i(`div`,{class:`markdown pf-v6-c-content`},[i(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),i(`ul`,null,[i(`li`,null,[d(`The `),i(`code`,null,`icon`),d(` and `),i(`code`,null,`description`),d(` props of `),i(`code`,null,`pf-progress-step`),d(` are slots (`),i(`code`,null,`description`),d(` is also a prop).`)]),i(`li`,null,[d(`A help popover goes in the `),i(`code`,null,`popover`),d(` scoped slot, whose `),i(`code`,null,`trigger`),d(` (the step title, rendered as a button) is passed to the `),i(`code`,null,`trigger-ref`),d(` of a `),i(`code`,null,`pf-popover`),d(` (`),i(`code`,null,`popoverRender`),d(`).`)]),i(`li`,null,[d(`Boolean props drop their prefix: `),i(`code`,null,`center-aligned`),d(`, `),i(`code`,null,`vertical`),d(`, `),i(`code`,null,`compact`),d(` and `),i(`code`,null,`current`),d(`. See `),i(`a`,{href:`#/`},`common differences from patternfly-react`),d(`.`)])]),i(`h2`,{class:`pf-v6-c-title`},`Examples`),i(`p`,null,[d(`Progress steppers have default icons associated with the `),i(`code`,null,`variant`),d(` property, and may be overriden and customized using the `),i(`code`,null,`icon`),d(` slot.`)])],-1),c(C,{title:`Basic`,source:`<pf-progress-stepper aria-label="Basic progress stepper">
  <pf-progress-step
    id="basic-step1"
    variant="success"
    title-id="basic-step1-title"
    aria-label="completed step, step with success"
  >
    First step
  </pf-progress-step>
  <pf-progress-step
    id="basic-step2"
    variant="info"
    current
    title-id="basic-step2-title"
    aria-label="step with info"
  >
    Second step
  </pf-progress-step>
  <pf-progress-step id="basic-step3" variant="pending" title-id="basic-step3-title" aria-label="pending step">
    Third step
  </pf-progress-step>
</pf-progress-stepper>`},{default:t(()=>[c(S,{"aria-label":`Basic progress stepper`},{default:t(()=>[c(x,{id:`basic-step1`,variant:`success`,"title-id":`basic-step1-title`,"aria-label":`completed step, step with success`},{default:t(()=>[...p[5]||=[d(` First step `,-1)]]),_:1}),c(x,{id:`basic-step2`,variant:`info`,current:``,"title-id":`basic-step2-title`,"aria-label":`step with info`},{default:t(()=>[...p[6]||=[d(` Second step `,-1)]]),_:1}),c(x,{id:`basic-step3`,variant:`pending`,"title-id":`basic-step3-title`,"aria-label":`pending step`},{default:t(()=>[...p[7]||=[d(` Third step `,-1)]]),_:1})]),_:1})]),_:1}),c(C,{title:`With step descriptions`,source:`<pf-progress-stepper aria-label="Basic progress stepper with description">
  <pf-progress-step
    id="basic-desc-step1"
    variant="success"
    description="This is the first thing to happen"
    title-id="basic-desc-step1-title"
    aria-label="completed step, step with success"
  >
    First step
  </pf-progress-step>
  <pf-progress-step
    id="basic-desc-step2"
    variant="info"
    current
    description="This is the second thing to happen"
    title-id="basic-desc-step2-title"
    aria-label="step with info"
  >
    Second step
  </pf-progress-step>
  <pf-progress-step
    id="basic-desc-step3"
    variant="pending"
    description="This is the last thing to happen"
    title-id="basic-desc-step3-title"
    aria-label="pending step"
  >
    Third step
  </pf-progress-step>
</pf-progress-stepper>`},{default:t(()=>[c(S,{"aria-label":`Basic progress stepper with description`},{default:t(()=>[c(x,{id:`basic-desc-step1`,variant:`success`,description:`This is the first thing to happen`,"title-id":`basic-desc-step1-title`,"aria-label":`completed step, step with success`},{default:t(()=>[...p[8]||=[d(` First step `,-1)]]),_:1}),c(x,{id:`basic-desc-step2`,variant:`info`,current:``,description:`This is the second thing to happen`,"title-id":`basic-desc-step2-title`,"aria-label":`step with info`},{default:t(()=>[...p[9]||=[d(` Second step `,-1)]]),_:1}),c(x,{id:`basic-desc-step3`,variant:`pending`,description:`This is the last thing to happen`,"title-id":`basic-desc-step3-title`,"aria-label":`pending step`},{default:t(()=>[...p[10]||=[d(` Third step `,-1)]]),_:1})]),_:1})]),_:1}),c(C,{title:`With alignment`,source:`<pf-checkbox
  id="toggle-vertical"
  v-model="alignment.vertical"
  label="Vertical alignment"
  aria-label="Toggle vertical alignment"
  name="toggle-vertical" />
<pf-checkbox
  id="toggle-center"
  v-model="alignment.center"
  label="Center alignment"
  aria-label="Toggle center alignment"
  name="toggle-center" />
<br>
<pf-progress-stepper
  :vertical="alignment.vertical"
  :center-aligned="alignment.center"
  aria-label="Basic progress stepper with alignment"
>
  <pf-progress-step
    id="basic-alignment-step1"
    variant="success"
    description="This is the first thing to happen"
    title-id="basic-alignment-step1-title"
    aria-label="completed step, step with success"
  >
    First step
  </pf-progress-step>
  <pf-progress-step
    id="basic-alignment-step2"
    variant="info"
    current
    description="This is the second thing to happen"
    title-id="basic-alignment-step2-title"
    aria-label="step with info"
  >
    Second step
  </pf-progress-step>
  <pf-progress-step
    id="basic-alignment-step3"
    variant="pending"
    description="This is the last thing to happen"
    title-id="basic-alignment-step3-title"
    aria-label="pending step"
  >
    Third step
  </pf-progress-step>
</pf-progress-stepper>`},{default:t(()=>[c(w,{id:`toggle-vertical`,modelValue:m.vertical,"onUpdate:modelValue":p[0]||=e=>m.vertical=e,label:`Vertical alignment`,"aria-label":`Toggle vertical alignment`,name:`toggle-vertical`},null,8,[`modelValue`]),c(w,{id:`toggle-center`,modelValue:m.center,"onUpdate:modelValue":p[1]||=e=>m.center=e,label:`Center alignment`,"aria-label":`Toggle center alignment`,name:`toggle-center`},null,8,[`modelValue`]),p[14]||=i(`br`,null,null,-1),c(S,{vertical:m.vertical,"center-aligned":m.center,"aria-label":`Basic progress stepper with alignment`},{default:t(()=>[c(x,{id:`basic-alignment-step1`,variant:`success`,description:`This is the first thing to happen`,"title-id":`basic-alignment-step1-title`,"aria-label":`completed step, step with success`},{default:t(()=>[...p[11]||=[d(` First step `,-1)]]),_:1}),c(x,{id:`basic-alignment-step2`,variant:`info`,current:``,description:`This is the second thing to happen`,"title-id":`basic-alignment-step2-title`,"aria-label":`step with info`},{default:t(()=>[...p[12]||=[d(` Second step `,-1)]]),_:1}),c(x,{id:`basic-alignment-step3`,variant:`pending`,description:`This is the last thing to happen`,"title-id":`basic-alignment-step3-title`,"aria-label":`pending step`},{default:t(()=>[...p[13]||=[d(` Third step `,-1)]]),_:1})]),_:1},8,[`vertical`,`center-aligned`])]),_:1}),c(C,{title:`Compact`,source:`<pf-checkbox
  id="toggle-compact-vertical"
  v-model="compact.vertical"
  label="Vertical alignment"
  aria-label="Toggle compact vertical alignment"
  name="toggle-compact-vertical" />
<pf-checkbox
  id="toggle-compact-center"
  v-model="compact.center"
  label="Center alignment"
  aria-label="Toggle compact center alignment"
  name="toggle-compact-center" />
<br>
<pf-progress-stepper compact :vertical="compact.vertical" :center-aligned="compact.center">
  <pf-progress-step
    id="compact-step1"
    variant="success"
    title-id="compact-step1-title"
    aria-label="completed step, step with success"
  >
    First step
  </pf-progress-step>
  <pf-progress-step
    id="compact-step2"
    variant="info"
    current
    title-id="compact-step2-title"
    aria-label="step with info"
  >
    Second step
  </pf-progress-step>
  <pf-progress-step id="compact-step3" variant="pending" title-id="compact-step3-title" aria-label="pending step">
    Third step
  </pf-progress-step>
</pf-progress-stepper>`},{intro:t(()=>[...p[15]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,`Compact progress steppers will only display the current step's title, and will not display any steps' descriptions.`)],-1)]]),default:t(()=>[c(w,{id:`toggle-compact-vertical`,modelValue:_.vertical,"onUpdate:modelValue":p[2]||=e=>_.vertical=e,label:`Vertical alignment`,"aria-label":`Toggle compact vertical alignment`,name:`toggle-compact-vertical`},null,8,[`modelValue`]),c(w,{id:`toggle-compact-center`,modelValue:_.center,"onUpdate:modelValue":p[3]||=e=>_.center=e,label:`Center alignment`,"aria-label":`Toggle compact center alignment`,name:`toggle-compact-center`},null,8,[`modelValue`]),p[19]||=i(`br`,null,null,-1),c(S,{compact:``,vertical:_.vertical,"center-aligned":_.center},{default:t(()=>[c(x,{id:`compact-step1`,variant:`success`,"title-id":`compact-step1-title`,"aria-label":`completed step, step with success`},{default:t(()=>[...p[16]||=[d(` First step `,-1)]]),_:1}),c(x,{id:`compact-step2`,variant:`info`,current:``,"title-id":`compact-step2-title`,"aria-label":`step with info`},{default:t(()=>[...p[17]||=[d(` Second step `,-1)]]),_:1}),c(x,{id:`compact-step3`,variant:`pending`,"title-id":`compact-step3-title`,"aria-label":`pending step`},{default:t(()=>[...p[18]||=[d(` Third step `,-1)]]),_:1})]),_:1},8,[`vertical`,`center-aligned`])]),_:1}),c(C,{title:`With an issue`,source:`<pf-progress-stepper aria-label="Basic progress stepper with issue">
  <pf-progress-step
    v-for="(step, i) in issueSteps"
    :id="\`basic-with-issue-step\${i + 1}\`"
    :key="i"
    :variant="step.variant"
    :current="step.current"
    :title-id="\`basic-with-issue-step\${i + 1}-title\`"
    :aria-label="step.label"
  >
    {{ step.title }}
  </pf-progress-step>
</pf-progress-stepper>`},{default:t(()=>[c(S,{"aria-label":`Basic progress stepper with issue`},{default:t(()=>[(l(),a(f,null,n(v,(e,n)=>c(x,{id:`basic-with-issue-step${n+1}`,key:n,variant:e.variant,current:e.current,"title-id":`basic-with-issue-step${n+1}-title`,"aria-label":e.label},{default:t(()=>[d(r(e.title),1)]),_:2},1032,[`id`,`variant`,`current`,`title-id`,`aria-label`])),64))]),_:1})]),_:1}),c(C,{title:`With a failure`,source:`<pf-progress-stepper aria-label="Basic progress stepper with failure">
  <pf-progress-step
    v-for="(step, i) in failureSteps"
    :id="\`basic-with-failure-step\${i + 1}\`"
    :key="i"
    :variant="step.variant"
    :current="step.current"
    :title-id="\`basic-with-failure-step\${i + 1}-title\`"
    :aria-label="step.label"
  >
    {{ step.title }}
  </pf-progress-step>
</pf-progress-stepper>`},{default:t(()=>[c(S,{"aria-label":`Basic progress stepper with failure`},{default:t(()=>[(l(),a(f,null,n(y,(e,n)=>c(x,{id:`basic-with-failure-step${n+1}`,key:n,variant:e.variant,current:e.current,"title-id":`basic-with-failure-step${n+1}-title`,"aria-label":e.label},{default:t(()=>[d(r(e.title),1)]),_:2},1032,[`id`,`variant`,`current`,`title-id`,`aria-label`])),64))]),_:1})]),_:1}),c(C,{title:`With custom icons`,source:`<pf-progress-stepper aria-label="Progress stepper with custom icons">
  <pf-progress-step
    id="custom-step1"
    variant="success"
    title-id="custom-step1-title"
    aria-label="completed step, step with success"
  >
    Successful completion
  </pf-progress-step>
  <pf-progress-step id="custom-step2" current title-id="custom-step2-title" aria-label="in progress">
    <template #icon><in-progress-icon /></template>
    In process
  </pf-progress-step>
  <pf-progress-step id="custom-step3" variant="pending" title-id="custom-step3-title" aria-label="pending step">
    <template #icon><pending-icon /></template>
    Pending
  </pf-progress-step>
</pf-progress-stepper>`},{default:t(()=>[c(S,{"aria-label":`Progress stepper with custom icons`},{default:t(()=>[c(x,{id:`custom-step1`,variant:`success`,"title-id":`custom-step1-title`,"aria-label":`completed step, step with success`},{default:t(()=>[...p[20]||=[d(` Successful completion `,-1)]]),_:1}),c(x,{id:`custom-step2`,current:``,"title-id":`custom-step2-title`,"aria-label":`in progress`},{icon:t(()=>[c(o(h))]),default:t(()=>[p[21]||=d(` In process `,-1)]),_:1}),c(x,{id:`custom-step3`,variant:`pending`,"title-id":`custom-step3-title`,"aria-label":`pending step`},{icon:t(()=>[c(o(g))]),default:t(()=>[p[22]||=d(` Pending `,-1)]),_:1})]),_:1})]),_:1}),c(C,{title:`With help popover`,source:`<pf-progress-stepper aria-label="Progress stepper with help popover">
  <pf-progress-step
    id="popover-step1"
    variant="success"
    title-id="popover-step1-title"
    aria-label="completed step with popover, step with success"
  >
    First step
    <template #popover="{ trigger }">
      <pf-popover aria-label="First step help" :trigger-ref="trigger" position="right">
        <template #header><div>First step popover</div></template>
        <template #body><div>Additional info or help text content.</div></template>
      </pf-popover>
    </template>
  </pf-progress-step>
  <pf-progress-step
    id="popover-step2"
    variant="danger"
    title-id="popover-step2-title"
    aria-label="completed step with popover, step with danger"
  >
    Second step
    <template #popover="{ trigger }">
      <pf-popover aria-label="Second step help" :trigger-ref="trigger" position="right">
        <template #header><div>Second step popover</div></template>
        <template #body><div>Additional info or help text content.</div></template>
      </pf-popover>
    </template>
  </pf-progress-step>
  <pf-progress-step
    id="popover-step3"
    variant="info"
    current
    title-id="popover-step3-title"
    aria-label="step with popover"
  >
    Third step
    <template #popover="{ trigger }">
      <pf-popover aria-label="Third step help" :trigger-ref="trigger" position="right">
        <template #header><div>Third step popover</div></template>
        <template #body><div>Additional info or help text content.</div></template>
      </pf-popover>
    </template>
  </pf-progress-step>
  <pf-progress-step id="popover-step4" variant="pending" title-id="popover-step4-title" aria-label="pending step">
    Fourth step
  </pf-progress-step>
</pf-progress-stepper>`},{intro:t(()=>[...p[23]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,[d(`To add a popover to a progress step, use the `),i(`code`,null,`popover`),d(` slot of the `),i(`code`,null,`pf-progress-step`),d(` component: the step title becomes a button, received as `),i(`code`,null,`trigger`),d(`, to pass to the `),i(`code`,null,`trigger-ref`),d(` of a `),i(`code`,null,`pf-popover`),d(`.`)])],-1)]]),default:t(()=>[c(S,{"aria-label":`Progress stepper with help popover`},{default:t(()=>[c(x,{id:`popover-step1`,variant:`success`,"title-id":`popover-step1-title`,"aria-label":`completed step with popover, step with success`},{popover:t(({trigger:e})=>[c(T,{"aria-label":`First step help`,"trigger-ref":e,position:`right`},{header:t(()=>[...p[24]||=[i(`div`,null,`First step popover`,-1)]]),body:t(()=>[...p[25]||=[i(`div`,null,`Additional info or help text content.`,-1)]]),_:1},8,[`trigger-ref`])]),default:t(()=>[p[26]||=d(` First step `,-1)]),_:1}),c(x,{id:`popover-step2`,variant:`danger`,"title-id":`popover-step2-title`,"aria-label":`completed step with popover, step with danger`},{popover:t(({trigger:e})=>[c(T,{"aria-label":`Second step help`,"trigger-ref":e,position:`right`},{header:t(()=>[...p[27]||=[i(`div`,null,`Second step popover`,-1)]]),body:t(()=>[...p[28]||=[i(`div`,null,`Additional info or help text content.`,-1)]]),_:1},8,[`trigger-ref`])]),default:t(()=>[p[29]||=d(` Second step `,-1)]),_:1}),c(x,{id:`popover-step3`,variant:`info`,current:``,"title-id":`popover-step3-title`,"aria-label":`step with popover`},{popover:t(({trigger:e})=>[c(T,{"aria-label":`Third step help`,"trigger-ref":e,position:`right`},{header:t(()=>[...p[30]||=[i(`div`,null,`Third step popover`,-1)]]),body:t(()=>[...p[31]||=[i(`div`,null,`Additional info or help text content.`,-1)]]),_:1},8,[`trigger-ref`])]),default:t(()=>[p[32]||=d(` Third step `,-1)]),_:1}),c(x,{id:`popover-step4`,variant:`pending`,"title-id":`popover-step4-title`,"aria-label":`pending step`},{default:t(()=>[...p[33]||=[d(` Fourth step `,-1)]]),_:1})]),_:1})]),_:1})]),_:1})}}});export{_ as default};