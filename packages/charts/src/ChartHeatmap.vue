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
import { HeatmapChart } from 'echarts/charts';
import {
  AriaComponent,
  GridComponent,
  ToolboxComponent,
  TooltipComponent,
  VisualMapContinuousComponent,
} from 'echarts/components';
import { SVGRenderer } from 'echarts/renderers';
import { useOUIAProps, type OUIAProps } from '@vue-patternfly/core/helpers/ouia';
import type { ChartClickEvent, ChartDataZoomEvent, ChartLegendSelectChangedEvent, ChartWrapperProps } from './common';
import { getHeatmapOption, type ChartHeatmapDatum } from './builders/heatmap';
import PfCharts from './Charts.vue';
import { useChartsProps, useThemeVersion } from './use';
import { withStyleSource } from './utils/styles';

use([
  HeatmapChart,
  AriaComponent,
  GridComponent,
  TooltipComponent,
  VisualMapContinuousComponent,
  ToolboxComponent,
  SVGRenderer,
]);

interface Props extends OUIAProps, Omit<ChartWrapperProps, 'legendData'>, /* @vue-ignore */ HTMLAttributes {
  /** The cells: their `value` is mapped to a color of the scale */
  data?: ChartHeatmapDatum[];
  /** The columns, in order; defaults to the x values in order of appearance */
  xCategories?: (string | number)[];
  /** The rows, from top to bottom; defaults to the y values in order of appearance */
  yCategories?: (string | number)[];
  /** The value mapped to the lightest color; defaults to the lowest value */
  min?: number;
  /** The value mapped to the darkest color; defaults to the highest value */
  max?: number;
  /** Shows the value inside each cell */
  labels?: boolean;
  /** Label of the x axis */
  xAxisLabel?: string;
  /** Label of the y axis */
  yAxisLabel?: string;
}
</script>

<script setup lang="ts">
defineOptions({
  name: 'PfChartHeatmap',
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
  return withStyleSource(chartElement(), () => getHeatmapOption(props));
});
</script>
