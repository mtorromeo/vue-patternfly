<template>
  <pf-file-upload-field
    v-bind="ouiaProps"
    :id="id"
    v-model="fieldValue"
    role="presentation"
    :type="type"
    :filename="filename"
    :loading="loading"
    :disabled="disabled"
    :drag-active="dragActive"
    @dragenter="onDragEnter"
    @dragover="onDragOver"
    @dragleave="onDragLeave"
    @drop="onDrop"
    @browse-button-click="onBrowseButtonClick"
    @clear-button-click="onClearButtonClick"
  >
    <input
      ref="fileInputRef"
      type="file"
      hidden
      tabindex="-1"
      :accept="acceptList.join(',') || undefined"
      :name="name"
      :disabled="disabled"
      @click.stop
      @change="onFileInputChange"
    />
    <slot />
  </pf-file-upload-field>
</template>

<script lang="ts">
export type FileErrorCode = 'file-invalid-type' | 'file-too-large' | 'file-too-small' | 'too-many-files';

export interface FileError {
  code: FileErrorCode;
  message: string;
}

export interface FileRejection {
  file: File;
  errors: FileError[];
}

interface Props
  extends
    OUIAProps,
    /* @vue-ignore */ Omit<
      ComponentProps<typeof PfFileUploadField>,
      'ouiaId' | 'ouiaSafe' | 'modelValue' | 'filename' | 'loading' | 'dragActive'
    > {
  /** Unique id for the text area. Also used to generate ids for accessible labels. */
  id?: string;
  /** What type of file. With 'text' or 'dataURL' the file is read and its content becomes the value; otherwise the value is the selected File object. */
  type?: 'text' | 'dataURL';
  /** Name property for the hidden file input, so that the selected file is submitted with a native form. */
  name?: string;
  /** Accepted file types, as MIME types (`text/csv`, `image/*`) or extensions (`.csv`), like the accept attribute of a file input. */
  accept?: string | readonly string[];
  /** Maximum file size in bytes. */
  maxSize?: number;
  /** Minimum file size in bytes. */
  minSize?: number;
  /** Flag to show if the field is disabled. */
  disabled?: boolean;
}
</script>

<script lang="ts" setup>
import { computed, ref, useId, useTemplateRef } from 'vue';
import { usePfMessages } from '../../messages';
import type { ComponentProps } from 'vue-component-type-helpers';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import PfFileUploadField from './FileUploadField.vue';

defineOptions({
  name: 'PfFileUpload',
});

const props = withDefaults(defineProps<Props>(), {
  id: () => useId(),
});
const messages = usePfMessages();
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

/** Value of the file's contents (string if type is 'text' or 'dataURL', File object otherwise). */
const value = defineModel<string | File | null>({ default: null });

/** Value to be shown in the read-only filename field. */
const filename = defineModel<string | null>('filename', { default: null });

/** Flag to show if a file is being loaded. */
const loading = defineModel<boolean>('loading', { default: false });

const emit = defineEmits<{
  (name: 'browseButtonClick', e: PointerEvent): void;
  (name: 'clearButtonClick', e: PointerEvent): void;
  (name: 'fileInputChange', file: File | null): void;
  (name: 'dropAccepted', files: File[]): void;
  (name: 'dropRejected', rejections: FileRejection[]): void;
  (name: 'readStarted', file: File): void;
  (name: 'readFinished', file: File, content: string): void;
  (name: 'readFailed', error: DOMException | null, file: File): void;
}>();

defineSlots<{
  /** Additional content rendered after (or instead of) the file preview, like a pf-file-upload-helper-text */
  default?: (props?: Record<never, never>) => any;
}>();

const fileInput = useTemplateRef('fileInputRef');
const dragActive = ref(false);
let dragDepth = 0;

const readsContent = computed(() => props.type === 'text' || props.type === 'dataURL');
const fieldValue = computed({
  get: () => value.value ?? (readsContent.value ? '' : null),
  set: v => (value.value = v),
});

const acceptList = computed(() => {
  const accept = typeof props.accept === 'string' ? props.accept.split(',') : (props.accept ?? []);
  return accept.map(a => a.trim()).filter(Boolean);
});

