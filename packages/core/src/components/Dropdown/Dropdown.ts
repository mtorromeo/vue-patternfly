import styles from '@patternfly/react-styles/css/components/Dropdown/dropdown';
import { type DefineComponent, defineComponent, h, inject, type InjectionKey, mergeProps, provide, ref, type Ref, resolveDynamicComponent } from 'vue';
import PfDropdownToggle from './DropdownToggle';
import PfDropdownMenu from './DropdownMenu.vue';
import { isComponentPublicInstance } from '../../util';
import { breakpointProp, classesFromBreakpointProps } from '../../breakpoints';
import { useManagedProp } from '../../use';

let currentId = 0;

export const DropdownToggleElementRefKey = Symbol('DropdownToggleElementRefKey') as InjectionKey<Ref<HTMLElement | undefined>>;
export const DropdownBaseClassKey = Symbol('DropdownBaseClassKey') as InjectionKey<string>;
export const DropdownDisabledClassKey = Symbol('DropdownDisabledClassKey') as InjectionKey<string>;
export const DropdownMenuClassKey = Symbol('DropdownMenuClassKey') as InjectionKey<string>;
export const DropdownItemClassKey = Symbol('DropdownItemClassKey') as InjectionKey<string>;
export const DropdownToggleIndicatorClassKey = Symbol('DropdownToggleIndicatorClassKey') as InjectionKey<string>;
export const DropdownToggleTextClassKey = Symbol('DropdownToggleTextClassKey') as InjectionKey<string>;
export const DropdownToggleClassKey = Symbol('DropdownToggleClassKey') as InjectionKey<string>;
export const DropdownMenuRefKey = Symbol('DropdownMenuRefKey') as InjectionKey<Ref<typeof PfDropdownMenu | undefined>>;
export const DividerComponentKey = Symbol('DividerComponentKey') as InjectionKey<string>;

export default defineComponent({
  name: 'PfDropdown',

  props: {
    id: {
      type: String,
      default: null,
    },
    baseComponent: {
      type: String,
      default: 'div',
    },
    position: {
      type: String,
      default: 'left',
      validator: (v: any) => ['left', 'right'].includes(v),
    },
    menuAppendTo: {
      type: [String, Object],
      default: 'inline',
      validator: (v: any) => typeof v !== 'string' || ['inline', 'parent'].includes(v),
    },
    text: {
      type: String,
      default: '',
    },
    dropUp: Boolean,
    disabled: Boolean,
    open: {
      type: Boolean,
      default: null,
    },
    plain: Boolean,
    grouped: Boolean,
    splitButton: Boolean,
    active: Boolean,
    primary: Boolean,
    autoFocus: {
      type: Boolean,
      default: true,
    },
    ...breakpointProp('align', String, ['', 'left', 'right']),
  },

  emits: ['update:open'],

  setup() {
    const menuRef: Ref<typeof PfDropdownMenu | undefined> = ref();
    provide(DropdownMenuRefKey, menuRef);

    const toggleElementRef: Ref<HTMLElement | undefined> = ref();
    provide(DropdownToggleElementRefKey, toggleElementRef);

    return {
      menuRef,
      toggleElementRef,
      managedOpen: useManagedProp('open', false),
      baseClass: inject(DropdownBaseClassKey, undefined),
    };
  },

  data() {
    return {
      openedOnEnter: false,
    };
  },

  watch: {
    managedOpen: {
      handler(value) {
        if (!value) {
          this.openedOnEnter = false;
        }
      },
      immediate: true,
    },
  },

  render() {
    const id = this.id || `pf-dropdown-toggle-id-${currentId++}`;

    const children = [];
    const items = this.$slots.default ? this.$slots.default() : [];
    const ariaHasPopup = items.length > 0;

    const toggleProps = {
      id,
      ref: (toggle: object | null) => {
        if (toggle instanceof HTMLElement) {
          this.toggleElementRef = toggle;
        } else if (isComponentPublicInstance(toggle) && toggle.$el instanceof HTMLElement) {
          this.toggleElementRef = toggle.$el;
        }
      },
      disabled: this.disabled,
      open: this.managedOpen,
      plain: this.plain,
      'aria-haspopup': ariaHasPopup,
      onEnter: () => (this.openedOnEnter = true),
      'onUpdate:open': (v: boolean) => (this.managedOpen = v),
    };

    if (this.$slots.toggle) {
      const toggles = this.$slots.toggle();
      for (const t of toggles) {
        t.props = mergeProps(t.props ?? {}, toggleProps);
      }
      children.push(...toggles);
    } else {
      const toggle = h(PfDropdownToggle, mergeProps({
        splitButton: this.splitButton,
        active: this.active,
        primary: this.primary,
      }, toggleProps), {
        default: () => this.text,
      });
      children.push(toggle);
    }

    if (this.menuAppendTo === 'inline' && this.managedOpen) {
      const menu = h(PfDropdownMenu, {
        ref: (component) => (this.menuRef = component as any as typeof PfDropdownMenu),
        class: classesFromBreakpointProps(this.$props, ['align'], styles),
        position: this.position,
        grouped: this.grouped,
        autoFocus: this.openedOnEnter && this.autoFocus,
      }, {
        default: () => items,
      });
      children.push(menu);
    }

    const component = resolveDynamicComponent(this.baseComponent) as DefineComponent;
    return h(component, {
      class: [
        this.baseClass || styles.dropdown,
        classesFromBreakpointProps(this.$props, ['align'], styles),
        {
          [styles.modifiers.top]: this.dropUp,
          [styles.modifiers.alignRight]: this.position === 'right',
          [styles.modifiers.expanded]: this.open,
        },
      ],
      open: this.managedOpen,
      position: this.position,
      'aria-labelledby': `${id}-toggle`,
    }, children);
  },
});
