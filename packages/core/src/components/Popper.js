import {createPopper} from '@popperjs/core';
import {h, mergeProps, Teleport} from "vue";
import {findComponentVNode, domFromRef} from '../util';

export default {
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

    zIndex: {
      type: Number,
      default: 9999,
    },

    visible: Boolean,
    disableFlip: Boolean,
    popperMatchesTriggerWidth: Boolean,

    distance: {
      type: Number,
      default: 15,
    },

    direction: {
      type: String,
      default: 'down',
      validator: v => ['up', 'down'].includes(v),
    },

    position: {
      type: String,
      default: 'left',
      validator: v => ['left', 'right', 'center'].includes(v),
    },

    placement: {
      type: [String, Object],
      default: null,
    },

    appendTo: {
      type: [String, HTMLElement],
      default: () => document.body,
    },
  },

  data() {
    return {
      width: '',
      styles: {},
      attributes: {},
    };
  },

  computed: {
    popperPlacement() {
      if (this.placement) {
        return this.placement;
      }
      let convertedPlacement = this.direction === 'up' ? 'top' : 'bottom';
      if (this.position !== 'center') {
        convertedPlacement = `${convertedPlacement}-${this.position === 'right' ? 'end' : 'start'}`;
      }
      return convertedPlacement;
    },

    positionModifier() {
      const placement = this.$el && this.$el.dataset['popper-placement'];
      if (placement) {
        if (placement.startsWith('top')) {
          return this.top || '';
        } else if (placement.startsWith('bottom')) {
          return this.bottom || '';
        } else if (placement.startsWith('left')) {
          return this.left || '';
        } else if (placement.startsWith('right')) {
          return this.right || '';
        }
      }
      return this.top;
    },

    options() {
      return {
        placement: this.popperPlacement || 'bottom',
        strategy: 'absolute',
        modifiers: [{
          name: 'offset',
          options: {
            offset: [0, this.distance],
          },
        }, {
          name: 'preventOverflow',
          enabled: false,
        }, {
          name: 'hide',
          enabled: false,
        }, {
          name: 'flip',
          enabled: !this.disableFlip,
        }, {
          name: 'updateState',
          enabled: true,
          phase: 'write',
          fn: ({state}) => {
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
          fn: ({state}) => {
            this.width = `${state.rects.reference.width}px`;
          },
          effect: ({state}) => {
            this.width = `${(state.elements.reference).offsetWidth}px`;
            return () => {};
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
    let reference = this.$slots.default && this.$slots.default();
    reference = findComponentVNode(reference);

    let popper = null;
    if (this.visible) {
      popper = this.$slots.popper && this.$slots.popper();
      popper = findComponentVNode(popper);

      popper = h(popper, {
        ref: 'popper',
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
      h(reference, mergeProps({ref: 'reference'}, this.$attrs)),
      h(Teleport, {to: this.appendTo}, popper),
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

  beforeUmount() {
    this.destroyInstance();
  },

  methods: {
    createInstance() {
      if (this.$refs.popper && !this.popper) {
        this.popper = createPopper(domFromRef(this.$refs.reference), domFromRef(this.$refs.popper), this.options);
      }
    },

    destroyInstance() {
      if (this.popper) {
        this.popper.destroy();
        this.popper = null;
      }
    },
  },
};
