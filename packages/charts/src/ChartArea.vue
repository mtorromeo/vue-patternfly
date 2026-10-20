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
import { LineChart } from 'echarts/charts';
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
  LineChart,
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
  /** Stacks the areas on top of each other, like patternfly-react's ChartStack */
  stacked?: boolean;
  /** Draws a point for each data point */
  showSymbol?: boolean;
}
</script>

<script setup lang="ts">
defineOptions({
  name: 'PfChartArea',
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
    getCartesianOption('area', {
      ...props,
      timelineAutoplay: props.timelineAutoplay && reducedMotion.value !== 'reduce',
    }),
  );
});
</script>
