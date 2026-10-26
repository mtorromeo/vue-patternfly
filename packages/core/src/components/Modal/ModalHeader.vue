<template>
  <header
    v-bind="ouiaProps"
    :class="[
      styles.modalBoxHeader,
      {
        [styles.modifiers.help]: $slots.help,
      },
    ]"
  >
    <define-content>
      <slot>
        <component :is="titleOverflowing ? PfTooltip : PassThrough" v-if="title">
          <h1
            :id="titleId"
            ref="titleRef"
            :class="[
              styles.modalBoxTitle,
              {
                [styles.modifiers.icon]: hasIcon,
                [styles.modifiers[titleIconVariant as Exclude<ModalTitleIconVariant, 'default'>]]:
                  titleIconVariant && titleIconVariant !== 'default',
              },
            ]"
          >
            <span v-if="hasIcon" :class="styles.modalBoxTitleIcon">
              <slot name="title-icon">
                <circle-check-icon v-if="titleIconVariant === 'success'" />
                <circle-exclamation-icon v-else-if="titleIconVariant === 'danger'" />
                <triangle-exclamation-icon v-else-if="titleIconVariant === 'warning'" />
                <circle-info-icon v-else-if="titleIconVariant === 'info'" />
                <bell-icon v-else />
              </slot>
            </span>
            <span v-if="label" class="pf-v6-screen-reader">{{ label }}</span>
            <span :class="styles.modalBoxTitleText">{{ title }}</span>
          </h1>

          <template v-if="titleOverflowing" #content>{{ title }}</template>
        </component>

        <div v-if="description || $slots.description" :id="descriptionId" :class="styles.modalBoxDescription">
          <slot name="description">{{ description }}</slot>
        </div>
      </slot>
    </define-content>

    <template v-if="$slots.help">
      <div :class="styles.modalBoxHeaderMain">
        <content />
      </div>
      <div :class="`${styles.modalBoxHeader}-help`">
        <slot name="help" />
      </div>
    </template>

    <content v-else />
  </header>
</template>

<script lang="ts">
interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Content rendered inside the modal title. Ignored when the default slot replaces the header content. */
  title?: string;
  /** Id of the modal title. Generated when not set. */
  labelId?: string;
  /** Optional alert icon to show before the title. When the predefined alert types are used the default styling
   * will be automatically applied. A custom icon can be passed in the title-icon slot. */
  titleIconVariant?: ModalTitleIconVariant;
  /** Optional title label text for screen readers */
  titleLabel?: string;
  /** Description of the modal, replaced by the description slot */
  description?: string;
  /** Id of the modal description. Generated when not set. */
  descriptorId?: string;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/ModalBox/modal-box';
import {
  capitalize,
  computed,
  inject,
  onBeforeUnmount,
  useId,
  useSlots,
  useTemplateRef,
  watchEffect,
  type HTMLAttributes,
  type VNode,
} from 'vue';
import { createReusableTemplate } from '@vueuse/core';
import PassThrough from '../../helpers/PassThrough.vue';
import PfTooltip from '../Tooltip/Tooltip.vue';
import CircleCheckIcon from '@vue-patternfly/icons/circle-check-icon';
import CircleExclamationIcon from '@vue-patternfly/icons/circle-exclamation-icon';
import TriangleExclamationIcon from '@vue-patternfly/icons/triangle-exclamation-icon';
import CircleInfoIcon from '@vue-patternfly/icons/circle-info-icon';
import BellIcon from '@vue-patternfly/icons/bell-icon';
import { useElementOverflow } from '../../use';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import { ModalKey, type ModalTitleIconVariant } from './common';

defineOptions({
  name: 'PfModalHeader',
});

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

defineSlots<{
  /** Custom content of the header, replacing the title and the description */
  default?: (props?: Record<never, never>) => VNode[];
  /** Description of the modal, replacing the description prop */
  description?: (props?: Record<never, never>) => VNode[];
  /** Custom icon shown before the title */
  'title-icon'?: (props?: Record<never, never>) => VNode[];
  /** Help section of the header, such as a help popover */
  help?: (props?: Record<never, never>) => VNode[];
}>();

const slots = useSlots();
const [DefineContent, Content] = createReusableTemplate();

const titleEl = useTemplateRef('titleRef');
const titleOverflowing = useElementOverflow(titleEl);

const generatedTitleId = useId();
const generatedDescriptionId = useId();
const titleId = computed(() => props.labelId ?? generatedTitleId);
const descriptionId = computed(() => props.descriptorId ?? generatedDescriptionId);

const hasIcon = computed(() => !!props.titleIconVariant || !!slots['title-icon']);
const label = computed(() => {
  if (!props.titleLabel && props.titleIconVariant) {
    return `${capitalize(props.titleIconVariant)} alert:`;
  }
  return props.titleLabel;
});

// the title and the description label and describe the enclosing modal, unless the header content is custom
const modal = inject(ModalKey, undefined);
if (modal) {
  watchEffect(() => {
    modal.titleId.value = !slots.default && props.title ? titleId.value : undefined;
    modal.descriptionId.value =
      !slots.default && (props.description || slots.description) ? descriptionId.value : undefined;
  });

  onBeforeUnmount(() => {
    modal.titleId.value = undefined;
    modal.descriptionId.value = undefined;
  });
}
</script>
