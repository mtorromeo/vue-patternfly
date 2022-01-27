<template>
  <pf-page managed-sidebar>
    <template #skeleton>
      <pf-page-header show-nav-toggle>
        <template #logo>
          <router-link :to="{ name: 'home' }">
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
          <pf-nav-group title="Overview">
            <pf-nav-item :to="{ name: 'home' }">Introduction</pf-nav-item>
            <pf-nav-item :to="{ name: 'layouts' }">Layouts</pf-nav-item>
          </pf-nav-group>

          <pf-nav-group title="Components">
            <pf-nav-item v-for="story of stories" :key="story.route" :to="{ name: story.route }">{{ story.title }}</pf-nav-item>
          </pf-nav-group>
        </pf-nav>
      </pf-page-sidebar>
    </template>

    <router-view />
  </pf-page>
  <!-- -->
</template>

<script lang="ts" setup>
import { stories } from './router';
</script>
