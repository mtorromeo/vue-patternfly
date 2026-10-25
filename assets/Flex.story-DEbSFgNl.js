import{N as e,U as t,c as n,h as r,k as i,m as a,p as o,s}from"./runtime-core.esm-bundler-C7C7Sr-n.js";import{t as c}from"./Flex-demo-CCJ6KpDx.js";var l=r({__name:`Flex.story`,setup(r){return(r,l)=>{let u=e(`component-info`),d=e(`pf-flex-item`),f=e(`pf-flex`),p=e(`story-canvas`),m=e(`doc-page`);return i(),n(m,{name:`Layouts/Flex.story.vue`,class:`page__layouts`,title:`Flex`,"doc-section":`layouts`},{description:t(()=>[...l[0]||=[s(`div`,{class:`markdown pf-v6-c-content`},[s(`p`,null,[o(`The `),s(`strong`,null,`flex`),o(` layout supports a completely custom layout by utilizing the PatternFly spacer and breakpoint systems. Flex layouts are infinitely nestable and allow you to adjust spacing, direction, alignment, justification, wrapping, and width to fit your needs.`)])],-1)]]),apidocs:t(()=>[a(u,{name:`PfFlex`}),a(u,{name:`PfFlexItem`})]),default:t(()=>[a(p,{title:`Basic`,source:`<pf-flex justify-content="space-evenly">
  <pf-flex-item align-self-sm="flex-start">Flex 1</pf-flex-item>
  <pf-flex-item align-self-sm="flex-start" grow-md>Flex 2</pf-flex-item>
</pf-flex>`},{default:t(()=>[a(f,{"justify-content":`space-evenly`},{default:t(()=>[a(d,{"align-self-sm":`flex-start`},{default:t(()=>[...l[1]||=[o(`Flex 1`,-1)]]),_:1}),a(d,{"align-self-sm":`flex-start`,"grow-md":``},{default:t(()=>[...l[2]||=[o(`Flex 2`,-1)]]),_:1})]),_:1})]),_:1}),a(p,{title:`Nested`,source:`<pf-flex>
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
</pf-flex>`},{default:t(()=>[a(f,null,{default:t(()=>[a(f,{flex:`1`},{default:t(()=>[a(d,null,{default:t(()=>[...l[3]||=[o(`Flex item`,-1)]]),_:1})]),_:1}),a(f,{flex:`1`},{default:t(()=>[a(d,null,{default:t(()=>[...l[4]||=[o(`Flex item`,-1)]]),_:1}),a(d,{grow:``},{default:t(()=>[...l[5]||=[o(`Flex item`,-1)]]),_:1})]),_:1}),a(f,{flex:`1`},{default:t(()=>[a(d,null,{default:t(()=>[...l[6]||=[o(`Flex item`,-1)]]),_:1}),a(d,null,{default:t(()=>[...l[7]||=[o(`Flex item`,-1)]]),_:1}),a(d,null,{default:t(()=>[...l[8]||=[o(`Flex item`,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),a(p,{title:`Column`,source:`<pf-flex direction="column" flex-wrap="nowrap" space-items="none" style="height: 250px">
  <pf-flex-item align-self-sm="flex-start">Flex 1</pf-flex-item>
  <pf-flex-item align-self-sm="flex-end" grow>Flex 2</pf-flex-item>
</pf-flex>`},{default:t(()=>[a(f,{direction:`column`,"flex-wrap":`nowrap`,"space-items":`none`,style:{height:`250px`}},{default:t(()=>[a(d,{"align-self-sm":`flex-start`},{default:t(()=>[...l[9]||=[o(`Flex 1`,-1)]]),_:1}),a(d,{"align-self-sm":`flex-end`,grow:``},{default:t(()=>[...l[10]||=[o(`Flex 2`,-1)]]),_:1})]),_:1})]),_:1}),a(p,{title:`Inline`,source:`<pf-flex display="inline-flex">
  <pf-flex-item>Flex item</pf-flex-item>
  <pf-flex-item>Flex item</pf-flex-item>
  <pf-flex-item>Flex item</pf-flex-item>
  <pf-flex-item>Flex item</pf-flex-item>
  <pf-flex-item>Flex item</pf-flex-item>
</pf-flex>`},{default:t(()=>[a(f,{display:`inline-flex`},{default:t(()=>[a(d,null,{default:t(()=>[...l[11]||=[o(`Flex item`,-1)]]),_:1}),a(d,null,{default:t(()=>[...l[12]||=[o(`Flex item`,-1)]]),_:1}),a(d,null,{default:t(()=>[...l[13]||=[o(`Flex item`,-1)]]),_:1}),a(d,null,{default:t(()=>[...l[14]||=[o(`Flex item`,-1)]]),_:1}),a(d,null,{default:t(()=>[...l[15]||=[o(`Flex item`,-1)]]),_:1})]),_:1})]),_:1}),a(p,{title:`Gap`,source:`<pf-flex gap="2xl">
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
</pf-flex>`},{default:t(()=>[a(f,{gap:`2xl`},{default:t(()=>[a(d,null,{default:t(()=>[...l[16]||=[o(`Flex item`,-1)]]),_:1}),a(d,null,{default:t(()=>[...l[17]||=[o(`Flex item`,-1)]]),_:1}),a(d,null,{default:t(()=>[...l[18]||=[o(`Flex item`,-1)]]),_:1}),a(d,null,{default:t(()=>[...l[19]||=[o(`Flex item`,-1)]]),_:1}),a(d,null,{default:t(()=>[...l[20]||=[o(`Flex item`,-1)]]),_:1}),a(d,null,{default:t(()=>[...l[21]||=[o(`Flex item`,-1)]]),_:1}),a(d,null,{default:t(()=>[...l[22]||=[o(`Flex item`,-1)]]),_:1}),a(d,null,{default:t(()=>[...l[23]||=[o(`Flex item`,-1)]]),_:1}),a(d,null,{default:t(()=>[...l[24]||=[o(`Flex item`,-1)]]),_:1}),a(d,null,{default:t(()=>[...l[25]||=[o(`Flex item`,-1)]]),_:1})]),_:1})]),_:1}),a(p,{title:`Row gap`,source:`<pf-flex row-gap="2xl">
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
</pf-flex>`},{default:t(()=>[a(f,{"row-gap":`2xl`},{default:t(()=>[a(d,null,{default:t(()=>[...l[26]||=[o(`Flex item`,-1)]]),_:1}),a(d,null,{default:t(()=>[...l[27]||=[o(`Flex item`,-1)]]),_:1}),a(d,null,{default:t(()=>[...l[28]||=[o(`Flex item`,-1)]]),_:1}),a(d,null,{default:t(()=>[...l[29]||=[o(`Flex item`,-1)]]),_:1}),a(d,null,{default:t(()=>[...l[30]||=[o(`Flex item`,-1)]]),_:1}),a(d,null,{default:t(()=>[...l[31]||=[o(`Flex item`,-1)]]),_:1}),a(d,null,{default:t(()=>[...l[32]||=[o(`Flex item`,-1)]]),_:1}),a(d,null,{default:t(()=>[...l[33]||=[o(`Flex item`,-1)]]),_:1}),a(d,null,{default:t(()=>[...l[34]||=[o(`Flex item`,-1)]]),_:1}),a(d,null,{default:t(()=>[...l[35]||=[o(`Flex item`,-1)]]),_:1})]),_:1})]),_:1}),a(p,{title:`Column gap`,source:`<pf-flex column-gap="2xl">
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
</pf-flex>`},{default:t(()=>[a(f,{"column-gap":`2xl`},{default:t(()=>[a(d,null,{default:t(()=>[...l[36]||=[o(`Flex item`,-1)]]),_:1}),a(d,null,{default:t(()=>[...l[37]||=[o(`Flex item`,-1)]]),_:1}),a(d,null,{default:t(()=>[...l[38]||=[o(`Flex item`,-1)]]),_:1}),a(d,null,{default:t(()=>[...l[39]||=[o(`Flex item`,-1)]]),_:1}),a(d,null,{default:t(()=>[...l[40]||=[o(`Flex item`,-1)]]),_:1}),a(d,null,{default:t(()=>[...l[41]||=[o(`Flex item`,-1)]]),_:1}),a(d,null,{default:t(()=>[...l[42]||=[o(`Flex item`,-1)]]),_:1}),a(d,null,{default:t(()=>[...l[43]||=[o(`Flex item`,-1)]]),_:1}),a(d,null,{default:t(()=>[...l[44]||=[o(`Flex item`,-1)]]),_:1}),a(d,null,{default:t(()=>[...l[45]||=[o(`Flex item`,-1)]]),_:1})]),_:1})]),_:1}),a(c)]),_:1})}}});export{l as default};