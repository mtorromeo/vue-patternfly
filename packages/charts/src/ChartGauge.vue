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
import { GaugeChart } from 'echarts/charts';
import { AriaComponent, ToolboxComponent, TooltipComponent } from 'echarts/components';
import { SVGRenderer } from 'echarts/renderers';
import { useOUIAProps, type OUIAProps } from '@vue-patternfly/core/helpers/ouia';
import type {
  ChartClickEvent,
  ChartDataZoomEvent,
  ChartLegendSelectChangedEvent,
  ChartsBaseProps,
  ChartsOption,
} from './common';
import { getGaugeOption } from './builders/gauge';
import type { DonutThreshold } from './builders/pie';
import PfCharts from './Charts.vue';
import { useChartsProps, useThemeVersion } from './use';
import { withStyleSource } from './utils/styles';

use([GaugeChart, AriaComponent, ToolboxComponent, TooltipComponent, SVGRenderer]);

interface Props extends OUIAProps, ChartsBaseProps, /* @vue-ignore */ HTMLAttributes {
  /** The value shown by the gauge */
  value?: number;
  /** The value at the start of the gauge */
  min?: number;
  /** The value at the end of the gauge */
  max?: number;
  /** Changes the color of the value once it reaches each threshold, in the same unit as the value */
  thresholds?: DonutThreshold[];
  /** Thresholds apply when the value drops below them, instead of above */
  invert?: boolean;
  /** Title shown in the center of the gauge; defaults to the value */
  title?: string;
  /** Subtitle shown below the title */
  subTitle?: string;
  /** Angle where the gauge starts, in degrees (0 is the right, counter-clockwise) */
  startAngle?: number;
  /** Angle where the gauge ends, in degrees */
  endAngle?: number;
  /** Shows the scale: split lines, ticks and labels */
  ticks?: boolean;
  /** Shows a needle pointing at the value */
  pointer?: boolean;
  /** Applies decal patterns to the data, in addition to colors */
  patterns?: boolean;
  /** Shows buttons to save the chart as an image and to restore it */
  toolbox?: boolean;
  /** ECharts option deep merged over the generated option */
  option?: ChartsOption;
}
</script>

<script setup lang="ts">
defineOptions({
  name: 'PfChartGauge',
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
  return withStyleSource(chartElement(), () => getGaugeOption(props));
});
</script>
