import{D as e,E as t,I as n,N as r,O as i,R as a,S as o,V as s,j as c,x as l}from"./index-mFbvqZfx.js";var u=i({__name:`Content.story`,setup(i){let u=a(`Title text`);return(i,a)=>{let d=r(`component-info`),f=r(`pf-content`),p=r(`story-canvas`),m=r(`doc-page`);return c(),o(m,{name:`Components/Content.story.vue`,title:`Content`},{description:n(()=>[...a[0]||=[t(`A `,-1),l(`b`,null,`content`,-1),t(` component contains a block of styled HTML content.`,-1)]]),apidocs:n(()=>[e(d,{name:`PfContent`,doc:{name:`PfContent`,exportName:`PfContent`,displayName:`Content`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`component`,description:`The content component. If none provided, it will be a 'div' and styling will be applied to all its child components.`,required:!1,type:{name:`union`,elements:[{name:`"div"`},{name:`"h1"`},{name:`"h2"`},{name:`"h3"`},{name:`"h4"`},{name:`"h5"`},{name:`"h6"`},{name:`"p"`},{name:`"a"`},{name:`"small"`},{name:`"blockquote"`},{name:`"pre"`},{name:`"hr"`},{name:`"ul"`},{name:`"ol"`},{name:`"dl"`},{name:`"li"`},{name:`"dt"`},{name:`"dd"`}]},defaultValue:{func:!1,value:`'div'`}},{name:`plainList`,description:`Modifies the list (ul, ol and dl components) to have plain styling.`,required:!1,type:{name:`boolean`}},{name:`visited`,description:`Flag to indicate the link (or all links within the content) has visited styles applied if the browser determines the link has been visited.`,required:!1,type:{name:`boolean`}},{name:`editorial`,description:`Flag to indicate the content has editorial styling. This styling increases the font size of body text and small text by one tier, increasing body text to large and small text to the previous body text size.`,required:!1,type:{name:`boolean`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Content.vue`]}})]),default:n(()=>[a[8]||=l(`div`,{class:`markdown pf-v6-c-content`},[l(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),e(p,{title:`Text`,source:`<pf-content>{{ sample_title }}</pf-content>`},{default:n(()=>[e(f,null,{default:n(()=>[t(s(u.value),1)]),_:1})]),_:1}),e(p,{title:`Text visited`,source:`<pf-content>
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
</pf-content>`},{default:n(()=>[e(f,null,{default:n(()=>[e(f,{component:`h3`},{default:n(()=>[...a[1]||=[t(`Visited link example`,-1)]]),_:1}),e(f,{component:`p`},{default:n(()=>[e(f,{component:`a`,href:`#`},{default:n(()=>[...a[2]||=[t(` Visited link `,-1)]]),_:1})]),_:1})]),_:1}),a[7]||=l(`br`,null,null,-1),e(f,{visited:``},{default:n(()=>[e(f,{component:`h3`},{default:n(()=>[...a[3]||=[t(`Visited content example`,-1)]]),_:1}),e(f,{component:`p`},{default:n(()=>[e(f,{component:`a`,href:`#`},{default:n(()=>[...a[4]||=[t(` content link 1 `,-1)]]),_:1})]),_:1}),e(f,{component:`p`},{default:n(()=>[e(f,{component:`a`,href:`#`},{default:n(()=>[...a[5]||=[t(` content link 2 `,-1)]]),_:1})]),_:1}),e(f,{component:`p`},{default:n(()=>[e(f,{component:`a`,href:`#`},{default:n(()=>[...a[6]||=[t(` content link 3 `,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}});export{u as default};