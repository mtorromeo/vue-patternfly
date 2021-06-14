<script>
import styles from '@patternfly/react-styles/css/layouts/Grid/grid';
import {breakpoints} from '../../util';
import {h, mergeProps} from 'vue';

const gridSpans = {
  type: [String, Number],
  default: null,
  validator: v => {
    const numval = Number(v);
    return v === null || (!isNaN(numval) && numval >= 1 && numval <= 12);
  },
};

export default {
  name: 'PfGrid',

  props: {
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
      this.span && styles.modifiers[`all_${this.span}Col`],
      this.gutter && styles.modifiers.gutter,
    ];

    for (let breakpoint of breakpoints.filter(Boolean)) {
      let prop = breakpoint.toLowerCase();
      if (prop === '2xl') {
        prop = 'xl2';
        breakpoint = '_2xl';
      }
      const propValue = this.$props[prop];
      if (propValue) {
        classes.push(styles.modifiers[`all_${propValue}ColOn${breakpoint}`]);
      }
    }

    return h('div', mergeProps({class: classes}, this.$attrs), this.$slots);
  },
};
</script>
