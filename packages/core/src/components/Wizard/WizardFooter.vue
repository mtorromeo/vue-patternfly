<template>
  <pf-wizard-footer-wrapper>
    <pf-action-list>
      <pf-action-list-group>
        <pf-action-list-item v-if="!backHidden">
          <pf-button
            variant="secondary"
            :disabled="backDisabled"
            v-bind="backButtonAttrs"
            @click="emit('back', $event)"
          >
            {{ backButtonText ?? messages.wizardBack }}
          </pf-button>
        </pf-action-list-item>
        <pf-action-list-item>
          <pf-button
            variant="primary"
            type="submit"
            :disabled="nextDisabled"
            v-bind="nextButtonAttrs"
            @click="emit('next', $event)"
          >
            {{ nextButtonText ?? messages.wizardNext }}
          </pf-button>
        </pf-action-list-item>
      </pf-action-list-group>
      <pf-action-list-group v-if="!cancelHidden">
        <pf-action-list-item>
          <pf-button variant="link" v-bind="cancelButtonAttrs" @click="emit('close', $event)">
            {{ cancelButtonText ?? messages.wizardCancel }}
          </pf-button>
        </pf-action-list-item>
      </pf-action-list-group>
    </pf-action-list>
  </pf-wizard-footer-wrapper>
</template>

<script lang="ts">
interface Props extends /* @vue-ignore */ HTMLAttributes {
  /** Custom text for the Next button. Defaults to the `wizardNext` message. */
  nextButtonText?: string;
  /** Custom text for the Back button. Defaults to the `wizardBack` message. */
  backButtonText?: string;
  /** Custom text for the Cancel link. Defaults to the `wizardCancel` message. */
  cancelButtonText?: string;
  /** Flag to disable the next button */
  nextDisabled?: boolean;
  /** Flag to disable the back button */
  backDisabled?: boolean;
  /** Flag to hide the back button */
  backHidden?: boolean;
  /** Flag to hide the cancel button */
  cancelHidden?: boolean;
  /** Additional attributes for the Next button */
  nextButtonAttrs?: Record<string, unknown>;
  /** Additional attributes for the Back button */
  backButtonAttrs?: Record<string, unknown>;
  /** Additional attributes for the Cancel button */
  cancelButtonAttrs?: Record<string, unknown>;
}
</script>

<script lang="ts" setup>
import type { HTMLAttributes } from 'vue';
import { usePfMessages } from '../../messages';
import PfWizardFooterWrapper from './WizardFooterWrapper.vue';
import PfActionList from '../ActionList/ActionList.vue';
import PfActionListGroup from '../ActionList/ActionListGroup.vue';
import PfActionListItem from '../ActionList/ActionListItem.vue';
import PfButton from '../Button.vue';

defineOptions({
  name: 'PfWizardFooter',
});
const messages = usePfMessages();

defineProps<Props>();

const emit = defineEmits<{
  (name: 'next', event: PointerEvent): void;
  (name: 'back', event: PointerEvent): void;
  (name: 'close', event: PointerEvent): void;
}>();

defineSlots<Record<string, never>>();
</script>
