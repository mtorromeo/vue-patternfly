import{M as x}from"./magnifying-glass-icon-be1d4d52.js";import{c as A}from"./createIcon-ecf1880f.js";import{e as et,r as s,f as ot,a as p,o as nt,c as lt,w as e,b as t,u,g as l}from"./index-fd9ab4ce.js";const at={name:"FilterIcon",height:512,width:512,svgPath:"M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z",yOffset:0,xOffset:0},pt=A(at),I=pt,it={name:"CloneIcon",height:512,width:512,svgPath:"M288 448H64V224h64V160H64c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64zm-64-96H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64z",yOffset:0,xOffset:0},rt=A(it),$=rt,ft={name:"PenToSquareIcon",height:512,width:512,svgPath:"M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z",yOffset:0,xOffset:0},ut=A(ft),E=ut,ct={name:"RotateIcon",height:512,width:512,svgPath:"M142.9 142.9c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5c0 0 0 0 0 0H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5c7.7-21.8 20.2-42.3 37.8-59.8zM16 312v7.6 .7V440c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l41.6-41.6c87.6 86.5 228.7 86.2 315.8-1c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.2 62.2-162.7 62.5-225.3 1L185 329c6.9-6.9 8.9-17.2 5.2-26.2s-12.5-14.8-22.2-14.8H48.4h-.7H40c-13.3 0-24 10.7-24 24z",yOffset:0,xOffset:0},st=A(ct),G=st,_t=et({__name:"Toolbar.story",setup(dt){const L=s(!1),D=s(!1),S=s(!1),V=s(!1),B=s(!1),H=s(!1),_=ot({risk:["Low"],status:["New","Pending"]}),O=s(!1),P=s(!1),T=s(1),R=s(20),C=(y,i)=>{if(!y){_.risk=[],_.status=[];return}const w=y.toLowerCase();_[w]=_[w].filter(g=>g!==i)},N=y=>{_[y.toLowerCase()]=[]};return(y,i)=>{const w=p("component-title"),g=p("pf-text-input"),a=p("pf-button"),k=p("pf-input-group"),o=p("pf-toolbar-item"),d=p("pf-toolbar-content"),b=p("pf-toolbar"),m=p("story-canvas"),v=p("pf-toolbar-group"),n=p("pf-select-option"),c=p("pf-select"),h=p("pf-toolbar-toggle-group"),U=p("pf-toolbar-filter"),q=p("pf-kebab-toggle"),f=p("pf-dropdown-item"),z=p("pf-dropdown-separator"),F=p("pf-dropdown"),M=p("pf-overflow-menu-item"),j=p("pf-overflow-menu-group"),W=p("pf-overflow-menu-content"),J=p("pf-overflow-menu-control"),K=p("pf-overflow-menu"),Q=p("pf-divider"),X=p("pf-dropdown-toggle-checkbox"),Y=p("pf-dropdown-toggle"),Z=p("pf-pagination"),tt=p("doc-page");return nt(),lt(tt,{title:"Toolbar"},{default:e(()=>[t(w,{name:"pf-toolbar"}),t(m,{title:"Default",source:`<pf-toolbar>
  <pf-toolbar-content>
    <pf-toolbar-item>
      <pf-input-group>
        <pf-text-input type="search" aria-label="search input example" ></pf-text-input>
        <pf-button variant="control" aria-label="search button for search input">
          <magnifying-glass-icon></magnifying-glass-icon>
        </pf-button>
      </pf-input-group>
    </pf-toolbar-item>
    <pf-toolbar-item>
      <pf-button variant="secondary">
        Action
      </pf-button>
    </pf-toolbar-item>
    <pf-toolbar-item variant="separator" ></pf-toolbar-item>
    <pf-toolbar-item>
      <pf-button variant="primary">
        Action
      </pf-button>
    </pf-toolbar-item>
  </pf-toolbar-content>
</pf-toolbar>`},{default:e(()=>[t(b,null,{default:e(()=>[t(d,null,{default:e(()=>[t(o,null,{default:e(()=>[t(k,null,{default:e(()=>[t(g,{type:"search","aria-label":"search input example"}),t(a,{variant:"control","aria-label":"search button for search input"},{default:e(()=>[t(u(x))]),_:1})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(a,{variant:"secondary"},{default:e(()=>[l(" Action ")]),_:1})]),_:1}),t(o,{variant:"separator"}),t(o,null,{default:e(()=>[t(a,{variant:"primary"},{default:e(()=>[l(" Action ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(m,{title:"Adjusting toolbar inset",source:`<pf-toolbar inset="none" inset-md="sm" inset-xl="2xl" inset-2xl="lg">
  <pf-toolbar-content>
    <pf-toolbar-item>
      <pf-input-group>
        <pf-text-input type="search" aria-label="search input example" ></pf-text-input>
        <pf-button variant="control" aria-label="search button for search input">
          <magnifying-glass-icon></magnifying-glass-icon>
        </pf-button>
      </pf-input-group>
    </pf-toolbar-item>
    <pf-toolbar-item>
      <pf-button variant="secondary">
        Action
      </pf-button>
    </pf-toolbar-item>
    <pf-toolbar-item variant="separator" ></pf-toolbar-item>
    <pf-toolbar-item>
      <pf-button variant="primary">
        Action
      </pf-button>
    </pf-toolbar-item>
  </pf-toolbar-content>
</pf-toolbar>`},{default:e(()=>[t(b,{inset:"none","inset-md":"sm","inset-xl":"2xl","inset-2xl":"lg"},{default:e(()=>[t(d,null,{default:e(()=>[t(o,null,{default:e(()=>[t(k,null,{default:e(()=>[t(g,{type:"search","aria-label":"search input example"}),t(a,{variant:"control","aria-label":"search button for search input"},{default:e(()=>[t(u(x))]),_:1})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(a,{variant:"secondary"},{default:e(()=>[l(" Action ")]),_:1})]),_:1}),t(o,{variant:"separator"}),t(o,null,{default:e(()=>[t(a,{variant:"primary"},{default:e(()=>[l(" Action ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(m,{title:"Adjusting item spacers",source:`<pf-toolbar inset="none" inset-md="sm" inset-xl="2xl" inset-2xl="lg">
  <pf-toolbar-content>
    <pf-toolbar-item spacer="none">
      <pf-button variant="secondary">Action</pf-button>
    </pf-toolbar-item>
    <pf-toolbar-item spacer="sm">
      <pf-button variant="secondary">Action</pf-button>
    </pf-toolbar-item>
    <pf-toolbar-item spacer="md">
      <pf-button variant="secondary">Action</pf-button>
    </pf-toolbar-item>
    <pf-toolbar-item spacer="lg">
      <pf-button variant="secondary">Action</pf-button>
    </pf-toolbar-item>
    <pf-toolbar-item variant="separator" ></pf-toolbar-item>
    <pf-toolbar-item spacer="none" spacer-md="sm" spacer-lg="md" spacer-xl="lg">
      <pf-button variant="secondary">Action</pf-button>
    </pf-toolbar-item>
    <pf-toolbar-item>
      <pf-button variant="primary">Action</pf-button>
    </pf-toolbar-item>
    <pf-toolbar-item variant="separator" ></pf-toolbar-item>
    <pf-toolbar-group space-items="lg">
      <pf-toolbar-item>
        <pf-button variant="secondary">Action</pf-button>
      </pf-toolbar-item>
      <pf-toolbar-item>
        <pf-button variant="secondary">Action</pf-button>
      </pf-toolbar-item>
    </pf-toolbar-group>
  </pf-toolbar-content>
</pf-toolbar>`},{default:e(()=>[t(b,{inset:"none","inset-md":"sm","inset-xl":"2xl","inset-2xl":"lg"},{default:e(()=>[t(d,null,{default:e(()=>[t(o,{spacer:"none"},{default:e(()=>[t(a,{variant:"secondary"},{default:e(()=>[l("Action")]),_:1})]),_:1}),t(o,{spacer:"sm"},{default:e(()=>[t(a,{variant:"secondary"},{default:e(()=>[l("Action")]),_:1})]),_:1}),t(o,{spacer:"md"},{default:e(()=>[t(a,{variant:"secondary"},{default:e(()=>[l("Action")]),_:1})]),_:1}),t(o,{spacer:"lg"},{default:e(()=>[t(a,{variant:"secondary"},{default:e(()=>[l("Action")]),_:1})]),_:1}),t(o,{variant:"separator"}),t(o,{spacer:"none","spacer-md":"sm","spacer-lg":"md","spacer-xl":"lg"},{default:e(()=>[t(a,{variant:"secondary"},{default:e(()=>[l("Action")]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(a,{variant:"primary"},{default:e(()=>[l("Action")]),_:1})]),_:1}),t(o,{variant:"separator"}),t(v,{"space-items":"lg"},{default:e(()=>[t(o,null,{default:e(()=>[t(a,{variant:"secondary"},{default:e(()=>[l("Action")]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(a,{variant:"secondary"},{default:e(()=>[l("Action")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(m,{title:"Groups",source:`<pf-toolbar inset="none" inset-md="sm" inset-xl="2xl" inset-2xl="lg">
  <pf-toolbar-content>
    <pf-toolbar-group variant="filter-group">
      <pf-toolbar-item>
        <pf-select v-model:open="selectExpanded1" @clear="void 0">
          <pf-select-option value="Filter 1" placeholder ></pf-select-option>
          <pf-select-option value="A" ></pf-select-option>
          <pf-select-option value="B" ></pf-select-option>
          <pf-select-option value="C" ></pf-select-option>
        </pf-select>
      </pf-toolbar-item>
      <pf-toolbar-item>
        <pf-select v-model:open="selectExpanded2" @clear="void 0">
          <pf-select-option value="Filter 2" placeholder ></pf-select-option>
          <pf-select-option value="1" ></pf-select-option>
          <pf-select-option value="2" ></pf-select-option>
          <pf-select-option value="3" ></pf-select-option>
        </pf-select>
      </pf-toolbar-item>
      <pf-toolbar-item>
        <pf-select v-model:open="selectExpanded3" @clear="void 0">
          <pf-select-option value="Filter 3" placeholder ></pf-select-option>
          <pf-select-option value="I" ></pf-select-option>
          <pf-select-option value="II" ></pf-select-option>
          <pf-select-option value="III" ></pf-select-option>
        </pf-select>
      </pf-toolbar-item>
    </pf-toolbar-group>
    <pf-toolbar-group variant="icon-button-group">
      <pf-toolbar-item>
        <pf-button variant="plain" aria-label="edit">
          <pen-to-square-icon></pen-to-square-icon>
        </pf-button>
      </pf-toolbar-item>
      <pf-toolbar-item>
        <pf-button variant="plain" aria-label="clone">
          <CloneIcon></CloneIcon>
        </pf-button>
      </pf-toolbar-item>
      <pf-toolbar-item>
        <pf-button variant="plain" aria-label="sync">
          <rotate-icon></rotate-icon>
        </pf-button>
      </pf-toolbar-item>
    </pf-toolbar-group>
    <pf-toolbar-group variant="button-group">
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
</pf-toolbar>`},{default:e(()=>[t(b,{inset:"none","inset-md":"sm","inset-xl":"2xl","inset-2xl":"lg"},{default:e(()=>[t(d,null,{default:e(()=>[t(v,{variant:"filter-group"},{default:e(()=>[t(o,null,{default:e(()=>[t(c,{open:S.value,"onUpdate:open":i[0]||(i[0]=r=>S.value=r),onClear:r=>{}},{default:e(()=>[t(n,{value:"Filter 1",placeholder:""}),t(n,{value:"A"}),t(n,{value:"B"}),t(n,{value:"C"})]),_:1},8,["open"])]),_:1}),t(o,null,{default:e(()=>[t(c,{open:V.value,"onUpdate:open":i[1]||(i[1]=r=>V.value=r),onClear:r=>{}},{default:e(()=>[t(n,{value:"Filter 2",placeholder:""}),t(n,{value:"1"}),t(n,{value:"2"}),t(n,{value:"3"})]),_:1},8,["open"])]),_:1}),t(o,null,{default:e(()=>[t(c,{open:B.value,"onUpdate:open":i[2]||(i[2]=r=>B.value=r),onClear:r=>{}},{default:e(()=>[t(n,{value:"Filter 3",placeholder:""}),t(n,{value:"I"}),t(n,{value:"II"}),t(n,{value:"III"})]),_:1},8,["open"])]),_:1})]),_:1}),t(v,{variant:"icon-button-group"},{default:e(()=>[t(o,null,{default:e(()=>[t(a,{variant:"plain","aria-label":"edit"},{default:e(()=>[t(u(E))]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(a,{variant:"plain","aria-label":"clone"},{default:e(()=>[t(u($))]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(a,{variant:"plain","aria-label":"sync"},{default:e(()=>[t(u(G))]),_:1})]),_:1})]),_:1}),t(v,{variant:"button-group"},{default:e(()=>[t(o,null,{default:e(()=>[t(a,{variant:"primary"},{default:e(()=>[l("Action")]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(a,{variant:"secondary"},{default:e(()=>[l("Secondary")]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(a,{variant:"tertiary"},{default:e(()=>[l("Tertiary")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(m,{title:"Component managed toggle groups",source:`<pf-toolbar class="pf-m-toggle-group-container">
  <pf-toolbar-content>
    <pf-toolbar-toggle-group breakpoint="xl">
      <template #icon>
        <FilterIcon></FilterIcon>
      </template>

      <pf-toolbar-item>
        <pf-input-group>
          <pf-text-input type="search" aria-label="search input example" ></pf-text-input>
          <pf-button variant="control" aria-label="search button for search input">
            <magnifying-glass-icon></magnifying-glass-icon>
          </pf-button>
        </pf-input-group>
      </pf-toolbar-item>

      <pf-toolbar-group variant="filter-group">
        <pf-toolbar-item>
          <pf-select>
            <pf-select-option value="Filter 1" placeholder ></pf-select-option>
            <pf-select-option value="A" ></pf-select-option>
            <pf-select-option value="B" ></pf-select-option>
            <pf-select-option value="C" ></pf-select-option>
          </pf-select>
        </pf-toolbar-item>

        <pf-toolbar-item>
          <pf-select>
            <pf-select-option value="Filter 2" placeholder ></pf-select-option>
            <pf-select-option value="1" ></pf-select-option>
            <pf-select-option value="2" ></pf-select-option>
            <pf-select-option value="3" ></pf-select-option>
          </pf-select>
        </pf-toolbar-item>
      </pf-toolbar-group>
    </pf-toolbar-toggle-group>
  </pf-toolbar-content>
</pf-toolbar>`},{default:e(()=>[t(b,{class:"pf-m-toggle-group-container"},{default:e(()=>[t(d,null,{default:e(()=>[t(h,{breakpoint:"xl"},{icon:e(()=>[t(u(I))]),default:e(()=>[t(o,null,{default:e(()=>[t(k,null,{default:e(()=>[t(g,{type:"search","aria-label":"search input example"}),t(a,{variant:"control","aria-label":"search button for search input"},{default:e(()=>[t(u(x))]),_:1})]),_:1})]),_:1}),t(v,{variant:"filter-group"},{default:e(()=>[t(o,null,{default:e(()=>[t(c,null,{default:e(()=>[t(n,{value:"Filter 1",placeholder:""}),t(n,{value:"A"}),t(n,{value:"B"}),t(n,{value:"C"})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(c,null,{default:e(()=>[t(n,{value:"Filter 2",placeholder:""}),t(n,{value:"1"}),t(n,{value:"2"}),t(n,{value:"3"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(m,{title:"Consumer managed toggle groups",source:`<pf-toolbar v-model:expanded="expanded1" class="pf-m-toggle-group-container">
  <pf-toolbar-content>
    <pf-toolbar-toggle-group breakpoint="xl">
      <template #icon>
        <FilterIcon></FilterIcon>
      </template>

      <pf-toolbar-item>
        <pf-input-group>
          <pf-text-input type="search" aria-label="search input example" ></pf-text-input>
          <pf-button variant="control" aria-label="search button for search input">
            <magnifying-glass-icon></magnifying-glass-icon>
          </pf-button>
        </pf-input-group>
      </pf-toolbar-item>

      <pf-toolbar-group variant="filter-group">
        <pf-toolbar-item>
          <pf-select>
            <pf-select-option value="Filter 1" placeholder ></pf-select-option>
            <pf-select-option value="A" ></pf-select-option>
            <pf-select-option value="B" ></pf-select-option>
            <pf-select-option value="C" ></pf-select-option>
          </pf-select>
        </pf-toolbar-item>

        <pf-toolbar-item>
          <pf-select>
            <pf-select-option value="Filter 2" placeholder ></pf-select-option>
            <pf-select-option value="1" ></pf-select-option>
            <pf-select-option value="2" ></pf-select-option>
            <pf-select-option value="3" ></pf-select-option>
          </pf-select>
        </pf-toolbar-item>
      </pf-toolbar-group>
    </pf-toolbar-toggle-group>
  </pf-toolbar-content>
</pf-toolbar>`},{default:e(()=>[t(b,{expanded:L.value,"onUpdate:expanded":i[3]||(i[3]=r=>L.value=r),class:"pf-m-toggle-group-container"},{default:e(()=>[t(d,null,{default:e(()=>[t(h,{breakpoint:"xl"},{icon:e(()=>[t(u(I))]),default:e(()=>[t(o,null,{default:e(()=>[t(k,null,{default:e(()=>[t(g,{type:"search","aria-label":"search input example"}),t(a,{variant:"control","aria-label":"search button for search input"},{default:e(()=>[t(u(x))]),_:1})]),_:1})]),_:1}),t(v,{variant:"filter-group"},{default:e(()=>[t(o,null,{default:e(()=>[t(c,null,{default:e(()=>[t(n,{value:"Filter 1",placeholder:""}),t(n,{value:"A"}),t(n,{value:"B"}),t(n,{value:"C"})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(c,null,{default:e(()=>[t(n,{value:"Filter 2",placeholder:""}),t(n,{value:"1"}),t(n,{value:"2"}),t(n,{value:"3"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["expanded"])]),_:1}),t(m,{title:"With filters",source:`<pf-toolbar
  v-model:expanded="expanded2"
  class="pf-m-toggle-group-container"
  collapse-listed-filters-breakpoint="xl"
  @clear-all-filters="onDelete"
>
  <pf-toolbar-content>
    <pf-toolbar-toggle-group breakpoint="xl">
      <template #icon>
        <FilterIcon></FilterIcon>
      </template>

      <pf-toolbar-item>
        <pf-input-group>
          <pf-text-input type="search" aria-label="search input example" ></pf-text-input>
          <pf-button variant="control" aria-label="search button for search input">
            <magnifying-glass-icon></magnifying-glass-icon>
          </pf-button>
        </pf-input-group>
      </pf-toolbar-item>

      <pf-toolbar-group variant="filter-group">
        <pf-toolbar-filter
          category="Status"
          :chips="filters.status"
          @delete-chip="onDelete"
          @delete-chip-group="onDeleteGroup"
        >
          <pf-toolbar-item>
            <pf-select>
              <pf-select-option value="Filter 1" placeholder ></pf-select-option>
              <pf-select-option value="A" ></pf-select-option>
              <pf-select-option value="B" ></pf-select-option>
              <pf-select-option value="C" ></pf-select-option>
            </pf-select>
          </pf-toolbar-item>
        

        <pf-toolbar-filter category="Risk" :chips="filters.risk" @delete-chip="onDelete">
          <pf-toolbar-item>
            <pf-select>
              <pf-select-option value="Filter 2" placeholder ></pf-select-option>
              <pf-select-option value="1" ></pf-select-option>
              <pf-select-option value="2" ></pf-select-option>
              <pf-select-option value="3" ></pf-select-option>
            </pf-select>
          </pf-toolbar-item>
        </pf-toolbar-filter>
      </pf-toolbar-group>
    </pf-toolbar-toggle-group>

    <pf-toolbar-group variant="icon-button-group">
      <pf-toolbar-item>
        <pf-button variant="plain" aria-label="edit">
          <pen-to-square-icon></pen-to-square-icon>
        </pf-button>
      </pf-toolbar-item>
      <pf-toolbar-item>
        <pf-button variant="plain" aria-label="clone">
          <CloneIcon></CloneIcon>
        </pf-button>
      </pf-toolbar-item>
      <pf-toolbar-item>
        <pf-button variant="plain" aria-label="sync">
          <rotate-icon></rotate-icon>
        </pf-button>
      </pf-toolbar-item>
    </pf-toolbar-group>

    <pf-toolbar-item>
      <pf-dropdown v-model:open="dropdownOpen" plain>
        <template #toggle>
          <pf-kebab-toggle></pf-kebab-toggle>
        </template>

        <pf-dropdown-item key="link">Link</pf-dropdown-item>
        <pf-dropdown-item key="action" component="button">Action</pf-dropdown-item>
        <pf-dropdown-item key="disabled link" disabled>Disabled Link</pf-dropdown-item>
        <pf-dropdown-item key="disabled action" disabled component="button">Disabled Action</pf-dropdown-item>
        <pf-dropdown-separator key="separator" ></pf-dropdown-separator>
        <pf-dropdown-item key="separated link">Separated Link</pf-dropdown-item>
        <pf-dropdown-item key="separated action" component="button">Separated Action</pf-dropdown-item>
      </pf-dropdown>
    </pf-toolbar-item>
  </pf-toolbar-content>
`},{default:e(()=>[t(b,{expanded:D.value,"onUpdate:expanded":i[5]||(i[5]=r=>D.value=r),class:"pf-m-toggle-group-container","collapse-listed-filters-breakpoint":"xl",onClearAllFilters:C},{default:e(()=>[t(d,null,{default:e(()=>[t(h,{breakpoint:"xl"},{icon:e(()=>[t(u(I))]),default:e(()=>[t(o,null,{default:e(()=>[t(k,null,{default:e(()=>[t(g,{type:"search","aria-label":"search input example"}),t(a,{variant:"control","aria-label":"search button for search input"},{default:e(()=>[t(u(x))]),_:1})]),_:1})]),_:1}),t(v,{variant:"filter-group"},{default:e(()=>[t(U,{category:"Status",chips:_.status,onDeleteChip:C,onDeleteChipGroup:N},{default:e(()=>[t(o,null,{default:e(()=>[t(c,null,{default:e(()=>[t(n,{value:"Filter 1",placeholder:""}),t(n,{value:"A"}),t(n,{value:"B"}),t(n,{value:"C"})]),_:1})]),_:1})]),_:1},8,["chips"]),t(U,{category:"Risk",chips:_.risk,onDeleteChip:C},{default:e(()=>[t(o,null,{default:e(()=>[t(c,null,{default:e(()=>[t(n,{value:"Filter 2",placeholder:""}),t(n,{value:"1"}),t(n,{value:"2"}),t(n,{value:"3"})]),_:1})]),_:1})]),_:1},8,["chips"])]),_:1})]),_:1}),t(v,{variant:"icon-button-group"},{default:e(()=>[t(o,null,{default:e(()=>[t(a,{variant:"plain","aria-label":"edit"},{default:e(()=>[t(u(E))]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(a,{variant:"plain","aria-label":"clone"},{default:e(()=>[t(u($))]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(a,{variant:"plain","aria-label":"sync"},{default:e(()=>[t(u(G))]),_:1})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(F,{open:H.value,"onUpdate:open":i[4]||(i[4]=r=>H.value=r),plain:""},{toggle:e(()=>[t(q)]),default:e(()=>[t(f,{key:"link"},{default:e(()=>[l("Link")]),_:1}),t(f,{key:"action",component:"button"},{default:e(()=>[l("Action")]),_:1}),t(f,{key:"disabled link",disabled:""},{default:e(()=>[l("Disabled Link")]),_:1}),t(f,{key:"disabled action",disabled:"",component:"button"},{default:e(()=>[l("Disabled Action")]),_:1}),t(z,{key:"separator"}),t(f,{key:"separated link"},{default:e(()=>[l("Separated Link")]),_:1}),t(f,{key:"separated action",component:"button"},{default:e(()=>[l("Separated Action")]),_:1})]),_:1},8,["open"])]),_:1})]),_:1})]),_:1},8,["expanded"])]),_:1}),t(m,{title:"Stacked example",source:`<pf-toolbar>
  <pf-toolbar-content>
    <pf-toolbar-toggle-group breakpoint="lg">
      <template #icon>
        <FilterIcon></FilterIcon>
      </template>
      <pf-toolbar-item id="stacked-example-resource-select" variant="label">Resource</pf-toolbar-item>
      <pf-toolbar-item>
        <pf-select>
          <pf-select-option value="Filter 1" placeholder ></pf-select-option>
          <pf-select-option value="A" ></pf-select-option>
          <pf-select-option value="B" ></pf-select-option>
          <pf-select-option value="C" ></pf-select-option>
        </pf-select>
      </pf-toolbar-item>
      <pf-toolbar-item id="stacked-example-status-select" variant="label">Status</pf-toolbar-item>
      <pf-toolbar-item>
        <pf-select>
          <pf-select-option value="Filter 2" placeholder ></pf-select-option>
          <pf-select-option value="1" ></pf-select-option>
          <pf-select-option value="2" ></pf-select-option>
          <pf-select-option value="3" ></pf-select-option>
        </pf-select>
      </pf-toolbar-item>
      <pf-toolbar-item id="stacked-example-type-select" variant="label">Type</pf-toolbar-item>
      <pf-toolbar-item>
        <pf-select>
          <pf-select-option value="Filter 3" placeholder ></pf-select-option>
          <pf-select-option value="I" ></pf-select-option>
          <pf-select-option value="II" ></pf-select-option>
          <pf-select-option value="III" ></pf-select-option>
        </pf-select>
      </pf-toolbar-item>
    </pf-toolbar-toggle-group>
    <pf-toolbar-item variant="overflow-menu">
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
          <pf-dropdown v-model:open="kebabIsOpen" plain>
            <template #toggle>
              <pf-kebab-toggle></pf-kebab-toggle>
            </template>
            <pf-dropdown-item key="link">Link</pf-dropdown-item>
            <pf-dropdown-item key="action" component="button">Action</pf-dropdown-item>
            <pf-dropdown-item key="disabled link" disabled>Disabled Link</pf-dropdown-item>
            <pf-dropdown-item key="disabled action" disabled component="button">Disabled Action</pf-dropdown-item>
            <pf-dropdown-separator key="separator" ></pf-dropdown-separator>
            <pf-dropdown-item key="separated link">Separated Link</pf-dropdown-item>
            <pf-dropdown-item key="separated action" component="button">Separated Action</pf-dropdown-item>
          </pf-dropdown>
        </pf-overflow-menu-control>
      </pf-overflow-menu>
    </pf-toolbar-item>
  </pf-toolbar-content>
</pf-toolbar>
<pf-divider></pf-divider>
<pf-toolbar>
  <pf-toolbar-content>
    <pf-toolbar-item variant="bulk-select">
      <pf-dropdown v-model:open="splitButtonDropdownIsOpen">
        <template #toggle>
          <pf-dropdown-toggle id="stacked-example-toggle">
            <template #buttons>
              <pf-dropdown-toggle-checkbox
                id="example-checkbox-1"
                key="split-checkbox"
                aria-label="Select all" />
            </template>
          </pf-dropdown-toggle>
        </template>
        <pf-dropdown-item key="link">Link</pf-dropdown-item>
        <pf-dropdown-item key="action" component="button">Action</pf-dropdown-item>
        <pf-dropdown-item key="disabled link" disabled>Disabled Link</pf-dropdown-item>
        <pf-dropdown-item key="disabled action" disabled component="button">Disabled Action</pf-dropdown-item>
      </pf-dropdown>
    </pf-toolbar-item>
    <pf-toolbar-item variant="pagination" :align="{ default: 'alignRight' }">
      <pf-pagination
        v-model:page="page"
        v-model:per-page="perPage"
        :count="37"
        widget-id="pagination-options-menu-top" />
    </pf-toolbar-item>
  </pf-toolbar-content>
</pf-toolbar>`},{default:e(()=>[t(b,null,{default:e(()=>[t(d,null,{default:e(()=>[t(h,{breakpoint:"lg"},{icon:e(()=>[t(u(I))]),default:e(()=>[t(o,{id:"stacked-example-resource-select",variant:"label"},{default:e(()=>[l("Resource")]),_:1}),t(o,null,{default:e(()=>[t(c,null,{default:e(()=>[t(n,{value:"Filter 1",placeholder:""}),t(n,{value:"A"}),t(n,{value:"B"}),t(n,{value:"C"})]),_:1})]),_:1}),t(o,{id:"stacked-example-status-select",variant:"label"},{default:e(()=>[l("Status")]),_:1}),t(o,null,{default:e(()=>[t(c,null,{default:e(()=>[t(n,{value:"Filter 2",placeholder:""}),t(n,{value:"1"}),t(n,{value:"2"}),t(n,{value:"3"})]),_:1})]),_:1}),t(o,{id:"stacked-example-type-select",variant:"label"},{default:e(()=>[l("Type")]),_:1}),t(o,null,{default:e(()=>[t(c,null,{default:e(()=>[t(n,{value:"Filter 3",placeholder:""}),t(n,{value:"I"}),t(n,{value:"II"}),t(n,{value:"III"})]),_:1})]),_:1})]),_:1}),t(o,{variant:"overflow-menu"},{default:e(()=>[t(K,{breakpoint:"2xl"},{default:e(()=>[t(W,null,{default:e(()=>[t(j,{type:"button"},{default:e(()=>[t(M,null,{default:e(()=>[t(a,{variant:"primary"},{default:e(()=>[l("Primary")]),_:1})]),_:1}),t(M,null,{default:e(()=>[t(a,{variant:"secondary"},{default:e(()=>[l("Secondary")]),_:1})]),_:1})]),_:1})]),_:1}),t(J,{"additional-options":""},{default:e(()=>[t(F,{open:O.value,"onUpdate:open":i[6]||(i[6]=r=>O.value=r),plain:""},{toggle:e(()=>[t(q)]),default:e(()=>[t(f,{key:"link"},{default:e(()=>[l("Link")]),_:1}),t(f,{key:"action",component:"button"},{default:e(()=>[l("Action")]),_:1}),t(f,{key:"disabled link",disabled:""},{default:e(()=>[l("Disabled Link")]),_:1}),t(f,{key:"disabled action",disabled:"",component:"button"},{default:e(()=>[l("Disabled Action")]),_:1}),t(z,{key:"separator"}),t(f,{key:"separated link"},{default:e(()=>[l("Separated Link")]),_:1}),t(f,{key:"separated action",component:"button"},{default:e(()=>[l("Separated Action")]),_:1})]),_:1},8,["open"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(Q),t(b,null,{default:e(()=>[t(d,null,{default:e(()=>[t(o,{variant:"bulk-select"},{default:e(()=>[t(F,{open:P.value,"onUpdate:open":i[7]||(i[7]=r=>P.value=r)},{toggle:e(()=>[t(Y,{id:"stacked-example-toggle"},{buttons:e(()=>[t(X,{id:"example-checkbox-1",key:"split-checkbox","aria-label":"Select all"})]),_:1})]),default:e(()=>[t(f,{key:"link"},{default:e(()=>[l("Link")]),_:1}),t(f,{key:"action",component:"button"},{default:e(()=>[l("Action")]),_:1}),t(f,{key:"disabled link",disabled:""},{default:e(()=>[l("Disabled Link")]),_:1}),t(f,{key:"disabled action",disabled:"",component:"button"},{default:e(()=>[l("Disabled Action")]),_:1})]),_:1},8,["open"])]),_:1}),t(o,{variant:"pagination",align:{default:"alignRight"}},{default:e(()=>[t(Z,{page:T.value,"onUpdate:page":i[8]||(i[8]=r=>T.value=r),"per-page":R.value,"onUpdate:perPage":i[9]||(i[9]=r=>R.value=r),count:37,"widget-id":"pagination-options-menu-top"},null,8,["page","per-page"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}});export{_t as default};
