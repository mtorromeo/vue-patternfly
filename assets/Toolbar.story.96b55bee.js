import{M as k}from"./magnifying-glass-icon.14196ef1.js";import{c as I}from"./createIcon.9b30fa3a.js";import{e as et,r as c,f as ot,a as p,c as nt,w as e,o as lt,b as t,u,j as l}from"./index.697aafd2.js";const at={name:"FilterIcon",height:512,width:512,svgPath:"M3.853 54.87C10.47 40.9 24.54 32 40 32H472C487.5 32 501.5 40.9 508.1 54.87C514.8 68.84 512.7 85.37 502.1 97.33L320 320.9V448C320 460.1 313.2 471.2 302.3 476.6C291.5 482 278.5 480.9 268.8 473.6L204.8 425.6C196.7 419.6 192 410.1 192 400V320.9L9.042 97.33C-.745 85.37-2.765 68.84 3.854 54.87L3.853 54.87z",yOffset:0,xOffset:0},pt=I(at),C=pt,it={name:"CloneIcon",height:512,width:512,svgPath:"M0 224C0 188.7 28.65 160 64 160H128V288C128 341 170.1 384 224 384H352V448C352 483.3 323.3 512 288 512H64C28.65 512 0 483.3 0 448V224zM224 352C188.7 352 160 323.3 160 288V64C160 28.65 188.7 0 224 0H448C483.3 0 512 28.65 512 64V288C512 323.3 483.3 352 448 352H224z",yOffset:0,xOffset:0},rt=I(it),$=rt,ft={name:"PenToSquareIcon",height:512,width:512,svgPath:"M490.3 40.4C512.2 62.27 512.2 97.73 490.3 119.6L460.3 149.7L362.3 51.72L392.4 21.66C414.3-.2135 449.7-.2135 471.6 21.66L490.3 40.4zM172.4 241.7L339.7 74.34L437.7 172.3L270.3 339.6C264.2 345.8 256.7 350.4 248.4 353.2L159.6 382.8C150.1 385.6 141.5 383.4 135 376.1C128.6 370.5 126.4 361 129.2 352.4L158.8 263.6C161.6 255.3 166.2 247.8 172.4 241.7V241.7zM192 63.1C209.7 63.1 224 78.33 224 95.1C224 113.7 209.7 127.1 192 127.1H96C78.33 127.1 64 142.3 64 159.1V416C64 433.7 78.33 448 96 448H352C369.7 448 384 433.7 384 416V319.1C384 302.3 398.3 287.1 416 287.1C433.7 287.1 448 302.3 448 319.1V416C448 469 405 512 352 512H96C42.98 512 0 469 0 416V159.1C0 106.1 42.98 63.1 96 63.1H192z",yOffset:0,xOffset:0},ut=I(ft),E=ut,st={name:"RotateIcon",height:512,width:512,svgPath:"M449.9 39.96l-48.5 48.53C362.5 53.19 311.4 32 256 32C161.5 32 78.59 92.34 49.58 182.2c-5.438 16.81 3.797 34.88 20.61 40.28c16.97 5.5 34.86-3.812 40.3-20.59C130.9 138.5 189.4 96 256 96c37.96 0 73 14.18 100.2 37.8L311.1 178C295.1 194.8 306.8 223.4 330.4 224h146.9C487.7 223.7 496 215.3 496 204.9V59.04C496 34.99 466.9 22.95 449.9 39.96zM441.8 289.6c-16.94-5.438-34.88 3.812-40.3 20.59C381.1 373.5 322.6 416 256 416c-37.96 0-73-14.18-100.2-37.8L200 334C216.9 317.2 205.2 288.6 181.6 288H34.66C24.32 288.3 16 296.7 16 307.1v145.9c0 24.04 29.07 36.08 46.07 19.07l48.5-48.53C149.5 458.8 200.6 480 255.1 480c94.45 0 177.4-60.34 206.4-150.2C467.9 313 458.6 294.1 441.8 289.6z",yOffset:0,xOffset:0},ct=I(st),G=ct,dt=l(" Action "),bt=l(" Action "),mt=l(" Action "),_t=l(" Action "),vt=l("Action"),gt=l("Action"),yt=l("Action"),ht=l("Action"),kt=l("Action"),xt=l("Action"),wt=l("Action"),Ct=l("Action"),It=l("Action"),At=l("Secondary"),Ft=l("Tertiary"),Lt=l("Link"),Dt=l("Action"),St=l("Disabled Link"),Vt=l("Disabled Action"),Bt=l("Separated Link"),Ot=l("Separated Action"),Pt=l("Resource"),Ht=l("Status"),Tt=l("Type"),Mt=l("Primary"),Rt=l("Secondary"),Ut=l("Link"),qt=l("Action"),zt=l("Disabled Link"),$t=l("Disabled Action"),Et=l("Separated Link"),Gt=l("Separated Action"),jt=l("Link"),Nt=l("Action"),Wt=l("Disabled Link"),Jt=l("Disabled Action"),Zt=et({__name:"Toolbar.story",setup(Kt){const L=c(!1),D=c(!1),S=c(!1),V=c(!1),B=c(!1),O=c(!1),v=ot({risk:["Low"],status:["New","Pending"]}),P=c(!1),H=c(!1),T=c(1),M=c(20),A=(y,i)=>{if(!y){v.risk=[],v.status=[];return}const x=y.toLowerCase();v[x]=v[x].filter(g=>g!==i)},j=y=>{v[y.toLowerCase()]=[]};return(y,i)=>{const x=p("component-title"),g=p("pf-text-input"),a=p("pf-button"),h=p("pf-input-group"),o=p("pf-toolbar-item"),d=p("pf-toolbar-content"),b=p("pf-toolbar"),m=p("story-canvas"),_=p("pf-toolbar-group"),n=p("pf-select-option"),s=p("pf-select"),w=p("pf-toolbar-toggle-group"),R=p("pf-toolbar-filter"),U=p("pf-kebab-toggle"),f=p("pf-dropdown-item"),q=p("pf-dropdown-separator"),F=p("pf-dropdown"),z=p("pf-overflow-menu-item"),N=p("pf-overflow-menu-group"),W=p("pf-overflow-menu-content"),J=p("pf-overflow-menu-control"),K=p("pf-overflow-menu"),Q=p("pf-divider"),X=p("pf-dropdown-toggle-checkbox"),Y=p("pf-dropdown-toggle"),Z=p("pf-pagination"),tt=p("doc-page");return lt(),nt(tt,{title:"Toolbar"},{default:e(()=>[t(x,{name:"pf-toolbar"}),t(m,{title:"Default",source:`<pf-toolbar>
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
</pf-toolbar>`},{default:e(()=>[t(b,null,{default:e(()=>[t(d,null,{default:e(()=>[t(o,null,{default:e(()=>[t(h,null,{default:e(()=>[t(g,{type:"search","aria-label":"search input example"}),t(a,{variant:"control","aria-label":"search button for search input"},{default:e(()=>[t(u(k))]),_:1})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(a,{variant:"secondary"},{default:e(()=>[dt]),_:1})]),_:1}),t(o,{variant:"separator"}),t(o,null,{default:e(()=>[t(a,{variant:"primary"},{default:e(()=>[bt]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(m,{title:"Adjusting toolbar inset",source:`<pf-toolbar inset="none" inset-md="sm" inset-xl="2xl" inset-2xl="lg">
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
</pf-toolbar>`},{default:e(()=>[t(b,{inset:"none","inset-md":"sm","inset-xl":"2xl","inset-2xl":"lg"},{default:e(()=>[t(d,null,{default:e(()=>[t(o,null,{default:e(()=>[t(h,null,{default:e(()=>[t(g,{type:"search","aria-label":"search input example"}),t(a,{variant:"control","aria-label":"search button for search input"},{default:e(()=>[t(u(k))]),_:1})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(a,{variant:"secondary"},{default:e(()=>[mt]),_:1})]),_:1}),t(o,{variant:"separator"}),t(o,null,{default:e(()=>[t(a,{variant:"primary"},{default:e(()=>[_t]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(m,{title:"Adjusting item spacers",source:`<pf-toolbar inset="none" inset-md="sm" inset-xl="2xl" inset-2xl="lg">
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
</pf-toolbar>`},{default:e(()=>[t(b,{inset:"none","inset-md":"sm","inset-xl":"2xl","inset-2xl":"lg"},{default:e(()=>[t(d,null,{default:e(()=>[t(o,{spacer:"none"},{default:e(()=>[t(a,{variant:"secondary"},{default:e(()=>[vt]),_:1})]),_:1}),t(o,{spacer:"sm"},{default:e(()=>[t(a,{variant:"secondary"},{default:e(()=>[gt]),_:1})]),_:1}),t(o,{spacer:"md"},{default:e(()=>[t(a,{variant:"secondary"},{default:e(()=>[yt]),_:1})]),_:1}),t(o,{spacer:"lg"},{default:e(()=>[t(a,{variant:"secondary"},{default:e(()=>[ht]),_:1})]),_:1}),t(o,{variant:"separator"}),t(o,{spacer:"none","spacer-md":"sm","spacer-lg":"md","spacer-xl":"lg"},{default:e(()=>[t(a,{variant:"secondary"},{default:e(()=>[kt]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(a,{variant:"primary"},{default:e(()=>[xt]),_:1})]),_:1}),t(o,{variant:"separator"}),t(_,{"space-items":"lg"},{default:e(()=>[t(o,null,{default:e(()=>[t(a,{variant:"secondary"},{default:e(()=>[wt]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(a,{variant:"secondary"},{default:e(()=>[Ct]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(m,{title:"Groups",source:`<pf-toolbar inset="none" inset-md="sm" inset-xl="2xl" inset-2xl="lg">
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
</pf-toolbar>`},{default:e(()=>[t(b,{inset:"none","inset-md":"sm","inset-xl":"2xl","inset-2xl":"lg"},{default:e(()=>[t(d,null,{default:e(()=>[t(_,{variant:"filter-group"},{default:e(()=>[t(o,null,{default:e(()=>[t(s,{open:S.value,"onUpdate:open":i[0]||(i[0]=r=>S.value=r),onClear:r=>{}},{default:e(()=>[t(n,{value:"Filter 1",placeholder:""}),t(n,{value:"A"}),t(n,{value:"B"}),t(n,{value:"C"})]),_:1},8,["open"])]),_:1}),t(o,null,{default:e(()=>[t(s,{open:V.value,"onUpdate:open":i[1]||(i[1]=r=>V.value=r),onClear:r=>{}},{default:e(()=>[t(n,{value:"Filter 2",placeholder:""}),t(n,{value:"1"}),t(n,{value:"2"}),t(n,{value:"3"})]),_:1},8,["open"])]),_:1}),t(o,null,{default:e(()=>[t(s,{open:B.value,"onUpdate:open":i[2]||(i[2]=r=>B.value=r),onClear:r=>{}},{default:e(()=>[t(n,{value:"Filter 3",placeholder:""}),t(n,{value:"I"}),t(n,{value:"II"}),t(n,{value:"III"})]),_:1},8,["open"])]),_:1})]),_:1}),t(_,{variant:"icon-button-group"},{default:e(()=>[t(o,null,{default:e(()=>[t(a,{variant:"plain","aria-label":"edit"},{default:e(()=>[t(u(E))]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(a,{variant:"plain","aria-label":"clone"},{default:e(()=>[t(u($))]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(a,{variant:"plain","aria-label":"sync"},{default:e(()=>[t(u(G))]),_:1})]),_:1})]),_:1}),t(_,{variant:"button-group"},{default:e(()=>[t(o,null,{default:e(()=>[t(a,{variant:"primary"},{default:e(()=>[It]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(a,{variant:"secondary"},{default:e(()=>[At]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(a,{variant:"tertiary"},{default:e(()=>[Ft]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(m,{title:"Component managed toggle groups",source:`<pf-toolbar class="pf-m-toggle-group-container">
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
</pf-toolbar>`},{default:e(()=>[t(b,{class:"pf-m-toggle-group-container"},{default:e(()=>[t(d,null,{default:e(()=>[t(w,{breakpoint:"xl"},{icon:e(()=>[t(u(C))]),default:e(()=>[t(o,null,{default:e(()=>[t(h,null,{default:e(()=>[t(g,{type:"search","aria-label":"search input example"}),t(a,{variant:"control","aria-label":"search button for search input"},{default:e(()=>[t(u(k))]),_:1})]),_:1})]),_:1}),t(_,{variant:"filter-group"},{default:e(()=>[t(o,null,{default:e(()=>[t(s,null,{default:e(()=>[t(n,{value:"Filter 1",placeholder:""}),t(n,{value:"A"}),t(n,{value:"B"}),t(n,{value:"C"})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(s,null,{default:e(()=>[t(n,{value:"Filter 2",placeholder:""}),t(n,{value:"1"}),t(n,{value:"2"}),t(n,{value:"3"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(m,{title:"Consumer managed toggle groups",source:`<pf-toolbar v-model:expanded="expanded1" class="pf-m-toggle-group-container">
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
</pf-toolbar>`},{default:e(()=>[t(b,{expanded:L.value,"onUpdate:expanded":i[3]||(i[3]=r=>L.value=r),class:"pf-m-toggle-group-container"},{default:e(()=>[t(d,null,{default:e(()=>[t(w,{breakpoint:"xl"},{icon:e(()=>[t(u(C))]),default:e(()=>[t(o,null,{default:e(()=>[t(h,null,{default:e(()=>[t(g,{type:"search","aria-label":"search input example"}),t(a,{variant:"control","aria-label":"search button for search input"},{default:e(()=>[t(u(k))]),_:1})]),_:1})]),_:1}),t(_,{variant:"filter-group"},{default:e(()=>[t(o,null,{default:e(()=>[t(s,null,{default:e(()=>[t(n,{value:"Filter 1",placeholder:""}),t(n,{value:"A"}),t(n,{value:"B"}),t(n,{value:"C"})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(s,null,{default:e(()=>[t(n,{value:"Filter 2",placeholder:""}),t(n,{value:"1"}),t(n,{value:"2"}),t(n,{value:"3"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["expanded"])]),_:1}),t(m,{title:"With filters",source:`<pf-toolbar
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
`},{default:e(()=>[t(b,{expanded:D.value,"onUpdate:expanded":i[5]||(i[5]=r=>D.value=r),class:"pf-m-toggle-group-container","collapse-listed-filters-breakpoint":"xl",onClearAllFilters:A},{default:e(()=>[t(d,null,{default:e(()=>[t(w,{breakpoint:"xl"},{icon:e(()=>[t(u(C))]),default:e(()=>[t(o,null,{default:e(()=>[t(h,null,{default:e(()=>[t(g,{type:"search","aria-label":"search input example"}),t(a,{variant:"control","aria-label":"search button for search input"},{default:e(()=>[t(u(k))]),_:1})]),_:1})]),_:1}),t(_,{variant:"filter-group"},{default:e(()=>[t(R,{category:"Status",chips:v.status,onDeleteChip:A,onDeleteChipGroup:j},{default:e(()=>[t(o,null,{default:e(()=>[t(s,null,{default:e(()=>[t(n,{value:"Filter 1",placeholder:""}),t(n,{value:"A"}),t(n,{value:"B"}),t(n,{value:"C"})]),_:1})]),_:1})]),_:1},8,["chips"]),t(R,{category:"Risk",chips:v.risk,onDeleteChip:A},{default:e(()=>[t(o,null,{default:e(()=>[t(s,null,{default:e(()=>[t(n,{value:"Filter 2",placeholder:""}),t(n,{value:"1"}),t(n,{value:"2"}),t(n,{value:"3"})]),_:1})]),_:1})]),_:1},8,["chips"])]),_:1})]),_:1}),t(_,{variant:"icon-button-group"},{default:e(()=>[t(o,null,{default:e(()=>[t(a,{variant:"plain","aria-label":"edit"},{default:e(()=>[t(u(E))]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(a,{variant:"plain","aria-label":"clone"},{default:e(()=>[t(u($))]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(a,{variant:"plain","aria-label":"sync"},{default:e(()=>[t(u(G))]),_:1})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(F,{open:O.value,"onUpdate:open":i[4]||(i[4]=r=>O.value=r),plain:""},{toggle:e(()=>[t(U)]),default:e(()=>[t(f,{key:"link"},{default:e(()=>[Lt]),_:1}),t(f,{key:"action",component:"button"},{default:e(()=>[Dt]),_:1}),t(f,{key:"disabled link",disabled:""},{default:e(()=>[St]),_:1}),t(f,{key:"disabled action",disabled:"",component:"button"},{default:e(()=>[Vt]),_:1}),t(q,{key:"separator"}),t(f,{key:"separated link"},{default:e(()=>[Bt]),_:1}),t(f,{key:"separated action",component:"button"},{default:e(()=>[Ot]),_:1})]),_:1},8,["open"])]),_:1})]),_:1})]),_:1},8,["expanded"])]),_:1}),t(m,{title:"Stacked example",source:`<pf-toolbar>
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
</pf-toolbar>`},{default:e(()=>[t(b,null,{default:e(()=>[t(d,null,{default:e(()=>[t(w,{breakpoint:"lg"},{icon:e(()=>[t(u(C))]),default:e(()=>[t(o,{id:"stacked-example-resource-select",variant:"label"},{default:e(()=>[Pt]),_:1}),t(o,null,{default:e(()=>[t(s,null,{default:e(()=>[t(n,{value:"Filter 1",placeholder:""}),t(n,{value:"A"}),t(n,{value:"B"}),t(n,{value:"C"})]),_:1})]),_:1}),t(o,{id:"stacked-example-status-select",variant:"label"},{default:e(()=>[Ht]),_:1}),t(o,null,{default:e(()=>[t(s,null,{default:e(()=>[t(n,{value:"Filter 2",placeholder:""}),t(n,{value:"1"}),t(n,{value:"2"}),t(n,{value:"3"})]),_:1})]),_:1}),t(o,{id:"stacked-example-type-select",variant:"label"},{default:e(()=>[Tt]),_:1}),t(o,null,{default:e(()=>[t(s,null,{default:e(()=>[t(n,{value:"Filter 3",placeholder:""}),t(n,{value:"I"}),t(n,{value:"II"}),t(n,{value:"III"})]),_:1})]),_:1})]),_:1}),t(o,{variant:"overflow-menu"},{default:e(()=>[t(K,{breakpoint:"2xl"},{default:e(()=>[t(W,null,{default:e(()=>[t(N,{type:"button"},{default:e(()=>[t(z,null,{default:e(()=>[t(a,{variant:"primary"},{default:e(()=>[Mt]),_:1})]),_:1}),t(z,null,{default:e(()=>[t(a,{variant:"secondary"},{default:e(()=>[Rt]),_:1})]),_:1})]),_:1})]),_:1}),t(J,{"additional-options":""},{default:e(()=>[t(F,{open:P.value,"onUpdate:open":i[6]||(i[6]=r=>P.value=r),plain:""},{toggle:e(()=>[t(U)]),default:e(()=>[t(f,{key:"link"},{default:e(()=>[Ut]),_:1}),t(f,{key:"action",component:"button"},{default:e(()=>[qt]),_:1}),t(f,{key:"disabled link",disabled:""},{default:e(()=>[zt]),_:1}),t(f,{key:"disabled action",disabled:"",component:"button"},{default:e(()=>[$t]),_:1}),t(q,{key:"separator"}),t(f,{key:"separated link"},{default:e(()=>[Et]),_:1}),t(f,{key:"separated action",component:"button"},{default:e(()=>[Gt]),_:1})]),_:1},8,["open"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(Q),t(b,null,{default:e(()=>[t(d,null,{default:e(()=>[t(o,{variant:"bulk-select"},{default:e(()=>[t(F,{open:H.value,"onUpdate:open":i[7]||(i[7]=r=>H.value=r)},{toggle:e(()=>[t(Y,{id:"stacked-example-toggle"},{buttons:e(()=>[t(X,{id:"example-checkbox-1",key:"split-checkbox","aria-label":"Select all"})]),_:1})]),default:e(()=>[t(f,{key:"link"},{default:e(()=>[jt]),_:1}),t(f,{key:"action",component:"button"},{default:e(()=>[Nt]),_:1}),t(f,{key:"disabled link",disabled:""},{default:e(()=>[Wt]),_:1}),t(f,{key:"disabled action",disabled:"",component:"button"},{default:e(()=>[Jt]),_:1})]),_:1},8,["open"])]),_:1}),t(o,{variant:"pagination",align:{default:"alignRight"}},{default:e(()=>[t(Z,{page:T.value,"onUpdate:page":i[8]||(i[8]=r=>T.value=r),"per-page":M.value,"onUpdate:per-page":i[9]||(i[9]=r=>M.value=r),count:37,"widget-id":"pagination-options-menu-top"},null,8,["page","per-page"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}});export{Zt as default};
