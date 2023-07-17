<template>
  <pf-page v-if="!$route.meta.iframe" managed-sidebar>
    <template #skeleton>
      <pf-page-header show-nav-toggle>
        <template #logo>
          <router-link :to="{ name: 'introduction' }">
            <pf-brand
              src="https://www.patternfly.org/assets/images/pf_logo.svg"
              style="height:40px;filter:invert(1)"
            />
          </router-link>
        </template>

        <pf-page-header-tools>
          <pf-page-header-tools-group>
            <pf-page-header-tools-item visibility-xs="hidden">header-tools</pf-page-header-tools-item>
          </pf-page-header-tools-group>
        </pf-page-header-tools>
      </pf-page-header>

      <pf-page-sidebar nav="PfNavigation" nav-open>
        <pf-nav>
          <pf-nav-group v-for="(categoryStories, category) of stories" :key="category" :title="category">
            <pf-nav-item v-for="story of categoryStories" :key="story.route" :to="{ name: story.route }">{{ story.title }}</pf-nav-item>
          </pf-nav-group>
        </pf-nav>
      </pf-page-sidebar>
    </template>

    <router-view />
  </pf-page>

  <router-view v-else />
</template>

<script lang="ts" setup>
import { stories } from './router';
</script>
