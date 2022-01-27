import styles from '@patternfly/react-styles/css/components/Divider/divider';

import { breakpointProp, classesFromBreakpointProps } from '../util';
import { DefineComponent, defineComponent, h, inject, PropType, resolveDynamicComponent } from 'vue';
import { DividerComponentKey } from './Dropdown/Dropdown';

export default defineComponent({
  name: 'PfDivider',

  props: {
    ...breakpointProp('inset', String, ['', 'none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl']),
    vertical: Boolean,
    component: {
      type: String as PropType<'hr' | 'li' | 'div'>,
      default: 'hr',
      validator: (v: any) => ['hr', 'li', 'div'].includes(v),
    },
  },

  render() {
    const attrs: Record<string, any> = {
      class: [
        styles.divider,
        classesFromBreakpointProps(this.$props, ['inset'], styles),
        {
          [styles.modifiers.vertical]: this.vertical,
        },
      ],
    };

    const injectedComponent = inject(DividerComponentKey, this.component);

    if (injectedComponent !== 'hr') {
      attrs.role = 'separator';
    }

    const Component = resolveDynamicComponent(injectedComponent) as DefineComponent;
    return h(Component, attrs);
  },
});
