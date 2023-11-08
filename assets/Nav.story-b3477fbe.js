import{e as r,r as o,a as v,o as g,c as S,w as i,b as e,g as a}from"./index-7e86e6f9.js";const y=r({__name:"Nav.story",setup(x){const t=o("link1"),p=o("dark"),m=o("default");function l(_,L,u){t.value=u}return(_,L)=>{const u=v("component-title"),n=v("pf-nav-item"),c=v("pf-nav-list"),k=v("pf-nav"),d=v("story-canvas"),f=v("pf-nav-group"),s=v("doc-page");return g(),S(s,{title:"Nav"},{default:i(()=>[e(u,{name:"pf-nav"}),e(d,{title:"Default",dark:p.value!=="light"&&m.value!=="tertiary","max-width":"300px",source:`<pf-nav>
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
</pf-nav>`},{default:i(()=>[e(k,null,{default:i(()=>[e(c,null,{default:i(()=>[e(n,{"item-id":"link1",active:t.value=="link1",onSelect:l},{default:i(()=>[a(" Link 1 ")]),_:1},8,["active"]),e(n,{"item-id":"link2",active:t.value=="link2",onSelect:l},{default:i(()=>[a(" Link 2 ")]),_:1},8,["active"]),e(n,{"item-id":"link3",active:t.value=="link3",onSelect:l},{default:i(()=>[a(" Link 3 ")]),_:1},8,["active"]),e(n,{"item-id":"link4",active:t.value=="link4",onSelect:l},{default:i(()=>[a(" Link 4 ")]),_:1},8,["active"]),e(n,{"item-id":"link5",active:t.value=="link5",onSelect:l},{default:i(()=>[a(" Link 5 ")]),_:1},8,["active"])]),_:1})]),_:1})]),_:1},8,["dark"]),e(d,{title:"Grouped",dark:p.value!=="light"&&m.value!=="tertiary","max-width":"300px",source:`<pf-nav @select="selectLink">
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
</pf-nav>`},{default:i(()=>[e(k,{onSelect:l},{default:i(()=>[e(c,null,{default:i(()=>[e(f,{title:"Section title 1"},{default:i(()=>[e(n,{"item-id":"link1",active:t.value=="link1"},{default:i(()=>[a(" Link 1 ")]),_:1},8,["active"]),e(n,{"item-id":"link2",active:t.value=="link2"},{default:i(()=>[a(" Link 2 ")]),_:1},8,["active"]),e(n,{"item-id":"link3",active:t.value=="link3"},{default:i(()=>[a(" Link 3 ")]),_:1},8,["active"])]),_:1}),e(f,{title:"Section title 2"},{default:i(()=>[e(n,{"item-id":"link4",active:t.value=="link4"},{default:i(()=>[a(" Link 4 ")]),_:1},8,["active"]),e(n,{"item-id":"link5",active:t.value=="link5"},{default:i(()=>[a(" Link 5 ")]),_:1},8,["active"]),e(n,{"item-id":"link6",active:t.value=="link6"},{default:i(()=>[a(" Link 6 ")]),_:1},8,["active"])]),_:1})]),_:1})]),_:1})]),_:1},8,["dark"]),e(d,{title:"Flyout",dark:p.value!=="light"&&m.value!=="tertiary","max-width":"300px",source:`<pf-nav @select="selectLink">
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
</pf-nav>`},{default:i(()=>[e(k,{onSelect:l},{default:i(()=>[e(k,{onSelect:l},{default:i(()=>[e(c,null,{default:i(()=>[e(f,{title:"Section title 1"},{default:i(()=>[e(n,{"item-id":"link1",active:t.value=="link1"},{default:i(()=>[a(" Link 1 ")]),_:1},8,["active"]),e(n,{"item-id":"link2",active:t.value=="link2"},{default:i(()=>[a(" Link 2 ")]),_:1},8,["active"]),e(n,{"item-id":"link3",active:t.value=="link3"},{flyout:i(()=>[e(k,{variant:"subnav"},{default:i(()=>[e(c,null,{default:i(()=>[e(n,{"item-id":"link7",active:t.value=="link7"},{default:i(()=>[a(" Link 7 ")]),_:1},8,["active"])]),_:1})]),_:1})]),default:i(()=>[a(" Link 3 ")]),_:1},8,["active"])]),_:1}),e(f,{title:"Section title 2"},{default:i(()=>[e(n,{"item-id":"link4",active:t.value=="link4"},{default:i(()=>[a(" Link 4 ")]),_:1},8,["active"]),e(n,{"item-id":"link5",active:t.value=="link5"},{default:i(()=>[a(" Link 5 ")]),_:1},8,["active"]),e(n,{"item-id":"link6",active:t.value=="link6"},{default:i(()=>[a(" Link 6 ")]),_:1},8,["active"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["dark"])]),_:1})}}});export{y as default};
