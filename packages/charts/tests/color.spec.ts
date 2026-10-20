import { describe, expect, it } from 'vitest';
import { colorAt, getLabelColorOver, luminance, parseColor } from '../src/utils/color';

describe('parseColor', () => {
  it('parses hex and rgb colors', () => {
    expect(parseColor('#0066cc')).toEqual([0, 102, 204]);
    expect(parseColor('#fff')).toEqual([255, 255, 255]);
    expect(parseColor('rgb(1, 2, 3)')).toEqual([1, 2, 3]);
    expect(parseColor('rgba(1 2 3 / 50%)')).toEqual([1, 2, 3]);
    expect(parseColor('transparent')).toBeUndefined();
  });
});

describe('luminance', () => {
  it('goes from black to white', () => {
    expect(luminance('#000000')).toBe(0);
    expect(luminance('#ffffff')).toBe(1);
    expect(luminance('red')).toBeUndefined();
  });
});

describe('colorAt', () => {
  it('interpolates the scale', () => {
    expect(colorAt(['#000000', '#ffffff'], 0)).toBe('rgb(0, 0, 0)');
    expect(colorAt(['#000000', '#ffffff'], 0.5)).toBe('rgb(128, 128, 128)');
    expect(colorAt(['#000000', '#ffffff'], 2)).toBe('rgb(255, 255, 255)');
  });
});

describe('getLabelColorOver', () => {
  it('picks the text color contrasting the most with the background', () => {
    expect(getLabelColorOver('#003366')).toBe('#ffffff');
    expect(getLabelColorOver('#f2f2f2')).toBe('#1f1f1f');
  });

  it('falls back to the label color for unknown backgrounds', () => {
    expect(getLabelColorOver(undefined)).toBe('#1f1f1f');
    expect(getLabelColorOver('transparent')).toBe('#1f1f1f');
  });
});
