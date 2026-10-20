<template>
  <doc-page title="Gauge chart">
    <template #description
      >A <b>gauge chart</b> shows a single value within a range, like a utilization or a speed.</template
    >

    <template #apidocs>
      <component-info name="PfChartGauge" />
    </template>

    <pre v-md>
      Note: charts live in their own package at [@vue-patternfly/charts](https://www.npmjs.com/package/@vue-patternfly/charts)!

      patternfly-react has no gauge chart: `PfChartGauge` is based on the ECharts [gauge series](https://echarts.apache.org/en/option.html#series-gauge), styled like the donut utilization chart.

      ## Examples
    </pre>

    <story-canvas title="Basic">
      <div style="width: 230px">
        <pf-chart-gauge
          aria-label="Gauge chart example"
          :height="230"
          sub-title="of 100 GBps"
          title="75%"
          :value="75"
        />
      </div>
    </story-canvas>

    <story-canvas title="Thresholds">
      <div style="width: 230px">
        <pf-chart-gauge
          aria-label="Gauge chart with thresholds example"
          :height="230"
          sub-title="of 100 GBps"
          :thresholds="[{ value: 60 }, { value: 90 }]"
          :title="`${used}%`"
          :value="used"
        />
      </div>
    </story-canvas>

    <story-canvas title="Inverted thresholds">
      <div style="width: 230px">
        <pf-chart-gauge
          aria-label="Gauge chart with inverted thresholds example"
          :height="230"
          invert
          sub-title="remaining"
          :thresholds="[{ value: 60 }, { value: 20 }]"
          :title="`${remaining}%`"
          :value="remaining"
        />
      </div>
    </story-canvas>

    <story-canvas title="Scale and pointer">
      <div style="width: 300px">
        <pf-chart-gauge
          aria-label="Gauge chart with scale and pointer example"
          :height="300"
          :max="200"
          pointer
          sub-title="requests/s"
          theme-color="green"
          ticks
          :value="120"
        />
      </div>
    </story-canvas>

    <story-canvas title="Half circle">
      <div style="width: 300px">
        <pf-chart-gauge
          aria-label="Half circle gauge chart example"
          :end-angle="0"
          :height="200"
          :start-angle="180"
          sub-title="CPU"
          title="45%"
          :value="45"
        />
      </div>
    </story-canvas>

    <story-canvas title="Skeleton">
      <div style="width: 230px">
        <pf-chart-gauge
          aria-label="Gauge chart skeleton example"
          :height="230"
          sub-title="of 100 GBps"
          theme-color="skeleton"
          title="75%"
          :value="75"
        />
      </div>
    </story-canvas>
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
