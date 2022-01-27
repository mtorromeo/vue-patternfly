import { createPopper, Instance as PopperInstance, Placement } from '@popperjs/core';
import { defineComponent, h, mergeProps, PropType, ref, Ref, Teleport } from 'vue';
import { findComponentVNode, domFromRef } from '../util';

export const getOpacityTransition = (animationDuration: number) =>
  `opacity ${animationDuration}ms cubic-bezier(.54, 1.5, .38, 1.11)`;

export const positions = ['auto', 'top', 'bottom', 'left', 'right', 'top-start', 'top-end', 'bottom-start', 'bottom-end', 'left-start', 'left-end', 'right-start', 'right-end'];

export default defineComponent({
  name: 'PfPopper',

  props: {
    top: {
      type: String,
      default: null,
    },
    bottom: {
      type: String,
      default: null,
    },
    left: {
      type: String,
      default: null,
    },
    right: {
      type: String,
      default: null,
    },
    topStart: {
      type: String,
      default: null,
    },
    topEnd: {
      type: String,
      default: null,
    },
    bottomStart: {
      type: String,
      default: null,
    },
    bottomEnd: {
      type: String,
      default: null,
    },
    leftStart: {
      type: String,
      default: null,
    },
    leftEnd: {
      type: String,
      default: null,
    },
    rightStart: {
      type: String,
      default: null,
    },
    rightEnd: {
      type: String,
      default: null,
    },

    zIndex: {
      type: Number,
      default: 9999,
    },

    visible: Boolean,
    popperMatchesTriggerWidth: Boolean,
    noFlip: Boolean,

    flipBehavior: {
      type: [String, Array],
      default: 'flip',
      validator: (v: any) => {
        if (v === 'flip') {
          return true;
        }
        if (!Array.isArray(v)) {
          return false;
        }
        return v.every(pos => positions.includes(pos));
      },
    },

    distance: {
      type: Number,
      default: 0,
    },

    direction: {
      type: String,
      default: 'down',
      validator: (v: any) => ['up', 'down'].includes(v),
    },

    position: {
      type: String,
      default: 'left',
      validator: (v: any) => ['left', 'right', 'center'].includes(v),
    },

    placement: {
      type: [String, Object] as PropType<Placement>,
      default: null,
    },

    appendTo: {
      type: [String, HTMLElement],
      default: () => document.body,
    },
  },

  data(this: void) {
    return {
      popper: null as PopperInstance | null,
      width: '',
      styles: {} as Record<string, any>,
      attributes: {} as Record<string, any>,
    };
  },

  setup() {
    const popperRef: Ref<HTMLElement | null> = ref(null);
    const referenceRef: Ref<HTMLElement | null> = ref(null);
    return {
      popperRef,
      referenceRef,
    };
  },

  computed: {
    popperPlacement(): Placement {
      if (this.placement) {
        return this.placement;
      }
      let convertedPlacement: Placement = this.direction === 'up' ? 'top' : 'bottom';
      if (this.position !== 'center') {
        convertedPlacement = `${convertedPlacement}-${this.position === 'right' ? 'end' : 'start'}`;
      }
      return convertedPlacement;
    },

    positionModifier() {
      if (!this.attributes['data-popper-placement']) {
        return this.top || '';
      }
      const placement = this.attributes['data-popper-placement'];
      return this.$props[placement];
    },

    oppositePlacement() {
      const hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
      return this.popperPlacement.replace(/left|right|bottom|top/g, matched => hash[matched as keyof typeof hash]);
    },

    options(): Parameters<typeof createPopper>[2] {
      return {
        placement: this.popperPlacement || 'bottom',
        strategy: 'absolute',
        modifiers: [{
          name: 'offset',
          options: {
            offset: [0, this.distance],
          },
        }, {
          name: 'hide',
          enabled: true,
        }, {
          name: 'flip',
          enabled: this.popperPlacement.startsWith('auto') || !this.noFlip,
          options: {
            fallbackPlacements: this.flipBehavior === 'flip' ? [this.oppositePlacement] : this.flipBehavior,
          },
        }, {
          name: 'updateState',
          enabled: true,
          phase: 'write',
          fn: ({ state }) => {
            this.styles = state.styles.popper;
            this.attributes = state.attributes.popper;
          },
          requires: ['computeStyles'],
        }, {
          name: 'applyStyles',
          enabled: false,
        }, {
          name: 'sameWidth',
          enabled: this.popperMatchesTriggerWidth,
          phase: 'beforeWrite',
          requires: ['computeStyles'],
          fn: ({ state }) => {
            this.width = `${state.rects.reference.width}px`;
          },
          effect: ({ state }) => {
            this.width = `${(state.elements.reference as HTMLElement).offsetWidth}px`;
            return () => { };
          },
        }],
      };
    },
  },

  watch: {
    options() {
      if (this.popper) {
        this.popper.setOptions(this.options);
      }
    },
  },

  render() {
    const reference = findComponentVNode(this.$slots.default ?.());

    let popper = null;
    if (this.visible) {
      popper = this.$slots.popper?.();
      popper = findComponentVNode(popper);

      popper = h(popper, {
        ref: el => this.popperRef = el as HTMLElement,
        class: this.positionModifier,
        style: {
          zIndex: this.zIndex,
          width: this.width,
          ...this.styles,
        },
        ...this.attributes,
      });
    }

    return [
      h(reference, mergeProps({ ref: el => this.referenceRef = el as HTMLElement }, this.$attrs)),
      h(Teleport, { to: this.appendTo }, popper),
    ];
  },

  mounted() {
    this.createInstance();
  },

  updated() {
    if (this.$refs.popper) {
      this.createInstance();
    } else {
      this.destroyInstance();
    }
  },

  beforeUnmount() {
    this.destroyInstance();
  },

  methods: {
    createInstance() {
      if (this.$refs.popper && !this.popper) {
        this.popper = createPopper(domFromRef(this.referenceRef), domFromRef(this.popperRef), this.options) as any;
      }
    },

    destroyInstance() {
      if (this.popper) {
        this.popper.destroy();
        this.popper = null;
      }
    },
  },
});
