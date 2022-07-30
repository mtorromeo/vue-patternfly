import{S as k}from"./search-icon.21f9c165.js";import{c as A}from"./createIcon.e6f94ec4.js";import{e as et,r as s,f as ot,a as p,o as nt,c as lt,w as e,b as t,u as c,j as l}from"./index.61b3793e.js";const at={name:"FilterIcon",height:512,width:512,svgPath:"M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z",yOffset:0,xOffset:0},pt=A(at),I=pt,it={name:"CloneIcon",height:512,width:512,svgPath:"M464 0c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48H176c-26.51 0-48-21.49-48-48V48c0-26.51 21.49-48 48-48h288M176 416c-44.112 0-80-35.888-80-80V128H48c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48h288c26.51 0 48-21.49 48-48v-48H176z",yOffset:0,xOffset:0},rt=A(it),R=rt,ft={name:"EditIcon",height:512,width:576,svgPath:"M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z",yOffset:0,xOffset:0},ct=A(ft),G=ct,ut={name:"SyncIcon",height:512,width:512,svgPath:"M440.65 12.57l4 82.77A247.16 247.16 0 0 0 255.83 8C134.73 8 33.91 94.92 12.29 209.82A12 12 0 0 0 24.09 224h49.05a12 12 0 0 0 11.67-9.26 175.91 175.91 0 0 1 317-56.94l-101.46-4.86a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12H500a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12h-47.37a12 12 0 0 0-11.98 12.57zM255.83 432a175.61 175.61 0 0 1-146-77.8l101.8 4.87a12 12 0 0 0 12.57-12v-47.4a12 12 0 0 0-12-12H12a12 12 0 0 0-12 12V500a12 12 0 0 0 12 12h47.35a12 12 0 0 0 12-12.6l-4.15-82.57A247.17 247.17 0 0 0 255.83 504c121.11 0 221.93-86.92 243.55-201.82a12 12 0 0 0-11.8-14.18h-49.05a12 12 0 0 0-11.67 9.26A175.86 175.86 0 0 1 255.83 432z",yOffset:0,xOffset:0},st=A(ut),j=st,dt=l(" Action "),bt=l(" Action "),_t=l(" Action "),mt=l(" Action "),vt=l("Action"),gt=l("Action"),ht=l("Action"),yt=l("Action"),kt=l("Action"),xt=l("Action"),wt=l("Action"),It=l("Action"),At=l("Action"),Ct=l("Secondary"),Ft=l("Tertiary"),St=l("Link"),Dt=l("Action"),Lt=l("Disabled Link"),Bt=l("Disabled Action"),Et=l("Separated Link"),Ot=l("Separated Action"),Vt=l("Resource"),Ut=l("Status"),Pt=l("Type"),Ht=l("Primary"),zt=l("Secondary"),Mt=l("Link"),Tt=l("Action"),$t=l("Disabled Link"),Rt=l("Disabled Action"),Gt=l("Separated Link"),jt=l("Separated Action"),Nt=l("Link"),Wt=l("Action"),qt=l("Disabled Link"),Jt=l("Disabled Action"),Zt=et({__name:"Toolbar.story",setup(Kt){const S=s(!1),D=s(!1),L=s(!1),B=s(!1),E=s(!1),O=s(!1),v=ot({risk:["Low"],status:["New","Pending"]}),V=s(!1),U=s(!1),P=s(1),H=s(20),C=(h,i)=>{if(!h){v.risk=[],v.status=[];return}const x=h.toLowerCase();v[x]=v[x].filter(g=>g!==i)},N=h=>{v[h.toLowerCase()]=[]};return(h,i)=>{const x=p("component-title"),g=p("pf-text-input"),a=p("pf-button"),y=p("pf-input-group"),o=p("pf-toolbar-item"),d=p("pf-toolbar-content"),b=p("pf-toolbar"),_=p("story-canvas"),m=p("pf-toolbar-group"),n=p("pf-select-option"),u=p("pf-select"),w=p("pf-toolbar-toggle-group"),z=p("pf-toolbar-filter"),M=p("pf-kebab-toggle"),f=p("pf-dropdown-item"),T=p("pf-dropdown-separator"),F=p("pf-dropdown"),$=p("pf-overflow-menu-item"),W=p("pf-overflow-menu-group"),q=p("pf-overflow-menu-content"),J=p("pf-overflow-menu-control"),K=p("pf-overflow-menu"),Q=p("pf-divider"),X=p("pf-dropdown-toggle-checkbox"),Y=p("pf-dropdown-toggle"),Z=p("pf-pagination"),tt=p("doc-page");return nt(),lt(tt,{title:"Toolbar"},{default:e(()=>[t(x,{name:"pf-toolbar"}),t(_,{title:"Default",source:`<pf-toolbar>
  <pf-toolbar-content>
    <pf-toolbar-item>
      <pf-input-group>
        <pf-text-input type="search" aria-label="search input example" ></pf-text-input>
        <pf-button variant="control" aria-label="search button for search input">
          <search-icon></search-icon>
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
</pf-toolbar>`},{default:e(()=>[t(b,null,{default:e(()=>[t(d,null,{default:e(()=>[t(o,null,{default:e(()=>[t(y,null,{default:e(()=>[t(g,{type:"search","aria-label":"search input example"}),t(a,{variant:"control","aria-label":"search button for search input"},{default:e(()=>[t(c(k))]),_:1})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(a,{variant:"secondary"},{default:e(()=>[dt]),_:1})]),_:1}),t(o,{variant:"separator"}),t(o,null,{default:e(()=>[t(a,{variant:"primary"},{default:e(()=>[bt]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(_,{title:"Adjusting toolbar inset",source:`<pf-toolbar inset="none" inset-md="sm" inset-xl="2xl" inset-2xl="lg">
  <pf-toolbar-content>
    <pf-toolbar-item>
      <pf-input-group>
        <pf-text-input type="search" aria-label="search input example" ></pf-text-input>
        <pf-button variant="control" aria-label="search button for search input">
          <search-icon></search-icon>
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
</pf-toolbar>`},{default:e(()=>[t(b,{inset:"none","inset-md":"sm","inset-xl":"2xl","inset-2xl":"lg"},{default:e(()=>[t(d,null,{default:e(()=>[t(o,null,{default:e(()=>[t(y,null,{default:e(()=>[t(g,{type:"search","aria-label":"search input example"}),t(a,{variant:"control","aria-label":"search button for search input"},{default:e(()=>[t(c(k))]),_:1})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(a,{variant:"secondary"},{default:e(()=>[_t]),_:1})]),_:1}),t(o,{variant:"separator"}),t(o,null,{default:e(()=>[t(a,{variant:"primary"},{default:e(()=>[mt]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(_,{title:"Adjusting item spacers",source:`<pf-toolbar inset="none" inset-md="sm" inset-xl="2xl" inset-2xl="lg">
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
</pf-toolbar>`},{default:e(()=>[t(b,{inset:"none","inset-md":"sm","inset-xl":"2xl","inset-2xl":"lg"},{default:e(()=>[t(d,null,{default:e(()=>[t(o,{spacer:"none"},{default:e(()=>[t(a,{variant:"secondary"},{default:e(()=>[vt]),_:1})]),_:1}),t(o,{spacer:"sm"},{default:e(()=>[t(a,{variant:"secondary"},{default:e(()=>[gt]),_:1})]),_:1}),t(o,{spacer:"md"},{default:e(()=>[t(a,{variant:"secondary"},{default:e(()=>[ht]),_:1})]),_:1}),t(o,{spacer:"lg"},{default:e(()=>[t(a,{variant:"secondary"},{default:e(()=>[yt]),_:1})]),_:1}),t(o,{variant:"separator"}),t(o,{spacer:"none","spacer-md":"sm","spacer-lg":"md","spacer-xl":"lg"},{default:e(()=>[t(a,{variant:"secondary"},{default:e(()=>[kt]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(a,{variant:"primary"},{default:e(()=>[xt]),_:1})]),_:1}),t(o,{variant:"separator"}),t(m,{"space-items":"lg"},{default:e(()=>[t(o,null,{default:e(()=>[t(a,{variant:"secondary"},{default:e(()=>[wt]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(a,{variant:"secondary"},{default:e(()=>[It]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(_,{title:"Groups",source:`<pf-toolbar inset="none" inset-md="sm" inset-xl="2xl" inset-2xl="lg">
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
          <EditIcon></EditIcon>
        </pf-button>
      </pf-toolbar-item>
      <pf-toolbar-item>
        <pf-button variant="plain" aria-label="clone">
          <CloneIcon></CloneIcon>
        </pf-button>
      </pf-toolbar-item>
      <pf-toolbar-item>
        <pf-button variant="plain" aria-label="sync">
          <SyncIcon></SyncIcon>
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
</pf-toolbar>`},{default:e(()=>[t(b,{inset:"none","inset-md":"sm","inset-xl":"2xl","inset-2xl":"lg"},{default:e(()=>[t(d,null,{default:e(()=>[t(m,{variant:"filter-group"},{default:e(()=>[t(o,null,{default:e(()=>[t(u,{open:L.value,"onUpdate:open":i[0]||(i[0]=r=>L.value=r),onClear:r=>{}},{default:e(()=>[t(n,{value:"Filter 1",placeholder:""}),t(n,{value:"A"}),t(n,{value:"B"}),t(n,{value:"C"})]),_:1},8,["open"])]),_:1}),t(o,null,{default:e(()=>[t(u,{open:B.value,"onUpdate:open":i[1]||(i[1]=r=>B.value=r),onClear:r=>{}},{default:e(()=>[t(n,{value:"Filter 2",placeholder:""}),t(n,{value:"1"}),t(n,{value:"2"}),t(n,{value:"3"})]),_:1},8,["open"])]),_:1}),t(o,null,{default:e(()=>[t(u,{open:E.value,"onUpdate:open":i[2]||(i[2]=r=>E.value=r),onClear:r=>{}},{default:e(()=>[t(n,{value:"Filter 3",placeholder:""}),t(n,{value:"I"}),t(n,{value:"II"}),t(n,{value:"III"})]),_:1},8,["open"])]),_:1})]),_:1}),t(m,{variant:"icon-button-group"},{default:e(()=>[t(o,null,{default:e(()=>[t(a,{variant:"plain","aria-label":"edit"},{default:e(()=>[t(c(G))]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(a,{variant:"plain","aria-label":"clone"},{default:e(()=>[t(c(R))]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(a,{variant:"plain","aria-label":"sync"},{default:e(()=>[t(c(j))]),_:1})]),_:1})]),_:1}),t(m,{variant:"button-group"},{default:e(()=>[t(o,null,{default:e(()=>[t(a,{variant:"primary"},{default:e(()=>[At]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(a,{variant:"secondary"},{default:e(()=>[Ct]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(a,{variant:"tertiary"},{default:e(()=>[Ft]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(_,{title:"Component managed toggle groups",source:`<pf-toolbar class="pf-m-toggle-group-container">
  <pf-toolbar-content>
    <pf-toolbar-toggle-group breakpoint="xl">
      <template #icon>
        <FilterIcon></FilterIcon>
      </template>

      <pf-toolbar-item>
        <pf-input-group>
          <pf-text-input type="search" aria-label="search input example" ></pf-text-input>
          <pf-button variant="control" aria-label="search button for search input">
            <SearchIcon></SearchIcon>
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
</pf-toolbar>`},{default:e(()=>[t(b,{class:"pf-m-toggle-group-container"},{default:e(()=>[t(d,null,{default:e(()=>[t(w,{breakpoint:"xl"},{icon:e(()=>[t(c(I))]),default:e(()=>[t(o,null,{default:e(()=>[t(y,null,{default:e(()=>[t(g,{type:"search","aria-label":"search input example"}),t(a,{variant:"control","aria-label":"search button for search input"},{default:e(()=>[t(c(k))]),_:1})]),_:1})]),_:1}),t(m,{variant:"filter-group"},{default:e(()=>[t(o,null,{default:e(()=>[t(u,null,{default:e(()=>[t(n,{value:"Filter 1",placeholder:""}),t(n,{value:"A"}),t(n,{value:"B"}),t(n,{value:"C"})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(u,null,{default:e(()=>[t(n,{value:"Filter 2",placeholder:""}),t(n,{value:"1"}),t(n,{value:"2"}),t(n,{value:"3"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(_,{title:"Consumer managed toggle groups",source:`<pf-toolbar v-model:expanded="expanded1" class="pf-m-toggle-group-container">
  <pf-toolbar-content>
    <pf-toolbar-toggle-group breakpoint="xl">
      <template #icon>
        <FilterIcon></FilterIcon>
      </template>

      <pf-toolbar-item>
        <pf-input-group>
          <pf-text-input type="search" aria-label="search input example" ></pf-text-input>
          <pf-button variant="control" aria-label="search button for search input">
            <SearchIcon></SearchIcon>
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
</pf-toolbar>`},{default:e(()=>[t(b,{expanded:S.value,"onUpdate:expanded":i[3]||(i[3]=r=>S.value=r),class:"pf-m-toggle-group-container"},{default:e(()=>[t(d,null,{default:e(()=>[t(w,{breakpoint:"xl"},{icon:e(()=>[t(c(I))]),default:e(()=>[t(o,null,{default:e(()=>[t(y,null,{default:e(()=>[t(g,{type:"search","aria-label":"search input example"}),t(a,{variant:"control","aria-label":"search button for search input"},{default:e(()=>[t(c(k))]),_:1})]),_:1})]),_:1}),t(m,{variant:"filter-group"},{default:e(()=>[t(o,null,{default:e(()=>[t(u,null,{default:e(()=>[t(n,{value:"Filter 1",placeholder:""}),t(n,{value:"A"}),t(n,{value:"B"}),t(n,{value:"C"})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(u,null,{default:e(()=>[t(n,{value:"Filter 2",placeholder:""}),t(n,{value:"1"}),t(n,{value:"2"}),t(n,{value:"3"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["expanded"])]),_:1}),t(_,{title:"With filters",source:`<pf-toolbar
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
            <SearchIcon></SearchIcon>
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
          <EditIcon></EditIcon>
        </pf-button>
      </pf-toolbar-item>
      <pf-toolbar-item>
        <pf-button variant="plain" aria-label="clone">
          <CloneIcon></CloneIcon>
        </pf-button>
      </pf-toolbar-item>
      <pf-toolbar-item>
        <pf-button variant="plain" aria-label="sync">
          <SyncIcon></SyncIcon>
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
`},{default:e(()=>[t(b,{expanded:D.value,"onUpdate:expanded":i[5]||(i[5]=r=>D.value=r),class:"pf-m-toggle-group-container","collapse-listed-filters-breakpoint":"xl",onClearAllFilters:C},{default:e(()=>[t(d,null,{default:e(()=>[t(w,{breakpoint:"xl"},{icon:e(()=>[t(c(I))]),default:e(()=>[t(o,null,{default:e(()=>[t(y,null,{default:e(()=>[t(g,{type:"search","aria-label":"search input example"}),t(a,{variant:"control","aria-label":"search button for search input"},{default:e(()=>[t(c(k))]),_:1})]),_:1})]),_:1}),t(m,{variant:"filter-group"},{default:e(()=>[t(z,{category:"Status",chips:v.status,onDeleteChip:C,onDeleteChipGroup:N},{default:e(()=>[t(o,null,{default:e(()=>[t(u,null,{default:e(()=>[t(n,{value:"Filter 1",placeholder:""}),t(n,{value:"A"}),t(n,{value:"B"}),t(n,{value:"C"})]),_:1})]),_:1})]),_:1},8,["chips"]),t(z,{category:"Risk",chips:v.risk,onDeleteChip:C},{default:e(()=>[t(o,null,{default:e(()=>[t(u,null,{default:e(()=>[t(n,{value:"Filter 2",placeholder:""}),t(n,{value:"1"}),t(n,{value:"2"}),t(n,{value:"3"})]),_:1})]),_:1})]),_:1},8,["chips"])]),_:1})]),_:1}),t(m,{variant:"icon-button-group"},{default:e(()=>[t(o,null,{default:e(()=>[t(a,{variant:"plain","aria-label":"edit"},{default:e(()=>[t(c(G))]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(a,{variant:"plain","aria-label":"clone"},{default:e(()=>[t(c(R))]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(a,{variant:"plain","aria-label":"sync"},{default:e(()=>[t(c(j))]),_:1})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(F,{open:O.value,"onUpdate:open":i[4]||(i[4]=r=>O.value=r),plain:""},{toggle:e(()=>[t(M)]),default:e(()=>[t(f,{key:"link"},{default:e(()=>[St]),_:1}),t(f,{key:"action",component:"button"},{default:e(()=>[Dt]),_:1}),t(f,{key:"disabled link",disabled:""},{default:e(()=>[Lt]),_:1}),t(f,{key:"disabled action",disabled:"",component:"button"},{default:e(()=>[Bt]),_:1}),t(T,{key:"separator"}),t(f,{key:"separated link"},{default:e(()=>[Et]),_:1}),t(f,{key:"separated action",component:"button"},{default:e(()=>[Ot]),_:1})]),_:1},8,["open"])]),_:1})]),_:1})]),_:1},8,["expanded"])]),_:1}),t(_,{title:"Stacked example",source:`<pf-toolbar>
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
</pf-toolbar>`},{default:e(()=>[t(b,null,{default:e(()=>[t(d,null,{default:e(()=>[t(w,{breakpoint:"lg"},{icon:e(()=>[t(c(I))]),default:e(()=>[t(o,{id:"stacked-example-resource-select",variant:"label"},{default:e(()=>[Vt]),_:1}),t(o,null,{default:e(()=>[t(u,null,{default:e(()=>[t(n,{value:"Filter 1",placeholder:""}),t(n,{value:"A"}),t(n,{value:"B"}),t(n,{value:"C"})]),_:1})]),_:1}),t(o,{id:"stacked-example-status-select",variant:"label"},{default:e(()=>[Ut]),_:1}),t(o,null,{default:e(()=>[t(u,null,{default:e(()=>[t(n,{value:"Filter 2",placeholder:""}),t(n,{value:"1"}),t(n,{value:"2"}),t(n,{value:"3"})]),_:1})]),_:1}),t(o,{id:"stacked-example-type-select",variant:"label"},{default:e(()=>[Pt]),_:1}),t(o,null,{default:e(()=>[t(u,null,{default:e(()=>[t(n,{value:"Filter 3",placeholder:""}),t(n,{value:"I"}),t(n,{value:"II"}),t(n,{value:"III"})]),_:1})]),_:1})]),_:1}),t(o,{variant:"overflow-menu"},{default:e(()=>[t(K,{breakpoint:"2xl"},{default:e(()=>[t(q,null,{default:e(()=>[t(W,{type:"button"},{default:e(()=>[t($,null,{default:e(()=>[t(a,{variant:"primary"},{default:e(()=>[Ht]),_:1})]),_:1}),t($,null,{default:e(()=>[t(a,{variant:"secondary"},{default:e(()=>[zt]),_:1})]),_:1})]),_:1})]),_:1}),t(J,{"additional-options":""},{default:e(()=>[t(F,{open:V.value,"onUpdate:open":i[6]||(i[6]=r=>V.value=r),plain:""},{toggle:e(()=>[t(M)]),default:e(()=>[t(f,{key:"link"},{default:e(()=>[Mt]),_:1}),t(f,{key:"action",component:"button"},{default:e(()=>[Tt]),_:1}),t(f,{key:"disabled link",disabled:""},{default:e(()=>[$t]),_:1}),t(f,{key:"disabled action",disabled:"",component:"button"},{default:e(()=>[Rt]),_:1}),t(T,{key:"separator"}),t(f,{key:"separated link"},{default:e(()=>[Gt]),_:1}),t(f,{key:"separated action",component:"button"},{default:e(()=>[jt]),_:1})]),_:1},8,["open"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(Q),t(b,null,{default:e(()=>[t(d,null,{default:e(()=>[t(o,{variant:"bulk-select"},{default:e(()=>[t(F,{open:U.value,"onUpdate:open":i[7]||(i[7]=r=>U.value=r)},{toggle:e(()=>[t(Y,{id:"stacked-example-toggle"},{buttons:e(()=>[t(X,{id:"example-checkbox-1",key:"split-checkbox","aria-label":"Select all"})]),_:1})]),default:e(()=>[t(f,{key:"link"},{default:e(()=>[Nt]),_:1}),t(f,{key:"action",component:"button"},{default:e(()=>[Wt]),_:1}),t(f,{key:"disabled link",disabled:""},{default:e(()=>[qt]),_:1}),t(f,{key:"disabled action",disabled:"",component:"button"},{default:e(()=>[Jt]),_:1})]),_:1},8,["open"])]),_:1}),t(o,{variant:"pagination",align:{default:"alignRight"}},{default:e(()=>[t(Z,{page:P.value,"onUpdate:page":i[8]||(i[8]=r=>P.value=r),"per-page":H.value,"onUpdate:per-page":i[9]||(i[9]=r=>H.value=r),count:37,"widget-id":"pagination-options-menu-top"},null,8,["page","per-page"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}});export{Zt as default};
