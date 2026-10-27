<template>
  <pf-drawer inline :expanded="drawerExpanded" @expand="drawerRef?.focus()">
    <pf-drawer-content>
      <pf-flex class="pf-v6-c-wizard__main-body" direction="column" space-items="lg" style="height: 100%">
        <pf-button v-if="!drawerExpanded" inline variant="link" @click="drawerExpanded = !drawerExpanded">
          Open drawer
        </pf-button>
        <div>{{ activeStep?.name }} content</div>
      </pf-flex>
      <template #content>
        <pf-drawer-panel-content :widths="{ default: 'width_50' }" color-variant="secondary">
          <pf-drawer-head>
            <span ref="drawer" :tabindex="drawerExpanded ? 0 : -1">
              Drawer content: <strong>{{ activeStep?.name }}</strong>
            </span>
            <pf-drawer-actions>
              <pf-drawer-close-button @close="drawerExpanded = false" />
            </pf-drawer-actions>
          </pf-drawer-head>
        </pf-drawer-panel-content>
      </template>
    </pf-drawer-content>
  </pf-drawer>
</template>

<script lang="ts" setup>
import { ref, useTemplateRef } from 'vue';
import { useWizardContext } from '@vue-patternfly/core';

const drawerExpanded = ref(false);
const drawerRef = useTemplateRef<HTMLSpanElement>('drawer');
const { activeStep } = useWizardContext();
</script>
