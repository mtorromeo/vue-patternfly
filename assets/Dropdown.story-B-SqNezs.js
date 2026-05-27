import{D as e,E as t,I as n,N as r,O as i,R as a,S as o,_ as s,f as c,j as l,t as u,x as d,z as f}from"./index-mFbvqZfx.js";import{t as p}from"./cubes-icon-DlCuZ13h.js";var m=s({name:`TableCellsIcon`,height:512,width:512,svgPathData:`M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm88 64l0 64-88 0 0-64 88 0zm56 0l88 0 0 64-88 0 0-64zm240 0l0 64-88 0 0-64 88 0zM64 224l88 0 0 64-88 0 0-64zm232 0l0 64-88 0 0-64 88 0zm64 0l88 0 0 64-88 0 0-64zM152 352l0 64-88 0 0-64 88 0zm56 0l88 0 0 64-88 0 0-64zm240 0l0 64-88 0 0-64 88 0z`,yOffset:0,xOffset:0}),h=i({__name:`Dropdown.story`,setup(i){let s=u();function h(e){e.target instanceof HTMLElement&&s.add({title:`Clicked "${e.target.innerText}"`})}let g=a(!1),_=a(!1),v=a(!1),y=a(!1),b=a(!1),x=a(!1),S=a(!1),C=a(!1),w=a(!1);return(i,a)=>{let s=r(`component-info`),u=r(`pf-dropdown-item`),T=r(`pf-divider`),E=r(`pf-dropdown`),D=r(`story-canvas`),O=r(`pf-menu-toggle`),k=r(`pf-dropdown-group`),A=r(`doc-page`);return l(),o(A,{name:`Components/Dropdown.story.vue`,title:`Dropdown`},{description:n(()=>[...a[9]||=[t(`A `,-1),d(`b`,null,`dropdown`,-1),t(` presents a menu of actions or links in a constrained space that will trigger a process or navigate to a new location. See select component guidelines for more information about making one or more selections from a list of items in a value list.`,-1)]]),apidocs:n(()=>[e(s,{name:`PfDropdown`,doc:{name:`PfDropdown`,exportName:`PfDropdown`,displayName:`Dropdown`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`id`,required:!1,type:{name:`string`}},{name:`position`,required:!1,type:{name:`union`,elements:[{name:`"left"`},{name:`"right"`}]},defaultValue:{func:!1,value:`'left'`}},{name:`appendTo`,description:`Element or selector where to render the floating menu`,required:!1,type:{name:`union`,elements:[{name:`"inline"`},{name:`string`},{name:`RendererElement`},{name:`null`},{name:`undefined`}]}},{name:`text`,required:!1,type:{name:`string`}},{name:`disabled`,required:!1,type:{name:`boolean`}},{name:`autoFocus`,description:`Flag indicating the toggle should be focused after a selection.`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`noCloseOnSelect`,description:`Flag indicating that the dropdown should not automatically close on select.`,required:!1,type:{name:`boolean`}},{name:`zIndex`,description:`z-index of the dropdown menu`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`9999`}},{name:`placement`,required:!1,type:{name:`Placement`},defaultValue:{func:!1,value:`'bottom'`}},{name:`splitButton`,description:`Variant of split button toggle`,required:!1,type:{name:`union`,elements:[{name:`boolean`},{name:`"default"`},{name:`"action"`},{name:`"checkbox"`}]}},{name:`variant`,description:`Variant styles of the menu toggle`,required:!1,type:{name:`union`,elements:[{name:`"default"`},{name:`"plain"`},{name:`"primary"`},{name:`"plainText"`},{name:`"secondary"`},{name:`"typeahead"`}]}},{name:`scrollable`,description:`Indicates if the dropdown menu should be scrollable`,required:!1,type:{name:`boolean`}},{name:`menuHeight`,description:`Height of the dropdown menu`,required:!1,type:{name:`string`}},{name:`maxMenuHeight`,description:`Maximum height of dropdown menu`,required:!1,type:{name:`string`}},{name:`shouldFocusFirstItemOnOpen`,tags:{beta:[{description:`Flag indicating the first menu item should be focused after opening the dropdown.`,title:`beta`}]},required:!1,type:{name:`boolean`}}],events:[{name:`select`,type:{names:[`Event`]}}],slots:[{name:`default`},{name:`toggle`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Dropdown/Dropdown.vue`]}}),e(s,{name:`PfMenuGroup`,doc:{name:`PfMenuGroup`,exportName:`PfSelectGroup`,displayName:`MenuGroup`,description:``,tags:{},props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`label`,description:`Group label`,required:!1,type:{name:`string`}},{name:`titleId`,description:`ID for title label`,required:!1,type:{name:`string`}},{name:`labelHeadingLevel`,description:`Group label heading level. Default is h1.`,required:!1,type:{name:`union`,elements:[{name:`"h1"`},{name:`"h2"`},{name:`"h3"`},{name:`"h4"`},{name:`"h5"`},{name:`"h6"`}]},defaultValue:{func:!1,value:`'h1'`}}],events:[],slots:[{name:`label`},{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Menu/MenuGroup.vue`]}}),e(s,{name:`PfMenuItem`,doc:{name:`PfMenuItem`,exportName:`PfSelectOption`,displayName:`MenuItem`,description:``,tags:{},expose:[{name:`focus`},{name:`focused`}],props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}},{name:`name`,required:!1,type:{name:`string`}},{name:`value`,required:!1,type:{name:`string`}},{name:`to`,description:`Target navigation link`,required:!1,type:{name:`string`}},{name:`check`,tags:{beta:[{description:`Flag indicating the item has a checkbox`,title:`beta`}]},required:!1,type:{name:`boolean`}},{name:`checkName`,tags:{beta:[{description:`Name of the checkbox`,title:`beta`}]},required:!1,type:{name:`string`}},{name:`active`,description:`Flag indicating whether the item is active`,required:!1,type:{name:`boolean`}},{name:`loadButton`,description:`Flag indicating if the item causes a load`,required:!1,type:{name:`boolean`}},{name:`loading`,description:`Flag indicating a loading state`,required:!1,type:{name:`boolean`}},{name:`component`,description:`Component used to render the menu item`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`'button'`}},{name:`componentAttrs`,description:`Additional attrs added to the link component`,required:!1,type:{name:`union`,elements:[{name:`Omit`,elements:[{name:`ButtonHTMLAttributes`},{name:`union`,elements:[{name:`"href"`},{name:`"aria-current"`},{name:`"disabled"`},{name:`"role"`},{name:`"for"`},{name:`"aria-disabled"`},{name:`"aria-expanded"`},{name:`"type"`},{name:`"download"`},{name:`"onClick"`}]}]},{name:`Omit`,elements:[{name:`AnchorHTMLAttributes`},{name:`union`,elements:[{name:`"href"`},{name:`"aria-current"`},{name:`"disabled"`},{name:`"role"`},{name:`"for"`},{name:`"aria-disabled"`},{name:`"aria-expanded"`},{name:`"type"`},{name:`"download"`},{name:`"onClick"`},{name:`"target"`},{name:`"referrerpolicy"`}]}]}]}},{name:`disabled`,description:`Render item as disabled option`,required:!1,type:{name:`boolean`}},{name:`description`,description:`Description of the menu item`,required:!1,type:{name:`string`}},{name:`externalLink`,description:`Render external link icon`,required:!1,type:{name:`boolean`}},{name:`selected`,description:`Flag indicating if the option is selected`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`undefined`}},{name:`focused`,description:`Flag indicating the item is focused`,required:!1,type:{name:`boolean`}},{name:`danger`,description:`Flag indicating the item is in danger state`,required:!1,type:{name:`boolean`}},{name:`direction`,tags:{beta:[{description:`Sub menu direction`,title:`beta`}]},required:!1,type:{name:`union`,elements:[{name:`"down"`},{name:`"up"`}]}},{name:`onPath`,tags:{beta:[{description:`True if item is on current selection path`,title:`beta`}]},required:!1,type:{name:`boolean`}},{name:`download`,description:`Navigation link download. Only set when the to property is present.`,required:!1,type:{name:`string`}},{name:`target`,description:`Navigation link target.`,required:!1,type:{name:`string`}},{name:`referrerpolicy`,description:`Navigation link referrerpolicy.`,required:!1,type:{name:`TSIndexedAccessType`}}],events:[{name:`click`,type:{names:[`Event`]},description:`Callback for item click`},{name:`showFlyout`,type:{names:[`Event`]},tags:[{title:`beta`,content:`Callback function when mouse leaves trigger`}]},{name:`update:favorited`,type:{names:[`boolean`]}}],slots:[{name:`icon`},{name:`default`},{name:`description`},{name:`flyout-menu`},{name:`actions`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Menu/MenuItem.vue`]}}),e(s,{name:`PfMenuList`,doc:{name:`PfMenuList`,exportName:`PfSelectList`,displayName:`MenuList`,description:``,tags:{},expose:[{name:`el`}],props:[{name:`ouiaSafe`,description:`Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.`,required:!1,type:{name:`boolean`}},{name:`ouiaId`,description:`Value to overwrite the randomly generated data-ouia-component-id.`,required:!1,type:{name:`OuiaId`}}],events:[],slots:[{name:`default`}],sourceFiles:[`runner/work/vue-patternfly/vue-patternfly/packages/core/src/components/Menu/MenuList.vue`]}})]),default:n(()=>[e(D,{title:`Basic`,source:`<pf-dropdown v-model:open="open1" text="Dropdown" should-focus-first-item-on-open>
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
</pf-dropdown>`},{default:n(()=>[e(E,{open:g.value,"onUpdate:open":a[0]||=e=>g.value=e,text:`Dropdown`,"should-focus-first-item-on-open":``},{default:n(()=>[e(u,{onClick:h},{default:n(()=>[...a[10]||=[t(`Link`,-1)]]),_:1}),e(u,{component:`button`,onClick:h},{default:n(()=>[...a[11]||=[t(` Action `,-1)]]),_:1}),e(u,{disabled:``,onClick:h},{default:n(()=>[...a[12]||=[t(` Disabled Link `,-1)]]),_:1}),e(u,{disabled:``,component:`button`,onClick:h},{default:n(()=>[...a[13]||=[t(` Disabled Action `,-1)]]),_:1}),e(T),e(u,{onClick:h},{default:n(()=>[...a[14]||=[t(`Separated Link`,-1)]]),_:1}),e(u,{component:`button`,onClick:h},{default:n(()=>[...a[15]||=[t(` Separated Action `,-1)]]),_:1})]),_:1},8,[`open`])]),_:1}),e(D,{title:`With initial selection`,source:`<pf-dropdown v-model:open="open2" text="Dropdown">
  <pf-dropdown-item>Link</pf-dropdown-item>
  <pf-dropdown-item component="button" focused>Action</pf-dropdown-item>
  <pf-dropdown-item disabled>Disabled Link</pf-dropdown-item>
  <pf-dropdown-item disabled component="button">Disabled Action</pf-dropdown-item>
  <pf-divider />
  <pf-dropdown-item>Separated Link</pf-dropdown-item>
  <pf-dropdown-item component="button">Separated Action</pf-dropdown-item>
</pf-dropdown>`},{default:n(()=>[e(E,{open:_.value,"onUpdate:open":a[1]||=e=>_.value=e,text:`Dropdown`},{default:n(()=>[e(u,null,{default:n(()=>[...a[16]||=[t(`Link`,-1)]]),_:1}),e(u,{component:`button`,focused:``},{default:n(()=>[...a[17]||=[t(`Action`,-1)]]),_:1}),e(u,{disabled:``},{default:n(()=>[...a[18]||=[t(`Disabled Link`,-1)]]),_:1}),e(u,{disabled:``,component:`button`},{default:n(()=>[...a[19]||=[t(`Disabled Action`,-1)]]),_:1}),e(T),e(u,null,{default:n(()=>[...a[20]||=[t(`Separated Link`,-1)]]),_:1}),e(u,{component:`button`},{default:n(()=>[...a[21]||=[t(`Separated Action`,-1)]]),_:1})]),_:1},8,[`open`])]),_:1}),e(D,{title:`Disabled`,source:`<pf-dropdown v-model:open="open3" text="Dropdown" disabled>
  <pf-dropdown-item>Link</pf-dropdown-item>
  <pf-dropdown-item component="button">Action</pf-dropdown-item>
  <pf-dropdown-item disabled>Disabled Link</pf-dropdown-item>
  <pf-dropdown-item disabled component="button">Disabled Action</pf-dropdown-item>
  <pf-divider />
  <pf-dropdown-item>Separated Link</pf-dropdown-item>
  <pf-dropdown-item component="button">Separated Action</pf-dropdown-item>
</pf-dropdown>`},{default:n(()=>[e(E,{open:v.value,"onUpdate:open":a[2]||=e=>v.value=e,text:`Dropdown`,disabled:``},{default:n(()=>[e(u,null,{default:n(()=>[...a[22]||=[t(`Link`,-1)]]),_:1}),e(u,{component:`button`},{default:n(()=>[...a[23]||=[t(`Action`,-1)]]),_:1}),e(u,{disabled:``},{default:n(()=>[...a[24]||=[t(`Disabled Link`,-1)]]),_:1}),e(u,{disabled:``,component:`button`},{default:n(()=>[...a[25]||=[t(`Disabled Action`,-1)]]),_:1}),e(T),e(u,null,{default:n(()=>[...a[26]||=[t(`Separated Link`,-1)]]),_:1}),e(u,{component:`button`},{default:n(()=>[...a[27]||=[t(`Separated Action`,-1)]]),_:1})]),_:1},8,[`open`])]),_:1}),e(D,{title:`Primary toggle`,source:`<pf-dropdown v-model:open="open4" text="Dropdown" variant="primary">
  <pf-dropdown-item>Link</pf-dropdown-item>
  <pf-dropdown-item component="button">Action</pf-dropdown-item>
  <pf-dropdown-item disabled>Disabled Link</pf-dropdown-item>
  <pf-dropdown-item disabled component="button">Disabled Action</pf-dropdown-item>
  <pf-divider />
  <pf-dropdown-item>Separated Link</pf-dropdown-item>
  <pf-dropdown-item component="button">Separated Action</pf-dropdown-item>
</pf-dropdown>`},{default:n(()=>[e(E,{open:y.value,"onUpdate:open":a[3]||=e=>y.value=e,text:`Dropdown`,variant:`primary`},{default:n(()=>[e(u,null,{default:n(()=>[...a[28]||=[t(`Link`,-1)]]),_:1}),e(u,{component:`button`},{default:n(()=>[...a[29]||=[t(`Action`,-1)]]),_:1}),e(u,{disabled:``},{default:n(()=>[...a[30]||=[t(`Disabled Link`,-1)]]),_:1}),e(u,{disabled:``,component:`button`},{default:n(()=>[...a[31]||=[t(`Disabled Action`,-1)]]),_:1}),e(T),e(u,null,{default:n(()=>[...a[32]||=[t(`Separated Link`,-1)]]),_:1}),e(u,{component:`button`},{default:n(()=>[...a[33]||=[t(`Separated Action`,-1)]]),_:1})]),_:1},8,[`open`])]),_:1}),e(D,{title:`Direction up`,source:`<pf-dropdown v-model:open="open6" text="Dropdown" placement="top">
  <pf-dropdown-item>Link</pf-dropdown-item>
  <pf-dropdown-item component="button">Action</pf-dropdown-item>
  <pf-dropdown-item disabled>Disabled Link</pf-dropdown-item>
  <pf-dropdown-item disabled component="button">Disabled Action</pf-dropdown-item>
  <pf-divider />
  <pf-dropdown-item>Separated Link</pf-dropdown-item>
  <pf-dropdown-item component="button">Separated Action</pf-dropdown-item>
</pf-dropdown>`},{default:n(()=>[e(E,{open:b.value,"onUpdate:open":a[4]||=e=>b.value=e,text:`Dropdown`,placement:`top`},{default:n(()=>[e(u,null,{default:n(()=>[...a[34]||=[t(`Link`,-1)]]),_:1}),e(u,{component:`button`},{default:n(()=>[...a[35]||=[t(`Action`,-1)]]),_:1}),e(u,{disabled:``},{default:n(()=>[...a[36]||=[t(`Disabled Link`,-1)]]),_:1}),e(u,{disabled:``,component:`button`},{default:n(()=>[...a[37]||=[t(`Disabled Action`,-1)]]),_:1}),e(T),e(u,null,{default:n(()=>[...a[38]||=[t(`Separated Link`,-1)]]),_:1}),e(u,{component:`button`},{default:n(()=>[...a[39]||=[t(`Separated Action`,-1)]]),_:1})]),_:1},8,[`open`])]),_:1}),e(D,{title:`With kebab`,source:`<pf-dropdown v-model:open="open7">
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
</pf-dropdown>`},{default:n(()=>[e(E,{open:x.value,"onUpdate:open":a[5]||=e=>x.value=e},{toggle:n(()=>[e(O,{variant:`plain`})]),default:n(()=>[e(u,null,{default:n(()=>[...a[40]||=[t(`Link`,-1)]]),_:1}),e(u,{component:`button`},{default:n(()=>[...a[41]||=[t(`Action`,-1)]]),_:1}),e(u,{disabled:``},{default:n(()=>[...a[42]||=[t(`Disabled Link`,-1)]]),_:1}),e(u,{disabled:``,component:`button`},{default:n(()=>[...a[43]||=[t(`Disabled Action`,-1)]]),_:1}),e(T),e(u,null,{default:n(()=>[...a[44]||=[t(`Separated Link`,-1)]]),_:1}),e(u,{component:`button`},{default:n(()=>[...a[45]||=[t(`Separated Action`,-1)]]),_:1})]),_:1},8,[`open`])]),_:1}),e(D,{title:`Icon only`,source:`<pf-dropdown v-model:open="open8">
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
</pf-dropdown>`},{default:n(()=>[e(E,{open:S.value,"onUpdate:open":a[6]||=e=>S.value=e},{toggle:n(()=>[e(O,{"aria-label":`Applications`,variant:`plain`},{icon:n(()=>[e(f(m))]),_:1})]),default:n(()=>[e(u,null,{default:n(()=>[...a[46]||=[t(`Link`,-1)]]),_:1}),e(u,{component:`button`},{default:n(()=>[...a[47]||=[t(`Action`,-1)]]),_:1}),e(u,{disabled:``},{default:n(()=>[...a[48]||=[t(`Disabled Link`,-1)]]),_:1}),e(u,{disabled:``,component:`button`},{default:n(()=>[...a[49]||=[t(`Disabled Action`,-1)]]),_:1}),e(T),e(u,null,{default:n(()=>[...a[50]||=[t(`Separated Link`,-1)]]),_:1}),e(u,{component:`button`},{default:n(()=>[...a[51]||=[t(`Separated Action`,-1)]]),_:1})]),_:1},8,[`open`])]),_:1}),e(D,{title:`With groups`,source:`<pf-dropdown v-model:open="open9" text="Dropdown">
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
</pf-dropdown>`},{default:n(()=>[e(E,{open:C.value,"onUpdate:open":a[7]||=e=>C.value=e,text:`Dropdown`},{default:n(()=>[e(k,null,{default:n(()=>[e(u,null,{default:n(()=>[...a[52]||=[t(`Link`,-1)]]),_:1}),e(u,{component:`button`},{default:n(()=>[...a[53]||=[t(` Action `,-1)]]),_:1})]),_:1}),e(T,{component:`li`}),e(k,null,{label:n(()=>[...a[54]||=[t(`Group 2`,-1)]]),default:n(()=>[e(u,null,{default:n(()=>[...a[55]||=[t(` Group 2 Link `,-1)]]),_:1}),e(u,{component:`button`},{default:n(()=>[...a[56]||=[t(` Group 2 Action `,-1)]]),_:1})]),_:1}),e(T,{component:`li`}),e(k,null,{label:n(()=>[...a[57]||=[t(`Group 3`,-1)]]),default:n(()=>[e(u,null,{default:n(()=>[...a[58]||=[t(`Group 3 Link`,-1)]]),_:1}),e(u,{component:`button`},{default:n(()=>[...a[59]||=[t(` Group 3 Action Action `,-1)]]),_:1})]),_:1})]),_:1},8,[`open`])]),_:1}),e(D,{title:`With descriptions`,source:`<pf-dropdown v-model:open="open10" text="Dropdown">
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
</pf-dropdown>`},{default:n(()=>[e(E,{open:w.value,"onUpdate:open":a[8]||=e=>w.value=e,text:`Dropdown`},{default:n(()=>[e(u,{description:`This is a description`},{icon:n(()=>[e(f(p))]),default:n(()=>[a[60]||=t(` Link `,-1)]),_:1}),e(u,{component:`button`,description:`This is a very long description that describes the menu item`},{icon:n(()=>[e(f(c))]),default:n(()=>[a[61]||=t(` Action `,-1)]),_:1}),e(u,{disabled:``,description:`Disabled link description`},{default:n(()=>[...a[62]||=[t(` Disabled Link `,-1)]]),_:1}),e(u,{disabled:``,component:`button`,description:`This is a description`},{default:n(()=>[...a[63]||=[t(` Disabled Action `,-1)]]),_:1})]),_:1},8,[`open`])]),_:1}),e(D,{title:`Menu teleported in body`,source:`<pf-dropdown text="Dropdown" append-to="body">
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
</pf-dropdown>`},{default:n(()=>[e(E,{text:`Dropdown`,"append-to":`body`},{default:n(()=>[e(u,null,{default:n(()=>[...a[64]||=[t(`Link`,-1)]]),_:1}),e(u,{component:`button`},{default:n(()=>[...a[65]||=[t(` Action `,-1)]]),_:1}),e(u,{disabled:``},{default:n(()=>[...a[66]||=[t(` Disabled Link `,-1)]]),_:1}),e(u,{disabled:``,component:`button`},{default:n(()=>[...a[67]||=[t(` Disabled Action `,-1)]]),_:1}),e(T),e(u,null,{default:n(()=>[...a[68]||=[t(`Separated Link`,-1)]]),_:1}),e(u,{component:`button`},{default:n(()=>[...a[69]||=[t(` Separated Action `,-1)]]),_:1})]),_:1})]),_:1})]),_:1})}}});export{h as default};