import{F as e,H as t,K as n,c as r,g as i,h as a,j as o,l as s,m as c,pt as l}from"./runtime-core.esm-bundler-DO1530YC.js";import{S as u,W as d}from"./index-CUsetNQE.js";var f=d({name:`AtIcon`,height:512,width:512,svgPathData:`M256 64C150 64 64 150 64 256s86 192 192 192c17.7 0 32 14.3 32 32s-14.3 32-32 32C114.6 512 0 397.4 0 256S114.6 0 256 0 512 114.6 512 256l0 32c0 53-43 96-96 96-29.3 0-55.6-13.2-73.2-33.9-22.8 21-53.3 33.9-86.8 33.9-70.7 0-128-57.3-128-128s57.3-128 128-128c27.9 0 53.7 8.9 74.7 24.1 5.7-5 13.1-8.1 21.3-8.1 17.7 0 32 14.3 32 32l0 112c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32c0-106-86-192-192-192zm64 192a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z`,yOffset:0,xOffset:0}),p=d({name:`DollarSignIcon`,height:512,width:320,svgPathData:`M136 24c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40 56 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-114.9 0c-24.9 0-45.1 20.2-45.1 45.1 0 22.5 16.5 41.5 38.7 44.7l91.6 13.1c53.8 7.7 93.7 53.7 93.7 108 0 60.3-48.9 109.1-109.1 109.1l-10.9 0 0 40c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-40-72 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l130.9 0c24.9 0 45.1-20.2 45.1-45.1 0-22.5-16.5-41.5-38.7-44.7l-91.6-13.1C55.9 273.5 16 227.4 16 173.1 16 112.9 64.9 64 125.1 64l10.9 0 0-40z`,yOffset:0,xOffset:0}),m=i({__name:`InputGroup.story`,setup(i){let d=t(`inputGroup1`),m=t(`inputGroup2`);return(t,i)=>{let h=e(`component-info`),g=e(`pf-text-input`),_=e(`pf-input-group-item`),v=e(`pf-input-group-text`),y=e(`pf-input-group`),b=e(`story-canvas`),x=e(`pf-textarea`),S=e(`pf-button`),C=e(`pf-dropdown-item`),w=e(`pf-dropdown`),T=e(`pf-popover`),E=e(`doc-page`);return o(),s(E,{name:`Components/InputGroup.story.vue`,title:`Input Group`},{description:n(()=>[...i[0]||=[c(`An `,-1),r(`b`,null,`input group`,-1),c(` groups multiple related controls or inputs together so they appear as one control.`,-1)]]),apidocs:n(()=>[a(h,{name:`PfInputGroup`,doc:{name:`PfInputGroup`,exportName:`PfInputGroup`,displayName:`InputGroup`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/InputGroup/InputGroup.vue`]}}),a(h,{name:`PfInputGroupItem`,doc:{name:`PfInputGroupItem`,exportName:`PfInputGroupItem`,displayName:`InputGroupItem`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`box`,description:`Enables box styling to the input group item`,required:!1,type:{name:`boolean`}},{name:`plain`,description:`Flag to indicate if the input group item is plain.`,required:!1,type:{name:`boolean`}},{name:`fill`,description:`Flag to indicate if the input group item should fill the available horizontal space`,required:!1,type:{name:`boolean`}},{name:`disabled`,description:`Flag to indicate if the input group item is disabled.`,required:!1,type:{name:`boolean`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/InputGroup/InputGroupItem.vue`]}}),a(h,{name:`PfInputGroupText`,doc:{name:`PfInputGroupText`,exportName:`PfInputGroupText`,displayName:`InputGroupText`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`component`,description:`Component that wraps the input group text.`,required:!1,type:{name:`union`,elements:[{name:`string`},{name:`Component`}]},defaultValue:{func:!1,value:`'span'`}},{name:`plain`,description:`Flag to indicate if the input group item is plain.`,required:!1,type:{name:`boolean`}},{name:`disabled`,description:`Flag to indicate if the input group text is disabled.`,required:!1,type:{name:`boolean`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/InputGroup/InputGroupText.vue`]}})]),default:n(()=>[i[22]||=r(`div`,{class:`markdown pf-v6-c-content`},[r(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),r(`ul`,null,[r(`li`,null,[c(`The `),r(`code`,null,`class`),c(` of `),r(`code`,null,`pf-input-group-text`),c(` is applied to the item wrapper, while its other attributes (`),r(`code`,null,`id`),c(`, `),r(`code`,null,`for`),c(`, …) go on the text element. See `),r(`a`,{href:`#/`},`common differences from patternfly-react`),c(`.`)])]),r(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),a(b,{title:`Basic`,source:`<pf-input-group>
  <pf-input-group-item fill>
    <pf-text-input id="textInput-basic-1" type="email" aria-label="email input field" />
  </pf-input-group-item>
  <pf-input-group-text id="email-example">@example.com</pf-input-group-text>
</pf-input-group>
<br>
<pf-input-group>
  <pf-input-group-text id="username">
    <at-icon />
  </pf-input-group-text>
  <pf-input-group-item fill>
    <pf-text-input
      id="textInput-basic-2"
      validated="error"
      type="email"
      aria-label="Error state username example" />
  </pf-input-group-item>
</pf-input-group>
<br>
<pf-input-group>
  <pf-input-group-item fill>
    <pf-text-input id="textInput-basic-3" name="textInput-basic-3" type="text" aria-label="percentage" />
  </pf-input-group-item>
  <pf-input-group-text id="plain-example" plain>%</pf-input-group-text>
</pf-input-group>`},{default:n(()=>[a(y,null,{default:n(()=>[a(_,{fill:``},{default:n(()=>[a(g,{id:`textInput-basic-1`,type:`email`,"aria-label":`email input field`})]),_:1}),a(v,{id:`email-example`},{default:n(()=>[...i[1]||=[c(`@example.com`,-1)]]),_:1})]),_:1}),i[3]||=r(`br`,null,null,-1),a(y,null,{default:n(()=>[a(v,{id:`username`},{default:n(()=>[a(l(f))]),_:1}),a(_,{fill:``},{default:n(()=>[a(g,{id:`textInput-basic-2`,validated:`error`,type:`email`,"aria-label":`Error state username example`})]),_:1})]),_:1}),i[4]||=r(`br`,null,null,-1),a(y,null,{default:n(()=>[a(_,{fill:``},{default:n(()=>[a(g,{id:`textInput-basic-3`,name:`textInput-basic-3`,type:`text`,"aria-label":`percentage`})]),_:1}),a(v,{id:`plain-example`,plain:``},{default:n(()=>[...i[2]||=[c(`%`,-1)]]),_:1})]),_:1})]),_:1}),a(b,{title:`With textarea`,source:`<pf-input-group>
  <pf-input-group-item fill>
    <pf-textarea
      id="inputGroup-with-textarea"
      name="inputGroup-with-textarea"
      aria-label="textarea with button" />
  </pf-input-group-item>
  <pf-input-group-item>
    <pf-button id="textAreaButton2" variant="control">Button</pf-button>
  </pf-input-group-item>
</pf-input-group>`},{default:n(()=>[a(y,null,{default:n(()=>[a(_,{fill:``},{default:n(()=>[a(x,{id:`inputGroup-with-textarea`,name:`inputGroup-with-textarea`,"aria-label":`textarea with button`})]),_:1}),a(_,null,{default:n(()=>[a(S,{id:`textAreaButton2`,variant:`control`},{default:n(()=>[...i[5]||=[c(`Button`,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),a(b,{title:`With dropdown`,source:`<pf-input-group>
  <pf-input-group-item>
    <pf-dropdown text="Dropdown">
      <pf-dropdown-item>Option 1</pf-dropdown-item>
      <pf-dropdown-item>Option 2</pf-dropdown-item>
      <pf-dropdown-item>Option 3</pf-dropdown-item>
    </pf-dropdown>
  </pf-input-group-item>
  <pf-input-group-item fill>
    <pf-text-input id="textInput-with-dropdown" aria-label="input with dropdown and button" />
  </pf-input-group-item>
  <pf-input-group-item>
    <pf-button id="inputDropdownButton1" variant="control">Button</pf-button>
  </pf-input-group-item>
</pf-input-group>`},{default:n(()=>[a(y,null,{default:n(()=>[a(_,null,{default:n(()=>[a(w,{text:`Dropdown`},{default:n(()=>[a(C,null,{default:n(()=>[...i[6]||=[c(`Option 1`,-1)]]),_:1}),a(C,null,{default:n(()=>[...i[7]||=[c(`Option 2`,-1)]]),_:1}),a(C,null,{default:n(()=>[...i[8]||=[c(`Option 3`,-1)]]),_:1})]),_:1})]),_:1}),a(_,{fill:``},{default:n(()=>[a(g,{id:`textInput-with-dropdown`,"aria-label":`input with dropdown and button`})]),_:1}),a(_,null,{default:n(()=>[a(S,{id:`inputDropdownButton1`,variant:`control`},{default:n(()=>[...i[9]||=[c(`Button`,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),a(b,{title:`With popover`,source:`<pf-input-group ref="inputGroup1">
  <pf-input-group-item fill>
    <pf-text-input
      id="textInput-with-popover-1"
      name="textInput-with-popover-1"
      type="text"
      aria-label="first input example with popover" />
  </pf-input-group-item>
  <pf-input-group-item>
    <pf-popover aria-label="popover example" position="top" :append-to="inputGroup1?.$el">
      <template #body>This field is an example of an input group with a popover.</template>
      <pf-button variant="control" aria-label="popover for input">
        <template #icon>
          <circle-question-icon />
        </template>
      </pf-button>
    </pf-popover>
  </pf-input-group-item>
</pf-input-group>
<br>
<pf-input-group ref="inputGroup2">
  <pf-input-group-item fill>
    <pf-text-input
      id="textInput-with-popover-2"
      name="textInput-with-popover-2"
      type="text"
      aria-label="second input example with popover" />
  </pf-input-group-item>
  <pf-input-group-item>
    <pf-popover aria-label="popover example" position="top" :append-to="inputGroup2?.$el">
      <template #body>This field is an example of an input group with a popover.</template>
      <pf-button variant="plain" aria-label="Popover for input">
        <template #icon>
          <circle-question-icon />
        </template>
      </pf-button>
    </pf-popover>
  </pf-input-group-item>
</pf-input-group>`},{intro:n(()=>[...i[10]||=[r(`div`,{class:`markdown pf-v6-c-content`},[r(`p`,null,[c(`Using `),r(`code`,null,`append-to`),c(` with the element of the `),r(`code`,null,`pf-input-group`),c(` for the `),r(`code`,null,`pf-popover`),c(`, so that the popover width will depend on the whole input group.`)])],-1)]]),default:n(()=>[a(y,{ref_key:`inputGroup1`,ref:d},{default:n(()=>[a(_,{fill:``},{default:n(()=>[a(g,{id:`textInput-with-popover-1`,name:`textInput-with-popover-1`,type:`text`,"aria-label":`first input example with popover`})]),_:1}),a(_,null,{default:n(()=>[a(T,{"aria-label":`popover example`,position:`top`,"append-to":d.value?.$el},{body:n(()=>[...i[11]||=[c(`This field is an example of an input group with a popover.`,-1)]]),default:n(()=>[a(S,{variant:`control`,"aria-label":`popover for input`},{icon:n(()=>[a(l(u))]),_:1})]),_:1},8,[`append-to`])]),_:1})]),_:1},512),i[13]||=r(`br`,null,null,-1),a(y,{ref_key:`inputGroup2`,ref:m},{default:n(()=>[a(_,{fill:``},{default:n(()=>[a(g,{id:`textInput-with-popover-2`,name:`textInput-with-popover-2`,type:`text`,"aria-label":`second input example with popover`})]),_:1}),a(_,null,{default:n(()=>[a(T,{"aria-label":`popover example`,position:`top`,"append-to":m.value?.$el},{body:n(()=>[...i[12]||=[c(`This field is an example of an input group with a popover.`,-1)]]),default:n(()=>[a(S,{variant:`plain`,"aria-label":`Popover for input`},{icon:n(()=>[a(l(u))]),_:1})]),_:1},8,[`append-to`])]),_:1})]),_:1},512)]),_:1}),a(b,{title:`With multiple group siblings`,source:`<pf-input-group>
  <pf-input-group-item>
    <pf-button id="textAreaButton1" variant="control">Button</pf-button>
  </pf-input-group-item>
  <pf-input-group-item fill>
    <pf-textarea id="textarea1" name="textarea1" aria-label="textarea with buttons" />
  </pf-input-group-item>
  <pf-input-group-item>
    <pf-button variant="control">Button</pf-button>
  </pf-input-group-item>
</pf-input-group>
<br>
<pf-input-group>
  <pf-input-group-item>
    <pf-button id="textAreaButton3" variant="control">Button</pf-button>
  </pf-input-group-item>
  <pf-input-group-item>
    <pf-button variant="control">Button</pf-button>
  </pf-input-group-item>
  <pf-input-group-item fill>
    <pf-textarea id="textarea2" name="textarea2" aria-label="textarea with 3 buttons" />
  </pf-input-group-item>
  <pf-input-group-item>
    <pf-button variant="control">Button</pf-button>
  </pf-input-group-item>
</pf-input-group>
<br>
<pf-input-group>
  <pf-input-group-text>
    <dollar-sign-icon />
  </pf-input-group-text>
  <pf-input-group-item fill>
    <pf-text-input
      id="textInput-with-siblings"
      name="textInput-with-siblings"
      type="number"
      aria-label="Dollar amount input example" />
  </pf-input-group-item>
  <pf-input-group-text>.00</pf-input-group-text>
</pf-input-group>`},{default:n(()=>[a(y,null,{default:n(()=>[a(_,null,{default:n(()=>[a(S,{id:`textAreaButton1`,variant:`control`},{default:n(()=>[...i[14]||=[c(`Button`,-1)]]),_:1})]),_:1}),a(_,{fill:``},{default:n(()=>[a(x,{id:`textarea1`,name:`textarea1`,"aria-label":`textarea with buttons`})]),_:1}),a(_,null,{default:n(()=>[a(S,{variant:`control`},{default:n(()=>[...i[15]||=[c(`Button`,-1)]]),_:1})]),_:1})]),_:1}),i[20]||=r(`br`,null,null,-1),a(y,null,{default:n(()=>[a(_,null,{default:n(()=>[a(S,{id:`textAreaButton3`,variant:`control`},{default:n(()=>[...i[16]||=[c(`Button`,-1)]]),_:1})]),_:1}),a(_,null,{default:n(()=>[a(S,{variant:`control`},{default:n(()=>[...i[17]||=[c(`Button`,-1)]]),_:1})]),_:1}),a(_,{fill:``},{default:n(()=>[a(x,{id:`textarea2`,name:`textarea2`,"aria-label":`textarea with 3 buttons`})]),_:1}),a(_,null,{default:n(()=>[a(S,{variant:`control`},{default:n(()=>[...i[18]||=[c(`Button`,-1)]]),_:1})]),_:1})]),_:1}),i[21]||=r(`br`,null,null,-1),a(y,null,{default:n(()=>[a(v,null,{default:n(()=>[a(l(p))]),_:1}),a(_,{fill:``},{default:n(()=>[a(g,{id:`textInput-with-siblings`,name:`textInput-with-siblings`,type:`number`,"aria-label":`Dollar amount input example`})]),_:1}),a(v,null,{default:n(()=>[...i[19]||=[c(`.00`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})}}});export{m as default};