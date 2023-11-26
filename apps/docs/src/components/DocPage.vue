<template>
  <pf-page-section variant="light" translate="no" width-limited>
    <pf-title v-if="title" size="4xl">{{ title }}</pf-title>
    <p v-if="$slots.description">
      <slot name="description" />
    </p>
  </pf-page-section>

  <pf-page-section v-if="$slots.apidocs || pfDocUrl" type="tabs" sticky="top">
    <pf-tabs :active-key="(Array.isArray($route.params.mainTab) ? $route.params.mainTab[0] : $route.params.mainTab) ?? 'story'" page-insets no-border-bottom>
      <router-link v-slot="{ href, navigate }" custom :to="{ params: { mainTab: 'story' } }">
        <pf-tab key="story" title="Story" :href="href" @click="navigate" />
      </router-link>
      <router-link v-if="$slots.apidocs" v-slot="{ href, navigate }" custom :to="{ params: { mainTab: 'apidocs' } }">
        <pf-tab key="apidocs" title="API Docs" :href="href" @click="navigate" />
      </router-link>
      <pf-tab v-if="pfDocUrl" title="PatternFly Design Guidelines" :href="`${pfDocUrl}/design-guidelines`" target="_blank">
        <template #icon>
          <up-right-from-square-icon />
        </template>
      </pf-tab>
    </pf-tabs>
  </pf-page-section>

  <pf-page-section v-if="!$route.params.mainTab || $route.params.mainTab === 'story'" width-limited>
    <pf-flex>
      <pf-jump-links class="toc" :offset="120" vertical expandable="expandable" expandable-xl2="nonExpandable" scrollable-element="main.pf-v5-c-page__main" auto-link-from-elements="h3.pf-v5-c-title">
        <template #label>Table of contents</template>
      </pf-jump-links>

      <pf-flex-item grow>
        <div class="story-content">
          <slot />
        </div>
      </pf-flex-item>
    </pf-flex>
  </pf-page-section>

  <pf-page-section v-if="$slots.apidocs && $route.params.mainTab === 'apidocs'" width-limited>
    <slot name="apidocs" />
  </pf-page-section>
</template>

<style scoped>
.story-content {
  max-width: 832px;
}

.toc {
  position: sticky;
  top: 50px;
  width: 280px;
  flex-grow: 1;
  max-height: calc(100vh - 86px);
  overflow-y: auto;
  scrollbar-width: none;
  order: 1;
  padding: 0 var(--pf-v5-global--spacer--lg) var(--pf-v5-global--spacer--lg) var(--pf-v5-global--spacer--2xl);
  margin: 0;
}
</style>

<script lang="ts" setup>
import { onMounted } from 'vue';
import type { ComponentProps, PfPageSection } from '@vue-patternfly/core';
import UpRightFromSquareIcon from '@vue-patternfly/icons/up-right-from-square-icon';

export interface Props extends /* @vue-ignore */ ComponentProps<typeof PfPageSection> {
  title?: string;
  noDesignGuidelines?: boolean;
}

const props = defineProps<Props>();

let pfDocUrl = '';
if (props.title && !props.noDesignGuidelines) {
  pfDocUrl = `https://www.patternfly.org/components/${props.title.replace(/ /g, '-').toLowerCase()}`;
}

defineSlots<{
  default: (props?: Record<never, never>) => any;
  apidocs?: (props?: Record<never, never>) => any;
  description?: (props?: Record<never, never>) => any;
}>();

onMounted(() => {
  if (props.title) {
    document.title = `VuePatternFly • ${props.title}`;
  } else {
    document.title = `VuePatternFly`;
  }
});
</script>
