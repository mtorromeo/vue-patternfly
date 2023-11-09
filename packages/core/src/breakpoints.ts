import { computed } from "vue";
import { toCamelCase, ucfirst } from "./util";

export const breakpoints = ['', 'Sm', 'Md', 'Lg', 'Xl', '2xl'] as const;

// This would be nice but is not supported by vue's defineProps macro https://github.com/vuejs/core/issues/8286

// export enum Breakpoints {
//   xs = '',
//   sm = 'Sm',
//   md = 'Md',
//   lg = 'Lg',
//   xl = 'Xl',
//   '2xl' = '2xl',
// }

// export type Breakpoint = keyof typeof Breakpoints;

// export type BreakpointPropName<B extends Breakpoint, N extends string> =
//   B extends 'xs' ? N
//   : B extends '2xl' ? `${N}_${B}`
//   : `${N}${Capitalize<B>}`;

// export type BreakpointProps<N extends string, T> =
//   { [K in BreakpointPropName<Breakpoint, N>]?: T };

// Instead we can statically define the common breakpoint properties (no generics)
export type VisibilityBreakpointProps = {
  visibility?: 'hidden' | 'visible';
  visibilitySm?: 'hidden' | 'visible';
  visibilityMd?: 'hidden' | 'visible';
  visibilityLg?: 'hidden' | 'visible';
  visibilityXl?: 'hidden' | 'visible';
  visibilityXl2?: 'hidden' | 'visible';
}

export type WidthBreakpointProps = {
  width?: string;
  widthSm?: string;
  widthMd?: string;
  widthLg?: string;
  widthXl?: string;
  widthXl2?: string;
}

export type HeightBreakpointProps = {
  height?: string;
  heightSm?: string;
  heightMd?: string;
  heightLg?: string;
  heightXl?: string;
  heightXl2?: string;
}

export type SpacerBreakpointProps = {
  spacer?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  spacerSm?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  spacerMd?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  spacerLg?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  spacerXl?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  spacerXl2?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
}

export type SpaceItemsBreakpointProps = {
  spaceItems?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  spaceItemsSm?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  spaceItemsMd?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  spaceItemsLg?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  spaceItemsXl?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  spaceItemsXl2?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
}

export type GrowBreakpointProps = {
  grow?: boolean;
  growSm?: boolean;
  growMd?: boolean;
  growLg?: boolean;
  growXl?: boolean;
  growXl2?: boolean;
}

export type ShrinkBreakpointProps = {
  shrink?: boolean;
  shrinkSm?: boolean;
  shrinkMd?: boolean;
  shrinkLg?: boolean;
  shrinkXl?: boolean;
  shrinkXl2?: boolean;
}

export type FlexBreakpointProps = {
  flex?: 'default' | 'none' | '1' | '2' | '3' | '4';
  flexSm?: 'default' | 'none' | '1' | '2' | '3' | '4';
  flexMd?: 'default' | 'none' | '1' | '2' | '3' | '4';
  flexLg?: 'default' | 'none' | '1' | '2' | '3' | '4';
  flexXl?: 'default' | 'none' | '1' | '2' | '3' | '4';
  flexXl2?: 'default' | 'none' | '1' | '2' | '3' | '4';
}

export type DirectionBreakpointProps = {
  direction?: 'column' | 'column-reverse' | 'row' | 'row-reverse';
  directionSm?: 'column' | 'column-reverse' | 'row' | 'row-reverse';
  directionMd?: 'column' | 'column-reverse' | 'row' | 'row-reverse';
  directionLg?: 'column' | 'column-reverse' | 'row' | 'row-reverse';
  directionXl?: 'column' | 'column-reverse' | 'row' | 'row-reverse';
  directionXl2?: 'column' | 'column-reverse' | 'row' | 'row-reverse';
}

export type AlignItemsBreakpointProps = {
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  alignItemsSm?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  alignItemsMd?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  alignItemsLg?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  alignItemsXl?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  alignItemsXl2?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
}

export type AlignContentBreakpointProps = {
  alignContent?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'space-between' | 'space-around';
  alignContentSm?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'space-between' | 'space-around';
  alignContentMd?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'space-between' | 'space-around';
  alignContentLg?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'space-between' | 'space-around';
  alignContentXl?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'space-between' | 'space-around';
  alignContentXl2?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'space-between' | 'space-around';
}

export type AlignSelfBreakpointProps = {
  alignSelf?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  alignSelfSm?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  alignSelfMd?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  alignSelfLg?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  alignSelfXl?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  alignSelfXl2?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
}

export type AlignBreakpointProps = {
  align?: 'left' | 'right';
  alignSm?: 'left' | 'right';
  alignMd?: 'left' | 'right';
  alignLg?: 'left' | 'right';
  alignXl?: 'left' | 'right';
  alignXl2?: 'left' | 'right';
}

