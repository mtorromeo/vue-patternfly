<template>
  <li
    v-bind="ouiaProps"
    :class="[styles.jumpLinksItem, { [styles.modifiers.current]: managedActive }]"
    :aria-current="managedActive ? 'location' : undefined"
  >
    <component :is="fragment(renderChildren())" />
  </li>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/JumpLinks/jump-links';
import PfJumpLinksList from './JumpLinksList.vue';
import PfButton from '../Button.vue';
import { type MaybeComputedElementRef } from '@vueuse/core';
import { h, inject, toValue, onMounted, watch, computed, ref, type Ref, type LiHTMLAttributes } from 'vue';
import { JumpLinkInjectionKey, JumpLinksKey } from './common';
import { useChildrenTracker } from '../../use';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import { findChildrenVNodes, fragment } from '../../util';

defineOptions({
  name: 'PfJumpLinksItem',
});

interface Props extends OUIAProps, /* @vue-ignore */ Omit<LiHTMLAttributes, 'role' | 'aria-current'> {
  /** Whether this item is active. Parent JumpLinks component sets this when passed a `scrollableSelector`. */
  active?: boolean;
  /** Href for this link */
  href?: string;
  /** Selector or HTMLElement to spy on */
  node?: string | MaybeComputedElementRef<HTMLElement>;
}

const props = withDefaults(defineProps<Props>(), {
  active: undefined,
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

const emit = defineEmits<{
  (name: 'click', event: PointerEvent): void;
}>();

const slots = defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

useChildrenTracker(JumpLinksKey);

const jumpLinks = inject(JumpLinkInjectionKey);

const target: Ref<HTMLElement | null> = ref(null);

function searchTarget() {
  if (typeof props.node === 'string') {
    const scrollableElement = toValue(jumpLinks?.scrollableHTMLElement);
    if (scrollableElement) {
      const el = scrollableElement.querySelector(props.node) ?? undefined;
      target.value = el instanceof HTMLElement ? el : null;
    }
    return;
  }
  target.value = toValue(props.node) ?? null;
}

watch(() => [props.node, jumpLinks?.scrollableHTMLElement], searchTarget);
onMounted(searchTarget);

function handleClick(event: PointerEvent) {
  emit('click', event);

  const scrollableElement = toValue(jumpLinks?.scrollableHTMLElement);
  if (target.value && scrollableElement) {
    scrollableElement.scrollTo({
      top: target.value.offsetTop - (jumpLinks?.offset ?? 0),
      behavior: 'smooth',
    });
  }
}

function renderChildren() {
  const children = findChildrenVNodes(slots.default?.());
  const sublists = children.filter(c => c.type === PfJumpLinksList);
  const linkChildren = children.filter(c => c.type !== PfJumpLinksList);

  return [
    h('span', { class: styles.jumpLinksLink }, h(PfButton, {
      variant: 'link',
      component: 'a',
      href: props.href,
      onClick: handleClick,
    }, () => h('span', { class: styles.jumpLinksLinkText }, linkChildren))),
    ...sublists,
  ];
}

const managedActive = computed(() => {
  if (props.active !== undefined) {
    return props.active;
  }
  return jumpLinks?.scrollPosition.value && jumpLinks?.currentTargetPosition.value && jumpLinks?.currentTargetPosition.value === target.value?.offsetTop;
});

defineExpose({
  target,
});
</script>
