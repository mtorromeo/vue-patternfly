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

    <pf-alert-group toast live-region :overflow-message="overflowMessage" @overflow-click="expandAlerts">
      <pf-alert
        v-for="a of alerts.notifications.slice(0, maxDisplayed > 0 ? maxDisplayed : alerts.notifications.length)"
        :key="a.id"
        :variant="a.variant"
        :title="a.title"
        live-region
        @close="alerts.delete(a.id)"
      >
        <template v-if="a.text" #default>
          <p>{{ a.text }}</p>
        </template>
      </pf-alert>
    </pf-alert-group>
  </pf-page>

  <router-view v-else />
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { stories } from './router';
import { useAlertsStore } from './store/alerts';
import { ref } from 'vue';
import { watch } from 'vue';

const alerts = useAlertsStore();
const maxDisplayed = ref(5);

const overflowMessage = computed(() => {
  if (maxDisplayed.value <= 0) {
    return '';
  }
  const overflow = alerts.notifications.length - maxDisplayed.value;
  if (overflow > 0) {
    return `View ${overflow} more alerts`;
  }
  return '';
});

function expandAlerts() {
  maxDisplayed.value = 0;
}

watch(() => alerts.notifications.length, (l) => {
  if (l <= 5) {
    maxDisplayed.value = 5;
  }
});
</script>
