<template>
  <pf-page v-if="!$route.meta.iframe" managed-sidebar>
    <template #skeleton>
      <pf-masthead>
        <pf-masthead-main>
          <pf-masthead-toggle>
            <pf-page-toggle-button>
              <bars-icon />
            </pf-page-toggle-button>
          </pf-masthead-toggle>
          <router-link v-slot="{ href }" :to="{ name: 'introduction' }" custom>
            <pf-masthead-brand :href="href">
              <pf-brand :src="PfLogo" style="height:38px" />
            </pf-masthead-brand>
          </router-link>
        </pf-masthead-main>
        <pf-masthead-content>
          <pf-toolbar full-height>
            <pf-toolbar-content>
              <pf-toolbar-group align="end">
                <pf-toolbar-item>
                  <pf-toggle-group v-model="darkTheme">
                    <pf-toggle-group-item :value="false">
                      <sun-icon />
                    </pf-toggle-group-item>
                    <pf-toggle-group-item :value="true">
                      <moon-icon />
                    </pf-toggle-group-item>
                  </pf-toggle-group>
                </pf-toolbar-item>
              </pf-toolbar-group>
            </pf-toolbar-content>
          </pf-toolbar>
        </pf-masthead-content>
      </pf-masthead>

      <pf-page-sidebar sidebar-open>
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

<style lang="scss">
.page__layouts {
  .pf-v6-l-bullseye,
  .pf-v6-l-bullseye > div,
  .pf-v6-l-flex,
  .pf-v6-l-flex > div,
  .pf-v6-l-gallery,
  .pf-v6-l-gallery > div,
  .pf-v6-l-grid,
  .pf-v6-l-grid > div,
  .pf-v6-l-level,
  .pf-v6-l-level > div,
  .pf-v6-l-split,
  .pf-v6-l-split > div,
  .pf-v6-l-stack,
  .pf-v6-l-stack > div {
    border-style: dashed !important;
    border-width: 2px !important;
    padding: 1rem !important;
  }

  .pf-v6-l-bullseye,
  .pf-v6-l-flex,
  .pf-v6-l-gallery,
  .pf-v6-l-grid,
  .pf-v6-l-level,
  .pf-v6-l-split,
  .pf-v6-l-stack {
    margin: 1rem 0 !important;
  }
}
</style>

<script lang="ts" setup>
import { computed, ref, watch } from 'vue';
import { stories } from './router';
import { useAlertsStore } from './store/alerts';
import PfLogo from '@patternfly/patternfly/assets/images/PF-HorizontalLogo-Color.svg';
import BarsIcon from '@vue-patternfly/icons/bars-icon';
import SunIcon from '@vue-patternfly/icons/sun-icon';
import MoonIcon from '@vue-patternfly/icons/moon-icon';

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

const darkTheme = ref(document.documentElement.classList.contains('pf-v6-theme-dark'));

watch(darkTheme, value => {
  if (value) {
    document.documentElement.classList.add('pf-v6-theme-dark');
  } else {
    document.documentElement.classList.remove('pf-v6-theme-dark');
  }
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
