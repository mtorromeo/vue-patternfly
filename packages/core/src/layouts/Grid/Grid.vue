<script lang="ts">
import styles from '@patternfly/react-styles/css/layouts/Grid/grid';
import { breakpoints } from '../../util';
import { type DefineComponent, defineComponent, h, type PropType, resolveDynamicComponent } from 'vue';

const gridSpans = {
  type: [String, Number],
  default: null as string | number,
  validator: (v: any) => {
    const numval = Number(v);
    return v === null || (!isNaN(numval) && numval >= 1 && numval <= 12);
  },
};

export default defineComponent({
  name: 'PfGrid',

  props: {
    /** The tag or component to use as container */
    component: {
      type: [String, Object] as PropType<string | DefineComponent>,
      default: 'div',
    },

    /** Adds space between children. */
    gutter: Boolean,
    /** The number of rows a column in the grid should span.  Value should be a number 1-12 */
    span: gridSpans,
    /** the number of columns all grid items should span on a small device */
    sm: gridSpans,
    /** the number of columns all grid items should span on a medium device */
    md: gridSpans,
    /** the number of columns all grid items should span on a large device */
    lg: gridSpans,
    /** the number of columns all grid items should span on a xLarge device */
    xl: gridSpans,
    /** the number of columns all grid items should span on a 2xLarge device */
    xl2: gridSpans,
  },

  render() {
    const classes = [
      styles.grid,
      this.span && styles.modifiers[`all_${this.span}Col` as keyof typeof styles.modifiers],
      this.gutter && styles.modifiers.gutter,
    ];

    for (let breakpoint of breakpoints.filter(Boolean)) {
      let prop = breakpoint.toLowerCase();
      if (prop === '2xl') {
        prop = 'xl2';
        breakpoint = '_2xl';
      }
      const propValue = this.$props[prop as keyof typeof this.$props];
      if (propValue) {
        classes.push(styles.modifiers[`all_${propValue}ColOn${breakpoint}` as keyof typeof styles.modifiers]);
      }
    }

    const component = resolveDynamicComponent(this.component) as DefineComponent;
    return h(component, { class: classes }, this.$slots);
  },
});
</script>
