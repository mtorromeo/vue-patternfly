<template>
  <component
    :is="baseComponent"
    :class="[
      baseClass || styles.dropdown,
      classesFromBreakpointProps($props, ['align'], styles),
      {
        [styles.modifiers.top]: dropUp,
        [styles.modifiers.alignRight]: position === 'right',
        [styles.modifiers.expanded]: open,
      },
    ]"
    :open="managedOpen"
    :position="position"
    :aria-labelledby="effectiveId"
  >
    <render-toggles />

    <pf-dropdown-menu
      v-if="menuAppendTo === 'inline' && managedOpen"
      ref="menuRef"
      :class="classesFromBreakpointProps($props, ['align'], styles)"
      :position="position"
      :grouped="grouped"
      :auto-focus="autoFocus"
    >
      <slot />
    </pf-dropdown-menu>
  </component>
</template>

<script lang="ts">
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

export interface Props extends AlignBreakpointProps, /* @vue-ignore */ HTMLAttributes {
  id?: string,
  baseComponent?: string,
  position?: 'left' | 'right',
  menuAppendTo?: 'inline' | 'parent' | object,
  text?: string,
  dropUp?: boolean,
  disabled?: boolean,
  open?: boolean,
  plain?: boolean,
  grouped?: boolean,
  splitButton?: boolean,
  active?: boolean,
  primary?: boolean,
  autoFocus?: boolean,
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Dropdown/dropdown';
import { h, inject, type InjectionKey, mergeProps, provide, ref, type Ref, watch, type VNode, computed, type HTMLAttributes } from 'vue';
import PfDropdownToggle from './DropdownToggle.vue';
import PfDropdownMenu from './DropdownMenu.vue';
import { isComponentPublicInstance } from '../../util';
import { type AlignBreakpointProps, classesFromBreakpointProps } from '../../breakpoints';
import { useManagedProp } from '../../use';

let currentId = 0;

defineOptions({
  name: 'PfDropdown',
});

const props = withDefaults(defineProps<Props>(), {
  baseComponent: 'div',
  position: 'left',
  menuAppendTo: 'inline',
  open: undefined,
  autoFocus: true,
});

defineEmits<{
  (name: 'update:open', value: boolean): void;
}>();

const slots = defineSlots<{
  default?: (props: Record<never, never>) => VNode[];
  toggle?: (props: Record<never, never>) => VNode[];
}>();

const menuRef: Ref<typeof PfDropdownMenu | undefined> = ref();
provide(DropdownMenuRefKey, menuRef);

const toggleElementRef: Ref<HTMLElement | undefined> = ref();
provide(DropdownToggleElementRefKey, toggleElementRef);

const managedOpen = useManagedProp('open', false);
const baseClass = inject(DropdownBaseClassKey, undefined);
const openedOnEnter = ref(false);
const effectiveId = computed(() => props.id || `pf-dropdown-toggle-id-${currentId++}`);

watch(managedOpen, () => {
  if (!managedOpen.value) {
    openedOnEnter.value = false;
  }
}, { immediate: true });

function renderToggles() {
  const children = [];

  const toggleProps = {
    id: effectiveId.value,
    ref: (toggle: object | null) => {
      if (toggle instanceof HTMLElement) {
        toggleElementRef.value = toggle;
      } else if (isComponentPublicInstance(toggle) && toggle.$el instanceof HTMLElement) {
        toggleElementRef.value = toggle.$el;
      }
    },
    disabled: props.disabled,
    open: managedOpen.value,
    plain: props.plain,
    'aria-haspopup': !!slots.default,
    onEnter: () => (openedOnEnter.value = true),
    'onUpdate:open': (v: boolean) => (managedOpen.value = v),
  };

  if (slots.toggle) {
    const toggles = slots.toggle({});
    for (const t of toggles) {
      t.props = mergeProps(t.props ?? {}, toggleProps);
    }
    children.push(...toggles);
  } else {
    const toggle = h(PfDropdownToggle, mergeProps({
      splitButton: props.splitButton,
      active: props.active,
      primary: props.primary,
    }, toggleProps), {
      default: () => props.text,
    });
    children.push(toggle);
  }

  return children;
}
</script>
