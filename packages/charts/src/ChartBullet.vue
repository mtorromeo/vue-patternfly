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
import { BarChart, ScatterChart } from 'echarts/charts';
import {
  AriaComponent,
  GridComponent,
  LegendComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
} from 'echarts/components';
import { SVGRenderer } from 'echarts/renderers';
import { useOUIAProps, type OUIAProps } from '@vue-patternfly/core/helpers/ouia';
import type {
  ChartClickEvent,
  ChartDataZoomEvent,
  ChartDatum,
  ChartLegendSelectChangedEvent,
  ChartWrapperProps,
} from './common';
import { getBulletOption } from './builders/bullet';
import { getTheme } from './utils/theme';
import PfCharts from './Charts.vue';
import { useChartsProps, useThemeVersion } from './use';
import { withStyleSource } from './utils/styles';

use([
  BarChart,
  ScatterChart,
  AriaComponent,
  GridComponent,
  LegendComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  SVGRenderer,
]);

interface Props extends OUIAProps, ChartWrapperProps, /* @vue-ignore */ HTMLAttributes {
  /** Comparative measures drawn as markers, e.g. a target */
  comparativeMeasureData?: ChartDatum[];
  /** Comparative error measures, drawn as markers in the danger color */
  comparativeErrorMeasureData?: ChartDatum[];
  /** Comparative warning measures, drawn as markers in the warning color */
  comparativeWarningMeasureData?: ChartDatum[];
  /** Primary measures drawn as dots */
  primaryDotMeasureData?: ChartDatum[];
  /** Primary measures drawn as overlapping bars */
  primarySegmentedMeasureData?: ChartDatum[];
  /** Qualitative ranges drawn as overlapping bars behind the measures */
  qualitativeRangeData?: ChartDatum[];
  /** Draws the bullet horizontally (default) or vertically */
  horizontal?: boolean;
  /** Reverses the direction of the value axis */
  invert?: boolean;
  /** The minimum value of the value axis; defaults to 0, or the lowest negative value */
  minDomain?: number;
  /** The maximum value of the value axis; defaults to the highest value */
  maxDomain?: number;
  /** Title of the bullet */
  title?: string;
  /** Subtitle of the bullet */
  subTitle?: string;
  /** Position of the title */
  titlePosition?: 'left' | 'top-left';
}
</script>

<script setup lang="ts">
defineOptions({
  name: 'PfChartBullet',
});

const props = withDefaults(defineProps<Props>(), {
  legendTooltip: true,
  svgRenderer: true,
  horizontal: true,
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
  return withStyleSource(chartElement(), () =>
    getBulletOption(props, (props.theme ?? getTheme(props.themeColor)).color),
  );
});
</script>
