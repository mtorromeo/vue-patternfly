import{M as w}from"./magnifying-glass-icon-B58xw7Zh.js";import{f as L,g as h,r as m,h as tt,a as i,c as nt,o as et,w as n,b as t,u,e as a,d as ot}from"./index-CiyZyzwL.js";const lt={name:"FilterIcon",height:512,width:512,svgPath:"M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z",yOffset:0,xOffset:0},I=L(lt),at={name:"CloneIcon",height:512,width:512,svgPath:"M288 448L64 448l0-224 64 0 0-64-64 0c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-64-64 0 0 64zm-64-96l224 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L224 0c-35.3 0-64 28.7-64 64l0 224c0 35.3 28.7 64 64 64z",yOffset:0,xOffset:0},V=L(at),pt={name:"PenToSquareIcon",height:512,width:512,svgPath:"M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z",yOffset:0,xOffset:0},j=L(pt),it={name:"RotateIcon",height:512,width:512,svgPath:"M142.9 142.9c-17.5 17.5-30.1 38-37.8 59.8c-5.9 16.7-24.2 25.4-40.8 19.5s-25.4-24.2-19.5-40.8C55.6 150.7 73.2 122 97.6 97.6c87.2-87.2 228.3-87.5 315.8-1L455 55c6.9-6.9 17.2-8.9 26.2-5.2s14.8 12.5 14.8 22.2l0 128c0 13.3-10.7 24-24 24l-8.4 0c0 0 0 0 0 0L344 224c-9.7 0-18.5-5.8-22.2-14.8s-1.7-19.3 5.2-26.2l41.1-41.1c-62.6-61.5-163.1-61.2-225.3 1zM16 312c0-13.3 10.7-24 24-24l7.6 0 .7 0L168 288c9.7 0 18.5 5.8 22.2 14.8s1.7 19.3-5.2 26.2l-41.1 41.1c62.6 61.5 163.1 61.2 225.3-1c17.5-17.5 30.1-38 37.8-59.8c5.9-16.7 24.2-25.4 40.8-19.5s25.4 24.2 19.5 40.8c-10.8 30.6-28.4 59.3-52.9 83.8c-87.2 87.2-228.3 87.5-315.8 1L57 457c-6.9 6.9-17.2 8.9-26.2 5.2S16 449.7 16 440l0-119.6 0-.7 0-7.6z",yOffset:0,xOffset:0},W=L(it),dt=h({__name:"Toolbar.story",setup(rt){const T=m(!1),P=m(!1),B=m(!1),O=m(!1),U=m(!1),z=m(!1),_=tt({risk:["Low"],status:["New","Pending"]}),G=m(!1),M=m(!1),E=m(1),R=m(20),C=(k,e)=>{if(!k){_.risk=[],_.status=[];return}const s=k.toLowerCase();_[s]=_[s].filter(y=>y!==e)},$=k=>{_[k?.toLowerCase()]=[]};return(k,e)=>{const s=i("component-info"),y=i("pf-text-input"),p=i("pf-button"),x=i("pf-input-group"),o=i("pf-toolbar-item"),c=i("pf-toolbar-content"),v=i("pf-toolbar"),g=i("story-canvas"),b=i("pf-toolbar-group"),l=i("pf-select-option"),d=i("pf-select"),A=i("pf-toolbar-toggle-group"),q=i("pf-toolbar-filter"),F=i("pf-menu-toggle"),f=i("pf-dropdown-item"),D=i("pf-divider"),S=i("pf-dropdown"),N=i("pf-overflow-menu-item"),H=i("pf-overflow-menu-group"),J=i("pf-overflow-menu-content"),K=i("pf-overflow-menu-control"),Q=i("pf-overflow-menu"),X=i("pf-menu-toggle-checkbox"),Y=i("pf-pagination"),Z=i("doc-page");return et(),nt(Z,{name:"Components/Toolbar.story.vue",title:"Toolbar"},{description:n(()=>[...e[11]||(e[11]=[a("A ",-1),ot("b",null,"toolbar",-1),a(" allows a user to manage and manipulate a data set. Data can be presented in any valid presentation, a table, a list, or a data visualization (chart), for example. The toolbar responsively accommodates controls and displays applied filters in label groups.",-1)])]),apidocs:n(()=>[t(s,{name:"PfToolbar"}),t(s,{name:"PfToolbarLabelGroupContent"}),t(s,{name:"PfToolbarContent"}),t(s,{name:"PfToolbarExpandableContent"}),t(s,{name:"PfToolbarFilter"}),t(s,{name:"PfToolbarGroup"}),t(s,{name:"PfToolbarItem"}),t(s,{name:"PfToolbarToggleGroup"})]),default:n(()=>[t(g,{title:"Default",source:`<pf-toolbar>
  <pf-toolbar-content>
    <pf-toolbar-item>
      <pf-input-group>
        <pf-text-input type="search" aria-label="search input example" />
        <pf-button variant="control" aria-label="search button for search input">
          <template #icon>
            <magnifying-glass-icon />
          </template>
        </pf-button>
      </pf-input-group>
    </pf-toolbar-item>
    <pf-toolbar-item>
      <pf-button variant="secondary"> Action </pf-button>
    </pf-toolbar-item>
    <pf-toolbar-item variant="separator" />
    <pf-toolbar-item>
      <pf-button variant="primary"> Action </pf-button>
    </pf-toolbar-item>
  </pf-toolbar-content>
</pf-toolbar>`},{default:n(()=>[t(v,null,{default:n(()=>[t(c,null,{default:n(()=>[t(o,null,{default:n(()=>[t(x,null,{default:n(()=>[t(y,{type:"search","aria-label":"search input example"}),t(p,{variant:"control","aria-label":"search button for search input"},{icon:n(()=>[t(u(w))]),_:1})]),_:1})]),_:1}),t(o,null,{default:n(()=>[t(p,{variant:"secondary"},{default:n(()=>[...e[12]||(e[12]=[a(" Action ",-1)])]),_:1})]),_:1}),t(o,{variant:"separator"}),t(o,null,{default:n(()=>[t(p,{variant:"primary"},{default:n(()=>[...e[13]||(e[13]=[a(" Action ",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(g,{title:"Adjusting toolbar inset",source:`<pf-toolbar inset="none" inset-md="sm" inset-xl="2xl" inset-2xl="lg">
  <pf-toolbar-content>
    <pf-toolbar-item>
      <pf-input-group>
        <pf-text-input type="search" aria-label="search input example" />
        <pf-button variant="control" aria-label="search button for search input">
          <template #icon>
            <magnifying-glass-icon />
          </template>
        </pf-button>
      </pf-input-group>
    </pf-toolbar-item>
    <pf-toolbar-item>
      <pf-button variant="secondary"> Action </pf-button>
    </pf-toolbar-item>
    <pf-toolbar-item variant="separator" />
    <pf-toolbar-item>
      <pf-button variant="primary"> Action </pf-button>
    </pf-toolbar-item>
  </pf-toolbar-content>
</pf-toolbar>`},{default:n(()=>[t(v,{inset:"none","inset-md":"sm","inset-xl":"2xl","inset-2xl":"lg"},{default:n(()=>[t(c,null,{default:n(()=>[t(o,null,{default:n(()=>[t(x,null,{default:n(()=>[t(y,{type:"search","aria-label":"search input example"}),t(p,{variant:"control","aria-label":"search button for search input"},{icon:n(()=>[t(u(w))]),_:1})]),_:1})]),_:1}),t(o,null,{default:n(()=>[t(p,{variant:"secondary"},{default:n(()=>[...e[14]||(e[14]=[a(" Action ",-1)])]),_:1})]),_:1}),t(o,{variant:"separator"}),t(o,null,{default:n(()=>[t(p,{variant:"primary"},{default:n(()=>[...e[15]||(e[15]=[a(" Action ",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(g,{title:"Toolbar item spacers",source:`<pf-toolbar inset="none" inset-md="sm" inset-xl="2xl" inset-2xl="lg">
  <pf-toolbar-content>
    <pf-toolbar-group variant="action-group">
      <pf-toolbar-item>
        <pf-button variant="secondary">Action</pf-button>
      </pf-toolbar-item>
      <pf-toolbar-item>
        <pf-button variant="secondary">Action</pf-button>
      </pf-toolbar-item>
      <pf-toolbar-item>
        <pf-button variant="secondary">Action</pf-button>
      </pf-toolbar-item>
      <pf-toolbar-item>
        <pf-button variant="secondary">Action</pf-button>
      </pf-toolbar-item>
    </pf-toolbar-group>
    <pf-toolbar-item variant="separator" />
    <pf-toolbar-group variant="action-group" gap-lg="sm">
      <pf-toolbar-item>
        <pf-button variant="secondary">Action</pf-button>
      </pf-toolbar-item>
      <pf-toolbar-item>
        <pf-button variant="primary">Action</pf-button>
      </pf-toolbar-item>
    </pf-toolbar-group>
    <pf-toolbar-item variant="separator" />
    <pf-toolbar-group variant="action-group" gap-lg="lg">
      <pf-toolbar-item>
        <pf-button variant="secondary">Action</pf-button>
      </pf-toolbar-item>
      <pf-toolbar-item>
        <pf-button variant="secondary">Action</pf-button>
      </pf-toolbar-item>
    </pf-toolbar-group>
  </pf-toolbar-content>
</pf-toolbar>`},{default:n(()=>[t(v,{inset:"none","inset-md":"sm","inset-xl":"2xl","inset-2xl":"lg"},{default:n(()=>[t(c,null,{default:n(()=>[t(b,{variant:"action-group"},{default:n(()=>[t(o,null,{default:n(()=>[t(p,{variant:"secondary"},{default:n(()=>[...e[16]||(e[16]=[a("Action",-1)])]),_:1})]),_:1}),t(o,null,{default:n(()=>[t(p,{variant:"secondary"},{default:n(()=>[...e[17]||(e[17]=[a("Action",-1)])]),_:1})]),_:1}),t(o,null,{default:n(()=>[t(p,{variant:"secondary"},{default:n(()=>[...e[18]||(e[18]=[a("Action",-1)])]),_:1})]),_:1}),t(o,null,{default:n(()=>[t(p,{variant:"secondary"},{default:n(()=>[...e[19]||(e[19]=[a("Action",-1)])]),_:1})]),_:1})]),_:1}),t(o,{variant:"separator"}),t(b,{variant:"action-group","gap-lg":"sm"},{default:n(()=>[t(o,null,{default:n(()=>[t(p,{variant:"secondary"},{default:n(()=>[...e[20]||(e[20]=[a("Action",-1)])]),_:1})]),_:1}),t(o,null,{default:n(()=>[t(p,{variant:"primary"},{default:n(()=>[...e[21]||(e[21]=[a("Action",-1)])]),_:1})]),_:1})]),_:1}),t(o,{variant:"separator"}),t(b,{variant:"action-group","gap-lg":"lg"},{default:n(()=>[t(o,null,{default:n(()=>[t(p,{variant:"secondary"},{default:n(()=>[...e[22]||(e[22]=[a("Action",-1)])]),_:1})]),_:1}),t(o,null,{default:n(()=>[t(p,{variant:"secondary"},{default:n(()=>[...e[23]||(e[23]=[a("Action",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(g,{title:"Groups",source:`<pf-toolbar inset="none" inset-md="sm" inset-xl="2xl" inset-2xl="lg">
  <pf-toolbar-content>
    <pf-toolbar-group variant="filter-group">
      <pf-toolbar-item>
        <pf-select v-model:open="selectExpanded1">
          <pf-select-option value="Filter 1" />
          <pf-select-option value="A" />
          <pf-select-option value="B" />
          <pf-select-option value="C" />
        </pf-select>
      </pf-toolbar-item>
      <pf-toolbar-item>
        <pf-select v-model:open="selectExpanded2">
          <pf-select-option value="Filter 2" />
          <pf-select-option value="1" />
          <pf-select-option value="2" />
          <pf-select-option value="3" />
        </pf-select>
      </pf-toolbar-item>
      <pf-toolbar-item>
        <pf-select v-model:open="selectExpanded3">
          <pf-select-option value="Filter 3" />
          <pf-select-option value="I" />
          <pf-select-option value="II" />
          <pf-select-option value="III" />
        </pf-select>
      </pf-toolbar-item>
    </pf-toolbar-group>
    <pf-toolbar-group>
      <pf-toolbar-item>
        <pf-button variant="plain" aria-label="edit">
          <template #icon>
            <pen-to-square-icon />
          </template>
        </pf-button>
      </pf-toolbar-item>
      <pf-toolbar-item>
        <pf-button variant="plain" aria-label="clone">
          <template #icon>
            <clone-icon />
          </template>
        </pf-button>
      </pf-toolbar-item>
      <pf-toolbar-item>
        <pf-button variant="plain" aria-label="sync">
          <template #icon>
            <rotate-icon />
          </template>
        </pf-button>
      </pf-toolbar-item>
    </pf-toolbar-group>
    <pf-toolbar-group>
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
</pf-toolbar>`},{default:n(()=>[t(v,{inset:"none","inset-md":"sm","inset-xl":"2xl","inset-2xl":"lg"},{default:n(()=>[t(c,null,{default:n(()=>[t(b,{variant:"filter-group"},{default:n(()=>[t(o,null,{default:n(()=>[t(d,{open:B.value,"onUpdate:open":e[0]||(e[0]=r=>B.value=r)},{default:n(()=>[t(l,{value:"Filter 1"}),t(l,{value:"A"}),t(l,{value:"B"}),t(l,{value:"C"})]),_:1},8,["open"])]),_:1}),t(o,null,{default:n(()=>[t(d,{open:O.value,"onUpdate:open":e[1]||(e[1]=r=>O.value=r)},{default:n(()=>[t(l,{value:"Filter 2"}),t(l,{value:"1"}),t(l,{value:"2"}),t(l,{value:"3"})]),_:1},8,["open"])]),_:1}),t(o,null,{default:n(()=>[t(d,{open:U.value,"onUpdate:open":e[2]||(e[2]=r=>U.value=r)},{default:n(()=>[t(l,{value:"Filter 3"}),t(l,{value:"I"}),t(l,{value:"II"}),t(l,{value:"III"})]),_:1},8,["open"])]),_:1})]),_:1}),t(b,null,{default:n(()=>[t(o,null,{default:n(()=>[t(p,{variant:"plain","aria-label":"edit"},{icon:n(()=>[t(u(j))]),_:1})]),_:1}),t(o,null,{default:n(()=>[t(p,{variant:"plain","aria-label":"clone"},{icon:n(()=>[t(u(V))]),_:1})]),_:1}),t(o,null,{default:n(()=>[t(p,{variant:"plain","aria-label":"sync"},{icon:n(()=>[t(u(W))]),_:1})]),_:1})]),_:1}),t(b,null,{default:n(()=>[t(o,null,{default:n(()=>[t(p,{variant:"primary"},{default:n(()=>[...e[24]||(e[24]=[a("Action",-1)])]),_:1})]),_:1}),t(o,null,{default:n(()=>[t(p,{variant:"secondary"},{default:n(()=>[...e[25]||(e[25]=[a("Secondary",-1)])]),_:1})]),_:1}),t(o,null,{default:n(()=>[t(p,{variant:"tertiary"},{default:n(()=>[...e[26]||(e[26]=[a("Tertiary",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(g,{title:"Component managed toggle groups",source:`<pf-toolbar class="pf-m-toggle-group-container">
  <pf-toolbar-content>
    <pf-toolbar-toggle-group xl>
      <template #icon>
        <filter-icon />
      </template>

      <pf-toolbar-item>
        <pf-input-group>
          <pf-text-input type="search" aria-label="search input example" />
          <pf-button variant="control" aria-label="search button for search input">
            <template #icon>
              <magnifying-glass-icon />
            </template>
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
</pf-toolbar>`},{default:n(()=>[t(v,{class:"pf-m-toggle-group-container"},{default:n(()=>[t(c,null,{default:n(()=>[t(A,{xl:""},{icon:n(()=>[t(u(I))]),default:n(()=>[t(o,null,{default:n(()=>[t(x,null,{default:n(()=>[t(y,{type:"search","aria-label":"search input example"}),t(p,{variant:"control","aria-label":"search button for search input"},{icon:n(()=>[t(u(w))]),_:1})]),_:1})]),_:1}),t(b,{variant:"filter-group"},{default:n(()=>[t(o,null,{default:n(()=>[t(d,null,{default:n(()=>[t(l,{value:"Filter 1"}),t(l,{value:"A"}),t(l,{value:"B"}),t(l,{value:"C"})]),_:1})]),_:1}),t(o,null,{default:n(()=>[t(d,null,{default:n(()=>[t(l,{value:"Filter 2"}),t(l,{value:"1"}),t(l,{value:"2"}),t(l,{value:"3"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(g,{title:"Consumer managed toggle groups",source:`<pf-toolbar v-model:expanded="expanded1" class="pf-m-toggle-group-container">
  <pf-toolbar-content>
    <pf-toolbar-toggle-group xl>
      <template #icon>
        <FilterIcon />
      </template>

      <pf-toolbar-item>
        <pf-input-group>
          <pf-text-input type="search" aria-label="search input example" />
          <pf-button variant="control" aria-label="search button for search input">
            <template #icon>
              <magnifying-glass-icon />
            </template>
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
</pf-toolbar>`},{default:n(()=>[t(v,{expanded:T.value,"onUpdate:expanded":e[3]||(e[3]=r=>T.value=r),class:"pf-m-toggle-group-container"},{default:n(()=>[t(c,null,{default:n(()=>[t(A,{xl:""},{icon:n(()=>[t(u(I))]),default:n(()=>[t(o,null,{default:n(()=>[t(x,null,{default:n(()=>[t(y,{type:"search","aria-label":"search input example"}),t(p,{variant:"control","aria-label":"search button for search input"},{icon:n(()=>[t(u(w))]),_:1})]),_:1})]),_:1}),t(b,{variant:"filter-group"},{default:n(()=>[t(o,null,{default:n(()=>[t(d,null,{default:n(()=>[t(l,{value:"Filter 1"}),t(l,{value:"A"}),t(l,{value:"B"}),t(l,{value:"C"})]),_:1})]),_:1}),t(o,null,{default:n(()=>[t(d,null,{default:n(()=>[t(l,{value:"Filter 2"}),t(l,{value:"1"}),t(l,{value:"2"}),t(l,{value:"3"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["expanded"])]),_:1}),t(g,{title:"With filters",source:`<pf-toolbar v-model:expanded="expanded2" class="pf-m-toggle-group-container" collapse-listed-filters-breakpoint="xl" @clear-all-filters="onDelete()">
  <pf-toolbar-content>
    <pf-toolbar-toggle-group xl>
      <template #icon>
        <FilterIcon />
      </template>

      <pf-toolbar-item>
        <pf-input-group>
          <pf-text-input type="search" aria-label="search input example" />
          <pf-button variant="control" aria-label="search button for search input">
            <template #icon>
              <magnifying-glass-icon />
            </template>
          </pf-button>
        </pf-input-group>
      </pf-toolbar-item>

      <pf-toolbar-group variant="filter-group">
        <pf-toolbar-filter category="Status" :labels="filters.status" @delete-label="onDelete" @delete-label-group="onDeleteGroup">
          <pf-toolbar-item>
            <pf-select>
              <pf-select-option value="Filter 1" />
              <pf-select-option value="A" />
              <pf-select-option value="B" />
              <pf-select-option value="C" />
            </pf-select>
          </pf-toolbar-item>
        </pf-toolbar-filter>

        <pf-toolbar-filter category="Risk" :labels="filters.risk" @delete-label="onDelete">
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

    <pf-toolbar-group>
      <pf-toolbar-item>
        <pf-button variant="plain" aria-label="edit">
          <template #icon>
            <pen-to-square-icon />
          </template>
        </pf-button>
      </pf-toolbar-item>
      <pf-toolbar-item>
        <pf-button variant="plain" aria-label="clone">
          <template #icon>
            <clone-icon />
          </template>
        </pf-button>
      </pf-toolbar-item>
      <pf-toolbar-item>
        <pf-button variant="plain" aria-label="sync">
          <template #icon>
            <rotate-icon />
          </template>
        </pf-button>
      </pf-toolbar-item>
    </pf-toolbar-group>

    <pf-toolbar-item>
      <pf-dropdown v-model:open="dropdownOpen">
        <template #toggle>
          <pf-menu-toggle variant="plain" />
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
</pf-toolbar>`},{default:n(()=>[t(v,{expanded:P.value,"onUpdate:expanded":e[5]||(e[5]=r=>P.value=r),class:"pf-m-toggle-group-container","collapse-listed-filters-breakpoint":"xl",onClearAllFilters:e[6]||(e[6]=r=>C())},{default:n(()=>[t(c,null,{default:n(()=>[t(A,{xl:""},{icon:n(()=>[t(u(I))]),default:n(()=>[t(o,null,{default:n(()=>[t(x,null,{default:n(()=>[t(y,{type:"search","aria-label":"search input example"}),t(p,{variant:"control","aria-label":"search button for search input"},{icon:n(()=>[t(u(w))]),_:1})]),_:1})]),_:1}),t(b,{variant:"filter-group"},{default:n(()=>[t(q,{category:"Status",labels:_.status,onDeleteLabel:C,onDeleteLabelGroup:$},{default:n(()=>[t(o,null,{default:n(()=>[t(d,null,{default:n(()=>[t(l,{value:"Filter 1"}),t(l,{value:"A"}),t(l,{value:"B"}),t(l,{value:"C"})]),_:1})]),_:1})]),_:1},8,["labels"]),t(q,{category:"Risk",labels:_.risk,onDeleteLabel:C},{default:n(()=>[t(o,null,{default:n(()=>[t(d,null,{default:n(()=>[t(l,{value:"Filter 2"}),t(l,{value:"1"}),t(l,{value:"2"}),t(l,{value:"3"})]),_:1})]),_:1})]),_:1},8,["labels"])]),_:1})]),_:1}),t(b,null,{default:n(()=>[t(o,null,{default:n(()=>[t(p,{variant:"plain","aria-label":"edit"},{icon:n(()=>[t(u(j))]),_:1})]),_:1}),t(o,null,{default:n(()=>[t(p,{variant:"plain","aria-label":"clone"},{icon:n(()=>[t(u(V))]),_:1})]),_:1}),t(o,null,{default:n(()=>[t(p,{variant:"plain","aria-label":"sync"},{icon:n(()=>[t(u(W))]),_:1})]),_:1})]),_:1}),t(o,null,{default:n(()=>[t(S,{open:z.value,"onUpdate:open":e[4]||(e[4]=r=>z.value=r)},{toggle:n(()=>[t(F,{variant:"plain"})]),default:n(()=>[t(f,{key:"link"},{default:n(()=>[...e[27]||(e[27]=[a("Link",-1)])]),_:1}),t(f,{key:"action",component:"button"},{default:n(()=>[...e[28]||(e[28]=[a("Action",-1)])]),_:1}),t(f,{key:"disabled link",disabled:""},{default:n(()=>[...e[29]||(e[29]=[a("Disabled Link",-1)])]),_:1}),t(f,{key:"disabled action",disabled:"",component:"button"},{default:n(()=>[...e[30]||(e[30]=[a("Disabled Action",-1)])]),_:1}),t(D,{key:"separator",component:"li"}),t(f,{key:"separated link"},{default:n(()=>[...e[31]||(e[31]=[a("Separated Link",-1)])]),_:1}),t(f,{key:"separated action",component:"button"},{default:n(()=>[...e[32]||(e[32]=[a("Separated Action",-1)])]),_:1})]),_:1},8,["open"])]),_:1})]),_:1})]),_:1},8,["expanded"])]),_:1}),t(g,{title:"Stacked example",source:`<pf-toolbar>
  <pf-toolbar-content>
    <pf-toolbar-toggle-group lg>
      <template #icon>
        <filter-icon />
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
          <pf-dropdown v-model:open="kebabIsOpen">
            <template #toggle>
              <pf-menu-toggle variant="plain" />
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
    <pf-toolbar-item>
      <pf-dropdown v-model:open="splitButtonDropdownIsOpen">
        <template #toggle>
          <pf-menu-toggle>
            <pf-menu-toggle-checkbox aria-label="Select all" />
          </pf-menu-toggle>
        </template>
        <pf-dropdown-item key="link">Link</pf-dropdown-item>
        <pf-dropdown-item key="action" component="button">Action</pf-dropdown-item>
        <pf-dropdown-item key="disabled link" disabled>Disabled Link</pf-dropdown-item>
        <pf-dropdown-item key="disabled action" disabled component="button">Disabled Action</pf-dropdown-item>
      </pf-dropdown>
    </pf-toolbar-item>
    <pf-toolbar-item variant="pagination" align="end">
      <pf-pagination v-model:page="page" v-model:per-page="perPage" :count="37" widget-id="pagination-options-menu-top" />
    </pf-toolbar-item>
  </pf-toolbar-content>
</pf-toolbar>`},{default:n(()=>[t(v,null,{default:n(()=>[t(c,null,{default:n(()=>[t(A,{lg:""},{icon:n(()=>[t(u(I))]),default:n(()=>[t(o,{id:"stacked-example-resource-select",variant:"label"},{default:n(()=>[...e[33]||(e[33]=[a("Resource",-1)])]),_:1}),t(o,null,{default:n(()=>[t(d,null,{default:n(()=>[t(l,{value:"Filter 1"}),t(l,{value:"A"}),t(l,{value:"B"}),t(l,{value:"C"})]),_:1})]),_:1}),t(o,{id:"stacked-example-status-select",variant:"label"},{default:n(()=>[...e[34]||(e[34]=[a("Status",-1)])]),_:1}),t(o,null,{default:n(()=>[t(d,null,{default:n(()=>[t(l,{value:"Filter 2"}),t(l,{value:"1"}),t(l,{value:"2"}),t(l,{value:"3"})]),_:1})]),_:1}),t(o,{id:"stacked-example-type-select",variant:"label"},{default:n(()=>[...e[35]||(e[35]=[a("Type",-1)])]),_:1}),t(o,null,{default:n(()=>[t(d,null,{default:n(()=>[t(l,{value:"Filter 3"}),t(l,{value:"I"}),t(l,{value:"II"}),t(l,{value:"III"})]),_:1})]),_:1})]),_:1}),t(o,null,{default:n(()=>[t(Q,{breakpoint:"2xl"},{default:n(()=>[t(J,null,{default:n(()=>[t(H,{type:"button"},{default:n(()=>[t(N,null,{default:n(()=>[t(p,{variant:"primary"},{default:n(()=>[...e[36]||(e[36]=[a("Primary",-1)])]),_:1})]),_:1}),t(N,null,{default:n(()=>[t(p,{variant:"secondary"},{default:n(()=>[...e[37]||(e[37]=[a("Secondary",-1)])]),_:1})]),_:1})]),_:1})]),_:1}),t(K,{"additional-options":""},{default:n(()=>[t(S,{open:G.value,"onUpdate:open":e[7]||(e[7]=r=>G.value=r)},{toggle:n(()=>[t(F,{variant:"plain"})]),default:n(()=>[t(f,{key:"link"},{default:n(()=>[...e[38]||(e[38]=[a("Link",-1)])]),_:1}),t(f,{key:"action",component:"button"},{default:n(()=>[...e[39]||(e[39]=[a("Action",-1)])]),_:1}),t(f,{key:"disabled link",disabled:""},{default:n(()=>[...e[40]||(e[40]=[a("Disabled Link",-1)])]),_:1}),t(f,{key:"disabled action",disabled:"",component:"button"},{default:n(()=>[...e[41]||(e[41]=[a("Disabled Action",-1)])]),_:1}),t(D,{key:"separator",component:"li"}),t(f,{key:"separated link"},{default:n(()=>[...e[42]||(e[42]=[a("Separated Link",-1)])]),_:1}),t(f,{key:"separated action",component:"button"},{default:n(()=>[...e[43]||(e[43]=[a("Separated Action",-1)])]),_:1})]),_:1},8,["open"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(D),t(v,null,{default:n(()=>[t(c,null,{default:n(()=>[t(o,null,{default:n(()=>[t(S,{open:M.value,"onUpdate:open":e[8]||(e[8]=r=>M.value=r)},{toggle:n(()=>[t(F,null,{default:n(()=>[t(X,{"aria-label":"Select all"})]),_:1})]),default:n(()=>[t(f,{key:"link"},{default:n(()=>[...e[44]||(e[44]=[a("Link",-1)])]),_:1}),t(f,{key:"action",component:"button"},{default:n(()=>[...e[45]||(e[45]=[a("Action",-1)])]),_:1}),t(f,{key:"disabled link",disabled:""},{default:n(()=>[...e[46]||(e[46]=[a("Disabled Link",-1)])]),_:1}),t(f,{key:"disabled action",disabled:"",component:"button"},{default:n(()=>[...e[47]||(e[47]=[a("Disabled Action",-1)])]),_:1})]),_:1},8,["open"])]),_:1}),t(o,{variant:"pagination",align:"end"},{default:n(()=>[t(Y,{page:E.value,"onUpdate:page":e[9]||(e[9]=r=>E.value=r),"per-page":R.value,"onUpdate:perPage":e[10]||(e[10]=r=>R.value=r),count:37,"widget-id":"pagination-options-menu-top"},null,8,["page","per-page"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}});export{dt as default};
