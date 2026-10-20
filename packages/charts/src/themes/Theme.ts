/**
 * ECharts theme definition -- see https://echarts.apache.org/handbook/en/concepts/style/#theme
 *
 * ECharts does not export its ThemeOption type from a public entry point, so themes are loosely typed.
 */
export interface ThemeDefinition {
  /** The palette of the series */
  color?: string[];
  [key: string]: unknown;
}
