import { computed, onMounted, onScopeDispose, ref, toValue, watch, type MaybeRefOrGetter } from 'vue';
import { registerMap } from 'echarts/core';
import chart_color_black_100 from '@patternfly/react-tokens/dist/esm/chart_color_black_100';
import chart_echarts_BackgroundColor from '@patternfly/react-tokens/dist/esm/chart_echarts_BackgroundColor';
import chart_global_label_Fill from '@patternfly/react-tokens/dist/esm/chart_global_label_Fill';
import chart_theme_blue_ColorScale_100 from '@patternfly/react-tokens/dist/esm/chart_theme_blue_ColorScale_100';
import type { ChartMapGeoJson } from './builders/map';
import type { ChartsBaseProps } from './common';
import { canUseDOM } from './utils/styles';

// Tokens that differ between themes (e.g. light and dark): when their values change, charts must be rebuilt
const themeTokens = [
  chart_color_black_100,
  chart_echarts_BackgroundColor,
  chart_global_label_Fill,
  chart_theme_blue_ColorScale_100,
];

function getThemeKey(element: Element | null | undefined) {
  const style = window.getComputedStyle(element ?? document.body);
  return themeTokens.map(token => style.getPropertyValue(token.name)).join('|');
}

// A single observer, shared by every chart, watches the theme classes of the root elements
const listeners = new Set<() => void>();
let observer: MutationObserver | undefined;

function subscribe(listener: () => void) {
  listeners.add(listener);
  if (!observer) {
    observer = new MutationObserver(() => listeners.forEach(l => l()));
    for (const element of [document.documentElement, document.body]) {
      observer.observe(element, { attributes: true, attributeFilter: ['class', 'style'] });
    }
  }
  return () => {
    listeners.delete(listener);
    if (!listeners.size) {
      observer?.disconnect();
      observer = undefined;
    }
  };
}

/**
 * Returns a counter bumped whenever the theme tokens seen by the element change, e.g. when the dark theme class is
 * toggled on the `html` element. Theme colors are read from the computed styles, so anything derived from them must
 * be recomputed when it changes.
 */
export function useThemeVersion(element: MaybeRefOrGetter<Element | null | undefined>) {
  const version = ref(0);
  if (!canUseDOM) {
    return version;
  }

  let key: string | undefined;
  onMounted(() => {
    key = getThemeKey(toValue(element));
  });
  onScopeDispose(
    subscribe(() => {
      const next = getThemeKey(toValue(element));
      if (next !== key) {
        key = next;
        version.value++;
      }
    }),
  );
  return version;
}

/**
 * The props of a chart wrapper that are forwarded to PfCharts
 */
export function useChartsProps(props: ChartsBaseProps) {
  return computed(() => ({
    height: props.height,
    legendTooltip: props.legendTooltip,
    opts: props.opts,
    svgRenderer: props.svgRenderer,
    theme: props.theme,
    themeColor: props.themeColor,
    width: props.width,
  }));
}

/**
 * Registers the GeoJSON of a map chart with ECharts under the map name, whenever either changes. Registration is
 * synchronous, before the option is built, so the map exists when the chart draws it.
 */
export function useMapRegistration(props: { map: string; geoJson?: ChartMapGeoJson }) {
  watch(
    () => [props.map, props.geoJson] as const,
    ([map, geoJson]) => {
      if (geoJson) {
        registerMap(map, geoJson);
      }
    },
    { flush: 'sync', immediate: true },
  );
}
