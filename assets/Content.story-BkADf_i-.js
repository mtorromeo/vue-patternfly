import{F as e,K as t,c as n,h as r,j as i,l as a,m as o}from"./runtime-core.esm-bundler-DO1530YC.js";import{n as s}from"./index-CUsetNQE.js";var c={};function l(s,c){let l=e(`component-info`),u=e(`pf-content`),d=e(`story-canvas`),f=e(`doc-page`);return i(),a(f,{name:`Components/Content.story.vue`,title:`Content`},{description:t(()=>[...c[0]||=[o(`A `,-1),n(`b`,null,`content`,-1),o(` component contains a block of styled HTML content.`,-1)]]),apidocs:t(()=>[r(l,{name:`PfContent`,doc:{name:`PfContent`,exportName:`PfContent`,displayName:`Content`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`component`,description:`The content component. If none provided, it will be a 'div' and styling will be applied to all its child components.`,required:!1,type:{name:`union`,elements:[{name:`"div"`},{name:`"h1"`},{name:`"h2"`},{name:`"h3"`},{name:`"h4"`},{name:`"h5"`},{name:`"h6"`},{name:`"p"`},{name:`"a"`},{name:`"small"`},{name:`"blockquote"`},{name:`"pre"`},{name:`"hr"`},{name:`"ul"`},{name:`"ol"`},{name:`"dl"`},{name:`"li"`},{name:`"dt"`},{name:`"dd"`}]},defaultValue:{func:!1,value:`'div'`}},{name:`plainList`,description:`Modifies the list (ul, ol and dl components) to have plain styling.`,required:!1,type:{name:`boolean`}},{name:`visited`,description:`Flag to indicate the link (or all links within the content) has visited styles applied if the browser determines the link has been visited.`,required:!1,type:{name:`boolean`}},{name:`editorial`,description:`Flag to indicate the content has editorial styling. This styling increases the font size of body text and small text by one tier, increasing body text to large and small text to the previous body text size.`,required:!1,type:{name:`boolean`}}],events:[],slots:[{name:`default`,description:`Content rendered within the content`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Content.vue`]}})]),default:t(()=>[c[58]||=n(`div`,{class:`markdown pf-v6-c-content`},[n(`p`,null,[o(`The `),n(`code`,null,`pf-content`),o(` component allows you to establish a block of HTML content and apply simple, built-in styling. `),n(`code`,null,`pf-content`),o(` can be used for any element supported by the `),n(`code`,null,`component`),o(` property (including `),n(`code`,null,`h1`),o(` through `),n(`code`,null,`h6`),o(`, `),n(`code`,null,`hr`),o(`, `),n(`code`,null,`p`),o(`, `),n(`code`,null,`a`),o(`, `),n(`code`,null,`small`),o(`, `),n(`code`,null,`blockquote`),o(`, and `),n(`code`,null,`pre`),o(`).`)]),n(`p`,null,[o(`You cannot nest other components within `),n(`code`,null,`pf-content`),o(`, and doing so can cause styling overrides or other conflicts. Instead, you can use the `),n(`code`,null,`pf-content`),o(` component's properties to achieve the same results.`)]),n(`p`,null,[o(`For example, to create a level 1 heading, you should pass `),n(`code`,null,`component="h1"`),o(` to `),n(`code`,null,`pf-content`),o(`, instead of nesting a `),n(`code`,null,`pf-title`),o(` component within `),n(`code`,null,`pf-content`),o(`. Similarly, when you need to add a divider to a page, you should use `),n(`code`,null,`component="hr"`),o(` (which is styled as a divider), rather than using a separate `),n(`code`,null,`pf-divider`),o(` component.`)]),n(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),n(`ul`,null,[n(`li`,null,[n(`code`,null,`plain-list`),o(`, `),n(`code`,null,`visited`),o(` and `),n(`code`,null,`editorial`),o(` replace `),n(`code`,null,`isPlainList`),o(`, `),n(`code`,null,`isVisitedLink`),o(` and `),n(`code`,null,`isEditorial`),o(`.`)])]),n(`p`,null,[o(`See `),n(`a`,{href:`#/`},`common differences from patternfly-react`),o(`.`)]),n(`h2`,{class:`pf-v6-c-title`},`Examples`),n(`p`,null,[o(`HTML elements wrapped by `),n(`code`,null,`pf-content`),o(` are styled by the content component.`)])],-1),r(d,{title:`Content as a wrapper`,source:`<pf-content>
  <pf-content component="p">
    Content with a component of type "p" still renders the same when wrapped with a Content.
  </pf-content>
  <p>If located within a wrapping Content, html elements are styled as well!</p>
</pf-content>`},{default:t(()=>[r(u,null,{default:t(()=>[r(u,{component:`p`},{default:t(()=>[...c[1]||=[o(` Content with a component of type "p" still renders the same when wrapped with a Content. `,-1)]]),_:1}),c[2]||=n(`p`,null,`If located within a wrapping Content, html elements are styled as well!`,-1)]),_:1})]),_:1}),r(d,{title:`Headings`,source:`<pf-content component="h1">Hello World</pf-content>
<pf-content component="h2">Second level</pf-content>
<pf-content component="h3">Third level</pf-content>
<pf-content component="h4">Fourth level</pf-content>
<pf-content component="h5">Fifth level</pf-content>
<pf-content component="h6">Sixth level</pf-content>`},{default:t(()=>[r(u,{component:`h1`},{default:t(()=>[...c[3]||=[o(`Hello World`,-1)]]),_:1}),r(u,{component:`h2`},{default:t(()=>[...c[4]||=[o(`Second level`,-1)]]),_:1}),r(u,{component:`h3`},{default:t(()=>[...c[5]||=[o(`Third level`,-1)]]),_:1}),r(u,{component:`h4`},{default:t(()=>[...c[6]||=[o(`Fourth level`,-1)]]),_:1}),r(u,{component:`h5`},{default:t(()=>[...c[7]||=[o(`Fifth level`,-1)]]),_:1}),r(u,{component:`h6`},{default:t(()=>[...c[8]||=[o(`Sixth level`,-1)]]),_:1})]),_:1}),r(d,{title:`Body`,source:`<pf-content component="p">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla
  nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel
  erat vel, interdum mattis neque. Sub works as well!
</pf-content>
<pf-content component="p">
  Quisque ante lacus, malesuada ac auctor vitae, congue
  <pf-content component="a" href="#">non ante</pf-content>. Phasellus lacus ex, semper ac tortor nec, fringilla
  condimentum orci. Fusce eu rutrum tellus.
</pf-content>
<pf-content component="blockquote">
  Ut venenatis, nisl scelerisque sollicitudin fermentum, quam libero hendrerit ipsum, ut blandit est tellus sit
  amet turpis.
</pf-content>
<pf-content component="small">Sometimes you need small text to display things like date created</pf-content>`},{default:t(()=>[r(u,{component:`p`},{default:t(()=>[...c[9]||=[o(` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque. Sub works as well! `,-1)]]),_:1}),r(u,{component:`p`},{default:t(()=>[c[11]||=o(` Quisque ante lacus, malesuada ac auctor vitae, congue `,-1),r(u,{component:`a`,href:`#`},{default:t(()=>[...c[10]||=[o(`non ante`,-1)]]),_:1}),c[12]||=o(`. Phasellus lacus ex, semper ac tortor nec, fringilla condimentum orci. Fusce eu rutrum tellus. `,-1)]),_:1}),r(u,{component:`blockquote`},{default:t(()=>[...c[13]||=[o(` Ut venenatis, nisl scelerisque sollicitudin fermentum, quam libero hendrerit ipsum, ut blandit est tellus sit amet turpis. `,-1)]]),_:1}),r(u,{component:`small`},{default:t(()=>[...c[14]||=[o(`Sometimes you need small text to display things like date created`,-1)]]),_:1})]),_:1}),r(d,{title:`Unordered list`,source:`<pf-content component="ul">
  <pf-content component="li">In fermentum leo eu lectus mollis, quis dictum mi aliquet.</pf-content>
  <pf-content component="li">Morbi eu nulla lobortis, lobortis est in, fringilla felis.</pf-content>
  <pf-content component="li">
    Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.
    <pf-content component="ul">
      <pf-content component="li">In fermentum leo eu lectus mollis, quis dictum mi aliquet.</pf-content>
      <pf-content component="li">Morbi eu nulla lobortis, lobortis est in, fringilla felis.</pf-content>
    </pf-content>
  </pf-content>
  <pf-content component="li">Ut non enim metus.</pf-content>
</pf-content>`},{default:t(()=>[r(u,{component:`ul`},{default:t(()=>[r(u,{component:`li`},{default:t(()=>[...c[15]||=[o(`In fermentum leo eu lectus mollis, quis dictum mi aliquet.`,-1)]]),_:1}),r(u,{component:`li`},{default:t(()=>[...c[16]||=[o(`Morbi eu nulla lobortis, lobortis est in, fringilla felis.`,-1)]]),_:1}),r(u,{component:`li`},{default:t(()=>[c[19]||=o(` Aliquam nec felis in sapien venenatis viverra fermentum nec lectus. `,-1),r(u,{component:`ul`},{default:t(()=>[r(u,{component:`li`},{default:t(()=>[...c[17]||=[o(`In fermentum leo eu lectus mollis, quis dictum mi aliquet.`,-1)]]),_:1}),r(u,{component:`li`},{default:t(()=>[...c[18]||=[o(`Morbi eu nulla lobortis, lobortis est in, fringilla felis.`,-1)]]),_:1})]),_:1})]),_:1}),r(u,{component:`li`},{default:t(()=>[...c[20]||=[o(`Ut non enim metus.`,-1)]]),_:1})]),_:1})]),_:1}),r(d,{title:`Ordered list`,source:`<pf-content component="ol">
  <pf-content component="li">Donec blandit a lorem id convallis.</pf-content>
  <pf-content component="li">Cras gravida arcu at diam gravida gravida.</pf-content>
  <pf-content component="li">Integer in volutpat libero.</pf-content>
  <pf-content component="li">Donec a diam tellus.</pf-content>
  <pf-content component="li">Aenean nec tortor orci.</pf-content>
  <pf-content component="li">Quisque aliquam cursus urna, non bibendum massa viverra eget.</pf-content>
  <pf-content component="li">Vivamus maximus ultricies pulvinar.</pf-content>
</pf-content>`},{default:t(()=>[r(u,{component:`ol`},{default:t(()=>[r(u,{component:`li`},{default:t(()=>[...c[21]||=[o(`Donec blandit a lorem id convallis.`,-1)]]),_:1}),r(u,{component:`li`},{default:t(()=>[...c[22]||=[o(`Cras gravida arcu at diam gravida gravida.`,-1)]]),_:1}),r(u,{component:`li`},{default:t(()=>[...c[23]||=[o(`Integer in volutpat libero.`,-1)]]),_:1}),r(u,{component:`li`},{default:t(()=>[...c[24]||=[o(`Donec a diam tellus.`,-1)]]),_:1}),r(u,{component:`li`},{default:t(()=>[...c[25]||=[o(`Aenean nec tortor orci.`,-1)]]),_:1}),r(u,{component:`li`},{default:t(()=>[...c[26]||=[o(`Quisque aliquam cursus urna, non bibendum massa viverra eget.`,-1)]]),_:1}),r(u,{component:`li`},{default:t(()=>[...c[27]||=[o(`Vivamus maximus ultricies pulvinar.`,-1)]]),_:1})]),_:1})]),_:1}),r(d,{title:`Plain list`,source:`<pf-content component="h3">Plain unordered list</pf-content>
<pf-content component="ul" plain-list>
  <pf-content component="li">In fermentum leo eu lectus mollis, quis dictum mi aliquet.</pf-content>
  <pf-content component="li">Morbi eu nulla lobortis, lobortis est in, fringilla felis.</pf-content>
  <pf-content component="li">Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</pf-content>
  <pf-content component="li">Ut non enim metus.</pf-content>
</pf-content>
<pf-content component="h3">Plain ordered list</pf-content>
<pf-content component="ol" plain-list>
  <pf-content component="li">Donec blandit a lorem id convallis.</pf-content>
  <pf-content component="li">Cras gravida arcu at diam gravida gravida.</pf-content>
  <pf-content component="li">Integer in volutpat libero.</pf-content>
  <pf-content component="li">Aenean nec tortor orci.</pf-content>
  <pf-content component="li">Quisque aliquam cursus urna, non bibendum massa viverra eget.</pf-content>
  <pf-content component="li">Vivamus maximus ultricies pulvinar.</pf-content>
</pf-content>`},{default:t(()=>[r(u,{component:`h3`},{default:t(()=>[...c[28]||=[o(`Plain unordered list`,-1)]]),_:1}),r(u,{component:`ul`,"plain-list":``},{default:t(()=>[r(u,{component:`li`},{default:t(()=>[...c[29]||=[o(`In fermentum leo eu lectus mollis, quis dictum mi aliquet.`,-1)]]),_:1}),r(u,{component:`li`},{default:t(()=>[...c[30]||=[o(`Morbi eu nulla lobortis, lobortis est in, fringilla felis.`,-1)]]),_:1}),r(u,{component:`li`},{default:t(()=>[...c[31]||=[o(`Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.`,-1)]]),_:1}),r(u,{component:`li`},{default:t(()=>[...c[32]||=[o(`Ut non enim metus.`,-1)]]),_:1})]),_:1}),r(u,{component:`h3`},{default:t(()=>[...c[33]||=[o(`Plain ordered list`,-1)]]),_:1}),r(u,{component:`ol`,"plain-list":``},{default:t(()=>[r(u,{component:`li`},{default:t(()=>[...c[34]||=[o(`Donec blandit a lorem id convallis.`,-1)]]),_:1}),r(u,{component:`li`},{default:t(()=>[...c[35]||=[o(`Cras gravida arcu at diam gravida gravida.`,-1)]]),_:1}),r(u,{component:`li`},{default:t(()=>[...c[36]||=[o(`Integer in volutpat libero.`,-1)]]),_:1}),r(u,{component:`li`},{default:t(()=>[...c[37]||=[o(`Aenean nec tortor orci.`,-1)]]),_:1}),r(u,{component:`li`},{default:t(()=>[...c[38]||=[o(`Quisque aliquam cursus urna, non bibendum massa viverra eget.`,-1)]]),_:1}),r(u,{component:`li`},{default:t(()=>[...c[39]||=[o(`Vivamus maximus ultricies pulvinar.`,-1)]]),_:1})]),_:1})]),_:1}),r(d,{title:`Description list`,source:`<pf-content component="dl">
  <pf-content component="dt">Web</pf-content>
  <pf-content component="dd">The part of the Internet that contains websites and web pages</pf-content>
  <pf-content component="dt">HTML</pf-content>
  <pf-content component="dd">A markup language for creating web pages</pf-content>
  <pf-content component="dt">CSS</pf-content>
  <pf-content component="dd">A technology to make HTML look better</pf-content>
</pf-content>`},{default:t(()=>[r(u,{component:`dl`},{default:t(()=>[r(u,{component:`dt`},{default:t(()=>[...c[40]||=[o(`Web`,-1)]]),_:1}),r(u,{component:`dd`},{default:t(()=>[...c[41]||=[o(`The part of the Internet that contains websites and web pages`,-1)]]),_:1}),r(u,{component:`dt`},{default:t(()=>[...c[42]||=[o(`HTML`,-1)]]),_:1}),r(u,{component:`dd`},{default:t(()=>[...c[43]||=[o(`A markup language for creating web pages`,-1)]]),_:1}),r(u,{component:`dt`},{default:t(()=>[...c[44]||=[o(`CSS`,-1)]]),_:1}),r(u,{component:`dd`},{default:t(()=>[...c[45]||=[o(`A technology to make HTML look better`,-1)]]),_:1})]),_:1})]),_:1}),r(d,{title:`Link and visited link`,source:`<pf-content>
  <pf-content component="h3">Link example</pf-content>
  <pf-content component="p">
    <pf-content component="a" visited href="#">Click to visit link</pf-content>
  </pf-content>
</pf-content>
<br>
<pf-content visited>
  <pf-content component="h3">Link content example</pf-content>
  <pf-content component="p">
    <pf-content component="a" href="#">content link 1</pf-content>
  </pf-content>
  <pf-content component="p">
    <pf-content component="a" href="#">content link 2</pf-content>
  </pf-content>
  <pf-content component="p">
    <pf-content component="a" href="#">content link 3</pf-content>
  </pf-content>
</pf-content>`},{default:t(()=>[r(u,null,{default:t(()=>[r(u,{component:`h3`},{default:t(()=>[...c[46]||=[o(`Link example`,-1)]]),_:1}),r(u,{component:`p`},{default:t(()=>[r(u,{component:`a`,visited:``,href:`#`},{default:t(()=>[...c[47]||=[o(`Click to visit link`,-1)]]),_:1})]),_:1})]),_:1}),c[52]||=n(`br`,null,null,-1),r(u,{visited:``},{default:t(()=>[r(u,{component:`h3`},{default:t(()=>[...c[48]||=[o(`Link content example`,-1)]]),_:1}),r(u,{component:`p`},{default:t(()=>[r(u,{component:`a`,href:`#`},{default:t(()=>[...c[49]||=[o(`content link 1`,-1)]]),_:1})]),_:1}),r(u,{component:`p`},{default:t(()=>[r(u,{component:`a`,href:`#`},{default:t(()=>[...c[50]||=[o(`content link 2`,-1)]]),_:1})]),_:1}),r(u,{component:`p`},{default:t(()=>[r(u,{component:`a`,href:`#`},{default:t(()=>[...c[51]||=[o(`content link 3`,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),r(d,{title:`Editorial content`,source:`<pf-content component="h1" editorial>Example of editorial content via components</pf-content>
<pf-content component="p" editorial>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla
  nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel
  erat vel, interdum mattis neque. Sub works as well!
</pf-content>
<br>
<pf-content editorial>
  <h1>Example of editorial content via wrapper</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida,
    nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio,
    sollicitudin vel erat vel, interdum mattis neque. Sub works as well!
  </p>
</pf-content>`},{intro:t(()=>[...c[53]||=[n(`div`,{class:`markdown pf-v6-c-content`},[n(`p`,null,[o(`Editorial styling increases the font size of body text and small text by 1 tier, where body text becomes "lg" and small text becomes "md". To apply editorial styling, use `),n(`code`,null,`editorial`),o(`.`)])],-1)]]),default:t(()=>[r(u,{component:`h1`,editorial:``},{default:t(()=>[...c[54]||=[o(`Example of editorial content via components`,-1)]]),_:1}),r(u,{component:`p`,editorial:``},{default:t(()=>[...c[55]||=[o(` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque. Sub works as well! `,-1)]]),_:1}),c[57]||=n(`br`,null,null,-1),r(u,{editorial:``},{default:t(()=>[...c[56]||=[n(`h1`,null,`Example of editorial content via wrapper`,-1),n(`p`,null,` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque. Sub works as well! `,-1)]]),_:1})]),_:1})]),_:1})}var u=s(c,[[`render`,l]]);export{u as default};