import { defineComponent, h, type SVGAttributes, type ExtractPublicPropTypes } from 'vue';

export interface IconDefinition {
  name?: string;
  width: number;
  height: number;
  svgPath: string;
  xOffset?: number;
  yOffset?: number;
}

let currentId = 0;

const props = {
  title: String,
};

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
  const Icon = defineComponent<ExtractPublicPropTypes<typeof props> & SVGAttributes>({
    name,

    render() {
      const id = `icon-title-${currentId++}`;

      const viewBox = [xOffset, yOffset, width, height].join(' ');

      const children = [];
      if (this.title) {
        children.push(h('title', {id}, this.title));
      }
      children.push(h('path', {d: svgPath}));

      return h('svg', {
        class: 'pf-v6-svg',
        fill: 'currentColor',
        viewBox,
        'aria-labelled-by': this.title ? id : undefined,
        'aria-hidden': this.title ? undefined : true,
        role: 'img',
        width: '1em',
        height: '1em',
      }, children);
    },
  });

  Icon.props = props;

  return Icon;
}
