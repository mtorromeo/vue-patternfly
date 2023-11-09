import{M as x}from"./magnifying-glass-icon-fe6fbe67.js";import{m as I,e as tt,r as s,f as et,a as p,o as nt,c as ot,w as e,b as t,u as f,g as a}from"./index-9df331c0.js";import{E as $}from"./ellipsis-vertical-icon-2750981f.js";const at={name:"FilterIcon",height:512,width:512,svgPath:"M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z",yOffset:0,xOffset:0},lt=I(at),A=lt,pt={name:"CloneIcon",height:512,width:512,svgPath:"M288 448H64V224h64V160H64c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64zm-64-96H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64z",yOffset:0,xOffset:0},rt=I(pt),q=rt,it={name:"PenToSquareIcon",height:512,width:512,svgPath:"M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z",yOffset:0,xOffset:0},ft=I(it),G=ft,ut={name:"RotateIcon",height:512,width:512,svgPath:"M142.9 142.9c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5c0 0 0 0 0 0H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5c7.7-21.8 20.2-42.3 37.8-59.8zM16 312v7.6 .7V440c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l41.6-41.6c87.6 86.5 228.7 86.2 315.8-1c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.2 62.2-162.7 62.5-225.3 1L185 329c6.9-6.9 8.9-17.2 5.2-26.2s-12.5-14.8-22.2-14.8H48.4h-.7H40c-13.3 0-24 10.7-24 24z",yOffset:0,xOffset:0},ct=I(ut),N=ct,vt=tt({__name:"Toolbar.story",setup(st){const S=s(!1),V=s(!1),B=s(!1),H=s(!1),O=s(!1),P=s(!1),_=et({risk:["Low"],status:["New","Pending"]}),T=s(!1),U=s(!1),z=s(1),E=s(20),C=(g,r)=>{if(!g){_.risk=[],_.status=[];return}const w=g.toLowerCase();_[w]=_[w].filter(y=>y!==r)},j=g=>{_[g==null?void 0:g.toLowerCase()]=[]};return(g,r)=>{const w=p("component-title"),y=p("pf-text-input"),l=p("pf-button"),k=p("pf-input-group"),n=p("pf-toolbar-item"),d=p("pf-toolbar-content"),b=p("pf-toolbar"),m=p("story-canvas"),v=p("pf-toolbar-group"),o=p("pf-select-option"),c=p("pf-select"),h=p("pf-toolbar-toggle-group"),M=p("pf-toolbar-filter"),F=p("pf-menu-toggle"),u=p("pf-dropdown-item"),L=p("pf-divider"),D=p("pf-dropdown"),R=p("pf-overflow-menu-item"),W=p("pf-overflow-menu-group"),J=p("pf-overflow-menu-content"),K=p("pf-overflow-menu-control"),Q=p("pf-overflow-menu"),X=p("pf-menu-toggle-checkbox"),Y=p("pf-pagination"),Z=p("doc-page");return nt(),ot(Z,{title:"Toolbar"},{default:e(()=>[t(w,{name:"pf-toolbar"}),t(m,{title:"Default",source:`<pf-toolbar>
  <pf-toolbar-content>
    <pf-toolbar-item>
      <pf-input-group>
        <pf-text-input type="search" aria-label="search input example" />
        <pf-button variant="control" aria-label="search button for search input">
          <magnifying-glass-icon />
        </pf-button>
      </pf-input-group>
    </pf-toolbar-item>
    <pf-toolbar-item>
      <pf-button variant="secondary">
        Action
      </pf-button>
    </pf-toolbar-item>
    <pf-toolbar-item variant="separator" />
    <pf-toolbar-item>
      <pf-button variant="primary">
        Action
      </pf-button>
    </pf-toolbar-item>
  </pf-toolbar-content>
</pf-toolbar>`},{default:e(()=>[t(b,null,{default:e(()=>[t(d,null,{default:e(()=>[t(n,null,{default:e(()=>[t(k,null,{default:e(()=>[t(y,{type:"search","aria-label":"search input example"}),t(l,{variant:"control","aria-label":"search button for search input"},{default:e(()=>[t(f(x))]),_:1})]),_:1})]),_:1}),t(n,null,{default:e(()=>[t(l,{variant:"secondary"},{default:e(()=>[a(" Action ")]),_:1})]),_:1}),t(n,{variant:"separator"}),t(n,null,{default:e(()=>[t(l,{variant:"primary"},{default:e(()=>[a(" Action ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(m,{title:"Adjusting toolbar inset",source:`<pf-toolbar inset="none" inset-md="sm" inset-xl="2xl" inset-xl2="lg">
  <pf-toolbar-content>
    <pf-toolbar-item>
      <pf-input-group>
        <pf-text-input type="search" aria-label="search input example" />
        <pf-button variant="control" aria-label="search button for search input">
          <magnifying-glass-icon />
        </pf-button>
      </pf-input-group>
    </pf-toolbar-item>
    <pf-toolbar-item>
      <pf-button variant="secondary">
        Action
      </pf-button>
    </pf-toolbar-item>
    <pf-toolbar-item variant="separator" />
    <pf-toolbar-item>
      <pf-button variant="primary">
        Action
      </pf-button>
    </pf-toolbar-item>
  </pf-toolbar-content>
</pf-toolbar>`},{default:e(()=>[t(b,{inset:"none","inset-md":"sm","inset-xl":"2xl","inset-xl2":"lg"},{default:e(()=>[t(d,null,{default:e(()=>[t(n,null,{default:e(()=>[t(k,null,{default:e(()=>[t(y,{type:"search","aria-label":"search input example"}),t(l,{variant:"control","aria-label":"search button for search input"},{default:e(()=>[t(f(x))]),_:1})]),_:1})]),_:1}),t(n,null,{default:e(()=>[t(l,{variant:"secondary"},{default:e(()=>[a(" Action ")]),_:1})]),_:1}),t(n,{variant:"separator"}),t(n,null,{default:e(()=>[t(l,{variant:"primary"},{default:e(()=>[a(" Action ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(m,{title:"Adjusting item spacers",source:`<pf-toolbar inset="none" inset-md="sm" inset-xl="2xl" inset-xl2="lg">
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
    <pf-toolbar-item variant="separator" />
    <pf-toolbar-item spacer="none" spacer-md="sm" spacer-lg="md" spacer-xl="lg">
      <pf-button variant="secondary">Action</pf-button>
    </pf-toolbar-item>
    <pf-toolbar-item>
      <pf-button variant="primary">Action</pf-button>
    </pf-toolbar-item>
    <pf-toolbar-item variant="separator" />
    <pf-toolbar-group space-items="lg">
      <pf-toolbar-item>
        <pf-button variant="secondary">Action</pf-button>
      </pf-toolbar-item>
      <pf-toolbar-item>
        <pf-button variant="secondary">Action</pf-button>
      </pf-toolbar-item>
    </pf-toolbar-group>
  </pf-toolbar-content>
</pf-toolbar>`},{default:e(()=>[t(b,{inset:"none","inset-md":"sm","inset-xl":"2xl","inset-xl2":"lg"},{default:e(()=>[t(d,null,{default:e(()=>[t(n,{spacer:"none"},{default:e(()=>[t(l,{variant:"secondary"},{default:e(()=>[a("Action")]),_:1})]),_:1}),t(n,{spacer:"sm"},{default:e(()=>[t(l,{variant:"secondary"},{default:e(()=>[a("Action")]),_:1})]),_:1}),t(n,{spacer:"md"},{default:e(()=>[t(l,{variant:"secondary"},{default:e(()=>[a("Action")]),_:1})]),_:1}),t(n,{spacer:"lg"},{default:e(()=>[t(l,{variant:"secondary"},{default:e(()=>[a("Action")]),_:1})]),_:1}),t(n,{variant:"separator"}),t(n,{spacer:"none","spacer-md":"sm","spacer-lg":"md","spacer-xl":"lg"},{default:e(()=>[t(l,{variant:"secondary"},{default:e(()=>[a("Action")]),_:1})]),_:1}),t(n,null,{default:e(()=>[t(l,{variant:"primary"},{default:e(()=>[a("Action")]),_:1})]),_:1}),t(n,{variant:"separator"}),t(v,{"space-items":"lg"},{default:e(()=>[t(n,null,{default:e(()=>[t(l,{variant:"secondary"},{default:e(()=>[a("Action")]),_:1})]),_:1}),t(n,null,{default:e(()=>[t(l,{variant:"secondary"},{default:e(()=>[a("Action")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(m,{title:"Groups",source:`<pf-toolbar inset="none" inset-md="sm" inset-xl="2xl" inset-xl2="lg">
  <pf-toolbar-content>
    <pf-toolbar-group variant="filter-group">
      <pf-toolbar-item>
        <pf-select v-model:open="selectExpanded1" @clear="void 0">
          <pf-select-option value="Filter 1" />
          <pf-select-option value="A" />
          <pf-select-option value="B" />
          <pf-select-option value="C" />
        </pf-select>
      </pf-toolbar-item>
      <pf-toolbar-item>
        <pf-select v-model:open="selectExpanded2" @clear="void 0">
          <pf-select-option value="Filter 2" />
          <pf-select-option value="1" />
          <pf-select-option value="2" />
          <pf-select-option value="3" />
        </pf-select>
      </pf-toolbar-item>
      <pf-toolbar-item>
        <pf-select v-model:open="selectExpanded3" @clear="void 0">
          <pf-select-option value="Filter 3" />
          <pf-select-option value="I" />
          <pf-select-option value="II" />
          <pf-select-option value="III" />
        </pf-select>
      </pf-toolbar-item>
    </pf-toolbar-group>
    <pf-toolbar-group variant="icon-button-group">
      <pf-toolbar-item>
        <pf-button variant="plain" aria-label="edit">
          <pen-to-square-icon />
        </pf-button>
      </pf-toolbar-item>
      <pf-toolbar-item>
        <pf-button variant="plain" aria-label="clone">
          <CloneIcon />
        </pf-button>
      </pf-toolbar-item>
      <pf-toolbar-item>
        <pf-button variant="plain" aria-label="sync">
          <rotate-icon />
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
</pf-toolbar>`},{default:e(()=>[t(b,{inset:"none","inset-md":"sm","inset-xl":"2xl","inset-xl2":"lg"},{default:e(()=>[t(d,null,{default:e(()=>[t(v,{variant:"filter-group"},{default:e(()=>[t(n,null,{default:e(()=>[t(c,{open:B.value,"onUpdate:open":r[0]||(r[0]=i=>B.value=i),onClear:i=>{}},{default:e(()=>[t(o,{value:"Filter 1"}),t(o,{value:"A"}),t(o,{value:"B"}),t(o,{value:"C"})]),_:1},8,["open"])]),_:1}),t(n,null,{default:e(()=>[t(c,{open:H.value,"onUpdate:open":r[1]||(r[1]=i=>H.value=i),onClear:i=>{}},{default:e(()=>[t(o,{value:"Filter 2"}),t(o,{value:"1"}),t(o,{value:"2"}),t(o,{value:"3"})]),_:1},8,["open"])]),_:1}),t(n,null,{default:e(()=>[t(c,{open:O.value,"onUpdate:open":r[2]||(r[2]=i=>O.value=i),onClear:i=>{}},{default:e(()=>[t(o,{value:"Filter 3"}),t(o,{value:"I"}),t(o,{value:"II"}),t(o,{value:"III"})]),_:1},8,["open"])]),_:1})]),_:1}),t(v,{variant:"icon-button-group"},{default:e(()=>[t(n,null,{default:e(()=>[t(l,{variant:"plain","aria-label":"edit"},{default:e(()=>[t(f(G))]),_:1})]),_:1}),t(n,null,{default:e(()=>[t(l,{variant:"plain","aria-label":"clone"},{default:e(()=>[t(f(q))]),_:1})]),_:1}),t(n,null,{default:e(()=>[t(l,{variant:"plain","aria-label":"sync"},{default:e(()=>[t(f(N))]),_:1})]),_:1})]),_:1}),t(v,{variant:"button-group"},{default:e(()=>[t(n,null,{default:e(()=>[t(l,{variant:"primary"},{default:e(()=>[a("Action")]),_:1})]),_:1}),t(n,null,{default:e(()=>[t(l,{variant:"secondary"},{default:e(()=>[a("Secondary")]),_:1})]),_:1}),t(n,null,{default:e(()=>[t(l,{variant:"tertiary"},{default:e(()=>[a("Tertiary")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(m,{title:"Component managed toggle groups",source:`<pf-toolbar class="pf-m-toggle-group-container">
  <pf-toolbar-content>
    <pf-toolbar-toggle-group xl>
      <template #icon>
        <FilterIcon />
      </template>

      <pf-toolbar-item>
        <pf-input-group>
          <pf-text-input type="search" aria-label="search input example" />
          <pf-button variant="control" aria-label="search button for search input">
            <magnifying-glass-icon />
          </pf-button>
        </pf-input-group>
      </pf-toolbar-item>

      <pf-toolbar-group variant="filter-group">
        <pf-toolbar-item>
          <pf-select>
            <pf-select-option value="Filter 1" />
            <pf-select-option value="A" />
            <pf-select-option value="B" />
            <pf-select-option value="C" />
          </pf-select>
        </pf-toolbar-item>

        <pf-toolbar-item>
          <pf-select>
            <pf-select-option value="Filter 2" />
            <pf-select-option value="1" />
            <pf-select-option value="2" />
            <pf-select-option value="3" />
          </pf-select>
        </pf-toolbar-item>
      </pf-toolbar-group>
    </pf-toolbar-toggle-group>
  </pf-toolbar-content>
</pf-toolbar>`},{default:e(()=>[t(b,{class:"pf-m-toggle-group-container"},{default:e(()=>[t(d,null,{default:e(()=>[t(h,{xl:""},{icon:e(()=>[t(f(A))]),default:e(()=>[t(n,null,{default:e(()=>[t(k,null,{default:e(()=>[t(y,{type:"search","aria-label":"search input example"}),t(l,{variant:"control","aria-label":"search button for search input"},{default:e(()=>[t(f(x))]),_:1})]),_:1})]),_:1}),t(v,{variant:"filter-group"},{default:e(()=>[t(n,null,{default:e(()=>[t(c,null,{default:e(()=>[t(o,{value:"Filter 1"}),t(o,{value:"A"}),t(o,{value:"B"}),t(o,{value:"C"})]),_:1})]),_:1}),t(n,null,{default:e(()=>[t(c,null,{default:e(()=>[t(o,{value:"Filter 2"}),t(o,{value:"1"}),t(o,{value:"2"}),t(o,{value:"3"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(m,{title:"Consumer managed toggle groups",source:`<pf-toolbar v-model:expanded="expanded1" class="pf-m-toggle-group-container">
  <pf-toolbar-content>
    <pf-toolbar-toggle-group xl>
      <template #icon>
        <FilterIcon />
      </template>

      <pf-toolbar-item>
        <pf-input-group>
          <pf-text-input type="search" aria-label="search input example" />
          <pf-button variant="control" aria-label="search button for search input">
            <magnifying-glass-icon />
          </pf-button>
        </pf-input-group>
      </pf-toolbar-item>

      <pf-toolbar-group variant="filter-group">
        <pf-toolbar-item>
          <pf-select>
            <pf-select-option value="Filter 1" />
            <pf-select-option value="A" />
            <pf-select-option value="B" />
            <pf-select-option value="C" />
          </pf-select>
        </pf-toolbar-item>

        <pf-toolbar-item>
          <pf-select>
            <pf-select-option value="Filter 2" />
            <pf-select-option value="1" />
            <pf-select-option value="2" />
            <pf-select-option value="3" />
          </pf-select>
        </pf-toolbar-item>
      </pf-toolbar-group>
    </pf-toolbar-toggle-group>
  </pf-toolbar-content>
</pf-toolbar>`},{default:e(()=>[t(b,{expanded:S.value,"onUpdate:expanded":r[3]||(r[3]=i=>S.value=i),class:"pf-m-toggle-group-container"},{default:e(()=>[t(d,null,{default:e(()=>[t(h,{xl:""},{icon:e(()=>[t(f(A))]),default:e(()=>[t(n,null,{default:e(()=>[t(k,null,{default:e(()=>[t(y,{type:"search","aria-label":"search input example"}),t(l,{variant:"control","aria-label":"search button for search input"},{default:e(()=>[t(f(x))]),_:1})]),_:1})]),_:1}),t(v,{variant:"filter-group"},{default:e(()=>[t(n,null,{default:e(()=>[t(c,null,{default:e(()=>[t(o,{value:"Filter 1"}),t(o,{value:"A"}),t(o,{value:"B"}),t(o,{value:"C"})]),_:1})]),_:1}),t(n,null,{default:e(()=>[t(c,null,{default:e(()=>[t(o,{value:"Filter 2"}),t(o,{value:"1"}),t(o,{value:"2"}),t(o,{value:"3"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["expanded"])]),_:1}),t(m,{title:"With filters",source:`<pf-toolbar
  v-model:expanded="expanded2"
  class="pf-m-toggle-group-container"
  collapse-listed-filters-breakpoint="xl"
  @clear-all-filters="onDelete()"
>
  <pf-toolbar-content>
    <pf-toolbar-toggle-group xl>
      <template #icon>
        <FilterIcon />
      </template>

      <pf-toolbar-item>
        <pf-input-group>
          <pf-text-input type="search" aria-label="search input example" />
          <pf-button variant="control" aria-label="search button for search input">
            <magnifying-glass-icon />
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
              <pf-select-option value="Filter 1" />
              <pf-select-option value="A" />
              <pf-select-option value="B" />
              <pf-select-option value="C" />
            </pf-select>
          </pf-toolbar-item>
        </pf-toolbar-filter>

        <pf-toolbar-filter category="Risk" :chips="filters.risk" @delete-chip="onDelete">
          <pf-toolbar-item>
            <pf-select>
              <pf-select-option value="Filter 2" />
              <pf-select-option value="1" />
              <pf-select-option value="2" />
              <pf-select-option value="3" />
            </pf-select>
          </pf-toolbar-item>
        </pf-toolbar-filter>
      </pf-toolbar-group>
    </pf-toolbar-toggle-group>

    <pf-toolbar-group variant="icon-button-group">
      <pf-toolbar-item>
        <pf-button variant="plain" aria-label="edit">
          <pen-to-square-icon />
        </pf-button>
      </pf-toolbar-item>
      <pf-toolbar-item>
        <pf-button variant="plain" aria-label="clone">
          <CloneIcon />
        </pf-button>
      </pf-toolbar-item>
      <pf-toolbar-item>
        <pf-button variant="plain" aria-label="sync">
          <rotate-icon />
        </pf-button>
      </pf-toolbar-item>
    </pf-toolbar-group>

    <pf-toolbar-item>
      <pf-dropdown v-model:open="dropdownOpen">
        <template #toggle>
          <pf-menu-toggle variant="plain">
            <ellipsis-vertical-icon />
          </pf-menu-toggle>
        </template>

        <pf-dropdown-item key="link">Link</pf-dropdown-item>
        <pf-dropdown-item key="action" component="button">Action</pf-dropdown-item>
        <pf-dropdown-item key="disabled link" disabled>Disabled Link</pf-dropdown-item>
        <pf-dropdown-item key="disabled action" disabled component="button">Disabled Action</pf-dropdown-item>
        <pf-divider key="separator" component="li" />
        <pf-dropdown-item key="separated link">Separated Link</pf-dropdown-item>
        <pf-dropdown-item key="separated action" component="button">Separated Action</pf-dropdown-item>
      </pf-dropdown>
    </pf-toolbar-item>
  </pf-toolbar-content>
</pf-toolbar>`},{default:e(()=>[t(b,{expanded:V.value,"onUpdate:expanded":r[5]||(r[5]=i=>V.value=i),class:"pf-m-toggle-group-container","collapse-listed-filters-breakpoint":"xl",onClearAllFilters:r[6]||(r[6]=i=>C())},{default:e(()=>[t(d,null,{default:e(()=>[t(h,{xl:""},{icon:e(()=>[t(f(A))]),default:e(()=>[t(n,null,{default:e(()=>[t(k,null,{default:e(()=>[t(y,{type:"search","aria-label":"search input example"}),t(l,{variant:"control","aria-label":"search button for search input"},{default:e(()=>[t(f(x))]),_:1})]),_:1})]),_:1}),t(v,{variant:"filter-group"},{default:e(()=>[t(M,{category:"Status",chips:_.status,onDeleteChip:C,onDeleteChipGroup:j},{default:e(()=>[t(n,null,{default:e(()=>[t(c,null,{default:e(()=>[t(o,{value:"Filter 1"}),t(o,{value:"A"}),t(o,{value:"B"}),t(o,{value:"C"})]),_:1})]),_:1})]),_:1},8,["chips"]),t(M,{category:"Risk",chips:_.risk,onDeleteChip:C},{default:e(()=>[t(n,null,{default:e(()=>[t(c,null,{default:e(()=>[t(o,{value:"Filter 2"}),t(o,{value:"1"}),t(o,{value:"2"}),t(o,{value:"3"})]),_:1})]),_:1})]),_:1},8,["chips"])]),_:1})]),_:1}),t(v,{variant:"icon-button-group"},{default:e(()=>[t(n,null,{default:e(()=>[t(l,{variant:"plain","aria-label":"edit"},{default:e(()=>[t(f(G))]),_:1})]),_:1}),t(n,null,{default:e(()=>[t(l,{variant:"plain","aria-label":"clone"},{default:e(()=>[t(f(q))]),_:1})]),_:1}),t(n,null,{default:e(()=>[t(l,{variant:"plain","aria-label":"sync"},{default:e(()=>[t(f(N))]),_:1})]),_:1})]),_:1}),t(n,null,{default:e(()=>[t(D,{open:P.value,"onUpdate:open":r[4]||(r[4]=i=>P.value=i)},{toggle:e(()=>[t(F,{variant:"plain"},{default:e(()=>[t(f($))]),_:1})]),default:e(()=>[t(u,{key:"link"},{default:e(()=>[a("Link")]),_:1}),t(u,{key:"action",component:"button"},{default:e(()=>[a("Action")]),_:1}),t(u,{key:"disabled link",disabled:""},{default:e(()=>[a("Disabled Link")]),_:1}),t(u,{key:"disabled action",disabled:"",component:"button"},{default:e(()=>[a("Disabled Action")]),_:1}),t(L,{key:"separator",component:"li"}),t(u,{key:"separated link"},{default:e(()=>[a("Separated Link")]),_:1}),t(u,{key:"separated action",component:"button"},{default:e(()=>[a("Separated Action")]),_:1})]),_:1},8,["open"])]),_:1})]),_:1})]),_:1},8,["expanded"])]),_:1}),t(m,{title:"Stacked example",source:`<pf-toolbar>
  <pf-toolbar-content>
    <pf-toolbar-toggle-group lg>
      <template #icon>
        <FilterIcon />
      </template>
      <pf-toolbar-item id="stacked-example-resource-select" variant="label">Resource</pf-toolbar-item>
      <pf-toolbar-item>
        <pf-select>
          <pf-select-option value="Filter 1" />
          <pf-select-option value="A" />
          <pf-select-option value="B" />
          <pf-select-option value="C" />
        </pf-select>
      </pf-toolbar-item>
      <pf-toolbar-item id="stacked-example-status-select" variant="label">Status</pf-toolbar-item>
      <pf-toolbar-item>
        <pf-select>
          <pf-select-option value="Filter 2" />
          <pf-select-option value="1" />
          <pf-select-option value="2" />
          <pf-select-option value="3" />
        </pf-select>
      </pf-toolbar-item>
      <pf-toolbar-item id="stacked-example-type-select" variant="label">Type</pf-toolbar-item>
      <pf-toolbar-item>
        <pf-select>
          <pf-select-option value="Filter 3" />
          <pf-select-option value="I" />
          <pf-select-option value="II" />
          <pf-select-option value="III" />
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
          <pf-dropdown v-model:open="kebabIsOpen">
            <template #toggle>
              <pf-menu-toggle variant="plain">
                <ellipsis-vertical-icon />
              </pf-menu-toggle>
            </template>
            <pf-dropdown-item key="link">Link</pf-dropdown-item>
            <pf-dropdown-item key="action" component="button">Action</pf-dropdown-item>
            <pf-dropdown-item key="disabled link" disabled>Disabled Link</pf-dropdown-item>
            <pf-dropdown-item key="disabled action" disabled component="button">Disabled Action</pf-dropdown-item>
            <pf-divider key="separator" component="li" />
            <pf-dropdown-item key="separated link">Separated Link</pf-dropdown-item>
            <pf-dropdown-item key="separated action" component="button">Separated Action</pf-dropdown-item>
          </pf-dropdown>
        </pf-overflow-menu-control>
      </pf-overflow-menu>
    </pf-toolbar-item>
  </pf-toolbar-content>
</pf-toolbar>
<pf-divider />
<pf-toolbar>
  <pf-toolbar-content>
    <pf-toolbar-item variant="bulk-select">
      <pf-dropdown v-model:open="splitButtonDropdownIsOpen">
        <template #toggle>
          <pf-menu-toggle split-button="checkbox">
            <pf-menu-toggle-checkbox aria-label="Select all" />
          </pf-menu-toggle>
        </template>
        <pf-dropdown-item key="link">Link</pf-dropdown-item>
        <pf-dropdown-item key="action" component="button">Action</pf-dropdown-item>
        <pf-dropdown-item key="disabled link" disabled>Disabled Link</pf-dropdown-item>
        <pf-dropdown-item key="disabled action" disabled component="button">Disabled Action</pf-dropdown-item>
      </pf-dropdown>
    </pf-toolbar-item>
    <pf-toolbar-item variant="pagination" align="right">
      <pf-pagination
        v-model:page="page"
        v-model:per-page="perPage"
        :count="37"
        widget-id="pagination-options-menu-top" />
    </pf-toolbar-item>
  </pf-toolbar-content>
</pf-toolbar>`},{default:e(()=>[t(b,null,{default:e(()=>[t(d,null,{default:e(()=>[t(h,{lg:""},{icon:e(()=>[t(f(A))]),default:e(()=>[t(n,{id:"stacked-example-resource-select",variant:"label"},{default:e(()=>[a("Resource")]),_:1}),t(n,null,{default:e(()=>[t(c,null,{default:e(()=>[t(o,{value:"Filter 1"}),t(o,{value:"A"}),t(o,{value:"B"}),t(o,{value:"C"})]),_:1})]),_:1}),t(n,{id:"stacked-example-status-select",variant:"label"},{default:e(()=>[a("Status")]),_:1}),t(n,null,{default:e(()=>[t(c,null,{default:e(()=>[t(o,{value:"Filter 2"}),t(o,{value:"1"}),t(o,{value:"2"}),t(o,{value:"3"})]),_:1})]),_:1}),t(n,{id:"stacked-example-type-select",variant:"label"},{default:e(()=>[a("Type")]),_:1}),t(n,null,{default:e(()=>[t(c,null,{default:e(()=>[t(o,{value:"Filter 3"}),t(o,{value:"I"}),t(o,{value:"II"}),t(o,{value:"III"})]),_:1})]),_:1})]),_:1}),t(n,{variant:"overflow-menu"},{default:e(()=>[t(Q,{breakpoint:"2xl"},{default:e(()=>[t(J,null,{default:e(()=>[t(W,{type:"button"},{default:e(()=>[t(R,null,{default:e(()=>[t(l,{variant:"primary"},{default:e(()=>[a("Primary")]),_:1})]),_:1}),t(R,null,{default:e(()=>[t(l,{variant:"secondary"},{default:e(()=>[a("Secondary")]),_:1})]),_:1})]),_:1})]),_:1}),t(K,{"additional-options":""},{default:e(()=>[t(D,{open:T.value,"onUpdate:open":r[7]||(r[7]=i=>T.value=i)},{toggle:e(()=>[t(F,{variant:"plain"},{default:e(()=>[t(f($))]),_:1})]),default:e(()=>[t(u,{key:"link"},{default:e(()=>[a("Link")]),_:1}),t(u,{key:"action",component:"button"},{default:e(()=>[a("Action")]),_:1}),t(u,{key:"disabled link",disabled:""},{default:e(()=>[a("Disabled Link")]),_:1}),t(u,{key:"disabled action",disabled:"",component:"button"},{default:e(()=>[a("Disabled Action")]),_:1}),t(L,{key:"separator",component:"li"}),t(u,{key:"separated link"},{default:e(()=>[a("Separated Link")]),_:1}),t(u,{key:"separated action",component:"button"},{default:e(()=>[a("Separated Action")]),_:1})]),_:1},8,["open"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(L),t(b,null,{default:e(()=>[t(d,null,{default:e(()=>[t(n,{variant:"bulk-select"},{default:e(()=>[t(D,{open:U.value,"onUpdate:open":r[8]||(r[8]=i=>U.value=i)},{toggle:e(()=>[t(F,{"split-button":"checkbox"},{default:e(()=>[t(X,{"aria-label":"Select all"})]),_:1})]),default:e(()=>[t(u,{key:"link"},{default:e(()=>[a("Link")]),_:1}),t(u,{key:"action",component:"button"},{default:e(()=>[a("Action")]),_:1}),t(u,{key:"disabled link",disabled:""},{default:e(()=>[a("Disabled Link")]),_:1}),t(u,{key:"disabled action",disabled:"",component:"button"},{default:e(()=>[a("Disabled Action")]),_:1})]),_:1},8,["open"])]),_:1}),t(n,{variant:"pagination",align:"right"},{default:e(()=>[t(Y,{page:z.value,"onUpdate:page":r[9]||(r[9]=i=>z.value=i),"per-page":E.value,"onUpdate:perPage":r[10]||(r[10]=i=>E.value=i),count:37,"widget-id":"pagination-options-menu-top"},null,8,["page","per-page"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}});export{vt as default};
