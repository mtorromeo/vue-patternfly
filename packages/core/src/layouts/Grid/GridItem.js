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

const GridItem = (props, {slots, attrs}) => {
  const classes = [
    styles.gridItem,
    props.span && styles.modifiers[`${props.span}Col`],
    props.rowSpan && styles.modifiers[`${props.rowSpan}Row`],
    props.offset && styles.modifiers[`offset_${props.offset}Col`],
  ];

  for (let breakpoint of breakpoints.filter(Boolean)) {
    let prop = breakpoint.toLowerCase();
    if (prop === '2xl') {
      prop = 'xl2';
      breakpoint = '_2xl';
    }

    const rowSpanProp = `${prop}RowSpan`;
    const offsetProp = `${prop}Offset`;

    const spanValue = props[prop];
    const rowSpanValue = props[rowSpanProp];
    const offsetValue = props[offsetProp];

    if (spanValue) {
      classes.push(styles.modifiers[`${spanValue}ColOn${breakpoint}`]);
    }
    if (rowSpanValue) {
      classes.push(styles.modifiers[`${rowSpanValue}RowOn${breakpoint}`]);
    }
    if (offsetValue) {
      classes.push(styles.modifiers[`offset_${offsetValue}ColOn${breakpoint}`]);
    }
  }

  return h('div', mergeProps({class: classes}, attrs), [slots.default()]);
};

GridItem.props = {
  /** the number of columns the grid item spans. Value should be a number 1-12   */
  span: gridSpans,
  /** the number of rows the grid item spans. Value should be a number 1-12   */
  rowSpan: gridSpans,
  /** the number of columns a grid item is offset */
  offset: gridSpans,
  /** the number of columns the grid item spans on small device. Value should be a number 1-12   */
  sm: gridSpans,
  /** the number of rows the grid item spans on medium device. Value should be a number 1-12   */
  smRowSpan: gridSpans,
  /** the number of columns the grid item is offset on small device. Value should be a number 1-12   */
  smOffset: gridSpans,
  /** the number of columns the grid item spans on medium device. Value should be a number 1-12   */
  md: gridSpans,
  /** the number of rows the grid item spans on medium device. Value should be a number 1-12   */
  mdRowSpan: gridSpans,
  /** the number of columns the grid item is offset on medium device. Value should be a number 1-12   */
  mdOffset: gridSpans,
  /** the number of columns the grid item spans on large device. Value should be a number 1-12   */
  lg: gridSpans,
  /** the number of rows the grid item spans on large device. Value should be a number 1-12   */
  lgRowSpan: gridSpans,
  /** the number of columns the grid item is offset on large device. Value should be a number 1-12   */
  lgOffset: gridSpans,
  /** the number of columns the grid item spans on xLarge device. Value should be a number 1-12   */
  xl: gridSpans,
  /** the number of rows the grid item spans on large device. Value should be a number 1-12   */
  xlRowSpan: gridSpans,
  /** the number of columns the grid item is offset on xLarge device. Value should be a number 1-12   */
  xlOffset: gridSpans,
  /** the number of columns the grid item spans on 2xLarge device. Value should be a number 1-12   */
  xl2: gridSpans,
  /** the number of rows the grid item spans on 2xLarge device. Value should be a number 1-12   */
  xl2RowSpan: gridSpans,
  /** the number of columns the grid item is offset on 2xLarge device. Value should be a number 1-12   */
  xl2Offset: gridSpans,
};

GridItem.inheritAttrs = false;

export default GridItem;
