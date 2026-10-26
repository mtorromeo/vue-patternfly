<template>
  <doc-page title="File Upload">
    <template #description>
      A <b>simple file upload</b> component allows the users to upload a single file into the browser. This is primarily
      used for uploading and previewing text files, but other file types will also be accepted.
    </template>

    <template #apidocs>
      <component-info name="PfFileUpload" />
      <component-info name="PfFileUploadField" />
      <component-info name="PfFileUploadHelperText" />
    </template>

    <pre v-md>
      ## Differences from patternfly-react
      - The value, the filename and the loading state are bound with `v-model`, `v-model:filename` and `v-model:loading`, and `pf-file-upload` updates them itself: `onDataChange` and `onTextChange` both become `update:modelValue`, and clearing resets the filename and value (emitting `file-input-change` with `null`).
      - Events don't receive the DOM event first: `file-input-change` receives the file, `read-finished` also receives the content and `read-failed` receives the error and the file.
      - `dropzoneProps` is replaced by the `accept`, `max-size` and `min-size` props and the `drop-accepted` and `drop-rejected` events, whose rejections carry the same error codes as `DropzoneErrorCode` (`file-invalid-type`, `file-too-large`, `file-too-small`, `too-many-files`).
      - The `name` of `pf-file-upload` is set on its hidden file input, so the file is submitted with a native form; the filename field is named `&lt;id&gt;-filename`. On `pf-file-upload-field` it names the filename field, like upstream.
      - The `browseButtonAriaDescribedby` prop is replaced by `browse-button-attrs`, which sets any attribute on the browse button.
      - `pf-file-upload` accepts every prop of `pf-file-upload-field`, and the `textarea-name` prop names the text preview.
      See [common differences from patternfly-react](#/).

      ## Examples

      The `pf-file-upload` component can accept a file via browse or drag-and-drop, and behaves like a standard form field with its `v-model` and `file-input-change` event, which is similar to the `change` event of an `&lt;input&gt;`. The `type` prop determines how the `pf-file-upload` component behaves upon accepting a file, and what type of value it puts in its `v-model`.
    </pre>

    <story-canvas title="Simple text file">
      <template #intro>
        <pre v-md>
          If `type="text"` is passed (and `hide-default-preview` is not), a `pf-textarea` preview will be rendered underneath the filename bar. When a file is selected, its contents will be read into memory and set as the `v-model` value. Every filename change is emitted with `file-input-change`, as an `&lt;input&gt;` element would do. Pressing the _Clear_ button emits `clear-button-click`.
        </pre>
      </template>
      <pf-file-upload
        id="text-file-simple"
        v-model="simpleText"
        v-model:filename="simpleTextFilename"
        type="text"
        filename-placeholder="Drag and drop a file or upload one"
        browse-button-text="Upload"
      />
    </story-canvas>

    <story-canvas title="With helper text">
      <template #intro>
        <pre v-md>
          You can pass in the `pf-file-upload-helper-text` sub-component via the default slot of `pf-file-upload`.
        </pre>
      </template>
      <pf-file-upload
        id="file-upload-helper-text"
        v-model="helperText"
        v-model:filename="helperTextFilename"
        type="text"
        filename-placeholder="Drag and drop a file or upload one"
        browse-button-text="Upload"
        :browse-button-attrs="{ 'aria-describedby': 'helper-text-example-helpText' }"
      >
        <pf-file-upload-helper-text>
          <pf-helper-text>
            <pf-helper-text-item id="helper-text-example-helpText">Upload a CSV file</pf-helper-text-item>
          </pf-helper-text>
        </pf-file-upload-helper-text>
      </pf-file-upload>
    </story-canvas>

    <story-canvas title="Text file with edits allowed">
      <template #intro>
        <pre v-md>
          A user can always type instead of selecting a file, but by default, once a user selects a text file from their disk they are not allowed to edit it (to prevent unintended changes to a format-sensitive file). This behavior can be changed with the `allow-editing-uploaded-text` prop. Typing or pasting text in the box updates the `v-model` with a string.
        </pre>
      </template>
      <pf-file-upload
        id="text-file-with-edits-allowed-example"
        v-model="editsText"
        v-model:filename="editsFilename"
        type="text"
        filename-placeholder="Drag and drop a file or upload one"
        allow-editing-uploaded-text
        browse-button-text="Upload"
      />
    </story-canvas>

    <story-canvas title="Text file with restrictions">
      <template #intro>
        <pre v-md>
          The `accept`, `max-size` and `min-size` props restrict the type and size of the files accepted, both when browsing and when dropping. `accept` takes MIME types (`text/csv`, `image/*`) and extensions (`.csv`), like the `accept` attribute of a file input. Rejected files are emitted with `drop-rejected`, each with a list of errors whose `code` is `file-invalid-type`, `file-too-large`, `file-too-small` or `too-many-files`, and accepted ones with `drop-accepted`. The following example will only accept CSV files smaller than 1 KB. Note that file type determination is not reliable across platforms, so be sure to test the behavior of your file upload restriction on all browsers and operating systems targeted by your application.

          #### IMPORTANT: A note about security

          Restricting file sizes and types in this way is for user convenience only, and it cannot prevent a malicious user from submitting anything to your server. As with any user input, your application should also validate, sanitize and/or reject restricted files on the server side.
        </pre>
      </template>
      <pf-form>
        <pf-form-group field-id="text-file-with-restrictions-example">
          <pf-file-upload
            id="text-file-with-restrictions-example"
            v-model="restrictedText"
            v-model:filename="restrictedFilename"
            type="text"
            filename-placeholder="Drag and drop a file or upload one"
            accept=".csv,text/csv"
            :max-size="1024"
            :validated="restrictedRejected ? 'error' : 'default'"
            browse-button-text="Upload"
            :browse-button-attrs="{ 'aria-describedby': 'restricted-file-example-helpText' }"
            @drop-rejected="onRestrictedRejected"
            @drop-accepted="restrictedRejected = false"
            @clear-button-click="restrictedRejected = false"
          >
            <pf-file-upload-helper-text>
              <pf-helper-text aria-live="polite">
                <pf-helper-text-item
                  id="restricted-file-example-helpText"
                  :variant="restrictedRejected ? 'error' : 'default'"
                >
                  {{ restrictedRejected ? restrictedMessage : 'Upload a CSV file' }}
                </pf-helper-text-item>
              </pf-helper-text>
            </pf-file-upload-helper-text>
          </pf-file-upload>
        </pf-form-group>
      </pf-form>
    </story-canvas>

    <story-canvas title="Simple file of any format">
      <template #intro>
        <pre v-md>
          If no `type` prop is specified, the component will not read files directly. When a file is selected, a [`File` object](https://developer.mozilla.org/en-US/docs/Web/API/File) is set as the `v-model` value and emitted with `file-input-change`, and your application will be responsible for reading from it (e.g. by using the [FileReader API](https://developer.mozilla.org/en-US/docs/Web/API/FileReader) or attaching it to a [FormData object](https://developer.mozilla.org/en-US/docs/Web/API/FormData/Using_FormData_Objects)). No preview of the file contents will be shown by default, and `read-started` and `read-finished` will not be emitted since the component is not reading the file.
        </pre>
      </template>
      <pf-file-upload
        id="simple-file"
        v-model="simpleFile"
        v-model:filename="simpleFileFilename"
        filename-placeholder="Drag and drop a file or upload one"
        browse-button-text="Upload"
      />
    </story-canvas>

    <story-canvas title="Custom file preview">
      <template #intro>
        <pre v-md>
          Regardless of `type`, the preview area (the textarea, or any future implementations of default previews for other types) can be removed by passing `hide-default-preview`, and a custom one can be rendered in the default slot.
        </pre>
      </template>
      <pf-file-upload
        id="customized-preview-file"
        v-model="customPreviewFile"
        v-model:filename="customPreviewFilename"
        filename-placeholder="Drag and drop a file or upload one"
        hide-default-preview
        browse-button-text="Upload"
      >
        <div v-if="customPreviewFile && typeof customPreviewFile !== 'string'">
          <file-icon width="2em" height="2em" /> Custom preview here for your {{ customPreviewFile.size }}-byte file
          named {{ customPreviewFile.name }}
        </div>
      </pf-file-upload>
    </story-canvas>

    <story-canvas title="Custom file upload">
      <template #intro>
        <pre v-md>
          `pf-file-upload` is a thin wrapper around the `pf-file-upload-field` presentational component. If you need to implement your own logic for accepting files, you can instead render a `pf-file-upload-field` directly, which does not handle files and requires additional props and events (e.g. `browse-button-click`, `clear-button-click`, `drag-active`).

          Note that the `loading` prop is styled to position the spinner dead center above the entire component, so it should not be used with `hide-default-preview` unless a custom empty-state preview is provided via the default slot. The below example prevents `loading` and `hide-default-preview` from being used at the same time. You can always provide your own spinner as part of the default slot!
        </pre>
      </template>
      <div>
        <pf-checkbox v-for="(_, key) in custom" :id="key" :key="key" v-model="custom[key]" :name="key" :label="key" />
        <br />
        <pf-file-upload-field
          id="custom-file-upload-example"
          v-model="customValue"
          type="text"
          :filename="custom.filename ? 'example-filename.txt' : ''"
          filename-placeholder="Do something custom with this!"
          :browse-button-disabled="custom.browseButtonDisabled"
          :clear-button-disabled="custom.clearButtonDisabled"
          :loading="custom.loading"
          :drag-active="custom.dragActive"
          :hide-default-preview="custom.hideDefaultPreview"
          browse-button-text="Upload"
          :browse-button-attrs="{ 'aria-describedby': custom.hasHelperText ? 'custom-upload-helpText' : undefined }"
          :textarea-placeholder="custom.hasPlaceholderText ? 'File preview' : ''"
          @browse-button-click="alert('Browse button clicked!')"
          @clear-button-click="alert('Clear button clicked!')"
        >
          <div v-if="custom.hasCustomFilePreview">
            (A custom preview of the uploaded file can be passed in the default slot)
          </div>
          <pf-file-upload-helper-text v-if="custom.hasHelperText">
            <pf-helper-text>
              <pf-helper-text-item id="custom-upload-helpText">Upload a CSV file</pf-helper-text-item>
            </pf-helper-text>
          </pf-file-upload-helper-text>
        </pf-file-upload-field>
      </div>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import { reactive, ref, watch } from 'vue';
import FileIcon from '@vue-patternfly/icons/file-icon';
import type { FileRejection } from '@vue-patternfly/core/components/FileUpload/FileUpload.vue';

const simpleText = ref<string | File | null>('');
const simpleTextFilename = ref<string | null>('');

const helperText = ref<string | File | null>('');
const helperTextFilename = ref<string | null>('');

const editsText = ref<string | File | null>('');
const editsFilename = ref<string | null>('');

const restrictedText = ref<string | File | null>('');
const restrictedFilename = ref<string | null>('');
const restrictedRejected = ref(false);
const restrictedMessage = ref('Must be a CSV file no larger than 1 KB');

function onRestrictedRejected(rejections: FileRejection[]) {
  const error = rejections[0].errors[0];
  if (error.code === 'file-too-large') {
    restrictedMessage.value = 'File is too big';
  } else if (error.code === 'file-invalid-type') {
    restrictedMessage.value = 'File is not a CSV file';
  }
  restrictedText.value = '';
  restrictedFilename.value = '';
  restrictedRejected.value = true;
}

const simpleFile = ref<string | File | null>(null);
const simpleFileFilename = ref<string | null>('');

const customPreviewFile = ref<string | File | null>(null);
const customPreviewFilename = ref<string | null>('');

const customValue = ref<string | File | null>('');
const custom = reactive({
  filename: false,
  browseButtonDisabled: true,
  clearButtonDisabled: true,
  dragActive: false,
  loading: false,
  hideDefaultPreview: false,
  hasCustomFilePreview: false,
  hasHelperText: false,
  hasPlaceholderText: false,
});

// loading and hideDefaultPreview should not be used at the same time, see the notes above this example
watch(
  () => custom.loading,
  loading => loading && (custom.hideDefaultPreview = false),
);
watch(
  () => custom.hideDefaultPreview,
  hide => hide && (custom.loading = false),
);

function alert(message: string) {
  window.alert(message);
}
</script>
