import{f as _,r as d,a as v,o as g,c as N,w as a,b as t,d as e,e as y}from"./index-GvDS6dA2.js";const q=y("b",null,"navigation",-1),b=_({__name:"Navigation.story",setup(x){const n=d("link1"),p=d("dark"),r=d("default");function l(f,k,c){n.value=c}return(f,k)=>{const c=v("component-info"),i=v("pf-nav-item"),m=v("pf-nav-list"),s=v("pf-nav"),u=v("story-canvas"),o=v("pf-nav-group"),L=v("doc-page");return g(),N(L,{title:"Navigation"},{description:a(()=>[t("A "),q,t(" organizes an application's structure and content, making it easy to find information and accomplish tasks. Navigation communicates relationships, context, and actions a user can take within an application.")]),apidocs:a(()=>[e(c,{src:"packages/core/src/components/Nav/Nav.vue",doc:{name:"PfNav",exportName:"default",displayName:"Nav",description:"",tags:{},props:[{name:"theme",required:!1,type:{name:"union",elements:[{name:'"dark"'},{name:'"light"'}]},defaultValue:{func:!1,value:"'dark'"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"horizontal"'},{name:'"tertiary"'},{name:'"horizontal-subnav"'},{name:'"subnav"'}]},defaultValue:{func:!1,value:"'default'"}},{name:"ariaLabel",required:!1,type:{name:"string"}}],events:[{name:"select",type:{names:["Event"]}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Nav/Nav.vue"]}},null,8,["doc"]),e(c,{src:"packages/core/src/components/Nav/NavExpandable.vue",doc:{name:"PfNavExpandable",exportName:"default",displayName:"NavExpandable",description:"",tags:{},props:[{name:"title",required:!1,type:{name:"string"}},{name:"srText",required:!1,type:{name:"string"}},{name:"groupId",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"id",required:!1,type:{name:"string"}},{name:"active",required:!1,type:{name:"boolean"}},{name:"managed",required:!1,type:{name:"boolean"}},{name:"expanded",required:!1,type:{name:"boolean"}}],events:[{name:"update:expanded",type:{names:["boolean"]}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Nav/NavExpandable.vue"]}},null,8,["doc"]),e(c,{src:"packages/core/src/components/Nav/NavGroup.vue",doc:{name:"PfNavGroup",exportName:"default",displayName:"NavGroup",description:"",tags:{},props:[{name:"title",required:!0,type:{name:"string"}},{name:"id",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"() => getUniqueId()"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Nav/NavGroup.vue"]}},null,8,["doc"]),e(c,{src:"packages/core/src/components/Nav/NavItem.vue",doc:{name:"PfNavItem",exportName:"default",displayName:"NavItem",description:"",tags:{},props:[{name:"component",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'li'"}},{name:"linkComponent",required:!1,type:{name:"string"}},{name:"groupId",required:!1,type:{name:"string"}},{name:"itemId",required:!1,type:{name:"string"}},{name:"active",required:!1,type:{name:"boolean"}},{name:"preventDefault",required:!1,type:{name:"boolean"}},{name:"itemClass",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Array",elements:[{name:"any"}]},{name:"Record",elements:[{name:"string"},{name:"boolean"}]}]}},{name:"itemAttrs",required:!1,type:{name:"Record",elements:[{name:"string"},{name:"any"}]}},{name:"to",required:!1,type:{name:"RouteLocationRaw"}},{name:"tabindex",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]}}],events:[{name:"showflyout"},{name:"select",type:{names:["Event"]}}],slots:[{name:"default"},{name:"flyout"}],sourceFiles:["../../packages/core/src/components/Nav/NavItem.vue"]}},null,8,["doc"]),e(c,{src:"packages/core/src/components/Nav/NavItemSeparator.vue",doc:{name:"PfNavItemSeparator",exportName:"default",displayName:"NavItemSeparator",description:"",tags:{},sourceFiles:["../../packages/core/src/components/Nav/NavItemSeparator.vue"]}},null,8,["doc"]),e(c,{src:"packages/core/src/components/Nav/NavList.vue",doc:{name:"PfNavList",exportName:"default",displayName:"NavList",description:"",tags:{},props:[{name:"ariaLeftScroll",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Scroll left'"}},{name:"ariaRightScroll",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Scroll right'"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Nav/NavList.vue"]}},null,8,["doc"])]),default:a(()=>[e(u,{title:"Default",dark:p.value!=="light"&&r.value!=="tertiary","max-width":"300px",source:`<pf-nav>
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
</pf-nav>`},{default:a(()=>[e(s,null,{default:a(()=>[e(m,null,{default:a(()=>[e(i,{"item-id":"link1",active:n.value=="link1",onSelect:l},{default:a(()=>[t(" Link 1 ")]),_:1},8,["active"]),e(i,{"item-id":"link2",active:n.value=="link2",onSelect:l},{default:a(()=>[t(" Link 2 ")]),_:1},8,["active"]),e(i,{"item-id":"link3",active:n.value=="link3",onSelect:l},{default:a(()=>[t(" Link 3 ")]),_:1},8,["active"]),e(i,{"item-id":"link4",active:n.value=="link4",onSelect:l},{default:a(()=>[t(" Link 4 ")]),_:1},8,["active"]),e(i,{"item-id":"link5",active:n.value=="link5",onSelect:l},{default:a(()=>[t(" Link 5 ")]),_:1},8,["active"])]),_:1})]),_:1})]),_:1},8,["dark"]),e(u,{title:"Grouped",dark:p.value!=="light"&&r.value!=="tertiary","max-width":"300px",source:`<pf-nav @select="selectLink">
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
</pf-nav>`},{default:a(()=>[e(s,{onSelect:l},{default:a(()=>[e(m,null,{default:a(()=>[e(o,{title:"Section title 1"},{default:a(()=>[e(i,{"item-id":"link1",active:n.value=="link1"},{default:a(()=>[t(" Link 1 ")]),_:1},8,["active"]),e(i,{"item-id":"link2",active:n.value=="link2"},{default:a(()=>[t(" Link 2 ")]),_:1},8,["active"]),e(i,{"item-id":"link3",active:n.value=="link3"},{default:a(()=>[t(" Link 3 ")]),_:1},8,["active"])]),_:1}),e(o,{title:"Section title 2"},{default:a(()=>[e(i,{"item-id":"link4",active:n.value=="link4"},{default:a(()=>[t(" Link 4 ")]),_:1},8,["active"]),e(i,{"item-id":"link5",active:n.value=="link5"},{default:a(()=>[t(" Link 5 ")]),_:1},8,["active"]),e(i,{"item-id":"link6",active:n.value=="link6"},{default:a(()=>[t(" Link 6 ")]),_:1},8,["active"])]),_:1})]),_:1})]),_:1})]),_:1},8,["dark"]),e(u,{title:"Flyout",dark:p.value!=="light"&&r.value!=="tertiary","max-width":"300px",source:`<pf-nav @select="selectLink">
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
</pf-nav>`},{default:a(()=>[e(s,{onSelect:l},{default:a(()=>[e(s,{onSelect:l},{default:a(()=>[e(m,null,{default:a(()=>[e(o,{title:"Section title 1"},{default:a(()=>[e(i,{"item-id":"link1",active:n.value=="link1"},{default:a(()=>[t(" Link 1 ")]),_:1},8,["active"]),e(i,{"item-id":"link2",active:n.value=="link2"},{default:a(()=>[t(" Link 2 ")]),_:1},8,["active"]),e(i,{"item-id":"link3",active:n.value=="link3"},{flyout:a(()=>[e(s,{variant:"subnav"},{default:a(()=>[e(m,null,{default:a(()=>[e(i,{"item-id":"link7",active:n.value=="link7"},{default:a(()=>[t(" Link 7 ")]),_:1},8,["active"])]),_:1})]),_:1})]),default:a(()=>[t(" Link 3 ")]),_:1},8,["active"])]),_:1}),e(o,{title:"Section title 2"},{default:a(()=>[e(i,{"item-id":"link4",active:n.value=="link4"},{default:a(()=>[t(" Link 4 ")]),_:1},8,["active"]),e(i,{"item-id":"link5",active:n.value=="link5"},{default:a(()=>[t(" Link 5 ")]),_:1},8,["active"]),e(i,{"item-id":"link6",active:n.value=="link6"},{default:a(()=>[t(" Link 6 ")]),_:1},8,["active"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["dark"])]),_:1})}}});export{b as default};
