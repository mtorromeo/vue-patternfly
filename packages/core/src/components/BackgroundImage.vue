<template>
  <div
    :class="styles.backgroundImage" :style="{
      [cssVar.name]: getUrlValue('xs'),
      [cssVarName2x.name]: getUrlValue('xs2x'),
      [cssVarNameSm.name]: getUrlValue('sm'),
      [cssVarNameSm2x.name]: getUrlValue('sm2x'),
      [cssVarNameLg.name]: getUrlValue('lg'),
      [cssVarNameFilter.name]: `url(#${filterId})`
    }">
    <svg xmlns="http://www.w3.org/2000/svg" class="pf-c-background-image__filter" width="0" height="0">
      <pass-through :alter="setFilterId">
        <slot>
          <filter>
            <feColorMatrix type="matrix" values="1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 0 0 0 1 0" />
            <feComponentTransfer v-bind="{'color-interpolation-filters': 'sRGB'}" result="duotone">
              <feFuncR type="table" table-values="0.086274509803922 0.43921568627451" />
              <feFuncG type="table" table-values="0.086274509803922 0.43921568627451" />
              <feFuncB type="table" table-values="0.086274509803922 0.43921568627451" />
              <feFuncA type="table" table-values="0 1" />
            </feComponentTransfer>
          </filter>
        </slot>
      </pass-through>
    </svg>
  </div>
</template>

<script lang="ts">
export interface BackgroundImageSrcMap {
  xs: string;
  xs2x: string;
  sm: string;
  sm2x: string;
  lg: string;
}

export interface Props extends /* @vue-ignore */ HTMLAttributes {
  /** Override image styles using a string or BackgroundImageSrc */
  src?: string | BackgroundImageSrcMap;
}

let filterCounter = 0;
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/BackgroundImage/background-image';

import cssVar from '@patternfly/react-tokens/dist/esm/c_background_image_BackgroundImage';
import cssVarName2x from '@patternfly/react-tokens/dist/esm/c_background_image_BackgroundImage_2x';
import cssVarNameSm from '@patternfly/react-tokens/dist/esm/c_background_image_BackgroundImage_sm';
import cssVarNameSm2x from '@patternfly/react-tokens/dist/esm/c_background_image_BackgroundImage_sm_2x';
import cssVarNameLg from '@patternfly/react-tokens/dist/esm/c_background_image_BackgroundImage_lg';
import cssVarNameFilter from '@patternfly/react-tokens/dist/esm/c_background_image_Filter';
import PassThrough from '../helpers/PassThrough.vue';
import { cloneVNode, type VNode } from 'vue';
import { findChildrenVNodes } from '../util';
import type { HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfBackgroundImage',
});

const props = defineProps<Props>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

const getUrlValue = (size: keyof BackgroundImageSrcMap) => {
  if (typeof props.src === 'string') {
    return `url(${props.src})`;
  } else if (typeof props.src === 'object') {
    return `url(${props.src[size]})`;
  }
  return '';
};

const filterId = `patternfly-background-image-filter-overlay${filterCounter++}`;

function setFilterId(nodes: VNode[]) {
  nodes = findChildrenVNodes(nodes);
  if (nodes.length && !nodes[0].props?.id) {
    nodes[0] = cloneVNode(nodes[0], {
      id: filterId,
    });
  }
  return nodes;
}
</script>
