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
          close
          @close="alerts.splice(index, 1)"
        />
      </pf-alert-group>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const alerts = ref([]);
const getUniqueId = () => new Date().getTime();
</script>
