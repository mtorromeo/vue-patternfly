<template>
  <doc-page title="File Upload">
    <template #description>
      A <b>simple file upload</b> component allows the users to upload a single file into the browser. This is primarily used for uploading and previewing text files, but other file types will also be accepted.
    </template>

    <template #apidocs>
      <component-info src="packages/core/src/components/FielUpload.vue" />
    </template>

    <story-canvas title="Simple text file">
      <pf-file-upload :data-types="['text/plain']" />
    </story-canvas>

    <story-canvas title="Custom file preview">
      <pf-file-upload browse-button-text="Upload" hide-default-preview @file-input-change="file = $event">
        <div v-if="file">
          <upload-icon />
          Custom preview here for your {{ file.size }}-byte file named {{ file.name }}
        </div>
      </pf-file-upload>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import { ref, type Ref } from "vue";
import UploadIcon from '@vue-patternfly/icons/upload-icon';

const file: Ref<File | null> = ref(null);
</script>
