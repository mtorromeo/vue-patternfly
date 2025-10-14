<template>
  <component
    v-bind="ouiaProps"
    :is="fieldset ? 'fieldset' : 'div'"
    :class="[styles.formFieldGroup, { [styles.modifiers.expanded]: managedExpandable && expanded }]"
  >
    <div v-if="managedExpandable" :class="styles.formFieldGroupToggle">
      <div :class="styles.formFieldGroupToggleButton">
        <pf-button
          :id="uniqueId"
          variant="plain"
          :aria-label="toggleAriaLabel"
          :aria-expanded="expanded"
          :aria-labelledby="uniqueId"
          @click="expanded = !expanded"
        >
          <span :class="styles.formFieldGroupToggleIcon">
            <pf-angle-right-icon aria-hidden />
          </span>
        </pf-button>
      </div>
    </div>
    <slot name="header" />
    <div v-if="!managedExpandable || expanded" :class="styles.formFieldGroupBody">
      <slot />
    </div>
  </component>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Form/form';
import { type FieldsetHTMLAttributes, computed, useId } from 'vue';
import PfButton from '../Button.vue';
import PfAngleRightIcon from '@vue-patternfly/icons/angle-right-icon';
import { isDefined } from '@vueuse/shared';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfFormFieldGroup',
});

interface Props extends OUIAProps, /* @vue-ignore */ FieldsetHTMLAttributes {
  fieldset?: boolean;

  /** Flag indicating if the field group is expandable */
  expandable?: boolean;

  /** Aria-label to use on the form filed group toggle button */
  toggleAriaLabel?: string;
}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

/** Flag indicate if the form field group is expanded. Modifies the card to be expandable. */
const expanded = defineModel<boolean | undefined>('expanded', { default: undefined });

defineSlots<{
  default?: (props?: Record<never, never>) => any;
  header?: (props?: Record<never, never>) => any;
}>();

const managedExpandable = computed(() => props.expandable || isDefined(expanded.value));
const uniqueId = computed(() => `form-field-group-toggle-${useId()}`);
</script>
