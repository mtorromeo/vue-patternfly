<template>
  <doc-page title="Navigation">
    <template #description
      >A <b>navigation</b> organizes an application's structure and content, making it easy to find information and accomplish tasks. Navigation communicates relationships, context, and actions a user can take within an
      application.</template
    >

    <template #apidocs>
      <component-info src="packages/core/src/components/Nav/Nav.vue" />
      <component-info src="packages/core/src/components/Nav/NavExpandable.vue" />
      <component-info src="packages/core/src/components/Nav/NavGroup.vue" />
      <component-info src="packages/core/src/components/Nav/NavItem.vue" />
      <component-info src="packages/core/src/components/Nav/NavItemSeparator.vue" />
      <component-info src="packages/core/src/components/Nav/NavList.vue" />
    </template>

    <story-canvas title="Default" :dark="theme !== 'light' && variant !== 'tertiary'" max-width="300px">
      <pf-nav>
        <pf-nav-list>
          <pf-nav-item item-id="link1" :active="activeLink == 'link1'" @select="selectLink"> Link 1 </pf-nav-item>
          <pf-nav-item item-id="link2" :active="activeLink == 'link2'" @select="selectLink"> Link 2 </pf-nav-item>
          <pf-nav-item item-id="link3" :active="activeLink == 'link3'" @select="selectLink"> Link 3 </pf-nav-item>
          <pf-nav-item item-id="link4" :active="activeLink == 'link4'" @select="selectLink"> Link 4 </pf-nav-item>
          <pf-nav-item item-id="link5" :active="activeLink == 'link5'" @select="selectLink"> Link 5 </pf-nav-item>
        </pf-nav-list>
      </pf-nav>
    </story-canvas>

    <story-canvas title="Grouped" :dark="theme !== 'light' && variant !== 'tertiary'" max-width="300px">
      <pf-nav @select="selectLink">
        <pf-nav-list>
          <pf-nav-group title="Section title 1">
            <pf-nav-item item-id="link1" :active="activeLink == 'link1'"> Link 1 </pf-nav-item>
            <pf-nav-item item-id="link2" :active="activeLink == 'link2'"> Link 2 </pf-nav-item>
            <pf-nav-item item-id="link3" :active="activeLink == 'link3'"> Link 3 </pf-nav-item>
          </pf-nav-group>
          <pf-nav-group title="Section title 2">
            <pf-nav-item item-id="link4" :active="activeLink == 'link4'"> Link 4 </pf-nav-item>
            <pf-nav-item item-id="link5" :active="activeLink == 'link5'"> Link 5 </pf-nav-item>
            <pf-nav-item item-id="link6" :active="activeLink == 'link6'"> Link 6 </pf-nav-item>
          </pf-nav-group>
        </pf-nav-list>
      </pf-nav>
    </story-canvas>

    <story-canvas title="Flyout" :dark="theme !== 'light' && variant !== 'tertiary'" max-width="300px">
      <pf-nav @select="selectLink">
        <pf-nav @select="selectLink">
          <pf-nav-list>
            <pf-nav-group title="Section title 1">
              <pf-nav-item item-id="link1" :active="activeLink == 'link1'"> Link 1 </pf-nav-item>
              <pf-nav-item item-id="link2" :active="activeLink == 'link2'"> Link 2 </pf-nav-item>
              <pf-nav-item item-id="link3" :active="activeLink == 'link3'">
                Link 3
                <template #flyout>
                  <pf-nav>
                    <pf-nav-list>
                      <pf-nav-item item-id="link7" :active="activeLink == 'link7'"> Link 7 </pf-nav-item>
                    </pf-nav-list>
                  </pf-nav>
                </template>
              </pf-nav-item>
            </pf-nav-group>
            <pf-nav-group title="Section title 2">
              <pf-nav-item item-id="link4" :active="activeLink == 'link4'"> Link 4 </pf-nav-item>
              <pf-nav-item item-id="link5" :active="activeLink == 'link5'"> Link 5 </pf-nav-item>
              <pf-nav-item item-id="link6" :active="activeLink == 'link6'"> Link 6 </pf-nav-item>
            </pf-nav-group>
          </pf-nav-list>
        </pf-nav>
      </pf-nav></story-canvas
    >
  </doc-page>
</template>

<script lang="ts" setup>
import { ref, type Ref } from "vue";
const activeLink: Ref<string | undefined> = ref("link1");
const theme = ref("dark");
const variant = ref("default");

function selectLink(e: Event, groupid: string | undefined, itemid: string | undefined) {
  activeLink.value = itemid;
}
</script>
