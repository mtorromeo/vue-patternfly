<template>
  <doc-page title="Alert Group">
    <component-title name="pf-alert-group" />

    <story-canvas title="Static">
      <pf-alert-group>
        <pf-alert title="Success Alert" variant="success" inline />
        <pf-alert title="Info Alert" variant="info" inline />
      </pf-alert-group>
    </story-canvas>

    <story-canvas title="Toast">
      <pf-input-group>
        <pf-button
          variant="secondary"
          @click="alerts.push({
            title: 'Toast Success Alert',
            variant: 'success',
            key: getUniqueId(),
          })"
        >
          Add Toast Success Alert
        </pf-button>
        <pf-button
          variant="secondary"
          @click="alerts.push({
            title: 'Toast Info Alert',
            variant: 'info',
            key: getUniqueId(),
          })"
        >
          Add Toast Info Alert
        </pf-button>
        <pf-button
          variant="secondary"
          @click="alerts.push({
            title: 'Toast Danger Alert',
            variant: 'danger',
            key: getUniqueId(),
          })"
        >
          Add Toast Danger Alert
        </pf-button>
      </pf-input-group>

      <pf-alert-group toast>
        <pf-alert
          v-for="(a, index) of alerts"
          :key="a.key"
          :variant="a.variant"
          :title="a.title"
          live-region
          @close="alerts.splice(index, 1)"
        />
      </pf-alert-group>
    </story-canvas>

    <story-canvas title="Toast with overflow capture">
      <pf-input-group>
        <pf-button
          variant="secondary"
          @click="alerts2.push({
            title: 'Toast Success Alert',
            variant: 'success',
            key: getUniqueId(),
          })"
        >
          Add Toast Success Alert
        </pf-button>
        <pf-button
          variant="secondary"
          @click="alerts2.push({
            title: 'Toast Info Alert',
            variant: 'info',
            key: getUniqueId(),
          })"
        >
          Add Toast Info Alert
        </pf-button>
        <pf-button
          variant="secondary"
          @click="alerts2.push({
            title: 'Toast Danger Alert',
            variant: 'danger',
            key: getUniqueId(),
          })"
        >
          Add Toast Danger Alert
        </pf-button>
      </pf-input-group>

      <pf-alert-group toast live-region :overflow-message="overflowMessage" @overflow-click="onOverflowClick">
        <pf-alert
          v-for="(a, index) of alerts2.slice(0, maxDisplayed)"
          :key="a.key"
          :variant="a.variant"
          :title="a.title"
          live-region
          @close="alerts2.splice(index, 1)"
        />
      </pf-alert-group>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import { reactive, computed, type HTMLAttributes } from 'vue';
import type { ComponentProps, PfAlert } from '@vue-patternfly/core';

type AlertData = {
  title: string;
  variant: ComponentProps<(typeof PfAlert)>['variant'];
  liveRegion?: boolean;
  key: number;
  ariaLive?: HTMLAttributes['aria-live'];
  ariaRelevant?: HTMLAttributes['aria-relevant'];
  ariaAtomic?: HTMLAttributes['aria-atomic'];
};

const alerts: AlertData[] = reactive([]);
const getUniqueId = () => new Date().getTime();

const alerts2: AlertData[] = reactive([]);
const onOverflowClick = () => console.log('Overflow message clicked');
const maxDisplayed = 4;
const overflowMessage = computed(() => {
  const overflow = alerts2.length - maxDisplayed;
  if (overflow > 0) {
    return `View ${overflow} more alerts`;
  }
  return '';
});
</script>
