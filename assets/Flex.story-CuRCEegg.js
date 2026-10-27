import{F as e,K as t,c as n,g as r,h as i,j as a,l as o,m as s}from"./runtime-core.esm-bundler-DO1530YC.js";import{t as c}from"./Flex-demo-BeL0zFJA.js";var l=r({__name:`Flex.story`,setup(r){return(r,l)=>{let u=e(`component-info`),d=e(`pf-flex-item`),f=e(`pf-flex`),p=e(`story-canvas`),m=e(`doc-page`);return a(),o(m,{name:`Layouts/Flex.story.vue`,class:`page__layouts`,title:`Flex`,"doc-section":`layouts`},{description:t(()=>[...l[0]||=[n(`div`,{class:`markdown pf-v6-c-content`},[n(`p`,null,[s(`The `),n(`strong`,null,`flex`),s(` layout supports a completely custom layout by utilizing the PatternFly spacer and breakpoint systems. Flex layouts are infinitely nestable and allow you to adjust spacing, direction, alignment, justification, wrapping, and width to fit your needs.`)])],-1)]]),apidocs:t(()=>[i(u,{name:`PfFlex`}),i(u,{name:`PfFlexItem`})]),default:t(()=>[i(p,{title:`Basic`,source:`<pf-flex justify-content="space-evenly">
  <pf-flex-item align-self-sm="flex-start">Flex 1</pf-flex-item>
  <pf-flex-item align-self-sm="flex-start" grow-md>Flex 2</pf-flex-item>
</pf-flex>`},{default:t(()=>[i(f,{"justify-content":`space-evenly`},{default:t(()=>[i(d,{"align-self-sm":`flex-start`},{default:t(()=>[...l[1]||=[s(`Flex 1`,-1)]]),_:1}),i(d,{"align-self-sm":`flex-start`,"grow-md":``},{default:t(()=>[...l[2]||=[s(`Flex 2`,-1)]]),_:1})]),_:1})]),_:1}),i(p,{title:`Nested`,source:`<pf-flex>
  <pf-flex flex="1">
    <pf-flex-item>Flex item</pf-flex-item>
  </pf-flex>
  <pf-flex flex="1">
    <pf-flex-item>Flex item</pf-flex-item>
    <pf-flex-item grow>Flex item</pf-flex-item>
  </pf-flex>
  <pf-flex flex="1">
    <pf-flex-item>Flex item</pf-flex-item>
    <pf-flex-item>Flex item</pf-flex-item>
    <pf-flex-item>Flex item</pf-flex-item>
  </pf-flex>
</pf-flex>`},{default:t(()=>[i(f,null,{default:t(()=>[i(f,{flex:`1`},{default:t(()=>[i(d,null,{default:t(()=>[...l[3]||=[s(`Flex item`,-1)]]),_:1})]),_:1}),i(f,{flex:`1`},{default:t(()=>[i(d,null,{default:t(()=>[...l[4]||=[s(`Flex item`,-1)]]),_:1}),i(d,{grow:``},{default:t(()=>[...l[5]||=[s(`Flex item`,-1)]]),_:1})]),_:1}),i(f,{flex:`1`},{default:t(()=>[i(d,null,{default:t(()=>[...l[6]||=[s(`Flex item`,-1)]]),_:1}),i(d,null,{default:t(()=>[...l[7]||=[s(`Flex item`,-1)]]),_:1}),i(d,null,{default:t(()=>[...l[8]||=[s(`Flex item`,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),i(p,{title:`Column`,source:`<pf-flex direction="column" flex-wrap="nowrap" space-items="none" style="height: 250px">
  <pf-flex-item align-self-sm="flex-start">Flex 1</pf-flex-item>
  <pf-flex-item align-self-sm="flex-end" grow>Flex 2</pf-flex-item>
</pf-flex>`},{default:t(()=>[i(f,{direction:`column`,"flex-wrap":`nowrap`,"space-items":`none`,style:{height:`250px`}},{default:t(()=>[i(d,{"align-self-sm":`flex-start`},{default:t(()=>[...l[9]||=[s(`Flex 1`,-1)]]),_:1}),i(d,{"align-self-sm":`flex-end`,grow:``},{default:t(()=>[...l[10]||=[s(`Flex 2`,-1)]]),_:1})]),_:1})]),_:1}),i(p,{title:`Inline`,source:`<pf-flex display="inline-flex">
  <pf-flex-item>Flex item</pf-flex-item>
  <pf-flex-item>Flex item</pf-flex-item>
  <pf-flex-item>Flex item</pf-flex-item>
  <pf-flex-item>Flex item</pf-flex-item>
  <pf-flex-item>Flex item</pf-flex-item>
</pf-flex>`},{default:t(()=>[i(f,{display:`inline-flex`},{default:t(()=>[i(d,null,{default:t(()=>[...l[11]||=[s(`Flex item`,-1)]]),_:1}),i(d,null,{default:t(()=>[...l[12]||=[s(`Flex item`,-1)]]),_:1}),i(d,null,{default:t(()=>[...l[13]||=[s(`Flex item`,-1)]]),_:1}),i(d,null,{default:t(()=>[...l[14]||=[s(`Flex item`,-1)]]),_:1}),i(d,null,{default:t(()=>[...l[15]||=[s(`Flex item`,-1)]]),_:1})]),_:1})]),_:1}),i(p,{title:`Gap`,source:`<pf-flex gap="2xl">
  <pf-flex-item>Flex item</pf-flex-item>
  <pf-flex-item>Flex item</pf-flex-item>
  <pf-flex-item>Flex item</pf-flex-item>
  <pf-flex-item>Flex item</pf-flex-item>
  <pf-flex-item>Flex item</pf-flex-item>
  <pf-flex-item>Flex item</pf-flex-item>
  <pf-flex-item>Flex item</pf-flex-item>
  <pf-flex-item>Flex item</pf-flex-item>
  <pf-flex-item>Flex item</pf-flex-item>
  <pf-flex-item>Flex item</pf-flex-item>
</pf-flex>`},{default:t(()=>[i(f,{gap:`2xl`},{default:t(()=>[i(d,null,{default:t(()=>[...l[16]||=[s(`Flex item`,-1)]]),_:1}),i(d,null,{default:t(()=>[...l[17]||=[s(`Flex item`,-1)]]),_:1}),i(d,null,{default:t(()=>[...l[18]||=[s(`Flex item`,-1)]]),_:1}),i(d,null,{default:t(()=>[...l[19]||=[s(`Flex item`,-1)]]),_:1}),i(d,null,{default:t(()=>[...l[20]||=[s(`Flex item`,-1)]]),_:1}),i(d,null,{default:t(()=>[...l[21]||=[s(`Flex item`,-1)]]),_:1}),i(d,null,{default:t(()=>[...l[22]||=[s(`Flex item`,-1)]]),_:1}),i(d,null,{default:t(()=>[...l[23]||=[s(`Flex item`,-1)]]),_:1}),i(d,null,{default:t(()=>[...l[24]||=[s(`Flex item`,-1)]]),_:1}),i(d,null,{default:t(()=>[...l[25]||=[s(`Flex item`,-1)]]),_:1})]),_:1})]),_:1}),i(p,{title:`Row gap`,source:`<pf-flex row-gap="2xl">
  <pf-flex-item>Flex item</pf-flex-item>
  <pf-flex-item>Flex item</pf-flex-item>
  <pf-flex-item>Flex item</pf-flex-item>
  <pf-flex-item>Flex item</pf-flex-item>
  <pf-flex-item>Flex item</pf-flex-item>
  <pf-flex-item>Flex item</pf-flex-item>
  <pf-flex-item>Flex item</pf-flex-item>
  <pf-flex-item>Flex item</pf-flex-item>
  <pf-flex-item>Flex item</pf-flex-item>
  <pf-flex-item>Flex item</pf-flex-item>
</pf-flex>`},{default:t(()=>[i(f,{"row-gap":`2xl`},{default:t(()=>[i(d,null,{default:t(()=>[...l[26]||=[s(`Flex item`,-1)]]),_:1}),i(d,null,{default:t(()=>[...l[27]||=[s(`Flex item`,-1)]]),_:1}),i(d,null,{default:t(()=>[...l[28]||=[s(`Flex item`,-1)]]),_:1}),i(d,null,{default:t(()=>[...l[29]||=[s(`Flex item`,-1)]]),_:1}),i(d,null,{default:t(()=>[...l[30]||=[s(`Flex item`,-1)]]),_:1}),i(d,null,{default:t(()=>[...l[31]||=[s(`Flex item`,-1)]]),_:1}),i(d,null,{default:t(()=>[...l[32]||=[s(`Flex item`,-1)]]),_:1}),i(d,null,{default:t(()=>[...l[33]||=[s(`Flex item`,-1)]]),_:1}),i(d,null,{default:t(()=>[...l[34]||=[s(`Flex item`,-1)]]),_:1}),i(d,null,{default:t(()=>[...l[35]||=[s(`Flex item`,-1)]]),_:1})]),_:1})]),_:1}),i(p,{title:`Column gap`,source:`<pf-flex column-gap="2xl">
  <pf-flex-item>Flex item</pf-flex-item>
  <pf-flex-item>Flex item</pf-flex-item>
  <pf-flex-item>Flex item</pf-flex-item>
  <pf-flex-item>Flex item</pf-flex-item>
  <pf-flex-item>Flex item</pf-flex-item>
  <pf-flex-item>Flex item</pf-flex-item>
  <pf-flex-item>Flex item</pf-flex-item>
  <pf-flex-item>Flex item</pf-flex-item>
  <pf-flex-item>Flex item</pf-flex-item>
  <pf-flex-item>Flex item</pf-flex-item>
</pf-flex>`},{default:t(()=>[i(f,{"column-gap":`2xl`},{default:t(()=>[i(d,null,{default:t(()=>[...l[36]||=[s(`Flex item`,-1)]]),_:1}),i(d,null,{default:t(()=>[...l[37]||=[s(`Flex item`,-1)]]),_:1}),i(d,null,{default:t(()=>[...l[38]||=[s(`Flex item`,-1)]]),_:1}),i(d,null,{default:t(()=>[...l[39]||=[s(`Flex item`,-1)]]),_:1}),i(d,null,{default:t(()=>[...l[40]||=[s(`Flex item`,-1)]]),_:1}),i(d,null,{default:t(()=>[...l[41]||=[s(`Flex item`,-1)]]),_:1}),i(d,null,{default:t(()=>[...l[42]||=[s(`Flex item`,-1)]]),_:1}),i(d,null,{default:t(()=>[...l[43]||=[s(`Flex item`,-1)]]),_:1}),i(d,null,{default:t(()=>[...l[44]||=[s(`Flex item`,-1)]]),_:1}),i(d,null,{default:t(()=>[...l[45]||=[s(`Flex item`,-1)]]),_:1})]),_:1})]),_:1}),i(c)]),_:1})}}});export{l as default};