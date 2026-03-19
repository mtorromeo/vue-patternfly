import{H as e,N as t,Q as n,Tt as r,c as i,h as a,k as o,m as s,p as c,s as l}from"./runtime-core.esm-bundler-Ce-wEYeq.js";var u=a({__name:`Content.story`,setup(a){let u=n(`Title text`);return(n,a)=>{let d=t(`component-info`),f=t(`pf-content`),p=t(`story-canvas`),m=t(`doc-page`);return o(),i(m,{name:`Components/Content.story.vue`,title:`Content`},{description:e(()=>[...a[0]||=[c(`A `,-1),l(`b`,null,`content`,-1),c(` component contains a block of styled HTML content.`,-1)]]),apidocs:e(()=>[s(d,{name:`PfContent`,doc:{name:`PfContent`,exportName:`PfContent`,displayName:`Content`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`component`,description:`The content component. If none provided, it will be a 'div' and styling will be applied to all its child components.`,required:!1,type:{name:`union`,elements:[{name:`"div"`},{name:`"h1"`},{name:`"h2"`},{name:`"h3"`},{name:`"h4"`},{name:`"h5"`},{name:`"h6"`},{name:`"p"`},{name:`"a"`},{name:`"small"`},{name:`"blockquote"`},{name:`"pre"`},{name:`"hr"`},{name:`"ul"`},{name:`"ol"`},{name:`"dl"`},{name:`"li"`},{name:`"dt"`},{name:`"dd"`}]},defaultValue:{func:!1,value:`'div'`}},{name:`plainList`,description:`Modifies the list (ul, ol and dl components) to have plain styling.`,required:!1,type:{name:`boolean`}},{name:`visited`,description:`Flag to indicate the link (or all links within the content) has visited styles applied if the browser determines the link has been visited.`,required:!1,type:{name:`boolean`}},{name:`editorial`,description:`Flag to indicate the content has editorial styling. This styling increases the font size of body text and small text by one tier, increasing body text to large and small text to the previous body text size.`,required:!1,type:{name:`boolean`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Content.vue`]}})]),default:e(()=>[a[8]||=l(`div`,{class:`markdown pf-v6-c-content`},[l(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),s(p,{title:`Text`,source:`<pf-content>{{ sample_title }}</pf-content>`},{default:e(()=>[s(f,null,{default:e(()=>[c(r(u.value),1)]),_:1})]),_:1}),s(p,{title:`Text visited`,source:`<pf-content>
  <pf-content component="h3">Visited link example</pf-content>
  <pf-content component="p">
    <pf-content component="a" href="#">
      Visited link
    </pf-content>
  </pf-content>
</pf-content>
<br>
<pf-content visited>
  <pf-content component="h3">Visited content example</pf-content>
  <pf-content component="p">
    <pf-content component="a" href="#">
      content link 1
    </pf-content>
  </pf-content>
  <pf-content component="p">
    <pf-content component="a" href="#">
      content link 2
    </pf-content>
  </pf-content>
  <pf-content component="p">
    <pf-content component="a" href="#">
      content link 3
    </pf-content>
  </pf-content>
</pf-content>`},{default:e(()=>[s(f,null,{default:e(()=>[s(f,{component:`h3`},{default:e(()=>[...a[1]||=[c(`Visited link example`,-1)]]),_:1}),s(f,{component:`p`},{default:e(()=>[s(f,{component:`a`,href:`#`},{default:e(()=>[...a[2]||=[c(` Visited link `,-1)]]),_:1})]),_:1})]),_:1}),a[7]||=l(`br`,null,null,-1),s(f,{visited:``},{default:e(()=>[s(f,{component:`h3`},{default:e(()=>[...a[3]||=[c(`Visited content example`,-1)]]),_:1}),s(f,{component:`p`},{default:e(()=>[s(f,{component:`a`,href:`#`},{default:e(()=>[...a[4]||=[c(` content link 1 `,-1)]]),_:1})]),_:1}),s(f,{component:`p`},{default:e(()=>[s(f,{component:`a`,href:`#`},{default:e(()=>[...a[5]||=[c(` content link 2 `,-1)]]),_:1})]),_:1}),s(f,{component:`p`},{default:e(()=>[s(f,{component:`a`,href:`#`},{default:e(()=>[...a[6]||=[c(` content link 3 `,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}});export{u as default};