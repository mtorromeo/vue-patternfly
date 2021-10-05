<script>
import styles from '@patternfly/react-styles/css/components/Select/select';
import formStyles from '@patternfly/react-styles/css/components/Form/form';
import { h, resolveDynamicComponent, mergeProps } from 'vue';
import { findChildrenVNodes } from '../../util.ts';

export default {
  name: 'PfSelectMenu',

  inject: ['select'],

  props: {
    custom: Boolean,
    maxHeight: {
      type: String,
      default: null,
    },
    inlineFilter: Boolean,
  },

  methods: {
    extendChildren(children, grouped) {
      if (this.select.variant === 'checkbox') {
        return children;
      }

      const randomId = this.select.inputIdPrefix;

      if (grouped) {
        // let index = 0;
        // return React.Children.map(childrenArray, (group: React.ReactElement) => {
        //   if (group.type === SelectGroup) {
        //     return React.cloneElement(group, {
        //       titleId: group.props.label && group.props.label.replace(/\W/g, '-'),
        //       children: React.Children.map(group.props.children, (option: React.ReactElement) =>
        //         this.cloneOption(option, index++, randomId)
        //       )
        //     });
        //   } else {
        //     return this.cloneOption(group, index++, randomId);
        //   }
        // });
      }
      // return children.map(childrenArray, (child, index) =>
      //   this.cloneOption(child, index, randomId)
      // );
      return children;
    },

    extendCheckboxChildren(children, grouped) {
      if (this.inlineFilter) {
        children.shift();
      }
      this.childrenCount = children.length;

      // const { isGrouped, checked, sendRef, keyHandler, hasInlineFilter } = this.props;
      const index = this.inlineFilter ? 1 : 0;
      if (grouped) {
      //   return children.map(children, (group) => {
      //     if (group.type === SelectOption || group.type === Divider) {
      //       return group;
      //     }
      //     return React.cloneElement(group, {
      //       titleId: group.props.label && group.props.label.replace(/\W/g, '-'),
      //       children: (
      //         <fieldset
      //           aria-labelledby={group.props.label && group.props.label.replace(/\W/g, '-')}
      //           className={css(styles.selectMenuFieldset)}
      //         >
      //           {children.map(group.props.children, (option: React.ReactElement) =>
      //             option.type === Divider
      //               ? option
      //               : React.cloneElement(option, {
      //                   isChecked: this.checkForValue(option.props.value, checked),
      //                   sendRef,
      //                   keyHandler,
      //                   index: index++
      //                 })
      //           )}
      //         </fieldset>
      //       )
      //     });
      //   });
      }

      // return children.map(children, (child) =>
      //   child.type === Divider
      //     ? child
      //     : React.cloneElement(child, {
      //         isChecked: this.checkForValue(child.props.value, checked),
      //         sendRef,
      //         keyHandler,
      //         index: index++
      //       })
      // );

      return children;
    },
  },

  render() {
    let children = this.$slots.default
      ? findChildrenVNodes(this.$slots.default())
      : [];
    const grouped = children.length && children[0].type.name === 'PfSelectGroup';

    const component = !this.custom && this.select.variant !== 'checkbox' && !grouped
      ? 'ul'
      : 'div';

    if (this.select.variant === 'checkbox') {
      children = this.extendCheckboxChildren(children, grouped);
      children = h('fieldset', mergeProps({
        class: [children.length ? formStyles.formFieldset : styles.selectMenuFieldset],
      }, this.$attrs), children);
    } else {
      children = this.extendChildren(children, grouped);
    }

    return h(resolveDynamicComponent(component), {
      class: styles.selectMenu,
      style: {
        maxHeight: this.maxHeight,
        overflow: 'auto',
      },
    }, children);
  },
};
</script>
