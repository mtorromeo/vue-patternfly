import styles from '@patternfly/react-styles/css/components/Form/form';

import { type DefineComponent, defineComponent, h, type PropType, resolveDynamicComponent } from 'vue';

export default defineComponent({
  name: 'PfForm',

  props: {
    component: {
      type: [String, Object] as PropType<string | DefineComponent>,
      default: 'form',
    },

    horizontal: Boolean,
    widthLimited: Boolean,
  },

  render() {
    const component = resolveDynamicComponent(this.component) as DefineComponent;
    return h(component, {
      class: [styles.form, {
        [styles.modifiers.horizontal]: this.horizontal,
        [styles.modifiers.limitWidth]: this.widthLimited,
      }],
    }, this.$slots);
  },
});
