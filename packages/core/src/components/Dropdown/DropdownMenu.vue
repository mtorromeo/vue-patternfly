<script lang="ts">
import styles from '@patternfly/react-styles/css/components/Dropdown/dropdown';

import { h, mergeProps, provide, computed, resolveDynamicComponent, type DefineComponent, defineComponent, inject, type PropType, type InjectionKey } from 'vue';
import type PfDropdownItem from './DropdownItem.vue';
import { provideChildrenTracker, keyNavigation, type Disableable, type Focusable, type ChildrenTrackerInjectionKey } from '../../use';
import { DropdownMenuClassKey } from './Dropdown';

export const DropdownMenuItemsKey = Symbol("DropdownMenuItemsKey") as ChildrenTrackerInjectionKey;
export const DropdownMenuOnKeydownKey = Symbol('DropdownMenuOnKeydownKey') as InjectionKey<(event: KeyboardEvent, itemEl?: HTMLElement) => void>;

export default defineComponent({
  name: 'PfDropdownMenu',

  props: {
    component: {
      type: [String, Object] as PropType<string | DefineComponent>,
      default: 'ul',
    },
    position: {
      type: String,
      default: 'left',
      validator: (v: any) => ['left', 'right'].includes(v),
    },
    open: {
      type: Boolean,
      default: true,
    },
    autoFocus: {
      type: Boolean,
      default: true,
    },
    grouped: Boolean,
  },

  setup() {
    const children = provideChildrenTracker<InstanceType<typeof PfDropdownItem> & Disableable & Focusable>(DropdownMenuItemsKey);
    const items = computed(() => children.value.filter(
      c => Boolean(c.focusElement()) && !c.disabled,
    ));

    const onKeydown = keyNavigation(items);
    provide(DropdownMenuOnKeydownKey, onKeydown);

    return {
      items,
      menuClass: inject(DropdownMenuClassKey, undefined),
    };
  },

  mounted() {
    if (this.autoFocus && this.items.length) {
      this.items[0].focused = true;
    }
  },

  render() {
    const props = {
      class: [this.menuClass || styles.dropdownMenu, {
        [styles.modifiers.alignRight]: this.position === 'right',
      }],
      hidden: !this.open,
    };

    const items = this.$slots.default ? this.$slots.default() : [];

    if (this.component === 'div') {
      return h(
        'div',
        mergeProps({
          onClick: (e: MouseEvent | TouchEvent) => this.$emit('select', e),
        }, props),
        items,
      );
    }

    const component = resolveDynamicComponent(this.grouped ? 'div' : this.component) as DefineComponent;
    return h(
      component,
      mergeProps({
        role: 'menu',
      }, props),
      items,
    );
  },
});
</script>
