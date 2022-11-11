import { defineComponent, h, type PropType } from 'vue';

export enum IconSize {
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl'
}

export const getSize = (size: IconSize | keyof typeof IconSize) => {
  switch (size) {
    case IconSize.sm:
      return '1em';
    case IconSize.md:
      return '1.5em';
    case IconSize.lg:
      return '2em';
    case IconSize.xl:
      return '3em';
    default:
      return '1em';
  }
};

export interface IconDefinition {
  name?: string;
  width: number;
  height: number;
  svgPath: string;
  xOffset?: number;
  yOffset?: number;
}

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
}: IconDefinition) {
  return defineComponent({
    name,

    props: {
      color: {
        type: String,
        default: 'currentColor',
      },
      size: {
        type: String as PropType<IconSize | keyof typeof IconSize>,
        default: IconSize.sm,
        validator: (v: any) => Object.keys(IconSize).includes(v),
      },
      title: String,
      noVerticalAlign: Boolean,
    },

    render() {
      const id = `icon-title-${currentId++}`;

      const heightWidth = getSize(this.size);
      const baseAlign = -0.125 * Number.parseFloat(heightWidth);
      const style = this.noVerticalAlign ? null : { verticalAlign: `${baseAlign}em` };
      const viewBox = [xOffset, yOffset, width, height].join(' ');

      const children = [];
      if (this.title) {
        children.push(h('title', {id}, this.title));
      }
      children.push(h('path', {d: svgPath}));

      return h('svg', {
        style,
        fill: this.color,
        height: heightWidth,
        width: heightWidth,
        viewBox,
        'aria-labelled-by': this.title ? id : null,
        'aria-hidden': this.title ? null : true,
        role: 'img',
      }, children);
    },
  });
}
