<template>
  <li
    ref="liRef"
    v-bind="ouiaProps"
    :class="[styles.jumpLinksItem, { [styles.modifiers.current]: managedActive }]"
    :aria-current="managedActive ? 'location' : undefined"
  >
    <component :is="fragment(renderChildren())" />
  </li>
</template>

<script lang="ts">
interface Props extends OUIAProps, /* @vue-ignore */ Omit<LiHTMLAttributes, 'role' | 'aria-current'> {
  /** Whether this item is active. The parent pf-jump-links sets this when spying on a scrollable element. */
  active?: boolean;
  /** Href for this link */
  href?: string;
  /** Selector or HTMLElement to spy on. Defaults to the element with the id of the href. */
  node?: string | MaybeComputedElementRef<HTMLElement>;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/JumpLinks/jump-links';
import PfJumpLinksList from './JumpLinksList.vue';
import PfButton from '../Button.vue';
import type { MaybeComputedElementRef } from '@vueuse/core';
import { h, inject, toValue, computed, markRaw, ref, useTemplateRef, type LiHTMLAttributes } from 'vue';
import { JumpLinkInjectionKey, JumpLinksKey, type JumpLinksItemRegistration } from './common';
import { useChildrenTracker } from '../../use';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import { findChildrenVNodes, fragment } from '../../util';

defineOptions({
  name: 'PfJumpLinksItem',
});

const props = withDefaults(defineProps<Props>(), {
  active: undefined,
});
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

const emit = defineEmits<{
  (name: 'click', event: PointerEvent): void;
}>();

const slots = defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

const jumpLinks = inject(JumpLinkInjectionKey, undefined);
const target = ref<HTMLElement | null>(null);

function resolveTarget() {
  const node = props.node ?? props.href;
  if (typeof node === 'string') {
    if (node.startsWith('#')) {
      // allow ids with spaces and other special characters
      target.value = document.getElementById(node.slice(1));
    } else if (node) {
      const el = (toValue(jumpLinks?.scrollableHTMLElement) ?? document).querySelector(node);
      target.value = el instanceof HTMLElement ? el : null;
    } else {
      target.value = null;
    }
  } else {
    target.value = toValue(node) ?? null;
  }
  return target.value;
}

const li = useTemplateRef<HTMLElement>('liRef');
const registration: JumpLinksItemRegistration = markRaw({
  el: () => li.value,
  resolveTarget,
});
useChildrenTracker(JumpLinksKey, registration);

function handleClick(event: PointerEvent) {
  jumpLinks?.onItemClick(registration, event, props.href);
  emit('click', event);
}

function renderChildren() {
  const children = findChildrenVNodes(slots.default?.());
  const sublists = children.filter(c => c.type === PfJumpLinksList);
  const linkChildren = children.filter(c => c.type !== PfJumpLinksList);

  return [
    h(
      'span',
      { class: styles.jumpLinksLink },
      h(
        PfButton,
        {
          variant: 'link',
          component: 'a',
          href: props.href,
          onClick: handleClick,
        },
        () => h('span', { class: styles.jumpLinksLinkText }, linkChildren),
      ),
    ),
    ...sublists,
  ];
}

const managedActive = computed(() => props.active ?? !!jumpLinks?.isActive(registration));

resolveTarget();

defineExpose({
  target,
});
</script>