export type JustifyContentBreakpointProps = {
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  justifyContentSm?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  justifyContentMd?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  justifyContentLg?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  justifyContentXl?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  justifyContentXl2?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
}

export type DisplayBreakpointProps = {
  display?: 'flex' | 'inline-flex';
  displaySm?: 'flex' | 'inline-flex';
  displayMd?: 'flex' | 'inline-flex';
  displayLg?: 'flex' | 'inline-flex';
  displayXl?: 'flex' | 'inline-flex';
  displayXl2?: 'flex' | 'inline-flex';
}

export type FullWidthBreakpointProps = {
  fullWidth?: boolean;
  fullWidthSm?: boolean;
  fullWidthMd?: boolean;
  fullWidthLg?: boolean;
  fullWidthXl?: boolean;
  fullWidthXl2?: boolean;
}

export type FlexWrapBreakpointProps = {
  flexWrap?: 'wrap' | 'wrap-reverse' | 'nowrap';
  flexWrapSm?: 'wrap' | 'wrap-reverse' | 'nowrap';
  flexWrapMd?: 'wrap' | 'wrap-reverse' | 'nowrap';
  flexWrapLg?: 'wrap' | 'wrap-reverse' | 'nowrap';
  flexWrapXl?: 'wrap' | 'wrap-reverse' | 'nowrap';
  flexWrapXl2?: 'wrap' | 'wrap-reverse' | 'nowrap';
}

export type InsetBreakpointProps = {
  inset?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  insetSm?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  insetMd?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  insetLg?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  insetXl?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  insetXl2?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
}

export type PaddingBreakpointProps = {
  padding?: 'padding' | 'no-padding';
  paddingSm?: 'padding' | 'no-padding';
  paddingMd?: 'padding' | 'no-padding';
  paddingLg?: 'padding' | 'no-padding';
  paddingXl?: 'padding' | 'no-padding';
  paddingXl2?: 'padding' | 'no-padding';
}

export type StickyBreakpointProps = {
  sticky?: 'top' | 'bottom';
  stickySm?: 'top' | 'bottom';
  stickyMd?: 'top' | 'bottom';
  stickyLg?: 'top' | 'bottom';
  stickyXl?: 'top' | 'bottom';
  stickyXl2?: 'top' | 'bottom';
}

export type BreakpointProps = {
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  xl?: boolean;
  xl2?: boolean;
}

export function classesFromBreakpointProps(props: any, baseNames: string[], styles: any, { additional = [], short = false, vertical = false }: { additional?: string[], short?: boolean, vertical?: boolean } = {}) {
  const c = [...additional];

  for (const baseName of baseNames) {
    for (const breakpoint of breakpoints) {
      let breakpointSuffix: string = breakpoint;
      const wordSuffixIndex = breakpoint.search(/[a-z]/i);
      const propSuffix = wordSuffixIndex > 0 ? `${breakpoint.substring(wordSuffixIndex, wordSuffixIndex + 1).toUpperCase()}${breakpoint.substring(wordSuffixIndex + 1)}${breakpoint.substring(0, wordSuffixIndex)}` : breakpoint;
      const prop = baseName ? `${baseName}${propSuffix}` : propSuffix.toLowerCase();
      if (!prop) {
        continue;
      }
      if (baseName && breakpointSuffix.match(/^[0-9]/)) {
        breakpointSuffix = `_${breakpointSuffix}`;
      }
      let value = props[prop] === '' ? true : props[prop];
      if (value) {
        if (value === true) {
          value = '';
        } else if (typeof value !== 'string') {
          continue;
        } else {
          value = toCamelCase(value);
          if (value.match(/^[0-9]/)) {
            value = `_${value}`;
          }
        }
        let mod = `${value}${breakpointSuffix ? `On${breakpointSuffix}${vertical ? 'Height' : ''}` : ''}`;
        if (!baseName) {
          mod = `show${ucfirst(mod)}`;
        } else if (!short) {
          mod = `${toCamelCase(baseName)}${ucfirst(mod)}`;
        }
        c.push(styles.modifiers[mod]);
      }
    }
  }

  return c.filter(Boolean);
}

export function cssVarsFromBreakpointProps(props: any, baseName: string, cssVar: string) {
  const vars: Record<string, string> = {};

  for (const breakpointSuffix of breakpoints) {
    const prop = `${baseName}${breakpointSuffix}`;
    let name = cssVar;
    if (breakpointSuffix) {
      name = `${name}-on-${breakpointSuffix.toLowerCase()}`;
    }
    const value = props[prop];
    if (value !== undefined && value !== null) {
      vars[name] = props[prop];
    }
  }

  return vars;
}

export function useBreakpointProp(props: any, baseNames: string[], styles: any, options: any) {
  return computed(() => classesFromBreakpointProps(props, baseNames, styles, options));
}
