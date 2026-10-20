import chart_global_label_Fill from '@patternfly/react-tokens/dist/esm/chart_global_label_Fill';
import t_global_text_color_inverse from '@patternfly/react-tokens/dist/esm/t_global_text_color_inverse';
import { getComputedStyleValue } from './styles';

/**
 * Returns the [r, g, b] components of a hex or rgb() color
 */
export function parseColor(color: string) {
  const hex = color.trim().match(/^#([\da-f]{3}|[\da-f]{6})$/i)?.[1];
  if (hex) {
    const full = hex.length === 3 ? [...hex].map(c => c + c).join('') : hex;
    return [0, 2, 4].map(i => parseInt(full.slice(i, i + 2), 16));
  }
  const rgb = color
    .match(/rgba?\(([^)]+)\)/)?.[1]
    .split(/[\s,/]+/)
    .slice(0, 3)
    .map(Number);
  return rgb?.length === 3 && rgb.every(n => !isNaN(n)) ? rgb : undefined;
}

/**
 * Relative luminance (0 is black, 1 is white)
 */
export function luminance(color: string) {
  const rgb = parseColor(color);
  if (!rgb) {
    return undefined;
  }
  const [r, g, b] = rgb.map(c => {
    const v = c / 255;
    return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/**
 * Color at position `t` (0 to 1) of the scale, linearly interpolated
 */
export function colorAt(colors: string[], t: number) {
  const stops = colors.map(parseColor);
  if (stops.some(stop => !stop)) {
    return colors[Math.round(t * (colors.length - 1))];
  }
  const position = Math.min(Math.max(t, 0), 1) * (stops.length - 1);
  const from = stops[Math.floor(position)]!;
  const to = stops[Math.ceil(position)]!;
  const mix = from.map((c, i) => Math.round(c + (to[i] - c) * (position - Math.floor(position))));
  return `rgb(${mix.join(', ')})`;
}

/**
 * Returns the color of a label drawn over `background`: between the regular and the inverse text colors (one light
 * and one dark, whatever the theme), the one contrasting the most with it
 */
export function getLabelColorOver(background: string | undefined) {
  const labelColor = getComputedStyleValue(chart_global_label_Fill);
  const backgroundLuminance = background ? luminance(background) : undefined;
  if (backgroundLuminance === undefined) {
    return labelColor;
  }
  const contrast = (text: string) => {
    const l = luminance(text) ?? 0;
    return (Math.max(l, backgroundLuminance) + 0.05) / (Math.min(l, backgroundLuminance) + 0.05);
  };
  return [labelColor, getComputedStyleValue(t_global_text_color_inverse)].reduce((best, text) =>
    contrast(text) > contrast(best) ? text : best,
  );
}
