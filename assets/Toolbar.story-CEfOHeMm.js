import{F as e,K as t,N as n,Pt as r,c as i,d as a,g as ee,h as o,it as s,j as c,l,m as u,n as d,pt as f,rt as p,u as m}from"./runtime-core.esm-bundler-DO1530YC.js";import{W as h}from"./index-CUsetNQE.js";import{t as g}from"./pen-to-square-icon-DLom56XH.js";var _=h({name:`FilterIcon`,height:512,width:512,svgPathData:`M32 64C19.1 64 7.4 71.8 2.4 83.8S.2 109.5 9.4 118.6L192 301.3 192 416c0 8.5 3.4 16.6 9.4 22.6l64 64c9.2 9.2 22.9 11.9 34.9 6.9S320 492.9 320 480l0-178.7 182.6-182.6c9.2-9.2 11.9-22.9 6.9-34.9S492.9 64 480 64L32 64z`,yOffset:0,xOffset:0}),v=h({name:`CloneIcon`,height:512,width:512,svgPathData:`M288 448l-224 0 0-224 48 0 0-64-48 0c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-48-64 0 0 48zm-64-96l224 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L224 0c-35.3 0-64 28.7-64 64l0 224c0 35.3 28.7 64 64 64z`,yOffset:0,xOffset:0}),y=h({name:`RotateIcon`,height:512,width:512,svgPathData:`M480.1 192l7.9 0c13.3 0 24-10.7 24-24l0-144c0-9.7-5.8-18.5-14.8-22.2S477.9 .2 471 7L419.3 58.8C375 22.1 318 0 256 0 127 0 20.3 95.4 2.6 219.5 .1 237 12.2 253.2 29.7 255.7s33.7-9.7 36.2-27.1C79.2 135.5 159.3 64 256 64 300.4 64 341.2 79 373.7 104.3L327 151c-6.9 6.9-8.9 17.2-5.2 26.2S334.3 192 344 192l136.1 0zm29.4 100.5c2.5-17.5-9.7-33.7-27.1-36.2s-33.7 9.7-36.2 27.1c-13.3 93-93.4 164.5-190.1 164.5-44.4 0-85.2-15-117.7-40.3L185 361c6.9-6.9 8.9-17.2 5.2-26.2S177.7 320 168 320L24 320c-13.3 0-24 10.7-24 24L0 488c0 9.7 5.8 18.5 14.8 22.2S34.1 511.8 41 505l51.8-51.8C137 489.9 194 512 256 512 385 512 491.7 416.6 509.4 292.5z`,yOffset:0,xOffset:0}),te={style:{"overflow-y":`scroll`,height:`200px`}},ne={class:`toolbar-container-query-resize`},b=ee({__name:`Toolbar.story`,setup(ee){let h=p({items:``,sticky:``,dynamicSticky:``,managed:``,consumer:``,filters:``,wrap:``}),b=p({sticky:!0,evenOnly:!0}),x=p({stuck:!1,evenOnly:!0});function S(e){let t=Array.from(Array(30),(e,t)=>t);return e?t.filter(e=>e%2==0):t}let C=p({first:null,second:null,third:null}),w=[{value:`no-background`,title:`No background`},{value:`primary`,title:`Primary background`},{value:`secondary`,title:`Secondary background`}],T=[`New`,`Pending`,`Running`,`Cancelled`],E=[`Low`,`Medium`,`High`],D=p({status:null,risk:null}),O=p({status:null,risk:null}),k=s(!1),A=p({status:[`New`,`Pending`],risk:[`Low`]}),j=p({status:[`New`,`Pending`],risk:[`Low`]});function M(e,t,n){e[t]=e[t].filter(e=>e!==n)}function N(e){e.status=[],e.risk=[]}let P=p({resource:`Pod`,status:`Running`,type:`Any`,kebabOpen:!1,bulkOpen:!1,page:1,perPage:10}),F=[{value:void 0,title:`Default Gap`},{value:`none`,title:`No Gap`},{value:`sm`,title:`Small Gap`},{value:`xl`,title:`Extra Large Gap`}],I=[{value:`none`,title:`No`},{value:`sm`,title:`Small`},{value:`xl`,title:`Extra Large`}];return(ee,s)=>{let p=e(`component-info`),L=e(`pf-search-input`),R=e(`pf-toolbar-item`),z=e(`pf-button`),B=e(`pf-toolbar-content`),V=e(`pf-toolbar`),H=e(`story-canvas`),U=e(`pf-toolbar-group`),W=e(`pf-checkbox`),G=e(`pf-select-option`),K=e(`pf-select-list`),q=e(`pf-select`),J=e(`pf-toolbar-toggle-group`),Y=e(`pf-toolbar-filter`),X=e(`pf-overflow-menu-item`),re=e(`pf-overflow-menu-group`),ie=e(`pf-overflow-menu-content`),Z=e(`pf-menu-toggle`),Q=e(`pf-dropdown-item`),$=e(`pf-dropdown`),ae=e(`pf-overflow-menu-control`),oe=e(`pf-overflow-menu`),se=e(`pf-divider`),ce=e(`pf-menu-toggle-checkbox`),le=e(`pf-pagination`),ue=e(`doc-page`);return c(),l(ue,{name:`Components/Toolbar.story.vue`,title:`Toolbar`},{description:t(()=>[...s[38]||=[u(` A `,-1),i(`b`,null,`toolbar`,-1),u(` allows a user to manage and manipulate a data set. Data can be presented in any valid presentation, a table, a list, or a data visualization (chart), for example. The toolbar responsively accommodates controls and displays applied filters in label groups. `,-1)]]),apidocs:t(()=>[o(p,{name:`PfToolbar`}),o(p,{name:`PfToolbarContent`}),o(p,{name:`PfToolbarGroup`}),o(p,{name:`PfToolbarItem`}),o(p,{name:`PfToolbarToggleGroup`}),o(p,{name:`PfToolbarFilter`}),o(p,{name:`PfToolbarExpandIconWrapper`})]),default:t(()=>[s[110]||=i(`div`,{class:`markdown pf-v6-c-content`},[i(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),i(`ul`,null,[i(`li`,null,[u(`The expanded state of the toggle group is bound with `),i(`code`,null,`v-model:expanded`),u(` (`),i(`code`,null,`isExpanded`),u(`, `),i(`code`,null,`toggleIsExpanded`),u(`); without it the toolbar manages it.`)]),i(`li`,null,[i(`code`,null,`clearAllFilters`),u(` is the `),i(`code`,null,`clear-all-filters`),u(` event and `),i(`code`,null,`customLabelGroupContent`),u(` is the `),i(`code`,null,`label-group-content`),u(` slot.`)]),i(`li`,null,[u(`Breakpoint modifiers are separate props per breakpoint: `),i(`code`,null,`inset-md`),u(`, `),i(`code`,null,`visibility-lg`),u(`, `),i(`code`,null,`visibility-at-height-md`),u(`, `),i(`code`,null,`gap-xl`),u(`, `),i(`code`,null,`column-gap-sm`),u(`, `),i(`code`,null,`row-wrap`),u(`, `),i(`code`,null,`flex-grow`),u(`, `),i(`code`,null,`width-md`),u(` (`),i(`code`,null,`widths`),u(`)… The values drop their prefix: `),i(`code`,null,`inset="sm"`),u(` for `),i(`code`,null,`insetSm`),u(`, `),i(`code`,null,`gap="none"`),u(` for `),i(`code`,null,`gapNone`),u(`, `),i(`code`,null,`align="end"`),u(` for `),i(`code`,null,`alignEnd`),u(`.`)]),i(`li`,null,[u(`The breakpoint of `),i(`code`,null,`pf-toolbar-toggle-group`),u(` is a boolean prop (`),i(`code`,null,`xl`),u(` for `),i(`code`,null,`breakpoint="xl"`),u(`) and its icon is the `),i(`code`,null,`icon`),u(` slot (`),i(`code`,null,`toggleIcon`),u(`).`)]),i(`li`,null,[i(`code`,null,`pf-toolbar-filter`),u(` takes the `),i(`code`,null,`category`),u(` (`),i(`code`,null,`categoryName`),u(`) and the `),i(`code`,null,`labels`),u(`, or the `),i(`code`,null,`labels`),u(` slot; `),i(`code`,null,`delete-label`),u(` and `),i(`code`,null,`delete-label-group`),u(` are events (`),i(`code`,null,`deleteLabel`),u(`, `),i(`code`,null,`deleteLabelGroup`),u(`), and only a `),i(`code`,null,`delete-label-group`),u(` listener adds the close button of the label group. `),i(`code`,null,`hide-toolbar-item`),u(` inverts `),i(`code`,null,`showToolbarItem`),u(`.`)]),i(`li`,null,[u(`Boolean props drop their prefix: `),i(`code`,null,`container`),u(`, `),i(`code`,null,`full-height`),u(`, `),i(`code`,null,`static`),u(`, `),i(`code`,null,`sticky`),u(`, `),i(`code`,null,`sticky-base`),u(`, `),i(`code`,null,`sticky-stuck`),u(`, `),i(`code`,null,`vertical`),u(`, `),i(`code`,null,`no-padding`),u(`, `),i(`code`,null,`all-expanded`),u(`, `),i(`code`,null,`overflow-container`),u(`. See `),i(`a`,{href:`#/`},`common differences from patternfly-react`),u(`.`)])]),i(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),o(H,{title:`Toolbar items`,source:`<pf-toolbar id="toolbar-items-example">
  <pf-toolbar-content>
    <pf-toolbar-item>
      <pf-search-input v-model="search.items" aria-label="Items example search input" />
    </pf-toolbar-item>
    <pf-toolbar-item>
      <pf-button variant="secondary">Action</pf-button>
    </pf-toolbar-item>
    <pf-toolbar-item variant="separator" />
    <pf-toolbar-item>
      <pf-button variant="primary">Action2</pf-button>
    </pf-toolbar-item>
  </pf-toolbar-content>
</pf-toolbar>`},{intro:t(()=>[...s[39]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,`A toolbar can contain multiple toolbar items, like filters and buttons.`),i(`p`,null,`Note: This example does not demonstrate responsive toolbar behavior. Responsive toolbars are shown in the examples with toggle groups and filters.`)],-1)]]),default:t(()=>[o(V,{id:`toolbar-items-example`},{default:t(()=>[o(B,null,{default:t(()=>[o(R,null,{default:t(()=>[o(L,{modelValue:h.items,"onUpdate:modelValue":s[0]||=e=>h.items=e,"aria-label":`Items example search input`},null,8,[`modelValue`])]),_:1}),o(R,null,{default:t(()=>[o(z,{variant:`secondary`},{default:t(()=>[...s[40]||=[u(`Action`,-1)]]),_:1})]),_:1}),o(R,{variant:`separator`}),o(R,null,{default:t(()=>[o(z,{variant:`primary`},{default:t(()=>[...s[41]||=[u(`Action2`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),o(H,{title:`With adjusted inset`,source:`<pf-toolbar id="toolbar-insets" inset="none" inset-md="sm" inset-xl="2xl" inset-2xl="lg">
  <pf-toolbar-content>
    <pf-toolbar-group variant="action-group">
      <pf-toolbar-item v-for="n in 4" :key="n">
        <pf-button variant="secondary">Action</pf-button>
      </pf-toolbar-item>
    </pf-toolbar-group>
    <pf-toolbar-item variant="separator" />
    <pf-toolbar-group variant="action-group">
      <pf-toolbar-item>
        <pf-button variant="secondary">Action</pf-button>
      </pf-toolbar-item>
      <pf-toolbar-item>
        <pf-button variant="primary">Action</pf-button>
      </pf-toolbar-item>
    </pf-toolbar-group>
    <pf-toolbar-item variant="separator" />
    <pf-toolbar-group variant="action-group">
      <pf-toolbar-item v-for="n in 2" :key="n">
        <pf-button variant="secondary">Action</pf-button>
      </pf-toolbar-item>
    </pf-toolbar-group>
  </pf-toolbar-content>
</pf-toolbar>`},{intro:t(()=>[...s[42]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,[u(`To adjust a toolbar’s inset, use the `),i(`code`,null,`inset`),u(` properties. You can set the inset value at multiple breakpoints with `),i(`code`,null,`inset`),u(`, `),i(`code`,null,`inset-md`),u(`, `),i(`code`,null,`inset-lg`),u(`, `),i(`code`,null,`inset-xl`),u(` and `),i(`code`,null,`inset-2xl`),u(`. Inset values include "none", "sm", "md", "lg", "xl" and "2xl".`)])],-1)]]),default:t(()=>[o(V,{id:`toolbar-insets`,inset:`none`,"inset-md":`sm`,"inset-xl":`2xl`,"inset-2xl":`lg`},{default:t(()=>[o(B,null,{default:t(()=>[o(U,{variant:`action-group`},{default:t(()=>[(c(),a(d,null,n(4,e=>o(R,{key:e},{default:t(()=>[o(z,{variant:`secondary`},{default:t(()=>[...s[43]||=[u(`Action`,-1)]]),_:1})]),_:1})),64))]),_:1}),o(R,{variant:`separator`}),o(U,{variant:`action-group`},{default:t(()=>[o(R,null,{default:t(()=>[o(z,{variant:`secondary`},{default:t(()=>[...s[44]||=[u(`Action`,-1)]]),_:1})]),_:1}),o(R,null,{default:t(()=>[o(z,{variant:`primary`},{default:t(()=>[...s[45]||=[u(`Action`,-1)]]),_:1})]),_:1})]),_:1}),o(R,{variant:`separator`}),o(U,{variant:`action-group`},{default:t(()=>[(c(),a(d,null,n(2,e=>o(R,{key:e},{default:t(()=>[o(z,{variant:`secondary`},{default:t(()=>[...s[46]||=[u(`Action`,-1)]]),_:1})]),_:1})),64))]),_:1})]),_:1})]),_:1})]),_:1}),o(H,{title:`Vertical toolbar`,source:`<pf-toolbar id="toolbar-vertical" vertical>
  <pf-toolbar-content>
    <pf-toolbar-group variant="action-group-plain">
      <pf-toolbar-item>Item 1</pf-toolbar-item>
      <pf-toolbar-item>Item 2</pf-toolbar-item>
      <pf-toolbar-item>Item 3</pf-toolbar-item>
    </pf-toolbar-group>
    <pf-toolbar-group
      variant="action-group-plain"
      visibility-at-height="hidden"
      visibility-at-height-md="visible"
    >
      <pf-toolbar-item>Item 4 (visible above md breakpoint)</pf-toolbar-item>
      <pf-toolbar-item visibility-at-height="hidden" visibility-at-height-lg="visible">
        Item 5 (visible above lg breakpoint)
      </pf-toolbar-item>
      <pf-toolbar-item visibility-at-height="hidden" visibility-at-height-lg="visible">
        Item 6 (visible above lg breakpoint)
      </pf-toolbar-item>
    </pf-toolbar-group>
  </pf-toolbar-content>
</pf-toolbar>`},{intro:t(()=>[...s[47]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,[u(`A toolbar's orientation may be changed using the `),i(`code`,null,`vertical`),u(` property. Responsive behavior when height is adjusted may be customized for the `),i(`code`,null,`pf-toolbar-content`),u(`, `),i(`code`,null,`pf-toolbar-group`),u(`, and `),i(`code`,null,`pf-toolbar-item`),u(` components using their respective `),i(`code`,null,`visibility-at-height`),u(` properties.`)])],-1)]]),default:t(()=>[o(V,{id:`toolbar-vertical`,vertical:``},{default:t(()=>[o(B,null,{default:t(()=>[o(U,{variant:`action-group-plain`},{default:t(()=>[o(R,null,{default:t(()=>[...s[48]||=[u(`Item 1`,-1)]]),_:1}),o(R,null,{default:t(()=>[...s[49]||=[u(`Item 2`,-1)]]),_:1}),o(R,null,{default:t(()=>[...s[50]||=[u(`Item 3`,-1)]]),_:1})]),_:1}),o(U,{variant:`action-group-plain`,"visibility-at-height":`hidden`,"visibility-at-height-md":`visible`},{default:t(()=>[o(R,null,{default:t(()=>[...s[51]||=[u(`Item 4 (visible above md breakpoint)`,-1)]]),_:1}),o(R,{"visibility-at-height":`hidden`,"visibility-at-height-lg":`visible`},{default:t(()=>[...s[52]||=[u(` Item 5 (visible above lg breakpoint) `,-1)]]),_:1}),o(R,{"visibility-at-height":`hidden`,"visibility-at-height-lg":`visible`},{default:t(()=>[...s[53]||=[u(` Item 6 (visible above lg breakpoint) `,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),o(H,{title:`Sticky toolbar`,source:`<div style="overflow-y: scroll; height: 200px">
  <pf-toolbar id="toolbar-sticky" inset="none" :sticky="sticky.sticky">
    <pf-toolbar-content>
      <pf-toolbar-item>
        <pf-search-input v-model="search.sticky" aria-label="Sticky example search input" />
      </pf-toolbar-item>
      <pf-toolbar-item align-self="center">
        <pf-checkbox id="showOnlyEvenCheckbox" v-model="sticky.evenOnly" label="Show only even number items" />
      </pf-toolbar-item>
    </pf-toolbar-content>
  </pf-toolbar>
  <ul>
    <li v-for="n in numbers(sticky.evenOnly)" :key="n">item {{ n }}</li>
  </ul>
</div>
<pf-checkbox id="isStickyCheckbox" v-model="sticky.sticky" label="Is toolbar sticky" />`},{intro:t(()=>[...s[54]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,`To lock a toolbar and prevent it from scrolling with other content, use a sticky toolbar.`),i(`p`,null,`In the following example, toggle the "Is toolbar sticky" checkbox to see the difference between a sticky and non-sticky toolbar.`)],-1)]]),default:t(()=>[i(`div`,te,[o(V,{id:`toolbar-sticky`,inset:`none`,sticky:b.sticky},{default:t(()=>[o(B,null,{default:t(()=>[o(R,null,{default:t(()=>[o(L,{modelValue:h.sticky,"onUpdate:modelValue":s[1]||=e=>h.sticky=e,"aria-label":`Sticky example search input`},null,8,[`modelValue`])]),_:1}),o(R,{"align-self":`center`},{default:t(()=>[o(W,{id:`showOnlyEvenCheckbox`,modelValue:b.evenOnly,"onUpdate:modelValue":s[2]||=e=>b.evenOnly=e,label:`Show only even number items`},null,8,[`modelValue`])]),_:1})]),_:1})]),_:1},8,[`sticky`]),i(`ul`,null,[(c(!0),a(d,null,n(S(b.evenOnly),e=>(c(),a(`li`,{key:e},`item `+r(e),1))),128))])]),o(W,{id:`isStickyCheckbox`,modelValue:b.sticky,"onUpdate:modelValue":s[3]||=e=>b.sticky=e,label:`Is toolbar sticky`},null,8,[`modelValue`])]),_:1}),o(H,{title:`Dynamic sticky toolbar`,source:`<div
  id="dynamic-sticky-scroll-parent"
  style="overflow-y: scroll; height: 200px"
  @scroll="dynamicSticky.stuck = ($event.currentTarget as HTMLElement).scrollTop > 0"
>
  <pf-toolbar id="toolbar-dynamic-sticky" inset="none" sticky-base :sticky-stuck="dynamicSticky.stuck">
    <pf-toolbar-content>
      <pf-toolbar-item>
        <pf-search-input v-model="search.dynamicSticky" aria-label="Sticky example search input" />
      </pf-toolbar-item>
      <pf-toolbar-item align-self="center">
        <pf-checkbox
          id="showOnlyEvenDynamicCheckbox"
          v-model="dynamicSticky.evenOnly"
          label="Show only even number items" />
      </pf-toolbar-item>
    </pf-toolbar-content>
  </pf-toolbar>
  <ul>
    <li v-for="n in numbers(dynamicSticky.evenOnly)" :key="n">item {{ n }}</li>
  </ul>
</div>`},{intro:t(()=>[...s[55]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,[u(`A toolbar may alternatively be made sticky with two properties: `),i(`code`,null,`sticky-base`),u(` and `),i(`code`,null,`sticky-stuck`),u(` - which allows separate control of the sticky position and sticky styling respectively. In this example, `),i(`code`,null,`sticky-stuck`),u(` is only applied when the sticky element is not at the top of the scroll parent container.`)])],-1)]]),default:t(()=>[i(`div`,{id:`dynamic-sticky-scroll-parent`,style:{"overflow-y":`scroll`,height:`200px`},onScroll:s[6]||=e=>x.stuck=e.currentTarget.scrollTop>0},[o(V,{id:`toolbar-dynamic-sticky`,inset:`none`,"sticky-base":``,"sticky-stuck":x.stuck},{default:t(()=>[o(B,null,{default:t(()=>[o(R,null,{default:t(()=>[o(L,{modelValue:h.dynamicSticky,"onUpdate:modelValue":s[4]||=e=>h.dynamicSticky=e,"aria-label":`Sticky example search input`},null,8,[`modelValue`])]),_:1}),o(R,{"align-self":`center`},{default:t(()=>[o(W,{id:`showOnlyEvenDynamicCheckbox`,modelValue:x.evenOnly,"onUpdate:modelValue":s[5]||=e=>x.evenOnly=e,label:`Show only even number items`},null,8,[`modelValue`])]),_:1})]),_:1})]),_:1},8,[`sticky-stuck`]),i(`ul`,null,[(c(!0),a(d,null,n(S(x.evenOnly),e=>(c(),a(`li`,{key:e},`item `+r(e),1))),128))])],32)]),_:1}),o(H,{title:`With groups of items`,source:`<pf-toolbar id="toolbar-group-types">
  <pf-toolbar-content>
    <pf-toolbar-group variant="filter-group">
      <pf-toolbar-item>
        <pf-select v-model:selected="groups.first" :label="groups.first ?? 'First'" close-on-select>
          <pf-select-list>
            <pf-select-option v-for="option in ['A', 'B', 'C']" :key="option" :value="option">
              {{ option }}
            </pf-select-option>
          </pf-select-list>
        </pf-select>
      </pf-toolbar-item>
      <pf-toolbar-item>
        <pf-select v-model:selected="groups.second" :label="groups.second ?? 'Second'" close-on-select>
          <pf-select-list>
            <pf-select-option v-for="option in ['1', '2', '3']" :key="option" :value="option">
              {{ option }}
            </pf-select-option>
          </pf-select-list>
        </pf-select>
      </pf-toolbar-item>
      <pf-toolbar-item>
        <pf-select v-model:selected="groups.third" :label="groups.third ?? 'Third'" close-on-select>
          <pf-select-list>
            <pf-select-option v-for="option in ['I', 'II', 'III']" :key="option" :value="option">
              {{ option }}
            </pf-select-option>
          </pf-select-list>
        </pf-select>
      </pf-toolbar-item>
    </pf-toolbar-group>
    <pf-toolbar-group variant="action-group-plain">
      <pf-toolbar-item>
        <pf-button variant="plain" aria-label="edit">
          <template #icon><pen-to-square-icon /></template>
        </pf-button>
      </pf-toolbar-item>
      <pf-toolbar-item>
        <pf-button variant="plain" aria-label="clone">
          <template #icon><clone-icon /></template>
        </pf-button>
      </pf-toolbar-item>
      <pf-toolbar-item>
        <pf-button variant="plain" aria-label="sync">
          <template #icon><rotate-icon /></template>
        </pf-button>
      </pf-toolbar-item>
    </pf-toolbar-group>
    <pf-toolbar-group variant="action-group">
      <pf-toolbar-item>
        <pf-button variant="primary">Action</pf-button>
      </pf-toolbar-item>
      <pf-toolbar-item>
        <pf-button variant="secondary">Secondary</pf-button>
      </pf-toolbar-item>
      <pf-toolbar-item>
        <pf-button variant="tertiary">Tertiary</pf-button>
      </pf-toolbar-item>
    </pf-toolbar-group>
  </pf-toolbar-content>
</pf-toolbar>`},{intro:t(()=>[...s[56]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,`You can group similar items together to create desired associations and to enable items to respond to changes in viewport width together.`),i(`p`,null,`Note: This example does not demonstrate responsive toolbar behavior. Responsive toolbars are shown in the examples with toggle groups and filters.`)],-1)]]),default:t(()=>[o(V,{id:`toolbar-group-types`},{default:t(()=>[o(B,null,{default:t(()=>[o(U,{variant:`filter-group`},{default:t(()=>[o(R,null,{default:t(()=>[o(q,{selected:C.first,"onUpdate:selected":s[7]||=e=>C.first=e,label:C.first??`First`,"close-on-select":``},{default:t(()=>[o(K,null,{default:t(()=>[(c(),a(d,null,n([`A`,`B`,`C`],e=>o(G,{key:e,value:e},{default:t(()=>[u(r(e),1)]),_:2},1032,[`value`])),64))]),_:1})]),_:1},8,[`selected`,`label`])]),_:1}),o(R,null,{default:t(()=>[o(q,{selected:C.second,"onUpdate:selected":s[8]||=e=>C.second=e,label:C.second??`Second`,"close-on-select":``},{default:t(()=>[o(K,null,{default:t(()=>[(c(),a(d,null,n([`1`,`2`,`3`],e=>o(G,{key:e,value:e},{default:t(()=>[u(r(e),1)]),_:2},1032,[`value`])),64))]),_:1})]),_:1},8,[`selected`,`label`])]),_:1}),o(R,null,{default:t(()=>[o(q,{selected:C.third,"onUpdate:selected":s[9]||=e=>C.third=e,label:C.third??`Third`,"close-on-select":``},{default:t(()=>[o(K,null,{default:t(()=>[(c(),a(d,null,n([`I`,`II`,`III`],e=>o(G,{key:e,value:e},{default:t(()=>[u(r(e),1)]),_:2},1032,[`value`])),64))]),_:1})]),_:1},8,[`selected`,`label`])]),_:1})]),_:1}),o(U,{variant:`action-group-plain`},{default:t(()=>[o(R,null,{default:t(()=>[o(z,{variant:`plain`,"aria-label":`edit`},{icon:t(()=>[o(f(g))]),_:1})]),_:1}),o(R,null,{default:t(()=>[o(z,{variant:`plain`,"aria-label":`clone`},{icon:t(()=>[o(f(v))]),_:1})]),_:1}),o(R,null,{default:t(()=>[o(z,{variant:`plain`,"aria-label":`sync`},{icon:t(()=>[o(f(y))]),_:1})]),_:1})]),_:1}),o(U,{variant:`action-group`},{default:t(()=>[o(R,null,{default:t(()=>[o(z,{variant:`primary`},{default:t(()=>[...s[57]||=[u(`Action`,-1)]]),_:1})]),_:1}),o(R,null,{default:t(()=>[o(z,{variant:`secondary`},{default:t(()=>[...s[58]||=[u(`Secondary`,-1)]]),_:1})]),_:1}),o(R,null,{default:t(()=>[o(z,{variant:`tertiary`},{default:t(()=>[...s[59]||=[u(`Tertiary`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),o(H,{title:`Background color variants`,source:``},{intro:t(()=>[...s[60]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,[u(`To change the background color of a toolbar, use the `),i(`code`,null,`color-variant`),u(` property on the `),i(`code`,null,`pf-toolbar`),u(`.`)])],-1)]]),default:t(()=>[(c(),a(d,null,n(w,e=>(c(),a(d,{key:e.value},[u(r(e.title)+` `,1),o(V,{id:`toolbar-color-variant-${e.value}`,"color-variant":e.value},{default:t(()=>[o(B,null,{default:t(()=>[o(R,null,{default:t(()=>[o(L,{"aria-label":`${e.title} variant example search input`},null,8,[`aria-label`])]),_:2},1024),o(R,null,{default:t(()=>[o(z,{variant:`secondary`},{default:t(()=>[...s[61]||=[u(`Action`,-1)]]),_:1})]),_:1}),o(R,{variant:`separator`}),o(R,null,{default:t(()=>[o(z,{variant:`primary`},{default:t(()=>[...s[62]||=[u(`Action`,-1)]]),_:1})]),_:1})]),_:2},1024)]),_:2},1032,[`id`,`color-variant`])],64))),64))]),_:1}),s[111]||=i(`div`,{class:`markdown pf-v6-c-content`},[i(`h2`,{class:`pf-v6-c-title`},`Responsive toolbar behavior`),i(`p`,null,[u(`Toolbar width-based responsive modifiers use `),i(`code`,null,`@container`),u(` CSS queries with the global PatternFly breakpoints. Responsive inset modifiers (via the `),i(`code`,null,`inset`),u(` properties) are an exception and use viewport media queries.`)]),i(`p`,null,[u(`By default, the PatternFly CSS establishes the `),i(`code`,null,`container-name`),u(` property with a value of `),i(`code`,null,`pf-v6-contain-toolbar`),u(` on `),i(`code`,null,`:root`),u(`, so the breakpoints behave like viewport breakpoints.`)]),i(`p`,null,[u(`Alternatively, if another wrapping element creates a container in the CSS with a `),i(`code`,null,`container-name`),u(` property value of `),i(`code`,null,`pf-v6-contain-toolbar`),u(` and `),i(`code`,null,`container-type`),u(` value of `),i(`code`,null,`inline-size`),u(` or `),i(`code`,null,`size`),u(`, the breakpoints will apply to that container's width instead.`)])],-1),o(H,{title:`Toolbar as container`,source:`<div class="toolbar-container-query-resize">
  <pf-toolbar id="toolbar-container-query-example" container>
    <pf-toolbar-content>
      <pf-toolbar-item visibility-md="hidden">
        <pf-button variant="secondary">Hide on md</pf-button>
      </pf-toolbar-item>
      <pf-toolbar-item>
        <pf-button variant="secondary">Item</pf-button>
      </pf-toolbar-item>
      <pf-toolbar-item visibility="hidden" visibility-sm="visible">
        <pf-button variant="secondary">Show on sm</pf-button>
      </pf-toolbar-item>
      <pf-toolbar-group visibility-xl="hidden">
        <pf-toolbar-item v-for="n in 2" :key="n">
          <pf-button variant="secondary">Hide group on xl</pf-button>
        </pf-toolbar-item>
      </pf-toolbar-group>
      <pf-toolbar-group visibility="hidden" visibility-lg="visible">
        <pf-toolbar-item v-for="n in 2" :key="n">
          <pf-button variant="secondary">Show group on lg</pf-button>
        </pf-toolbar-item>
      </pf-toolbar-group>
    </pf-toolbar-content>
  </pf-toolbar>
</div>`},{intro:t(()=>[...s[63]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,[u(`Add `),i(`code`,null,`container`),u(` to the toolbar so width-based modifiers respond to the toolbar's width. Resize the dashed box in this example to see items and groups show and hide at the global breakpoints.`)])],-1)]]),default:t(()=>[i(`div`,ne,[o(V,{id:`toolbar-container-query-example`,container:``},{default:t(()=>[o(B,null,{default:t(()=>[o(R,{"visibility-md":`hidden`},{default:t(()=>[o(z,{variant:`secondary`},{default:t(()=>[...s[64]||=[u(`Hide on md`,-1)]]),_:1})]),_:1}),o(R,null,{default:t(()=>[o(z,{variant:`secondary`},{default:t(()=>[...s[65]||=[u(`Item`,-1)]]),_:1})]),_:1}),o(R,{visibility:`hidden`,"visibility-sm":`visible`},{default:t(()=>[o(z,{variant:`secondary`},{default:t(()=>[...s[66]||=[u(`Show on sm`,-1)]]),_:1})]),_:1}),o(U,{"visibility-xl":`hidden`},{default:t(()=>[(c(),a(d,null,n(2,e=>o(R,{key:e},{default:t(()=>[o(z,{variant:`secondary`},{default:t(()=>[...s[67]||=[u(`Hide group on xl`,-1)]]),_:1})]),_:1})),64))]),_:1}),o(U,{visibility:`hidden`,"visibility-lg":`visible`},{default:t(()=>[(c(),a(d,null,n(2,e=>o(R,{key:e},{default:t(()=>[o(z,{variant:`secondary`},{default:t(()=>[...s[68]||=[u(`Show group on lg`,-1)]]),_:1})]),_:1})),64))]),_:1})]),_:1})]),_:1})])]),_:1}),s[112]||=i(`div`,{class:`markdown pf-v6-c-content`},[i(`h2`,{class:`pf-v6-c-title`},`Examples with toggle groups and filters`),i(`p`,null,`The following examples use toggle groups to allow for more responsive and complex toolbars with multiple items and groups of items. To visualize responsive toolbar behavior in the following examples, resize the browser to a smaller screen width.`)],-1),o(H,{title:`Component managed toggle groups`,source:`<pf-toolbar id="toolbar-toggle-groups" class="pf-m-toggle-group-container">
  <pf-toolbar-content>
    <pf-toolbar-toggle-group xl>
      <template #icon><filter-icon /></template>
      <pf-toolbar-item>
        <pf-search-input v-model="search.managed" aria-label="search input example" />
      </pf-toolbar-item>
      <pf-toolbar-group variant="filter-group">
        <pf-toolbar-item>
          <pf-select v-model:selected="managed.status" :label="managed.status ?? 'Status'" close-on-select>
            <pf-select-list>
              <pf-select-option v-for="option in statusOptions" :key="option" :value="option">
                {{ option }}
              </pf-select-option>
            </pf-select-list>
          </pf-select>
        </pf-toolbar-item>
        <pf-toolbar-item>
          <pf-select v-model:selected="managed.risk" :label="managed.risk ?? 'Risk'" close-on-select>
            <pf-select-list>
              <pf-select-option v-for="option in riskOptions" :key="option" :value="option">
                {{ option }}
              </pf-select-option>
            </pf-select-list>
          </pf-select>
        </pf-toolbar-item>
      </pf-toolbar-group>
    </pf-toolbar-toggle-group>
  </pf-toolbar-content>
</pf-toolbar>`},{intro:t(()=>[...s[69]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,`A toggle group allows you to collapse a set of items into an overlay panel at a certain breakpoint. For example, when a toggle group contains filter controls, its contents will collapse into an overlay panel when the toolbar adapts to a change in the viewport size. The contents can be toggled by selecting the filter icon in the overlay panel.`)],-1)]]),default:t(()=>[o(V,{id:`toolbar-toggle-groups`,class:`pf-m-toggle-group-container`},{default:t(()=>[o(B,null,{default:t(()=>[o(J,{xl:``},{icon:t(()=>[o(f(_))]),default:t(()=>[o(R,null,{default:t(()=>[o(L,{modelValue:h.managed,"onUpdate:modelValue":s[10]||=e=>h.managed=e,"aria-label":`search input example`},null,8,[`modelValue`])]),_:1}),o(U,{variant:`filter-group`},{default:t(()=>[o(R,null,{default:t(()=>[o(q,{selected:D.status,"onUpdate:selected":s[11]||=e=>D.status=e,label:D.status??`Status`,"close-on-select":``},{default:t(()=>[o(K,null,{default:t(()=>[(c(),a(d,null,n(T,e=>o(G,{key:e,value:e},{default:t(()=>[u(r(e),1)]),_:2},1032,[`value`])),64))]),_:1})]),_:1},8,[`selected`,`label`])]),_:1}),o(R,null,{default:t(()=>[o(q,{selected:D.risk,"onUpdate:selected":s[12]||=e=>D.risk=e,label:D.risk??`Risk`,"close-on-select":``},{default:t(()=>[o(K,null,{default:t(()=>[(c(),a(d,null,n(E,e=>o(G,{key:e,value:e},{default:t(()=>[u(r(e),1)]),_:2},1032,[`value`])),64))]),_:1})]),_:1},8,[`selected`,`label`])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),o(H,{title:`Consumer managed toggle groups`,source:`<pf-toolbar
  id="toolbar-consumer-toggle-groups"
  v-model:expanded="consumerExpanded"
  class="pf-m-toggle-group-container"
>
  <pf-toolbar-content>
    <pf-toolbar-toggle-group xl>
      <template #icon><filter-icon /></template>
      <pf-toolbar-item>
        <pf-search-input v-model="search.consumer" aria-label="search input example" />
      </pf-toolbar-item>
      <pf-toolbar-group variant="filter-group">
        <pf-toolbar-item>
          <pf-select v-model:selected="consumer.status" :label="consumer.status ?? 'Status'" close-on-select>
            <pf-select-list>
              <pf-select-option v-for="option in statusOptions" :key="option" :value="option">
                {{ option }}
              </pf-select-option>
            </pf-select-list>
          </pf-select>
        </pf-toolbar-item>
        <pf-toolbar-item>
          <pf-select v-model:selected="consumer.risk" :label="consumer.risk ?? 'Risk'" close-on-select>
            <pf-select-list>
              <pf-select-option v-for="option in riskOptions" :key="option" :value="option">
                {{ option }}
              </pf-select-option>
            </pf-select-list>
          </pf-select>
        </pf-toolbar-item>
      </pf-toolbar-group>
    </pf-toolbar-toggle-group>
  </pf-toolbar-content>
</pf-toolbar>`},{intro:t(()=>[...s[70]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,[u(`To manually control the expanded state of the toggle group for smaller screen widths, bind `),i(`code`,null,`v-model:expanded`),u(` on the toolbar.`)]),i(`p`,null,`Note: The toggle group is aware of the consumer provided breakpoint, the expandable content is not. If the expandable content is expanded and the screen width surpasses that of the breakpoint, the expandable content is not aware of that and will remain open. Be sure to consider and handle this in your implementation.`)],-1)]]),default:t(()=>[o(V,{id:`toolbar-consumer-toggle-groups`,expanded:k.value,"onUpdate:expanded":s[16]||=e=>k.value=e,class:`pf-m-toggle-group-container`},{default:t(()=>[o(B,null,{default:t(()=>[o(J,{xl:``},{icon:t(()=>[o(f(_))]),default:t(()=>[o(R,null,{default:t(()=>[o(L,{modelValue:h.consumer,"onUpdate:modelValue":s[13]||=e=>h.consumer=e,"aria-label":`search input example`},null,8,[`modelValue`])]),_:1}),o(U,{variant:`filter-group`},{default:t(()=>[o(R,null,{default:t(()=>[o(q,{selected:O.status,"onUpdate:selected":s[14]||=e=>O.status=e,label:O.status??`Status`,"close-on-select":``},{default:t(()=>[o(K,null,{default:t(()=>[(c(),a(d,null,n(T,e=>o(G,{key:e,value:e},{default:t(()=>[u(r(e),1)]),_:2},1032,[`value`])),64))]),_:1})]),_:1},8,[`selected`,`label`])]),_:1}),o(R,null,{default:t(()=>[o(q,{selected:O.risk,"onUpdate:selected":s[15]||=e=>O.risk=e,label:O.risk??`Risk`,"close-on-select":``},{default:t(()=>[o(K,null,{default:t(()=>[(c(),a(d,null,n(E,e=>o(G,{key:e,value:e},{default:t(()=>[u(r(e),1)]),_:2},1032,[`value`])),64))]),_:1})]),_:1},8,[`selected`,`label`])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,[`expanded`])]),_:1}),o(H,{title:`With filters`,source:`<pf-toolbar
  id="toolbar-with-filter"
  class="pf-m-toggle-group-container"
  collapse-listed-filters-breakpoint="xl"
  @clear-all-filters="clearFilters(filters)"
>
  <pf-toolbar-content>
    <pf-toolbar-toggle-group xl>
      <template #icon><filter-icon /></template>
      <pf-toolbar-item>
        <pf-search-input v-model="search.filters" aria-label="search input example" />
      </pf-toolbar-item>
      <pf-toolbar-group variant="filter-group">
        <pf-toolbar-filter
          category="Status"
          :labels="filters.status"
          @delete-label="(_category, label) => removeFilter(filters, 'status', label)"
          @delete-label-group="filters.status = []"
        >
          <pf-select v-model:selected="filters.status" role="menu" label="Status">
            <pf-select-list>
              <pf-select-option v-for="option in statusOptions" :key="option" :value="option" check>
                {{ option }}
              </pf-select-option>
            </pf-select-list>
          </pf-select>
        </pf-toolbar-filter>
        <pf-toolbar-filter
          category="Risk"
          :labels="filters.risk"
          @delete-label="(_category, label) => removeFilter(filters, 'risk', label)"
        >
          <pf-select v-model:selected="filters.risk" role="menu" label="Risk">
            <pf-select-list>
              <pf-select-option v-for="option in riskOptions" :key="option" :value="option" check>
                {{ option }}
              </pf-select-option>
            </pf-select-list>
          </pf-select>
        </pf-toolbar-filter>
      </pf-toolbar-group>
    </pf-toolbar-toggle-group>
    <pf-toolbar-group variant="action-group-plain">
      <pf-toolbar-item>
        <pf-button variant="plain" aria-label="edit">
          <template #icon><pen-to-square-icon /></template>
        </pf-button>
      </pf-toolbar-item>
      <pf-toolbar-item>
        <pf-button variant="plain" aria-label="clone">
          <template #icon><clone-icon /></template>
        </pf-button>
      </pf-toolbar-item>
      <pf-toolbar-item>
        <pf-button variant="plain" aria-label="sync">
          <template #icon><rotate-icon /></template>
        </pf-button>
      </pf-toolbar-item>
    </pf-toolbar-group>
  </pf-toolbar-content>
</pf-toolbar>`},{intro:t(()=>[...s[71]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,`You can add filters to a toolbar to let users filter the content that a toolbar manages. When a toolbar is filtered, it will expand in height to make space for a row of filter labels and a "Clear all filters" button. Upon clearing the applied filters, the toolbar will return to its default height.`),i(`p`,null,[u(`The `),i(`code`,null,`pf-toolbar-filter`),u(` component expects the applied filters in `),i(`code`,null,`labels`),u(` and a `),i(`code`,null,`delete-label`),u(` listener. Listen to `),i(`code`,null,`delete-label-group`),u(` to close the entire label group. Once closed, the rendering of labels will be handled responsively by the toolbar.`)])],-1)]]),default:t(()=>[o(V,{id:`toolbar-with-filter`,class:`pf-m-toggle-group-container`,"collapse-listed-filters-breakpoint":`xl`,onClearAllFilters:s[23]||=e=>N(A)},{default:t(()=>[o(B,null,{default:t(()=>[o(J,{xl:``},{icon:t(()=>[o(f(_))]),default:t(()=>[o(R,null,{default:t(()=>[o(L,{modelValue:h.filters,"onUpdate:modelValue":s[17]||=e=>h.filters=e,"aria-label":`search input example`},null,8,[`modelValue`])]),_:1}),o(U,{variant:`filter-group`},{default:t(()=>[o(Y,{category:`Status`,labels:A.status,onDeleteLabel:s[19]||=(e,t)=>M(A,`status`,t),onDeleteLabelGroup:s[20]||=e=>A.status=[]},{default:t(()=>[o(q,{selected:A.status,"onUpdate:selected":s[18]||=e=>A.status=e,role:`menu`,label:`Status`},{default:t(()=>[o(K,null,{default:t(()=>[(c(),a(d,null,n(T,e=>o(G,{key:e,value:e,check:``},{default:t(()=>[u(r(e),1)]),_:2},1032,[`value`])),64))]),_:1})]),_:1},8,[`selected`])]),_:1},8,[`labels`]),o(Y,{category:`Risk`,labels:A.risk,onDeleteLabel:s[22]||=(e,t)=>M(A,`risk`,t)},{default:t(()=>[o(q,{selected:A.risk,"onUpdate:selected":s[21]||=e=>A.risk=e,role:`menu`,label:`Risk`},{default:t(()=>[o(K,null,{default:t(()=>[(c(),a(d,null,n(E,e=>o(G,{key:e,value:e,check:``},{default:t(()=>[u(r(e),1)]),_:2},1032,[`value`])),64))]),_:1})]),_:1},8,[`selected`])]),_:1},8,[`labels`])]),_:1})]),_:1}),o(U,{variant:`action-group-plain`},{default:t(()=>[o(R,null,{default:t(()=>[o(z,{variant:`plain`,"aria-label":`edit`},{icon:t(()=>[o(f(g))]),_:1})]),_:1}),o(R,null,{default:t(()=>[o(z,{variant:`plain`,"aria-label":`clone`},{icon:t(()=>[o(f(v))]),_:1})]),_:1}),o(R,null,{default:t(()=>[o(z,{variant:`plain`,"aria-label":`sync`},{icon:t(()=>[o(f(y))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),o(H,{title:`With custom label group content`,source:`<pf-toolbar
  id="toolbar-with-custom-label-group"
  class="pf-m-toggle-group-container"
  collapse-listed-filters-breakpoint="xl"
>
  <template #label-group-content>
    <pf-toolbar-item>
      <pf-button variant="link" inline>Save filters</pf-button>
    </pf-toolbar-item>
    <pf-toolbar-item>
      <pf-button variant="link" inline @click="clearFilters(customFilters)">Clear all filters</pf-button>
    </pf-toolbar-item>
  </template>

  <pf-toolbar-content>
    <pf-toolbar-toggle-group xl>
      <template #icon><filter-icon /></template>
      <pf-toolbar-group variant="filter-group">
        <pf-toolbar-filter
          category="Status"
          :labels="customFilters.status"
          @delete-label="(_category, label) => removeFilter(customFilters, 'status', label)"
          @delete-label-group="customFilters.status = []"
        >
          <pf-select v-model:selected="customFilters.status" role="menu" label="Status">
            <pf-select-list>
              <pf-select-option v-for="option in statusOptions" :key="option" :value="option" check>
                {{ option }}
              </pf-select-option>
            </pf-select-list>
          </pf-select>
        </pf-toolbar-filter>
        <pf-toolbar-filter
          category="Risk"
          :labels="customFilters.risk"
          @delete-label="(_category, label) => removeFilter(customFilters, 'risk', label)"
        >
          <pf-select v-model:selected="customFilters.risk" role="menu" label="Risk">
            <pf-select-list>
              <pf-select-option v-for="option in riskOptions" :key="option" :value="option" check>
                {{ option }}
              </pf-select-option>
            </pf-select-list>
          </pf-select>
        </pf-toolbar-filter>
      </pf-toolbar-group>
    </pf-toolbar-toggle-group>
  </pf-toolbar-content>
</pf-toolbar>`},{intro:t(()=>[...s[72]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,[u(`To customize the label groups generated by toolbar filters, use the `),i(`code`,null,`label-group-content`),u(` slot of the `),i(`code`,null,`pf-toolbar`),u(`. This slot will remove the default "Clear all filters" button.`)])],-1)]]),default:t(()=>[o(V,{id:`toolbar-with-custom-label-group`,class:`pf-m-toggle-group-container`,"collapse-listed-filters-breakpoint":`xl`},{"label-group-content":t(()=>[o(R,null,{default:t(()=>[o(z,{variant:`link`,inline:``},{default:t(()=>[...s[73]||=[u(`Save filters`,-1)]]),_:1})]),_:1}),o(R,null,{default:t(()=>[o(z,{variant:`link`,inline:``,onClick:s[24]||=e=>N(j)},{default:t(()=>[...s[74]||=[u(`Clear all filters`,-1)]]),_:1})]),_:1})]),default:t(()=>[o(B,null,{default:t(()=>[o(J,{xl:``},{icon:t(()=>[o(f(_))]),default:t(()=>[o(U,{variant:`filter-group`},{default:t(()=>[o(Y,{category:`Status`,labels:j.status,onDeleteLabel:s[26]||=(e,t)=>M(j,`status`,t),onDeleteLabelGroup:s[27]||=e=>j.status=[]},{default:t(()=>[o(q,{selected:j.status,"onUpdate:selected":s[25]||=e=>j.status=e,role:`menu`,label:`Status`},{default:t(()=>[o(K,null,{default:t(()=>[(c(),a(d,null,n(T,e=>o(G,{key:e,value:e,check:``},{default:t(()=>[u(r(e),1)]),_:2},1032,[`value`])),64))]),_:1})]),_:1},8,[`selected`])]),_:1},8,[`labels`]),o(Y,{category:`Risk`,labels:j.risk,onDeleteLabel:s[29]||=(e,t)=>M(j,`risk`,t)},{default:t(()=>[o(q,{selected:j.risk,"onUpdate:selected":s[28]||=e=>j.risk=e,role:`menu`,label:`Risk`},{default:t(()=>[o(K,null,{default:t(()=>[(c(),a(d,null,n(E,e=>o(G,{key:e,value:e,check:``},{default:t(()=>[u(r(e),1)]),_:2},1032,[`value`])),64))]),_:1})]),_:1},8,[`selected`])]),_:1},8,[`labels`])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),o(H,{title:`Stacked example`,source:`<pf-toolbar id="toolbar-group-types-stacked">
  <pf-toolbar-content>
    <pf-toolbar-toggle-group lg>
      <template #icon><filter-icon /></template>
      <pf-toolbar-group variant="filter-group">
        <pf-toolbar-item id="stacked-example-resource-select" variant="label">Resource</pf-toolbar-item>
        <pf-toolbar-item>
          <pf-select v-model:selected="stacked.resource" :label="stacked.resource ?? 'Resource'" close-on-select>
            <pf-select-list>
              <pf-select-option v-for="option in ['Pod', 'Deployment', 'Pod Set']" :key="option" :value="option">
                {{ option }}
              </pf-select-option>
            </pf-select-list>
          </pf-select>
        </pf-toolbar-item>
      </pf-toolbar-group>
      <pf-toolbar-group variant="filter-group">
        <pf-toolbar-item id="stacked-example-status-select" variant="label">Status</pf-toolbar-item>
        <pf-toolbar-item>
          <pf-select v-model:selected="stacked.status" :label="stacked.status ?? 'Status'" close-on-select>
            <pf-select-list>
              <pf-select-option
                v-for="option in ['Running', 'Ready', 'Updating', 'Terminating']"
                :key="option"
                :value="option"
              >
                {{ option }}
              </pf-select-option>
            </pf-select-list>
          </pf-select>
        </pf-toolbar-item>
      </pf-toolbar-group>
      <pf-toolbar-group variant="filter-group">
        <pf-toolbar-item id="stacked-example-type-select" variant="label">Type</pf-toolbar-item>
        <pf-toolbar-item>
          <pf-select v-model:selected="stacked.type" :label="stacked.type ?? 'Type'" close-on-select>
            <pf-select-list>
              <pf-select-option v-for="option in ['Any', 'No type']" :key="option" :value="option">
                {{ option }}
              </pf-select-option>
            </pf-select-list>
          </pf-select>
        </pf-toolbar-item>
      </pf-toolbar-group>
    </pf-toolbar-toggle-group>
    <pf-toolbar-item>
      <pf-overflow-menu breakpoint="2xl">
        <pf-overflow-menu-content>
          <pf-overflow-menu-group type="button">
            <pf-overflow-menu-item>
              <pf-button variant="primary">Primary</pf-button>
            </pf-overflow-menu-item>
            <pf-overflow-menu-item>
              <pf-button variant="secondary">Secondary</pf-button>
            </pf-overflow-menu-item>
          </pf-overflow-menu-group>
        </pf-overflow-menu-content>
        <pf-overflow-menu-control additional-options>
          <pf-dropdown v-model:open="stacked.kebabOpen">
            <template #toggle>
              <pf-menu-toggle variant="plain" aria-label="Stacked example overflow menu" />
            </template>
            <pf-dropdown-item value="link">Link</pf-dropdown-item>
            <pf-dropdown-item value="action">Action</pf-dropdown-item>
            <pf-dropdown-item value="disabled-link" disabled>Disabled Link</pf-dropdown-item>
          </pf-dropdown>
        </pf-overflow-menu-control>
      </pf-overflow-menu>
    </pf-toolbar-item>
  </pf-toolbar-content>
  <pf-divider />
  <pf-toolbar-content>
    <pf-toolbar-item>
      <pf-dropdown v-model:open="stacked.bulkOpen">
        <template #toggle>
          <pf-menu-toggle>
            <template #split-buttons>
              <pf-menu-toggle-checkbox id="stacked-example-ex-check" aria-label="Select all" />
            </template>
          </pf-menu-toggle>
        </template>
        <pf-dropdown-item value="none">Select none (0 items)</pf-dropdown-item>
        <pf-dropdown-item value="page">Select page (10 items)</pf-dropdown-item>
        <pf-dropdown-item value="all">Select all (100 items)</pf-dropdown-item>
      </pf-dropdown>
    </pf-toolbar-item>
    <pf-toolbar-item variant="pagination">
      <pf-pagination v-model:page="stacked.page" v-model:per-page="stacked.perPage" :count="37" compact />
    </pf-toolbar-item>
  </pf-toolbar-content>
</pf-toolbar>`},{intro:t(()=>[...s[75]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,`When all of a toolbar's required elements cannot fit in a single line, you can split toolbar items into multiple rows.`)],-1)]]),default:t(()=>[o(V,{id:`toolbar-group-types-stacked`},{default:t(()=>[o(B,null,{default:t(()=>[o(J,{lg:``},{icon:t(()=>[o(f(_))]),default:t(()=>[o(U,{variant:`filter-group`},{default:t(()=>[o(R,{id:`stacked-example-resource-select`,variant:`label`},{default:t(()=>[...s[76]||=[u(`Resource`,-1)]]),_:1}),o(R,null,{default:t(()=>[o(q,{selected:P.resource,"onUpdate:selected":s[30]||=e=>P.resource=e,label:P.resource??`Resource`,"close-on-select":``},{default:t(()=>[o(K,null,{default:t(()=>[(c(),a(d,null,n([`Pod`,`Deployment`,`Pod Set`],e=>o(G,{key:e,value:e},{default:t(()=>[u(r(e),1)]),_:2},1032,[`value`])),64))]),_:1})]),_:1},8,[`selected`,`label`])]),_:1})]),_:1}),o(U,{variant:`filter-group`},{default:t(()=>[o(R,{id:`stacked-example-status-select`,variant:`label`},{default:t(()=>[...s[77]||=[u(`Status`,-1)]]),_:1}),o(R,null,{default:t(()=>[o(q,{selected:P.status,"onUpdate:selected":s[31]||=e=>P.status=e,label:P.status??`Status`,"close-on-select":``},{default:t(()=>[o(K,null,{default:t(()=>[(c(),a(d,null,n([`Running`,`Ready`,`Updating`,`Terminating`],e=>o(G,{key:e,value:e},{default:t(()=>[u(r(e),1)]),_:2},1032,[`value`])),64))]),_:1})]),_:1},8,[`selected`,`label`])]),_:1})]),_:1}),o(U,{variant:`filter-group`},{default:t(()=>[o(R,{id:`stacked-example-type-select`,variant:`label`},{default:t(()=>[...s[78]||=[u(`Type`,-1)]]),_:1}),o(R,null,{default:t(()=>[o(q,{selected:P.type,"onUpdate:selected":s[32]||=e=>P.type=e,label:P.type??`Type`,"close-on-select":``},{default:t(()=>[o(K,null,{default:t(()=>[(c(),a(d,null,n([`Any`,`No type`],e=>o(G,{key:e,value:e},{default:t(()=>[u(r(e),1)]),_:2},1032,[`value`])),64))]),_:1})]),_:1},8,[`selected`,`label`])]),_:1})]),_:1})]),_:1}),o(R,null,{default:t(()=>[o(oe,{breakpoint:`2xl`},{default:t(()=>[o(ie,null,{default:t(()=>[o(re,{type:`button`},{default:t(()=>[o(X,null,{default:t(()=>[o(z,{variant:`primary`},{default:t(()=>[...s[79]||=[u(`Primary`,-1)]]),_:1})]),_:1}),o(X,null,{default:t(()=>[o(z,{variant:`secondary`},{default:t(()=>[...s[80]||=[u(`Secondary`,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),o(ae,{"additional-options":``},{default:t(()=>[o($,{open:P.kebabOpen,"onUpdate:open":s[33]||=e=>P.kebabOpen=e},{toggle:t(()=>[o(Z,{variant:`plain`,"aria-label":`Stacked example overflow menu`})]),default:t(()=>[o(Q,{value:`link`},{default:t(()=>[...s[81]||=[u(`Link`,-1)]]),_:1}),o(Q,{value:`action`},{default:t(()=>[...s[82]||=[u(`Action`,-1)]]),_:1}),o(Q,{value:`disabled-link`,disabled:``},{default:t(()=>[...s[83]||=[u(`Disabled Link`,-1)]]),_:1})]),_:1},8,[`open`])]),_:1})]),_:1})]),_:1})]),_:1}),o(se),o(B,null,{default:t(()=>[o(R,null,{default:t(()=>[o($,{open:P.bulkOpen,"onUpdate:open":s[34]||=e=>P.bulkOpen=e},{toggle:t(()=>[o(Z,null,{"split-buttons":t(()=>[o(ce,{id:`stacked-example-ex-check`,"aria-label":`Select all`})]),_:1})]),default:t(()=>[o(Q,{value:`none`},{default:t(()=>[...s[84]||=[u(`Select none (0 items)`,-1)]]),_:1}),o(Q,{value:`page`},{default:t(()=>[...s[85]||=[u(`Select page (10 items)`,-1)]]),_:1}),o(Q,{value:`all`},{default:t(()=>[...s[86]||=[u(`Select all (100 items)`,-1)]]),_:1})]),_:1},8,[`open`])]),_:1}),o(R,{variant:`pagination`},{default:t(()=>[o(le,{page:P.page,"onUpdate:page":s[35]||=e=>P.page=e,"per-page":P.perPage,"onUpdate:perPage":s[36]||=e=>P.perPage=e,count:37,compact:``},null,8,[`page`,`per-page`])]),_:1})]),_:1})]),_:1})]),_:1}),s[113]||=i(`div`,{class:`markdown pf-v6-c-content`},[i(`h2`,{class:`pf-v6-c-title`},`Examples with spacers and wrapping`),i(`p`,null,[u(`You may adjust the space between toolbar items to arrange them into groups. Items are spaced "16px" apart by default and can be modified by changing their or their parents' `),i(`code`,null,`gap`),u(`, `),i(`code`,null,`column-gap`),u(`, and `),i(`code`,null,`row-gap`),u(` properties. You can set the property values at multiple breakpoints, like `),i(`code`,null,`gap-md`),u(`, `),i(`code`,null,`gap-lg`),u(`, `),i(`code`,null,`gap-xl`),u(` and `),i(`code`,null,`gap-2xl`),u(`.`)])],-1),o(H,{title:`Toolbar content wrapping`,source:`<pf-toolbar id="toolbar-content-wrap">
  <pf-toolbar-content row-wrap="nowrap">
    <pf-toolbar-item>
      <pf-search-input v-model="search.wrap" aria-label="Items example search input" />
    </pf-toolbar-item>
    <pf-toolbar-item v-for="n in 4" :key="n">
      <pf-button variant="secondary">Action</pf-button>
    </pf-toolbar-item>
    <pf-toolbar-item variant="separator" />
    <pf-toolbar-item>
      <pf-button variant="primary">Action</pf-button>
    </pf-toolbar-item>
  </pf-toolbar-content>
</pf-toolbar>`},{intro:t(()=>[...s[87]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,[u(`The toolbar content section will wrap by default, but you can set the `),i(`code`,null,`row-wrap`),u(` property to "nowrap" to make it not wrap.`)])],-1)]]),default:t(()=>[o(V,{id:`toolbar-content-wrap`},{default:t(()=>[o(B,{"row-wrap":`nowrap`},{default:t(()=>[o(R,null,{default:t(()=>[o(L,{modelValue:h.wrap,"onUpdate:modelValue":s[37]||=e=>h.wrap=e,"aria-label":`Items example search input`},null,8,[`modelValue`])]),_:1}),(c(),a(d,null,n(4,e=>o(R,{key:e},{default:t(()=>[o(z,{variant:`secondary`},{default:t(()=>[...s[88]||=[u(`Action`,-1)]]),_:1})]),_:1})),64)),o(R,{variant:`separator`}),o(R,null,{default:t(()=>[o(z,{variant:`primary`},{default:t(()=>[...s[89]||=[u(`Action`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),o(H,{title:`Toolbar group spacers`,source:`Using gap
<pf-toolbar id="toolbar-group-gap">
  <pf-toolbar-content>
    <template v-for="(gap, i) in groupGaps" :key="gap.title">
      <pf-toolbar-item v-if="i > 0" variant="separator" ></pf-toolbar-item>
      <pf-toolbar-group :gap="gap.value">
        <pf-toolbar-item v-for="n in 2" :key="n">
          <pf-button variant="secondary">{{ gap.title }}</pf-button>
        </pf-toolbar-item>
      </pf-toolbar-group>
    </template>
  </pf-toolbar-content>
</pf-toolbar>
Using column gap
<pf-toolbar id="toolbar-group-column-gap">
  <pf-toolbar-content>
    <template v-for="(gap, i) in otherGaps" :key="gap.title">
      <pf-toolbar-item v-if="i > 0" variant="separator" ></pf-toolbar-item>
      <pf-toolbar-group :column-gap="gap.value">
        <pf-toolbar-item v-for="n in 2" :key="n">
          <pf-button variant="secondary">{{ gap.title }} Column Gap</pf-button>
        </pf-toolbar-item>
      </pf-toolbar-group>
    </template>
  </pf-toolbar-content>
</pf-toolbar>
Using row gap
<pf-toolbar id="toolbar-group-row-gap">
  <pf-toolbar-content>
    <template v-for="(gap, i) in otherGaps" :key="gap.title">
      <pf-toolbar-item v-if="i > 0" variant="separator" ></pf-toolbar-item>
      <pf-toolbar-group :row-gap="gap.value" row-wrap="wrap">
        <pf-toolbar-item v-for="n in 5" :key="n">
          <pf-button variant="secondary">{{ gap.title }} Row Gap</pf-button>
        </pf-toolbar-item>
      </pf-toolbar-group>
    </template>
  </pf-toolbar-content>
</pf-toolbar>`},{default:t(()=>[s[90]||=u(` Using gap `,-1),o(V,{id:`toolbar-group-gap`},{default:t(()=>[o(B,null,{default:t(()=>[(c(),a(d,null,n(F,(e,i)=>(c(),a(d,{key:e.title},[i>0?(c(),l(R,{key:0,variant:`separator`})):m(``,!0),o(U,{gap:e.value},{default:t(()=>[(c(),a(d,null,n(2,n=>o(R,{key:n},{default:t(()=>[o(z,{variant:`secondary`},{default:t(()=>[u(r(e.title),1)]),_:2},1024)]),_:2},1024)),64))]),_:2},1032,[`gap`])],64))),64))]),_:1})]),_:1}),s[91]||=u(` Using column gap `,-1),o(V,{id:`toolbar-group-column-gap`},{default:t(()=>[o(B,null,{default:t(()=>[(c(),a(d,null,n(I,(e,i)=>(c(),a(d,{key:e.title},[i>0?(c(),l(R,{key:0,variant:`separator`})):m(``,!0),o(U,{"column-gap":e.value},{default:t(()=>[(c(),a(d,null,n(2,n=>o(R,{key:n},{default:t(()=>[o(z,{variant:`secondary`},{default:t(()=>[u(r(e.title)+` Column Gap`,1)]),_:2},1024)]),_:2},1024)),64))]),_:2},1032,[`column-gap`])],64))),64))]),_:1})]),_:1}),s[92]||=u(` Using row gap `,-1),o(V,{id:`toolbar-group-row-gap`},{default:t(()=>[o(B,null,{default:t(()=>[(c(),a(d,null,n(I,(e,i)=>(c(),a(d,{key:e.title},[i>0?(c(),l(R,{key:0,variant:`separator`})):m(``,!0),o(U,{"row-gap":e.value,"row-wrap":`wrap`},{default:t(()=>[(c(),a(d,null,n(5,n=>o(R,{key:n},{default:t(()=>[o(z,{variant:`secondary`},{default:t(()=>[u(r(e.title)+` Row Gap`,1)]),_:2},1024)]),_:2},1024)),64))]),_:2},1032,[`row-gap`])],64))),64))]),_:1})]),_:1})]),_:1}),o(H,{title:`Toolbar item spacers`,source:`Using gap
<pf-toolbar id="toolbar-item-gap">
  <pf-toolbar-content>
    <pf-toolbar-group row-wrap="wrap">
      <template v-for="(gap, i) in otherGaps" :key="gap.title">
        <pf-toolbar-item v-if="i > 0" variant="separator" ></pf-toolbar-item>
        <pf-toolbar-item :gap="gap.value">
          <pf-button v-for="n in 2" :key="n" variant="secondary">{{ gap.title }} Gap</pf-button>
        </pf-toolbar-item>
      </template>
    </pf-toolbar-group>
  </pf-toolbar-content>
</pf-toolbar>
Using column gap
<pf-toolbar id="toolbar-item-column-gap">
  <pf-toolbar-content>
    <pf-toolbar-group row-wrap="wrap">
      <template v-for="(gap, i) in otherGaps" :key="gap.title">
        <pf-toolbar-item v-if="i > 0" variant="separator" ></pf-toolbar-item>
        <pf-toolbar-item :column-gap="gap.value">
          <pf-button v-for="n in 2" :key="n" variant="secondary">{{ gap.title }} Column Gap</pf-button>
        </pf-toolbar-item>
      </template>
    </pf-toolbar-group>
  </pf-toolbar-content>
</pf-toolbar>
Using row gap
<pf-toolbar id="toolbar-item-row-gap">
  <pf-toolbar-content>
    <pf-toolbar-group>
      <template v-for="(gap, i) in otherGaps" :key="gap.title">
        <pf-toolbar-item v-if="i > 0" variant="separator" ></pf-toolbar-item>
        <pf-toolbar-item :row-gap="gap.value" row-wrap="wrap">
          <pf-button v-for="n in 2" :key="n" variant="secondary">{{ gap.title }} Row Gap</pf-button>
        </pf-toolbar-item>
      </template>
    </pf-toolbar-group>
  </pf-toolbar-content>
</pf-toolbar>`},{default:t(()=>[s[93]||=u(` Using gap `,-1),o(V,{id:`toolbar-item-gap`},{default:t(()=>[o(B,null,{default:t(()=>[o(U,{"row-wrap":`wrap`},{default:t(()=>[(c(),a(d,null,n(I,(e,i)=>(c(),a(d,{key:e.title},[i>0?(c(),l(R,{key:0,variant:`separator`})):m(``,!0),o(R,{gap:e.value},{default:t(()=>[(c(),a(d,null,n(2,n=>o(z,{key:n,variant:`secondary`},{default:t(()=>[u(r(e.title)+` Gap`,1)]),_:2},1024)),64))]),_:2},1032,[`gap`])],64))),64))]),_:1})]),_:1})]),_:1}),s[94]||=u(` Using column gap `,-1),o(V,{id:`toolbar-item-column-gap`},{default:t(()=>[o(B,null,{default:t(()=>[o(U,{"row-wrap":`wrap`},{default:t(()=>[(c(),a(d,null,n(I,(e,i)=>(c(),a(d,{key:e.title},[i>0?(c(),l(R,{key:0,variant:`separator`})):m(``,!0),o(R,{"column-gap":e.value},{default:t(()=>[(c(),a(d,null,n(2,n=>o(z,{key:n,variant:`secondary`},{default:t(()=>[u(r(e.title)+` Column Gap`,1)]),_:2},1024)),64))]),_:2},1032,[`column-gap`])],64))),64))]),_:1})]),_:1})]),_:1}),s[95]||=u(` Using row gap `,-1),o(V,{id:`toolbar-item-row-gap`},{default:t(()=>[o(B,null,{default:t(()=>[o(U,null,{default:t(()=>[(c(),a(d,null,n(I,(e,i)=>(c(),a(d,{key:e.title},[i>0?(c(),l(R,{key:0,variant:`separator`})):m(``,!0),o(R,{"row-gap":e.value,"row-wrap":`wrap`},{default:t(()=>[(c(),a(d,null,n(2,n=>o(z,{key:n,variant:`secondary`},{default:t(()=>[u(r(e.title)+` Row Gap`,1)]),_:2},1024)),64))]),_:2},1032,[`row-gap`])],64))),64))]),_:1})]),_:1})]),_:1})]),_:1}),o(H,{title:`FlexGrow and widths`,source:`Using flex-grow on pf-toolbar-item
<pf-toolbar id="toolbar-flex-grow-item">
  <pf-toolbar-content>
    <pf-toolbar-item>
      <pf-button variant="secondary">Item 1</pf-button>
    </pf-toolbar-item>
    <pf-toolbar-item flex-grow>
      <pf-search-input aria-label="Flex grow search input" />
    </pf-toolbar-item>
    <pf-toolbar-item>
      <pf-button variant="secondary">Item 2</pf-button>
    </pf-toolbar-item>
  </pf-toolbar-content>
</pf-toolbar>
Using flex-grow on pf-toolbar-group
<pf-toolbar id="toolbar-flex-grow-group">
  <pf-toolbar-content>
    <pf-toolbar-group>
      <pf-toolbar-item>
        <pf-button variant="secondary">Item 1</pf-button>
      </pf-toolbar-item>
      <pf-toolbar-item>
        <pf-button variant="secondary">Item 2</pf-button>
      </pf-toolbar-item>
    </pf-toolbar-group>
    <pf-toolbar-group flex-grow>
      <pf-toolbar-item>
        <pf-button variant="secondary">Flex grow group item 1</pf-button>
      </pf-toolbar-item>
      <pf-toolbar-item>
        <pf-button variant="secondary">Flex grow group item 2</pf-button>
      </pf-toolbar-item>
    </pf-toolbar-group>
    <pf-toolbar-group>
      <pf-toolbar-item>
        <pf-button variant="secondary">Item 3</pf-button>
      </pf-toolbar-item>
    </pf-toolbar-group>
  </pf-toolbar-content>
</pf-toolbar>
Using widths on pf-toolbar-item
<pf-toolbar id="toolbar-widths">
  <pf-toolbar-content>
    <pf-toolbar-item width="200px">
      <pf-search-input aria-label="Search input with fixed width" />
    </pf-toolbar-item>
    <pf-toolbar-item>
      <pf-button variant="secondary">Regular item</pf-button>
    </pf-toolbar-item>
    <pf-toolbar-item width="300px">
      <pf-search-input aria-label="Search input with wider fixed width" />
    </pf-toolbar-item>
  </pf-toolbar-content>
</pf-toolbar>
Using responsive widths on pf-toolbar-item
<pf-toolbar id="toolbar-responsive-widths">
  <pf-toolbar-content>
    <pf-toolbar-item width="100px" width-md="200px" width-xl="300px">
      <pf-search-input aria-label="Search input with responsive width" />
    </pf-toolbar-item>
    <pf-toolbar-item>
      <pf-button variant="secondary">Regular item</pf-button>
    </pf-toolbar-item>
  </pf-toolbar-content>
</pf-toolbar>`},{intro:t(()=>[...s[96]||=[i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,[u(`You can use the `),i(`code`,null,`flex-grow`),u(` prop to make toolbar items or groups expand to fill available space. The `),i(`code`,null,`width`),u(` props allow you to set custom widths at various breakpoints.`)])],-1)]]),default:t(()=>[s[106]||=u(` Using flex-grow on pf-toolbar-item `,-1),o(V,{id:`toolbar-flex-grow-item`},{default:t(()=>[o(B,null,{default:t(()=>[o(R,null,{default:t(()=>[o(z,{variant:`secondary`},{default:t(()=>[...s[97]||=[u(`Item 1`,-1)]]),_:1})]),_:1}),o(R,{"flex-grow":``},{default:t(()=>[o(L,{"aria-label":`Flex grow search input`})]),_:1}),o(R,null,{default:t(()=>[o(z,{variant:`secondary`},{default:t(()=>[...s[98]||=[u(`Item 2`,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),s[107]||=u(` Using flex-grow on pf-toolbar-group `,-1),o(V,{id:`toolbar-flex-grow-group`},{default:t(()=>[o(B,null,{default:t(()=>[o(U,null,{default:t(()=>[o(R,null,{default:t(()=>[o(z,{variant:`secondary`},{default:t(()=>[...s[99]||=[u(`Item 1`,-1)]]),_:1})]),_:1}),o(R,null,{default:t(()=>[o(z,{variant:`secondary`},{default:t(()=>[...s[100]||=[u(`Item 2`,-1)]]),_:1})]),_:1})]),_:1}),o(U,{"flex-grow":``},{default:t(()=>[o(R,null,{default:t(()=>[o(z,{variant:`secondary`},{default:t(()=>[...s[101]||=[u(`Flex grow group item 1`,-1)]]),_:1})]),_:1}),o(R,null,{default:t(()=>[o(z,{variant:`secondary`},{default:t(()=>[...s[102]||=[u(`Flex grow group item 2`,-1)]]),_:1})]),_:1})]),_:1}),o(U,null,{default:t(()=>[o(R,null,{default:t(()=>[o(z,{variant:`secondary`},{default:t(()=>[...s[103]||=[u(`Item 3`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),s[108]||=u(` Using widths on pf-toolbar-item `,-1),o(V,{id:`toolbar-widths`},{default:t(()=>[o(B,null,{default:t(()=>[o(R,{width:`200px`},{default:t(()=>[o(L,{"aria-label":`Search input with fixed width`})]),_:1}),o(R,null,{default:t(()=>[o(z,{variant:`secondary`},{default:t(()=>[...s[104]||=[u(`Regular item`,-1)]]),_:1})]),_:1}),o(R,{width:`300px`},{default:t(()=>[o(L,{"aria-label":`Search input with wider fixed width`})]),_:1})]),_:1})]),_:1}),s[109]||=u(` Using responsive widths on pf-toolbar-item `,-1),o(V,{id:`toolbar-responsive-widths`},{default:t(()=>[o(B,null,{default:t(()=>[o(R,{width:`100px`,"width-md":`200px`,"width-xl":`300px`},{default:t(()=>[o(L,{"aria-label":`Search input with responsive width`})]),_:1}),o(R,null,{default:t(()=>[o(z,{variant:`secondary`},{default:t(()=>[...s[105]||=[u(`Regular item`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}});export{b as default};