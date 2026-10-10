import{$ as e,N as t,U as n,at as r,c as i,h as a,k as o,m as s,p as c,s as l}from"./runtime-core.esm-bundler-DZwyVwFG.js";import{_ as u,f as d,t as f}from"./index--Exe4Myj.js";import{t as p}from"./cubes-icon-DWd5HTZe.js";var m=u({name:`TableCellsIcon`,height:512,width:448,svgPathData:`M384 96l0 64-64 0 0-64 64 0zm0 128l0 64-64 0 0-64 64 0zm0 128l0 64-64 0 0-64 64 0zM256 288l-64 0 0-64 64 0 0 64zm-64 64l64 0 0 64-64 0 0-64zm-64-64l-64 0 0-64 64 0 0 64zM64 352l64 0 0 64-64 0 0-64zm0-192l0-64 64 0 0 64-64 0zm128 0l0-64 64 0 0 64-64 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z`,yOffset:0,xOffset:0}),h=a({__name:`Dropdown.story`,setup(a){let u=f();function h(e){e.target instanceof HTMLElement&&u.add({title:`Clicked "${e.target.innerText}"`})}let g=e(!1),_=e(!1),v=e(!1),y=e(!1),b=e(!1),x=e(!1),S=e(!1),C=e(!1),w=e(!1);return(e,a)=>{let u=t(`component-info`),f=t(`pf-dropdown-item`),T=t(`pf-divider`),E=t(`pf-dropdown`),D=t(`story-canvas`),O=t(`pf-menu-toggle`),k=t(`pf-dropdown-group`),A=t(`doc-page`);return o(),i(A,{name:`Components/Dropdown.story.vue`,title:`Dropdown`},{description:n(()=>[...a[9]||=[c(`A `,-1),l(`b`,null,`dropdown`,-1),c(` presents a menu of actions or links in a constrained space that will trigger a process or navigate to a new location. See select component guidelines for more information about making one or more selections from a list of items in a value list.`,-1)]]),apidocs:n(()=>[s(u,{name:`PfDropdown`,doc:{name:`PfDropdown`,exportName:`PfDropdown`,displayName:`Dropdown`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`id`,required:!1,type:{name:`string`}},{name:`position`,required:!1,type:{name:`union`,elements:[{name:`"left"`},{name:`"right"`}]},defaultValue:{func:!1,value:`'left'`}},{name:`appendTo`,description:`Element or selector where to render the floating menu`,required:!1,type:{name:`union`,elements:[{name:`"inline"`},{name:`string`},{name:`RendererElement`},{name:`null`},{name:`undefined`}]}},{name:`text`,required:!1,type:{name:`string`}},{name:`disabled`,required:!1,type:{name:`boolean`}},{name:`autoFocus`,description:`Flag indicating the toggle should be focused after a selection.`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`noCloseOnSelect`,description:`Flag indicating that the dropdown should not automatically close on select.`,required:!1,type:{name:`boolean`}},{name:`zIndex`,description:`z-index of the dropdown menu`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`9999`}},{name:`placement`,required:!1,type:{name:`Placement`},defaultValue:{func:!1,value:`'bottom'`}},{name:`splitButton`,description:`Variant of split button toggle`,required:!1,type:{name:`union`,elements:[{name:`boolean`},{name:`"default"`},{name:`"action"`},{name:`"checkbox"`}]}},{name:`variant`,description:`Variant styles of the menu toggle`,required:!1,type:{name:`union`,elements:[{name:`"default"`},{name:`"plain"`},{name:`"primary"`},{name:`"plainText"`},{name:`"secondary"`},{name:`"typeahead"`}]}},{name:`scrollable`,description:`Indicates if the dropdown menu should be scrollable`,required:!1,type:{name:`boolean`}},{name:`menuHeight`,description:`Height of the dropdown menu`,required:!1,type:{name:`string`}},{name:`maxMenuHeight`,description:`Maximum height of dropdown menu`,required:!1,type:{name:`string`}},{name:`shouldFocusFirstItemOnOpen`,tags:{beta:[{description:`Flag indicating the first menu item should be focused after opening the dropdown.`,title:`beta`}]},required:!1,type:{name:`boolean`}}],events:[{name:`select`,type:{names:[`Event`]}}],slots:[{name:`default`},{name:`toggle`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Dropdown/Dropdown.vue`]}}),s(u,{name:`PfMenuGroup`,doc:{name:`PfMenuGroup`,exportName:`PfSelectGroup`,displayName:`MenuGroup`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`label`,description:`Group label`,required:!1,type:{name:`string`}},{name:`titleId`,description:`ID for title label`,required:!1,type:{name:`string`}},{name:`labelHeadingLevel`,description:`Group label heading level. Default is h1.`,required:!1,type:{name:`union`,elements:[{name:`"h1"`},{name:`"h2"`},{name:`"h3"`},{name:`"h4"`},{name:`"h5"`},{name:`"h6"`}]},defaultValue:{func:!1,value:`'h1'`}}],events:[],slots:[{name:`label`},{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Menu/MenuGroup.vue`]}}),s(u,{name:`PfMenuItem`,doc:{name:`PfMenuItem`,exportName:`PfSelectOption`,displayName:`MenuItem`,description:``,tags:{},expose:[{name:`focus`},{name:`focused`}],props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`name`,required:!1,type:{name:`string`}},{name:`value`,required:!1,type:{name:`string`}},{name:`to`,description:`Target navigation link`,required:!1,type:{name:`string`}},{name:`check`,tags:{beta:[{description:`Flag indicating the item has a checkbox`,title:`beta`}]},required:!1,type:{name:`boolean`}},{name:`checkName`,tags:{beta:[{description:`Name of the checkbox`,title:`beta`}]},required:!1,type:{name:`string`}},{name:`active`,description:`Flag indicating whether the item is active`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`undefined`}},{name:`loadButton`,description:`Flag indicating if the item causes a load`,required:!1,type:{name:`boolean`}},{name:`loading`,description:`Flag indicating a loading state`,required:!1,type:{name:`boolean`}},{name:`component`,description:`Component used to render the menu item`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`'button'`}},{name:`componentAttrs`,description:`Additional attrs added to the link component`,required:!1,type:{name:`union`,elements:[{name:`Omit`,elements:[{name:`ButtonHTMLAttributes`},{name:`union`,elements:[{name:`"href"`},{name:`"aria-current"`},{name:`"disabled"`},{name:`"role"`},{name:`"for"`},{name:`"aria-disabled"`},{name:`"aria-expanded"`},{name:`"type"`},{name:`"download"`},{name:`"onClick"`}]}]},{name:`Omit`,elements:[{name:`AnchorHTMLAttributes`},{name:`union`,elements:[{name:`"href"`},{name:`"aria-current"`},{name:`"disabled"`},{name:`"role"`},{name:`"for"`},{name:`"aria-disabled"`},{name:`"aria-expanded"`},{name:`"type"`},{name:`"download"`},{name:`"onClick"`},{name:`"target"`},{name:`"referrerpolicy"`}]}]}]}},{name:`disabled`,description:`Render item as disabled option`,required:!1,type:{name:`boolean`}},{name:`description`,description:`Description of the menu item`,required:!1,type:{name:`string`}},{name:`externalLink`,description:`Render external link icon`,required:!1,type:{name:`boolean`}},{name:`selected`,description:`Flag indicating if the option is selected`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`undefined`}},{name:`focused`,description:`Flag indicating the item is focused`,required:!1,type:{name:`boolean`}},{name:`danger`,description:`Flag indicating the item is in danger state`,required:!1,type:{name:`boolean`}},{name:`direction`,tags:{beta:[{description:`Sub menu direction`,title:`beta`}]},required:!1,type:{name:`union`,elements:[{name:`"down"`},{name:`"up"`}]}},{name:`onPath`,tags:{beta:[{description:`True if item is on current selection path`,title:`beta`}]},required:!1,type:{name:`boolean`}},{name:`download`,description:`Navigation link download. Only set when the to property is present.`,required:!1,type:{name:`string`}},{name:`target`,description:`Navigation link target.`,required:!1,type:{name:`string`}},{name:`referrerpolicy`,description:`Navigation link referrerpolicy.`,required:!1,type:{name:`TSIndexedAccessType`}}],events:[{name:`click`,type:{names:[`Event`]},description:`Callback for item click`},{name:`showFlyout`,type:{names:[`Event`]},tags:[{title:`beta`,content:`Callback function when mouse leaves trigger`}]},{name:`update:favorited`,type:{names:[`boolean`]}}],slots:[{name:`icon`},{name:`default`},{name:`description`},{name:`flyout-menu`},{name:`actions`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Menu/MenuItem.vue`]}}),s(u,{name:`PfMenuList`,doc:{name:`PfMenuList`,exportName:`PfSelectList`,displayName:`MenuList`,description:``,tags:{},expose:[{name:`el`}],props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Menu/MenuList.vue`]}})]),default:n(()=>[s(D,{title:`Basic`,source:`<pf-dropdown v-model:open="open1" text="Dropdown" should-focus-first-item-on-open>
  <pf-dropdown-item @click="onClick">Link</pf-dropdown-item>
  <pf-dropdown-item component="button" @click="onClick">
    Action
  </pf-dropdown-item>
  <pf-dropdown-item disabled @click="onClick">
    Disabled Link
  </pf-dropdown-item>
  <pf-dropdown-item disabled component="button" @click="onClick">
    Disabled Action
  </pf-dropdown-item>
  <pf-divider />
  <pf-dropdown-item @click="onClick">Separated Link</pf-dropdown-item>
  <pf-dropdown-item component="button" @click="onClick">
    Separated Action
  </pf-dropdown-item>
</pf-dropdown>`},{default:n(()=>[s(E,{open:g.value,"onUpdate:open":a[0]||=e=>g.value=e,text:`Dropdown`,"should-focus-first-item-on-open":``},{default:n(()=>[s(f,{onClick:h},{default:n(()=>[...a[10]||=[c(`Link`,-1)]]),_:1}),s(f,{component:`button`,onClick:h},{default:n(()=>[...a[11]||=[c(` Action `,-1)]]),_:1}),s(f,{disabled:``,onClick:h},{default:n(()=>[...a[12]||=[c(` Disabled Link `,-1)]]),_:1}),s(f,{disabled:``,component:`button`,onClick:h},{default:n(()=>[...a[13]||=[c(` Disabled Action `,-1)]]),_:1}),s(T),s(f,{onClick:h},{default:n(()=>[...a[14]||=[c(`Separated Link`,-1)]]),_:1}),s(f,{component:`button`,onClick:h},{default:n(()=>[...a[15]||=[c(` Separated Action `,-1)]]),_:1})]),_:1},8,[`open`])]),_:1}),s(D,{title:`With initial selection`,source:`<pf-dropdown v-model:open="open2" text="Dropdown">
  <pf-dropdown-item>Link</pf-dropdown-item>
  <pf-dropdown-item component="button" focused>Action</pf-dropdown-item>
  <pf-dropdown-item disabled>Disabled Link</pf-dropdown-item>
  <pf-dropdown-item disabled component="button">Disabled Action</pf-dropdown-item>
  <pf-divider />
  <pf-dropdown-item>Separated Link</pf-dropdown-item>
  <pf-dropdown-item component="button">Separated Action</pf-dropdown-item>
</pf-dropdown>`},{default:n(()=>[s(E,{open:_.value,"onUpdate:open":a[1]||=e=>_.value=e,text:`Dropdown`},{default:n(()=>[s(f,null,{default:n(()=>[...a[16]||=[c(`Link`,-1)]]),_:1}),s(f,{component:`button`,focused:``},{default:n(()=>[...a[17]||=[c(`Action`,-1)]]),_:1}),s(f,{disabled:``},{default:n(()=>[...a[18]||=[c(`Disabled Link`,-1)]]),_:1}),s(f,{disabled:``,component:`button`},{default:n(()=>[...a[19]||=[c(`Disabled Action`,-1)]]),_:1}),s(T),s(f,null,{default:n(()=>[...a[20]||=[c(`Separated Link`,-1)]]),_:1}),s(f,{component:`button`},{default:n(()=>[...a[21]||=[c(`Separated Action`,-1)]]),_:1})]),_:1},8,[`open`])]),_:1}),s(D,{title:`Disabled`,source:`<pf-dropdown v-model:open="open3" text="Dropdown" disabled>
  <pf-dropdown-item>Link</pf-dropdown-item>
  <pf-dropdown-item component="button">Action</pf-dropdown-item>
  <pf-dropdown-item disabled>Disabled Link</pf-dropdown-item>
  <pf-dropdown-item disabled component="button">Disabled Action</pf-dropdown-item>
  <pf-divider />
  <pf-dropdown-item>Separated Link</pf-dropdown-item>
  <pf-dropdown-item component="button">Separated Action</pf-dropdown-item>
</pf-dropdown>`},{default:n(()=>[s(E,{open:v.value,"onUpdate:open":a[2]||=e=>v.value=e,text:`Dropdown`,disabled:``},{default:n(()=>[s(f,null,{default:n(()=>[...a[22]||=[c(`Link`,-1)]]),_:1}),s(f,{component:`button`},{default:n(()=>[...a[23]||=[c(`Action`,-1)]]),_:1}),s(f,{disabled:``},{default:n(()=>[...a[24]||=[c(`Disabled Link`,-1)]]),_:1}),s(f,{disabled:``,component:`button`},{default:n(()=>[...a[25]||=[c(`Disabled Action`,-1)]]),_:1}),s(T),s(f,null,{default:n(()=>[...a[26]||=[c(`Separated Link`,-1)]]),_:1}),s(f,{component:`button`},{default:n(()=>[...a[27]||=[c(`Separated Action`,-1)]]),_:1})]),_:1},8,[`open`])]),_:1}),s(D,{title:`Primary toggle`,source:`<pf-dropdown v-model:open="open4" text="Dropdown" variant="primary">
  <pf-dropdown-item>Link</pf-dropdown-item>
  <pf-dropdown-item component="button">Action</pf-dropdown-item>
  <pf-dropdown-item disabled>Disabled Link</pf-dropdown-item>
  <pf-dropdown-item disabled component="button">Disabled Action</pf-dropdown-item>
  <pf-divider />
  <pf-dropdown-item>Separated Link</pf-dropdown-item>
  <pf-dropdown-item component="button">Separated Action</pf-dropdown-item>
</pf-dropdown>`},{default:n(()=>[s(E,{open:y.value,"onUpdate:open":a[3]||=e=>y.value=e,text:`Dropdown`,variant:`primary`},{default:n(()=>[s(f,null,{default:n(()=>[...a[28]||=[c(`Link`,-1)]]),_:1}),s(f,{component:`button`},{default:n(()=>[...a[29]||=[c(`Action`,-1)]]),_:1}),s(f,{disabled:``},{default:n(()=>[...a[30]||=[c(`Disabled Link`,-1)]]),_:1}),s(f,{disabled:``,component:`button`},{default:n(()=>[...a[31]||=[c(`Disabled Action`,-1)]]),_:1}),s(T),s(f,null,{default:n(()=>[...a[32]||=[c(`Separated Link`,-1)]]),_:1}),s(f,{component:`button`},{default:n(()=>[...a[33]||=[c(`Separated Action`,-1)]]),_:1})]),_:1},8,[`open`])]),_:1}),s(D,{title:`Direction up`,source:`<pf-dropdown v-model:open="open6" text="Dropdown" placement="top">
  <pf-dropdown-item>Link</pf-dropdown-item>
  <pf-dropdown-item component="button">Action</pf-dropdown-item>
  <pf-dropdown-item disabled>Disabled Link</pf-dropdown-item>
  <pf-dropdown-item disabled component="button">Disabled Action</pf-dropdown-item>
  <pf-divider />
  <pf-dropdown-item>Separated Link</pf-dropdown-item>
  <pf-dropdown-item component="button">Separated Action</pf-dropdown-item>
</pf-dropdown>`},{default:n(()=>[s(E,{open:b.value,"onUpdate:open":a[4]||=e=>b.value=e,text:`Dropdown`,placement:`top`},{default:n(()=>[s(f,null,{default:n(()=>[...a[34]||=[c(`Link`,-1)]]),_:1}),s(f,{component:`button`},{default:n(()=>[...a[35]||=[c(`Action`,-1)]]),_:1}),s(f,{disabled:``},{default:n(()=>[...a[36]||=[c(`Disabled Link`,-1)]]),_:1}),s(f,{disabled:``,component:`button`},{default:n(()=>[...a[37]||=[c(`Disabled Action`,-1)]]),_:1}),s(T),s(f,null,{default:n(()=>[...a[38]||=[c(`Separated Link`,-1)]]),_:1}),s(f,{component:`button`},{default:n(()=>[...a[39]||=[c(`Separated Action`,-1)]]),_:1})]),_:1},8,[`open`])]),_:1}),s(D,{title:`With kebab`,source:`<pf-dropdown v-model:open="open7">
  <template #toggle>
    <pf-menu-toggle variant="plain" />
  </template>

  <pf-dropdown-item>Link</pf-dropdown-item>
  <pf-dropdown-item component="button">Action</pf-dropdown-item>
  <pf-dropdown-item disabled>Disabled Link</pf-dropdown-item>
  <pf-dropdown-item disabled component="button">Disabled Action</pf-dropdown-item>
  <pf-divider />
  <pf-dropdown-item>Separated Link</pf-dropdown-item>
  <pf-dropdown-item component="button">Separated Action</pf-dropdown-item>
</pf-dropdown>`},{default:n(()=>[s(E,{open:x.value,"onUpdate:open":a[5]||=e=>x.value=e},{toggle:n(()=>[s(O,{variant:`plain`})]),default:n(()=>[s(f,null,{default:n(()=>[...a[40]||=[c(`Link`,-1)]]),_:1}),s(f,{component:`button`},{default:n(()=>[...a[41]||=[c(`Action`,-1)]]),_:1}),s(f,{disabled:``},{default:n(()=>[...a[42]||=[c(`Disabled Link`,-1)]]),_:1}),s(f,{disabled:``,component:`button`},{default:n(()=>[...a[43]||=[c(`Disabled Action`,-1)]]),_:1}),s(T),s(f,null,{default:n(()=>[...a[44]||=[c(`Separated Link`,-1)]]),_:1}),s(f,{component:`button`},{default:n(()=>[...a[45]||=[c(`Separated Action`,-1)]]),_:1})]),_:1},8,[`open`])]),_:1}),s(D,{title:`Icon only`,source:`<pf-dropdown v-model:open="open8">
  <template #toggle>
    <pf-menu-toggle aria-label="Applications" variant="plain">
      <template #icon>
        <table-cells-icon />
      </template>
    </pf-menu-toggle>
  </template>

  <pf-dropdown-item>Link</pf-dropdown-item>
  <pf-dropdown-item component="button">Action</pf-dropdown-item>
  <pf-dropdown-item disabled>Disabled Link</pf-dropdown-item>
  <pf-dropdown-item disabled component="button">Disabled Action</pf-dropdown-item>
  <pf-divider />
  <pf-dropdown-item>Separated Link</pf-dropdown-item>
  <pf-dropdown-item component="button">Separated Action</pf-dropdown-item>
</pf-dropdown>`},{default:n(()=>[s(E,{open:S.value,"onUpdate:open":a[6]||=e=>S.value=e},{toggle:n(()=>[s(O,{"aria-label":`Applications`,variant:`plain`},{icon:n(()=>[s(r(m))]),_:1})]),default:n(()=>[s(f,null,{default:n(()=>[...a[46]||=[c(`Link`,-1)]]),_:1}),s(f,{component:`button`},{default:n(()=>[...a[47]||=[c(`Action`,-1)]]),_:1}),s(f,{disabled:``},{default:n(()=>[...a[48]||=[c(`Disabled Link`,-1)]]),_:1}),s(f,{disabled:``,component:`button`},{default:n(()=>[...a[49]||=[c(`Disabled Action`,-1)]]),_:1}),s(T),s(f,null,{default:n(()=>[...a[50]||=[c(`Separated Link`,-1)]]),_:1}),s(f,{component:`button`},{default:n(()=>[...a[51]||=[c(`Separated Action`,-1)]]),_:1})]),_:1},8,[`open`])]),_:1}),s(D,{title:`With groups`,source:`<pf-dropdown v-model:open="open9" text="Dropdown">
  <pf-dropdown-group>
    <pf-dropdown-item>Link</pf-dropdown-item>
    <pf-dropdown-item component="button">
      Action
    </pf-dropdown-item>
  </pf-dropdown-group>
  <pf-divider component="li" />
  <pf-dropdown-group>
    <template #label>Group 2</template>
    <pf-dropdown-item>
      Group 2 Link
    </pf-dropdown-item>
    <pf-dropdown-item component="button">
      Group 2 Action
    </pf-dropdown-item>
  </pf-dropdown-group>
  <pf-divider component="li" />
  <pf-dropdown-group>
    <template #label>Group 3</template>
    <pf-dropdown-item>Group 3 Link</pf-dropdown-item>
    <pf-dropdown-item component="button">
      Group 3 Action Action
    </pf-dropdown-item>
  </pf-dropdown-group>
</pf-dropdown>`},{default:n(()=>[s(E,{open:C.value,"onUpdate:open":a[7]||=e=>C.value=e,text:`Dropdown`},{default:n(()=>[s(k,null,{default:n(()=>[s(f,null,{default:n(()=>[...a[52]||=[c(`Link`,-1)]]),_:1}),s(f,{component:`button`},{default:n(()=>[...a[53]||=[c(` Action `,-1)]]),_:1})]),_:1}),s(T,{component:`li`}),s(k,null,{label:n(()=>[...a[54]||=[c(`Group 2`,-1)]]),default:n(()=>[s(f,null,{default:n(()=>[...a[55]||=[c(` Group 2 Link `,-1)]]),_:1}),s(f,{component:`button`},{default:n(()=>[...a[56]||=[c(` Group 2 Action `,-1)]]),_:1})]),_:1}),s(T,{component:`li`}),s(k,null,{label:n(()=>[...a[57]||=[c(`Group 3`,-1)]]),default:n(()=>[s(f,null,{default:n(()=>[...a[58]||=[c(`Group 3 Link`,-1)]]),_:1}),s(f,{component:`button`},{default:n(()=>[...a[59]||=[c(` Group 3 Action Action `,-1)]]),_:1})]),_:1})]),_:1},8,[`open`])]),_:1}),s(D,{title:`With descriptions`,source:`<pf-dropdown v-model:open="open10" text="Dropdown">
  <pf-dropdown-item description="This is a description">
    <template #icon>
      <cubes-icon />
    </template>
    Link
  </pf-dropdown-item>
  <pf-dropdown-item component="button" description="This is a very long description that describes the menu item">
    <template #icon>
      <bell-icon />
    </template>
    Action
  </pf-dropdown-item>
  <pf-dropdown-item disabled description="Disabled link description">
    Disabled Link
  </pf-dropdown-item>
  <pf-dropdown-item disabled component="button" description="This is a description">
    Disabled Action
  </pf-dropdown-item>
</pf-dropdown>`},{default:n(()=>[s(E,{open:w.value,"onUpdate:open":a[8]||=e=>w.value=e,text:`Dropdown`},{default:n(()=>[s(f,{description:`This is a description`},{icon:n(()=>[s(r(p))]),default:n(()=>[a[60]||=c(` Link `,-1)]),_:1}),s(f,{component:`button`,description:`This is a very long description that describes the menu item`},{icon:n(()=>[s(r(d))]),default:n(()=>[a[61]||=c(` Action `,-1)]),_:1}),s(f,{disabled:``,description:`Disabled link description`},{default:n(()=>[...a[62]||=[c(` Disabled Link `,-1)]]),_:1}),s(f,{disabled:``,component:`button`,description:`This is a description`},{default:n(()=>[...a[63]||=[c(` Disabled Action `,-1)]]),_:1})]),_:1},8,[`open`])]),_:1}),s(D,{title:`Menu teleported in body`,source:`<pf-dropdown text="Dropdown" append-to="body">
  <pf-dropdown-item>Link</pf-dropdown-item>
  <pf-dropdown-item component="button">
    Action
  </pf-dropdown-item>
  <pf-dropdown-item disabled>
    Disabled Link
  </pf-dropdown-item>
  <pf-dropdown-item disabled component="button">
    Disabled Action
  </pf-dropdown-item>
  <pf-divider />
  <pf-dropdown-item>Separated Link</pf-dropdown-item>
  <pf-dropdown-item component="button">
    Separated Action
  </pf-dropdown-item>
</pf-dropdown>`},{default:n(()=>[s(E,{text:`Dropdown`,"append-to":`body`},{default:n(()=>[s(f,null,{default:n(()=>[...a[64]||=[c(`Link`,-1)]]),_:1}),s(f,{component:`button`},{default:n(()=>[...a[65]||=[c(` Action `,-1)]]),_:1}),s(f,{disabled:``},{default:n(()=>[...a[66]||=[c(` Disabled Link `,-1)]]),_:1}),s(f,{disabled:``,component:`button`},{default:n(()=>[...a[67]||=[c(` Disabled Action `,-1)]]),_:1}),s(T),s(f,null,{default:n(()=>[...a[68]||=[c(`Separated Link`,-1)]]),_:1}),s(f,{component:`button`},{default:n(()=>[...a[69]||=[c(` Separated Action `,-1)]]),_:1})]),_:1})]),_:1})]),_:1})}}});export{h as default};