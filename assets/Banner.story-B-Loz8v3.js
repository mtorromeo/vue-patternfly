import{N as e,U as t,c as n,h as r,k as i,m as a,p as o,s,st as c}from"./runtime-core.esm-bundler-Bo9Nr7Z8.js";import{g as l,h as u,m as d,p as f}from"./index-DEZgkdzS.js";var p=r({__name:`Banner.story`,setup(r){return(r,p)=>{let m=e(`component-info`),h=e(`pf-banner`),g=e(`story-canvas`),_=e(`pf-flex-item`),v=e(`pf-flex`),y=e(`doc-page`);return i(),n(y,{name:`Components/Banner.story.vue`,title:`Banner`},{description:t(()=>[...p[0]||=[o(`A `,-1),s(`b`,null,`banner`,-1),o(` is a 1-line, full color, full width container that can be used to communicate short snippets of information to users. Banners are un-intrusive and non-dismissible.`,-1)]]),apidocs:t(()=>[a(m,{name:`PfBanner`,doc:{name:`PfBanner`,exportName:`PfBanner`,displayName:`Banner`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`sticky`,description:`If set to true, the banner sticks to the top of its container`,required:!1,type:{name:`boolean`}},{name:`pill`,description:`If set to true, the banner will have a pill shape`,required:!1,type:{name:`boolean`}},{name:`screenReaderText`,description:`Text announced by screen readers to indicate the type of banner. This prop should only
be passed in when the banner conveys status/severity.`,required:!1,type:{name:`string`}},{name:`color`,description:`Color options for the banner, will be overwritten by any applied using the status prop.`,required:!1,type:{name:`union`,elements:[{name:`"red"`},{name:`"orangered"`},{name:`"orange"`},{name:`"yellow"`},{name:`"green"`},{name:`"teal"`},{name:`"blue"`},{name:`"purple"`}]}},{name:`status`,description:`Status style options for the banner, will overwrite any color applied using the color prop.`,required:!1,type:{name:`union`,elements:[{name:`"success"`},{name:`"warning"`},{name:`"danger"`},{name:`"info"`},{name:`"custom"`}]}}],events:[],slots:[{name:`screen-reader-text`},{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Banner.vue`]}})]),default:t(()=>[a(g,{title:`Basic`,source:`<pf-banner>Default banner</pf-banner>
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
<pf-banner color="purple">Purple banner</pf-banner>`},{default:t(()=>[a(h,null,{default:t(()=>[...p[1]||=[o(`Default banner`,-1)]]),_:1}),p[10]||=s(`br`,null,null,-1),a(h,{color:`red`},{default:t(()=>[...p[2]||=[o(`Red banner`,-1)]]),_:1}),p[11]||=s(`br`,null,null,-1),a(h,{color:`orangered`},{default:t(()=>[...p[3]||=[o(`Orangered banner`,-1)]]),_:1}),p[12]||=s(`br`,null,null,-1),a(h,{color:`orange`},{default:t(()=>[...p[4]||=[o(`Orange banner`,-1)]]),_:1}),p[13]||=s(`br`,null,null,-1),a(h,{color:`yellow`},{default:t(()=>[...p[5]||=[o(`Yellow banner`,-1)]]),_:1}),p[14]||=s(`br`,null,null,-1),a(h,{color:`green`},{default:t(()=>[...p[6]||=[o(`Green banner`,-1)]]),_:1}),p[15]||=s(`br`,null,null,-1),a(h,{color:`teal`},{default:t(()=>[...p[7]||=[o(`Teal banner`,-1)]]),_:1}),p[16]||=s(`br`,null,null,-1),a(h,{color:`blue`},{default:t(()=>[...p[8]||=[o(`Blue banner`,-1)]]),_:1}),p[17]||=s(`br`,null,null,-1),a(h,{color:`purple`},{default:t(()=>[...p[9]||=[o(`Purple banner`,-1)]]),_:1})]),_:1}),a(g,{title:`Status`,source:`<pf-banner status="success" screen-reader-text="Success banner">
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
</pf-banner>`},{default:t(()=>[a(h,{status:`success`,"screen-reader-text":`Success banner`},{default:t(()=>[a(v,{"space-items":`sm`},{default:t(()=>[a(_,null,{default:t(()=>[a(c(l))]),_:1}),a(_,null,{default:t(()=>[...p[18]||=[o(`Success banner`,-1)]]),_:1})]),_:1})]),_:1}),p[23]||=s(`br`,null,null,-1),a(h,{status:`warning`,"screen-reader-text":`Warning banner`},{default:t(()=>[a(v,{"space-items":`sm`},{default:t(()=>[a(_,null,{default:t(()=>[a(c(d))]),_:1}),a(_,null,{default:t(()=>[...p[19]||=[o(`Warning banner`,-1)]]),_:1})]),_:1})]),_:1}),p[24]||=s(`br`,null,null,-1),a(h,{status:`danger`,"screen-reader-text":`Danger banner`},{default:t(()=>[a(v,{"space-items":`sm`},{default:t(()=>[a(_,null,{default:t(()=>[a(c(u))]),_:1}),a(_,null,{default:t(()=>[...p[20]||=[o(`Danger banner`,-1)]]),_:1})]),_:1})]),_:1}),p[25]||=s(`br`,null,null,-1),a(h,{status:`info`,"screen-reader-text":`Info banner`},{default:t(()=>[a(v,{"space-items":`sm`},{default:t(()=>[a(_,null,{default:t(()=>[a(c(f))]),_:1}),a(_,null,{default:t(()=>[...p[21]||=[o(`Info banner`,-1)]]),_:1})]),_:1})]),_:1}),p[26]||=s(`br`,null,null,-1),a(h,{status:`custom`,"screen-reader-text":`Custom banner`},{default:t(()=>[a(v,{"space-items":`sm`},{default:t(()=>[a(_,null,{default:t(()=>[a(c(d))]),_:1}),a(_,null,{default:t(()=>[...p[22]||=[o(`Custom banner`,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),a(g,{title:`Pill`,source:`<pf-banner pill>Default banner</pf-banner>
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
<pf-banner pill color="purple">Purple banner</pf-banner>`},{default:t(()=>[a(h,{pill:``},{default:t(()=>[...p[27]||=[o(`Default banner`,-1)]]),_:1}),p[36]||=s(`br`,null,null,-1),a(h,{pill:``,color:`red`},{default:t(()=>[...p[28]||=[o(`Red banner`,-1)]]),_:1}),p[37]||=s(`br`,null,null,-1),a(h,{pill:``,color:`orangered`},{default:t(()=>[...p[29]||=[o(`Orangered banner`,-1)]]),_:1}),p[38]||=s(`br`,null,null,-1),a(h,{pill:``,color:`orange`},{default:t(()=>[...p[30]||=[o(`Orange banner`,-1)]]),_:1}),p[39]||=s(`br`,null,null,-1),a(h,{pill:``,color:`yellow`},{default:t(()=>[...p[31]||=[o(`Yellow banner`,-1)]]),_:1}),p[40]||=s(`br`,null,null,-1),a(h,{pill:``,color:`green`},{default:t(()=>[...p[32]||=[o(`Green banner`,-1)]]),_:1}),p[41]||=s(`br`,null,null,-1),a(h,{pill:``,color:`teal`},{default:t(()=>[...p[33]||=[o(`Teal banner`,-1)]]),_:1}),p[42]||=s(`br`,null,null,-1),a(h,{pill:``,color:`blue`},{default:t(()=>[...p[34]||=[o(`Blue banner`,-1)]]),_:1}),p[43]||=s(`br`,null,null,-1),a(h,{pill:``,color:`purple`},{default:t(()=>[...p[35]||=[o(`Purple banner`,-1)]]),_:1})]),_:1})]),_:1})}}});export{p as default};