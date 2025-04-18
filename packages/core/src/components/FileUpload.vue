<template>
  <div
    v-bind="ouiaProps" :class="[styles.fileUpload, {
      [styles.modifiers.dragHover]: dragActive,
      [styles.modifiers.loading]: loading,
    }]">
    <div :class="styles.fileUploadFileSelect">
      <pf-input-group>
        <pf-input-group-item fill>
          <pf-text-input
            :id="`${validId}-filename`"
            ref="filenameInputRef"
            read-only-variant="default"
            :disabled="disabled"
            :auto-validate="false"
            :name="name"
            :aria-label="filenameAriaLabel ?? (managedFilename ? 'Read only filename' : filenamePlaceholder)"
            :placeholder="filenamePlaceholder"
            :model-value="managedFilename"
            :aria-describedby="`${validId}-browse-button`"
          />
        </pf-input-group-item>
        <pf-input-group-item>
          <pf-button
            :id="`${validId}-browse-button`"
            style="cursor: pointer"
            component="label"
            variant="control"
            :disabled="disabled"
            @click="$emit('browseButtonClick', $event)"
          >
            <input type="file" :accept="props.dataTypes?.join(',')" :name="name" :required="required" style="display: none" @change="setFile(($event.target as HTMLInputElement | undefined)?.files?.[0] ?? null)">
            {{ browseButtonText }}
          </pf-button>
        </pf-input-group-item>
        <pf-input-group-item>
          <pf-button
            variant="control"
            :disabled="disabled || (clearButtonDisabled ?? (!managedFilename && !value))"
            @click="onClearButtonClick"
          >
            {{ clearButtonText }}
          </pf-button>
        </pf-input-group-item>
      </pf-input-group>
    </div>
    <div :class="styles.fileUploadFileDetails">
      <pf-textarea
        v-if="!hideDefaultPreview && type === 'text'"
        :id="id"
        :disabled="disabled"
        :required="required"
        :readonly="readonly || (!!managedFilename && !allowEditingUploadedText)"
        resize-orientation="vertical"
        :validated="validated"
        :aria-label="ariaLabel"
        :model-value="typeof value === 'string' ? value : ''"
        :name="textareaName"
        :placeholder="textareaPlaceholder"
        @click="$emit('textAreaClick', $event)"
        @blur="$emit('textAreaBlur', $event)"
      />
      <div v-if="managedLoading" :class="styles.fileUploadFileDetailsSpinner">
        <pf-spinner size="lg" :aria-valuetext="spinnerAriaValueText" />
      </div>
    </div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/FileUpload/file-upload';
import { computed, useTemplateRef, type HTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../helpers/ouia';
import PfInputGroup from './InputGroup/InputGroup.vue';
import PfInputGroupItem from './InputGroup/InputGroupItem.vue';
import PfTextInput from './TextInput.vue';
import PfButton from './Button.vue';
import PfTextarea from './Textarea.vue';
import PfSpinner from './Spinner.vue';
import { getUniqueId } from '../util';
import { useManagedProp } from '../use';
import { useDropZone } from '@vueuse/core';

defineOptions({
  name: 'PfFileUpload',
});

export interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Unique id for the text area. Also used to generate ids for accessible labels. */
  id?: string;
  /** Flag to allow editing of a text file's contents after it is selected from disk. */
  allowEditingUploadedText?: boolean;
  /** Aria-label for the text area. */
  ariaLabel?: string;
  /** Text for the browse button. */
  browseButtonText?: string;
  /** Text for the clear button. */
  clearButtonText?: string;
  /** Value to be shown in the read-only filename field. */
  filename?: string;
  /** Aria-label for the read-only filename field. */
  filenameAriaLabel?: string;
  /** Placeholder string to display in the empty filename field. */
  filenamePlaceholder?: string;
  /** Flag to hide the built-in preview of the file (where available). If true, you can use
   * the children property to render an alternate preview.
   */
  hideDefaultPreview?: boolean;
  /** Name property for the text input. */
  name?: string;
  /** Flag to disable the clear button. */
  clearButtonDisabled?: boolean;
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
  /** What type of file. Determines what is is expected by the value property (a string for
   * 'text' and 'dataURL', or a File object otherwise).
   */
  type?: 'text' | 'dataURL' | 'arrayBuffer';
  /** Value to indicate if the field is modified to show that validation state.
   * If set to success, field will be modified to indicate valid state.
   * If set to error,  field will be modified to indicate error state.
   */
  validated?: 'success' | 'error' | 'default';
  /** Value of the file's contents (string if text file, ArrayBuffer object otherwise). */
  modelValue?: string | ArrayBuffer;
  /** Flag to show if a file is being dragged over the file upload field. */
  dragActive?: boolean;
  /** Name property for the preview textarea. */
  textareaName?: string;
  /** Placeholder string to display in the empty text area field. */
  textareaPlaceholder?: string;
  /** Allowed data types, if not set, all data types are allowed. */
  dataTypes?: readonly string[];
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  validated: 'default',
  ariaLabel: 'File upload',
  filenamePlaceholder: 'Drag a file here or browse to upload',
  browseButtonText: 'Browse...',
  clearButtonText: 'Clear',
  clearButtonDisabled: undefined,
  loading: undefined,
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

const emit = defineEmits<{
  (name: 'onUpdate:modelValue', value: string | File): void;
  (name: 'browseButtonClick', e: PointerEvent): void;
  (name: 'clearButtonClick', e: PointerEvent): void;
  (name: 'textAreaBlur', e: Event): void;
  (name: 'textAreaClick', e: MouseEvent): void;
  (name: 'fileInputChange', file: File | null): void;
  (name: 'readStarted', file: File): void;
  (name: 'readFinished', file: File, content: string | ArrayBuffer | null): void;
}>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

const value = useManagedProp<string | ArrayBuffer | null>('modelValue', null);
const managedFilename = useManagedProp<string | null>('filename', null);
const managedLoading = useManagedProp('loading', false);
const validId = computed(() => props.id || getUniqueId());
const filenameInputRef = useTemplateRef('filenameInputRef');

useDropZone(() => filenameInputRef.value?.$el, {
  dataTypes: props.dataTypes,
  multiple: false,
  async onDrop(files) {
    if (!files?.length) {
      return;
    }
    await setFile(files[0]);
  },
});

function readFile(fileHandle: File) {
  return new Promise((resolve: (value: string | ArrayBuffer | null) => void, reject: (reason: DOMException | string | null) => void) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    if (props.type === 'text') {
      reader.readAsText(fileHandle);
    } else if (props.type === 'dataURL') {
      reader.readAsDataURL(fileHandle);
    } else if (props.type === 'arrayBuffer') {
      reader.readAsArrayBuffer(fileHandle);
    } else {
      reject('unknown type');
    }
  });
}

async function setFile(file: File | null) {
  emit('fileInputChange', file);
  managedFilename.value = file?.name ?? null;

  if (!file) {
    value.value = null;
    return;
  }

  if (props.type !== 'text' && props.type !== 'dataURL') {
    return;
  }

  emit('readStarted', file);
  managedLoading.value = true;
  let content = null;
  try {
    content = await readFile(file);
  } finally {
    managedLoading.value = false;
    emit('readFinished', file, content);
    value.value = content;
  }
}

function onClearButtonClick(e: PointerEvent) {
  emit('clearButtonClick', e);
  setFile(null);
}
</script>
