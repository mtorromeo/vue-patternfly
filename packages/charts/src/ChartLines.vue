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
import { LinesChart, ScatterChart } from 'echarts/charts';
import { AriaComponent, GeoComponent, LegendComponent, ToolboxComponent, TooltipComponent } from 'echarts/components';
import { SVGRenderer } from 'echarts/renderers';
import { usePreferredReducedMotion } from '@vueuse/core';
import { useOUIAProps, type OUIAProps } from '@vue-patternfly/core/helpers/ouia';
import type { ChartClickEvent, ChartDataZoomEvent, ChartLegendSelectChangedEvent, ChartWrapperProps } from './common';
import { getLinesOption, type ChartLinesSeries } from './builders/lines';
import type { ChartMapGeoJson } from './builders/map';
import PfCharts from './Charts.vue';
import { useChartsProps, useMapRegistration, useThemeVersion } from './use';
import { withStyleSource } from './utils/styles';
import { getTheme } from './utils/theme';

use([
  LinesChart,
  ScatterChart,
  AriaComponent,
  GeoComponent,
  LegendComponent,
  ToolboxComponent,
  TooltipComponent,
  SVGRenderer,
]);

interface Props extends OUIAProps, ChartWrapperProps, /* @vue-ignore */ HTMLAttributes {
  /** Name of the map drawn under the lines: a map registered with `echarts.registerMap`, or the name `geoJson` is registered with */
  map: string;
  /** GeoJSON of the map, registered with ECharts under the `map` name -- see https://echarts.apache.org/en/api.html#echarts.registerMap */
  geoJson?: ChartMapGeoJson;
  /** The series to draw, each as a group of lines between points of the map */
  series?: ChartLinesSeries[];
  /** Bends the lines with only a start and an end */
  curved?: boolean;
  /** Draws an arrow at the end of each line with only a start and an end */
  directed?: boolean;
  /** Draws a point at the start and end of each line */
  points?: boolean;
  /** Moves a symbol along the lines, with a trail behind it with the canvas renderer, unless the user prefers reduced motion */
  effect?: boolean;
  /** Lets the user zoom and pan the map, capturing the page scroll over it */
  roam?: boolean;
}
</script>

<script setup lang="ts">
defineOptions({
  name: 'PfChartLines',
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
useMapRegistration(props);
const reducedMotion = usePreferredReducedMotion();
const chartOption = computed(() => {
  void themeVersion.value;
  return withStyleSource(chartElement(), () =>
    getLinesOption(
      { ...props, effect: props.effect && reducedMotion.value !== 'reduce' },
      (props.theme ?? getTheme(props.themeColor)).color,
    ),
  );
});
</script>
