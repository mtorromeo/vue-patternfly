<template>
  <component
    v-bind="ouiaProps"
    :is="fieldset ? 'fieldset' : 'div'"
    :class="[styles.formFieldGroup, { [styles.modifiers.expanded]: managedExpandable && managedExpanded }]"
  >
    <div v-if="managedExpandable" :class="styles.formFieldGroupToggle">
      <div :class="styles.formFieldGroupToggleButton">
        <pf-button
          :id="uniqueId"
          variant="plain"
          :aria-label="toggleAriaLabel"
          :aria-expanded="managedExpanded"
          :aria-labelledby="uniqueId"
          @click="managedExpanded = !managedExpanded"
        >
          <span :class="styles.formFieldGroupToggleIcon">
            <pf-angle-right-icon aria-hidden />
          </span>
        </pf-button>
      </div>
    </div>
    <slot name="header" />
    <div v-if="!managedExpandable || managedExpanded" :class="styles.formFieldGroupBody">
      <slot />
    </div>
  </component>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Form/form';
import { type FieldsetHTMLAttributes, computed, useId } from 'vue';
import PfButton from '../Button.vue';
import PfAngleRightIcon from '@vue-patternfly/icons/angle-right-icon';
import { useManagedProp } from '../../use';
import { isDefined } from '@vueuse/shared';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfFormFieldGroup',
});

export interface Props extends OUIAProps, /* @vue-ignore */ FieldsetHTMLAttributes {
  fieldset?: boolean;

  /** Flag indicating if the field group is expandable */
  expandable?: boolean;

  /** Flag indicate if the form field group is expanded. Modifies the card to be expandable. */
  expanded?: boolean;

  /** Aria-label to use on the form filed group toggle button */
  toggleAriaLabel?: string;
}

const props = withDefaults(defineProps<Props>(), {
  expanded: undefined,
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineEmits<{
  (name: 'update:expanded', value: boolean): void;
}>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
  header?: (props?: Record<never, never>) => any;
}>();

const managedExpanded = useManagedProp('expanded', false);
const managedExpandable = computed(() => props.expandable || isDefined(props.expanded));
const uniqueId = computed(() => `form-field-group-toggle-${useId()}`);
</script>
