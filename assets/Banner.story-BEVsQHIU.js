import{F as e,K as t,c as n,g as r,h as i,j as a,l as o,m as s,pt as c}from"./runtime-core.esm-bundler-DO1530YC.js";import{B as l,H as u,U as d,V as f,z as p}from"./index-CUsetNQE.js";var m=r({__name:`Banner.story`,setup(r){return(r,m)=>{let h=e(`component-info`),g=e(`pf-banner`),_=e(`story-canvas`),v=e(`pf-flex-item`),y=e(`pf-flex`),b=e(`doc-page`);return a(),o(b,{name:`Components/Banner.story.vue`,title:`Banner`},{description:t(()=>[...m[0]||=[s(`A `,-1),n(`b`,null,`banner`,-1),s(` is a 1-line, full color, full width container that can be used to communicate short snippets of information to users. Banners are un-intrusive and non-dismissible.`,-1)]]),apidocs:t(()=>[i(h,{name:`PfBanner`,doc:{name:`PfBanner`,exportName:`PfBanner`,displayName:`Banner`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`sticky`,description:`If set to true, the banner sticks to the top of its container`,required:!1,type:{name:`boolean`}},{name:`pill`,description:`If set to true, the banner will have a pill shape`,required:!1,type:{name:`boolean`}},{name:`screenReaderText`,description:`Text announced by screen readers to indicate the type of banner. This prop should only
be passed in when the banner conveys status/severity.`,required:!1,type:{name:`string`}},{name:`color`,description:`Color options for the banner, will be overwritten by any applied using the status prop.`,required:!1,type:{name:`union`,elements:[{name:`"red"`},{name:`"orangered"`},{name:`"orange"`},{name:`"yellow"`},{name:`"green"`},{name:`"teal"`},{name:`"blue"`},{name:`"purple"`}]}},{name:`status`,description:`Status style options for the banner, will overwrite any color applied using the color prop.`,required:!1,type:{name:`union`,elements:[{name:`"success"`},{name:`"warning"`},{name:`"danger"`},{name:`"info"`},{name:`"custom"`}]}}],events:[],slots:[{name:`screen-reader-text`},{name:`default`,description:`Content rendered inside the banner.`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Banner.vue`]}})]),default:t(()=>[m[35]||=n(`div`,{class:`markdown pf-v6-c-content`},[n(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),n(`ul`,null,[n(`li`,null,[s(`The `),n(`code`,null,`screen-reader-text`),s(` slot can replace the `),n(`code`,null,`screen-reader-text`),s(` prop.`)])]),n(`p`,null,[s(`See `),n(`a`,{href:`#/`},`common differences from patternfly-react`),s(`.`)]),n(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),i(_,{title:`Basic`,source:`<pf-banner>Default banner</pf-banner>
<br>
<pf-banner color="red">Red banner</pf-banner>
<br>
<pf-banner color="orangered">Orangered banner</pf-banner>
<br>
<pf-banner color="orange">Orange banner</pf-banner>
<br>
<pf-banner color="yellow">Yellow banner</pf-banner>
<br>
<pf-banner color="green">Green banner</pf-banner>
<br>
<pf-banner color="teal">Teal banner</pf-banner>
<br>
<pf-banner color="blue">Blue banner</pf-banner>
<br>
<pf-banner color="purple">Purple banner</pf-banner>`},{intro:t(()=>[...m[1]||=[n(`div`,{class:`markdown pf-v6-c-content`},[n(`p`,null,[s(`Banners can be styled with one of 9 different colors using the `),n(`code`,null,`color`),s(` prop. A basic banner should only be used when the banner color does not represent status or severity.`)])],-1)]]),default:t(()=>[i(g,null,{default:t(()=>[...m[2]||=[s(`Default banner`,-1)]]),_:1}),m[11]||=n(`br`,null,null,-1),i(g,{color:`red`},{default:t(()=>[...m[3]||=[s(`Red banner`,-1)]]),_:1}),m[12]||=n(`br`,null,null,-1),i(g,{color:`orangered`},{default:t(()=>[...m[4]||=[s(`Orangered banner`,-1)]]),_:1}),m[13]||=n(`br`,null,null,-1),i(g,{color:`orange`},{default:t(()=>[...m[5]||=[s(`Orange banner`,-1)]]),_:1}),m[14]||=n(`br`,null,null,-1),i(g,{color:`yellow`},{default:t(()=>[...m[6]||=[s(`Yellow banner`,-1)]]),_:1}),m[15]||=n(`br`,null,null,-1),i(g,{color:`green`},{default:t(()=>[...m[7]||=[s(`Green banner`,-1)]]),_:1}),m[16]||=n(`br`,null,null,-1),i(g,{color:`teal`},{default:t(()=>[...m[8]||=[s(`Teal banner`,-1)]]),_:1}),m[17]||=n(`br`,null,null,-1),i(g,{color:`blue`},{default:t(()=>[...m[9]||=[s(`Blue banner`,-1)]]),_:1}),m[18]||=n(`br`,null,null,-1),i(g,{color:`purple`},{default:t(()=>[...m[10]||=[s(`Purple banner`,-1)]]),_:1})]),_:1}),i(_,{title:`Status`,source:`<pf-banner status="success" screen-reader-text="Success banner">
  <pf-flex space-items="sm">
    <pf-flex-item>
      <circle-check-icon />
    </pf-flex-item>
    <pf-flex-item>Success banner</pf-flex-item>
  </pf-flex>
</pf-banner>
<br>
<pf-banner status="warning" screen-reader-text="Warning banner">
  <pf-flex space-items="sm">
    <pf-flex-item>
      <triangle-exclamation-icon />
    </pf-flex-item>
    <pf-flex-item>Warning banner</pf-flex-item>
  </pf-flex>
</pf-banner>
<br>
<pf-banner status="danger" screen-reader-text="Danger banner">
  <pf-flex space-items="sm">
    <pf-flex-item>
      <circle-exclamation-icon />
    </pf-flex-item>
    <pf-flex-item>Danger banner</pf-flex-item>
  </pf-flex>
</pf-banner>
<br>
<pf-banner status="info" screen-reader-text="Info banner">
  <pf-flex space-items="sm">
    <pf-flex-item>
      <circle-info-icon />
    </pf-flex-item>
    <pf-flex-item>Info banner</pf-flex-item>
  </pf-flex>
</pf-banner>
<br>
<pf-banner status="custom" screen-reader-text="Custom banner">
  <pf-flex space-items="sm">
    <pf-flex-item>
      <bell-icon />
    </pf-flex-item>
    <pf-flex-item>Custom banner</pf-flex-item>
  </pf-flex>
</pf-banner>`},{intro:t(()=>[...m[19]||=[n(`div`,{class:`markdown pf-v6-c-content`},[n(`p`,null,[s(`When a banner is used to convey status it should be styled using the `),n(`code`,null,`status`),s(` prop. Additionally, it is advised to pass an icon inside the banner to convey the status in a way besides just color.`)]),n(`p`,null,[s(`The `),n(`code`,null,`screen-reader-text`),s(` prop should also be passed in to convey the status/severity of the banner to users of certain assistive technologies such as screen readers.`)]),n(`p`,null,`In the following example, a flex layout is used inside the banner content to show one possible way to create spacing between the icons and banner text.`)],-1)]]),default:t(()=>[i(g,{status:`success`,"screen-reader-text":`Success banner`},{default:t(()=>[i(y,{"space-items":`sm`},{default:t(()=>[i(v,null,{default:t(()=>[i(c(d))]),_:1}),i(v,null,{default:t(()=>[...m[20]||=[s(`Success banner`,-1)]]),_:1})]),_:1})]),_:1}),m[25]||=n(`br`,null,null,-1),i(g,{status:`warning`,"screen-reader-text":`Warning banner`},{default:t(()=>[i(y,{"space-items":`sm`},{default:t(()=>[i(v,null,{default:t(()=>[i(c(f))]),_:1}),i(v,null,{default:t(()=>[...m[21]||=[s(`Warning banner`,-1)]]),_:1})]),_:1})]),_:1}),m[26]||=n(`br`,null,null,-1),i(g,{status:`danger`,"screen-reader-text":`Danger banner`},{default:t(()=>[i(y,{"space-items":`sm`},{default:t(()=>[i(v,null,{default:t(()=>[i(c(u))]),_:1}),i(v,null,{default:t(()=>[...m[22]||=[s(`Danger banner`,-1)]]),_:1})]),_:1})]),_:1}),m[27]||=n(`br`,null,null,-1),i(g,{status:`info`,"screen-reader-text":`Info banner`},{default:t(()=>[i(y,{"space-items":`sm`},{default:t(()=>[i(v,null,{default:t(()=>[i(c(l))]),_:1}),i(v,null,{default:t(()=>[...m[23]||=[s(`Info banner`,-1)]]),_:1})]),_:1})]),_:1}),m[28]||=n(`br`,null,null,-1),i(g,{status:`custom`,"screen-reader-text":`Custom banner`},{default:t(()=>[i(y,{"space-items":`sm`},{default:t(()=>[i(v,null,{default:t(()=>[i(c(p))]),_:1}),i(v,null,{default:t(()=>[...m[24]||=[s(`Custom banner`,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),i(_,{title:`Pill`,source:`<pf-banner pill>Default pill banner</pf-banner>
<br>
<pf-banner color="red" pill>Red pill banner</pf-banner>
<br>
<pf-banner pill screen-reader-text="Success pill banner" status="success">
  <pf-flex space-items="sm">
    <pf-flex-item>
      <circle-check-icon />
    </pf-flex-item>
    <pf-flex-item>Success pill banner</pf-flex-item>
  </pf-flex>
</pf-banner>`},{intro:t(()=>[...m[29]||=[n(`div`,{class:`markdown pf-v6-c-content`},[n(`p`,null,[s(`Banners may also have a rounded pill style by passing the `),n(`code`,null,`pill`),s(` prop.`)])],-1)]]),default:t(()=>[i(g,{pill:``},{default:t(()=>[...m[30]||=[s(`Default pill banner`,-1)]]),_:1}),m[33]||=n(`br`,null,null,-1),i(g,{color:`red`,pill:``},{default:t(()=>[...m[31]||=[s(`Red pill banner`,-1)]]),_:1}),m[34]||=n(`br`,null,null,-1),i(g,{pill:``,"screen-reader-text":`Success pill banner`,status:`success`},{default:t(()=>[i(y,{"space-items":`sm`},{default:t(()=>[i(v,null,{default:t(()=>[i(c(d))]),_:1}),i(v,null,{default:t(()=>[...m[32]||=[s(`Success pill banner`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}});export{m as default};