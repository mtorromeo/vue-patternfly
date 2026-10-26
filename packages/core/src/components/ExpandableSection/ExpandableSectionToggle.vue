<template>
  <div
    v-bind="ouiaProps"
    :class="[
      styles.expandableSection,
      {
        [styles.modifiers.expanded]: expanded,
        [styles.modifiers.truncate]: truncate,
        'pf-m-detached': detached,
      },
    ]"
  >
    <component :is="toggleWrapper" :class="`${styles.expandableSection}__toggle`">
      <pf-button
        v-bind="toggleAttrs"
        :id="toggleId"
        variant="link"
        :inline="truncate"
        :aria-controls="contentId"
        :aria-expanded="expanded"
        @click="expanded = !expanded"
      >
        <template v-if="!truncate" #icon>
          <span
            :class="[
              styles.expandableSectionToggleIcon,
              {
                [styles.modifiers.expandTop]: expanded && direction === 'up',
              },
            ]"
          >
            <pf-angle-down-icon />
          </span>
        </template>
        <template v-if="$slots.default" #default>
          <slot />
        </template>
      </pf-button>
    </component>
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/ExpandableSection/expandable-section';
import PfAngleDownIcon from '@vue-patternfly/icons/angle-down-icon';
import PfButton from '../Button.vue';
import type { HTMLAttributes } from 'vue';
import type { ComponentProps } from 'vue-component-type-helpers';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfExpandableSectionToggle',
});

interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** ID of the content of the expandable section. It must match the contentId of the pf-expandable-section. */
  contentId?: string;

  /** ID of the toggle. It must match the toggleId of the pf-expandable-section. */
  toggleId?: string;

  /** Direction the toggle arrow should point when the expandable section is expanded. */
  direction?: 'up' | 'down';

  /** Flag to determine toggle styling when the expandable content is truncated. */
  truncate?: boolean;

  /** Flag indicating that the expandable section and expandable toggle are detached from one another. */
  detached?: boolean;

  /** The HTML element to use for the toggle wrapper. Use a heading level when the toggle text should function as a heading. */
  toggleWrapper?: 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

  /** Additional attributes for the toggle button, like aria-label and aria-labelledby */
  toggleAttrs?: ComponentProps<typeof PfButton>;
}

const props = withDefaults(defineProps<Props>(), {
  direction: 'down',
  toggleWrapper: 'div',
});
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

/** Flag to indicate if the content is expanded */
const expanded = defineModel<boolean>('expanded', { default: false });

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
