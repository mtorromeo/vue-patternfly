import styles from '@patternfly/react-styles/css/layouts/Flex/flex';
import { h, resolveDynamicComponent, defineComponent, DefineComponent } from 'vue';
import { breakpointProp, classesFromBreakpointProps } from '../../util';

export default defineComponent({
  name: 'PfFlexItem',

  props: {
    /** The tag or component to use as container */
    component: {
      type: [String, Object],
      default: 'div',
    },

    ...breakpointProp('spacer', String, ['', 'none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl']),
    ...breakpointProp('shrink', Boolean),
    ...breakpointProp('flex', String, ['', 'default', 'none', '1', '2', '3', '4']),
    ...breakpointProp('alignSelf', String, ['', 'flex-start', 'flex-end', 'center', 'stretch', 'baseline']),
    ...breakpointProp('grow', Boolean),
    ...breakpointProp('align', String, ['', 'left', 'right']),
    ...breakpointProp('fullWidth', Boolean),
  },

  setup(props, { slots }) {
    const Component = resolveDynamicComponent(props.component) as DefineComponent;
    return () => h(Component, {
      class: classesFromBreakpointProps(props, [
        'spacer',
        'shrink',
        'flex',
        'alignSelf',
        'grow',
        'align',
        'fullWidth',
      ], styles)
    }, slots);
  },
});