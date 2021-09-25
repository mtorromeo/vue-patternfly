<template>
  <component
    :is="component"
    :class="styles.selectMenu"
    :style="{maxHeight, overflow: 'auto'}"
    v-bind="$attrs"
  >
    <template v-if="select.variant === 'checkbox'">
      <fieldset
        v-bind="$attrs"
        :class="{
          [formStyles.formFieldset]: childrenCount,
          [styles.selectMenuFieldset]: !childrenCount,
        }"
      >
        <void :alter="extendCheckboxChildren">
          <slot />
        </void>
      </fieldset>
    </template>

    <void v-else :alter="extendChildren">
      <slot />
    </void>
  </component>
</template>

<script>
import styles from '@patternfly/react-styles/css/components/Select/select';
import formStyles from '@patternfly/react-styles/css/components/Form/form';
import { markRaw } from 'vue';

import Void from '../Void';
import PfDivider from '../Divider';

export default {
  name: 'PfSelectMenu',

  components: { Void, PfDivider },

  inject: ['select'],

  props: {
    custom: Boolean,
    maxHeight: {
      type: String,
      default: null,
    },
    grouped: Boolean,
    inlineFilter: Boolean,
  },

  setup() {
    return {
      styles: markRaw(styles),
      formStyles: markRaw(formStyles),
    };
  },

  data() {
    return {
      childrenCount: 0,
    };
  },

  computed: {
    component() {
      if (!this.custom && this.select.variant !== 'checkbox' && !this.grouped) {
        return 'ul';
      }
      return 'div';
    },
  },

  methods: {
    extendChildren(children) {
      this.childrenCount = children.length;

      if (this.select.variant === 'checkbox') {
        return children;
      }

      const randomId = this.select.inputIdPrefix;

      if (this.grouped) {
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

    extendCheckboxChildren(children) {
      if (this.inlineFilter) {
        children.shift();
      }
      this.childrenCount = children.length;

      // const { isGrouped, checked, sendRef, keyHandler, hasInlineFilter } = this.props;
      const index = this.inlineFilter ? 1 : 0;
      if (this.grouped) {
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
};
</script>
