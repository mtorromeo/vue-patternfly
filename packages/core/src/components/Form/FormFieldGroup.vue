<template>
  <component
    v-bind="ouiaProps"
    :is="fieldset ? 'fieldset' : 'div'"
    :class="[
      styles.formFieldGroup,
      {
        [styles.modifiers.expanded]: managedExpandable && expanded,
        [styles.modifiers.expandable]: managedExpandable && animations,
      },
    ]"
    role="group"
    :aria-labelledby="titleId"
  >
    <div v-if="managedExpandable" :class="styles.formFieldGroupToggle">
      <div :class="styles.formFieldGroupToggleButton">
        <pf-button
          :id="toggleId"
          variant="plain"
          :aria-label="toggleAriaLabel"
          :aria-expanded="!!expanded"
          :aria-labelledby="titleId ? `${titleId} ${toggleId}` : undefined"
          @click="expanded = !expanded"
        >
          <template #icon>
            <span :class="styles.formFieldGroupToggleIcon">
              <pf-angle-down-icon />
            </span>
          </template>
        </pf-button>
      </div>
    </div>
    <slot name="header" />
    <div
      v-if="!managedExpandable || expanded || animations"
      :class="styles.formFieldGroupBody"
      :inert="(managedExpandable && animations && !expanded) || undefined"
    >
      <slot />
    </div>
  </component>
</template>

<script lang="ts">
interface Props extends OUIAProps, /* @vue-ignore */ FieldsetHTMLAttributes {
  /** Renders the group as a fieldset */
  fieldset?: boolean;

  /** Flag indicating if the field group is expandable */
  expandable?: boolean;

  /** Aria-label to use on the form field group toggle button */
  toggleAriaLabel?: string;

  /** Flag indicating whether an expandable form field group has animations. This will always render nested field group content rather than dynamically rendering it. */
  animations?: boolean;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Form/form';
import { type FieldsetHTMLAttributes, computed, onMounted, provide, ref, useId } from 'vue';
import PfButton from '../Button.vue';
import PfAngleDownIcon from '@vue-patternfly/icons/angle-down-icon';
import { isDefined } from '@vueuse/shared';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import { FormFieldGroupKey } from './common';

defineOptions({
  name: 'PfFormFieldGroup',
});

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

/** Flag indicate if the form field group is expanded. Modifies the field group to be expandable. */
const expanded = defineModel<boolean | undefined>('expanded', { default: undefined });

defineSlots<{
  default?: (props?: Record<never, never>) => any;
  /** Form field group header, typically a pf-form-field-group-header */
  header?: (props?: Record<never, never>) => any;
}>();

const managedExpandable = computed(() => props.expandable || isDefined(expanded.value));
const toggleId = `form-field-group-toggle-${useId()}`;
const titleId = ref<string>();

provide(FormFieldGroupKey, { titleId });

onMounted(() => {
  if (managedExpandable.value && !props.toggleAriaLabel && !titleId.value) {
    console.error(
      'FormFieldGroupExpandable:',
      'toggleAriaLabel or the title of FormFieldGroupHeader is required to make the toggle button accessible',
    );
  }
});
</script>
