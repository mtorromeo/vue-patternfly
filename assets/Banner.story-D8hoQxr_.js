import{N as e,U as t,at as n,c as r,h as i,k as a,m as o,p as s,s as c}from"./runtime-core.esm-bundler-BHp59X9g.js";import{g as l,h as u,m as d,p as f}from"./index-BKQOYPID.js";var p=i({__name:`Banner.story`,setup(i){return(i,p)=>{let m=e(`component-info`),h=e(`pf-banner`),g=e(`story-canvas`),_=e(`pf-flex-item`),v=e(`pf-flex`),y=e(`doc-page`);return a(),r(y,{name:`Components/Banner.story.vue`,title:`Banner`},{description:t(()=>[...p[0]||=[s(`A `,-1),c(`b`,null,`banner`,-1),s(` is a 1-line, full color, full width container that can be used to communicate short snippets of information to users. Banners are un-intrusive and non-dismissible.`,-1)]]),apidocs:t(()=>[o(m,{name:`PfBanner`,doc:{name:`PfBanner`,exportName:`PfBanner`,displayName:`Banner`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`sticky`,description:`If set to true, the banner sticks to the top of its container`,required:!1,type:{name:`boolean`}},{name:`pill`,description:`If set to true, the banner will have a pill shape`,required:!1,type:{name:`boolean`}},{name:`screenReaderText`,description:`Text announced by screen readers to indicate the type of banner. This prop should only
be passed in when the banner conveys status/severity.`,required:!1,type:{name:`string`}},{name:`color`,description:`Color options for the banner, will be overwritten by any applied using the status prop.`,required:!1,type:{name:`union`,elements:[{name:`"red"`},{name:`"orangered"`},{name:`"orange"`},{name:`"yellow"`},{name:`"green"`},{name:`"teal"`},{name:`"blue"`},{name:`"purple"`}]}},{name:`status`,description:`Status style options for the banner, will overwrite any color applied using the color prop.`,required:!1,type:{name:`union`,elements:[{name:`"success"`},{name:`"warning"`},{name:`"danger"`},{name:`"info"`},{name:`"custom"`}]}}],events:[],slots:[{name:`screen-reader-text`},{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Banner.vue`]}})]),default:t(()=>[o(g,{title:`Basic`,source:`<pf-banner>Default banner</pf-banner>
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
<pf-banner color="purple">Purple banner</pf-banner>`},{default:t(()=>[o(h,null,{default:t(()=>[...p[1]||=[s(`Default banner`,-1)]]),_:1}),p[10]||=c(`br`,null,null,-1),o(h,{color:`red`},{default:t(()=>[...p[2]||=[s(`Red banner`,-1)]]),_:1}),p[11]||=c(`br`,null,null,-1),o(h,{color:`orangered`},{default:t(()=>[...p[3]||=[s(`Orangered banner`,-1)]]),_:1}),p[12]||=c(`br`,null,null,-1),o(h,{color:`orange`},{default:t(()=>[...p[4]||=[s(`Orange banner`,-1)]]),_:1}),p[13]||=c(`br`,null,null,-1),o(h,{color:`yellow`},{default:t(()=>[...p[5]||=[s(`Yellow banner`,-1)]]),_:1}),p[14]||=c(`br`,null,null,-1),o(h,{color:`green`},{default:t(()=>[...p[6]||=[s(`Green banner`,-1)]]),_:1}),p[15]||=c(`br`,null,null,-1),o(h,{color:`teal`},{default:t(()=>[...p[7]||=[s(`Teal banner`,-1)]]),_:1}),p[16]||=c(`br`,null,null,-1),o(h,{color:`blue`},{default:t(()=>[...p[8]||=[s(`Blue banner`,-1)]]),_:1}),p[17]||=c(`br`,null,null,-1),o(h,{color:`purple`},{default:t(()=>[...p[9]||=[s(`Purple banner`,-1)]]),_:1})]),_:1}),o(g,{title:`Status`,source:`<pf-banner status="success" screen-reader-text="Success banner">
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
      <triangle-exclamation-icon />
    </pf-flex-item>
    <pf-flex-item>Custom banner</pf-flex-item>
  </pf-flex>
</pf-banner>`},{default:t(()=>[o(h,{status:`success`,"screen-reader-text":`Success banner`},{default:t(()=>[o(v,{"space-items":`sm`},{default:t(()=>[o(_,null,{default:t(()=>[o(n(l))]),_:1}),o(_,null,{default:t(()=>[...p[18]||=[s(`Success banner`,-1)]]),_:1})]),_:1})]),_:1}),p[23]||=c(`br`,null,null,-1),o(h,{status:`warning`,"screen-reader-text":`Warning banner`},{default:t(()=>[o(v,{"space-items":`sm`},{default:t(()=>[o(_,null,{default:t(()=>[o(n(d))]),_:1}),o(_,null,{default:t(()=>[...p[19]||=[s(`Warning banner`,-1)]]),_:1})]),_:1})]),_:1}),p[24]||=c(`br`,null,null,-1),o(h,{status:`danger`,"screen-reader-text":`Danger banner`},{default:t(()=>[o(v,{"space-items":`sm`},{default:t(()=>[o(_,null,{default:t(()=>[o(n(u))]),_:1}),o(_,null,{default:t(()=>[...p[20]||=[s(`Danger banner`,-1)]]),_:1})]),_:1})]),_:1}),p[25]||=c(`br`,null,null,-1),o(h,{status:`info`,"screen-reader-text":`Info banner`},{default:t(()=>[o(v,{"space-items":`sm`},{default:t(()=>[o(_,null,{default:t(()=>[o(n(f))]),_:1}),o(_,null,{default:t(()=>[...p[21]||=[s(`Info banner`,-1)]]),_:1})]),_:1})]),_:1}),p[26]||=c(`br`,null,null,-1),o(h,{status:`custom`,"screen-reader-text":`Custom banner`},{default:t(()=>[o(v,{"space-items":`sm`},{default:t(()=>[o(_,null,{default:t(()=>[o(n(d))]),_:1}),o(_,null,{default:t(()=>[...p[22]||=[s(`Custom banner`,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),o(g,{title:`Pill`,source:`<pf-banner pill>Default banner</pf-banner>
<br>
<pf-banner pill color="red">Red banner</pf-banner>
<br>
<pf-banner pill color="orangered">Orangered banner</pf-banner>
<br>
<pf-banner pill color="orange">Orange banner</pf-banner>
<br>
<pf-banner pill color="yellow">Yellow banner</pf-banner>
<br>
<pf-banner pill color="green">Green banner</pf-banner>
<br>
<pf-banner pill color="teal">Teal banner</pf-banner>
<br>
<pf-banner pill color="blue">Blue banner</pf-banner>
<br>
<pf-banner pill color="purple">Purple banner</pf-banner>`},{default:t(()=>[o(h,{pill:``},{default:t(()=>[...p[27]||=[s(`Default banner`,-1)]]),_:1}),p[36]||=c(`br`,null,null,-1),o(h,{pill:``,color:`red`},{default:t(()=>[...p[28]||=[s(`Red banner`,-1)]]),_:1}),p[37]||=c(`br`,null,null,-1),o(h,{pill:``,color:`orangered`},{default:t(()=>[...p[29]||=[s(`Orangered banner`,-1)]]),_:1}),p[38]||=c(`br`,null,null,-1),o(h,{pill:``,color:`orange`},{default:t(()=>[...p[30]||=[s(`Orange banner`,-1)]]),_:1}),p[39]||=c(`br`,null,null,-1),o(h,{pill:``,color:`yellow`},{default:t(()=>[...p[31]||=[s(`Yellow banner`,-1)]]),_:1}),p[40]||=c(`br`,null,null,-1),o(h,{pill:``,color:`green`},{default:t(()=>[...p[32]||=[s(`Green banner`,-1)]]),_:1}),p[41]||=c(`br`,null,null,-1),o(h,{pill:``,color:`teal`},{default:t(()=>[...p[33]||=[s(`Teal banner`,-1)]]),_:1}),p[42]||=c(`br`,null,null,-1),o(h,{pill:``,color:`blue`},{default:t(()=>[...p[34]||=[s(`Blue banner`,-1)]]),_:1}),p[43]||=c(`br`,null,null,-1),o(h,{pill:``,color:`purple`},{default:t(()=>[...p[35]||=[s(`Purple banner`,-1)]]),_:1})]),_:1})]),_:1})}}});export{p as default};