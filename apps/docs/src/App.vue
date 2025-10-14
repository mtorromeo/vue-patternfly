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
              <pf-brand src="">
                <object v-html="PfLogo" />
              </pf-brand>
            </pf-masthead-brand>
          </router-link>
        </pf-masthead-main>
        <pf-masthead-content>
          <pf-toolbar full-height>
            <pf-toolbar-content>
              <pf-toolbar-group align="end">
                <pf-toolbar-item>
                  <pf-toggle-group :model-value="darkTheme" @update:model-value="darkTheme = Boolean($event)" aria-label="Dark mode toggle">
                    <pf-toggle-group-item :value="false">
                      <sun-icon />
                    </pf-toggle-group-item>
                    <pf-toggle-group-item :value="true">
                      <moon-icon />
                    </pf-toggle-group-item>
                  </pf-toggle-group>
                </pf-toolbar-item>
                <pf-toolbar-item>
                  <pf-dropdown>
                    <template #toggle>
                      <pf-menu-toggle>
                        VuePatternfly v6
                      </pf-menu-toggle>
                    </template>

                    <pf-dropdown-item to="https://mtorromeo.github.io/vue-patternfly/v5/">VuePatternFly v5</pf-dropdown-item>
                  </pf-dropdown>
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
      <pf-alert v-for="a of alerts.notifications.slice(0, maxDisplayed > 0 ? maxDisplayed : alerts.notifications.length)" :key="a.id" :variant="a.variant" :title="a.title" live-region @close="alerts.delete(a.id)">
        <template v-if="a.text" #default>
          <p>{{ a.text }}</p>
        </template>
      </pf-alert>
    </pf-alert-group>
  </pf-page>

  <router-view v-else />
</template>

<style lang="scss">
.pf-v6-c-brand svg {
  height: 38px;
  width: auto;

  :where(.pf-v6-theme-dark) & #PatternFly-Copy-11 {
    fill: white;
  }

  #Logo {
    filter: hue-rotate(257deg) brightness(0.65) contrast(2);

    :where(.pf-v6-theme-dark) & {
      filter: hue-rotate(257deg) brightness(0.85) contrast(2);
    }
  }
}

.page__layouts {
  .pf-v6-l-bullseye,
  .pf-v6-l-flex,
  .pf-v6-l-gallery,
  .pf-v6-l-grid,
  .pf-v6-l-level,
  .pf-v6-l-split,
  .pf-v6-l-stack {
    &,
    > div {
      border-color: rgba(0, 0, 0, 0.125);
      border-style: dashed;
      border-width: 1px;

      background-color: var(--pf-t--color--green--10);
      :where(.pf-v6-theme-dark) & {
        background-color: var(--pf-t--color--green--50);
      }

      > div {
        background-color: var(--pf-t--color--green--20);
        :where(.pf-v6-theme-dark) & {
          background-color: var(--pf-t--color--green--60);
        }

        > div {
          background-color: var(--pf-t--color--green--30);
          :where(.pf-v6-theme-dark) & {
            background-color: var(--pf-t--color--green--70);
          }
        }
      }

      &:not(:has(div)) {
        padding: 1rem;
      }
    }
  }
}
</style>

<script lang="ts" setup>
import { computed, ref, watch } from "vue";
import { stories } from "./router";
import { useAlertsStore } from "./store/alerts";
import PfLogo from "@patternfly/patternfly/assets/images/PF-HorizontalLogo-Color.svg?raw";
import BarsIcon from "@vue-patternfly/icons/bars-icon";
import SunIcon from "@vue-patternfly/icons/sun-icon";
import MoonIcon from "@vue-patternfly/icons/moon-icon";

const alerts = useAlertsStore();
const maxDisplayed = ref(5);

const overflowMessage = computed(() => {
  if (maxDisplayed.value <= 0) {
    return "";
  }
  const overflow = alerts.notifications.length - maxDisplayed.value;
  if (overflow > 0) {
    return `View ${overflow} more alerts`;
  }
  return "";
});

const darkTheme = ref(document.documentElement.classList.contains("pf-v6-theme-dark"));

watch(darkTheme, (value) => {
  if (value) {
    document.documentElement.classList.add("pf-v6-theme-dark");
  } else {
    document.documentElement.classList.remove("pf-v6-theme-dark");
  }
});

function expandAlerts() {
  maxDisplayed.value = 0;
}

watch(
  () => alerts.notifications.length,
  (l) => {
    if (l <= 5) {
      maxDisplayed.value = 5;
    }
  },
);
</script>
