<template>
  <pf-charts
    ref="chartsRef"
    v-bind="{ ...chartsProps, ...ouiaProps }"
    :option="chartOption"
    @click="emit('click', $event)"
    @brushselected="emit('brushselected', $event)"
    @datazoom="emit('datazoom', $event)"
    @legendselectchanged="emit('legendselectchanged', $event)"
  />
</template>

<script lang="ts">
import { computed, useTemplateRef, type HTMLAttributes } from 'vue';
import { use } from 'echarts/core';
import { BarChart, LineChart, PictorialBarChart } from 'echarts/charts';
import {
  AriaComponent,
  BrushComponent,
  DataZoomComponent,
  GridComponent,
  LegendComponent,
  PolarComponent,
  TimelineComponent,
  ToolboxComponent,
  TooltipComponent,
} from 'echarts/components';
import { SVGRenderer } from 'echarts/renderers';
import { usePreferredReducedMotion } from '@vueuse/core';
import { useOUIAProps, type OUIAProps } from '@vue-patternfly/core/helpers/ouia';
import type {
  ChartBrushSelectedEvent,
  ChartCartesianProps,
  ChartClickEvent,
  ChartDataZoomEvent,
  ChartLegendSelectChangedEvent,
} from './common';
import { getCartesianOption } from './builders/cartesian';
import PfCharts from './Charts.vue';
import { useChartsProps, useThemeVersion } from './use';
import { withStyleSource } from './utils/styles';

use([
  BarChart,
  LineChart,
  PictorialBarChart,
  AriaComponent,
  BrushComponent,
  DataZoomComponent,
  GridComponent,
  LegendComponent,
  PolarComponent,
  TimelineComponent,
  ToolboxComponent,
  TooltipComponent,
  SVGRenderer,
]);

interface Props extends OUIAProps, ChartCartesianProps, /* @vue-ignore */ HTMLAttributes {
  /** Stacks the bars on top of each other, like patternfly-react's ChartStack; pictorial bars are not stacked */
  stacked?: boolean;
  /** Width of the bars, in pixels or as a percentage of the category width */
  barWidth?: number | string;
  /**
   * Draws the bars with this symbol: an ECharts symbol (`circle`, `rect`, `roundRect`, `triangle`, `diamond`, `pin`,
   * `arrow`), `image://` followed by an image URL or `path://` followed by an SVG path
   */
  pictorial?: string;
  /** Repeats the pictorial symbol along the bar, cutting the last one at the value, instead of stretching it over the bar */
  pictorialRepeat?: boolean;
  /** Size of the pictorial symbol in pixels, as `[width, height]` or one value for both; defaults to the width of the bar */
  pictorialSize?: number | [number, number];
}
</script>

<script setup lang="ts">
defineOptions({
  name: 'PfChartBar',
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
  /** Emitted when the brushed areas change -- see https://echarts.apache.org/en/api.html#events.brushselected */
  (name: 'brushselected', params: ChartBrushSelectedEvent): void;
}>();

const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });
const chartsProps = useChartsProps(props);
const chartsRef = useTemplateRef('chartsRef');
const chartElement = (): Element | undefined => chartsRef.value?.$el;
const themeVersion = useThemeVersion(chartElement);
const reducedMotion = usePreferredReducedMotion();
const chartOption = computed(() => {
  void themeVersion.value;
  return withStyleSource(chartElement(), () =>
    getCartesianOption('bar', {
      ...props,
      timelineAutoplay: props.timelineAutoplay && reducedMotion.value !== 'reduce',
    }),
  );
});
</script>
