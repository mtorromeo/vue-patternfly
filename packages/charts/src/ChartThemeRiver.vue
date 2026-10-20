<template>
  <pf-charts
    ref="chartsRef"
    v-bind="{ ...chartsProps, ...ouiaProps }"
    :option="chartOption"
    @click="emit('click', $event)"
    @datazoom="emit('datazoom', $event)"
    @legendselectchanged="emit('legendselectchanged', $event)"
  />
</template>

<script lang="ts">
import { computed, useTemplateRef, type HTMLAttributes } from 'vue';
import { use } from 'echarts/core';
import { ThemeRiverChart } from 'echarts/charts';
import {
  AriaComponent,
  LegendComponent,
  SingleAxisComponent,
  ToolboxComponent,
  TooltipComponent,
} from 'echarts/components';
import { SVGRenderer } from 'echarts/renderers';
import { useOUIAProps, type OUIAProps } from '@vue-patternfly/core/helpers/ouia';
import type {
  ChartClickEvent,
  ChartDataZoomEvent,
  ChartLegendSelectChangedEvent,
  ChartSeries,
  ChartWrapperProps,
} from './common';
import { getThemeRiverOption } from './builders/themeriver';
import PfCharts from './Charts.vue';
import { useChartsProps, useThemeVersion } from './use';
import { withStyleSource } from './utils/styles';

use([
  ThemeRiverChart,
  AriaComponent,
  LegendComponent,
  SingleAxisComponent,
  ToolboxComponent,
  TooltipComponent,
  SVGRenderer,
]);

interface Props extends OUIAProps, ChartWrapperProps, /* @vue-ignore */ HTMLAttributes {
  /**
   * The streams, each with its values over time: `x` is a date (or a number) and `y` the value. ECharts draws them as
   * a single series, so other series properties don't apply.
   */
  series?: ChartSeries[];
  /** Shows the name of each stream before its start */
  labels?: boolean;
  /** Label of the time axis */
  xAxisLabel?: string;
}
</script>

<script setup lang="ts">
defineOptions({
  name: 'PfChartThemeRiver',
});

const props = withDefaults(defineProps<Props>(), {
  legendTooltip: true,
  svgRenderer: true,
});

const emit = defineEmits<{
  /** Emitted when a chart element is clicked -- see https://echarts.apache.org/en/api.html#events.Mouse%20events */
  (name: 'click', params: ChartClickEvent): void;
  /** Emitted when a legend item is toggled -- see https://echarts.apache.org/en/api.html#events.legendselectchanged */
  (name: 'legendselectchanged', params: ChartLegendSelectChangedEvent): void;
  /** Emitted when the data zoom range changes -- see https://echarts.apache.org/en/api.html#events.datazoom */
  (name: 'datazoom', params: ChartDataZoomEvent): void;
}>();

const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });
const chartsProps = useChartsProps(props);
const chartsRef = useTemplateRef('chartsRef');
const chartElement = (): Element | undefined => chartsRef.value?.$el;
const themeVersion = useThemeVersion(chartElement);
const chartOption = computed(() => {
  void themeVersion.value;
  return withStyleSource(chartElement(), () => getThemeRiverOption(props));
});
</script>
