<template>
  <doc-page title="Donut utilization chart">
    <template #description
      >A <b>donut utilization chart</b> shows how much of a capacity is used, optionally against thresholds.</template
    >

    <template #apidocs>
      <component-info name="PfChartDonutUtilization" />
      <component-info name="PfChartDonutThreshold" />
    </template>

    <pre v-md>
      Note: charts live in their own package at [@vue-patternfly/charts](https://www.npmjs.com/package/@vue-patternfly/charts)!

      ## Donut utilization examples
    </pre>

    <story-canvas title="Basic">
      <div style="width: 230px">
        <pf-chart-donut-utilization
          aria-label="Donut utilization chart example"
          :data="{ x: 'GBps capacity', y: 75 }"
          :height="230"
          sub-title="of 100 GBps"
          title="75%"
        />
      </div>
    </story-canvas>

    <story-canvas title="Right aligned legend, with thresholds">
      <div style="width: 435px">
        <pf-chart-donut-utilization
          aria-label="Donut utilization chart example"
          :data="{ x: 'Storage capacity', y: used }"
          :height="230"
          :legend-data="[`Storage capacity: ${used}%`, 'Unused']"
          sub-title="of 100 GBps"
          :thresholds="[{ value: 60 }, { value: 90 }]"
          :title="`${used}%`"
        />
      </div>
    </story-canvas>

    <story-canvas title="Inverted with right aligned legend">
      <div style="width: 435px">
        <pf-chart-donut-utilization
          aria-label="Donut utilization chart example"
          :data="{ x: 'Storage capacity', y: remaining }"
          :height="230"
          invert
          :legend-data="[`Storage capacity: ${remaining}%`, 'Unused']"
          sub-title="of 100 GBps"
          :thresholds="[{ value: 60 }, { value: 20 }]"
          :title="`${remaining}%`"
        />
      </div>
    </story-canvas>

    <story-canvas title="Small with bottom aligned legend">
      <div style="width: 200px">
        <pf-chart-donut-utilization
          aria-label="Donut utilization chart example"
          :data="{ x: 'Storage capacity', y: 45 }"
          :height="225"
          :legend-data="['Storage capacity: 45%', 'Unused']"
          legend-position="bottom"
          sub-title="of 100 GBps"
          title="45%"
        />
      </div>
    </story-canvas>

    <pre v-md>
      ## Donut utilization threshold examples
    </pre>

    <story-canvas title="Static thresholds">
      <div style="width: 230px">
        <pf-chart-donut-threshold
          aria-label="Donut utilization chart with static threshold example"
          :data="[
            { x: 'Warning at 60%', y: 60 },
            { x: 'Danger at 90%', y: 90 },
          ]"
          :height="230"
          sub-title="of 100 GBps"
          :thresholds="[{ value: 60 }, { value: 90 }]"
          title="45%"
          :utilization="{ x: 'Storage capacity', y: 45 }"
        />
      </div>
    </story-canvas>

    <story-canvas title="Static thresholds with right aligned legend">
      <div style="width: 500px">
        <pf-chart-donut-threshold
          aria-label="Donut utilization chart with static threshold example"
          :data="[
            { x: 'Warning at 60%', y: 60 },
            { x: 'Danger at 90%', y: 90 },
          ]"
          :height="230"
          :legend-data="[`Storage capacity: ${used}%`, 'Warning threshold at 60%', 'Danger threshold at 90%']"
          sub-title="of 100 GBps"
          :thresholds="[{ value: 60 }, { value: 90 }]"
          :title="`${used}%`"
          :utilization="{ x: 'Storage capacity', y: used }"
        />
      </div>
    </story-canvas>

    <story-canvas title="Inverted static thresholds with right aligned legend">
      <div style="width: 500px">
        <pf-chart-donut-threshold
          aria-label="Donut utilization chart with static threshold example"
          :data="[
            { x: 'Warning at 60%', y: 60 },
            { x: 'Danger at 20%', y: 20 },
          ]"
          :height="230"
          invert
          :legend-data="[`Storage capacity: ${remaining}%`, 'Danger threshold at 20%', 'Warning threshold at 60%']"
          sub-title="of 100 GBps"
          :thresholds="[{ value: 60 }, { value: 20 }]"
          :title="`${remaining}%`"
          :utilization="{ x: 'Storage capacity', y: remaining }"
        />
      </div>
    </story-canvas>

    <pre v-md>
      ## Differences from patternfly-react

      - In patternfly-react, `ChartDonutThreshold` wraps a `ChartDonutUtilization` child. Here `PfChartDonutThreshold` draws both: the utilization is its `utilization` prop, and `thresholds` sets its dynamic colors.
      - Victory's `isStatic` prop is `static`.
      - ECharts only lists legend items that match a slice, so `legend-data` entries label the slices in order (utilization, then unused part or threshold ranges).
    </pre>
  </doc-page>
</template>

<script lang="ts" setup>
import { onBeforeUnmount, ref } from 'vue';

const used = ref(0);
const remaining = ref(100);
const interval = setInterval(() => {
  used.value = (used.value + 10) % 110;
  remaining.value = remaining.value > 0 ? remaining.value - 10 : 100;
}, 1000);
onBeforeUnmount(() => clearInterval(interval));
</script>
