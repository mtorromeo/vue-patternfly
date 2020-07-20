import {h, mergeProps} from 'vue';

export const IconSize = {
  sm: '1em',
  md: '1.5em',
  lg: '2em',
  xl: '3em',
};

let currentId = 0;

/**
 * Factory to create Icon class components for consumers
 */
export function createIcon({
  name,
  xOffset = 0,
  yOffset = 0,
  width,
  height,
  svgPath,
  transform = '',
}) {
  const SVGIcon = (props, {attrs}) => {
    const id = `icon-title-${currentId++}`;

    const heightWidth = IconSize[props.size] || '1em';
    const baseAlign = -0.125 * Number.parseFloat(heightWidth);
    const style = props.noVerticalAlign ? null : { verticalAlign: `${baseAlign}em` };
    const viewBox = [xOffset, yOffset, width, height].join(' ');

    const children = [];
    if (props.title) {
      children.push(h('title', {id}, props.title));
    }
    children.push(h('path', {d: svgPath, transform}));

    return h('svg', mergeProps({
      style,
      fill: props.color,
      height: heightWidth,
      width: heightWidth,
      viewBox,
      ariaLabelledBy: props.title ? id : null,
      ariaHidden: props.title ? null : true,
      role: 'img',
    }, attrs), children);
  };

  SVGIcon.props = {
    color: {
      type: String,
      default: 'currentColor',
    },
    size: {
      type: String,
      default: 'sm',
      validator: v => Object.keys(IconSize).includes(v),
    },
    noVerticalAlign: Boolean,
  };

  SVGIcon.inheritAttrs = false;

  Object.defineProperty(SVGIcon, 'name', {writable: true});
  SVGIcon.name = name;

  return SVGIcon;
}
