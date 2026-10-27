import{F as e,G as t,H as n,N as r,Nt as i,O as a,c as o,d as s,ft as c,g as l,h as u,j as d,k as f,l as p,m,n as h,nt as g,rt as _,u as v}from"./runtime-core.esm-bundler-DKmYt4j6.js";import{F as ee,S as y,W as b}from"./index-Cl3hMFDe.js";import{t as te}from"./users-icon-BrDe7FA0.js";import{n as ne,r as x,t as re}from"./laptop-icon-BnqEC6wU.js";import{t as S}from"./database-icon-DotyWhik.js";var C=l({inheritAttrs:!1,__name:`KeepAliveTest`,setup(e){let t=_(0),n=_();return a(()=>n.value=setInterval(()=>t.value++,1e3)),f(()=>clearInterval(n.value)),(e,n)=>(d(),s(`div`,null,`Time alive: `+i(t.value)+`s`,1))}}),ie=b({name:`DiagramProjectIcon`,height:512,width:512,svgPathData:`M0 80C0 53.5 21.5 32 48 32l96 0c26.5 0 48 21.5 48 48l0 16 128 0 0-16c0-26.5 21.5-48 48-48l96 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-96 0c-26.5 0-48-21.5-48-48l0-16-128 0 0 16c0 7.3-1.7 14.3-4.6 20.5l68.6 91.5 80 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-96 0c-26.5 0-48-21.5-48-48l0-96c0-7.3 1.7-14.3 4.6-20.5L128 224 48 224c-26.5 0-48-21.5-48-48L0 80z`,yOffset:0,xOffset:0}),ae={style:{"margin-top":`20px`}},oe={style:{"margin-top":`20px`}},se={style:{"margin-top":`20px`}},ce={style:{"margin-top":`20px`}},le={style:{"margin-top":`20px`}},ue={style:{"margin-top":`20px`}},de={style:{"margin-top":`20px`}},fe={style:{"margin-top":`20px`}},pe={style:{"margin-top":`20px`}},me={style:{"margin-top":`20px`}},w=l({__name:`Tabs.story`,setup(a){let l=[{key:0,title:`Users`,content:`Users`},{key:1,title:`Containers`,content:`Containers`},{key:2,title:`Database`,content:`Database`},{key:3,title:`Server`,content:`Server`},{key:4,title:`System`,content:`System`},{key:6,title:`Network`,content:`Network`},{key:7,title:`Tab item 7`,content:`Tab 7 section`},{key:8,title:`Tab item 8`,content:`Tab 8 section`},{key:9,title:`Tab item 9`,content:`Tab 9 section`},{key:10,title:`Tab item 10`,content:`Tab 10 section`},{key:11,title:`Tab item 11`,content:`Tab 11 section`}],f=g({active:0,box:!1}),b=g({active:0,secondary:!0}),w=g({active:0,box:!1}),T=g({active:0,expanded:!1}),E=_(0),D=g({active:0,box:!1}),O=g({active:0,showTabCount:!1}),k=g({active:0,box:!1}),A=g({active:0,box:!1}),j=g({active:0,box:!1}),M=_(0),N=g({primary:0,secondary:20,box:!1}),P=g({active:0,box:!1}),F=_(0),I=g({primary:0,secondary:20}),L=_(0),R=_(0),z=n(`separate1`),B=n(`separate2`),V=n(`separate3`),H=_(0),U=n(`body1`),W=n(`body2`),he=n(`body3`),ge=_(0),_e=_(0),ve=_(0),G=_(!1),ye=n(`toggled1`),be=n(`toggled2`),xe=n(`toggled3`),K=g({active:0,tabs:[`Terminal 1`,`Terminal 2`,`Terminal 3`],next:4}),q=g({active:0,tabs:[`Terminal 1`,`Terminal 2`,`Terminal 3`]});function Se(e,t){let n=Number(e.active),r=n;t<n?r=Math.max(n-1,0):n===e.tabs.length-1&&(r=Math.max(e.tabs.length-2,0)),e.tabs=e.tabs.filter((e,n)=>n!==t),e.active=r}function Ce(){K.tabs=[...K.tabs,`Terminal ${K.next}`],K.active=K.tabs.length-1,K.next++}let we=_(0),Te=[`Users`,`Containers`,`Database`,`Disabled`,`ARIA disabled`,`Help disabled`];return(n,a)=>{let g=e(`component-info`),_=e(`pf-tab`),J=e(`pf-tabs`),Y=e(`pf-checkbox`),X=e(`story-canvas`),Z=e(`pf-tab-content`),Q=e(`pf-tab-content-body`),Ee=e(`pf-button`),De=e(`pf-divider`),$=e(`pf-tab-action`),Oe=e(`pf-popover`),ke=e(`doc-page`);return d(),p(ke,{name:`Components/Tabs.story.vue`,title:`Tabs`},{description:t(()=>[...a[39]||=[o(`b`,null,`Tabs`,-1),m(` allow users to navigate between views within the same page or context.`,-1)]]),apidocs:t(()=>[u(g,{name:`PfTabs`,doc:{name:`PfTabs`,exportName:`PfTabs`,displayName:`Tabs`,description:``,tags:{},expose:[{name:`tabList`}],props:[{name:`expandable2xl`,description:`Toggle collapse/expand state at Xl2 breakpoint`,required:!1,type:{name:`union`,elements:[{name:`"expandable"`},{name:`"nonExpandable"`}]}},{name:`expandableXl`,description:`Toggle collapse/expand state at Xl breakpoint`,required:!1,type:{name:`union`,elements:[{name:`"expandable"`},{name:`"nonExpandable"`}]}},{name:`expandableLg`,description:`Toggle collapse/expand state at Lg breakpoint`,required:!1,type:{name:`union`,elements:[{name:`"expandable"`},{name:`"nonExpandable"`}]}},{name:`expandableMd`,description:`Toggle collapse/expand state at Md breakpoint`,required:!1,type:{name:`union`,elements:[{name:`"expandable"`},{name:`"nonExpandable"`}]}},{name:`expandableSm`,description:`Toggle collapse/expand state at Sm breakpoint`,required:!1,type:{name:`union`,elements:[{name:`"expandable"`},{name:`"nonExpandable"`}]}},{name:`expandable`,description:`Toggle collapse/expand state`,required:!1,type:{name:`union`,elements:[{name:`"expandable"`},{name:`"nonExpandable"`}]}},{name:`inset2xl`,required:!1,type:{name:`union`,elements:[{name:`"none"`},{name:`"xs"`},{name:`"sm"`},{name:`"md"`},{name:`"lg"`},{name:`"xl"`},{name:`"2xl"`},{name:`"3xl"`}]}},{name:`insetXl`,required:!1,type:{name:`union`,elements:[{name:`"none"`},{name:`"xs"`},{name:`"sm"`},{name:`"md"`},{name:`"lg"`},{name:`"xl"`},{name:`"2xl"`},{name:`"3xl"`}]}},{name:`insetLg`,required:!1,type:{name:`union`,elements:[{name:`"none"`},{name:`"xs"`},{name:`"sm"`},{name:`"md"`},{name:`"lg"`},{name:`"xl"`},{name:`"2xl"`},{name:`"3xl"`}]}},{name:`insetMd`,required:!1,type:{name:`union`,elements:[{name:`"none"`},{name:`"xs"`},{name:`"sm"`},{name:`"md"`},{name:`"lg"`},{name:`"xl"`},{name:`"2xl"`},{name:`"3xl"`}]}},{name:`insetSm`,required:!1,type:{name:`union`,elements:[{name:`"none"`},{name:`"xs"`},{name:`"sm"`},{name:`"md"`},{name:`"lg"`},{name:`"xl"`},{name:`"2xl"`},{name:`"3xl"`}]}},{name:`inset`,required:!1,type:{name:`union`,elements:[{name:`"none"`},{name:`"xs"`},{name:`"sm"`},{name:`"md"`},{name:`"lg"`},{name:`"xl"`},{name:`"2xl"`},{name:`"3xl"`}]}},{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`id`,description:`Uniquely identifies the tabs`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`() => useId()`}},{name:`defaultActiveKey`,description:`The key of the default active tab, when activeKey is not bound`,required:!1,type:{name:`TabKey`}},{name:`filled`,description:`Enables the filled tab list layout`,required:!1,type:{name:`boolean`}},{name:`subtab`,description:`Enables subtab tab styling`,required:!1,type:{name:`boolean`}},{name:`nav`,tags:{beta:[{description:`Enables horizontal nav tab styling. The tabs are rendered in a nav element unless component is set.`,title:`beta`}]},required:!1,type:{name:`boolean`}},{name:`secondary`,description:`Enables the secondary background color variant`,required:!1,type:{name:`boolean`}},{name:`box`,description:`Enables box styling to the tab component`,required:!1,type:{name:`boolean`}},{name:`vertical`,description:`Enables vertical tab styling`,required:!1,type:{name:`boolean`}},{name:`noBorderBottom`,description:`Disables border bottom tab styling on tabs. Defaults to false. To remove the bottom border, set this prop to true.`,required:!1,type:{name:`boolean`}},{name:`backScrollAriaLabel`,description:`Aria-label for the back scroll button`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`'Scroll back'`}},{name:`forwardScrollAriaLabel`,description:`Aria-label for the forward scroll button`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`'Scroll forward'`}},{name:`component`,description:`Determines what tag is used around the tabs. Use "nav" to define the tabs inside a navigation region`,required:!1,type:{name:`union`,elements:[{name:`"div"`},{name:`"nav"`}]}},{name:`ariaLabel`,description:`Provides an accessible label for the tabs. Labels should be unique for each set of tabs that are present on a page. When component is set to nav, this prop should be defined to differentiate the tabs from other navigation regions on the page.`,required:!1,type:{name:`string`}},{name:`tabListAriaLabel`,description:`A readable string to create an accessible name for the tablist element. This can be used to differentiate multiple tablists on a page, and should be used for subtabs.`,required:!1,type:{name:`string`}},{name:`tabListAriaLabelledby`,description:`Id of an element that provides an accessible name for the tablist. Use this when a visible label already exists on the page.`,required:!1,type:{name:`string`}},{name:`mountOnEnter`,description:`Waits until the first "enter" transition to mount tab children (add them to the DOM). A tab can override it.`,required:!1,type:{name:`boolean`}},{name:`unmountOnExit`,description:`Unmounts tab children (removes them from the DOM) when they are no longer visible. A tab can override it.`,required:!1,type:{name:`boolean`}},{name:`pageInsets`,description:`Flag indicates that the tabs should use page insets.`,required:!1,type:{name:`boolean`}},{name:`defaultExpanded`,description:`Flag indicating the default expanded state of expandable vertical tabs, when expanded is not bound`,required:!1,type:{name:`boolean`}},{name:`toggleText`,description:`Text that appears in the expandable toggle`,required:!1,type:{name:`string`}},{name:`toggleAriaLabel`,description:`Aria-label for the expandable toggle`,required:!1,type:{name:`string`}},{name:`overflowHorizontal`,description:`Flag which places overflowing tabs into a menu triggered by the last tab.`,required:!1,type:{name:`boolean`}},{name:`overflowShowTabCount`,description:`Flag which shows the count of overflowing tabs in the overflow tab`,required:!1,type:{name:`boolean`}},{name:`overflowTitleText`,description:`The text which displays in the overflow tab when an overflowing tab isn't selected`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`'More'`}},{name:`overflowToggleAriaLabel`,description:`The aria label applied to the button which toggles the tab overflow menu`,required:!1,type:{name:`string`}},{name:`addButtonAriaLabel`,description:`Aria-label for the add button`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`'Add tab'`}},{name:`addButtonDisabled`,description:`Flag indicating that the add button is disabled`,required:!1,type:{name:`boolean`}},{name:`onClose`,description:`Callback to handle tab closing. When set, a close button is added to all tabs.`,required:!1,type:{name:`TSFunctionType`}},{name:`onAdd`,description:`Callback for the add button. When set, the add button is rendered.`,required:!1,type:{name:`TSFunctionType`}}],events:[{name:`select`,type:{names:[`Event`]},description:`Emitted when a tab is selected, with its key`}],slots:[{name:`default`,description:`The pf-tab components`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Tabs/Tabs.vue`]}}),u(g,{name:`PfTab`,doc:{name:`PfTab`,exportName:`PfTab`,displayName:`Tab`,description:``,tags:{},expose:[{name:`key`}],props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`eventKey`,description:`Uniquely identifies the tab. Defaults to the key of the component.`,required:!1,type:{name:`union`,elements:[{name:`number`},{name:`string`}]}},{name:`title`,description:`Content rendered in the tab title, replaced by the title slot.`,required:!1,type:{name:`string`}},{name:`href`,description:`URL associated with the Tab. A Tab with an href will render as an <a> instead of a <button>. A Tab inside a <Tabs component="nav"> should have an href.`,required:!1,type:{name:`string`}},{name:`target`,description:`Link target`,required:!1,type:{name:`string`}},{name:`disabled`,description:`Adds disabled styling and disables the button using the disabled html attribute`,required:!1,type:{name:`boolean`}},{name:`ariaDisabled`,description:`Adds disabled styling and communicates that the button is disabled using the aria-disabled html attribute. The tab stays focusable but cannot be selected.`,required:!1,type:{name:`boolean`}},{name:`contentRef`,description:`Tab content defined outside of the Tabs component, hidden when the tab is not active`,required:!1,type:{name:`union`,elements:[{name:`{ hidden: boolean }`},{name:`null`}]}},{name:`contentId`,description:`Id of the tab content defined outside of the Tabs component`,required:!1,type:{name:`string`}},{name:`mountOnEnter`,description:`Waits until the first "enter" transition to mount tab children (add them to the DOM). Defaults to the Tabs value.`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`undefined`}},{name:`unmountOnExit`,description:`Unmounts tab children (removes them from the DOM) when they are no longer visible. Defaults to the Tabs value.`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`undefined`}},{name:`tooltip`,description:"Content of a tooltip shown on the tab. The `tooltip` slot can be used for rich content.",required:!1,type:{name:`string`}},{name:`tooltipAttrs`,description:"Additional attrs passed to the tooltip, such as its `position`",required:!1,type:{name:`Omit`,elements:[{name:`ComponentProps`,elements:[{name:`TSTypeQuery`}]},{name:`"content"`}]}},{name:`closeButtonAriaLabel`,description:`Aria-label for the close button added when the Tabs have a close listener`,required:!1,type:{name:`string`}},{name:`closeDisabled`,description:`Flag indicating the close button should be disabled`,required:!1,type:{name:`boolean`}}],events:[{name:`click`,type:{names:[`MouseEvent`]}},{name:`enter`},{name:`leave`}],slots:[{name:`tooltip`,description:`Content of a tooltip shown on the tab`},{name:`icon`,description:`Icon of the tab title`},{name:`title`,description:`Title of the tab, replacing the title prop`},{name:`actions`,description:`Actions rendered beside the tab title, such as pf-tab-action`},{name:`default`,description:`Content of the tab panel`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Tabs/Tab.vue`]}}),u(g,{name:`PfTabContent`,doc:{name:`PfTabContent`,exportName:`PfTabContent`,displayName:`TabContent`,description:``,tags:{},expose:[{name:`hidden`}],props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Tabs/TabContent.vue`]}}),u(g,{name:`PfTabContentBody`,doc:{name:`PfTabContentBody`,exportName:`PfTabContentBody`,displayName:`TabContentBody`,description:``,tags:{},props:[{name:`padding`,description:`Indicates if there should be padding around the tab content body`,required:!1,type:{name:`boolean`}}],events:[],slots:[{name:`default`,description:`Content of the tab content body`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Tabs/TabContentBody.vue`]}}),u(g,{name:`PfTabTitleText`,doc:{name:`PfTabTitleText`,exportName:`PfTabTitleText`,displayName:`TabTitleText`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Tabs/TabTitleText.vue`]}}),u(g,{name:`PfTabTitleIcon`,doc:{name:`PfTabTitleIcon`,exportName:`PfTabTitleIcon`,displayName:`TabTitleIcon`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Tabs/TabTitleIcon.vue`]}}),u(g,{name:`PfTabAction`,doc:{name:`PfTabAction`,exportName:`PfTabAction`,displayName:`TabAction`,description:``,tags:{},expose:[{name:`el`,description:`The action button element, for example to use as the trigger of a popover`}],props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`disabled`,description:`Flag indicating if the tab action is disabled`,required:!1,type:{name:`boolean`}},{name:`ariaLabel`,description:`Accessible label for the tab action`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`'Tab action'`}}],events:[],slots:[{name:`default`,description:`Icon of the tab action`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Tabs/TabAction.vue`]}}),u(g,{name:`PfTabButton`,doc:{name:`PfTabButton`,exportName:`PfTabButton`,displayName:`TabButton`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`href`,description:`URL associated with the Tab. A Tab with an href will render as an <a> instead of a <button>. A Tab inside a <Tabs component="nav"> should have an href.`,required:!1,type:{name:`string`}}],events:[],slots:[{name:`default`,description:`Content of the tab button`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Tabs/TabButton.vue`]}})]),default:t(()=>[a[171]||=o(`div`,{class:`markdown pf-v6-c-content`},[o(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),o(`ul`,null,[o(`li`,null,[m(`The active tab is bound with `),o(`code`,null,`v-model:active-key`),m(` (`),o(`code`,null,`activeKey`),m(`, `),o(`code`,null,`onSelect`),m(`), or set initially with `),o(`code`,null,`default-active-key`),m(`; when none matches a tab, the first tab is active. `),o(`code`,null,`select`),m(` is emitted with the event and the key of the selected tab.`)]),o(`li`,null,[m(`A tab is identified by its `),o(`code`,null,`event-key`),m(`, or by its Vue `),o(`code`,null,`key`),m(` when not set.`)]),o(`li`,null,[m(`The title is the `),o(`code`,null,`title`),m(` prop or the `),o(`code`,null,`title`),m(` slot, with an optional `),o(`code`,null,`icon`),m(` slot; `),o(`code`,null,`actions`),m(` is a slot of `),o(`code`,null,`pf-tab`),m(`.`)]),o(`li`,null,[m(`Other attributes of `),o(`code`,null,`pf-tab`),m(` go on its tab panel, not on its tab button.`)]),o(`li`,null,[o(`code`,null,`isHidden`),m(` is replaced by `),o(`code`,null,`v-if`),m(` on the tab.`)]),o(`li`,null,[o(`code`,null,`variant="secondary"`),m(` is the `),o(`code`,null,`secondary`),m(` prop; `),o(`code`,null,`isNav`),m(`, `),o(`code`,null,`isBox`),m(`, `),o(`code`,null,`isFilled`),m(`, `),o(`code`,null,`isSubtab`),m(`, `),o(`code`,null,`isVertical`),m(`, `),o(`code`,null,`hasNoBorderBottom`),m(` and `),o(`code`,null,`usePageInsets`),m(` are `),o(`code`,null,`nav`),m(`, `),o(`code`,null,`box`),m(`, `),o(`code`,null,`filled`),m(`, `),o(`code`,null,`subtab`),m(`, `),o(`code`,null,`vertical`),m(`, `),o(`code`,null,`no-border-bottom`),m(` and `),o(`code`,null,`page-insets`),m(`.`)]),o(`li`,null,[o(`code`,null,`inset`),m(` and `),o(`code`,null,`expandable`),m(` take a value per breakpoint as separate props (`),o(`code`,null,`inset-md`),m(`, `),o(`code`,null,`expandable-lg`),m(`…).`)]),o(`li`,null,[m(`The expanded state of vertical tabs is bound with `),o(`code`,null,`v-model:expanded`),m(` (`),o(`code`,null,`isExpanded`),m(`, `),o(`code`,null,`onToggle`),m(`), or set initially with `),o(`code`,null,`default-expanded`),m(`.`)]),o(`li`,null,[o(`code`,null,`isOverflowHorizontal`),m(` is `),o(`code`,null,`overflow-horizontal`),m(`, and its settings are the `),o(`code`,null,`overflow-show-tab-count`),m(`, `),o(`code`,null,`overflow-title-text`),m(` and `),o(`code`,null,`overflow-toggle-aria-label`),m(` props.`)]),o(`li`,null,[m(`A `),o(`code`,null,`close`),m(` listener (`),o(`code`,null,`onClose`),m(`) adds a close button to every tab and an `),o(`code`,null,`add`),m(` listener (`),o(`code`,null,`onAdd`),m(`) the add button.`)]),o(`li`,null,[m(`A tab content defined outside of the tabs is passed to `),o(`code`,null,`content-ref`),m(` (`),o(`code`,null,`tabContentRef`),m(`), with its id in `),o(`code`,null,`content-id`),m(`.`)]),o(`li`,null,[o(`code`,null,`mount-on-enter`),m(` and `),o(`code`,null,`unmount-on-exit`),m(` can also be set on a single tab.`)]),o(`li`,null,[m(`A tooltip is added with the `),o(`code`,null,`tooltip`),m(` prop or slot of `),o(`code`,null,`pf-tab`),m(`, plus `),o(`code`,null,`tooltip-attrs`),m(`. See `),o(`a`,{href:`#/`},`common differences from patternfly-react`),m(`.`)])]),o(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),u(X,{title:`Default tabs`,source:`<pf-tabs v-model:active-key="defaultTabs.active" :box="defaultTabs.box" aria-label="Tabs in the default example">
  <pf-tab :event-key="0" title="Users">Users</pf-tab>
  <pf-tab :event-key="1" title="Containers">Containers</pf-tab>
  <pf-tab :event-key="2" title="Database">Database</pf-tab>
  <pf-tab :event-key="3" title="Disabled" disabled>Disabled</pf-tab>
  <pf-tab :event-key="4" title="ARIA Disabled" aria-disabled>ARIA Disabled</pf-tab>
  <pf-tab
    :event-key="5"
    title="ARIA Disabled (Tooltip)"
    aria-disabled
    tooltip="Aria-disabled tabs are like disabled tabs, but focusable. Allows for tooltip support."
  >
    ARIA Disabled (Tooltip)
  </pf-tab>
</pf-tabs>
<div style="margin-top: 20px">
  <pf-checkbox id="toggle-box-default" v-model="defaultTabs.box" label="box" />
</div>`},{intro:t(()=>[...a[40]||=[o(`div`,{class:`markdown pf-v6-c-content`},[o(`p`,null,[m(`A `),o(`code`,null,`pf-tabs`),m(` component contains multiple `),o(`code`,null,`pf-tab`),m(` components that may be used to navigate between sets of content within a page.`)]),o(`p`,null,`You can adjust a tab in the following ways:`),o(`ul`,null,[o(`li`,null,[m(`To label a tab with text, use the `),o(`code`,null,`title`),m(` property, or a `),o(`code`,null,`pf-tab-title-text`),m(` in the `),o(`code`,null,`title`),m(` slot.`)]),o(`li`,null,[m(`To disable a tab, use the `),o(`code`,null,`disabled`),m(` property. Tabs using `),o(`code`,null,`disabled`),m(` are not perceivable or operable by users navigating via assistive technologies.`)]),o(`li`,null,[m(`To disable a tab, but keep it perceivable to assistive technology users, use the `),o(`code`,null,`aria-disabled`),m(` property. If a disabled tab has a tooltip, use this property instead of `),o(`code`,null,`disabled`),m(`.`)]),o(`li`,null,[m(`To add a tooltip to an aria-disabled tab, use the `),o(`code`,null,`tooltip`),m(` property.`)])]),o(`p`,null,`Tabs can be styled as 'default' or 'boxed':`),o(`ul`,null,[o(`li`,null,`Default tabs do not have any borders and use a bottom line to distinguish between a selected tab, a hovered tab, and an inactive tab.`),o(`li`,null,[m(`Boxed tabs are outlined to emphasize the area that a tab spans. To preview boxed tabs in the following examples, select the 'box' checkbox, which sets the `),o(`code`,null,`box`),m(` property to true.`)])])],-1)]]),default:t(()=>[u(J,{"active-key":f.active,"onUpdate:activeKey":a[0]||=e=>f.active=e,box:f.box,"aria-label":`Tabs in the default example`},{default:t(()=>[u(_,{"event-key":0,title:`Users`},{default:t(()=>[...a[41]||=[m(`Users`,-1)]]),_:1}),u(_,{"event-key":1,title:`Containers`},{default:t(()=>[...a[42]||=[m(`Containers`,-1)]]),_:1}),u(_,{"event-key":2,title:`Database`},{default:t(()=>[...a[43]||=[m(`Database`,-1)]]),_:1}),u(_,{"event-key":3,title:`Disabled`,disabled:``},{default:t(()=>[...a[44]||=[m(`Disabled`,-1)]]),_:1}),u(_,{"event-key":4,title:`ARIA Disabled`,"aria-disabled":``},{default:t(()=>[...a[45]||=[m(`ARIA Disabled`,-1)]]),_:1}),u(_,{"event-key":5,title:`ARIA Disabled (Tooltip)`,"aria-disabled":``,tooltip:`Aria-disabled tabs are like disabled tabs, but focusable. Allows for tooltip support.`},{default:t(()=>[...a[46]||=[m(` ARIA Disabled (Tooltip) `,-1)]]),_:1})]),_:1},8,[`active-key`,`box`]),o(`div`,ae,[u(Y,{id:`toggle-box-default`,modelValue:f.box,"onUpdate:modelValue":a[1]||=e=>f.box=e,label:`box`},null,8,[`modelValue`])])]),_:1}),u(X,{title:`Boxed secondary tabs`,source:`<pf-tabs
  v-model:active-key="boxSecondary.active"
  :secondary="boxSecondary.secondary"
  box
  aria-label="Tabs in the box light variation example"
>
  <pf-tab :event-key="0" title="Users">Users</pf-tab>
  <pf-tab :event-key="1" title="Containers">Containers</pf-tab>
  <pf-tab :event-key="2" title="Database">Database</pf-tab>
  <pf-tab :event-key="3" title="Disabled" disabled>Disabled</pf-tab>
  <pf-tab :event-key="4" title="ARIA Disabled" aria-disabled>ARIA Disabled</pf-tab>
  <pf-tab
    :event-key="5"
    title="ARIA Disabled (Tooltip)"
    aria-disabled
    tooltip="Aria-disabled tabs are like disabled tabs, but focusable. Allows for tooltip support."
  >
    ARIA Disabled (Tooltip)
  </pf-tab>
</pf-tabs>
<div style="margin-top: 20px">
  <pf-checkbox id="toggle-tabs-variant" v-model="boxSecondary.secondary" label="Tabs secondary variant" />
</div>`},{intro:t(()=>[...a[47]||=[o(`div`,{class:`markdown pf-v6-c-content`},[o(`p`,null,[m(`To change the background color of boxed tabs or the tab content, use the `),o(`code`,null,`secondary`),m(` property.`)]),o(`p`,null,`Toggle the tab color by selecting the 'Tabs secondary variant' checkbox in the following example.`)],-1)]]),default:t(()=>[u(J,{"active-key":b.active,"onUpdate:activeKey":a[2]||=e=>b.active=e,secondary:b.secondary,box:``,"aria-label":`Tabs in the box light variation example`},{default:t(()=>[u(_,{"event-key":0,title:`Users`},{default:t(()=>[...a[48]||=[m(`Users`,-1)]]),_:1}),u(_,{"event-key":1,title:`Containers`},{default:t(()=>[...a[49]||=[m(`Containers`,-1)]]),_:1}),u(_,{"event-key":2,title:`Database`},{default:t(()=>[...a[50]||=[m(`Database`,-1)]]),_:1}),u(_,{"event-key":3,title:`Disabled`,disabled:``},{default:t(()=>[...a[51]||=[m(`Disabled`,-1)]]),_:1}),u(_,{"event-key":4,title:`ARIA Disabled`,"aria-disabled":``},{default:t(()=>[...a[52]||=[m(`ARIA Disabled`,-1)]]),_:1}),u(_,{"event-key":5,title:`ARIA Disabled (Tooltip)`,"aria-disabled":``,tooltip:`Aria-disabled tabs are like disabled tabs, but focusable. Allows for tooltip support.`},{default:t(()=>[...a[53]||=[m(` ARIA Disabled (Tooltip) `,-1)]]),_:1})]),_:1},8,[`active-key`,`secondary`]),o(`div`,oe,[u(Y,{id:`toggle-tabs-variant`,modelValue:b.secondary,"onUpdate:modelValue":a[3]||=e=>b.secondary=e,label:`Tabs secondary variant`},null,8,[`modelValue`])])]),_:1}),u(X,{title:`Vertical tabs`,source:`<pf-tabs
  v-model:active-key="verticalTabs.active"
  vertical
  :box="verticalTabs.box"
  aria-label="Tabs in the vertical example"
>
  <pf-tab :event-key="0" title="Users">Users</pf-tab>
  <pf-tab :event-key="1" title="Containers">Containers</pf-tab>
  <pf-tab :event-key="2" title="Database">Database</pf-tab>
  <pf-tab :event-key="3" title="Disabled" disabled>Disabled</pf-tab>
  <pf-tab :event-key="4" title="ARIA Disabled" aria-disabled>ARIA Disabled</pf-tab>
  <pf-tab
    :event-key="5"
    title="ARIA Disabled (Tooltip)"
    aria-disabled
    tooltip="Aria-disabled tabs are like disabled tabs, but focusable. Allows for tooltip support."
  >
    ARIA Disabled (Tooltip)
  </pf-tab>
</pf-tabs>
<div style="margin-top: 20px">
  <pf-checkbox id="toggle-box-vertical" v-model="verticalTabs.box" label="box" />
</div>`},{intro:t(()=>[...a[54]||=[o(`div`,{class:`markdown pf-v6-c-content`},[o(`p`,null,`Vertical tabs are placed on the left-hand side of a page or container and may appear in both 'default' and 'boxed' tab variations.`),o(`p`,null,[m(`To style tabs vertically, use the `),o(`code`,null,`vertical`),m(` property.`)])],-1)]]),default:t(()=>[u(J,{"active-key":w.active,"onUpdate:activeKey":a[4]||=e=>w.active=e,vertical:``,box:w.box,"aria-label":`Tabs in the vertical example`},{default:t(()=>[u(_,{"event-key":0,title:`Users`},{default:t(()=>[...a[55]||=[m(`Users`,-1)]]),_:1}),u(_,{"event-key":1,title:`Containers`},{default:t(()=>[...a[56]||=[m(`Containers`,-1)]]),_:1}),u(_,{"event-key":2,title:`Database`},{default:t(()=>[...a[57]||=[m(`Database`,-1)]]),_:1}),u(_,{"event-key":3,title:`Disabled`,disabled:``},{default:t(()=>[...a[58]||=[m(`Disabled`,-1)]]),_:1}),u(_,{"event-key":4,title:`ARIA Disabled`,"aria-disabled":``},{default:t(()=>[...a[59]||=[m(`ARIA Disabled`,-1)]]),_:1}),u(_,{"event-key":5,title:`ARIA Disabled (Tooltip)`,"aria-disabled":``,tooltip:`Aria-disabled tabs are like disabled tabs, but focusable. Allows for tooltip support.`},{default:t(()=>[...a[60]||=[m(` ARIA Disabled (Tooltip) `,-1)]]),_:1})]),_:1},8,[`active-key`,`box`]),o(`div`,se,[u(Y,{id:`toggle-box-vertical`,modelValue:w.box,"onUpdate:modelValue":a[5]||=e=>w.box=e,label:`box`},null,8,[`modelValue`])])]),_:1}),u(X,{title:`Vertical expandable tabs`,source:`<pf-tabs
  v-model:active-key="expandableTabs.active"
  v-model:expanded="expandableTabs.expanded"
  vertical
  expandable="expandable"
  expandable-md="nonExpandable"
  expandable-lg="expandable"
  toggle-text="Containers"
  aria-label="Tabs in the vertical expandable example"
>
  <pf-tab :event-key="0" title="Users">Users</pf-tab>
  <pf-tab :event-key="1" title="Containers">Containers</pf-tab>
  <pf-tab :event-key="2" title="Database">Database</pf-tab>
  <pf-tab :event-key="3" title="Server">Server</pf-tab>
  <pf-tab :event-key="4" title="System">System</pf-tab>
  <pf-tab :event-key="6" title="Network">Network</pf-tab>
</pf-tabs>`},{intro:t(()=>[...a[61]||=[o(`div`,{class:`markdown pf-v6-c-content`},[o(`p`,null,`Vertical tabs can be made expandable to save space. Users can select the caret to expand a menu and switch between tabs.`),o(`p`,null,[m(`Expandable tabs can be enabled at different breakpoints. The following example sets `),o(`code`,null,`expandable="expandable"`),m(`, `),o(`code`,null,`expandable-md="nonExpandable"`),m(` and `),o(`code`,null,`expandable-lg="expandable"`),m(` on the `),o(`code`,null,`pf-tabs`),m(` component.`)]),o(`p`,null,[m(`To flag vertical tabs when they're expanded, bind `),o(`code`,null,`v-model:expanded`),m(`.`)])],-1)]]),default:t(()=>[u(J,{"active-key":T.active,"onUpdate:activeKey":a[6]||=e=>T.active=e,expanded:T.expanded,"onUpdate:expanded":a[7]||=e=>T.expanded=e,vertical:``,expandable:`expandable`,"expandable-md":`nonExpandable`,"expandable-lg":`expandable`,"toggle-text":`Containers`,"aria-label":`Tabs in the vertical expandable example`},{default:t(()=>[u(_,{"event-key":0,title:`Users`},{default:t(()=>[...a[62]||=[m(`Users`,-1)]]),_:1}),u(_,{"event-key":1,title:`Containers`},{default:t(()=>[...a[63]||=[m(`Containers`,-1)]]),_:1}),u(_,{"event-key":2,title:`Database`},{default:t(()=>[...a[64]||=[m(`Database`,-1)]]),_:1}),u(_,{"event-key":3,title:`Server`},{default:t(()=>[...a[65]||=[m(`Server`,-1)]]),_:1}),u(_,{"event-key":4,title:`System`},{default:t(()=>[...a[66]||=[m(`System`,-1)]]),_:1}),u(_,{"event-key":6,title:`Network`},{default:t(()=>[...a[67]||=[m(`Network`,-1)]]),_:1})]),_:1},8,[`active-key`,`expanded`])]),_:1}),u(X,{title:`Vertical expandable uncontrolled`,source:`<pf-tabs
  v-model:active-key="expandableUncontrolled"
  vertical
  expandable="expandable"
  expandable-md="nonExpandable"
  expandable-lg="expandable"
  :default-expanded="false"
  toggle-text="Containers"
  aria-label="Tabs in the vertical expandable uncontrolled example"
>
  <pf-tab :event-key="0" title="Users">Users</pf-tab>
  <pf-tab :event-key="1" title="Containers">Containers</pf-tab>
  <pf-tab :event-key="2" title="Database">Database</pf-tab>
  <pf-tab :event-key="3" title="Server">Server</pf-tab>
  <pf-tab :event-key="4" title="System">System</pf-tab>
  <pf-tab :event-key="6" title="Network">Network</pf-tab>
</pf-tabs>`},{intro:t(()=>[...a[68]||=[o(`div`,{class:`markdown pf-v6-c-content`},[o(`p`,null,[m(`To flag the default expanded state for uncontrolled tabs, use the `),o(`code`,null,`default-expanded`),m(` property.`)])],-1)]]),default:t(()=>[u(J,{"active-key":E.value,"onUpdate:activeKey":a[8]||=e=>E.value=e,vertical:``,expandable:`expandable`,"expandable-md":`nonExpandable`,"expandable-lg":`expandable`,"default-expanded":!1,"toggle-text":`Containers`,"aria-label":`Tabs in the vertical expandable uncontrolled example`},{default:t(()=>[u(_,{"event-key":0,title:`Users`},{default:t(()=>[...a[69]||=[m(`Users`,-1)]]),_:1}),u(_,{"event-key":1,title:`Containers`},{default:t(()=>[...a[70]||=[m(`Containers`,-1)]]),_:1}),u(_,{"event-key":2,title:`Database`},{default:t(()=>[...a[71]||=[m(`Database`,-1)]]),_:1}),u(_,{"event-key":3,title:`Server`},{default:t(()=>[...a[72]||=[m(`Server`,-1)]]),_:1}),u(_,{"event-key":4,title:`System`},{default:t(()=>[...a[73]||=[m(`System`,-1)]]),_:1}),u(_,{"event-key":6,title:`Network`},{default:t(()=>[...a[74]||=[m(`Network`,-1)]]),_:1})]),_:1},8,[`active-key`])]),_:1}),u(X,{title:`Default overflow tabs`,source:`<pf-tabs
  v-model:active-key="defaultOverflow.active"
  :box="defaultOverflow.box"
  aria-label="Tabs in the default overflow example"
>
  <pf-tab v-for="tab in manyTabs" :key="tab.key" :event-key="tab.key" :title="tab.title">
    {{ tab.content }}
  </pf-tab>
</pf-tabs>
<div style="margin-top: 20px">
  <pf-checkbox id="toggle-box-overflow" v-model="defaultOverflow.box" label="box" />
</div>`},{intro:t(()=>[...a[75]||=[o(`div`,{class:`markdown pf-v6-c-content`},[o(`p`,null,`By default, overflow is applied when there are too many tabs for the width of the container they are in. This overflow can be navigated by side-scrolling within the tabs section, or by selecting the left and right arrows.`)],-1)]]),default:t(()=>[u(J,{"active-key":D.active,"onUpdate:activeKey":a[9]||=e=>D.active=e,box:D.box,"aria-label":`Tabs in the default overflow example`},{default:t(()=>[(d(),s(h,null,r(l,e=>u(_,{key:e.key,"event-key":e.key,title:e.title},{default:t(()=>[m(i(e.content),1)]),_:2},1032,[`event-key`,`title`])),64))]),_:1},8,[`active-key`,`box`]),o(`div`,ce,[u(Y,{id:`toggle-box-overflow`,modelValue:D.box,"onUpdate:modelValue":a[10]||=e=>D.box=e,label:`box`},null,8,[`modelValue`])])]),_:1}),u(X,{title:`Horizontal overflow tabs`,source:`<pf-tabs
  v-model:active-key="horizontalOverflow.active"
  overflow-horizontal
  :overflow-show-tab-count="horizontalOverflow.showTabCount"
  aria-label="Tabs in the horizontal overflow example"
>
  <pf-tab v-for="tab in manyTabs" :key="tab.key" :event-key="tab.key" :title="tab.title">
    {{ tab.content }}
  </pf-tab>
</pf-tabs>
<div style="margin-top: 20px">
  <pf-checkbox
    id="toggle-show-count-overflow"
    v-model="horizontalOverflow.showTabCount"
    label="Show overflowing tab count" />
</div>`},{intro:t(()=>[...a[76]||=[o(`div`,{class:`markdown pf-v6-c-content`},[o(`p`,null,`Horizontal overflow can be used instead of the default application. To navigate horizontal overflow tabs users can select the last tab, labeled “more”, to see the overflowed content.`),o(`p`,null,[m(`To enable horizontal overflow, use the `),o(`code`,null,`overflow-horizontal`),m(` property.`)]),o(`p`,null,`In the following example, select the 'Show overflowing tab count' checkbox to add a count of overflow items to the final “more” tab.`)],-1)]]),default:t(()=>[u(J,{"active-key":O.active,"onUpdate:activeKey":a[11]||=e=>O.active=e,"overflow-horizontal":``,"overflow-show-tab-count":O.showTabCount,"aria-label":`Tabs in the horizontal overflow example`},{default:t(()=>[(d(),s(h,null,r(l,e=>u(_,{key:e.key,"event-key":e.key,title:e.title},{default:t(()=>[m(i(e.content),1)]),_:2},1032,[`event-key`,`title`])),64))]),_:1},8,[`active-key`,`overflow-show-tab-count`]),o(`div`,le,[u(Y,{id:`toggle-show-count-overflow`,modelValue:O.showTabCount,"onUpdate:modelValue":a[12]||=e=>O.showTabCount=e,label:`Show overflowing tab count`},null,8,[`modelValue`])])]),_:1}),u(X,{title:`With tooltip react ref`,source:`<pf-tabs
  v-model:active-key="tooltipTabs.active"
  :box="tooltipTabs.box"
  aria-label="Tabs in the example with a tooltip ref"
>
  <pf-tab :event-key="0" title="Users">Users</pf-tab>
  <pf-tab :event-key="1" title="Containers">Containers</pf-tab>
  <pf-tab :event-key="2" title="Database">Database</pf-tab>
  <pf-tab :event-key="3" title="Disabled" disabled>Disabled</pf-tab>
  <pf-tab :event-key="4" title="ARIA Disabled" aria-disabled>ARIA Disabled</pf-tab>
  <pf-tab
    :event-key="5"
    title="ARIA Disabled (Tooltip)"
    aria-disabled
    :tooltip-attrs="{ id: 'tooltip-ref1' }"
    aria-describedby="tooltip-ref1"
  >
    <template #tooltip>
      Aria-disabled tabs are like disabled tabs, but focusable. Allows for tooltip support.
    </template>
    ARIA Disabled (Tooltip)
  </pf-tab>
</pf-tabs>
<div style="margin-top: 20px">
  <pf-checkbox id="toggle-box-tooltip-ref" v-model="tooltipTabs.box" label="box" />
</div>`},{intro:t(()=>[...a[77]||=[o(`div`,{class:`markdown pf-v6-c-content`},[o(`p`,null,[m(`A tooltip on a tab is set with the `),o(`code`,null,`tooltip`),m(` property, or the `),o(`code`,null,`tooltip`),m(` slot for rich content, while `),o(`code`,null,`tooltip-attrs`),m(` customizes the tooltip, for example with its `),o(`code`,null,`id`),m(`. Pass that `),o(`code`,null,`id`),m(` into the tab's `),o(`code`,null,`aria-describedby`),m(` to ensure the tooltip will be announced by the JAWS and NVDA screen readers.`)])],-1)]]),default:t(()=>[u(J,{"active-key":k.active,"onUpdate:activeKey":a[13]||=e=>k.active=e,box:k.box,"aria-label":`Tabs in the example with a tooltip ref`},{default:t(()=>[u(_,{"event-key":0,title:`Users`},{default:t(()=>[...a[78]||=[m(`Users`,-1)]]),_:1}),u(_,{"event-key":1,title:`Containers`},{default:t(()=>[...a[79]||=[m(`Containers`,-1)]]),_:1}),u(_,{"event-key":2,title:`Database`},{default:t(()=>[...a[80]||=[m(`Database`,-1)]]),_:1}),u(_,{"event-key":3,title:`Disabled`,disabled:``},{default:t(()=>[...a[81]||=[m(`Disabled`,-1)]]),_:1}),u(_,{"event-key":4,title:`ARIA Disabled`,"aria-disabled":``},{default:t(()=>[...a[82]||=[m(`ARIA Disabled`,-1)]]),_:1}),u(_,{"event-key":5,title:`ARIA Disabled (Tooltip)`,"aria-disabled":``,"tooltip-attrs":{id:`tooltip-ref1`},"aria-describedby":`tooltip-ref1`},{tooltip:t(()=>[...a[83]||=[m(` Aria-disabled tabs are like disabled tabs, but focusable. Allows for tooltip support. `,-1)]]),default:t(()=>[a[84]||=m(` ARIA Disabled (Tooltip) `,-1)]),_:1})]),_:1},8,[`active-key`,`box`]),o(`div`,ue,[u(Y,{id:`toggle-box-tooltip-ref`,modelValue:k.box,"onUpdate:modelValue":a[14]||=e=>k.box=e,label:`box`},null,8,[`modelValue`])])]),_:1}),u(X,{title:`Uncontrolled tabs`,source:`<pf-tabs :default-active-key="0" aria-label="Tabs in the uncontrolled example">
  <pf-tab :event-key="0" title="Users">Users</pf-tab>
  <pf-tab :event-key="1" title="Containers">Containers</pf-tab>
  <pf-tab :event-key="2" title="Database">Database</pf-tab>
  <pf-tab :event-key="3" title="Disabled" disabled>Disabled</pf-tab>
  <pf-tab :event-key="4" title="ARIA Disabled" aria-disabled>ARIA Disabled</pf-tab>
  <pf-tab
    :event-key="5"
    title="ARIA Disabled (Tooltip)"
    aria-disabled
    tooltip="Aria-disabled tabs are like disabled tabs, but focusable. Allows for tooltip support."
  >
    ARIA Disabled (Tooltip)
  </pf-tab>
</pf-tabs>`},{intro:t(()=>[...a[85]||=[o(`div`,{class:`markdown pf-v6-c-content`},[o(`p`,null,[m(`To allow the `),o(`code`,null,`pf-tabs`),m(` component to manage setting the active tab and displaying correct content itself, use uncontrolled tabs, as shown in the following example.`)])],-1)]]),default:t(()=>[u(J,{"default-active-key":0,"aria-label":`Tabs in the uncontrolled example`},{default:t(()=>[u(_,{"event-key":0,title:`Users`},{default:t(()=>[...a[86]||=[m(`Users`,-1)]]),_:1}),u(_,{"event-key":1,title:`Containers`},{default:t(()=>[...a[87]||=[m(`Containers`,-1)]]),_:1}),u(_,{"event-key":2,title:`Database`},{default:t(()=>[...a[88]||=[m(`Database`,-1)]]),_:1}),u(_,{"event-key":3,title:`Disabled`,disabled:``},{default:t(()=>[...a[89]||=[m(`Disabled`,-1)]]),_:1}),u(_,{"event-key":4,title:`ARIA Disabled`,"aria-disabled":``},{default:t(()=>[...a[90]||=[m(`ARIA Disabled`,-1)]]),_:1}),u(_,{"event-key":5,title:`ARIA Disabled (Tooltip)`,"aria-disabled":``,tooltip:`Aria-disabled tabs are like disabled tabs, but focusable. Allows for tooltip support.`},{default:t(()=>[...a[91]||=[m(` ARIA Disabled (Tooltip) `,-1)]]),_:1})]),_:1})]),_:1}),u(X,{title:`With adjusted inset`,source:`<pf-tabs
  v-model:active-key="insetTabs.active"
  inset="none"
  inset-md="sm"
  inset-xl="lg"
  inset-2xl="2xl"
  :box="insetTabs.box"
  aria-label="Tabs in the inset example"
>
  <pf-tab :event-key="0" title="Users">Users</pf-tab>
  <pf-tab :event-key="1" title="Containers">Containers</pf-tab>
  <pf-tab :event-key="2" title="Database">Database</pf-tab>
  <pf-tab :event-key="3" title="Server">Server</pf-tab>
  <pf-tab :event-key="4" title="System">System</pf-tab>
  <pf-tab :event-key="6" title="Network">Network</pf-tab>
</pf-tabs>
<div style="margin-top: 20px">
  <pf-checkbox id="toggle-box-inset" v-model="insetTabs.box" label="box" />
</div>`},{intro:t(()=>[...a[92]||=[o(`div`,{class:`markdown pf-v6-c-content`},[o(`p`,null,[m(`To adjust the inset of tabs and visually separate them more, use the `),o(`code`,null,`inset`),m(` properties. You can set the inset to "none", "xs", "sm", "md", "lg", "xl", "2xl" or "3xl" with `),o(`code`,null,`inset`),m(`, `),o(`code`,null,`inset-sm`),m(`, `),o(`code`,null,`inset-md`),m(`, `),o(`code`,null,`inset-lg`),m(`, `),o(`code`,null,`inset-xl`),m(` and `),o(`code`,null,`inset-2xl`),m(`.`)])],-1)]]),default:t(()=>[u(J,{"active-key":A.active,"onUpdate:activeKey":a[15]||=e=>A.active=e,inset:`none`,"inset-md":`sm`,"inset-xl":`lg`,"inset-2xl":`2xl`,box:A.box,"aria-label":`Tabs in the inset example`},{default:t(()=>[u(_,{"event-key":0,title:`Users`},{default:t(()=>[...a[93]||=[m(`Users`,-1)]]),_:1}),u(_,{"event-key":1,title:`Containers`},{default:t(()=>[...a[94]||=[m(`Containers`,-1)]]),_:1}),u(_,{"event-key":2,title:`Database`},{default:t(()=>[...a[95]||=[m(`Database`,-1)]]),_:1}),u(_,{"event-key":3,title:`Server`},{default:t(()=>[...a[96]||=[m(`Server`,-1)]]),_:1}),u(_,{"event-key":4,title:`System`},{default:t(()=>[...a[97]||=[m(`System`,-1)]]),_:1}),u(_,{"event-key":6,title:`Network`},{default:t(()=>[...a[98]||=[m(`Network`,-1)]]),_:1})]),_:1},8,[`active-key`,`box`]),o(`div`,de,[u(Y,{id:`toggle-box-inset`,modelValue:A.box,"onUpdate:modelValue":a[16]||=e=>A.box=e,label:`box`},null,8,[`modelValue`])])]),_:1}),u(X,{title:`With page insets`,source:`<pf-tabs
  v-model:active-key="pageInsetTabs.active"
  page-insets
  :box="pageInsetTabs.box"
  aria-label="Tabs in the page insets example"
>
  <pf-tab :event-key="0" title="Users">Users</pf-tab>
  <pf-tab :event-key="1" title="Containers">Containers</pf-tab>
  <pf-tab :event-key="2" title="Database">Database</pf-tab>
  <pf-tab :event-key="3" title="Server">Server</pf-tab>
  <pf-tab :event-key="4" title="System">System</pf-tab>
  <pf-tab :event-key="6" title="Network">Network</pf-tab>
</pf-tabs>
<div style="margin-top: 20px">
  <pf-checkbox id="toggle-box-page-inset" v-model="pageInsetTabs.box" label="box" />
</div>`},{intro:t(()=>[...a[99]||=[o(`div`,{class:`markdown pf-v6-c-content`},[o(`p`,null,[m(`To adjust the left padding of tabs, use the `),o(`code`,null,`page-insets`),m(` property. This property aligns the tabs padding with the default padding of the page section, which makes it easier to align tabs with page section content.`)])],-1)]]),default:t(()=>[u(J,{"active-key":j.active,"onUpdate:activeKey":a[17]||=e=>j.active=e,"page-insets":``,box:j.box,"aria-label":`Tabs in the page insets example`},{default:t(()=>[u(_,{"event-key":0,title:`Users`},{default:t(()=>[...a[100]||=[m(`Users`,-1)]]),_:1}),u(_,{"event-key":1,title:`Containers`},{default:t(()=>[...a[101]||=[m(`Containers`,-1)]]),_:1}),u(_,{"event-key":2,title:`Database`},{default:t(()=>[...a[102]||=[m(`Database`,-1)]]),_:1}),u(_,{"event-key":3,title:`Server`},{default:t(()=>[...a[103]||=[m(`Server`,-1)]]),_:1}),u(_,{"event-key":4,title:`System`},{default:t(()=>[...a[104]||=[m(`System`,-1)]]),_:1}),u(_,{"event-key":6,title:`Network`},{default:t(()=>[...a[105]||=[m(`Network`,-1)]]),_:1})]),_:1},8,[`active-key`,`box`]),o(`div`,fe,[u(Y,{id:`toggle-box-page-inset`,modelValue:j.box,"onUpdate:modelValue":a[18]||=e=>j.box=e,label:`box`},null,8,[`modelValue`])])]),_:1}),u(X,{title:`With icons and text`,source:`<pf-tabs v-model:active-key="iconTabs" aria-label="Tabs in the icons and text example">
  <pf-tab :event-key="0" title="Users">
    <template #icon><users-icon /></template>
    Users
  </pf-tab>
  <pf-tab :event-key="1" title="Containers">
    <template #icon><box-icon /></template>
    Containers
  </pf-tab>
  <pf-tab :event-key="2" title="Database">
    <template #icon><database-icon /></template>
    Database
  </pf-tab>
  <pf-tab :event-key="3" title="Server">
    <template #icon><server-icon /></template>
    Server
  </pf-tab>
  <pf-tab :event-key="4" title="System">
    <template #icon><laptop-icon /></template>
    System
  </pf-tab>
  <pf-tab :event-key="6" title="Network">
    <template #icon><diagram-project-icon /></template>
    Network
  </pf-tab>
</pf-tabs>`},{intro:t(()=>[...a[106]||=[o(`div`,{class:`markdown pf-v6-c-content`},[o(`p`,null,`You can render different content in the title of a tab to add icons and text.`),o(`p`,null,[m(`To add an icon to a tab, use the `),o(`code`,null,`icon`),m(` slot, or a `),o(`code`,null,`pf-tab-title-icon`),m(` in the `),o(`code`,null,`title`),m(` slot. To use an icon alongside styled text, keep the text in the `),o(`code`,null,`pf-tab-title-text`),m(` component.`)])],-1)]]),default:t(()=>[u(J,{"active-key":M.value,"onUpdate:activeKey":a[19]||=e=>M.value=e,"aria-label":`Tabs in the icons and text example`},{default:t(()=>[u(_,{"event-key":0,title:`Users`},{icon:t(()=>[u(c(te))]),default:t(()=>[a[107]||=m(` Users `,-1)]),_:1}),u(_,{"event-key":1,title:`Containers`},{icon:t(()=>[u(c(x))]),default:t(()=>[a[108]||=m(` Containers `,-1)]),_:1}),u(_,{"event-key":2,title:`Database`},{icon:t(()=>[u(c(S))]),default:t(()=>[a[109]||=m(` Database `,-1)]),_:1}),u(_,{"event-key":3,title:`Server`},{icon:t(()=>[u(c(ne))]),default:t(()=>[a[110]||=m(` Server `,-1)]),_:1}),u(_,{"event-key":4,title:`System`},{icon:t(()=>[u(c(re))]),default:t(()=>[a[111]||=m(` System `,-1)]),_:1}),u(_,{"event-key":6,title:`Network`},{icon:t(()=>[u(c(ie))]),default:t(()=>[a[112]||=m(` Network `,-1)]),_:1})]),_:1},8,[`active-key`])]),_:1}),u(X,{title:`Subtabs`,source:`<pf-tabs
  v-model:active-key="subtabs.primary"
  :box="subtabs.box"
  aria-label="Tabs in the tabs with subtabs example"
  tab-list-aria-label="Primary"
>
  <pf-tab :event-key="0" title="Users">
    <pf-tabs
      v-model:active-key="subtabs.secondary"
      subtab
      aria-label="subtabs for users"
      tab-list-aria-label="Users"
    >
      <pf-tab v-for="n in 8" :key="n" :event-key="19 + n" :title="\`Subtab item \${n}\`">
        Subtab item {{ n }} section
      </pf-tab>
    </pf-tabs>
  </pf-tab>
  <pf-tab v-for="tab in manyTabs.slice(1)" :key="tab.key" :event-key="tab.key" :title="tab.title">
    {{ tab.content }}
  </pf-tab>
</pf-tabs>
<div style="margin-top: 20px">
  <pf-checkbox id="toggle-box-subtabs" v-model="subtabs.box" label="box" />
</div>`},{intro:t(()=>[...a[113]||=[o(`div`,{class:`markdown pf-v6-c-content`},[o(`p`,null,`Use subtabs within other components, like modals. Subtabs have less visually prominent styling.`),o(`p`,null,[m(`To apply subtab styling to tabs, use the `),o(`code`,null,`subtab`),m(` property.`)]),o(`p`,null,[m(`For accessibility, give the primary tablist an accessible name (for example, `),o(`code`,null,`tab-list-aria-label="Primary"`),m(`) and give any subtab tablist an accessible name that matches the currently selected primary tab (for example, `),o(`code`,null,`tab-list-aria-label="Users"`),m(`).`)])],-1)]]),default:t(()=>[u(J,{"active-key":N.primary,"onUpdate:activeKey":a[21]||=e=>N.primary=e,box:N.box,"aria-label":`Tabs in the tabs with subtabs example`,"tab-list-aria-label":`Primary`},{default:t(()=>[u(_,{"event-key":0,title:`Users`},{default:t(()=>[u(J,{"active-key":N.secondary,"onUpdate:activeKey":a[20]||=e=>N.secondary=e,subtab:``,"aria-label":`subtabs for users`,"tab-list-aria-label":`Users`},{default:t(()=>[(d(),s(h,null,r(8,e=>u(_,{key:e,"event-key":19+e,title:`Subtab item ${e}`},{default:t(()=>[m(` Subtab item `+i(e)+` section `,1)]),_:2},1032,[`event-key`,`title`])),64))]),_:1},8,[`active-key`])]),_:1}),(d(!0),s(h,null,r(l.slice(1),e=>(d(),p(_,{key:e.key,"event-key":e.key,title:e.title},{default:t(()=>[m(i(e.content),1)]),_:2},1032,[`event-key`,`title`]))),128))]),_:1},8,[`active-key`,`box`]),o(`div`,pe,[u(Y,{id:`toggle-box-subtabs`,modelValue:N.box,"onUpdate:modelValue":a[22]||=e=>N.box=e,label:`box`},null,8,[`modelValue`])])]),_:1}),u(X,{title:`Filled tabs with icons`,source:`<pf-tabs
  v-model:active-key="filledTabs.active"
  filled
  :box="filledTabs.box"
  aria-label="Tabs in the filled with icons example"
>
  <pf-tab :event-key="0" title="Users">
    <template #icon><users-icon /></template>
    Users
  </pf-tab>
  <pf-tab :event-key="1" title="Containers">
    <template #icon><box-icon /></template>
    Containers
  </pf-tab>
  <pf-tab :event-key="2" title="Database">
    <template #icon><database-icon /></template>
    Database
  </pf-tab>
</pf-tabs>
<div style="margin-top: 20px">
  <pf-checkbox id="toggle-box-filled-icons" v-model="filledTabs.box" label="box" />
</div>`},{intro:t(()=>[...a[114]||=[o(`div`,{class:`markdown pf-v6-c-content`},[o(`p`,null,[m(`To allow tabs to fill the available width of the page section, use the `),o(`code`,null,`filled`),m(` property.`)])],-1)]]),default:t(()=>[u(J,{"active-key":P.active,"onUpdate:activeKey":a[23]||=e=>P.active=e,filled:``,box:P.box,"aria-label":`Tabs in the filled with icons example`},{default:t(()=>[u(_,{"event-key":0,title:`Users`},{icon:t(()=>[u(c(te))]),default:t(()=>[a[115]||=m(` Users `,-1)]),_:1}),u(_,{"event-key":1,title:`Containers`},{icon:t(()=>[u(c(x))]),default:t(()=>[a[116]||=m(` Containers `,-1)]),_:1}),u(_,{"event-key":2,title:`Database`},{icon:t(()=>[u(c(S))]),default:t(()=>[a[117]||=m(` Database `,-1)]),_:1})]),_:1},8,[`active-key`,`box`]),o(`div`,me,[u(Y,{id:`toggle-box-filled-icons`,modelValue:P.box,"onUpdate:modelValue":a[24]||=e=>P.box=e,label:`box`},null,8,[`modelValue`])])]),_:1}),u(X,{title:`Tabs linked to nav elements`,source:`<pf-tabs v-model:active-key="navTabs" component="nav" aria-label="Tabs in the nav element example">
  <pf-tab :event-key="0" title="Users" href="#users">Users</pf-tab>
  <pf-tab :event-key="1" title="Containers" href="#containers">Containers</pf-tab>
  <pf-tab :event-key="2" title="Database" href="#database">Database</pf-tab>
  <pf-tab :event-key="3" title="Disabled" disabled href="#disabled">Disabled</pf-tab>
  <pf-tab :event-key="4" title="ARIA Disabled" aria-disabled href="#aria-disabled">ARIA Disabled</pf-tab>
  <pf-tab :event-key="6" title="Network" href="#network">Network</pf-tab>
</pf-tabs>`},{intro:t(()=>[...a[118]||=[o(`div`,{class:`markdown pf-v6-c-content`},[o(`p`,null,[m(`To let tabs link to nav elements, set the `),o(`code`,null,`component`),m(` property to "nav".`)]),o(`p`,null,[m(`Nav tabs should use the `),o(`code`,null,`href`),m(` property to link the tab to the URL of another page or page section. A tab with an `),o(`code`,null,`href`),m(` will render as an `),o(`code`,null,`<a>`),m(` instead of a `),o(`code`,null,`<button>`),m(`.`)])],-1)]]),default:t(()=>[u(J,{"active-key":F.value,"onUpdate:activeKey":a[25]||=e=>F.value=e,component:`nav`,"aria-label":`Tabs in the nav element example`},{default:t(()=>[u(_,{"event-key":0,title:`Users`,href:`#users`},{default:t(()=>[...a[119]||=[m(`Users`,-1)]]),_:1}),u(_,{"event-key":1,title:`Containers`,href:`#containers`},{default:t(()=>[...a[120]||=[m(`Containers`,-1)]]),_:1}),u(_,{"event-key":2,title:`Database`,href:`#database`},{default:t(()=>[...a[121]||=[m(`Database`,-1)]]),_:1}),u(_,{"event-key":3,title:`Disabled`,disabled:``,href:`#disabled`},{default:t(()=>[...a[122]||=[m(`Disabled`,-1)]]),_:1}),u(_,{"event-key":4,title:`ARIA Disabled`,"aria-disabled":``,href:`#aria-disabled`},{default:t(()=>[...a[123]||=[m(`ARIA Disabled`,-1)]]),_:1}),u(_,{"event-key":6,title:`Network`,href:`#network`},{default:t(()=>[...a[124]||=[m(`Network`,-1)]]),_:1})]),_:1},8,[`active-key`])]),_:1}),u(X,{title:`Subtabs linked to nav elements`,source:`<pf-tabs
  v-model:active-key="navSubtabs.primary"
  component="nav"
  aria-label="Tabs in the sub tabs with nav element example"
  tab-list-aria-label="Primary"
>
  <pf-tab :event-key="0" title="Users" href="#">
    <pf-tabs
      v-model:active-key="navSubtabs.secondary"
      subtab
      component="nav"
      aria-label="Local secondary"
      tab-list-aria-label="Users"
    >
      <pf-tab :event-key="20" title="Item 1" href="#">Item 1 item section</pf-tab>
      <pf-tab :event-key="21" title="Item 2" href="#">Item 2 section</pf-tab>
      <pf-tab :event-key="22" title="Item 3" href="#">Item 3 section</pf-tab>
      <pf-tab :event-key="3" title="Disabled" disabled href="#">Disabled</pf-tab>
      <pf-tab :event-key="4" title="ARIA Disabled" aria-disabled href="#">ARIA Disabled</pf-tab>
      <pf-tab :event-key="25" title="Item 6" href="#">Item 6 section</pf-tab>
    </pf-tabs>
  </pf-tab>
  <pf-tab :event-key="1" title="Containers" href="#">Containers</pf-tab>
  <pf-tab :event-key="2" title="Database" href="#">Database</pf-tab>
  <pf-tab :event-key="3" title="Server" href="#">Server</pf-tab>
  <pf-tab :event-key="4" title="System" href="#">System</pf-tab>
  <pf-tab :event-key="6" title="Network" href="#">Network</pf-tab>
</pf-tabs>`},{intro:t(()=>[...a[125]||=[o(`div`,{class:`markdown pf-v6-c-content`},[o(`p`,null,`Subtabs can also link to nav elements.`)],-1)]]),default:t(()=>[u(J,{"active-key":I.primary,"onUpdate:activeKey":a[27]||=e=>I.primary=e,component:`nav`,"aria-label":`Tabs in the sub tabs with nav element example`,"tab-list-aria-label":`Primary`},{default:t(()=>[u(_,{"event-key":0,title:`Users`,href:`#`},{default:t(()=>[u(J,{"active-key":I.secondary,"onUpdate:activeKey":a[26]||=e=>I.secondary=e,subtab:``,component:`nav`,"aria-label":`Local secondary`,"tab-list-aria-label":`Users`},{default:t(()=>[u(_,{"event-key":20,title:`Item 1`,href:`#`},{default:t(()=>[...a[126]||=[m(`Item 1 item section`,-1)]]),_:1}),u(_,{"event-key":21,title:`Item 2`,href:`#`},{default:t(()=>[...a[127]||=[m(`Item 2 section`,-1)]]),_:1}),u(_,{"event-key":22,title:`Item 3`,href:`#`},{default:t(()=>[...a[128]||=[m(`Item 3 section`,-1)]]),_:1}),u(_,{"event-key":3,title:`Disabled`,disabled:``,href:`#`},{default:t(()=>[...a[129]||=[m(`Disabled`,-1)]]),_:1}),u(_,{"event-key":4,title:`ARIA Disabled`,"aria-disabled":``,href:`#`},{default:t(()=>[...a[130]||=[m(`ARIA Disabled`,-1)]]),_:1}),u(_,{"event-key":25,title:`Item 6`,href:`#`},{default:t(()=>[...a[131]||=[m(`Item 6 section`,-1)]]),_:1})]),_:1},8,[`active-key`])]),_:1}),u(_,{"event-key":1,title:`Containers`,href:`#`},{default:t(()=>[...a[132]||=[m(`Containers`,-1)]]),_:1}),u(_,{"event-key":2,title:`Database`,href:`#`},{default:t(()=>[...a[133]||=[m(`Database`,-1)]]),_:1}),u(_,{"event-key":3,title:`Server`,href:`#`},{default:t(()=>[...a[134]||=[m(`Server`,-1)]]),_:1}),u(_,{"event-key":4,title:`System`,href:`#`},{default:t(()=>[...a[135]||=[m(`System`,-1)]]),_:1}),u(_,{"event-key":6,title:`Network`,href:`#`},{default:t(()=>[...a[136]||=[m(`Network`,-1)]]),_:1})]),_:1},8,[`active-key`])]),_:1}),u(X,{title:`Tabs used for site navigation`,source:`<pf-tabs v-model:active-key="siteNavTabs" nav aria-label="Site navigation with nav styling example">
  <pf-tab :event-key="0" title="Users" href="#users">Users</pf-tab>
  <pf-tab :event-key="1" title="Containers" href="#containers">Containers</pf-tab>
  <pf-tab :event-key="2" title="Database" href="#database">Database</pf-tab>
  <pf-tab :event-key="3" title="Disabled" disabled href="#disabled">Disabled</pf-tab>
  <pf-tab :event-key="4" title="ARIA Disabled" aria-disabled href="#aria-disabled">ARIA Disabled</pf-tab>
  <pf-tab :event-key="6" title="Network" href="#network">Network</pf-tab>
</pf-tabs>`},{intro:t(()=>[...a[137]||=[o(`div`,{class:`markdown pf-v6-c-content`},[o(`p`,null,[m(`Site navigation tabs use the `),o(`code`,null,`nav`),m(` property, which renders them in a nav element with the nav styling.`)])],-1)]]),default:t(()=>[u(J,{"active-key":L.value,"onUpdate:activeKey":a[28]||=e=>L.value=e,nav:``,"aria-label":`Site navigation with nav styling example`},{default:t(()=>[u(_,{"event-key":0,title:`Users`,href:`#users`},{default:t(()=>[...a[138]||=[m(`Users`,-1)]]),_:1}),u(_,{"event-key":1,title:`Containers`,href:`#containers`},{default:t(()=>[...a[139]||=[m(`Containers`,-1)]]),_:1}),u(_,{"event-key":2,title:`Database`,href:`#database`},{default:t(()=>[...a[140]||=[m(`Database`,-1)]]),_:1}),u(_,{"event-key":3,title:`Disabled`,disabled:``,href:`#disabled`},{default:t(()=>[...a[141]||=[m(`Disabled`,-1)]]),_:1}),u(_,{"event-key":4,title:`ARIA Disabled`,"aria-disabled":``,href:`#aria-disabled`},{default:t(()=>[...a[142]||=[m(`ARIA Disabled`,-1)]]),_:1}),u(_,{"event-key":6,title:`Network`,href:`#network`},{default:t(()=>[...a[143]||=[m(`Network`,-1)]]),_:1})]),_:1},8,[`active-key`])]),_:1}),u(X,{title:`With separate content`,source:`<pf-tabs v-model:active-key="separateTabs" aria-label="Tabs in the separate content example">
  <pf-tab :event-key="0" title="Tab item 1" content-id="refTab1Section" :content-ref="separate1" />
  <pf-tab :event-key="1" title="Tab item 2" content-id="refTab2Section" :content-ref="separate2" />
  <pf-tab :event-key="2" title="Tab item 3" content-id="refTab3Section" :content-ref="separate3" />
</pf-tabs>
<div>
  <pf-tab-content
    id="refTab1Section"
    ref="separate1"
    aria-label="This is content for the first separate content tab"
  >
    Tab 1 section
  </pf-tab-content>
  <pf-tab-content
    id="refTab2Section"
    ref="separate2"
    aria-label="This is content for the second separate content tab"
  >
    Tab 2 section
  </pf-tab-content>
  <pf-tab-content
    id="refTab3Section"
    ref="separate3"
    aria-label="This is content for the third separate content tab"
  >
    Tab 3 section
  </pf-tab-content>
</div>`},{intro:t(()=>[...a[144]||=[o(`div`,{class:`markdown pf-v6-c-content`},[o(`p`,null,[m(`If a `),o(`code`,null,`pf-tab-content`),m(` component is defined outside of a `),o(`code`,null,`pf-tabs`),m(` component, use the `),o(`code`,null,`content-ref`),m(` and `),o(`code`,null,`content-id`),m(` properties. The tab hides its content while it is not active.`)])],-1)]]),default:t(()=>[u(J,{"active-key":R.value,"onUpdate:activeKey":a[29]||=e=>R.value=e,"aria-label":`Tabs in the separate content example`},{default:t(()=>[u(_,{"event-key":0,title:`Tab item 1`,"content-id":`refTab1Section`,"content-ref":z.value},null,8,[`content-ref`]),u(_,{"event-key":1,title:`Tab item 2`,"content-id":`refTab2Section`,"content-ref":B.value},null,8,[`content-ref`]),u(_,{"event-key":2,title:`Tab item 3`,"content-id":`refTab3Section`,"content-ref":V.value},null,8,[`content-ref`])]),_:1},8,[`active-key`]),o(`div`,null,[u(Z,{id:`refTab1Section`,ref_key:`separate1`,ref:z,"aria-label":`This is content for the first separate content tab`},{default:t(()=>[...a[145]||=[m(` Tab 1 section `,-1)]]),_:1},512),u(Z,{id:`refTab2Section`,ref_key:`separate2`,ref:B,"aria-label":`This is content for the second separate content tab`},{default:t(()=>[...a[146]||=[m(` Tab 2 section `,-1)]]),_:1},512),u(Z,{id:`refTab3Section`,ref_key:`separate3`,ref:V,"aria-label":`This is content for the third separate content tab`},{default:t(()=>[...a[147]||=[m(` Tab 3 section `,-1)]]),_:1},512)])]),_:1}),u(X,{title:`With tab content with body and padding`,source:`<pf-tabs v-model:active-key="bodyPaddingTabs" aria-label="Tabs in the body and padding example">
  <pf-tab :event-key="0" title="Tab item 1" content-id="tab1SectionBodyPadding" :content-ref="body1" />
  <pf-tab :event-key="1" title="Tab item 2" content-id="tab2SectionBodyPadding" :content-ref="body2" />
  <pf-tab :event-key="2" title="Tab item 3" content-id="tab3SectionBodyPadding" :content-ref="body3" />
</pf-tabs>
<div>
  <pf-tab-content id="tab1SectionBodyPadding" ref="body1">
    <pf-tab-content-body padding> Tab 1 section with body and padding </pf-tab-content-body>
  </pf-tab-content>
  <pf-tab-content id="tab2SectionBodyPadding" ref="body2">
    <pf-tab-content-body padding> Tab 2 section with body and padding </pf-tab-content-body>
  </pf-tab-content>
  <pf-tab-content id="tab3SectionBodyPadding" ref="body3">
    <pf-tab-content-body padding> Tab 3 section with body and padding </pf-tab-content-body>
  </pf-tab-content>
</div>`},{intro:t(()=>[...a[148]||=[o(`div`,{class:`markdown pf-v6-c-content`},[o(`p`,null,[m(`To add a content body to a `),o(`code`,null,`pf-tab-content`),m(` component, pass a `),o(`code`,null,`pf-tab-content-body`),m(`. To add padding to the body section, use the `),o(`code`,null,`padding`),m(` property.`)])],-1)]]),default:t(()=>[u(J,{"active-key":H.value,"onUpdate:activeKey":a[30]||=e=>H.value=e,"aria-label":`Tabs in the body and padding example`},{default:t(()=>[u(_,{"event-key":0,title:`Tab item 1`,"content-id":`tab1SectionBodyPadding`,"content-ref":U.value},null,8,[`content-ref`]),u(_,{"event-key":1,title:`Tab item 2`,"content-id":`tab2SectionBodyPadding`,"content-ref":W.value},null,8,[`content-ref`]),u(_,{"event-key":2,title:`Tab item 3`,"content-id":`tab3SectionBodyPadding`,"content-ref":he.value},null,8,[`content-ref`])]),_:1},8,[`active-key`]),o(`div`,null,[u(Z,{id:`tab1SectionBodyPadding`,ref_key:`body1`,ref:U},{default:t(()=>[u(Q,{padding:``},{default:t(()=>[...a[149]||=[m(` Tab 1 section with body and padding `,-1)]]),_:1})]),_:1},512),u(Z,{id:`tab2SectionBodyPadding`,ref_key:`body2`,ref:W},{default:t(()=>[u(Q,{padding:``},{default:t(()=>[...a[150]||=[m(` Tab 2 section with body and padding `,-1)]]),_:1})]),_:1},512),u(Z,{id:`tab3SectionBodyPadding`,ref_key:`body3`,ref:he},{default:t(()=>[u(Q,{padding:``},{default:t(()=>[...a[151]||=[m(` Tab 3 section with body and padding `,-1)]]),_:1})]),_:1},512)])]),_:1}),u(X,{title:`Children mounting on click`,source:`<pf-tabs
  v-model:active-key="mountingTabs"
  mount-on-enter
  aria-label="Tabs in the children mounting on click example"
>
  <pf-tab :event-key="0" title="Tab item 1">Tab 1 section <keep-alive-test /></pf-tab>
  <pf-tab :event-key="1" title="Tab item 2">Tab 2 section <keep-alive-test /></pf-tab>
  <pf-tab :event-key="2" title="Tab item 3">Tab 3 section <keep-alive-test /></pf-tab>
</pf-tabs>`},{intro:t(()=>[...a[152]||=[o(`div`,{class:`markdown pf-v6-c-content`},[o(`p`,null,[m(`To mount tab children (add to the DOM) when a tab is clicked, use the `),o(`code`,null,`mount-on-enter`),m(` property.`)]),o(`p`,null,`Note that this property does not create the tab children until the tab is clicked, so they are not preloaded into the DOM. The timers below start when their tab is first shown, and keep running when it is hidden.`)],-1)]]),default:t(()=>[u(J,{"active-key":ge.value,"onUpdate:activeKey":a[31]||=e=>ge.value=e,"mount-on-enter":``,"aria-label":`Tabs in the children mounting on click example`},{default:t(()=>[u(_,{"event-key":0,title:`Tab item 1`},{default:t(()=>[a[153]||=m(`Tab 1 section `,-1),u(C)]),_:1}),u(_,{"event-key":1,title:`Tab item 2`},{default:t(()=>[a[154]||=m(`Tab 2 section `,-1),u(C)]),_:1}),u(_,{"event-key":2,title:`Tab item 3`},{default:t(()=>[a[155]||=m(`Tab 3 section `,-1),u(C)]),_:1})]),_:1},8,[`active-key`])]),_:1}),u(X,{title:`Unmounting invisible children`,source:`<pf-tabs
  v-model:active-key="unmountingTabs"
  unmount-on-exit
  aria-label="Tabs in the unmounting invisible children example"
>
  <pf-tab :event-key="0" title="Tab item 1">Tab 1 section <keep-alive-test /></pf-tab>
  <pf-tab :event-key="1" title="Tab item 2">Tab 2 section <keep-alive-test /></pf-tab>
  <pf-tab :event-key="2" title="Tab item 3">Tab 3 section <keep-alive-test /></pf-tab>
</pf-tabs>`},{intro:t(()=>[...a[156]||=[o(`div`,{class:`markdown pf-v6-c-content`},[o(`p`,null,[m(`To unmount tab children (remove from the DOM) when they are no longer visible, use the `),o(`code`,null,`unmount-on-exit`),m(` property. The timers below restart every time their tab is shown.`)])],-1)]]),default:t(()=>[u(J,{"active-key":_e.value,"onUpdate:activeKey":a[32]||=e=>_e.value=e,"unmount-on-exit":``,"aria-label":`Tabs in the unmounting invisible children example`},{default:t(()=>[u(_,{"event-key":0,title:`Tab item 1`},{default:t(()=>[a[157]||=m(`Tab 1 section `,-1),u(C)]),_:1}),u(_,{"event-key":1,title:`Tab item 2`},{default:t(()=>[a[158]||=m(`Tab 2 section `,-1),u(C)]),_:1}),u(_,{"event-key":2,title:`Tab item 3`},{default:t(()=>[a[159]||=m(`Tab 3 section `,-1),u(C)]),_:1})]),_:1},8,[`active-key`])]),_:1}),u(X,{title:`Toggled tab content`,source:`<pf-button @click="tab2Hidden = !tab2Hidden">{{ tab2Hidden ? 'Show' : 'Hide' }} tab 2</pf-button>
<pf-divider style="padding-top: 1rem; padding-bottom: 1rem" />
<pf-tabs v-model:active-key="toggledTabs" aria-label="Tabs in the toggled separate content example">
  <pf-tab :event-key="0" title="Tab item 1" content-id="tab1SectionSeparateContent" :content-ref="toggled1" />
  <pf-tab
    v-if="!tab2Hidden"
    :event-key="1"
    title="Tab item 2"
    content-id="tab2SectionSeparateContent"
    :content-ref="toggled2" />
  <pf-tab :event-key="2" title="Tab item 3" content-id="tab3SectionSeparateContent" :content-ref="toggled3" />
</pf-tabs>
<div>
  <pf-tab-content
    id="tab1SectionSeparateContent"
    ref="toggled1"
    aria-label="This is content for the first toggled separate content tab"
  >
    Tab 1 section
  </pf-tab-content>
  <pf-tab-content
    v-if="!tab2Hidden"
    id="tab2SectionSeparateContent"
    ref="toggled2"
    aria-label="This is content for the second toggled separate content tab"
  >
    Tab 2 section
  </pf-tab-content>
  <pf-tab-content
    id="tab3SectionSeparateContent"
    ref="toggled3"
    aria-label="This is content for the third toggled separate content tab"
  >
    Tab 3 section
  </pf-tab-content>
</div>`},{intro:t(()=>[...a[160]||=[o(`div`,{class:`markdown pf-v6-c-content`},[o(`p`,null,`You may control tabs from outside of the tabs component. For example, select the "Hide tab 2" button below to make "Tab item 2" invisible.`),o(`p`,null,`The tab its content should only be mounted when the tab is visible.`)],-1)]]),default:t(()=>[u(Ee,{onClick:a[33]||=e=>G.value=!G.value},{default:t(()=>[m(i(G.value?`Show`:`Hide`)+` tab 2`,1)]),_:1}),u(De,{style:{"padding-top":`1rem`,"padding-bottom":`1rem`}}),u(J,{"active-key":ve.value,"onUpdate:activeKey":a[34]||=e=>ve.value=e,"aria-label":`Tabs in the toggled separate content example`},{default:t(()=>[u(_,{"event-key":0,title:`Tab item 1`,"content-id":`tab1SectionSeparateContent`,"content-ref":ye.value},null,8,[`content-ref`]),G.value?v(``,!0):(d(),p(_,{key:0,"event-key":1,title:`Tab item 2`,"content-id":`tab2SectionSeparateContent`,"content-ref":be.value},null,8,[`content-ref`])),u(_,{"event-key":2,title:`Tab item 3`,"content-id":`tab3SectionSeparateContent`,"content-ref":xe.value},null,8,[`content-ref`])]),_:1},8,[`active-key`]),o(`div`,null,[u(Z,{id:`tab1SectionSeparateContent`,ref_key:`toggled1`,ref:ye,"aria-label":`This is content for the first toggled separate content tab`},{default:t(()=>[...a[161]||=[m(` Tab 1 section `,-1)]]),_:1},512),G.value?v(``,!0):(d(),p(Z,{key:0,id:`tab2SectionSeparateContent`,ref_key:`toggled2`,ref:be,"aria-label":`This is content for the second toggled separate content tab`},{default:t(()=>[...a[162]||=[m(` Tab 2 section `,-1)]]),_:1},512)),u(Z,{id:`tab3SectionSeparateContent`,ref_key:`toggled3`,ref:xe,"aria-label":`This is content for the third toggled separate content tab`},{default:t(()=>[...a[163]||=[m(` Tab 3 section `,-1)]]),_:1},512)])]),_:1}),u(X,{title:`Dynamic tabs`,source:`<pf-tabs
  v-model:active-key="dynamic.active"
  aria-label="Tabs in the addable/closeable example"
  add-button-aria-label="Add new tab"
  @close="(_event, key) => closeDynamicTab(dynamic, Number(key))"
  @add="addDynamicTab"
>
  <pf-tab
    v-for="(tab, index) in dynamic.tabs"
    :key="tab"
    :event-key="index"
    :title="tab"
    :close-button-aria-label="\`Close \${tab}\`"
    :close-disabled="dynamic.tabs.length === 1"
  >
    {{ tab }}
  </pf-tab>
</pf-tabs>`},{intro:t(()=>[...a[164]||=[o(`div`,{class:`markdown pf-v6-c-content`},[o(`p`,null,[m(`To enable closeable tabs, listen to the `),o(`code`,null,`close`),m(` event of the `),o(`code`,null,`pf-tabs`),m(` component. To enable a button that adds new tabs, listen to its `),o(`code`,null,`add`),m(` event.`)])],-1)]]),default:t(()=>[u(J,{"active-key":K.active,"onUpdate:activeKey":a[35]||=e=>K.active=e,"aria-label":`Tabs in the addable/closeable example`,"add-button-aria-label":`Add new tab`,onClose:a[36]||=(e,t)=>Se(K,Number(t)),onAdd:Ce},{default:t(()=>[(d(!0),s(h,null,r(K.tabs,(e,n)=>(d(),p(_,{key:e,"event-key":n,title:e,"close-button-aria-label":`Close ${e}`,"close-disabled":K.tabs.length===1},{default:t(()=>[m(i(e),1)]),_:2},1032,[`event-key`,`title`,`close-button-aria-label`,`close-disabled`]))),128))]),_:1},8,[`active-key`])]),_:1}),u(X,{title:`With help action popover`,source:`<pf-tabs v-model:active-key="helpTabs" aria-label="Tabs in the help action example">
  <pf-tab
    v-for="(tab, index) in helpTabNames"
    :key="tab"
    :event-key="index"
    :title="tab"
    :disabled="tab === 'Disabled'"
    :aria-disabled="tab === 'ARIA disabled'"
  >
    <template #actions>
      <pf-tab-action
        :id="\`help-action-\${index}\`"
        :aria-label="\`Help action for \${tab}\`"
        :disabled="tab === 'Help disabled'"
      >
        <circle-question-icon />
      </pf-tab-action>
      <pf-popover :trigger-ref="\`#help-action-\${index}\`">
        <template #header
          ><div>Help popover for {{ tab }}</div></template>
        <template #body>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla
            turpis.
          </div>
        </template>
        <template #footer>Popover footer</template>
      </pf-popover>
    </template>
    {{ tab }}
  </pf-tab>
</pf-tabs>`},{intro:t(()=>[...a[165]||=[o(`div`,{class:`markdown pf-v6-c-content`},[o(`p`,null,`You may add a help action to a tab to provide users with additional context in a popover.`),o(`p`,null,[m(`To render an action beside the tab content, use the `),o(`code`,null,`actions`),m(` slot of a `),o(`code`,null,`pf-tab`),m(`. Pass a `),o(`code`,null,`pf-tab-action`),m(` component and a popover triggered by it into the `),o(`code`,null,`actions`),m(` slot.`)])],-1)]]),default:t(()=>[u(J,{"active-key":we.value,"onUpdate:activeKey":a[37]||=e=>we.value=e,"aria-label":`Tabs in the help action example`},{default:t(()=>[(d(),s(h,null,r(Te,(e,n)=>u(_,{key:e,"event-key":n,title:e,disabled:e===`Disabled`,"aria-disabled":e===`ARIA disabled`},{actions:t(()=>[u($,{id:`help-action-${n}`,"aria-label":`Help action for ${e}`,disabled:e===`Help disabled`},{default:t(()=>[u(c(y))]),_:1},8,[`id`,`aria-label`,`disabled`]),u(Oe,{"trigger-ref":`#help-action-${n}`},{header:t(()=>[o(`div`,null,`Help popover for `+i(e),1)]),body:t(()=>[...a[166]||=[o(`div`,null,` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis. `,-1)]]),footer:t(()=>[...a[167]||=[m(`Popover footer`,-1)]]),_:2},1032,[`trigger-ref`])]),default:t(()=>[m(` `+i(e),1)]),_:2},1032,[`event-key`,`title`,`disabled`,`aria-disabled`])),64))]),_:1},8,[`active-key`])]),_:1}),u(X,{title:`With help and close actions`,source:`<pf-tabs v-model:active-key="helpAndClose.active" aria-label="Tabs in the help enabled and closeable example">
  <pf-tab v-for="(tab, index) in helpAndClose.tabs" :key="tab" :event-key="index" :title="tab">
    <template #actions>
      <pf-tab-action :id="\`help-close-action-\${index}\`" :aria-label="\`Help for \${tab}\`">
        <circle-question-icon />
      </pf-tab-action>
      <pf-tab-action
        :aria-label="\`Close \${tab}\`"
        :disabled="helpAndClose.tabs.length === 1"
        @click="closeDynamicTab(helpAndClose, index)"
      >
        <xmark-icon />
      </pf-tab-action>
      <pf-popover :trigger-ref="\`#help-close-action-\${index}\`">
        <template #header
          ><div>Help popover for {{ tab }}</div></template>
        <template #body>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla
            turpis.
          </div>
        </template>
        <template #footer>Popover footer</template>
      </pf-popover>
    </template>
    {{ tab }}
  </pf-tab>
</pf-tabs>`},{intro:t(()=>[...a[168]||=[o(`div`,{class:`markdown pf-v6-c-content`},[o(`p`,null,[m(`To add multiple actions to a tab, create a `),o(`code`,null,`pf-tab-action`),m(` component for each action.`)]),o(`p`,null,`The following example passes in both help popover and close actions.`)],-1)]]),default:t(()=>[u(J,{"active-key":q.active,"onUpdate:activeKey":a[38]||=e=>q.active=e,"aria-label":`Tabs in the help enabled and closeable example`},{default:t(()=>[(d(!0),s(h,null,r(q.tabs,(e,n)=>(d(),p(_,{key:e,"event-key":n,title:e},{actions:t(()=>[u($,{id:`help-close-action-${n}`,"aria-label":`Help for ${e}`},{default:t(()=>[u(c(y))]),_:1},8,[`id`,`aria-label`]),u($,{"aria-label":`Close ${e}`,disabled:q.tabs.length===1,onClick:e=>Se(q,n)},{default:t(()=>[u(c(ee))]),_:1},8,[`aria-label`,`disabled`,`onClick`]),u(Oe,{"trigger-ref":`#help-close-action-${n}`},{header:t(()=>[o(`div`,null,`Help popover for `+i(e),1)]),body:t(()=>[...a[169]||=[o(`div`,null,` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis. `,-1)]]),footer:t(()=>[...a[170]||=[m(`Popover footer`,-1)]]),_:2},1032,[`trigger-ref`])]),default:t(()=>[m(` `+i(e),1)]),_:2},1032,[`event-key`,`title`]))),128))]),_:1},8,[`active-key`])]),_:1})]),_:1})}}});export{w as default};