<template>
  <pf-popper
    :top="styles.modifiers.top"
    :bottom="styles.modifiers.bottom"
    :left="styles.modifiers.left"
    :right="styles.modifiers.right"
    :distance="distance"
    :placement="position"
    :visible="visible"
    @click="click"
    @mouseenter="visible = true"
    @mouseleave="visible = false"
  >
    <slot />

    <template #popper>
      <div
        :class="styles.tooltip"
        :style="{
          maxWidth,
          opacity: 1,
          transition: 'opacity 300ms cubic-bezier(0.54, 1.5, 0.38, 1.11) 0s',
        }"
        role="tooltip"
      >
        <pf-tooltip-arrow />
        <pf-tooltip-content :left-aligned="leftAligned">
          <slot name="content" />
        </pf-tooltip-content>
      </div>
    </template>
  </pf-popper>
</template>

<script>
import styles from '@patternfly/react-styles/css/components/Tooltip/tooltip';

import PfPopper from '../Popper';
import PfTooltipArrow from './TooltipArrow';
import PfTooltipContent from './TooltipContent';

const positions = ['auto', 'top', 'bottom', 'left', 'right'];

export default {
  name: 'PfTooltip',

  components: {
    PfPopper,
    PfTooltipArrow,
    PfTooltipContent,
  },

  props: {
    position: {
      type: String,
      default: 'top',
      validator: v => positions.includes(v),
    },

    trigger: {
      type: String,
      default: 'mouseenter focus',
    },

    leftAligned: Boolean,

    entryDelay: {
      type: Number,
      default: 300,
    },

    exitDelay: {
      type: Number,
      default: 0,
    },

    distance: {
      type: Number,
      default: 15,
    },

    aria: {
      type: String,
      default: 'describedby',
    },

    animationDuration: {
      type: Number,
      default: 300,
    },

    maxWidth: {
      type: Number,
      default: null,
    },
  },

  data() {
    return {
      visible: false,
      styles,
    };
  },

  methods: {
    click(e) {
      console.log(e, this.visible);
    },
  },
};
</script>
