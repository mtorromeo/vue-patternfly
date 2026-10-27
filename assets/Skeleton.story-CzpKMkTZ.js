import{F as e,G as t,N as n,Nt as r,c as i,d as a,g as o,h as s,j as c,l,m as u,n as d,u as f}from"./runtime-core.esm-bundler-DKmYt4j6.js";var p={style:{height:`400px`,display:`flex`,"align-items":`flex-end`,"justify-content":`space-between`}},m={key:0},h={style:{height:`200px`}},g={style:{height:`200px`}},_={style:{height:`200px`}},v=o({__name:`Skeleton.story`,setup(o){let v=[`4xl`,`3xl`,`2xl`,`xl`,`lg`,`md`,`sm`];return(o,y)=>{let b=e(`component-info`),x=e(`pf-skeleton`),S=e(`story-canvas`),C=e(`doc-page`);return c(),l(C,{name:`Components/Skeleton.story.vue`,title:`Skeleton`},{description:t(()=>[...y[0]||=[u(`A `,-1),i(`b`,null,`skeleton`,-1),u(` is a type of loading state that allows you to expose content incrementally. For content that may take a long time to load, use a progress bar in place of a skeleton.`,-1)]]),apidocs:t(()=>[s(b,{name:`PfSkeleton`,doc:{name:`PfSkeleton`,exportName:`PfSkeleton`,displayName:`Skeleton`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`width`,description:`The width of the Skeleton. Must specify pixels or percentage.`,required:!1,type:{name:`string`}},{name:`height`,description:`The height of the Skeleton. Must specify pixels or percentage.`,required:!1,type:{name:`string`}},{name:`fontSize`,description:`The font size height of the Skeleton`,required:!1,type:{name:`union`,elements:[{name:`"sm"`},{name:`"md"`},{name:`"lg"`},{name:`"xl"`},{name:`"2xl"`},{name:`"3xl"`},{name:`"4xl"`}]}},{name:`shape`,description:`The shape of the Skeleton`,required:!1,type:{name:`union`,elements:[{name:`"circle"`},{name:`"square"`}]}},{name:`screenreaderText`,description:`Text read just to screen reader users`,required:!1,type:{name:`string`}}],events:[],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Skeleton.vue`]}})]),default:t(()=>[y[23]||=i(`div`,{class:`markdown pf-v6-c-content`},[i(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),s(S,{title:`Default`,source:`<pf-skeleton screenreader-text="Loading default content" />`},{default:t(()=>[s(x,{"screenreader-text":`Loading default content`})]),_:1}),s(S,{title:`Percentage widths`,source:`<pf-skeleton width="25%" screenreader-text="Loading percentage width content" />
<br>
<pf-skeleton width="33%" />
<br>
<pf-skeleton width="50%" />
<br>
<pf-skeleton width="66%" />
<br>
<pf-skeleton width="75%" />
<br>
<pf-skeleton />`},{default:t(()=>[s(x,{width:`25%`,"screenreader-text":`Loading percentage width content`}),y[1]||=i(`br`,null,null,-1),s(x,{width:`33%`}),y[2]||=i(`br`,null,null,-1),s(x,{width:`50%`}),y[3]||=i(`br`,null,null,-1),s(x,{width:`66%`}),y[4]||=i(`br`,null,null,-1),s(x,{width:`75%`}),y[5]||=i(`br`,null,null,-1),s(x)]),_:1}),s(S,{title:`Percentage heights`,source:`<div style="height: 400px; display: flex; align-items: flex-end; justify-content: space-between">
  <pf-skeleton height="25%" width="15%" screenreader-text="Loading percentage height content" />
  <pf-skeleton height="33%" width="15%" />
  <pf-skeleton height="50%" width="15%" />
  <pf-skeleton height="66%" width="15%" />
  <pf-skeleton height="75%" width="15%" />
  <pf-skeleton height="100%" width="15%" />
</div>`},{default:t(()=>[i(`div`,p,[s(x,{height:`25%`,width:`15%`,"screenreader-text":`Loading percentage height content`}),s(x,{height:`33%`,width:`15%`}),s(x,{height:`50%`,width:`15%`}),s(x,{height:`66%`,width:`15%`}),s(x,{height:`75%`,width:`15%`}),s(x,{height:`100%`,width:`15%`})])]),_:1}),s(S,{title:`Text modifiers`,source:``},{default:t(()=>[(c(),a(d,null,n(v,(e,t)=>(c(),a(d,{key:e},[t>0?(c(),a(`br`,m)):f(``,!0),u(` --pf-t--global--font--size--`+r(e)+` `,1),s(x,{"font-size":e,"screenreader-text":t===0?`Loading text content`:void 0},null,8,[`font-size`,`screenreader-text`])],64))),64))]),_:1}),s(S,{title:`Shapes`,source:`Small circle
<pf-skeleton shape="circle" width="15%" screenreader-text="Loading circle content" />
<br>
Medium circle
<pf-skeleton shape="circle" width="30%" />
<br>
Large circle
<pf-skeleton shape="circle" width="50%" />
<br>
Small square
<pf-skeleton shape="square" width="15%" screenreader-text="Loading square content" />
<br>
Medium square
<pf-skeleton shape="square" width="30%" />
<br>
Large square
<pf-skeleton shape="square" width="50%" />
<br>
Small rectangle
<div style="height: 200px">
  <pf-skeleton height="50%" width="50%" screenreader-text="Loading rectangle content" />
</div>
<br>
Medium rectangle
<div style="height: 200px">
  <pf-skeleton height="75%" width="75%" />
</div>
<br>
Large rectangle
<div style="height: 200px">
  <pf-skeleton height="100%" />
</div>`},{default:t(()=>[y[6]||=u(` Small circle `,-1),s(x,{shape:`circle`,width:`15%`,"screenreader-text":`Loading circle content`}),y[7]||=i(`br`,null,null,-1),y[8]||=u(` Medium circle `,-1),s(x,{shape:`circle`,width:`30%`}),y[9]||=i(`br`,null,null,-1),y[10]||=u(` Large circle `,-1),s(x,{shape:`circle`,width:`50%`}),y[11]||=i(`br`,null,null,-1),y[12]||=u(` Small square `,-1),s(x,{shape:`square`,width:`15%`,"screenreader-text":`Loading square content`}),y[13]||=i(`br`,null,null,-1),y[14]||=u(` Medium square `,-1),s(x,{shape:`square`,width:`30%`}),y[15]||=i(`br`,null,null,-1),y[16]||=u(` Large square `,-1),s(x,{shape:`square`,width:`50%`}),y[17]||=i(`br`,null,null,-1),y[18]||=u(` Small rectangle `,-1),i(`div`,h,[s(x,{height:`50%`,width:`50%`,"screenreader-text":`Loading rectangle content`})]),y[19]||=i(`br`,null,null,-1),y[20]||=u(` Medium rectangle `,-1),i(`div`,g,[s(x,{height:`75%`,width:`75%`})]),y[21]||=i(`br`,null,null,-1),y[22]||=u(` Large rectangle `,-1),i(`div`,_,[s(x,{height:`100%`})])]),_:1})]),_:1})}}});export{v as default};