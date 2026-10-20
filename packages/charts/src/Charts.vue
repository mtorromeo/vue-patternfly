<template>
  <div
    ref="containerRef"
    v-bind="ouiaProps"
    role="img"
    :class="chartClass"
    :style="{
      height: height ? `${height}px` : undefined,
      width: width ? `${width}px` : undefined,
    }"
  />
</template>

<script lang="ts">
import { computed, onBeforeUnmount, onMounted, shallowRef, useTemplateRef, watch, type HTMLAttributes } from 'vue';
import { useResizeObserver } from '@vueuse/core';
import type { DataZoomComponentOption, SeriesOption } from 'echarts';
import { ComponentModel, init, type ECharts } from 'echarts/core';
import { useOUIAProps, type OUIAProps } from '@vue-patternfly/core/helpers/ouia';
import type {
  ChartBrushSelectedEvent,
  ChartClickEvent,
  ChartDataZoomEvent,
  ChartLegendSelectChangedEvent,
  ChartsBaseProps,
  ChartsOption,
  ThemeDefinition,
} from './common';
import { getBoxPlotLegend, getSeries, getTooltipType } from './series';
import { ThemeColor } from './themes/ThemeColor';
import { defaultsDeep } from './utils/merge';
import { useThemeVersion } from './use';
import { chartClass, withStyleSource } from './utils/styles';
import { getTheme } from './utils/theme';
import { getLegendTooltip, getSankeyTooltip } from './utils/tooltip';

// `click` is the ECharts click event, not the native one
interface Props extends OUIAProps, ChartsBaseProps, /* @vue-ignore */ Omit<HTMLAttributes, 'onClick'> {
  /**
   * ECharts uses this object to configure its properties; for example, series, title, and tooltip.
   * The PatternFly defaults for each series type are applied to the given series.
   *
   * See https://echarts.apache.org/en/option.html
   */
  option?: ChartsOption;
}

// Option keys that are ECharts components: on updates they are replaced rather than merged, so components missing
// from the new option are removed
const componentTypes = [
  'angleAxis',
  'aria',
  'brush',
  'calendar',
  'dataset',
  'dataZoom',
  'geo',
  'graphic',
  'grid',
  'legend',
  'matrix',
  'parallel',
  'parallelAxis',
  'polar',
  'radar',
  'radiusAxis',
  'series',
  'singleAxis',
  'timeline',
  'title',
  'toolbox',
  'tooltip',
  'visualMap',
  'xAxis',
  'yAxis',
];
</script>

