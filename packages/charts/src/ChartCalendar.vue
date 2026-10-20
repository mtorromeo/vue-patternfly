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
  CalendarComponent,
  ToolboxComponent,
  TooltipComponent,
  VisualMapContinuousComponent,
} from 'echarts/components';
import { SVGRenderer } from 'echarts/renderers';
import { useOUIAProps, type OUIAProps } from '@vue-patternfly/core/helpers/ouia';
import type { ChartClickEvent, ChartDataZoomEvent, ChartLegendSelectChangedEvent, ChartWrapperProps } from './common';
import { getCalendarOption, type ChartCalendarDate, type ChartCalendarDatum } from './builders/calendar';
import PfCharts from './Charts.vue';
import { useChartsProps, useThemeVersion } from './use';
import { withStyleSource } from './utils/styles';

use([
  HeatmapChart,
  AriaComponent,
  CalendarComponent,
  TooltipComponent,
  VisualMapContinuousComponent,
  ToolboxComponent,
  SVGRenderer,
]);

interface Props extends OUIAProps, Omit<ChartWrapperProps, 'legendData'>, /* @vue-ignore */ HTMLAttributes {
  /** The days with a value, mapped to a color of the scale */
  data?: ChartCalendarDatum[];
  /**
   * The days shown: a year (`2026`), a month (`'2026-03'`) or the first and last day; defaults to the days of the data
   */
  range?: number | string | [ChartCalendarDate, ChartCalendarDate];
  /** The value mapped to the lightest color; defaults to the lowest value */
  min?: number;
  /** The value mapped to the darkest color; defaults to the highest value */
  max?: number;
  /** Lays out the weeks from top to bottom instead of left to right */
  vertical?: boolean;
  /** First day of the week, from 0 (Sunday) to 6 (Saturday) */
  firstDay?: number;
  /** Locale of the day and month names and of the dates in the tooltip; defaults to the browser locale */
  locale?: string;
}
</script>

<script setup lang="ts">
defineOptions({
  name: 'PfChartCalendar',
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
  return withStyleSource(chartElement(), () => getCalendarOption(props));
});
</script>
