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
    <svg xmlns="http://www.w3.org/2000/svg" className="pf-c-background-image__filter" width="0" height="0">
      <slot />
    </svg>
  </div>
</template>

<script lang="ts">
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

export interface BackgroundImageSrcMap {
  xs: string;
  xs2x: string;
  sm: string;
  sm2x: string;
  lg: string;
}

const props = defineProps<{
  /** Override image styles using a string or BackgroundImageSrc */
  src: string | BackgroundImageSrcMap;
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
</script>