<script setup lang="ts">
defineOptions({
  name: 'PfCharts',
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
const containerRef = useTemplateRef('containerRef');
const chart = shallowRef<ECharts>();
let lastOption: ChartsOption = {};

// Theme tokens are read from the computed styles of the container when the theme is built, so the chart is rebuilt
// whenever they change (e.g. when the dark theme is toggled)
const themeVersion = useThemeVersion(containerRef);
const isSkeleton = computed(() => props.themeColor === ThemeColor.skeleton);
let chartTheme: ThemeDefinition = {};

function getTooltip(series: SeriesOption[], instance: ECharts, option: ChartsOption) {
  // Skeleton should not have any interactions
  if (isSkeleton.value) {
    return undefined;
  }

  if (Array.isArray(option.tooltip)) {
    return option.tooltip;
  }

  const types = new Set(series.map(serie => getTooltipType(serie?.type)));
  if (types.has('sankey')) {
    return getSankeyTooltip(series, option);
  }
  // The legend tooltip lists every series at the hovered axis value, so it only applies to axis tooltips
  if (types.has('legend') && (option.tooltip?.trigger ?? 'axis') === 'axis') {
    return getLegendTooltip(series, option, instance);
  }
  return defaultsDeep(option.tooltip, { confine: true, trigger: 'item' });
}

/** Returns the series of an option with the PatternFly defaults, and stable ids */
function getOptionSeries(option: ChartsOption) {
  return (
    (Array.isArray(option.series) ? option.series : option.series ? [option.series] : [])
      // Stable ids let ECharts animate updates of the existing series instead of recreating them
      .map((serie, index) => ({ id: `pf-series-${index}`, ...getSeries(serie, chartTheme, isSkeleton.value, index) }))
  );
}

/** Returns the option with the PatternFly series defaults, legend and tooltip */
function buildUnitOption(option: ChartsOption, instance: ECharts): ChartsOption {
  const series = getOptionSeries(option);
  return {
    ...option,
    ...(option.legend ? { legend: getBoxPlotLegend(option.legend, series) } : {}),
    ...(props.legendTooltip ? { tooltip: getTooltip(series, instance, option) } : {}),
    series,
  };
}

function buildOption(instance: ECharts): ChartsOption {
  const option = props.option ?? {};
  if (!option.baseOption) {
    return buildUnitOption(option, instance);
  }
  // Timelines switch between options merged over a base option: each gets the series defaults
  return {
    ...option,
    baseOption: buildUnitOption(option.baseOption as ChartsOption, instance),
    options: ((option.options ?? []) as ChartsOption[]).map(frame => ({ ...frame, series: getOptionSeries(frame) })),
  };
}

/**
 * Returns the data zoom of the option with the range zoomed by the user kept, where the option sets none: replacing
 * the data zoom would otherwise reset it whenever the option is rebuilt (e.g. inline in a template)
 */
function keepZoomRange(dataZoom: ChartsOption['dataZoom'], instance: ECharts) {
  const current = (instance.getOption().dataZoom ?? []) as DataZoomComponentOption[];
  const keep = (zoom: DataZoomComponentOption, index: number) => {
    const { start, end } = current[index] ?? {};
    const hasRange = ['start', 'end', 'startValue', 'endValue'].some(key => key in zoom);
    return hasRange || start === undefined || end === undefined ? zoom : { ...zoom, start, end };
  };
  return Array.isArray(dataZoom) ? dataZoom.map(keep) : dataZoom && keep(dataZoom, 0);
}

function initChart() {
  chart.value?.dispose();
  if (!containerRef.value) {
    return;
  }

  chartTheme = withStyleSource(containerRef.value, () => props.theme ?? getTheme(props.themeColor));
  // height and width are necessary when the container has no layout (e.g. in unit tests)
  const instance = init(
    containerRef.value,
    chartTheme,
    defaultsDeep(props.opts, {
      height: props.height,
      renderer: props.svgRenderer ? 'svg' : 'canvas',
      width: props.width,
    }),
  );
  instance.on('click', params => emit('click', params));
  instance.on('legendselectchanged', params => emit('legendselectchanged', params as ChartLegendSelectChangedEvent));
  instance.on('datazoom', params => emit('datazoom', params as ChartDataZoomEvent));
  instance.on('brushselected', params => emit('brushselected', params as ChartBrushSelectedEvent));
  chart.value = instance;
  lastOption = buildOption(instance);
  instance.setOption(lastOption);
}

onMounted(initChart);
onBeforeUnmount(() => {
  chart.value?.dispose();
  chart.value = undefined;
});

watch([() => props.theme, () => props.themeColor, () => props.svgRenderer, () => props.opts, themeVersion], initChart);

watch(
  [() => props.option, () => props.legendTooltip],
  () => {
    if (chart.value) {
      const option = buildOption(chart.value);
      // With a timeline, the components are in the base option
      const unit = (option.baseOption ?? option) as ChartsOption;
      const lastUnit = (lastOption.baseOption ?? lastOption) as ChartsOption;
      if (unit.dataZoom) {
        unit.dataZoom = keepZoomRange(unit.dataZoom, chart.value);
      }
      // ECharts rejects types whose component is not registered
      const replaceMerge = componentTypes.filter(
        type => (type in unit || type in lastUnit) && ComponentModel.hasClass(type),
      );
      lastOption = option;
      // ECharts only replaces the components at the root of the option, which with a timeline holds the base option:
      // it is merged instead, keeping the current frame
      chart.value.setOption(option, option.baseOption ? {} : { replaceMerge });
    }
  },
  { deep: true },
);

watch([() => props.width, () => props.height], () => {
  chart.value?.resize({ width: props.width ?? 'auto', height: props.height ?? 'auto' });
});

useResizeObserver(containerRef, () => chart.value?.resize());

defineExpose({
  /** The ECharts instance -- see https://echarts.apache.org/en/api.html#echartsInstance */
  chart,
});
</script>
