import{D as e,E as t,I as n,N as r,O as i,S as a,g as o,h as s,j as c,m as l,p as u,x as d,z as f}from"./index-mFbvqZfx.js";var p=i({__name:`Banner.story`,setup(i){return(i,p)=>{let m=r(`component-info`),h=r(`pf-banner`),g=r(`story-canvas`),_=r(`pf-flex-item`),v=r(`pf-flex`),y=r(`doc-page`);return c(),a(y,{name:`Components/Banner.story.vue`,title:`Banner`},{description:n(()=>[...p[0]||=[t(`A `,-1),d(`b`,null,`banner`,-1),t(` is a 1-line, full color, full width container that can be used to communicate short snippets of information to users. Banners are un-intrusive and non-dismissible.`,-1)]]),apidocs:n(()=>[e(m,{name:`PfBanner`,doc:{name:`PfBanner`,exportName:`PfBanner`,displayName:`Banner`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`sticky`,description:`If set to true, the banner sticks to the top of its container`,required:!1,type:{name:`boolean`}},{name:`screenReaderText`,description:`Text announced by screen readers to indicate the type of banner. This prop should only
be passed in when the banner conveys status/severity.`,required:!1,type:{name:`string`}},{name:`color`,description:`Color options for the banner, will be overwritten by any applied using the status prop.`,required:!1,type:{name:`union`,elements:[{name:`"red"`},{name:`"orangered"`},{name:`"orange"`},{name:`"yellow"`},{name:`"green"`},{name:`"teal"`},{name:`"blue"`},{name:`"purple"`}]}},{name:`status`,description:`Status style options for the banner, will overwrite any color applied using the color prop.`,required:!1,type:{name:`union`,elements:[{name:`"success"`},{name:`"warning"`},{name:`"danger"`},{name:`"info"`},{name:`"custom"`}]}}],events:[],slots:[{name:`screen-reader-text`},{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Banner.vue`]}})]),default:n(()=>[e(g,{title:`Basic`,source:`<pf-banner>Default banner</pf-banner>
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
<pf-banner color="purple">Purple banner</pf-banner>`},{default:n(()=>[e(h,null,{default:n(()=>[...p[1]||=[t(`Default banner`,-1)]]),_:1}),p[10]||=d(`br`,null,null,-1),e(h,{color:`red`},{default:n(()=>[...p[2]||=[t(`Red banner`,-1)]]),_:1}),p[11]||=d(`br`,null,null,-1),e(h,{color:`orangered`},{default:n(()=>[...p[3]||=[t(`Orangered banner`,-1)]]),_:1}),p[12]||=d(`br`,null,null,-1),e(h,{color:`orange`},{default:n(()=>[...p[4]||=[t(`Orange banner`,-1)]]),_:1}),p[13]||=d(`br`,null,null,-1),e(h,{color:`yellow`},{default:n(()=>[...p[5]||=[t(`Yellow banner`,-1)]]),_:1}),p[14]||=d(`br`,null,null,-1),e(h,{color:`green`},{default:n(()=>[...p[6]||=[t(`Green banner`,-1)]]),_:1}),p[15]||=d(`br`,null,null,-1),e(h,{color:`teal`},{default:n(()=>[...p[7]||=[t(`Teal banner`,-1)]]),_:1}),p[16]||=d(`br`,null,null,-1),e(h,{color:`blue`},{default:n(()=>[...p[8]||=[t(`Blue banner`,-1)]]),_:1}),p[17]||=d(`br`,null,null,-1),e(h,{color:`purple`},{default:n(()=>[...p[9]||=[t(`Purple banner`,-1)]]),_:1})]),_:1}),e(g,{title:`Status`,source:`<pf-banner status="success" screen-reader-text="Success banner">
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
</pf-banner>`},{default:n(()=>[e(h,{status:`success`,"screen-reader-text":`Success banner`},{default:n(()=>[e(v,{"space-items":`sm`},{default:n(()=>[e(_,null,{default:n(()=>[e(f(o))]),_:1}),e(_,null,{default:n(()=>[...p[18]||=[t(`Success banner`,-1)]]),_:1})]),_:1})]),_:1}),p[23]||=d(`br`,null,null,-1),e(h,{status:`warning`,"screen-reader-text":`Warning banner`},{default:n(()=>[e(v,{"space-items":`sm`},{default:n(()=>[e(_,null,{default:n(()=>[e(f(l))]),_:1}),e(_,null,{default:n(()=>[...p[19]||=[t(`Warning banner`,-1)]]),_:1})]),_:1})]),_:1}),p[24]||=d(`br`,null,null,-1),e(h,{status:`danger`,"screen-reader-text":`Danger banner`},{default:n(()=>[e(v,{"space-items":`sm`},{default:n(()=>[e(_,null,{default:n(()=>[e(f(s))]),_:1}),e(_,null,{default:n(()=>[...p[20]||=[t(`Danger banner`,-1)]]),_:1})]),_:1})]),_:1}),p[25]||=d(`br`,null,null,-1),e(h,{status:`info`,"screen-reader-text":`Info banner`},{default:n(()=>[e(v,{"space-items":`sm`},{default:n(()=>[e(_,null,{default:n(()=>[e(f(u))]),_:1}),e(_,null,{default:n(()=>[...p[21]||=[t(`Info banner`,-1)]]),_:1})]),_:1})]),_:1}),p[26]||=d(`br`,null,null,-1),e(h,{status:`custom`,"screen-reader-text":`Custom banner`},{default:n(()=>[e(v,{"space-items":`sm`},{default:n(()=>[e(_,null,{default:n(()=>[e(f(l))]),_:1}),e(_,null,{default:n(()=>[...p[22]||=[t(`Custom banner`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}});export{p as default};