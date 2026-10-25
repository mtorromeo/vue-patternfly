import{$ as e,N as t,U as n,c as r,et as i,h as a,k as o,m as s,p as c,s as l,st as u}from"./runtime-core.esm-bundler-C7C7Sr-n.js";import{F as d,y as f}from"./index-DoPLe3sE.js";var p=d({name:`FilterIcon`,height:512,width:512,svgPathData:`M32 64C19.1 64 7.4 71.8 2.4 83.8S.2 109.5 9.4 118.6L192 301.3 192 416c0 8.5 3.4 16.6 9.4 22.6l64 64c9.2 9.2 22.9 11.9 34.9 6.9S320 492.9 320 480l0-178.7 182.6-182.6c9.2-9.2 11.9-22.9 6.9-34.9S492.9 64 480 64L32 64z`,yOffset:0,xOffset:0}),m=d({name:`CloneIcon`,height:512,width:512,svgPathData:`M288 448l-224 0 0-224 48 0 0-64-48 0c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-48-64 0 0 48zm-64-96l224 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L224 0c-35.3 0-64 28.7-64 64l0 224c0 35.3 28.7 64 64 64z`,yOffset:0,xOffset:0}),h=d({name:`PenToSquareIcon`,height:512,width:512,svgPathData:`M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L368 46.1 465.9 144 490.3 119.6c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L432 177.9 334.1 80 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z`,yOffset:0,xOffset:0}),g=d({name:`RotateIcon`,height:512,width:512,svgPathData:`M480.1 192l7.9 0c13.3 0 24-10.7 24-24l0-144c0-9.7-5.8-18.5-14.8-22.2S477.9 .2 471 7L419.3 58.8C375 22.1 318 0 256 0 127 0 20.3 95.4 2.6 219.5 .1 237 12.2 253.2 29.7 255.7s33.7-9.7 36.2-27.1C79.2 135.5 159.3 64 256 64 300.4 64 341.2 79 373.7 104.3L327 151c-6.9 6.9-8.9 17.2-5.2 26.2S334.3 192 344 192l136.1 0zm29.4 100.5c2.5-17.5-9.7-33.7-27.1-36.2s-33.7 9.7-36.2 27.1c-13.3 93-93.4 164.5-190.1 164.5-44.4 0-85.2-15-117.7-40.3L185 361c6.9-6.9 8.9-17.2 5.2-26.2S177.7 320 168 320L24 320c-13.3 0-24 10.7-24 24L0 488c0 9.7 5.8 18.5 14.8 22.2S34.1 511.8 41 505l51.8-51.8C137 489.9 194 512 256 512 385 512 491.7 416.6 509.4 292.5z`,yOffset:0,xOffset:0}),_={style:{resize:`horizontal`,overflow:`auto`,"max-width":`100%`,border:`1px dashed var(--pf-t--global--border--color--default)`}},v=a({__name:`Toolbar.story`,setup(a){let d=i(!0),v=i(!1),y=i(!1),b=i(!1),x=i(!1),S=i(!1),C=i(!1),w=e({risk:[`Low`],status:[`New`,`Pending`]}),T=i(!1),E=i(!1),D=i(1),O=i(20),k=(e,t)=>{if(!e){w.risk=[],w.status=[];return}let n=e.toLowerCase();w[n]=w[n].filter(e=>e!==t)},A=e=>{w[e?.toLowerCase()]=[]};return(e,i)=>{let a=t(`component-info`),j=t(`pf-text-input`),M=t(`pf-button`),N=t(`pf-input-group`),P=t(`pf-toolbar-item`),F=t(`pf-toolbar-content`),I=t(`pf-toolbar`),L=t(`story-canvas`),R=t(`pf-toolbar-group`),z=t(`pf-select-option`),B=t(`pf-select`),V=t(`pf-switch`),H=t(`pf-toolbar-toggle-group`),U=t(`pf-toolbar-filter`),W=t(`pf-menu-toggle`),G=t(`pf-dropdown-item`),K=t(`pf-divider`),q=t(`pf-dropdown`),J=t(`pf-overflow-menu-item`),Y=t(`pf-overflow-menu-group`),X=t(`pf-overflow-menu-content`),Z=t(`pf-overflow-menu-control`),Q=t(`pf-overflow-menu`),$=t(`pf-menu-toggle-checkbox`),ee=t(`pf-pagination`),te=t(`doc-page`);return o(),r(te,{name:`Components/Toolbar.story.vue`,title:`Toolbar`},{description:n(()=>[...i[12]||=[c(`A `,-1),l(`b`,null,`toolbar`,-1),c(` allows a user to manage and manipulate a data set. Data can be presented in any valid presentation, a table, a list, or a data visualization (chart), for example. The toolbar responsively accommodates controls and displays applied filters in label groups.`,-1)]]),apidocs:n(()=>[s(a,{name:`PfToolbar`}),s(a,{name:`PfToolbarLabelGroupContent`}),s(a,{name:`PfToolbarContent`}),s(a,{name:`PfToolbarExpandableContent`}),s(a,{name:`PfToolbarFilter`}),s(a,{name:`PfToolbarGroup`}),s(a,{name:`PfToolbarItem`}),s(a,{name:`PfToolbarToggleGroup`})]),default:n(()=>[s(L,{title:`Default`,source:`<pf-toolbar>
  <pf-toolbar-content>
    <pf-toolbar-item flex-grow>
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
</pf-toolbar>`},{intro:n(()=>[...i[13]||=[l(`div`,{class:`markdown pf-v6-c-content`},[l(`p`,null,[c(`Use the `),l(`code`,null,`flex-grow`),c(` properties (also available per breakpoint, e.g. `),l(`code`,null,`flex-grow-md`),c(`) on toolbar items and groups to let them consume the available space, like the search input below.`)])],-1)]]),default:n(()=>[s(I,null,{default:n(()=>[s(F,null,{default:n(()=>[s(P,{"flex-grow":``},{default:n(()=>[s(N,null,{default:n(()=>[s(j,{type:`search`,"aria-label":`search input example`}),s(M,{variant:`control`,"aria-label":`search button for search input`},{icon:n(()=>[s(u(f))]),_:1})]),_:1})]),_:1}),s(P,null,{default:n(()=>[s(M,{variant:`secondary`},{default:n(()=>[...i[14]||=[c(` Action `,-1)]]),_:1})]),_:1}),s(P,{variant:`separator`}),s(P,null,{default:n(()=>[s(M,{variant:`primary`},{default:n(()=>[...i[15]||=[c(` Action `,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),s(L,{title:`Adjusting toolbar inset`,source:`<pf-toolbar inset="none" inset-md="sm" inset-xl="2xl" inset-2xl="lg">
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
</pf-toolbar>`},{default:n(()=>[s(I,{inset:`none`,"inset-md":`sm`,"inset-xl":`2xl`,"inset-2xl":`lg`},{default:n(()=>[s(F,null,{default:n(()=>[s(P,null,{default:n(()=>[s(N,null,{default:n(()=>[s(j,{type:`search`,"aria-label":`search input example`}),s(M,{variant:`control`,"aria-label":`search button for search input`},{icon:n(()=>[s(u(f))]),_:1})]),_:1})]),_:1}),s(P,null,{default:n(()=>[s(M,{variant:`secondary`},{default:n(()=>[...i[16]||=[c(` Action `,-1)]]),_:1})]),_:1}),s(P,{variant:`separator`}),s(P,null,{default:n(()=>[s(M,{variant:`primary`},{default:n(()=>[...i[17]||=[c(` Action `,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),s(L,{title:`Toolbar item spacers`,source:`<pf-toolbar inset="none" inset-md="sm" inset-xl="2xl" inset-2xl="lg">
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
</pf-toolbar>`},{default:n(()=>[s(I,{inset:`none`,"inset-md":`sm`,"inset-xl":`2xl`,"inset-2xl":`lg`},{default:n(()=>[s(F,null,{default:n(()=>[s(R,{variant:`action-group`},{default:n(()=>[s(P,null,{default:n(()=>[s(M,{variant:`secondary`},{default:n(()=>[...i[18]||=[c(`Action`,-1)]]),_:1})]),_:1}),s(P,null,{default:n(()=>[s(M,{variant:`secondary`},{default:n(()=>[...i[19]||=[c(`Action`,-1)]]),_:1})]),_:1}),s(P,null,{default:n(()=>[s(M,{variant:`secondary`},{default:n(()=>[...i[20]||=[c(`Action`,-1)]]),_:1})]),_:1}),s(P,null,{default:n(()=>[s(M,{variant:`secondary`},{default:n(()=>[...i[21]||=[c(`Action`,-1)]]),_:1})]),_:1})]),_:1}),s(P,{variant:`separator`}),s(R,{variant:`action-group`,"gap-lg":`sm`},{default:n(()=>[s(P,null,{default:n(()=>[s(M,{variant:`secondary`},{default:n(()=>[...i[22]||=[c(`Action`,-1)]]),_:1})]),_:1}),s(P,null,{default:n(()=>[s(M,{variant:`primary`},{default:n(()=>[...i[23]||=[c(`Action`,-1)]]),_:1})]),_:1})]),_:1}),s(P,{variant:`separator`}),s(R,{variant:`action-group`,"gap-lg":`lg`},{default:n(()=>[s(P,null,{default:n(()=>[s(M,{variant:`secondary`},{default:n(()=>[...i[24]||=[c(`Action`,-1)]]),_:1})]),_:1}),s(P,null,{default:n(()=>[s(M,{variant:`secondary`},{default:n(()=>[...i[25]||=[c(`Action`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),s(L,{title:`Groups`,source:`<pf-toolbar inset="none" inset-md="sm" inset-xl="2xl" inset-2xl="lg">
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
</pf-toolbar>`},{default:n(()=>[s(I,{inset:`none`,"inset-md":`sm`,"inset-xl":`2xl`,"inset-2xl":`lg`},{default:n(()=>[s(F,null,{default:n(()=>[s(R,{variant:`filter-group`},{default:n(()=>[s(P,null,{default:n(()=>[s(B,{open:b.value,"onUpdate:open":i[0]||=e=>b.value=e},{default:n(()=>[s(z,{value:`Filter 1`}),s(z,{value:`A`}),s(z,{value:`B`}),s(z,{value:`C`})]),_:1},8,[`open`])]),_:1}),s(P,null,{default:n(()=>[s(B,{open:x.value,"onUpdate:open":i[1]||=e=>x.value=e},{default:n(()=>[s(z,{value:`Filter 2`}),s(z,{value:`1`}),s(z,{value:`2`}),s(z,{value:`3`})]),_:1},8,[`open`])]),_:1}),s(P,null,{default:n(()=>[s(B,{open:S.value,"onUpdate:open":i[2]||=e=>S.value=e},{default:n(()=>[s(z,{value:`Filter 3`}),s(z,{value:`I`}),s(z,{value:`II`}),s(z,{value:`III`})]),_:1},8,[`open`])]),_:1})]),_:1}),s(R,null,{default:n(()=>[s(P,null,{default:n(()=>[s(M,{variant:`plain`,"aria-label":`edit`},{icon:n(()=>[s(u(h))]),_:1})]),_:1}),s(P,null,{default:n(()=>[s(M,{variant:`plain`,"aria-label":`clone`},{icon:n(()=>[s(u(m))]),_:1})]),_:1}),s(P,null,{default:n(()=>[s(M,{variant:`plain`,"aria-label":`sync`},{icon:n(()=>[s(u(g))]),_:1})]),_:1})]),_:1}),s(R,null,{default:n(()=>[s(P,null,{default:n(()=>[s(M,{variant:`primary`},{default:n(()=>[...i[26]||=[c(`Action`,-1)]]),_:1})]),_:1}),s(P,null,{default:n(()=>[s(M,{variant:`secondary`},{default:n(()=>[...i[27]||=[c(`Secondary`,-1)]]),_:1})]),_:1}),s(P,null,{default:n(()=>[s(M,{variant:`tertiary`},{default:n(()=>[...i[28]||=[c(`Tertiary`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),s(L,{title:`Component managed toggle groups`,source:`<pf-switch v-model:checked="toolbarContainer" label="Container" /><br><br>

<div
  style="
    resize: horizontal;
    overflow: auto;
    max-width: 100%;
    border: 1px dashed var(--pf-t--global--border--color--default);
  "
>
  <pf-toolbar class="pf-m-toggle-group-container" :container="toolbarContainer">
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
  </pf-toolbar>
</div>`},{intro:n(()=>[...i[29]||=[l(`div`,{class:`markdown pf-v6-c-content`},[l(`p`,null,[c(`With the `),l(`code`,null,`container`),c(` property the toolbar becomes a container for CSS container queries, so its responsive behavior follows the width of the toolbar instead of the viewport. Resize the box below to see the toggle group collapse.`)])],-1)]]),default:n(()=>[s(V,{checked:d.value,"onUpdate:checked":i[3]||=e=>d.value=e,label:`Container`},null,8,[`checked`]),i[30]||=l(`br`,null,null,-1),i[31]||=l(`br`,null,null,-1),l(`div`,_,[s(I,{class:`pf-m-toggle-group-container`,container:d.value},{default:n(()=>[s(F,null,{default:n(()=>[s(H,{xl:``},{icon:n(()=>[s(u(p))]),default:n(()=>[s(P,null,{default:n(()=>[s(N,null,{default:n(()=>[s(j,{type:`search`,"aria-label":`search input example`}),s(M,{variant:`control`,"aria-label":`search button for search input`},{icon:n(()=>[s(u(f))]),_:1})]),_:1})]),_:1}),s(R,{variant:`filter-group`},{default:n(()=>[s(P,null,{default:n(()=>[s(B,null,{default:n(()=>[s(z,{value:`Filter 1`}),s(z,{value:`A`}),s(z,{value:`B`}),s(z,{value:`C`})]),_:1})]),_:1}),s(P,null,{default:n(()=>[s(B,null,{default:n(()=>[s(z,{value:`Filter 2`}),s(z,{value:`1`}),s(z,{value:`2`}),s(z,{value:`3`})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,[`container`])])]),_:1}),s(L,{title:`Consumer managed toggle groups`,source:`<pf-toolbar v-model:expanded="expanded1" class="pf-m-toggle-group-container">
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
</pf-toolbar>`},{default:n(()=>[s(I,{expanded:v.value,"onUpdate:expanded":i[4]||=e=>v.value=e,class:`pf-m-toggle-group-container`},{default:n(()=>[s(F,null,{default:n(()=>[s(H,{xl:``},{icon:n(()=>[s(u(p))]),default:n(()=>[s(P,null,{default:n(()=>[s(N,null,{default:n(()=>[s(j,{type:`search`,"aria-label":`search input example`}),s(M,{variant:`control`,"aria-label":`search button for search input`},{icon:n(()=>[s(u(f))]),_:1})]),_:1})]),_:1}),s(R,{variant:`filter-group`},{default:n(()=>[s(P,null,{default:n(()=>[s(B,null,{default:n(()=>[s(z,{value:`Filter 1`}),s(z,{value:`A`}),s(z,{value:`B`}),s(z,{value:`C`})]),_:1})]),_:1}),s(P,null,{default:n(()=>[s(B,null,{default:n(()=>[s(z,{value:`Filter 2`}),s(z,{value:`1`}),s(z,{value:`2`}),s(z,{value:`3`})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,[`expanded`])]),_:1}),s(L,{title:`With filters`,source:`<pf-toolbar
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
            <template #icon>
              <magnifying-glass-icon />
            </template>
          </pf-button>
        </pf-input-group>
      </pf-toolbar-item>

      <pf-toolbar-group variant="filter-group">
        <pf-toolbar-filter
          category="Status"
          :labels="filters.status"
          @delete-label="onDelete"
          @delete-label-group="onDeleteGroup"
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
</pf-toolbar>`},{default:n(()=>[s(I,{expanded:y.value,"onUpdate:expanded":i[6]||=e=>y.value=e,class:`pf-m-toggle-group-container`,"collapse-listed-filters-breakpoint":`xl`,onClearAllFilters:i[7]||=e=>k()},{default:n(()=>[s(F,null,{default:n(()=>[s(H,{xl:``},{icon:n(()=>[s(u(p))]),default:n(()=>[s(P,null,{default:n(()=>[s(N,null,{default:n(()=>[s(j,{type:`search`,"aria-label":`search input example`}),s(M,{variant:`control`,"aria-label":`search button for search input`},{icon:n(()=>[s(u(f))]),_:1})]),_:1})]),_:1}),s(R,{variant:`filter-group`},{default:n(()=>[s(U,{category:`Status`,labels:w.status,onDeleteLabel:k,onDeleteLabelGroup:A},{default:n(()=>[s(P,null,{default:n(()=>[s(B,null,{default:n(()=>[s(z,{value:`Filter 1`}),s(z,{value:`A`}),s(z,{value:`B`}),s(z,{value:`C`})]),_:1})]),_:1})]),_:1},8,[`labels`]),s(U,{category:`Risk`,labels:w.risk,onDeleteLabel:k},{default:n(()=>[s(P,null,{default:n(()=>[s(B,null,{default:n(()=>[s(z,{value:`Filter 2`}),s(z,{value:`1`}),s(z,{value:`2`}),s(z,{value:`3`})]),_:1})]),_:1})]),_:1},8,[`labels`])]),_:1})]),_:1}),s(R,null,{default:n(()=>[s(P,null,{default:n(()=>[s(M,{variant:`plain`,"aria-label":`edit`},{icon:n(()=>[s(u(h))]),_:1})]),_:1}),s(P,null,{default:n(()=>[s(M,{variant:`plain`,"aria-label":`clone`},{icon:n(()=>[s(u(m))]),_:1})]),_:1}),s(P,null,{default:n(()=>[s(M,{variant:`plain`,"aria-label":`sync`},{icon:n(()=>[s(u(g))]),_:1})]),_:1})]),_:1}),s(P,null,{default:n(()=>[s(q,{open:C.value,"onUpdate:open":i[5]||=e=>C.value=e},{toggle:n(()=>[s(W,{variant:`plain`})]),default:n(()=>[s(G,{key:`link`},{default:n(()=>[...i[32]||=[c(`Link`,-1)]]),_:1}),s(G,{key:`action`,component:`button`},{default:n(()=>[...i[33]||=[c(`Action`,-1)]]),_:1}),s(G,{key:`disabled link`,disabled:``},{default:n(()=>[...i[34]||=[c(`Disabled Link`,-1)]]),_:1}),s(G,{key:`disabled action`,disabled:``,component:`button`},{default:n(()=>[...i[35]||=[c(`Disabled Action`,-1)]]),_:1}),s(K,{key:`separator`,component:`li`}),s(G,{key:`separated link`},{default:n(()=>[...i[36]||=[c(`Separated Link`,-1)]]),_:1}),s(G,{key:`separated action`,component:`button`},{default:n(()=>[...i[37]||=[c(`Separated Action`,-1)]]),_:1})]),_:1},8,[`open`])]),_:1})]),_:1})]),_:1},8,[`expanded`])]),_:1}),s(L,{title:`Stacked example`,source:`<pf-toolbar>
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
      <pf-pagination
        v-model:page="page"
        v-model:per-page="perPage"
        :count="37"
        widget-id="pagination-options-menu" />
    </pf-toolbar-item>
  </pf-toolbar-content>
</pf-toolbar>`},{default:n(()=>[s(I,null,{default:n(()=>[s(F,null,{default:n(()=>[s(H,{lg:``},{icon:n(()=>[s(u(p))]),default:n(()=>[s(P,{id:`stacked-example-resource-select`,variant:`label`},{default:n(()=>[...i[38]||=[c(`Resource`,-1)]]),_:1}),s(P,null,{default:n(()=>[s(B,null,{default:n(()=>[s(z,{value:`Filter 1`}),s(z,{value:`A`}),s(z,{value:`B`}),s(z,{value:`C`})]),_:1})]),_:1}),s(P,{id:`stacked-example-status-select`,variant:`label`},{default:n(()=>[...i[39]||=[c(`Status`,-1)]]),_:1}),s(P,null,{default:n(()=>[s(B,null,{default:n(()=>[s(z,{value:`Filter 2`}),s(z,{value:`1`}),s(z,{value:`2`}),s(z,{value:`3`})]),_:1})]),_:1}),s(P,{id:`stacked-example-type-select`,variant:`label`},{default:n(()=>[...i[40]||=[c(`Type`,-1)]]),_:1}),s(P,null,{default:n(()=>[s(B,null,{default:n(()=>[s(z,{value:`Filter 3`}),s(z,{value:`I`}),s(z,{value:`II`}),s(z,{value:`III`})]),_:1})]),_:1})]),_:1}),s(P,null,{default:n(()=>[s(Q,{breakpoint:`2xl`},{default:n(()=>[s(X,null,{default:n(()=>[s(Y,{type:`button`},{default:n(()=>[s(J,null,{default:n(()=>[s(M,{variant:`primary`},{default:n(()=>[...i[41]||=[c(`Primary`,-1)]]),_:1})]),_:1}),s(J,null,{default:n(()=>[s(M,{variant:`secondary`},{default:n(()=>[...i[42]||=[c(`Secondary`,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),s(Z,{"additional-options":``},{default:n(()=>[s(q,{open:T.value,"onUpdate:open":i[8]||=e=>T.value=e},{toggle:n(()=>[s(W,{variant:`plain`})]),default:n(()=>[s(G,{key:`link`},{default:n(()=>[...i[43]||=[c(`Link`,-1)]]),_:1}),s(G,{key:`action`,component:`button`},{default:n(()=>[...i[44]||=[c(`Action`,-1)]]),_:1}),s(G,{key:`disabled link`,disabled:``},{default:n(()=>[...i[45]||=[c(`Disabled Link`,-1)]]),_:1}),s(G,{key:`disabled action`,disabled:``,component:`button`},{default:n(()=>[...i[46]||=[c(`Disabled Action`,-1)]]),_:1}),s(K,{key:`separator`,component:`li`}),s(G,{key:`separated link`},{default:n(()=>[...i[47]||=[c(`Separated Link`,-1)]]),_:1}),s(G,{key:`separated action`,component:`button`},{default:n(()=>[...i[48]||=[c(`Separated Action`,-1)]]),_:1})]),_:1},8,[`open`])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),s(K),s(I,null,{default:n(()=>[s(F,null,{default:n(()=>[s(P,null,{default:n(()=>[s(q,{open:E.value,"onUpdate:open":i[9]||=e=>E.value=e},{toggle:n(()=>[s(W,null,{default:n(()=>[s($,{"aria-label":`Select all`})]),_:1})]),default:n(()=>[s(G,{key:`link`},{default:n(()=>[...i[49]||=[c(`Link`,-1)]]),_:1}),s(G,{key:`action`,component:`button`},{default:n(()=>[...i[50]||=[c(`Action`,-1)]]),_:1}),s(G,{key:`disabled link`,disabled:``},{default:n(()=>[...i[51]||=[c(`Disabled Link`,-1)]]),_:1}),s(G,{key:`disabled action`,disabled:``,component:`button`},{default:n(()=>[...i[52]||=[c(`Disabled Action`,-1)]]),_:1})]),_:1},8,[`open`])]),_:1}),s(P,{variant:`pagination`,align:`end`},{default:n(()=>[s(ee,{page:D.value,"onUpdate:page":i[10]||=e=>D.value=e,"per-page":O.value,"onUpdate:perPage":i[11]||=e=>O.value=e,count:37,"widget-id":`pagination-options-menu`},null,8,[`page`,`per-page`])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}});export{v as default};