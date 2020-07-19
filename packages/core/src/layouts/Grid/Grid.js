import _styles from '@patternfly/react-styles/css/layouts/Grid/grid';
import {breakpoints} from '../../util';
import {h, mergeProps} from 'vue';

// commonjs bug
let styles = _styles.default;

const gridSpans = {
  type: [String, Number],
  default: null,
  validator: v => {
    const numval = Number(v);
    return v === null || (!isNaN(numval) && numval >= 1 && numval <= 12);
  },
};

const Grid = (props, {slots, attrs}) => {
  const classes = [
    styles.grid,
    props.span && styles.modifiers[`all_${props.span}Col`],
    props.gutter && styles.modifiers.gutter,
  ];

  for (let breakpoint of breakpoints.filter(Boolean)) {
    let prop = breakpoint.toLowerCase();
    if (prop === '2xl') {
      prop = 'xl2';
      breakpoint = '_2xl';
    }
    const propValue = props[prop];
    if (propValue) {
      classes.push(styles.modifiers[`all_${propValue}ColOn${breakpoint}`]);
    }
  }

  return h('div', mergeProps({class: classes}, attrs), [slots.default()]);
};

Grid.props = {
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
};

Grid.inheritAttrs = false;

export default Grid;
