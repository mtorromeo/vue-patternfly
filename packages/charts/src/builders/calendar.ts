import chart_echarts_global_axis_axis_line_item_style_Color from '@patternfly/react-tokens/dist/esm/chart_echarts_global_axis_axis_line_item_style_Color';
import chart_global_label_Fill from '@patternfly/react-tokens/dist/esm/chart_global_label_Fill';
import t_global_background_color_primary_default from '@patternfly/react-tokens/dist/esm/t_global_background_color_primary_default';
import t_global_background_color_secondary_default from '@patternfly/react-tokens/dist/esm/t_global_background_color_secondary_default';
import type { TooltipComponentFormatterCallbackParams } from 'echarts';
import type { ChartsOption, ChartWrapperProps } from '../common';
import { getComputedStyleValue } from '../utils/styles';
import { finalizeOption, getVisualMap } from './common';
import { getSequentialColors } from './heatmap';

export type ChartCalendarDate = string | Date;

export interface ChartCalendarDatum {
  /** Day of the cell, as a `YYYY-MM-DD` string or a date */
  date: ChartCalendarDate;
  /** Value of the cell, mapped to its color */
  value: number | null;
}

export interface CalendarOptions extends Omit<ChartWrapperProps, 'legendData'> {
  /** The days with a value */
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

const padding = 20;
// Room for the day and month names
const labelRoom = { day: 40, month: 30 };

/** Returns the day as a `YYYY-MM-DD` string, the format ECharts calendars expect */
function isoDate(date: ChartCalendarDate) {
  if (typeof date === 'string') {
    return date;
  }
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

/** Names of the days from Sunday, and of the months, in the given locale */
function getNames(locale: string | undefined) {
  const format = (options: Intl.DateTimeFormatOptions) =>
    new Intl.DateTimeFormat(locale, { ...options, timeZone: 'UTC' });
  const day = format({ weekday: 'short' });
  const month = format({ month: 'short' });
  return {
    // 2023-01-01 is a Sunday
    days: Array.from({ length: 7 }, (_, index) => day.format(Date.UTC(2023, 0, 1 + index))),
    months: Array.from({ length: 12 }, (_, index) => month.format(Date.UTC(2023, index, 1))),
  };
}

/**
 * Returns the ECharts option for a calendar heatmap
 */
export function getCalendarOption(options: CalendarOptions): ChartsOption {
  const data = (options.data ?? []).map(datum => ({ date: isoDate(datum.date), value: datum.value }));
  const values = data.map(datum => datum.value).filter((value): value is number => value != null);
  const max = options.max ?? (values.length ? Math.max(...values) : 1);
  const min = options.min ?? (values.length ? Math.min(...values) : 0);
  const colors = getSequentialColors(options.themeColor);
  const labelColor = getComputedStyleValue(chart_global_label_Fill);
  const position = options.legendPosition ?? 'right';
  const { days, months } = getNames(options.locale);

  // ISO dates sort chronologically as strings
  const dates = data.map(datum => datum.date).sort();
  const range = options.range
    ? Array.isArray(options.range)
      ? options.range.map(isoDate)
      : options.range
    : dates.length
      ? [dates[0], dates[dates.length - 1]]
      : new Date().getFullYear();

  const dateFormat = new Intl.DateTimeFormat(options.locale, { dateStyle: 'medium', timeZone: 'UTC' });

  return finalizeOption(options, {
    calendar: {
      bottom: padding + (position === 'bottom' || position === 'bottom-left' ? 50 : 0),
      cellSize: ['auto', 'auto'],
      dayLabel: { color: labelColor, firstDay: options.firstDay ?? 0, nameMap: days },
      itemStyle: {
        borderColor: getComputedStyleValue(t_global_background_color_primary_default),
        borderWidth: 2,
        // Days without a value, unlike the lightest color of the scale
        color: getComputedStyleValue(t_global_background_color_secondary_default),
      },
      // Day names are drawn before the first week, month names along it
      left: padding + (options.vertical ? labelRoom.month : labelRoom.day),
      monthLabel: { color: labelColor, nameMap: months },
      orient: options.vertical ? 'vertical' : 'horizontal',
      range,
      right: padding + (position === 'right' ? 70 : 0),
      splitLine: {
        lineStyle: { color: getComputedStyleValue(chart_echarts_global_axis_axis_line_item_style_Color), width: 1 },
      },
      top: padding + (options.vertical ? labelRoom.day : labelRoom.month),
      // Dates in the tooltip include the year
      yearLabel: { show: false },
    },
    series: [
      {
        coordinateSystem: 'calendar',
        data: data.map(datum => [datum.date, datum.value ?? '-']),
        emphasis: { focus: 'none', itemStyle: { borderColor: labelColor } },
        // On the series, so other series added to the calendar through `option` keep their own tooltip
        tooltip: {
          formatter: (params: TooltipComponentFormatterCallbackParams) => {
            // Heatmap tooltips are triggered by item, so they get the parameters of the cell
            const [date, value] = [params].flat()[0].value as [string, number | string];
            return `${dateFormat.format(new Date(`${date}T00:00:00Z`))}: <strong>${value}</strong>`;
          },
        },
        type: 'heatmap',
      },
    ],
    // Only the heatmap: other series added to the calendar through `option` keep their colors
    visualMap: { ...getVisualMap(options, min, max, colors), seriesIndex: 0 },
  });
}
