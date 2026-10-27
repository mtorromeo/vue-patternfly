<template>
  <div
    v-bind="ouiaProps"
    :class="[
      styles.fileUpload,
      {
        [styles.modifiers.dragHover]: dragActive,
        [styles.modifiers.loading]: loading,
      },
    ]"
  >
    <div :class="styles.fileUploadFileSelect">
      <pf-input-group>
        <pf-input-group-item fill>
          <pf-text-input
            :id="`${id}-filename`"
            read-only-variant="default"
            :disabled="disabled"
            :auto-validate="false"
            :name="name || `${id}-filename`"
            :aria-label="
              filenameAriaLabel ??
              (filename
                ? messages.fileUploadReadOnlyFilename
                : (filenamePlaceholder ?? messages.fileUploadFilenamePlaceholder))
            "
            :placeholder="filenamePlaceholder ?? messages.fileUploadFilenamePlaceholder"
            :model-value="filename ?? ''"
          />
        </pf-input-group-item>
        <pf-input-group-item>
          <pf-button
            v-bind="browseButtonAttrs"
            variant="control"
            :disabled="disabled || browseButtonDisabled"
            @click="$emit('browseButtonClick', $event)"
          >
            {{ browseButtonText ?? messages.fileUploadBrowse }}
          </pf-button>
        </pf-input-group-item>
        <pf-input-group-item>
          <pf-button
            variant="control"
            :disabled="disabled || (clearButtonDisabled ?? (!filename && !value))"
            @click="$emit('clearButtonClick', $event)"
          >
            {{ clearButtonText ?? messages.fileUploadClear }}
          </pf-button>
        </pf-input-group-item>
      </pf-input-group>
    </div>
    <div v-if="loading || hasTextPreview" :class="styles.fileUploadFileDetails">
      <pf-textarea
        v-if="hasTextPreview"
        :id="id"
        :disabled="disabled"
        :required="required"
        :readonly="readonly || (!!filename && !allowEditingUploadedText)"
        resize-orientation="vertical"
        :validated="validated"
        :aria-label="ariaLabel ?? messages.fileUpload"
        :model-value="typeof value === 'string' ? value : ''"
        :name="textareaName"
        :placeholder="textareaPlaceholder"
        @update:model-value="value = $event"
        @click="$emit('textAreaClick', $event)"
        @blur="$emit('textAreaBlur', $event)"
      />
      <div v-if="loading" :class="styles.fileUploadFileDetailsSpinner">
        <pf-spinner size="lg" :aria-valuetext="spinnerAriaValueText" />
      </div>
    </div>
    <slot />
  </div>
</template>

<script lang="ts">
interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Unique id for the text area. Also used to generate ids for accessible labels. */
  id?: string;
  /** Name property for the read-only filename field, defaults to `<id>-filename`. */
  name?: string;
  /** What type of file. Determines whether a text preview is shown and what is expected by the value (a string for 'text' and 'dataURL', or a File object otherwise). */
  type?: 'text' | 'dataURL';
  /** Value to be shown in the read-only filename field. */
  filename?: string | null;
  /** Flag to allow editing of a text file's contents after it is selected from disk. */
  allowEditingUploadedText?: boolean;
  /** Aria-label for the text area. Defaults to the `fileUpload` message. */
  ariaLabel?: string;
  /** Text for the browse button. Defaults to the `fileUploadBrowse` message. */
  browseButtonText?: string;
  /** Flag to disable the browse button. */
  browseButtonDisabled?: boolean;
  /** Additional attributes for the browse button, like aria-describedby referring to helper text describing file restrictions. */
  browseButtonAttrs?: ComponentProps<typeof PfButton>;
  /** Text for the clear button. Defaults to the `fileUploadClear` message. */
  clearButtonText?: string;
  /** Flag to disable the clear button. Defaults to true when there is no filename and no value. */
  clearButtonDisabled?: boolean;
  /** Aria-label for the read-only filename field. */
  filenameAriaLabel?: string;
  /** Placeholder string to display in the empty filename field. Defaults to the `fileUploadFilenamePlaceholder` message. */
  filenamePlaceholder?: string;
  /** Flag to hide the built-in preview of the file (where available). If true, you can use the default slot to render an alternate preview. */
  hideDefaultPreview?: boolean;
  /** Flag to show if the field is disabled. */
  disabled?: boolean;
  /** Flag to show if a file is being loaded. */
  loading?: boolean;
  /** Flag to show if the field is read only. */
  readonly?: boolean;
  /** Flag to show if the field is required. */
  required?: boolean;
  /** Aria-valuetext for the loading spinner. */
  spinnerAriaValueText?: string;
  /** Value to indicate if the field is modified to show that validation state. */
  validated?: 'success' | 'error' | 'default';
  /** Flag to show if a file is being dragged over the file upload field. */
  dragActive?: boolean;
  /** Name property for the preview textarea. */
  textareaName?: string;
  /** Placeholder string to display in the empty text area field. */
  textareaPlaceholder?: string;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/FileUpload/file-upload';
import { usePfMessages } from '../../messages';
import { computed, useId, type HTMLAttributes } from 'vue';
import type { ComponentProps } from 'vue-component-type-helpers';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import PfInputGroup from '../InputGroup/InputGroup.vue';
import PfInputGroupItem from '../InputGroup/InputGroupItem.vue';
import PfTextInput from '../TextInput.vue';
import PfButton from '../Button.vue';
import PfTextarea from '../Textarea.vue';
import PfSpinner from '../Spinner.vue';

defineOptions({
  name: 'PfFileUploadField',
});

const props = withDefaults(defineProps<Props>(), {
  validated: 'default',
  clearButtonDisabled: undefined,
  id: () => useId(),
});
const messages = usePfMessages();
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

/** Value of the file's contents (string if text file, File object otherwise). */
const value = defineModel<string | File | null>({ default: null });

defineEmits<{
  (name: 'browseButtonClick', e: PointerEvent): void;
  (name: 'clearButtonClick', e: PointerEvent): void;
  (name: 'textAreaBlur', e: Event): void;
  (name: 'textAreaClick', e: MouseEvent): void;
}>();

defineSlots<{
  /** Additional content rendered after (or instead of) the file preview, like a pf-file-upload-helper-text */
  default?: (props?: Record<never, never>) => any;
}>();

const hasTextPreview = computed(() => !props.hideDefaultPreview && props.type === 'text');
</script>
