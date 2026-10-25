<template>
  <div
    v-if="initials || $slots.default"
    v-bind="ouiaProps"
    :class="[
      classes,
      {
        [styles.modifiers.colorful]: color,
        [styles.modifiers[color as NonNullable<typeof color>]]: color,
      },
    ]"
    role="img"
    :aria-hidden="alt === '' || undefined"
    :aria-label="alt === '' ? undefined : alt"
  >
    <span v-if="initials" :class="styles.avatarInitials" aria-hidden="true">{{ initials }}</span>
    <slot />
  </div>
  <img v-else v-bind="ouiaProps" :src="src" :alt="alt" :class="classes" />
</template>

<script lang="ts">
interface Props extends OUIAProps, /* @vue-ignore */ ImgHTMLAttributes {
  /** Specifies the URL of the image for the avatar. */
  src?: string;
  /** Specifies the alternate text of the image for the avatar. Sets the aria-label instead when using initials or
   * the default slot; pass an empty string to hide such an avatar from assistive technologies. */
  alt?: string;
  /** Flag to indicate the avatar should have a border. */
  bordered?: boolean;
  /** Size variant of avatar. */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Color of the avatar. Applies to avatars with initials or custom content, and includes a border. */
  color?: 'red' | 'orangered' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'purple' | 'gray';
  /** Initials of the avatar. */
  initials?: string;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Avatar/avatar';
import { computed, type ImgHTMLAttributes, type VNode } from 'vue';
import { useOUIAProps, type OUIAProps } from '../helpers/ouia';

defineOptions({
  name: 'PfAvatar',
});

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

defineSlots<{
  /** Custom content, such as svgs or icons, rendered instead of the image. */
  default?: (props?: Record<never, never>) => VNode[];
}>();

const classes = computed(() => [
  styles.avatar,
  {
    [styles.modifiers.bordered]: props.bordered,
    [styles.modifiers[props.size as NonNullable<typeof props.size>]]: props.size,
  },
]);
</script>
