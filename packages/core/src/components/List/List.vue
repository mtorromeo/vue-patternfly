<template>
  <component
    :is="component"
    :type="component === 'ol' ? type : undefined"
    :class="[styles.list, variant && styles.modifiers[variant], {
      [styles.modifiers.bordered]: bordered,
      [styles.modifiers.plain]: plain,
      [styles.modifiers.iconLg]: iconSize === 'large',
    }]"
  >
    <slot />
  </component>
</template>

<script lang="ts">
export enum OrderType {
  number = '1',
  lowercaseLetter = 'a',
  uppercaseLetter = 'A',
  lowercaseRomanNumber = 'i',
  uppercaseRomanNumber = 'I'
}

export enum ListVariant {
  inline = 'inline'
}

export enum ListComponent {
  ol = 'ol',
  ul = 'ul'
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/List/list';

withDefaults(defineProps<{
  /** Adds list variant styles */
  variant?: ListVariant.inline;
  /** Modifies the list to add borders between items */
  bordered?: boolean;
  /** Modifies the list to include plain styling */
  plain?: boolean;
  /** Modifies the size of the icons in the list */
  iconSize?: 'default' | 'large';
  /** Sets the way items are numbered if variant is set to ordered */
  type?: OrderType;
  component?: 'ol' | 'ul';
}>(), {
  iconSize: 'default',
  type: OrderType.number,
  component: ListComponent.ul,
});
</script>
