<template>
  <button
    ref="el"
    :class="[
      toggleClass ? toggleClass : (splitButton ? styles.dropdownToggleButton : styles.dropdownToggle),
      {
        [styles.modifiers.active]: active,
        [styles.modifiers.plain]: plain,
        [styles.modifiers.primary]: primary,
      },
    ]"
    :type="type"
    :aria-expanded="open"
    @click="toggle"
    @keydown="onKeydown"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Dropdown/dropdown';

import { inject, onBeforeUnmount, onMounted, type ButtonHTMLAttributes, ref, type Ref } from 'vue';
import { DropdownMenuRefKey, DropdownToggleClassKey } from './Dropdown.vue';

defineOptions({
  name: 'PfToggle',
});

export interface Props extends /* @vue-ignore */ ButtonHTMLAttributes {
  type?: 'button' | 'submit' | 'reset';
  open?: boolean;
  splitButton?: boolean;
  active?: boolean;
  plain?: boolean;
  primary?: boolean;
  bubbleEvent?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  type: 'button',
});

const emit = defineEmits<{
  (name: 'update:open', value: boolean): void;
  (name: 'enter'): void;
}>();

defineSlots<{
  default?: (props: Record<never, never>) => any;
}>();

const el: Ref<HTMLButtonElement | undefined> = ref();
const menuRef = inject(DropdownMenuRefKey);
const toggleClass = inject(DropdownToggleClassKey, undefined);

onMounted(() => {
  document.addEventListener('click', onDocClick);
  document.addEventListener('touchstart', onDocClick);
  document.addEventListener('keydown', onEscPress);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', onDocClick);
  document.removeEventListener('touchstart', onDocClick);
  document.removeEventListener('keydown', onEscPress);
});

function toggle() {
  emit('update:open', !props.open);
}

function onDocClick(event: MouseEvent | TouchEvent) {
  if (!props.open) {
    return;
  }

  const clickedOnToggle = () => event.target instanceof Node && el.value?.parentElement?.contains(event.target);

  const clickedWithinMenu = () => {
    const menu = menuRef?.value?.$el;
    return menu && menu.contains && menu.contains(event.target);
  };

  if (!clickedOnToggle() && !clickedWithinMenu()) {
    toggle();
  }
}

function onEscPress(event: KeyboardEvent) {
  const keyCode = event.keyCode || event.which;

  if (!props.open || !(keyCode === 27 /* ESC */ || event.key === 'Tab')) {
    return;
  }

  const escFromToggle = () => event.target instanceof Node && el.value?.parentElement?.contains(event.target);

  const escFromWithinMenu = () => {
    const menu = menuRef?.value?.$el;
    return menu && menu.contains && menu.contains(event.target);
  };

  if (escFromToggle() || escFromWithinMenu()) {
    toggle();
    el.value?.focus?.();
  }
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Tab' && !props.open) {
    return;
  }

  const stopEvent = () => {
    if (!props.bubbleEvent) {
      event.stopPropagation();
    }
    event.preventDefault();
  };

  if (!props.open) {
    if (event.key === 'Enter' || event.key === ' ' || event.key === 'ArrowDown') {
      toggle();
      emit('enter');
      stopEvent();
    }
    return;
  }

  const keyCode = event.keyCode || event.which;

  if (!props.bubbleEvent && keyCode === 27 /* ESC */) {
    onEscPress(event);
    stopEvent();
  } else if (event.key === 'Tab' || event.key === 'Enter' || event.key === ' ') {
    toggle();
    stopEvent();
  } else if (event.key === 'ArrowDown') {
    if (menuRef?.value?.items?.length && menuRef?.value.$el && !menuRef?.value.$el.contains(event.target)) {
      menuRef.value.items[0].focused = true;
      stopEvent();
    }
  }
}
</script>
