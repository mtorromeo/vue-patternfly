<script>
import { useFocusTrap } from '@vueuse/integrations/useFocusTrap.esm.js';
import { h, ref } from 'vue';

export default {
  name: 'PfFocusTrap',

  props: {
    active: Boolean,
    paused: Boolean,
    // preventScrollOnDeactivate: Boolean,
    focusTrapOptions: {
      type: Object,
      default: () => ({}),
    },
  },

  setup(props) {
    const target = ref(null);
    const { activate, deactivate, pause, unpause } = useFocusTrap(target, {
      immediate: props.active,
      ...props.focusTrapOptions,
    });

    if (props.paused) {
      pause();
    }

    return {
      target,
      activate,
      deactivate,
      pause,
      unpause,
    };
  },

  watch: {
    active() {
      if (this.active) {
        this.activate();
      } else {
        this.deactivate();
      }
    },

    paused() {
      if (this.paused) {
        this.pause();
      } else {
        this.unpause();
      }
    },
  },

  render() {
    return h('div', { ...this.$attrs, ref: 'target' }, this.$slots);
  },
};
</script>
