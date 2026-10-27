import{F as e,K as t,c as n,h as r,j as i,l as a,m as o}from"./runtime-core.esm-bundler-DO1530YC.js";import{n as s}from"./index-CUsetNQE.js";var c={},l={class:`truncate-example-resize`},u={class:`truncate-example-resize`},d={class:`truncate-example-resize`},f={class:`truncate-example-resize`},p={class:`truncate-example-resize`};function m(s,c){let m=e(`component-info`),h=e(`pf-truncate`),g=e(`story-canvas`),_=e(`doc-page`);return i(),a(_,{name:`Components/Truncate.story.vue`,title:`Truncate`},{description:t(()=>[...c[0]||=[o(` A `,-1),n(`b`,null,`truncate`,-1),o(` is a tool used to shorten numeric and non-numeric character strings, typically when the string overflows its container. `,-1)]]),apidocs:t(()=>[r(m,{name:`PfTruncate`,doc:{name:`PfTruncate`,exportName:`PfTruncate`,displayName:`Truncate`,description:``,tags:{},expose:[{name:`el`,description:`The truncate wrapper element`}],props:[{name:`content`,description:`Text to truncate`,required:!0,type:{name:`string`}},{name:`href`,description:`An href to turn the truncate wrapper into an anchor element. For more custom control, pass a triggerRef in tooltipAttrs.`,required:!1,type:{name:`string`}},{name:`trailingNumChars`,description:`The number of characters displayed in the second half of a middle truncation. Overridden by maxCharsDisplayed.`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`7`}},{name:`maxCharsDisplayed`,description:`The maximum number of characters to display before truncating. This will always truncate content when its length
exceeds this value, and container width/resizing will not affect truncation.`,required:!1,type:{name:`number`}},{name:`omissionContent`,description:`The content signifying the omission of characters with maxCharsDisplayed. Defaults to an ellipsis.`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`'…'`}},{name:`position`,description:`Where the text will be truncated`,required:!1,type:{name:`union`,elements:[{name:`"start"`},{name:`"middle"`},{name:`"end"`}]},defaultValue:{func:!1,value:`'end'`}},{name:`tooltipPosition`,description:`Tooltip position`,required:!1,type:{name:`Placement`},defaultValue:{func:!1,value:`'top'`}},{name:`tooltipAttrs`,description:`Additional attributes passed to the tooltip, such as a triggerRef to show the tooltip on another element.`,required:!1,type:{name:`Omit`,elements:[{name:`ComponentProps`,elements:[{name:`TSTypeQuery`}]},{name:`"content"`}]}}],events:[],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Truncate.vue`]}})]),default:t(()=>[c[19]||=n(`div`,{class:`markdown pf-v6-c-content`},[n(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),n(`ul`,null,[n(`li`,null,[n(`code`,null,`tooltipProps`),o(` is `),n(`code`,null,`tooltip-attrs`),o(`, which also takes a `),n(`code`,null,`triggerRef`),o(` to show the tooltip on another element.`)]),n(`li`,null,[o(`The forwarded ref is exposed as `),n(`code`,null,`el`),o(`. See `),n(`a`,{href:`#/`},`common differences from patternfly-react`),o(`.`)])]),n(`h2`,{class:`pf-v6-c-title`},`Examples`),n(`p`,null,[o(`The default behavior of the `),n(`code`,null,`pf-truncate`),o(` component is to truncate based on whether the content can fit within the width of its parent container, and to prevent text from wrapping. The following examples that use this default behavior render the `),n(`code`,null,`pf-truncate`),o(` component inside a resizable container, allowing you to see how the parent container width affects the truncation.`)])],-1),r(g,{title:`Default`,source:`<div class="truncate-example-resize">
  <pf-truncate content="redhat_logo_black_and_white_reversed_simple_with_fedora_container.zip" />
</div>`},{intro:t(()=>[...c[1]||=[n(`div`,{class:`markdown pf-v6-c-content`},[n(`p`,null,`By default content will be truncated at its end when it cannot fit entirely inside its parent container.`)],-1)]]),default:t(()=>[n(`div`,l,[r(h,{content:`redhat_logo_black_and_white_reversed_simple_with_fedora_container.zip`})])]),_:1}),r(g,{title:`Middle`,source:`<div class="truncate-example-resize">
  <pf-truncate
    content="redhat_logo_black_and_white_reversed_simple_with_fedora_container.zip"
    :trailing-num-chars="10"
    position="middle" />
</div>`},{intro:t(()=>[...c[2]||=[n(`div`,{class:`markdown pf-v6-c-content`},[n(`p`,null,[o(`When passing a `),n(`code`,null,`position`),o(` property with a value of "middle", the position of the truncation will change based on the parent container's width and the amount of `),n(`code`,null,`trailing-num-chars`),o(` passed in. The `),n(`code`,null,`trailing-num-chars`),o(` will always be displayed, while the rest of the content will be truncated based on the parent container width.`)])],-1)]]),default:t(()=>[n(`div`,u,[r(h,{content:`redhat_logo_black_and_white_reversed_simple_with_fedora_container.zip`,"trailing-num-chars":10,position:`middle`})])]),_:1}),r(g,{title:`Start`,source:`<div class="truncate-example-resize">
  <pf-truncate content="redhat_logo_black_and_white_reversed_simple_with_fedora_container.zip" position="start" />
</div>`},{intro:t(()=>[...c[3]||=[n(`div`,{class:`markdown pf-v6-c-content`},[n(`p`,null,[o(`You can truncate content at its start by passing the `),n(`code`,null,`position`),o(` property with a value of "start". This can be useful if you have several strings to truncate that have similar text at the start, but unique text at the end that you want to have visible.`)])],-1)]]),default:t(()=>[n(`div`,d,[r(h,{content:`redhat_logo_black_and_white_reversed_simple_with_fedora_container.zip`,position:`start`})])]),_:1}),r(g,{title:`With custom tooltip position`,source:`<div class="truncate-example-resize">
  <pf-truncate
    content="redhat_logo_black_and_white_reversed_simple_with_fedora_container.zip"
    tooltip-position="bottom" />
</div>`},{intro:t(()=>[...c[4]||=[n(`div`,{class:`markdown pf-v6-c-content`},[n(`p`,null,[o(`You can customize the position of the tooltip that is rendered by passing in the `),n(`code`,null,`tooltip-position`),o(` property. The following example overrides the default "top" position with a "bottom" position.`)])],-1)]]),default:t(()=>[n(`div`,f,[r(h,{content:`redhat_logo_black_and_white_reversed_simple_with_fedora_container.zip`,"tooltip-position":`bottom`})])]),_:1}),r(g,{title:`Based on max characters`,source:`<div>Truncated at end position:</div>
<pf-truncate
  :max-chars-displayed="15"
  content="redhat_logo_black_and_white_reversed_simple_with_fedora_container.zip" />
<br>
<br>
<div>Truncated at middle position:</div>
<pf-truncate
  :max-chars-displayed="15"
  position="middle"
  content="redhat_logo_black_and_white_reversed_simple_with_fedora_container.zip" />
<br>
<br>
<div>Truncated at start position:</div>
<pf-truncate
  :max-chars-displayed="15"
  position="start"
  content="redhat_logo_black_and_white_reversed_simple_with_fedora_container.zip" />`},{intro:t(()=>[...c[5]||=[n(`div`,{class:`markdown pf-v6-c-content`},[n(`p`,null,[o(`Rather than observing container width, you can have truncation be based on a maximum amount of characters that should always be displayed via the `),n(`code`,null,`max-chars-displayed`),o(` property. While the content's parent container width will not have an affect on whether truncation occurs, it will affect whether the content wraps. This property must be set to a value larger than `),n(`code`,null,`0`),o(`, otherwise the component will fall back to observing container width.`)]),n(`p`,null,[o(`Truncating based on a maximum amount of characters will truncate the content at the end by default. When the `),n(`code`,null,`position`),o(` property is set to "middle", the truncation will split the content as evenly as possible, providing a more "true middle" truncation.`)])],-1)]]),default:t(()=>[c[6]||=n(`div`,null,`Truncated at end position:`,-1),r(h,{"max-chars-displayed":15,content:`redhat_logo_black_and_white_reversed_simple_with_fedora_container.zip`}),c[7]||=n(`br`,null,null,-1),c[8]||=n(`br`,null,null,-1),c[9]||=n(`div`,null,`Truncated at middle position:`,-1),r(h,{"max-chars-displayed":15,position:`middle`,content:`redhat_logo_black_and_white_reversed_simple_with_fedora_container.zip`}),c[10]||=n(`br`,null,null,-1),c[11]||=n(`br`,null,null,-1),c[12]||=n(`div`,null,`Truncated at start position:`,-1),r(h,{"max-chars-displayed":15,position:`start`,content:`redhat_logo_black_and_white_reversed_simple_with_fedora_container.zip`})]),_:1}),r(g,{title:`With links`,source:`<div>With default width-observing truncation:</div>
<div class="truncate-example-resize">
  <pf-truncate href="#" content="A very lengthy anchor text content to trigger truncation" />
  <pf-truncate position="start" href="#" content="A very lengthy anchor text content to trigger truncation" />
  <pf-truncate position="middle" href="#" content="A very lengthy anchor text content to trigger truncation" />
</div>
<br>
<div>With max characters truncation:</div>
<pf-truncate
  :max-chars-displayed="15"
  href="#"
  content="A very lengthy anchor text content to trigger truncation" />
<br>
<pf-truncate
  :max-chars-displayed="15"
  position="start"
  href="#"
  content="A very lengthy anchor text content to trigger truncation" />
<br>
<pf-truncate
  :max-chars-displayed="15"
  position="middle"
  href="#"
  content="A very lengthy anchor text content to trigger truncation" />`},{intro:t(()=>[...c[13]||=[n(`div`,{class:`markdown pf-v6-c-content`},[n(`p`,null,[o(`To truncate link text, you can pass the `),n(`code`,null,`href`),o(` property in.`)])],-1)]]),default:t(()=>[c[14]||=n(`div`,null,`With default width-observing truncation:`,-1),n(`div`,p,[r(h,{href:`#`,content:`A very lengthy anchor text content to trigger truncation`}),r(h,{position:`start`,href:`#`,content:`A very lengthy anchor text content to trigger truncation`}),r(h,{position:`middle`,href:`#`,content:`A very lengthy anchor text content to trigger truncation`})]),c[15]||=n(`br`,null,null,-1),c[16]||=n(`div`,null,`With max characters truncation:`,-1),r(h,{"max-chars-displayed":15,href:`#`,content:`A very lengthy anchor text content to trigger truncation`}),c[17]||=n(`br`,null,null,-1),r(h,{"max-chars-displayed":15,position:`start`,href:`#`,content:`A very lengthy anchor text content to trigger truncation`}),c[18]||=n(`br`,null,null,-1),r(h,{"max-chars-displayed":15,position:`middle`,href:`#`,content:`A very lengthy anchor text content to trigger truncation`})]),_:1})]),_:1})}var h=s(c,[[`render`,m]]);export{h as default};