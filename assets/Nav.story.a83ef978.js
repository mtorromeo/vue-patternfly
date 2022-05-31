import{e as r,r as s,c as h,w as i,a as v,o as g,b as t,j as a}from"./index.adfcb1e2.js";const S=a(" Link 1 "),x=a(" Link 2 "),y=a(" Link 3 "),w=a(" Link 4 "),N=a(" Link 5 "),b=a(" Link 1 "),C=a(" Link 2 "),B=a(" Link 3 "),V=a(" Link 4 "),j=a(" Link 5 "),D=a(" Link 6 "),F=a(" Link 1 "),G=a(" Link 2 "),T=a(" Link 3 \\ "),q=a(" Link 7 "),z=a(" Link 4 "),A=a(" Link 5 "),E=a(" Link 6 "),J=r({name:"Nav.story",setup(H){const e=s("link1"),f=s("dark"),d=s("default");function l(m,u,p){e.value=p}return(m,u)=>{const p=v("component-title"),n=v("pf-nav-item"),k=v("pf-nav-list"),c=v("pf-nav"),_=v("story-canvas"),o=v("pf-nav-group"),L=v("doc-page");return g(),h(L,{title:"Nav"},{default:i(()=>[t(p,{name:"pf-nav"}),t(_,{title:"Default",dark:f.value!=="light"&&d.value!=="tertiary","max-width":"300px",source:`<pf-nav>
  <pf-nav-list>
    <pf-nav-item item-id="link1" :active="activeLink == 'link1'" @select="selectLink">
      Link 1
    </pf-nav-item>
    <pf-nav-item item-id="link2" :active="activeLink == 'link2'" @select="selectLink">
      Link 2
    </pf-nav-item>
    <pf-nav-item item-id="link3" :active="activeLink == 'link3'" @select="selectLink">
      Link 3
    </pf-nav-item>
    <pf-nav-item item-id="link4" :active="activeLink == 'link4'" @select="selectLink">
      Link 4
    </pf-nav-item>
    <pf-nav-item item-id="link5" :active="activeLink == 'link5'" @select="selectLink">
      Link 5
    </pf-nav-item>
  </pf-nav-list>
</pf-nav>`},{default:i(()=>[t(c,null,{default:i(()=>[t(k,null,{default:i(()=>[t(n,{"item-id":"link1",active:e.value=="link1",onSelect:l},{default:i(()=>[S]),_:1},8,["active"]),t(n,{"item-id":"link2",active:e.value=="link2",onSelect:l},{default:i(()=>[x]),_:1},8,["active"]),t(n,{"item-id":"link3",active:e.value=="link3",onSelect:l},{default:i(()=>[y]),_:1},8,["active"]),t(n,{"item-id":"link4",active:e.value=="link4",onSelect:l},{default:i(()=>[w]),_:1},8,["active"]),t(n,{"item-id":"link5",active:e.value=="link5",onSelect:l},{default:i(()=>[N]),_:1},8,["active"])]),_:1})]),_:1})]),_:1},8,["dark"]),t(_,{title:"Grouped",dark:f.value!=="light"&&d.value!=="tertiary","max-width":"300px",source:`<pf-nav @select="selectLink">
  <pf-nav-list>
    <pf-nav-group title="Section title 1">
      <pf-nav-item item-id="link1" :active="activeLink == 'link1'">
        Link 1
      </pf-nav-item>
      <pf-nav-item item-id="link2" :active="activeLink == 'link2'">
        Link 2
      </pf-nav-item>
      <pf-nav-item item-id="link3" :active="activeLink == 'link3'">
        Link 3
      </pf-nav-item>
    </pf-nav-group>
    <pf-nav-group title="Section title 2">
      <pf-nav-item item-id="link4" :active="activeLink == 'link4'">
        Link 4
      </pf-nav-item>
      <pf-nav-item item-id="link5" :active="activeLink == 'link5'">
        Link 5
      </pf-nav-item>
      <pf-nav-item item-id="link6" :active="activeLink == 'link6'">
        Link 6
      </pf-nav-item>
    </pf-nav-group>
  </pf-nav-list>
</pf-nav>`},{default:i(()=>[t(c,{onSelect:l},{default:i(()=>[t(k,null,{default:i(()=>[t(o,{title:"Section title 1"},{default:i(()=>[t(n,{"item-id":"link1",active:e.value=="link1"},{default:i(()=>[b]),_:1},8,["active"]),t(n,{"item-id":"link2",active:e.value=="link2"},{default:i(()=>[C]),_:1},8,["active"]),t(n,{"item-id":"link3",active:e.value=="link3"},{default:i(()=>[B]),_:1},8,["active"])]),_:1}),t(o,{title:"Section title 2"},{default:i(()=>[t(n,{"item-id":"link4",active:e.value=="link4"},{default:i(()=>[V]),_:1},8,["active"]),t(n,{"item-id":"link5",active:e.value=="link5"},{default:i(()=>[j]),_:1},8,["active"]),t(n,{"item-id":"link6",active:e.value=="link6"},{default:i(()=>[D]),_:1},8,["active"])]),_:1})]),_:1})]),_:1})]),_:1},8,["dark"]),t(_,{title:"Flyout",dark:f.value!=="light"&&d.value!=="tertiary","max-width":"300px",source:`<pf-nav @select="selectLink">
  <pf-nav @select="selectLink">
    <pf-nav-list>
      <pf-nav-group title="Section title 1">
        <pf-nav-item item-id="link1" :active="activeLink == 'link1'">
          Link 1
        </pf-nav-item>
        <pf-nav-item item-id="link2" :active="activeLink == 'link2'">
          Link 2
        </pf-nav-item>
        <pf-nav-item item-id="link3" :active="activeLink == 'link3'">
          Link 3
          \\
          <template #flyout>
            <pf-nav variant="subnav">
              <pf-nav-list>
                <pf-nav-item item-id="link7" :active="activeLink == 'link7'">
                  Link 7
                </pf-nav-item>
              </pf-nav-list>
            </pf-nav>
          </template>
        </pf-nav-item>
      </pf-nav-group>
      <pf-nav-group title="Section title 2">
        <pf-nav-item item-id="link4" :active="activeLink == 'link4'">
          Link 4
        </pf-nav-item>
        <pf-nav-item item-id="link5" :active="activeLink == 'link5'">
          Link 5
        </pf-nav-item>
        <pf-nav-item item-id="link6" :active="activeLink == 'link6'">
          Link 6
        </pf-nav-item>
      </pf-nav-group>
    </pf-nav-list>
  </pf-nav>
</pf-nav>`},{default:i(()=>[t(c,{onSelect:l},{default:i(()=>[t(c,{onSelect:l},{default:i(()=>[t(k,null,{default:i(()=>[t(o,{title:"Section title 1"},{default:i(()=>[t(n,{"item-id":"link1",active:e.value=="link1"},{default:i(()=>[F]),_:1},8,["active"]),t(n,{"item-id":"link2",active:e.value=="link2"},{default:i(()=>[G]),_:1},8,["active"]),t(n,{"item-id":"link3",active:e.value=="link3"},{flyout:i(()=>[t(c,{variant:"subnav"},{default:i(()=>[t(k,null,{default:i(()=>[t(n,{"item-id":"link7",active:e.value=="link7"},{default:i(()=>[q]),_:1},8,["active"])]),_:1})]),_:1})]),default:i(()=>[T]),_:1},8,["active"])]),_:1}),t(o,{title:"Section title 2"},{default:i(()=>[t(n,{"item-id":"link4",active:e.value=="link4"},{default:i(()=>[z]),_:1},8,["active"]),t(n,{"item-id":"link5",active:e.value=="link5"},{default:i(()=>[A]),_:1},8,["active"]),t(n,{"item-id":"link6",active:e.value=="link6"},{default:i(()=>[E]),_:1},8,["active"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["dark"])]),_:1})}}});export{J as default};
