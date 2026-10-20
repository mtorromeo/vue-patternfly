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
import { MapChart } from 'echarts/charts';
import { AriaComponent, ToolboxComponent, TooltipComponent, VisualMapContinuousComponent } from 'echarts/components';
import { SVGRenderer } from 'echarts/renderers';
import { useOUIAProps, type OUIAProps } from '@vue-patternfly/core/helpers/ouia';
import type { ChartClickEvent, ChartDataZoomEvent, ChartLegendSelectChangedEvent, ChartWrapperProps } from './common';
import { getMapOption, type ChartMapDatum, type ChartMapGeoJson } from './builders/map';
import PfCharts from './Charts.vue';
import { useChartsProps, useMapRegistration, useThemeVersion } from './use';
import { withStyleSource } from './utils/styles';

use([MapChart, AriaComponent, TooltipComponent, VisualMapContinuousComponent, ToolboxComponent, SVGRenderer]);

interface Props extends OUIAProps, Omit<ChartWrapperProps, 'legendData'>, /* @vue-ignore */ HTMLAttributes {
  /** Name of the map: a map registered with `echarts.registerMap`, or the name `geoJson` is registered with */
  map: string;
  /** GeoJSON of the map, registered with ECharts under the `map` name -- see https://echarts.apache.org/en/api.html#echarts.registerMap */
  geoJson?: ChartMapGeoJson;
  /** The regions with a value, matched by name with the regions of the map and mapped to a color of the scale */
  data?: ChartMapDatum[];
  /** The value mapped to the lightest color; defaults to the lowest value */
  min?: number;
  /** The value mapped to the darkest color; defaults to the highest value */
  max?: number;
  /** Shows the name of each region */
  labels?: boolean;
  /** Lets the user zoom and pan the map, capturing the page scroll over it */
  roam?: boolean;
}
</script>

<script setup lang="ts">
defineOptions({
  name: 'PfChartMap',
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
const chartOption = computed(() => {
  void themeVersion.value;
  return withStyleSource(chartElement(), () => getMapOption(props));
});
</script>