function isAccepted(file: File) {
  if (!acceptList.value.length) {
    return true;
  }
  const name = file.name.toLowerCase();
  const mimeType = file.type.toLowerCase();
  const baseMimeType = mimeType.replace(/\/.*$/, '');
  return acceptList.value.some(type => {
    const t = type.toLowerCase();
    if (t.startsWith('.')) {
      return name.endsWith(t);
    }
    if (t.endsWith('/*')) {
      return baseMimeType === t.replace(/\/.*$/, '');
    }
    return mimeType === t;
  });
}

function fileErrors(file: File) {
  const errors: FileError[] = [];
  if (!isAccepted(file)) {
    errors.push({
      code: 'file-invalid-type',
      message: messages.value.fileUploadInvalidType(acceptList.value.join(', ')),
    });
  }
  if (props.maxSize !== undefined && file.size > props.maxSize) {
    errors.push({ code: 'file-too-large', message: messages.value.fileUploadTooLarge(props.maxSize) });
  }
  if (props.minSize !== undefined && file.size < props.minSize) {
    errors.push({ code: 'file-too-small', message: messages.value.fileUploadTooSmall(props.minSize) });
  }
  return errors;
}

/** Validates the selected or dropped files and loads the accepted one, returns whether it was accepted */
function handleFiles(files: File[]) {
  const rejections: FileRejection[] = files.map(file => ({ file, errors: fileErrors(file) }));
  if (files.length > 1) {
    for (const rejection of rejections) {
      rejection.errors.push({ code: 'too-many-files', message: messages.value.fileUploadTooManyFiles });
    }
  }

  const rejected = rejections.filter(r => r.errors.length);
  if (rejected.length) {
    emit('dropRejected', rejected);
    return false;
  }
  if (!files.length) {
    return false;
  }

  emit('dropAccepted', files);
  setFile(files[0]);
  return true;
}

function readFile(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(typeof reader.result === 'string' ? reader.result : '');
    reader.onerror = () => reject(reader.error);
    if (props.type === 'text') {
      reader.readAsText(file);
    } else {
      reader.readAsDataURL(file);
    }
  });
}

async function setFile(file: File) {
  emit('fileInputChange', file);
  filename.value = file.name;

  if (!readsContent.value) {
    value.value = file;
    return;
  }

  emit('readStarted', file);
  loading.value = true;
  try {
    const content = await readFile(file);
    emit('readFinished', file, content);
    value.value = content;
  } catch (error) {
    emit('readFailed', error instanceof DOMException ? error : null, file);
    emit('readFinished', file, '');
    value.value = '';
  } finally {
    loading.value = false;
  }
}

function resetFileInput() {
  if (fileInput.value) {
    fileInput.value.value = '';
  }
}

function onFileInputChange() {
  const files = [...(fileInput.value?.files ?? [])];
  if (!handleFiles(files)) {
    resetFileInput();
  }
}

function hasFiles(e: DragEvent) {
  return !!e.dataTransfer?.types && [...e.dataTransfer.types].includes('Files');
}

function onDragEnter(e: DragEvent) {
  if (!hasFiles(e)) {
    return;
  }
  e.preventDefault();
  dragDepth++;
  dragActive.value = true;
}

function onDragOver(e: DragEvent) {
  if (!hasFiles(e)) {
    return;
  }
  e.preventDefault();
  if (e.dataTransfer) {
    e.dataTransfer.dropEffect = props.disabled ? 'none' : 'copy';
  }
}

function onDragLeave() {
  dragDepth = Math.max(0, dragDepth - 1);
  dragActive.value = dragDepth > 0;
}

function onDrop(e: DragEvent) {
  if (!hasFiles(e)) {
    return;
  }
  e.preventDefault();
  dragDepth = 0;
  dragActive.value = false;
  if (props.disabled) {
    return;
  }

  const files = [...(e.dataTransfer?.files ?? [])];
  if (handleFiles(files) && fileInput.value && e.dataTransfer) {
    // keep the dropped file in the input, for native form submission
    try {
      fileInput.value.files = e.dataTransfer.files;
    } catch {
      resetFileInput();
    }
  }
}

function onBrowseButtonClick(e: PointerEvent) {
  emit('browseButtonClick', e);
  fileInput.value?.click();
}

function onClearButtonClick(e: PointerEvent) {
  emit('clearButtonClick', e);
  emit('fileInputChange', null);
  resetFileInput();
  filename.value = null;
  value.value = null;
}
</script>
